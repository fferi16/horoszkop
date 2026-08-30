# A nyugati (tropikus) asztrológia teljes referenciája

> **Cél:** Ez a dokumentum a nyugati asztrológia rendszerének strukturált, adatgazdag referenciája, amely alapul szolgálhat horoszkóp-alkalmazás vagy horoszkóp-tartalom (napi/heti/havi előrejelzés, születési képlet-elemzés, kompatibilitás-számítás) fejlesztéséhez.
>
> **Fontos megjegyzés:** Az asztrológia nem tudományosan igazolt rendszer; a dokumentum a hagyomány belső logikáját írja le, ahogyan azt az asztrológiai irodalom használja.

---

## Tartalomjegyzék

1. [A 12 állatövi jegy](#1-a-12-állatövi-jegy)
2. [A bolygók jelentése](#2-a-bolygók-jelentése)
3. [A 12 ház jelentése](#3-a-12-ház-jelentése)
4. [Fényszögek (aspektusok)](#4-fényszögek-aspektusok)
5. [Aszcendens, Descendens, MC, IC](#5-aszcendens-descendens-mc-ic)
6. [Dekanátusok és uralmi rendszerek](#6-dekanátusok-és-uralmi-rendszerek)
7. [Kompatibilitás és szinasztria](#7-kompatibilitás-és-szinasztria)
8. [Tranzitok, progressziók, szolárhoroszkóp](#8-tranzitok-progressziók-szolárhoroszkóp)
9. [Történeti háttér](#9-történeti-háttér)
10. [A napi/heti/havi horoszkóp készítésének logikája](#10-a-napiheti-havi-horoszkóp-készítésének-logikája)
11. [Források](#11-források)

---

## 1. A 12 állatövi jegy

A tropikus zodiákus a tavaszi napéjegyenlőségi ponttól (0° Kos) indul, és az ekliptikát 12 darab, egyenként 30°-os szakaszra osztja. A jegyhatárok naptári dátumai évről évre ±1 nappal ingadozhatnak, mert a Nap jegyváltása (ingresszus) nem mindig ugyanarra a naptári napra esik (a szökőév-ciklus miatt). Alkalmazásfejlesztésnél **a pontos ekliptikai hosszúságot kell számolni, nem fix dátumot** — az alábbi dátumok a legelterjedtebb, tájékoztató határok.

### 1.1 Alaptáblázat

| # | Jegy | Szimbólum | Dátum (kb.) | Elem | Minőség | Uralkodó (hagyom.) | Uralkodó (modern) | Polaritás |
|---|------|-----------|-------------|------|---------|--------------------|--------------------|-----------|
| 1 | Kos (Aries) | ♈ | márc. 21. – ápr. 19. | Tűz | Kardinális | Mars | Mars | Pozitív (jang) |
| 2 | Bika (Taurus) | ♉ | ápr. 20. – máj. 20. | Föld | Szilárd | Vénusz | Vénusz | Negatív (jin) |
| 3 | Ikrek (Gemini) | ♊ | máj. 21. – jún. 20. | Levegő | Változó | Merkúr | Merkúr | Pozitív |
| 4 | Rák (Cancer) | ♋ | jún. 21. – júl. 22. | Víz | Kardinális | Hold | Hold | Negatív |
| 5 | Oroszlán (Leo) | ♌ | júl. 23. – aug. 22. | Tűz | Szilárd | Nap | Nap | Pozitív |
| 6 | Szűz (Virgo) | ♍ | aug. 23. – szept. 22. | Föld | Változó | Merkúr | Merkúr | Negatív |
| 7 | Mérleg (Libra) | ♎ | szept. 23. – okt. 22. | Levegő | Kardinális | Vénusz | Vénusz | Pozitív |
| 8 | Skorpió (Scorpio) | ♏ | okt. 23. – nov. 21. | Víz | Szilárd | Mars | Plútó | Negatív |
| 9 | Nyilas (Sagittarius) | ♐ | nov. 22. – dec. 21. | Tűz | Változó | Jupiter | Jupiter | Pozitív |
| 10 | Bak (Capricornus) | ♑ | dec. 22. – jan. 19. | Föld | Kardinális | Szaturnusz | Szaturnusz | Negatív |
| 11 | Vízöntő (Aquarius) | ♒ | jan. 20. – febr. 18. | Levegő | Szilárd | Szaturnusz | Uránusz | Pozitív |
| 12 | Halak (Pisces) | ♓ | febr. 19. – márc. 20. | Víz | Változó | Jupiter | Neptunusz | Negatív |

### 1.2 Elemek és minőségek logikája

**Elemek (triplicitások)** — 4 elem × 3 jegy:

| Elem | Jegyek | Alaptermészet | Kulcsszavak |
|------|--------|---------------|-------------|
| Tűz | Kos, Oroszlán, Nyilas | Lelkes, kezdeményező, intuitív | energia, akarat, lelkesedés, önkifejezés |
| Föld | Bika, Szűz, Bak | Gyakorlatias, stabil, érzékszervi | anyag, biztonság, kitartás, realitás |
| Levegő | Ikrek, Mérleg, Vízöntő | Szellemi, kommunikatív, társas | gondolat, kapcsolat, információ, objektivitás |
| Víz | Rák, Skorpió, Halak | Érzelmi, intuitív, befogadó | érzés, empátia, mélység, képzelet |

**Minőségek (kvadruplicitások)** — 3 minőség × 4 jegy:

| Minőség | Jegyek | Szerep az évszakban | Kulcsszavak |
|---------|--------|---------------------|-------------|
| Kardinális | Kos, Rák, Mérleg, Bak | Évszakkezdő (napéjegyenlőség/napforduló) | kezdeményezés, indítás, vezetés |
| Szilárd (fix) | Bika, Oroszlán, Skorpió, Vízöntő | Évszak közepe | stabilitás, kitartás, makacsság |
| Változó (mutábilis) | Ikrek, Szűz, Nyilas, Halak | Évszakzáró, átmeneti | alkalmazkodás, rugalmasság, közvetítés |

### 1.3 Részletes jegyleírások

#### ♈ Kos (márc. 21. – ápr. 19.)
- **Pozitív tulajdonságok:** bátor, kezdeményező, energikus, őszinte, lelkes, versengő, úttörő szellem, gyors döntéshozó.
- **Negatív tulajdonságok:** türelmetlen, impulzív, agresszív, önző, meggondolatlan, hirtelen haragú, befejezetlenül hagyja a dolgokat.
- **Testrész:** fej, arc, koponya, agy.
- **Szerencseszámok:** 1, 8, 17. **Színek:** piros, skarlátvörös. **Kövek:** gyémánt, rubin, vérjáspis (vérkő). **Fém:** vas. **Nap:** kedd.

#### ♉ Bika (ápr. 20. – máj. 20.)
- **Pozitív:** megbízható, türelmes, gyakorlatias, kitartó, hűséges, érzéki, stabil, jó pénzügyi érzékű, természet- és művészetkedvelő.
- **Negatív:** makacs, birtokló, anyagias, változástól idegenkedő, lusta lehet, kényelemszerető, féltékeny.
- **Testrész:** nyak, torok, hangszálak, pajzsmirigy.
- **Szerencseszámok:** 2, 6, 9, 12, 24. **Színek:** zöld, rózsaszín, földszínek. **Kövek:** smaragd, rózsakvarc, zafír. **Fém:** réz. **Nap:** péntek.

#### ♊ Ikrek (máj. 21. – jún. 20.)
- **Pozitív:** intelligens, kíváncsi, sokoldalú, kommunikatív, szellemes, alkalmazkodó, gyors felfogású, társaságkedvelő.
- **Negatív:** szétszórt, felszínes, következetlen, ideges, kétarcú lehet, pletykás, dönteni nehezen tud.
- **Testrész:** kar, kéz, váll, tüdő, idegrendszer.
- **Szerencseszámok:** 5, 7, 14, 23. **Színek:** sárga, világoszöld, világoskék. **Kövek:** achát, citrin, alexandrit. **Fém:** higany. **Nap:** szerda.

#### ♋ Rák (jún. 21. – júl. 22.)
- **Pozitív:** gondoskodó, empatikus, hűséges, védelmező, intuitív, otthonteremtő, jó emlékezetű, kitartó érzelmi kötődés.
- **Negatív:** hangulatember, sértődékeny, csüggedésre hajlamos, múltba ragadó, manipulatív lehet, túlféltő, zárkózott.
- **Testrész:** mellkas, mell, gyomor, emésztőrendszer.
- **Szerencseszámok:** 2, 3, 15, 20. **Színek:** ezüst, fehér, tengerkék. **Kövek:** holdkő, gyöngy, smaragd. **Fém:** ezüst. **Nap:** hétfő.

#### ♌ Oroszlán (júl. 23. – aug. 22.)
- **Pozitív:** nagylelkű, kreatív, melegszívű, karizmatikus, hűséges, vezetői alkat, önbizalommal teli, játékos, védelmező.
- **Negatív:** hiú, uralkodni vágyó, drámázó, figyelemigényes, öntelt, kritikát rosszul tűr, pazarló.
- **Testrész:** szív, gerinc, hát, keringési rendszer.
- **Szerencseszámok:** 1, 3, 10, 19. **Színek:** arany, narancs, királysárga. **Kövek:** rubin, peridot, borostyán. **Fém:** arany. **Nap:** vasárnap.

#### ♍ Szűz (aug. 23. – szept. 22.)
- **Pozitív:** precíz, elemző, szorgalmas, segítőkész, megbízható, gyakorlatias, egészségtudatos, szerény, rendszerető.
- **Negatív:** túlkritikus (magával és másokkal), aggodalmaskodó, perfekcionista, kicsinyes, hipochondriára hajlamos, nehezen lazít.
- **Testrész:** belek, emésztés, lép, idegrendszer.
- **Szerencseszámok:** 5, 14, 15, 23, 32. **Színek:** szürke, bézs, sötétzöld, barna. **Kövek:** zafír, karneol, jáspis. **Fém:** higany. **Nap:** szerda.

#### ♎ Mérleg (szept. 23. – okt. 22.)
- **Pozitív:** diplomatikus, igazságos, bájos, együttműködő, esztétikai érzékkel megáldott, békéltető, társas lény, kifinomult.
- **Negatív:** határozatlan, konfliktuskerülő, mások véleményétől függő, felszínes lehet, halogató, önsajnálatra hajlamos.
- **Testrész:** vese, deréktájék, bőr, hormonális egyensúly.
- **Szerencseszámok:** 4, 6, 13, 15, 24. **Színek:** pasztellkék, rózsaszín, zöld. **Kövek:** opál, lapis lazuli, zafír. **Fém:** réz. **Nap:** péntek.

#### ♏ Skorpió (okt. 23. – nov. 21.)
- **Pozitív:** szenvedélyes, elszánt, mélyre látó, hűséges, gyógyító/átalakító erejű, bátor, kitűnő megfigyelő, kitartó.
- **Negatív:** féltékeny, bosszúálló, titkolózó, megszállott, manipulatív, birtokló, szélsőséges.
- **Testrész:** nemi szervek, kiválasztó rendszer, medence.
- **Szerencseszámok:** 8, 11, 18, 22. **Színek:** bordó, fekete, mélyvörös. **Kövek:** topáz, obszidián, gránát, malachit. **Fém:** vas/plutónium (szimbolikusan); hagyományosan vas. **Nap:** kedd.

#### ♐ Nyilas (nov. 22. – dec. 21.)
- **Pozitív:** optimista, szabadságszerető, filozofikus, őszinte, kalandvágyó, nagyvonalú, humoros, tudásszomjas, jó tanító.
- **Negatív:** tapintatlan, felelőtlen, túlzásokra hajlamos, ígérgető, türelmetlen, szertelen, elkötelezéstől félő.
- **Testrész:** csípő, comb, máj.
- **Szerencseszámok:** 3, 7, 9, 12, 21. **Színek:** lila, mélykék, bíbor. **Kövek:** türkiz, tanzanit, ametiszt. **Fém:** ón. **Nap:** csütörtök.

#### ♑ Bak (dec. 22. – jan. 19.)
- **Pozitív:** fegyelmezett, felelősségteljes, ambiciózus, kitartó, gyakorlatias, megbízható, bölcs, hosszú távon gondolkodó.
- **Negatív:** rideg, pesszimista, munkamániás, merev, státuszorientált, zárkózott, megbocsátani nehezen tud.
- **Testrész:** térd, csontok, ízületek, fogak, bőr.
- **Szerencseszámok:** 4, 8, 13, 22. **Színek:** fekete, sötétbarna, sötétzöld, szürke. **Kövek:** gránát, ónix, fekete turmalin. **Fém:** ólom. **Nap:** szombat.

#### ♒ Vízöntő (jan. 20. – febr. 18.)
- **Pozitív:** eredeti, humanitárius, független, találékony, jövőorientált, közösségépítő, tolerancia az egyediség iránt, intellektuális.
- **Negatív:** kiszámíthatatlan, érzelmileg távolságtartó, makacsul különc, lázadó öncélúan, elméletekben ragadó, kötődéstől félő.
- **Testrész:** boka, lábszár, vérkeringés.
- **Szerencseszámok:** 4, 7, 11, 22, 29. **Színek:** elektromos kék, türkiz, ezüst. **Kövek:** ametiszt, gránát, akvamarin. **Fém:** urán (szimbolikusan); hagyományosan ólom. **Nap:** szombat.

#### ♓ Halak (febr. 19. – márc. 20.)
- **Pozitív:** együttérző, művészi, intuitív, önzetlen, álmodozó, gyógyító hajlamú, spirituális, alkalmazkodó, romantikus.
- **Negatív:** menekülő (eszképista), áldozatszerepre hajlamos, határok nélküli, szétfolyó, befolyásolható, önámító, függőségekre hajlamos.
- **Testrész:** lábfej, nyirokrendszer, immunrendszer.
- **Szerencseszámok:** 3, 9, 12, 15, 18, 24. **Színek:** tengerzöld, levendula, lila. **Kövek:** akvamarin, ametiszt, jáde. **Fém:** ón. **Nap:** csütörtök.

> **Melothesia (testrész-hozzárendelés) elve:** a jegyek fentről lefelé „öltöztetik fel" a testet — Kos = fej, Halak = lábfej. Ez az ún. „zodiákus-ember" (Homo signorum) középkori orvosi asztrológiai hagyománya.

---

## 2. A bolygók jelentése

Az asztrológiában „bolygó" minden mozgó égitest/pont, a Napot és Holdat (fényezők, luminárék) is beleértve.

### 2.1 Áttekintő táblázat

| Égitest | Szimbólum | Kulcsszó | Terület | Jegyváltás ideje (kb.) | Kategória |
|---------|-----------|----------|---------|------------------------|-----------|
| Nap | ☉ | identitás | én, életerő, ego, apa | 1 hónap | személyi |
| Hold | ☽ | érzelem | lélek, ösztön, anya, otthon | 2,5 nap | személyi |
| Merkúr | ☿ | gondolkodás | kommunikáció, tanulás | 3–4 hét | személyi |
| Vénusz | ♀ | szeretet | szerelem, szépség, értékek | 4–5 hét | személyi |
| Mars | ♂ | akarat | energia, harc, vágy | ~6–7 hét | személyi |
| Jupiter | ♃ | bőség | szerencse, tágulás, hit | ~1 év | szociális |
| Szaturnusz | ♄ | korlát | fegyelem, felelősség, idő | ~2,5 év | szociális |
| Uránusz | ♅ | forradalom | újítás, szabadság, váratlan | ~7 év | generációs |
| Neptunusz | ♆ | oldódás | álom, spiritualitás, illúzió | ~14 év | generációs |
| Plútó | ♇ | átalakulás | hatalom, halál-újjászületés | 12–30 év | generációs |
| Chiron | ⚷ | seb és gyógyítás | „sebzett gyógyító" | 2–8 év | kentaur/aszteroida |
| Felszálló holdcsomópont | ☊ | életfeladat | fejlődési irány | ~1,5 év (retrográd) | pont |
| Leszálló holdcsomópont | ☋ | múlt/karma | hozott minták | ~1,5 év | pont |
| Lilith (Fekete Hold) | ⚸ | árnyék | elfojtott vágy, tabu | ~9 hónap/jegy | pont |

### 2.2 Részletes jelentések

- **Nap (☉):** az alapvető identitás, az élet célja, a tudatos én, a vitalitás és az önkifejezés. A „napjegy" az, amit a köznyelv „csillagjegynek" hív. Az apa, a tekintély, a szív archetípuma. Az Oroszlán ura.
- **Hold (☽):** az érzelmi működés, az ösztönös reakciók, a biztonságérzet, az emlékezet, a táplálás és a gondoskodás. Az anya, a gyermekkor, az otthon és a nagyközönség jelölője. A Rák ura. A leggyorsabb égitest — ezért a napi horoszkópok fő motorja.
- **Merkúr (☿):** gondolkodás, beszéd, írás, tanulás, logika, kereskedelem, utazás (rövid), technika, testvérek. Az Ikrek és a Szűz ura. Évente ~3× retrográd (a híres „Merkúr retrográd" időszakok: kommunikációs és technikai zavarok toposza).
- **Vénusz (♀):** szerelem, vonzalom, szépség, művészet, harmónia, pénz és értékrend, élvezetek, társas kapcsolatok. A Bika és a Mérleg ura. Női princípium.
- **Mars (♂):** cselekvés, energia, agresszió, bátorság, szexuális vágy, versengés, konfliktuskezelés. A Kos ura (hagyományosan a Skorpióé is). Férfi princípium.
- **Jupiter (♃):** növekedés, szerencse, optimizmus, bőség, filozófia, vallás, jog, felsőoktatás, külföld, nagyvonalúság — de túlzás is. A „nagy jótevő" (benefikus). A Nyilas ura (hagyományosan a Halaké is).
- **Szaturnusz (♄):** struktúra, fegyelem, korlátozás, felelősség, karma, idő, öregség, félelmek, mesterré válás nehézségek árán. A „nagy tanító" (hagyományosan a „nagy kártevő", malefikus). A Bak ura (hagyományosan a Vízöntőé is). A ~29,5 éves keringési ideje adja a „Szaturnusz-visszatérés" (28–30 éves kor) felnőtté válási krízisét.
- **Uránusz (♅):** hirtelen változás, forradalom, technológia, eredetiség, függetlenség, lázadás, jövő. Modern uralkodóként a Vízöntőhöz rendelik. Felfedezés: 1781.
- **Neptunusz (♆):** álmok, intuíció, spiritualitás, művészi ihlet, együttérzés — de köd, illúzió, csalás, függőség is. Modern uralkodóként a Halakhoz rendelik. Felfedezés: 1846.
- **Plútó (♇):** mélyreható átalakulás, hatalom, kontroll, tabuk, halál és újjászületés, kollektív titkok, regeneráció. Modern uralkodóként a Skorpióhoz rendelik. Felfedezés: 1930. Erősen excentrikus pályája miatt 12–30 évet tölt egy-egy jegyben.
- **Chiron (⚷):** 1977-ben felfedezett kentaur-kisbolygó a Szaturnusz és az Uránusz pályája között. A „sebzett gyógyító": az a pont, ahol mély, gyakran gyógyíthatatlannak érzett sebet hordozunk, amelynek feldolgozása révén másokat tudunk gyógyítani/tanítani. ~50 éves keringés; a „Chiron-visszatérés" a 50 év körüli életközépi számvetéshez kötődik.
- **Holdcsomópontok (☊/☋):** a Hold pályájának és az ekliptikának metszéspontjai (nem égitestek, hanem számított pontok; mindig egymással szemben állnak, és átlagosan retrográd haladnak, ~18,6 év alatt kerülik meg a zodiákust). **Felszálló csomópont (Sárkányfej):** az életfeladat, a fejlődési irány, amit meg kell tanulni. **Leszálló csomópont (Sárkányfark):** a hozott készségek, múltbeli (karmikus) minták, a komfortzóna, amiből ki kell lépni. A csomópont-tengely mentén jönnek létre a fogyatkozások.
- **Lilith (Fekete Hold, ⚸):** szintén számított pont — a Hold pályaellipszisének üres gyújtópontja (átlagos vagy valódi apogeum). Jelentése: az elfojtott, „vad" női erő, a tabusított vágyak, a lázadás az alávetettség ellen, az árnyékszemélyiség. ~9 hónapot tölt egy jegyben, teljes kör ~8,85 év.

---

## 3. A 12 ház jelentése

A házak a születési hely és idő alapján számított, az égboltot 12 szektorra osztó rendszer — a „hol" kérdésére felelnek (a jegyek a „hogyan", a bolygók a „mi" kérdésére). A leggyakoribb házrendszerek: **Placidus** (a legelterjedtebb), **Koch**, **Egész jegyes (Whole Sign)**, **Egyenlő házas (Equal)**, **Regiomontanus**, **Porphyrius**.

| Ház | Név | Terület | Analóg jegy | Analóg bolygó | Típus |
|-----|-----|---------|-------------|---------------|-------|
| 1. | Én háza | személyiség, külső megjelenés, testi adottságok, életkezdet (csúcsa = Aszcendens) | Kos | Mars | sarkalatos |
| 2. | Anyagiak háza | pénz, birtoklás, saját erőforrások, önértékelés | Bika | Vénusz | követő |
| 3. | Kommunikáció háza | tanulás, testvérek, rövid utak, közvetlen környezet, beszéd, írás | Ikrek | Merkúr | hanyatló |
| 4. | Otthon háza | család, gyökerek, ingatlan, szülő (apa/anya), életvég (csúcsa = IC) | Rák | Hold | sarkalatos |
| 5. | Önkifejezés háza | szerelem, gyermekek, kreativitás, játék, szórakozás, kockázat | Oroszlán | Nap | követő |
| 6. | Munka és egészség háza | mindennapi munka, szolgálat, rutin, egészség, háziállatok | Szűz | Merkúr | hanyatló |
| 7. | Társkapcsolat háza | házasság, üzlettárs, nyílt ellenségek, szerződések (csúcsa = Descendens) | Mérleg | Vénusz | sarkalatos |
| 8. | Átalakulás háza | közös pénzek, örökség, szexualitás, halál/újjászületés, okkult | Skorpió | Plútó/Mars | követő |
| 9. | Világnézet háza | filozófia, vallás, felsőoktatás, külföld, hosszú utak, jog, kiadás | Nyilas | Jupiter | hanyatló |
| 10. | Hivatás háza | karrier, társadalmi státusz, hírnév, életcél, tekintély (csúcsa = MC) | Bak | Szaturnusz | sarkalatos |
| 11. | Közösség háza | barátok, csoportok, remények, célok, társadalmi ügyek | Vízöntő | Uránusz/Szaturnusz | követő |
| 12. | Elvonulás háza | tudatalatti, titkok, elszigeteltség (kórház, börtön, kolostor), önfeláldozás, rejtett ellenségek, spiritualitás | Halak | Neptunusz/Jupiter | hanyatló |

- **Sarkalatos (anguláris) házak** (1., 4., 7., 10.): a legerősebb, legaktívabb életterületek — az itt álló bolygók hangsúlyosak.
- **Követő (szukcedens) házak** (2., 5., 8., 11.): stabilizáló, erőforrás-gyűjtő területek.
- **Hanyatló (kadens) házak** (3., 6., 9., 12.): tanuló, feldolgozó, közvetítő területek.

---

## 4. Fényszögek (aspektusok)

A fényszög két bolygó (vagy pont) közti szögtávolság az ekliptikán. Az **orbis** a megengedett eltérés a pontos szögtől — minél kisebb a tényleges eltérés, annál erősebb a fényszög. A luminárék (Nap, Hold) fényszögeinél sok asztrológus 1–2 fokkal tágabb orbist enged.

### 4.1 Fő (ptolemaioszi) fényszögek

| Fényszög | Szög | Szimbólum | Orbis (ajánlott) | Jelleg | Jelentés |
|----------|------|-----------|------------------|--------|----------|
| Konjunkció (együttállás) | 0° | ☌ | 8–10° | semleges (bolygófüggő) | a két energia összeolvad, felerősíti egymást; a képlet legintenzívebb pontjai |
| Szextil | 60° | ⚹ | 4–6° | harmonikus | lehetőség, könnyed együttműködés — de aktiválni kell |
| Kvadrát (négyszög) | 90° | □ | 6–8° | feszült | súrlódás, kihívás, belső konfliktus — a fejlődés motorja |
| Trigon (háromszög) | 120° | △ | 6–8° | harmonikus | természetes tehetség, könnyedség, áramlás (veszélye: kényelmesség) |
| Oppozíció (szembenállás) | 180° | ☍ | 8–10° | feszült | polarizáció, tükröződés, kapcsolati feszültség, egyensúlykeresés |

### 4.2 Kisebb (minor) fényszögek

| Fényszög | Szög | Szimbólum | Orbis | Jelleg | Jelentés |
|----------|------|-----------|-------|--------|----------|
| Félszextil (semisextil) | 30° | ⚺ | 1–2° | enyhén feszült | enyhe súrlódás, össze nem illő szomszédos minőségek |
| Félkvadrát (semisquare) | 45° | ∠ | 1–2° | feszült | belső irritáció, kisebb akadályok |
| Szeszkvikvadrát | 135° | ⚼ | 1–2° | feszült | halmozódó feszültség, kitörésre hajlamos |
| Kvinkunx (inconjunct) | 150° | ⚻ | 2–3° | feszült/kényes | folyamatos utánaigazítást igénylő, „vakfolt" jellegű kapcsolat |
| Kvintil | 72° | Q | 1–2° | kreatív | különleges tehetség, kreatív adottság |
| Bikvintil | 144° | bQ | 1–2° | kreatív | mint a kvintil, finomabb formában |

### 4.3 Fényszög-alakzatok (konfigurációk)

- **Nagy trigon:** 3 bolygó egymással trigonban (általában egy elemen belül) — nagy tehetség, védettség.
- **T-kvadrát:** oppozíció + mindkét végére kvadrátot vető harmadik bolygó — erős hajtóerő, feszültséggóc.
- **Nagy kereszt (Grand Cross):** 4 bolygó, két oppozíció + négy kvadrát — kivételes kihívás és teherbírás.
- **Yod („Isten ujja"):** két, egymással szextilben álló bolygó kvinkunxa egy harmadikra — sorsszerű feladatpont.
- **Stellium:** 3+ bolygó együttállása egy jegyben/házban — extrém hangsúly.

### 4.4 Alkalmazási és irányszabályok

- **Applikáló (közeledő)** fényszög erősebb, mint a **szeparáló (távolodó)**.
- Tranzitoknál szűkebb orbis használatos (általában 1–3°), szinasztriában közepes (4–6°), natál képletben a fenti táblázat szerinti.

---

## 5. Aszcendens, Descendens, MC, IC

A képlet négy sarkalatos pontja (tengelyei) a **születési időpontból és földrajzi helyből** számítódik — ezért kell a pontos születési óra:perc a teljes képlethez.

| Pont | Név | Definíció (csillagászati) | Jelentés |
|------|-----|---------------------------|----------|
| **ASC** (Aszcendens) | Felkelő jegy | Az ekliptika és a keleti horizont metszéspontja a születés pillanatában | A külvilág felé mutatott arc, első benyomás, testi megjelenés, az élethez való ösztönös hozzáállás; az 1. ház csúcsa |
| **DSC** (Descendens) | Lenyugvó pont | Az ASC-vel szemközti pont (nyugati horizont) | A társ, akit vonzunk; amit másokban keresünk/kivetítünk; a 7. ház csúcsa |
| **MC** (Medium Coeli, Éggöbe) | Égközép | Az ekliptika és a helyi meridián felső metszéspontja (delelőpont) | Hivatás, életcél, társadalmi szerep, nyilvános én; a 10. ház csúcsa (kvadráns-házrendszerekben) |
| **IC** (Imum Coeli) | Égalj | Az MC-vel szemközti pont | Gyökerek, család, privát én, lelki alap; a 4. ház csúcsa |

**Számítás alapja (vázlatosan):**
1. A születési időt UT-ra váltjuk (időzóna + nyári időszámítás figyelembevételével).
2. Kiszámítjuk a **helyi csillagidőt** (LST) a greenwichi csillagidőből és a földrajzi hosszúságból.
3. Az MC ekliptikai hosszúsága a helyi csillagidőből adódik: `tan(MC) = tan(RAMC)/cos(ε)`, ahol RAMC = a meridián rektaszcenziója (LST × 15°), ε = a Föld tengelyferdesége (~23,44°).
4. Az Aszcendens képlete: `ASC = arccot( −( tan(φ)·sin(ε) + sin(RAMC)·cos(ε) ) / cos(RAMC) )`, ahol φ = földrajzi szélesség. (Gyakorlatban efemerisz-könyvtár, pl. Swiss Ephemeris végzi.)
5. Az ASC kb. **4 percenként 1 fokot**, kb. **2 óránként egy jegyet** halad — ezért a születési idő pontossága kritikus.

**A „nagy hármas" (Big Three):** napjegy (identitás) + holdjegy (érzelmek) + aszcendens (megjelenés) — a modern populáris asztrológia alap-hármasa, alkalmazásokban tipikus belépő funkció.

---

## 6. Dekanátusok és uralmi rendszerek

### 6.1 Dekanátusok

Minden jegy három 10°-os **dekanátusra** oszlik (0–10°, 10–20°, 20–30°); eredetük az egyiptomi dekán-csillagokig nyúlik vissza. A modern (triplicitás-alapú) rendszerben a dekánok urai az azonos elemű jegyek urai, sorrendben:

| Jegy | 1. dekanát (0–10°) | 2. dekanát (10–20°) | 3. dekanát (20–30°) |
|------|--------------------|---------------------|---------------------|
| Kos | Mars (Kos) | Nap (Oroszlán) | Jupiter (Nyilas) |
| Bika | Vénusz (Bika) | Merkúr (Szűz) | Szaturnusz (Bak) |
| Ikrek | Merkúr (Ikrek) | Vénusz (Mérleg) | Uránusz/Szaturnusz (Vízöntő) |
| Rák | Hold (Rák) | Plútó/Mars (Skorpió) | Neptunusz/Jupiter (Halak) |
| Oroszlán | Nap (Oroszlán) | Jupiter (Nyilas) | Mars (Kos) |
| Szűz | Merkúr (Szűz) | Szaturnusz (Bak) | Vénusz (Bika) |
| Mérleg | Vénusz (Mérleg) | Uránusz/Szaturnusz (Vízöntő) | Merkúr (Ikrek) |
| Skorpió | Plútó/Mars (Skorpió) | Neptunusz/Jupiter (Halak) | Hold (Rák) |
| Nyilas | Jupiter (Nyilas) | Mars (Kos) | Nap (Oroszlán) |
| Bak | Szaturnusz (Bak) | Vénusz (Bika) | Merkúr (Szűz) |
| Vízöntő | Uránusz/Szaturnusz (Vízöntő) | Merkúr (Ikrek) | Vénusz (Mérleg) |
| Halak | Neptunusz/Jupiter (Halak) | Hold (Rák) | Plútó/Mars (Skorpió) |

(Létezik régebbi, „kaldeus" dekán-rend is, amely a bolygók kaldeus sorrendjét — Szaturnusz, Jupiter, Mars, Nap, Vénusz, Merkúr, Hold — futtatja végig a 36 dekánon; a hagyományos/hellenisztikus asztrológia ezt használja.)

A dekanát árnyalja a jegy-jelleget: pl. egy 2. dekanátusú Kos (Nap-dekán) „oroszlános" színezetű — büszkébb, kitartóbb, mint az 1. dekán tiszta Mars-Kosa.

### 6.2 Esszenciális méltóságok (uralmi rendszer)

| Bolygó | Domicílium (otthon) | Száműzetés (detrimentum) | Exaltáció (erőben) — fokkal | Esés (casus) |
|--------|---------------------|---------------------------|------------------------------|--------------|
| Nap | Oroszlán | Vízöntő | Kos (19°) | Mérleg |
| Hold | Rák | Bak | Bika (3°) | Skorpió |
| Merkúr | Ikrek, Szűz | Nyilas, Halak | Szűz (15°) | Halak |
| Vénusz | Bika, Mérleg | Skorpió, Kos | Halak (27°) | Szűz |
| Mars | Kos, (Skorpió) | Mérleg, (Bika) | Bak (28°) | Rák |
| Jupiter | Nyilas, (Halak) | Ikrek, (Szűz) | Rák (15°) | Bak |
| Szaturnusz | Bak, (Vízöntő) | Rák, (Oroszlán) | Mérleg (21°) | Kos |
| Uránusz* | Vízöntő | Oroszlán | Skorpió (vitatott) | Bika |
| Neptunusz* | Halak | Szűz | Rák/Oroszlán (vitatott) | Bak/Vízöntő |
| Plútó* | Skorpió | Bika | Kos/Oroszlán (vitatott) | Mérleg/Vízöntő |

\* A modern bolygók méltóságai nem részei a klasszikus hagyománynak, hozzárendelésük iskolánként eltér.

**Definíciók:**
- **Domicílium:** a bolygó a saját jegyében áll — teljes erejében, tisztán működik. (Pontérték a hagyományos rendszerben: +5)
- **Exaltáció:** a bolygó „vendégségben, díszvendégként" — kiemelten jól, olykor túlfűtötten működik. (+4)
- **Száműzetés (detrimentum):** a saját jegyével szemközti jegyben — nehezített, idegen terep. (−5)
- **Esés (fall):** az exaltációs jeggyel szemközti jegyben — gyengített, alulműködő. (−4)
- További hagyományos méltóságok: **triplicitás** (+3), **terminusok/határok** (+2), **fáciesek/dekán** (+1) — a hellenisztikus és középkori gyakorlat finomhangoló eszközei.

---

## 7. Kompatibilitás és szinasztria

### 7.1 Elem-logika (napjegy-kompatibilitás alapja)

Az egyszerű (bulvár) kompatibilitás az elemek viszonyán alapul:

- **Azonos elem** (pl. Kos–Oroszlán): mély megértés, hasonló működés — trigon-kapcsolat (120°). Kockázat: túl egyforma.
- **Támogató elempár:** Tűz ↔ Levegő (a levegő táplálja a tüzet), Föld ↔ Víz (a víz termékennyé teszi a földet) — jellemzően szextil-kapcsolat (60°).
- **Feszült viszony:** azonos minőségű, de össze nem illő elemű jegyek — kvadrát (90°): pl. Kos–Rák (tűz–víz), Bika–Oroszlán (föld–tűz).
- **Szembenállás (oppozíció, 180°):** kiegészítő pólusok, erős vonzás + feszültség: Kos–Mérleg, Bika–Skorpió, Ikrek–Nyilas, Rák–Bak, Oroszlán–Vízöntő, Szűz–Halak.

### 7.2 Napjegy-kompatibilitási mátrix (hagyományos elemlogika szerint)

| Jegy | Legharmonikusabb (trigon) | Támogató (szextil) | Kihívást hozó (kvadrát) | Vonzó ellentét (oppozíció) |
|------|---------------------------|--------------------|--------------------------|----------------------------|
| Kos | Oroszlán, Nyilas | Ikrek, Vízöntő | Rák, Bak | Mérleg |
| Bika | Szűz, Bak | Rák, Halak | Oroszlán, Vízöntő | Skorpió |
| Ikrek | Mérleg, Vízöntő | Kos, Oroszlán | Szűz, Halak | Nyilas |
| Rák | Skorpió, Halak | Bika, Szűz | Kos, Mérleg | Bak |
| Oroszlán | Kos, Nyilas | Ikrek, Mérleg | Bika, Skorpió | Vízöntő |
| Szűz | Bika, Bak | Rák, Skorpió | Ikrek, Nyilas | Halak |
| Mérleg | Ikrek, Vízöntő | Oroszlán, Nyilas | Rák, Bak | Kos |
| Skorpió | Rák, Halak | Szűz, Bak | Oroszlán, Vízöntő | Bika |
| Nyilas | Kos, Oroszlán | Mérleg, Vízöntő | Szűz, Halak | Ikrek |
| Bak | Bika, Szűz | Skorpió, Halak | Kos, Mérleg | Rák |
| Vízöntő | Ikrek, Mérleg | Kos, Nyilas | Bika, Skorpió | Oroszlán |
| Halak | Rák, Skorpió | Bika, Bak | Ikrek, Nyilas | Szűz |

### 7.3 Szinasztria (képlet-összevetés) — a komoly kompatibilitás-elemzés

A szinasztria két teljes születési képlet összevetése; a napjegy csak egy tényező a sok közül. Fő szempontok:

1. **Fényezők kapcsolata:** az egyik fél Napja/Holdja fényszögben a másik Napjával/Holdjával (Nap–Hold harmonikus kapcsolat a klasszikus „házassági" mutató).
2. **Vénusz–Mars kapcsolatok:** romantikus-szexuális kémia.
3. **Hold–Hold és Hold–Vénusz:** érzelmi összhang, együttélési komfort.
4. **Aszcendens-kapcsolatok:** az egyik fél bolygói a másik ASC/DSC tengelyén — erős vonzás.
5. **Szaturnusz-kapcsolatok:** tartósság, elköteleződés (harmonikusan stabilizál, feszülten korlátoz).
6. **Ház-átfedések:** az egyik fél bolygói a másik képletének mely házaiba esnek (pl. a társ Napja a 7. házamban = társként élem meg).
7. **Kompozit képlet:** a két képlet felezőpontjaiból képzett „kapcsolat-képlet" — a kapcsolat mint önálló entitás elemzése.

**Alkalmazás-fejlesztési jegyzet:** egy jó kompatibilitás-pontozó súlyozhat pl. így: elem-összhang (napjegy, holdjegy, ASC) + páros fényszögek pontozása (harmonikus +, feszült −, orbis szerinti súllyal) + fényezők és Vénusz–Mars kapcsolatok kiemelt szorzóval.

---

## 8. Tranzitok, progressziók, szolárhoroszkóp

### 8.1 Tranzitok

A **tranzit** az égitestek aktuális (valós idejű) helyzete a születési képlet pontjaihoz viszonyítva. Az előrejelzés fő eszköze.

- **Gyors tranzitok** (Hold, Merkúr, Vénusz, Nap, Mars): napi-heti hangulatok, apró események. A Hold-tranzit órákig, a Mars-tranzit napokig tart.
- **Lassú tranzitok** (Jupiter–Plútó): hónapokig-évekig ható életszakasz-témák. A retrográd mozgás miatt egy lassú bolygó gyakran **háromszor** vonul át ugyanazon a ponton (direkt–retrográd–direkt): a téma három felvonásban bontakozik ki.
- **Kiemelt életciklus-tranzitok:** Szaturnusz-visszatérés (~29 év), Uránusz-oppozíció (~42 év, „életközépi válság"), Chiron-visszatérés (~50 év), második Szaturnusz-visszatérés (~58–59 év).
- Orbis tranzitoknál: általában 1–3° (a hatás a pontos beálláskor tetőzik).

### 8.2 Progressziók

A **szekunder progresszió** szimbolikus időkulcs: **1 nap = 1 év**. A születés utáni 30. nap bolygóállásai a 30 éves életévet írják le. A progresszív Hold ~2,5 évet tölt egy jegyben (érzelmi fejlődési fejezetek); a progresszív Nap ~30 év alatt vált jegyet (identitás-korszakváltás). Létezik még: **szoláris ív direkció** (minden pont a progresszív Nap elmozdulásával tolódik el), **primer direkciók** (hagyományos, bonyolultabb technika).

### 8.3 Szolárhoroszkóp (Solar Return)

Az évente arra a pillanatra felállított képlet, amikor a tranzit Nap **pontosan visszatér** a születési Nap fokára-percére (a születésnap környékén, ±1 nap). A szolár képlet a következő születésnapig tartó **év témáit** mutatja: a szolár ASC, a bolygók házhelyzete és fényszögei az év fókuszait adják. Vitatott kérdés: a születési vagy az aktuális tartózkodási helyre kell-e számolni (mindkét iskola létezik). Analóg technika a **lunár return** (havi képlet a Hold visszatérésére).

---

## 9. Történeti háttér

- **Babiloni eredet (Kr. e. 2. évezred – Kr. e. 5. század):** a mezopotámiai ómen-asztrológia (pl. az *Enūma Anu Enlil* ékírásos sorozat) az égi jelenségeket állami-királyi előjelekként értelmezte. A **Kr. e. 5. században** a babiloni csillagászok bevezették a 12 × 30°-os, matematikailag szabályos zodiákust — ez eredetileg **sziderikus** volt (csillagokhoz rögzített). Ekkortájt jelentek meg az első személyes születési képletek (a legkorábbi ismert horoszkóp Kr. e. 410 körülről való).
- **Hellenisztikus asztrológia (Kr. e. 2. század – Kr. u. 7. század):** Egyiptomban (Alexandria) a babiloni zodiákus, az egyiptomi dekánok és a görög geometriai-filozófiai gondolkodás összeolvadásából született meg a horoszkópikus asztrológia: aszcendens, házak, fényszögek, uralmi rendszerek. **Ptolemaiosz** *Tetrabiblosz*a (Kr. u. ~150) kanonizálta a **tropikus** zodiákust (a tavaszponthoz rögzítve), és több mint egy évezredre a nyugati asztrológia alapműve lett.
- **Precesszió:** **Hipparkhosz** (Kr. e. 2. század) fedezte fel a tavaszpont lassú eltolódását a csillagokhoz képest. A Föld forgástengelyének ~25 800 éves kúpos mozgása (precesszió) miatt a tavaszpont évente ~50,3 ívmásodpercet, azaz kb. **72 évenként 1 fokot** csúszik hátra a csillagképekhez képest.
- **Tropikus vs. sziderikus zodiákus:** a hellenisztikus korban a két rendszer közel egybeesett, mára a különbség (**ajanamsza**) kb. **24°** (Lahiri-ajanamsza, 2026: ~24°13′). Ezért aki a tropikus rendszerben pl. Kos, az a sziderikusban többnyire Halak. A **nyugati asztrológia tropikus** (évszakokhoz rögzített, szimbolikus rendszer), a **védikus/indiai (dzsjotis) sziderikus** (csillagképekhez igazított). A csillagászati csillagképek tényleges határai (köztük a 13. „jegyként" emlegetett Kígyótartó/Ophiuchus) a tropikus asztrológiát nem érintik, mert az nem a csillagképeket, hanem az évszakok szerinti 30°-os szakaszokat használja.
- **Későbbi korok röviden:** arab-perzsa középkori virágzás (Abu Ma'shar) → európai reneszánsz egyetemi asztrológia → 17. századtól hanyatlás a tudományos forradalommal → 19–20. századi újjászületés (teozófia, Alan Leo), 20. századi pszichologizálás (Dane Rudhyar, Liz Greene — jungiánus asztrológia) → 1990-es évektől a hellenisztikus hagyomány „visszafordítási" mozgalma (Project Hindsight, Chris Brennan) és az internetes-appos tömegkultúra (Co–Star, The Pattern).

---

## 10. A napi/heti/havi horoszkóp készítésének logikája

A tömegeknek szóló horoszkóp nem személyes képletet elemez, hanem a **12 napjegyre** (vagy aszcendensre) általánosít. A készítés logikája:

### 10.1 Mit néz a horoszkópíró?

1. **A Hold járása (a napi horoszkóp motorja):**
   - Melyik jegyben jár a Hold? (~2,5 naponta vált → napi hangulati alaptónus: Kos-Hold = lendület, Bika-Hold = nyugalom/élvezetek, Halak-Hold = érzékenység stb.)
   - A Hold aznapi fényszögei a többi bolygóval (pl. Hold–Vénusz trigon = kellemes, társas nap; Hold–Szaturnusz kvadrát = nyomott hangulat, kötelességek).
   - **Holdfázis:** újhold = kezdetek, teleholdak = kicsúcsosodás/feszültség, fogyó hold = lezárás. Az újhold/telihold jegye megmutatja, mely életterületet aktiválja az adott jegy szülötteinél.
   - **Üresjáratú Hold (void of course):** amikor a Hold már nem képez több pontos fényszöget a jegyváltása előtt — hagyományosan nem alkalmas új dolgok indítására.
2. **Aznapi/heti pontos fényszögek a bolygók között** (pl. Vénusz–Jupiter trigon = bőség, szerencse a szerelemben; Mars–Plútó kvadrát = hatalmi harcok) — ezek adják a nap „főcímét".
3. **Jegyváltások (ingresszusok):** ha a Nap, Merkúr, Vénusz vagy Mars jegyet vált, az heti/havi léptékben új témát nyit.
4. **Retrográd időszakok:** Merkúr retrográd (évente ~3×, ~3 hét) = kommunikáció/utazás/technika felülvizsgálata; Vénusz, Mars és a lassú bolygók retrográdjai hosszabb visszatekintő időszakok.
5. **Fogyatkozások:** nap- és holdfogyatkozás (évente ~4–6) = sorsfordító, kiemelt újholdak/teleholdak a csomóponti tengely mentén.

### 10.2 Hogyan lesz ebből 12 jegyre szóló szöveg?

A kulcstrükk a **szoláris házrendszer**: az adott jegyet 1. háznak véve nézik, hogy az aktuális égi esemény az adott jegynek **hányadik házába** esik. Példa: telihold a Bakban →
- a **Rák** jegyűeknek ez a 7. ház (párkapcsolati kicsúcsosodás),
- a **Kosoknak** a 10. ház (karrier-fordulat),
- a **Mérlegeknek** a 4. ház (családi-otthoni téma).

Így ugyanabból az égi eseményből 12 különböző, életterület-specifikus előrejelzés generálható. **Ez a logika közvetlenül algoritmizálható:** (esemény jegye − olvasó jegye + 1) mod 12 = az érintett szoláris ház, majd a ház jelentése (3. fejezet) + a bolygó jelentése (2. fejezet) + a fényszög minősége (4. fejezet) adja a szöveg vázát.

### 10.3 Idősíkok

| Műfaj | Fő tényezők |
|-------|-------------|
| **Napi** | Hold jegye + Hold fényszögei + aznapi pontos bolygó-aspektusok |
| **Heti** | újhold/telihold, gyors bolygók jegyváltásai és fő fényszögei, retrográd fordulók |
| **Havi** | Nap jegyváltása, új-/telihold (+fogyatkozás) házhelyzete jegyenként, Merkúr/Vénusz/Mars mozgása |
| **Éves** | lassú bolygók (Jupiter–Plútó) jegyváltásai és nagy fényszögei, fogyatkozás-tengelyek, Szaturnusz-ciklusok |

---

## 11. Források

A dokumentum tényanyagának ellenőrzéséhez használt főbb források:

- [Aquarius (astrology) — Wikipedia](https://en.wikipedia.org/wiki/Aquarius_(astrology)) — jegy-dátumhatárok, uralkodók
- [The Great Almanac — 12 Zodiac Signs: Dates, Elements, Modalities, and Rulers](https://www.thegreatalmanac.com/zodiac/)
- [AstrologyBay — Zodiac Sign Date Ranges](https://astrologybay.com/zodiac-date-ranges) — a jegyhatárok évenkénti ingadozása
- [Cafe Astrology — The Meaning of the Aspects in Astrology](https://cafeastrology.com/articles/aspectsinastrology.html) — fényszögek, orbisok
- [Astrotheme — Astrological Aspects, Their Orb and Meaning](https://www.astrotheme.com/astrology_aspects.php) — orbis-ajánlások
- [Astrolibrary — Aspects and Orbs](https://astrolibrary.org/aspects-in-astrology/), [Essential Dignities](https://astrolibrary.org/essential-dignities/)
- [Exaltation (astrology) — Wikipedia](https://en.wikipedia.org/wiki/Exaltation_(astrology)) — exaltációs fokok
- [Renaissance Astrology — Exaltation Degrees of the Planets](https://www.renaissanceastrology.com/exaltationdegrees.html)
- [Traditional-astrology.com — Planetary Dignities Explained](https://traditional-astrology.com/blog/planetary-dignities-explained.html) — méltóság-pontrendszer
- [Seven Stars Astrology — The Origin of the Zodiac / How Old is the Tropical Zodiac?](https://sevenstarsastrology.com/babylonian-zodiac/) — babiloni és hellenisztikus történet
- [Augurine — Babylonian Astrology: The Origin of the Zodiac](https://www.augurine.com/learn/babylonian-astrology)
- [DashaClub — Sidereal vs Tropical Astrology](https://dashaclub.com/learn/sidereal-tropical) és [Astrokarak — Tropical vs Sidereal](https://www.astrokarak.com/blog/tropical-vs-sidereal-astrology) — ajanamsza, precesszió
- Klasszikus alapmű: Claudius Ptolemaiosz: *Tetrabiblosz* (Kr. u. ~150)

*Készült: 2026. augusztus 26.*
