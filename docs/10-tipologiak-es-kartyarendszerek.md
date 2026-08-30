# 10. Személyiségtipológiák és kártyarendszerek

> **A fejezet célja:** áttekinteni azokat a személyiségtipológiai és kártya-/jósrendszereket, amelyek a horoszkóp-alkalmazások világában a klasszikus asztrológia **kiegészítő moduljaiként** a legnépszerűbbek. Minden rendszernél kitérünk az eredetre, a belső logikára (hogyan számítható/kvízesíthető), a tudományos státuszra, és a fejezet végén app-integrációs ajánlást adunk.

---

# A) SZEMÉLYISÉGTIPOLÓGIÁK

## 1. MBTI — a 16 típus rendszere

### 1.1 Eredet és alapelv

A **Myers–Briggs Type Indicator** (MBTI) a XX. század közepén született: **Katharine Cook Briggs** és lánya, **Isabel Briggs Myers** dolgozta ki **Carl Gustav Jung** 1921-es *Lélektani típusok* című művének laikus továbbgondolásaként. Egyikük sem volt képzett pszichológus. A teszt a második világháború idején nyerte el mai formáját, és mára a világ legelterjedtebb (bár tudományosan legvitatottabb) személyiségtesztje lett.

### 1.2 A négy dimenzió (dichotómia)

| Dimenzió | Pólusok | Mit ír le? |
|---|---|---|
| **Energia iránya** | **E** (Extraverted – extravertált) ↔ **I** (Introverted – introvertált) | Honnan merít energiát: a külvilágból vagy a belső világból |
| **Észlelés** | **S** (Sensing – érzékelő) ↔ **N** (iNtuition – intuitív) | Konkrét tények és részletek vs. minták, lehetőségek, összefüggések |
| **Döntéshozatal** | **T** (Thinking – gondolkodó) ↔ **F** (Feeling – érző) | Logikai elemzés vs. értékek és emberi szempontok alapján dönt |
| **Életstílus** | **J** (Judging – megítélő) ↔ **P** (Perceiving – észlelő) | Tervezett, lezárt, strukturált vs. rugalmas, nyitott, spontán |

A négy dimenzió 2⁴ = **16 kombinációt** ad, ezek a "típusok".

### 1.3 A 16 típus táblázata

| Kód | Népszerű név | Rövid jellemzés |
|---|---|---|
| **ISTJ** | Kötelességtudó / Logisztikus | Megbízható, gyakorlatias, tényorientált, a hagyomány és a rend embere |
| **ISFJ** | Védelmező | Csendes, gondoskodó, lelkiismeretes, mások szükségleteire hangolt |
| **INFJ** | Tanácsadó / Szószóló | Idealista, mély belátású, értékvezérelt, ritka típusként reklámozzák |
| **INTJ** | Stratéga / Építész | Független, elemző, hosszú távú tervező, magas mérce önmagával szemben |
| **ISTP** | Mesterember / Virtuóz | Gyakorlatias problémamegoldó, hidegvérű, a "hogyan működik?" embere |
| **ISFP** | Művész / Kalandor | Érzékeny, esztéta, jelenben élő, csendesen szenvedélyes |
| **INFP** | Közvetítő / Idealista | Álmodozó, empatikus, erős belső értékrenddel, harmóniakereső |
| **INTP** | Logikus / Gondolkodó | Elméletalkotó, kíváncsi, precíz fogalmi elemző, szórakozott professzor |
| **ESTP** | Vállalkozó | Energikus, kockázatvállaló, itt-és-most cselekvő, gyors reflexek |
| **ESFP** | Szórakoztató | Társasági, spontán, élménykereső, "a buli lelke" |
| **ENFP** | Kampányoló / Lelkesítő | Lelkes, kreatív, emberközpontú, ezer ötlet, szabadságigény |
| **ENTP** | Vitázó / Feltaláló | Szellemes, provokatív, ördög ügyvédje, imádja az intellektuális párbajt |
| **ESTJ** | Igazgató / Végrehajtó | Szervező, határozott, szabálykövető, felelősségvállaló vezető |
| **ESFJ** | Konzul / Gondoskodó | Melegszívű, együttműködő, közösségépítő, harmóniafenntartó |
| **ENFJ** | Protagonista / Tanító | Karizmatikus, inspiráló, mások fejlődését segítő természetes vezető |
| **ENTJ** | Parancsnok | Céltudatos, stratégiai vezető, hatékonyság- és eredményorientált |

### 1.4 Tudományos kritika

Az MBTI az akadémiai pszichológiában **nem elfogadott mérőeszköz**. A fő problémák:

- **Gyenge teszt–reteszt megbízhatóság:** a kutatások (klasszikusan Pittenger 1993-as áttekintése) szerint a kitöltők **kb. 39–76%-a, tipikusan mintegy fele más négybetűs típust kap**, ha 4–6 héttel később újra kitölti a tesztet. Egy "típus" értéke pedig épp a stabilitásán múlna.
- **Hamis dichotómiák:** a valós pontszámeloszlások **nem bimodálisak**, hanem normáleloszlásúak — az emberek többsége a középső tartományban van, így egy apró hangulatingadozás is átbillentheti a "típushatáron" (pl. 52% E-ből 51% I lesz).
- **Gyenge prediktív validitás:** a típus nem jelzi előre megbízhatóan a munkahelyi teljesítményt vagy a párkapcsolati sikert, hiába használják erre HR-körökben.
- **Barnum-hatás:** a típusleírások pozitív, hízelgő, kellően általános megfogalmazásúak — mindenki magára ismer bennük (ugyanaz a mechanizmus, mint a horoszkóp-szövegeknél).
- Az American Psychological Association nem ajánlja komoly kiválasztási/diagnosztikai célra.

### 1.5 A 16personalities-jelenség

A **16personalities.com** (NERIS Analytics) tette az MBTI-kódokat internetes tömegkultúrává. Fontos tudni: a 16personalities **valójában nem MBTI** — saját, "NERIS" modelljük öt **folytonos skálát** mér (a háttérben lényegében Big Five-szerű dimenziókkal), és az MBTI-betűkódokat csak "címkeként" használja, kiegészítve egy ötödik betűvel: **-A (Assertive/magabiztos)** vagy **-T (Turbulent/nyugtalan)** — ez utóbbi gyakorlatilag a neuroticizmus. A siker receptje: ingyenes teszt, szép vizuális karakterek ("Építész", "Szószóló" stb. avatárokkal), megosztható eredmény — pontosan az a formula, amit egy horoszkóp-app is használ.

**App-tanulság:** az MBTI-modul kvízalapú (nem számítható születési adatból!), de a 16 típus × 12 csillagjegy keresztkombinációk ("Milyen egy INFJ Skorpió?") tartalomgenerálásra kiválóak.

---

## 2. Enneagram

### 2.1 Eredet

Az enneagram-szimbólum (kilencágú ábra) **G. I. Gurdjieff** ezoterikus tanításaiban bukkant fel a XX. század elején, de személyiségtipológiává a bolíviai **Óscar Ichazo** tette az 1950–60-as években (Arica-iskola, "ego-fixációk"), majd a chilei pszichiáter, **Claudio Naranjo** dolgozta ki a kilenc típus modern pszichológiai leírását az 1970-es években. Innen terjedt el amerikai jezsuita/spirituális körökön át (Riso–Hudson, Helen Palmer) a coaching- és önismereti piacra. A rendszer hívei ókori (szúfi, evagriosi "kilenc bűn") gyökerekre hivatkoznak, de a mai forma XX. századi konstrukció — Naranjo maga is elismerte, hogy a típusleírások jelentős része saját megfigyelés és intuíció.

### 2.2 A 9 típus

