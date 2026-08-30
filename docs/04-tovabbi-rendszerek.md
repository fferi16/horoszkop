# További ajánlható rendszerek — kutatási referencia

> **Projekt:** Horoszkóp app — kiegészítő rendszerek a nyugati, kínai/koreai asztrológia és a kronobiológia mellé.
> **Cél:** referencia egy későbbi apphoz/tartalomgeneráláshoz. Minden rendszernél: eredet, számítási mód a születési adatból, típuslista táblázatban, rövid jellemzések.
> **Fontos elv:** ahol egy rendszer modern eredetű vagy tudományosan megalapozatlan, azt jelezzük — az appban is érdemes korrekt „szórakoztató/önismereti tartalom" címkével kezelni.

---

## 1. Védikus (hindu) asztrológia — Jyotish

### Eredet
A Jyotish („a fény tudománya") az ősi indiai védikus hagyomány része; alapszövegei (pl. *Brihat Parashara Hora Shastra*) több mint kétezer évre visszavezethető hagyományt kodifikálnak. Indiában a mai napig élő gyakorlat: párválasztásnál, névadásnál, időzítéseknél (muhurta) széles körben használják.

### Kulcskülönbség a nyugati asztrológiához képest: sziderikus zodiákus és ayanamsa
- A **nyugati (tropikus)** zodiákus a tavaszpontból indul (a Kos 0° = tavaszi napéjegyenlőség).
- A **védikus (sziderikus)** zodiákus a tényleges csillagképekhez (állócsillagokhoz) rögzített.
- A Föld tengelyprecessziója miatt a két rendszer folyamatosan távolodik egymástól; a különbség az **ayanamsa**. A leggyakrabban használt **Lahiri-ayanamsa** jelenleg kb. **24°** (évente ~50,3 ívmásodperccel nő).
- **Gyakorlati következmény:** a védikus jegy a nyugati dátumokhoz képest kb. 24 fokkal (≈ 24 nappal) „visszább" van — aki nyugati rendszerben Kos, az védikusban jó eséllyel Halak.

### Számítás a születési adatból
1. Születési dátum + pontos idő + hely → bolygópozíciók (efemerida, pl. Swiss Ephemeris).
2. Tropikus hosszúság − ayanamsa = sziderikus hosszúság.
3. Ebből adódik a **rashi** (Hold-jegy), a **lagna** (aszcendens, ehhez kell a pontos óra:perc), és a **nakshatra** (a Hold 13°20'-es holdháza).

### A Hold-jegy (rashi) központi szerepe
Míg a nyugati asztrológia a Nap-jegyet hangsúlyozza, a Jyotish-ban a **Hold jegye és nakshatrája az elsődleges** — az elme, az érzelmek és a mindennapi tapasztalás mutatója. A napi védikus „horoszkópok" is jellemzően Hold-jegyre készülnek. A 12 rashi neve: Mesha (Kos), Vrishabha (Bika), Mithuna (Ikrek), Karka (Rák), Simha (Oroszlán), Kanya (Szűz), Tula (Mérleg), Vrishchika (Skorpió), Dhanu (Nyilas), Makara (Bak), Kumbha (Vízöntő), Meena (Halak).

### A 27 nakshatra (holdház)
A zodiákus 27 × 13°20'-es szakasza; a születési nakshatra = amelyikben a Hold állt a születéskor. Mindegyikhez uralkodó bolygó (ez indítja a dasát), szimbólum és istenség tartozik.

| # | Nakshatra | Sziderikus tartomány | Uralkodó bolygó | Szimbólum / kulcstéma |
|---|-----------|---------------------|-----------------|----------------------|
| 1 | Ashwini | 0°00' Kos – 13°20' Kos | Ketu | lófej; gyógyítás, gyorsaság, kezdés |
| 2 | Bharani | 13°20' – 26°40' Kos | Vénusz | anyaöl; teherbírás, átalakulás |
| 3 | Krittika | 26°40' Kos – 10°00' Bika | Nap | penge/láng; tisztítás, élesség |
| 4 | Rohini | 10°00' – 23°20' Bika | Hold | szekér; termékenység, szépség, növekedés |
| 5 | Mrigashira | 23°20' Bika – 6°40' Ikrek | Mars | szarvasfej; keresés, kíváncsiság |
| 6 | Ardra | 6°40' – 20°00' Ikrek | Rahu | könnycsepp/vihar; intenzitás, megújulás |
| 7 | Punarvasu | 20°00' Ikrek – 3°20' Rák | Jupiter | tegez/visszatérés; megújulás, optimizmus |
| 8 | Pushya | 3°20' – 16°40' Rák | Szaturnusz | tehéntőgy/lótusz; táplálás, gondoskodás |
| 9 | Ashlesha | 16°40' – 30°00' Rák | Merkúr | kígyó; hipnotikus erő, mélység |
| 10 | Magha | 0°00' – 13°20' Oroszlán | Ketu | trónterem; ősök, méltóság, tekintély |
| 11 | Purva Phalguni | 13°20' – 26°40' Oroszlán | Vénusz | függőágy; élvezet, kreativitás, románc |
| 12 | Uttara Phalguni | 26°40' Oroszlán – 10°00' Szűz | Nap | ágy/szerződés; nagylelkűség, szövetségek |
| 13 | Hasta | 10°00' – 23°20' Szűz | Hold | kéz; ügyesség, kézművesség, gyógyító kéz |
| 14 | Chitra | 23°20' Szűz – 6°40' Mérleg | Mars | ragyogó ékkő; design, építés, karizma |
| 15 | Swati | 6°40' – 20°00' Mérleg | Rahu | szélben hajló hajtás; függetlenség, diplomácia |
| 16 | Vishakha | 20°00' Mérleg – 3°20' Skorpió | Jupiter | diadalív; célratörés, elszántság |
| 17 | Anuradha | 3°20' – 16°40' Skorpió | Szaturnusz | lótusz; barátság, odaadás, szervezés |
| 18 | Jyeshtha | 16°40' – 30°00' Skorpió | Merkúr | amulett/ernyő; szeniorátus, védelmező erő |
| 19 | Mula | 0°00' – 13°20' Nyilas | Ketu | gyökérköteg; gyökerekig hatolás, radikalitás |
| 20 | Purva Ashadha | 13°20' – 26°40' Nyilas | Vénusz | legyező/víz; legyőzhetetlenség, lelkesítés |
| 21 | Uttara Ashadha | 26°40' Nyilas – 10°00' Bak | Nap | elefántagyar; végső győzelem, kitartás |
| 22 | Shravana | 10°00' – 23°20' Bak | Hold | fül/három lábnyom; tanulás, hallgatás |
| 23 | Dhanishta | 23°20' Bak – 6°40' Vízöntő | Mars | dob; ritmus, bőség, hírnév |
| 24 | Shatabhisha | 6°40' – 20°00' Vízöntő | Rahu | üres kör / 100 gyógyító; gyógyítás, titkok |
| 25 | Purva Bhadrapada | 20°00' Vízöntő – 3°20' Halak | Jupiter | kétarcú ember; intenzív átalakulás, idealizmus |
| 26 | Uttara Bhadrapada | 3°20' – 16°40' Halak | Szaturnusz | mélységi kígyó; bölcsesség, nyugalom |
| 27 | Revati | 16°40' – 30°00' Halak | Merkúr | hal/dob; útmutatás, lezárás, együttérzés |

*(Egyes iskolák 28. nakshatraként az Abhijitet is számolják — app-célra a 27-es rendszer a standard.)*

### Dasa-rendszer (röviden)
A **Vimshottari dasa** 120 éves ciklusra osztja az életet, bolygó-periódusokra: Ketu 7, Vénusz 20, Nap 6, Hold 10, Mars 7, Rahu 18, Jupiter 16, Szaturnusz 19, Merkúr 17 év. **A kezdő dasát a születési nakshatra uralkodó bolygója adja**, és az indulási pontot a Hold nakshatrán belüli aránya határozza meg (időarányosan). A dasák al-periódusokra (bhukti/antardasa) bomlanak. App-szempontból: kiváló „életszakasz-idővonal" tartalom, tisztán számítható.

### Navamsa (D9)
A legfontosabb osztott térkép (varga): minden jegy 9 részre (3°20') osztva, így egy második, „finomfelbontású" horoszkóp jön ki. Hagyományosan a **házasság/partnerkapcsolat** és a lélek mélyebb erőinek térképe; a bolygó navamsa-beli helyzete a bolygó „valódi erejét" mutatja (pl. vargottama: azonos jegy a D1-ben és D9-ben = erős).

---

## 2. Maja asztrológia — Tzolkin

### Eredet
A **Tzolkin** a mezoamerikai maja civilizáció 260 napos szakrális naptára (a klasszikus korban, i.sz. 250–900 között már teljesen kiforrott, gyökerei korábbiak). A 260 nap = **20 napjegy × 13 szám (tone)** kombinációja; minden napnak egyedi „napjegy + szám" párja van, amely 260 naponta ismétlődik. A születési nap Tzolkin-jegye a maja hagyományban a személyiség és a sors hordozója. *(Megjegyzés: a népszerű „Dreamspell/13 holdas naptár" — José Argüelles, 1987 — modern átirat, nem azonos a hagyományos, guatemalai maja közösségekben ma is élő Tzolkin-számolással.)*

### Számítás a születési adatból
Napszámítás korrelációval: a Gergely-naptári dátumot Julián-napszámmá alakítjuk, majd a **GMT-korreláció (584283)** alapján kiszámoljuk a Tzolkin-pozíciót: `(JDN + eltolás) mod 260` → ebből napjegy (mod 20) és szám (mod 13). Csak dátum kell hozzá, születési idő nem. Tisztán, determinisztikusan programozható.

### A 20 napjegy (yukatéki nevekkel)
| # | Napjegy | Jelentés | Rövid jellemzés |
|---|---------|----------|-----------------|
| 1 | Imix | krokodil / őstenger | ősenergia, táplálás, kezdetek |
| 2 | Ik' | szél / lélegzet | kommunikáció, szellem, inspiráció |
| 3 | Ak'b'al | éjszaka / sötétség | intuíció, álmok, belső tudás |
| 4 | K'an | mag / kukorica | bőség, növekedési potenciál |
| 5 | Chikchan | kígyó | életerő, ösztön, karizma |
| 6 | Kimi | halál / átalakulás | elengedés, újjászületés, ősök |
| 7 | Manik' | szarvas / kéz | gyógyítás, kézügyesség, szolgálat |
| 8 | Lamat | csillag / nyúl | harmónia, művészet, sokszorozódás |
| 9 | Muluk | víz / hold | érzelmek, tisztulás, hála |
| 10 | Ok | kutya | hűség, szeretet, közösség |
| 11 | Chuwen | majom | játékosság, kreativitás, mesterség |
| 12 | Eb' | út / fű | életút, alázat, emberiség szolgálata |
| 13 | B'en | nád | otthon, tekintély, fejlődés |
| 14 | Ix | jaguár | mágia, éjszakai erő, sámánság |
| 15 | Men | sas | látomás, távlat, ambíció |
| 16 | Kib' | keselyű / bölcsesség | belső bölcsesség, megbocsátás |
| 17 | Kab'an | föld / mozgás | gondolkodás, szinkronicitás, földenergia |
| 18 | Etz'nab' | kovakő / tükör | igazság, éles elme, döntés |
| 19 | Kawak | vihar / eső | megújulás, energia-kitörés, közösségi tér |
| 20 | Ajaw | nap / úr | beteljesedés, fény, vezetés |

### A 13 szám (tone)
1 = kezdet/egység, 2 = polaritás, 3 = mozgás, 4 = stabilitás, 5 = középpont/erő, 6 = áramlás, 7 = tükör/csúcs, 8 = harmónia/igazság, 9 = kiteljesedés, 10 = megnyilvánulás, 11 = feloldás, 12 = megértés/összegzés, 13 = transzcendencia. A napjegy + szám kombináció (pl. „8 B'atz'") adja a teljes születési jegyet; kiegészítő elemek: év-hordozó, a 13 napos hullám (trecena) kezdőjegye, kísérő jegyek.

---

## 3. Azték naptárjegyek — Tonalpohualli (röviden)

Az azték **tonalpohualli** szerkezetileg a Tzolkin testvére: **260 nap = 20 napjegy × 13 szám**, nahuatl nevekkel. A születésnap jegye (tonalli) az aztékoknál szó szerint a sors része volt — a gyermek gyakran a születésnapja szerinti nevet kapta, és a jegyhez pártfogó istenség tartozik. Számítása ugyanúgy korrelációval történik (a szakirodalomban több korreláció él, app-célra a Tzolkinnal párhuzamos számítás a praktikus).

| # | Nahuatl név | Jelentés | Pártfogó / téma |
|---|-------------|----------|-----------------|
| 1 | Cipactli | kajmán | teremtő ősenergia, kezdés |
| 2 | Ehecatl | szél | Quetzalcoatl; változékonyság, szellem |
| 3 | Calli | ház | otthon, befelé fordulás, biztonság |
| 4 | Cuetzpalin | gyík | regeneráció, alkalmazkodás |
| 5 | Coatl | kígyó | átalakulás, bölcsesség |
| 6 | Miquiztli | halál | elengedés, ciklusváltás |
| 7 | Mazatl | szarvas | érzékenység, természetközelség |
| 8 | Tochtli | nyúl | termékenység, bőség (és mértéktelenség-kockázat) |
| 9 | Atl | víz | érzelmek, tisztulás |
| 10 | Itzcuintli | kutya | hűség, vezetés a túlvilágra, közösség |
| 11 | Ozomahtli | majom | játék, művészet, humor |
| 12 | Malinalli | fű | szívósság, megújulás nehézségből |
| 13 | Acatl | nád | egyenesség, tekintély, tudás |
| 14 | Ocelotl | jaguár | bátorság, harcos-szellem, éjszakai erő |
| 15 | Cuauhtli | sas | ambíció, látomás, szabadság |
| 16 | Cozcacuauhtli | keselyű | hosszú élet, bölcs öregség |
| 17 | Ollin | mozgás / földrengés | változás, dinamizmus, a Nap mozgása |
| 18 | Tecpatl | kovakő | éles elme, próbatételek, áldozat |
| 19 | Quiahuitl | eső | Tlaloc; termékenyítő vihar, érzelmi intenzitás |
| 20 | Xochitl | virág | szépség, művészet, kiteljesedés |

---

## 4. Kelta fa-horoszkóp

### Fontos: modern eredet
**Egyik változat sem ősi kelta.** Nincs hiteles régészeti/írásos bizonyíték arra, hogy a druidák fa-horoszkópot használtak volna.
- A **21 fás „fakör"** (Európában, így Magyarországon is a legelterjedtebb) az 1970-es években jelent meg a francia sajtóban (gyakran a *Marie Claire* magazinhoz kötik), és német nyelvterületen „keltischer Baumkreis" néven futott be.
- A **13 fás ogham-holdnaptár** változat Robert Graves *The White Goddess* (1948) című költői művéből ered, amelyet későbbi modern druida szerzők (pl. Colin Murray, Helena Paterson) dolgoztak horoszkóppá. Az ogham-ábécé és a kelta fakultusz valódi, de a belőlük gyártott zodiákus modern konstrukció.

### Számítás
Tisztán **születési dátum → jegy** táblázatos hozzárendelés (nem kell időpont). A 21 fás rendszerben a legtöbb fához **két (a nyárfához három) különálló dátumsáv** tartozik, négy fa pedig egyetlen napot kap a napfordulókon/napéjegyenlőségeken.

### A 21 fajegy (elterjedt európai/magyar változat)
| Fa | Dátumok | Kulcsjellemzés |
|----|---------|----------------|
| Almafa | dec. 23. – jan. 1. és jún. 25. – júl. 4. | szeretetteljes, vonzó, nagyvonalú, romantikus |
| Fenyő (jegenyefenyő) | jan. 2–11. és júl. 5–14. | igényes, kifinomult, kitartó, kissé zárkózott |
| Szilfa | jan. 12–24. és júl. 15–25. | egyenes, gyakorlatias, megbízható, nemes lelkű |
| Ciprus | jan. 25. – febr. 3. és júl. 26. – aug. 4. | erős, alkalmazkodó, elégedett, hűséges |
| Nyárfa | febr. 4–8., máj. 1–14. és aug. 5–13. | érzékeny, művészi, bizonytalanságra hajló, bátor ha kell |
| Cédrus (ostorfa) | febr. 9–18. és aug. 14–23. | magabiztos, egészséges önérzet, optimista, határozott |
| Erdeifenyő | febr. 19–28/29. és aug. 24. – szept. 2. | szívós, rendszerető, szenvedélyes, jó szervező |
| Fűzfa | márc. 1–10. és szept. 3–12. | melankolikus, intuitív, művészi, befolyásolható |
| Hársfa | márc. 11–20. és szept. 13–22. | békeszerető, lágy, áldozatkész, féltékenységre hajló |
| **Tölgy** | **márc. 21.** (tavaszi napéjegyenlőség) | bátor, erős, független, robusztus |
| Mogyoró | márc. 22–31. és szept. 24. – okt. 3. | bűbájos, megértő, toleráns, jó ítélőképességű |
| Berkenye | ápr. 1–10. és okt. 4–13. | finom, jó ízlésű, érzékeny, önzetlen |
| Juhar | ápr. 11–20. és okt. 14–23. | eredeti, ambiciózus, ideges energiájú, kíváncsi |
| Diófa | ápr. 21–30. és okt. 24. – nov. 11. | szenvedélyes, stratéga, kompromisszummentes, féltékeny |
| Gesztenye | máj. 15–24. és nov. 12–21. | igazságérzet, diplomácia, óvatos, néha félreértett |
| Kőris | máj. 25. – jún. 3. és nov. 22. – dec. 1. | impulzív, igényes, okos, önfejű |
| Gyertyán | jún. 4–13. és dec. 2–11. | esztéta, fegyelmezett, kötelességtudó, keresi az elismerést |
| Fügefa | jún. 14–23. és dec. 12–21. | erős, önálló, családszerető, nem tűri az ellentmondást |
| **Nyírfa** | **jún. 24.** (nyári napforduló) | mértékletes, elegáns, szerény, tiszta |
| **Olajfa** | **szept. 23.** (őszi napéjegyenlőség) | bölcs, kiegyensúlyozott, igazságos, napimádó |
| **Bükk** | **dec. 22.** (téli napforduló) | jó ízlésű, anyagias-praktikus, jó életszervező |

### Az ogham/druida 13 fás holdnaptár-változat (Graves nyomán)
| # | Fa (ogham betű) | Dátum | Kulcstéma |
|---|-----------------|-------|-----------|
| 1 | Nyír (Beth) | dec. 24. – jan. 20. | újrakezdés, úttörés |
| 2 | Berkenye (Luis) | jan. 21. – febr. 17. | látnoki képesség, védelem |
| 3 | Kőris (Nion) | febr. 18. – márc. 17. | képzelet, két világ közti mozgás |
| 4 | Éger (Fearn) | márc. 18. – ápr. 14. | úttörő bátorság, önbizalom |
| 5 | Fűz (Saille) | ápr. 15. – máj. 12. | hold-intuíció, emlékezet |
| 6 | Galagonya (Huath) | máj. 13. – jún. 9. | kreativitás, látszat mögötti lényeg |
| 7 | Tölgy (Duir) | jún. 10. – júl. 7. | erő, védelmezés, vendégszeretet |
| 8 | Magyal (Tinne) | júl. 8. – aug. 4. | nemesség, kihívások állása |
| 9 | Mogyoró (Coll) | aug. 5. – szept. 1. | bölcsesség, tudásszomj |
| 10 | Szőlő (Muin) | szept. 2–29. | érzékiség, ünnep, ellentétek |
| 11 | Borostyán (Gort) | szept. 30. – okt. 27. | kitartás, társas kötődés |
| 12 | Nád (Ngetal) | okt. 28. – nov. 24. | titkok kutatása, akaraterő |
| 13 | Bodza (Ruis) | nov. 25. – dec. 23. | ciklus lezárása, megújulás, szabadszellem |

---

## 5. Numerológia

### Eredet
A számmisztika ókori gyökerű (babiloni, hébergematria, görög püthagoreus hagyomány — Püthagorasz, i.e. 6. sz.: „minden dolog lényege a szám"). A ma használt **„pitagoraszi" numerológia** azonban 20. század eleji modern rendszer (Mrs. L. Dow Balliett és követői formálták); a „kaldeus" változat alternatív betűkiosztást használ. Tudományos alapja nincs, de a legkönnyebben számítható és legnépszerűbb önismereti rendszerek egyike.

### Életút-szám (a legfontosabb szám) — számítás a születési dátumból
A születési dátum **összes számjegyét összeadjuk, és egy számjegyűre redukáljuk** — kivéve, ha közben mesterszám (11, 22, 33) adódik ki, azt nem redukáljuk tovább.

Példa: 1990. 07. 23. → év: 1+9+9+0 = 19 → 1+9 = 10 → 1; hónap: 7; nap: 2+3 = 5; összesen 1+7+5 = **13 → 1+3 = 4** → életút-szám: **4**.
*(Ajánlott módszer: hónap, nap, év külön redukálása, majd összegzés — így a mesterszámok helyesen jönnek ki.)*

### Sorsszám / névszám (kifejezés-szám) — pitagoraszi betű-szám táblázat
A teljes születési név betűit számmá alakítjuk és redukáljuk. Csak a magánhangzókból a **lélekszám** (belső vágy), csak a mássalhangzókból a **személyiség-szám** adódik.

| Szám | Betűk |
|------|-------|
| 1 | A, J, S |
| 2 | B, K, T |
| 3 | C, L, U |
| 4 | D, M, V |
| 5 | E, N, W |
| 6 | F, O, X |
| 7 | G, P, Y |
| 8 | H, Q, Z |
| 9 | I, R |

*(Magyar app-nál döntést igényel az ékezetes betűk kezelése — bevett gyakorlat az ékezet elhagyása: Á→A, Ö/Ő→O stb., a kétjegyű betűk betűnkénti számolása: SZ = S+Z.)*

### Mesterszámok
- **11** — „a Megvilágosító": fokozott intuíció, inspiráció, idealizmus; árnyéka a szorongás, túlérzékenység. (Alapja a 2.)
- **22** — „a Mesterépítő": nagy álmok gyakorlati megvalósítása, rendszerépítés; árnyéka az önmagával szembeni nyomás. (Alapja a 4.)
- **33** — „a Mestertanító": önzetlen szolgálat, gyógyító szeretet; a legritkább. (Alapja a 6.) *(Egyes iskolák csak a 11-et és 22-t tekintik mesterszámnak.)*

### Az 1–9 számok jellemzése
| Szám | Archetípus | Erősségek | Árnyoldal |
|------|-----------|-----------|-----------|
| 1 | Vezető / úttörő | önállóság, kezdeményezés, akaraterő | önzés, dominancia, türelmetlenség |
| 2 | Diplomata / társ | együttműködés, érzékenység, béketeremtés | döntésképtelenség, függőség |
| 3 | Alkotó / kommunikátor | kreativitás, optimizmus, kifejezőkészség | szétszórtság, felszínesség |
| 4 | Építő | rend, munkabírás, megbízhatóság | merevség, aggodalmaskodás |
| 5 | Szabad szellem | kalandvágy, sokoldalúság, alkalmazkodás | nyughatatlanság, mértéktelenség |
| 6 | Gondoskodó | felelősség, harmónia, család, szépérzék | túlféltés, mártírszerep |
| 7 | Kutató / misztikus | elemző elme, spiritualitás, mélység | visszahúzódás, szkeptikus magány |
| 8 | Megvalósító | ambíció, anyagi érzék, szervezőerő | hatalomvágy, munkamánia |
| 9 | Humanista | együttérzés, bölcsesség, univerzalitás | elengedési nehézség, világfájdalom |

App-tartalomként további könnyen számítható elemek: **személyes év szám** (születésnap + aktuális év → éves előrejelzés), születésnap-szám, érettség-szám.

---

## 6. Egyiptomi „horoszkóp" (modern rekonstrukció)

### Eredet — óvatosan
Az ókori Egyiptomban valóban létezett csillagvallás és a 36 **dekán** rendszere (10 napos csillag-időszakok), a dendarai „zodiákus" pedig már görög–babiloni hatást tükröz (ptolemaioszi kor). **A ma népszerű „egyiptomi istenség-horoszkóp" azonban modern, ezoterikus-szórakoztató konstrukció** — az istenségekhez rendelt dátumsávok forrásonként kissé eltérnek. Appban „ihletett rekonstrukció" címkével érdemes hozni.

### Számítás
Tisztán dátum → jegy táblázat; sajátossága, hogy a legtöbb jegyhez **több, nem összefüggő dátumsáv** tartozik.

### A 12 istenség-jegy (a legelterjedtebb változat)
| Jegy | Dátumsávok | Rövid jellemzés |
|------|-----------|-----------------|
| Nílus (Hapi) | jan. 1–7., jún. 19–28., szept. 1–7., nov. 18–26. | békés, gyakorlatias, megfigyelő; az egyetlen „nem-istenség" jegy |
| Amon-Ré | jan. 8–21., febr. 1–11. | született vezető, magabiztos, nagyvonalú |
| Mut | jan. 22–31., szept. 8–22. | anyai gondoskodás, hűség, védelmező |
| Geb | febr. 12–29., aug. 20–31. | földközeli, érzékeny, jószívű, megbízható |
| Ozirisz | márc. 1–10., nov. 27. – dec. 18. | dinamikus, vállalkozó, újjászületésre képes |
| Ízisz | márc. 11–31., okt. 18–29., dec. 19–31. | egyenes, energikus, humoros, oltalmazó |
| Thot | ápr. 1–19., nov. 8–17. | bölcs, tanulni vágyó, jó problémamegoldó |
| Hórusz | ápr. 20. – máj. 7., aug. 12–19. | bátor, optimista, ambiciózus |
| Anubisz | máj. 8–27., jún. 29. – júl. 13. | introspektív, szenvedélyes, önálló |
| Széth | máj. 28. – jún. 18., szept. 28. – okt. 2. | változáskereső, perfekcionista, nyughatatlan |
| Básztet | júl. 14–28., szept. 23–27., okt. 3–17. | harmóniakereső, intuitív, játékos-érzéki |
| Szahmet | júl. 29. – aug. 11., okt. 30. – nov. 7. | erős igazságérzet, büszke, fegyelmezett harcos |

---

## 7. Indián (észak-amerikai) születési totemállatok — Sun Bear rendszere

### Eredet — modern!
A rendszert **Sun Bear** (Vincent LaDuke, odzsibve származású tanító) és Wabun Wind publikálta *The Medicine Wheel: Earth Astrology* címmel (**1980**). Bár indián szimbólumokra (gyógyítókerék, totemek, elemek, szélirányok) épít, **nem ősi törzsi hagyomány, hanem 20. századi szintézis**, amelyet egyes őslakos közösségek kritikával is illetnek — appban ezt korrekten jelezni kell. A 12 totem a nyugati zodiákussal párhuzamos dátumsávokat használ, ezért triviálisan számítható.

### A 12 születési totem
| Totemállat | Dátum | Elem / szélirány | Rövid jellemzés |
|-----------|-------|------------------|-----------------|
| Sólyom | márc. 21. – ápr. 19. | tűz / kelet | kezdeményező, gyors döntésű, vezéralkat |
| Hód | ápr. 20. – máj. 20. | föld / kelet | kitartó, biztonságépítő, gyakorlatias |
| Szarvas | máj. 21. – jún. 20. | levegő / kelet | eleven, kommunikatív, sokoldalú |
| Harkály | jún. 21. – júl. 21. | víz / dél | gondoskodó, érzelmes, otthonteremtő |
| Lazac | júl. 22. – aug. 21. | tűz / dél | lelkes, magabiztos, energikus |
| Barnamedve | aug. 22. – szept. 21. | föld / dél | módszeres, megfontolt, segítőkész |
| Holló | szept. 22. – okt. 22. | levegő / nyugat | diplomatikus, társaságkedvelő, kiegyensúlyozó |
| Kígyó | okt. 23. – nov. 22. | víz / nyugat | átalakuló, mélyre látó, rejtélyes |
| Bagoly | nov. 23. – dec. 21. | tűz / nyugat | igazságkereső, kalandvágyó, szókimondó |
| Hóliba (lúd) | dec. 22. – jan. 19. | föld / észak | céltudatos, kitartó, hagyománytisztelő |
| Vidra | jan. 20. – febr. 18. | levegő / észak | eredeti, játékos, humánus újító |
| Farkas | febr. 19. – márc. 20. | víz / észak | empatikus, intuitív, művészlélek |

Kiegészítő rétegek Sun Bearnél: klán (elem-csoport), növény- és ásvány-totem, szín — appban extra tartalomrétegnek jók.

---

## 8. Human Design (röviden)

### Mi ez?
Modern szinkretikus rendszer, amelyet **Ra Uru Hu** (Alan Robert Krakower) alkotott meg egy 1987-es, Ibizán átélt „kinyilatkoztatás-élménye" nyomán. Összegyúrja a **nyugati asztrológiát, a kínai I Csinget (64 hexagram = 64 „kapu"), a kabbalista életfát, a hindu csakrarendszert (9 „központtá" bővítve) és kvantumfizikai szóhasználatot**. **Tudományos alapja nincs** (a „neutrínó-lenyomat" magyarázat fizikailag értelmezhetetlen), ugyanakkor a 2020-as évek egyik legfelkapottabb önismereti trendje — app-szempontból emiatt releváns.

### Számítás
Kell: **születési dátum + pontos idő + hely.** Két bolygóállás-készlet készül: a születés pillanatára („személyiség/tudatos") és kb. **88 nappal (a Nap 88 fokával) korábbra** („design/tudattalan"). A bolygópozíciókat a 64 kapura képezik le; a kapuk csatornákat aktiválnak, a csatornák központokat definiálnak (definiált/nyitott) — ebből adódik a típus, autoritás, profil (pl. 6/2), stratégia.

### Az 5 típus
| Típus | Népesség-arány (a rendszer szerint) | Stratégia | Röviden |
|-------|-------------------------------------|-----------|---------|
| Manifesztor | ~9% | tájékoztat, majd cselekszik | kezdeményező, úttörő, független |
| Generátor | ~37% | válaszra vár (reagál) | kitartó életerő, „építő"; a munka motorja |
| Manifesztáló Generátor | ~33% | válaszra vár + tájékoztat | többpályás, gyors, multipotenciál |
| Projektor | ~20% | meghívásra vár | irányító-látó, mások energiáinak bölcs vezetője |
| Reflektor | ~1% | egy holdciklust (28 nap) vár a döntéssel | tükör-típus, környezet-érzékeny, ritka |

### Autoritások (belső döntéshozó „iránytű")
Emocionális (szoláris plexus — „aludj rá egyet, várd meg az érzelmi hullámot"), szakrális (zsigeri igen/nem — csak generátoroknál), lép (ösztönös, azonnali megérzés), ego/szív (akarat), self/G-központ (identitás, kimondva derül ki), mentális/környezeti (beszélgetésben tisztul — projektoroknál), holdciklus (reflektoroknál). App-tartalomként a típus + autoritás + profil hármas adja a fő „olvasatot".

---

## 9. Tarot-születéskártya (röviden)

Modern, a numerológiával rokon számítás: a **születési dátum számjegyeinek összegét** addig redukáljuk, amíg **22 vagy kisebb** nem lesz — az eredmény a Nagy Arkánum megfelelő lapja (22 = a Bolond, amelyet 0-ként is jegyeznek). Példa: 1990. 07. 23. → 23+7+1990 = 2020 → 2+0+2+0 = 4 → **A Császár**.

Elterjedt változat a **születéskártya-pár**: ha az első összeg kétjegyű (pl. 13 – Halál), további redukcióval kapjuk a párját (1+3 = 4 – Császár) — a két lap együtt ad „élettéma-párost" (pl. Halál/Császár: átalakulás és struktúra). Tartalomként rövid, jól illusztrálható; jól keresztkapcsolható a numerológiai életút-számmal (ugyanaz a számítási alap).

---

## 10. Angyalszámok és csillagjegy-kiegészítők (röviden)

App-tartalomként rendkívül népszerű, számítást alig igénylő rétegek:

- **Angyalszámok:** ismétlődő számsorok (111, 222, 333, 444, 555, 1111, 1212 stb.) „üzenetként" való értelmezése — a modern változatot Doreen Virtue népszerűsítette a 2000-es évektől. Tipikus jelentés-készlet: 111 = manifesztáció/új kezdet, 222 = egyensúly/bizalom, 333 = támogatás/kreativitás, 444 = védelem/stabilitás, 555 = változás. App-funkció: napi „angyalszám", push-értesítés, születési dátumból képzett „személyes angyalszám".
- **Csillagjegy-kiegészítők** (a nyugati modul mellé): szerencseszámok, szerencsenapok, színek, születési kövek (hónap/jegy szerint), születési virágok, jegy-kompatibilitási mátrixok, uralkodó bolygó napi állása, „jegyed árnyoldala/mémes tartalmak", telihold/újhold naptár jegyre szabva.
- Ezek gyártása sablonos és jól automatizálható → alacsony költségű, magas engagement-értékű napi tartalom.

---

## 11. Ajánlás: mit érdemes az appba integrálni

Értékelési szempontok: **(N)** népszerűség/kereslet, **(SZ)** számíthatóság csak születési adatból, **(T)** tartalomgenerálhatóság (napi/heti tartalom gyártható-e belőle).

### Priorizált lista

| Prioritás | Rendszer | Indoklás |
|-----------|----------|----------|
| **1. Numerológia** | N: nagyon magas, SZ: triviális (csak dátum; név opcionális), T: kiváló (életút-szám + személyes év + napi szám) | A legjobb ár/érték arány: pár sor kód, sok tartalomréteg, mindenki ismeri. Első körben implementálandó. |
| **2. Védikus (Jyotish)** | N: magas és növekvő (globálisan hatalmas piac), SZ: jó (efemerida kell, Swiss Ephemeris megoldja; pontos idő nélkül is adható Hold-jegy + nakshatra), T: kiváló (napi Hold-jegy horoszkóp, dasa-idővonal, nakshatra-profil) | A legnagyobb „mélységű" bővítés; jól megkülönbözteti az appot. A 27 nakshatra önmagában 27 gazdag profiloldal. |
| **3. Maja Tzolkin** | N: közepes, de egzotikus vonzerő, SZ: triviális (mod-aritmetika), T: jó (260 napos ciklus → napi napjegy-tartalom natívan adódik) | Olcsón implementálható, és a „napi jegy" koncepció miatt természetes napi visszatérési ok. Az azték változat ugyanabból a motorból kiadható „skin-ként". |
| **4. Human Design** | N: nagyon magas (trend!), SZ: közepes (pontos születési idő + hely kell, 88 napos visszaszámítás, kapu-leképezés), T: jó (típus/autoritás/profil kombinációk sok tartalmat adnak) | Erős felhasználó-mágnes a fiatalabb célcsoportban; a diszklémert („nincs tudományos alapja") kötelező kitenni. Implementációja a legmunkaigényesebb. |
| **5. Kelta fa-horoszkóp** | N: közepes (magyar/német piacon hagyományosan kedvelt!), SZ: triviális (dátumtábla), T: közepes (statikus profilok, kevés napi tartalom) | Magyar célközönségnél meglepően erős ismertség; olcsó implementálni. „Modern eredetű" jelzéssel. |
| **6. Tarot-születéskártya** | N: magas (tarot-trend), SZ: triviális, T: közepes-jó (jól illusztrálható; napi húzással kombinálható) | A numerológia-motor melléktermékeként szinte ingyen kijön; vizuálisan hálás. |
| **7. Indián totemek (Sun Bear)** | N: közepes, SZ: triviális (a nyugati jegyekkel párhuzamos dátumok), T: közepes | Könnyű implementálni; a modern eredet és a kulturális érzékenység (őslakos kritika) miatt gondos, tiszteletteljes szövegezés kell. |
| **8. Egyiptomi jegyek** | N: közepes (vizuálisan nagyon eladható), SZ: triviális (dátumtábla, több sávval), T: közepes | Látványos „bónusz-modul"; „modern rekonstrukció" címkével. |
| **9. Angyalszámok + jegy-kiegészítők** | N: nagyon magas engagement, SZ: nem is kell, T: kiváló (napi push-tartalom) | Nem önálló rendszer, hanem keresztbe fekvő tartalomréteg — a napi aktivitás motorja; korán érdemes bevezetni. |

### Gyakorlati megjegyzések
1. **Közös motor:** a numerológia, tarot-kártya, kelta, egyiptomi, totem és Tzolkin/Tonalpohualli mind „dátum → lookup/aritmetika" — egyetlen közös szolgáltatásréteg kiszolgálja őket.
2. **Efemerida-réteg:** a védikus és a Human Design modul közös asztronómiai alapot használhat (Swiss Ephemeris); a nyugati modul valószínűleg már tartalmazza.
3. **Fokozatosság:** MVP-be: numerológia + Tzolkin + kelta + angyalszám-réteg (1-2 hét munka); második ütem: védikus; harmadik: Human Design.
4. **Etikai címkézés:** minden modulnál egységes „szórakoztató/önismereti tartalom, nem tudományos előrejelzés" jelzés; a modern eredetű rendszereknél (kelta, egyiptomi, Sun Bear, Human Design) az eredet korrekt feltüntetése növeli az app hitelességét.

---

## Források (válogatás)

- Védikus asztrológia, nakshatrák, ayanamsa: Wikipedia — *Hindu astrology*, *Nakshatra*, *Ayanamsa*; B.V. Raman: *Hindu Predictive Astrology*.
- Maja Tzolkin: Wikipedia — *Tzolkʼin*, *Maya calendar*; a GMT-korreláció (584283) szakirodalma.
- Azték Tonalpohualli: Wikipedia — *Tonalpohualli*, *Aztec calendar*.
- Kelta fa-horoszkóp (21 fás változat, magyar): [tudasfaja.com](https://www.tudasfaja.com/kelta-fahoroszkop-te-melyik-vagy-a-21-jegy-kozul/), [natursziget.com](https://www.natursziget.com/kelta-fahoroszkop), [astronet.borsonline.hu](https://astronet.borsonline.hu/tenyek-talanyok/vallasok/kelta-fahoroszkop-104560/); 13 fás ogham-változat: [zodiacroots.com](https://zodiacroots.com/celtic-tree-astrology/), [astro-seek.com](https://horoscopes.astro-seek.com/celtic-tree-zodiac-horoscope); eredet: Robert Graves, *The White Goddess* (1948).
- Numerológia: Wikipedia — *Numerology*; pitagoraszi betűtáblázat és mesterszámok a standard modern kézikönyvek szerint.
- Egyiptomi jegyek (modern rekonstrukció): [astrologyk.com/horoscope/egyptian](https://astrologyk.com/horoscope/egyptian), [howstuffworks.com](https://entertainment.howstuffworks.com/horoscopes-astrology/egyptian-zodiac-signs.htm), [centreofexcellence.com](https://www.centreofexcellence.com/egyptian-zodiac-signs/).
- Sun Bear totemek: Sun Bear & Wabun Wind: *The Medicine Wheel: Earth Astrology* (1980); [whatismyspiritanimal.com](https://whatismyspiritanimal.com/native-american-zodiac-astrology/), [wellbeing.com.au](https://www.wellbeing.com.au/mind-spirit/native-american-astrology.html).
- Human Design: Ra Uru Hu / Jovian Archive anyagai; Wikipedia — *Human Design*; kritikai áttekintések a tudományos megalapozatlanságról.
- Tarot-születéskártya: a Golden Dawn-hagyományra épülő modern tarot-numerológiai gyakorlat (pl. Mary K. Greer munkái).
- Angyalszámok: Doreen Virtue: *Angel Numbers* (2005) és az abból kinőtt modern app-gyakorlat.

*Készült: 2026-08-26. A dátumsávok a legelterjedtebb populáris változatokat követik; forrásonként ±1 napos eltérések előfordulnak (ezt a jegyhatár-közeli felhasználóknál az appban is érdemes jelezni).*
