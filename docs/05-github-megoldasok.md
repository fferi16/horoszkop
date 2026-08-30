# GitHub-on elérhető nyílt forráskódú horoszkóp- és asztrológiai megoldások

> Kutatási dokumentum a „Horoszkóp" projekthez.
> Készült: 2026-08-26. Az adatok (csillagszám, utolsó aktivitás) a GitHub API-ból származnak, a lekérdezés napján érvényes, hozzávetőleges értékek.

---

## Tartalom

1. [Efemerisz / bolygópozíció-számító magok](#1-efemerisz--bolygópozíció-számító-magok)
2. [Nyugati asztrológia könyvtárak](#2-nyugati-asztrológia-könyvtárak)
3. [Kínai rendszer (holdnaptár, Ba Zi)](#3-kínai-rendszer-holdnaptár-ba-zi)
4. [Védikus (dzsjótis) könyvtárak](#4-védikus-dzsjótis-könyvtárak)
5. [Bioritmus és kronotípus](#5-bioritmus-és-kronotípus)
6. [Horoszkóp-szöveg API-k és scraperek](#6-horoszkóp-szöveg-api-k-és-scraperek)
7. [Tarot, numerológia, Human Design](#7-tarot-numerológia-human-design)
8. [Teljes appok inspirációnak](#8-teljes-appok-inspirációnak)
9. [AJÁNLOTT STACK](#9-ajánlott-stack)

---

## 1. Efemerisz / bolygópozíció-számító magok

Ez a réteg a fundamentum: minden komoly asztrológiai számítás (natál horoszkóp, tranzitok, házak) pontos bolygópozíciókat igényel. A de facto ipari szabvány a **Swiss Ephemeris**, de a licence miatt a döntés stratégiai jelentőségű.

### 1.1 Swiss Ephemeris (hivatalos C forrás)

| Adat | Érték |
|---|---|
| Repo | https://github.com/aloistr/swisseph |
| Nyelv | C |
| Licenc | **Kettős: AGPL-3.0 VAGY kereskedelmi** (lásd lent) |
| Csillagok | ~720 |
| Utolsó aktivitás | 2026-08 (aktívan karbantartott, Astrodienst hivatalos kiadás) |

**Mit tud:** A NASA JPL DE431 efemeriszén alapuló, asztrológiai célra optimalizált számítómotor. Bolygók, Hold, aszteroidák, holdcsomópontok, Lilith, fiktív pontok; ~30 házrendszer (Placidus, Koch, Whole Sign, Equal stb.); sziderikus zodiákusok (ajánásák) a védikus asztrológiához; napkelte/napnyugta, fogyatkozások. Pontosság: 0,001 ívmásodperc nagyságrend, időtartomány kb. i.e. 13 000 – i.sz. 17 000. Gyakorlatilag minden komoly asztrológiai szoftver (astro.com is) erre épül.

**⚠️ LICENC – EZ A LEGFONTOSABB DÖNTÉSI PONT A PROJEKTBEN:**

- A Swiss Ephemeris **kettős licencű**: 
  1. **AGPL-3.0** (a 2.10-es verziótól; korábban GPL-2+): ingyenesen használható, DE az AGPL a **hálózaton keresztül nyújtott szolgáltatásra is kiterjed**. Ha a webappunk szerveroldalon Swiss Ephemeris-t használ, akkor a **teljes kapcsolódó szerveroldali kódot AGPL alatt, forráskóddal együtt közzé kell tenni**. Az AGPL „fertőző": a linkelő/hívó alkalmazásra is vonatkozik.
  2. **Kereskedelmi („Swiss Ephemeris Professional License")**: az Astrodiensttől (swisseph.com) vásárolható, egyszeri díjas licenc (nagyságrendileg néhány száz CHF; a pontos, aktuális árat a swisseph.com-on kell ellenőrizni). Ezzel zárt forráskódú termékben is használható.
- **Következmény:** ha a projekt nyílt forráskódú lesz (a teljes backend publikus), az AGPL-út ingyenes és rendben van. Ha üzleti/zárt termék a cél, vagy kell a kereskedelmi licenc, vagy AGPL-mentes alternatíva kell (Moshier, Skyfield – lásd lent).
- A csomagban terjesztett **efemerisz-adatfájlok** (\*.se1) ugyanezen feltételek alá esnek; a Moshier-közelítés fájlok nélkül is működik (kisebb, de asztrológiához bőven elegendő pontossággal).

### 1.2 Swiss Ephemeris portok és bindingek

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| **pyswisseph** | https://github.com/astrorigin/pyswisseph | Python (C ext.) | AGPL-3.0 | ~394 | 2026-04 | A szabvány Python-binding (`pip install pyswisseph`). Erre épül a Kerykeion, Immanuel, PyJHora. |
| **swisseph (Node)** | https://github.com/mivion/swisseph | C++ / JS | GPL-2.0 | ~238 | 2026-01 | Klasszikus Node.js natív binding; régebbi API, de működik. |
| **sweph (Node)** | https://github.com/timotejroiko/sweph | C / JS | AGPL (követi az eredetit) | ~191 | 2026-08 | Modern, aktívan karbantartott Node binding, a 2.10+ verziókhoz. Node-backendhez ez ajánlott. |
| **SwissEphNet** | https://github.com/ygrenier/SwissEphNet | C# | kettős (követi) | ~85 | 2026-08 | Teljes .NET-port (nem binding, portolt kód). A VedAstro is ezt használja. |
| **swisseph (Java)** | https://github.com/krishnact/swisseph | Java | n/a | ~23 | 2026-06 | A klasszikus Thomas Mack-féle Java-port leszármazottja. Androidhoz releváns. |
| **sweph-wasm** | https://github.com/u-blusky/sweph-wasm | C→WASM | AGPL-3.0 | ~33 | 2023 | Böngészőben futó Swiss Ephemeris (Emscripten). Kliensoldali számításhoz. |
| **swisseph-wasm** | https://github.com/prolaxu/swisseph-wasm | JS/WASM | egyéb | ~36 | 2026-08 | Újabb, aktív WASM-wrapper JS API-val. |
| **react-native-swisseph** | https://github.com/linchCN/react-native-swisseph | C/Java/ObjC | MIT jelölésű* | ~15 | 2026-08 | Mobil (RN) binding. *A wrapper MIT, de a beágyazott swisseph miatt a kettős licenc érvényes! |

> **Fontos:** hiába ír egy binding MIT/GPL-2 licencet, a **beágyazott Swiss Ephemeris kód miatt mindig az Astrodienst kettős licence az irányadó** a teljes alkalmazásra.

### 1.3 AGPL-mentes csillagászati alternatívák

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| **Skyfield** | https://github.com/skyfielders/python-skyfield | Python | **MIT** | ~1 760 | 2026-08 | Elegáns, modern csillagászati könyvtár, JPL efemeriszeket olvas (a JPL-adatok közkincsek). Bolygópozíciók milliívmásodperces pontossággal. **Nincs beépített asztrológia** (házak, jegyek, fényszögek) – azt nekünk kell ráépíteni, de ez ~200 sor kód. Licenc-szempontból a legtisztább út. |
| **astropy** | https://github.com/astropy/astropy | Python | **BSD-3** | ~5 290 | 2026-08 (napi) | A professzionális csillagászat alapkönyvtára. Asztrológiai célra túlméretezett (nehéz függőség), de koordináta-transzformációkhoz, időkezeléshez (UTC/TT, Julián-dátum) referencia. |
| **PyEphem** | https://github.com/brandon-rhodes/pyephem | Python/C | LGPL | ~894 | 2026-04 | A Skyfield elődje (ugyanaz a szerző), karbantartási módban. Új projekthez a Skyfield ajánlott helyette. |
| **Moshier-efemerisz** (JS portok, pl. a CircularNatalHoroscopeJS belseje) | lásd 2.3 | JS | közkincs/Unlicense | – | – | Steve Moshier analitikus közelítése: adatfájl nélkül, ±1 ívmásodperc körüli pontosság — asztrológiához bőven elég, licencgond nulla. |

**Összegzés (1. kategória):** ha AGPL vállalható vagy nyílt lesz a projekt → **pyswisseph / sweph**. Ha zárt termék licencköltség nélkül → **Skyfield (Python)** vagy **Moshier-alapú JS lib** + saját asztrológiai réteg.

---

## 2. Nyugati asztrológia könyvtárak

### 2.1 Kerykeion ⭐ (legjobb Python-választás)

| Adat | Érték |
|---|---|
| Repo | https://github.com/g-battaglia/kerykeion |
| Nyelv | Python |
| Licenc | **AGPL-3.0** |
| Csillagok | ~700 |
| Utolsó aktivitás | 2026-08 (nagyon aktív) |

**Mit tud:** Teljes natál horoszkóp (bolygók, házak, fényszögek), szinasztria, tranzit, kompozit chart; **SVG horoszkópábra-generálás beépítve**; strukturált (Pydantic-alapú) JSON-kimenet, ami LLM-nek/API-nak ideális. Van hozzá hivatalos AstrologerAPI (fizetős SaaS) is, tehát API-mintának is jó. **Projektünkhöz:** ha Python-backend + AGPL belefér, ez a leggyorsabb út egy komplett nyugati modulhoz — számítás ÉS rajzolás egyben. A pyswisseph-re épül, tehát a Swiss Ephemeris licencfeltételei is öröklődnek.

### 2.2 flatlib

| Adat | Érték |
|---|---|
| Repo | https://github.com/flatangle/flatlib |
| Nyelv | Python |
| Licenc | MIT (de pyswisseph-függőség → AGPL-hatás!) |
| Csillagok | ~391 |
| Utolsó aktivitás | 2026-04 (lassú karbantartás) |

**Mit tud:** Tradicionális (hellenisztikus/középkori) asztrológia: esszenciális méltóságok, arab pontok, profekciók, szolár revolúció. Szép, olvasható API, sokan tanulásra használják. **Projektünkhöz:** ha tradicionális technikák kellenének; modern webapp-alaphoz a Kerykeion frissebb. Figyelem: bár a flatlib maga MIT, a pyswisseph-en keresztül a Swiss Ephemeris licence érvényesül a teljes stackre.

### 2.3 Immanuel

| Adat | Érték |
|---|---|
| Repo | https://github.com/theriftlab/immanuel-python |
| Nyelv | Python |
| Licenc | AGPL-3.0 |
| Csillagok | ~114 |
| Utolsó aktivitás | 2026-08 (aktív) |

**Mit tud:** Ember által olvasható ÉS JSON-formátumú chartadatok, kifejezetten az astro.com eredményeihez kalibrálva; natál, szolár return, progressziók, szinasztria. Nincs beépített rajzoló. **Projektünkhöz:** jó „adat-backend", ha az ábrát külön JS-libbel rajzolnánk.

### 2.4 CircularNatalHoroscopeJS

| Adat | Érték |
|---|---|
| Repo | https://github.com/0xStarcat/CircularNatalHoroscopeJS |
| Nyelv | JavaScript (ES6) |
| Licenc | **Unlicense (közkincs!)** |
| Csillagok | ~377 |
| Utolsó aktivitás | 2021 (nem karbantartott, de stabil és önálló) |

**Mit tud:** Natál horoszkóp számítás tisztán JS-ben, **Moshier-efemerisszel (nem kell Swiss Ephemeris, nem kell adatfájl, nem kell szerver!)**: bolygók, 12 házrendszer, fényszögek, jegyek — trópusi ÉS sziderikus zodiákus. **Projektünkhöz:** ez a licenc-szempontból legtisztább út egy **teljesen kliensoldali** webapp-hoz: nulla szerverköltség, nulla AGPL-kockázat. Hátrány: 2021 óta nincs fejlesztés (de a bolygómozgás nem változik…), és nincs tranzit/progresszió kényelmi API.

### 2.5 AstroChart / AstroDraw (SVG-rajzolás)

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| **AstroDraw/AstroChart** (astrochart2) | https://github.com/AstroDraw/AstroChart | TypeScript | **MIT** | ~415 | 2026 (aktív) | A Kibo/AstroChart modern TypeScript-utódja. Natál- és tranzitkör rajzolása SVG-be, függőségek nélkül. **Ez az ajánlott rajzolónk.** |
| Kibo/AstroChart (eredeti) | https://github.com/Kibo/AstroChart | JavaScript | MIT | ~225 | 2021 (lezárt) | Az eredeti; új projektbe az AstroDraw-fork való. |

**Fontos:** ezek CSAK rajzolnak — a pozíciókat mi adjuk át (pl. CircularNatalHoroscopeJS vagy Kerykeion kimenetéből). Cserébe nulla licenc-teher (MIT).

### 2.6 REST API-jellegű nyugati projektek

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| astrology-api | https://github.com/ryuphi/astrology-api | JavaScript | AGPL-3.0 | ~182 | 2026 | Swiss Ephemeris-t REST API-ként kiszolgáló, self-hostolható Node-projekt. Jó minta saját mikroszerviz-hez. |
| astrologyjs | https://github.com/morphatic/astrologyjs | TypeScript | MIT | ~155 | 2026 | Natál/tranzit/szinasztria/kompozit; külső (Morphemeris) API-ra támaszkodik a pozíciókhoz — „bring your own API key". |

### 2.7 Teljes desktop-appok (OpenAstro, Morinus)

- **OpenAstro.org** — GPL-es Python/GTK desktop asztrológiaprogram; elsődleges otthona a Launchpad/saját oldal, GitHubon csak tükrök vannak; évek óta alig aktív. Inspirációnak jó (funkciólista), kódátvételre kevésbé.
- **Morinus** — Python/wxWidgets tradicionális asztrológiai desktop app (SourceForge), GPL, inaktív. Tradicionális számítások referenciájának hasznos.
- **Astrolog** — https://github.com/CruiserOne/Astrolog — C++, saját (nyílt) licenc, ~325★, 2026-ban is aktív; a legrégebbi nyílt asztrológiaprogram (1991 óta!), elképesztő funkciómélység. Referenciaként/ellenőrzéshez kiváló.

---

## 3. Kínai rendszer (holdnaptár, Ba Zi)

### 3.1 lunar-javascript / lunar-python (6tail) ⭐ (egyértelmű győztes)

| Adat | lunar-javascript | lunar-python |
|---|---|---|
| Repo | https://github.com/6tail/lunar-javascript | https://github.com/6tail/lunar-python |
| Nyelv | JavaScript | Python |
| Licenc | **MIT** | **MIT** |
| Csillagok | ~1 650 | ~652 |
| Utolsó aktivitás | 2025-11 | 2026-01 |

**Mit tud:** A legteljesebb nyílt kínai naptár-ökoszisztéma (Java, JS, Python, C#, PHP, Go… változatban is létezik: `lunar-java` ~5k★ körül). Gergely↔holdnaptár konverzió, **24 szoláris terminus (jieqi)**, égi törzsek és földi ágak (gan-zhi), **12 állatövi jegy**, **teljes Ba Zi / Négy Pillér (EightChar API!)**, na-jin, napi tiltások/ajánlások (huangli), ünnepek, buddhista/taoista naptár. Nem kell hozzá se adatbázis, se efemerisz. **Projektünkhöz:** a kínai modul (kínai állatöv + Ba Zi) lényegében készen van benne, MIT licenccel — frontendben és backendben is futtatható. Egyetlen teendő: a kínai nyelvű kimenetek magyar fordítási rétege.

### 3.2 Egyéb kínai naptár-projektek

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| cnlunar | https://github.com/OPN48/cnlunar | Python | MIT | ~833 | 2026-02 | Adatbázis nélküli holdnaptár + huangli (napi ajánlás/tiltás), gazdag hagyományos részletek. Alternatíva a lunar-python mellett. |
| Lunar-Solar-Calendar-Converter | https://github.com/isee15/Lunar-Solar-Calendar-Converter | sok nyelv | MIT | ~695 | 2025-11 | Minimalista konverter 1900–2100 közé, ~10 nyelven (C#, Java, JS, Python…). Ha CSAK konverzió kell, ez a legkisebb. |
| chinese-calendar | https://github.com/LKI/chinese-calendar | Python | MIT | ~1 370 | 2026-06 | Kínai állami munkanap/ünnepnap-logika — a mi projektünkhöz nem releváns, csak névrokonság miatt szerepel itt. |
| bazi-engine (OpenFate) | https://github.com/openfate-ai/bazi-engine | TypeScript | MIT | ~8 | 2026-08 | Új, „AI-ready" Ba Zi + Tíz Isten motor TS-ben; fiatal, de figyelésre érdemes. |

**Összegzés (3. kategória):** **lunar-javascript** (webapp-frontend) vagy **lunar-python** (backend) — MIT, aktív, mindent tud, amit a kínai modulhoz kell.

---

## 4. Védikus (dzsjótis) könyvtárak

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| **PyJHora** | https://github.com/naturalstupid/PyJHora | Python | **AGPL-3.0** | ~215 | 2026-08 (aktív) | A legteljesebb nyílt védikus csomag: PVR Narasimha Rao „Vedic Astrology – An Integrated Approach" könyvének szinte minden technikája (dasák tucatjai, vargák/osztott chartok, ayanamsák, panchanga). Swiss Ephemerisre épül → AGPL. |
| **VedAstro** | https://github.com/VedAstro/VedAstro | C# (+Python lib) | **MIT** | ~618 | 2026-08 | Nonprofit, teljes webes védikus platform: API, webapp, ML-kísérletek, horoszkóp-előrejelzések. MIT licenc, de a mélyén SwissEphNet dolgozik (licencfigyelem!). Python-változat: VedAstro/VedAstro.Python (~74★). Nagy, tanulságos kódbázis. |
| **jyotisha** | https://github.com/jyotisham/jyotisha | Python | MIT | ~131 | 2026-08 | Elsősorban panchanga (hindu naptár) számítás/naptárgenerálás, nem horoszkópelemzés. Naptármodulhoz jó. |
| jyotish (kunjara) | https://github.com/kunjara/jyotish | PHP | n/a | ~202 | 2026-08 | PHP-s védikus számítások; PHP-stack esetén érdekes. |
| jyotish-api | https://github.com/teal33t/jyotish-api | PHP/C | GPL-3.0 | ~84 | 2026-08 | Self-hostolható védikus REST API (a kunjara/jyotish-ra épül, dockerizált). |
| jyotishganit | https://github.com/northtara/jyotishganit | Python | MIT | ~44 | 2026-08 | Új, MIT-licencű védikus lib NASA JPL efemerisszel (nem swisseph!) — licenctiszta alternatíva, még fiatal. |
| VedicAstro (KP) | https://github.com/diliprk/VedicAstro | Python/Jupyter | n/a | ~65 | 2026-08 | Krishnamurti Paddhati (KP) fókusz. |
| Maitreya | (SourceForge/saját oldal; GitHub-tükrök) | C++ | GPL | – | inaktívabb | Klasszikus védikus desktop program, referenciának. |

**Összegzés (4. kategória):** funkciómélységben **PyJHora** (AGPL), licenctisztaságban **jyotishganit** vagy a **VedAstro** MIT-kódbázisa. Ha a védikus modul csak „bónusz" a projektben, elég a sziderikus zodiákus + nakshatrák — ezt a Kerykeion/Swiss Ephemeris (ayanamsa-támogatással) is tudja.

---

## 5. Bioritmus és kronotípus

Ez a terület GitHub-on meglepően gyér — jó hír viszont, hogy a klasszikus bioritmus **triviális matematika** (három szinuszgörbe: fizikai 23, érzelmi 28, szellemi 33 napos ciklussal a születéstől eltelt napokra), tehát **saját implementáció ajánlott** (kb. 20 sor kód), lib-függőség nélkül.

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Megjegyzés |
|---|---|---|---|---|---|---|
| biorhythmmm | https://github.com/ncosgray/biorhythmmm | Dart/Flutter | BSD-3 | ~6 | 2026-07 | Csinos interaktív bioritmus-grafikon app; UI-inspirációnak jó. |
| biorhythm (Sugar) | https://github.com/sugarlabs/biorhythm | Python | GPL-3.0 | ~2 | 2025 | Sugar Labs oktatási aktivitás; a képlet referenciája. |
| BioCalcJs | https://github.com/lastunicorn/BioCalcJs | JavaScript | n/a | ~8 | 2025 | JS bioritmus-kalkulátor, grafikonnal. |
| biorhythm-calculator | https://github.com/chanmyaemaung/biorhythm-calculator | JS (React/Ionic) | n/a | ~6 | 2023 | React-os minta. |

**Kronotípus (pacsirta/bagoly):** dedikált, jó minőségű open source repó gyakorlatilag nincs. A tudományos alap a **MEQ (Horne–Östberg Morningness–Eveningness Questionnaire)** és az **MCTQ (Munich Chronotype Questionnaire)** — mindkettő kérdőív-pontozás, amit érdemes közvetlenül a publikált pontozási szabályokból implementálni (a kérdőívszövegek szerzői jogát ellenőrizni kell; a pontozási algoritmus maga szabadon implementálható). Cirkadián-számításokhoz (napkelte/napnyugta a felhasználó helyén) a már meglévő efemerisz-rétegünk (Swiss Ephemeris / Skyfield / SunCalc JS) használható.

---

## 6. Horoszkóp-szöveg API-k és scraperek

Ez a legingatagabb kategória: a napi horoszkópszövegek forrásai jellemzően **scraperek** (más oldalak tartalmát tükrözik), ami jogilag és üzemeltetésileg is törékeny.

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Állapot / megbízhatóság |
|---|---|---|---|---|---|---|
| **aztro** | https://github.com/sameerkumar18/aztro | Python | Apache-2.0 | ~343 | **2023 óta halott** | A valaha legnépszerűbb ingyenes horoszkóp-API; a hosztolt szolgáltatás leállt. NE építsünk rá. Kódnak minta lehet. |
| Horoscope-API (tapaswenipathak) | https://github.com/tapaswenipathak/Horoscope-API | Python | MIT | ~199 | 2026-08 | GaneshaSpeaks-scraper; self-host szükséges, a forrásoldal változásaira törékeny. |
| Horoscope-API (ashutoshkrris) | https://github.com/ashutoshkrris/Horoscope-API | Python (Flask) | MIT | ~15 | 2026-06 | Napi/heti/havi szövegek scrapelése (Horoscope.com); ez áll a horoscope-app-api.vercel.app mögött. Kis projekt, de él. |
| horoscopeAPI (TwinFlame) | https://github.com/TwinFlame-Development/horoscopeAPI | JavaScript | Apache-2.0 | ~15 | 2026-07 | Saját szövegkiszolgáló minta. |

**Értékelés a projektünk szempontjából:** 
- Mindegyik **angol nyelvű** — magyar napi horoszkóphoz úgysem használhatók közvetlenül.
- A scraper-alapú megoldás jogi szempontból aggályos (más kiadó szövege szerzői jogvédett!) és bármikor eltörhet.
- **Ajánlás:** a napi szöveget **magunk generáljuk**: (a) sablonalapú szöveggenerátor a tényleges tranzitadatokból (pl. „a Mars ma belép a jegyedbe…"), vagy (b) LLM-alapú generálás a számított asztrológiai tényekből. Így magyar, egyedi és jogtiszta.

---

## 7. Tarot, numerológia, Human Design (röviden)

### Tarot
| Projekt | Repo | Licenc | ★ | Megjegyzés |
|---|---|---|---|---|
| tarot-api | https://github.com/ekelen/tarot-api | **nincs licenc!** | ~403 | Rider–Waite–Smith kártyaleírások REST API-ban. Licenc hiánya miatt a kód nem vehető át; maguk az 1909-es RWS kártyaképek viszont közkincsek (az USA-ban biztosan; EU-ban Pamela Colman Smith 1951-ben hunyt el → 2022 óta ott is közkincs). |
| chatgpt-tarot-divination | https://github.com/dreamhunter2333/chatgpt-tarot-divination | MIT | ~891 | AI-alapú jóslás (tarot, Ba Zi, álomfejtés…) — jó minta LLM-integrációra. |

### Numerológia
| Projekt | Repo | Licenc | ★ | Megjegyzés |
|---|---|---|---|---|
| motivational-numerology | https://github.com/evoluteur/motivational-numerology | AGPL-3.0 | ~95 | Életút-szám, sorsszám stb. névből+születési dátumból, webes UI. A numerológiai számítás amúgy pofonegyszerű — saját implementáció ajánlott (AGPL elkerülésére). |
| Arithmos | https://github.com/dlascelles/Arithmos | MIT | ~32 | Gematria/numerológia kalkulátor C#-ban. |

### Human Design
| Projekt | Repo | Licenc | ★ | Megjegyzés |
|---|---|---|---|---|
| humandesign_api | https://github.com/dturkuler/humandesign_api | egyéb | ~33 | Python API: típus, profil, kapuk, inkarnációs kereszt + BodyGraph-kép; swisseph-alapú. |
| pyhd | https://github.com/ppo/pyhd | MIT | ~3 | Fiatal Python HD-lib. |
| bodygraph-api-php | https://github.com/reffan/bodygraph-api-php | n/a | ~13 | PHP-s BodyGraph-számítás. |

> Human Designnál jogi óvatosság: a rendszer bizonyos elnevezései/ábrái körül a Jovian Archive védjegy-igényeket támaszt; a számítás maga (swisseph + 64 kapu leképezés) szabadon implementálható.

---

## 8. Teljes appok inspirációnak

| Projekt | Repo | Nyelv | Licenc | ★ | Aktivitás | Miért érdekes |
|---|---|---|---|---|---|---|
| **Astrale** | https://github.com/jvidalv/astrale | React Native | GPL-3.0 | ~171 | 2026-07 | Nyílt forráskódú horoszkóp-mobilapp (Android): napi horoszkóp, UI/UX minta modern RN-stackkel. A hozzánk legközelebb álló „kész app" minta. |
| **VedAstro** | https://github.com/VedAstro/VedAstro | C#/Blazor | MIT | ~618 | 2026-08 | Teljes webes asztrológiai platform API-val — architektúra-minta (számítómag ↔ API ↔ web UI szétválasztás). |
| **Astrolog** | https://github.com/CruiserOne/Astrolog | C++ | nyílt (saját) | ~325 | 2026-08 | 30+ éve fejlesztett, funkcióban legmélyebb nyílt program — számítási referencia/ellenőrzés. |
| Horosa (improved) | https://github.com/Horace-Maxwell/Horosa-Web-App-comprehensively-improved-Windows | JavaScript | AGPL-3.0 | ~340 | 2026-08 | Kínai „mindenes" ezotéria-munkaállomás (asztrológia, Ba Zi, Zi Wei, tarot, AI-elemzés) — funkcióötlet-bánya a több-rendszerű apphoz. |
| astrology-app (dxenia) | https://github.com/dxenia/astrology-app | TypeScript/React | n/a | ~39 | 2026-08 | Asztrológia + tarot + numerológia SPA Reactben — kisebb, átlátható tanulóprojekt. |
| nebulUS | https://github.com/Buckley212/nebulUS-astrology | JavaScript | MIT | ~13 | 2026-05 | Születési képlet számítás webappban, MIT — egyszerű minta. |
| chatgpt-tarot-divination | https://github.com/dreamhunter2333/chatgpt-tarot-divination | TypeScript | MIT | ~891 | 2026-08 | LLM-alapú „jóslás"-UX minta (FastAPI+React) — ha AI-generált szövegekben gondolkodunk. |

---

## 9. AJÁNLOTT STACK

### 9.1 Fő döntés: a Swiss Ephemeris licenckérdése

Két tiszta út van:

**„A" út — nyílt forráskódú webapp (AGPL vállalása):**
A projekt teljes kódját AGPL-3.0 alatt publikáljuk GitHubon. Cserébe ingyen használhatjuk a Swiss Ephemeris teljes erejét (pyswisseph/sweph), és rá épülő kész libeket (Kerykeion, Immanuel, PyJHora).

**„B" út — licenctiszta / zárt-kompatibilis stack (AGPL-mentes):**
Csak MIT/BSD/közkincs komponensek: Moshier-efemerisz JS-ben (CircularNatalHoroscopeJS) vagy Skyfield (Python) + AstroDraw AstroChart + lunar-javascript. Némi saját kódot igényel (fényszög-/tranzitlogika), de nincs sem licencdíj, sem közzétételi kötelezettség. (Harmadik opció: Astrodienst kereskedelmi licenc vásárlása — akkor az „A" út libjei zárt kódban is mehetnek.)

### 9.2 Ajánlott kombináció webapphoz

**Ajánlott alap: „B" út, kliens-központú webapp** — mert olcsó (statikus hoszting is elég), licenctiszta, és a mi feladatkörünkhöz (napi horoszkóp, natál kép, kínai jegy, bioritmus) bőven elegendő pontosságú:

| Modul | Választás | Licenc | Indoklás |
|---|---|---|---|
| Nyugati számítás | **CircularNatalHoroscopeJS** (Moshier) | Unlicense | Kliensoldalon fut, nincs szerver, nincs AGPL. Ha később mélyebb technikák kellenek → Kerykeion-backend (AGPL, „A" út). |
| Chart-rajzolás | **AstroDraw/AstroChart** | MIT | Aktív TS-lib, SVG, függetleníthető a számítástól. |
| Kínai naptár + Ba Zi | **lunar-javascript** | MIT | Mindent tud (állatöv, gan-zhi, EightChar, jieqi), aktív, adatfájlmentes. |
| Védikus (opcionális) | sziderikus mód a CircularNatalHoroscopeJS-ben; mélyebb igénynél **jyotishganit** (MIT, Python-backend) vagy PyJHora (AGPL) | MIT / AGPL | A védikus mélység backendet igényel; első körben elég a sziderikus zodiákus + nakshatra-tábla. |
| Bioritmus + kronotípus | **saját implementáció** (3 szinusz + MEQ-pontozás) | saját | 20–50 sor; minden külső repo elavult/apró. Grafikonhoz bármely chartlib. |
| Napi szöveg | **saját generálás** (sablon a tranzitadatokból, opcionálisan LLM) | saját | A szöveg-API-k angolok, scraper-alapúak, megbízhatatlanok (aztro halott). Magyar szöveg csak így lesz. |
| Nap/Hold-kelte, holdfázis | SunCalc (JS, BSD-2) vagy a meglévő efemerisz | BSD | Kronotípus/„holdnaptár" funkciókhoz. |
| Tarot (opcionális) | RWS közkincs-képek + saját magyar kártyaleírás-adatbázis | közkincs | Az ekelen/tarot-api licenc nélküli, kódja nem átvehető. |

**Ha Python-backendes irányba megyünk** (több számítási mélység, API-termék): **Kerykeion (AGPL) + pyswisseph + lunar-python (MIT) + AstroDraw a frontenden** — ekkor a backend kódját nyílttá kell tenni, vagy Astrodienst-licencet venni.

### 9.3 Priorizált táblázat

| Prioritás | Komponens | Repo | Licenc | Kockázat | Beépítési munka |
|---|---|---|---|---|---|
| P0 | lunar-javascript (kínai modul) | github.com/6tail/lunar-javascript | MIT | alacsony | alacsony (fordítási réteg kell) |
| P0 | AstroDraw/AstroChart (SVG chart) | github.com/AstroDraw/AstroChart | MIT | alacsony | alacsony |
| P0 | CircularNatalHoroscopeJS (nyugati számítás) | github.com/0xStarcat/CircularNatalHoroscopeJS | Unlicense | közepes (inaktív) | alacsony–közepes |
| P1 | Saját bioritmus + kronotípus modul | – (saját kód) | – | alacsony | alacsony |
| P1 | Saját magyar szöveggenerátor (sablon/LLM) | – (saját kód) | – | közepes | közepes |
| P2 | Kerykeion (ha backend + AGPL ok) | github.com/g-battaglia/kerykeion | AGPL-3.0 | licenc! | alacsony |
| P2 | Skyfield (licenctiszta precíziós alternatíva) | github.com/skyfielders/python-skyfield | MIT | alacsony | közepes (asztro-réteg saját) |
| P3 | jyotishganit / PyJHora (védikus mélység) | github.com/northtara/jyotishganit, github.com/naturalstupid/PyJHora | MIT / AGPL | közepes | közepes |
| P3 | Tarot/numerológia modul (saját adat) | – | – | alacsony | közepes (tartalomírás) |
| P4 | VedAstro, Astrolog, Astrale (inspiráció/referencia) | lásd 8. fejezet | MIT/nyílt/GPL | – | – (csak tanulmányozás) |

### 9.4 Zárógondolatok

1. **A licencdöntést kell először meghozni** (AGPL-nyílt vs. licenctiszta) — ez határozza meg az egész stacket.
2. A kínai modulhoz a 6tail-féle **lunar** család verhetetlen és kockázatmentes (MIT).
3. Napi horoszkóp-szövegben **ne** külső API-ra építsünk — a piacon nincs megbízható, pláne magyar nyelvű; a tranzitadat-alapú saját generálás egyben a termék megkülönböztetője is lehet.
4. A számítási eredményeket érdemes az **Astrolog** vagy az **astro.com** kimenetével visszaellenőrizni (az Immanuel pont ezt tűzte zászlajára).
5. Minden swisseph-alapú lib (Kerykeion, PyJHora, bindingek) esetén a **beágyazott Swiss Ephemeris kettős licence az irányadó**, függetlenül a wrapper saját licencétől.
