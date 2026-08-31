# Sorsrészek (hellenisztikus lotok, „arab pontok")

> **Forrásjelölés.** A képletek Dorian Gieseler Greenbaum lektorált tanulmányából
> (*Culture and Cosmos* 11.2, 2007) és három független sorsrész-táblából származnak,
> Chris Brennan és Deborah Houlding anyagaival egyeztetve. A vitatott pontokat
> jelöljük.

## Mi ez

A sorsrészek (görögül *klēroi*, latinul *partes*, magyarul gyakran „arab pontok")
számított pontok a képletben. Mindegyik ugyanazt a geometriát követi:

> **Aszcendens + A − B** — vagyis: megmérjük a B-től A-ig tartó ívet a zodiákus
> irányában, majd ugyanezt az ívet felmérjük az aszcendenstől.

Nem égitestek: nincs saját mozgásuk, a képlet három pontjából származnak.

## A szekta helyes meghatározása ⚠️

A sorsrészek nagy része **megfordul** nappali és éjszakai születésnél, ezért a szekta
pontos meghatározása az egész rendszer alapja.

**Helyes, házrendszertől független képlet:**

```
d = (Nap_hosszúság − Asc_hosszúság) mod 360
nappali = (d > 180)
```

Mivel a Nap ekliptikai szélessége gyakorlatilag nulla, ez **pontosan** egyenértékű
azzal, hogy „a Nap a horizont felett van".

> **Amit NE csináljunk:** a szektát ne a whole-sign házszámból állapítsuk meg.
> A jegy szerinti és a valódi horizont szerinti számítás **eltér, valahányszor a Nap
> az 1. vagy a 7. egész jegyben áll**. A fenti képlet ezt automatikusan kezeli.

**Határeset.** Az ókori források nem rendelkeznek arról, mi a teendő, ha a Nap pontosan
a horizonton áll. A bevett modern konvenció: a Nap pontosan az aszcendensen (d = 0,
napkelte) → **nappali**; pontosan a deszcendensen (d = 180, napnyugta) → **éjszakai**.
Ez konvenció, nem tekintély. Egyes gyakorlók néhány fokos „határsávot" is használnak
— erre nincs hellenisztikus forrás, ezért ha megjelenítjük, csak **figyelmeztetésként**,
ne a számítás módosításaként.

## A hét hermetikus sorsrész + Basis

A Paulus Alexandrinus-féle (*Panaretos*) készlet — ezt használja gyakorlatilag minden
kalkulátor és a mai hellenisztikus gyakorlat.

| Sorsrész | Bolygó | Nappal | Éjjel |
|---|---|---|---|
| **Fortuna** (Tychē) | Hold | `Asc + Hold − Nap` | `Asc + Nap − Hold` |
| **Szellem** (Daimōn) | Nap | `Asc + Nap − Hold` | `Asc + Hold − Nap` |
| **Erósz** (szerelem) | Vénusz | `Asc + Vénusz − Szellem` | `Asc + Szellem − Vénusz` |
| **Szükségszerűség** (Anankē) | Merkúr | `Asc + Fortuna − Merkúr` | `Asc + Merkúr − Fortuna` |
| **Bátorság** (Tolma) | Mars | `Asc + Fortuna − Mars` | `Asc + Mars − Fortuna` |
| **Győzelem** (Nikē) | Jupiter | `Asc + Jupiter − Szellem` | `Asc + Szellem − Jupiter` |
| **Nemezis** | Szaturnusz | `Asc + Fortuna − Szaturnusz` | `Asc + Szaturnusz − Fortuna` |
| **Basis** (alap) | — | a Fortuna és a Szellem közti **rövidebb ív** az Asc-tól | ugyanaz |

**Számítási sorrend a kódban:** szekta → Fortuna → Szellem → a többi. A 3–8. sorsrész
a **már szekta szerint javított** Fortunára és Szellemre hivatkozik.

Figyeljük meg: az Erósz és a Győzelem mindig a **Szellemet**, a Szükségszerűség, a
Bátorság és a Nemezis mindig a **Fortunát** használja — mindkét szektában. A szekta
csak a két tag sorrendjét cseréli fel, azt soha nem, hogy melyik pontokat használjuk.

### Ellenőrző azonosság

A Fortuna és a Szellem mindig **egymás tükörképe** az aszcendensre nézve:

```
Szellem = (2 × Asc − Fortuna) mod 360
```

Ez jó gépi teszt: ha nem teljesül, hiba van a szektakezelésben.

### Basis — robusztus képlet

```
d   = (Szellem − Fortuna) mod 360
ív  = (d <= 180) ? d : 360 − d      // mindig a ≤180°-os ív
Basis = (Asc + ív) mod 360           // mindig az 1–6. házba esik
```

> ⚠️ **Részben ellenőrizetlen.** Valens szekta szerint is megadja a Basist
> (`Asc + Szellem − Fortuna` nappal), a hagyomány viszont „a Fortuna és a Szellem
> közti rövidebb ív"-ként is. A kettő csak akkor esik egybe, ha a rövidebb ív szabálya
> elsőbbséget élvez — ezt elsődleges fordításból nem sikerült igazolni. A rövidebb ív
> a biztonságosabb választás, és a modern kalkulátorok is ezt használják. A Basis
> **kevésbé bevett**, mint a hét hermetikus lot, ezért a felületen külön jelöljük.

## A megfordulás vitája

**A megfordítás a hellenisztikus fősodor** — ezt követi Nechepso–Petosiris, Manilius,
Dorotheus, Valens, Paulus, Firmicus Maternus, Rhetorius, Hephaestio, valamint a teljes
középkori-arab hagyomány. Greenbaum szó szerint: *Ptolemaiosz a kivétel*, aki nem veszi
figyelembe a szektát.

**Aki nem fordít meg:**
- **Ptolemaiosz** (*Tetrabiblos* III) — az egyetlen jelentős ókori ellenvélemény;
- **William Lilly** (1647) Ptolemaioszt követte, és mivel az ő könyve volt az első angol
  tankönyv, **emiatt nem fordít meg a legtöbb 20. századi program és modern asztrológus**;
- **Robert Schmidt** (Project Hindsight) szerkezeti érvekkel érvelt a meg nem fordítás
  mellett — Chris Brennan kifejezetten vitatja.

**Döntés a programban:** a hellenisztikus fősodrot követjük (megfordítunk), és ezt a
felületen jelezzük, mert más programból a felhasználó eltérő Fortunát láthatott.

## Változatok az Erósznál és a Szükségszerűségnél

Létezik két versengő ókori hagyomány. A **Paulus-változatot** használjuk (ez a
gyakorlatilag univerzális), de érdemes tudni a másikról:

| Sorsrész | Paulus (alapértelmezés) | Valens-változat |
|---|---|---|
| Erósz (nappal) | `Asc + Vénusz − Szellem` | `Asc + Szellem − Fortuna` |
| Szükségszerűség (nappal) | `Asc + Fortuna − Merkúr` | `Asc + Fortuna − Szellem` |

A Bátorságra, a Győzelemre és a Nemezisre nem található hasonló változat.

## Jelentés: hellenisztikus kontra modern

**Hellenisztikus.** Valens a Fortunát **„archetipikus sorsrésznek"** nevezi, a képlet
legerősebb helyének. Jelentése: a **test, az egészség, a testi alkat, a megélhetés,
az anyagi körülmények, a vagyon, a neveltetés** — röviden az, *ami történik veled,
a szándékodtól függetlenül*. A Hold asszociációit hordozza.

A **Szellem** ezzel szemben a Napét: **elme, lélek, szándékos cselekvés, hivatás,
hírnév, rang** — *amit választasz és teszel*. Valens a hivatás és a rang kérdéseiben
a Szellemből, a test és a megélhetés kérdéseiben a Fortunából indul ki.

Fontos: a *tychē* itt **nem** a mai „szerencse" jó érzésű értelmében szerepel, hanem
erkölcsileg semleges sors-körülményként.

**Modern.** A 20. századi asztrológia — Lilly meg nem fordító képletét örökölve —
lélektanian olvassa: ahol **örömöt, könnyedséget, természetes tehetséget** találsz.
Ez újraértelmezés, nem az ókori jelentés folytatása.

## Ház és „Fortuna-házak"

- A Fortuna **kap házpozíciót**, és megvizsgálandó a **jegyurának** állása. Valens a
  Fortuna urát az aszcendens urával **egyenrangúnak** tartotta.
- A **Fortunából származtatott házak** valódi, bevett hellenisztikus technika: a Fortuna
  „második aszcendensként" működik a testi-anyagi ügyekben, és a tizenkét hely az ő
  jegyétől számolódik — **kizárólag egész jegyes (whole-sign) rendszerben**.
  - A **Fortunától számított 11. hely a „Szerzés Helye"** (Valens: „a javak és a vagyon
    adományozója").
- Placidus-csúcsokból **ne** származtassunk Fortuna-házakat: annak nincs hagyományos alapja.

## Hogyan kell ÉRTELMEZNI — és mit nem szabad kiírni ⚠️

A számítás önmagában semmit nem mond a felhasználóról. Az alábbiak a Valens
*Anthologiae* (Riley-fordítás, teljes szövegben ellenőrizve) szerinti szabályok.

### Amit NEM szabad kiírni

- **„A Fortuna a 12 házban" szakácskönyv.** A teljes Valensben, Paulusnál,
  Rhetoriusnál és Firmicusnál **nincs** házankénti Fortuna-értelmezés. A neten
  terjedő „Fortuna az 1. házban azt jelenti…" listák **modern kitalálmányok**.
  Ami valóban van: az **angularitás** (sarok / következő / lehanyatló), és néhány
  konkrét, mindig feltételes eset (12., 8., 2., 4. hely) — ezek is csak akkor,
  ha az ur vagy egy rosszindulatú bolygó is érintett.
- **A Fortuna jegy szerinti értelmezése.** A hellenisztikus források nem
  értelmezik a Fortunát jegy szerint. A jegy **egyetlen** módon számít:
  megadja az urat. Tehát nem a Fortuna jegyéről kell szöveget adni, hanem az
  **ura** állásáról.

### Amit igen (Valens, tételesen)

**1. A Fortuna ura az aszcendens urával egyenrangú** (II.4, II.17). Meg kell nézni
a jegyét, a házát, a méltóságát, a fényszögeit, és hogy sarokházban áll-e.
**Hagyományos uralkodóval** — a modern Uránusz/Neptunusz/Plútó itt értelmezhetetlen.

**2. Angularitás-fok** (II.17): sarok > következő > lehanyatló. A lehanyatló
elhelyezés a súlyos eset.

**3. A négyes mátrix** (II.2) — ez a legjobban használható passzus:

| Fortuna + ura | Fényszög | Kimenet |
|---|---|---|
| sarok- vagy következő házban | jótevő fényszög | némi jó sors és rang; hullámzással, de nem tehetetlenül |
| rosszul elhelyezve | semleges | közepes, sőt nehéz ügyek; nehezen boldogul |
| rosszul elhelyezve | rosszindulatú fényszög | a legnehezebb kimenet |
| rosszul elhelyezve | **jótevő fényszög** | **mások segítségéből** él meg — tisztes élet, de nem magától |

A negyedik sor a legérdekesebb: jótevő fényszög rosszul álló Fortunára
*függő* jó sorsot ad, nem önerőset.

**4. Együttállás és fényszög** (II.17): jótevő a Fortunán vagy fényszögben →
javak; rosszindulatú → a javak elvesztése **és testi betegség** (a Fortuna a
test sorsrésze, ezért testileg is olvasódik).

**5. A Fortunától származtatott helyek** (II.17, II.20) — **kizárólag egész jegyes**:

| Hely a Fortunától | Jelentés |
|---|---|
| 1. | „Élet" — az aszcendens megfelelője |
| 8. | a Halál helye |
| 10. | „Rang" — az MC megfelelője, hivatás és kiemelkedés |
| 11. | **a Szerzés helye** — „a javak és a vagyon adományozója" |

**6. A Szellem ura** (II.19) létrája: a Fortunán vagy a Fortunától számított 10.
helyen → kiemelkedő; saját helyén vagy sarokban → amennyire a körülmények
engedik, jó; lehanyatlóan vagy rosszindulatú fényszöggel → nehéz.

**7. Fortuna ↔ Szellem helyettesítés** (IV.4): ha a Fortuna vagy az ura rosszul
áll (lehanyatló, illetve a 2. vagy 8. helyen), akkor a Szellem veszi át a testi
jelzést is — és fordítva.

### Manilius eltérő rendszere — ne keverjük

Manilius *Astronomica* III. egy másik, tizenkét sorsrészes kört ad a Fortunától
számolva, más jelentésekkel. Ez **összeegyeztethetetlen** a Valens-féle
dodekatroposszal, és a későbbi asztrológusok nem vették át — csak a 11. hely
(Szerzés) egyezik. Nem implementáljuk.

## Ellenőrző példa (regressziós teszt)

Greenbaum kidolgozott nappali példája:

- Asc 5° Skorpió (215°), Nap 22° Rák (112°), Hold 24° Oroszlán (144°)
- `d = (112 − 215) mod 360 = 257 > 180` → **nappali**
- Fortuna = 215 + 144 − 112 = 247° = **7° Nyilas** ✓
- Szellem = 215 + 112 − 144 = 183° = **3° Mérleg** ✓

## Amit nem sikerült hitelesíteni

- Bármilyen **ókori** szabály a pontosan horizonton álló Napra, vagy fok-alapú
  „határeset" szabály. Csak modern konvenció.
- Hogy Valens szekta szerinti Basisa és a „rövidebb ív" Basis bizonyíthatóan azonos-e
  az eredeti szövegben.

## Források

- Dorian Gieseler Greenbaum, „Calculating the Lots of Fortune and Daemon in Hellenistic
  Astrology", *Culture and Cosmos* 11.2 (2007) — lektorált, elsődleges hivatkozás:
  `https://cultureandcosmos.org/pdfs/11/11_Greenbaum_Lots_of_Fortune_and_Daimon_Vol11.pdf`
- `https://astrology-x-files.com/x-files/arabic-parts.html` — teljes hétlotos tábla, Schmidt korrekcióival
- `https://www.astroak.com/en/blog/lot-of-victory-hellenistic-astrology`
- `https://astrolium.com/guides/arabic-parts`
- `https://orphicastrology.com/lots/four-birth-deities` — Paulus/Valens/Firmicus változatok
- `https://sevenstarsastrology.com/twelve-easy-lessons-for-beginners-7-the-lots/`
- `https://theastrologypodcast.com/transcripts/ep-82-transcript-qa-episode-arabic-parts-house-division-mythology/` — Brennan a megfordításról
- `https://www.ancientastrology.com/articles-/sect-in-classical-astrology` — szekta határesetek
- `https://www.cobraandcrescent.com/blog/the-lot-of-basis-the-foundations-of-life`
- `https://www.astrolearn.com/astrology-articles/partslots1/` — a Fortunától számított 11. hely