| Típus | Név | Alapfélelem | Alapvágy | Rövid jellemzés |
|---|---|---|---|---|
| **1** | A Reformer / Perfekcionista | hibásnak, romlottnak lenni | jónak, feddhetetlennek lenni | Elvhű, rendezett, kritikus, belső bíráló hanggal |
| **2** | A Segítő | szeretetlennek lenni | szeretve lenni | Gondoskodó, adakozó, mások igényeire hangolt, elismerésre vágyik |
| **3** | A Teljesítő | értéktelennek lenni | értékesnek, sikeresnek lenni | Célorientált, alkalmazkodó, imázstudatos, munkamániára hajlamos |
| **4** | Az Individualista / Romantikus | identitás nélkül maradni | önazonosnak, különlegesnek lenni | Érzékeny, kreatív, melankóliára hajló, hiányélmény-vezérelt |
| **5** | A Megfigyelő / Kutató | kompetencia-vesztés, kiszipolyozás | hozzáértőnek lenni | Visszahúzódó, elemző, tudásgyűjtő, energiáit védő |
| **6** | A Lojális / Kételkedő | támasz és biztonság elvesztése | biztonságban lenni | Elkötelezett, éber, vészforgatókönyv-gyártó, tekintéllyel ambivalens |
| **7** | A Lelkes / Epikureus | fájdalomba, hiányba ragadni | elégedettnek, szabadnak lenni | Optimista, élménygyűjtő, szétszórt, a fájdalom elől menekül |
| **8** | A Kihívó / Főnök | kontrollvesztés, kiszolgáltatottság | önrendelkezés | Erőteljes, konfrontatív, védelmező, a gyengeséget kerüli |
| **9** | A Béketeremtő | elszakadás, konfliktus | belső béke, harmónia | Nyugodt, elfogadó, konfliktuskerülő, önmagát háttérbe soroló |

### 2.3 Szárnyak, triádok, irányok

- **Szárnyak (wings):** minden típust színez a két szomszédos típus egyike, pl. **4w3** (teljesítőbb, extravagánsabb Individualista) vs. **4w5** (visszahúzódóbb, intellektuálisabb Individualista).
- **Triádok (centrumok):**
  - **Zsigeri/harag-centrum:** 8, 9, 1 (ösztön, düh kezelése)
  - **Szív/szégyen-centrum:** 2, 3, 4 (érzelem, önkép)
  - **Fej/félelem-centrum:** 5, 6, 7 (gondolkodás, szorongás kezelése)
- **Stressz- és fejlődési irányok** (a szimbólum belső vonalai mentén):

| Típus | Stresszben (dezintegráció) ezt veszi fel | Fejlődésben (integráció) ezt veszi fel |
|---|---|---|
| 1 | → 4 (melankolikus, sértődött) | → 7 (spontán, derűs) |
| 2 | → 8 (követelőző, agresszív) | → 4 (önreflektív, autentikus) |
| 3 | → 9 (apatikus, sodródó) | → 6 (lojális, együttműködő) |
| 4 | → 2 (tapadó, mások kegyeit kereső) | → 1 (fegyelmezett, elvszerű) |
| 5 | → 7 (kapkodó, szétszórt) | → 8 (magabiztos, cselekvő) |
| 6 | → 3 (imázshajszoló, versengő) | → 9 (nyugodt, bizalomteli) |
| 7 | → 1 (kritikus, türelmetlen) | → 5 (elmélyült, fókuszált) |
| 8 | → 5 (visszahúzódó, titkolózó) | → 2 (nagylelkű, gondoskodó) |
| 9 | → 6 (szorongó, kételkedő) | → 3 (energikus, célratörő) |

### 2.4 Tudományos státusz

Az enneagram empirikus alátámasztottsága **gyenge**: kevés a színvonalas validitásvizsgálat; a létező kérdőívek (pl. RHETI) faktorstruktúrája nem igazolja tisztán a kilenc típust; a rendszer tudományos körökben áltudományosnak vagy legfeljebb "pre-tudományos hipotézisnek" számít. Ugyanakkor coaching- és önismereti eszközként rendkívül népszerű, mert **narratívát** ad (félelem–vágy–elhárítás dinamika), nem csak címkét. App-szempontból: kvízalapú, a szárny/stressz/fejlődés mechanika pedig gazdag, "játszható" tartalomstruktúrát kínál.

---

## 3. Big Five (OCEAN) — a tudományos standard

### 3.1 Az öt faktor

A Big Five nem íróasztal mellett kitalált típustan, hanem **lexikális és faktoranalitikus kutatásokból** (Allport–Odbert szólistái, Cattell, Tupes–Christal, Goldberg, Costa–McCrae) évtizedek alatt kikristályosodott **dimenzionális** modell: nem típusokba sorol, hanem öt folytonos skálán helyez el.

| Faktor | Angol | Magas pontszám | Alacsony pontszám |
|---|---|---|---|
| **O** – Nyitottság | Openness | kíváncsi, fantáziadús, esztétikára fogékony, újdonságkereső | gyakorlatias, konvencionális, rutinkedvelő |
| **C** – Lelkiismeretesség | Conscientiousness | szervezett, fegyelmezett, célratörő, megbízható | spontán, rendetlen, halogató |
| **E** – Extraverzió | Extraversion | társaságkedvelő, energikus, asszertív, élménykereső | visszahúzódó, csendes, tartózkodó |
| **A** – Barátságosság | Agreeableness | együttműködő, bizalomteli, empatikus, segítőkész | versengő, kritikus, gyanakvó |
| **N** – Neuroticizmus | Neuroticism | szorongó, hangulatingadozó, stresszérzékeny | érzelmileg stabil, nyugodt, kiegyensúlyozott |

### 3.2 Miért ez a tudományos standard?

- **Replikálhatóság:** az ötfaktoros szerkezet kultúrákon és nyelveken át újra és újra előjön.
- **Megbízhatóság:** a teszt–reteszt korrelációk hónapok-évek távlatában is magasak (~0,75–0,85) — szemben az MBTI típusváltogatásával.
- **Prediktív validitás:** a lelkiismeretesség pl. a munkateljesítmény és az élettartam egyik legjobb személyiség-prediktora; a neuroticizmus a mentális egészségé.
- **Örökletesség és stabilitás:** ikervizsgálatok szerint a faktorok kb. 40–60%-ban örökletesek, felnőttkorban viszonylag stabilak, de életkorral szelíden változnak (érési hatás).

### 3.3 Hogyan mérik? (BFI-2, IPIP — nyílt tesztek!)

| Eszköz | Tételszám | Jellemzők | Licenc |
|---|---|---|---|
| **BFI-2** (Soto & John, 2017) | 60 | 5 domén × 3 facetta (15 facetta), modern standard | kutatási/nonprofit célra szabadon elérhető (Colby Personality Lab) |
| **BFI-2-S / BFI-2-XS** | 30 / 15 | rövidített formák gyors szűréshez | ugyanaz |
| **IPIP** (Goldberg) | itembank, 3000+ tétel | **International Personality Item Pool — teljesen public domain!** | közkincs, kereskedelmi appban is szabadon használható |
| **IPIP-NEO-120 / -300** | 120 / 300 | facettaszintű, részletes profil | közkincs |
| **Mini-IPIP** | 20 | ultrarövid, 4 tétel/faktor | közkincs |
| NEO-PI-R / NEO-FFI | 240 / 60 | a "hivatalos" kereskedelmi teszt (Costa–McCrae) | fizetős, licencköteles — appba NEM való |

**App-integrálhatóság:** a Big Five az egyetlen rendszer a listán, ahol **jogtiszta, ingyenes, tudományosan validált itemkészlet** (IPIP) áll rendelkezésre. Egy 20–60 tételes kvíz + öt csúszkás eredményprofil + facettabontás könnyen megvalósítható. Marketing-hátránya: nincsenek "típusnevek" — ezt sok app úgy hidalja át, hogy a profilmintázatokhoz utólag ad archetípus-címkéket (ahogy a 16personalities is teszi).

---

## 4. Szocionika (röviden)

A **szocionika** a Jung-i típustan kelet-európai továbbfejlesztése: a litván **Aušra Augustinavičiūtė** dolgozta ki az 1970–80-as években, Jung típusait Antoni Kępiński információ-metabolizmus elméletével ötvözve. A volt Szovjetunió országaiban (Oroszország, Ukrajna, Litvánia) máig élő szubkultúra, saját folyóiratokkal és iskolákkal.

