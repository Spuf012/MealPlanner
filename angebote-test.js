// ── TEST: REWE-Angebote (wird nach dem Test wieder gelöscht) ──────────────
// Quelle: rewe.de, REWE Center Im Dammwald 5, 61381 Friedrichsdorf (Markt 240731)
// Stand: KW 47, 16.11.–22.11.2026 – einmalig von Hand abgerufen, NICHT automatisch.
// Zum Entfernen: diese Datei löschen + die 3 mit „TEST-ANGEBOTE“ markierten Stellen in index.html.

export const ANGEBOTE_STAND = { markt: 'REWE Center Im Dammwald, Friedrichsdorf', von: '2026-11-16', bis: '2026-11-22' };

// [Kategorie, Produkt, Packung/Grundpreis, Preis, Hinweis]
const RAW = [
  ['Obst & Gemüse', 'Broccoli', '500 g (1 kg = 1,98 €)', 0.99],
  ['Obst & Gemüse', 'Bratpaprika', '200 g (1 kg = 4,95 €)', 0.99, 'Mi–Sa'],
  ['Obst & Gemüse', 'Snack Äpfel Gala', '1-kg-Schale', 1.99],
  ['Obst & Gemüse', 'Bio Romana Salatherzen', '2 St.', 1.59],
  ['Obst & Gemüse', 'Honeypomelo', 'je St.', 2.29],
  ['Obst & Gemüse', 'Chicorée', '500 g (1 kg = 3,18 €)', 1.59],
  ['Obst & Gemüse', 'Baby Spinat', '250 g (1 kg = 7,16 €)', 1.79],
  ['Obst & Gemüse', 'Grünkohl', '1 kg = 3,59 €', 2.69],
  ['Obst & Gemüse', 'Tafelbirnen', '1 kg', 2.79],
  ['Obst & Gemüse', 'Radieschen', 'je Bund', 0.55],
  ['Obst & Gemüse', 'Clementinen', '1-kg-Netz', 2.49],
  ['Obst & Gemüse', 'Mango, essreif', 'je St.', 1.79],
  ['Obst & Gemüse', 'Avocado »Hass«', 'je St.', 0.99],
  ['Obst & Gemüse', 'Bio Orangen', '1-kg-Netz', 1.99],
  ['Obst & Gemüse', 'Aubergine', 'je St.', 0.69],
  ['Obst & Gemüse', 'Bio Bananen', '1 kg', 1.79],
  ['Obst & Gemüse', 'Bio Speisekartoffeln Drillinge (festkochend)', '650 g (1 kg = 2,60 €)', 1.69],
  ['Obst & Gemüse', 'Passionsfrucht', 'je St.', 0.59],
  ['Obst & Gemüse', 'REWE Bio Zitronen', '500-g-Netz', null, 'Bonus 0,70 €'],
  ['Fleisch & Fisch', 'Frisches Hähnchen-Innenbrustfilet', '350 g (1 kg = 14,26 €)', 4.99],
  ['Fleisch & Fisch', 'Frisches Puten-Geschnetzeltes', '400 g (1 kg = 14,98 €)', 5.99],
  ['Fleisch & Fisch', 'Frische Puten-Schnitzel XXL', '800 g (1 kg = 11,24 €)', 8.99],
  ['Fleisch & Fisch', 'Frische Hähnchen-Schenkel XXL', '2000 g (1 kg = 3,33 €)', 6.66],
  ['Fleisch & Fisch', 'Freiland-Hähnchen Nature & Respect', '1 kg', 7.99],
  ['Fleisch & Fisch', 'Hackfleisch gemischt', '250 g (1 kg = 9,96 €)', 2.49],
  ['Fleisch & Fisch', 'REWE Bio Rinder-Hackfleisch', '250 g (1 kg = 19,96 €)', 4.99],
  ['Fleisch & Fisch', 'Theke: Schweine-Kotelett', 'je 100 g', 0.59],
  ['Fleisch & Fisch', 'Theke: Kasseler Nacken', 'je 100 g', 1.19],
  ['Fleisch & Fisch', 'Theke: Puten-Brust oder -Schnitzel', 'je 100 g', 1.39],
  ['Fleisch & Fisch', 'Theke: Hähnchengyros-Pfanne', 'je 100 g', 1.49],
  ['Fleisch & Fisch', 'Theke: Lamm-Kotelett', 'je 100 g', 1.99],
  ['Fleisch & Fisch', 'Theke: Seelachs-Filet', 'je 100 g', 1.89],
  ['Fleisch & Fisch', 'Theke: Forelle', 'je 100 g', 1.29],
  ['Fleisch & Fisch', 'Theke: Garnelen gegart', 'je 100 g', 1.79],
  ['Fleisch & Fisch', 'Costa Pacific Prawns (TK)', '215 g (1 kg = 37,16 €)', 7.99],
  ['Fleisch & Fisch', 'Zimmermann Münchner Weißwürste', '5 × 60 g', 2.69],
  ['Fleisch & Fisch', 'Yayla Sucuk', '250 g', 3.29],
  ['Kühlung', 'Landliebe Butter', '250 g (1 kg = 5,16 €)', 1.29],
  ['Kühlung', 'Philadelphia Natur', '195 g', 1.11],
  ['Kühlung', 'Milram Müritzer Scheiben', '150 g', 1.49],
  ['Kühlung', 'Grünländer Scheiben', '140 g', 1.49],
  ['Kühlung', 'Le Rustique Camembert', '250 g', 2.79],
  ['Kühlung', 'Halloumi Marka Hellas', '225 g', 2.29],
  ['Kühlung', 'REWE Feine Welt Burrata', '250 g', 1.49],
  ['Kühlung', 'REWE Feine Welt Girasoli', '250 g', 2.29],
  ['Kühlung', 'Henglein Schupfnudeln', '500 g', 1.89],
  ['Kühlung', 'Tante Fanny Flammkuchenteig', '260 g', 1.49],
  ['Kühlung', 'Tante Fanny Quiche- und Tarteteig', '300 g', 1.49],
  ['Kühlung', 'Rama Cremefine 100 % pflanzlich', '200 ml', 0.99],
  ['Kühlung', 'Omira Minus L Vollmilch', '1 l', 1.29],
  ['Kühlung', 'Oatly Haferdrink Barista', '1 l', 1.79],
  ['Kühlung', 'Gutfried Hähnchenbrust (Aufschnitt)', '80 g', 1.49],
  ['Kühlung', 'Billie Green vegane Fleischalternative', '180 g', 2.49],
  ['Kühlung', 'Vivera veganes Schnitzel', '200 g', 2.49],
  ['Kühlung', 'Kefir zum Löffeln', '500 g', 0.75],
  ['Fertig & TK', 'Klossteig Thüringer Art', '750 g (1 kg = 2,12 €)', 1.59],
  ['Fertig & TK', 'Popp Kartoffel- oder Coleslaw-Salat', '400 g', 1.89],
  ['Fertig & TK', 'Bonduelle Kopfsalat', '175 g', 1.79],
  ['Fertig & TK', 'Winter Mix Salatschale', '500 g', 2.99],
  ['Fertig & TK', 'Möhrenstifte', '200 g', 0.79],
  ['Fertig & TK', 'Noa Hummus', '175 g', 1.69],
  ['Fertig & TK', 'Iglo Hühner Frikassee (TK)', '425 g', 2.99],
  ['Fertig & TK', 'Iglo Tagliatelle Pilzpfanne (TK)', '450 g', 2.99],
  ['Vorrat', 'Barilla Pasta, versch. Sorten', '500 g (1 kg = 1,76 €)', 0.88, 'nur Do–Sa'],
  ['Vorrat', 'Knorr Gemüse Bouillon', '1 Glas', 1.49],
  ['Vorrat', 'Löwensenf extra scharf', '250 ml', 1.49],
  ['Vorrat', 'Lukull Sauce Hollandaise', '250 ml', 1.49],
  ['Vorrat', 'Erasco Suppe', '350 ml', 1.49],
  ['Vorrat', 'Just Spices Italien Allrounder', '57 g', 2.99],
  ['Brot', 'Ciabatta', '300 g', 0.99],
  ['Brot', 'Mehrkornbrot / Vollkornbrot', '750 g', 1.99],
  ['Brot', 'Knack & Back Sonntags-Brötchen', '400 g', 1.49],
  ['Brot', 'Coppenrath & Wiese Goldstücke (TK)', '450 g', 1.49],
];

