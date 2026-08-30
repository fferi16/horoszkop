# Horoszkóp

**Powered by Pacsai Ferenc** · A fejlesztés folyamatosan zajlik · MIT licenc

A program egyetlen születési adatsorból készít teljes önismereti profilt több mint
húsz hagyomány — nyugati, keleti, népi rendszerek — és a modern kronobiológia
alapján, szórakoztató és önismereti célra.

Két részből álló projekt: egy **kutatási gyűjtemény** (19 fejezet, ~700 KB magyar nyelvű
referencia) és egy **számoló program** (böngészőben és telepíthető asztali
alkalmazásként is fut), amely egyetlen születési adatsorból több mint húsz rendszer
szerint állít össze teljes profilt.

---

## 1. A számoló program

### Asztali alkalmazásként (keretprogram)

A webes alkalmazást egy Electron-keretprogram csomagolja telepíthető, frissíthető
Windows-alkalmazásba (`electron/main.js`).

```bash
npm install        # első alkalommal: függőségek telepítése
npm start          # futtatás fejlesztői módban (telepítés nélkül)
npm run dist       # telepítő építése → dist/Horoszkóp Setup <verzió>.exe
```

A telepítő felhasználói szintű (nem kér rendszergazdát), és a Start menübe +
asztalra teszi az alkalmazást. A menüből (Súgó → Frissítések keresése) és
indításkor automatikusan is keres frissítést.

**Frissítések kiadása** (ha már van GitHub-repó):

1. Emeld meg a `version` számot a `package.json`-ban (pl. `1.0.0` → `1.1.0`).
2. `npm run dist`, majd hozd létre a release-t és töltsd fel a fájlokat:

   ```bash
   gh release create v1.1.0 --title "Horoszkóp 1.1.0" --notes "Újdonságok..." dist/horoszkop-setup-1.1.0.exe dist/horoszkop-setup-1.1.0.exe.blockmap dist/latest.yml
   ```

3. A telepített alkalmazás a következő indításkor magától észreveszi, letölti
   és felajánlja az új verziót.

### Böngészőben (telepítés nélkül)

```bash
node app/server.js
```

Ezután nyisd meg: **http://localhost:8123**

A program teljes egészében a böngésződben fut — a születési adatok nem hagyják el a gépet.
(A `file://` megnyitás is működik, de a helyi kiszolgáló megbízhatóbb.)

### Mit kér és mit ad

| Megadott adat | Mit nyit meg |
|---|---|
| **Dátum** (kötelező) | kb. 20 rendszer: napjegy, kínai jegy, numerológia, maja, kelta, angyal, weton, néphit… |
| **+ pontos idő** | aszcendens, MC, házak, holdjegy fokra pontosan, titkos állat, Ba Zi órapillére |
| **+ születési hely** | valódi bolygóállások az adott helyre, fotoperiódus, horoszkópábra |
| **+ név** | numerológiai sorsszám, lélekszám, személyiségszám, névnap |
| **+ nem** | Kua-szám, akan lélek-név |

### A 22 szekció

**Nyugati** — napjegy, holdjegy, aszcendens, MC, mind a 10 bolygó + holdcsomópont és
Lilith fokra pontosan, retrográd jelöléssel, 12 ház, fényszögek orbisokkal, dekanátus,
temperamentum, kompatibilitás. Rajzolt **horoszkópkerék** SVG-ben.

**Keleti** — kínai állatjegy és elem (a *valódi* holdújév-határ szerint, nem január 1-jétől),
belső és titkos állat, teljes **Ba Zi négy pillér** a szoláris termek alapján, Nap Ura, és
az **öt elem mérlege a nyolc írásjegyben**: a Nap Ura támogatottsága, a legerősebb, a hiányzó
és a kedvező elem. Trigon, titkos barát és ütköző jegy magyarázattal; az aktuális év viszonya
(Ben Ming Nian). Koreai *tti* és *gunghap* a saját jegyedre, japán *eto* kulturális olvasattal
és évhatár-figyelmeztetéssel, vietnami és tibeti réteg. Védikus: sziderikus hold- és napjegy,
**nakshatra** padával, arab holdház, és a **Vimshottari dasa** — melyik bolygó fő-időszakában
jársz most, mikor vált, és mi jön utána.

