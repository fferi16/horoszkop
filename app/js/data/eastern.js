/* Kelet-ázsiai asztrológia — adatmodul
 * Forrás: docs/02-kelet-azsiai-asztrologia.md
 * Sima script (nem ES modul), UTF-8.
 */
window.HDATA = window.HDATA || {};
window.HDATA.eastern = {

  /* ------------------------------------------------------------------ */
  /* 1) A 12 kínai állatjegy                                             */
  /* ------------------------------------------------------------------ */
  animals: [
    {
      key: 'patkany', name: 'Patkány', chinese: '鼠', order: 1,
      fixedElement: 'Víz', yinYang: 'Yang',
      hours: '23:00–00:59', month: 'december', direction: 'észak', season: 'tél',
      positive: ['intelligens', 'alkalmazkodó', 'gyors észjárású', 'takarékos', 'sármos', 'találékony'],
      negative: ['kapzsi', 'gyanakvó', 'önző', 'nyugtalan'],
      description: 'A Patkány a kínai állatöv nyitó jegye: az a típus, aki elsőként veszi észre a résnyire nyíló ajtót, és át is fér rajta. Éles eszű, gyors reagálású, ösztönösen megérzi, hol van lehetőség és hol fenyeget veszély. Erős a családi kötődése, és a biztonságot anyagi tartalékokkal is szereti alátámasztani. Árnyoldala, hogy a folytonos éberség könnyen csap át gyanakvásba és apró számítgatásokba.',
      best: ['Sárkány', 'Majom', 'Bivaly'], worst: ['Ló'], trine: 1
    },
    {
      key: 'bivaly', name: 'Bivaly', chinese: '牛', order: 2,
      fixedElement: 'Föld', yinYang: 'Yin',
      hours: '01:00–02:59', month: 'január', direction: 'északkelet', season: 'tél',
      positive: ['kitartó', 'megbízható', 'szorgalmas', 'türelmes', 'módszeres', 'becsületes'],
      negative: ['makacs', 'konzervatív', 'nehezen bocsát meg'],
      description: 'A Bivaly (más néven Ökör) a csendes, megingathatatlan munka jegye. Nem a látványos rajtokban erős, hanem abban, hogy évekig ugyanabba az irányba húz, amíg a cél meg nem valósul. Adott szava aranyat ér, és a körülötte élők ösztönösen rábízzák magukat. Cserébe nehezen változtat álláspontot, és a sérelmeket sokáig őrizgeti.',
      best: ['Kígyó', 'Kakas', 'Patkány'], worst: ['Kecske'], trine: 2
    },
    {
      key: 'tigris', name: 'Tigris', chinese: '虎', order: 3,
      fixedElement: 'Fa', yinYang: 'Yang',
      hours: '03:00–04:59', month: 'február', direction: 'északkelet', season: 'tavasz',
      positive: ['bátor', 'magabiztos', 'karizmatikus', 'versengő', 'igazságérzettel teli'],
      negative: ['vakmerő', 'indulatos', 'kiszámíthatatlan'],
      description: 'A Tigris a bátorság és a lendület jegye: ott lép be a képbe, ahol mindenki más hátrál. Természetes vezető, akit erős igazságérzet hajt, és nehezen tűri a hatalommal való visszaélést. Jelenléte betölti a teret, a lelkesedése magával ragadó. Ugyanez a hév teszi néha meggondolatlanná, hirtelen haragúvá és nehezen kiszámíthatóvá.',
      best: ['Ló', 'Kutya', 'Disznó'], worst: ['Majom'], trine: 3
    },
    {
      key: 'nyul', name: 'Nyúl', chinese: '兔', order: 4,
      fixedElement: 'Fa', yinYang: 'Yin',
      hours: '05:00–06:59', month: 'március', direction: 'kelet', season: 'tavasz',
      positive: ['szelíd', 'diplomatikus', 'elegáns', 'együttérző', 'óvatos', 'jó ízlésű'],
      negative: ['konfliktuskerülő', 'határozatlan', 'sértődékeny'],
      description: 'A Nyúl a finomság, a jó modor és a békés otthon jegye. Ösztönösen érzi meg a hangulatokat, és inkább simítja a feszültséget, mintsem szítaná. Szereti a szépet: az esztétikus környezet nála nem luxus, hanem életszükséglet. Gyengéje, hogy a konfliktus elől kitér akkor is, amikor ki kellene állnia magáért, és a döntéseit hajlamos halogatni.',
      best: ['Kecske', 'Disznó', 'Kutya'], worst: ['Kakas'], trine: 4
    },
    {
      key: 'sarkany', name: 'Sárkány', chinese: '龙', order: 5,
      fixedElement: 'Föld', yinYang: 'Yang',
      hours: '07:00–08:59', month: 'április', direction: 'délkelet', season: 'tavasz',
      positive: ['energikus', 'ambiciózus', 'nagyvonalú', 'vezéregyéniség', 'szerencsés'],
      negative: ['arrogáns', 'türelmetlen', 'uralkodó'],
      description: 'A Sárkány a kínai állatöv egyetlen mesebeli lénye, és ez a jegy karakterén is meglátszik: nagyszabású tervekben gondolkodik, és hisz abban, hogy a szerencse mellé szegődik. Kisugárzása magával ragadó, adni pedig szívesen és bőkezűen ad. Nehezen viseli viszont, ha korlátozzák, és türelmetlenné válik azokkal, akik lassabban mozognak nála.',
      best: ['Patkány', 'Majom', 'Kakas'], worst: ['Kutya'], trine: 1
    },
    {
      key: 'kigyo', name: 'Kígyó', chinese: '蛇', order: 6,
      fixedElement: 'Tűz', yinYang: 'Yin',
      hours: '09:00–10:59', month: 'május', direction: 'délkelet', season: 'nyár',
      positive: ['bölcs', 'intuitív', 'elegáns', 'titokzatos', 'elemző', 'jó pénzügyi érzékű'],
      negative: ['féltékeny', 'zárkózott', 'birtokló'],
      description: 'A Kígyó a mély gondolkodás és a csendes megfigyelés jegye. Keveset beszél, de amit mond, annak súlya van; a döntései mögött hosszú belső mérlegelés áll. Ösztönösen jó érzéke van a pénzhez és az emberek valódi szándékához. Ha megbántják, sokáig őrzi magában, és a féltékenység a legnehezebben kezelhető árnyoldala.',
      best: ['Bivaly', 'Kakas', 'Majom'], worst: ['Disznó'], trine: 2
    },
    {
      key: 'lo', name: 'Ló', chinese: '马', order: 7,
      fixedElement: 'Tűz', yinYang: 'Yang',
      hours: '11:00–12:59', month: 'június', direction: 'dél', season: 'nyár',
      positive: ['szabadságszerető', 'energikus', 'társasági', 'vidám', 'kalandvágyó'],
      negative: ['csapongó', 'türelmetlen', 'önfejű'],
      description: 'A Ló a mozgás, a szabadság és a jókedv jegye. Bárhol könnyen barátokat szerez, mert nyílt, lelkes és őszintén érdeklődik mások iránt. Nehezen viseli a szűk kereteket: a monoton munka és a birtokló kapcsolatok kifejezetten kikészítik. Hajlamos több dologba belekezdeni, mint amennyit végig tud vinni.',
      best: ['Tigris', 'Kutya', 'Kecske'], worst: ['Patkány'], trine: 3
    },
    {
      key: 'kecske', name: 'Kecske', chinese: '羊', order: 8,
      fixedElement: 'Föld', yinYang: 'Yin',
      hours: '13:00–14:59', month: 'július', direction: 'délnyugat', season: 'nyár',
      positive: ['művészi', 'gyengéd', 'empatikus', 'békés', 'kreatív'],
      negative: ['aggodalmaskodó', 'passzív', 'pesszimizmusra hajló'],
      description: 'A Kecske (Juh) a művészi érzék és a lágy szív jegye. Mások fájdalmát szinte a saját bőrén érzi, ezért természetes vigasztaló és gondoskodó. Alkotó munkában, esztétikai kérdésekben ösztönösen jó ítélőképességű. Ha nincs mellette biztonságot adó közeg, könnyen elbizonytalanodik, és a legrosszabb forgatókönyveket kezdi el forgatni magában.',
      best: ['Nyúl', 'Disznó', 'Ló'], worst: ['Bivaly'], trine: 4
    },
    {
      key: 'majom', name: 'Majom', chinese: '猴', order: 9,
      fixedElement: 'Fém', yinYang: 'Yang',
      hours: '15:00–16:59', month: 'augusztus', direction: 'délnyugat', season: 'ősz',
      positive: ['zseniális problémamegoldó', 'humoros', 'sokoldalú', 'kíváncsi'],
      negative: ['ravasz', 'felszínes', 'manipulatív'],
      description: 'A Majom az állatöv legötletesebb jegye: minden zárhoz talál kulcsot, és ha nem talál, kitalál egyet. Gyorsan tanul, sok mindenhez ért, és a humorával a legfeszültebb helyzetet is oldani tudja. Unalmas feladat mellett viszont nem marad meg sokáig. Ha nem vigyáz, a leleményessége észrevétlenül csúszik át mások ügyes kihasználásába.',
      best: ['Patkány', 'Sárkány', 'Kígyó'], worst: ['Tigris'], trine: 1
    },
    {
      key: 'kakas', name: 'Kakas', chinese: '鸡', order: 10,
      fixedElement: 'Fém', yinYang: 'Yin',
      hours: '17:00–18:59', month: 'szeptember', direction: 'nyugat', season: 'ősz',
      positive: ['precíz', 'szorgalmas', 'őszinte', 'magabiztos', 'jó megfigyelő'],
      negative: ['kritikus', 'hiú', 'kérkedő'],
      description: 'A Kakas a rend, a pontosság és a nyílt beszéd jegye. Kimondja, amit lát, akkor is, ha kényelmetlen — ezért egyszerre tartják megbízhatónak és nyersnek. Szereti, ha a munkája és a megjelenése egyaránt kifogástalan. A magas mérce viszont másokkal szemben is működik benne, és a folyamatos kritika elidegenítheti a környezetét.',
      best: ['Bivaly', 'Kígyó', 'Sárkány'], worst: ['Nyúl'], trine: 2
    },
    {
      key: 'kutya', name: 'Kutya', chinese: '狗', order: 11,
      fixedElement: 'Föld', yinYang: 'Yang',
      hours: '19:00–20:59', month: 'október', direction: 'északnyugat', season: 'ősz',
      positive: ['hűséges', 'igazságos', 'őszinte', 'védelmező', 'megbízható'],
      negative: ['szorongó', 'cinikus', 'ítélkező'],
      description: 'A Kutya az állatöv lelkiismerete: erős erkölcsi iránytűvel él, és képtelen szó nélkül elmenni az igazságtalanság mellett. Akit a szívébe zár, azért kiáll a végsőkig. A hűség nála nem szólam, hanem napi gyakorlat. Ugyanakkor sokat aggódik, nehezen enged el régi csalódásokat, és a bizalmatlansága idővel cinizmussá keményedhet.',
      best: ['Tigris', 'Ló', 'Nyúl'], worst: ['Sárkány'], trine: 3
    },
    {
      key: 'diszno', name: 'Disznó', chinese: '猪', order: 12,
      fixedElement: 'Víz', yinYang: 'Yin',
      hours: '21:00–22:59', month: 'november', direction: 'északnyugat', season: 'tél',
      positive: ['nagylelkű', 'jószívű', 'élvezetkedvelő', 'őszinte', 'toleráns'],
      negative: ['naiv', 'hiszékeny', 'önmérséklet hiánya'],
      description: 'A Disznó az állatöv záró jegye: a bőség, a jólét és a jó társaság szerelmese. Nem játszik szerepeket, nyíltan és melegen fordul az emberekhez, és szívesen oszt meg mindent, amije van. Az élet örömeit — étel, kényelem, közösség — őszintén élvezi. Épp ez a nyitottság teszi sebezhetővé: könnyen visszaélnek a jóhiszeműségével, és nehezen mond nemet önmagának.',
      best: ['Nyúl', 'Kecske', 'Tigris'], worst: ['Kígyó'], trine: 4
    }
  ],

  /* ------------------------------------------------------------------ */
  /* 2) Az öt elem (Wu Xing)                                             */
  /* ------------------------------------------------------------------ */
  elements: [
    {
      key: 'fa', name: 'Fa', chinese: '木', yinYang: '—',
      colors: ['zöld'], season: 'tavasz', direction: 'kelet',
      description: 'A Fa a kibontakozás eleme: a rügyfakadás energiája, amely felfelé és kifelé tör. Bolygója a Jupiter, iránya a kelet, évszaka a tavasz. Aki Fa-évben született, terveket sző, épít és távlatokban gondolkodik.',
      traits: ['növekedés', 'kreativitás', 'idealizmus', 'rugalmasság']
    },
    {
      key: 'tuz', name: 'Tűz', chinese: '火', yinYang: '—',
      colors: ['vörös'], season: 'nyár', direction: 'dél',
      description: 'A Tűz a láthatóvá válás eleme: fényt, hőt és lendületet ad mindannak, amihez hozzáér. Bolygója a Mars, iránya a dél, évszaka a nyár. Felfokozza az állatjegy alaptermészetét — szenvedélyesebbé, kifejezőbbé, de hevesebbé is teszi.',
      traits: ['szenvedély', 'dinamizmus', 'kifejezőerő', 'lelkesedés']
    },
    {
      key: 'fold', name: 'Föld', chinese: '土', yinYang: '—',
      colors: ['sárga', 'barna'], season: 'nyárutó', direction: 'közép',
      description: 'A Föld a közép és a megtartás eleme: az a talaj, amelyen a többi energia megáll. Bolygója a Szaturnusz, iránya a középpont, évszaka a nyárutó. Higgadtságot, gyakorlatiasságot és kitartást ad az állatjegy karakteréhez.',
      traits: ['stabilitás', 'gyakorlatiasság', 'megbízhatóság', 'türelem']
    },
    {
      key: 'fem', name: 'Fém', chinese: '金', yinYang: '—',
      colors: ['fehér', 'ezüst'], season: 'ősz', direction: 'nyugat',
      description: 'A Fém az összegzés és a forma eleme: az őszi betakarítás, a felesleg lemetszése, a penge élessége. Bolygója a Vénusz, iránya a nyugat, évszaka az ősz. Fegyelmet, határozottságot és világos elvárásokat visz az állatjegy természetébe.',
      traits: ['fegyelem', 'határozottság', 'precizitás', 'kitartás']
    },
    {
      key: 'viz', name: 'Víz', chinese: '水', yinYang: '—',
      colors: ['fekete', 'kék'], season: 'tél', direction: 'észak',
      description: 'A Víz a mélység és a mozgékonyság eleme: elkerüli az akadályt, nem szemből ütközik neki. Bolygója a Merkúr, iránya az észak, évszaka a tél. Bölcsességet, intuíciót és diplomatikus alkalmazkodóképességet ad az állatjegynek.',
      traits: ['bölcsesség', 'rugalmasság', 'intuíció', 'kommunikáció']
    }
  ],

  /* ------------------------------------------------------------------ */
  /* 3) Elem + állat kombinációk (5 × 12 = 60)                           */
  /* ------------------------------------------------------------------ */
  animalElement: {
    patkany: {
      fa: 'A Fa-Patkány a legkonstruktívabb változat: ötleteit hosszú távú tervekbe és közösségi vállalkozásokba fordítja.',
      tuz: 'A Tűz-Patkány lendületesebb és feltűnőbb a szokásosnál, gyorsan dönt, és szereti, ha látják a sikerét.',
      fold: 'A Föld-Patkány a legóvatosabb: lassabban lép, de amit felépít, azt biztos anyagi alapokra teszi.',
      fem: 'A Fém-Patkány éles eszű és céltudatos, erős akarattal, de a kelleténél merevebb elvárásokkal.',
      viz: 'A Víz-Patkány a legintuitívabb és legbeszédesebb, kiváló emberismerő, ám könnyen elkalandozik.'
    },
    bivaly: {
      fa: 'A Fa-Bivaly rugalmasabb a többinél: kész új módszereket kipróbálni anélkül, hogy feladná az elveit.',
      tuz: 'A Tűz-Bivaly szokatlanul harcias és becsvágyó, keményen hajt, és nehezen tűri az ellentmondást.',
      fold: 'A Föld-Bivaly a megbízhatóság mintapéldája: lassan halad, de soha nem hagy félbe semmit.',
      fem: 'A Fém-Bivaly a legkeményebb változat, vasakarattal és határozott elvekkel, kevés kompromisszummal.',
      viz: 'A Víz-Bivaly emberibb és megközelíthetőbb: figyel másokra, és jobban kezeli a változást.'
    },
    tigris: {
      fa: 'A Fa-Tigris közösségben gondolkodik: nagylelkű, együttműködő, és szívesen segít másokat előre.',
      tuz: 'A Tűz-Tigris a legrobbanékonyabb változat, magával ragadó kisugárzással és nagy kockázatvállalással.',
      fold: 'A Föld-Tigris higgadtabb és reálisabb: megfontoltan vállal harcot, és végig is viszi.',
      fem: 'A Fém-Tigris versengő és kérlelhetetlen, éles nyelvű, ám kiválóan teljesít nyomás alatt.',
      viz: 'A Víz-Tigris a legdiplomatikusabb: érvekkel győz meg, nem erővel, és jól olvassa a helyzeteket.'
    },
    nyul: {
      fa: 'A Fa-Nyúl nagyvonalú és segítőkész, de nehezen mond nemet, ezért könnyen kihasználják.',
      tuz: 'A Tűz-Nyúl szenvedélyesebb és nyíltabb a szokásosnál, indulatai időnként meglepik a környezetét.',
      fold: 'A Föld-Nyúl józan és realista, biztonságra törekszik, és tudatosan építi az otthonát.',
      fem: 'A Fém-Nyúl finom megjelenés mögött erős akaratot rejt, és határozottan képviseli az érdekeit.',
      viz: 'A Víz-Nyúl a legérzékenyebb változat, mély empátiával, de erős hangulati hullámzással.'
    },
    sarkany: {
      fa: 'A Fa-Sárkány együttműködő és ötletgazdag, mások véleményét is beépíti a nagy terveibe.',
      tuz: 'A Tűz-Sárkány született vezető, hatalmas energiával és a szokásosnál is nagyobb becsvággyal.',
      fold: 'A Föld-Sárkány higgadt szervező: az álmait aprólékos, kivitelezhető lépésekre bontja.',
      fem: 'A Fém-Sárkány kérlelhetetlenül elvhű, hajthatatlan, és nyíltan szembeszáll az igazságtalansággal.',
      viz: 'A Víz-Sárkány a legtürelmesebb: jól időzít, jó a kompromisszumkészsége és a helyzetfelismerése.'
    },
    kigyo: {
      fa: 'A Fa-Kígyó nyitottabb és barátságosabb, szívesen tanul, és jó ízléssel formálja a környezetét.',
      tuz: 'A Tűz-Kígyó karizmatikus és becsvágyó, erős akarattal, de hajlamos a féltékenységre.',
      fold: 'A Föld-Kígyó kiegyensúlyozott és megbízható, lassan dönt, viszont ritkán téved.',
      fem: 'A Fém-Kígyó céltudatos és kifinomult, kiváló pénzügyi érzékkel, ám erősen zárkózott.',
      viz: 'A Víz-Kígyó a legintuitívabb változat, mély belső élettel és rendkívüli emberismerettel.'
    },
    lo: {
      fa: 'A Fa-Ló csapatjátékos: fegyelmezettebb a többinél, és jól viseli a közös szabályokat.',
      tuz: 'A Tűz-Ló a legszenvedélyesebb és legszabadabb változat, fékezhetetlen lendülettel és nagy kockázatvállalással.',
      fold: 'A Föld-Ló megbízhatóbb és állhatatosabb, hosszú távon is kitart a vállalásai mellett.',
      fem: 'A Fém-Ló makacs és határozott, saját feje után megy, de rendkívül teherbíró.',
      viz: 'A Víz-Ló alkalmazkodó és diplomatikus, könnyen vált irányt, ha a helyzet úgy kívánja.'
    },
    kecske: {
      fa: 'A Fa-Kecske adakozó és melegszívű, gyakran többet vállal másokért, mint amennyi belefér.',
      tuz: 'A Tűz-Kecske szokatlanul határozott és kifejező, bátran áll ki az elképzelései mellett.',
      fold: 'A Föld-Kecske gyakorlatiasabb: a művészi hajlamát is megélhetést adó formába önti.',
      fem: 'A Fém-Kecske erős védőburkot épít maga köré, elszántan óvja azt, ami fontos neki.',
      viz: 'A Víz-Kecske a legérzékenyebb és legálmodozóbb, könnyen sodródik mások hangulatával.'
    },
    majom: {
      fa: 'A Fa-Majom együttműködő és tanulékony, ötleteit közös projektek szolgálatába állítja.',
      tuz: 'A Tűz-Majom versengő és kalandvágyó, imádja a kihívást, és gyorsan unja a rutint.',
      fold: 'A Föld-Majom megbízhatóbb és földhözragadtabb: az ötleteiből tényleg lesz valami.',
      fem: 'A Fém-Majom céltudatos és rámenős, kiváló üzleti érzékkel, ám hajlamos a manipulációra.',
      viz: 'A Víz-Majom a legérzékenyebb változat, remek kommunikátor, de sértődékenyebb a többinél.'
    },
    kakas: {
      fa: 'A Fa-Kakas kevésbé kritikus és nyitottabb, jól működik csapatban, szívesen fejlődik.',
      tuz: 'A Tűz-Kakas magabiztos és látványos, született előadó, aki nem fél a reflektorfénytől.',
      fold: 'A Föld-Kakas szorgalmas és aprólékos, a részletekben soha nem hagy hézagot.',
      fem: 'A Fém-Kakas a legelvhűbb és legkategorikusabb, nyílt beszédű, néha kíméletlenül őszinte.',
      viz: 'A Víz-Kakas tapintatosabb és rugalmasabb, jól fogalmaz, és figyel a másik oldalra is.'
    },
    kutya: {
      fa: 'A Fa-Kutya melegszívű és közösségi, széles baráti kört épít, és szívesen véd meg másokat.',
      tuz: 'A Tűz-Kutya bátor és lelkes, ügyekért harcol, és magával ragadja a környezetét.',
      fold: 'A Föld-Kutya nyugodt és állhatatos, a családja és az otthona a legfőbb támasza.',
      fem: 'A Fém-Kutya elvhű és szigorú, erős igazságérzettel, de kevés türelemmel a kifogások iránt.',
      viz: 'A Víz-Kutya a legmegértőbb változat, jó hallgató, ám hajlamos túl sokat aggódni.'
    },
    diszno: {
      fa: 'A Fa-Disznó nagylelkű és társaságkedvelő, könnyen szerez barátokat és támogatókat.',
      tuz: 'A Tűz-Disznó szenvedélyes és bőkezű, teljes lendülettel él, néha a mértéket is elvétve.',
      fold: 'A Föld-Disznó békés és otthonszerető, biztos anyagi hátteret épít maga és a családja köré.',
      fem: 'A Fém-Disznó határozottabb és céltudatosabb, egészséges önérzettel áll ki magáért.',
      viz: 'A Víz-Disznó a legérzékenyebb és legbékülékenyebb, ezért különösen könnyen visszaélnek a jóságával.'
    }
  },

  /* ------------------------------------------------------------------ */
  /* 4) A kínai újév dátumai 1924–2044 — [hónap, nap]                    */
  /*    A pontos állatjegy-számítás alapja (jan. 1. és ez a nap között   */
  /*    születettek még az ELŐZŐ év jegyét kapják).                      */
  /* ------------------------------------------------------------------ */
  newYear: {
    1924: [2, 5],  1925: [1, 24], 1926: [2, 13], 1927: [2, 2],  1928: [1, 23],
    1929: [2, 10], 1930: [1, 30], 1931: [2, 17], 1932: [2, 6],  1933: [1, 26],
    1934: [2, 14], 1935: [2, 4],  1936: [1, 24], 1937: [2, 11], 1938: [1, 31],
    1939: [2, 19], 1940: [2, 8],  1941: [1, 27], 1942: [2, 15], 1943: [2, 5],
    1944: [1, 25], 1945: [2, 13], 1946: [2, 2],  1947: [1, 22], 1948: [2, 10],
    1949: [1, 29], 1950: [2, 17], 1951: [2, 6],  1952: [1, 27], 1953: [2, 14],
    1954: [2, 3],  1955: [1, 24], 1956: [2, 12], 1957: [1, 31], 1958: [2, 18],
    1959: [2, 8],  1960: [1, 28], 1961: [2, 15], 1962: [2, 5],  1963: [1, 25],
    1964: [2, 13], 1965: [2, 2],  1966: [1, 21], 1967: [2, 9],  1968: [1, 30],
    1969: [2, 17], 1970: [2, 6],  1971: [1, 27], 1972: [2, 15], 1973: [2, 3],
    1974: [1, 23], 1975: [2, 11], 1976: [1, 31], 1977: [2, 18], 1978: [2, 7],
    1979: [1, 28], 1980: [2, 16], 1981: [2, 5],  1982: [1, 25], 1983: [2, 13],
    1984: [2, 2],  1985: [2, 20], 1986: [2, 9],  1987: [1, 29], 1988: [2, 17],
    1989: [2, 6],  1990: [1, 27], 1991: [2, 15], 1992: [2, 4],  1993: [1, 23],
    1994: [2, 10], 1995: [1, 31], 1996: [2, 19], 1997: [2, 7],  1998: [1, 28],
    1999: [2, 16], 2000: [2, 5],  2001: [1, 24], 2002: [2, 12], 2003: [2, 1],
    2004: [1, 22], 2005: [2, 9],  2006: [1, 29], 2007: [2, 18], 2008: [2, 7],
    2009: [1, 26], 2010: [2, 14], 2011: [2, 3],  2012: [1, 23], 2013: [2, 10],
    2014: [1, 31], 2015: [2, 19], 2016: [2, 8],  2017: [1, 28], 2018: [2, 16],
    2019: [2, 5],  2020: [1, 25], 2021: [2, 12], 2022: [2, 1],  2023: [1, 22],
    2024: [2, 10], 2025: [1, 29], 2026: [2, 17], 2027: [2, 6],  2028: [1, 26],
    2029: [2, 13], 2030: [2, 3],  2031: [1, 23], 2032: [2, 11], 2033: [1, 31],
    2034: [2, 19], 2035: [2, 8],  2036: [1, 28], 2037: [2, 15], 2038: [2, 4],
    2039: [1, 24], 2040: [2, 12], 2041: [2, 1],  2042: [1, 22], 2043: [2, 10],
    2044: [1, 30]
  },

  /* ------------------------------------------------------------------ */
  /* 5) A 12 kettős óra — a „titkos állat"                               */
  /* ------------------------------------------------------------------ */
  doubleHours: [
    { animal: 'Patkány', from: '23:00', to: '00:59', startHour: 23, text: 'Az éjfél órájában születettek a legbelső énjükben éberek és leleményesek: sötétben is tájékozódnak, és mindig van tartalék tervük.' },
    { animal: 'Bivaly', from: '01:00', to: '02:59', startHour: 1, text: 'A kakasszó előtti óra szülöttei belül rendíthetetlenek: csendben, kitartóan viszik végig, amit elkezdtek.' },
    { animal: 'Tigris', from: '03:00', to: '04:59', startHour: 3, text: 'A hajnalhasadás órájában születettek belső énje bátor és lázadó, még ha kifelé higgadtnak is mutatkoznak.' },
    { animal: 'Nyúl', from: '05:00', to: '06:59', startHour: 5, text: 'A napkelte órája finom, békés magot rejt: ezek az emberek bensőleg a harmóniát és a szépséget keresik.' },
    { animal: 'Sárkány', from: '07:00', to: '08:59', startHour: 7, text: 'A reggeli óra szülöttei titokban nagyszabású álmokat dédelgetnek, és hisznek a saját szerencséjükben.' },
    { animal: 'Kígyó', from: '09:00', to: '10:59', startHour: 9, text: 'A délelőtt órájában születettek belül elemzők és titoktartók: sokkal többet látnak, mint amennyit elárulnak.' },
    { animal: 'Ló', from: '11:00', to: '12:59', startHour: 11, text: 'A dél órája szabad lelket ad: ezek az emberek bensőleg mozgásra, változásra és nyílt terekre vágynak.' },
    { animal: 'Kecske', from: '13:00', to: '14:59', startHour: 13, text: 'A kora délután órájában születettek legbelül gyengédek és művészi hajlamúak, akkor is, ha kemény álarcot viselnek.' },
    { animal: 'Majom', from: '15:00', to: '16:59', startHour: 15, text: 'A délután órája játékos és fürge elmét rejt: a szülöttei bensőleg mindig megoldást keresnek, nem panaszt.' },
    { animal: 'Kakas', from: '17:00', to: '18:59', startHour: 17, text: 'A napnyugta órájában születettek belső mércéje szigorú: önmagukkal szemben a legkritikusabbak.' },
    { animal: 'Kutya', from: '19:00', to: '20:59', startHour: 19, text: 'A szürkület órája hűséges szívet ad: ezek az emberek legbelül védelmezők és megvesztegethetetlenek.' },
    { animal: 'Disznó', from: '21:00', to: '22:59', startHour: 21, text: 'Az éjszaka kezdetének órájában születettek bensőleg melegszívűek és bőkezűek, nehezen mondanak nemet.' }
  ],

  /* ------------------------------------------------------------------ */
  /* 6) A belső állat — születési szoláris hónap szerint                 */
  /* ------------------------------------------------------------------ */
  innerAnimal: [
    { animal: 'Tigris',  from: [2, 4],  to: [3, 5],  text: 'A Lìchūn hónapjában születettek belső hajtóereje a bátorság: motivációjuk a szabadság és az igazság kivívása.' },
    { animal: 'Nyúl',    from: [3, 6],  to: [4, 4],  text: 'A Jīngzhé hónapjának szülötteit belülről a béke és a szép környezet iránti vágy mozgatja.' },
    { animal: 'Sárkány', from: [4, 5],  to: [5, 5],  text: 'A Qīngmíng hónapjában születettek magánéletét nagy tervek és erős becsvágy hatja át.' },
    { animal: 'Kígyó',   from: [5, 6],  to: [6, 5],  text: 'A Lìxià hónapjának szülöttei befelé elemzők: mindent végiggondolnak, mielőtt megnyílnának valakinek.' },
    { animal: 'Ló',      from: [6, 6],  to: [7, 6],  text: 'A Mángzhòng hónapjában születettek belső motorja a mozgás és a változatosság igénye.' },
    { animal: 'Kecske',  from: [7, 7],  to: [8, 7],  text: 'A Xiǎoshǔ hónapjának szülötteit belülről az együttérzés és az alkotás vágya vezeti.' },
    { animal: 'Majom',   from: [8, 8],  to: [9, 7],  text: 'A Lìqiū hónapjában születettek magánéletét játékosság és folytonos kíváncsiság jellemzi.' },
    { animal: 'Kakas',   from: [9, 8],  to: [10, 7], text: 'A Báilù hónapjának szülöttei belül rendet és pontosságot követelnek maguktól és a környezetüktől.' },
    { animal: 'Kutya',   from: [10, 8], to: [11, 6], text: 'A Hánlù hónapjában születetteket a hűség és a védelmezés belső parancsa mozgatja.' },
    { animal: 'Disznó',  from: [11, 7], to: [12, 6], text: 'A Lìdōng hónapjának szülöttei bensőleg nagylelkűek, és a meghitt közösségben érzik jól magukat.' },
    { animal: 'Patkány', from: [12, 7], to: [1, 5],  text: 'A Dàxuě hónapjában születettek belső motivációja a biztonság megteremtése és a tartalékok felhalmozása.' },
    { animal: 'Bivaly',  from: [1, 6],  to: [2, 3],  text: 'A Xiǎohán hónapjának szülöttei belül állhatatosak: a kitartó, csendes munkában találják meg önmagukat.' }
  ],

  /* ------------------------------------------------------------------ */
  /* 7) Ba Zi alapok                                                     */
  /* ------------------------------------------------------------------ */
  heavenlyStems: [
    { num: 1,  pinyin: 'Jiǎ',  chinese: '甲', element: 'Fa',   yinYang: 'Yang', hu: 'Fa (yang)' },
    { num: 2,  pinyin: 'Yǐ',   chinese: '乙', element: 'Fa',   yinYang: 'Yin',  hu: 'Fa (yin)' },
    { num: 3,  pinyin: 'Bǐng', chinese: '丙', element: 'Tűz',  yinYang: 'Yang', hu: 'Tűz (yang)' },
    { num: 4,  pinyin: 'Dīng', chinese: '丁', element: 'Tűz',  yinYang: 'Yin',  hu: 'Tűz (yin)' },
    { num: 5,  pinyin: 'Wù',   chinese: '戊', element: 'Föld', yinYang: 'Yang', hu: 'Föld (yang)' },
    { num: 6,  pinyin: 'Jǐ',   chinese: '己', element: 'Föld', yinYang: 'Yin',  hu: 'Föld (yin)' },
    { num: 7,  pinyin: 'Gēng', chinese: '庚', element: 'Fém',  yinYang: 'Yang', hu: 'Fém (yang)' },
    { num: 8,  pinyin: 'Xīn',  chinese: '辛', element: 'Fém',  yinYang: 'Yin',  hu: 'Fém (yin)' },
    { num: 9,  pinyin: 'Rén',  chinese: '壬', element: 'Víz',  yinYang: 'Yang', hu: 'Víz (yang)' },
    { num: 10, pinyin: 'Guǐ',  chinese: '癸', element: 'Víz',  yinYang: 'Yin',  hu: 'Víz (yin)' }
  ],

  earthlyBranches: [
    { num: 1,  pinyin: 'Zǐ',   chinese: '子', animal: 'Patkány', element: 'Víz',  yinYang: 'Yang' },
    { num: 2,  pinyin: 'Chǒu', chinese: '丑', animal: 'Bivaly',  element: 'Föld', yinYang: 'Yin' },
    { num: 3,  pinyin: 'Yín',  chinese: '寅', animal: 'Tigris',  element: 'Fa',   yinYang: 'Yang' },
    { num: 4,  pinyin: 'Mǎo',  chinese: '卯', animal: 'Nyúl',    element: 'Fa',   yinYang: 'Yin' },
    { num: 5,  pinyin: 'Chén', chinese: '辰', animal: 'Sárkány', element: 'Föld', yinYang: 'Yang' },
    { num: 6,  pinyin: 'Sì',   chinese: '巳', animal: 'Kígyó',   element: 'Tűz',  yinYang: 'Yin' },
    { num: 7,  pinyin: 'Wǔ',   chinese: '午', animal: 'Ló',      element: 'Tűz',  yinYang: 'Yang' },
    { num: 8,  pinyin: 'Wèi',  chinese: '未', animal: 'Kecske',  element: 'Föld', yinYang: 'Yin' },
    { num: 9,  pinyin: 'Shēn', chinese: '申', animal: 'Majom',   element: 'Fém',  yinYang: 'Yang' },
    { num: 10, pinyin: 'Yǒu',  chinese: '酉', animal: 'Kakas',   element: 'Fém',  yinYang: 'Yin' },
    { num: 11, pinyin: 'Xū',   chinese: '戌', animal: 'Kutya',   element: 'Föld', yinYang: 'Yang' },
    { num: 12, pinyin: 'Hài',  chinese: '亥', animal: 'Disznó',  element: 'Víz',  yinYang: 'Yin' }
  ],

  baziIntro: 'A Ba Zi (八字, „nyolc írásjegy"), közismertebb nevén a Négy Pillér, a kínai sorselemzés legrészletesebb formája. A születés évéhez, hónapjához, napjához és órájához egy-egy pillér tartozik, és minden pillér egy Égi Törzsből és egy Földi Ágból áll — így jön ki a négy pillér nyolc írásjegye. Az év pillére az örökséget és a gyermekkort, a hónapé a szülőket és a karriert, a napé magát a személyt és a párját, az óráé a gyermekeket és az időskort mutatja. Az elemzés célja nem a jövő megjóslása, hanem az öt elem egyensúlyának feltárása: mi van túlsúlyban a képletben, mi hiányzik, és melyik a „hasznos elem", amely helyre billenti a mérleget.',

  dayMasterText: {
    fa: 'A Fa nap-ura egyenes tartású, elvhű ember, aki távlatokban gondolkodik és folyamatosan növekedni akar. Nehezen hajlik meg mások akarata előtt, de ha értelmes ügyet lát, kitartóan és nagylelkűen dolgozik érte.',
    tuz: 'A Tűz nap-ura meleg, kifejező és lelkesítő személyiség, akit azonnal megérez a szoba. Gyorsan lángra lobban és gyorsan ki is ég, ezért a legfőbb feladata az energiája beosztása.',
    fold: 'A Föld nap-ura az a fajta ember, akire tényleg lehet számítani: türelmes, gyakorlatias, és megbízhatóan tartja, amit vállal. Ha túl sokat visel el szó nélkül, könnyen ő lesz az, aki minden terhet magára vesz.',
    fem: 'A Fém nap-ura tiszta elvek szerint él, világosan fogalmaz, és nem szereti a félmegoldásokat. Ereje a fegyelem és a döntésképesség, gyengéje a merevség és a nehéz megbocsátás.',
    viz: 'A Víz nap-ura okos, alkalmazkodó és rendkívül jó emberismerő: nem szemből ütközik az akadálynak, hanem megkerüli. Kockázata, hogy a folytonos alkalmazkodásban elveszíti a saját irányát.'
  },

  /* ------------------------------------------------------------------ */
  /* 8) Kompatibilitás                                                   */
  /* ------------------------------------------------------------------ */
  trines: [
    { num: 1, animals: ['Patkány', 'Sárkány', 'Majom'], name: 'Első trigon — a Cselekvők', text: 'Intenzív, kezdeményező és hatalomorientált hármas: mindhárman gyorsan mérik fel a helyzetet, és nem várnak engedélyre a lépéshez. Együtt rendkívül hatékonyak, mert ugyanaz a tempó és ugyanaz a becsvágy hajtja őket.' },
    { num: 2, animals: ['Bivaly', 'Kígyó', 'Kakas'], name: 'Második trigon — a Gondolkodók', text: 'Céltudatos, kitartó és módszeres hármas: előbb terveznek, aztán cselekszenek, és amit elkezdenek, azt be is fejezik. Egymás között ritka a félreértés, mert mindhárman a tényekben és a kimondott szóban hisznek.' },
    { num: 3, animals: ['Tigris', 'Ló', 'Kutya'], name: 'Harmadik trigon — a Függetlenek', text: 'Idealista, szabadságszerető és impulzív hármas: elvekért harcolnak, és nem tűrik a korlátozást. Kapcsolataikban a nyíltság és a lojalitás a legfőbb érték, viszont könnyen tüzelik egymást elhamarkodott döntésekre.' },
    { num: 4, animals: ['Nyúl', 'Kecske', 'Disznó'], name: 'Negyedik trigon — a Békeszeretők', text: 'Művészi, együttérző és harmóniakereső hármas: számukra a meghitt otthon és a jó hangulat többet ér a versengésnél. Együtt nyugodt, meleg közeget teremtenek, de közösen hajlamosak a nehéz döntések halogatására.' }
  ],

  conflicts: [
    { pair: ['Patkány', 'Ló'], text: 'A Patkány takarékos, tervező biztonságigénye és a Ló szabad, csapongó életritmusa folyamatosan egymásnak feszül.' },
    { pair: ['Bivaly', 'Kecske'], text: 'A Bivaly rendíthetetlen fegyelme és a Kecske érzelmi, hangulatvezérelt működése kölcsönösen türelmetlenné teszi őket.' },
    { pair: ['Tigris', 'Majom'], text: 'A Tigris nyílt erőt és egyenességet vár, a Majom viszont kerülőutakon jut célba — ebből bizalmi válság lesz.' },
    { pair: ['Nyúl', 'Kakas'], text: 'A Nyúl a kímélő szót keresi, a Kakas a nyers igazságot mondja ki: a sértődések így szinte elkerülhetetlenek.' },
    { pair: ['Sárkány', 'Kutya'], text: 'A Sárkány nagyszabású önbizalma és a Kutya kritikus, elvhű józansága szüntelen hatalmi harcot szül.' },
    { pair: ['Kígyó', 'Disznó'], text: 'A Kígyó zárkózott, számító természete és a Disznó nyílt, hiszékeny jósága két külön világ, amely ritkán ér össze.' }
  ],

  secretFriends: [
    { pair: ['Patkány', 'Bivaly'], text: 'A Patkány ötleteit a Bivaly kitartása váltja valóra — talán a legpraktikusabb szövetség az állatövben.' },
    { pair: ['Tigris', 'Disznó'], text: 'A Tigris bátorságát a Disznó melegszívűsége szelídíti, a Disznó pedig védelmet és lendületet kap cserébe.' },
    { pair: ['Nyúl', 'Kutya'], text: 'A Nyúl finomsága és a Kutya hűsége mély, biztonságos köteléket alkot, amelyben egyikük sem kényszerül szerepjátékra.' },
    { pair: ['Sárkány', 'Kakas'], text: 'A Sárkány víziójához a Kakas precizitása adja a kivitelezést: együtt látványos eredményeket érnek el.' },
    { pair: ['Kígyó', 'Majom'], text: 'A Kígyó mélysége és a Majom találékonysága ritka szellemi párost alkot, amelyben soha nincs unalom.' },
    { pair: ['Ló', 'Kecske'], text: 'A Ló lendülete és a Kecske gyengédsége kiegyensúlyozza egymást: egyikük mozgat, a másikuk otthont teremt.' }
  ],

  /* ------------------------------------------------------------------ */
  /* 9) Koreai, japán, vietnami és tibeti réteg                          */
  /* ------------------------------------------------------------------ */
  korean: {
    intro: 'A Saju (사주, „négy pillér"), teljes nevén Saju Palja (사주팔자, „négy pillér, nyolc írásjegy") a kínai Ba Zi koreai megfelelője, amely a 4–7. század körül érkezett a félszigetre, és önálló mesterhagyománnyá fejlődött. A matematikai alapja azonos: ugyanaz a tíz Égi Törzs és tizenkét Földi Ág, ugyanazok a pillérek — helyes naptárkonverzióval ugyanabból a születési adatból ugyanaz a képlet jön ki. A különbség a hangsúlyban van: a koreai gyakorlat sokkal közvetlenebb életvezetési tanácsadás, amelynek gerincét a Tíz Isten (십신 sipsin) rendszere adja. Koreában a saju nem ezoterikus különlegesség, hanem tömegkultúra: saju-kávézók, mobilappok és randevú-beszédtéma.',
    ttiNames: {
      patkany: '쥐띠 (dzsüti)',
      bivaly: '소띠 (szoti)',
      tigris: '호랑이띠 (horangiti)',
      nyul: '토끼띠 (thokkiti)',
      sarkany: '용띠 (jongti)',
      kigyo: '뱀띠 (pemti)',
      lo: '말띠 (malti)',
      kecske: '양띠 (jangti)',
      majom: '원숭이띠 (vonszungiti)',
      kakas: '닭띠 (takti)',
      kutya: '개띠 (keti)',
      diszno: '돼지띠 (tvedzsiti)'
    },
    gunghap: 'A gunghap (궁합) a két fél saju-képletének összevetése, amelyet komoly kapcsolat vagy házasság előtt máig sokan elvégeztetnek egy mesterrel. Nem csak az állatjegyeket nézi, hanem a teljes elem-egyensúlyt: kinek mi hiányzik, és a másik pótolja-e — rossz gunghap miatt nem is egy eljegyzés hiúsult már meg.'
  },

  japanese: {
    intro: 'A japán eto (干支) a kínai állatövből származik, de évszázadok alatt sajátos arcot kapott. A tizenkettedik jegy Japánban nem a házi disznó, hanem az inoshishi (猪), a vaddisznó — a bátorság és az elszántság jelképe —, a nyolcadik pedig egyértelműen juh (hitsuji). Az év állata a nengajō, az újévi képeslapok fő motívuma, és önálló kulturális iparágat tart el. A szó eredetileg a tíz törzs és tizenkét ág hatvanas ciklusát jelenti, a köznyelvben azonban ma egyszerűen az évek állatjegyére használják.',
    note: 'Japán 1873-ban, a Meidzsi-reformmal tért át a Gergely-naptárra, ezért az állatöv-év ott január 1-jén vált, nem a holdújévkor. Aki januárban vagy február elején született, a japán és a kínai rendszerben eltérő jegyet kaphat — a Tűz-Ló évhez (1966, 2026) fűződő babona miatt 1966-ban a japán születésszám mintegy 25 százalékkal esett vissza.',
    bloodTypes: [
      { type: 'A', text: 'A japán vércsoport-személyiségtan szerint az A-s ember rendszerető, precíz és tapintatos, a „komoly" (majime) típus, akire mindig lehet számítani. Árnyoldala a túlfeszítettség: sokat aggódik, nehezen enged a szabályokból, és kerüli a nyílt konfliktust.', ratio: 'kb. 38%' },
      { type: 'O', text: 'Az O-s típus a „vezér": magabiztos, nagyvonalú, célratörő és optimista, akit ösztönösen követnek mások. Cserébe erősen önérzetes, versengő, és hajlamos átsiklani a részletek fölött.', ratio: 'kb. 31%' },
      { type: 'B', text: 'A B-s a „szabad szellem": kreatív, szenvedélyes, önálló és kíváncsi, aki nem szereti, ha keretek közé szorítják. Ugyanezért tartják szeszélyesnek és időnként felelőtlennek — Japánban ez a leggyakrabban sztereotipizált vércsoport.', ratio: 'kb. 22%' },
      { type: 'AB', text: 'Az AB-s a „különc zseni": racionális, hűvös fejű, sokoldalú és jól alkalmazkodó, aki egyszerre két nézőpontot is tud tartani. Épp ezért tartják kiszámíthatatlannak, távolságtartónak, sőt „kétarcúnak".', ratio: 'kb. 9%' }
    ]
  },

  vietnamese: {
    intro: 'A vietnami zodiákus (12 con giáp) a kínaiból ered, és az évhatárt a Tết, a vietnami holdújév adja, amely szinte mindig egybeesik a kínai újévvel — az eltérő időzóna miatt ritkán egy nap, kivételesen egy egész holdhónap eltérés is előfordult. Három jegy neve azonban más, ezért a lokalizációhoz elegendő a jegynevek cseréje: az évszámítás, az elemek és a kompatibilitási táblák változatlanok maradnak.',
    animalMap: {
      nyul: 'Macska',
      bivaly: 'Vízibivaly',
      kecske: 'Kecske'
    }
  },

  tibetan: {
    intro: 'A tibeti asztrológia (bod-kyi rtsis-rig, röviden Tsi) tudatosan két hagyomány szintézise: a kínai eredetű Jungtsi („fekete asztrológia") dolgozik a tizenkét állattal, az öt elemmel, a mewával és a parkhával, míg az indiai gyökerű Kartsi („fehér asztrológia") a bolygómozgásokkal és a holdházakkal. Az évek a Loszárral, a tibeti újévvel kezdődnek, amely a kínai újév közelébe esik, de a saját naptárszámítás miatt akár egy hónappal is eltérhet. A hatvanéves ciklus (rabjung) itt nem a Fa-Patkánnyal, hanem a Tűz-Nyúl évvel indul, és az első ciklust 1027-től számítják.',
    mewa: [
      { num: 1, color: 'Fehér', text: 'A gyógyítás és a spiritualitás száma: tiszta kezdet, erős belső fény és gyógyító képesség.' },
      { num: 2, color: 'Fekete', text: 'Az akadályok és a betegséghajlam száma: óvatosságra és tudatos egészségvédelemre int.' },
      { num: 3, color: 'Kék (türkiz)', text: 'A víz-energia és az érzelmek száma: mély érzésvilág, erős intuíció, hullámzó kedély.' },
      { num: 4, color: 'Zöld', text: 'A mozgás és a kommunikáció száma: utazás, tanulás és kapcsolatteremtés kíséri az életutat.' },
      { num: 5, color: 'Sárga', text: 'A középpont, a hatalom és a stabilitás száma: természetes tekintély és erős életközép.' },
      { num: 6, color: 'Fehér', text: 'A védelem száma: az istenségek támogatását és a nehéz helyzetekben megjelenő segítséget jelzi.' },
      { num: 7, color: 'Vörös', text: 'A szenvedély és a konfliktus száma: nagy hajtóerő, amely könnyen súrlódásba is fordul.' },
      { num: 8, color: 'Fehér', text: 'A jólét és a hosszú élet száma: az egyik legkedvezőbb mewa, bőséget és tartós életerőt ígér.' },
      { num: 9, color: 'Bordó/vörös', text: 'Az erő és a beteljesülés száma: a megkezdett dolgok beérését és a teljesítmény elismerését hozza.' }
    ]
  }
};
