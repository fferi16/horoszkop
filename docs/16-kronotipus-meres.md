# Kronotípus-mérés — kérdőívek, pontozás, normák, implementáció

> **A dokumentum célja:** a [15-kronobiologia-modellek.md](15-kronobiologia-modellek.md) folytatása. Ott a *belső óra matematikáját* írtuk le; itt azt, hogy **hogyan mérjük meg egy konkrét felhasználó kronotípusát néhány kérdésből**, és hogyan alakítjuk a válaszokat számmá, kategóriává, majd becsült cirkadián fázissá (DLMO).
>
> **Olvasási konvenció — ez végig érvényes:**
> - 📗 **PUBLIKÁLT** — a kérdés, képlet vagy szám így szerepel egy hivatkozott forrásban.
> - 🔧 **EGYSZERŰSÍTÉS** — saját, app-célra hozott döntés; nem a szakirodalom állítása.
> - ⚠️ **BIZONYTALAN / VITATOTT** — a szakirodalom nem egységes, vagy az evidencia gyenge.
> - 🇭🇺 **SAJÁT MAGYAR MEGFOGALMAZÁS** — nem hivatalos, nem validált fordítás (lásd [8. fejezet](#8-licencek-és-szerzői-jog)).
>
> **Mértékegység-konvenció:** minden időpont **decimális óra**, `t ∈ [0, 24)` (07:30 → `7.5`). Az éjfél utáni időpontok a *körkörös* kezelés miatt gyakran 24 fölé csúsznak számítás közben (pl. 01:30 elalvás → `25.5`), a végén `mod 24`-gyel visszavezetjük. Időtartamok szintén órában.

---

## Tartalom

1. [MEQ — Horne–Östberg (1976)](#1-meq--hornedostberg-1976)
2. [rMEQ — a rövidített 5 tételes változat (Adan–Almirall, 1991)](#2-rmeq--a-rövidített-5-tételes-változat)
3. [MCTQ — Munich ChronoType Questionnaire (Roenneberg)](#3-mctq--munich-chronotype-questionnaire)
4. [Normák és eloszlások — életkor, nem, populáció](#4-normák-és-eloszlások)
5. [DLMO becslése kérdőívből](#5-dlmo-becslése-kérdőívből)
6. [Genetika röviden](#6-genetika-röviden)
7. [Implementációs összefoglaló — JavaScript](#7-implementációs-összefoglaló--javascript)
8. [Licencek és szerzői jog](#8-licencek-és-szerzői-jog)
9. [Források](#9-források)

---

## 0. Melyiket használjuk? — döntési összefoglaló 🔧

| Cél | Ajánlott eszköz | Kérdésszám | Kimenet |
|---|---|---|---|
| Gyors kronotípus-besorolás appban | **rMEQ** | 5 | 4–25 pont, 3 kategória |
| Biológiai fázis becslése (DLMO, fényterápia időzítése) | **MCTQ / µMCTQ** | 6–17 | MSF<sub>sc</sub> órában |
| Szociális jetlag, alváshiány | **MCTQ** | 6–17 | SJL, SD<sub>week</sub> órában |
| „Reggeli/esti típus" preferencia-profil, teljes | **MEQ** | 19 | 16–86 pont, 5 kategória |

> 🔧 **Az app javasolt alapkonfigurációja:** **rMEQ (5 kérdés) + µMCTQ-mag (6 kérdés) = 11 kérdés.** Az rMEQ adja a felhasználóbarát „bagoly/pacsirta" címkét, az MCTQ-blokk adja a **számolható órát** (MSF<sub>sc</sub>), amiből a [15. dokumentum](15-kronobiologia-modellek.md) fázismodellje már közvetlenül működik. A kettő nem redundáns: az MEQ **preferenciát** mér, az MCTQ **tényleges viselkedést**; a köztük lévő korreláció csak |r| ≈ 0,6–0,7 (📗 Roenneberg et al. 2007), tehát ~55–60% varianciát *nem* magyaráznak meg egymásból.

---

## 1. MEQ — Horne–Östberg (1976)

### 1.1 Mi ez, és mit mér

📗 **Horne JA & Östberg O (1976).** *A self-assessment questionnaire to determine morningness-eveningness in human circadian rhythms.* International Journal of Chronobiology **4**(2): 97–110.

- **19 tétel**, önkitöltős.
- Eredeti validáció: 150 fő, ebből **48 főnél orális testhőmérséklet-mérés** — a „határozottan reggeli" típusok testhőmérséklet-maximuma átlagosan kb. **1 órával korábban** volt, mint az „határozottan estieké". Ez a mai napig a MEQ egyetlen eredeti fiziológiai horgonya.
- Pontszám-tartomány: **16–86**. Magasabb pont = reggelibb.
- A MEQ **preferenciát/szubjektív érzetet** mér („mikor teljesítenél a legjobban"), nem tényleges alvásidőket. Ez a legfontosabb elvi különbség az MCTQ-hoz képest.

### 1.2 A leggyakrabban használt változat: MEQ-SA

Az eredeti kérdőívben néhány tétel **folytonos grafikus skála** volt (a válaszadó egy vonalra tett jelet). Ez appban használhatatlan. A gyakorlatban terjedt el a **MEQ-SA (Self-Assessment Version)**:

📗 **Terman M, Rifkin JB, Jacobs J, White TM (2001).** *Morningness-Eveningness Questionnaire, Self-Assessment Version (MEQ-SA).* New York State Psychiatric Institute. (Elérhető: [cet.org](https://cet.org/wp-content/uploads/2019/12/MEQ-SA-2019.pdf))

A MEQ-SA:
- a grafikus skálákat **diszkrét válaszopciókra** cserélte,
- néhány kérdést amerikai angolra fogalmazott át,
- **a pontozási logikát változatlanul hagyta** (egy kivétellel, lásd 1.4).

Az alábbi táblázatokban a MEQ-SA szerkezetét adjuk meg.

### 1.3 A 19 tétel — tartalom, válaszok, pontok 🇭🇺

> ⚠️ **Szerzői jogi megjegyzés.** A tételek szövege szerzői jogi védelem alatt áll (eredetileg Gordon & Breach, 1976; a MEQ-SA a New York State Psychiatric Institute munkája). Az alábbiak **nem szó szerinti fordítások**, hanem a tételek tartalmának saját magyar megfogalmazásai, kifejezetten azért, hogy az implementáció pontos legyen. **Éles, nyilvános appban a hivatalos engedélyt / validált magyar változatot be kell szerezni** — lásd [8. fejezet](#8-licencek-és-szerzői-jog). A **válaszkategóriák időhatárai és a pontszámok** viszont tények, nem védett szöveg: ezek pontosan a publikált értékek 📗.

#### Óraskálás tételek (5 fokozat)

**1. tétel — Szabadon választott ébredési idő**
*„Körülbelül hánykor kelnél fel, ha teljesen szabadon tervezhetnéd a napodat?"* 🇭🇺

| Válasz (időintervallum) | Pont |
|---|---|
| 05:00–06:30 | **5** |
| 06:30–07:45 | **4** |
| 07:45–09:45 | **3** |
| 09:45–11:00 | **2** |
| 11:00–12:00 | **1** |

**2. tétel — Szabadon választott lefekvési idő**
*„Körülbelül hánykor feküdnél le, ha teljesen szabadon tervezhetnéd az estédet?"* 🇭🇺

| Válasz | Pont |
|---|---|
| 20:00–21:00 | **5** |
| 21:00–22:15 | **4** |
| 22:15–00:30 | **3** |
| 00:30–01:45 | **2** |
| 01:45–03:00 | **1** |

**10. tétel — Mikor jelentkezik az esti fáradtság**
*„Este körülbelül hánykor érzed, hogy elfáradtál és aludni szeretnél?"* 🇭🇺

| Válasz | Pont |
|---|---|
| 20:00–21:00 | **5** |
| 21:00–22:15 | **4** |
| 22:15–00:45 | **3** |
| 00:45–02:00 | **2** |
| 02:00–03:00 | **1** |

> 🔧 Figyeld meg: a 2. és a 10. tétel időhatárai **nem azonosak** (00:30 vs 00:45, 01:45 vs 02:00). Ez nem elírás, ez a publikált forma. Implementációban ne vond össze őket.

**17. tétel — Szabadon választott műszakkezdés (5 órás munkanap)**
*„Ha szabadon választhatnád a munkaidődet, és 5 órát dolgoznál (szünetekkel együtt) egy érdekes, teljesítményalapú munkában — mikor kezdenél?"* 🇭🇺

| Válasz (a 5 órás blokk kezdete) | Pont |
|---|---|
| 04:00–08:00 | **5** |
| 08:00–09:00 | **4** |
| 09:00–14:00 | **3** |
| 14:00–17:00 | **2** |
| 17:00–04:00 | **1** |

**18. tétel — Mikor érzed magad a legjobban**
*„A nap mely szakában érzed magad a legjobb formában?"* 🇭🇺

| Válasz | Pont |
|---|---|
| 05:00–08:00 | **5** |
| 08:00–10:00 | **4** |
| 10:00–17:00 | **3** |
| 17:00–22:00 | **2** |
| 22:00–05:00 | **1** |

#### 4 fokozatú tételek

| # | Tétel tartalma 🇭🇺 | Válaszok → pont |
|---|---|---|
| **3** | Mennyire függesz ébresztőórától, ha adott időben kell kelned? | egyáltalán nem **4** / kissé **3** / eléggé **2** / nagyon **1** |
| **4** | Mennyire könnyű reggel felkelned (ha nem ver fel valami váratlanul)? | nagyon nehéz **1** / eléggé nehéz **2** / eléggé könnyű **3** / nagyon könnyű **4** |
| **5** | Mennyire vagy éber az ébredés utáni első fél órában? | egyáltalán nem **1** / kissé **2** / eléggé **3** / nagyon **4** |
| **6** | Mennyire vagy éhes az ébredés utáni első fél órában? | egyáltalán nem **1** / kissé **2** / eléggé **3** / nagyon **4** |
| **7** | Hogy érzed magad az ébredés utáni első fél órában? | nagyon fáradtan **1** / eléggé fáradtan **2** / eléggé frissen **3** / nagyon frissen **4** |
| **8** | Ha másnap semmi dolgod nem lenne, mennyivel feküdnél le később a szokásosnál? | ritkán/soha nem később **4** / kevesebb mint 1 órával **3** / 1–2 órával **2** / több mint 2 órával **1** |
| **9** | Egy barátod heti kétszer 1 óra edzést javasol **07:00–08:00** között. Csak a belső órádra figyelve hogyan teljesítenél? | jó formában lennék **4** / elfogadható formában **3** / nehéz lenne **2** / nagyon nehéz lenne **1** |
| **13** | Több órával később feküdtél le, de reggel nem kell felkelned. Mi történik? | a szokásos időben ébredek és **nem** alszom vissza **4** / a szokásos időben ébredek, aztán szundikálok **3** / a szokásos időben ébredek, de visszaalszom **2** / a szokásosnál később ébredek **1** |
| **14** | Egy éjjel **04:00–06:00** között ébren kell maradnod (őrség), másnap semmi dolgod. Mit választanál? | csak az őrség után feküdnék le **1** / előtte szunyókálnék, utána aludnék **2** / előtte rendesen aludnék, utána szunyókálnék **3** / csak az őrség előtt aludnék **4** |
| **15** | 2 óra **nehéz fizikai munka** vár rád, szabadon tervezhetsz. Mikor? | 08:00–10:00 **4** / 11:00–13:00 **3** / 15:00–17:00 **2** / 19:00–21:00 **1** |
| **16** | Egy barátod heti kétszer 1 óra edzést javasol **22:00–23:00** között. Hogyan teljesítenél? | jó formában lennék **1** / elfogadható formában **2** / nehéz lenne **3** / nagyon nehéz lenne **4** |

#### Eltérő pontsúlyú tételek — ⚠️ ezekre külön figyelj

| # | Tétel tartalma 🇭🇺 | Válaszok → pont |
|---|---|---|
| **11** | Csúcsteljesítményt szeretnél egy 2 órás, szellemileg megterhelő vizsgán. Melyik időpontot választanád? | 08:00–10:00 **6** / 11:00–13:00 **4** / 15:00–17:00 **2** / 19:00–21:00 **0** |
| **12** | Ha **23:00**-kor ágyba kerülnél, mennyire lennél fáradt? | egyáltalán nem **0** / kicsit **2** / eléggé **3** / nagyon **5** |
| **19** | „Reggeli" és „esti" típusokról lehet hallani. Te melyiknek tartod magad? | határozottan reggeli **6** / inkább reggeli, mint esti **4** / inkább esti, mint reggeli **2** / határozottan esti **0** ⚠️ |

> ⚠️ **Kritikus implementációs részlet — a 19. tétel legalsó válasza.**
> Az **eredeti** Horne–Östberg pontozásban a „határozottan esti" válasz **0 pont**. A CET által terjesztett **MEQ-SA nyomtatványon ez a válasz `[1]`-ként szerepel**.
> - 0 ponttal a minimum: 1+1+1+1+1+1+1+1+1+1+0+0+1+1+1+1+1+1+**0** = **16** ✔ (megegyezik a publikált 16–86 tartománnyal)
> - 1 ponttal a minimum **17** lenne, ami ellentmond a hivatkozott tartománynak.
> 🔧 **Az appban 0-t használj**, hogy a 16–86 skála és a publikált kategóriahatárok érvényesek legyenek. (A maximum mindkét esetben 86: 5+5+4+4+4+4+4+4+4+5+6+5+4+4+4+4+5+5+6 = 86.)

### 1.4 Pontozás és kategóriák 📗

**Összpontszám = a 19 tétel pontjainak egyszerű összege.** Nincs súlyozás, nincs fordított kódolás (a fordítottság már be van építve a válaszopciók pontjaiba — pl. a 16. tétel „jó formában" válasza 1 pont, mert az esti edzés kedvelése esti típusra utal).

| Összpont | Kategória (magyar) | Angol |
|---|---|---|
| **16–30** | határozottan esti típus | definite evening type |
| **31–41** | mérsékelten esti típus | moderate evening type |
| **42–58** | köztes típus | intermediate type |
| **59–69** | mérsékelten reggeli típus | moderate morning type |
| **70–86** | határozottan reggeli típus | definite morning type |

Durva háromosztatú változat (szintén publikált): **≤41 esti**, **42–58 köztes**, **≥59 reggeli**.

### 1.5 A MEQ-pontszám és a tényleges alvásidők — konzisztencia-ellenőrzés 📗

A MEQ-SA visszajelző lapja tartalmaz egy **plauzibilitás-táblázatot**: ha a felhasználó megadott alvásidői nem esnek ebbe a sávba, a MEQ-eredmény gyanús (pl. műszakos munka, betegség, gyógyszer torzítja). 🔧 **Ezt az appban is érdemes beépíteni ellenőrzésnek.**

| MEQ-pont | Tipikus elalvás | Tipikus ébredés |
|---|---|---|
| 16–30 | 02:00–03:00 | 10:00–11:30 |
| 31–41 | 00:45–02:00 | 08:30–10:00 |
| 42–58 | 22:45–00:45 | 06:30–08:30 |
| 59–69 | 21:30–22:45 | 05:00–06:30 |
| 70–86 | 21:00–21:30 | 04:00–05:00 |

📗 A forrás külön kiemeli: ha valaki **21:00 előtt vagy 03:00 után alszik el**, illetve **04:00 előtt vagy 11:30 után ébred**, akkor a kérdőív alapú tanácsadás nem megbízható, klinikai megítélés kell.

### 1.6 Terman fényterápia-időzítési táblázata 📗

Ez a MEQ egyetlen széles körben publikált, **közvetlenül időzítésre használható** leképezése — pontszámból konkrét óra. Alapja egy szezonális affektív zavarban (SAD) végzett nagy klinikai vizsgálat a Columbia Egyetemen; azok a betegek, akik túl későn kapták a fényt, **feleannyi javulást** értek el.

📗 **Terman M & Terman JS (2005).** *Light therapy for seasonal and nonseasonal depression: efficacy, protocol, safety, and side effects.* CNS Spectrums **10**(8): 647–663.

| MEQ-pont | Javasolt fényterápia-kezdés | | MEQ-pont | Javasolt fényterápia-kezdés |
|---|---|---|---|---|
| 23–26 | 08:15 | | 54–57 | 06:15 |
| 27–30 | 08:00 | | 58–61 | 06:00 |
| 31–34 | 07:45 | | 62–65 | 05:45 |
| 35–38 | 07:30 | | 66–68 | 05:30 |
| 39–41 | 07:15 | | 69–72 | 05:15 |
| 42–45 | 07:00 | | 73–76 | 05:00 |
| 46–49 | 06:45 | | | |
| 50–53 | 06:30 | | | |

**Lineáris közelítés a táblázatra** 🔧 (a 23–76 pontos tartományban ±8 percen belül visszaadja a táblázatot):

```
fényterápia_kezdés_óra ≈ 9.90 − 0.0645 × MEQ_pont
```

Ellenőrzés: MEQ = 30 → 7,97 ≈ **08:00** ✔ · MEQ = 50 → 6,68 ≈ **06:41** (táblázat: 06:30) · MEQ = 75 → 5,06 ≈ **05:04** (táblázat: 05:00) ✔

> ⚠️ **Ez terápiás ajánlás, nem életmódtipp.** Klinikai depresszió esetén a fényterápiát orvosi felügyelet mellett kell alkalmazni. Az appban ezt figyelmeztetéssel együtt vagy egyáltalán ne jelenítsd meg — lásd [12-tudomany-jog-piac.md](12-tudomany-jog-piac.md).

### 1.7 Pszichometria és kritikák

**Megbízhatóság** 📗
- **Belső konzisztencia (Cronbach α):** 0,70–0,86 a különböző vizsgálatokban.
- **Teszt–reteszt stabilitás:** 0,84–0,95.

**Validitás**
- 📗 Az eredeti validáció: testhőmérséklet-akrofázis különbség reggeli vs esti típusok között ~1 óra.
- ⚠️ **A DLMO-val (a legjobb cirkadián fázismarkerrel) való korreláció gyenge:**
  - r = **−0,40** (p = 0,055, N = 60) — Kantermann, Sung & Burgess (2015)
  - r = **−0,25** (p = 0,035, N = 57) — Reis et al. (2021)
  Vagyis a MEQ-pontszám a DLMO varianciájának nagyjából **6–16%-át** magyarázza. Ez appra nézve az egyik legfontosabb üzenet: **a MEQ-pont nem alkalmas fázisbecslésre**, csak preferencia-címkézésre.
- 📗 Az MSF<sub>sc</sub>-vel (MCTQ) való korreláció **r ≈ −0,64…−0,74** — lásd [3.6](#36-a-meq-és-az-mctq-viszonya).

**Fő kritikák** ⚠️
1. **Faktorstruktúra.** A skála nem egydimenziós; 2–3 faktoros megoldásokat írtak le (jellemzően „reggeli érzet/frissesség", „esti aktivitás", „idő-preferencia"). Ha többdimenziós, az összpontszám elvileg vitatható.
2. **Gyenge diszkriminációjú tételek.** Több tétel (pl. az éhség- és az edzés-tételek) alacsonyan korrelál az összpontszámmal.
3. **Preferencia ≠ fázis.** A kérdések jó része hipotetikus („ha szabadon tervezhetnéd…"), amit erősen befolyásol a szociális elvárás, a munkarend és a személyiség (a reggeliség pozitívan korrelál a lelkiismeretességgel).
4. **A kategóriahatárok normatívak, nem biológiaiak.** Egy adott populációban az „intermediate" sáv aránya erősen eltérhet.
5. **Elavult tételek.** 1976-os megfogalmazások (pl. „éjjeli őrség"), amelyek ma sokaknak nehezen értelmezhetők.
6. **Nem választja szét a munkanapot és a szabadnapot** — ezért a munkarend okozta torzítást (szociális jetlag) nem tudja kezelni. Ez volt az MCTQ kifejlesztésének fő motivációja.

---

## 2. rMEQ — a rövidített 5 tételes változat

📗 **Adan A & Almirall H (1991).** *Horne & Östberg morningness-eveningness questionnaire: a reduced scale.* Personality and Individual Differences **12**(3): 241–253.

### 2.1 Melyik 5 tétel? 📗

Az rMEQ a teljes MEQ **1., 7., 10., 18. és 19.** tételéből áll. Tartalmilag:

| MEQ-tétel | Mit mér | Válaszok száma | Pontok |
|---|---|---|---|
| **1** | szabadon választott **ébredési idő** | 5 | 1–5 |
| **7** | **frissesség** az ébredés utáni fél órában | 4 | 1–4 |
| **10** | mikor jelentkezik az **esti fáradtság** | 5 | 1–5 |
| **18** | mikor érzi magát a **legjobb formában** | 5 | 1–5 |
| **19** | **önbesorolás** reggeli/esti típusként | 4 | 0, 2, 4, 6 |

> Ez a kiválasztás nem véletlenszerű: lefedi a kronotípus négy különböző megnyilvánulását (ébredésidő, ébredési inercia, esti álmosság, csúcsidőszak) **plusz** a direkt önbesorolást — ami önmagában a legerősebb egyetlen tétel (📗 az MCTQ-val vett önbesorolás r = −0,80-at ad a MEQ-val szemben, Roenneberg et al. 2007).

### 2.2 Pontozás és tartomány 📗

```
rMEQ = P(1) + P(7) + P(10) + P(18) + P(19)
```

- **Minimum:** 1 + 1 + 1 + 1 + 0 = **4**
- **Maximum:** 5 + 4 + 5 + 5 + 6 = **25**
- **Tartomány: 4–25.** Magasabb = reggelibb.

> ⚠️ A 4-es minimum **csak akkor jön ki**, ha a 19. tétel legalsó válasza **0 pont** (eredeti Horne–Östberg pontozás). Ha a CET MEQ-SA szerinti `[1]`-et használod, a tartomány 5–25 lesz, és a publikált vágópontok elcsúsznak. **Használd a 0-t.**

### 2.3 Kategóriahatárok 📗

| rMEQ-pont | Kategória |
|---|---|
| **4–11** | esti típus (evening type) |
| **12–17** | köztes / semleges típus (neither / intermediate) |
| **18–25** | reggeli típus (morning type) |

> ⚠️ **A szakirodalom kifejezetten figyelmeztet:** ezek **önkényesen választott vágópontok**, nem populációs kritériumok. Nem és életkor szerint eltolódnak; több nyelvi/kulturális validáció eltérő határokat javasolt. 🔧 **Appban a legvédhetőbb megoldás: a nyers pontszám mellett *percentilis* alapú besorolást is mutatni** (lásd [7.4](#74-életkor-korrigált-besorolás)).

Ötosztatú finomítás 🔧 (a MEQ 5 kategóriájával analóg, arányos átskálázással — **nem publikált határok**):

| rMEQ | Kategória |
|---|---|
| 4–7 | határozottan esti |
| 8–11 | mérsékelten esti |
| 12–17 | köztes |
| 18–21 | mérsékelten reggeli |
| 22–25 | határozottan reggeli |

### 2.4 Pszichometria 📗

- **Konvergens validitás a teljes MEQ-val:** r általában **0,85–0,92** (a rMEQ tételek részei a MEQ-nak, ezért ez részben tautologikus, de a gyakorlati üzenet érvényes: a 14 kihagyott tétel keveset ad hozzá).
- **Cronbach α:** jellemzően **0,63–0,80** — 5 tételnél ez elfogadható; alacsonyabb, mint a teljes MEQ-é, ami várható.
- 📗 **Adan & Almirall** azt találták, hogy az rMEQ a **szélső kronotípusokat jobban diszkriminálja**, mint a teljes MEQ.
- 📗 **MSF<sub>sc</sub>-vel való korreláció:** ρ = **−0,695** (portugál MCTQ-validáció, N = 62, Rodrigues et al. 2020); MSF-fel ρ = −0,690.
- 📗 Létezik validált **német** (Randler 2013), **svéd** (Danielsson, Sakarya & Jansson-Fröjmark 2019), **koreai**, **olasz**, **spanyol** és sok más nyelvi változat. ⚠️ **Hivatalos, publikált validációval bíró magyar rMEQ-változatot az itt átnézett forrásokban nem találtam** — ha az app magyar nyelvű mérést hirdet, ezt jelezni kell (vagy saját validációt kell futtatni).

### 2.5 Miért ez az app alapmérője 🔧

| Szempont | rMEQ |
|---|---|
| Kitöltési idő | ~45 másodperc |
| Lemorzsolódás | minimális |
| Számítás | 5 szám összeadása |
| Kimenet | 1 szám + 1 címke — közvetlenül UI-ra tehető |
| Gyengeség | ugyanaz, mint a MEQ-é: **preferenciát mér, nem fázist** |

---

## 3. MCTQ — Munich ChronoType Questionnaire

📗 **Roenneberg T, Wirz-Justice A & Merrow M (2003).** *Life between clocks: daily temporal patterns of human chronotypes.* Journal of Biological Rhythms **18**(1): 80–90.

### 3.1 Az alapötlet

A MEQ azt kérdezi, *mit szeretnél*. Az MCTQ azt kérdezi, **mit csinálsz ténylegesen — külön munkanapon és külön szabadnapon**. A kronotípus definíciója:

> **A kronotípus = az alvás középpontja szabadnapon**, azaz amikor semmilyen szociális kényszer nem torzítja az időzítést. Ez a *phase of entrainment* (a belső óra beállása a külső 24 órás ciklushoz) proxyja.

### 3.2 A kérdések logikája 📗

Az MCTQ **nem pontozós skála**, hanem **időadat-gyűjtő**. Két azonos szerkezetű blokk:

**A) Munkanapokra (`W` index)** · **B) Szabadnapokra / munka nélküli napokra (`F` index)**

Mindkét blokkban, sorrendben:

| Változó | Kérdés tartalma 🇭🇺 | Típus |
|---|---|---|
| `BT` | Hánykor **mész ágyba**? | óra:perc |
| `SPrep` | Hánykor **készülsz el az alvásra** (leoltod a lámpát, leteszed a telefont)? | óra:perc |
| `SLat` | Onnantól **hány perc alatt alszol el**? | perc |
| `SE` | Hánykor **ébredsz fel**? | óra:perc |
| `SI` | Ébredés után **hány perc múlva kelsz fel**? | perc |
| `Alarm` | **Ébresztőórára** ébredsz? | igen/nem |
| `AlarmWake` | (ha igen) Szoktál az ébresztő **előtt** felébredni? | igen/nem |

Plusz **egy közös kérdés:**

| Változó | Kérdés | Típus |
|---|---|---|
| `WD` | Hány **munkanapod** van egy héten? | 0–7 |

> 📗 **Az `SPrep` és a `BT` szétválasztása szándékos.** Sokan órákkal az elalvás előtt fekszenek ágyba (olvasás, telefon). A cirkadián szempontból releváns változó a **`SPrep + SLat` = tényleges elalvás**, nem az ágyba kerülés.

Az MCTQ opcionálisan kérdez még: szabadban töltött idő, műszak, ingázás, koffein/nikotin/alkohol, valamint egy **7 fokozatú önbesorolást** (extrém korai → extrém kései).

**Változatok:**

| Változat | Kérdésszám | Mikor |
|---|---|---|
| **stdMCTQ** | 17 (magmodul) | alapértelmezett |
| **µMCTQ** (Ghotbi et al. 2020) | **6** | nagy kohorszok, appok 🔧 **ezt ajánljuk** |
| **MCTQ^Shift** (Juda, Vetter & Roenneberg 2013) | műszakonként külön (M/E/N) | műszakos munkavállalók |

📗 **Ghotbi N, Pilz LK, Winnebeck EC, Vetter C, Zerbini G, Lenssen D, Frighetto G, Salamanca M, Costa R, Montagnese S & Roenneberg T (2020).** *The µMCTQ: An Ultra-Short Version of the Munich ChronoType Questionnaire.* Journal of Biological Rhythms **35**(1): 98–110. — A magmodult 17-ről **6 kérdésre** tömörítette; jó teszt–reteszt megbízhatóság, és az MSF<sub>sc</sub> **szignifikánsan korrelál az otthon mért DLMO-val** (szabadnapi méréssel; munkanapival nem).

### 3.3 A számítási képletek 📗

Minden idő decimális órában; a körkörösség miatt az éjfél utáni értékekhez adj 24-et, mielőtt kivonnál.

**(1) Elalvás időpontja — Sleep Onset**

```
SO = SPrep + SLat/60          (SLat percben van megadva)
```

külön `SO_W` (munkanap) és `SO_F` (szabadnap).

**(2) Alvásidő — Sleep Duration**

```
SD = SE − SO                  (körkörösen, mod 24)
```

`SD_W` és `SD_F`.

**(3) Alvásközép — Mid-Sleep**

```
MS = SO + SD/2
```

- `MSW = SO_W + SD_W/2` — **alvásközép munkanapon**
- `MSF = SO_F + SD_F/2` — **alvásközép szabadnapon** ← ez a nyers kronotípus

**(4) Heti átlagos alvásidő**

```
FD       = 7 − WD                                   (szabadnapok száma)
SD_week  = (SD_W × WD + SD_F × FD) / 7              (súlyozott átlag)
```

**(5) ⭐ A KULCSKÉPLET — alváskorrigált alvásközép (MSF<sub>sc</sub>)**

```
ha  SD_F ≤ SD_W :   MSFsc = MSF                          (nincs korrekció)
ha  SD_F >  SD_W :   MSFsc = MSF − (SD_F − SD_week) / 2
```

**A korrekció csak akkor alkalmazandó, ha a szabadnapi alvás hosszabb a munkanapinál** (`SD_F > SD_W`) — azaz ha van behozandó alváshiány. Ha valaki munkanapon alszik többet (pl. munkanélküli, nyugdíjas, vagy hétvégén korán kelős hobbi), a korrekció **nem** értelmes és torzítana.

**Ekvivalens, számításilag kényelmesebb alak** (algebrailag azonos, mert `MSF = SO_F + SD_F/2`):

```
ha SD_F > SD_W :   MSFsc = SO_F + SD_week / 2
```

Vagyis: *az elalvás szabadnapi időpontjához a **heti átlagos** alvásidő felét adjuk hozzá, nem a szabadnapiét.* Ez intuitívan is világos: azt kérdezzük, „hol lenne az alvásközepe, ha nem kellene alvást pótolnia".

> 📗 A logika alapja: a kései típusok munkanapokon **krónikusan alvásmegvontak**, szabadnapon pótolnak, és ez a pótlás **későbbre tolja** az alvásközepüket — nem azért, mert a belső órájuk annyira kései, hanem mert homeosztatikus adósságot törlesztenek. Az MSF<sub>sc</sub> ezt a homeosztatikus komponenst távolítja el, hogy a maradék tisztán cirkadián legyen.

**(6) ⚠️ Kizárási szabály — ez gyakran kimarad az implementációkból**

📗 Aki **szabadnapon is ébresztőórát használ**, annak az `SE_F`-je (és így az `MSF`-je) mesterségesen levágott → **az MSF<sub>sc</sub>-je érvénytelen**. A kanonikus MCTQ-feldolgozás ezeket az eseteket **kizárja** a kronotípus-számításból.

🔧 Appban: ha `Alarm_F == igen`, jelezd, hogy a becslés bizonytalan, és kérj meg a felhasználót, hogy gondoljon egy tényleg szabad napra (szabadság, hosszú hétvége). Vagy jelöld meg az eredményt „alsó becslés"-ként (a valós MSF<sub>sc</sub> valószínűleg későbbi).

**(7) Szociális jetlag — Social Jetlag**

📗 **Wittmann M, Dinich J, Merrow M & Roenneberg T (2006).** *Social jetlag: misalignment of biological and social time.* Chronobiology International **23**(1–2): 497–509.

```
SJL     = |MSF − MSW|          (abszolút, órában)
SJLrel  =  MSF − MSW           (előjeles: pozitív = szabadnapon később)
```

**(8) SJL<sub>sc</sub> — a javított képlet** 📗

📗 **Jankowski KS (2017).** *Social jet lag: sleep-corrected formula.* Chronobiology International **34**(4): 531–535.

Jankowski érve: a klasszikus `SJL = |MSF − MSW|` **nem csak a szociális–biológiai időeltolódást méri, hanem az alváshiányt is** belekeveri (mert a hétvégi hosszabb alvás eltolja az MSF-et). A javított képlet feltételes, és **nem az alvásközepeket, hanem az alvás széleit** hasonlítja össze:

```
ha  SD_W > SD_F  ÉS  SE_W ≤ SE_F :   SJLsc = |SE_F − SE_W|     (ébredés-alapú)
egyébként :                          SJLsc = |SO_F − SO_W|     (elalvás-alapú)
```

Magyarul: ha valaki munkanapon alszik **többet**, és szabadnapon **később** ébred, akkor az ébredésidők különbsége a releváns; minden más esetben az elalvásidőké.

**(9) Heti alvásveszteség**

```
ha SD_week > SD_W :   SLoss_week = (SD_week − SD_W) × WD
egyébként         :   SLoss_week = (SD_week − SD_F) × FD
```

> 🔧 Ez a szám nagyon jól kommunikálható a felhasználó felé: *„hetente ~3,5 óra alvással tartozol magadnak."*

### 3.4 Példaszámítás 🔧

Egy tipikus kései típus, `WD = 5`:

| | Munkanap | Szabadnap |
|---|---|---|
| `SPrep` | 23:30 (23,50) | 01:00 (25,00) |
| `SLat` | 20 perc | 20 perc |
| `SE` | 06:30 (30,50) | 10:30 (34,50) |

```
SO_W    = 23.50 + 0.333 = 23.833      (23:50)
SO_F    = 25.00 + 0.333 = 25.333      (01:20)
SD_W    = 30.50 − 23.833 = 6.667 h    (6 h 40 p)
SD_F    = 34.50 − 25.333 = 9.167 h    (9 h 10 p)
MSW     = 23.833 + 3.333 = 27.167  →  03:10
MSF     = 25.333 + 4.583 = 29.917  →  05:55

FD      = 2
SD_week = (6.667×5 + 9.167×2)/7 = (33.333 + 18.333)/7 = 7.381 h   (7 h 23 p)

SD_F (9.167) > SD_W (6.667)  →  korrekció KELL
MSFsc   = 29.917 − (9.167 − 7.381)/2 = 29.917 − 0.893 = 29.024  →  05:01
    (ellenőrzés: SO_F + SD_week/2 = 25.333 + 3.690 = 29.024 ✔)

SJL     = |29.917 − 27.167| = 2.75 h        (2 h 45 p)
SJLsc:  SD_W (6.667) > SD_F (9.167)? NEM  →  elalvás-alapú
        SJLsc = |25.333 − 23.833| = 1.50 h  (1 h 30 p)

SLoss_week = (7.381 − 6.667) × 5 = 3.57 h   (3 h 34 p / hét)
```

**Tanulság:** a nyers `MSF = 05:55` „extrém kései"-nek látszik, de a korrigált `MSFsc = 05:01` már csak „kései". A különbség **54 perc** — ennyit torzított a hétvégi alváspótlás. És az `SJL` (2:45) majdnem duplája az `SJLsc`-nek (1:30) — a klasszikus képlet itt tényleg az alváshiányt is beleszámolta.

### 3.5 MSF<sub>sc</sub> kategóriák ⚠️

Az MCTQ-t Roenneberg **kifejezetten folytonos változónak** szánta, és a hivatalos dokumentáció **nem ad kanonikus vágópontokat**. A szakirodalomban négyféle gyakorlat él:

**(a) Abszolút hármas felosztás** 📗 (a leggyakrabban idézett)

| MSF<sub>sc</sub> | Kategória |
|---|---|
| ≤ 03:59 | korai típus |
| 04:00–04:59 | köztes típus |
| ≥ 05:00 | kései típus |

**(b) A Roenneberg-adatbázis 7 kategóriája** ⚠️
Az MCTQ önbesorolási kérdése 7 fokozatú (extrém korai · mérsékelten korai · enyhén korai · normál · enyhén kései · mérsékelten kései · extrém kései), és ehhez az MSF<sub>sc</sub>-t szokás **egész órás sávokra** bontani. 🔧 A gyakorlatban használt (de nem hivatalosan kanonizált) séma:

| MSF<sub>sc</sub> | Kategória |
|---|---|
| < 02:00 | extrém korai |
| 02:00–02:59 | mérsékelten korai |
| 03:00–03:59 | enyhén korai |
| 04:00–04:59 | normál |
| 05:00–05:59 | enyhén kései |
| 06:00–06:59 | mérsékelten kései |
| ≥ 07:00 | extrém kései |

⚠️ **Ezt a 7-es sémát ne add ki „hivatalos Roenneberg-kategóriaként".** A publikációk maguk is jelzik, hogy „a pontos határok populációfüggők".

**(c) Percentilis-alapú** 📗 — tercilis, kvartilis vagy kvintilis felosztás a saját mintán belül. Ezt használja pl. a portugál MCTQ-validáció (kvartilisek: Q1 2,07–3,72 h · Q2 3,73–4,55 h · Q3 4,56–5,26 h · Q4 5,27–8,75 h) és a DLMO-konkordancia-vizsgálat (tercilisek: korai < 04:16 · köztes 04:16–04:53 · kései > 04:53).

**(d) Szórás-alapú** 📗 — korai: `< átlag − 1 SD`; köztes: `átlag ± 1 SD`; kései: `> átlag + 1 SD`.

> 🔧 **Az apphoz a (c) + életkor/nem-korrekció kombinációt ajánljuk** — lásd [4.4](#44-életkorra-és-nemre-korrigált-kronotípus-msfsasc) és [7.4](#74-életkor-korrigált-besorolás). Egy 17 éves és egy 65 éves ugyanazon MSF<sub>sc</sub> = 04:30 értéke *teljesen mást jelent*: az előbbi korainak, az utóbbi extrém későinek számít a saját korcsoportjában.

### 3.6 A MEQ és az MCTQ viszonya 📗

📗 **Zavada A, Gordijn MCM, Beersma DGM, Daan S & Roenneberg T (2005).** *Comparison of the Munich Chronotype Questionnaire with the Horne-Östberg's Morningness-Eveningness Score.* Chronobiology International **22**(2): 267–278. — A MEQ-pont a szabadnapi alvásközéppel korrelál a legjobban (r ≈ 0,70); *a szabadnapi alvásrend jó előrejelzője a kronotípusnak*.

📗 **Roenneberg, Kumar & Merrow (2007), Sleep Medicine Reviews 11: 429–438**, Table 1 (N = 2726, mindkét kérdőívet kitöltők):

| MCTQ-változó | Korreláció a MEQ-ponttal (r) |
|---|---|
| **MSF** (nyers alvásközép szabadnapon) | **−0,74** |
| **MSF<sub>sc</sub>** (alváskorrigált) | **−0,66** |
| **MSF<sub>sasc</sub>** (kor- és nemkorrigált) | **−0,59** |
| önbesorolás, jelen | **−0,80** |
| önbesorolás, gyerekkor | −0,47 |
| önbesorolás, tinédzserkor | −0,56 |

*(Az előjel azért negatív, mert a magasabb MEQ-pont = reggelibb = korábbi óra.)*

**Két tanulság az apphoz:**
1. ⚠️ **A korreláció csökken, ahogy az MCTQ-változó „biológiaibb" lesz.** Ez nem az MCTQ hibája — épp ellenkezőleg: a MEQ nem tudja kezelni a munkarend okozta alvásmegvonást, ezért a MEQ-pont a *nyers, torzított* MSF-fel egyezik jobban. Roenneberg ezt explicit érvként használja.
2. 📗 **A legerősebb egyetlen prediktor az egyszerű önbesorolás (r = −0,80)** — jobb, mint bármelyik számított alvásváltozó. 🔧 Ez appra rendkívül praktikus: **egy jól megfogalmazott, 7 fokozatú önbesorolási kérdés önmagában többet ér, mint sok kérdés rosszul.** Az MCTQ szerzői külön kiemelik, hogy a kérdést egy rövid bevezetővel kell felvezetni („a pacsirták inkább korán kelnek…"), különben nem működik ilyen jól.

### 3.7 Az MCTQ validálása objektív mérésekkel 📗

| Referenciamérés | Eredmény |
|---|---|
| Alvásnaplók (N > 600) | erős, szignifikáns korreláció |
| Aktigráfia (csuklón hordott mozgásérzékelő) | szignifikáns korreláció, különösen szabadnapokon |
| **DLMO** | r = **+0,54** (N = 60, Kantermann et al. 2015) · r = **+0,32** (N = 57, Reis et al. 2021) |
| Kortizol, melatonin, aktivitás-akrofázis | szignifikáns korreláció |

⚠️ Vedd észre: még az MCTQ is „csak" **r ≈ 0,3–0,55** a DLMO-val, azaz **10–30% magyarázott variancia**. Ez a kérdőív alapú kronotípus-mérés **elvi felső korlátja**. Lásd részletesen az [5. fejezetet](#5-dlmo-becslése-kérdőívből).

---

## 4. Normák és eloszlások

### 4.1 A kronotípus életkori görbéje — a „serdülőkor vége" marker 📗

📗 **Roenneberg T, Kuehnle T, Pramstaller PP, Ricken J, Havel M, Guth A & Merrow M (2004).** *A marker for the end of adolescence.* Current Biology **14**(24): R1038–R1039.

Ez a kronobiológia egyik legidézettebb egyoldalas közleménye. Megállapításai (N ≈ 25 000, főleg Németország és Svájc):

- **A gyerekek korai kronotípusok.** A pubertás kezdetétől az alvásközép **folyamatosan későbbre tolódik**.
- **A késés kb. 20 éves korban éri el a maximumát**, majd **hirtelen fordul**, és onnantól az egész élet során folyamatosan korábbra tolódik.
- 📗 **A maximum neme szerint eltér: nőknél 19,5 év, férfiaknál 20,9 év** — összhangban azzal, hogy a lányok pubertása korábban indul.
- A férfiak az egész felnőttkor nagy részében **későbbi** kronotípusok. 📗 **Ez a nemi különbség kb. 50 éves korban eltűnik** — ami egybeesik a menopauza átlagos életkorával. Ez a szerzők fő érve amellett, hogy **endokrin szabályozás** áll a háttérben.
- **A javaslat:** a serdülőkor végét úgy lehet biológiailag definiálni, hogy **az az életkor, amikor a kronotípus késése átfordul korábbra tolódásba.** Ez lenne az első *biológiai* markere a serdülőkor végének (a pubertás végét az epifízis-záródás jelzi: lányoknál 16 év, fiúknál 17,5 év).
- **Kontroll:** egy párhuzamos vizsgálatban három elzárt dél-tiroli völgyben (N ≈ 800, genetikailag és szociológiailag teljesen más populáció) **gyakorlatilag azonos** életkori görbét kaptak → nem életmódi artefaktum.

### 4.2 ⭐ Konkrét életkor–alvásközép táblázat (app-használatra) 📗

A Roenneberg-2004 közlemény csak **ábrán** adja meg a görbét, számtáblázat nélkül. Az egyetlen nagy, **korévenkénti számtáblát** közlő forrás:

📗 **Fischer D, Lombardi DA, Marucci-Wellman H & Roenneberg T (2017).** *Chronotypes in the US — influence of age and sex.* PLOS ONE **12**(6): e0178782.
Minta: **N = 53 689**, American Time Use Survey (ATUS) 2003–2014, reprezentatív amerikai valószínűségi minta, 24 órás naplóadatokból.

> ⚠️ **Fontos módszertani különbség.** Ez a tábla **MSF<sub>We</sub>** (mid-sleep on **weekend**), azaz **nyers, hétvégi alvásközép — NEM alváskorrigált MSF<sub>sc</sub>**, és nem MCTQ-ból, hanem időmérleg-naplóból származik. Ezért **szisztematikusan korábbi**, mint az európai MCTQ-adatbázis értékei (US átlag 03:26 vs német MCTQ modális MSF ≈ 04:13). Használd **relatív** normaként (hol áll a felhasználó a saját korcsoportjához képest), ne abszolút MSF<sub>sc</sub>-referenciaként.

**Teljes minta:** átlag **MSF<sub>We</sub> = 03:26 ± 2,31 h** · terjedelem **00:00 – 09:53** (~10 óra!)
**Percentilisek:** 25% korábbi mint **02:24** · 50% a **02:24–04:15** sávban · 25% későbbi mint **04:15**

| Korcsoport | **Nők** MSF<sub>We</sub> | SD (h) | **Férfiak** MSF<sub>We</sub> | SD (h) | **Együtt** | SD (h) | N |
|---|---|---|---|---|---|---|---|
| 15–19 | 4:20 (4,33) | 1,91 | 4:29 (4,48) | 2,02 | **4:24** (4,40) | 1,98 | 3 507 |
| 20–24 | 4:18 (4,30) | 2,30 | 4:32 (4,53) | 2,61 | **4:25** (4,41) | 2,53 | 2 479 |
| 25–29 | 3:44 (3,74) | 1,89 | 3:56 (3,93) | 2,43 | **3:50** (3,84) | 2,28 | 3 769 |
| 30–34 | 3:25 (3,42) | 1,88 | 3:42 (3,70) | 2,17 | **3:34** (3,56) | 2,10 | 5 072 |
| 35–39 | 3:21 (3,35) | 1,93 | 3:24 (3,40) | 2,10 | **3:22** (3,37) | 2,03 | 5 603 |
| 40–44 | 3:17 (3,29) | 1,81 | 3:15 (3,25) | 2,18 | **3:16** (3,27) | 2,03 | 5 697 |
| 45–49 | 3:15 (3,25) | 2,03 | 3:08 (3,14) | 1,95 | **3:12** (3,20) | 2,01 | 5 380 |
| 50–54 | 3:10 (3,17) | 1,92 | 3:04 (3,06) | 2,00 | **3:07** (3,12) | 1,97 | 4 750 |
| 55–59 | 3:09 (3,15) | 1,75 | 2:55 (2,92) | 1,87 | **3:02** (3,04) | 1,84 | 4 261 |
| 60–64 | 3:05 (3,08) | 1,69 | 2:52 (2,86) | 1,73 | **2:58** (2,97) | 1,73 | 3 580 |
| 65–69 | 3:04 (3,06) | 1,71 | 2:47 (2,79) | 1,68 | **2:56** (2,93) | 1,71 | 3 062 |
| 70–74 | 3:02 (3,03) | 1,75 | 2:44 (2,74) | 1,68 | **2:54** (2,90) | 1,76 | 2 266 |
| 75–79 | 2:52 (2,87) | 1,63 | 2:53 (2,88) | 1,67 | **2:52** (2,87) | 1,68 | 1 900 |
| 80+ | 2:52 (2,87) | 1,89 | 2:46 (2,77) | 1,57 | **2:50** (2,83) | 1,77 | 2 363 |

*(A zárójeles szám a decimális óra. A korcsoport-értékek a publikált korévenkénti táblázat N-nel súlyozott átlagai.)*

**Kiemelt korévek a publikált táblából** 📗:

| Kor | Nők | Férfiak | | Kor | Nők | Férfiak |
|---|---|---|---|---|---|---|
| 15 | 4:07 (4,11) | 4:01 (4,02) | | 40 | 3:22 (3,37) | 3:16 (3,26) |
| 17 | 4:23 (4,38) | 4:35 (4,58) | | 50 | 3:15 (3,25) | 3:07 (3,11) |
| **19** | 4:32 (4,53) | **5:02** (5,03) | | 60 | 3:10 (3,16) | 2:56 (2,93) |
| **20** | **4:52** (4,87) | 4:52 (4,86) | | 70 | 3:04 (3,07) | 2:47 (2,78) |
| 25 | 3:47 (3,78) | 4:09 (4,15) | | 80+ | 2:52 (2,87) | 2:46 (2,77) |
| 30 | 3:32 (3,54) | 3:59 (3,99) | | | | |

**Simított görbe csúcsértékei** 📗 (a szerzők illesztéséből):
- **Nők: 18,4 év, MSF<sub>We</sub> = 04:27**
- **Férfiak: 19,2 év, MSF<sub>We</sub> = 04:40**
- (A nyers korévenkénti átlagok maximuma későbbi: 04:52 és 05:02.)
- Extrapolált végpontok: **10 évesen 03:09**, **70 évesen 02:49** — azaz **az idős emberek kronotípusa gyakorlatilag megegyezik a 10 éves gyerekekével.**

**Meredekségek** 📗:
- 15→20 év (késés): lányoknál **+0,76 h**, fiúknál **+1,01 h** (β = +8 perc, ill. +11 perc / 5 éves korcsoport)
- 20→25 év (visszatolódás): nőknél **−0,26 h/korcsoport (−16 perc)**, férfiaknál **−0,12 h/korcsoport (−7 perc)**
- A teljes élettartam-változás **64%-a (nők) / 55%-a (férfiak) a 15–25 éves sávban** zajlik le. Ez az app szempontjából azt jelenti: **serdülőknél és fiatal felnőtteknél az életkor-korrekció nem opcionális, hanem kötelező.**

### 4.3 Nemi különbségek konkrét számokkal 📗

| Állítás | Szám | Forrás |
|---|---|---|
| Max. nemi különbség életkora | **21,6 év** | Fischer 2017 |
| A különbség nagysága ott | **0,27 h = 16 perc** (férfiak későbbiek) | Fischer 2017 |
| A különbség eltűnése (1. metszéspont) | **41,4 év** | Fischer 2017 |
| 41 év fölött | **a nők ~16 perccel későbbiek** (megfordul!) | Fischer 2017 |
| A megfordult különbség eltűnése | **79,1 év** | Fischer 2017 |
| A késési csúcs életkora (európai MCTQ) | **nők 19,5 év · férfiak 20,9 év** | Roenneberg 2004 |
| A nemi különbség eltűnése (európai MCTQ) | **~50 év** (≈ menopauza) | Roenneberg 2004 |
| Regressziós együtthatók (kor, nem, interakció) | β<sub>kor</sub> = −0,21 h · β<sub>nem</sub> = −0,31 h · β<sub>kor×nem</sub> = +0,05 h (mind p < 0,001) | Fischer 2017 |

> ⚠️ **A két forrás nem mond ugyanazt.** Roenneberg (2004, EU) szerint a férfiak a felnőttkor nagy részében későbbiek, és a különbség 50 körül tűnik el. Fischer (2017, US) szerint a különbség **41 évesen megfordul**, és 41 fölött a nők a későbbiek. 🔧 **Appban a kettőt egyszerre nem lehet használni.** Javaslat: a **Fischer-táblázatot** használd numerikus normának (mert az van számtáblában és reprezentatív mintán), és a szöveges magyarázatban a Roenneberg-narratívát („a késési csúcs a serdülőkor vége") — ez utóbbi mindkét adatban jelen van.

### 4.4 Életkorra és nemre korrigált kronotípus (MSF<sub>sasc</sub>) 📗

Roenneberg bevezetett egy további korrekciót, az **MSF<sub>sasc</sub>**-t (*sleep- and age/sex-corrected*): az MSF<sub>sc</sub>-t standardizálja az adott kor- és nemcsoport átlagához.

```
MSFsasc  ≈  MSFsc − átlag_MSFsc(kor, nem) + populációs_átlag
```

⚠️ A pontos korrekciós algoritmus a Roenneberg 2007 review **supplemental data**-jában van, ami nem szabadon elérhető. 🔧 Az app számára az alábbi, ekvivalens és jobban értelmezhető megoldást javasoljuk:

```
z  =  (MSFsc_felhasználó − átlag(kor, nem)) / SD(kor, nem)
```

Ez egy **standard z-score**: hány szórásnyira van a felhasználó a saját kor- és nemcsoportjának átlagától. Ebből percentilis is számolható (lásd [7.4](#74-életkor-korrigált-besorolás)).

### 4.5 A populációs eloszlás alakja 📗

| Jellemző | Érték | Forrás |
|---|---|---|
| Eloszlás alakja | **majdnem normális, enyhe jobbra (későbbi irányú) ferdeséggel** | Fischer 2017; Roenneberg 2007 |
| Terjedelem | **~10 óra** (00:00 – 09:53) | Fischer 2017 |
| Teljes minta átlaga (US, MSF<sub>We</sub>) | **03:26 ± 2,31 h** | Fischer 2017 |
| Modális MSF (EU MCTQ, félórás sávok) | a populáció **14,6%-a** alszik 00:09–08:18 között → MSF ≈ **04:13** | Roenneberg 2007 |
| Portugál minta MSF | átlag **4,92 h ± 1,37** | Rodrigues et al. 2020 |
| Portugál minta MSF<sub>sc</sub> | medián **4,55 h** (IQR 1,53) | Rodrigues et al. 2020 |
| Legnagyobb szórás | **20–24 év**: 2,36 h (nők), 2,65 h (férfiak) | Fischer 2017 |
| Legkisebb szórás | 75–79 év: 1,66 h (nők); 80+: 1,57 h (férfiak) | Fischer 2017 |
| Nemi különbség a szórásban | **a férfiak variábilisabbak 60–64 éves korig** → a szélsőséges típusok gyakoribbak férfiaknál | Fischer 2017 |
| Alvásidő és kronotípus kapcsolata | **gyakorlatilag nincs** (b = −0,0004, p > 0,05; ill. r = −0,03) | Fischer 2017; Roenneberg 2007 |
| Alvásidő munka- és szabadnapon vs kronotípus | **van kapcsolat**: minél későbbi a típus, annál rövidebb a munkanapi és hosszabb a szabadnapi alvás (r = −0,174 és +0,266; N = 60 000) | Roenneberg 2007 |

> 📗 **Egy fontos, gyakran félreértett tény:** *a kronotípus és az alvásigény független egymástól.* Egy „bagoly" nem alszik többet, mint egy „pacsirta" — csak máskor. A rövid- és hosszúalvók kronotípus-eloszlása gyakorlatilag azonos. Az appban ezt érdemes explicit kimondani.

> 📗 **Az egyetlen kronotípus, akinek nincs különbség a munkanapi és szabadnapi alvásideje között: akinek az MSF ≈ 06:00** — ez már meglepően kései. Mindenki más (a populáció túlnyomó többsége) **munkanapokon rövidebbet alszik**, mint amennyit szabadon aludna.

### 4.6 Szociális jetlag — populációs számok 📗

| Jellemző | Érték |
|---|---|
| SJL definíció | `\|MSF − MSW\|` |
| Portugál minta SJL mediánja | **0,90 h** (IQR 1,10) |
| Alvásidő munkanap / szabadnap (portugál) | 7,67 h / 8,46 h (medián) |
| A negatív SJL-esek aránya | **kicsi** (Roenneberg et al. 2019) |
| MCTQ-adatbázis mérete (2017. július) | ~300 000 kitöltés; MSF-értékkel 221 480; MSF<sub>sc</sub>-vel 185 333 |

📗 **Roenneberg T, Pilz LK, Zerbini G & Winnebeck EC (2019).** *Chronotype and Social Jetlag: A (Self-)Critical Review.* Biology **8**(3): 54. — A szerzők maguk kritizálják a klasszikus SJL-képletet, és megerősítik az MSF<sub>sc</sub> feltételes formuláját (`SD_F ≤ SD_W` esetén nincs korrekció).

---

## 5. DLMO becslése kérdőívből

<!-- PLACEHOLDER_DLMO -->

---

## 6. Genetika röviden

<!-- PLACEHOLDER_GENETIKA -->

---

## 7. Implementációs összefoglaló — JavaScript

> Az alábbi kód **pszeudokód-jellegű, de futtatható** ES2020 JavaScript. Nincs külső függősége.

### 7.0 Segédfüggvények — körkörös idő

```js
/** "HH:MM" → decimális óra [0,24). */
function parseHM(s) {
  const [h, m] = s.split(':').map(Number);
  return h + m / 60;
}

/** Decimális óra → "HH:MM" (körkörösen normalizálva). */
function toHM(h) {
  let t = ((h % 24) + 24) % 24;
  let mins = Math.round(t * 60);
  if (mins === 1440) mins = 0;              // 23:59:30 felkerekítése
  const hh = Math.floor(mins / 60), mm = mins % 60;
  return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
}

/**
 * Körkörös időkülönbség: `end − start` órában, mindig [0,24).
 * Pl. diff(23.5, 6.5) = 7  (23:30-tól 06:30-ig).
 */
function circDiff(start, end) {
  return ((end - start) % 24 + 24) % 24;
}

/** Körkörös átlag (Fisher-féle vektorátlag) — kronotípus-átlagoláshoz. */
function circMean(hours) {
  const w = 2 * Math.PI / 24;
  let sx = 0, sy = 0;
  for (const h of hours) { sx += Math.cos(h * w); sy += Math.sin(h * w); }
  return ((Math.atan2(sy, sx) / w) % 24 + 24) % 24;
}
```

### 7.1 rMEQ — pontozás és kategorizálás

```js
/**
 * rMEQ (Adan & Almirall, 1991) — a MEQ 1., 7., 10., 18., 19. tétele.
 * Minden tétel 0-alapú válaszindexszel érkezik (0 = az első opció a listában).
 */
const RMEQ_ITEMS = [
  {
    id: 'q1', meqItem: 1,
    text: 'Körülbelül hánykor kelnél fel, ha teljesen szabadon tervezhetnéd a napodat?',
    options: [
      { label: '05:00–06:30', points: 5 },
      { label: '06:30–07:45', points: 4 },
      { label: '07:45–09:45', points: 3 },
      { label: '09:45–11:00', points: 2 },
      { label: '11:00–12:00', points: 1 },
    ],
  },
  {
    id: 'q7', meqItem: 7,
    text: 'Hogy érzed magad az ébredés utáni első fél órában?',
    options: [
      { label: 'Nagyon fáradtan',  points: 1 },
      { label: 'Eléggé fáradtan',  points: 2 },
      { label: 'Eléggé frissen',   points: 3 },
      { label: 'Nagyon frissen',   points: 4 },
    ],
  },
  {
    id: 'q10', meqItem: 10,
    text: 'Este körülbelül hánykor érzed, hogy elfáradtál és aludni szeretnél?',
    options: [
      { label: '20:00–21:00', points: 5 },
      { label: '21:00–22:15', points: 4 },
      { label: '22:15–00:45', points: 3 },
      { label: '00:45–02:00', points: 2 },
      { label: '02:00–03:00', points: 1 },
    ],
  },
  {
    id: 'q18', meqItem: 18,
    text: 'A nap mely szakában érzed magad a legjobb formában?',
    options: [
      { label: '05:00–08:00', points: 5 },
      { label: '08:00–10:00', points: 4 },
      { label: '10:00–17:00', points: 3 },
      { label: '17:00–22:00', points: 2 },
      { label: '22:00–05:00', points: 1 },
    ],
  },
  {
    id: 'q19', meqItem: 19,
    text: '„Reggeli" és „esti" típusokról szokás beszélni. Te melyiknek tartod magad?',
    // FIGYELEM: az utolsó opció 0 pont (eredeti Horne–Östberg pontozás).
    // A CET MEQ-SA nyomtatványán itt 1 szerepel — azzal a 4–25 tartomány elcsúszik.
    options: [
      { label: 'Határozottan reggeli típusnak',      points: 6 },
      { label: 'Inkább reggelinek, mint estinek',    points: 4 },
      { label: 'Inkább estinek, mint reggelinek',    points: 2 },
      { label: 'Határozottan esti típusnak',         points: 0 },
    ],
  },
];

/** @param {Object<string, number>} answers  pl. { q1: 2, q7: 1, q10: 3, q18: 2, q19: 2 } */
function scoreRMEQ(answers) {
  let total = 0;
  for (const item of RMEQ_ITEMS) {
    const idx = answers[item.id];
    if (!Number.isInteger(idx) || idx < 0 || idx >= item.options.length) {
      throw new Error(`Hiányzó vagy érvénytelen válasz: ${item.id}`);
    }
    total += item.options[idx].points;
  }
  return total;                              // 4..25
}

/** Publikált 3 kategória (Adan & Almirall 1991). */
function categorizeRMEQ3(score) {
  if (score <= 11) return { key: 'evening',      label: 'esti típus' };
  if (score <= 17) return { key: 'intermediate', label: 'köztes típus' };
  return                   { key: 'morning',     label: 'reggeli típus' };
}

/** Finomabb, 5 fokozatú változat — SAJÁT arányos felosztás, NEM publikált. */
function categorizeRMEQ5(score) {
  if (score <=  7) return { key: 'def_evening', label: 'határozottan esti' };
  if (score <= 11) return { key: 'mod_evening', label: 'mérsékelten esti' };
  if (score <= 17) return { key: 'intermediate',label: 'köztes' };
  if (score <= 21) return { key: 'mod_morning', label: 'mérsékelten reggeli' };
  return                    { key: 'def_morning',label: 'határozottan reggeli' };
}

/**
 * rMEQ → közelítő teljes MEQ-pont.
 * A két skála lineárisan illeszthető: MEQ ∈ [16,86] (70 egység),
 * rMEQ ∈ [4,25] (21 egység) → meredekség 70/21 = 3,333.
 * SAJÁT KÖZELÍTÉS, csak megjelenítésre — ne használd klinikai döntéshez!
 */
function rmeqToApproxMEQ(rmeq) {
  return Math.round(16 + (rmeq - 4) * (70 / 21));
}
```

### 7.2 MCTQ — MSF<sub>sc</sub>, SJL, alvásveszteség

```js
/**
 * @typedef {Object} MCTQInput
 * @property {number} workDays       - munkanapok száma hetente (0..7)
 * @property {string} sPrepW         - munkanap: mikor készül el az alvásra ("23:30")
 * @property {number} sLatW          - munkanap: elalvási latencia percben
 * @property {string} sEW            - munkanap: ébredés ("06:30")
 * @property {boolean} alarmW        - munkanap: ébresztőóra?
 * @property {string} sPrepF         - szabadnap
 * @property {number} sLatF
 * @property {string} sEF
 * @property {boolean} alarmF        - szabadnap: ébresztőóra?  → ha true, MSFsc bizonytalan
 */

function computeMCTQ(input) {
  const WD = input.workDays;
  const FD = 7 - WD;

  // (1) Elalvás időpontja
  const SO_W = (parseHM(input.sPrepW) + input.sLatW / 60) % 24;
  const SO_F = (parseHM(input.sPrepF) + input.sLatF / 60) % 24;

  // (2) Alvásidő — körkörösen
  const SD_W = circDiff(SO_W, parseHM(input.sEW));
  const SD_F = circDiff(SO_F, parseHM(input.sEF));

  // (3) Alvásközép (még nem normalizálva, hogy a különbségek helyesek legyenek)
  const MSW_raw = SO_W + SD_W / 2;
  const MSF_raw = SO_F + SD_F / 2;
  const MSW = ((MSW_raw % 24) + 24) % 24;
  const MSF = ((MSF_raw % 24) + 24) % 24;

  // (4) Heti átlagos alvásidő
  const SD_week = (SD_W * WD + SD_F * FD) / 7;

  // (5) ⭐ MSFsc — a korrekció CSAK akkor, ha SD_F > SD_W
  const corrected = SD_F > SD_W;
  const MSFsc_raw = corrected ? (MSF_raw - (SD_F - SD_week) / 2) : MSF_raw;
  const MSFsc = ((MSFsc_raw % 24) + 24) % 24;
  //  ekvivalens: corrected ? (SO_F + SD_week/2) : MSF_raw

  // (7) Szociális jetlag — előjeles és abszolút
  //     A különbséget [-12,+12) sávra hozzuk, hogy éjfél-átlépésnél is jó legyen.
  let d = (MSF - MSW + 36) % 24 - 12;
  const SJL_rel = d;
  const SJL = Math.abs(d);

  // (8) SJLsc — Jankowski (2017)
  const SE_W = parseHM(input.sEW), SE_F = parseHM(input.sEF);
  const wakeLater = ((SE_F - SE_W + 36) % 24 - 12) >= 0;    // SE_W ≤ SE_F ?
  const SJLsc = (SD_W > SD_F && wakeLater)
    ? Math.abs((SE_F - SE_W + 36) % 24 - 12)
    : Math.abs((SO_F - SO_W + 36) % 24 - 12);

  // (9) Heti alvásveszteség
  const SLoss_week = (SD_week > SD_W)
    ? (SD_week - SD_W) * WD
    : (SD_week - SD_F) * FD;

  return {
    SO_W, SO_F, SD_W, SD_F, SD_week,
    MSW, MSF, MSFsc,
    msfscCorrectionApplied: corrected,
    SJL, SJL_rel, SJLsc, SLoss_week,
    // Adatminőség-jelzők
    warnings: [
      ...(input.alarmF ? ['A szabadnapi ébresztőóra levágja az alvást — az MSFsc valószínűleg túl korai (alsó becslés).'] : []),
      ...(WD === 0 || WD === 7 ? ['0 vagy 7 munkanap esetén nincs munkanap/szabadnap kontraszt — az SJL és az MSFsc korrekció nem értelmezhető.'] : []),
      ...(SD_W < 3 || SD_W > 14 || SD_F < 3 || SD_F > 14 ? ['Az alvásidő a szokásos 3–14 órás tartományon kívül esik — ellenőrizd a bevitelt.'] : []),
    ],
  };
}
```

### 7.3 Kronotípus-kategóriák MSF<sub>sc</sub>-ből

```js
/** (a) Publikált abszolút hármas felosztás. */
function categorizeMSFsc3(msfsc) {
  if (msfsc < 4)  return { key: 'early',        label: 'korai típus' };
  if (msfsc < 5)  return { key: 'intermediate', label: 'köztes típus' };
  return             { key: 'late',         label: 'kései típus' };
}

/** (b) 7 fokozatú, egész órás sávok — a gyakorlatban használt, de NEM kanonikus séma. */
const MSFSC_7 = [
  { max:  2, key: 'extreme_early',  label: 'extrém korai' },
  { max:  3, key: 'moderate_early', label: 'mérsékelten korai' },
  { max:  4, key: 'slight_early',   label: 'enyhén korai' },
  { max:  5, key: 'normal',         label: 'normál' },
  { max:  6, key: 'slight_late',    label: 'enyhén kései' },
  { max:  7, key: 'moderate_late',  label: 'mérsékelten kései' },
  { max: 99, key: 'extreme_late',   label: 'extrém kései' },
];
function categorizeMSFsc7(msfsc) {
  return MSFSC_7.find(c => msfsc < c.max);
}
```

### 7.4 Életkor-korrigált besorolás

```js
/**
 * Fischer et al. (2017), PLOS ONE 12(6):e0178782 — ATUS, N = 53 689.
 * FIGYELEM: ezek MSF_We (nyers hétvégi alvásközép) értékek, NEM MSFsc.
 * Relatív (percentilis) besorolásra használd, ne abszolút MSFsc-referenciának.
 * [alsóKorhatár, nőÁtlag_h, nőSD_h, férfiÁtlag_h, férfiSD_h, összÁtlag_h, összSD_h]
 */
const MSF_NORMS = [
  [15, 4.33, 1.91, 4.48, 2.02, 4.40, 1.98],
  [20, 4.30, 2.30, 4.53, 2.61, 4.41, 2.53],
  [25, 3.74, 1.89, 3.93, 2.43, 3.84, 2.28],
  [30, 3.42, 1.88, 3.70, 2.17, 3.56, 2.10],
  [35, 3.35, 1.93, 3.40, 2.10, 3.37, 2.03],
  [40, 3.29, 1.81, 3.25, 2.18, 3.27, 2.03],
  [45, 3.25, 2.03, 3.14, 1.95, 3.20, 2.01],
  [50, 3.17, 1.92, 3.06, 2.00, 3.12, 1.97],
  [55, 3.15, 1.75, 2.92, 1.87, 3.04, 1.84],
  [60, 3.08, 1.69, 2.86, 1.73, 2.97, 1.73],
  [65, 3.06, 1.71, 2.79, 1.68, 2.93, 1.71],
  [70, 3.03, 1.75, 2.74, 1.68, 2.90, 1.76],
  [75, 2.87, 1.63, 2.88, 1.67, 2.87, 1.68],
  [80, 2.87, 1.89, 2.77, 1.57, 2.83, 1.77],
];

/** @param {'female'|'male'|'other'} sex */
function normFor(age, sex) {
  const a = Math.max(15, Math.min(89, age));
  let row = MSF_NORMS[0];
  for (const r of MSF_NORMS) if (a >= r[0]) row = r;
  if (sex === 'female') return { mean: row[1], sd: row[2] };
  if (sex === 'male')   return { mean: row[3], sd: row[4] };
  return                       { mean: row[5], sd: row[6] };
}

/** Standard normális eloszlásfüggvény (Abramowitz–Stegun 7.1.26 alapú erf-közelítés). */
function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  const p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 +
            t * (-1.821255978 + t * 1.330274429))));
  return z >= 0 ? 1 - p : p;
}

/**
 * Életkorra és nemre korrigált kronotípus.
 * z > 0  = a saját korcsoportjához képest KÉSEI
 * z < 0  = a saját korcsoportjához képest KORAI
 */
function ageAdjustedChronotype(msfsc, age, sex) {
  const { mean, sd } = normFor(age, sex);
  const z = (msfsc - mean) / sd;
  const pct = Math.round(normalCdf(z) * 1000) / 10;   // percentilis, 0,1 pontossággal

  let label;
  if      (z < -1.5) label = 'extrém korai (a korosztályához képest)';
  else if (z < -0.5) label = 'korai';
  else if (z <=  0.5) label = 'átlagos';
  else if (z <=  1.5) label = 'kései';
  else                label = 'extrém kései (a korosztályához képest)';

  return {
    z: Math.round(z * 100) / 100,
    percentile: pct,
    groupMean: mean,
    groupMeanHM: toHM(mean),
    label,
    // "Nyers" (nem korrigált) besorolás összehasonlításul:
    absolute: categorizeMSFsc7(msfsc),
  };
}
```

### 7.5 Teljes pipeline — egy hívás

```js
function assessChronotype({ rmeqAnswers, mctq, age, sex }) {
  const out = { age, sex };

  if (rmeqAnswers) {
    const s = scoreRMEQ(rmeqAnswers);
    out.rMEQ = {
      score: s,                            // 4..25
      category3: categorizeRMEQ3(s),
      category5: categorizeRMEQ5(s),
      approxMEQ: rmeqToApproxMEQ(s),       // 16..86, közelítés
    };
  }

  if (mctq) {
    const m = computeMCTQ(mctq);
    out.mctq = {
      ...m,
      MSFsc_hm: toHM(m.MSFsc),
      MSF_hm:   toHM(m.MSF),
      MSW_hm:   toHM(m.MSW),
      category3: categorizeMSFsc3(m.MSFsc),
      category7: categorizeMSFsc7(m.MSFsc),
      ageAdjusted: (age != null) ? ageAdjustedChronotype(m.MSFsc, age, sex) : null,
      dlmo: estimateDLMO({ msfsc: m.MSFsc, so_f: m.SO_F, meq: out.rMEQ?.approxMEQ }),
    };
  }

  // Konzisztencia-ellenőrzés a két mérőeszköz között
  if (out.rMEQ && out.mctq) {
    const expectedLate = out.rMEQ.score <= 11;
    const measuredLate = out.mctq.MSFsc >= 5;
    out.agreement = (expectedLate === measuredLate)
      ? 'A preferencia és a tényleges alvásidőzítés egybevág.'
      : 'A preferencia és a tényleges alvásidőzítés eltér — ez gyakran munkarendi kényszerre utal (nézd meg a szociális jetlag értékét).';
  }

  return out;
}
```

*(Az `estimateDLMO()` az [5. fejezetben](#5-dlmo-becslése-kérdőívből) van definiálva.)*

### 7.6 Amit NE csinálj — implementációs csapdák ⚠️

| Csapda | Miért baj | Megoldás |
|---|---|---|
| Az idők aritmetikai (nem körkörös) kezelése | 23:30 → 06:30 „−17 óra" lesz | `circDiff()` mindenhol |
| Az MSF<sub>sc</sub> korrekció feltétel nélküli alkalmazása | akinél `SD_F < SD_W`, annál **hibás irányba** tolja a becslést | `if (SD_F > SD_W)` |
| `BT` (ágyba kerülés) használata `SPrep` helyett | 1–2 órás szisztematikus hiba | mindig `SPrep + SLat` |
| A szabadnapi ébresztőórás esetek beszámítása | levágott `SE_F` → hamisan korai MSF<sub>sc</sub> | kizárás vagy figyelmeztetés |
| A 19. tétel legalsó válaszára 1 pont | a 4–25 / 16–86 tartomány és a vágópontok elcsúsznak | **0 pont** |
| Az abszolút MSF<sub>sc</sub>-kategóriák életkor nélküli használata | egy 17 éves „kései" besorolása félrevezető | mindig mutasd a z-score-t is |
| Kronotípusok átlagolása közönséges számtani átlaggal | éjfél körül teljesen hibás | `circMean()` |
| A MEQ-pontból cirkadián fázist számolni | r ≈ −0,25…−0,40 a DLMO-val | csak MCTQ-alapú fázisbecslés |

---

## 8. Licencek és szerzői jog

> ⚠️ **Ez a fejezet tájékoztató jellegű, nem jogi tanács.** Éles, kereskedelmi app indítása előtt a jogtulajdonosokkal közvetlenül kell egyeztetni. Kapcsolódó anyag: [12-tudomany-jog-piac.md](12-tudomany-jog-piac.md).

### 8.1 MEQ / rMEQ ⚠️

| Kérdés | Állapot |
|---|---|
| Eredeti jogtulajdonos | **Gordon & Breach, Science Publishers Ltd. (1976)** — az *International Journal of Chronobiology* kiadója; a jogutód ma a **Taylor & Francis** csoport |
| Szabadon használható-e? | ⚠️ **Nem egyértelműen.** A MEQ-t a gyakorlatban tömegesen használják kutatásban engedélykérés nélkül, de **a szöveg formálisan szerzői jogi védelem alatt áll**. |
| MEQ-SA (Terman-változat) | A New York State Psychiatric Institute készítette Horne és Östberg **engedélyével**; szabadon letölthető a [cet.org](https://cet.org)-ról, és NIH-támogatásból (MH42931) készült. A letöltés/használat feltételeit a CET oldala szabályozza. |
| **Kereskedelmi használat** | ⚠️ **Külön engedélyt igényel.** Ez a legkockázatosabb pont egy fizetős app számára. |
| Fordítás | A fordítás **származékos mű** → önmagában is engedélyköteles. Validált fordítás készítése külön kutatási munka. |
| Automatizált változat | Létezik hivatalos **AutoMEQ** a cet.org-on — ha az app csak *hivatkozik* rá, az jogilag tiszta. |

🔧 **Ajánlott lépések egy magyar apphoz:**
1. Írásos engedélykérés a **Taylor & Francis** jogosítási osztályához (permissions) az eredeti tételekre.
2. Párhuzamosan a **CET (cet.org)** megkeresése a MEQ-SA formátumra.
3. **Vagy** — a legbiztonságosabb út — **ne a MEQ-t használd, hanem az MCTQ-t** (lásd lent), és az „reggeli/esti típus" címkét az MSF<sub>sc</sub>-ből származtasd. Az MCTQ-nak nincs védett tételszövege, mert **nem skála, hanem időadat-kérdéssor** — „hánykor fekszel le?" jellegű kérdések nem képezhetik szerzői jog tárgyát.

### 8.2 MCTQ 📗

| Kérdés | Állapot |
|---|---|
| Fejlesztő | **Till Roenneberg & Martha Merrow**, LMU München, 2002 |
| Kutatási használat | ⚠️ A szerzők nyilvánosan terjesztik és széles körben engedélyezik, de **a hivatalos út: regisztráció / kapcsolatfelvétel** a fejlesztőkkel (a korábbi `thewep.org` oldal ma nem érhető el; a projekt a **Chronsulting / LMU Institute of Medical Psychology** felé költözött). |
| Adatvisszaküldés | A klasszikus modell: aki használja, **visszaküldi az anonimizált adatokat** a müncheni adatbázisba. Ez informális elvárás, nem szerződéses. |
| Kereskedelmi használat | ⚠️ **Külön egyeztetést igényel** — a `Chronsulting` cég létezése arra utal, hogy a kereskedelmi hasznosítást a szerzők maguk kezelik. |
| Nyílt implementáció | 📗 Az **`mctq` R-csomag** (rOpenSci, Daniel Vartanian) **MIT licenc alatt** implementálja az összes képletet — a *számítási logika* tehát szabadon átvehető: [docs.ropensci.org/mctq](https://docs.ropensci.org/mctq/) |

> 📗 **Kulcsérv az MCTQ mellett:** a képletek (MSF<sub>sc</sub>, SJL, SD<sub>week</sub>) **publikált tudományos eredmények, nem védett tartalom** — matematikai eljárás szerzői joggal nem védhető. A kérdések pedig triviális ténykérdések. Ez az MCTQ-t **jogilag lényegesen biztonságosabb választássá teszi egy kereskedelmi appban**, mint a MEQ-t.

### 8.3 🔧 A javasolt jogilag tiszta konfiguráció

```
1. MCTQ-stílusú időkérdések (saját megfogalmazásban)  →  MSFsc, SJL, SDweek
2. Egy 7 fokozatú önbesorolási kérdés (saját szöveg)   →  gyors, erős prediktor (r ≈ 0,80)
3. Az eredmények megjelenítése MSFsc-ből származtatva  →  „bagoly/pacsirta" címke
4. Hivatkozás a MEQ-re mint alternatívára, link a cet.org-ra — de a tételek átvétele nélkül
```

Ezzel a MEQ szerzői jogi kockázata teljesen elkerülhető, miközben a mérés **biológiailag jobb** (magasabb DLMO-korreláció).

---

## 9. Források

### Elsődleges kérdőív-publikációk

- **Horne JA & Östberg O (1976).** A self-assessment questionnaire to determine morningness-eveningness in human circadian rhythms. *International Journal of Chronobiology* 4(2): 97–110. — [PubMed](https://pubmed.ncbi.nlm.nih.gov/1027738/)
- **Adan A & Almirall H (1991).** Horne & Östberg morningness-eveningness questionnaire: a reduced scale. *Personality and Individual Differences* 12(3): 241–253. — [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/019188699190110W)
- **Terman M, Rifkin JB, Jacobs J & White TM (2001).** *Morningness-Eveningness Questionnaire, Self-Assessment Version (MEQ-SA).* New York State Psychiatric Institute. — [PDF (cet.org, 2019-es változat)](https://cet.org/wp-content/uploads/2019/12/MEQ-SA-2019.pdf)
- **Roenneberg T, Wirz-Justice A & Merrow M (2003).** Life between clocks: daily temporal patterns of human chronotypes. *Journal of Biological Rhythms* 18(1): 80–90. — [PubMed](https://pubmed.ncbi.nlm.nih.gov/12568247/)
- **Zavada A, Gordijn MCM, Beersma DGM, Daan S & Roenneberg T (2005).** Comparison of the Munich Chronotype Questionnaire with the Horne-Östberg's Morningness-Eveningness Score. *Chronobiology International* 22(2): 267–278. — [PubMed](https://pubmed.ncbi.nlm.nih.gov/16021843/)
- **Juda M, Vetter C & Roenneberg T (2013).** The Munich ChronoType Questionnaire for Shift-Workers (MCTQ^Shift). *Journal of Biological Rhythms* 28(2): 130–140. — [SAGE](https://journals.sagepub.com/doi/10.1177/0748730412475041)
- **Ghotbi N, Pilz LK, Winnebeck EC, Vetter C, Zerbini G, Lenssen D, Frighetto G, Salamanca M, Costa R, Montagnese S & Roenneberg T (2020).** The µMCTQ: An Ultra-Short Version of the Munich ChronoType Questionnaire. *Journal of Biological Rhythms* 35(1): 98–110. — [SAGE](https://journals.sagepub.com/doi/10.1177/0748730419886986)

### Normák, eloszlások, életkor

- **Roenneberg T, Kuehnle T, Pramstaller PP, Ricken J, Havel M, Guth A & Merrow M (2004).** A marker for the end of adolescence. *Current Biology* 14(24): R1038–R1039. — [PDF](https://cet.org/wp-content/uploads/2017/10/Roenneberg-2004-CB.pdf)
- **Roenneberg T, Kumar CJ & Merrow M (2007).** The human circadian clock entrains to sun time. / *Epidemiology of the human circadian clock.* Sleep Medicine Reviews 11(6): 429–438. — [PDF](https://longevity.stanford.edu/wp-content/uploads/sites/2/2016/04/2007SleepMedRevRoenneberg.pdf)
- **Fischer D, Lombardi DA, Marucci-Wellman H & Roenneberg T (2017).** Chronotypes in the US — influence of age and sex. *PLOS ONE* 12(6): e0178782. — [PLOS ONE (nyílt hozzáférés, Table 1 = a korévenkénti norma)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0178782)
- **Roenneberg T, Pilz LK, Zerbini G & Winnebeck EC (2019).** Chronotype and Social Jetlag: A (Self-)Critical Review. *Biology* 8(3): 54. — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6784249/)

### Szociális jetlag

- **Wittmann M, Dinich J, Merrow M & Roenneberg T (2006).** Social jetlag: misalignment of biological and social time. *Chronobiology International* 23(1–2): 497–509. — [PubMed](https://pubmed.ncbi.nlm.nih.gov/16687322/)
- **Jankowski KS (2017).** Social jet lag: sleep-corrected formula. *Chronobiology International* 34(4): 531–535. — [PubMed](https://pubmed.ncbi.nlm.nih.gov/28318321/) · [képlet-implementáció](https://docs.ropensci.org/mctq/reference/sjl_sc.html)

### Validáció, pszichometria, DLMO

- **Kantermann T, Sung H & Burgess HJ (2015).** Comparing the Morningness-Eveningness Questionnaire and Munich ChronoType Questionnaire to the Dim Light Melatonin Onset. *Journal of Biological Rhythms* 30(5): 449–453. — [SAGE](https://journals.sagepub.com/doi/full/10.1177/0748730415597520)
- **Reis C, Madeira SG, Lopes LV, Paiva T & Roenneberg T (2021).** Concordance of Chronotype Categorisations Based on Dim Light Melatonin Onset, the Morningness-Eveningness Questionnaire, and the Munich Chronotype Questionnaire. *Clocks & Sleep* 3(2): 249–265. — [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8293076/)
- **Rodrigues PFS et al. (2020).** Validation of the Portuguese Variant of the Munich Chronotype Questionnaire (MCTQ^PT). *Frontiers in Physiology* 11: 795. — [Frontiers](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2020.00795/full)
- **Danielsson K, Sakarya A & Jansson-Fröjmark M (2019).** The reduced Morningness–Eveningness Questionnaire: Psychometric properties and related factors in a young Swedish population. *Chronobiology International* 36(4): 530–540. — [Taylor & Francis](https://www.tandfonline.com/doi/full/10.1080/07420528.2018.1564322)
- **Randler C, Díaz-Morales JF & Jankowski KS (2013).** German version of the reduced Morningness–Eveningness Questionnaire (rMEQ). *Biological Rhythm Research* 44(5): 730–736. — [Taylor & Francis](https://www.tandfonline.com/doi/abs/10.1080/09291016.2012.739930)
- **Chung S & Youn S (2020).** Psychometric Properties of Questionnaires for Assessing Chronotype. *Chronobiology in Medicine* 2(1): 6–9. — [Nyílt hozzáférés](https://www.chronobiologyinmedicine.org/journal/view.php?doi=10.33069/cim.2020.0003)

### Fényterápia-időzítés

- **Terman M & Terman JS (2005).** Light therapy for seasonal and nonseasonal depression: efficacy, protocol, safety, and side effects. *CNS Spectrums* 10(8): 647–663. — [cet.org](https://cet.org)

### Implementáció

- **`mctq` R-csomag** (rOpenSci, Daniel Vartanian) — az összes MCTQ-képlet MIT licenc alatt. — [docs.ropensci.org/mctq](https://docs.ropensci.org/mctq/)

### Kapcsolódó dokumentumok ebben a projektben

- [03-kronobiologia.md](03-kronobiologia.md) — a terület fogalmi áttekintése
- [15-kronobiologia-modellek.md](15-kronobiologia-modellek.md) — a két-folyamat modell, oszcillátorok, fázismarkerek matematikája
- [12-tudomany-jog-piac.md](12-tudomany-jog-piac.md) — jogi és piaci megfontolások