- Szintén **16 típus**, az MBTI-hez hasonló, de nem azonos logikájú kódokkal (pl. ILE, SEI, LII…), és a típusokat híres emberekről/irodalmi alakokról becézik: **Don Quijote** (ILE), **Dumas** (SEI), **Hugo** (ESE), **Robespierre** (LII), **Hamlet** (EIE), **Makszim Gorkij** (LSI), **Zsukov** (SLE), **Jeszenyin** (IEI), **Napóleon** (SEE), **Balzac** (ILI), **Jack London** (LIE), **Dreiser** (ESI), **Stirlitz** (LSE), **Dosztojevszkij** (EII), **Huxley** (IEE), **Gabin** (SLI).
- Sajátossága a **Modell A**: minden típusnál 8 pszichés funkció rendezett struktúrája (bázis-, kreatív-, fájdalompont- stb. pozíciók).
- Legnagyobb vonzereje az **intertípus-kapcsolatok** elmélete: 16 kapcsolattípus, köztük a **dualitás** (az "ideális kiegészítő pár") — ez párkompatibilitás-modulként appba is átvihető gondolat.
- Tudományos megítélése az MBTI-énél is gyengébb (empirikus validálás gyakorlatilag nincs), de a kelet-európai (így potenciálisan a magyar) közönség számára ismerős hivatkozási keret.

Figyelem: az MBTI- és szocionika-típuskódok **nem feleltethetők meg egy-az-egyben** (különösen az introvertált típusok J/P betűje körül van rendszerszintű eltérés) — appban a kettőt nem szabad automatikusan összemosni.

---

## 5. Ayurvéda: a három dósa

### 5.1 Alapelv

Az **ájurvéda** (Indiában ma is államilag támogatott hagyományos orvoslás) szerint az öt elemből (éter, levegő, tűz, víz, föld) három bioenergetikai működésmód, **dósa** épül fel: **vata** (éter+levegő), **pitta** (tűz+víz), **kapha** (víz+föld). Minden emberben mindhárom jelen van, de eltérő arányban.

### 5.2 A három dósa jellemzői

| | **VATA** (szél) | **PITTA** (epe/tűz) | **KAPHA** (nyálka/föld) |
|---|---|---|---|
| Elemek | éter + levegő | tűz + (kevés) víz | víz + föld |
| Kulcsszó | mozgás | átalakítás | stabilitás |
| Testalkat | vékony, könnyű csontozat, nehezen hízik | közepes, atletikus, jó izomzat | erős, teltebb, könnyen hízik |
| Bőr, haj | száraz bőr, vékonyszálú haj | meleg, pirospozsgás bőr, korai őszülés/ritkulás | sima, hűvös, olajos bőr, dús haj |
| Emésztés | változékony, puffadásra hajlamos | erős, "farkasétvágy", gyomorégés | lassú, kiadós étkezés után nehézkes |
| Elme | gyors, kreatív, csapongó | éles, célratörő, kritikus | nyugodt, kitartó, lassan tanul, jól megjegyez |
| Érzelmi hajlam | szorongás, nyugtalanság, alvászavar | harag, türelmetlenség, versengés | ragaszkodás, letargia, ellenállás a változásnak |
| Egyensúlyvesztéskor | kiszáradás, ízületi panaszok, idegesség | gyulladások, bőrproblémák, kiégés | túlsúly, vizesedés, depresszió |
| Kiegyensúlyozza | meleg, rendszeresség, olajos ételek, pihenés | hűsítés, mértékletesség, versengés kerülése | mozgás, könnyű étrend, változatosság, stimuláció |

### 5.3 Prakriti és vikriti

- **Prakriti** = a **születési alkat**: a fogantatáskor rögzülő egyéni dósa-arány, ami az ájurvéda szerint egész életben állandó "alapbeállítás". Ez a horoszkóp-analógia kulcsa: mint egy születési képlet, csak alkati.
- **Vikriti** = a **pillanatnyi állapot**, az aktuális kibillenés — ezt kell az életmóddal a prakritihez "visszahangolni".
- A legtöbb ember **kevert típus** (vata-pitta, pitta-kapha, vata-kapha), a tiszta egydósás és a háromdósás (tridósa) alkat ritka.

### 5.4 A dósa-kvíz logikája és a wellness-app népszerűség

A klasszikus dósa-kvíz 15–30 kérdésből áll (testalkat, bőr, emésztés, alvás, stresszreakció, gondolkodásmód), minden kérdésnél a három válaszlehetőség egy-egy dósára szavaz; az összesített pontszám adja a százalékos dósa-profilt. Fontos finomság: érdemes külön kérdezni a **tartós, egész életre jellemző** vonásokra (prakriti) és a **mostanában jellemző** állapotra (vikriti). A dósa-tipológia a jóga-wellness hullámmal (Deepak Chopra, Banyan Botanicals, jóga-appok) vált globális tömegtermékké: étrendi, napirendi (dinacsarja), szezonális (ritucsarja) ajánlásokat lehet rá fűzni — vagyis **napi személyre szabott tartalom** generálható belőle, ami app-szempontból aranyat ér. Tudományos validitása nem igazolt; egészségügyi tanácsadásként tálalni nem szabad, életmód-inspirációként igen.

---

## 6. Kínai gyógyászat: az öt elem alkattana (röviden)

A hagyományos kínai orvoslás (TCM) **wu xing** (öt változási fázis) tana szerint az öt elem – **fa, tűz, föld, fém, víz** – nemcsak a természet ciklusait, hanem embertípusokat is leír. Minden elemhez tartozik szervpár, érzelem, évszak, íz; az alkattan szerint mindenkiben egy-két elem dominál.

| Elem | Szervpár | Érzelem | Típusjellemzés (egyensúlyban) | Kibillenve |
|---|---|---|---|---|
| **Fa** (mu) | máj / epehólyag | harag | tervező, úttörő, versengő, növekedésorientált | ingerlékeny, frusztrált, merev |
| **Tűz** (huo) | szív / vékonybél | öröm | karizmatikus, szenvedélyes, társaságkedvelő | szétszórt, túlpörgött, szorongó |
| **Föld** (tu) | lép / gyomor | töprengés | gondoskodó, megbízható, közösségi "anyafigura" | aggodalmaskodó, rágódó, tapadó |
| **Fém** (jin) | tüdő / vastagbél | bánat | precíz, elvszerű, esztéta, önfegyelmezett | rideg, perfekcionista, elengedni képtelen |
| **Víz** (shui) | vese / húgyhólyag | félelem | bölcs, mély, kitartó, önálló | visszahúzódó, félelemvezérelt, kimerült |

Az elemek **tápláló (sheng)** és **kontrolláló (ke)** ciklusban hatnak egymásra (fa→tűz→föld→fém→víz→fa, illetve fa⊣föld⊣víz⊣tűz⊣fém⊣fa) — ez a dinamika a kínai asztrológia (BaZi, négy pillér) fejezetéhez is kapcsolódik, ahol az elemek a születési évből/hónapból/napból/órából számíthatók. Alkattanként viszont — a dósákhoz hasonlóan — **kvízzel** mérik fel. App-ban jól kombinálható a kínai állatjegy-modullal (elem + állat = 60-as ciklus).

---

## 7. A négy temperamentum

### 7.1 Hippokratész és Galénosz nedvtana

Az európai orvoslás legrégebbi tipológiája a **humorálpatológia**: Hippokratész (Kr. e. V. sz.) szerint a testet négy nedv (humor) — vér, sárga epe, fekete epe, nyálka — egyensúlya működteti; **Galénosz** (Kr. u. II. sz.) ebből alkotta meg a négy **temperamentumot** mint jellemtípust. A rendszer közel kétezer évig az orvoslás és az emberismeret alapja volt.