// Zuordnung Angebot → Zutat (Regex auf den Zutatennamen). „near“ = nur ähnlich, nicht gleich.
const MATCH = {
  'Broccoli': [/^brokkoli/],
  'Baby Spinat': [/^spinat/],
  'Bio Romana Salatherzen': [/^romana/, /^salat$/],
  'Avocado »Hass«': [/^avocado/],
  'Aubergine': [/^aubergine/],
  'Frisches Hähnchen-Innenbrustfilet': [/^hähnchenbrust/],
  'Theke: Garnelen gegart': [/^garnelen$/],
  'Costa Pacific Prawns (TK)': [/^garnelen/],
  'Landliebe Butter': [/^butter$/],
  'Tante Fanny Flammkuchenteig': [/^flammkuchenteig/],
  'Klossteig Thüringer Art': [/^kartoffelknödelteig/],
  'Barilla Pasta, versch. Sorten': [/^nudeln/],
  'Omira Minus L Vollmilch': [/^milch$/],
};
const NEAR = {
  'Frisches Puten-Geschnetzeltes': [[/^hähnchengeschnetzeltes/, 'Pute statt Hähnchen']],
  'Bratpaprika': [[/paprika/, 'Bratpaprika statt rote Paprika']],
  'Bio Speisekartoffeln Drillinge (festkochend)': [[/kartoffeln/, 'festkochend statt mehlig']],
  'Billie Green vegane Fleischalternative': [[/^veganes hack/, 'vegane Alternative, kein Hack']],
};

