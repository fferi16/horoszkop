# Szolárhoroszkóp és progresszív Hold — az értelmezés forrásai

> A `docs/01` 8.2–8.3 pontja a technikát írja le. Ez a jegyzet ahhoz kellett, hogy az
> „Éves égi képed" szekció ne általános magyarázatot, hanem a felhasználó saját szolár- és
> progressziós állásainak olvasatát adja (feladatlista 3. pont). Készült: 2026-09-08.

## 1. Források

| Forrás | Mit ad |
|---|---|
| **Alexandre Volguine**, *La technique des révolutions solaires* (1937, 1972) | a modern szolártechnika alapkönyve; a szolár ASC és a születési ház, amelybe esik; születési bolygók a szolár sarokpontokon |
| **Mary Fortier Shea**, *Planets in Solar Returns* (1992/2005) | bolygók a szolárházakban; a szolár ASC jegye és **ura** mint az év fő leírója; a Hold háza = „hol van a szíved" |
| **James A. Eshelman**, *Interpreting Solar Returns* (1985) | a tényezők fontossági sorrendje; a Hold fényszögei |
| **Robert Blaschke**, *Progressions* (1998); **Bernadette Brady**, *Predictive Astrology: The Eagle and the Lark* (1992); **Carol Rushman**, *The Art of Predictive Astrology* | a progresszív Hold jegye (~2,5 éves „érzelmi évszak") és háza; a jegyek kifelé/befelé váltakozása |
| cafeastrology.com — *Interpreting Solar Returns* sorozat, *The Progressed Moon Through the Signs* | a fenti szerzők kereteinek összefoglalása |

## 2. A szolárképlet — mit nézünk, milyen sorrendben (Eshelman/Shea)

1. **Szolár aszcendens jegye** — az év „fellépése", az a hangnem, ahogy a környezethez viszonyulsz.
2. **A szolár ASC ura** — Shea szerint az év legfontosabb bolygója; a szolárháza mutatja, honnan jönnek az év fő eseményei.
3. **Melyik születési házba esik a szolár ASC** — Volguine: az a születési életterület kerül előtérbe.
4. **Születési bolygók a szolár sarokpontokon** (ASC/MC/DC/IC, ±3°) — az adott bolygó ügyei az évben kiemelten működnek.
5. **A szolár Nap háza** — hol akarsz „ragyogni", hová fektetsz energiát.
6. **A szolár Hold háza és jegye** — Shea: „hol van a szíved", az érzelmi befektetés helye; a jegy az év érzelmi hangneme.

Rögzített döntések: a szolárt a **születési helyre** számoljuk (klasszikus gyakorlat, Volguine is ezt tartja elsődlegesnek; a relokációs iskola külön kérdés), tropikus, precesszió nélkül, a felhasználó házrendszerével (Shea: Placidus).

**Születési idő nélkül** a napvisszatérés pillanata ±12 óra bizonytalanságú (a natál Nap foka ±0,5°), ezért a szolár ASC, a házak és a sarokpontok **nem számíthatók** — csak a szolár Hold jegye adható (a Hold ±6°-ot mozog, a jegy többnyire így is stimmel), figyelmeztetéssel.

## 3. A progresszív Hold

- Sebessége ~1°/hónap, egy jegyben ~2,5 év: a jegy az aktuális **érzelmi évszak** (Blaschke), a ház az a születési életterület, ahol az igények és hangulatok jelentkeznek (Brady: jegy + ház + progressziós holdfázis együtt).
- A jegyek felváltva kifelé (Kos, Ikrek, Oroszlán, Mérleg, Nyilas, Vízöntő) és befelé (Bika, Rák, Szűz, Skorpió, Bak, Halak) irányulnak — a jegyváltás ezért érezhető hangulatváltás.
- A progresszív Hold **születési háza** a natál csúcsokból számítható (idő kell hozzá).

## 4. Amit az appban ebből megírtunk (saját megfogalmazás, nem idézet)

- `annual.srAsc` (12 jegy), `srMoonHouse` (12 ház), `srMoonSign` (12 jegy), `progMoonSign` (12 jegy),
  `progMoonHouse`, `srAscNatalHouse`, `srAngles`, `srNoTime` sablonok — `app/js/data/annual.js`.
- A szolár ASC urát a nyugati adattábla (modern) uralkodója adja, mert a szolártechnika modern; a
  hellenisztikus profekciónál (docs/27) ezzel szemben a hagyományos urakat használjuk.
