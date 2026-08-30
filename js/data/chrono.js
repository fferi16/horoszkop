/* Horoszkóp app — kronobiológia, bioritmus és holdnaptár adatmodul.
   Sima script (nem ES modul), UTF-8. Betöltés: <script src="js/data/chrono.js"></script>
   A kronobiológiai blokk tudományos alapokon áll; a bioritmus- és holdnaptár-blokk
   hagyományos, illetve tudományosan cáfolt modelleket dokumentál — ezt a szövegek jelzik. */

window.HDATA = window.HDATA || {};

window.HDATA.chrono = {

  /* ------------------------------------------------------------------ */
  /* 1) KRONOBIOLÓGIA — tudományos modul                                 */
  /* ------------------------------------------------------------------ */

  intro: 'A kronobiológia az élő szervezetek időbeli szerveződését, a biológiai ritmusok működését vizsgáló természettudomány. Alapfelismerése, hogy az alvás–ébrenlét, a testhőmérséklet, a melatonin- és kortizolszint ritmusát nem a környezet írja elő, hanem a hipotalamuszban működő belső óra (a szuprakiazmatikus mag) és a sejtekben futó óragének hajtják — a környezeti jelek, elsősorban a fény, csak szinkronizálják őket. A terület mérhető, kísérletileg ellenőrizhető állításokkal dolgozik: a molekuláris óraműért 2017-ben Hall, Rosbash és Young fiziológiai és orvostudományi Nobel-díjat kapott. Ez élesen elválasztja az asztrológiától: itt nem a születés égi konstellációja, hanem egy megfigyelhető élettani rendszer időzítése a magyarázat, és minden ajánlás mögött kísérleti vagy epidemiológiai adat áll.',

  chronotypes: [
    {
      key: 'korai',
      name: 'Korai típus („pacsirta")',
      share: 'kb. 15–25%',
      text: 'A korai kronotípusú ember belső órája a külső naphoz képest előbbre jár: ébresztő nélkül is korán ébred, és már a délelőtti órákban a legjobb kognitív formájában van. Este viszonylag korán jelentkezik nála az álmosság, mert a melatonin termelése hamarabb indul be. Az életkor előrehaladtával a népesség egyre nagyobb hányada tolódik ebbe az irányba, idős korban a korai típus dominál. A korai típusnak jellemzően alacsony a szociális jetlagje, mert a szokásos munkarend nagyjából egybeesik a biológiai időzítésével.',
      wake: '5:30–6:30',
      peak: 'délelőtt 7–11',
      sport: 'Az erő- és állóképességi edzés 16:00–18:00 között a leghatékonyabb a testhőmérséklet-csúcs miatt, de rendszeres reggeli edzéshez a szervezet néhány hét alatt adaptálódik.',
      deepWork: 'A koncentrációt igénylő analitikus mélymunkát 7:00 és 11:00 közé érdemes tenni, a megbeszéléseket pedig a délelőtt végére csúsztatni.',
      caffeineStop: 'Az utolsó koffeintartalmú ital nagyjából 13:00-ig, azaz a tervezett lefekvés előtt legalább 8–9 órával.',
      bedtime: '21:30–22:30'
    },
    {
      key: 'kozepes',
      name: 'Köztes típus',
      share: 'kb. 50–60%',
      text: 'A köztes vagy intermedier kronotípus a népesség többségét lefedi: a belső óra nagyjából együtt jár a társadalmi nappal, az ébredés és az elalvás is a hagyományos munkarendhez illeszkedik. A kognitív teljesítmény délelőtt emelkedik, kora délután jelentkezik a jól dokumentált teljesítményvölgy, majd a kora esti órákban jön egy második, gyengébb csúcs. Ez a típus reagál a legkiszámíthatóbban az alváshigiéniai lépésekre, mert nincs nagy feszültség a biológiai és a szociális időzítése között. Mivel a kronotípus kontinuum, a köztes tartományon belül is jelentős egyéni eltérések vannak.',
      wake: '7:00–8:00',
      peak: 'délelőtt 10 – kora délután 13',
      sport: 'Edzésre 16:00 és 19:00 között a legkedvezőbb az időablak, amikor az izomerő, a reakcióidő és az ízületi mozgékonyság a napi maximumához közelít.',
      deepWork: 'A legjobb mélymunka-sáv 10:00–13:00, a kreatív és ötletelős feladatok pedig a 15:00–18:00 közötti második csúcsra tehetők.',
      caffeineStop: 'A koffeinbevitelt körülbelül 14:30-kor érdemes lezárni, mert a koffein felezési ideje átlagosan öt óra körül van.',
      bedtime: '23:00–23:30'
    },
    {
      key: 'kesoi',
      name: 'Kései típus („bagoly")',
      share: 'kb. 15–25%',
      text: 'A kései kronotípusnál a belső óra fázisa hátrébb tolódik: nehéz a korai ébredés, reggel tartós az alvási tehetetlenség, a teljesítménycsúcs pedig a délutánra és az estére esik. Ez nem fegyelem vagy motiváció kérdése, hanem részben genetikailag meghatározott fenotípus — a kronotípus örökölhetősége iker- és családvizsgálatok szerint 40–50% körüli. A legkésőbbi kronotípus jellemzően 19–21 éves kor körül alakul ki, majd az életkorral fokozatosan korábbra tolódik. Ennél a csoportnál a legnagyobb a szociális jetlag, mert a kötelező munka- és iskolakezdés rendszeresen a biológiai éjszakájuk közepére esik.',
      wake: '8:30–10:00',
      peak: 'kora délután 12–14, majd erős esti sáv 17–21',
      sport: 'Az edzésre 18:00–20:00 között van a legjobb élettani ablak; ha a fázist előbbre kell hozni, a reggeli mozgás erős fénnyel kombinálva segíthet.',
      deepWork: 'A mélymunkát 12:00–14:00 közé, a hosszabb kreatív blokkot pedig a 17:00–21:00 közötti sávra érdemes időzíteni.',
      caffeineStop: 'A koffein utolsó időpontja nagyjából 16:00, egyébként tovább késlelteti az amúgy is hátratolt elalvást.',
      bedtime: '00:00–01:30'
    }
  ],

  meqIntro: 'A Horne–Östberg-féle Morningness–Eveningness Questionnaire (MEQ, 1976) a kronotípus legrégebbi és legszélesebb körben használt önkitöltő mérőeszköze: 19 kérdésben nem a tényleges napirendet, hanem a preferenciákat vizsgálja, azaz hogy szabad választás esetén mikor kelnénk, edzenénk vagy dolgoznánk. A 16 és 86 pont közötti eredmény öt kategóriába sorol a határozottan reggelitől a határozottan estiig, a vágópontok azonban populációfüggők. Az alábbi hat kérdés csak rövidített tájékozódás a MEQ logikája alapján — érvényes felméréshez a teljes kérdőív, illetve a tényleges alvásidőket rögzítő müncheni MCTQ szükséges.',

  meqQuiz: [
    {
      q: 'Mikor kelnél fel, ha teljesen szabadon dönthetnél?',
      options: [
        { label: '5:00–6:30', score: 5 },
        { label: '6:30–7:45', score: 4 },
        { label: '7:45–9:45', score: 3 },
        { label: '9:45–11:00', score: 2 },
        { label: '11:00 után', score: 1 }
      ]
    },
    {
      q: 'Mikor feküdnél le, ha az estédet semmilyen kötelezettség nem korlátozná?',
      options: [
        { label: '20:00–21:00', score: 5 },
        { label: '21:00–22:15', score: 4 },
        { label: '22:15–00:30', score: 3 },
        { label: '00:30–01:45', score: 2 },
        { label: '01:45 után', score: 1 }
      ]
    },
    {
      q: 'Az ébredés utáni első fél órában mennyire érzed magad frissnek?',
      options: [
        { label: 'Teljesen éber vagyok, azonnal indulok', score: 4 },
        { label: 'Elég friss vagyok', score: 3 },
        { label: 'Kissé kábán, lassan indulok be', score: 2 },
        { label: 'Nagyon fáradtan, sokáig nem vagyok magamnál', score: 1 }
      ]
    },
    {
      q: 'A nap melyik szakában érzed a szellemi teljesítményedet a legjobbnak?',
      options: [
        { label: 'Kora reggel, 6:00–9:00', score: 5 },
        { label: 'Délelőtt, 9:00–12:00', score: 4 },
        { label: 'Kora délután, 12:00–16:00', score: 3 },
        { label: 'Késő délután és este, 16:00–21:00', score: 2 },
        { label: 'Késő este vagy éjszaka, 21:00 után', score: 1 }
      ]
    },
    {
      q: 'Ha heti kétszer kemény edzést vállalnál, melyik időpontot választanád?',
      options: [
        { label: '7:00–9:00 között', score: 4 },
        { label: '11:00–13:00 között', score: 3 },
        { label: '15:00–17:00 között', score: 2 },
        { label: '19:00–21:00 között', score: 1 }
      ]
    },
    {
      q: 'Ha ébresztőóra nélkül, kötöttségek nélkül élhetnél, mennyire térne el a napirended a mostanitól?',
      options: [
        { label: 'Szinte semennyire, ugyanígy élnék', score: 4 },
        { label: 'Legfeljebb egy órával kelnék és feküdnék később', score: 3 },
        { label: 'Nagyjából két órával csúszna minden későbbre', score: 2 },
        { label: 'Két óránál is többel tolódna el az egész napom', score: 1 }
      ]
    }
  ],

  meqScoring: 'A hat kérdés pontszámait összeadva 6 és 27 közötti eredményt kapsz: minél magasabb az érték, annál inkább korai („reggeli") típus felé mutat a preferenciád, minél alacsonyabb, annál inkább kései („esti") irányba. Nagyjából 21 pont felett korai, 13 és 21 pont között köztes, 13 pont alatt kései típusra utaló mintázatról beszélhetünk — de ez csak tájékoztató becslés, a hivatalos 16–86 pontos MEQ-besorolást nem helyettesíti.',

  breus: {
    intro: 'Michael Breus alvásszakértő négy állatnévvel jelölt kronotípusa a The Power of When (2016) című népszerűsítő könyvéből származik, és appokban, magazinokban rendkívül elterjedt. Ez azonban nem validált tudományos taxonómia: a szakirodalom a MEQ- és MCTQ-alapú kontinuumot használja, a „delfin" kategória pedig valójában nem kronotípus, hanem alvásminőség-dimenzió (inszomniás hajlam), amelyet a kutatás külön kezel.',
    types: [
      { name: 'Delfin', text: 'Breus szerint a népesség mintegy 10%-a tartozik ide: éber, perfekcionista, könnyen felriadó, szabálytalan alvó, aki gyakran küzd elalvási és átalvási nehézséggel. A tudományos megközelítés ennek a csoportnak nem időzítési trükköket, hanem alváshigiéniai lépéseket és tartós panasz esetén inszomniára szabott kognitív viselkedésterápiát (CBT-I) ajánl.' },
      { name: 'Oroszlán', text: 'A modell szerint a népesség 15–20%-a, aki hajnalban kel, délelőtt van a csúcsán, és este korán elfárad — ez nagyjából a tudományos korai kronotípusnak felel meg. Az oroszlán legfőbb kihívása a késő esti társasági program, amely rendszeresen belevág a természetes alvásidejébe.' },
      { name: 'Medve', text: 'A legnépesebb csoport, Breus becslése szerint a népesség 50–55%-a, aki nagyjából a napfényciklust követi, és jól illeszkedik a hagyományos munkarendhez. Megfeleltethető a tudományos köztes kronotípusnak: délelőtti csúccsal, kora délutáni völggyel és kora esti második, gyengébb csúccsal.' },
      { name: 'Farkas', text: 'A modell kései típusa, a népesség 15–20%-a: nehezen ébred, délután lendül be, és este kreatív, energikus. Neki a legnagyobb a feszültsége a korai munkakezdéssel, ezért a reggeli erős fényexpozíció és az esti fénykerülés a leggyakorlatibb — és tudományosan is alátámasztott — segítség.' }
    ]
  },

  dailyRhythm: [
    { time: '04:00–06:00', event: 'Testmaghőmérséklet-mélypont (nadír), legmélyebb alvás', text: 'A szokásos ébredés előtt körülbelül két órával a testhőmérséklet a napi minimumán van, ilyenkor a legrosszabb az éberség és a legnagyobb a balesetveszély, ha valaki ébren van.' },
    { time: '06:00–08:00', event: 'Kortizolcsúcs, a testhőmérséklet emelkedik', text: 'Az ébredést követő 30–45 percben tetőzik a kortizol (cortisol awakening response), ez a szervezet indítómotorja, miközben a melatoninszint gyorsan leesik.' },
    { time: '07:00–09:00', event: 'Alvási tehetetlenség (sleep inertia) oldódása', text: 'Az ébredés utáni egy-két órában a kognitív teljesítmény átmenetileg csökkent, ezt reggeli természetes fénnyel és mozgással lehet a leggyorsabban feloldani.' },
    { time: '09:00–11:00', event: 'Délelőtti kognitív csúcs, jó glükóztolerancia', text: 'A legtöbb embernél ekkor a legjobb az analitikus figyelem és a munkamemória, és a szénhidrátterhelést is ilyenkor kezeli a legjobban a szervezet.' },
    { time: '11:00–13:00', event: 'Éberség fennsíkja, éhségjel erősödik', text: 'A teljesítmény még magas, de már lassan hanyatlik, ezért ez a sáv jól használható megbeszélésekre és a nap fő étkezésére.' },
    { time: '13:00–15:00', event: 'Kora délutáni völgy („post-lunch dip")', text: 'A cirkadián görbe természetes bemélyedése — nem csak az ebéd okozza —, amelyre a 10–20 perces rövid szunyókálás vagy egy szabadtéri séta a leghatékonyabb válasz.' },
    { time: '15:00–17:00', event: 'Az éberség újra emelkedik, koordináció javul', text: 'A finommotoros koordináció és a reakcióidő ekkortól javul számottevően, ezért ez a sáv jó a gyakorlati, kézügyességet igénylő feladatokra.' },
    { time: '17:00–19:00', event: 'Testhőmérséklet-csúcs, fizikai teljesítménymaximum', text: 'Az izomerő, a gyorsaság és az ízületi mozgékonyság a napi maximumán van, egyben ekkor a legkisebb a sérülés kockázata edzés közben.' },
    { time: '19:00–21:00', event: 'Romló glükóztolerancia, a szervezet lassít', text: 'Este a szervezet élettanilag rosszabbul kezeli a nagy szénhidrátterhelést, ezért a vacsora legyen könnyebb, és záruljon lefekvés előtt legalább két-három órával.' },
    { time: '21:00–23:00', event: 'Melatonin-emelkedés (DLMO), elalvási ablak nyílik', text: 'A tobozmirigy nagyjából két órával a szokásos elalvás előtt kezdi meg a melatonintermelést, amelyet az esti erős, kékben gazdag fény azonnal elnyom.' },
    { time: '23:00–02:00', event: 'Mélyalvás dominanciája, növekedési hormon kiáramlása', text: 'Az éjszaka első felében a lassú hullámú alvás aránya a legmagasabb, ez a memóriakonszolidáció és a regeneráció szempontjából a legértékesebb szakasz.' },
    { time: '02:00–04:00', event: 'Melatonincsúcs, a REM-alvás aránya nő', text: 'Az éjszaka második felében a REM-szakaszok hosszabbodnak, ezért a hajnali ébresztgetés vagy a lerövidített alvás elsősorban a REM-et vágja le.' }
  ],

  sleepHygiene: [
    'Tartsd állandóan az ébredési időt, hétvégén is egy órán belüli eltéréssel — ez a legerősebb egyetlen tényező a belső óra stabilizálásában.',
    'Ébredés után minél hamarabb menj természetes fényre: a kültéri fény felhős időben is 1000–10 000 lux, míg a beltéri világítás jellemzően csak 100–500 lux.',
    'Zárd le a koffeinbevitelt a lefekvés előtt legalább 8–9 órával, mert a koffein felezési ideje átlagosan öt óra körül van.',
    'Ne használj alkoholt altatóként: gyorsítja az elalvást, de rontja az alvás második felét és elnyomja a REM-szakaszokat.',
    'Aludj hűvös (nagyjából 17–19 °C), sötét és csendes szobában, és az ágyat lehetőleg csak alvásra használd.',
    'A nagy étkezést és az intenzív edzést zárd le lefekvés előtt két-három órával; a könnyű séta vagy nyújtás nem probléma.',
    'Lefekvés előtt egy-két órával tompítsd a világítást és válts meleg fényre; a képernyők éjszakai módja segít, de a fényerő és a tartalom stimuláló hatása legalább annyira számít.',
    'Szunyókálj rövidet (10–20 perc) és kora délután; a késői vagy hosszú alvás lerontja az esti alvásnyomást.',
    'Tartós álmatlanság esetén az elsővonalbeli, bizonyítottan hatásos kezelés az inszomniára szabott kognitív viselkedésterápia (CBT-I), nem az altató — érdemes szakemberhez fordulni.'
  ],

  socialJetlag: 'A szociális jetlag Till Roenneberg fogalma: a munkanapi és a szabadnapi alvásközéppont különbsége, képlettel SJL = |MSF − MSW|, ahol az alvásközéppont az elalvás és az ébredés közötti idő fele. Azt méri, mennyire kényszerít a társadalmi órarend a biológiai órától eltérő alvásidőzítésre — olyan, mintha az ember hetente oda-vissza utazna egy-három időzónát. A népesség jelentős részénél, különösen a kései kronotípusú fiataloknál, egy-két óra feletti az érték, és epidemiológiai vizsgálatokban a nagyobb szociális jetlag rosszabb kardiometabolikus mutatókkal, hangulattal és tanulmányi eredménnyel jár együtt; ezek azonban túlnyomórészt keresztmetszeti korrelációk, így az ok-okozati következtetés óvatosságot kíván.',

  seasonOfBirth: 'A születési évszak és bizonyos egészségi kimenetek között valóban léteznek statisztikai összefüggések, de a mechanizmus soha nem égi hatás, hanem a magzati és csecsemőkori környezet szezonális változása: anyai fertőzések, napfény- és D-vitamin-ellátottság, hőmérséklet, táplálkozás, allergénexpozíció. A legrobusztusabb példa a szkizofrénia téli-tavaszi születési többlete az északi féltekén, ahol a metaanalízisek esélyhányadosa mindössze 1,04–1,05 körüli. Néhány vizsgálat a kronotípussal is talált apró kapcsolatot (az ősszel-télen születettek kissé koraibbak), de a replikáció itt sem egységes. A hatásméretek annyira kicsik, hogy populációs szinten kimutathatók ugyan, egyéni előrejelzésre viszont teljességgel alkalmatlanok — a születési hónapból senkinek a személyisége, egészsége vagy sorsa nem jósolható meg.',

  seasonText: {
    tavasz: 'A tavaszi születésűeknél néhány vizsgálat kissé magasabb szklerózis multiplex-kockázatot írt le, amit az anyai téli D-vitamin-hiány hipotézisével magyaráznak, és több minta enyhén későbbi kronotípus-hajlamot is talált. Mindkét összefüggés hatásmérete elenyésző, és a késő téli-kora tavaszi hónapok az összes szezonális lelet közül a legvitatottabbak.',
    nyar: 'A nyári születés a szkizofrénia-irodalomban enyhén védő tényezőként jelenik meg (esélyhányados körülbelül 0,96), a nagyobb napfény- és D-vitamin-expozíció feltételezett közvetítésével. Emellett a nyáron születetteknél is inkább későbbi kronotípus-hajlamot mértek, de ez a különbség percekben-negyedórákban, nem órákban mérhető.',
    osz: 'Az őszi születésűeknél több mintában kissé koraibb kronotípus mutatkozott, a korai fejlődés alatti fotoperiódus feltételezett beprogramozó hatása nyomán. Az őszi vírusszezonhoz kötött allergia- és asztmakockázat-módosulások szintén leírtak, de ezek is kis, populációs szintű eltolódások.',
    tel: 'A téli születés a legjobban dokumentált szezonális lelet: az északi féltekén a téli-tavaszi hónapokban született emberek között a szkizofréniával élők aránya nagyjából 5–8%-kal magasabb a népességi alaparánynál. A fő hipotézisek az anyai influenzafertőzés a második trimeszterben és a téli D-vitamin-hiány. A téli születésűeknél is inkább koraibb kronotípus-hajlamot mértek — mindez azonban egyetlen konkrét emberre nézve semmilyen kimenetet nem jelez előre.'
  },

  /* ------------------------------------------------------------------ */
  /* 2) BIORITMUS — tudományosan cáfolt, áltudományos modell             */
  /* ------------------------------------------------------------------ */

  biorhythm: {
    intro: 'A klasszikus bioritmus-elmélet szerint a születés pillanatától három rögzített periódusú szinuszhullám fut végig az életen: egy 23 napos fizikai, egy 28 napos érzelmi és egy 33 napos szellemi ciklus. A számítás tisztán determinisztikus: a születés óta eltelt egész napok számából a sin(2π·t/T) képlettel adódik minden érték, a pozitív fél „erős", a negatív „gyenge" időszak. Fontos tudni, hogy ez áltudomány: a XIX. század végi számmisztikai eredetű modellt (Wilhelm Fliess, Hermann Swoboda, Alfred Teltscher) az 1970–80-as években több tucat független vizsgálat tesztelte baleseti, sport- és vizsgaadatokon, és a találatok a véletlen szintjén mozogtak — semmilyen ismert élettani folyamat nem produkál mindenkinél azonos periódusú, élethosszig fázistartó oszcillációt. A modul kizárólag szórakoztató, retró funkcióként szerepel, és nem keverendő a kronotípus-alapú, tudományos ajánlásokkal.',
    cycles: [
      { key: 'fizikai', name: 'Fizikai', days: 23, color: '#e05252', text: 'A hagyomány szerint az erőt, az állóképességet és a koordinációt írja le; a 23 napos periódust Wilhelm Fliess „férfi ciklusnak" nevezte, élettani alapja nincs.' },
      { key: 'erzelmi', name: 'Érzelmi', days: 28, color: '#4a90d9', text: 'Állítólag a hangulatot, az érzelmi kiegyensúlyozottságot és a kreativitást mutatja; a 28 napos periódust a menstruációs ciklus átlagára hivatkozva vezették be, de a modell férfiakra és nőkre egyformán alkalmazza.' },
      { key: 'szellemi', name: 'Szellemi', days: 33, color: '#4caf50', text: 'A logikát, a memóriát és a koncentrációt tulajdonítják neki; a 33 napos ciklust Alfred Teltscher innsbrucki tanár vélte felfedezni diákjai teljesítményében, kontrollált adatok nélkül.' }
    ],
    phaseText: {
      high: 'A görbe pozitív, nulla feletti szakaszát a hagyomány „magas" fázisnak nevezi, amikor az adott terület állítólag a legjobban működik — ez azonban puszta matematikai konstrukció, nem mért állapot.',
      low: 'A nulla alatti szakasz a modell szerint „gyenge" időszak, amikor pihenésre és regenerációra volna szükség; a valóságban ez a napi teljesítményt semmivel sem jelzi előre jobban, mint a véletlen.',
      critical: 'A nullátmenet napját nevezi a hagyomány „kritikus napnak", amikor a görbe előjelet vált, és állítólag megnő a baleset- és hibázási hajlam — ezt az állítást a hetvenes-nyolcvanas évek baleseti statisztikai vizsgálatai kifejezetten cáfolták.'
    },
    disclaimer: 'Szórakoztató célú, tudományosan cáfolt modell — a napi döntéseidet ne erre alapozd.'
  },

  /* ------------------------------------------------------------------ */
  /* 3) HOLDNAPTÁR — csillagászati alap + hagyományos jelentésrétegek     */
  /* ------------------------------------------------------------------ */

  moon: {
    intro: 'A holdfázist a Nap–Föld–Hold szög (elongáció) határozza meg: a szinodikus hónap 29,530589 nap alatt viszi végig a Holdat újholdtól újholdig, a megvilágított hányad pedig az (1 − cos(elongáció)) / 2 képlettel adódik. A fázisok csillagászati része pontosan számítható, a hozzájuk fűzött jelentések viszont a nyugati holdnaptár- és népi hagyomány konszenzusát tükrözik, nem tudományos állítások — a séma alaplogikája, hogy újholdtól teliholdig az építkezés, teliholdtól újholdig a lezárás ideje.',

    phases: [
      { key: 'ujhold', name: 'Újhold', symbol: '🌑', from: 0, to: 22.5, wrapFrom: 337.5,
        text: 'A Hold a Nap irányában áll, a felénk néző oldala sötét, így nem látható — a hagyomány ezt tekinti az „üres lap" idejének, az újrakezdés és a befelé fordulás fázisának. A néphit szerint ilyenkor érdemes célt kitűzni, tervezni, új projektet indítani, illetve pihenni és böjtölni.' },
      { key: 'novekvo-sarlo', name: 'Növekvő sarló', symbol: '🌒', from: 22.5, to: 67.5,
        text: 'Vékony, jobbra dagadó D alakú sarló látszik este, nyugat felé — ez a lendületvétel és az első lépések fázisa a hagyomány szerint. Ilyenkor szokás elköteleződni, tanulást kezdeni és a föld feletti termésű növényeket elvetni.' },
      { key: 'elso-negyed', name: 'Első negyed', symbol: '🌓', from: 67.5, to: 112.5,
        text: 'A korong jobb fele világos, a Hold délben kel és éjfélkor nyugszik — a hagyomány az akadályok és a döntéskényszer fázisaként tartja számon. Ez a néphit szerint az építés ideje: döntéshozatal, problémamegoldás, kitartó munka.' },
      { key: 'novekvo-domboru', name: 'Növekvő domború', symbol: '🌔', from: 112.5, to: 157.5,
        text: 'A korong jobbra domború, már majdnem teljes — a hagyomány a finomítás, a kitartás és az érlelődés szakaszának tekinti. Ilyenkor szokás a részleteket csiszolni, korrigálni és a cél előtti hajrát megtenni.' },
      { key: 'telihold', name: 'Telihold', symbol: '🌕', from: 157.5, to: 202.5,
        text: 'A Föld a Nap és a Hold között áll, a teljes korong világít, a Hold napnyugtakor kel és egész éjjel az égen van — a hagyomány szerint ez a csúcspont, a beteljesedés és a felfokozott érzelmek ideje. A néphit a betakarításhoz, ünnepléshez és hálaadáshoz köti, új dolgok indítására viszont nem tartja alkalmasnak.' },
      { key: 'fogyo-domboru', name: 'Fogyó domború', symbol: '🌖', from: 202.5, to: 247.5,
        text: 'A korong balra domború, késő este kel — a hagyomány a megosztás, a tanítás és a hálakör fázisának nevezi. Ilyenkor szokás az eredményeket megosztani, visszajelzést kérni és dokumentálni a tapasztalatokat.' },
      { key: 'utolso-negyed', name: 'Utolsó negyed', symbol: '🌗', from: 247.5, to: 292.5,
        text: 'A korong bal fele világos, a Hold éjfélkor kel és délben nyugszik — a hagyomány a mérlegkészítés és az elengedés kezdetének fázisaként értelmezi. Ez a néphit szerint a lezárás, a kiértékelés, a rendrakás és a rossz szokások elhagyásának ideje.' },
      { key: 'fogyo-sarlo', name: 'Fogyó sarló', symbol: '🌘', from: 292.5, to: 337.5,
        text: 'Vékony, C alakú sarló látszik hajnalban, kelet felé — a hagyomány a megtisztulás és a pihenés szakaszának tartja. Ilyenkor szokás a méregtelenítés, a megbocsátás, a gyomlálás és a selejtezés, hogy helyet készítsünk az újnak.' }
    ],

    fullMoonNames: {
      1: { name: 'Farkashold', text: 'A januári teliholdat az amerikai almanach-hagyomány a tél közepén üvöltő farkasokról nevezte el; a régi magyar hónapnév Boldogasszony hava.' },
      2: { name: 'Hóhold', text: 'A februári telihold neve a legtöbb havat hozó hónapra utal, más néven Éhség-hold; a régi magyar hónapnév Böjtelő hava.' },
      3: { name: 'Féreghold', text: 'A márciusi telihold a fagyból előbújó gilisztákról kapta a nevét, és a tavaszkezdetet jelzi; a régi magyar hónapnév Böjtmás hava.' },
      4: { name: 'Rózsaszín hold', text: 'Az áprilisi telihold neve a korai tavaszi lángvirág (phlox) színéből ered, nem a Hold tényleges színéből; a régi magyar hónapnév Szent György hava.' },
      5: { name: 'Virághold', text: 'A májusi telihold a teljes virágba borulás havát jelöli; a régi magyar hónapnév Pünkösd hava.' },
      6: { name: 'Eperhold', text: 'A júniusi telihold a szamóca érésének idejére utal; a régi magyar hónapnév Szent Iván hava, a nyári napforduló és a tűzugrás hónapja.' },
      7: { name: 'Bakhold', text: 'A júliusi telihold a szarvasbikák új agancsának növekedéséről kapta a nevét; a régi magyar hónapnév Szent Jakab hava.' },
      8: { name: 'Tokhalhold', text: 'Az augusztusi telihold a Nagy-tavak tokhalfogási szezonjára emlékeztet; a régi magyar hónapnév Kisasszony hava.' },
      9: { name: 'Aratási hold', text: 'A szeptemberi telihold a betakarítás holdja, az őszi napéjegyenlőséghez legközelebbi telihold — néha októberre csúszik; a régi magyar hónapnév Szent Mihály hava.' },
      10: { name: 'Vadászhold', text: 'Az októberi telihold a tél előtti vadászat idejét jelezte; a régi magyar hónapnév Mindszent hava, a szüret hónapja.' },
      11: { name: 'Hódhold', text: 'A novemberi telihold a hódcsapdák állításának időszakára utal; a régi magyar hónapnév Szent András hava.' },
      12: { name: 'Hideg hold', text: 'A decemberi telihold a leghosszabb éjszakák havát jelöli; a régi magyar hónapnév Karácsony hava.' },
      13: { name: 'Kék hold', text: 'A modern definíció szerint a naptári hónap második teliholdja, körülbelül 2,7 évente; a Hold ilyenkor nem kék, a név az angol „once in a blue moon" fordulatból ered.' }
    },

    inSign: {
      kos: 'Tűz elem, termésnap: a hagyomány szerint energikus, kezdeményező, de türelmetlen hangulatot hoz. Kedvez a gyors döntéseknek, a sportnak, az indításnak és a bátor lépéseknek, kevésbé a hosszas egyeztetésnek és az aprómunkának.',
      bika: 'Föld elem, gyökérnap: a néphit nyugodt, élvezetközpontú és kitartó tónust tulajdonít neki. Jónak tartják pénzügyekre, kertészkedésre, főzésre, testápolásra és stabil, hosszan tartó munkára, a kapkodás és a hirtelen váltás viszont nem illik hozzá.',
      ikrek: 'Levegő elem, virágnap: a hagyomány kíváncsi, csapongó, kommunikatív hangulatot köt hozzá. Kedvez a levelezésnek, tanulásnak, tárgyalásnak, rövid utaknak és a kapcsolatépítésnek, kevésbé a monotóniának és a mély elmélyülésnek.',
      rak: 'Víz elem, levélnap: a néphit érzékeny, otthonos, gondoskodó tónust tulajdonít neki. Családi programra, otthonszépítésre, befőzésre, érzelmi beszélgetésre és öntözésre tartják jónak, konfrontációra és hideg racionalitásra nem.',
      oroszlan: 'Tűz elem, termésnap: a hagyomány önérzetes, játékos, nagyvonalú hangulatot ír le. Kedvez a szereplésnek, a kreatív alkotásnak, az ünneplésnek és a randevúnak, a csendes háttérmunka és a kritika elfogadása viszont nehezebben megy.',
      szuz: 'Föld elem, gyökérnap: a néphit precíz, elemző, szolgálatkész tónust köt hozzá. Ideálisnak tartják rendrakásra, adminisztrációra, egészségügyi teendőkre és részletmunkára, a nagyvonalú improvizációra kevésbé.',
      merleg: 'Levegő elem, virágnap: a hagyomány harmóniakereső, társas, esztétikus hangulatot tulajdonít neki. Kapcsolatápolásra, szépészeti kezelésekre, művészetre és megállapodásokra tartják kedvezőnek, magányos döntésre és konfliktusra nem.',
      skorpio: 'Víz elem, levélnap: a néphit intenzív, mélyre ásó, szenvedélyes tónust ír le. Kutatásra, lezárásra és lelki értelemben vett nagytakarításra tartják jónak; a felszínes csevej nem illik hozzá, és a magyar népi hagyomány szerint a hajvágásnak sem kedvez.',
      nyilas: 'Tűz elem, termésnap: a hagyomány optimista, kalandvágyó, filozofikus hangulatot köt hozzá. Utazástervezésre, tanulásra, jogi ügyekre és sportra tartják kedvezőnek, a szőrszálhasogatásra kevésbé.',
      bak: 'Föld elem, gyökérnap: a néphit fegyelmezett, célratörő, komoly tónust tulajdonít neki. Karrierlépésekre, hosszú távú tervezésre, struktúraépítésre és hivatalos ügyekre tartják jónak, a lazításra és az érzelgősségre nem.',
      vizonto: 'Levegő elem, virágnap: a hagyomány újító, függetlenségre vágyó, közösségi hangulatot ír le. Csapatmunkára, technológiai feladatokra, ötletelésre és baráti programokra tartják kedvezőnek, a rutinra és a kötöttségre kevésbé.',
      halak: 'Víz elem, levélnap: a néphit álmodozó, empatikus, intuitív tónust köt hozzá. Művészetre, meditációra, pihenésre, segítségnyújtásra és zenére tartják jónak; a kemény alku és az éles logika nehezebb, a népi hagyomány szerint pedig a lábápolásnak sem kedvez.'
    },

    gardening: {
      root: 'Gyökérnapok a föld jegyek (Bika, Szűz, Bak) idején: a Maria Thun-féle biodinamikus hagyomány szerint ilyenkor a legkedvezőbb a répa, retek, burgonya, hagyma és a többi gyökérzöldség vetése, ültetése és betakarítása.',
      leaf: 'Levélnapok a víz jegyek (Rák, Skorpió, Halak) idején: a hagyomány szerint ez a saláta, spenót, káposzta, a fűszernövények és a gyep ideje.',
      flower: 'Virágnapok a levegő jegyek (Ikrek, Mérleg, Vízöntő) idején: a biodinamikus naptár szerint ekkor érdemes virágokkal, brokkolival, articsókával és gyógynövény-virágzattal dolgozni.',
      fruit: 'Termésnapok a tűz jegyek (Kos, Oroszlán, Nyilas) idején: a hagyomány szerint ez a paradicsom, bab, gabona, gyümölcsfák és tökfélék napja.',
      note: 'Fontos: Maria Thun sziderikus (csillagképi) holdállással számolt, a legtöbb app viszont tropikus jegyeket használ, és a kettő között ma nagyjából 24° (mintegy két nap) az eltérés. A biodinamikus hatás kontrollált vizsgálatokban nem igazolódott, ezért ez a modul hagyományként, nem tudományos ajánlásként értendő.'
    },

    hairCutting: 'A hagyományos hajvágás-naptár szerint a növekvő Hold idején vágott haj gyorsabban és dúsabban nő vissza, ezért a hosszabbításra törekvők ekkor vágatnak, míg a fogyó Hold ideje a ritkításra, a formatartásra és a szőrtelenítésre való; a jegyek közül a néphit az Oroszlánt és a Szüzet tartja a legkedvezőbbnek, a Skorpiót és a Halakat pedig kifejezetten kerülendőnek. Ez tisztán néphit: a hajnövekedés üteme a hajhagyma ciklusától, a hormonoktól és a táplálkozástól függ, és semmilyen kontrollált vizsgálat nem mutatott ki összefüggést a holdfázissal.',

    /* 2026-os újhold- és telihold-időpontok a dokumentáció táblázatából.
       A `date` és `timeHu` a magyar helyi időt (CET = UTC+1, CEST = UTC+2) adja meg,
       az `utc` mező az eredeti UTC-időpontot. Perc szintű, ±1 perc forrásfüggő eltéréssel. */
    events2026: [
      { date: '2026-01-03', type: 'telihold', timeHu: '11:04', utc: '10:04', name: 'Farkashold' },
      { date: '2026-01-18', type: 'ujhold', timeHu: '20:53', utc: '19:53' },
      { date: '2026-02-01', type: 'telihold', timeHu: '23:10', utc: '22:10', name: 'Hóhold' },
      { date: '2026-02-17', type: 'ujhold', timeHu: '13:02', utc: '12:02', note: 'Gyűrűs napfogyatkozás (Antarktisz) — Magyarországról nem látható.' },
      { date: '2026-03-03', type: 'telihold', timeHu: '12:39', utc: '11:39', name: 'Féreghold', note: 'Teljes holdfogyatkozás — Magyarországról nem látható.' },
      { date: '2026-03-19', type: 'ujhold', timeHu: '02:24', utc: '01:24' },
      { date: '2026-04-02', type: 'telihold', timeHu: '04:13', utc: '02:13', name: 'Rózsaszín hold' },
      { date: '2026-04-17', type: 'ujhold', timeHu: '13:53', utc: '11:53' },
      { date: '2026-05-01', type: 'telihold', timeHu: '19:24', utc: '17:24', name: 'Virághold' },
      { date: '2026-05-16', type: 'ujhold', timeHu: '22:02', utc: '20:02' },
      { date: '2026-05-31', type: 'telihold', timeHu: '10:46', utc: '08:46', name: 'Kék hold', note: 'A hónap második teliholdja.' },
      { date: '2026-06-15', type: 'ujhold', timeHu: '04:55', utc: '02:55' },
      { date: '2026-06-30', type: 'telihold', timeHu: '01:58', utc: '2026-06-29 23:58', name: 'Eperhold', note: 'UTC szerint még június 29., magyar idő szerint már június 30.' },
      { date: '2026-07-14', type: 'ujhold', timeHu: '11:44', utc: '09:44' },
      { date: '2026-07-29', type: 'telihold', timeHu: '16:36', utc: '14:36', name: 'Bakhold' },
      { date: '2026-08-12', type: 'ujhold', timeHu: '19:38', utc: '17:38', note: 'Teljes napfogyatkozás; Magyarországról részleges, Budapesten kb. 60%-os fedéssel, este 19:20 és 20:30 között. Napfogyatkozást csak megfelelő szemvédővel szabad nézni!' },
      { date: '2026-08-28', type: 'telihold', timeHu: '06:19', utc: '04:19', name: 'Tokhalhold', note: 'Részleges holdfogyatkozás; nálunk hajnalban, a Hold a fogyatkozás közben nyugszik le.' },
      { date: '2026-09-11', type: 'ujhold', timeHu: '05:28', utc: '03:28' },
      { date: '2026-09-26', type: 'telihold', timeHu: '18:50', utc: '16:50', name: 'Aratási hold' },
      { date: '2026-10-10', type: 'ujhold', timeHu: '17:51', utc: '15:51' },
      { date: '2026-10-26', type: 'telihold', timeHu: '05:13', utc: '04:13', name: 'Vadászhold' },
      { date: '2026-11-09', type: 'ujhold', timeHu: '08:03', utc: '07:03' },
      { date: '2026-11-24', type: 'telihold', timeHu: '15:54', utc: '14:54', name: 'Hódhold', note: 'Szuperhold — a telihold a pálya földközelpontjának közelében.' },
      { date: '2026-12-09', type: 'ujhold', timeHu: '01:53', utc: '00:53' },
      { date: '2026-12-24', type: 'telihold', timeHu: '02:29', utc: '01:29', name: 'Hideg hold', note: 'Szuperhold — az év második egymást követő szuperholdja.' }
    ],

    disclaimer: 'A holdfázisok és a holdjegyek csillagászati adatai pontosan számíthatók, a hozzájuk fűzött jelentések, kertészeti és hajvágási szabályok azonban néphagyományt tükröznek, nem tudományos megállapításokat.'
  }
};
