# Essensplaner – Einrichtung

Die App ist eine Web-App. Sie läuft auf iPhone, iPad und Mac und muss nicht neu installiert werden.
Ohne Supabase-Daten läuft sie im **Testmodus**: Die Daten bleiben dann nur auf dem jeweiligen Gerät.

## 1. GitHub: App ins Netz stellen (kostenlos)
1. Auf github.com einen Account anlegen.
2. Oben rechts **+ → New repository** wählen, Name `essensplaner`, **Public**, dann **Create repository**.
3. **uploading an existing file** anklicken und alle Dateien aus diesem Ordner hineinziehen (`index.html`, `manifest.webmanifest`, `icon-*.png`). Danach **Commit changes**.
4. **Settings → Pages** öffnen, bei *Branch* `main` und `/ (root)` wählen, dann **Save**.
5. Nach 1–2 Minuten ist die App erreichbar unter `https://DEINNAME.github.io/essensplaner/`.

Ab hier kannst du die App schon im Testmodus ausprobieren.

## 2. Supabase: gemeinsame Datenbank (kostenlos)
1. Auf supabase.com **Start your project** wählen und dich mit **GitHub** anmelden.
2. **New project** anlegen: Name `essensplaner`, Region **Frankfurt (eu-central-1)**. Das Datenbank-Passwort kannst du dir einfach generieren lassen.
3. Links **SQL Editor** öffnen, den Inhalt von `supabase-setup.sql` einfügen und **Run** drücken.
4. **Familien-Zugang anlegen:** **Authentication → Users → Add user → Create new user**. Dort E-Mail und Passwort für die Familie eintragen und *Auto Confirm User* anhaken.
5. **Wichtig, Registrierung abschalten:** Unter **Authentication → Sign In / Providers** die Option **„Allow new users to sign up“ ausschalten**. Sonst könnte sich jeder Fremde einen eigenen Zugang anlegen.
6. **Project Settings → API Keys** (bzw. *Data API*) öffnen und die **Project URL** sowie den **anon/publishable key** kopieren.
7. In `index.html` oben bei `CONFIG` beide Werte eintragen und die Datei auf GitHub ersetzen (Datei öffnen → Stift-Symbol, oder neu hochladen).

Der anon-Key darf öffentlich im Code stehen. Die Daten sind trotzdem geschützt, weil nur der angemeldete Familien-Zugang lesen und schreiben darf.

**Hinweis:** Kostenlose Supabase-Projekte werden pausiert, wenn sie etwa eine Woche lang gar nicht genutzt werden. Bei normaler Nutzung passiert das nicht. Falls doch, im Supabase-Dashboard auf **Restore** klicken.

## 3. Auf den Geräten installieren
- **iPhone/iPad:** Die Seite in Safari öffnen, dann **Teilen → Zum Home-Bildschirm**.
- **Mac:** Die Seite in Safari öffnen, dann **Ablage → Zum Dock hinzufügen**.
- Einmal mit dem Familien-Zugang anmelden. Die Anmeldung bleibt gespeichert.

## 4. Einkaufsliste → geteilte Erinnerungen-Liste
**Liste anlegen (einmalig):** In der Erinnerungen-App eine Liste **„Einkauf“** anlegen, als Listentyp **Einkaufsliste** wählen und sie mit der Familie teilen.

**Kurzbefehl anlegen (auf jedem Gerät, das senden soll):**
1. Die App **Kurzbefehle** öffnen, **+** tippen und den Kurzbefehl **„Einkaufsliste“** nennen. Der Name muss genau so lauten wie in den App-Einstellungen (⚙︎).
2. Aktion **„Text teilen“** hinzufügen: *Kurzbefehl-Eingabe* teilen nach **Neue Zeilen**.
3. Aktion **„Wiederholen mit jedem Objekt“** hinzufügen, für *Geteilter Text*.
4. Innerhalb der Wiederholung die Aktion **„Erinnerung hinzufügen“** einfügen: *Wiederholungsobjekt* in der Liste **„Einkauf“**.
5. Fertig. Beim ersten Mal fragt iOS nach der Erlaubnis für Erinnerungen und Kurzbefehle; einfach erlauben.

