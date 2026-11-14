// Essensplaner – Rezept-Import
// Ruft eine Rezeptseite ab und liest die strukturierten Rezeptdaten (schema.org/Recipe, JSON-LD) aus.
// Nur für angemeldete Nutzer (verify_jwt).
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

// keine internen Adressen abrufen
export function isBlockedHost(host: string): boolean {
  const h = host.toLowerCase().replace(/^\[|\]$/g, "");
  if (h === "localhost" || h.endsWith(".localhost") || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (h.includes(":")) return true; // IPv6-Literale
  const m = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (m) {
    const [a, b] = [Number(m[1]), Number(m[2])];
    return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168) || (a === 100 && b >= 64 && b <= 127) || a >= 224;
  }
  return false;
}

const typesOf = (o: any): string[] => { const t = o?.["@type"]; return (Array.isArray(t) ? t : [t]).map((x) => String(x)); };

export function findRecipe(node: any): any {
  if (!node || typeof node !== "object") return null;
  if (Array.isArray(node)) { for (const n of node) { const r = findRecipe(n); if (r) return r; } return null; }
  if (typesOf(node).some((t) => t === "Recipe" || t.endsWith("/Recipe"))) return node;
  for (const k of ["@graph", "mainEntity", "mainEntityOfPage", "itemListElement", "hasPart"]) {
    if (node[k]) { const r = findRecipe(node[k]); if (r) return r; }
  }
  return null;
}

export function clean(s: unknown): string {
  return String(s ?? "")
    .replace(/<br\s*\/?>/gi, "\n").replace(/<\/?(b|i|strong|em|span|a|u|sup|sub|small)\b[^>]*>/gi, "").replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/[ \t\r\f\v]+/g, " ").replace(/ *\n */g, "\n").trim();
}

export function stepsOf(ins: any): string[] {
  const out: string[] = [];
  const walk = (x: any) => {
    if (!x) return;
    if (typeof x === "string") { clean(x).split(/\n+/).map((s) => s.trim()).filter(Boolean).forEach((s) => out.push(s)); return; }
    if (Array.isArray(x)) { x.forEach(walk); return; }
    const t = typesOf(x);
    if (t.includes("HowToSection")) { if (x.name) out.push(`– ${clean(x.name)} –`); walk(x.itemListElement); return; }
    if (x.text) walk(String(x.text));
    else if (x.name) walk(String(x.name));
    else if (x.itemListElement) walk(x.itemListElement);
  };
  walk(ins);
  return out;
}

export function extract(html: string) {
  const re = /<script[^>]*type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    let raw = m[1].trim().replace(/^<!--|-->$/g, "");
    let data: any = null;
    try { data = JSON.parse(raw); } catch {
      try { data = JSON.parse(raw.replace(/[\u0000-\u001f]+/g, " ")); } catch { continue; }
    }
    const r = findRecipe(data);
    if (r) {
      const ing = (Array.isArray(r.recipeIngredient) ? r.recipeIngredient : Array.isArray(r.ingredients) ? r.ingredients : [])
        .map(clean).filter(Boolean);
      const ys = (Array.isArray(r.recipeYield) ? r.recipeYield : [r.recipeYield]).filter(Boolean).map(clean);
      const y = ys.sort((a, b) => b.length - a.length)[0];
      return { name: clean(r.name), ingredients: ing, steps: stepsOf(r.recipeInstructions), yield: y ? clean(y) : "" };
    }
  }
  return null;
}

async function fetchPage(start: URL): Promise<{ html: string; url: string }> {
  let u = start;
  for (let hop = 0; hop < 5; hop++) {
    if (!["http:", "https:"].includes(u.protocol) || isBlockedHost(u.hostname)) throw new Error("Link nicht erlaubt");
    const ctrl = new AbortController(); const timer = setTimeout(() => ctrl.abort(), 12000);
    const res = await fetch(u, {
      redirect: "manual", signal: ctrl.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
        "Accept": "text/html,application/xhtml+xml", "Accept-Language": "de-DE,de;q=0.9,en;q=0.5",
      },
    }).finally(() => clearTimeout(timer));
    if (res.status >= 300 && res.status < 400 && res.headers.get("location")) { u = new URL(res.headers.get("location")!, u); continue; }
    if (!res.ok) throw new Error(`Die Seite antwortet mit Fehler ${res.status}`);
    const html = (await res.text()).slice(0, 5_000_000);
    return { html, url: u.href };
  }
  throw new Error("Zu viele Weiterleitungen");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Nur POST" }, 405);
  // Nur angemeldete Nutzer (Familien-Zugang), nicht der öffentliche App-Schlüssel.
  // Die Signatur prüft Supabase bereits (verify_jwt); hier wird nur die Rolle kontrolliert.
  try {
    const token = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (payload.role !== "authenticated") return json({ error: "Bitte in der App anmelden." }, 403);
  } catch { return json({ error: "Bitte in der App anmelden." }, 403); }
  try {
    const { url } = await req.json();
    let u: URL;
    try { u = new URL(String(url).trim()); } catch { return json({ error: "Das ist kein gültiger Link." }, 400); }
    const page = await fetchPage(u);
    const recipe = extract(page.html);
    if (!recipe) return json({ error: "Auf dieser Seite wurden keine Rezeptdaten gefunden." }, 422);
    return json({ ...recipe, url: page.url });
  } catch (e) {
    const msg = (e as Error).name === "AbortError" ? "Die Seite hat zu lange gebraucht." : (e as Error).message;
    return json({ error: msg }, 502);
  }
});
