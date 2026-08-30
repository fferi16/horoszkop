/* Kelet-ázsiai asztrológia — kiegészítő értelmezések
 *
 * Ez a modul azokhoz a számított értékekhez ad szöveget, amelyeket a program
 * már kiszámol, de eddig nem tudott megmagyarázni:
 *   1) Ba Zi elemmérleg — a Nap Ura (日主 / rìzhǔ) eleme és támogatottsága,
 *      elemtúlsúly, hiányzó elem, kedvező elem, a négy pillér életszakaszai
 *   2) Vimshottari dasa — a kilenc bolygó fő-időszaka (mahádasá)
 *   3) Az aktuális év állatjegyének viszonya a születési jegyhez
 *   4) Koreai saju és japán eto — személyre szabott olvasat
 *
 * Sima script (nem ES modul), UTF-8.
 */
window.HDATA = window.HDATA || {};
window.HDATA.easternExt = {

  /* ================================================================== */
  /* 1) BA ZI — ELEMMÉRLEG                                              */
  /* ================================================================== */

  /* A Nap Ura támogatottsága. A hagyomány két tábort különböztet meg a
     nyolc írásjegyben: ami erősíti a Nap Urát (a saját eleme és a őt tápláló
     „anyaelem"), és ami fogyasztja (amit ő táplál, amit ő legyőz, és ami őt
     legyőzi). A kettő aránya adja az alábbi három állapotot. */
  dayMasterStrength: {
    eros: {
      name: 'Erős Nap Ura',
      text: 'A képletedben sok az az írásjegy, amely a saját elemedet adja vagy táplálja: van miből dolgoznod, és a terhelés nem visz ki gyorsan a sodrodból. Az ilyen ember önindító, bírja a hosszú menetelést, a nyomás alatt sem esik szét, és ritkán kér segítséget — sokszor akkor sem, amikor kellene. A veszélye épp a felesleg: a fel nem használt erő makacsságba, uralkodó modorba, önfejűségbe vagy céltalan pörgésbe fordul, és a környezet nehezen fér hozzá. A klasszikus tanítás szerint az erős Nap Urának nem újabb támogatás kell, hanem levezetés: az őt fékező, „hivatalt" jelentő kontrolláló elem — vagyis vállalt felelősség, szabály, határidő, mérhető feladat —, valamint az az elem, amit ő maga hoz létre, és az, amit meghódít. Röviden: a felesleget munkává és alkotássá kell váltani, különben magad ellen fordul.'
    },
    kiegyensulyozott: {
      name: 'Kiegyensúlyozott Nap Ura',
      text: 'A téged erősítő és a téged fogyasztó írásjegyek nagyjából egyensúlyban vannak, ezért nem egyetlen elem diktálja a jellemedet, hanem a köztük lévő áramlás. Ez a legkevésbé látványos, de a leginkább járható felállás: nem szélsőségesen tehetséges egyetlen irányban, viszont sokféle helyzetben helytáll, és a kedvezőtlen éveket is jobban átvészeli, mint a szélsőséges képletek. A gyengéje a lendülethiány — mivel semmi nem szorít, könnyen elmarad az a kényszerítő erő, ami a nagy döntéseket kicsikarja, és évekig meg lehet ragadni egy elviselhető középszerben. Neked nem elemerősítésre van szükséged, hanem irányra: azt kell eldöntened, mit akarsz, mert a képlet mindkét irányba engedne.'
    },
    gyenge: {
      name: 'Gyenge Nap Ura',
      text: 'A nyolc írásjegyben kevés az, ami a saját elemedet erősíti, viszont sok, ami fogyasztja: a képlet többet kér tőled, mint amennyit könnyen adsz. Ez érzékennyé, jó megfigyelővé és rugalmassá tesz — ösztönösen olvasod a helyzetet, mert nem tudsz nyers erővel átmenni rajta —, de kimerülékennyé is: a hosszú terhelés, a rád rakódó felelősség és a folyamatos alkalmazkodás gyorsabban visel meg, mint másokat. A gyenge Nap Ura nem hátrány, hanem más üzemmód: a jó szövetség, a megbízható háttér és a rendszeres feltöltődés nálad nem kényelem, hanem üzemanyag. A hagyomány szerint neked a saját elemed és az azt tápláló „anyaelem" a barátod — tanulás, mentor, támogató közeg, azonos elemű társak —, míg a további kontroll, a versenyhelyzet és a mértéktelen vállalás elvisz az erődtől.'
    }
  },

  /* A Nap Ura eleme × támogatottsága: 5 × 3 = 15 értelmezés.
     Itt nem az elem általános jelentése áll, hanem az, mit csinál az elem
     az adott töltöttségi állapotban. */
  dayMasterByElement: {
    fa: {
      eros: 'Az erős Fa olyan, mint a törzsét megvastagító fa: van saját elképzelésed arról, merre nőj, és nehezen tűröd, ha visszavágnak. Növekedésre, tervezésre, mások felnevelésére kiváló, de a fölös hajtásokat metszeni kell, különben szétszórod magad tíz félbehagyott irányba. A metszőolló szerepét a Fém tölti be: külső szabály, kemény kritika, letisztult keret hoz belőled formát.',
      kiegyensulyozott: 'A kiegyensúlyozott Fa a hagyomány kedvence: van benne elég rugalmasság az alkalmazkodáshoz és elég szilárdság ahhoz, hogy meg is maradjon, amit felépítettél. Jól viseled a fokozatos fejlődést igénylő pályákat — oktatás, tervezés, gondozás, hosszú távú építkezés —, mert nem kapkodsz, de nem is állsz le. A kockázat inkább az, hogy a kényelmes tempó miatt későn vágsz bele abba, amit régóta halogatsz.',
      gyenge: 'A gyenge Fa vékony hajtás: érzékeny, gyorsan reagál, de a tartós szárazságot vagy a folyamatos nyesegetést nehezen viseli. Ilyenkor a kemény kritika, a túl korán jött felelősség és a versengő közeg valóban visszafogja a növekedést, ezért nem edzés kell, hanem táptalaj: Víz (tanulás, mentor, nyugodt háttér) és társ-Fa (hasonló gondolkodású közösség). Ha ez megvan, a Fa látványosan behozza a lemaradását — ez az az elem, amelyik a legjobban reagál a jó körülményekre.'
    },
    tuz: {
      eros: 'Az erős Tűz messziről látszik: lelkesíteni, meggyőzni, magad köré gyűjteni az embereket szinte erőfeszítés nélkül tudsz. Ugyanez a láng gyorsan fel is éget mindent maga körül — a kimondott indulatot, az elhamarkodott ígéretet és a saját tartalékaidat is. A hagyomány szerint a Föld a szelepe: kézzelfogható eredmény, rendszeresség és mások gyakorlati szolgálata köti le annyira, hogy hasznos meleg legyen belőle, ne tűzvész.',
      kiegyensulyozott: 'A kiegyensúlyozott Tűz nem lobog, hanem világít: elég meleget adsz ahhoz, hogy szívesen legyenek melletted, de nem égeted ki sem magad, sem a többieket. Ez a képlet jól bírja a nyilvánosságot, a képviseletet, a tanítást és minden olyan pályát, ahol a lelkesedést tartósan fenn kell tartani. Vigyázz arra, hogy a kiszámíthatóság ne csússzon át unalomba — a Tűznek időnként új gyújtóanyag kell, különben magától hűl ki.',
      gyenge: 'A gyenge Tűz kis láng huzatban: van benne melegség és jó szándék, de a hosszú hideg — kemény környezet, közöny, folyamatos kritika — könnyen kioltja. Ilyenkor a kedvetlenség, a halogatás és az önbizalomhiány nem jellemhiba, hanem üzemanyaghiány. Fa kell hozzá: tanulás, értelmes ügy, lelkes emberek, egy olyan cél, amiben hiszel — és rögtön visszatér a lendület, mert a Tűz a leggyorsabban éledő elem.'
    },
    fold: {
      eros: 'Az erős Föld megbízható alap: rád lehet építeni, kibírod a terhelést, és a káosz közepén is te maradsz az, aki nem mozdul. A gond az, ha a szilárdságból mozdíthatatlanság lesz — begyűjtött, de fel nem használt dolgok, elavult szokások, konok ragaszkodás a régihez, néha makacs birtoklás. A Fa a válasz: új szempont, kihívás, változás, olyan ember vagy feladat, amely felszántja a talajt, mert a megműveletlen föld idővel megkeményedik.',
      kiegyensulyozott: 'A kiegyensúlyozott Föld a jó gazda mértéke: annyit vállalsz, amennyit tényleg elbírsz, és amit vállaltál, azt le is teszed az asztalra. Ez a képlet a közvetítő szerepben a legerősebb — te vagy az, aki a szélsőségek között tartja a csoportot, összeköti az embereket, és a gyakorlati megvalósításig viszi a mások ötleteit. Fejlődési iránya, hogy időnként a saját nevedben is kérj valamit, ne csak a rendszert szolgáld.',
      gyenge: 'A gyenge Föld laza, elhordható talaj: erős akarat és jó szándék mellett is hiányozhat az a belső biztonság, amiből nyugodtan lehet dönteni. Tipikus tünete a szétszórtság, a bizonytalanság és az, hogy mások igényei elsodornak a sajátodtól. Erre a Tűz (értelem adta melegség, hit, elismerés, mentor) és a társ-Föld (stabil otthon, kiszámítható napirend, hosszú távú kötelékek) a gyógyszer — a rendszeres ritmus nálad szó szerint anyagot ad hozzá a jellemhez.'
    },
    fem: {
      eros: 'Az erős Fém penge: pontos, elvhű, kimondja, amit lát, és nem hajlandó megalkudni azzal, amit hibásnak tart. Ez kiváló mindenütt, ahol minőség, szabály és szigor kell, de az élek sebeznek is — a jogos kritika könnyen sértéssé, az elvhűség merevséggé, az önfegyelem hidegséggé válik. A Tűz olvasztja meg: szenvedély, emberi közelség, humor és olyan ügy, ami fontosabb nálad — ettől lesz a pengéből használható szerszám.',
      kiegyensulyozott: 'A kiegyensúlyozott Fém tiszta ítélőerő indulat nélkül: látod, mi számít és mi nem, és ezt úgy tudod megmondani, hogy a másik nem védekezni kezd, hanem gondolkodik. Ez a képlet a szerkesztő, az elemző, a döntőbíró és a mesterember erőssége, ahol a részletek pontossága és az egész áttekintése együtt kell. A finomhangolás annyi, hogy a rendezettséget ne emeld önmagában értékké — a Fém akkor jó, ha valamit szolgál.',
      gyenge: 'A gyenge Fém még kikovácsolatlan anyag: van benne igényesség és belső mérce, de az önérvényesítés, a nem kimondása és a határhúzás nehezen megy, ezért gyakran utólag mérgelődsz. Ilyenkor a folyamatos konfliktus, a túl sok tűzerő és a bizonyítási kényszer csak fáraszt. Föld kell hozzá — szakmai alapok, mesterség, türelmes gyakorlás, tekintélyes háttér — és társ-Fém: olyan emberek, akik ugyanazt a mércét képviselik, amit te, hogy ne egyedül kelljen tartanod.'
    },
    viz: {
      eros: 'Az erős Víz mély és mozgékony: gyorsan tanulsz, sok mindent átlátsz egyszerre, és ösztönösen megtalálod a kerülőutat ott, ahol mások falba ütköznek. Ha nincs medre, ez a képlet elönt mindent — végtelen töprengés, örökös helyzetváltoztatás, kötelezettségek elmosása, néha kimondatlan manipuláció. A Föld a partja: keret, tartós elköteleződés, hely és feladat, amit nem hagysz ott — a Víz csak akkor lesz hasznos erő, ha irányba terelik.',
      kiegyensulyozott: 'A kiegyensúlyozott Víz áramlik, de nem sodródik: van benne elég belátás a bölcs döntéshez és elég szilárdság ahhoz, hogy ki is tarts mellette. Ez a képlet a tárgyalásban, a kutatásban, a stratégiában és minden olyan helyzetben előny, ahol nem az erő, hanem a jó időzítés dönt. Amire figyelj: a rugalmasság ne váljon azzá, hogy mindig mindenkinek van igaza — a saját álláspontodat is ki kell mondani.',
      gyenge: 'A gyenge Víz sekély patak: az érzékenység és az intuíció megvan, de a kimerülés hamar jelentkezik, és a nagy döntések előtt hiányzik a belső tartalék. Ilyenkor gyakori az alvászavar, a szorongás és az, hogy sokat gondolkodsz, de keveset lépsz. Fém erősít — rend, szakmai tudás, tiszta szabályok, jó tanács — és a társ-Víz: mély beszélgetés, csend, egyedüllét, pihenés. A Víz az az elem, amelyiknél a visszahúzódás nem menekülés, hanem regeneráció.'
    }
  },

  /* Elemtúlsúly: mit jelent, ha egy elem uralja a nyolc írásjegyet. */
  elementExcess: {
    fa: 'A Fa túlsúlya sok egyidejű tervet, erős növekedési vágyat és nehezen fékezhető terjeszkedést jelez: minden irányba indul egy hajtás, de kevés ér be közülük. Ilyen képletben a metszés hiányzik — a döntés arról, mit nem csinálsz —, és a türelmetlenség azokkal szemben, akik lassabban mozognak.',
    tuz: 'A Tűz túlsúlya hőtöbblet: nagy lelkesedés, gyors reagálás, erős kisugárzás, de rövid tűrőképesség és hajlam a kiégésre. A képlet birtokosa hajlamos mindent azonnal akarni, indulatból dönteni, és utólag helyrehozni azt, amit egy meggondolatlan mondat elrontott.',
    fold: 'A Föld túlsúlya nehézkedés: nagy megbízhatóság, sok felhalmozott dolog és kötelezettség, viszont lassú változás és erős ragaszkodás a megszokotthoz. Az ilyen ember mindent megtart — tárgyat, kapcsolatot, sérelmet is —, és a fő feladata megtanulni elengedni, ami már nem szolgál.',
    fem: 'A Fém túlsúlya élesség: kimagasló ítélőerő, magas mérce, rend és fegyelem, de kevés engedékenység önmagával és másokkal szemben. Az ilyen képlet könnyen billen át kritikába, elszigetelődésbe és abba a hitbe, hogy az érzelmek csak zavarják a tiszta gondolkodást.',
    viz: 'A Víz túlsúlya áradás: rengeteg információ, ötlet, kapcsolat és lehetőség egyszerre, de kevés lehorgonyzás. Az ilyen ember sokat tud és sokat tervez, közben állandóan halasztja a végleges döntést, mert minden opciót nyitva akar tartani.'
  },

  /* Hiányzó elem: mit jelent, ha egy elem egyáltalán nem szerepel a képletben. */
  elementMissing: {
    fa: 'A Fa hiánya azt jelzi, hogy nehezen indul be a magától jövő növekedés: a hosszú távú tervek, az újrakezdés és a saját irány megtalálása több tudatos erőfeszítést kíván, mint másoknál. Gyakori jele a rugalmatlanság és az, hogy a régi megoldáshoz akkor is ragaszkodsz, amikor már nem működik. Pótolni tanulással, új ismeretek folyamatos beemelésével, élő növényekkel a környezetben és olyan emberekkel lehet, akik jövőképben gondolkodnak — a Fa hiánya nem tehetséghiány, hanem indítóhiány.',
    tuz: 'A Tűz hiánya a láthatóság és a lelkesedés hiánya: lehet, hogy sokat teszel, de nehezen mutatod meg, és a saját eredményeidet magad értékeled a legkevesebbre. Együtt jár a kedélyhullámzással és azzal, hogy a hideg, közömbös közeg gyorsabban kikészít. Pótlása mozgás, napfény, meleg társaság, alkotó tevékenység és a nyilvános szereplés apró adagokban való gyakorlása — a Tűzt a hagyomány szerint mindig kívülről kell újra meggyújtani.',
    fold: 'A Föld hiánya a stabil alap hiánya: nagy tehetség és sok ötlet mellett is hiányozhat az anyagi biztonság, a következetes napirend és az a talaj, amin a dolgok megmaradnak. Tünete a gyökértelenség érzése, a gyakori váltás és az, hogy a befejezés nehezebb, mint az elkezdés. Pótolható rendszeres ritmussal, kézzelfogható munkával, saját otthon és tartós kötelékek építésével, valamint azzal, hogy tervek helyett szokásokat alakítasz ki.',
    fem: 'A Fém hiánya a határ és a mérce hiánya: nehezen mondasz nemet, nehezen zársz le dolgokat, és a döntéseidben hiányzik az a hűvös szempont, ami a rokonszenven túl is mérlegel. Ez könnyen vezet kihasználtsághoz és félbehagyott ügyekhez. Pótlása szabályozott szakmai közeg, mesterség vagy precíziós hobbi, világos szerződések és megállapodások, valamint tudatos gyakorlás abban, hogy kimondd, mi az, amit nem vállalsz.',
    viz: 'A Víz hiánya a mélység és a rugalmasság hiánya: nagy tettvágy mellett kevés a megállás, a belső reflexió és az a képesség, hogy a kerülőutat is megfontold. Az ilyen ember sokszor erőből megy neki annak, amit ki lehetne kerülni, és későn veszi észre a saját fáradtságát. Pótolható rendszeres pihenéssel, elegendő alvással és folyadékkal, tanulással, önvizsgálattal, csenddel és olyan emberekkel, akik előtt nem kell teljesíteni.'
  },

  /* Kedvező elem erősítése a hagyomány gyakorlati eszközeivel:
     szín, égtáj, évszak, tevékenység. */
  favorableElement: {
    fa: 'A Fát a zöld és a türkiz árnyalatai, a keleti és délkeleti irány, valamint a tavasz és a reggeli órák erősítik; a hagyomány élő növényt, fát, természetes anyagokat javasol a térbe. Tevékenységben a tanulás, az írás, a tervezés, a kertészkedés és minden növekvő, hosszú távú vállalkozás táplálja.',
    tuz: 'A Tüzet a piros, a bordó és a narancs, a déli irány, a nyár és a déli órák erősítik; hasznos a jó megvilágítás, a gyertyaláng, a meleg fényforrás. Tevékenységben a sport, a szereplés, a főzés, az alkotás és a lelkesítő közösségi munka az, ami rendszeresen újratölti.',
    fold: 'A Földet a sárga, az okker és a barna, a délnyugati és északkeleti irány, valamint az évszakváltások átmeneti időszakai erősítik; kerámia, kő, agyag és stabil, alacsony bútor tartozik hozzá. Tevékenységben a kertművelés, a kézműves munka, a rendszeres napirend, a főzés és a másokról való gondoskodás építi.',
    fem: 'A Fémet a fehér, az ezüst és az arany, a nyugati és északnyugati irány, az ősz és az esti órák erősítik; fémtárgyak, letisztult formák, rendezett és üresebb tér tartozik hozzá. Tevékenységben a precíziós munka, a hangszerjáték, a szerkesztés, a rendrakás és a fegyelmezett gyakorlás támogatja.',
    viz: 'A Vizet a fekete, a sötétkék és a mélyszürke, az északi irány, a tél és az éjszakai órák erősítik; tükör, akvárium, szökőkút, hullámzó vonalak jelenítik meg a térben. Tevékenységben az úszás, az utazás, a kutatás, az elmélyült olvasás és a rendszeres, valódi pihenés tölti fel.'
  },

  /* A négy pillér: kihez és melyik életszakaszhoz tartozik. */
  pillarMeaning: {
    ev: 'Az év pillére a gyökér: az ősöket, a családi hátteret, a felmenőktől kapott indulást és a gyermekkort mutatja, nagyjából a 0–16 éves szakaszt. Ez az a réteg, amit nem te választottál, de amiből az egész későbbi képlet táplálkozik — a származás, a családi minta és a korai környezet lenyomata.',
    honap: 'A hónap pillére a legerősebb egyetlen jegy a képletben, mert az évszakot, vagyis a Nap Ura körüli időjárást adja meg. A szülőkhöz, a testvérekhez, a szakmai indulásokhoz és a fiatal felnőttkorhoz, nagyjából a 17–32 éves szakaszhoz kötik: itt dől el, milyen közegben tanulsz szakmát, és milyen elvárásokkal indulsz neki a saját életednek.',
    nap: 'A nap pillére a képlet szíve: az égi jegye maga a Nap Ura, vagyis te, a földi ága pedig a „házastárs palotája", a legszorosabb párkapcsolat. A 33–48 éves szakaszt jelöli, azt az időt, amikor a legtöbb ember már a saját döntéseinek a következményeiben él, és amikor a párkapcsolat minősége a leginkább meghatározza az életminőséget.',
    ora: 'Az óra pillére a kifutás: a gyermekekhez, az alkotásaidhoz, a tanítványokhoz és mindahhoz kapcsolódik, ami utánad marad, valamint a 49 év fölötti szakaszhoz. Ez mutatja meg, mibe fut ki az életút, hogyan viszonyulsz a következő nemzedékhez, és mennyire tudod nyugalomban átadni, amit összegyűjtöttél.'
  },

  /* ================================================================== */
  /* 2) VIMSHOTTARI DASA                                                */
  /* ================================================================== */

  dashaIntro: 'A Vimshottari dasa a védikus asztrológia legelterjedtebb időzítő rendszere: nem azt mondja meg, milyen vagy, hanem azt, hogy a képleted melyik témája van éppen soron. A neve a szanszkrit „százhúsz" szóból ered, mert a kilenc bolygó fő-időszaka együtt pontosan 120 évet tesz ki — ez a hagyomány szerint az emberi élet teljes ideális hossza. A ciklus mindig attól a bolygótól indul, amelyik a születési Hold nakshatrájának, vagyis holdházának az ura: a Hold az elmét és az érzelmi örökséget jelöli, ezért az ő állása szabja meg, hol lépsz be az időbe. Az első időszakból csak annyi jut neked, amennyi a nakshatrából a születés pillanatában még hátra volt, onnantól a sorrend kötött, és élethosszig ismétlődik.',

  dasha: {
    ketu: {
      years: 7,
      name: 'Ketu',
      text: 'A Ketu-időszak a leszámolás és az elengedés ideje: gyakran olyasmi ér véget benne, amiről azt hitted, hogy hozzád tartozik — állás, kapcsolat, szerep, önkép. A hagyomány a lezárt karma bolygójának tartja, ezért a veszteségei ritkán büntetésnek, inkább leválasztásnak bizonyulnak utólag: felszabadul az energia, amit egy régi kötelék kötött le. Jellemző rá a befelé fordulás, a hirtelen érdeklődés a spirituális vagy elvont dolgok iránt, a szokatlan egészségi tünetek és a magány, amit egy idő után nem is akarsz feladni. A tanulsága az, hogy a birtoklás és az azonosulás lazítható — aki ezt megtanulja, a következő, bőségesebb Vénusz-időszakot sokkal szabadabban éli meg.'
    },
    venus: {
      years: 20,
      name: 'Vénusz',
      text: 'A húsz évével a leghosszabb fő-időszak, és a témái is a legkellemesebbek: párkapcsolat, házasság, otthonteremtés, szépség, művészet, kényelem, anyagi gyarapodás. Sokaknál ebben az időszakban jön az együttköltözés, az esküvő, a lakás, a jelentős vásárlás, vagy egy tartós alkotói korszak indulása. A Vénusz azonban a mértéket nem ismeri: a jólét könnyen csúszik túlköltekezésbe, halogatásba, a kapcsolatok kényelmi tespedésbe, és a nehéz döntéseket a bőség egyszerűen elodázza. Hosszúsága miatt ez az az időszak, amelyben a legkönnyebb elfelejteni, hogy a kedvező körülmények nem maguktól maradnak fenn — érdemes az alatt építeni, amíg tart.'
    },
    sun: {
      years: 6,
      name: 'Nap',
      text: 'A legrövidebb fő-időszak, de a legsűrűbb: hat év alatt tisztázni kell, ki vagy és mit képviselsz. Előtérbe kerül az önállóság, a tekintély, a láthatóság, a vezetői szerep, gyakran hivatali vagy intézményi ügyek, és sokszor felmerül az apához, a férfi felmenőkhöz vagy a saját apaszerepedhez fűződő viszony rendezése. Ha készen állsz rá, elismerés, előléptetés és a saját név alatt vállalt munka jár vele; ha nem, akkor tekintélyharcokat, sértett önérzetet és feleslegesen felvállalt konfliktusokat hoz. A Nap kevés dolgot tűr meg homályban: ami eddig kimondatlan volt a saját szerepedről, itt kimondódik.'
    },
    moon: {
      years: 10,
      name: 'Hold',
      text: 'A Hold-időszak befelé és a családi élet felé fordít: az otthon, az anya, a gyerekek, a gondoskodás és a lelki állapot kerül a középpontba. Gyakori a költözés, az otthon átalakítása, a család bővülése, a régi kapcsolatok újraszövése, valamint a nyilvánosság felé forduló, sok emberrel dolgozó munka fellendülése. Az érzelmi élet felerősödik: erősebb az intuíció és az együttérzés, ugyanakkor a hangulat hullámzóbb, és a kritikát is jóval személyesebben veszed, mint egyébként. A Hold vizes természete miatt itt a folyamatos külső nyomás gyorsan lelki tünetekké alakul, ezért ez az az időszak, amikor a pihenés és az érzelmi biztonság nem luxus, hanem munkaeszköz.'
    },
    mars: {
      years: 7,
      name: 'Mars',
      text: 'A Mars-időszak felteszi a lábad a gázra: megnő a fizikai energia, a versenykedv, a kockázatvállalás és az a képesség, hogy hosszú vitákat egyetlen döntéssel lezárj. Klasszikus témái az ingatlan és a föld, a testvérekkel való ügyek, a technikai, mérnöki, katonai vagy sportjellegű munka, illetve mindaz, amihez nyers kitartás kell. A másik oldala a súrlódás: több a konfliktus, könnyebb az indulatos szakítás, gyakoribb a baleset, a műtét, a heves ítélet. Ez az az időszak, amelyben az számít, hogy találsz-e magadnak igazi ellenfelet — egy nagy feladatot —, mert ha nem, akkor a környezeted lesz az.'
    },
    rahu: {
      years: 18,
      name: 'Ráhu',
      text: 'A Ráhu-időszak kimozdít a megszokottból: idegen ország, ismeretlen szakma, szokatlan kapcsolat, új technológia, vagy egy olyan pálya, amiről a családodban senki nem hallott. A hagyomány a vágy és a világi ambíció csomópontjának tartja, ezért gyorsan és látványosan tud emelni, gyakran a szabályok szélén, olyan területeken, ahol nincs kitaposott út. Ugyanez a bolygó a ködé is: ebben az időszakban a legkönnyebb túlvállalni, elhinni a saját reklámodat, megszállottá válni egyetlen cél iránt, és későn észrevenni, hogy amit hajszoltál, nem az volt, amire szükséged lett volna. Tizennyolc éve alatt szinte biztosan átírja az önképedet — a kérdés csak az, hogy a végén marad-e alatta valódi alap.'
    },
    jupiter: {
      years: 16,
      name: 'Jupiter',
      text: 'A Jupiter-időszak tágít: tanulás, tanítás, utazás, gyermek, magasabb képzettség, mentorok és olyan emberek, akik ajtókat nyitnak. Ez a klasszikus „gyarapodó" korszak, amelyben az addig megszerzett tudás nevet, tekintélyt és lehetőséget kezd hozni, és sokaknál itt fogalmazódik meg először egy világos értékrend vagy hit. Az árnyoldala a mértéktelenség: a túlzott optimizmus, a felelőtlen ígéret, a képességeken túlnyúló vállalás, a testsúly és a kiadások észrevétlen növekedése. A Jupiter mindent felnagyít, amit talál — ezért az számít, milyen alapokra érkezik.'
    },
    saturn: {
      years: 19,
      name: 'Szaturnusz',
      text: 'A tizenkilenc éves Szaturnusz-időszak a legkomolyabb szakasz: lassít, szűkít, késleltet, és mindenből kiveri azt, ami nem bírja a terhelést. Munkával, felelősséggel, korlátokkal és néha magánnyal jár, az eredmények pedig később érkeznek, mint várnád — de amit ez alatt építesz, az tartós, mert végig ellenőrizve épült. Tipikus témái a szakmai megszilárdulás, az idős szülők gondozása, az egészség és az életmód rendbetétele, valamint az illúziók fogyása arról, hogy mi jár nekünk. A hagyomány szerint a Szaturnusz nem büntet, hanem elszámoltat: aki dolgozik, annak a végén megadja a helyét, aki menekül a feladat elől, annál a nyomás csak nő.'
    },
    mercury: {
      years: 17,
      name: 'Merkúr',
      text: 'A Merkúr-időszak a szóé, a számoké és a kapcsolatoké: tanulás, írás, oktatás, kereskedelem, tárgyalás, közvetítés, szerződések és sokféle párhuzamos ügy. Megnő a mozgékonyság és az alkalmazkodóképesség, könnyebben tanulsz új szakmát vagy nyelvet, és a jó időzítésű megállapodások itt hoznak igazán sokat. Cserébe szétaprózódásra, idegességre, felületességre és arra hajlamosít, hogy inkább beszélj a dologról, mint hogy megcsináld. A tizenhét éve akkor a legtermékenyebb, ha egy szakterületen mélyülsz el, és a sokoldalúságot arra használod, hogy azt sokféleképpen tudd hasznosítani.'
    }
  },

  dashaNote: 'A dasa nem ítélet és nem menetrend: egy tematikus időszak, amely megmutatja, mi kerül előtérbe, de nem dönti el helyetted, mit kezdesz vele. Ugyanaz a Szaturnusz-korszak lehet a kimerülés vagy a szakmai megszilárdulás ideje — a különbséget a döntéseid és a körülményeid teszik, nem a bolygó.',

  /* ================================================================== */
  /* 3) AZ AKTUÁLIS ÉV ÁLLATJEGYÉNEK VISZONYA                           */
  /* ================================================================== */

  yearRelation: {
    benming: {
      name: 'Ben Ming Nian — a saját éved',
      text: 'Tizenkét évente eljön az az év, amelynek az állatjegye megegyezik a sajátoddal: ez a ben ming nian (本命年), a „saját sorsév". A kínai hagyomány meglepő módon nem szerencsésnek, hanem kényesnek tartja, mert az elgondolás szerint az azonos energia nem összeadódik, hanem összeütközik: aki a saját évében jár, az túl közel kerül Tai Suihoz, az évet uraló égi méltósághoz, és a túlzott közelség súrlódást szül. Ilyenkor a néphit szerint gyakoribb a betegség, a veszekedés, az anyagi veszteség és a hirtelen fordulat, ezért a szokás egész évben piros viselést ír elő — piros alsóneműt, övet, zoknit vagy zsinórt —, amelyet a hagyomány szerint nem magadnak kell megvenned, hanem családtagtól vagy baráttól kell kapnod. Gyakorlatiasabb olvasatban ez az év a mérlegkészítésé: tizenkét éves ciklus zárul, ezért nem a nagy kockázatok, hanem a rendrakás, a lezárás és a következő kör előkészítésének az ideje.'
    },
    utkozes: {
      name: 'Ütköző év',
      text: 'Az ütköző (chong) év az, amelyik a te jegyeddel szemben áll az állatöv körén — a Patkánnyal a Ló, a Bivallyal a Kecske, a Tigrissel a Majom, a Nyúllal a Kakas, a Sárkánnyal a Kutya, a Kígyóval a Disznó, és fordítva. A hagyomány szerint ilyenkor mozgásba lendül minden, ami addig szilárdnak látszott: költözés, munkahelyváltás, kapcsolati fordulat, sok utazás, felkavart régi ügyek. Ez nem szükségszerűen rossz, csak fáradságos — az ütközés régi struktúrákat bont meg, és ami tényleg megérett a változásra, az ebben az évben szokott mozdulni. Az ajánlott hozzáállás, hogy magad kezdeményezd a változást ahelyett, hogy megvárod, amíg megtörténik veled, és kerüld a nagy, visszafordíthatatlan kockázatokat pusztán hirtelen felindulásból.'
    },
    trigon: {
      name: 'Támogató (trigon) év',
      text: 'A trigon vagy san he (三合) az állatöv négy hármas szövetsége: Patkány–Sárkány–Majom, Bivaly–Kígyó–Kakas, Tigris–Ló–Kutya, Nyúl–Kecske–Disznó. Ha az év jegye a te hármasodból való, a hagyomány szerint az évi energia veled egy irányba húz: könnyebben találsz szövetségeseket, gördülékenyebben mennek a tárgyalások, és a régóta előkészített dolgok most szoktak beérni. Ez a klasszikus „nyisd ki az ajtót" év — nem magától hoz eredményt, de a befektetett erőfeszítés lényegesen többet fizet vissza, mint máskor. Érdemes ilyenkor a hosszú távú vállalásokat elindítani, kapcsolatokat építeni és a láthatóságot növelni.'
    },
    semleges: {
      name: 'Semleges év',
      text: 'Ha az év jegye se nem ütközik a tieddel, se nem tartozik a hármas szövetségedbe, a hagyomány nem tulajdonít neki külön jelentőséget: nincs sem külön hátszél, sem külön ellenszél. Ez a legtöbb év, és éppen ezért a legfontosabb: itt nem a jegyek viszonya dönt, hanem a saját képleted belső egyensúlya, a kedvező elemed és az éppen futó életszakaszod. Az ilyen év a kitartó, egyenletes munka ideje — jó alkalom szokásokat építeni, tudást gyűjteni és felkészülni a következő erősebb évre.'
    }
  },

  /* ================================================================== */
  /* 4) KOREAI SAJU ÉS JAPÁN ETO — SZEMÉLYRE SZABOTT OLVASAT            */
  /* ================================================================== */

  /* A koreai saju ugyanazt a nyolc írásjegyet olvassa, de a hangsúlya más:
     az ilgan (일간), a nap égi jegye „én magam", és mindent ahhoz mérnek,
     hogyan viszonyul a családhoz, a közösséghez és a párhoz. */
  sajuByElement: {
    fa: 'A koreai olvasatban a Fa-ilgan (목, 木) a fölfelé törő ember: van benne becsvágy, tanulási kedv és erős igény arra, hogy a saját családja és közössége előrébb jusson általa. A koreai hagyomány ezt a jegyet tartja a legalkalmasabbnak a hosszú tanulásra és a tanításra, mert nem az azonnali eredményért, hanem az évek alatt kiépülő tekintélyért dolgozik. Az árnyoldala a merev egyenesség: nehezen enged az álláspontjából, és a rangsorolt közegben ezt könnyen makacsságnak veszik.',
    tuz: 'A Tűz-ilgan (화, 火) a saju szerint az a típus, akit a társaság azonnal észrevesz: nyílt, melegszívű, gyorsan teremt kapcsolatot, és a hangulatot ő adja meg egy asztaltársaságnak. A koreai értelmezés a jeong (정, 情) — a mély, kötelező erejű emberi ragaszkodás — legerősebb hordozójának tartja, ezért ez a jegy nehezen viseli a hidegséget és a személytelen munkahelyet. Kockázata az, hogy mindent kimond és odaad, majd a viszonzás elmaradásán hosszan sértődik.',
    fold: 'A Föld-ilgan (토, 土) a középpont: a koreai hagyomány neki tulajdonítja a legerősebb család- és közösségtartó szerepet, azt az embert, akihez mindenki fordul, és aki a viszályokat elsimítja. Megbízható, türelmes, kötelességtudó — a koreai társadalom szerepelvárásaiba szinte súrlódás nélkül illeszkedik, néha túlságosan is. A fejlődési feladata, hogy a mások iránti kötelesség mellett a saját igényeit is megfogalmazza, mert hajlamos hallgatva vinni a terhet.',
    fem: 'A Fém-ilgan (금, 金) a saju szemében az elvek embere: éles ítéletű, igazságérzete kemény, és nehezen alkuszik ott, ahol elvi kérdést lát. A koreai értelmezésben ez a jegy a hivatal, a jog, az orvoslás, a szerkesztés és minden magas mércét kívánó szakma természetes helye, mert a formát és a pontosságot tényleg komolyan veszi. Cserébe hidegnek tűnhet, és a kapcsolataiban meg kell tanulnia, hogy az igazának bizonyítása gyakran drágább, mint amennyit ér.',
    viz: 'A Víz-ilgan (수, 水) a legjobb helyzetolvasó: gyorsan megérzi, ki mit gondol valójában, és ösztönösen tudja, mikor kell szólni és mikor hallgatni — a koreai közegben ez a nunchi (눈치) képessége, ami itt tényleg társadalmi tőke. Jó tárgyaló, jó közvetítő, jó tanuló, és nála a rugalmasság nem gyengeség, hanem stratégia. A veszélye, hogy a folyamatos alkalmazkodásban elmosódik, mit is akar ő maga, és a döntést addig halogatja, amíg más dönt helyette.'
  },

  /* Gunghap (궁합): a koreai házassági összeillés hagyománya. A teljes olvasat
     mindkét fél nyolc írásjegyét összeveti, a népszerű „ttti gunghap" azonban
     az állatjegyek három szintjét nézi: samhap (삼합) hármas szövetség,
     yukhap (육합) páros harmónia, és a kerülendő chunghap (충) ütközés. */
  gunghapByAnimal: {
    patkany: 'A koreai hagyomány a Patkányt (쥐) a Sárkánnyal és a Majommal állítja egy samhap-hármasba — ez a tettvágy és a gyors gondolkodás szövetsége —, páros harmóniában (yukhap) pedig a Bivallyal áll, aki a nyugtalanságát megtartó alappá szelídíti. Kerülendőnek a Lovat tartják, mert a két jegy tempója és pénzhez való viszonya szöges ellentét, és a hagyomány szerint a legjobb éveikben is versengéssé válik köztük a közös élet.',
    bivaly: 'A Bivaly (소) samhap-társai a Kígyó és a Kakas: mindhárman hosszú távra terveznek, és a családi vagyon lassú felépítése náluk természetes közös nyelv. Yukhap-párja a Patkány, akinek a leleményessége mozgásba hozza a Bivaly állóképességét — a koreai szemlélet ezt tartja az egyik legjobb munkatársi és házastársi kombinációnak. A Kecskét kerüli: a Bivaly kötelességtudását a Kecske érzelmi ingadozása fárasztja el, és fordítva.',
    tigris: 'A Tigris (호랑이) hármas szövetsége a Lóval és a Kutyával áll össze: ez a bátorság, a hűség és a nyílt kiállás csoportja, ahol senki nem játszik kettős játszmát. A yukhap a Disznóval köti össze, akinek a jószívűsége ellensúlyozza a Tigris hevességét — a koreai hagyomány ezt a párost tartja a legmelegebb otthon egyikének. Az összeférhetetlen jegye a Majom: a két jegy folyamatosan méri egymást, a Tigris nyílt erővel, a Majom fortéllyal, és ebből ritkán lesz béke.',
    nyul: 'A Nyúl (토끼) a Kecskével és a Disznóval alkot samhapot: a finomság, az esztétika és a békés otthon szövetsége ez, amelyben senki nem akarja legyőzni a másikat. Yukhap-párja a Kutya, aki megvédi és biztonságban tartja a Nyúl érzékenységét — a koreai gunghap ezt kifejezetten védelmező párosításnak tartja. A Kakassal viszont ütközik: a Nyúl kerüli a nyílt konfliktust, a Kakas pedig kimondja, ami a szemének nem tetszik, és ez a különbség nem simul el az évekkel.',
    sarkany: 'A Sárkány (용) samhap-társai a Patkány és a Majom: a nagy tervek, az ötlet és a kivitelezés hármasa, ahol a Sárkány adja a víziót. Yukhap-párja a Kakas, akinek a pontossága földet ad a Sárkány nagyszabású elképzeléseinek — Koreában ez a párosítás a látványos közös építkezés jelképe. A Kutyával nem ajánlják: a Kutya kritikus hűsége és a Sárkány önérzetes fellépése egymásnak feszül, mert egyikük sem hajlandó elsőként engedni.',
    kigyo: 'A Kígyó (뱀) a Bivallyal és a Kakassal alkot hármas szövetséget: mindhárman kitartók, célratörők és nem beszélik túl a dolgokat, ezért csendben, de hatékonyan haladnak együtt. Yukhap-párja a Majom, akivel a hagyomány szerint szellemi versengésből lesz jó szövetség, ha egyikük sem akar átverni a másikat. A Disznóval ütközik: a Kígyó zárkózott mérlegelése és a Disznó nyílt bizalma alapvetően más életszemlélet, és ebből tartós félreértés lesz.',
    lo: 'A Ló (말) samhap-társai a Tigris és a Kutya: a szabadság, a lendület és az egyenes beszéd csoportja, ahol senki nem próbálja megkötni a másikat. Yukhap-párja a Kecske — a koreai hagyomány ezt a legharmonikusabb kettősnek tartja, mert a Kecske gyengédsége otthonossá teszi a Ló nyugtalanságát. A Patkánnyal ütközik: a Ló pillanatra él és költ, a Patkány tervez és tartalékol, és a pénzhez való viszonyuk különbsége mindig visszatérő téma lesz köztük.',
    kecske: 'A Kecske (양) a Nyúllal és a Disznóval alkot samhapot: az érzékenység, a művészi hajlam és a békés együttélés szövetsége, ahol senkinek nem kell bizonyítania. Yukhap-párja a Ló, akinek a lendülete kimozdítja a Kecskét az aggodalmaskodásból, és cserébe otthont kap. A Bivalyt kerüli a hagyomány: a Bivaly kemény kötelességtudata és a Kecske hangulatfüggő ritmusa nehezen fér egy háztartásba, mert a Kecske szorongni kezd a folyamatos elvárástól.',
    majom: 'A Majom (원숭이) samhap-társai a Patkány és a Sárkány: ez a leggyorsabb gondolkodású hármas, ahol az ötlet, a fortély és a nagyvonalúság kiegészítik egymást. Yukhap-párja a Kígyó, akivel a hagyomány szerint mély és intelligens kapcsolat alakulhat, feltéve, hogy mindketten őszinték maradnak. A Tigrissel viszont ütközik: a Majom kikerüli a nyílt összecsapást és utólag oldja meg a dolgokat, amit a Tigris megbízhatatlanságnak él meg.',
    kakas: 'A Kakas (닭) a Bivallyal és a Kígyóval alkot hármas szövetséget: a rend, a szorgalom és a pontos munka csoportja, ahol a Kakas a részletekért felel. Yukhap-párja a Sárkány, akinek a nagyszabású terveihez a Kakas adja a szervezést és a végrehajtást. A Nyúllal nem ajánlják: a Kakas kimondja a hibát, a Nyúl pedig megsérül tőle, és a hagyomány szerint ebből tartós, kimondatlan feszültség lesz a hétköznapokban.',
    kutya: 'A Kutya (개) samhap-társai a Tigris és a Ló: a hűség, a bátorság és az egyenes beszéd szövetsége, amelyben a Kutya a lelkiismeret szerepét viszi. Yukhap-párja a Nyúl, akinek a szelídségét a Kutya ösztönösen védelmezi — a koreai gunghap ezt tartja az egyik legbiztonságosabb otthonnak. A Sárkányt kerüli: a Kutya nem hiszi el a nagy szavakat, amíg nem látja a fedezetüket, a Sárkány pedig ezt bizalmatlanságnak veszi.',
    diszno: 'A Disznó (돼지) a Nyúllal és a Kecskével alkot samhapot: a jószívűség, a vendégszeretet és a nyugalom hármasa, ahol senki nem akarja a másikat átverni. Yukhap-párja a Tigris, akinek a bátorsága védelmet ad, cserébe a Disznó melegséget és otthont — Koreában ez a párosítás a jó házasság klasszikus képe. A Kígyóval nem ajánlják: a Disznó nyíltan bízik, a Kígyó pedig mindent mérlegel és keveset mond, és ez a különbség idővel elidegeníti őket.'
  },

  /* A japán eto (干支) olvasata elsősorban kulturális: az adott jegyhez
     kötődő szólások, védőszentek, szentélyi szokások és újévi jelképek adják
     azt a jelentést, amit a japán hagyomány az évhez és a benne születetthez társít. */
  etoByAnimal: {
    patkany: 'Japánban a Patkány (子, ne) az eto-ciklus nyitánya, és Daikokuten, a bőség és a jó termés istenének a hírvivője — ezért kötik hozzá a szaporaságot, a gyarapodást és a családi vagyon gyűjtését. A benne születettet a japán olvasat szorgalmas, előrelátó és takarékos embernek tartja, aki mások előtt veszi észre a lehetőséget, és nem szokta megvárni, amíg a szerencse magától kopogtat.',
    bivaly: 'Az Ökör (丑, ushi) a japán hagyományban Tenjin, a tanulás istenének a szent állata: minden Tenmangú-szentély előtt fekvő ökörszobor áll, amelynek a fejét a diákok vizsga előtt megsimogatják. A benne születetthez ezért a lassú, alapos, kitartó tanulás és a szavatartás képzete társul — az az ember, aki nem lesz gyorsan kész semmivel, de amit letesz, az évtizedekig áll.',
    tigris: 'A Tigris (寅, tora) Bishamonten, a harcos védelmező istenség kísérője, és a japán népi kultúrában a fukusimai papírmasé tigris, a hariko no tora a betegség elhárításának a jelképe. A japán olvasat ezért a bátorság és a védelmezés jegyének tartja: olyan emberé, aki előre kiáll, ha veszélyt lát, és akiben a család a nehéz időkben megkapaszkodik — ugyanakkor nehezen szelídíthető, ha egyszer nekiindult.',
    nyul: 'A Nyúl (卯, u) Japánban a holdbéli nyúl, aki mochit tör az égen, és az ugrás miatt a haladás, az emelkedés jelképe — újévkor gyakran „felfelé ívelő évként" hirdetik a nyúl évét. Az inabai fehér nyúl mítosza nyomán a párkapcsolatok és a jó kötések (enmuszubi) állataként is számontartják, ezért a benne születettet szelíd, jó közvetítő, kapcsolatokat teremtő embernek tartja a hagyomány.',
    sarkany: 'A Sárkány (辰, tatsu) az egyetlen képzeletbeli jegy, és Japánban a víz ura: a templomok kézmosó forrásán szinte mindig sárkányfej önti a vizet, a felszálló sárkány (nobori-ryú) pedig a hirtelen emelkedés jelképe. A benne születetthez ezért nagy ívű életút, erős kisugárzás és szokatlan szerencse képzete társul — a japán olvasat szerint az ő évei ritkán egyenletesek, inkább nagy ugrásokból állnak.',
    kigyo: 'A Kígyó (巳, mi) Japánban Benzaiten, a művészet, a zene és a vagyon istennőjének a hírnöke: a Kígyó napján (mi no hi) sokan zarándokolnak Benten-szentélyekbe, és a levedlett kígyóbőrt a pénztárcában tartják a gyarapodásért. A benne születettet ezért a hagyomány jó pénzügyi érzékű, művészi fogékonyságú és megújulásra képes embernek látja — olyannak, aki időnként teljesen leveti a régi életét, és újat kezd.',
    lo: 'A Ló (午, uma) a japán szentélyi kultúra alapállata: az ema (絵馬), vagyis a kívánságokat hordozó fatáblácska neve szó szerint „képes ló", mert eredetileg élő lovat ajánlottak fel az isteneknek. A jegyet ráadásul az „umaku iku" — „jól megy a dolog" — szójáték is kíséri, ezért a benne születettet lendületes, nyílt, szerencsés kezű embernek tartják, aki nem bírja a bezártságot.',
    kecske: 'A Juh (未, hitsudzsi) viszonylag későn, importált állatként került a japán mindennapokba, ezért nincs sok népi babona körülötte — annál erősebb viszont a nyugalom, a családi biztonság és a csoportbéke képzete, hiszen a nyáj együtt mozog. A benne születettet a japán olvasat kímélő, jó ízlésű, összhangra törekvő embernek tartja, aki inkább enged, mint hogy megbontsa a harmóniát, és aki művészi területen találja meg a saját hangját.',
    majom: 'A Majom (申, saru) neve azonos hangzású a „távozni" jelentésű szóval, ezért Japánban a bajelhárítás jegye: a „ma ga szaru" — elmegy a rontás — fordulat miatt a majom alakú amulettek védőszerepet kapnak, a nikkói Tósógú három bölcs majma pedig a japán kultúra egyik legismertebb képe. A benne születetthez így a gyors ész, a humor és az a képesség társul, hogy időben kilépjen a bajból, mielőtt az utolérné.',
    kakas: 'A Kakas (酉, tori) neve egybecseng a „begyűjteni" igével, ezért Japánban az üzleti szerencse jegye: a novemberi Tori no icsi vásárokon szerencsegereblyéket (kumade) árulnak, amelyekkel jelképesen behúzzák a hasznot. A mitológiában a kakasok kukorékolása csalta elő Amateraszut a barlangból, így a benne születettet éber, korán kelő, pontos és a dolgokat elindító embernek tartja a hagyomány.',
    kutya: 'A Kutya (戌, inu) Japánban a könnyű szülés és a gyermekvédelem jegye: a várandósok az ötödik hónap Kutya-napján kötik fel a hasövet (obi-iwai), mert a kutya könnyen és sokat kölykezik. Ehhez járul a hűség kultusza, amelynek Hacsikó a jelképe, ezért a benne születettet a japán olvasat megbízható, védelmező, a családjához és a barátaihoz feltétlenül ragaszkodó embernek tartja.',
    diszno: 'Japánban ez a jegy nem házisertés, hanem vaddisznó (亥, i / inoshishi), és ez mindent megváltoztat: a csótocu-móshin, vagyis a „fejjel a falnak" rohanás szólása hozzá kötődik, a Vake-szentély vadkanjai pedig a betegségtől való védelmet jelentik. A benne születettet ezért a japán hagyomány őszinte, bátor, megalkuvás nélkül egyenes embernek látja, aki ha egyszer elindult egy irányba, azt már nem hajlandó félúton megváltoztatni.'
  }
};
