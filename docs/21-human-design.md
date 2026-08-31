# Human Design — a rendszer szabályai és forrásai

> **Forrásjelölés.** A szabályokat a hivatalos [Jovian Archive](https://jovianarchive.com)
> (Ra Uru Hu alapítványa) oldaláról ellenőriztük, több független HD-iskola és
> fokdiagram-tábla keresztellenőrzésével. A bizonytalanul maradt pontot külön
> jelöljük. A rendszer nem tudományos: kulturális és önismereti keretként érdemes
> rá tekinteni.
>
> Kapcsolódó: [Gene Keys](22-gene-keys.md) — ugyanerre a kerékre épül.

## Áttekintés

A Human Designt Ra Uru Hu (Alan Robert Krakower) alkotta meg 1987-ben. A nyugati
asztrológiát, az I Csing 64 hexagramját, a kabbalista életfát és a csakrarendszert
gyúrja össze.

A képlet **két pillanatból** épül:

- **Személyiség (tudatos, feketével)** — a születés pillanata,
- **Design (tudattalan, pirossal)** — az az időpont, amikor a Nap pontosan
  **88 fokkal** korábban járt.

> **Fontos:** a hivatalos meghatározás **88 fok ívmérték**, nem 88 nap. A Jovian
> Archive szó szerint: *„az idő hossza, amíg a Nap nyolcvannyolc fok ívet megtesz."*
> Ez átlagosan kb. 88–89 napra jön ki, de a pontos érték a Föld pályasebességétől
> függően változik. A programban Newton-iterációval oldjuk meg a
> `napHosszúság − 88°` egyenletet.

## A kapukerék

- A **41-es kapu a Vízöntő 2°00′-án** kezdődik (302° trópikus ekliptikai hosszúság),
  és 2°00′–7°37′30″-ig tart.
- Egy kapu **5,625°** (360/64), azon belül hat vonal, egyenként **0,9375°**.
- Ellenőrzött horgonyok: a **25-ös kapu átfogja a 0° Kost** (28°15′ Halak – 3°52′30″ Kos)
  — ez a klasszikus próba; a **60-as kapu zárja a kereket** (26°22′30″ Bak – 2°00′ Vízöntő).

A kerék sorrendje a Vízöntő 2°-tól, zodiákus irányban:

```
41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
27, 24,  2, 23,  8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
31, 33,  7,  4, 29, 59, 40, 64, 47,  6, 46, 18, 48, 57, 32, 50,
28, 44,  1, 43, 14, 34,  9,  5, 26, 11, 10, 58, 38, 54, 61, 60
```

**Mind a 64 pozíció ellenőrizve** két független fokdiagram-táblával.

### Programozó partnerek

A keréken 180°-ra álló kapupárok (32 pár). A kódban **nem kézzel kódoljuk**,
hanem a kerékből származtatjuk (`+32` pozíció) — így önellenőrző. Ez egyben
a fordított hexagram is: mind a hat vonal átbillentve.

## A 9 központ és a kapuik

| Központ | Motor? | Kapuk |
|---|---|---|
| Fej | nem | 64, 61, 63 |
| Ajna | nem | 47, 24, 4, 17, 43, 11 |
| Torok | nem | 62, 23, 56, 16, 20, 31, 8, 33, 35, 12, 45 |
| G (identitás) | nem | 1, 13, 25, 46, 2, 15, 10, 7 |
| Szív (Ego) | **igen** | 21, 40, 26, 51 |
| Szakrális | **igen** | 34, 5, 14, 29, 59, 9, 3, 42, 27 |
| Napfonat | **igen** | 6, 37, 22, 36, 30, 55, 49 |
| Lép | nem | 48, 57, 44, 50, 32, 28, 18 |
| Gyökér | **igen** | 58, 38, 54, 53, 60, 52, 19, 39, 41 |

Összesen 3+6+11+8+4+9+7+7+9 = **64**, egyetlen kapu sem hiányzik és nincs duplikálva.
**Ellenőrizve, központonként.**

## A 36 csatorna

Egy csatorna akkor definiált, ha **mindkét kapuja** aktivált. A csatorna definiálja
a két végén álló központot.

| Kapuk | Hivatalos név | Magyar |
|---|---|---|
| 1-8 | Inspiration | Inspiráció |
| 2-14 | The Beat | Az Ütem |
| 3-60 | Mutation | Mutáció |
| 4-63 | Logic | Logika |
| 5-15 | Rhythm | Ritmus |
| 6-59 | Mating | Párosodás |
| 7-31 | The Alpha | Az Alfa |
| 9-52 | Concentration | Koncentráció |
| 10-20 | Awakening | Ébredés |
| 10-34 | Exploration | Feltárás |
| 10-57 | Perfected Form | Tökéletesített forma |
| 11-56 | Curiosity | Kíváncsiság |
| 12-22 | Openness | Nyitottság |
| 13-33 | The Prodigal | A Tékozló |
| 16-48 | The Wavelength | A hullámhossz |
| 17-62 | Acceptance | Elfogadás |
| 18-58 | Judgment | Ítélkezés |
| 19-49 | Synthesis | Szintézis |
| 20-34 | Charisma | Karizma |
| 20-57 | The Brain Wave | Az agyhullám |
| 21-45 | Money | A pénz vonala |
| 23-43 | Structuring | Strukturálás |
| 24-61 | Awareness | Tudatosság |
| 25-51 | Initiation | Beavatás |
| 26-44 | **Surrender** | Megadás |
| 27-50 | Preservation | Megőrzés |
| 28-38 | Struggle | Küzdelem |
| 29-46 | Discovery | Rátalálás |
| 30-41 | Recognition | Felismerés |
| 32-54 | Transformation | Átalakulás |
| 34-57 | Power | Erő |
| 35-36 | Transitoriness | Mulandóság |
| 37-40 | Community | Közösség |
| 39-55 | Emoting | Érzelmesség |
| 42-53 | Maturation | Érés |
| 47-64 | Abstraction | Absztrakció |

> **Javított elnevezés.** A 26-44 csatorna hivatalos neve **Surrender** (Megadás),
> nem „vállalkozó szellem" — utóbbi elterjedt, de nem Jovian-terminológia.
> A 10-34 (Exploration) és a 29-46 (Discovery) két különböző csatorna: magyarul
> is meg kell őket különböztetni.

## Típusmeghatározás

Motorok: **szakrális, szív (ego), napfonat, gyökér**.

| Feltétel | Típus |
|---|---|
| egyetlen központ sem definiált | **Reflektor** |
| szakrális definiált **és** motor kapcsolódik a torokhoz | **Manifesztáló Generátor** |
| szakrális definiált, motor **nem** kapcsolódik a torokhoz | **Generátor** |
| szakrális **nem** definiált, motor kapcsolódik a torokhoz | **Manifesztor** |
| minden más (van definíció, nincs szakrális, nincs motor–torok) | **Projektor** |

> **A „motor a torokhoz kapcsolódik" közvetetten is számít.** A hivatalos szabály
> szerint elég, ha *aktív csatornaláncon keresztül* elérhető — például
> gyökér → lép → torok a 32-54 és 16-48 csatornákkal. A kód ezért a torkot
> tartalmazó összefüggő komponensben keres motort, nem közvetlen élt.
> **Ellenőrizve, ez a helyes szemantika.**

## Belső tekintély

Sorrend, az első találat nyer:

1. **Érzelmi (napfonat)** — ha a napfonat definiált
2. **Szakrális**
3. **Lép**
4. **Ego (akarat)**
5. **Ön-vetítéses (G)**
6. **Mentális / környezeti** (nincs belső tekintély)
7. **Holdciklus** — reflektor

> **Egyszerűsítés, amely bizonyítottan egyenértékű.** A tankönyvi feltétel az
> ön-vetítésesnél „a G a **torokkal** van összekötve", a mentálisnál „csak a torok
> fölött van definíció". A kódban elég a `G definiált` / fallthrough vizsgálat,
> mert a G minden nem-torok csatornája (10-34, 5-15, 2-14, 29-46 → szakrális;
> 10-57 → lép; 25-51 → szív) és a gyökér minden csatornája előbb definiál egy
> magasabb prioritású központot. **Ne írjuk át szigorúbbra** — a kódban ezért
> áll erről megjegyzés.

Finomítási lehetőség (nem hiba): a Jovian glosszárium az egót kettébontja
*Ego Manifested* (szív→torok, 21-45) és *Ego Projected* (25-51, torok nélkül)
alakra. Mi egyben kezeljük.

## Profil, inkarnációs kereszt, definíció

- **Profil** = a személyiség Nap vonala / a design Nap vonala. A 12 érvényes profil:
  1/3, 1/4, 2/4, 2/5, 3/5, 3/6, 4/6, 4/1, 5/1, 5/2, 6/2, 6/3.
- **Inkarnációs kereszt szöge** (a Jovian szótár szerint szó szerint így):
  - **Jobb szög** (személyes sors): 1/3, 1/4, 2/4, 2/5, 3/5, 3/6, 4/6
  - **Egymás mellett** (rögzített sors): 4/1
  - **Bal szög** (transzperszonális karma): 5/1, 5/2, 6/2, 6/3
- **Definíció** = a definiált központok összefüggő komponenseinek száma:
  0 = nincs (reflektor), 1 = egyszeres, 2 = **osztott (split)**, 3 = hármas hasadás,
  4 = négyes hasadás. **A 4 a matematikai maximum**: minden terület legalább 2
  központot igényel, 9 központból nem lehet 5 különálló csoport.

## Aktivációk

Képletenként **13 égitest**, összesen **26 aktiváció**:

Nap, Föld (Nap+180°), Északi holdcsomó, Déli holdcsomó (Északi+180°), Hold,
Merkúr, Vénusz, Mars, Jupiter, Szaturnusz, Uránusz, Neptunusz, Plútó.

A Khirón **nem** része a Human Design aktivációknak.

## A központok értelmezése: definiált, nyitott, teljesen nyitott

A felület nem feltételes általánosságot ír ki („ha nyitott, akkor…"), hanem azt,
ami a felhasználó saját képletében **igaz**. Ehhez központonként külön szöveg
tartozik definiált és nyitott állapotra.

### Három állapot, nem kettő

Ra Uru Hu külön tanította a különbséget, és a program is megkülönbözteti:

| Állapot | Mechanika | Értelmezés |
|---|---|---|
| **Definiált** | teljes csatorna (mindkét kapu aktív) | rögzített, következetes; kifelé sugároz |
| **Nyitott** | van aktivált („lógó") kapu, de nincs teljes csatorna | fogékony, **de van viszonyítási pontja** |
| **Teljesen nyitott** | egyetlen aktivált kapu sincs | nincs viszonyítási pont: a legnagyobb befolyásolhatóság és a legnagyobb bölcsesség-lehetőség |

Ra szavaival: „ha van lógó kapud, van mibe kapaszkodnod" — enélkül „nincs mód
felmérni a kondicionálást". A legtöbb népszerű HD-oldal a nyitott és a teljesen
nyitott állapotot egybemossa.

### „Nem-önmagad" kérdések

Központonként egy felismerő kérdés tartozik a nyitott állapothoz. **Fontos
forrásjelölés:** a kérdés-formátum tanítói hagyomány, nem szó szerinti Ra
Uru Hu — a Jovian Archive ugyanezt a tartalmat kijelentő módban hozza. Két
független forrás szó szerint azonosan adja mind a kilencet, tehát a lista
stabil, de a megfogalmazást nem szabad személyesen Rának tulajdonítani.

A kérdések **nem a felhasználóról szóló ítéletek**: olyan belső hangokat
neveznek meg, amelyeket maga a rendszer bírál. A felület ezt a keretezést
külön kiírja, mert a szövegkörnyezetből kiszakítva úgy hatnának, mintha a
program azt mondaná a felhasználónak, hogy baj van vele.

### Százalékok — csak ahol van forrás

A Jovian Archive **nem közöl központonkénti statisztikát** (csak típus,
tekintély, definíció, profil, kereszt). Ezért csak négy központnál írunk
százalékot:

| Központ | Definiált | Alap |
|---|---|---|
| Napfonat | kb. az emberek fele | Jovian szó szerint (49,5%); egybevág az érzelmi tekintély arányával |
| Szakrális | kb. 70% | levezethető: definiált szakrális ⟺ generátor/manifesztáló generátor |
| Fej | kb. 30% | Jovian blog („kb. 70%-nak nyitott") |
| Szív (Ego) | kb. 33% | Ra szó szerint: „az emberiség kétharmadának nyitott az egója" |

A többi öt központra keringő számok forrás nélküliek és gyanúsan egyformák a
különböző oldalakon — ezeket **nem írjuk ki**.

> Külön figyelmeztetés: a „a szív definiált az emberek 1/8-ánál" állítás
> sehonnan nem igazolható. Valószínűleg az *ego-tekintéllyel* keverik, ami
> tényleg ritka (~1–2%) — a definiált ego-*központ* viszont nem az.

## Egészségügyi állítások: mit nem írunk ki

A Human Design irodalma tele van orvosi és lélektani állításokkal. Ezekből
**semmit nem veszünk át**:

- mirigy- és szervmegfeleltetések tényként (a lép „immunrendszer"-ként — ezt
  a korábbi változatból kivettük),
- betegségnevek bármely központhoz kötve (depresszió, cukorbetegség, pajzsmirigy,
  „mellékvese-kimerülés", szorongásos zavarok),
- az az állítás, hogy a nem hiteles élet betegséget okoz,
- szerhasználat mint „design-következmény",
- bármi, ami az orvoshoz fordulástól tántorít.

Ahol a hagyomány nyelve determinisztikus, tompítjuk: „mindig" helyett
„a rendszer szerint", klinikai szavak helyett élményszintű megfogalmazás.

## Nyitott kérdés: átlagos vagy valós holdcsomó ⚠️

A program **átlagos (mean)** holdcsomót számol. A hivatalos Jovian szoftver
(Maia Mechanics) a Swiss Ephemerist használja, de **nem dokumentálja nyilvánosan**,
hogy valós (true) vagy átlagos csomóponttal dolgozik, és ezt a kutatás nem tudta
hiteles forrásból eldönteni.

A két érték legfeljebb **~1,7°**-kal tér el, ami kb. **egyharmad kapunyi**. Mivel
a 26 aktivációból 4 csomóponti, ez a motor legnagyobb megmaradt pontossági
kockázata: ha egy csomóponti kapu épp kapuhatáron áll, más kalkulátor eggyel
odébb sorolhatja. A felület ezért külön jegyzetben figyelmezteti a felhasználót.

## Ellenőrzött számítások

A `docs/`-on túl a motor gépi önteszteket is kapott:

| Amit ellenőrzünk | Módszer |
|---|---|
| Kerék sorrendje | mind a 32 programozó partner-pár pontosan 180°-ra esik |
| Design időpont | a napív pontosan 88,000000°, a dátum 88–89 nappal korábbi |
| Nap ↔ Föld | minden mintán programozó partner-kapuk |
| Típuseloszlás | 600 véletlen születésen a publikált arányok (generátor-család ~67%, projektor ~21%, manifesztor ~11%, reflektor ~1%) |
| Központ-konzisztencia | 2000 képleten a definiált központok pontosan a csatornák végpontjai |
| Reflektor | 0 csatorna, 0 definiált központ, holdciklus-tekintély |
| Determinizmus | ugyanaz a bemenet kétszer ugyanazt adja |

## Források

Hivatalos (Jovian Archive):
- `https://jovianarchive.com/pages/human-design-dictionary` — a glosszárium, a legtöbb szabály elsődleges forrása
- `https://jovianarchive.com/blogs/human-design-basics/the-4-human-design-types`
- `https://jovianarchive.com/blogs/human-design-basics/manifestors-the-non-sacral-energy-types`
- `https://jovianarchive.com/pages/what-is-inner-authority-in-human-design`
- `https://jovianarchive.com/pages/self-projected-authority-in-human-design-the-projectors-voice`
- `https://jovianarchive.com/pages/channels-in-human-design-the-life-force`
- `https://jovianarchive.com/pages/human-design-statistics`

Keresztellenőrzés:
- `https://bonniesorsby.com/human-design-gates-by-degree/` — fokdiagram-tábla
- `https://www.barneyandflow.com/gate-zodiac-degrees` — független fokdiagram
- `https://humandesign.zone/channel` — mind a 36 csatorna hivatalos keynote-tal
- `https://humandesign4all.com/the-36-channels-in-human-design/`
- `https://humandesign-berufsberatung.de/en/human-design-centers/` — központok és kapuik
- `https://sanctuarybykristenrice.com/bloghome/planetsinhumandesign` — a 13 aktiváció
