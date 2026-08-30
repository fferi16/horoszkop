# 11. Egzotikus születési naptár-rendszerek és modern asztro-trendek

> Kutatási dokumentum a Horoszkóp projekthez. Két nagy témakör: (A) a nyugati és kelet-ázsiai fősodortól távol eső **egzotikus születési naptár-rendszerek** (jávai weton, balinéz pawukon, születéskövek, -virágok, -fák, generációk), valamint (B) a **trendi modern nyugati asztrológiai technikák**, amelyek az asztro-TikTok / Co-Star korszakban váltak tömegtartalommá (asztrokartográfia, horary, profekciók, zodiacal releasing, Szaturnusz-visszatérés, retrográd Merkúr, void of course Hold). A fejezet végén app-integrációs ajánlás található priorizált táblázattal.

---

# A) EGZOTIKUS SZÜLETÉSI NAPTÁR-RENDSZEREK

## 1. A jávai weton (Indonézia)

### 1.1 Mi a weton?

A **weton** a jávai kultúra születésnap-fogalma: nem egyszerűen a születés dátuma, hanem a **hétköznapi (7 napos) hét napja** és a **jávai piaci hét (pasaran, 5 napos ciklus) napja** együttese. Mivel a 7 és az 5 relatív prímek, a két ciklus kombinációja **35 naponta ismétlődik** — ez a **wetonan- vagy weton-ciklus** (jávaiul *selapan*, kb. „35 nap").

A két összetevő:

- **Dina / dino (hét napja):** Senin (hétfő), Selasa (kedd), Rebo/Rabu (szerda), Kemis/Kamis (csütörtök), Jumat (péntek), Setu/Sabtu (szombat), Minggu/Ahad (vasárnap).
- **Pasaran (5 napos piaci hét):** **Legi, Pahing, Pon, Wage, Kliwon.** A nevek eredetileg piacnapok voltak: a falvak rotációban tartottak piacot, innen a „pasaran" (piac) elnevezés. A hagyomány szín- és irány-szimbólumokat is társít hozzájuk (pl. Legi – fehér – kelet; Pahing – vörös – dél; Pon – sárga – nyugat; Wage – fekete – észak; Kliwon – vegyes/kevert színek – közép).

Egy weton tehát pl. **„Rabu Pon"** (szerda + Pon) vagy **„Jumat Kliwon"** (péntek + Kliwon). Összesen **7 × 5 = 35 lehetséges weton** létezik. A jávai hagyományban a weton a személyiség, a sors, a szerencsés/szerencsétlen napok és a párkapcsolati kompatibilitás alapja — a szerepe hasonló ahhoz, amit a nyugati kultúrában a napjegy tölt be.

Kulturális érdekesség: **Joko Widodo (Jokowi)** volt indonéz elnök wetonja a **Rabu Pon** (1961. június 21., szerda + Pon) — közismert volt róla, hogy fontos bejelentéseit (pl. kormányátalakításokat) előszeretettel időzítette Rabu Pon napokra. Ez jól mutatja, hogy a weton ma is élő, hétköznapi-politikai szinten is jelen lévő rendszer.

### 1.2 A neptu-számok

Minden hétnapnak és minden pasaran-napnak van egy hagyományos számértéke, a **neptu**. A születési weton neptuja a két érték **összege**.

**Hétnapok neptu-értékei:**

| Nap (magyar) | Nap (jávai/indonéz) | Neptu |
|---|---|---|
| Vasárnap | Minggu / Ahad | **5** |
| Hétfő | Senin | **4** |
| Kedd | Selasa | **3** |
| Szerda | Rebo / Rabu | **7** |
| Csütörtök | Kemis / Kamis | **8** |
| Péntek | Jumat | **6** |
| Szombat | Setu / Sabtu | **9** |

**Pasaran-napok neptu-értékei:**

| Pasaran | Neptu |
|---|---|
| Legi | **5** |
| Pahing | **9** |
| Pon | **7** |
| Wage | **4** |
| Kliwon | **8** |

**Példák:** Senin Legi = 4 + 5 = **9** (a legkisebb lehetséges neptu = 7, Selasa Wage; a legnagyobb = 18, Sabtu Pahing). Jumat Kliwon = 6 + 8 = **14**. Rabu Pon = 7 + 7 = **14** (Jokowi wetonja).

### 1.3 A születési weton kiszámítása (app-képlet)

A pasaran-nap tisztán ciklikus, ezért a Gergely-naptári dátumból a **Julián-napszám (JDN)** segítségével közvetlenül számítható. Validált horgony: 1961. 06. 21. → JDN 2 437 472 → mod 7 = 2 (szerda), mod 5 = 2 (Pon) → „Rabu Pon" ✓ (Jokowi közismert wetonja); 1921. 06. 08. → „Rebo Kliwon" ✓ (Suharto közismert wetonja).

```text
// 1) Julián-napszám Gergely-dátumból (egész osztással):
a = (14 - hónap) div 12
y = év + 4800 - a
m = hónap + 12*a - 3
JDN = nap + (153*m + 2) div 5 + 365*y + y div 4 - y div 100 + y div 400 - 32045

// 2) A hét napja:  (JDN mod 7) → 0=hétfő, 1=kedd, 2=szerda, 3=csütörtök,
//                                 4=péntek, 5=szombat, 6=vasárnap
// 3) A pasaran:    (JDN mod 5) → 0=Legi, 1=Pahing, 2=Pon, 3=Wage, 4=Kliwon
// 4) Neptu = neptu[hétnap] + neptu[pasaran]
```

Fontos finomság: a jávai nap hagyományosan **napnyugtakor kezdődik** (az iszlám naptárhoz hasonlóan), így a napnyugta után születettek wetonja már a **következő** naptári naphoz tartozik. Egy appban ezt érdemes opcionális kapcsolóként kezelni („napnyugta után születtem"), alapértelmezésben a naptári napot használva.

### 1.4 Párkompatibilitás a neptuval

A klasszikus jávai *primbon* (hagyományos jóskönyv) házassági kompatibilitás-számítása: a két fél **neptu-összegét összeadjuk, majd a maradékot vizsgáljuk**. A legelterjedtebb változat a **8-as maradékos** rendszer:

**(neptu₁ + neptu₂) mod 8** → a maradék adja a jóslatot:

| Maradék | Név | Jelentés |
|---|---|---|
| 1 | **Pegat** | „elválás" — konfliktusok, válás veszélye (figyelmeztető kategória) |
| 2 | **Ratu** | „királyi pár" — nagy harmónia, mások által irigyelt, tisztelt kapcsolat |
| 3 | **Jodoh** | „egymásnak rendelve" — igazi pár, elfogadják egymás hibáit |
| 4 | **Topo** | „aszkézis" — az elején nehéz, később boldog és sikeres |
| 5 | **Tinari** | boldogság, anyagi szerencse, könnyű megélhetés |
| 6 | **Padu** | „veszekedés" — gyakori viták, de nem feltétlenül válás |
| 7 | **Sujanan** | viszály, hűtlenség veszélye (figyelmeztető kategória) |
| 0 (8) | **Pesthi** | tartós, békés, harmonikus házasság |

Létezik párhuzamosan **mod 4, mod 5 és mod 7 alapú** osztási rendszer is (más-más kategórianevekkel), valamint a wetonból számítják a szerencsés esküvői dátumot, a ház építésének kezdőnapját, sőt böjti napokat is. App-szinten a mod 8 rendszer a legismertebb és a legjobban dokumentált — ezt érdemes elsődlegesen implementálni.

### 1.5 Miért él ma is?

Indonéziában (elsősorban Jáván, a világ egyik legnépesebb szigetén) a weton ma is **hétköznapi gyakorlat**: az esküvő időpontját sok családban máig weton-számítással (a *primbon* alapján) választják ki, a párok kompatibilitását a szülők ellenőrzik, és az „ütköző" wetonok komoly családi vitákat okozhatnak. A weton-kalkulátorok az indonéz internet legnépszerűbb „horoszkóp"-tartalmai közé tartoznak. Egy horoszkóp-app számára a weton azért ideális, mert **100%-ban determinisztikus, csillagászati számítás nélkül, pár sor kódból** számítható, ugyanakkor egzotikus és kevéssé ismert a magyar piacon.

## 2. A balinéz pawukon-naptár (röviden)

Bali szigetén a hindu-balinéz kultúra a **pawukon** naptárat használja rituális célokra: ez egy **210 napos ciklus**, amely nem kötődik sem a Naphoz, sem a Holdhoz. Különlegessége, hogy **tíz különböző hosszúságú „hét" fut benne párhuzamosan** (1, 2, 3, 4, 5, 6, 7, 8, 9 és 10 napos ciklusok — az 1 napostól a dasawaráig). A gyakorlatban a legfontosabb a 3 napos (*triwara*), az 5 napos (*pancawara* — a jávai pasarannal rokon) és a 7 napos (*saptawara*) ciklus; a 210 nap a 30 darab 7 napos *wuku*-hétből áll össze.

A balinéz „születésnap" az **otonan**: a születés pawukon-pozíciójának visszatérése **210 naponta**, tehát a balinézek évente kb. 1,7-szer ünneplik — kis családi szertartással, áldozati kosarakkal. A pawukon adja a balinéz ünnepek (pl. Galungan, Kuningan) időpontját is. App-szinten az otonan szintén tisztán moduláris aritmetika: a születési dátum és a mai nap JDN-különbsége mod 210 megadja, hány nap múlva lesz a következő otonan — jó „egzotikus születésnap-emlékeztető" funkció.

## 3. Születéskövek (birthstones)

### 3.1 Eredet

A születéskövek hagyományát a zsidó-keresztény hagyomány **Áron melldíszére** (hósen) vezetik vissza: a Kivonulás könyve (2Móz 28,17–20) szerint a főpap melldíszén **12 drágakő** volt, Izrael 12 törzsének megfelelően, 4 sorban. Josephus Flavius (1. sz.) és Szent Jeromos (5. sz.) kapcsolta össze a 12 követ a zodiákus 12 jegyével, illetve az év 12 hónapjával. A „mindenki a saját hónapjának kövét viselje" szokás a 16–18. századi Lengyelországban vált divattá (valószínűleg az ott élő zsidó ékszerész-hagyomány nyomán).

A **modern, szabványosított listát 1912-ben** fogadta el az amerikai ékszerész-szövetség (National Association of Jewelers, a mai **Jewelers of America** elődje) Kansas Cityben — bevallottan kereskedelmi céllal. A listát azóta többször bővítették: **1952** (alexandrit, citrin, rózsaszín turmalin, cirkon), **2002** (tanzanit — december), **2016** (spinell — augusztus, a Jewelers of America és az American Gem Trade Association / AGTA közösen).

### 3.2 A hivatalos (modern amerikai) és a hagyományos lista

| Hónap | Modern (JA/AGTA) hivatalos | Hagyományos / alternatív | Brit (Goldsmiths) eltérések |
|---|---|---|---|
| Január | **Gránát** | gránát | gránát |
| Február | **Ametiszt** | ametiszt | ametiszt |
| Március | **Akvamarin** | vérjáspis (heliotróp/bloodstone) | akvamarin, vérjáspis |
| Április | **Gyémánt** | gyémánt, hegyikristály | gyémánt, hegyikristály |
| Május | **Smaragd** | smaragd, krizopráz | smaragd, krizopráz |
| Június | **Gyöngy, holdkő, alexandrit** | gyöngy, holdkő | gyöngy, holdkő |
| Július | **Rubin** | rubin, karneol | rubin, karneol |
| Augusztus | **Peridot, spinell** (2016 óta) | szardonix | peridot, szardonix |
| Szeptember | **Zafír** | zafír, lápisz lazuli | zafír, lápisz lazuli |
| Október | **Opál, turmalin** | opál | opál |
| November | **Topáz, citrin** | topáz | topáz, citrin |
| December | **Türkiz, cirkon, tanzanit** (2002 óta) | türkiz, lápisz lazuli | tanzanit, türkiz |

Megjegyzések apphoz: (1) a „hagyományos" lista országonként eltér (van külön brit, francia, orosz hagyomány is — az orosz listák pl. a zodiákus jegyekhez, nem hónapokhoz kötnek követ); (2) létezik **zodiákus-kő** hagyomány is (jegyenként), amelyet érdemes külön mezőként kezelni; (3) a kövekhez jelentést is társítanak (gránát–védelem, ametiszt–józanság, akvamarin–nyugalom, gyémánt–erő, smaragd–újjászületés, gyöngy–tisztaság, rubin–szenvedély, peridot–szerencse, zafír–bölcsesség, opál–remény, topáz–szeretet, türkiz–jólét).

## 4. Születési virágok (birth flowers)

Az angol–amerikai hagyomány minden hónaphoz **1–2 virágot** rendel; a jelentések a viktoriánus **virágnyelvből** (floriography) származnak, amikor a virágcsokor kódolt üzenet volt. A listák forrásonként kissé eltérnek — az alábbi a legelterjedtebb angol/amerikai kánon:

| Hónap | Virág(ok) | Virágnyelvi jelentés |
|---|---|---|
| Január | **Szegfű** (carnation), hóvirág | elbűvölés, szeretet, megkülönböztetés; remény (hóvirág) |
| Február | **Ibolya**, kankalin (primula) | szerénység, hűség, alázat; fiatal szerelem |
| Március | **Nárcisz** (daffodil/jonquil) | újjászületés, új kezdet, viszonzatlan szerelem |
| Április | **Százszorszép** (daisy), szagosbükköny (sweet pea) | ártatlanság, tiszta szeretet; áldott búcsú, öröm |
| Május | **Gyöngyvirág**, galagonya | a boldogság visszatérése, édesség; remény |
| Június | **Rózsa**, lonc (honeysuckle) | szerelem (színenként árnyalva), szenvedély; a szerelem köteléke |
| Július | **Szarkaláb** (larkspur), tavirózsa | könnyed vidámság, nyitott szív; tisztaság |
| Augusztus | **Kardvirág** (gladiolus), pipacs | jellemerő, becsület, emlékezés; képzelet, vigasz |
| Szeptember | **Őszirózsa** (aster), hajnalka (morning glory) | bölcsesség, hit, szeretet; vonzalom, múlandóság |
| Október | **Büdöske/körömvirág** (marigold), kozmea | szenvedély, kreativitás, a nap melege; harmónia |
| November | **Krizantém** | hűség, barátság, öröm (Ázsiában: hosszú élet) |
| December | **Nárcisz (tazetta/papírfehér)**, magyal, mikulásvirág | remény, „maradj olyan, amilyen vagy"; védelem, ünnep |

App-tipp: a születési virág remekül kombinálható a születéskővel egy közös „születési szimbólumok" kártyán (kő + virág + fa + szín), és jól illusztrálható.

## 5. Születési fák és a hónapok színei (röviden)

**Születési fák:** a legismertebb rendszer az ún. **„kelta fahoroszkóp"**. Fontos tudni, hogy ez **nem ősi kelta hagyomány**: Robert Graves *The White Goddess* (1948) című művének spekulatív ogham-fanaptárából nőtte ki magát, majd a 20. század végén (főleg német nyelvterületen, „Baumkreis" formában) vált népszerű ezoterikus rendszerré. Két fő változata van: (1) a **druida/ogham-féle 13 holdhónapos** fanaptár (nyír, berkenye, kőris, éger, fűz, galagonya, tölgy, magyal, mogyoró, szőlő, borostyán, nád, bodza); (2) a **„kelta fakör" 21 fás** rendszer, ahol az évet rövid periódusokra osztják (pl. nyír, jegenyefenyő, szil, ciprus, nyár, gyertyán, fügefa, tölgy, nyír stb.), és a napéjegyenlőségek/napfordulók külön „ünnepi" fákat kapnak (tölgy, nyír, olajfa/bükk). App-szinten dátumtartomány-lookup, jelentésszövegekkel — tudományos igény nélkül, szórakoztató tartalomként érdemes tálalni, az eredet korrekt feltüntetésével.

**Hónapszínek:** a születési hónapokhoz színeket is rendel a (főleg amerikai) hagyomány, jellemzően a születéskő színéből levezetve (január – sötétvörös/gránát; február – lila; március – világoskék; április – fehér/átlátszó; május – zöld; június – világoslila/krém/gyöngyfehér; július – vörös; augusztus – világoszöld; szeptember – sötétkék; október – rózsaszín/sokszínű; november – sárga/arany; december – kék/türkiz). Egyszerű lookup-tábla, jó UI-elem (a felhasználó „születési színe" lehet a profilja témaszíne).

## 6. Generációk mint modern „horoszkóp"

### 6.1 A Strauss–Howe generációs elmélet

William Strauss és Neil Howe (*Generations*, 1991; *The Fourth Turning*, 1997) elmélete szerint az angol-amerikai történelem **ismétlődő, kb. 80–90 éves ciklusokban** (**saeculum**) halad, amely négy, egyenként kb. 20–22 éves **„fordulatból" (turning)** áll: **Csúcspont (High) → Ébredés (Awakening) → Széthullás (Unraveling) → Krízis (Crisis)**. Minden fordulatban születik egy generáció, és mivel a formálódásuk más-más fordulatra esik, **négy generációs archetípus** ciklikusan ismétlődik:

| Archetípus | Melyik fordulatban születik | Jellemzés (az elmélet szerint) | Példa |
|---|---|---|---|
| **Próféta** (Prophet) | Csúcspont | idealista, értékvezérelt, krízisben vén látnok | Baby boomerek |
| **Nomád** (Nomad) | Ébredés | pragmatikus, cinikus, túlélő | X generáció |
| **Hős** (Hero) | Széthullás | közösségi, intézményépítő, a krízis „katonái" | GI generáció, millenniálok |
| **Művész** (Artist) | Krízis | alkalmazkodó, érzékeny, konszenzuskereső | csendes generáció, Z? |

Az elmélet lényegében **a generációk asztrológiája**: nagy, ciklikus mintázatot ígér, amelybe a születési év alapján bárki besorolható — pontosan úgy „működik", mint egy horoszkóp (Barnum-hatás nagyban). A tudományos szociológia áltudományosnak vagy legjobb esetben nem falszifikálható történelemfilozófiának tartja, de popkulturális hatása óriási (a *The Fourth Turning* Steve Bannon révén politikai karriert is befutott).

### 6.2 A ma használt generációs címkék

A közkeletű (Pew Research Center-féle, illetve az Alfa/Béta esetén McCrindle-féle) évhatárok:

| Generáció | Születési évek (elterjedt határok) | Megjegyzés |
|---|---|---|
| Legnagyobb generáció (GI) | 1901–1927 | II. világháború felnőtt hősei |
| Csendes / veterán generáció | 1928–1945 | válság- és háborús gyerekkor |
| **Baby boomer** | 1946–1964 | a háború utáni születési csúcs |
| **X generáció** | 1965–1980 | „kulcsos gyerekek", MTV-generáció |
| **Y / millenniál** | 1981–1996 | ezredfordulós fiatal felnőttek, internet-pionírok |
| **Z generáció** | 1997–2012 | okostelefonnal felnőtt „digitális bennszülöttek" |
| **Alfa generáció** | 2010/2013–2024/2025 | a címke Mark McCrindle-től; határai képlékenyek |
| **Béta generáció** | 2025–kb. 2039 | szintén McCrindle-féle marketingcímke |

Fontos: az évhatárok **nem tudományos konszenzus** eredményei — forrásonként ±2–4 év eltérés van, és pl. az Alfa kezdete hol 2010, hol 2013.

### 6.3 Tudományos kritika — és miért működik mégis tartalomként

A generációkutatás módszertani kritikája szerint a generációs címkék (1) **önkényes határúak**, (2) a valós különbségek többsége **életkor-hatás vagy korszak-hatás**, nem kohorsz-hatás (a három statisztikailag is nehezen szétválasztható), (3) a címkék **sztereotípiákat** termelnek („a lusta millenniál"), amelyeket a kutatások nem igazolnak. Mérföldkő, hogy **2023 májusában maga a Pew Research Center** — a generációs kutatások legidézettebb műhelye — jelentette be, hogy **felhagy az alapértelmezett generációs címkézéssel**: csak akkor használ generációs bontást, ha valódi kohorsz-hatás mérhető (több évtizedes összehasonlító adattal), egyébként születési évtizedek vagy életkori csoportok szerint elemez. A szociológusok (pl. Philip N. Cohen nyílt levele, amelyet több száz kutató írt alá) kifejezetten a „tudományos asztrológia" jelzővel illették a generációs címkézést.

**Miért működik mégis?** Ugyanazért, amiért a horoszkóp: azonnali **identitást és csoporttagságot** ad, önmagunkra ismerést kínál (Barnum-állítások: „a Z generáció szorongó, de kreatív"), generációk közti ugratásra alkalmas („OK, boomer"), és végtelen tartalom generálható belőle. Egy horoszkóp-appban a generáció **nulla számítási költségű** (év-lookup), és jól kombinálható a többi rendszerrel („89-es Bak millenniál"), miközben a tudományos kritikát egy „tudtad?" panelben korrekten fel lehet tüntetni — ez növeli az app hitelességét.

---

# B) TRENDI MODERN NYUGATI ASZTROLÓGIAI TECHNIKÁK (asztro-TikTok / Co-Star korszak)

> Kontextus: a 2017 utáni „asztro-reneszánsz" (Co-Star 2017, The Pattern 2017, Sanctuary 2019, asztro-meme-oldalak, majd 2020-tól a TikTok-asztrológia) a millenniál/Z közönségnek nem napi horoszkópot, hanem **technikákat** ad el: mindegyik alábbi módszer közös vonása, hogy (1) személyre szabott, (2) jól videósítható, (3) viszonylag könnyen automatizálható.

## 7. Asztrokartográfia (Astro*Carto*Graphy)

**Eredet:** **Jim Lewis** (1941–1995) amerikai asztrológus fejlesztette ki az 1970-es években (az Astro*Carto*Graphy nevet 1976-ban védjegyeztette); előzménye a relokációs asztrológia és Donald Bradley munkássága. Lewis újítása a **térképes vizualizáció** volt: a születési képletet nem egy helyre, hanem **a Föld egészére** vetítette ki.

**Mi az?** A születés pillanatában minden bolygó a Föld bizonyos pontjain éppen **kel (ASC-vonal), nyugszik (DSC-vonal), delel (MC-vonal) vagy alsó delelésben van (IC-vonal)**. Ezek a pontok vonalakat rajzolnak a világtérképre: bolygónként 4 vonal, 10 bolygóval 40 vonal. Az értelmezés: ahol egy bolygó vonala fut, ott az adott bolygó „témája" felerősödik az életedben — a Vénusz-vonalon szerelem és élvezetek, a Jupiter-vonalon szerencse és bőség, a Szaturnusz-vonalon munka és nehézségek stb. A **relokációs asztrológia** ennek pontszerű változata: a születési időpontra egy másik földrajzi helyre számolt házrendszerű képlet.

**Hogyan számítható?** A bemenet a születési pillanat bolygópozíciói (rektaszcenzió α, deklináció δ) és a greenwichi csillagidő (GST):

- **MC-vonal:** hosszúsági kör, ahol a bolygó éppen delel: λ = α − GST (a vonal függőleges egyenes a térképen). **IC-vonal:** ugyanez +180°.
- **ASC/DSC-vonal:** azon (φ, λ) pontok halmaza, ahol a bolygó éppen a horizonton van kelőben/nyugvóban; a horizont-feltételből: **tan φ = −cos(LST − α) / tan δ**, ahol LST = GST + λ. Ezek görbült vonalak, amelyeket λ végigléptetésével lehet kirajzolni.

Swiss Ephemeris + egy térkép-könyvtár (pl. Leaflet) kombinációval jól implementálható; a nyílt forráskódú asztro-könyvtárak (pl. a python `flatlib`/`kerykeion` ökoszisztéma, ill. az Astrodienst szolgáltatása) referenciaként használhatók.

**Miért trendi?** Mert a kérdése — **„Hol éljek? Hova utazzak? Hol találok szerelmet?"** — tökéletesen illeszkedik a digitális nomád / relokációs korszellemhez. A TikTokon az „astrocartography" videók milliós nézettségűek; tipikus tartalom: „elköltöztem a Vénusz-vonalamra és ez történt". App-funkcióként interaktív térképe erős, prémiumra alkalmas vizuális élmény.

## 8. Horary (órakérdés-asztrológia)

**Mi az?** A horary nem a születési képletet elemzi, hanem **a kérdés feltevésének pillanatára** állít képletet: „Hol a kulcsom?", „Visszajön-e az exem?", „Megkapom az állást?". A válasz a kérdés pillanatának egéből olvasható ki. A hagyomány csúcsa **William Lilly** *Christian Astrology* (1647) című műve — a modern (2000-es évek utáni) tradicionális-asztrológia-reneszánsz (Olivia Barclay, John Frawley, Deborah Houlding nyomán) elsősorban Lilly szabályait követi.

**Alapszabályok (leegyszerűsítve):**

- **Radikalitás:** a képlet akkor „ítélhető meg", ha nem túl korai/kései az Aszcendens (0–3° = túl korai a kérdés, 27–30° = elkésett), a Hold nem void of course, és a Szaturnusz nem áll a 7. házban (az asztrológus tévedhet) — ellenkező esetben a hagyomány szerint nem szabad ítéletet mondani.
- **Szignifikátorok:** a kérdezőt az **1. ház ura** (és a Hold), a kérdezett dolgot a témának megfelelő **ház ura** jelöli (7. ház = társ/ellenfél, 10. = állás, 2. = pénz, 4. = ingatlan, elveszett tárgy stb.).
- **Ítélet:** a válasz abból olvasható ki, hogy a két szignifikátor **összekapcsolódik-e** közeledő fényszöggel (konjunkció, szextil, trigon = igen; kvadrát = nehézségekkel; oppozíció = megbánással), van-e recepció, translation/collection of light, és milyen erősek a bolygók (méltóságok).
- **Void of course Hold:** ha a Hold már nem képez több egzakt fényszöget, mielőtt jegyet váltana, a hagyomány szerint „semmi sem lesz a dologból" (részletesen: 13. pont).

**App-szempont:** a képlet-számítás ugyanaz, mint a natális (aktuális pillanatra), tehát olcsó; a **szabályalapú ítélet-levezetés** viszont szakértői rendszert igényel (esszenciális méltóság-táblázatok, fényszög-alkalmazás iránya, recepciók). Reális szint egy appban: „horary-asszisztens" — a képlet kirajzolása + radikalitás-ellenőrzés + a szignifikátorok automatikus kijelölése, az ítéletet a felhasználóra/tananyagra hagyva. Jogi/etikai megjegyzés: egészségügyi-pénzügyi horary-kérdésekre az app ne adjon automatikus „ítéletet".

## 9. Éves profekciók (annual profections)

**Mi az?** Hellenisztikus időzítési technika (Vettius Valens, Paulus Alexandrinus és mások nyomán, Chris Brennan és Demetra George népszerűsítésében). Az elv: **minden életévben egy házzal továbblép** az „aktivált" életterület, 12 évente körbeérve.

**Számítás (ez a lényeg — ezért lett TikTok-sláger):**

```text
aktivált_ház = (betöltött_életkor mod 12) + 1
```

- 0 évesen (születéstől az 1. szülinapig) az 1. ház aktív, 1 évesen a 2., … 11 évesen a 12., 12 évesen újra az 1. — így **12, 24, 36, 48 évesen mindig 1. házas („új életciklus") év** indul.
- Az aktivált ház **jegyének uralkodó bolygója** lesz az **„év ura" (Lord of the Year)**: az adott évben ennek a bolygónak a natális állapota és tranzitjai kiemelten fontosak.
- Finomítás: az évet a **születésnaptól születésnapig** számoljuk (nem naptári évre); a whole sign házrendszert használja (az 1. ház = az Aszcendens jegye).

**Példa:** ha valaki 35 éves és Kos aszcendensű: 35 mod 12 = 11 → 12. ház (Halak) az aktív, az év ura a Jupiter (a Halak tradicionális ura).

**Miért lett sláger?** Mert **fejben is kiszámolható** (életkor mod 12), mégis „ősi hellenisztikus titkos technika" narratívával adható el; a TikTok-videók („Idén 10. házas éved van? Karrieráttörés jön!") tökéletesen skálázhatók. App-szinten ez a **legjobb ár/érték arányú** modern technika: triviális számítás, éves push-értesítésre („Ma kezdődik a 7. házas éved — a kapcsolatok éve!") kiválóan alkalmas.

## 10. Zodiacal releasing (röviden)

**Vettius Valens** (2. sz., *Anthologiae* IV. könyv) technikája, amelyet **Chris Brennan** (The Astrology Podcast, *Hellenistic Astrology: The Study of Fate and Fortune*, 2017) és Robert Schmidt fordításai emeltek vissza a köztudatba. Az életet **fejezetekre osztja** egy kiindulóponttól, amely a **Szerencse Pontja** (Lot of Fortune: ASC + Hold − Nap nappali képletben, éjszakaiban fordítva) vagy a Szellem Pontja (Lot of Spirit — karrierhez ezt használják). A kiindulójegytől indulva minden jegy meghatározott számú **évet „kap"** (a bolygók ún. kisebb periódusai szerint: Kos 15, Bika 8, Ikrek 20, Rák 25, Oroszlán 19, Szűz 20, Mérleg 8, Skorpió 15, Nyilas 12, Bak 27, Vízöntő 30, Halak 12 év), és a fejezetek egymásba ágyazott szinteken (L1–L4: évek → hónapok → hetek → napok) bomlanak tovább. Kulcsfogalmak: **peak period** (amikor az aktivált jegy a Szerencse Pontjától számított sarkos helyen áll — karriercsúcs-időszak), és a **„loosing of the bond"** (hirtelen fejezetváltás). A TikTokon a „mikor jön a peak periódusod?" tartalmak vitték sikerre. App-szinten: determinisztikus, táblázat-vezérelt számítás (efemerisz a képlethez kell, utána tiszta aritmetika), de az **értelmezése bonyolult** — inkább prémium/haladó funkció.

## 11. Szaturnusz-visszatérés mint popkulturális jelenség

A Szaturnusz keringési ideje **~29,4 év**, így kb. **27–30 éves kor** között (majd ~58 és ~88 körül) tér vissza a születési helyzetére. Az asztrológiai narratíva szerint ez a **felnőtté válás krízise**: ekkor omlik össze, ami nem autentikus (kapcsolatok, karrierek), és ekkor épül fel a „saját élet". A pszichologizáló asztrológia (Liz Greene *Saturn: A New Look at an Old Devil*, 1976) tette központi fogalommá, a popkultúra pedig szélesebb ismertségűvé, mint bármely más tranzitot:

- **Zene:** No Doubt – *Return of Saturn* album (2000); SZA – *Saturn* (2024, Grammy-jelölés); Kacey Musgraves – *Deeper Well* (2024, nyitósora a Szaturnusz-visszatérésről); Ariana Grande, Gwen Stefani és mások interjúkban hivatkoznak rá; a 27 évesen elhunyt zenészek „**27-es klubját**" is gyakran (asztrológiailag pontatlanul, mert a return jellemzően 29 körül egzakt) a Szaturnusz-visszatéréshez kötik.
- **Könyv/podcast-műfaj:** *The Saturn Return Survival Guide* (Lisa Stardust, 2021) és tucatnyi hasonló önsegítő cím; a „Saturn return" a quarter-life crisis asztrológiai márkaneve lett.

**App-szempont:** a Szaturnusz-visszatérés időpontja efemerisszel pontosan számítható (mikor éri el a tranzit Szaturnusz a natális Szaturnusz fokát — a retrográd hurok miatt akár 3 egzakt találkozás); kiváló „életesemény-visszaszámláló" funkció („X nap múlva kezdődik a Szaturnusz-visszatérésed"), és a 27–30 éves célközönség pontosan az asztro-appok fő demográfiája.

## 12. Retrográd Merkúr: az internetes mém

**Csillagászati háttér:** a Merkúr **évente kb. 3-szor** (ritkán 4-szer), alkalmanként **~3 hétre** látszólag hátrálni kezd az égen (a Föld és a Merkúr eltérő keringési sebessége miatti perspektivikus illúzió — a bolygó valójában sosem hátrál). Az asztrológiai hagyomány a Merkúrhoz köti a kommunikációt, az utazást és a technikát, így a retrográd időszak a „minden elromlik" narratívát kapta.

**Retrográd Merkúr időszakok 2025–2030** (a állomások dátumai ±1 nap időzónafüggéssel):

| Év | Időszakok (retrográd állomás → direkt állomás) |
|---|---|
| 2025 | márc. 15. – ápr. 7. (Kos→Halak) • júl. 18. – aug. 11. (Oroszlán) • nov. 9. – 29. (Nyilas→Skorpió) |
| 2026 | febr. 26. – márc. 20. (Halak) • jún. 29. – júl. 23. (Rák) • okt. 24. – nov. 13. (Skorpió) |
| 2027 | febr. 9. – márc. 3. (Halak→Vízöntő) • jún. 10. – júl. 4. (Rák→Ikrek) • okt. 7. – 28. (Skorpió→Mérleg) |
| 2028 | jan. 24. – febr. 14. (Vízöntő) • máj. 21. – jún. 14. (Ikrek) • szept. 19. – okt. 11. (Mérleg) |
| 2029 | jan. 7. – 27. (Vízöntő→Bak) • máj. 1. – 25. (Bika) • szept. 2. – 24. (Mérleg→Szűz) • dec. 22. – 2030. jan. 11. (Bak) |
| 2030 | (jan. 11-ig az előző) • ápr. 12. – máj. 6. (Bika→Kos) • aug. 15. – szept. 8. (Szűz) • dec. 5. – 25. (Bak→Nyilas) |

**Mit „tilos" ilyenkor** (a mém-kánon szerint): szerződést aláírni, új telefont/laptopot venni, nagy utazást indítani, új projektet/céget alapítani, exszel újrakezdeni („a retrográd visszahozza a múltat"), fontos e-mailt átolvasás nélkül elküldeni. Amit „szabad/ajánlott": minden **re-** kezdetű ige — review, redo, reflect, reconnect (átnézni, újratervezni, visszatérő ügyeket lezárni). A hagyomány számon tartja az előtte/utána ~2 hetes **„árnyékperiódust"** (shadow period) is, amikor a Merkúr a retrográd szakasz fokain halad át.

**Miért lett mém?** Mert tökéletes **univerzális bűnbak**: bármilyen techhiba, félreértés vagy exek felbukkanása ráfogható; kiszámítható és kollektív (mindenkinek egyszerre van), ezért közösségi élmény és evergreen tartalomforrás („Is Mercury in retrograde?" külön weboldalt kapott). A 2010-es évek asztro-meme-hullámának ez volt a belépő terméke. **App-szempont:** a retrográd állapot efemeriszből triviálisan számítható (a Merkúr ekliptikai hosszának napi változása negatív-e); kötelező funkció: badge/widget („Retrográd a Merkúr: még 12 nap"), push az állomásnapokon, plusz az árnyékperiódus jelzése haladóknak.

## 13. Void of course Hold és holdnaptár-tartalmak (röviden)

**Void of course (üresen futó) Hold:** az az időszak, amikor a Hold **már megképezte utolsó egzakt fő fényszögét** (konjunkció, szextil, kvadrát, trigon, oppozíció) az aktuális jegyében lévő bolygókkal, de **még nem lépett át a következő jegybe**. Hossza pár perctől akár 1-2 napig terjedhet, 2-3 naponta előfordul. A horary-hagyomány szerint (l. 8. pont) ilyenkor „nem történik semmi": a megkezdett dolgok nem vezetnek eredményre — ezért a modern elektív (időpontválasztó) tartalmak szerint void Holdnál ne indíts projektet, ne írj alá, ne vásárolj nagy értéket, ne tarts fontos meetinget. Számítása efemerisszel determinisztikus, de fényszög-keresést igényel (a Hold következő egzakt aspektusainak megkeresése a jegyhatárig).

**Holdnaptár-tartalmak:** a Hold jegybeli helyzetére és fázisára épülő mindennapi ajánlások műfaja — kertészkedés (biodinamikus naptár), takarítás, böjt, és a legnépszerűbb: a **hajvágás-naptár** (növő Holdnál vágatva „gyorsabban nő", teliholdnál „dúsabb lesz", Oroszlán/Szűz jegyű Holdnál „szebb" a haj — tudományos alapja nincs, engagementje hatalmas). App-szempont: a Hold jegye + fázisa + void-státusz kombinációjából napi „holdtippek" generálhatók — olcsó számítás, napi visszatérésre ösztönző tartalom.

---

# APP-INTEGRÁCIÓS AJÁNLÁS

Értékelési szempontok: **Számíthatóság** (mennyire determinisztikus/olcsó a kód: ★ = nehéz, ★★★ = triviális), **Trend-érték** (kereslet, tartalom-potenciál a 2025–26-os asztro-piacon), **Prioritás** (javasolt sorrend a fejlesztésben).

| # | Funkció | Számíthatóság | Trend-érték | Szükséges infrastruktúra | Prioritás | Megjegyzés |
|---|---|---|---|---|---|---|
| 1 | **Retrográd Merkúr widget + push** | ★★★ (efemerisz, előre generált táblázattal is megoldható) | ★★★ | efemerisz vagy statikus dátumtábla | **P1** | A legnagyobb elérésű mém-téma; olcsó, azonnali engagement |
| 2 | **Éves profekció + év ura** | ★★★ (mod 12 + jegyúr-lookup) | ★★★ | csak ASC kell (születési idő+hely) | **P1** | Évente 1 push („új házas éved indul") — retenciós arany |
| 3 | **Jávai weton + neptu + párkompatibilitás** | ★★★ (JDN mod 5/7, mod 8 kompatibilitás) | ★★ | semmi (tiszta aritmetika) | **P1** | Egzotikus differenciátor a magyar piacon; validált képlet a 1.3 pontban |
| 4 | **Születési szimbólum-kártya (kő+virág+fa+szín+generáció)** | ★★★ (lookup-táblák) | ★★ | statikus táblák | **P1** | Megosztható kártya = organikus marketing; generációs címkéhez kritikai „tudtad?" panel |
| 5 | **Szaturnusz-visszatérés visszaszámláló** | ★★ (tranzitkeresés efemerisszel, retrográd hurkokkal) | ★★★ | efemerisz | **P2** | A 25–33-as fő célcsoport slágere; „life event" értesítések |
| 6 | **Holdnaptár (jegy+fázis+void+hajvágás)** | ★★ (void-számítás fényszög-keresést igényel) | ★★★ | efemerisz | **P2** | Napi visszatérést generál; a hajvágás-naptár meglepően erős kereslet |
| 7 | **Asztrokartográfia térkép** | ★★ (képletek a 7. pontban; térkép-UI kell) | ★★★ | efemerisz + térkép-könyvtár | **P2** | Erős prémium/fizetős funkció („Hol éljek?"); vizuálisan a legimpozánsabb |
| 8 | **Balinéz otonan-emlékeztető** | ★★★ (mod 210) | ★ | semmi | **P3** | Olcsó bónusz a weton mellé („210 napos születésnapod") |
| 9 | **Zodiacal releasing idővonal** | ★★ (Szerencse Pontja + periódustáblák) | ★★ | efemerisz | **P3** | Haladó/prémium; értelmezési szöveganyag-igénye nagy |
| 10 | **Horary-asszisztens** | ★ (szakértői szabályrendszer) | ★★ | efemerisz + méltóságtáblák | **P4** | Csak részfunkcióként (radikalitás-check, szignifikátor-kijelölés); teljes ítélet-automatizálás nem javasolt |

**Összefoglaló javaslat:** az első körben a négy P1-es funkció implementálandó — közülük három **efemerisz nélkül, tiszta aritmetikával/lookuppal** működik, tehát a projekt meglévő számítási magjától függetlenül, azonnal szállítható. A P2-es kör (Szaturnusz-return, holdnaptár, asztrokartográfia) már feltételezi a Swiss Ephemeris-integrációt (l. 05-github-megoldasok.md), és ezek adják a prémium-szint gerincét.

---

## Források

### Weton / pawukon
- JavaSense – Neptu Weton Values: https://javasenseapp.com/neptu-weton-values/
- JavaSense – How to Check Weton Compatibility (Pegat…Pesthi): https://javasenseapp.com/how-to-check-weton-compatibility/
- JavaSense – Complete List of 35 Javanese Weton and Neptu: https://javasenseapp.com/35-javanese-weton-list/
- N. K. Utami et al.: *An ethnoarithmetic excursion into the Javanese calendar* (arXiv:2012.10064): https://arxiv.org/pdf/2012.10064
- Wikipedia – Javanese calendar: https://en.wikipedia.org/wiki/Javanese_calendar
- Wikipedia – Pawukon calendar: https://en.wikipedia.org/wiki/Pawukon_calendar
- CNN Indonesia – Arti dan Mitos Rabu Pon, 'Hari Sakral' Jokowi: https://www.cnnindonesia.com/gaya-hidup/20240221093156-284-1065301/arti-dan-mitos-rabu-pon-hari-sakral-jokowi
- Bisnis.com – weton Rabu Pon (Jokowi, 1961. 06. 21.): https://kabar24.bisnis.com/read/20230621/15/1667628/penuh-keberuntungan-ini-arti-weton-rabu-pon-yang-dimiliki-presiden-jokowi
- USNO – Julian Date képlet: https://aa.usno.navy.mil/faq/JD_formula

### Születéskövek, virágok, fák
- Jewelers of America / AGTA születéskő-lista (modern kánon, 1912/1952/2002/2016-os bővítések); GIA Birthstones áttekintés: https://www.gia.edu/birthstones
- Wikipedia – Birthstone (hagyományos vs. modern listák, Áron melldísze): https://en.wikipedia.org/wiki/Birthstone
- Wikipedia – Birth flower: https://en.wikipedia.org/wiki/Birth_flower
- Almanac.com – Birth Month Flowers and Their Meanings: https://www.almanac.com/content/birth-month-flowers-and-their-meanings
- Robert Graves: *The White Goddess* (1948) — a „kelta fanaptár" forrása (kritikai kontextusban)

### Generációk
- Pew Research Center (2023. 05. 22.): *How Pew Research Center will report on generations moving forward*: https://www.pewresearch.org/short-reads/2023/05/22/how-pew-research-center-will-report-on-generations-moving-forward/
- Philip N. Cohen / Family Inequality – kritika és nyílt levél: https://familyinequality.wordpress.com/2023/06/07/pew-takes-welcome-steps-to-wean-off-fake-generations-and-some-new-research/
- W. Strauss – N. Howe: *Generations* (1991), *The Fourth Turning* (1997)
- McCrindle Research – Generation Alpha / Beta definíciók: https://mccrindle.com.au/

### Modern technikák
- Astrology Zone (Susan Miller) – Mercury Retrograde Dates to 2030: https://www.astrologyzone.com/updated-mercury-retrograde-dates/
- Farmers' Almanac – Mercury Retrograde 2025–2030: https://www.farmersalmanac.com/mercury-retrograde
- Cafe Astrology – Retrograde Cycles/Stations: https://cafeastrology.com/retrogrades.html
- Continuum (Jim Lewis hagyaték) – Astro*Carto*Graphy: https://astrocartography.co.uk/ ; Wikipedia – Astrocartography: https://en.wikipedia.org/wiki/Astrocartography
- William Lilly: *Christian Astrology* (1647); Skyscript (Deborah Houlding) – horary tananyagok: https://www.skyscript.co.uk/
- Chris Brennan: *Hellenistic Astrology: The Study of Fate and Fortune* (2017); The Astrology Podcast – Annual Profections, Zodiacal Releasing: https://theastrologypodcast.com/
- Vettius Valens: *Anthologiae* (IV. könyv, zodiacal releasing)
- Liz Greene: *Saturn: A New Look at an Old Devil* (1976); Lisa Stardust: *The Saturn Return Survival Guide* (2021)
- Wikipedia – Void of course (Moon): https://en.wikipedia.org/wiki/Void_of_course