const OFFERS = RAW.map(([cat, name, pack, price, note]) => ({ cat, name, pack, price, note: note || '' }));
const norm = s => String(s || '').toLowerCase().trim();
const eur = n => n == null ? '–' : n.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
const perPiece = o => /je St\./.test(o.pack);

function qty(o, ing) {
  if (!perPiece(o)) return 1;
  const n = Number(String(ing.amount || '').replace(',', '.'));
  return (['', 'stk', 'stück'].includes(norm(ing.unit)) && n > 0) ? Math.ceil(n) : 1;
}

function scoreDish(d) {
  const ings = d.ingredients.filter(i => i.name);
  const hits = [], near = [];
  for (const ing of ings) {
    const n = norm(ing.name);
    const o = OFFERS.find(o => (MATCH[o.name] || []).some(r => r.test(n)));
    if (o) { hits.push({ ing, o, q: qty(o, ing) }); continue; }
    for (const o2 of OFFERS) {
      const nr = (NEAR[o2.name] || []).find(([r]) => r.test(n));
      if (nr) { near.push({ ing, o: o2, why: nr[1] }); break; }
    }
  }
  const req = ings.filter(i => !i.optional).length || 1;
  const reqHits = hits.filter(h => !h.ing.optional).length;
  const cost = hits.reduce((s, h) => s + (h.o.price || 0) * h.q, 0);
  return { d, hits, near, req, reqHits, cost, share: reqHits / req };
}

