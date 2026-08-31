# Draconikus képlet, Vertex, aszteroidák

> **Forrásjelölés.** A Vertex képlete a Swiss Ephemeris forráskódjából
> (`swehouse.c`) származik, és független vektorgeometriai számítással ellenőrizve.
> Az aszteroidák pontossági állításai **saját mérésből** valók: JPL Horizons
> numerikusan integrált pozíciók a referencia, 1900–2050, havi lépésközzel.

## A) Draconikus képlet („lélekképlet")

### Számítás

```
draconikus_hosszúság = (trópikus_hosszúság − Északi_holdcsomó_hosszúság) mod 360
```

Így az Északi holdcsomó szerkezetileg **0° Kosra** kerül, a Déli 0° Mérlegre.
Egyes források „hozzáadásként" írják le (360 − csomó), ami algebrailag ugyanaz,
nem külön változat.

**A házak és a tengelyek IS elfordulnak ugyanennyivel** — ez az a pont, amit a
legtöbb online leírás elront. A draconikus Asc = trópikus Asc − csomó, ugyanígy
az MC. Nem *újraszámoljuk* őket a születési időből és helyből, hanem *elforgatjuk*.

Következmény: a házak mérete, a bolygók házhelyzete és minden fényszög
**változatlan** — csak a jegyek és a fokok mozdulnak el. Aki implementálja,
tudja: mivel a tengelyek elforgatva és nem újraszámolva keletkeznek, a
draconikus Asc/MC pár **nem felel meg valódi horizontnak és meridiánnak** az
adott szélességen. Szimbolikus elforgatás, nem csillagászati képlet.

### Melyik csomó? ⚠️

A **valós (true) csomó a de facto szabvány** (az astro.com dokumentált
alapértelmezése), de a kérdés valóban vitatott: Crane, Olliver és Blaquier
valósat használ, Rudhyar átlagosat, Blaquier maga írja, hogy nincs egyetértés.
A Swiss Ephemerisben **nincs** draconikus függvény, csak a két csomó — tehát
nincs mire hivatkozni: ez tervezői döntés.

Az eltérés nagysága: a valós csomó az átlagos körül leng, fő tagja **1,4979°
amplitúdó, ~173 nap periódus**, maximuma ~1,87°. Mivel a teljes képlet mereven
fordul el, bármely bolygó, amely ~2°-on belül van egy jegyhatárhoz, **jegyet
válthat** pusztán ettől a döntéstől.

**A programban** az átlagos csomót használjuk — következetesen azzal, ahogy a
képlet többi része is számol —, és ezt a felületen jelezzük.

### Eredet és jelentés

20. századi technika. A dokumentált vonal: Fagan (1951, vitatott babiloni
hivatkozás) → Davison, *The Lunar Zodiac* (1963) → Davison *Synastry* és Dennis
Elwell (1977) → **Pamela A. F. Crane, *Draconic Astrology* (1987)** — az első
könyv terjedelmű feldolgozás és a rendszer népszerűsítője.

Értelmezés: a trópikus (nap-, személyiség-) képlet alatti hold-, lélekréteg;
tudattalan indítékok, „magasabb életcél". Olliver megjegyzi, hogy a
reinkarnáció-hit nem előfeltétele az értelmezésnek.

A babiloni eredet állítása **egyetlen vitatott szöveghelyen nyugszik** — spekulatívként
kezelendő. A gyakorlatban a kétkerekes (natális + draconikus) összevetés az elsődleges
használat, 2–5°-os orbisszal.

## B) Vertex

### Meghatározás

Az elsőrendű vertikális (prime vertical) az a főkör, amely a keleti ponton, a
zeniten, a nyugati ponton és a nadíron megy át. A **Vertex** ennek a metszéspontja
az ekliptikával a **nyugati** oldalon; az **Anti-Vertex** a szemközti pont.

Miért működik a ko-szélesség trükk: az elsőrendű vertikális pólusa a horizont
északi pontja (RA = LST + 180°, dec = 90° − φ) — ez pontosan egy 90 − φ
szélességű, LST + 180 csillagidejű megfigyelő *zenitje*. Tehát a valódi megfigyelő
elsőrendű vertikálisa **azonos** annak a megfigyelőnek a horizontjával.

### Képlet (a swisseph forrásából igazolva)

```
f = (φ >= 0) ?  90 − φ  :  −90 − φ

Vertex = degnorm( atan2( −cos(RAMC),  sin(RAMC)·cos(ε) − tan(f)·sin(ε) ) )
AntiVertex = (Vertex + 180) mod 360
```

