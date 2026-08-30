# Holdnaptár — teljes referencia

> **A dokumentum célja:** a Horoszkóp-projekt holdnaptár-moduljának teljes szakmai referenciája: csillagászati alapok, a 8 holdfázis és hagyományos jelentésük, telihold-nevek, a Hold a 12 jegyben (kertészeti holdnaptár-logikával), **számítási algoritmusok apphoz** (képletek, pszeudokód, kész könyvtárak), 2026–2028-as holdfázis- és fogyatkozás-táblázatok, tartalomműfajok és a világ holdnaptárai. A magyar népi holdhiedelmeket részletesen a **08. fejezet**, a hajvágás-naptárat a **11. fejezet** tárgyalja — itt csak utalunk rájuk.

---

## Tartalom

1. [Csillagászati alapok](#1-csillagászati-alapok)
2. [A 8 holdfázis](#2-a-8-holdfázis)
3. [Telihold-nevek](#3-telihold-nevek)
4. [A Hold a jegyekben](#4-a-hold-a-jegyekben)
5. [Számítás apphoz (algoritmusok, könyvtárak)](#5-számítás-apphoz)
6. [Holdfázis-táblázat 2026–2028 + fogyatkozások](#6-holdfázis-táblázat-2026-2028)
7. [Holdnaptár-tartalom műfajok appokhoz](#7-holdnaptár-tartalom-műfajok-appokhoz)
8. [A világ holdnaptárai](#8-a-világ-holdnaptárai)
9. [Források](#9-források)

---

## 1. Csillagászati alapok

### 1.1 A holdhónap négyféle definíciója

A „holdhónap" hossza attól függ, **mihez képest** mérjük a Hold keringését:

| Hónaptípus | Hossz (nap) | Mihez viszonyít? | Mire kell? |
|---|---|---|---|
| **Szinodikus** | **29,530589** (29 nap 12 óra 44 perc 2,9 mp) | a Naphoz (fázisciklus: újholdtól újholdig) | **holdfázis-számítás, holdnaptár** — ez a naptári alapegység |
| **Sziderikus** | 27,321661 | az állócsillagokhoz (ugyanahhoz a csillaghoz tér vissza) | a Hold jegyváltásának ritmusa (~2,5 nap/jegy szideszikus alapon) |
| **Anomalisztikus** | 27,554550 | a pálya földközelpontjához (perigeumtól perigeumig) | szuperhold/mikrohold, árapály-erősség |
| **Drakonikus** | 27,212221 | a felszálló pályacsomóhoz (csomótól csomóig) | **fogyatkozás-előrejelzés** (ekliptika-metszéspontok) |
| *(Tropikus)* | *27,321582* | *a tavaszponthoz* | *tropikus zodiákus szerinti holdjegy* |

A szinodikus hónap azért ~2,2 nappal hosszabb a sziderikusnál, mert amíg a Hold megkerüli a Földet, a Föld is továbbhalad a Nap körül (~27°-ot), így a Holdnak „utol kell érnie" a Nap irányát.

### 1.2 A holdfázisok geometriája

A Hold **nem világít**: mindig a napsütötte félgömbjének éppen felénk forduló részét látjuk. A fázist a **Nap–Föld–Hold szög** (elongáció) határozza meg:

- **Újhold (0°):** a Hold a Nap irányában áll, a felénk néző oldala sötét — nem látszik (kivéve, ha pontosan a Nap elé áll: napfogyatkozás).
- **Első negyed (90°):** a korong jobb fele világos (északi féltekén).
- **Telihold (180°):** a Föld a Nap és a Hold között — a teljes korong világos (ha pontos az együttállás a pályacsomónál: holdfogyatkozás).
- **Utolsó negyed (270°):** a bal fél világos.

A megvilágított hányad képlete: `illumináció = (1 − cos(elongáció)) / 2` — újholdnál 0, negyedeknél 0,5, teliholdnál 1.

### 1.3 Miért változó a hónap hossza?

A 29,53059 nap csak **átlag**: az egyes szinodikus hónapok **29,27 és 29,83 nap között** ingadoznak (akár ±7 óra az átlagtól). Okai:

1. **A Hold pályája ellipszis** (excentricitás ~0,055): perigeum közelében gyorsabban, apogeumnál lassabban mozog (Kepler 2. törvénye).
2. **A Föld pályája is ellipszis:** a Nap látszó mozgása sem egyenletes, így az „utolérési" idő is változik.
3. **A Nap gravitációs perturbációi** a Hold pályáján (evekció, variáció, éves egyenlőtlenség) tovább torzítják a mozgást.

Ezért **nem elég átlagos hónaphosszal számolni**, ha percpontos fázisidőpont kell (lásd 5.2, Meeus-korrekciók).

### 1.4 Szuperhold és mikrohold (perigeum/apogeum)

A Hold Föld-távolsága ~**356 400 és 406 700 km** között változik (átlagos perigeum ~363 300 km, átlagos apogeum ~405 500 km).

- **Szuperhold:** telihold (vagy újhold) a **perigeum közelében** — a korong ~14%-kal nagyobb és ~30%-kal fényesebb átmérőjű/fényű, mint mikroholdkor. Nem hivatalos csillagászati fogalom (Richard Nolle asztrológus alkotta 1979-ben); tipikus definíció: telihold a perigeum ±24 órás környezetében, vagy a Hold az adott pálya legkisebb távolságának ~90%-án belül.
- **Mikrohold:** telihold az **apogeum** közelében — kisebb, halványabb.
- A szuperhold-teliholdak évente jellemzően 3–4-szer, egymást követő hónapokban fordulnak elő (2026-ban: **november 24. és december 24.**).

### 1.5 Kék hold és fekete hold

- **Kék hold (blue moon):** *modern definíció:* a naptári hónap **második teliholdja** (mert 29,53 < 30/31 nap, ~2,7 évente fordul elő). *Eredeti (Maine Farmers' Almanac) definíció:* ha egy csillagászati évszakra 4 telihold jut, a **harmadik** a kék hold. A Hold ilyenkor **nem kék** — a név nyelvi eredetű („once in a blue moon" = nagyon ritkán). Legközelebb: **2026. május 31.** (havi definíció; májusban máj. 1. és máj. 31. is telihold), majd **2028. december 31.** (magyar idő szerint; UTC-ben dec. 30/31).
- **Fekete hold (black moon):** tükörfogalom az újholdra — leggyakrabban a naptári hónap **második újholdja**; ritkábban: olyan február, amelyben nincs újhold, vagy évszakonkénti 4 újholdból a harmadik. Szintén nem hivatalos csillagászati terminus.

---

## 2. A 8 holdfázis

A holdnaptár-hagyomány a ciklust 8 fázisra osztja. A négy „fő" fázis (újhold, első negyed, telihold, utolsó negyed) pillanatszerű csillagászati esemény; a négy „köztes" fázis (sarlók és domborúk) a köztük lévő ~3,7 napos szakasz.

**Felismerés az égen — a D–C szabály (északi féltekén):**
- **D betű = Dagad** (növekszik): ha a világos rész **jobb oldalt** domborodik (a korong D betűt formál), a Hold növekszik.
- **C betű = Csökken** (fogy): ha a világos rész **bal oldalt** van (C betű), a Hold fogy.
- A déli féltekén fordítva; az Egyenlítő közelében a sarló „csónakként" fekszik.
- További támpont a **láthatóság ideje**: a növekvő Hold este látszik nyugaton, a fogyó hajnalban keleten; az első negyed délben kel és éjfélkor nyugszik, a telihold napnyugtakor kel, az utolsó negyed éjfélkor kel és délben nyugszik.

### A fázisok jelentése a holdnaptár-hagyományban

> A „jelentések" a nyugati holdnaptár- és mágikus-népi hagyomány konszenzusát tükrözik (nem tudományos állítások) — a séma alaplogikája: **újholdtól teliholdig építkezés-gyarapodás, teliholdtól újholdig lezárás-elengedés.**

| # | Fázis | Elongáció | Égen | Hagyományos jelentés | Ajánlott tevékenységek |
|---|---|---|---|---|---|
| 1 | **Újhold** 🌑 | 0° | nem látható; este-hajnalban sötét ég | újrakezdés, „üres lap", befelé fordulás | **kezdés:** célkitűzés, tervezés, szándékállítás, új projekt indítása; pihenés, böjt |
| 2 | **Növekvő sarló** 🌒 | 0–90° | vékony D-sarló este, nyugaton | első lépések, remény, lendületvétel | elköteleződés, első konkrét lépések, tanulás megkezdése, magvetés (föld feletti termésűek) |
| 3 | **Első negyed** 🌓 | 90° | jobb félkorong; délben kel, éjfélkor nyugszik | akadályok, döntéskényszer, cselekvés | **építés:** döntéshozatal, akadályok leküzdése, kitartó munka, problémamegoldás |
| 4 | **Növekvő domború** 🌔 | 90–180° | jobbra domború, majdnem teli | finomítás, kitartás, érlelődés | részletek csiszolása, korrekció, hajrá a cél előtt, kapcsolatépítés |
| 5 | **Telihold** 🌕 | 180° | teljes korong; napnyugtakor kel, egész éjjel fent | csúcspont, beteljesedés, felfokozott érzelmek | **betakarítás:** eredmények learatása, ünneplés, hálaadás, teljes rálátás; hagyomány szerint nem ideális kezdésre |
| 6 | **Fogyó domború** 🌖 | 180–270° | balra domború; késő este kel | megosztás, tanítás, hálakör | eredmények megosztása, visszajelzés, dokumentálás, betakarítás folytatása |
| 7 | **Utolsó negyed** 🌗 | 270° | bal félkorong; éjfélkor kel, délben nyugszik | leszámolás, elengedés kezdete, mérleg | **elengedés:** lezárás, kiértékelés, felesleg leadása, rendrakás, szokáselhagyás indítása |
| 8 | **Fogyó sarló** 🌘 | 270–360° | vékony C-sarló hajnalban, keleten | megtisztulás, pihenés, átadás | pihenés, méregtelenítés, megbocsátás, tér készítése az újnak; gyomlálás, selejtezés |

A magyar népi hagyomány ugyanezt az alaplogikát követi (növő holdra „szaporító", fogyóra „pusztító-tisztító" munkák) — részletesen a **08. fejezetben**; a fázisokhoz kötött hajvágás-szabályokat a **11. fejezet** (hajvágás-naptár) dolgozza fel.

---

## 3. Telihold-nevek

### 3.1 Az amerikai almanach-hagyomány (algonkin eredetű nevek)

Az angolszász holdnaptár-tartalmak szinte kivétel nélkül a *Farmers' Almanac* / *Old Farmer's Almanac* által népszerűsített, részben algonkin indián eredetű neveket használják. Ha egy hónapban két telihold van, a második a **kék hold** (13. név).

| Hónap | Angol név | Magyar fordítás | Eredet/magyarázat |
|---|---|---|---|
| Január | Wolf Moon | **Farkashold** | a tél közepén üvöltő farkasok |
| Február | Snow Moon | **Hóhold** | a legtöbb hó ideje (más néven Éhség-hold) |
| Március | Worm Moon | **Féreghold** | a fagyból előbújó giliszták; tavaszkezdet |
| Április | Pink Moon | **Rózsaszín hold** | a korai tavaszi lángvirág (phlox) színe |
| Május | Flower Moon | **Virághold** | a teljes virágba borulás hava |
| Június | Strawberry Moon | **Eperhold** | a szamóca érésének ideje |
| Július | Buck Moon | **Bakhold** | a szarvasbikák új agancsának növekedése |
| Augusztus | Sturgeon Moon | **Tokhalhold** | a Nagy-tavak tokhalfogási szezonja |
| Szeptember | Corn / Harvest Moon | **Kukorica- / Aratási hold** | betakarítás (a Harvest Moon az őszi napéjegyenlőséghez legközelebbi telihold — néha októberre esik) |
| Október | Hunter's Moon | **Vadászhold** | vadászat a tél előtt |
| November | Beaver Moon | **Hódhold** | hódcsapdák állításának ideje |
| December | Cold Moon | **Hideg hold** | a leghosszabb éjszakák hava |
| (13.) | Blue Moon | **Kék hold** | a hónap/évszak „többlet"-teliholdja |

### 3.2 Régi magyar (népi-egyházi) hónapnevek

A magyar hagyományban nem alakult ki önálló telihold-névsor; a régi magyar hónapnevek azonban jól párosíthatók a telihold-nevekkel egy magyar közönségnek szánt appban:

| Hónap | Régi magyar hónapnév | Jelentésréteg |
|---|---|---|
| Január | **Boldogasszony hava** | Szűz Mária-ünnep (jan. 1. korábban) |
| Február | **Böjtelő hava** | a nagyböjt előszaka |
| Március | **Böjtmás hava** | a böjt második hava |
| Április | **Szent György hava** | ápr. 24., a tavaszi pásztorünnep |
| Május | **Pünkösd hava** | mozgó pünkösdünnep |
| Június | **Szent Iván hava** | jún. 24., nyári napforduló, tűzugrás |
| Július | **Szent Jakab hava** | júl. 25., aratás |
| Augusztus | **Kisasszony hava** | szept. 8-i Mária-ünnep előhava; nyárutó |
| Szeptember | **Szent Mihály hava** | szept. 29., pásztorelszámolás, ősz kezdete |
| Október | **Mindszent hava** | nov. 1. előhava, szüret |
| November | **Szent András hava** | nov. 30., disznóvágások kezdete |
| December | **Karácsony hava** | téli ünnepkör |

> App-tipp: a napi kártyán a kettő kombinálható, pl. „Novemberi telihold — Hódhold (Szent András hava)".

---

## 4. A Hold a jegyekben

A Hold az ekliptika mentén ~13,2°/nap sebességgel halad, így **~2,2–2,5 naponta lép új jegybe**; a teljes zodiákust 27,3 nap alatt (sziderikus hónap) járja körbe. A holdnaptár-asztrológia szerint a Hold aktuális jegye a napi **hangulati alaptónust** adja, a kertészeti (biodinamikus) holdnaptár pedig a jegy **eleméhez** köti a növényi „szervnapokat".

### 4.1 A Maria Thun-féle biodinamikus logika (gyökér/levél/virág/termés)

Maria Thun (1922–2012) biodinamikus kutató vetési naptára a jegy **eleme** szerint osztja a napokat — a hagyomány szerint az adott napon az elemhez tartozó növényi résszel kapcsolatos munka (vetés, ültetés, betakarítás) a legkedvezőbb:

| Elem | Jegyek | Naptípus | Mit érdemes művelni? |
|---|---|---|---|
| **Föld** | Bika, Szűz, Bak | **Gyökérnap** | répa, retek, burgonya, hagyma, gyökérzöldségek |
| **Víz** | Rák, Skorpió, Halak | **Levélnap** | saláta, spenót, káposzta, fűszernövények, gyep |
| **Levegő** | Ikrek, Mérleg, Vízöntő | **Virágnap** | virágok, brokkoli, articsóka, gyógynövény-virágzat |
| **Tűz** | Kos, Oroszlán, Nyilas | **Termésnap** (gyümölcs/mag) | paradicsom, bab, gabona, gyümölcsfák, tökfélék |

> **Fontos technikai részlet:** Thun a **sziderikus (csillagképi)** holdállással számolt, a legtöbb asztrológiai app viszont **tropikus** jegyeket használ — a kettő ma ~24° (kb. 2 nap) eltérést ad! Az appban dokumentálni kell, melyik rendszert követi a kertészeti modul. A biodinamikus hatás tudományos igazolása hiányzik (kontrollált vizsgálatok nem erősítették meg) — az app ezt jelezze „hagyomány" címkével.

### 4.2 A Hold mind a 12 jegyben — hangulat és ajánlott tevékenységek

| Holdjegy | Elem / naptípus | Hangulati tónus | Ajánlott (hagyomány szerint) | Kevésbé kedvez |
|---|---|---|---|---|
| **Kos** ♈ | Tűz / termésnap | energikus, türelmetlen, kezdeményező | gyors döntések, sport, indítás, bátor lépések | hosszas egyeztetés, aprómunka |
| **Bika** ♉ | Föld / gyökérnap | nyugodt, élvezetközpontú, kitartó | pénzügyek, kertészkedés, főzés, testápolás, stabil munka | kapkodás, hirtelen váltás |
| **Ikrek** ♊ | Levegő / virágnap | kíváncsi, csapongó, kommunikatív | levelezés, tanulás, tárgyalás, rövid utak, networking | monotónia, mély elmélyülés |
| **Rák** ♋ | Víz / levélnap | érzékeny, otthonos, gondoskodó | család, otthonszépítés, befőzés, érzelmi beszélgetés, öntözés | konfrontáció, hideg racionalitás |
| **Oroszlán** ♌ | Tűz / termésnap | önérzetes, játékos, nagyvonalú | szereplés, kreatív alkotás, ünneplés, randevú | háttérmunka, kritika fogadása |
| **Szűz** ♍ | Föld / gyökérnap | precíz, elemző, szolgálatkész | rendrakás, adminisztráció, egészségügyi teendők, részletmunka | nagyvonalú improvizáció |
| **Mérleg** ♎ | Levegő / virágnap | harmóniakereső, társas, esztéta | kapcsolatápolás, szépészet, művészet, megállapodások | egyedüli döntés, konfliktus |
| **Skorpió** ♏ | Víz / levélnap | intenzív, mélyre ásó, szenvedélyes | kutatás, lezárás, „nagytakarítás" lelki értelemben is | felszínes csevej; népi hagyomány: nem kedvez a hajvágásnak (→ 11. fej.) |
| **Nyilas** ♐ | Tűz / termésnap | optimista, kalandvágyó, filozofikus | utazástervezés, tanulás, jog, sport, jövőkép | szőrszálhasogatás |
| **Bak** ♑ | Föld / gyökérnap | fegyelmezett, célratörő, komoly | karrierlépések, hosszú távú tervek, struktúra, hivatalos ügyek | lazítás, érzelgősség |
| **Vízöntő** ♒ | Levegő / virágnap | újító, függetlenség­igényű, közösségi | csapatmunka, technológia, ötletelés, baráti kör | rutin, kötöttség |
| **Halak** ♓ | Víz / levélnap | álmodozó, empatikus, intuitív | művészet, meditáció, pihenés, segítés, zene | kemény alku, éles logika; népi hagyomány: lábápolásnak nem kedvez |

> A holdjegy + holdfázis **kombinálható**: pl. „növekvő Hold Bikában" = kedvező pénzügyi/kerti építkezésre; „fogyó Hold Szűzben" = ideális rendrakásra, lomtalanításra. Ez a kombinatorika adja a napi kártya szövegváltozatosságát (12 jegy × 8 fázis = 96 alapkombináció).

---

## 5. Számítás apphoz

**Ez a szakasz a fejlesztés szempontjából a legfontosabb.** Három pontossági szint létezik; a legtöbb holdnaptár-apphoz a 2. szint (kész könyvtár) az ajánlott út.

### 5.1 Egyszerű holdfázis-algoritmus (epocha + modulo)

Elv: egy ismert újhold-időponttól (epocha) eltelt időt vesszük modulo szinodikus hónap. Bevált epocha: **2000. január 6. 18:14 UTC** (JD = 2451550,26; a szakirodalom gyakran a JD 2451550,1 = 2000. jan. 6. 14:24 UTC kerekítést használja — bármelyik jó, ha konzisztens).

**Képlet:**

```
holdkor  = (JD_most − JD_epocha) mod 29.530588853      // napokban, 0…29.53
fázis    = holdkor / 29.530588853                       // 0…1 (0 = újhold, 0.5 = telihold)
```

**Pszeudokód (fázisindex a 8 fázisra):**

```pseudo
SZINODIKUS = 29.530588853
EPOCHA_JD  = 2451550.26            // 2000-01-06 18:14 UTC, újhold

function holdfazis(datum):
    jd    = datum_to_julian_day(datum)        // UTC-ben!
    kor   = mod(jd - EPOCHA_JD, SZINODIKUS)   // holdkor napokban
    frac  = kor / SZINODIKUS                  // 0..1
    index = floor(frac * 8 + 0.5) mod 8       // 0=újhold, 1=növekvő sarló, ... 7=fogyó sarló
    megvilagitas = (1 - cos(2*PI*frac)) / 2   // 0..1
    return (index, kor, megvilagitas)
```

**Pontosság:** a valódi hónapok hosszingadozása (1.3 szakasz) miatt a fázisváltás időpontja **akár ±0,6–0,7 napot** tévedhet. Napi kártyához, ikonhoz elegendő; „a telihold pontos ideje: 14:36" típusú tartalomhoz **nem**.

### 5.2 Pontosabb: Jean Meeus, *Astronomical Algorithms*, 49. fejezet

A referencia-módszer a fázis-**időpontok** kiszámítására (pontosság: néhány másodperc). Lényege:

1. **Ciklusindex:** `k = (év − 2000) × 12,3685` — k egész értéke újholdat jelöl; k + 0,25 = első negyed, k + 0,5 = telihold, k + 0,75 = utolsó negyed. (Az „év" itt tört év, pl. 2026,32.)
2. **Középidőpont** (átlagos, egyenletes mozgással):
   `JDE = 2451550,09766 + 29,530588861·k + 0,00015437·T² − 0,000000150·T³ + 0,00000000073·T⁴`
   ahol `T = k / 1236,85` (évszázad J2000-től).
3. **Segédszögek** ugyanarra a T-re: a Nap közép-anomáliája **M**, a Hold közép-anomáliája **M′**, a Hold szélességi argumentuma **F**, a felszálló csomó hossza **Ω** (mindegyik polinom k-ban és T-ben).
4. **Korrekciós tagok:** a középidőponthoz fázisonként eltérő, ~25 tagú szinuszos korrekciósor adódik (együtthatók: −0,40720·sin M′ + 0,17241·sin M + … újholdra; teliholdra hasonló, más együtthatókkal), plusz 14 kisebb „planetáris" tag. A negyedekhez külön **W-korrekció** is tartozik. A fő tagok a Hold pálya-ellipticitását (M′) és a Nap-perturbációt (M) írják le — együtt akár **±0,9 nappal** tolhatják el az átlagidőpontot.
5. Az eredmény **JDE (dinamikus idő, TT)** — UTC-hez le kell vonni a ΔT-t (2026 körül ~69 s).

Apphoz: a Meeus-sort érdemes **nem kézzel implementálni**, hanem olyan könyvtárat használni, amely ezt (vagy pontosabb elméletet, pl. VSOP87/ELP2000) már tartalmazza (5.4).

### 5.3 A Hold ekliptikai hosszúsága (holdjegy-számítás) — közelítő képlet

Alacsony pontosságú (~1°-os hibájú, jegymeghatározáshoz bőven elegendő) közelítés (Astronomical Almanac / Meeus 22. fej. nyomán). `D` = a J2000,0 epochától (2000-01-01 12:00 TT, JD 2451545,0) eltelt napok száma:

```
L' = 218.316 + 13.176396 · D        // a Hold közepes hosszúsága (fok)
M' = 134.963 + 13.064993 · D        // a Hold közép-anomáliája (fok)
F  =  93.272 + 13.229350 · D        // szélességi argumentum (fok)

λ  = L' + 6.289 · sin(M')           // ekliptikai hosszúság (fok) — fő tag: nagy egyenlőtlenség
β  = 5.128 · sin(F)                 // ekliptikai szélesség (fok)

λ  = mod(λ, 360)
jegy_index = floor(λ / 30)          // 0 = Kos, 1 = Bika, … 11 = Halak  (TROPIKUS zodiákus)
jegyen_beluli_fok = mod(λ, 30)
```

Megjegyzések:
- Ez **tropikus** hosszúság. Sziderikus (pl. védikus vagy Thun-féle) jegyhez le kell vonni az **ajanámsát** (Lahiri: ~24,2° 2026-ban) — lásd 04. fejezet.
- Nagyobb pontossághoz (±0,01°) a Meeus 47. fejezetének ~60 tagú ELP-alapú sora vagy egy kész könyvtár kell. Jegyváltás-időpont („ma 14:20-kor lép a Hold a Bikába") közlésénél a ~1° hiba ~2 óra bizonytalanság — értesítésekhez már pontosabb motor ajánlott.

### 5.4 Kész könyvtárak

| Könyvtár | Nyelv | Licenc | Pontosság / tudás | Megjegyzés |
|---|---|---|---|---|
| **Astronomy Engine** (cosinekitty) | JS/TS, C, C#, Python, Kotlin | **MIT** | ±1 perc a fázisidőpontokra (VSOP87/ELP alapú); fázisok, holdjegy-hosszúság, kelte/nyugta, fogyatkozások, perigeum/apogeum, libráció | **ajánlott elsődleges motor** — kicsi (~100 kB), offline, minden kell hozzá |
| **SunCalc** | JS | BSD-2-Clause | közelítő (fázis, illumináció, kelte/nyugta, pozíció) | nagyon elterjedt, de a hold-kelte/nyugta hibája percekben mérhető |
| **lunarphase-js** | JS/TS | MIT | egyszerű epocha-alapú fázis + emoji | gyors prototípushoz; pontos időpontokra nem való |
| **Skyfield** | Python | MIT | JPL efemeriszek (DE440 stb.) — **legpontosabb** | backend-oldali generáláshoz (pl. előre számolt naptár-JSON) |
| **PyEphem (ephem)** | Python | LGPL | XEphem-motor, jó pontosság | licence miatt zárt appba óvatosan; utódja inkább a Skyfield |
| **astronomia** | JS | MIT | a Meeus-algoritmusok JS-portja | ha kifejezetten Meeus-implementáció kell |

*(A GitHub-os megoldások bővebb felmérése: 05. fejezet.)* **Ajánlott architektúra:** backend/build-időben Skyfield vagy Astronomy Engine legenerálja a fázis- és jegyváltás-időpontokat évekre előre (kis JSON), a kliens csak megjeleníti — így nincs kliensoldali számítási és időzóna-hibalehetőség.

### 5.5 Holdkelte / holdnyugta

Lényegesen nehezebb, mint a napkelte-számítás, mert a Hold gyorsan mozog (~0,5°/óra) és nagy a **parallaxisa** (~57′): a standard megoldás iteratív — a megfigyelő földrajzi helyére **topocentrikus** koordinátákat kell számolni, és azt keresni, mikor éri el a Hold látszó magassága a `h₀ = +0,7275·π − 0°34′` értéket (π = parallaxis; a refrakció −34′, a Hold félátmérője és parallaxisa miatt a h₀ jellemzően **+0,125° körüli**, tehát a Hold középpontja még a horizont *alatt* van, amikor a pereme felbukkan). Van olyan nap (havonta ~1), amikor egy adott helyen **nincs holdkelte vagy holdnyugta**. Gyakorlatban: **Astronomy Engine `SearchRiseSet` vagy SunCalc `getMoonTimes`** — kézi implementáció nem éri meg.

---

## 6. Holdfázis-táblázat 2026–2028

### 6.1 2026 — összes újhold és telihold (pontos idő)

Magyar idő: CET = UTC+1; CEST (nyári időszámítás, **2026. márc. 29. – okt. 25.**) = UTC+2. (Forrás: csillagászati évkönyvek / holdnaptár-oldalak; perc szintű, ±1 perc eltérés forrásonként előfordulhat.)

**Újholdak 2026:**

| Dátum | UTC | Magyar idő | Megjegyzés |
|---|---|---|---|
| jan. 18. | 19:53 | 20:53 CET | |
| febr. 17. | 12:02 | 13:02 CET | **gyűrűs napfogyatkozás** (Antarktisz) |
| márc. 19. | 01:24 | 02:24 CET | |
| ápr. 17. | 11:53 | 13:53 CEST | |
| máj. 16. | 20:02 | 22:02 CEST | |
| jún. 15. | 02:55 | 04:55 CEST | |
| júl. 14. | 09:44 | 11:44 CEST | |
| aug. 12. | 17:38 | 19:38 CEST | **teljes napfogyatkozás** (Mo.: részleges!) |
| szept. 11. | 03:28 | 05:28 CEST | |
| okt. 10. | 15:51 | 17:51 CEST | |
| nov. 9. | 07:03 | 08:03 CET | |
| dec. 9. | 00:53 | 01:53 CET | |

**Teliholdak 2026:**

| Dátum | UTC | Magyar idő | Név / megjegyzés |
|---|---|---|---|
| jan. 3. | 10:04 | 11:04 CET | Farkashold |
| febr. 1. | 22:10 | 23:10 CET | Hóhold |
| márc. 3. | 11:39 | 12:39 CET | Féreghold; **teljes holdfogyatkozás** (Mo.-ról nem látható) |
| ápr. 2. | 02:13 | 04:13 CEST | Rózsaszín hold |
| máj. 1. | 17:24 | 19:24 CEST | Virághold |
| máj. 31. | 08:46 | 10:46 CEST | **Kék hold** (a hónap 2. teliholdja) |
| jún. 29. | 23:58 | jún. 30. 01:58 CEST | Eperhold *(figyelem: magyar időben már 30-a!)* |
| júl. 29. | 14:36 | 16:36 CEST | Bakhold |
| aug. 28. | 04:19 | 06:19 CEST | Tokhalhold; **részleges holdfogyatkozás** |
| szept. 26. | 16:50 | 18:50 CEST | Aratási hold |
| okt. 26. | 04:13 | 05:13 CET | Vadászhold |
| nov. 24. | 14:54 | 15:54 CET | Hódhold — **szuperhold** |
| dec. 24. | 01:29 | 02:29 CET | Hideg hold — **szuperhold** |

### 6.2 2027–2028 — hónap szintű áttekintés (UTC-dátum)

*(A dátumok UTC szerintiek; a magyar idő miatt egyes események naptári napja ±1 nappal eltolódhat — pontos időpontokat a kiadás előtt efemerisz-motorral kell generálni.)*

| Hónap | 2027 újhold | 2027 telihold | 2028 újhold | 2028 telihold |
|---|---|---|---|---|
| jan. | 7. | 22. *(szuperhold)* | 26. | 11. *(részl. holdfogy.)* |
| febr. | 6. | 20. *(félárny. holdfogy.)* | 24. | 9–10. |
| márc. | 7–8. | 21–22. | 25. | 10. |
| ápr. | 5–6. | 20. | 23. | 8–9. |
| máj. | 5–6. | 20. | 23. | 8. |
| jún. | 3–4. | 18–19. | 21. | 6–7. |
| júl. | 3–4. | 18. *(félárny. holdfogy.)* | 21. | 6. *(részl. holdfogy.)* |
| aug. | 1–2. *(teljes napfogy.!)* **és 31.** *(fekete hold)* | 16–17. *(félárny. holdfogy.)* | 19. | 5. |
| szept. | 29. | 15. | 18. | 3. |
| okt. | 29. | 14–15. | 17. | 3. |
| nov. | 27. | 13–14. | 16. | 1–2. |
| dec. | 27. | 12–13. | 15. | 1. **és 30–31.** *(kék hold + teljes holdfogy.!)* |

2027 augusztusában **két újhold** van (fekete hold), 2028 decemberében **két telihold** (kék hold — magyar idő szerint dec. 31-én).

### 6.3 Nap- és holdfogyatkozások 2026–2028 (Magyarországról nézve)

| Dátum | Típus | Fő láthatósági terület | **Látható Magyarországról?** |
|---|---|---|---|
| **2026. febr. 17.** | gyűrűs **nap** | Antarktisz (részleges: D-Amerika, D-Afrika csücske) | ❌ nem |
| **2026. márc. 3.** | teljes **hold** | Kelet-Ázsia, Ausztrália, Csendes-óceán, Amerika | ❌ nem (nálunk nappal van, a Hold a horizont alatt) |
| **2026. aug. 12.** | **teljes nap** (Grönland, Izland, **Spanyolország**) | Európa nagy részén részleges | ✅ **részleges: Budapesten ~60%-os fedés**, nyugat felé nagyobb (Sopron ~80%); este ~19:20–20:30 között, alacsonyan a nyugati horizont felett, napnyugtáig. Kiemelt app-esemény! |
| **2026. aug. 28.** | részleges **hold** (magnitúdó ~0,93) | Amerika, Európa, Afrika | ⚠️ részben: hajnalban (a részleges fázis ~4:33 CEST-kor kezdődik), a Hold a fogyatkozás közben nyugszik le nálunk |
| **2027. febr. 6.** | gyűrűs **nap** | D-Amerika, Atlanti-óceán, Ny-Afrika | ❌ nem |
| **2027. febr. 20–21.** | félárnyékos **hold** | Európa, Afrika, Amerika | ⚠️ elvileg igen, de szabad szemmel alig észlelhető |
| **2027. júl. 18.** | félárnyékos **hold** (nagyon sekély) | K-Ázsia, Ausztrália, Csendes-óceán | ❌ gyakorlatilag nem |
| **2027. aug. 2.** | **teljes nap** (Spanyolo., É-Afrika, Egyiptom — totalitás max. 6 p 23 mp, a század leghosszabbja szárazföldről) | Európa déli fele részleges | ✅ **részleges: Magyarországon ~40–50% fedés** (Székesfehérvár ~49%), délelőtt-dél körül (~10:00–12:30) |
| **2027. aug. 17.** | félárnyékos **hold** | Ny-Európa, Afrika, Amerika | ⚠️ elvileg, szabad szemmel nem feltűnő |
| **2028. jan. 11–12.** | részleges **hold** (magnitúdó ~0,07, sekély) | Európa, Ázsia, Afrika, É-Amerika | ✅ igen, hajnalban (kb. 4–5 óra UTC körül a maximum), de kis mértékű |
| **2028. jan. 26.** | gyűrűs **nap** | Ecuador–Peru–Brazília, Atlanti-óceán, Ibériai-fsz. (napnyugtakor) | ❌ nem / legfeljebb minimális Ny-Európában |
| **2028. júl. 6.** | részleges **hold** (magnitúdó ~0,39) | Afrika, Ázsia, Ausztrália, K-Európa | ⚠️ határeset: a maximum (~18:20 UTC) a magyar holdkelte környékén — legfeljebb a vége látszik alacsonyan |
| **2028. júl. 22.** | **teljes nap** | Ausztrália (Sydney!), Új-Zéland | ❌ nem |
| **2028. dec. 31.** | **teljes hold** (magnitúdó ~1,25) | Európa, Afrika, Ázsia | ✅ **igen, teljes egészében, kényelmes esti időpontban** (maximum ~17 óra UTC ≈ 18 óra CET) — szilveszteri „vérhold" **és** kék hold egyszerre. Kiemelt app-esemény! |

> App-tanulság: 2026. aug. 12. (részleges napfogyatkozás este), 2027. aug. 2. (részleges napfogyatkozás délben) és 2028. dec. 31. (szilveszteri teljes holdfogyatkozás) a három legerősebb hazai push-értesítés-esemény a hároméves ablakban. Napfogyatkozás-tartalomnál kötelező a szemvédelmi figyelmeztetés!

---

## 7. Holdnaptár-tartalom műfajok appokhoz

Priorizált lista (fejlesztési sorrend-javaslat, az érték/ráfordítás arány szerint):

1. **Napi holdfázis + holdjegy kártya** *(P0 — alapmodul)*: mai fázis (ikon + megvilágítás %), holdkor napokban, holdjegy fokra, D–C vizuális magyarázat, kelte/nyugta helyi időre. Minden más műfaj erre épül.
2. **„Mit érdemes ma?" ajánló** *(P0)*: a fázis × jegy kombinációból (96 alapszöveg + finomítások) generált napi ajánlás: kezdés/építés/betakarítás/elengedés + jegyspecifikus tevékenységek (4.2). Ez a legnagyobb retenciós erejű, naponta változó tartalom.
3. **Telihold/újhold-értesítők** *(P0–P1)*: push a telihold/újhold pontos idejéről + a telihold hagyományos neve (3.1/3.2) + szuperhold/kék hold jelölés + fogyatkozás-riasztás (6.3). Alacsony fejlesztési költség, magas megnyitási arány.
4. **Hajvágás-naptár** *(P1)*: fázis + holdjegy alapú „kedvező hajvágásnap"-jelölés — a szabályrendszert a **11. fejezet** adja; itt csak a naptár-nézetbe integrálás a feladat.
5. **Kertészeti holdnaptár** *(P1)*: gyökér/levél/virág/termés napok (4.1) havi naptárnézetben + növekvő/fogyó fázisréteg (föld feletti/alatti kultúrák); szezonális teendőlistával kombinálva. Külön célcsoportot hoz be; jelezni kell a sziderikus/tropikus választást és a „hagyomány, nem tudomány" címkét.
6. **Holdfázis a születésnapodon** *(P2)*: a felhasználó születési dátumára visszaszámolt fázis + a nyolc „holdfázis-születési típus" értelmezése — az értelmezési anyag a **07. és 11. fejezetben** kidolgozott holdfázis-születési típusokra épül; megosztható kártya (viralitás).
7. **Havi holdnaptár-összefoglaló / e-mail** *(P2)*: a hónap fázisai, jegyváltásai, kiemelt napjai egy nézetben; nyomtatható/megosztható változat.
8. **Fogyatkozás-központ** *(P2–P3)*: visszaszámláló a következő, Magyarországról látható fogyatkozásig, láthatósági térkép, észlelési tippek (6.3 táblázat adataiból).

---

## 8. A világ holdnaptárai

Rövid kitekintés — annak illusztrálására, hogy a holdhónap ma is élő naptári alapegység:

### 8.1 Iszlám (Hidzsra) naptár — tisztán lunáris

12 holdhónap = **354 vagy 355 nap**, szökőhónap nélkül, ezért az ünnepek (pl. **ramadán**) évente ~11 nappal korábbra csúsznak a Gergely-naptárhoz képest, és ~33 év alatt körbejárják az évszakokat. A hónapkezdet klasszikusan a **holdsarló tényleges megpillantásához** kötött (ezért országonként ±1 nap eltérés lehet); Szaúd-Arábia az előre számított Umm al-Kura naptárat használja. A Hidzsra-időszámítás 622-től (Mohamed Mekkából Medinába vándorlása) indul.

### 8.2 Zsidó naptár — luniszoláris

Holdhónapok (29/30 nap, a hónapkezdet a *molad*, az újhold számított időpontja) + **évszak-korrekció**: a 19 éves **Metón-ciklusban 7 szökőhónap** (Ádár II) tartja szinkronban a napévvel, így a pészah mindig tavaszra esik. Teljesen **aritmetikai** (i. sz. 4. századtól rögzített szabályokkal számított) naptár — jó példa arra, hogy holdnaptár észlelés nélkül, tisztán algoritmikusan is vezethető.

### 8.3 Kínai naptár — luniszoláris

Holdhónapok újholdtól újholdig, szökőhónapokkal a napévhez igazítva; a holdújév (a téli napfordulót követő 2. vagy 3. újhold) január 21. és február 20. közé esik. Az állatövi évek, a 60-as ciklus és a részletek a **02. fejezetben** (kelet-ázsiai asztrológia).

### 8.4 Hindu naptár — a *tithi* fogalma

A hindu (védikus) naptár holdhónapja nem napokra, hanem **30 tithire (holdnapra)** oszlik: egy tithi az az idő, amíg a Hold és a Nap ekliptikai hosszkülönbsége **12°-kal** nő. Mivel a Hold sebessége változó, egy tithi hossza **~19 és ~26 óra** között ingadozik — ezért fordulhat elő, hogy egy naptári napra két tithi jut, vagy egy tithi „kimarad". A hónap két fele: *shukla paksha* (növekvő, 1–15. tithi, a 15. a telihold = *púrnimá*) és *krishna paksha* (fogyó, a 30./új­holdi tithi az *amávaszjá*). A vallási ünnepek tithihez kötöttek (pl. divali = a Kártik hónap amávaszjája).

**Tithi-számítás (közvetlenül implementálható):**

```
tithi_index = floor( mod(λ_hold − λ_nap, 360°) / 12° ) + 1     // 1…30
```

ahol λ_hold az 5.3 képletből, λ_nap a Nap geocentrikus ekliptikai hosszúságából (egyszerű közelítés: `λ_nap ≈ 280,459 + 0,98564736·D + 1,915·sin(M_nap)`, M_nap = 357,529 + 0,98560028·D). Ez az app „védikus" moduljának (04. fejezet) is alapja lehet.

---

## 9. Források

**Csillagászati alapok, algoritmusok:**
- Jean Meeus: *Astronomical Algorithms*, 2. kiadás, Willmann-Bell, 1998 — 22. fej. (nutáció), 47. fej. (Hold-pozíció), 49. fej. (holdfázisok)
- Astronomy Engine (Don Cross), dokumentáció és forrás: https://github.com/cosinekitty/astronomy (MIT)
- SunCalc: https://github.com/mourner/suncalc (BSD-2) · lunarphase-js: https://github.com/jasonsturges/lunarphase-js (MIT) · Skyfield: https://rhodesmill.org/skyfield/ (MIT) · PyEphem: https://rhodesmill.org/pyephem/ (LGPL) · astronomia: https://github.com/commenthol/astronomia (MIT)
- NASA Eclipse Web Site (F. Espenak): https://eclipse.gsfc.nasa.gov — fogyatkozás-katalógusok
- Astronomical Almanac / USNO: alacsony pontosságú Hold-pozíció képletek

**2026–2028 fázis- és fogyatkozásadatok:**
- Bíborcsillag asztrológiai blog — Holdfázisok 2026 (magyar idejű lista): https://biborcsillag.hu/2025/11/18/holdfazisok-2026-telihold-ujhold-datumok/
- EpochConverter Lunar Phases 2027 / 2028: https://www.epochconverter.com/lunar-phases/2027 · https://www.epochconverter.com/lunar-phases/2028
- timeanddate.com — Eclipses in Europe: https://www.timeanddate.com/eclipse/list.html?region=europe
- Britannica — Upcoming eclipses 2026–2028: https://www.britannica.com/topic/upcoming-eclipses
- Almanac.com — Solar and Lunar Eclipse Dates: https://www.almanac.com/eclipses
- VCSE (Vega Csillagászati Egyesület) — a 2026. aug. 12-i napfogyatkozás Magyarországról: https://vcse.hu/napfogyatkozas-es-perseida-maximum-2026-augusztus-12-en-vcse/
- napfogyatkozas2026.hu — magyarországi láthatósági adatok: https://napfogyatkozas2026.hu/
- fmc.hu — a 2027. aug. 2-i fogyatkozás székesfehérvári adatai: https://fmc.hu/2026/08/13/mutatjuk-mikor-jonnek-a-kovetkezo-napfogyatkozasok-szekesfehervaron
- Astronomy.com — 2026 Full Moon calendar: https://www.astronomy.com/observing/full-moon-calendar-dates-times-types/

**Telihold-nevek, hagyomány, kertészeti naptár:**
- Old Farmer's Almanac — Full Moon Names: https://www.almanac.com/full-moon-names
- Maria Thun: *Aussaattage* (magyarul: *Vetési napok* — évente megjelenő biodinamikus vetési naptár)
- Régi magyar hónapnevek: Magyar Néprajzi Lexikon; a magyar népi holdhiedelmek részletesen a projekt **08. fejezetében**

> **Megbízhatósági megjegyzés:** a 2026-os perc szintű időpontok másodlagos (holdnaptár-) forrásból származnak, a kulcsértékek (febr. 17., márc. 19., aug. 12., jan. 18.) NASA/almanach-adatokkal ellenőrizve; kiadás előtt a teljes táblázatot érdemes Astronomy Engine-nel vagy Skyfielddel újragenerálni — ugyanazzal a motorral, amely az appban is fut.