| Temperamentum | Nedv | Minőségek | Jellemzés | Árnyoldal |
|---|---|---|---|---|
| **Szangvinikus** | vér (sanguis) | meleg + nedves | derűs, társasági, lelkes, optimista | csapongó, felszínes, megbízhatatlan |
| **Kolerikus** | sárga epe (cholé) | meleg + száraz | energikus, akaraterős, vezéralkat | lobbanékony, türelmetlen, uralkodó |
| **Melankolikus** | fekete epe (melaina cholé) | hideg + száraz | mély érzésű, elemző, perfekcionista | borúlátó, szorongó, sértődékeny |
| **Flegmatikus** | nyálka (phlegma) | hideg + nedves | nyugodt, békés, kiszámítható, diplomatikus | passzív, nehezen mozdul, közönyös |

### 7.2 Kapcsolat a klasszikus asztrológiával — az elem–temperamentum megfeleltetés

Ez a fejezet **kulcsfontosságú kapocs** a horoszkóp-app számára, mert a temperamentumtan és az asztrológia a hellenisztikus kortól kezdve **egyetlen közös rendszert** alkotott: a négy elem, a négy nedv és a négy minőségpár (meleg/hideg × nedves/száraz) megfeleltethető egymásnak. A hagyományos (különösen a reneszánsz) asztrológiában a születési képletből formálisan **temperamentum-analízist** számoltak (aszcendens, Hold, Nap-szak, uralkodó bolygók minőségei alapján).

| Elem | Minőségek | Temperamentum | Csillagjegyek |
|---|---|---|---|
| **Tűz** | meleg + száraz | **kolerikus** | Kos, Oroszlán, Nyilas |
| **Levegő** | meleg + nedves | **szangvinikus** | Ikrek, Mérleg, Vízöntő |
| **Föld** | hideg + száraz | **melankolikus** | Bika, Szűz, Bak |
| **Víz** | hideg + nedves | **flegmatikus** | Rák, Skorpió, Halak |

**App-lehetőség:** ez az egyetlen tipológia, amely **közvetlenül a születési képletből számítható** — a képlet bolygóinak elem-eloszlásából (pl. hány planéta áll tűz-, föld-, levegő-, vízjegyben, súlyozva Nap/Hold/aszcendens szerint) automatikus temperamentum-profil generálható, kvíz nélkül.

### 7.3 Modern utóélet: Eysenck és társai

- **Wilhelm Wundt** és **Immanuel Kant** még leíró keretként használta; **Ivan Pavlov** az idegrendszeri típusokkal (erős/gyenge, kiegyensúlyozott/kiegyensúlyozatlan) hozta összefüggésbe.
- **Hans Eysenck** mutatta meg a legelegánsabb hidat a modern vonáselmélethez: két dimenziója, az **extraverzió** és a **neuroticizmus (emocionális labilitás)** koordinátarendszerében a négy negyed épp a négy klasszikus temperamentumot adja ki:
  - stabil + extravertált = **szangvinikus**
  - labilis + extravertált = **kolerikus**
  - labilis + introvertált = **melankolikus**
  - stabil + introvertált = **flegmatikus**
- A keresztény önismereti irodalomban (Tim LaHaye) és a népszerű pszichológiában máig élő keret. A nedvtan mint élettan természetesen rég megdőlt, de a négyes felosztás mint kommunikációs modell (DISC is rokon vele) tovább él.

---

# B) KÁRTYA- ÉS JÓSRENDSZEREK

## 8. Lenormand-kártya

### 8.1 A névadó és a valódi eredet

**Marie Anne Lenormand** (1772–1843) a napóleoni Párizs leghíresebb jósnője volt — a legenda szerint Joséphine császárné és a kor elitje is hozzá járt. Csakhogy a ma "Lenormand-kártyaként" ismert 36 lapos paklihoz **személyesen semmi köze**: ő saját, egészen más eszközökkel dolgozott. A 36 lapos rendszer valódi őse a nürnbergi **Johann Kaspar Hechtel** által tervezett **"Das Spiel der Hoffnung" (A remény játéka, 1799 körül)** — eredetileg társasjáték, amelyben a 36 képes lapot 4×9-es táblává terítették és bábukkal lépkedtek rajta (a cél a 35-ös Horgony/Remény mező volt); már a korabeli füzet is említette, hogy a lapok jóslásra is használhatók. A jósnő halála után, az 1840-es években (első ismert példányok ~1846, Koblenz) a kiadók **marketingfogásból** nevezték el a paklit "Petit Lenormand"-nak — a híres név eladta a terméket. (Ugyanez a mechanizmus, mint sok mai "ősi" rendszer mögött.)

### 8.2 A 36 lap jelentései

Minden laphoz hagyományosan egy francia kártya (inzert) is tartozik.

| # | Lap | Kártyainzert | Alapjelentés |
|---|---|---|---|
| 1 | Lovas | kőr 9 | hír, üzenet, érkezés, mozgás |
| 2 | Lóhere | káró 6 | kis szerencse, remény, gyors, múló lehetőség |
| 3 | Hajó | pikk 10 | utazás, távolság, külföld, vágyakozás, kereskedelem |
| 4 | Ház | kőr K | otthon, család, biztonság, stabilitás, ingatlan |
| 5 | Fa | kőr 7 | egészség, életerő, lassú növekedés, gyökerek |
| 6 | Felhők | treff K | zavar, bizonytalanság, átmeneti nehézség (sötét/világos oldal!) |
| 7 | Kígyó | treff D | csábítás, rivális nő, kerülőút, árulás, okosság |
| 8 | Koporsó | káró 9 | lezárás, vég, betegség, gyász, átalakulás |
| 9 | Csokor | pikk D | ajándék, öröm, meghívás, kedvesség, szépség |
| 10 | Kasza | káró B | hirtelen vágás, veszély, döntés, aratás (gyors esemény) |
| 11 | Seprű/Ostor | treff B | vita, veszekedés, ismétlődő konfliktus, feszültség |
| 12 | Madarak | káró 7 | izgatottság, pletyka, telefonálás, idős pár, aggodalom |
| 13 | Gyermek | pikk B | újrakezdés, kicsi(nység), ártatlanság, gyermek |
| 14 | Róka | treff 9 | ravaszság, óvatosság, hamisság, (modern: munka(hely)) |
| 15 | Medve | treff 10 | erő, hatalom, főnök, anya(figura), vagyon, féltékenység |
| 16 | Csillagok | kőr 6 | remény, inspiráció, tisztánlátás, szerencsés vezettetés |
| 17 | Gólya | kőr D | változás, költözés, újdonság, (gyermekáldás) |
| 18 | Kutya | kőr 10 | barátság, hűség, megbízható személy |
| 19 | Torony | pikk 6 | hatóság, intézmény, elszigeteltség, hosszú élet, tekintély |
| 20 | Kert/Park | pikk 8 | társaság, nyilvánosság, rendezvény, közösség |
| 21 | Hegy | treff 8 | akadály, késedelem, ellenség, blokk |
| 22 | Út/Válaszút | káró D | döntés, alternatívák, kettősség, választás |
| 23 | Egerek | treff 7 | veszteség, őrlődés, lopás, ami lassan felemészt |
| 24 | Szív | kőr B | szerelem, érzelmek, szívügy |
| 25 | Gyűrű | treff A | kapcsolat, szerződés, elkötelezettség, házasság, ismétlődés |
| 26 | Könyv | káró 10 | titok, tudás, tanulás, ami még rejtve van |
| 27 | Levél | pikk 7 | írásos hír, dokumentum, e-mail, felszínes kapcsolat |
| 28 | Úr (Férfi) | kőr A | a kérdező (férfi) vagy a kérdezett férfi |
| 29 | Hölgy (Nő) | pikk A | a kérdező (nő) vagy a kérdezett nő |
| 30 | Liliom | pikk K | békesség, érettség, idős férfi, erény/érzékiség, tél |
| 31 | Nap | káró A | siker, energia, boldogság, győzelem (a pakli legjobb lapja) |
| 32 | Hold | kőr 8 | hírnév, elismerés, érzelmek, romantika, intuíció |
| 33 | Kulcs | káró 8 | megoldás, bizonyosság, "igen", fontos felismerés |
| 34 | Halak | káró K | pénz, bőség, üzlet, függetlenség |
| 35 | Horgony | pikk 9 | stabilitás, munka, hosszú táv, megérkezés, kitartás |
| 36 | Kereszt | treff 6 | teher, sors, próbatétel, hit (rövid, de intenzív nehézség) |