`atan2`-vel nem kell kézi negyedkorrekció. A swisseph négy-negyedes felbontása
algebrailag ugyanez (mért egyezés: 6,7e-14 fok).

### A degenerált tartomány a TRÓPUSOK, nem a sarkvidék ⚠️

Ez a kutatás legmeglepőbb eredménye, és **az ellenkezője annak, amit vártunk**.
Mivel Vertex = Aszcendens(ko-szélesség), a Vertex ott romlik el, ahol az
aszcendens képlete: amikor `90 − |φ| > 90 − ε`, azaz **|φ| < ε = 23,44°**.

Mért „rossz féltekére esés" arányok, sűrű RAMC-söpréssel:

| Szélesség | Hibás eset |
|---|---|
| 51,5° (Budapest) | 0 / 52 |
| −33,9° | 0 / 52 |
| 70° | 0 / 52 |
| **20°** | **9 / 52 (17%)** |
| **5°** | **23 / 52 (44%)** |

- **Magas szélességeken kifogástalan** — a ko-szélesség 0-hoz tart, `tan(f) → 0`,
  a képlet ott a legjobban kondicionált (66,5°, 70°, 80°, 85°, 89°, 89,9°-on
  pontos egyezés a nyers vektorgeometriával).
- **A 0° szélesség valóban degenerált**, nem csak pontatlan: ott az elsőrendű
  vertikális *maga* az égi egyenlítő, amely csak a napéjegyenlőségi pontokban
  metszi az ekliptikát. Van egy valódi **180°-os ugrás az egyenlítőn át**
  (φ→0+ esetén 0° Mérleg, φ→0− esetén 0° Kos), ezért az előjelágat pontosan
  reprodukálni kell, különben a déli féltekei születések 180°-kal elcsúsznak.
- A swisseph **nem alkalmaz sarkköri korlátozást** a Vertexre: a
  `fabs(fi) >= 90 - ekl` ág csak a házcsúcsokat védi. Vagyis a swisseph is
  csendben rossz Vertexet ad φ = 5°-on — a mérés ezt megerősítette.

**Következmény a programra:** a Vertexet kiszámoljuk, de **|φ| < 23,44° alatt
figyelmeztetést írunk ki**, hogy a pont ott geometriailag megbízhatatlan.

Kerülendő: az astrologysoftware.com-on terjedő ARCCOT-képletben **előjelhiba** van
(180° − Vertexet ad), és az az állítása, hogy „0° szélességen a Vertex egyenlő a
deszcendenssel", **hamis**.

### Eredet

L. Edward Johndro (1882–1951) dolgozta ki „elektromos aszcendens" néven.
Charles Jayne (1911–1985) 1935-től levelezett vele, tesztelte, és arra jutott,
hogy a *szemközti* pont az érzékenyebb — Johndro egyetértett. Tehát **Johndro
eredeti pontja a mai Anti-Vertex, Jayne finomítása a mai Vertex.** A Swiss
Ephemeris 1997 októberében (v1.01) vette fel.

Jelentés: „harmadik tengely", sorsszerű találkozások. Modern kiegészítés.

## C) A négy fő aszteroida

### Jelentés és eredet

Eleanor Bach 1973-as aszteroida-efemerisze vezette be (az első kiadott),
Demetra George *Asteroid Goddesses* (1986) népszerűsítette. Szokásos olvasat:
**Ceres** — táplálás, gondoskodás, veszteség és visszatérés; **Pallas** — alkotó
értelem, stratégia, mintafelismerés; **Juno** — elkötelezett társkapcsolat,
házasság, féltékenység; **Vesta** — odaadás, összpontosítás, szent munka.

Fontos: ez **kisebbségi gyakorlat** az asztrológusok között.

### A számítás — mért eredmények

Az Astronomy Engine (Don Cross) nem támogat aszteroidákat. A kérdés az volt,
lehet-e böngészőben, efemerisz-fájl nélkül elég pontosan számolni.

**1. Egyetlen rögzített elemkészlet katasztrófa** — nem „egy-két fok", hanem
tíz fokok. Maximális geocentrikus hosszúsághiba 1900–2050 között, a jelenlegi
JPL oszkuláló elemkészletből kétest-problémával propagálva:

| | Ceres | Pallas | Juno | Vesta |
|---|---|---|---|---|
| max. hiba | **18,9°** | **39,9°** | **23,2°** | **6,5°** |