const CSS = `
.ang-card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:14px;margin-bottom:10px}
.ang-head{display:flex;align-items:baseline;gap:10px}
.ang-head b{flex:1;font-size:17px;cursor:pointer}
.ang-price{font-weight:700;font-size:17px;white-space:nowrap}
.ang-meta{font-size:13px;color:var(--muted);margin:2px 0 10px}
.ang-chips{display:flex;flex-wrap:wrap;gap:6px}
.ang-chip{background:var(--accent-soft);color:var(--accent);border-radius:999px;padding:4px 10px;font-size:13px;font-weight:600}
.ang-chip small{font-weight:500;opacity:.85}
.ang-chip.near{background:transparent;border:1px dashed var(--muted);color:var(--muted)}
.ang-chip.warn small{color:var(--danger);font-weight:700;opacity:1}
.ang-add{flex:none;border:0;background:var(--chip);border-radius:999px;padding:5px 11px;font-size:13px;font-weight:600;color:var(--accent)}
.ang-foot{display:flex;align-items:flex-end;gap:8px}.ang-foot .ang-chips{flex:1}
.ang-row{display:flex;align-items:center;gap:10px;padding:10px 14px;border-top:1px solid var(--line)}
.ang-row:first-child{border-top:0}
.ang-row .main{flex:1;min-width:0}
.ang-row .sub{font-size:13px;color:var(--muted)}
.ang-fit{display:inline-block;font-size:11px;font-weight:700;color:var(--accent);background:var(--accent-soft);border-radius:999px;padding:1px 7px;margin-left:6px;vertical-align:1px}
.ang-slots{display:grid;grid-template-columns:auto 1fr 1fr;gap:6px;align-items:center}
.ang-slots .d{font-size:14px;font-weight:600;padding-right:6px}
.ang-slots .d span{display:block;font-size:12px;color:var(--muted);font-weight:400}
.ang-slot{border:1px solid var(--line);background:var(--card);border-radius:10px;padding:8px;min-height:44px;font-size:13px;text-align:left}
.ang-slot.busy{color:var(--muted);background:var(--chip)}
.ang-slot.free{border-color:var(--accent);color:var(--accent);font-weight:600}
.ang-slots .past{opacity:.45}
`;
function ensureCss() { if (!document.getElementById('ang-css')) { const st = document.createElement('style'); st.id = 'ang-css'; st.textContent = CSS; document.head.appendChild(st); } }

const chip = (label, o, esc, cls = '') => `<span class="ang-chip ${cls}${o.note ? ' warn' : ''}">${esc(label)}${o.note ? ` <small>${esc(o.note)}</small>` : ''}</span>`;

