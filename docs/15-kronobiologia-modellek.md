# Kronobiológiai modellek — implementálható matematika

> **A dokumentum célja:** a [03-kronobiologia.md](03-kronobiologia.md) áttekintő anyag **matematikai kiegészítése**. Itt nem fogalmakat magyarázunk, hanem **konkrét képleteket, publikált paraméterértékeket és mértékegységeket** adunk meg, hogy ezekből közvetlenül JavaScript kód írható legyen.
>
> **Olvasási konvenció — ez végig érvényes:**
> - 📗 **PUBLIKÁLT** — a képlet és a szám úgy szerepel egy hivatkozott forrásban.
> - 🔧 **EGYSZERŰSÍTÉS** — a saját, app-célra hozott döntésünk; nem a szakirodalom állítása.
> - ⚠️ **BIZONYTALAN / VITATOTT** — a szakirodalom nem egységes, vagy az evidencia gyenge.
>
> **Mértékegység-konvenció:** minden idő **órában** (h), a napszak `t ∈ [0, 24)` decimális óra (pl. 07:30 → `7.5`). A körfrekvencia `ω = 2π/24 ≈ 0.2618 rad/h`.

---

## Tartalom

1. [Két-folyamat modell (Borbély 1982; Daan–Beersma–Borbély 1984)](#1-két-folyamat-modell)
2. [Cirkadián oszcillátor-modellek (Kronauer–Jewett–Forger és utódaik)](#2-cirkadián-oszcillátor-modellek)
3. [A cirkadián fázis markerei és egymáshoz való viszonyuk](#3-a-cirkadián-fázis-markerei)
4. [A napi teljesítménygörbe empirikus alakja](#4-a-napi-teljesítménygörbe-empirikus-alakja)
5. [Ultradián ritmusok](#5-ultradián-ritmusok)
6. [Implementációs összefoglaló — JavaScript](#6-implementációs-összefoglaló)
7. [Források](#7-források)

---

## 1. Két-folyamat modell

### 1.1 A modell váza

A két-folyamat modellt **Borbély (1982)** vezette be, a kvantitatív, küszöbökkel dolgozó változatot **Daan, Beersma és Borbély (1984)** publikálta. Két, egymástól **független** folyamat szorzata/összege adja a viselkedést:

| Folyamat | Mit ír le | Fő tulajdonság |
|---|---|---|
| **S** (homeosztatikus) | alvásnyomás | ébrenlét alatt **nő**, alvás alatt **csökken**; exponenciális, telítődő |
| **C** (cirkadián) | belső óra által vezérelt alvási hajlam | ~24 órás, alvástól **független** oszcilláció (izolált SCN is hajtja) |

A klasszikus 1984-es megfogalmazásban **C nem közvetlenül adódik hozzá S-hez**, hanem **két küszöböt modulál**: egy felsőt (`H⁺`) és egy alsót (`H⁻`). Amikor S eléri a felső küszöböt → **elalvás**; amikor eléri az alsót → **ébredés**. Ez egy relaxációs oszcillátor („somnostat").

> 🔧 **Fontos megkülönböztetés az app számára.** A modellnek két, gyakran összekevert felhasználása van:
> 1. **Alvásidőzítés-előrejelzés** (mikor alszik el / ébred fel az ember) — ehhez kellenek a küszöbök.
> 2. **Éberséggörbe-előrejelzés** (mennyire éber adott órában) — ehhez **nem** kellenek a küszöbök, mert az alvásidőket a felhasználó megadja. Az app a 2. esetet használja, ami lényegesen egyszerűbb.

### 1.2 Process S — a homeosztatikus alvásnyomás 📗

Az empirikus alap: alvásmegvonásos kísérletekben az EEG **lassú hullámú aktivitása (SWA, 0,75–4,5 Hz)** alvás alatt **exponenciálisan csökken**, és az ébrenlét hosszával **telítődően nő**. S ennek a mennyiségnek a modellezett megfelelője.

**Ébrenlét alatt (S emelkedik, felső aszimptota felé):**

```
S(t) = μ − (μ − S₀) · exp( −(t − t₀) / τ_r )
```

**Alvás alatt (S csökken, 0 felé):**

```
S(t) = S₀ · exp( −(t − t₀) / τ_d )
```

ahol
- `S₀` — S értéke a `t₀` szakaszkezdő időpontban (dimenziótlan),
- `μ` — a **felső aszimptota**: az az érték, amit S elérne, ha soha nem alszunk el; a standard skálázásban **μ = 1** (dimenziótlan),
- a **lower aszimptota 0** (a normalizált skálán),
- `τ_r` — az ébrenléti **emelkedés** időállandója,
- `τ_d` — az alvás alatti **lecsengés** időállandója.

**Publikált standard paraméterértékek** (Daan–Beersma–Borbély 1984, ahogy Skeldon, Dijk & Derks 2014 explicit egyenletekkel újraközli):

| Paraméter | Érték | Mértékegység | Megjegyzés |
|---|---|---|---|
| `τ_r` (ébrenléti emelkedés, `χ_w`) | **18,2** | h | a felhasználói kérdésben szereplő érték **helyes** |
| `τ_d` (alvás alatti lecsengés, `χ_s`) | **4,2** | h | szintén **helyes** |
| `μ` (felső aszimptota) | **1,0** | — | normalizált skála |
| alsó aszimptota | **0** | — | |

⚠️ **Ahol a szakirodalom bizonytalan.** A `τ_d ≈ 4,2 h` érték az S *modell*-változóra vonatkozik. A közvetlenül mért SWA-lecsengés időállandója **rövidebb**: Borbély & Achermann 2022-es visszatekintése szerint az első 30 perc NREM-re átlagolt, 0,25–1 Hz-es EEG-aktivitás időállandója **kb. 4,6 h** — vagyis a modellparaméter és a nyers EEG-marker nem ugyanaz a szám, és a szakirodalomban mindkettő előfordul. Az egyéni szórás is nagy; a τ-értékeket a modern személyre szabott modellek illesztik, nem fixálják.

**Diszkrét idejű (kód-barát) alak.** Egy `Δ` órás lépésre a fenti két képlet a következő rekurzió:

```
ébrenlét:  S ← μ + (S − μ) · exp(−Δ / τ_r)        // 1-hez tart
alvás:     S ← S · exp(−Δ / τ_d)                  // 0-hoz tart
```

Ez **numerikusan stabil** és tetszőleges lépésközzel pontos (mert az analitikus megoldást lépteti, nem Euler-közelítést).

**Fizikai értelmezés a nagyságrendekhez:** 16 óra folyamatos ébrenlét után `S = 1 − (1−0)·e^(−16/18.2) ≈ 0,586`. Egy 8 órás alvás ebből `0,586 · e^(−8/4.2) ≈ 0,087`-re visz le — vagyis a 8 óra alvás **elég** a nappal felépült nyomás lebontására, ~15%-os maradékkal. Ez a modell egyik szép, önként adódó eredménye.

### 1.3 Process C — a cirkadián küszöbmoduláció 📗

A klasszikus 1984-es változatban `C(t)` egy **ferdített (skewed) szinusz**, amit felharmonikusokkal állítanak elő. A leggyakrabban idézett alak:

```
C(t) = a₁·sin(ω(t−α)) + a₂·sin(2ω(t−α)) + a₃·sin(3ω(t−α))
     + a₄·sin(4ω(t−α)) + a₅·sin(5ω(t−α))

ω = 2π / 24 ≈ 0,261799  rad/h
```

| Együttható | Érték |
|---|---|
| `a₁` (24 h alapharmonikus) | **0,97** |
| `a₂` (12 h) | **0,22** |
| `a₃` (8 h) | **0,07** ⚠️ *(lásd alább)* |
| `a₄` (6 h) | **0,03** |
| `a₅` (4,8 h) | **0,001** |

`α` — **fáziseltolás órában**; ez az a szabad paraméter, amivel a görbét a felhasználó kronotípusához igazítjuk.

⚠️ **Ellentmondás a forrásokban a 3. harmonikusnál.** Skeldon, Dijk & Derks (2014, arXiv:1311.1734) a harmadik együtthatót **0,007**-nek nyomtatja, míg a legtöbb egyéb reprodukció (pl. a Michigan REU-jegyzet és a szélesebb körben terjedő változat) **0,07**-et ír. A kettő nagyságrendben tér el, de a görbe alakjára gyakorolt hatás **kicsi** (a 3. harmonikus amplitúdója így is <10%-a az alapharmonikusnak). **Ajánlás:** használd a `0,07`-et (ez a gyakoribb reprodukció), és tudd, hogy ez a szám vitatott — vizuálisan nem fogsz különbséget látni.

🔧 **Miért felharmonikusok?** A tiszta szinusz szimmetrikus; a valódi cirkadián alvási-hajlam görbe **ferde**: lassabban emelkedik és gyorsabban esik (vagy fordítva, jelkonvenciótól függően). A felharmonikusok pontosan ezt a ferdeséget állítják elő. Ha az appban vizuálisan elég egy sima görbe, `C(t) = sin(ω(t−α))` is használható — Skeldon et al. is ezt használják az illusztrációs ábráikon.

### 1.4 A küszöbök és az alvás/ébrenlét kapcsolása 📗

```
H⁺(t) = H₀⁺ + a · C(t)        // felső küszöb → elalvás, ha S felülről eléri
H⁻(t) = H₀⁻ + a · C(t)        // alsó küszöb  → ébredés, ha S alulról eléri
```

A két küszöb **párhuzamosan mozog** (ugyanaz az `a·C(t)` moduláció), a köztük lévő `H₀⁺ − H₀⁻` távolság **hiszterézis** — ez akadályozza meg, hogy a rendszer másodpercenként oda-vissza kapcsoljon.

**Publikált standard paraméterek** (Skeldon, Dijk & Derks 2014, 1. ábra; „Parameters as in [Daan et al. 1984], Figure 3"):

| Paraméter | Érték | Megjegyzés |
|---|---|---|
| `H₀⁻` (alsó küszöb átlaga) | **0,17** | |
| `H₀⁺` (felső küszöb átlaga) | **0,60** | a cikkben 0,35 / 0,60 / 0,85 értékekkel is szimulálnak; a 0,60 ad realisztikus, egy fázisú (monofázisos) alvást |
| `a` (cirkadián amplitúdó) | **0,10** | |
| `τ_d` (`χ_s`) | 4,2 h | |
| `τ_r` (`χ_w`) | 18,2 h | |
| `μ` | 1,0 | |

**Az algoritmus (eseményvezérelt szimuláció):**

```
állapot = ÉBREN
minden Δ lépésben:
    ha állapot == ÉBREN:
        S ← μ + (S − μ)·exp(−Δ/τ_r)
        ha S ≥ H₀⁺ + a·C(t):  állapot ← ALVÁS
    különben:
        S ← S·exp(−Δ/τ_d)
        ha S ≤ H₀⁻ + a·C(t):  állapot ← ÉBREN
```

**Amit ez a modell magától „megjósol"** (a Daan et al. 1984 fő eredményei): (1) belső deszinkronizáció időjelek nélkül, (2) alvásfragmentáció tartós ágynyugalomban, (3) az alváshossz **cirkadián fázisfüggése** — vagyis hogy ugyanannyi felhalmozott alvásnyomás mellett is más hosszú alvást kapsz attól függően, mikor fekszel le. Ez utóbbi a modell máig legerősebb sikere.

### 1.5 Éberség és teljesítmény: az additív interakció 📗

Az alvásidőzítéstől külön kérdés, hogy **napközben mennyire vagyunk éberek**. **Achermann & Borbély (1994, *Biological Cybernetics* 71:115–121)** mutatta meg, hogy a szubjektív éberség jól szimulálható a homeosztatikus és a cirkadián folyamat **additív interakciójával** — vagyis egyszerű összegzéssel:

```
Alertness(t) ∝ C(t) − S(t)
```

(A jel attól függ, hogyan definiálod C-t: ha C az *alvási hajlamot* írja le, akkor `−C(t) − S(t)`; ha az *éberségi hajtást*, akkor `C(t) − S(t)`. **A dokumentum végig az „éberségi hajtás" konvenciót használja:** C maximuma ≈ a cirkadián éberségi csúcs.)

A cikk kulcsmegállapítása módszertanilag fontos: *„a két külön folyamat feltételezése és az additív interakcióból származó egyetlen folyamat feltételezése matematikailag ekvivalens, de fogalmilag különböző."* Az empirikus és a szimulált adatok egyezése alátámasztotta a modell alapfeltevését.

⚠️ **Ahol az additivitás megbukik.** A **Dijk & Czeisler** és **Wyatt et al.** forced-desynchrony vizsgálatok kimutatták, hogy a homeosztatikus és a cirkadián komponens **nem tisztán additív**: a kettő **kölcsönhat**. Elhúzódó ébrenlétnél a cirkadián mélypont hatása **aránytalanul** felnagyítódik (multiplikatív jellegű interakció). Erről részletesen a [4. fejezetben](#4-a-napi-teljesítménygörbe-empirikus-alakja).

**Skálázás valós mérőszámokra.** A `C − S` egy dimenziótlan belső változó; ahhoz, hogy KSS-értéket vagy PVT-lapszusszámot adjon, **lineáris (KSS) vagy exponenciális (PVT) transzferfüggvény** kell. Ezt a gyakorlatban használt modellek explicit megadják — lásd 1.6 és 1.7.

### 1.6 Három-folyamat modell (Åkerstedt–Folkard, TPM) 📗

Ez a két-folyamat modell **gyakorlatban használt** kiterjesztése: hozzáad egy harmadik folyamatot, a **W (sleep inertia, alvási tehetetlenség)** komponenst, és — ami az app számára a legfontosabb — **közvetlenül KSS-értéket ad ki**.

Az alábbi egyenletek és számok az **Ingre et al. (2014, PLOS ONE 9(10):e108679)** validációs cikkből származnak, amely a TPM teljes specifikációját közli (nyílt hozzáférés).

**Közös konstansok** (a modell belső, 1–21-es „alertness" skáláján):

| Konstans | Jelölés | Érték |
|---|---|---|
| felső aszimptota | `ha` | **14,3** |
| alsó aszimptota | `la` | **2,4** |

**(1.1) Process S — ébrenlét alatti éberségcsökkenés:**
```
S = la + (sw − la) · exp(d · taw)          d = −0,0353
```
`sw` = S értéke ébredéskor; `taw` = ébrenlétben töltött idő (h).

**(1.2) Process S′ — alvás alatti regeneráció (eredeti, 1990-es változat):**
```
S′ = ha − (ha − ss) · exp(g · tas)
g = log((ha − 14,0)/(ha − 7,96)) / 8 ≈ −0,3813
```
`ss` = S értéke elalváskor; `tas` = alvásban töltött idő (h).

**(1.3)–(1.5) A „fék" (brake) módosítás** — a regeneráció kettéosztása magas és alacsony nyomású szakaszra, `bl = 12,2` töréspontnál:
```
S′₁ = ss + tas · g · (bl − ha)                     // amíg S′ < bl
S′₂ = ha − (ha − bl) · exp(g · (tas − bt))         // utána
bt  = (bl − ss) / (g · (bl − ha))                  // a töréspont ideje
```

**(1.6) Process W — alvási tehetetlenség:**
```
W = Wc · exp(Wd · taw)        Wc = −5,72 ,  Wd = −1,51
```
Ébredéskor (`taw = 0`) a levonás `−5,72` egység, ami **~1,5 órás időállandóval** (1/1,51 ≈ 0,66 h) cseng le. 30 perc után már csak `−5,72·e^(−0,755) ≈ −2,7`, 1 óra után `≈ −1,26`.

**(1.7) Process C — cirkadián, 24 h periódus:**
```
C = Cm + Ca · cos( (2π/24) · (tod − p) )
Cm = 0 (mesor) ,  Ca = 2,5 (amplitúdó) ,  p = 16,8 h (fázis/akrofázis)
```
`tod` = napszak órában. **A `p = 16,8` azt jelenti, hogy a cirkadián éberségi csúcs alapértelmezésben 16:48-kor van** — ez az egyik legkonkrétabb publikált szám a napi teljesítménygörbe csúcsáról.

**(1.8) Process U — ultradián, 12 h periódus:**
```
U = Um + Ua · cos( (2π/12) · (tod − p − 3) )
Um = −0,5 (mesor) ,  Ua = 0,5 (amplitúdó)
```
⚠️ Figyeld meg, hogy a TPM az **ultradián komponenst is 12 órás felharmonikusként** kezeli, `p + 3` fázissal — ez adja a **kora délutáni holtpontot**. Vagyis a modell szerint a „post-lunch dip" a **cirkadián/12 órás rendszer része**, nem az ebéd következménye. (Erről lásd 4.4.)

**(1.9) Transzfer a KSS-skálára:**
```
KSS = a + b · (S + C + U + W)
alapértelmezés:  a = 10,6 ,  b = −0,6
Ingre et al. (2014) validált (revideált) értékei:  a = 9,68 ,  b = −0,46
```
A KSS (Karolinska Sleepiness Scale) 1–9-es skála, ahol **magasabb = álmosabb**. Ezért `b` negatív: a magasabb belső éberség alacsonyabb KSS-t jelent.

**(1.10) Process A — időzóna-akklimatizáció** (jetlag-modul):
```
Aₜ = Aₜ₋₁ + (1 − (1 − daily)^(Tₜ − Tₜ₋₁)) · (TZₜ − Aₜ₋₁)
```
`T` = idő napokban, `TZ` = a helyi és a bázisidő különbsége, `daily` = napi átállási arány (alapértelmezés **50%/nap**). Az akklimatizált előrejelzést úgy kapod, hogy `A`-t hozzáadod a `C` és `U` folyamatok `p` fázisparaméteréhez. 🔧 Ez az app „jetlag" funkciójának kész receptje.

**Alvásgenerátor (ha nincs megadott alvásidő):** a TPM alapértelmezett küszöbei — elalvás, ha `S + C + U < 8,38`; ébredés, ha `S + C + U > 11,38`. További szabályok a „flip-flop" elkerülésére: nincs alvás műszak ±1 órán belül, nincs alvás az ébredés utáni 2 órában, és nincs ébredés az alvás első órájában.

📗 **Alkalmazási státusz:** a TPM-et haditengerészeti, légitársasági és vasúti munkarend-értékelésre használják; a **Boeing Alertness Model (BAM)** ebből származik.

### 1.7 SAFTE / FAST modell (Hursh, 2003) 📗

A SAFTE (**S**leep, **A**ctivity, **F**atigue and **T**ask **E**ffectiveness) az USA-ban a legelterjedtebb üzemeltetési fáradtságmodell (a FAST a hozzá tartozó felhasználói szoftver). Szabadalmaztatott, de az **Institute for Behavioral Resources** kiadott egy nyílt forrású R-implementációt (`SAFTEr`), amit Hurshsel együttműködve, közvetlenül a szabadalmi egyenletekből építettek — **így a teljes konstanskészlet nyilvános**.

**Alapmetafora: az alvástartály (reservoir).** Egy pihent ember véges kognitív kapacitással rendelkezik; ez alvás alatt töltődik, ébrenlét alatt ürül.

**A 17 konstans** (a `SAFTEr` R-forrásból, `SAFTE_model.R`):

| Konstans | Érték | Szerep |
|---|---|---|
| `Reservoir_Capacity` (Rc) | **2880** | tartálykapacitás egységben (= 48 h × 60) |
| `Normalization_Constant` | **96,7** | a 100%-os hatékonysághoz normalizál |
| `alpha_limit` | **3,4** | max. alvásintenzitás (egység/perc) |
| `relative_amp_swc` | **0,00312** | az alvásadósság-tag relatív amplitúdója |
| `mesor_sleep_propensity_rhythm` | **0** | alvási hajlam ritmusának mesorja |
| `amplitude_sleep_propensity_rhythm` | **0,55** | alvási hajlam ritmusának amplitúdója |
| `amplitude_sleep_inertia` | **0,08** | alvási tehetetlenség amplitúdója |
| `amp_12hr_cycle` | **0,5** | a 12 órás felharmonikus relatív amplitúdója |
| `relative_phase_12hr_cycle` | **3** | a 12 órás komponens fáziseltolása (h) |
| `kappa_var` (κ) | **0,5** | ébrenléti ürülési ütem: **0,5 egység/perc** |
| `Reservoir_Parameter1` | **0,22** | tartálykapacitás-növekedés alvás alatt |
| `Reservoir_Parameter2` | **0,5** | |
| `Reservoir_Parameter3` | **0,0015** | kapacitás-visszaállás |
| `amp1` | **7,8** | cirkadián amplitúdó alapérték |
| `amp2` | **5** | cirkadián amplitúdó alvásadósság-függő része |
| `max_sleep_inertia_perct` | **5** | |
| `Epoch_Length` | 1 | perc (epoch-hossz) |

**Kulcsegyenletek** (közvetlenül az R-forrásból, magyarra fordított jelöléssel):

**Akrofázis a lefekvési időből:**
```
akrofázis = (lefekvés_óra − 5 < 0) ? lefekvés_óra + 19 : lefekvés_óra − 5
```
🔧 Vagyis a SAFTE **a cirkadián csúcsot a lefekvés előtt 5 órával** teszi. 23:00-s lefekvésnél ez `18:00` — jól egyezik a TPM `p = 16,8` értékével (a kettő ~1 órán belül van).

**Cirkadián komponens (24 h + 12 h):**
```
c24_12(t) = cos( 2π·(t − akrofázis)/24 ) + 0,5 · cos( 4π·(t − akrofázis − 3)/24 )
```

**Alvási hajlam:**
```
sleep_propensity = 0 − 0,55 · c24_12(t)
```

**Alvásadósság és alvásintenzitás:**
```
sleep_debt(i)      = 0,00312 · (Rc_adjust(i−1) − reservoir(i−1))
sleep_intensity(i) = sleep_debt(i) + sleep_propensity(i)
```

**A tartály ürülése/töltése (percenkénti epoch):**
```
p(i) = alszik ? 0 : 0,5 · Δ                        // ürülés ébrenlét alatt
α(i) = alszik ? sleep_intensity(i) : 0
s(i) = min(α(i), 3,4) · Δ                          // töltés alvás alatt, felül vágva
reservoir(i) = reservoir(i−1) + s(i) − p(i)        // 0-ra alulról vágva
```

**Változó cirkadián amplitúdó** (ez a SAFTE egyik sajátossága: **alváshiányban a cirkadián kilengés nagyobb**):
```
Variable_C_Amp = 5 · (Rc − reservoir(i−1))/Rc + 7,8
func_c         = Variable_C_Amp · c24_12(t)
```

**Alvási tehetetlenség:**
```
sleep_inertia = −( 5 ^ ( −Min_Awake · (1/sleep_intensity) · 0,08 ) )
```
`Min_Awake` = ébredés óta eltelt percek; **240 perc (4 h) fölött a tag nullázódik**. 🔧 Vagyis a SAFTE szerint az alvási tehetetlenség hatóideje **legfeljebb 4 óra** — ez lényegesen hosszabb, mint a TPM ~1,5 órás időállandója. ⚠️ Ez a két modell között valós nézetkülönbség.

**A végső kimenet — Effectiveness (%):**
```
Effectiveness = 100 · ( 100·(reservoir / 2880) + func_c + sleep_inertia ) / 96,7
```

📗 A SAFTE kimenete **teljesítmény-hatékonyság százalékban**, ahol a 100% a teljesen kipihent alapállapot. A modell PVT-teljesítményre van kalibrálva (ellentétben a TPM-mel, ami szubjektív KSS-t jósol) — **a Mallis et al. (2004) összehasonlítás szerint a SAFTE az egyetlen a hét vizsgált modell közül, ami teljesítményt és nem szubjektív éberséget ad ki elsődleges outputként.**

### 1.8 A két-folyamat modell korlátai ⚠️

Amit érdemes tudni, mielőtt túl komolyan vennénk a kimenetet:

- **A modell egy fenomenológiai illesztés, nem mechanizmus.** S-nek nincs azonosított molekuláris megfelelője (az adenozin a legerősebb jelölt, de nem bizonyított azonosság).
- **Az additivitás közelítés** (lásd 1.5 és 4.1) — hosszú ébrenlétnél megbukik.
- **Nagy egyéni szórás.** A τ-értékek, az amplitúdók és a küszöbök **trait-szerű, stabil egyéni jellemzők**, amelyek 2–3-szoros különbségeket mutathatnak emberek között. Egy populációs átlagparaméter-készlet **egy konkrét emberre nézve durva közelítés**.
- **Alvásminőség nincs benne.** A modell csak alvás-hosszal és -időzítéssel dolgozik; a fragmentált, rossz minőségű alvást ugyanolyan regeneratívnak veszi, mint a jót.
- **A 2016-os „reappraisal" és a 2025-ös npj-vitacikkek** rámutatnak, hogy a modell máig sok humán adattal ellentmondásban áll; aktívan vitatott terület. A 2025-ös *npj Biological Timing and Sleep* vitacikk konkrétan a következőket sorolja fel mint a modell által **nem** magyarázott jelenségeket:
  - a **délutáni szunyókálási zóna** (afternoon napping zone, ANZ) — az emberek délután hajlamosak elaludni annak ellenére, hogy S még emelkedik;
  - az **esti ébrenlét-fenntartó zóna** (wake maintenance zone, WMZ) — kora este *csökken* az álmosság, hosszú ébrenlét után is (lásd 4.5);
  - a **küszöb-jelleg empirikus igazolatlansága**: „évtizedek kutatása után is kevés előrelépés történt a modellben leírt interakció küszöb-jellegének igazolásában";
  - a **REM-alvás** teljes hiánya a modellből;
  - **erős alvásmegvonásnál a cirkadián hatás elmaszkolódik** — vagyis a modell nem általánosítható minden feltételre.

---