**Számok** — életút-szám, születésnap-szám, sorsszám, lélekszám, személyiségszám,
személyes év; tarot-születéskártya, sorskártya (Destiny Card); **Pitagorasz-négyzet
(pszichomátrix)** — a nemzetközileg elterjedt, Alekszandrov-féle rendszer: a születési
dátum számjegyeiből és a négy munkaszámból épített 3×3-as rács (jellem, energia,
tudásvágy, egészség, logika, gyakorlatiasság, szerencse, felelősség, emlékezet),
plusz a sorok/oszlopok/átlók (céltudatosság, család, stabilitás, önértékelés,
megélhetés, tehetség) értelmezése, a 2000 utáni születésekre vonatkozó szabállyal.
plusz **Sorsmátrix (Destiny Matrix)** — a 22 nagy arkánumra épülő oktagram: a nap,
hónap és év arkánumából származtatott nyolcszög rajzolt ábrával, a középponti fő
feladattal, a családi átlókkal, az égi és összegző életfeladattal, valamint a
7 elemből álló csakrasorral.

**Egyéb rendszerek** — 72 kabbalisztikus **születési angyal**, arkangyal, napangyal,
héber naptár szerinti születésnap; maja Tzolkin, kelta fa, egyiptomi istenség-jegy,
indián totem, rúna, jávai **weton** neptu-értékkel, 9 csillag ki, Kua-szám,
születéskő és -virág, generáció; **fogantatási horoszkóp** (prenatális lunáció +
becsült fogantatási időszak); Mahabote, akan lélek-név, thai napszín.

**Népi** — a születés napjához fűződő magyar néphit, jeles nap, névnap, régi hónapnév,
holdhoz kötődő szabályok, a bejelölhető különleges születési körülmények (burokban,
foggal, hetedik gyermek…), és a populáris „cigány horoszkóp" jegye.

**Tudomány** — három külön szekció, élesen elválasztva:

- **Kronobiológia — a születésed fényviszonyai**: fotoperiódus a születésed napján,
  a nappalok iránya, fény vagy sötét a születés pillanatában (napmagassággal), évszak.
  Ezek *tényadatok* a születésedről, nem jóslatok. A szekció kimondja, hogy a születési
  évszak és a kronotípus közti összefüggés legfeljebb 15–18 perc csoportátlag-különbség,
  egyéni szinten értelmezhetetlen — és hogy a születés **órájából** semmit nem
  következtetünk a belső órára, mert arra nincs bizonyíték.
- **A belső órád — mérés és időzítés**: itt már nem a születési adatokból dolgozunk,
  hanem megkérdezzük. Validált **rMEQ** (5 tétel, Adan & Almirall 1991) + **MCTQ**
  alvásidőkkel, amiből **MSF<sub>sc</sub>** (órában kifejezett kronotípus),
  **szociális jetlag** és korosztályi percentilis jön ki. Ebből becsüljük a fázist
  (**CBTmin**, **DLMO**, *wake maintenance zone*), rajzoljuk a **napi éberséggörbét**
  a két-folyamat modellel, és adunk **fény-időzítési tanácsot** a humán
  fázisválasz-görbe alapján — beleértve a „hajnali fény csapdája" figyelmeztetést.
- **Bioritmus a születésedtől**: 3 elsődleges + 4 másodlagos ciklus, összetett mutatók
  (Életerő, Teljesítmény, Bölcsesség), 29 napos görbe. Egyértelműen jelölve, hogy ez
  cáfolt elmélet, és hogy a *nevén kívül* semmi köze a kronobiológiához.

**Hol tartasz most** — életkor, éves profekció, Szaturnusz-visszatérés, mai holdfázis,
jelenleg retrográd bolygók, mai névnap és jeles nap.

### Technikai felépítés

```
app/
  index.html            a felület váza
  server.js             helyi kiszolgáló fejlesztéshez
  css/style.css         világos és sötét témával, nyomtatásra optimalizálva
  js/lib/               Astronomy Engine (MIT licenc)
  js/data/              adatmodulok — a docs fejezeteiből generálva
  js/core/astro.js      bolygóállások, aszcendens, házak, fényszögek, holdfázis
  js/core/calendars.js  naptárak, Ba Zi, numerológia, bioritmus
  js/core/chrono.js     két-folyamat modell, rMEQ, MCTQ, fázismarkerek, fény-PRC
  js/core/profile.js    a teljes profil összeállítása
  js/ui/                horoszkópkerék, diagramok, felületvezérlés
```

**Miért ez a felállás:** minden sima script, nem ES modul — így `file://` protokollon is
elindul. Külső hálózati hívás nincs. A csillagászati mag az **Astronomy Engine** (MIT),
nem a Swiss Ephemeris, mert utóbbi AGPL/kereskedelmi kettős licence webes közzétételnél
kockázatot jelentene (részletesen a 05. fejezetben).