### 8.3 A Grand Tableau és az olvasási logika

A Lenormand koronaterítése a **Grand Tableau** ("nagy tabló"): **mind a 36 lap** kiterítése 4×9-es (vagy 8×4+4-es) rácsban. Olvasási technikái:

- **Szignifikátor-központú olvasás:** a kérdező lapja (Úr/Hölgy) körüli lapok a legfontosabbak; ami előtte van = jövő, mögötte = múlt, felette = ami "a fejében jár" / ami rá nehezedik, alatta = amin uralkodik.
- **Házak:** minden pozíciónak saját alapjelentése van (1. ház = hír, 2. = szerencse…), a ráeső lap ezzel kombinálódik.
- **Láncolás, tükrözés, lovaglépés:** lapok összekötése irányok mentén.
- **Kis terítések:** 3 lapos sor (állítmány-logika: a középső lap a téma, a szélsők módosítják), 9 lapos négyzet.

### 8.4 Miben más, mint a tarot és a cigánykártya?

| Szempont | **Lenormand** | **Tarot** | **Cigánykártya** |
|---|---|---|---|
| Lapszám | 36 | 78 (22 nagy + 56 kis arkánum) | 36 |
| Laptartalom | egyszerű, hétköznapi szimbólumok (ház, kutya, levél) | archetipikus, ezoterikus képek (Halál, Torony, Főpapnő) | zsánerjelenetek, érzelmes életképek, feliratozva |
| Olvasásmód | **kombinatorikus, "mondatszerű"**: a lapok párban/láncban olvasandók (Lovas+Szív = szerelmes üzenet) | laponként mély, meditatív-pszichologizáló értelmezés | jelenetek összefűzése, erősen érzelmi-történetmesélő |
| Jelentés jellege | konkrét, tárgyszerű, jövendőmondó | szimbolikus, önismereti, spirituális | hétköznapi-érzelmi (irigység, hűtlenség, öröm) |
| Fordított lapok | nincsenek | gyakran igen | nincsenek |
| Eredet | német társasjáték, 1799 | itáliai játékkártya (XV. sz.), ezoterizálva a XVIII–XIX. sz.-ban | XIX–XX. századi közép-európai (osztrák–magyar) jóskártya |

App-szempontból a Lenormand előnye a **kis, zárt lapkészlet + erős kombinációs logika**: a 36×36 páros kombináció (~1260 jelentéspár) előre megírható adatbázisként, ami "intelligensnek ható" kártyaolvasó modult ad véletlengenerátorral.

## 9. Destiny Cards (a sors kártyái) — az 52 lapos rendszer

### 9.1 Eredet

A rendszer alapműve **Olney H. Richmond** 1893-as *The Mystic Test Book* című könyve (Grand Rapids, "Order of the Magi"), amely a közönséges 52 lapos francia kártyát "az idő könyveként" értelmezi: 52 lap = 52 hét, 4 szín = 4 évszak, 13 lap/szín = 13 holdhónap, a lapok számértékeinek összege a Jokerrel együtt 365,25 ≈ az év napjai. A XX. század végén **Robert Lee Camp** (*Cards of Your Destiny*, *Love Cards*) és Sharon Jeffers népszerűsítette újra; ma "cardology" néven fut, és több mobil-app is épül rá.

### 9.2 A születési kártya kiszámítása (lookup-logika)

Minden születésnaphoz (hónap+nap, az évtől függetlenül!) egy kártya tartozik. A képlet:

```
szoláris_érték = 55 − (2 × hónap + nap)
```

A szoláris értéket a következő sorrend képezi le kártyára: **1–13 = Kőr Ász…Király, 14–26 = Treff Ász…Király, 27–39 = Káró Ász…Király, 40–52 = Pikk Ász…Király.** Ha az eredmény **0** (ez csak december 31-én fordul elő: 55 − (24+31) = 0), a születési kártya a **Joker** — az egyetlen "megfejthetetlen" lap.

Példák:
- **Január 1.:** 55 − (2×1 + 1) = 52 → **Pikk Király** (a rendszer szerint a "legerősebb" lap)
- **Július 4.:** 55 − (14 + 4) = 37 → 37 − 26 = 11 → **Káró Bubi**
- **December 25.:** 55 − (24 + 25) = 6 → **Kőr 6**

Ez appba **triviálisan beépíthető**: egyetlen képlet vagy egy 366 soros lookup-tábla, semmilyen kvíz nem kell. A teljes rendszer ezen felül minden kártyához "életterítést" (life spread), bolygókártyákat (Merkúr–Neptun periódusok), éves és 52 napos ciklusokat rendel — mindez determinisztikus táblázatokból számítható.

### 9.3 A lapok jelentése röviden

**Színek:**

| Szín | Terület | Életszakasz-analógia |
|---|---|---|
| **Kőr** ♥ | szerelem, érzelmek, család, kapcsolatok | gyermekkor / tavasz |
| **Treff** ♣ | tudás, kommunikáció, tanulás, elme | ifjúkor / nyár |
| **Káró** ♦ | érték, pénz, anyagi világ, siker | felnőttkor / ősz |
| **Pikk** ♠ | munka, egészség, bölcsesség, spiritualitás | öregkor / tél |

**Számértékek:** Ász = kezdet, vágy, én; 2 = társ, együttműködés; 3 = kreativitás, változékonyság; 4 = stabilitás, alap; 5 = változás, utazás; 6 = felelősség, karma, egyensúly; 7 = spirituális próba, hit; 8 = erő, hatalom; 9 = lezárás, adakozás, egyetemesség; 10 = beteljesülés, siker; Bubi = kreatív/játékos (éretlen) fiatal; Dáma = befogadó mesteri szint, szolgálat; Király = érett mesteri szint, vezetés. A születési kártya jelentése = szín × számérték kombinációja (pl. Kőr 6 = "a szeretet békéltetője, érzelmi felelősség és karma").

## 10. Ji King (I Ching / Változások Könyve)

### 10.1 A rendszer

A **Ji King** (Yijing, i. e. I. évezred, Kína) a világ egyik legrégebbi jóskönyve és bölcseleti műve. Alapegysége a **vonal**: egész (— yang) vagy megszakított (– – yin). Három vonal = **trigram** (8 db), két trigram egymáson = **hexagram** (8×8 = **64 db**). Minden hexagramhoz ítéletszöveg, képszöveg és vonalankénti magyarázat tartozik.

### 10.2 A 8 trigram

| Trigram | Név (pinyin) | Jelentés | Természeti kép | Családtag | Tulajdonság |
|---|---|---|---|---|---|
| ☰ | Qian | az Alkotó | ég | apa | teremtő erő |
| ☷ | Kun | a Befogadó | föld | anya | odaadás |
| ☳ | Zhen | a Serkentő | mennydörgés | első fiú | mozgás |
| ☵ | Kan | a Mélység | víz | középső fiú | veszély |
| ☶ | Gen | a Nyugvó | hegy | legkisebb fiú | megállás |
| ☴ | Xun | a Szelíd | szél/fa | első leány | behatolás |
| ☲ | Li | a Tapadó | tűz | középső leány | világosság |
| ☱ | Dui | a Derűs | tó | legkisebb leány | öröm |

### 10.3 Hexagram-generálás

