# Feladatlista — hol hiányzik a személyre szóló elemzés

> **Módszer.** Három különböző ember (1989-03-15 11:00 nő · 1962-11-07 05:30 férfi ·
> 2001-07-22 21:15 nő, mindhárman párral) teljes profilját kiszámoltuk, és szekciónként,
> tételenként összevetettük a megjelenő szövegeket. Ami **mindhárom embernél szó szerint
> azonos**, az általános magyarázat, nem személyre szóló elemzés. A gyanús egybeeséseket
> külön, a számítási maggal is ellenőriztük (lásd „Ellenőrzött nem-hibák").
> Dátum: 2026-09-08.

## Összkép

| Állapot | Szekciók |
|---|---|
| **Személyre szóló** (az értelmezés az adatokkal változik) | Házak · A bolygók jelentése · A képlet szerkezete · Sorsrészek és időurak · Védikus · Kínai · Numerológia · Pitagorasz-négyzet · Sorsmátrix · Születési kártyák · További naptárrendszerek · A születés napja szerinti · Human Design · Gene Keys · A hagyomány nedvei · Fényszög-alakzatok · Állócsillagok · Tranzitok · Angyal-horoszkóp · Kronobiológia (fényviszonyok) |
| **Részben** — van személyes rész, de kulcstételek általánosak | Nyugati asztrológia · Hold és holdnaptár · Hol tartasz most · Éves égi kép · Draconikus/Vertex · Csakraanalízis · Fogantatási · Magyar népi · Bioritmus · Koreai/japán · Szinasztria · Összegzés |
| **Szándékosan nem születési adatból dolgozik** | A belső órád (kérdőíves mérés — ez így helyes) |

## Feladatok — fontossági sorrendben

### 1. 🔴 Születési holdfázis: hiányzik az értelmezés (HIBA)
**Szekció:** Hold és holdnaptár · **Kód:** `core/profile.js` ~780. sor
A sor `pd ? pd.text : ''` — a fázis-leírás mindhárom embernél **üres**, pedig a kód
keres hozzá szöveget. Vagy nincs meg az adat, vagy rossz a kulcs. A születési holdfázis
klasszikus személyes mutató (8 fázis), és a fejléc-kártyán is szerepel. *Olcsó, nagy hatású.*

### 2. 🔴 Éves profekció: csak a ház és a jegy, jelentés nélkül
**Szekció:** Hol tartasz most
„2. ház – Oroszlán" + egy általános mondat a technikáról. Ez a leginkább olvasott
„mi vár rám idén" tétel, és nem mondja el, mit jelent **ennek** a háznak az aktiválása,
és milyen állapotban van az **év ura** a képletben. A sorsrészeknél már kidolgozott
Valens-féle olvasat (ur állása, angularitás, méltóság) ide közvetlenül átvihető.
*Kutatás: docs/23 részben lefedi; profekció-specifikus forrás (Valens IV, Brennan) kell.*

### 3. 🟠 Szolár és progressziók: pozíció van, olvasat nincs
**Szekció:** Éves égi képed
„A szolár Hold: Bika · 4. ház" + általános mondat („az év érzelmi alaphangja…"), a
szekunder progresszió bekezdése tisztán módszertani. Kell: a szolár Hold jegy+ház
szerinti jelentése, a szolár aszcendens, és a progresszív Hold jegyének olvasata
(a progresszív Hold ~2,5 évente vált — ez a legszemélyesebb időzítő).

### 4. 🟠 Nyugati asztrológia: három alaptétel általános
**Szekció:** Nyugati asztrológia
- **MC (X. ház csúcsa)** — „A hivatás… pontja": nem mondja el, mit jelent az MC az adott jegyben.
- **Temperamentum** — „Flegmatikus" + a nedvtan definíciója; hiányzik, hogy *miért* az
  (elemarány), és mit jelent a mindennapokban.
- **Holdjegy** — csak átirányít a bolygó-kártyára; egy egysoros lényeg ide is kell.