**Az időzóna-kezelés** a böngésző beépített IANA-adatbázisára épül, így a történelmi
nyári időszámítások is helyesen jönnek ki — ez a natál-számítás egyik leggyakoribb
hibaforrása.

### Ellenőrzött számítások

A motor több független referenciaponttal van hitelesítve:

| Amit ellenőriztünk | Referencia |
|---|---|
| Bolygóállások | 1990-es képlet: Szaturnusz, Uránusz, Neptunusz mind Bakban, Plútó Skorpióban |
| Kínai nappillér | 2000-01-07 = 甲子, 2000-01-01 = 戊午, 60 napos ciklus zárása |
| Hónappillér | a Lìchūn-váltás napra pontosan (2024-02-03 Bivaly → 02-05 Tigris) |
| Maja Tzolkin | 2012-12-21 = 4 Ahau, 2012-12-22 = 5 Imix |
| Jávai weton | Jokowi 1961-06-21 = Rebo Pon, Suharto 1921-06-08 = Rebo Kliwon |
| Sorskártya | jan. 1. = Pikk király, júl. 4. = Káró bubi, dec. 25. = Kőr 6 |
| Pszichomátrix | 1985. máj. 7. → munkaszámok 35, 8, 21, 3 — a dokumentált mintapéldával egyezik |
| Sorsmátrix | a nyílt forrású referencia-implementáció logikája szerint, kézi arkánum-számítással egyeztetve |
| Sorsmátrix csakratábla | a felhasználó referencia-ábrájával mind a 8 sor × 3 oszlop egyezik |
| ХВД csakraanalízis | a forráskönyv példája (1987.03.04) mind a 7 csakrára pontos; a magyar minta markerei (18·2·23) is egyeznek |
| Szabian szimbólumok | mind a 360 fok ellenőrizve Jones és Rudhyar szövegével: 0 hiba, eltolódás nincs |
| Egyiptomi határok | mind a 60 szakasz egyezik a ptolemaioszi táblával |
| Dekanátusok | 36 darab, hibátlan határok; az 1. dekanátus ura mindenhol a jegy ura |
| Kritikus fokok | kardinális 0/13/26, szilárd 8/9/21/22, változó 4/17 — a hagyományos lista |
| Horoszkópkerék | ASC balra, MC felül, DSC jobbra, IC alul |
| MCTQ / MSF<sub>sc</sub> | a képlet kézi számítással egyeztetve (SD<sub>week</sub>-korrekció be- és kikapcsolva) |
| Éberséggörbe | a modell a mérésekből ismert mintázatot adja: délelőtti csúcs ~10:30, holtpont ~14:15, esti csúcs ~19:15 |
| Élhelyzetek | szökőnap, DST-váltás órája, déli félteke, sarkkör közeli szélesség, idő nélküli születés |

---

## 2. A kutatási gyűjtemény