- **Pénzérmés módszer (a népszerű):** 3 egyforma érme, 6 dobás (alulról felfelé építve a hexagramot). Fej = 3, írás = 2; a három érme összege: **6** = öreg yin (változó – –), **7** = fiatal yang (—), **8** = fiatal yin (– –), **9** = öreg yang (változó —). A **változó vonalak** átfordulásával egy második hexagram is keletkezik ("ebből ebbe tart a helyzet") — a válasz a kiinduló hexagram + a változó vonalak szövege + a keletkező hexagram.
- **Cickafarkszár-módszer (a klasszikus):** 50 szárból bonyolult, meditatív osztogatási rituálé; a valószínűségek itt aszimmetrikusak (az öreg yin ritkább, mint az öreg yang), szemben az érmés módszer szimmetriájával.
- **App-implementáció:** virtuális érmedobás (3 bit/vonal, 6 vonal) másodpercek alatt, a valószínűségek pontosan modellezhetők (érmés: 6:1/8, 7:3/8, 8:3/8, 9:1/8).

### 10.4 A 64 hexagram (szám + név + egysoros jelentés)

| # | Név | Jelentés | # | Név | Jelentés |
|---|---|---|---|---|---|
| 1 | Qian – Az Alkotó | tiszta teremtő erő, kezdeményezés | 33 | Dun – A visszavonulás | stratégiai visszahúzódás |
| 2 | Kun – A Befogadó | odaadás, elfogadás, szolgálat | 34 | Da Zhuang – A nagy ereje | erő, önmérséklettel használva |
| 3 | Zhun – A kezdet nehézsége | nehéz, de ígéretes indulás | 35 | Jin – A haladás | gyors előrejutás, elismerés |
| 4 | Meng – Az ifjonti balgaság | tanulás, tapasztalatlanság | 36 | Ming Yi – A fény elsötétülése | nehéz idők, rejtsd el fényed |
| 5 | Xu – A várakozás | türelmes, bizakodó kivárás | 37 | Jia Ren – A család | otthoni rend, szerepek |
| 6 | Song – A viszály | konfliktus, pereskedés kerülendő | 38 | Kui – Az ellentét | szembenállás, apró lépések |
| 7 | Shi – A hadsereg | fegyelem, szervezett erő | 39 | Jian – Az akadály | akadályoztatás, keress segítséget |
| 8 | Bi – Az összetartás | szövetség, csatlakozás | 40 | Jie – A megszabadulás | feszültség oldódása |
| 9 | Xiao Chu – A kicsi megfékező ereje | apró lépések, finom befolyás | 41 | Sun – A csökkenés | egyszerűsítés, áldozat |
| 10 | Lü – A fellépés | óvatos haladás veszély közelében | 42 | Yi – A gyarapodás | növekedés, kedvező idő |
| 11 | Tai – A béke | virágzás, harmónia | 43 | Guai – Az áttörés | határozott, nyílt fellépés |
| 12 | Pi – A pangás | megrekedés, várd ki a végét | 44 | Gou – A találkozás | váratlan (kísértő) találkozás |
| 13 | Tong Ren – Közösség | összefogás nyílt céllal | 45 | Cui – Az összegyűlés | közösség, gyülekezés |
| 14 | Da You – Nagy birtoklás | bőség, felelősséggel | 46 | Sheng – A felemelkedés | fokozatos emelkedés |
| 15 | Qian – A szerénység | alázat, ami felemel | 47 | Kun – A kimerülés | szorongattatás, belső tartás |
| 16 | Yu – A lelkesedés | lendület, inspiráció | 48 | Jing – A kút | kimeríthetetlen forrás, tápláló alap |
| 17 | Sui – A követés | alkalmazkodás, sodrás követése | 49 | Ge – A forradalom | gyökeres megújulás |
| 18 | Gu – A megromlott helyrehozatala | régi hibák kijavítása | 50 | Ding – Az üst | átalakítás, kultúra, táplálás |
| 19 | Lin – A közeledés | kedvező időszak közeleg | 51 | Zhen – A megrázkódtatás | sokk, ami felébreszt |
| 20 | Guan – A szemlélődés | megfigyelés, példamutatás | 52 | Gen – A nyugalom | megállás, meditáció |
| 21 | Shi He – Az átharapás | akadály határozott elhárítása, igazságtétel | 53 | Jian – A fokozatos fejlődés | lassú, szerves haladás |
| 22 | Bi – A kellem | szépség, forma (ne csak külsőség) | 54 | Gui Mei – A férjhez menő leány | alárendelt helyzet, tapintat |
| 23 | Bo – A széthullás | lebomlás, ne cselekedj most | 55 | Feng – A bőség | tetőpont, delelő |
| 24 | Fu – A visszatérés | fordulópont, megújulás | 56 | Lü – A vándor | átmeneti helyzet, idegenben |
| 25 | Wu Wang – Az ártatlanság | spontán, őszinte cselekvés | 57 | Xun – A szelíd | finom, kitartó befolyás |
| 26 | Da Chu – A nagy megfékező ereje | felhalmozott erő, önfegyelem | 58 | Dui – A derűs | öröm, baráti eszmecsere |
| 27 | Yi – A táplálás | mivel táplálod magad (testileg-lelkileg)? | 59 | Huan – A feloldódás | merevség feloldása, újraegyesítés |
| 28 | Da Guo – A nagy túlsúlya | rendkívüli terhelés, rendkívüli idők | 60 | Jie – A korlátozás | egészséges határok, mérték |
| 29 | Kan – A mélység | ismétlődő veszély, maradj hű magadhoz | 61 | Zhong Fu – A benső igazság | őszinteség, ami áthat |
| 30 | Li – A tapadó | világosság, függés attól, amiből élünk | 62 | Xiao Guo – A kicsi túlsúlya | maradj kicsiben, részletek ideje |
| 31 | Xian – A kölcsönös vonzalom | vonzódás, udvarlás, hatás | 63 | Ji Ji – Beteljesedés után | kész, de éberség kell |
| 32 | Heng – A tartósság | állhatatosság, kitartó kapcsolat | 64 | Wei Ji – Beteljesedés előtt | még nem kész, utolsó lépés óvatosan |

### 10.5 A Wilhelm-fordítás jelentősége

**Richard Wilhelm** német misszionárius-sinológus 1924-es fordítása (kínai tudós mestere, Lao Naj-hszüan segítségével) tette a Ji Kinget a Nyugat számára élő könyvvé. Az angol kiadáshoz (Baynes-fordítás, 1950) **C. G. Jung** írt előszót, amelyben a **szinkronicitás** elvével kapcsolta össze a jóslás működését — ezzel a Ji King a nyugati pszichologizáló-önismereti kultúra része lett (a hatvanas évek ellenkultúrájának kultuszkönyve). Magyarul több fordítás létezik (a Wilhelm-alapú kiadások a legelterjedtebbek). A hexagramszövegek régi fordításai több nyelven közkincsek — app-tartalomhoz azonban érdemes **saját összefoglaló szövegeket** írni a jogtisztaság kedvéért.

### 10.6 Napi orákulum modulként

A Ji King ideális "napi kártya" jellegű modul: a felhasználó feltesz egy kérdést (vagy csak "a nap hexagramját" kéri), az app animált érmedobással generál egy hexagramot (+ változó vonalak + második hexagram), és rövid, modern nyelvű értelmezést ad. Számításigénye minimális (64+64 szöveg + 384 vonalszöveg opcionálisan), az élmény mégis interaktív és rituálészerű — ez a kombináció a jósmodulok között kiemelkedően jó.

## 11. Álmoskönyv és álomfejtés

### 11.1 A magyar álmoskönyv-hagyomány és Krúdy

Az álmoskönyv-műfaj Európában a késő középkortól nyomtatásban terjedő ponyvairodalom; magyar földön a XVIII–XIX. századi kalendáriumok és vásári füzetek (pl. az 1756-os *Álmos Könyvetske*, amelyre Krúdy is hivatkozik) éltették. A műfaj csúcsa és máig etalonja **Krúdy Gyula** **Álmoskönyve** (első kiadás **1920**, bővítve 1925; teljes címén *Álmoskönyv – Tenyérjóslások könyve*). Krúdy nem "kitalálta", hanem **összegyűjtötte** az álomjelentéseket: régi álmoskönyvekből, kalendáriumokból, falusi öregek és "álomlátó asszonyok" (köztük saját, álomfejtéssel foglalkozó édesanyja) hagyományából — majd összeeresztette mindezt a maga páratlan irodalmi stílusával. Az eredmény egyszerre néprajzi forrásértékű gyűjtemény és szépirodalom; ábécérendben közli a szimbólumokat, külön fejezetekkel a babonákról. A teljes szöveg a Magyar Elektronikus Könyvtárban szabadon elérhető.

