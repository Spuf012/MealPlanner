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
  'Theke: Garnelen gegart': [/^garnelen/],
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
  'Rama Cremefine 100 % pflanzlich': [[/^sahne/, 'pflanzlicher Sahne-Ersatz']],
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

export function viewAngebote(dishes, esc) {
  const scored = dishes.map(scoreDish).filter(s => s.hits.length)
    .sort((a, b) => (b.reqHits - a.reqHits) || (b.share - a.share) || (b.hits.length - a.hits.length));
  const usedNames = new Set(scored.flatMap(s => s.hits.map(h => h.o.name)));
  const nearOnly = dishes.map(scoreDish).filter(s => !s.hits.length && s.near.length);

  let html = `<div class="wrap"><header class="top"><h1>Angebote <span style="font-size:13px;color:var(--danger);vertical-align:middle">TEST</span></h1></header>
    <div class="banner">${esc(ANGEBOTE_STAND.markt)} · 16.11.–22.11.<br>Testdaten, einmalig abgerufen – werden nicht aktualisiert.</div>`;

  html += `<div class="group-title">Vorschläge aus deinen Gerichten (${scored.length})</div><div class="list">` +
    scored.map(s => `<button class="row" data-act="editdish" data-id="${s.d.id}"><div class="main">
      <div>${esc(s.d.name)} <span class="opt-tag">${s.reqHits}/${s.req} Zutaten</span></div>
      <div class="sub" style="white-space:normal">${s.hits.map(h => `${esc(h.ing.name)}${h.ing.optional ? ' (opt.)' : ''} → ${esc(h.o.name)}${h.q > 1 ? ` ×${h.q}` : ''} ${eur(h.o.price)}${h.o.note ? ` <b>(${esc(h.o.note)})</b>` : ''}`).join('<br>')}
      ${s.near.map(n => `<br><i>≈ ${esc(n.ing.name)} → ${esc(n.o.name)} (${esc(n.why)})</i>`).join('')}</div></div>
      <b style="flex:none">${eur(s.cost)}</b></button>`).join('') + `</div>
    <p class="hint">Betrag = Summe der Angebotsartikel (eine Packung je Zutat, Stückware × Menge). Normalpreise liefert REWE meist nicht, daher keine Ersparnis.</p>`;

  if (nearOnly.length) html += `<div class="group-title">Nur ähnliche Angebote</div><div class="list">` +
    nearOnly.map(s => `<button class="row" data-act="editdish" data-id="${s.d.id}"><div class="main"><div>${esc(s.d.name)}</div>
      <div class="sub" style="white-space:normal">${s.near.map(n => `≈ ${esc(n.ing.name)} → ${esc(n.o.name)} ${eur(n.o.price)} (${esc(n.why)})`).join('<br>')}</div></div></button>`).join('') + `</div>`;

  const cats = [...new Set(OFFERS.map(o => o.cat))];
  html += `<div class="group-title">Alle Lebensmittel-Angebote (${OFFERS.length})</div>`;
  for (const c of cats) {
    html += `<p class="hint" style="margin-bottom:4px"><b>${esc(c)}</b></p><div class="list">` +
      OFFERS.filter(o => o.cat === c).map(o => `<div class="row"><div class="main"><div>${usedNames.has(o.name) ? '✅ ' : ''}${esc(o.name)}</div>
        <div class="sub">${esc(o.pack)}${o.note ? ' · ' + esc(o.note) : ''}</div></div><b style="flex:none">${o.price == null ? esc(o.note) : eur(o.price)}</b></div>`).join('') + `</div>`;
  }
  return html + `<p class="hint">✅ = passt zu mindestens einem deiner Gerichte.</p></div>`;
}