### 5. 🟠 Csakraanalízis: a kontúrtípus neve ott van, jelentése nincs
**Szekció:** Kronobiológiai pszichogenetika
A tétel címe személyes („Fizikai kontúr — Érzékeny kolerikus"), a szöveg viszont a
kontúr általános definíciója. A 6 + 6 + 10 típusnévhez nincs leírás. *Kutatás:
docs/18 a forrás (Zsazskov); a típusleírásokat onnan kell kiemelni, nem kitalálni.*

### 6. 🟡 Vertex: pozíció + történet, értelmezés nélkül
**Szekció:** Draconikus képlet, Vertex, aszteroidák
„25° 45' Skorpió" + Johndro/Jayne története. Kell a Vertex jegy és ház szerinti olvasata.
*Kutatás szükséges: modern pont, vékony források — docs/25 jelzi.*

### 7. 🟡 Fogantatási horoszkóp: a prenatális lunáció csak dátum
**Szekció:** Fogantatási horoszkóp
„A születésed előtti utolsó újhold: 1989…" + egy mondat, hogy a hagyomány érzékeny
pontnak tekinti. Kell: újhold vagy telihold volt-e (más a jelentése), melyik jegyben,
és mit mond róla a forrás (docs/06 a kiindulás).

### 8. 🟡 Gene Keys tételsorok: a szféra általános szövege áll a kulcs helyett
**Szekció:** Gene Keys
A részletes kártyák személyesek, de a felső tételsorok (ezek mennek nyomtatásba és
a lényeg-chipekbe) a *szféra* általános leírását hozzák. A kulcs egysoros ajándék-mondata
kerüljön oda. *Olcsó.*

### 9. 🟡 Bioritmus: a mai fázisoknak nincs egysoros olvasata
**Szekció:** Bioritmus
A görbe és a százalékok személyesek, de nincs mondat arról, mit jelent a mai állás
(pl. „fizikai csúcs, érzelmi mélypont"). A cáfolt-elmélet figyelmeztetés maradjon.

### 10. 🟢 Koreai/japán: vietnami zodiákus — csak a rendszer leírása
Állatonként egy mondat hiányzik. *Alacsony prioritás.*

### 11. 🟢 Magyar népi: a holdhoz fűződő néphit csak növő/fogyó
Két kulcs van (`moonLore`), ezért három növő holdnál született ember ugyanazt kapja.
Ha a forrásban van fázisonkénti (újhold/telihold) anyag, finomítható. *Alacsony.*

### 12. ⚪ Ellenőrizendő: szinasztria házátfedés
Mindhárom párnál ugyanaz a házszöveg jött ki („A hétköznapok háza…"). A kód házanként
más szöveget ad, tehát vagy véletlen (mindhárom Nap a partner 6. házába esett), vagy
a házszámítás a partner képletén nem fut. *Egy negyedik párral újra kell futtatni.*

## Ellenőrzött nem-hibák (gyanús egybeesések, amelyek valódinak bizonyultak)

- **Human Design:** mindhárom ember Manifesztáló Generátor, érzelmi tekintéllyel.
  Kontrolldátumokkal (1975, 1998, 1950) Generátor / Generátor / Projektor jön ki —
  a motor jó, ez véletlen.
- **Pitagorasz-négyzet:** az „Egészség 4 — 1 db" és „Gyakorlatiasság 6 — 1 db" mindhárom
  dátumnál azonos. Kézzel újraszámolva (munkaszámok: 36/9/34/7, 27/9/13/4, 14/5/33/6 a
  2000 utáni szabállyal) valóban mindhárman egy-egy 4-est és 6-ost kapnak.
- **Csakraanalízis kontúrnevek:** a forrástáblákban 6/6/10 különböző típus van, a három
  ember markerei (14/2/10, 1/22/25, 9/31/18) történetesen azonos típusú sorokra esnek.

## Ami rendben van, és nem kell hozzányúlni

- Tájékoztató sorok érték nélküli szöveggel („Elem és minőség: Víz · Változó · Jin",
  „Uralkodó bolygó: Neptunusz", névnapok, héber dátum) — ezek adatok, nem elemzések.
- Módszertani magyarázó sorok („Hogyan olvasd ezt", „Mit mutat ez a lista", „A kilenc
  graha", „Méltóságpontok") — szándékosan azonosak mindenkinél.
- A mai naptól függő tételek („Mai holdfázis", „Most retrográd", „Ma névnapja van") —
  mindenkinek ugyanazok, mert a napról szólnak, nem a személyről.

## Állapot (2026-09-08, este)

| # | Tétel | Állapot | Hol |
|---|---|---|---|
| 1 | Születési holdfázis üres szövege | ✅ kész — kulcs-eltérés (`novekvo-sarlo` vs `novekvo_sarlo`) javítva, Holdkor személyes olvasattal | `core/profile.js` buildMoonSection |
| 2 | Éves profekció | ✅ kész — az év ura natális állapota (méltóság, egészjegyes ház, szekta, kontaktok), bolygók a profektált jegyben, tranzitok, havi profekció, Nap/Hold-profekció; idő nélkül Nap-profekció | `buildProfection`, docs/27 |
| 3 | Szolár és progressziók | ✅ kész — szolár ASC jegye + ura + születési háza, születési bolygó a szolár sarkon, szolár Hold háza/jegye, progresszív Hold jegye + háza + jegyváltás iránya | `buildAnnual`, `data/annual.js`, docs/28 |
| 4 | MC, Temperamentum, Holdjegy | ✅ kész — Lilly/Greenbaum nedvtani pontozás, MC jegye + ura háza + bolygó az MC-n, Holdjegy személyes szövege | `buildTemperament`, `mcText`, docs/29 |
| 5 | Csakraanalízis kontúrtípusok | ✅ kész — 22 típusleírás (saját, jelölve) + a két csakraérték sávokkal | `data/hvd.js typeText`, docs/18 §11 |
| 6 | Vertex | ✅ kész — jegy a Deszcendenssel szemben, ház, bolygó a tengelyen, Anti-Vertex | `buildExtras`, `HDATA.vertex`, docs/30 |
| 7 | Prenatális lunáció | ✅ kész — fok (Ptolemaiosz-szabály teliholdnál), ház, ura + méltóság + kontaktok, határúr, bolygó a fokon, hyleg-jelzés | `buildConception`, `HDATA.prenatal`, docs/30 |
| 8 | Gene Keys tételsorok | ✅ kész — a saját kulcs ajándék/árnyék szövege és a vonal, a szféra leírása zárójelben | `buildGeneKeys` |
| 9 | Bioritmus mai olvasat | ✅ kész — „A mai állásod" sor a három ciklussal, cáfoltság jelezve | buildChrono bioritmus rész |
| 10 | Vietnami zodiákus | ✅ kész — 12 állat saját szövege (Wikipedia: Vietnamese zodiac) | `data/eastern.js vietnamese.animalText` |
| 11 | Népi holdhiedelem | ✅ kész — a tétel értéke a saját holdállás (növő/fogyó, holdkor), a szöveg ehhez kötve; a forrás (docs/08) csak 4 fázist ismer, finomabb bontás nincs | buildHungarian |
| 12 | Szinasztria házátfedés | ✅ ellenőrizve, nem hiba — két új párral (1985-08-20, 1970-02-03) 8-8 különböző házsor jött ki | — |

Külön: a node-os tesztcsomagok (hd_test, gk_test, lots_test, extras_test, dosha_test) még mindig nincsenek a repóban — `tests/` alá újra kell írni őket.