### 11.2 Gyakori álomszimbólumok a magyar hagyomány szerint

A jelentések forrásonként változnak; az alábbi táblázat a magyar népi/álmoskönyvi hagyomány legelterjedtebb értelmezéseit összegzi (jellemzően Krúdy nyomán). Jellegzetes logikái: a **fordított jelentés** (esküvő → gyász, sírás → öröm), az **időjárás-jóslás** (halott → eső) és a hangzás-/képzettársítás.

| Szimbólum | Hagyományos jelentés |
|---|---|
| Víz (tiszta) | egészség, öröm, jó szerencse |
| Víz (zavaros) | betegség, szomorúság, bosszúság |
| Fog (kihullik) | halálhír, rokon vagy ismerős halála; fájdalom nélkül: pletyka |
| Kígyó | ellenség, árulás, hamis barát; megölni: győzelem |
| Repülés | siker, szabadulás, nagyra törő vágyak (fiataloknak szerencse) |
| Zuhanás | rangvesztés, kudarc, csalódás |
| Halott (élőként) | eső, időváltozás; halottal beszélni: hosszú élet, hír |
| Halál (sajátunk) | hosszú élet (fordított jelentés) |
| Esküvő, lakodalom | gyász, szomorúság (fordított jelentés) |
| Temetés | lakodalom, örömhír (fordított jelentés) |
| Újszülött, kisbaba | csoda, nagy újdonság, családi öröm; gond is lehet |
| Meztelenség | szégyen, betegség, veszteség; szegénynek: változás |
| Üldözés | szorongató ügy, rendezetlen adósság, bűntudat |
| Tűz | veszedelem, harag, perpatvar; füst nélkül: szerelem |
| Vér | rokonság híre; vérzést látni: veszteség, betegség |
| Pénz (papír) | szegénység, csalódás | 
| Pénz (érme, találni) | kisebb bosszúság vagy váratlan haszon (forrásonként eltér) |
| Arany | hamis fény, csalás, hiúság |
| Tetű, bolha | pénz, váratlan haszon (klasszikus fordított jelentés) |
| Hal | szerencse, eső; halat fogni: nyereség |
| Ló (fehér) | szerencse, jó hír; sovány ló: gond |
| Kutya | hű barát; ugató/harapó kutya: rágalom, ellenség |
| Macska | hamis asszony, álnokság, irigy szomszéd |
| Farkas | erős ellenség, veszedelem |
| Medve | gazdagság vagy erős ellenfél; szelíd medve: jó barát |
| Egér | tolvaj a háznál, apró veszteség |
| Pók | szerencse, ha szövi hálóját; pénz kis munkával |
| Madár | hír; fehér madár: jó hír, fekete: rossz hír |
| Kenyér | jólét, megélhetés, áldás; friss kenyér: szerencse |
| Bor | vidámság; kiömlött bor: veszekedés |
| Tej | ártatlanság, egészség, békesség |
| Méz | édes élet, de hízelgőktől óvakodj |
| Alma (szép, piros) | szerelem, egészség; férges alma: csalódás |
| Virág | öröm, szerelem; hervadt virág: múló érzelem, betegség |
| Haj (kihullik) | veszteség, gond, szégyen |
| Templom | vigasz, békesség; imádkozni: teljesülő kívánság |
| Harang | hír, figyelmeztetés; félrevert harang: veszedelem |
| Létra, lépcső (felfelé) | emelkedés, siker; lefelé: hanyatlás |
| Út, utazás | változás az életben, új lehetőség |
| Eső | áldás, bőség; zápor: múló bosszúság |
| Hó | tisztaság, nyugalom; nyáron hó: váratlan fordulat |
| Vihar | nagy változás, harag, családi perpatvar |
| Koporsó | hosszú élet vagy nagy változás (fordított jelentés) |
| Gyertya (égő) | remény, vendég; kialvó gyertya: rossz jel |

### 11.3 Kontraszt: a modern álomkutatás

A tudományos álomkutatás a szimbólum-szótár megközelítést **nem támasztja alá**:

- **Freud** (1900, *Álomfejtés*) az álmot vágyteljesítésnek tartotta, de már ő is hangsúlyozta: a szimbólumok jelentése **egyénenként más** (szabad asszociáció kell, nem szótár). **Jung** a kollektív tudattalan archetípusait kereste az álmokban — ő áll a "közös szimbólumjelentés" gondolathoz a legközelebb, de nála is az egyéni kontextus dönt.
- A **REM-alvás** felfedezése (Aserinsky–Kleitman, 1953) után az **aktiváció-szintézis modell** (Hobson–McCarley, 1977) az álmot az agytörzsi véletlenszerű aktivitás előagyi "megszövegezésének" tartja; a mai memóriakonszolidációs elméletek szerint az álom az emléknyomok feldolgozásának mellékterméke lehet.
- A **kontinuitás-hipotézis** (Hall–Van de Castle tartalomelemzési módszere, Domhoff) szerint az álmok tartalma az éber élet gondjait és foglalatosságait tükrözi — tehát az álom **rólunk** szól, nem a jövőről; prediktív erejére nincs bizonyíték.
- Amiben mégis van racionális mag: a visszatérő álomtémák (fogak, zuhanás, üldözés, meztelenség) **kultúrákon átívelően gyakoriak** — tipikus szorongásmintázatokat tükröznek, ezért egy app álom-modulja őszintén pozicionálható úgy: "a hagyomány szerint… / a pszichológia szerint…".

**App-megvalósítás:** az álmoskönyv-modul lényegében egy **kereshető szótár** (szimbólum → jelentés), kiegészíthető álomnaplóval (dátum + holdfázis + címkék), ami a kronobiológia-fejezet holdnaptár-moduljával is összeköthető. A Krúdy-szöveg (1933-ban elhunyt szerző) már közkincs, de a modern kiadások szerkesztői kiegészítései nem — saját szócikk-adatbázis írása javasolt.

---

# APP-INTEGRÁCIÓS AJÁNLÁS

## Számíthatóság és beépítési prioritás

| Prio | Modul | Bemenet | Számítható-e determinisztikusan? | Fejlesztési igény | Megjegyzés |
|---|---|---|---|---|---|
| 1 | **Destiny Cards** | születési hónap+nap | **igen — egyetlen képlet** (55 − (2h+n)) | minimális (53 lapszöveg) | a legolcsóbb "wow": azonnali eredmény regisztrációkor, jól kombinál a numerológiával |
| 2 | **Négy temperamentum** | születési képlet (elem-eloszlás) | **igen — a meglévő asztrológia-motorból** | kicsi (súlyozási szabály + 4–12 szöveg) | egyedülálló: hitelesen köti össze az asztrológiát a személyiségtannal |
| 3 | **Ji King napi orákulum** | véletlen (virtuális érmedobás) | igen (RNG + lookup) | közepes (64+64 hexagramszöveg, opc. 384 vonal) | erős napi visszatérés-ösztönző, szép animációs lehetőség |
| 4 | **Lenormand napi kártya / 3 lapos terítés** | véletlen | igen (RNG + lookup) | közepes (36 lap + ~630–1260 párkombináció) | a párkombinációs adatbázis "okos" olvasó élményét adja; Grand Tableau későbbi prémium funkció |
| 5 | **Álmoskönyv-szótár + álomnapló** | felhasználói keresés/napló | n. a. (tartalomszolgáltatás) | közepes (300–1000 szócikk) | erős magyar lokálszín (Krúdy!), holdnaptárral összeköthető; keresőmodul kell |
| 6 | **Dósa-kvíz (ájurvéda)** | 15–30 kérdéses kvíz | nem — kvízalapú | közepes (kvízmotor + 3+3 kevert profilszöveg) | wellness-közönségnek vonzó; napi/szezonális tippgenerátor építhető rá |
| 7 | **Big Five (IPIP)** | 20–60 kérdéses kvíz | nem — kvízalapú | közepes (public domain itemek + 5 skálás kiértékelés) | az egyetlen tudományos modul — "a tudomány szerint" sarok növeli az app hitelességét; jogtiszta |
| 8 | **Enneagram-kvíz** | kvíz | nem | közepes-nagy (típusteszt + szárny/irány-mechanika) | gazdag tartalomháló (9 típus × szárnyak × irányok), önismereti közönségnek |
| 9 | **MBTI-jellegű kvíz** | kvíz | nem | közepes | védjegy-óvatosság: az "MBTI" és "Myers-Briggs" bejegyzett védjegy — saját 16 típusos rendszerként, saját tesztitemekkel implementálandó (ahogy a 16personalities tette) |
| 10 | **TCM öt elem alkat** | kvíz (vagy BaZi-ből számítva) | részben (BaZi-integrációval igen) | közepes | akkor éri meg, ha a kínai asztrológia (BaZi) modul már létezik — abból determinisztikusan levezethető |
| 11 | **Szocionika** | kvíz | nem | nagy (16 típus + 16×16 kapcsolattípus) | réteg-közönség; a dualitás-alapú párkompatibilitás az egyetlen igazán appba kívánkozó eleme |

