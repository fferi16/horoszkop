# Kronobiológia — a belső óra tudománya

> **A dokumentum célja:** referenciaanyag a Horoszkóp-projekt tudományos ágához. A kronobiológia a biológiai ritmusok **valódi, kísérletileg igazolt tudománya** — élesen elválasztandó az asztrológiától és a klasszikus bioritmus-elmélettől. Ahol a dokumentum áltudományos vagy népszerűsítő modellt tárgyal (Breus-kronotípusok, 23/28/33 napos bioritmus), azt **külön megjelöli**. A cél, hogy egy későbbi app kronotípus-alapú napi ajánlásokat tudjon adni tudományosan védhető alapon.

---

## Tartalom

1. [Alapfogalmak](#1-alapfogalmak)
2. [Kronotípusok](#2-kronotípusok)
3. [Napi teljesítménygörbék — gyakorlati táblázatok](#3-napi-teljesítménygörbék)
4. [Szociális jetlag, műszakos munka, fény, alváshigiénia](#4-szociális-jetlag-műszakos-munka-fényexpozíció-alváshigiénia)
5. [Infradián ritmusok: menstruációs ciklus, szezonalitás, SAD](#5-infradián-ritmusok)
6. [Születési szezonalitás (season-of-birth) kutatások](#6-születési-szezonalitás-season-of-birth-effektusok)
7. [A klasszikus bioritmus-elmélet (áltudomány) + számítási képletek](#7-a-klasszikus-bioritmus-elmélet-23--28--33-nap--áltudomány)
8. [Kronofarmakológia és krono-táplálkozás](#8-kronofarmakológia-és-krono-táplálkozás)
9. [Összefoglaló: mit építhet erre egy app?](#9-összefoglaló-mit-építhet-erre-egy-app)
10. [Források](#10-források)

---

## 1. Alapfogalmak

### 1.1 Mi a kronobiológia?

A **kronobiológia** az élő szervezetek időbeli szerveződését, periodikus (ritmikus) folyamatait vizsgáló tudományág. Alapfelismerése, hogy a biológiai ritmusok nem pusztán a környezet változásaira adott passzív válaszok, hanem **endogén** (belső, génekben kódolt) oszcillátorok hajtják őket, amelyeket a környezeti jelek csupán szinkronizálnak.

A ritmusokat periódushosszuk szerint három fő csoportba soroljuk:

| Ritmustípus | Periódus | Példák |
|---|---|---|
| **Cirkadián** (latin *circa diem* = „körülbelül egy nap") | ~24 óra | alvás–ébrenlét, testhőmérséklet, melatonin, kortizol, vérnyomás |
| **Ultradián** (24 óránál rövidebb) | percek–órák | alvási ciklusok (~90 perc, REM/NREM), hormonpulzusok (pl. GH, LH), étkezés–éhség ciklus, figyelmi ingadozások (BRAC-hipotézis, ~90–120 perc) |
| **Infradián** (24 óránál hosszabb) | napok–hónapok–év | menstruációs ciklus (~28 nap), szezonális ritmusok (cirkannuális, ~1 év), egyes állatoknál árapály- (cirkatidális) és holdritmusok |

### 1.2 A cirkadián ritmus és a szuprakiazmatikus mag (SCN)

Az emlősök **központi órája** a hipotalamuszban, közvetlenül a látóideg-kereszteződés (chiasma opticum) felett elhelyezkedő **szuprakiazmatikus mag** (SCN, *nucleus suprachiasmaticus*): kb. 20 000 idegsejtből álló páros magcsoport. Az SCN sejtjei külső jel nélkül is ~24 órás ritmust generálnak (izolált SCN-sejtek Petri-csészében is „ketyegnek"). Az emberi belső óra szabadonfutó periódusa átlagosan **kissé hosszabb 24 óránál** (~24,2 óra, egyéni szórással), ezért napi újraszinkronizálásra szorul.

Fontos, hogy nemcsak központi óra létezik: gyakorlatilag **minden szervben és sejtben működnek perifériás órák** (máj, hasnyálmirigy, zsírszövet, izom, bél stb.), amelyeket az SCN karmesterként hangol össze — de a perifériás órákat az étkezés időzítése részben függetlenül is át tudja állítani (ennek a krono-táplálkozásnál lesz jelentősége).

### 1.3 Zeitgeberek — a szinkronizáló jelek

A **Zeitgeber** (német: „időadó") olyan környezeti jel, amely a belső órát a külső 24 órás naphoz igazítja (entrainment). Erősorrendben:

1. **Fény** — messze a legerősebb Zeitgeber. A retinában a pálcikákon és csapokon kívül léteznek **fotoszenzitív retinális ganglionsejtek (ipRGC)**, amelyek **melanopszin** pigmentet tartalmaznak, és a **retinohipotalamikus pályán** közvetlenül az SCN-be vetülnek. A melanopszin a **rövid hullámhosszú (kék, ~460–480 nm)** fényre a legérzékenyebb — ezért kritikus az esti képernyőfény kérdése. A fény hatása **fázisfüggő** (fázis-válasz görbe, PRC): a kora reggeli fény *előbbre* hozza (fázissietés), a késő esti/éjszakai fény *későbbre* tolja (fáziskésés) az órát.
2. **Étkezés időzítése** — elsősorban a perifériás órákat (máj, anyagcsere) állítja.
3. **Fizikai aktivitás / testmozgás** — mérsékelt, de kimutatható fázistoló hatás; az időzített edzés segíthet az átállásban.
4. **Szociális jelek, hőmérséklet** — gyengébb, másodlagos Zeitgeberek.

### 1.4 A fő cirkadián markerek napi görbéi

- **Melatonin** („a sötétség hormonja"): a tobozmirigy termeli, kizárólag sötétben. Szintje este, kb. 2 órával a szokásos elalvás előtt kezd emelkedni (**DLMO — dim light melatonin onset**, a cirkadián fázis arany standard laboratóriumi markere), az éjszaka közepén (kb. 02:00–04:00) tetőzik, reggelre leesik. **A fény — különösen a kék — azonnal elnyomja a termelését.** Nem „altató", hanem időjelző hormon.
- **Kortizol**: ébredés előtt kezd emelkedni, az ébredést követő 30–45 percben éri el csúcsát (**CAR — cortisol awakening response**), majd a nap folyamán fokozatosan csökken, mélypontja éjfél körül van. A reggeli kortizolcsúcs a szervezet „indítómotorja".
- **Testmaghőmérséklet**: napi ~0,5–1,0 °C-os ingadozás. Mélypontja (nadír) a szokásos ébredés előtt kb. 2 órával (tipikusan hajnali 04:00–05:00), csúcsa a kora estében (kb. 17:00–19:00) — ez utóbbi egybeesik a fizikai teljesítmény (izomerő, reakcióidő, flexibilitás) napi csúcsával. Az elalvást a hőmérséklet *csökkenő* szakasza segíti.
- Egyéb ritmusos változók: vérnyomás (reggeli „surge", éjszakai „dipping"), szívfrekvencia, glükóztolerancia (délelőtt jobb, este romlik), vesefunkció, immunmarkerek, fájdalomküszöb, éberség.

### 1.5 A molekuláris óramű és a 2017-es orvosi Nobel-díj

A 2017-es fiziológiai és orvostudományi Nobel-díjat **Jeffrey C. Hall, Michael Rosbash és Michael W. Young** kapta „a cirkadián ritmust szabályozó molekuláris mechanizmusok felfedezéséért". A kulcskísérleteket ecetmuslicán (*Drosophila melanogaster*) végezték:

- Seymour Benzer és Ronald Konopka már 1971-ben azonosított óra-mutáns legyeket (**period** gén), de a gént molekulárisan **1984-ben** izolálta Hall és Rosbash (Brandeis Egyetem), illetve tőlük függetlenül Young (Rockefeller Egyetem).
- A mechanizmus lényege a **transzkripciós-transzlációs negatív visszacsatolási hurok (TTFL)**: a *period* (*per*) és a Young által 1994-ben felfedezett *timeless* (*tim*) gének fehérjetermékei (PER és TIM) éjszaka felhalmozódnak, a sejtmagba lépve **gátolják saját génjeik átírását**, majd lebomlanak — és a ciklus ~24 óránként újraindul. Young a *doubletime* gént (DBT kináz) is azonosította, amely a PER lebomlási ütemét — vagyis az óra „járásának sebességét" — hangolja.
- **Emlősökben** (így emberben) az analóg rendszer fő elemei: a pozitív ág a **CLOCK** és **BMAL1** transzkripciós faktorok (heterodimerként E-box szekvenciákhoz kötve aktiválják a célgéneket), a negatív ág a **PER1/2/3** és a **CRY1/2** (kriptokróm) fehérjék, amelyek gátolják a CLOCK/BMAL1-et. Kiegészítő hurkok: REV-ERBα/β és ROR receptorok (a *Bmal1* ritmusát adják), CK1δ/ε kinázok (fehérje-stabilitás). A genom génjeinek jelentős része (szövettől függően akár ~40%-a) mutat cirkadián expressziót valamelyik szervben.

Ez a molekuláris óramű az alapja annak, hogy a kronotípusnak **valódi genetikai háttere** van (lásd 2.4).

---

## 2. Kronotípusok

### 2.1 Mi a kronotípus?

A **kronotípus** az egyén cirkadián fázisának viselkedéses megnyilvánulása: mikor alszik, mikor éber, mikorra esik a teljesítménycsúcsa, ha szabadon választhat. Kontinuum, nem éles kategóriák — a népesség eloszlása közel normális:

- **Korai típus** („pacsirta", morning type): korán ébred, délelőtt csúcsformában, este korán fárad. A felnőtt népesség kb. 15–25%-a.
- **Köztes (intermedier) típus**: a többség, kb. 50–60%.
- **Kései típus** („bagoly", evening type): nehezen kel, délután-este pörög fel, éjfél után alszik el szívesen. Kb. 15–25%.

A kronotípus **nem lustaság vagy fegyelem kérdése**, hanem részben genetikailag meghatározott biológiai fenotípus — ez az app-kommunikációban is kulcsüzenet.

### 2.2 Mérőeszközök: MEQ és MCTQ

**MEQ — Morningness–Eveningness Questionnaire (Horne–Östberg, 1976).** 19 kérdéses önkitöltő kérdőív a *preferenciákról* (mikor kelnél/edzenél/dolgoznál legszívesebben). Pontszám: **16–86**. Eredeti kategóriák:

| Pontszám | Típus |
|---|---|
| 70–86 | határozottan reggeli |
| 59–69 | mérsékelten reggeli |
| 42–58 | köztes |
| 31–41 | mérsékelten esti |
| 16–30 | határozottan esti |

(A határértékek populációfüggők; validációs vizsgálatok középkorú munkavállalóknál más vágópontokat találtak. Létezik rövidített, 5 kérdéses változat is: rMEQ.)

**MCTQ — Munich ChronoType Questionnaire (Roenneberg és Merrow, 2002 körül).** Nem preferenciát, hanem **tényleges alvásidőzítést** kérdez, külön munkanapokra és szabadnapokra. Fő mutatója az **MSFsc**: a szabadnapi alvásközéppont (mid-sleep on free days), korrigálva a munkahét alatt felhalmozott alváshiány szabadnapi „visszaalvásával". Az MSFsc a cirkadián fázis (phase of entrainment) jó közelítő biológiai markere; ebből számítható a **szociális jetlag** is (lásd 4.1). Egy app számára az MCTQ-logika (alvásidőpontok bekérése munkanapon/szabadnapon) egyszerűen implementálható és tudományosan megalapozott kronotípus-becslést ad. Létezik ultrarövid változata is (µMCTQ).

### 2.3 Michael Breus 4 kronotípusa — NÉPSZERŰSÍTŐ MODELL

> **Megjelölés: ez nem validált tudományos taxonómia**, hanem Michael Breus klinikai pszichológus, alvásszakértő népszerűsítő modellje a *The Power of When* (2016) című könyvből. Marketingben és appokban rendkívül elterjedt, ezért érdemes ismerni — de az app-ban jelezni kell, hogy tudományosan a MEQ/MCTQ-alapú kontinuum a megalapozott.

| Breus-típus | Kb. arány (Breus szerint) | Megfeleltetés | Jellemzés (Breus szerint) |
|---|---|---|---|
| **Delfin** | ~10% | rossz alvók / inszomniás hajlam | éber, perfekcionista, könnyen felriad, szabálytalan alvó |
| **Oroszlán** | ~15–20% | korai típus (pacsirta) | hajnalban kel, délelőtt csúcs, este korán fárad |
| **Medve** | ~50–55% | köztes típus | a napfényciklust követi, a legtöbb ember ide tartozik |
| **Farkas** | ~15–20% | kései típus (bagoly) | későn kel, este kreatív és energikus |

A modell újítása a „delfin" kategória, amely valójában nem kronotípus, hanem **alvásminőség-dimenzió** (inszomniás hajlam) — a tudományos irodalom ezt külön kezeli a kronotípustól.

### 2.4 A kronotípus genetikája és változása az életkorral

**Genetika.** A kronotípus örökölhetősége iker- és családvizsgálatok alapján kb. **40–50%**. Ismert asszociációk:

- **PER3 VNTR** (54 bp hosszú, 4 vagy 5 ismétlődésű szakasz): az 5-ismétlődéses allél a reggeliséggel, a 4-es az estiséggel és a késleltetett alvásfázis zavarral (DSWPD) mutatott összefüggést több vizsgálatban — bár az eredmények nem teljesen konzisztensek.
- **CRY1** funkciónyeréses variáns: családi halmozódású késleltetett alvásfázis zavart okoz (a hordozók kb. 1 órával később alszanak).
- **PER2** mutáció: familiáris korai alvásfázis szindróma (FASP) — extrém pacsirtaság.
- **DEC2 (BHLHE41)** ritka variánsa: természetes rövid alvók (~6 óra alvással is kipihentek).
- Nagy **GWAS**-vizsgálatok (23andMe, UK Biobank; több százezer fő) több száz kronotípussal asszociált génhelyet azonosítottak (köztük a fenti óragének környékét) — egyenként apró, összegződő hatásokkal.

**Életkor.** A kronotípus szisztematikusan változik: kisgyerekek koraiak; a serdülőkorban a fázis erősen **későbbre tolódik** (biológiai, nem csak szociális okból — ezért ütközik a korai iskolakezdés a tinédzserek órájával), a legkésőbbi kronotípus **kb. 19–21 éves kor körül** jellemző (nőknél valamivel korábban tetőzik, mint férfiaknál), majd az életkorral fokozatosan **egyre koraibbá** válik; idős korban a pacsirtaság dominál. Egy app-nak érdemes az életkort is figyelembe vennie.

---

## 3. Napi teljesítménygörbék

### 3.1 Általános mintázatok (tudományos alapok)

- **Éberség/kognitív teljesítmény**: az ébredés utáni 1–2 órában **alvási tehetetlenség** (sleep inertia) rontja a teljesítményt; délelőtt emelkedő csúcs; **kora délutáni völgy** („post-lunch dip", kb. 13:00–15:00 — részben a cirkadián görbe, nem csak az ebéd okozza); kora esti második csúcs; éjszaka mélypont.
- **Analitikus, fókuszált munka** a kronotípus szerinti **csúcsidőben** megy legjobban; **kreatív, belátás-alapú (insight) feladatok** viszont — érdekes, replikált eredmény (Wieth & Zacks, 2011) — gyakran a **nem-optimális napszakban** sikerülnek jobban, amikor a gátlás lazább.
- **Fizikai teljesítmény** (erő, gyorsaság, ízületi mozgékonyság, reakcióidő): a testhőmérséklet-csúcshoz kötve **késő délután–kora este** (kb. 16:00–19:00) a legjobb a legtöbb embernél; a sérülésveszély reggel nagyobb. A rendszeres edzésidőponthoz a szervezet adaptálódik.
- **Glükóztolerancia** délelőtt jobb — a nagy étkezéseket érdemes a nap első felére időzíteni (lásd 8.2).

### 3.2 Gyakorlati táblázat kronotípusonként

Az időpontok **irányadó sávok** egy tipikus felnőttre; a Breus-féle elnevezést zárójelben adjuk meg a népszerű megfeleltetés kedvéért. Egy app ezt az egyéni MSFsc/MEQ-pontszám alapján tolja el.

| Tevékenység | Korai típus (oroszlán) | Köztes típus (medve) | Kései típus (farkas) |
|---|---|---|---|
| Ébredés | 05:30–06:30 | 07:00–08:00 | 08:30–10:00 |
| Reggeli fényexpozíció (kritikus) | ébredés után azonnal | ébredés után 30 percen belül | ébredés után azonnal, erős fény (fázissietéshez) |
| Reggeli étkezés | 06:00–07:00 | 07:30–08:30 | 09:00–10:30 |
| **Mélymunka / analitikus csúcs #1** | 07:00–11:00 | 10:00–13:00 | 12:00–14:00 |
| Megbeszélések, rutinfeladatok | 11:00–14:00 | 13:00–15:00 | 14:00–16:00 |
| Kora délutáni völgy (szieszta/séta) | 13:00–14:00 | 14:00–15:00 | 15:00–16:00 |
| **Második csúcs / kreatív munka** | 14:00–16:00 | 15:00–18:00 | 17:00–00:00 (legerősebb sáv: 17:00–21:00) |
| Sport, edzés (erő/állóképesség) | 16:00–18:00 (vagy reggel, adaptációval) | 16:00–19:00 | 18:00–20:00 |
| Vacsora (lehetőleg lefekvés előtt ≥3 órával) | 17:30–18:30 | 18:30–19:30 | 19:30–20:30 |
| Képernyő-/fénycsökkentés kezdete | 20:00 | 21:00 | 22:30 |
| Lefekvés | 21:30–22:30 | 23:00–23:30 | 00:00–01:30 |
| Kávé/koffein utolsó időpontja (~lefekvés előtt 8–9 óra) | ~13:00 | ~14:30 | ~16:00 |

**Megjegyzések app-logikához:**
- A „delfin" (rossz alvó) típusnak nem időzítési, hanem **alváshigiéniai és kognitív viselkedésterápiás (CBT-I)** ajánlások valók.
- A kései típusnak a társadalmi kötelezettségek (9-es munkakezdés) miatt a **reggeli fényterápia + esti fénykerülés** a leghasznosabb gyakorlati tanács a fázis előrehozására.
- Minden ajánlás mellé odaférjen: az egyéni eltérés nagy, a táblázat kiindulópont, nem előírás.

---

## 4. Szociális jetlag, műszakos munka, fényexpozíció, alváshigiénia

### 4.1 Szociális jetlag

**Definíció (Roenneberg):** a munkanapi és szabadnapi alvásközéppont különbsége — `SJL = |MSF − MSW|`. Azt méri, mennyire kényszeríti a társadalmi órarend (munka, iskola) a biológiai órától eltérő alvásidőzítésre az embert; olyan, mintha az illető hetente oda-vissza utazna 1–3 időzónát. A népesség jelentős részénél (különösen kései kronotípusú fiataloknál) **1–2 óra feletti** a szociális jetlag. Epidemiológiai vizsgálatokban a nagyobb SJL összefüggést mutat: elhízás és metabolikus kockázatok, rosszabb hangulat, több dohányzás/koffein/alkohol, rosszabb tanulmányi teljesítmény. (Ezek nagyrészt keresztmetszeti, korrelációs adatok — az ok-okozatiság óvatosan kezelendő.)

### 4.2 Műszakos munka

A több műszakban, különösen éjszaka dolgozók tartós **cirkadián deszinkronizációban** élnek. Dokumentált összefüggések: alvászavarok (műszakos munka okozta alvászavar, SWD), emelkedett szív-érrendszeri és metabolikus kockázat (2-es típusú cukorbetegség, elhízás), emésztési panaszok, hangulatzavarok, balesetveszély. Az **IARC** (a WHO rákkutató ügynöksége) a cirkadián ritmust felborító éjszakai műszakos munkát a **2A csoportba** („valószínűleg rákkeltő az emberre") sorolta (2007, megerősítve 2019), elsősorban emlőrákkal kapcsolatos adatok alapján. Enyhítő stratégiák: előre forgó műszakrend (délelőtt→délután→éjszaka), erős fény a műszak elején és fénykerülés (napszemüveg) hazaúton reggel, védett sötét alváskörnyezet, stratégiai szunyókálás, időzített koffein.

### 4.3 A fényexpozíció szerepe

- **Reggel/nappal: sok fény.** A kültéri fény felhős időben is 1 000–10 000 lux, beltéri világítás jellemzően csak 100–500 lux. A reggeli fény stabilizálja és előbbre hozza a fázist, javítja a hangulatot és az éberséget.
- **Este/éjjel: kevés és meleg fény.** Az esti (különösen kék-gazdag) fény késlelteti az órát és elnyomja a melatonint. Gyakorlat: lefekvés előtt 1–2 órával tompított, meleg fény; képernyők éjszakai módja segíthet, de a **tartalom stimuláló hatása** és a fényerő legalább annyira számít.
- **Fényterápia**: 10 000 lux, 20–30 perc, ébredés után — bizonyítottan hatásos SAD-ban (lásd 5.3) és a kései fázis előrehozásában.

### 4.4 Alváshigiénia — alapok (evidenciaalapú lista)

1. Állandó ébredési idő, hétvégén is (±1 órán belül) — ez a legerősebb egyedi tényező.
2. Reggeli természetes fény, esti fénycsökkentés.
3. Koffein lefekvés előtt legalább 8–9 órával lezárva (a koffein felezési ideje ~5 óra, egyéni szórással).
4. Alkohol kerülése altatóként (elalvást gyorsítja, de az alvás második felét és a REM-et rontja).
5. Hűvös (kb. 17–19 °C), sötét, csendes hálószoba; az ágy csak alvásra.
6. Nagy étkezés és intenzív edzés lefekvés előtt 2–3 órával zárva (a könnyű mozgás nem probléma).
7. Szunyókálás: rövid (10–20 perc) és kora délutáni; késői/hosszú alvás rontja az esti alvásnyomást.
8. Tartós inszomniára az elsővonalbeli, bizonyítottan hatásos kezelés a **CBT-I** (kognitív viselkedésterápia inszomniára), nem az altató.

---

## 5. Infradián ritmusok

### 5.1 Menstruációs ciklus

Az ember legjobban dokumentált infradián ritmusa: átlagosan ~28 napos (normál tartomány kb. 21–35 nap), a hipotalamusz–hipofízis–petefészek tengely (GnRH–FSH/LH–ösztrogén/progeszteron) hormonális oszcillációja. Fázisai: menstruáció → follikuláris fázis (emelkedő ösztrogén) → ovuláció (LH-csúcs) → luteális fázis (progeszteron-dominancia). Kronobiológiai vonatkozások: a luteális fázisban a testmaghőmérséklet ~0,3–0,5 °C-kal magasabb, az alvásszerkezet és a hangulat mérhetően változhat (PMS/PMDD); a cirkadián és a menstruációs rendszer kölcsönhatásban áll (műszakos munka és cirkadián zavar összefügghet ciklus-rendellenességekkel. A népszerű „cycle syncing" (ciklus-szinkronizált edzés/étrend) trend tudományos alátámasztottsága egyelőre gyenge — app-tartalomban óvatos megfogalmazás indokolt.) **Fontos cáfolat:** a menstruációs ciklusok holdfázissal való szinkronja a nagy adatbázisos vizsgálatok szerint **nem igazolt** (a ~29,5 napos holdhónap és a ~28 napos átlagciklus hasonlósága véletlen egybeesés).

### 5.2 Szezonális (cirkannuális) ritmusok

Sok fajnál robusztus éves ritmusok működnek (vándorlás, hibernáció, szaporodási szezon), a nappalhossz (fotoperiódus) és a melatonin-jel közvetítésével. Embernél a szezonalitás mérsékeltebb, de kimutatható: hangulat, alváshossz (télen kissé hosszabb), egyes hormonok (D-vitamin-szint napfényfüggése), immunműködés és bizonyos gének expressziója mutat évszakos mintázatot; a születések, a szív-érrendszeri események és a fertőzések szezonalitása jól dokumentált (bár utóbbiakban a környezeti tényezők — hideg, beltéri zsúfoltság, vírusszezon — dominálnak).

### 5.3 SAD — szezonális affektív zavar

A **szezonális affektív zavar** (seasonal affective disorder) a depresszió visszatérő, évszakhoz kötött formája — döntően **őszi-téli** kezdettel és tavaszi remisszióval (létezik ritkább nyári altípus is). Jellegzetes „atipikus" tünetek: fokozott aluszékonyság, szénhidrátéhség, súlygyarapodás, energiátlanság. Gyakorisága a földrajzi szélességgel nő; enyhébb formája a szubszindromális S-SAD („winter blues"). Feltételezett mechanizmusok: a rövid nappalok miatti cirkadián fáziskésés, megnyúlt melatonin-szekréció, szerotonin-rendszeri változások. **Kezelés:** az elsővonalbeli, jó evidenciájú terápia a **fényterápia** (10 000 lux, reggel 20–30 perc, fényterápiás lámpával), emellett CBT, antidepresszívumok (SSRI/bupropion), D-vitamin-hiány rendezése. (App-vonatkozás: őszi-téli tartalmakban a fényexpozíciós tanácsok kiemelése; a SAD gyanúja orvosi konzultációt igényel — ezt a disclaimerben jelezni kell.)

---

## 6. Születési szezonalitás (season-of-birth effektusok)

Ez a kronobiológia leg-„horoszkópszerűbb" területe: valóban léteznek statisztikai összefüggések a **születési hónap/évszak** és egyes egészségi, sőt viselkedéses kimenetek között — de a hatások **kicsik, populációs szintűek, és semmilyen egyéni előrejelzésre nem alkalmasak**. A mechanizmus sosem „égi hatás", hanem a magzati és csecsemőkori környezet szezonális változása: anyai fertőzések (influenzaszezon), D-vitamin/napfény, hőmérséklet, táplálkozás, allergénexpozíció, illetve mesterséges tényezők (iskolakezdési vágópontok, szülési szokások szezonalitása).

**Amit a kutatások mutatnak (a legjobban dokumentált példák):**

- **Szkizofrénia**: a legrégebbi és legrobusztusabb lelet — az északi féltekén a **téli-tavaszi születésűek** kockázata kissé magasabb. A metaanalízisek szerint a hatás **nagyon kicsi**: a téli születés esélyhányadosa kb. **OR ≈ 1,04–1,05**, a nyári születés enyhén védő (OR ≈ 0,96); másképp fogalmazva a téli-tavaszi hónapokban a szkizofréniával élők születési aránya kb. 5–8%-kal magasabb a népességi alaparánynál. Fő hipotézis: anyai influenzafertőzés a terhesség második trimeszterében, illetve téli D-vitamin-hiány. A déli féltekén a mintázat nem konzisztens.
- **Egyéb pszichiátriai és neurológiai kimenetek**: bipoláris zavar, major depresszió, szklerózis multiplex (tavaszi születés — anyai D-vitamin-hipotézis) esetében is leírtak kis szezonális hatásokat, változó replikálhatósággal.
- **Allergia, asztma**: a pollenszezonhoz/őszi vírusszezonhoz viszonyított születési időzítés kis kockázatmódosulásokkal jár.
- **Kronotípus**: több vizsgálat szerint az ősszel-télen születettek kissé koraibb, a tavasszal-nyáron születettek kissé későbbi kronotípusra hajlamosak (a korai fejlődés alatti fotoperiódus „beprogramozó" hatásának hipotézise) — a hatás itt is kicsi és nem minden mintában replikálódott.
- **Élettartam, testméret, termékenység**: történeti kohorszokban kimutatott apró (napokban-hónapokban mérhető) különbségek, amelyek a XX. századi jólét-növekedéssel jórészt zsugorodtak.
- **„Relative age effect"**: a születési hónap iskolai és sportbeli sikerrel való összefüggése (az évfolyam legidősebbjei előnyben) — ez **tisztán társadalmi műtermék** (vágódátumok), nem biológia, mégis gyakran keveredik a szezonalitási irodalomba.
- **Személyiség**: néhány tanulmány talált apró asszociációkat (pl. novelty seeking, affektív temperamentumok és születési évszak), de a hatásméretek elhanyagolhatók, a replikáció gyenge, és a terület publikációs torzításra hajlamos. **A születési hónapból egyéni személyiség nem jósolható** — ez a döntő különbség az asztrológiai állításokkal szemben.

**App-tartalmi irányelv:** a season-of-birth kutatás jól használható „tudtad-e?" jellegű, tudományosan korrekt tartalomként — mindig a kis hatásméret és a környezeti (nem asztrológiai) mechanizmus hangsúlyozásával. Egyéni predikcióra, ajánlásra használni tudományosan védhetetlen.

---

## 7. A klasszikus bioritmus-elmélet (23 / 28 / 33 nap) — ÁLTUDOMÁNY

> **Megjelölés: ez a fejezet egy tudományosan cáfolt, áltudományos elméletet dokumentál** — kizárólag azért részletesen, mert appokban és népszerű kultúrában máig elterjedt, és a projektnek ismernie kell (akár „retró/szórakoztató" funkcióként, egyértelmű disclaimerrel).

### 7.1 Eredet és állítások

A XIX. század végén **Wilhelm Fliess** berlini orr-fül-gégész (Freud barátja és levelezőtársa) számmisztikai alapon úgy vélte, hogy az élet eseményei 23 napos „férfi" és 28 napos „női" ciklusokat követnek. **Hermann Swoboda** bécsi pszichológus a 1900-as évek elején hasonló következtetésre jutott; **Alfred Teltscher** innsbrucki mérnök-tanár később 33 napos „intellektuális" ciklust vélt felfedezni diákjai teljesítményében. Az elmélet az 1970-es években (George Thommen, Bernard Gittelson könyvei nyomán) vált tömegjelenséggé, kalkulátorokkal és — ma — mobilappokkal.

Az állítás: a születés pillanatától három (egyes kiterjesztésekben több) rögzített periódusú szinuszhullám fut:

| Ciklus | Periódus | Állítólagos tartalom |
|---|---|---|
| Fizikai | 23 nap | erő, állóképesség, koordináció |
| Emocionális | 28 nap | hangulat, érzelmek, kreativitás |
| Intellektuális | 33 nap | logika, memória, koncentráció |
| *(kiterjesztések)* | 38 nap („intuíciós"), 43 nap („esztétikai"), 53 nap („spirituális") | későbbi, még önkényesebb hozzátoldások |

A görbe pozitív fele „erős", negatív fele „gyenge" időszak; a nullátmenet napja **„kritikus nap"** (állítólag baleset-hajlamos); ha több ciklus egyszerre vált előjelet, „dupla/tripla kritikus nap".

### 7.2 Számítás (app-implementációhoz)

A modell tisztán determinisztikus. Legyen `t` a születés óta eltelt **teljes napok száma** (a születés napja = 0. nap; időzóna- és szökőnap-kezelésre dátumkönyvtárat érdemes használni):

```
t = (aktuális dátum) − (születési dátum)   [napokban, egész szám]

Fizikai:        P(t) = sin(2π · t / 23)
Emocionális:    E(t) = sin(2π · t / 28)
Intellektuális: I(t) = sin(2π · t / 33)
```

- Az értékek −1 és +1 közé esnek; %-os megjelenítés: `érték × 100`.
- **Kritikus nap**: ahol `sin(2π·t/T) ≈ 0`, azaz `t mod T = 0` vagy `t mod T = T/2` (fél periódusnál; 23-as és 33-as ciklusnál a fél periódus nem egész nap, ilyenkor a nullátmenetet két nap közé eső eseményként szokás jelölni).
- A három ciklus együttes mintázata `LCM(23, 28, 33) = 21 252` naponta (~58,2 év) ismétlődik — a bioritmus-irodalom kedvelt „érdekessége".
- Gyakori app-megjelenítés: a három szinusz egy hónapos ablakban, a mai nap kiemelésével; illetve „napi összpontszám" a három érték átlagaként (ennek sincs semmilyen tudományos alapja).

### 7.3 Miért áltudomány? A cáfolat

- **Nincs mechanizmus**: semmilyen ismert élettani folyamat nem produkál a születés pillanatától másodpercre pontosan, élethosszig fázistartó, mindenkinél azonos periódusú oszcillációt. A valódi biológiai ritmusok (lásd 1–5. fejezet) egyénenként eltérő periódusúak, környezeti jelekre fázist váltanak, zajosak.
- **Empirikus cáfolat**: az 1970–80-as években több tucat független vizsgálat tesztelte (ipari és közlekedési balesetek, sportteljesítmény, vizsgaeredmények, halálozás vs. „kritikus napok") — a metaelemzések (pl. Terence Hines összefoglalója; James Alcock, W. S. Bainbridge elemzései) szerint a találatok a **véletlen szintjén** mozognak. A pozitívnak tűnő korai eredmények módszertani hibákra és szelektív adatközlésre vezethetők vissza.
- **Pszichológiai magyarázat a népszerűségre**: Forer/Barnum-hatás, megerősítési torzítás, utólagos illeszkedés-keresés — ugyanazok a mechanizmusok, amelyek az asztrológia vélt „találatait" is magyarázzák.
- **Terminológiai csapda**: az angol *biorhythm* szót a tudományos irodalom is használja a valódi biológiai ritmusokra — a 23/28/33-as elmélet ettől élesen elválasztandó (a Wikipédia szócikke ezért viseli a „Biorhythm (pseudoscience)" címet).

**App-irányelv:** ha a bioritmus-funkció bekerül, kötelező mellé a jól látható jelzés: „szórakoztató célú, tudományosan cáfolt modell", és soha ne keveredjen a kronotípus-alapú, tudományos ajánlásokkal egy felületen megkülönböztetés nélkül.

---

## 8. Kronofarmakológia és krono-táplálkozás

### 8.1 Kronofarmakológia

A gyógyszerek hatása és mellékhatása napszakfüggő lehet (felszívódás, metabolizmus — a máj CYP-enzimei ritmusosak —, célpont-érzékenység). Példák a klinikai gyakorlatból:

- **Koleszterincsökkentők**: a rövid felezési idejű sztatinokat (pl. szimvasztatin) estére ajánlják, mert a koleszterinszintézis éjjel a legaktívabb.
- **Vérnyomáscsökkentők időzítése**: a kérdés aktívan kutatott. Egy nagy spanyol vizsgálat (Hygia, 2019) az esti bevétel jelentős előnyét jelezte, de módszertana erősen vitatott; a nagyobb és robusztusabb **TIME-vizsgálat (2022, Lancet)** szerint a reggeli vs. esti bevétel kimenetei **nem különböztek** — a lényeg a rendszeres szedés. (Jó példa arra, hogy a krono-állításokat is szigorú evidenciával kell mérni.)
- **Onkológia (kronoterápia)**: egyes citosztatikumok toxicitása napszakfüggő; kutatási terület.
- **Melatonin mint kronobiotikum**: kis dózisban, időzítetten a fázis eltolására használható (jetlag, késleltetett alvásfázis) — időzítése szakértelmet igényel, mert a fázis-válasz görbéje a fényével ellentétes irányú.
- **Kortikoszteroidok**: reggeli adagolás a természetes kortizolritmust utánozza, kevesebb mellékhatással.

### 8.2 Krono-táplálkozás és időkorlátozott étkezés (TRE)

A **chrononutrition** alaptézise: nemcsak *mit*, hanem *mikor* eszünk, az is számít, mert az étkezés a perifériás órák fő Zeitgebere.

- **Epidemiológiai kép**: a reggeli kihagyása, a késői vacsora és az esti kalóriatöbblet következetesen rosszabb kardiometabolikus mutatókkal társul (elhízás, 2-es típusú cukorbetegség, magas vérnyomás, diszlipidémia); a glükóztolerancia este fiziológiásan is romlik.
- **Időkorlátozott étkezés (time-restricted eating, TRE)**: a napi táplálékbevitel 8–10 órás ablakra szűkítése (pl. 08:00–18:00), kalóriaszámolás nélkül. A **korai TRE** (a nap első felére tolt ablak) kis, kontrollált vizsgálatokban javította az inzulinérzékenységet, a vérnyomást és a testsúlyt — de a randomizált vizsgálatok eredményei vegyesek, a minták kicsik, a hosszú távú adatok hiányoznak. Óvatos, „ígéretes, de nem csodaszer" kommunikáció indokolt.
- **Gyakorlati, konszenzus-közeli ajánlások**: a kalóriabevitel súlypontja a nap első felére essen; a vacsora legyen könnyebb és lefekvés előtt legalább 2–3 órával záruljon; az étkezési idők legyenek naponta konzisztensek; éjszakai evés kerülendő (műszakos munkánál ez külön kihívás).
- **Koffein**: kronobiológiailag aktív vegyület — a fázist is késleltetheti; időzítése (lásd 3.2 táblázat) a krono-táplálkozás része.

---

## 9. Összefoglaló: mit építhet erre egy app?

**Tudományosan védhető funkciók:**
1. Kronotípus-becslés MCTQ-logikával (alvásidők munkanapon/szabadnapon → MSFsc) és/vagy rMEQ-kérdéssorral; életkor figyelembevétele.
2. Személyre szabott napi idősáv-ajánlások (mélymunka, edzés, étkezés, fénycsökkentés, lefekvés) a 3.2 táblázat egyénre igazításával.
3. Szociális jetlag kijelzése és csökkentési tippek.
4. Fényexpozíciós tanácsok (reggeli fény, esti fénykerülés), szezonális (őszi-téli) kiemeléssel.
5. Alváshigiéniai tartalom; TRE/étkezés-időzítési tippek óvatos megfogalmazással.
6. „Tudtad-e?" tartalmak: Nobel-díjas óragének, season-of-birth kutatások (kis hatásméret hangsúlyozásával).

**Csak megjelöléssel használható:**
- Breus-féle állat-kronotípusok (népszerűsítő címkézésként, a tudományos besorolás mellett);
- klasszikus 23/28/33-as bioritmus (kizárólag „szórakoztató, tudományosan cáfolt" jelöléssel, a kronotípus-funkcióktól vizuálisan is elválasztva).

**Kerülendő:** egyéni egészségi/személyiség-predikció születési dátumból; orvosi tanácsadás látszata (SAD, inszomnia, gyógyszeridőzítés → „fordulj szakemberhez" disclaimer).

---

## 10. Források

**Alapok, Nobel-díj**
- NobelPrize.org: [The Nobel Prize in Physiology or Medicine 2017 — Summary](https://www.nobelprize.org/prizes/medicine/2017/summary/) és [Advanced information](https://www.nobelprize.org/prizes/medicine/2017/advanced-information/)
- AASM: [Nobel Prize awarded for circadian rhythm discoveries](https://aasm.org/nobel-prize-awarded-circadian-rhythm-discoveries/)
- The Company of Biologists: [2017 Nobel Prize for circadian rhythm research](https://www.biologists.com/nobel_circadian_rhythm/)

**Kronotípus, kérdőívek, szociális jetlag**
- Horne JA, Östberg O (1976): A self-assessment questionnaire to determine morningness–eveningness. *Int J Chronobiol* — [ResearchGate](https://www.researchgate.net/publication/22126774_A_Self_Assessment_Questionnaire_to_Determine_Morningness_Eveningness_in_Human_Circadian_Rhythms); [MEQ-SA kérdőív (CET)](https://cet.org/wp-content/uploads/2017/11/Morningness-Eveningness-Self-assessment-from-cet.org_.pdf)
- Roenneberg T. et al.: [Munich Chronotype Questionnaire — áttekintés (Wikipedia)](https://en.wikipedia.org/wiki/Munich_Chronotype_Questionnaire); [MCTQ kérdőív (UPenn)](https://www.med.upenn.edu/cbti/assets/user-content/documents/Munich%20Chronotype%20Questionnaire%20(MCTQ).pdf)
- Roenneberg T, Pilz LK, Zerbini G, Winnebeck EC (2019): [Chronotype and Social Jetlag: A (Self-)Critical Review](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6784249/) *Biology*
- Ghotbi N. et al. (2020): [The µMCTQ: An Ultra-Short Version of the MCTQ](https://journals.sagepub.com/doi/10.1177/0748730419886986) *J Biol Rhythms*
- Kalmbach DA et al. (2017): [Genetic Basis of Chronotype in Humans: Insights From Three Landmark GWAS](https://academic.oup.com/sleep/article/40/2/zsw048/2662182) *Sleep*
- [PER3 polimorfizmus és reggeliség–estiség (Sci Rep, 2014)](https://www.nature.com/articles/srep06309); [PER2/PER3 variánsok és familiáris alvásfázis-zavarok (2024)](https://pubmed.ncbi.nlm.nih.gov/38695651/)
- Breus M (2016): *The Power of When* — népszerűsítő modell; [összefoglaló interjú (TODAY)](https://www.today.com/health/sleep-doctor-michael-breus-knows-your-sleep-type-when-you-t136572)

**Születési szezonalitás**
- Davies G et al. (2003): [A systematic review and meta-analysis of Northern Hemisphere season of birth studies in schizophrenia](https://pubmed.ncbi.nlm.nih.gov/14609251/) *Schizophr Bull*
- [Systematic review and meta-analysis: Season of birth and schizophrenia risk (Schizophr Res, 2022)](https://www.sciencedirect.com/science/article/abs/pii/S0920996422004637)
- [Season of birth és hippocampus-térfogat (Front Hum Neurosci, 2022)](https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2022.877461/full)

**Bioritmus (áltudomány)**
- [Biorhythm (pseudoscience) — Wikipedia](https://en.wikipedia.org/wiki/Biorhythm_(pseudoscience))
- [The Skeptic's Dictionary: biorhythms](https://skepdic.com/biorhyth.html)
- Bainbridge WS (1978): [Biorhythms: Evaluating a Pseudoscience](https://centerforinquiry.s3.amazonaws.com/wp-content/uploads/sites/29/1978/04/22165501/p38.pdf) *Skeptical Inquirer*
- [Wilhelm Fliess — Wikipedia](https://en.wikipedia.org/wiki/Wilhelm_Fliess)

**Krono-táplálkozás, kronofarmakológia**
- [Food Timing, Circadian Rhythm and Chrononutrition: A Systematic Review of TRE's Effects on Human Health (Nutrients, 2020)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7763532/)
- [Chrononutrition and Cardiometabolic Health: Epidemiological Evidence (2024)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11280377/)
- [Chrononutrition in Cardiometabolic Health (2022)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8780356/)
- [Chrononutrition and Energy Balance (2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12252119/)
- TIME study (Mackenzie IS et al., *Lancet*, 2022) — a vérnyomáscsökkentők reggeli vs. esti bevételéről.

*Utolsó frissítés: 2026-08-26.*