export function viewAngebote(dishes, esc, filter = 'match') {
  ensureCss();
  const all = dishes.map(scoreDish);
  const scored = all.filter(s => s.hits.length)
    .sort((a, b) => (b.reqHits - a.reqHits) || (b.share - a.share) || (b.hits.length - a.hits.length));
  const nearOnly = all.filter(s => !s.hits.length && s.near.length);
  const fits = new Map();
  for (const s of all) for (const h of [...s.hits, ...s.near]) fits.set(h.o.name, (fits.get(h.o.name) || 0) + 1);

  let html = `<div class="wrap"><header class="top"><h1>Angebote</h1><span class="ang-chip" style="background:var(--chip);color:var(--danger)">TEST</span></header>
    <p class="hint" style="margin-top:-6px">REWE Center Im Dammwald · gültig 16.–22.11.</p>`;

  const card = s => {
    const opt = s.hits.filter(h => h.ing.optional).length;
    return `<div class="ang-card">
      <div class="ang-head"><b data-act="editdish" data-id="${s.d.id}">${esc(s.d.name)}</b><span class="ang-price">${eur(s.cost)}</span></div>
      <div class="ang-meta">${s.reqHits} von ${s.req} Zutaten im Angebot${opt ? ` · +${opt} optional` : ''}</div>
      <div class="ang-foot"><div class="ang-chips">${s.hits.map(h => chip(h.ing.name + (h.q > 1 ? ` ×${h.q}` : ''), h.o, esc)).join('')}${s.near.map(n => chip('≈ ' + n.ing.name, { note: '' }, esc, 'near')).join('')}</div>
      <button class="ang-add" data-act="ang-plan" data-id="${s.d.id}">+ Plan</button></div></div>`;
  };
  const top = scored.filter(s => s.reqHits >= 2 || s.share >= 0.5), rest = scored.filter(s => !top.includes(s));
  html += `<div class="group-title">Passt gut (${top.length})</div>` + top.map(card).join('');
  if (rest.length) html += `<details><summary>Weitere mit einzelnen Angebotszutaten (${rest.length})</summary>` + rest.map(card).join('') + `</details>`;
  if (nearOnly.length) html += `<details><summary>Nur ähnliche Angebote (${nearOnly.length})</summary>` + nearOnly.map(s => `<div class="ang-card">
      <div class="ang-head"><b data-act="editdish" data-id="${s.d.id}">${esc(s.d.name)}</b></div>
      <div class="ang-chips" style="margin-top:8px">${s.near.map(n => `<span class="ang-chip near">≈ ${esc(n.ing.name)} <small>${esc(n.why)}</small></span>`).join('')}</div></div>`).join('') + `</details>`;

  const cats = [...new Set(OFFERS.map(o => o.cat))];
  const nMatch = OFFERS.filter(o => fits.has(o.name)).length;
  const list = OFFERS.filter(o => filter === 'all' ? true : filter === 'match' ? fits.has(o.name) : o.cat === filter);
  html += `<div class="group-title">Angebote</div><div class="chips">` +
    [['match', `Passt (${nMatch})`], ['all', `Alle (${OFFERS.length})`], ...cats.map(c => [c, c])].map(([k, l]) =>
      `<button class="chip${filter === k ? ' on' : ''}" data-act="ang-filter" data-f="${esc(k)}">${esc(l)}</button>`).join('') + `</div>`;
  html += `<div class="list">` + list.map(o => `<div class="ang-row"><div class="main"><div>${esc(o.name)}${fits.has(o.name) ? `<span class="ang-fit">${fits.get(o.name)}× passend</span>` : ''}</div>
      <div class="sub">${esc(o.pack)}${o.note ? ' · <b style="color:var(--danger)">' + esc(o.note) + '</b>' : ''}</div></div>
      <b style="flex:none">${o.price == null ? '' : eur(o.price)}</b></div>`).join('') + `</div>`;
  return html + `<p class="hint">Preis = Summe der Angebotsartikel. Normalpreise liefert REWE meist nicht.</p></div>`;
}

// Auswahl Tag/Mahlzeit für „+ In Wochenplan“ (aktuelle Woche der App)
export function planSheetAngebote(dish, ctx) {
  const { esc, week, plan, entryNames, iso, addDays, fmtShort, DAYNAMES } = ctx;
  const today = iso(new Date());
  let rows = '';
  for (let i = 0; i < 7; i++) {
    const d = addDays(week, i), day = iso(d), past = day < today;
    rows += `<div class="d${past ? ' past' : ''}">${DAYNAMES[i].slice(0, 2)}<span>${fmtShort(d)}</span></div>` + ['mittag', 'abend'].map(slot => {
      const names = entryNames(plan[day + '|' + slot]);
      return names.length ? `<div class="ang-slot busy${past ? ' past' : ''}">${esc(names.join(', '))}</div>`
        : `<button class="ang-slot free${past ? ' past' : ''}" data-act="ang-slot" data-day="${day}" data-slot="${slot}" data-id="${dish.id}">+ ${slot === 'mittag' ? 'Mittag' : 'Abend'}</button>`;
    }).join('');
  }
  return `<div class="sheet"><div class="sheet-head"><span style="width:60px"></span><b>${esc(dish.name)}</b><button data-act="close">Fertig</button></div>
    <div class="sheet-body"><p class="hint" style="margin-top:0">Freien Platz wählen (belegte zum Ändern im Wochenplan antippen):</p>
    <div class="ang-slots"><span></span><div class="hint" style="margin:0">Mittag</div><div class="hint" style="margin:0">Abend</div>${rows}</div></div></div>`;
}