## Keresztkötési lehetőségek (a modulok összefűzése)

- **Temperamentum ↔ asztrológia:** a születési képletből számolt elem-eloszlás → temperamentum-profil (történelmileg hiteles kapcsolat, kommunikálható is).
- **Destiny Cards ↔ numerológia:** mindkettő születési dátumból számol; közös "számmisztika-nap" képernyő.
- **Ji King / Lenormand ↔ napi horoszkóp:** a napi tartalomcsomag (horoszkóp + kártya + hexagram) növeli a napi aktív használatot.
- **Álmoskönyv ↔ holdnaptár (kronobiológia-fejezet):** álomnapló-bejegyzések holdfázissal címkézve.
- **Dósa / öt elem ↔ szezonális tartalom:** évszakfüggő életmódtippek.
- **Big Five:** etikai horgony — a "szórakoztató" modulok mellett felkínált tudományos önismereti sarok, világos megkülönböztetéssel ("tudományosan validált" vs. "hagyomány/szórakozás").

## Jogi és etikai megjegyzések

1. **Védjegyek:** MBTI®, Myers-Briggs® (The Myers-Briggs Company), az enneagram-tesztek közül a RHETI® védett; a 16personalities tartalma szerzői jogvédett. Saját itemek és saját típusleírások írandók.
2. **Public domain nyersanyag:** IPIP-itemek (Big Five), Richmond 1893-as könyve, a Krúdy-életmű, a régi Ji King-fordítások és a Lenormand-hagyomány jelentésmagja szabadon felhasználható — a modern kiadások, fordítások, appok szövegei nem.
3. **Egészségügyi határvonal:** a dósa- és öt elem-modul nem adhat orvosi tanácsot; az álomfejtés nem diagnosztika. Kötelező a szórakoztató/önismereti jelleg egyértelmű jelzése.
4. **Tudományos címkézés:** javasolt háromfokozatú jelölés a modulokon: *tudományos* (Big Five), *pszichológiai hagyomány* (MBTI-jellegű, enneagram, temperamentum), *ezoterikus hagyomány* (kártyák, Ji King, dósák, álmoskönyv).

---

## Források

### Személyiségtipológiák
- Pittenger, D. J. (1993): *Measuring the MBTI… And Coming Up Short.* Journal of Career Planning & Employment — az MBTI teszt–reteszt kritikájának klasszikusa
- [Is MBTI Actually Scientific? (PsyZenLab)](https://www.psyzenlab.com/blog/mbti-scientific-reliability) és [MBTI Test Accuracy (EarlyYears)](https://www.earlyyears.tv/mbti-test-accuracy/) — teszt–reteszt megbízhatósági adatok összefoglalói
- [ScienceABC: Is the Myers-Briggs Test Meaningful?](https://www.scienceabc.com/eyeopeners/is-the-myers-briggs-test-meaningful-or-is-it-just-pseudo-science)
- Soto, C. J. & John, O. P. (2017): *The Next Big Five Inventory (BFI-2).* Journal of Personality and Social Psychology, 113, 117–143 — [PDF (Colby)](https://www.colby.edu/wp-content/uploads/2013/08/Soto_John_2017.pdf); rövid formák: [BFI-2-S és BFI-2-XS](https://www.researchgate.net/publication/314015515_Short_and_extra-short_forms_of_the_Big_Five_Inventory-2_The_BFI-2-S_and_BFI-2-XS)
- [International Personality Item Pool (IPIP)](https://ipip.ori.org/) — public domain Big Five itembank
- Riso, D. R. & Hudson, R.: *The Wisdom of the Enneagram* (1999); Naranjo, C.: *Character and Neurosis* (1994) — enneagram-alapművek
- Augustinavičiūtė, A. szocionika-írásai; összefoglalóan: wikisocion.github.io
- Vasant Lad: *Ayurveda: The Science of Self-Healing* — dósa-alkattan
- Eysenck, H. J.: *The Biological Basis of Personality* (1967) — temperamentumok és a modern vonáselmélet kapcsolata
- Greenbaum, D. G.: *Temperament: Astrology's Forgotten Key* (2005) — elem–temperamentum megfeleltetés a klasszikus asztrológiában

### Kártya- és jósrendszerek
- [The Game of Hope (Lenormand Reader)](https://www.lenormandreader.com/blog/the-game-of-hope) és [The Cartomancer: Game of Hope, c. 1799](https://thecartomancer.bigcartel.com/product/game-of-hope-lenormand-cards-c-1799) — a Das Spiel der Hoffnung / Hechtel-eredet
- [Horniman Museum: divination cards](https://www.horniman.ac.uk/object/1970.18/) — korai Lenormand-példány
- Glück, A. (szerk.): *Ur-Lenormand: Das Spiel der Hoffnung* — az 1799-es pakli fakszimile kiadása
- Richmond, O. H. (1893): *The Mystic Test Book* — a Destiny Cards alapműve (public domain)
- [Cards of Your Destiny — Destiny FAQ](https://cardsofyourdestiny.com/destiny-faqs/) és [Card Blueprints: Birth Card Calculator](https://cardblueprints.com/birth-card-calculator) — születési kártya-számítás
- [Know Your Destiny Cards: Card Birth Dates](https://knowyourdestinycards.com/birth-cards/card-birth-dates/) — teljes dátum→kártya lookup-tábla
- Camp, R. L.: *Cards of Your Destiny*; *Love Cards* — a rendszer modern népszerűsítése
- Wilhelm, R. (ford.): *I Ging – Das Buch der Wandlungen* (1924); angolul Baynes (1950), C. G. Jung előszavával
- Karátson G. (ford.): *Ji king – A Változások Könyve* — magyar kiadás
- [Krúdy Gyula: Álmoskönyv – Tenyérjóslások könyve (Magyar Elektronikus Könyvtár, teljes szöveg)](https://mek.oszk.hu/00700/00756/) 
- [Pénzcentrum/HelloVidék: Így keletkezett a legismertebb álomszótár](https://www.penzcentrum.hu/hellovidek/20210905/ma-is-sokakat-foglalkoztat-a-krudy-gyula-almoskonyv-igy-keletkezett-a-legismertebb-alomszotar-1162657) — a Krúdy-álmoskönyv keletkezéstörténete
- Hobson, J. A. & McCarley, R. W. (1977): *The Brain as a Dream State Generator* — aktiváció-szintézis modell
- Domhoff, G. W.: *Finding Meaning in Dreams* (1996) — Hall–Van de Castle tartalomelemzés, kontinuitás-hipotézis