| # | Fejezet | Miről szól |
|---|---|---|
| 01 | [Nyugati asztrológia](docs/01-nyugati-asztrologia.md) | 12 jegy, bolygók, házak, fényszögek, ASC-számítás, dekanátusok, kompatibilitás, tranzitok, történet |
| 02 | [Kelet-ázsiai asztrológia](docs/02-kelet-azsiai-asztrologia.md) | kínai 12 jegy + 5 elem, **újév-táblázat 1924–2044**, Ba Zi, koreai Saju, japán eto, vietnami, tibeti |
| 03 | [Kronobiológia](docs/03-kronobiologia.md) | cirkadián ritmus, óragének, kronotípusok, MEQ/MCTQ, szociális jetlag, születési szezonalitás, bioritmus |
| 04 | [További rendszerek](docs/04-tovabbi-rendszerek.md) | védikus/27 nakshatra, maja, azték, kelta, numerológia, egyiptomi, totem, Human Design, tarot |
| 05 | [GitHub-megoldások](docs/05-github-megoldasok.md) | efemerisz-magok, könyvtárak, **licencelemzés**, ajánlott stack |
| 06 | [Fogantatási horoszkóp](docs/06-fogantatasi-horoszkop.md) | Trutina Hermetis, prenatális lunáció, Jonas-módszer, védikus Nisheka |
| 07 | [Kabbala és további rendszerek](docs/07-kabbala-es-tovabbi-rendszerek.md) | Széfer Jecira, szefirák, gematria, 28 arab holdház, Mahabote, akan, 9 csillag ki, rúnák, thai |
| 08 | [Magyar népi hagyományok](docs/08-magyar-nepi-hagyomanyok.md) | születési néphit, jeles napok, névnapok, holdszabályok, népi csillagnevek, sorsasszonyok |
| 09 | [Roma hagyományok](docs/09-roma-hagyomanyok.md) | drabaripe, 36 lapos cigánykártya, tenyérjóslás, urme, etikai útmutató |
| 10 | [Tipológiák és kártyarendszerek](docs/10-tipologiak-es-kartyarendszerek.md) | MBTI, Enneagram, Big Five, dósák, temperamentumok; Lenormand, Destiny Cards, 64 hexagram, álmoskönyv |
| 11 | [Egzotikus naptárak és trendek](docs/11-egzotikus-naptarak-es-modern-trendek.md) | jávai weton, születéskövek, generációk; asztrokartográfia, horary, profekciók, retrográd Merkúr |
| 12 | [Tudomány, jog, piac](docs/12-tudomany-jog-piac.md) | Forer-hatás, asztrológia-tesztek, GDPR, app store-szabályok, piacelemzés, magyar piaci rés |
| 13 | [Holdnaptár](docs/13-holdnaptar.md) | fázisok, telihold-nevek, Hold a jegyekben, számítási algoritmusok, 2026-os táblázat, fogyatkozások |
| 14 | [Angyal-horoszkóp](docs/14-angyal-horoszkop.md) | 72 kabbalisztikus születési angyal teljes táblázattal, arkangyalok, napangyalok |
| 15 | [Kronobiológiai modellek](docs/15-kronobiologia-modellek.md) | két-folyamat modell képletekkel és paraméterekkel (Process S és C) — *részleges* |
| 16 | [Kronotípus-mérés](docs/16-kronotipus-meres.md) | MEQ, rMEQ, MCTQ, MSF<sub>sc</sub>, szociális jetlag, életkori normák, JS-implementáció |
| 17 | [Születés, fény, időzítés](docs/17-kronobiologia-szuletes-feny.md) | születési évszak hatásméretei, fény-PRC (Khalsa 2003), melanopikus EDI — *részleges* |
| 18 | [Kronobiológiai pszichogenetika (ХВД)](docs/18-kronobiologia-hvd.md) | Zsazskov csakraanalízise: a feltört zárt képlet, mind a három forrástáblázat, ellenőrzés |
| 19 | [Szabian-ellenőrzés](docs/19-szabian-ellenorzes.md) | mind a 360 szimbólum összevetése két független forráscsaláddal (Jones és Rudhyar) |

Minden fejezet magyar nyelvű, táblázatos, forrásmegjelöléssel, és következetesen
elválasztja a hiteles hagyományt a modern konstrukcióktól, illetve a tudományt az
áltudománytól.

---

## Amit a program szándékosan nem csinál

Nem ad egészségügyi, pénzügyi vagy jogi tanácsot, és nem címkéz embereket. A felület
alján állandó figyelmeztetés jelzi, hogy az asztrológiai és jóslási rendszerek nem
tudományosan igazolt módszerek — kulturális örökségként és önismereti tükörként
érdemes rájuk nézni. A kronobiológiai szakasz az egyetlen, amely lektorált szakirodalomra
épül; a bioritmus-modul pedig kifejezetten cáfolt elméletet mutat be, ezt ki is mondja.

---

## Licencek

A projekt saját kódja **MIT licencű** ([LICENSE](LICENSE)),
© 2026 Pacsai Ferenc.

Felhasznált nyílt forráskódú összetevők (mind MIT licencűek — a teljes
licencszövegek a [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md) fájlban):

| Összetevő | Szerepe | Szerzői jog |
|---|---|---|
| [Astronomy Engine](https://github.com/cosinekitty/astronomy) | csillagászati számítási mag | © 2019–2025 Don Cross |
| [Electron](https://www.electronjs.org/) | asztali keretprogram | © Electron contributors, GitHub Inc. |
| [electron-updater](https://github.com/electron-userland/electron-builder) | automatikus frissítés | © 2015 Loopline Systems |
| [electron-builder](https://github.com/electron-userland/electron-builder) | telepítő készítése (csak fejlesztéskor) | © 2015 Loopline Systems |

A telepített alkalmazás emellett tartalmazza az Electron és a Chromium teljes
licencgyűjteményét is (`LICENSE.electron.txt`, `LICENSES.chromium.html`).
