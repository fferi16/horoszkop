# Kronobiológia II. — Születési adatok, fény és gyakorlati időzítés

> **A dokumentum célja:** a Horoszkóp-projekt kronobiológiai ágának *evidencia-audit*ja. Két kérdésre keres választ konkrét számokkal:
> **(A)** Mit tud valóban kimutatni a tudomány a **születés időpontjából** (évszak, fotoperiódus, óra) a későbbi belső órára nézve?
> **(B)** Mi az a **fény- és időzítés-tudás**, ami *tényleg implementálható* egy appban?
>
> **Vezérelv:** minden állításnál szerepel a **hatásméret** és a **mintanagyság**. Ahol az evidencia nulla vagy gyenge, azt a dokumentum kimondja. Az app hitelessége nem azon áll, hogy sokat állít, hanem hogy amit állít, az igaz.
>
> **Kapcsolódó dokumentum:** `03-kronobiologia.md` (alapfogalmak, kronotípusok, teljesítménygörbék, bioritmus-cáfolat). Ez a dokumentum azt mélyíti el és részben korrigálja.

---

## Tartalom

**A) A születés időpontja és a belső óra**
1. [Születési évszak és kronotípus — a fő kérdés](#1-születési-évszak-és-kronotípus)
2. [Perinatális fotoperiódus-programozás](#2-perinatális-fotoperiódus-programozás)
3. [Születési évszak és egyéb kimenetek](#3-születési-évszak-és-egyéb-kimenetek)
4. [A születés órája — van-e bármi?](#4-a-születés-órája)
5. [A szülés napszaki eloszlása](#5-a-szülés-napszaki-eloszlása)
6. [Az újszülött cirkadián rendszerének kialakulása](#6-az-újszülött-cirkadián-rendszerének-kialakulása)

**B) Fény és gyakorlati időzítés**

7. [A fény fázisválasz-görbéje (PRC)](#7-a-fény-fázisválasz-görbéje-prc)
8. [Fényintenzitás-küszöbök, melanopikus EDI](#8-fényintenzitás-küszöbök-és-melanopikus-edi)
9. [Melatonin mint kronobiotikum](#9-melatonin-mint-kronobiotikum)
10. [Krono-táplálkozás](#10-krono-táplálkozás)
11. [Mozgás mint zeitgeber](#11-mozgás-mint-zeitgeber)
12. [Kronofarmakológia](#12-kronofarmakológia)
13. [Szociális jetlag és műszakos munka](#13-szociális-jetlag-és-műszakos-munka)

**C) Implementáció**

14. [Implementációs összefoglaló — mit szabad állítani](#14-implementációs-összefoglaló)
15. [Források](#15-források)

---

## Hogyan olvasd a hatásméreteket?

Mielőtt bármelyik számot értelmeznéd, rögzítsük a mértékegységeket — ez a dokumentum legfontosabb bekezdése.

| Mérték | Mit jelent | Konvencionális küszöbök | Egyéni szintű használhatóság |
|---|---|---|---|
| **Cohen-féle *d*** | két csoport átlagkülönbsége szórásegységben | 0,2 = kicsi, 0,5 = közepes, 0,8 = nagy | *d* < 0,2 alatt az átlagos egyén szinte biztosan „rossz oldalon" van |
| **Korreláció (*r*, sztenderdizált *β*)** | együttjárás erőssége | 0,1 = kicsi, 0,3 = közepes, 0,5 = nagy | *r* = 0,07 → a variancia **0,5%-a** magyarázott |
| **Esélyhányados (OR) / relatív kockázat (RR)** | kockázat szorzója | 1,1 = 10%-os relatív többlet | OR 1,1 mellett az egyéni előrejelzés gyakorlatilag lehetetlen |
| **Percben kifejezett eltolás** | pl. alvásközéppont különbsége | — | az egyéni nap-nap közti ingadozás önmagában ±40–60 perc |

**A kulcsszabály:** egy *csoportátlagra* vonatkozó szignifikáns eltérés **nem** jelent egyéni előrejelezhetőséget. Ha egy hatás *r* = 0,07, akkor két véletlenszerűen kiválasztott ember közül a „jósolt" irányba mutató különbség kb. **52%-os** valószínűséggel jön be — vagyis alig jobb, mint a pénzfeldobás. Ez pontosan az a helyzet, amiben a születési évszak és a kronotípus kapcsolata van.

---

# A) A SZÜLETÉS IDŐPONTJA ÉS A BELSŐ ÓRA

## 1. Születési évszak és kronotípus

### 1.1 A hipotézis

**Natale és Adan (1999)** vetette fel: ha a perinatális fényviszonyok „belenyomódnak" a fejlődő órába, akkor a **csökkenő fotoperiódusban** (ősz–tél) születettek inkább **reggeli típusok**, a **növekvő fotoperiódusban** (tavasz–nyár) születettek inkább **esti típusok** lesznek.

Ez elegáns, mechanisztikusan is védhető hipotézis — az állatkísérletes háttér valós (lásd 2. fejezet). A kérdés csak az, **mekkora** a hatás emberben.

### 1.2 Az eredeti vizsgálat

**Natale V, Adan A (1999): Season of birth modulates morningness–eveningness preference in humans.** *Neuroscience Letters* 274(2):139–141.

| Paraméter | Érték |
|---|---|
| Minta | **N = 1 584** olasz egyetemista |
| Eszköz | Horne–Östberg MEQ |
| Eredmény | Több reggeli típus az **ősszel/télen** születettek közt; több esti típus a **tavasszal/nyáron** születettek közt |
| Hatásméret | Az eredeti közleményben **nem közölnek** standardizált hatásméretet — ez maga is problémás |

A szerzők értelmezése: a születéskori **csökkenő** nappalhossz fázissietést (reggeli típus), a **növekvő** nappalhossz fáziskésést (esti típus) kedvez.

### 1.3 A legjobb minőségű replikáció — és itt derül ki a hatás valódi mérete

**Natale V, Adan A, Fabbri M (2009): Season of birth, gender, and social-cultural effects on sleep timing preferences in humans.** *Sleep* 32(3):423–426. (PMC2647797)

Ez a **legfontosabb egyetlen adat** az egész kérdésben, mert nagy minta + két ország + a versenyző prediktorok együttes modellezése.

| Paraméter | Érték |
|---|---|
| Minta | **N = 5 720** egyetemista (3 851 olasz + 1 869 spanyol); 3 877 nő, 1 843 férfi; átlagéletkor 22,2 ± 3,0 év |

**Eredmények:**

| Kimenet | Születési évszak *β* | *p* | Nyers különbség |
|---|---|---|---|
| Preferált **elalvási idő** | **β = 0,06** | < 0,00001 | a május/június/augusztusi születésűek kb. **18 perccel később** fekszenek le, mint a december/január/februáriak |
| **Alvásközéppont** | **β = 0,07** | < 0,00001 | kb. **17–18 perc** különbség (június/augusztus vs. október–február) |
| **Alvás hossza** | β = 0,01 | 0,45 | **nincs hatás** |

**A döntő összehasonlítás — ugyanabban a modellben:**

| Prediktor | Elalvás *β* | Alvásközéppont *β* |
|---|---|---|
| **Születési évszak** | 0,06 | **0,07** |
| **Nem** | 0,19 | 0,12 |
| **Nemzetiség (olasz vs. spanyol)** | 0,18 | **0,19** |

> **Ez a bekezdés az egész dokumentum lényege:** hogy valaki **olasz vagy spanyol**, az **háromszor erősebben** jelzi előre az alvásidőzítését, mint hogy melyik évszakban született. A „kulturális vacsoraidő" legyőzi a perinatális fotoperiódust. Egy *β* = 0,07 azt jelenti, hogy a születési évszak az alvásközéppont varianciájának kb. **0,5%-át** magyarázza — vagyis **99,5%-át nem**.

### 1.4 További replikációk

**Vollmer C, Randler C, Di Milia L (2012): Further evidence for the influence of photoperiod at birth on chronotype in a sample of German adolescents.** *Chronobiology International* 29(10):1345–1351.

- **N = 2 905** német serdülő, 6 egymást követő évjárat.
- A **növekvő fotoperiódusban** (február–április) születettek szignifikánsan **későbbi** korrigált alvásközéppontot (MSFsc) mutattak, mint a **csökkenő fotoperiódusban** (augusztus–október) születettek. Ugyanez a Composite Scale of Morningness (CSM) pontszámon.
- Mindkét kronotípus-mérték **szignifikáns kvadratikus (koszinusz) függvényt** követett az éves cikluson.
- **Kritikus részlet:** a CSM-ből illesztett koszinusz **amplitúdója az életkorral gyengült** — ami vagy a hatás „kikopását", vagy a serdülőkori fejlődés zaját jelzi.
- A szerzők maguk is kimondják: a hatás **kicsi marad**.

**Tonetti L és mtsai (2011): Season of birth and sleep-timing preferences in adolescents.** *Chronobiology International.*
- **N = 1 912** serdülő (10–17 év), MEQ-CA.
- Az ősszel/télen születettek inkább reggeli típusúak — irányában konzisztens az eredetivel, **de kicsi**.

**Natale V és mtsai (2011): Season of Birth and Morningness: Comparison Between the Northern and Southern Hemispheres.**
- Olasz és ausztrál minta összehasonlítása. Mivel a déli féltekén az évszakok fordítottak, ha a hatás **naptári hónaphoz** kötődne, a mintázatnak meg kellene fordulnia — ha viszont **fotoperiódushoz**, akkor a fotoperiódus szerint kellene egyeznie.
- Az eredmények a **fotoperiódus-hipotézissel** összhangban voltak. Ez a legerősebb *mechanisztikus* érv a hatás valódisága mellett.

### 1.5 Null-eredmények és a hatás eltűnése

| Vizsgálat | Minta | Eredmény |
|---|---|---|
| **Japán, Kochi (33°É)** — Effect of birth season on circadian typology... *Chronobiology International* 28(7), 2011 | 2–12 éves gyerekek **és** 18–25 éves egyetemisták | A születési évszak hatása a **gyerekeknél kimutatható**, de a **18–25 éveseknél eltűnik**. |
| Longitudinális gyermekvizsgálat (Natale 2009 idézi) | **N = 1 112** gyerek | Az alvás–ébrenlét beosztás **nem függött** a születési évszaktól. |
| **Alacsony földrajzi szélesség** általában | — | Ahol a fotoperiódus éves ingadozása kicsi (trópusok), ott hatás sem várható és nem is találtak. |

**Mit jelent, hogy a hatás gyerekeknél megvan, felnőtteknél nincs?** Két értelmezés lehetséges:
1. **Valódi, de átmeneti imprint**, amit a serdülőkori hormonális átrendeződés és a szociális kényszerek (iskola, munka, képernyő) elmosnak.
2. **A gyermekkori „hatás" is részben a *relatív életkor-effektus***: az azonos osztályba járó, de eltérő hónapban született gyerekek fejlődési fáziseltolódása, nem pedig a fotoperiódus.

A kettőt a meglévő adatok **nem választják szét**.

### 1.6 A legnagyobb minta: UK Biobank — és a legkínosabb eredmény

**Lewis P és mtsai: Perinatal photoperiod associations with diabetes and chronotype prevalence in a cross-sectional study of the UK Biobank.** *Chronobiology International.*

- **N = 460 761** — messze a legnagyobb minta a témában.
- Módszer: az egyéni születési időpont + földrajzi szélesség alapján kiszámolták a **3. trimeszter** és az **első 3 hónap** fotoperiódus-jellemzőit.
- Három csoport: **NEP** (csak nem-szélsőséges fotoperiódus, 8–16 óra), **ESP** (volt <8 órás nappal), **ELP** (volt >16 órás nappal).

**Eredmény a NEP-csoportban** (a 3. trimeszter „relatív fotoperiódus-terjedelme" növekedésére):

| Kimenet | OR | 95% CI |
|---|---|---|
| **„Reggeli" kronotípus** esélye | **1,20** | 1,02–1,41 |
| **„Esti" kronotípus** esélye | **1,43** | 1,21–1,69 |

> **Olvasd el ezt kétszer.** Ugyanaz az expozíció **egyszerre növelte** a reggeli **és** az esti típus esélyét. Ez nem egy irányba tolja az órát — ez a **szélsőségesség** felé tolja, ami a legegyszerűbben úgy magyarázható, hogy a „közepes" kategória felől szóródnak szét az emberek, azaz **zaj**. A hatás az ESP- és ELP-csoportban **nem jelentkezett**, ami a dózis-hatás logikának is ellentmond (a szélsőségesebb fotoperiódusnál kellene erősebbnek lennie).
>
> A szerzők maguk is „nem-lineáris dózis-válasszal" **vagy** a mesterséges világítás okozta **konfundálással** magyarázzák. Egy 460 ezres mintán, ahol a legnagyobb erő van a hatás kimutatására, ez a mintázat **nem támogatja** a tiszta fotoperiódus-imprint hipotézist emberben.

Egy másik UK Biobank-elemzés (**Seasonality and season of birth effect in the UK Biobank cohort**, 2020, PMID 32222094) hasonlóan vegyes eredményt hozott, és megerősítette az **évszakos önbevallási torzítást**: az emberek nyáron rövidebb alvásról, könnyebb ébredésről és **korábbi kronotípusról** számolnak be, mint télen — vagyis a kronotípus-kérdőív válasza már önmagában is évszakfüggő, ami minden keresztmetszeti születési-évszak vizsgálatot szennyez.

### 1.7 Kalibráció: mihez képest kicsi ez?

| Prediktor | Hatás az alvásidőzítésre |
|---|---|
| **Genetika (ikervizsgálatok öröklődhetőség)** | **40–50%** a varianciából |
| Közös SNP-öröklődhetőség (GWAS) | ~14% |
| Életkor (20 és 60 év között) | **1–2 óra** |
| Nem (férfi vs. nő, fiatal felnőttkorban) | ~20–30 perc |
| Nemzetiség/kultúra (olasz vs. spanyol) | *β* = 0,19 |
| **Születési évszak** | ***β* = 0,07 ≈ a variancia 0,5%-a ≈ max. 18 perc** |

A genetikai háttér is monumentális mintákon nyugszik: **Jones SE és mtsai (2019), Nature Communications 10:343** — GWAS **N = 697 828** egyénen, 351 lókusz a reggeli típusra.

### 1.8 Verdikt (A/1)

> **A születési évszak és a kronotípus közti összefüggés valószínűleg VALÓDI, de OLYAN KICSI, hogy egyéni szinten értelmezhetetlen.**
>
> - **Irány:** tavasz/nyár (növekvő fotoperiódus) → kissé későbbi típus; ősz/tél (csökkenő fotoperiódus) → kissé korábbi típus.
> - **Nagyság:** legjobb becslés **legfeljebb 15–18 perc** csoportátlag-különbség, *β* ≈ 0,06–0,07.
> - **Egyéni szintű használhatóság: NULLA.** Két random ember összehasonlításában ez ~52%-os találati arányt ad — a pénzfeldobás szintje.
> - A legnagyobb mintán (UK Biobank, N = 460 761) a mintázat **inkoherens** volt.
>
> **Appban:** ismeretterjesztésként bemutatható, **jóslatként soha**. Sosem szabad azt írni, hogy „mivel júliusban születtél, esti típus vagy". A kronotípust **meg kell kérdezni** (MEQ/MCTQ), nem a születési dátumból számolni.

---

## 2. Perinatális fotoperiódus-programozás

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 3. Születési évszak és egyéb kimenetek

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 4. A születés órája

### 4.1 Az egyértelmű válasz

> **NINCS tudományos bizonyíték arra, hogy a születés napszaka (órája) előrejelezné a későbbi kronotípust vagy bármely cirkadián paramétert.**

Ez nem „gyenge evidencia" — ez **hiányzó evidencia**. Célzott irodalomkeresés a következő kifejezésekre: *„time of birth" / „hour of birth" / „clock time of birth" + chronotype / circadian preference / diurnal preference* — **egyetlen** olyan vizsgálatot sem hoz elő, amely ezt a kérdést vizsgálta volna. A találatok kivétel nélkül más témák:
- születési **évszak** és kronotípus (1. fejezet),
- **koraszülöttség** és kronotípus (lásd lent),
- a **szülés napszaki eloszlása** mint szülészeti jelenség (5. fejezet).

### 4.2 Miért nem is várható ilyen hatás? — mechanisztikus érv

Négy egymástól független ok:

1. **Az újszülöttnek nincs működő cirkadián kimenete.** A saját melatonin- és testhőmérséklet-ritmus a születés után **hetekkel–hónapokkal** jelenik meg (6. fejezet). Nincs mit „beállítani" a születés pillanatában.
2. **A magzati SCN-t az anyai jelek szinkronizálják**, nem a saját fényérzékelése — és az anyai jel **napokon–heteken** átlagolt fázis, nem egy pillanatnyi óraállás.
3. **A méhen belül nincs releváns fény.** A hasfalon átjutó fény nagyságrendekkel a küszöb alatt van, és a szülés pillanatában sem lép működésbe fotikus beállítás.
4. **A szülőszoba nem napszakfüggő fényforrás.** A modern kórházi szülészeten hajnali 3-kor és délben ugyanaz a mesterséges világítás — a „napszak" mint fényinger a születéskor gyakorlatilag **kioltódik**.

### 4.3 Amit viszont a születés körülményeiről *lehet* mondani

**Koraszülöttség és kronotípus** — itt van adat:
- **Björkqvist J és mtsai (2018): Premature birth and circadian preference in young adulthood: evidence from two birth cohorts.** *Chronobiology International* (PMID 29381407).
- **N = 594** fiatal felnőtt két kohorszból; korai koraszülött / késői koraszülött / időre született csoportok; aktigráfia átlagosan 6,8 éjszakán át.
- A **koraszülöttek** összességében **korábbi** (reggelibb) preferenciát mutattak. Ez azonban a *gesztációs kor* hatása, nem az óráé, és külön változó — nem a születés napszaka.

### 4.4 Verdikt (A/4)

> **APP-KÖVETKEZMÉNY: a születés órájából számolt „kronotípus" vagy „belső óra fázis" mutatót TELJESEN EL KELL HAGYNI, vagy egyértelműen NEM-TUDOMÁNYOS (szimbolikus/asztrológiai) címkével kell ellátni.**
>
> A születés pontos ideje **legitim bemenet** az asztrológiai ágban (aszcendens, házak) — ott a felhasználó tudja, hogy szimbolikus rendszerről van szó. A **kronobiológiai** ágban viszont a születés órájának felhasználása **áltudományos állítás** lenne, és pontosan azt a hitelességet rombolná le, amiért a kronobiológiai modul egyáltalán bekerült az appba.
>
> Ha az app mégis meg akarja jeleníteni a születési órát a kronobiológiai fülön, az egyetlen védhető formátum: **tényközlés**, nem jóslat. Például: „Magyarországon a spontán szülések gyakorisága éjjel a legnagyobb — te [délután] születtél." Ez igaz, érdekes, és nem állít semmit a belső órádról.

---

## 5. A szülés napszaki eloszlása

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 6. Az újszülött cirkadián rendszerének kialakulása

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

# B) FÉNY ÉS GYAKORLATI IDŐZÍTÉS

## 7. A fény fázisválasz-görbéje (PRC)

### 7.1 Az alapfogalom

A **fázisválasz-görbe (phase response curve, PRC)** azt írja le, hogy **ugyanaz** a fényinger a belső óra **melyik fázisában** milyen irányú és mekkora eltolást okoz. Ez a kronobiológia legfontosabb *implementálható* fogalma: nélküle a „menj ki a napra" tanács iránytű nélküli.

**A referenciapont a testmaghőmérséklet minimuma (CBTmin, core body temperature minimum):**

| Ha a fény a CBTmin **ELŐTT** éri az embert | → **KÉSLELTETÉS** (phase delay) — az óra későbbre tolódik, később fogsz elálmosodni és később ébredni |
| --- | --- |
| Ha a fény a CBTmin **UTÁN** éri az embert | → **ELŐREHOZÁS** (phase advance) — az óra korábbra tolódik, korábban álmosodsz el és korábban ébredsz |

### 7.2 A humán referencia-PRC: Khalsa és mtsai (2003)

**Khalsa SBS, Jewett ME, Cajochen C, Czeisler CA (2003): A phase response curve to single bright light pulses in human subjects.** *The Journal of Physiology* 549(Pt 3):945–952. DOI: 10.1113/jphysiol.2003.040477

| Paraméter | Érték |
|---|---|
| **Minta** | **N = 21** egészséges, beállt ritmusú felnőtt |
| **Protokoll** | Fényinger előtt és után **konstans rutin** halvány fényben (~2–7 lux), folyamatos ébrenlét |
| **Fényinger** | **6,7 óra**; váltakozva 6 perc fixált tekintet (**~10 000 lux**) és 6 perc szabad tekintet (~5 000–9 000 lux) |
| **Fázismarker** | Melatonin (onset és offset) |

**Az eredmények — a számok, amiket ismerni kell:**

| Mérőszám | Érték |
|---|---|
| **Maximális fáziskésés** | **−3,60 óra** |
| **Maximális fázissietés** | **+2,01 óra** |
| **Csúcs-völgy amplitúdó** | **5,02 óra** |
| **Átfordulási pont (crossover)** | a **CBTmin**-nél (0 h cirkadián fázis); „viszonylag gyors átmenet a késésekből a sietésekbe" |
| **Görbetípus** | **1-es típus (type 1)** — gyenge visszaállítás, folytonos görbe |

**Az aszimmetria a legfontosabb gyakorlati tanulság:** a **késleltetés (−3,6 h) csaknem KÉTSZER akkora**, mint az előrehozás (+2,0 h). Ez összecseng azzal, hogy az emberi szabadonfutó periódus valamivel hosszabb 24 óránál (~24,2 h), tehát a rendszer „természetes hajlama" a késés. **Az órát későbbre tolni könnyű, korábbra hozni nehéz.** Minden gyakorlati tanács ebből következik.

### 7.3 A „holtzóna" — a tankönyvi állítás KORREKCIÓJA

Sok népszerűsítő anyag (és a projekt korábbi `03-kronobiologia.md` dokumentuma is) azt sugallja, hogy a nap közepén van egy **holtzóna (dead zone)**, ahol a fény nem tolja a fázist. **Khalsa és mtsai ezt NEM találták:**

> A vizsgálat kifejezetten rögzíti, hogy nincs bizonyíték szignifikáns holtzónára, és hogy „az emberi cirkadián pacemaker a szubjektív nap **teljes folyamán** érzékeny a fény által kiváltott visszaállításra."

Ezt megerősíti a Circadian Sleep Disorders Network összefoglalója is: **szignifikáns fázissietés még kora délutáni fénnyel is elérhető.**

**Mit jelent ez az appra?**
- ❌ **Nem szabad** azt írni, hogy „délelőtt 10 és délután 4 között a fény nem számít a belső órád szempontjából".
- ✅ **Szabad** azt írni, hogy „a nappali fény hatása **a nap közepén a legkisebb** (a görbe lapos szakasza), viszont ekkor a legerősebb az **éberségre és a hangulatra** gyakorolt közvetlen hatása — és a nappali fényterhelés az esti fényérzékenységet is csökkenti."

Az utolsó pont fontos és külön evidenciája van: a **nappali fényelőzmény** módosítja az esti fényérzékenységet (light history effect) — aki napközben sok fényt kap, annak este ugyanaz a lámpa kevésbé nyomja el a melatoninját.

### 7.4 Mekkora eltolás érhető el a valóságban?

Fontos szétválasztani a **laboratóriumi maximumot** a **napi gyakorlattól**:

| Beavatkozás | Eltolás |
|---|---|
| **3-ciklusú** intenzív laborprotokoll (Czeisler-műhely) | akár **+12 óra** (extrém, nem replikálható otthon) |
| Egyetlen **6,7 órás** 10 000 luxos inger (Khalsa) | max. **−3,6 / +2,0 óra** |
| **1 óra** fehér fény ébredéskor | ~**15 perc** sietés (a belső drift kompenzálása után ~45 perc „nettó nyereség") |
| **3 nap** reggeli kék fény | összesen ~**1 óra** sietés (~20 perc/nap) |
| **3 nap** 0,5 mg melatonin (optimális időzítéssel) | összesen ~**1,5 óra** sietés (~30 perc/nap) |

> **Realista várakozás az appban:** a belső óra napi **20–60 perccel** mozdítható el következetes beavatkozással. Egy 3 órás fáziseltolódás (pl. delayed sleep phase) korrigálása így **reálisan 4–7 nap**, nem egy éjszaka. Ezt az appnak ki kell mondania, különben a felhasználó kudarcélményt kap.

### 7.5 A CBTmin becslése — hogyan lesz ebből algoritmus

A CBTmin-t laboron kívül nem mérjük, de jól becsülhető a szokásos alvásidőből. A megbízható viszonyítási pontok:

| Reláció | Érték |
|---|---|
| **DLMO → elalvás** | az elalvás kb. **2–3 órával** a DLMO után |
| **DLMO → CBTmin** | a CBTmin kb. **7 órával** a DLMO után |
| **DLMO → ébredés** | az ébredés kb. **10–11 órával** a DLMO után |
| **⇒ CBTmin → ébredés** | a CBTmin kb. **2–4 órával** (tipikusan ~3 óra) az ébredés **előtt** |

**Implementálható becslés (beállt, rendszeres alvású felhasználónál):**

```
CBTmin ≈ szabadnapi_ébredési_idő − 3 óra
   (ekvivalens: CBTmin ≈ alvásközéppont + ~1 óra)
DLMO  ≈ CBTmin − 7 óra ≈ szokásos elalvás − 2 óra
```

**Fontos figyelmeztetés az implementációhoz:** ez a becslés **csak beállt ritmusnál** érvényes. Aki éppen műszakos, jetlagos, vagy nagyon szabálytalanul alszik, annál a képlet félrevisz — és épp az ilyen felhasználó kapná a legrosszabb tanácsot. Az appnak **szűrnie kell** ezekre az esetekre (pl. „mennyire szabályos az alvásod?" kérdéssel), és szabálytalanság esetén nem fázistoló tanácsot, hanem **ritmus-stabilizálási** tanácsot kell adnia.

### 7.6 A gyakorlati szabály — appba írható formában

**Ha KORÁBBRA akarod hozni az órád (esti típus, aki reggel nem bír felkelni):**

| Mit | Mikor | Miért |
|---|---|---|
| ✅ **Erős fény keresése** | Az **ébredés utáni első 1–2 órában** (azaz a CBTmin után) — lehetőleg kint | A PRC sietési ágán vagy |
| ❌ **Esti fény kerülése** | Az elalvás előtti **3 órában** | Ekkor még a késleltetési ágon vagy |
| ⚠️ **Vigyázat: a hajnali fény csapdája** | Ha valaki nagyon késői típus (pl. hajnali 4-kor alszik el), annál a „reggel 7 óra" még **a CBTmin ELŐTT** van → a reggeli fény **rontani** fog, nem javítani | A leggyakoribb gyakorlati hiba |

**Ha KÉSŐBBRE akarod tolni az órád (reggeli típus, aki este 8-kor elalszik; vagy nyugat felé utazol):**

| Mit | Mikor |
|---|---|
| ✅ Erős fény keresése | **Késő délután és este** |
| ❌ Fény kerülése | **Kora reggel** (napszemüveg ébredés után) |

**A „hajnali fény csapdája" számokkal.** Aki 04:00-kor alszik el és 12:00-kor ébred:
- alvásközéppont = 08:00 → **CBTmin ≈ 09:00**
- reggel 07:00-kor fényt kapva **2 órával a CBTmin előtt** van → **késleltetés**, a probléma **súlyosbodik**
- helyesen: a fényt **09:00 után**, fokozatosan egyre korábbra húzva kell adni

> Ez az egyetlen olyan pont, ahol egy rosszul megírt app **aktívan árthat**. Az algoritmusnak a felhasználó **tényleges** alvásidejéből kell dolgoznia, nem egy általános „reggel jó, este rossz" sablonból.

---

## 8. Fényintenzitás-küszöbök és melanopikus EDI

### 8.1 A dózis-válasz görbe: Zeitzer és mtsai (2000)

**Zeitzer JM, Dijk D-J, Kronauer RE, Brown EN, Czeisler CA (2000): Sensitivity of the human circadian pacemaker to nocturnal light: melatonin phase resetting and suppression.** *The Journal of Physiology* 526(Pt 3):695–702.

| Paraméter | Érték |
|---|---|
| Minta | **N = 23** egészséges fiatal (18–44 év) |
| Tesztelt tartomány | **3 – 9 100 lux** |
| Illesztett modell | **logisztikus** (nem lineáris!) |

| Válasz | Félmaximális dózis (ED50) | Telítés |
|---|---|---|
| **Fáziskésés** | **~80–160 lux** | **~550 lux** |
| **Melatonin-elnyomás** | **~50–130 lux** | **~200 lux** |

**A vizsgálat sokkoló mondata:** *az esti erős fényre (≈9 000 lux) adott maximális fáziskésési válasz **fele** elérhető ennek a fénynek a alig **1%-ával** — kb. **100 lux** halvány szobavilágítással.*

> **Ez a legfontosabb szám az esti fényhigiéniához.** Egy tipikus nappali lámpa alatt ülve gyakorlatilag a **maximális hatás felét** kapod. Nem kell 10 000 lux ahhoz, hogy elrontsd az estét — elég egy normál mennyezeti lámpa.

**A görbe alakjának két gyakorlati következménye:**
1. **Alul (0–100 lux) MEREDEK.** Itt minden lux sokat számít → **este a sötétítés nagyon megéri**, és az 50 luxról 10 luxra csökkentés érdemi nyereség.
2. **Felül (500 lux felett) LAPOS.** Itt már alig számít a többlet → **nappal** a 10 000 és a 20 000 lux közti különbség a fázisra kevés; viszont a *kevés* nappali fény (irodai 200–500 lux) **messze nem** ugyanaz, mint a szabadtéri.

### 8.2 Valós fényerősségek — a nagyságrendi táblázat

| Környezet | Fotopikus lux (nagyságrend) |
|---|---|
| Napos nyári dél, szabadban | 50 000 – 100 000 |
| Borult téli nap, szabadban | 1 000 – 5 000 |
| Ablak mellett, beltérben | 500 – 2 000 |
| **Tipikus iroda / tanterem** | **300 – 500 (vízszintes)** |
| Tipikus lakás este | **~30** (mért terepadat) |
| Gyertyafény / éjjeli lámpa | 1 – 10 |
| Holdfény | ~0,1 – 0,3 |

> **A civilizációs alapprobléma egyetlen mondatban:** a modern ember **nappal túl keveset** (irodai 300 lux ≪ szabadtéri 10 000+) és **este túl sokat** (30–100 lux ≫ 1 lux) kap. A cirkadián rendszer szempontjából ez a **kontraszt összeomlása** — nem az abszolút mennyiség, hanem a nappal/éjszaka **arány**.

### 8.3 A melanopszin és az ipRGC

- A retinában a pálcikákon és csapokon kívül léteznek **belsőleg fényérzékeny retinális ganglionsejtek (ipRGC)**, amelyek **melanopszin** fotopigmentet tartalmaznak, és a retinohipotalamikus pályán közvetlenül az SCN-be vetülnek.
- **Spektrális csúcsérzékenység: ~480 nm** (a szemlencse és a szemtörő közegek szűrése *előtt*); a szűrést figyelembe véve az effektív csúcs kb. **490 nm** — kék-cián tartomány.
- Ez az oka annak, hogy a **kék-gazdag** fény (hideg fehér LED, képernyők) cirkadián szempontból „erősebb", mint a fotopikus lux alapján várnád.

### 8.4 A melanopikus EDI — a helyes mértékegység

A **fotopikus lux** a *látás* (csapok) érzékenységi görbéjén alapul, ezért **rossz mérték** a cirkadián hatásra. A helyes mérték:

> **Melanopikus EDI (melanopic Equivalent Daylight Illuminance):** annak a **D65 szabvány nappali fénynek** a lux-értéke, amely ugyanakkora melanopszin-ingerlést váltana ki, mint a vizsgált fényforrás. Szabvány: **CIE S 026** (SI-kompatibilis metrológia az ipRGC által befolyásolt fényválaszokra).

**Melanopikus DER (Daylight Efficacy Ratio) — az átváltószorzó:**

| Fényforrás | Melanopikus DER (≈ melanopikus EDI / fotopikus lux) |
|---|---|
| **D65 nappali fény** | **1,00** (definíció szerint) |
| Hideg fehér LED (6 500 K) | **0,83** |
| Semleges/hűvös fehér (3 000–4 000 K) | ~0,4 – 0,6 |
| **Meleg fehér LED (2 700–3 000 K)** | **< 0,35** |
| Színkevert, cirkadián-optimalizált 4 000 K LED | akár **1,4** |

**Gyakorlati fordítás:** 300 lux meleg fehér LED ≈ **~100 melanopikus EDI lux**; ugyanaz a 300 lux hideg fehér LED-ből ≈ **~250 melanopikus EDI lux**. Ugyanaz a „fényerő", **2,5-szeres** cirkadián hatás.

### 8.5 A 2022-es nemzetközi konszenzus-ajánlás

**Brown TM, Brainard GC, Cajochen C, Czeisler CA, Hanifin JP, Lockley SW, Lucas RJ, Münch M, O'Hagan JB, Peirson SN, Price LLA, Roenneberg T, Schlangen LJM, Skene DJ, Spitschan M, Vetter C, Zee PC, Wright KP Jr (2022): Recommendations for daytime, evening, and nighttime indoor light exposure to best support physiology, sleep, and wakefulness in healthy adults.** *PLOS Biology* 20(3):e3001571.

*Háttér: a 2019-es Second International Workshop on Circadian and Neurophysiological Photometry résztvevőinek konszenzusa; a szerzők a fény-, neurofiziológiai fotometria-, alvás- és cirkadiánkutatás nemzetközi szaktekintélyei.*

**Az ajánlás — mérés a szem magasságában, függőleges síkban, ~1,2 m magasságban:**

| Időszak | Melanopikus EDI ajánlás |
|---|---|
| **Nappal** (beltérben) | **≥ 250 lux** (minimum) |
| **Este** — az elalvás előtti **legalább 3 órában** | **≤ 10 lux** (maximum) |
| **Éjszaka** — alvási környezet | **≤ 1 lux** |
| **Éjszaka** — ha szükséges tevékenységhez fény kell (WC, csecsemőellátás) | **≤ 10 lux** |

**A számok mögötti evidencia:**
- A **250 lux** nappali küszöb a laboratóriumi dózis-válasz görbék azon pontján van, ahol a válaszok a **közel-maximumot** elérik. Terepvalidáció: irodákban a lámpák melanopikus kimenetének kb. **kétszerezése** (kísérleti feltétel: **~170–290 melanopikus EDI lux**) javította az önbevallott éberséget, teljesítményt, hangulatot és alvásminőséget. Iskolákban a **>500 melanopikus EDI lux** javította a koncentrációs mutatókat.
- A **10 lux** esti küszöb részben **gyakorlati**: a mai otthonokban a tipikus **~30 fotopikus lux** meleg fehér világítás mellett az esetek közel **50%-ában** a melanopikus EDI **már most is ≤ 10 lux** — vagyis az ajánlás teljesíthető, nem utópia.
- Az **1 lux** alvási küszöb: nagy kohorszvizsgálatokban már a **>3 melanopikus EDI lux** alvási környezet is együtt járt **rosszabb alvással és magasabb diabétesz-incidenciával**.

**Fontos árnyalatok, amit az appnak is közvetítenie kell:**

1. **Hatalmas egyéni különbségek.** **Phillips AJK és mtsai (2019), PNAS 116(24), DOI 10.1073/pnas.1901824116:**
   - **N = 55** fiatal felnőtt (18–30 év), 5 órás esti fényexpozíció 10–2 000 lux tartományban, egyénenkénti dózis-válasz görbe.
   - **Csoportszintű ED50 = 24,60 lux** — vagyis a melatonin **fele** már **25 lux**-nál elnyomódik.
   - **Egyéni ED50-tartomány: 6 lux (legérzékenyebb) – 350 lux (legkevésbé érzékeny)** → **több mint 58-szoros** különbség; variációs koefficiens 26%.
   - 10 / 30 / 50 lux hatására a melatonin-onset rendre **22 / 77 / 109 perccel** tolódott későbbre.
   > **Következmény az appra:** ugyanaz az esti lámpa az egyik felhasználónál semmit sem csinál, a másiknál másfél órás fáziskésést. Az általános ajánlás **nem személyre szabott** — ezt ki kell mondani, és javasolni a felhasználónak a saját reakciójának megfigyelését.
2. **Életkor.** A cirkadián és neuroendokrin fényválaszok **kisgyermekeknél nagyobbak**, **időseknél kisebbek** (a szemlencse sárgulása is szűri a kék fényt). Egy 8 éves gyerek estéjét ugyanaz a képernyő sokkal jobban elrontja, mint egy 70 évesét.
3. Az ajánlás **egészséges felnőttekre** vonatkozik.

### 8.6 Appba írható fényszabályok

| Idősáv | Cél | Konkrét tanács |
|---|---|---|
| **Ébredés – +2 óra** | Óra előrehozása, éberség | **Menj ki**. 10 perc szabadtéri fény (borult napon is 1 000–5 000 lux) többet ér, mint 1 óra bent az ablak mellett. |
| **Nappal** | ≥250 melanopikus EDI lux | Ülj ablak mellé; ebédszünetben rövid séta; hideg fehér munkafény. |
| **Naplemente – −3 óra elalvásig** | Átmenet | Kapcsold le a felső világítást, használj alacsonyan elhelyezett, **meleg fehér** (≤3 000 K) lámpákat. |
| **Elalvás előtti 3 óra** | ≤10 melanopikus EDI lux | Meleg, halvány fény; képernyőknél éjszakai mód **+ fényerő minimumra** (a fényerő fontosabb, mint a színhőmérséklet). |
| **Alvás** | ≤1 lux | Sötétítő függöny, elektronikai LED-ek letakarása. |
| **Éjszakai ébredés** | ≤10 lux | Halvány, **borostyánsárga** éjjeli fény; ne kapcsold fel a nagy villanyt. |

> **A leggyakoribb tévhit korrekciója:** a „kékfényszűrő szemüveg" és az éjszakai mód **másodlagos** a **fényerő csökkentéséhez** képest. A melanopikus EDI a **spektrum ÉS az intenzitás** szorzata — egy maximális fényerőre állított, sárgított képernyő rosszabb, mint egy minimumra vett, semleges színű.

---

## 9. Melatonin mint kronobiotikum

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 10. Krono-táplálkozás

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 11. Mozgás mint zeitgeber

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 12. Kronofarmakológia

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 13. Szociális jetlag és műszakos munka

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 14. Implementációs összefoglaló

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*

---

## 15. Források

*(Ez a fejezet a kutatás második hullámából kerül kitöltésre.)*