A Pallas 1900-ban **több mint egy egész jeggyel** téved. Ez egybevág az MPC saját
figyelmeztetésével, hogy a kéttest-közelítés csak az epochától ±50 napon belül ad
ívmásodperces pontosságot.

**2. Okosabb egyetlen készlet sem menti meg.** A teljes tartományra legkisebb
négyzetekkel illesztett „közepes" elemkészlet (az elméleti optimum bármely
rögzített készletre): Ceres 0,79°, Vesta 0,82°, Juno 2,0°, **Pallas 4,9°**.
Lineáris ütemekkel bővítve (12 paraméter) a Pallas még mindig 4,7°. A maradék a
modellezetlen Jupiter-perturbáció, és **nem enged több paraméternek**.

**3. Kis elemtáblázat viszont kiválóan működik.** Rögzített epochákon tárolt
oszkuláló elemek, a legközelebbi bejegyzésből rövid kéttest-propagációval.
Mért max/RMS hiba 1900–2050:

| Lépésköz | Ceres | Pallas | Juno | Vesta |
|---|---|---|---|---|
| 1 év | 0,016° | 0,010° | 0,013° | 0,013° |
| **2 év** | **0,060°** | **0,061°** | **0,060°** | **0,072°** |
| 4 év | 0,33° | 0,31° | 0,46° | 0,36° |
| 10 év | 1,64° | 1,52° | 1,91° | 0,88° |

**Éles szimuláció:** 2 éves lépésköz, 1900–2050, kerekített értékek, az `n`
középmozgás az `a`-ból származtatva: **max. hiba 4,3 ívperc, RMS 0,37 ívperc,
76 epocha × 4 test = 19,8 KB JSON (8,2 KB gzippelve).**

**Végponttól végpontig ellenőrizve:** ugyanez a táblázat a JPL Horizons
*látszó* geocentrikus pozícióihoz mérve (fényidő- és aberrációkorrekcióval —
azaz amit egy efemerisz valóban közöl), Ceresre **max. 3,2′, RMS 0,45′**.
A fényidő-korrekció három sor, érdemes beletenni.

### Következtetés: megépíthető

- **Jegy (30°):** gyakorlatilag mindig helyes — a hiba ~400-szor kisebb egy jegynél.
- **Fok:** ívpercre pontos, bőven bármely asztrológiai orbison belül.
- **Költség:** ~20 KB adat, egy Kepler-megoldó, és négy Horizons-lekérés
  **csak build időben**. Az Astronomy Engine már megadja a Föld heliocentrikus
  helyzetét, tehát közvetlenül illeszkedik.

**Amit NE csináljunk:** egyetlen SBDB elemkészletet bedrótozni — a pontossági
katasztrófán túl az SBDB gördülő epochán szolgál ki, tehát el is avulna.
1900–2050-en kívüli dátumokhoz a táblázatot újra kell generálni.

**Elvetett alternatívák:** az Astronomy Engine `GravitySimulator`-a képletenként
több ezer lépést igényelne futásidőben; a Swiss Ephemeris WASM-ban ívmásodperces,
de ~700 KB–1 MB, szemben a 20 KB-tal.

## Források

Draconikus:
- `https://www.astro.com/astrology/aa_article210601_e.htm` (Blaquier)
- `https://www.astro.com/astrology/tl_article220506_e.htm` (Olliver)
- `https://www.astro.com/faq/fq_fh_owtype_e.htm`, `https://www.astro.com/faq/fq_fh_owstyle_e.htm`
- Joseph Crane, Lunar Nodes (2025): `https://astrologyinstitute.com/wp-content/uploads/2025/10/NodesBendingsPlanets.pdf`

Vertex:
- swisseph forrás: `https://raw.githubusercontent.com/aloistr/swisseph/master/swehouse.c`
- `https://www.astro.com/swisseph/swisseph.htm`
- `https://www.uraniatrust.org/astrology/astronomy-of-houses`
- `https://www.uraniatrust.org/celebrated-astrologers/edward-johndro`, `.../charles-jayne`

Aszteroidák:
- JPL SBDB API: `https://ssd-api.jpl.nasa.gov/doc/sbdb.html`
- JPL Horizons API: `https://ssd.jpl.nasa.gov/api.html`
- MPCORB: `https://www.minorplanetcenter.net/iau/MPCORB.html`
- Astronomy Engine: `https://github.com/cosinekitty/astronomy/blob/master/source/js/README.md`