Kurzbefehle werden per iCloud synchronisiert. Wenn du den Kurzbefehl auf dem iPhone anlegst, ist er also auch auf iPad und Mac vorhanden.

In der App auf **Einkauf** tippen, abhaken was schon zu Hause ist, dann **An Erinnerungen senden**. Jede Zutat landet als eigener, abhakbarer Eintrag in der Liste.

## 5. Sicherung & Gerichte per Tabelle einlesen
Beides findest du in der App unter **⚙︎ Einstellungen**.

**Sicherung:** **Sicherung speichern** lädt eine Datei mit allen Gerichten, Wochenplänen und gespeicherten Zutaten herunter. Lege sie am besten in iCloud Drive ab, z. B. einmal im Monat. **Sicherung laden** bietet dann die Wahl:
- **Ergänzen:** Nichts wird gelöscht.
- **Alles ersetzen:** Die aktuellen Daten werden durch die Sicherung ersetzt.

**Gerichte per CSV:** Mit **Vorlage laden** bekommst du die Datei `Essensplaner-Vorlage.csv`. Öffne sie in Excel oder Numbers, trage eine Zeile pro Gericht ein und speichere sie wieder als CSV. Danach liest **CSV einlesen** sie ein. Gerichte, deren Name schon existiert, werden übersprungen.

| Spalte | Beispiel | Hinweis |
|---|---|---|
| Name | Spaghetti Bolognese | Pflicht |
| Kategorien | Pasta, Fleisch, Italienisch | durch Komma getrennt |
| Zutaten | 500 g Hackfleisch \| 1 Dose Tomaten \| 50 g Parmesan (optional) | durch `\|` getrennt (Mac: ⌥ + 7); Format „Menge Einheit Name“; „(optional)“ am Ende markiert eine optionale Zutat |
| Gewürze | 1 TL Oregano \| Salz \| Pfeffer | wie Zutaten |
| Rezeptbuch / Seite | Kochbuch Oma / 45 | optional |
| Rezept-Link | https://… | optional |
| Selbst erfasst | ja / nein | bei „ja“ werden Buch, Seite und Link ignoriert |

Bekannte Einheiten: g, kg, ml, l, Stk, EL, TL, Prise, Pck, Dose, Bund, Zehe, Scheibe. Statt `|` geht auch ein Zeilenumbruch in der Zelle (Excel: Alt + Enter, Numbers: ⌥ + Enter).

## 6. Notvorrat
Der Reiter **Notvorrat** orientiert sich an der Checkliste des BBK (Vorrat für 10 Tage).
- **Lebensmittel:** Pro BBK-Gruppe siehst du, wie viel Soll (je nach Personen und Tagen) und wie viel Ist vorhanden ist. Damit eine Packung mitzählt, gibst du den Inhalt je Einheit an (z. B. Dose = 400 g) oder erfasst den Artikel direkt in kg bzw. l.
- **Ausstattung:** Hausapotheke, Hygiene, Energieausfall, Brandschutz, Dokumente & Notgepäck. Die gestrichelten Vorschläge legst du mit einem Antippen an.
- **Chargen:** Ein Artikel kann mehrere Einträge mit eigener Menge und eigenem MHD haben. Was bald abläuft, steht oben. Mit **−1** buchst du einen Artikel als verbraucht aus, mit 🛒 kommt er auf die Einkaufsliste.
- **Barcode:** **📷 Scan** öffnet die Kamera. Ist der Barcode schon bekannt, öffnet sich direkt der Artikel. Sonst schlägt die App den Produktnamen über Open Food Facts nach, und du legst einen neuen Artikel an oder ordnest den Barcode einem vorhandenen Artikel zu.
- **Einstellungen:** Personen, Tage und die Vorwarnzeit für Ablaufdaten tippst du oben an. Sie gelten für die ganze Familie.
