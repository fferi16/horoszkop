/* exotic.js — egzotikus és kiegészítő horoszkóp-rendszerek adatmodulja
 * Sima script (nem ES modul), UTF-8. Betöltés: <script src="js/data/exotic.js"></script>
 * Forrás: docs/04-tovabbi-rendszerek.md, docs/07-kabbala-es-tovabbi-rendszerek.md,
 *         docs/11-egzotikus-naptarak-es-modern-trendek.md
 */
window.HDATA = window.HDATA || {};
window.HDATA.exotic = {

  /* ---------------------------------------------------------------
   * 1) Maja Tzolkin — 260 napos szakrális naptár
   * ------------------------------------------------------------- */
  maya: {
    intro: 'A Tzolkin a maja civilizáció 260 napos szakrális naptára, amelyben 20 napjegy és 13 szám (tone) kombinációja adja a nap egyedi minőségét, és a születési nap jegye a hagyomány szerint a személyiség és a sors hordozója. A számításhoz csak a dátum kell: a Gergely-naptári napot Julián-napszámmá alakítjuk, majd a GMT-korreláció (584283) alapján a `(JDN + eltolás) mod 260` képletből adódik a napjegy (mod 20) és a szám (mod 13).',
    signs: [
      { num: 1,  name: 'Imix',     maya: 'Krokodil',  text: 'Az őstenger és a krokodil jegye: a teremtés első lendülete, minden kezdet forrása. Táplál és elindít, de könnyen elárasztja saját túláradó energiája.' },
      { num: 2,  name: "Ik'",      maya: 'Szél',      text: 'A szél és a lélegzet jegye: kommunikáció, szellemi ihlet, az élet láthatatlan éltető ereje. Gyorsan mozog, könnyen változik, és mindent továbbvisz, amit rábíznak.' },
      { num: 3,  name: "Ak'b'al",  maya: 'Éjszaka',   text: 'Az éjszaka és a sötétség jegye: álmok, intuíció, belső tudás és a rejtett dolgok háza. Aki ide születik, befelé figyelve találja meg a válaszait.' },
      { num: 4,  name: "K'an",     maya: 'Mag',       text: 'A kukoricamag jegye: bőség, termékenység, a benne rejlő növekedési potenciál. Türelmes építkezés, amelyben minden apró kezdemény gazdag termést hozhat.' },
      { num: 5,  name: 'Chikchan', maya: 'Kígyó',     text: 'A kígyó jegye: életerő, ösztönös tudás, testi-érzelmi intenzitás és karizma. Erős vitalitás, amely felemel, ha jó irányba engedik.' },
      { num: 6,  name: 'Kimi',     maya: 'Halál',     text: 'Az átalakulás jegye: elengedés, lezárás és újjászületés, az ősökkel való kapcsolat. Nem a végről szól, hanem arról, ami a vég után következik.' },
      { num: 7,  name: "Manik'",   maya: 'Szarvas',   text: 'A szarvas és a kéz jegye: gyógyítás, kézügyesség, csendes szolgálat. Békés, összeszedett energia, amely mások gyógyulását segíti.' },
      { num: 8,  name: 'Lamat',    maya: 'Csillag',   text: 'A csillag és a nyúl jegye: harmónia, szépség, művészet és sokszorozódás. Játékos bőség, amely szétsugárzik a környezetére.' },
      { num: 9,  name: 'Muluk',    maya: 'Víz',       text: 'A víz és a hold jegye: érzelmi mélység, tisztulás és hála. Emlékezik mindenre, amit átélt, és az érzésein keresztül tanul.' },
      { num: 10, name: 'Ok',       maya: 'Kutya',     text: 'A kutya jegye: hűség, szeretet, közösség és feltétel nélküli ragaszkodás. A kapcsolatokban éli meg önmagát, és megvédi, akit szeret.' },
      { num: 11, name: 'Chuwen',   maya: 'Majom',     text: 'A majom jegye: játékosság, kreativitás és a mesterségbeli tudás öröme. Az élet szövője, aki játszva alkot és alkotva játszik.' },
      { num: 12, name: "Eb'",      maya: 'Út',        text: 'Az életút és a fű jegye: alázat, szolgálat, az emberiség javát szolgáló haladás. A saját ösvényét járja, de sosem egyedül.' },
      { num: 13, name: "B'en",     maya: 'Nád',       text: 'A nád jegye: otthon, tekintély, egyenes növekedés az ég felé. Az elveiért kiálló, a családot és a közösséget összetartó erő.' },
      { num: 14, name: 'Ix',       maya: 'Jaguár',    text: 'A jaguár jegye: mágia, éjszakai erő, sámáni érzékenység. Csendben figyel, majd pontosan a legjobb pillanatban lép.' },
      { num: 15, name: 'Men',      maya: 'Sas',       text: 'A sas jegye: látomás, nagy távlat, ambíció és szabadság. A részletek fölé emelkedik, hogy az egészet lássa.' },
      { num: 16, name: "Kib'",     maya: 'Keselyű',   text: 'A keselyű és a belső bölcsesség jegye: megbocsátás, a múlt terheinek letétele. Az ősök tapasztalatát hordozza, és tisztít, ahol tud.' },
      { num: 17, name: "Kab'an",   maya: 'Föld',      text: 'A föld és a mozgás jegye: gondolkodás, szinkronicitás, a földenergiával való összhang. Éles elme, amely az összefüggések hálóját olvassa.' },
      { num: 18, name: "Etz'nab'", maya: 'Kovakő',    text: 'A kovakő-tükör jegye: igazság, éles ítélőerő, tiszta döntés. Nem kerüli meg a konfliktust, mert a tisztaságot többre tartja a kényelemnél.' },
      { num: 19, name: 'Kawak',    maya: 'Vihar',     text: 'A vihar és az eső jegye: megújulás, energiakitörés, közösségi tér. Felkavar, hogy utána minden frissebb és tisztább legyen.' },
      { num: 20, name: 'Ajaw',     maya: 'Nap',       text: 'A nap és az úr jegye: beteljesedés, fény, vezetés és nagylelkűség. A ciklus lezárása, amelyben minden korábbi tapasztalat egyesül.' }
    ],
    tones: [
      { num: 1,  name: 'Hun',      keyword: 'Egység',          text: 'Az indulás pillanata: tiszta szándék, magány és a kezdet minden lehetősége.' },
      { num: 2,  name: "Ka'",      keyword: 'Polaritás',       text: 'A kettősség születése: kihívás, választás, a másikkal való szembesülés.' },
      { num: 3,  name: 'Ox',       keyword: 'Mozgás',          text: 'A megindult áramlás: kapcsolódás, kommunikáció, az első valódi lendület.' },
      { num: 4,  name: 'Kan',      keyword: 'Stabilitás',      text: 'A forma megszilárdulása: keretek, mérték és biztonságot adó rend.' },
      { num: 5,  name: "Ho'",      keyword: 'Középpont',       text: 'Az összegyűjtött erő: fókusz, hatalom a saját energiák fölött.' },
      { num: 6,  name: 'Wak',      keyword: 'Áramlás',         text: 'A szervezett mozgás: ritmus, egyensúly, a folyamat gördülékennyé válása.' },
      { num: 7,  name: 'Wuk',      keyword: 'Tükör',           text: 'A ciklus csúcsa: önvizsgálat, misztikus rálátás, a középpont megpillantása.' },
      { num: 8,  name: 'Waxak',    keyword: 'Harmónia',        text: 'Az igazság mértéke: rend, tisztaság, a részek összecsengése.' },
      { num: 9,  name: 'Bolon',    keyword: 'Kiteljesedés',    text: 'A nagyobb szándék: türelem, kitartás, a cél felé fordított erő.' },
      { num: 10, name: 'Lajun',    keyword: 'Megnyilvánulás',  text: 'A kézzelfogható eredmény: a belső terv megjelenik a világban.' },
      { num: 11, name: 'Buluk',    keyword: 'Feloldás',        text: 'A régi keretek bontása: felszabadulás, változás, a szükségtelen elengedése.' },
      { num: 12, name: 'Lajka',    keyword: 'Megértés',        text: 'Az összegzés: tapasztalatok együttműködése, közösségi bölcsesség.' },
      { num: 13, name: 'Oxlajun',  keyword: 'Transzcendencia', text: 'A lezárás és a fölé emelkedés: a ciklus vége, amely új ciklust nyit.' }
    ]
  },

  /* ---------------------------------------------------------------
   * 2) Kelta fa-horoszkóp — 21 fajegy
   * ------------------------------------------------------------- */
  celtic: {
    intro: 'A kelta fa-horoszkóp nem ősi druida hagyomány: a 21 fás „fakör" a 20. században, az 1970-es évek francia sajtójában bukkant fel, és német nyelvterületen „keltischer Baumkreis" néven vált népszerűvé. A számítás tisztán dátum-alapú: a legtöbb fához két (a nyárfához három) különálló dátumsáv tartozik, a napfordulók és napéjegyenlőségek napjai pedig külön, egynapos jegyet kapnak.',
    trees: [
      { name: 'Almafa',      from: [12,23], to: [1,1],   ranges: [[[12,23],[1,1]],  [[6,25],[7,4]]],               text: 'Az almafa jegyében születettek szeretetteljesek, vonzóak és nagyvonalúak. Romantikus alkatok, akiknek a kapcsolat és az érzelmi biztonság a legfontosabb. Adnak, mielőtt kérnének, és a szeretetükkel könnyen megnyitják mások szívét.', traits: ['szeretetteljes','vonzó','nagyvonalú','romantikus'] },
      { name: 'Fenyő',       from: [1,2],   to: [1,11],  ranges: [[[1,2],[1,11]],   [[7,5],[7,14]]],               text: 'A jegenyefenyő jegye igényes, kifinomult ízlésű és rendkívül kitartó embereket ad. Kissé zárkózottak, nem osztják meg magukat akárkivel, de akit beengednek, arra hosszú távon számíthat. Az igényességük néha kritikus élt kap.', traits: ['igényes','kifinomult','kitartó','zárkózott'] },
      { name: 'Szilfa',      from: [1,12],  to: [1,24],  ranges: [[[1,12],[1,24]],  [[7,15],[7,25]]],              text: 'A szilfa jegyében születettek egyenesek, gyakorlatiasak és megbízhatóak. Nemes lelkűek, nehezen tűrik az igazságtalanságot, és szívesen állnak a gyengébbek mellé. Nem szeretik a felhajtást, a tetteikkel beszélnek.', traits: ['egyenes','gyakorlatias','megbízható','nemes lelkű'] },
      { name: 'Ciprus',      from: [1,25],  to: [2,3],   ranges: [[[1,25],[2,3]],   [[7,26],[8,4]]],               text: 'A ciprus erős, alkalmazkodó és hűséges természetet ad. Elégedettek azzal, amijük van, és nem hajszolják a látványos sikereket. Nyugalmuk a környezetükre is kisugárzik, kapaszkodót adva a bizonytalan időkben.', traits: ['erős','alkalmazkodó','elégedett','hűséges'] },
      { name: 'Nyárfa',      from: [2,4],   to: [2,8],   ranges: [[[2,4],[2,8]],    [[5,1],[5,14]], [[8,5],[8,13]]], text: 'A nyárfa jegye érzékeny, művészi hajlamú embereket ad, akik hajlamosak a bizonytalanságra. Szükségük van biztató környezetre, de ha muszáj, meglepően bátran döntenek. Az egyetlen fajegy, amelyhez három dátumsáv tartozik.', traits: ['érzékeny','művészi','bizonytalanságra hajló','szükség esetén bátor'] },
      { name: 'Cédrus',      from: [2,9],   to: [2,18],  ranges: [[[2,9],[2,18]],   [[8,14],[8,23]]],              text: 'A cédrus (ostorfa) jegyében születettek magabiztosak, egészséges önérzetűek és optimisták. Határozottan döntenek, és nem gyötrik magukat utólagos kételyekkel. Vonzza őket a szépség és a jó életminőség.', traits: ['magabiztos','optimista','határozott','életszerető'] },
      { name: 'Erdeifenyő',  from: [2,19],  to: [2,29],  ranges: [[[2,19],[2,29]],  [[8,24],[9,2]]],               text: 'Az erdeifenyő szívós, rendszerető és jó szervezőkészségű embereket ad. Szenvedélyesek, de a szenvedélyüket is fegyelmezett keretek közé terelik. A szökőév február 29-e is ide tartozik.', traits: ['szívós','rendszerető','szenvedélyes','jó szervező'] },
      { name: 'Fűzfa',       from: [3,1],   to: [3,10],  ranges: [[[3,1],[3,10]],   [[9,3],[9,12]]],               text: 'A fűzfa jegye melankolikus, mélyen intuitív és művészi alkatot ad. Könnyen befolyásolható, mert erősen átveszi a környezete hangulatát. Ha megtalálja a saját kifejezési formáját, rendkívül megindító alkotásokra képes.', traits: ['melankolikus','intuitív','művészi','befolyásolható'] },
      { name: 'Hársfa',      from: [3,11],  to: [3,20],  ranges: [[[3,11],[3,20]],  [[9,13],[9,22]]],              text: 'A hársfa békeszerető, lágy és áldozatkész természetet ad. Ritkán mond nemet, ezért könnyen túlvállalja magát mások kedvéért. Érzelmileg mélyen kötődik, ami féltékenységre is hajlamosíthatja.', traits: ['békeszerető','lágy','áldozatkész','féltékenységre hajló'] },
      { name: 'Tölgy',       from: [3,21],  to: [3,21],  ranges: [[[3,21],[3,21]]],                                text: 'A tavaszi napéjegyenlőség egynapos jegye: bátor, erős és robusztus jellem. Független, nehezen hajlik meg, és válsághelyzetben ő az, aki állva marad. Az ereje mellé érdemes rugalmasságot is tanulnia.', traits: ['bátor','erős','független','robusztus'] },
      { name: 'Mogyoró',     from: [3,22],  to: [3,31],  ranges: [[[3,22],[3,31]],  [[9,24],[10,3]]],              text: 'A mogyoró jegyében születettek bűbájosak, megértőek és toleránsak. Jó az ítélőképességük, ezért gyakran fordulnak hozzájuk tanácsért. Csendes hatásuk van, nem harsányan érvényesülnek.', traits: ['bűbájos','megértő','toleráns','jó ítélőképességű'] },
      { name: 'Berkenye',    from: [4,1],   to: [4,10],  ranges: [[[4,1],[4,10]],   [[10,4],[10,13]]],             text: 'A berkenye finom, jó ízlésű és érzékeny embereket ad. Önzetlenek, szívesen tesznek másokért anélkül, hogy elismerést várnának. Kerülik a durvaságot, és harmonikus környezetben teljesednek ki.', traits: ['finom','jó ízlésű','érzékeny','önzetlen'] },
      { name: 'Juhar',       from: [4,11],  to: [4,20],  ranges: [[[4,11],[4,20]],  [[10,14],[10,23]]],            text: 'A juhar eredeti, ambiciózus és kíváncsi természetet ad, ideges energiával fűtve. Gyorsan tanulnak, sok mindenbe belekezdenek, és nehezen viselik az unalmat. A kihívás élteti őket.', traits: ['eredeti','ambiciózus','kíváncsi','nyughatatlan'] },
      { name: 'Diófa',       from: [4,21],  to: [4,30],  ranges: [[[4,21],[4,30]],  [[10,24],[11,11]]],            text: 'A diófa jegyében születettek szenvedélyesek, stratégiai gondolkodásúak és kompromisszummentesek. Nem alkusznak meg, ezért néha nehéz természetűnek tűnnek, de rendkívül hűségesek. A féltékenység az árnyoldaluk.', traits: ['szenvedélyes','stratéga','kompromisszummentes','féltékeny'] },
      { name: 'Gesztenye',   from: [5,15],  to: [5,24],  ranges: [[[5,15],[5,24]],  [[11,12],[11,21]]],            text: 'A gesztenye erős igazságérzetet, diplomáciai érzéket és óvatosságot ad. Nem tolakodóak, ezért gyakran félreértik őket, pedig belül nagyon határozottak. A méltányosság a legfontosabb mércéjük.', traits: ['igazságérzetű','diplomatikus','óvatos','néha félreértett'] },
      { name: 'Kőris',       from: [5,25],  to: [6,3],   ranges: [[[5,25],[6,3]],   [[11,22],[12,1]]],             text: 'A kőris impulzív, igényes és okos embereket ad, akik nehezen fogadnak el mások útmutatását. Önfejűek, de a tehetségük gyakran igazolja őket. Gyorsan döntenek, és vállalják a döntéseik következményét.', traits: ['impulzív','igényes','okos','önfejű'] },
      { name: 'Gyertyán',    from: [6,4],   to: [6,13],  ranges: [[[6,4],[6,13]],   [[12,2],[12,11]]],             text: 'A gyertyán esztéta, fegyelmezett és kötelességtudó természetet ad. Fontos nekik a külső forma és mások elismerése, amiért sokat is dolgoznak. A rend és az összeszedettség adja a biztonságérzetüket.', traits: ['esztéta','fegyelmezett','kötelességtudó','elismerésre vágyó'] },
      { name: 'Fügefa',      from: [6,14],  to: [6,23],  ranges: [[[6,14],[6,23]],  [[12,12],[12,21]]],            text: 'A fügefa erős, önálló és családszerető embereket ad. Nem tűrik az ellentmondást, és a saját szabályaik szerint élnek. Ha szeretik őket, hihetetlenül melegszívűek és védelmezőek.', traits: ['erős','önálló','családszerető','ellentmondást nem tűrő'] },
      { name: 'Nyírfa',      from: [6,24],  to: [6,24],  ranges: [[[6,24],[6,24]]],                                text: 'A nyári napforduló egynapos jegye: mértékletes, elegáns és szerény jellem. Kerüli a szélsőségeket, és a tisztaság, a világosság vezeti. Csendes derűvel viseli a nehézségeket is.', traits: ['mértékletes','elegáns','szerény','tiszta'] },
      { name: 'Olajfa',      from: [9,23],  to: [9,23],  ranges: [[[9,23],[9,23]]],                                text: 'Az őszi napéjegyenlőség egynapos jegye: bölcs, kiegyensúlyozott és igazságos ember. Szereti a napfényt, a melegséget és a békés társaságot. Ritkán veszíti el a hidegvérét.', traits: ['bölcs','kiegyensúlyozott','igazságos','napimádó'] },
      { name: 'Bükk',        from: [12,22], to: [12,22], ranges: [[[12,22],[12,22]]],                              text: 'A téli napforduló egynapos jegye: jó ízlésű, praktikus és kiváló életszervező. Reálisan méri fel a lehetőségeit, és okosan bánik az anyagi javakkal. Az élvezeteket is tervezetten adagolja magának.', traits: ['jó ízlésű','praktikus','anyagilag tudatos','jó életszervező'] }
    ]
  },

  /* ---------------------------------------------------------------
   * 3) Egyiptomi istenség-jegyek — modern rekonstrukció
   * ------------------------------------------------------------- */
  egyptian: {
    intro: 'Az ókori Egyiptomban valóban létezett csillagvallás és a 36 dekán rendszere, a ma népszerű „egyiptomi istenség-horoszkóp" azonban modern, ezoterikus rekonstrukció, nem hiteles ókori hagyomány. A számítás tisztán dátum-alapú, sajátossága, hogy a legtöbb jegyhez több, egymástól elkülönülő dátumsáv tartozik.',
    signs: [
      { name: 'Nílus (Hapi)', ranges: [[[1,1],[1,7]],   [[6,19],[6,28]],  [[9,1],[9,7]],    [[11,18],[11,26]]], text: 'A rendszer egyetlen nem-istenség jegye: a termékenységet hozó folyó minősége. Békés, gyakorlatias, megfigyelő természet, amely kivárja a maga idejét, és a csendes kitartással ér célt.' },
      { name: 'Amon-Ré',      ranges: [[[1,8],[1,21]],  [[2,1],[2,11]]],                                        text: 'A napisten jegye: született vezető, magabiztos és nagyvonalú. Természetes tekintélye van, mások szívesen fordulnak hozzá irányításért, de a büszkeség könnyen a fejébe szállhat.' },
      { name: 'Mut',          ranges: [[[1,22],[1,31]], [[9,8],[9,22]]],                                        text: 'Az anyaistennő jegye: gondoskodó, hűséges, védelmező alkat. A családot és a közösséget tartja össze, és önmagát is hajlandó háttérbe szorítani a szeretteiért.' },
      { name: 'Geb',          ranges: [[[2,12],[2,29]], [[8,20],[8,31]]],                                       text: 'A földisten jegye: földközeli, érzékeny, jószívű és megbízható. A stabilitás és a kézzelfogható eredmények embere, aki lassan, de biztosan építkezik.' },
      { name: 'Ozirisz',      ranges: [[[3,1],[3,10]],  [[11,27],[12,18]]],                                     text: 'Az újjászületés istenének jegye: dinamikus, vállalkozó szellemű személyiség. A legnagyobb erőssége, hogy a bukásokból is újra fel tud állni, gyakran erősebben, mint korábban.' },
      { name: 'Ízisz',        ranges: [[[3,11],[3,31]], [[10,18],[10,29]], [[12,19],[12,31]]],                   text: 'A nagy varázslónő jegye: egyenes, energikus, humoros és oltalmazó. Nem kerülgeti a témát, és ha valakit a szívébe zár, minden erejével mellette áll.' },
      { name: 'Thot',         ranges: [[[4,1],[4,19]],  [[11,8],[11,17]]],                                      text: 'Az írás és a bölcsesség istenének jegye: tanulni vágyó, kiváló problémamegoldó elme. Szereti a rendszereket és a tudást, és mindenre keres egy logikus magyarázatot.' },
      { name: 'Hórusz',       ranges: [[[4,20],[5,7]],  [[8,12],[8,19]]],                                       text: 'A sólyomfejű égisten jegye: bátor, optimista és ambiciózus. Magasra tűzi a céljait, és a kudarcot csak átmeneti akadálynak tekinti a saját útján.' },
      { name: 'Anubisz',      ranges: [[[5,8],[5,27]],  [[6,29],[7,13]]],                                       text: 'A túlvilág kalauzának jegye: introspektív, szenvedélyes és nagyon önálló. Szüksége van a magányra, hogy feldolgozza az élményeit, és mélyen érdeklik a rejtett dolgok.' },
      { name: 'Széth',        ranges: [[[5,28],[6,18]], [[9,28],[10,2]]],                                       text: 'A vihar és a káosz istenének jegye: változáskereső, perfekcionista, nyughatatlan. Nem bírja a megszokást, és néha maga kavarja fel a állóvizet, hogy történjen valami.' },
      { name: 'Básztet',      ranges: [[[7,14],[7,28]], [[9,23],[9,27]],  [[10,3],[10,17]]],                     text: 'A macskaistennő jegye: harmóniakereső, intuitív, játékos és érzéki. Kifinomult érzéke van a hangulatokhoz, és ösztönösen megérzi, kiben bízhat meg.' },
      { name: 'Szahmet',      ranges: [[[7,29],[8,11]], [[10,30],[11,7]]],                                      text: 'Az oroszlánfejű harcos istennő jegye: erős igazságérzetű, büszke és fegyelmezett. Kemény ellenfél, de sosem a hatalomért harcol, hanem az igazáért.' }
    ]
  },

  /* ---------------------------------------------------------------
   * 4) Indián születési totemállatok — Sun Bear rendszere
   * ------------------------------------------------------------- */
  totem: {
    intro: 'A születési totemállatok rendszerét Sun Bear (Vincent LaDuke) és Wabun Wind publikálta 1980-ban, a The Medicine Wheel: Earth Astrology című könyvben — tehát 20. századi szintézis, nem ősi törzsi hagyomány, és egyes őslakos közösségek kritikával is illetik. A 12 totem a nyugati zodiákussal párhuzamos dátumsávokat használ, mindegyikhez elem és szélirány tartozik.',
    signs: [
      { name: 'Sólyom',     from: [3,21],  to: [4,19],  element: 'Tűz',    wind: 'keleti',  text: 'A tavasz első totemje: kezdeményező, gyors döntésű vezéralkat. Elsőként veti bele magát az újba, de a türelmet külön tanulnia kell.' },
      { name: 'Hód',        from: [4,20],  to: [5,20],  element: 'Föld',   wind: 'keleti',  text: 'A biztonságépítő totem: kitartó, gyakorlatias, szorgalmas természet. Otthont és stabil hátteret teremt magának és a közösségének.' },
      { name: 'Szarvas',    from: [5,21],  to: [6,20],  element: 'Levegő', wind: 'keleti',  text: 'Az eleven, kommunikatív totem: sokoldalú, gyors felfogású, társasági lény. Könnyen alkalmazkodik, de nehezen köteleződik el hosszú távra.' },
      { name: 'Harkály',    from: [6,21],  to: [7,21],  element: 'Víz',    wind: 'déli',    text: 'A gondoskodó totem: érzelmes, otthonteremtő, védelmező. Megérzi mások szükségleteit, és odaadóan ápolja a kapcsolatait.' },
      { name: 'Lazac',      from: [7,22],  to: [8,21],  element: 'Tűz',    wind: 'déli',    text: 'A lelkes, magabiztos totem: energikus, nagyvonalú, természetesen ragyogó. Az árral szemben is felúszik, ha hisz a céljában.' },
      { name: 'Barnamedve', from: [8,22],  to: [9,21],  element: 'Föld',   wind: 'déli',    text: 'A módszeres totem: megfontolt, segítőkész, gyakorlatias elme. Alaposan mérlegel, mielőtt cselekedne, és ritkán téved nagyot.' },
      { name: 'Holló',      from: [9,22],  to: [10,22], element: 'Levegő', wind: 'nyugati', text: 'A diplomatikus totem: társaságkedvelő, kiegyensúlyozó, jó közvetítő. Kerüli a nyílt konfliktust, és a szépségre, harmóniára hangolódik.' },
      { name: 'Kígyó',      from: [10,23], to: [11,22], element: 'Víz',    wind: 'nyugati', text: 'Az átalakuló totem: mélyre látó, rejtélyes, intenzív. Többször is „levedli a bőrét" az élete során, és minden váltásból megújultan jön ki.' },
      { name: 'Bagoly',     from: [11,23], to: [12,21], element: 'Tűz',    wind: 'nyugati', text: 'Az igazságkereső totem: kalandvágyó, szókimondó, tág látókörű. Szereti a szabadságot és a nagy kérdéseket, a kicsinyességet nehezen viseli.' },
      { name: 'Hóliba',     from: [12,22], to: [1,19],  element: 'Föld',   wind: 'északi',  text: 'A céltudatos totem: kitartó, hagyománytisztelő, fegyelmezett. Hosszú távra tervez, és lépésről lépésre halad a kitűzött célja felé.' },
      { name: 'Vidra',      from: [1,20],  to: [2,18],  element: 'Levegő', wind: 'északi',  text: 'Az eredeti gondolkodású totem: játékos, humánus, újító szellem. Nem érdeklik a bevett sémák, a saját logikáját követi.' },
      { name: 'Farkas',     from: [2,19],  to: [3,20],  element: 'Víz',    wind: 'északi',  text: 'Az empatikus totem: intuitív, művészlélek, mélyen érző. Erősen kötődik a falkájához, miközben szüksége van a saját belső terére is.' }
    ]
  },

  /* ---------------------------------------------------------------
   * 5) Burmai Mahabote — a hét napja szerint (szerda kettéosztva)
   * ------------------------------------------------------------- */
  mahabote: {
    intro: 'A burmai Mahabote („kis horoszkóp") hindu navagraha-alapokra épülő, buddhista és helyi elemekkel átszőtt mianmari rendszer, amelyben a születés hétnapja adja a jegyet. Egyetlen kivétel van: a szerda kettéválik — a délelőtt (0:00–12:00) Merkúré, a délután (12:00–24:00) Ráhué —, így 7 napból 8 jegy lesz.',
    signs: {
      0: { name: 'Vasárnap – Ravi',       planet: 'Nap',         animal: 'Garuda (mitikus madár)', direction: 'ÉK',  text: 'Méltóságteljes, nagylelkű és büszke személyiség, akit a hagyomány vezetésre termettnek tart. Ragyogni akar, és nehezen viseli, ha háttérbe szorítják.' },
      1: { name: 'Hétfő – Chandra',       planet: 'Hold',        animal: 'Tigris',                 direction: 'K',   text: 'Intelligens, intuitív és türelmes alkat, aki érzékenyen olvassa a helyzeteket. A lágysága mögött határozott céltudatosság rejlik.' },
      2: { name: 'Kedd – Mangala',        planet: 'Mars',        animal: 'Oroszlán',               direction: 'DK',  text: 'Becsületes, szenvedélyes és bátor természet, aki nyíltan kiáll az igazáért. Lobbanékony is: a haragja gyorsan fellángol, de hamar el is múlik.' },
      3: { name: 'Szerda délelőtt – Budha', planet: 'Merkúr',    animal: 'Agyaras elefánt',        direction: 'D',   text: 'Kedves, humoros és kiválóan kommunikáló ember, akit mindenhol szívesen látnak. Sokfelé figyel egyszerre, ezért hajlamos a szétszórtságra.' },
      4: { name: 'Csütörtök – Guru',      planet: 'Jupiter',     animal: 'Patkány',                direction: 'Ny',  text: 'Bölcs, tanult és jóindulatú mentor-alkat, akihez tanácsért fordulnak. Szereti a tudást átadni, és tekintélyt szerez a türelmével.' },
      5: { name: 'Péntek – Shukra',       planet: 'Vénusz',      animal: 'Tengerimalac',           direction: 'É',   text: 'Művészi hajlamú, szerethető és békeszerető személyiség. Kerüli a konfliktust, ezért néha túl sokáig tűri a rossz helyzeteket.' },
      6: { name: 'Szombat – Shani',       planet: 'Szaturnusz',  animal: 'Nága (sárkánykígyó)',    direction: 'DNy', text: 'Komoly, kitartó és erős jellemű ember, aki a nehézségeket is végigviszi. Magányos küzdő, aki a saját erejéből építi fel, amit akar.' },
      wed_pm: { name: 'Szerda délután – Ráhu', planet: 'Ráhu (holdcsomópont)', animal: 'Agyar nélküli elefánt', direction: 'ÉNy', text: 'Titokzatos, erős akaratú és kifejezetten sikerorientált típus, akit nehéz kiismerni. A hagyomány szerint szélsőségekre hajlik: nagy magasságok és mély hullámvölgyek kísérik. (A Ráhu nem valódi égitest, hanem a hindu asztrológia árnyékbolygója, a holdcsomópont.)' }
    }
  },

  /* ---------------------------------------------------------------
   * 6) Akan (ghánai) születésnap-nevek — kra din
   * ------------------------------------------------------------- */
  akan: {
    intro: 'Az akan népek (Ghána, Elefántcsontpart) hite szerint minden ember lelket (kra) kap a Teremtőtől, és a lélek minősége a születés hétnapjától függ — ezért minden gyermek automatikusan kap egy kra din, azaz „lélek-nevet". A számításhoz csak a dátum és a nem kell; a rendszer a diaszpórában is tovább él, híres viselői Kwame Nkrumah (szombat) és Kofi Annan (péntek).',
    days: {
      0: { day: 'Vasárnap',  male: 'Kwasi (Kwesi, Akwasi)',  female: 'Akosua (Esi)',        meaning: 'A világegyetem és a nap napja: védelmező, tiszta szívű lélek.' },
      1: { day: 'Hétfő',     male: 'Kwadwo (Kojo, Kwadjo)',  female: 'Adwoa (Adjoa)',       meaning: 'A béke és a nyugalom napja: békéltető, higgadt alkat.' },
      2: { day: 'Kedd',      male: 'Kwabena (Kobina, Kobi)', female: 'Abena (Araba)',       meaning: 'Az óceán és a tűz napja: kezdeményező, bátor természet.' },
      3: { day: 'Szerda',    male: 'Kwaku (Kweku)',          female: 'Akua (Ekua)',         meaning: 'Ananszi, a pók napja: gyors észjárású, leleményes lélek.' },
      4: { day: 'Csütörtök', male: 'Yaw (Kwaw)',             female: 'Yaa (Aba)',           meaning: 'A föld napja: bátor, kitartó és megbízható jellem.' },
      5: { day: 'Péntek',    male: 'Kofi',                   female: 'Afua (Afia, Efua)',   meaning: 'A termékenység napja: vándorló, kalandvágyó, kreatív lélek.' },
      6: { day: 'Szombat',   male: 'Kwame (Kwamena)',        female: 'Ama (Amma)',          meaning: 'A Teremtő napja: bölcs, „öreg lélek", elmélyült természet.' }
    }
  },

  /* ---------------------------------------------------------------
   * 7) Kilenc csillag ki (kyūsei kigaku) + Kua-szám
   * ------------------------------------------------------------- */
  kyusei: {
    intro: 'A kilenc csillag ki (japánul kyūsei kigaku) kínai gyökerű rendszer, amely a Lo Shu bűvös négyzet 9 számát, az öt elemet és a nyolc trigramot köti össze. A fő szám (honmeisei) a születési évből adódik: az évszám számjegyeit egyjegyűre redukáljuk, majd kivonjuk 11-ből — de figyelem, a rendszer éve február 4-én (setsubun) kezdődik, tehát a január 1. és február 3. között születettek még az előző évhez tartoznak.',
    numbers: {
      1: { name: '1 Fehér Víz',      element: 'Víz',              trigram: 'Kan',   text: 'Mély, alkalmazkodó és önálló típus, aki a felszín alatt őrzi az igazi erejét. Csendben halad a célja felé, és megtalálja az utat minden akadály körül.' },
      2: { name: '2 Fekete Föld',    element: 'Föld',             trigram: 'Kun',   text: 'Gondoskodó, támogató és kitartó személyiség, a csapat „talaja". Nem a reflektorfényt keresi, hanem azt a stabilitást, amelyre mások építhetnek.' },
      3: { name: '3 Világoszöld Fa', element: 'Fa (mennydörgés)', trigram: 'Csen',  text: 'Úttörő, energikus és türelmetlen típus, aki mindig elsőként indul el. Villámgyorsan kezdeményez, de a befejezéshez társakra van szüksége.' },
      4: { name: '4 Zöld Fa',        element: 'Fa (szél)',        trigram: 'Szun',  text: 'Harmonikus, meggyőző és jó közvetítő alkat, aki finoman ér el hatást. Erősen figyel a környezetére, ezért befolyásolható is lehet.' },
      5: { name: '5 Sárga Föld',     element: 'Föld (középpont)', trigram: '—',     text: 'A kilences kör közepe: erős vezéregyéniség, akihez mindenki igazodik. Szélsőségek jellemzik — vagy nagyon fent, vagy nagyon lent van.' },
      6: { name: '6 Fehér Fém',      element: 'Fém (ég)',         trigram: 'Csien', text: 'Méltóságteljes, elvhű és tekintélyes típus, született szervező. Magas mércét állít magának és másoknak, és nehezen enged az elveiből.' },
      7: { name: '7 Vörös Fém',      element: 'Fém (tó)',         trigram: 'Tuj',   text: 'Sziporkázó, élvezetkedvelő és meggyőző kommunikátor. Könnyedén teremt kapcsolatot, és jól érzi magát a társaság középpontjában.' },
      8: { name: '8 Fehér Föld',     element: 'Föld (hegy)',      trigram: 'Ken',   text: 'Csendes erő és nagy kitartás jellemzi, hegyként áll a helyén. Az élete forradalmi fordulatokban halad: hosszú nyugalom, majd hirtelen váltás.' },
      9: { name: '9 Bíbor Tűz',      element: 'Tűz',              trigram: 'Li',    text: 'Ragyogó, szenvedélyes és jól látható személyiség, akit észrevesznek. A hírnév és a lelkesedés kíséri, de gyorsan fel is emészti magát.' }
    },
    kuaIntro: 'A Kua-szám (gua) a feng shui személyes szerencseirányait adja meg: a születési év utolsó két számjegyét összeadjuk és egyjegyűre redukáljuk (x), majd férfinál 10 − x (a 2000-től születetteknél 9 − x), nőnél x + 5 egyjegyűre redukálva (2000-től x + 6). Ha 5 jön ki, nincs önálló 5-ös Kua: férfinál a 2-es, nőnél a 8-as érvényes — és a februári évhatár itt is él, tehát a kínai újév / február 4. előtti születésnél az előző évet kell számolni.',
    kuaDirections: {
      1: { good: ['DK','K','D','É'],     bad: ['NY','ÉK','ÉNy','DNy'], group: 'keleti' },
      2: { good: ['ÉK','NY','ÉNy','DNy'], bad: ['D','É','DK','K'],      group: 'nyugati' },
      3: { good: ['D','É','DK','K'],      bad: ['DNy','ÉNy','ÉK','NY'], group: 'keleti' },
      4: { good: ['É','D','K','DK'],      bad: ['ÉNy','DNy','NY','ÉK'], group: 'keleti' },
      5: { good: ['ÉK','NY','ÉNy','DNy'], bad: ['D','É','DK','K'],      group: 'nyugati', note: 'Nincs önálló 5-ös Kua: férfinál a 2-es irányai érvényesek (a fentiek), nőnél a 8-asé (DNy, ÉNy, NY, ÉK a kedvező).' },
      6: { good: ['NY','ÉK','DNy','ÉNy'], bad: ['K','DK','D','É'],      group: 'nyugati' },
      7: { good: ['ÉNy','DNy','ÉK','NY'], bad: ['É','D','K','DK'],      group: 'nyugati' },
      8: { good: ['DNy','ÉNy','NY','ÉK'], bad: ['DK','K','É','D'],      group: 'nyugati' },
      9: { good: ['K','DK','É','D'],      bad: ['ÉK','NY','DNy','ÉNy'], group: 'keleti' }
    }
  },

  /* ---------------------------------------------------------------
   * 8) Rúna fél-hónapok — modern rendszer
   * ------------------------------------------------------------- */
  runes: {
    intro: 'A vikingeknek nem volt születési rúna-horoszkópja: a fél-havi rúnabeosztás 20. századi konstrukció, amelyet elsősorban Nigel Pennick Runic Astrology (1990) című könyve népszerűsített — a történelmi rúnanaptárak (primstav) öröknaptárak voltak, nem horoszkópok. A rendszer az Elder Futhark 24 rúnáját osztja szét az évkörön, körülbelül 15 napos szakaszokban, a nyári napforduló utáni Fehuval kezdve.',
    signs: [
      { name: 'Fehu',     symbol: 'ᚠ', from: [6,29],  to: [7,13],  text: 'A jószág és a vagyon rúnája: bőség, mozgásban lévő érték, megszerzett javak. Aki ide születik, tud teremteni és gyarapítani — de csak akkor, ha áramoltatja is, amije van.' },
      { name: 'Uruz',     symbol: 'ᚢ', from: [7,14],  to: [7,28],  text: 'Az őstulok rúnája: nyers erő, jó egészség, megtörhetetlen kitartás. Vad, formálatlan energia, amelyet meg kell tanulni irányítani.' },
      { name: 'Thurisaz', symbol: 'ᚦ', from: [7,29],  to: [8,12],  text: 'Az óriás és a tövis rúnája: védekező erő és hirtelen áttörés. Konfliktusban mutatja meg magát, és a nehézségeken keresztül nyit utat.' },
      { name: 'Ansuz',    symbol: 'ᚨ', from: [8,13],  to: [8,28],  text: 'Az isteni szó (Odin) rúnája: kommunikáció, ihlet, bölcsesség. A jó szó erejével hat, tanít és meggyőz.' },
      { name: 'Raidho',   symbol: 'ᚱ', from: [8,29],  to: [9,12],  text: 'A kerék és a lovaglás rúnája: utazás, haladás, a saját ritmus megtalálása. Az út maga a cél — a mozgásban van otthon.' },
      { name: 'Kenaz',    symbol: 'ᚲ', from: [9,13],  to: [9,27],  text: 'A fáklya rúnája: tudás, alkotó tűz, a sötétben felvillanó világosság. Mesterségbeli tudással és tanulással világít.' },
      { name: 'Gebo',     symbol: 'ᚷ', from: [9,28],  to: [10,12], text: 'Az ajándék rúnája: csere, partnerség, nagylelkűség. Az adás és az elfogadás egyensúlyán múlik a jóléte.' },
      { name: 'Wunjo',    symbol: 'ᚹ', from: [10,13], to: [10,27], text: 'Az öröm rúnája: harmónia, beteljesülés, közös siker. Derűvel tud együtt lenni másokkal, és jó hangulatot teremt maga körül.' },
      { name: 'Hagalaz',  symbol: 'ᚺ', from: [10,28], to: [11,12], text: 'A jégeső rúnája: próbatétel, felforgató, de megtisztító változás. Ami itt összetörik, annak a helyén valami erősebb épül fel.' },
      { name: 'Nauthiz',  symbol: 'ᚾ', from: [11,13], to: [11,27], text: 'A szükség rúnája: korlátból születő erő, a hiány mint tanítómester. Megtanul beérni kevesebbel, és attól lesz találékony.' },
      { name: 'Isa',      symbol: 'ᛁ', from: [11,28], to: [12,12], text: 'A jég rúnája: mozdulatlanság, összpontosítás, kényszerű szünet. A várakozásban gyűjt erőt a következő lépéshez.' },
      { name: 'Jera',     symbol: 'ᛃ', from: [12,13], to: [12,27], text: 'Az évkör és az aratás rúnája: a türelem meghozza a gyümölcsét. Ciklusokban gondolkodik, és tudja, mikor kell vetni és mikor aratni.' },
      { name: 'Eihwaz',   symbol: 'ᛇ', from: [12,28], to: [1,12],  text: 'A tiszafa rúnája: állhatatosság, átalakulás, élet és halál tengelye. Mélyen gyökerezik, ezért a legnagyobb viharokat is kiállja.' },
      { name: 'Perthro',  symbol: 'ᛈ', from: [1,13],  to: [1,27],  text: 'A sorspohár rúnája: titok, véletlen, a sors játéka. Szereti a rejtélyeket, és jó érzéke van a kimondatlan dolgokhoz.' },
      { name: 'Algiz',    symbol: 'ᛉ', from: [1,28],  to: [2,12],  text: 'A jávorszarvas és a sás rúnája: védelem és kapcsolat a magasabb erőkkel. Óvja magát és a rábízottakat, ösztönösen érzi a veszélyt.' },
      { name: 'Sowilo',   symbol: 'ᛊ', from: [2,13],  to: [2,26],  text: 'A Nap rúnája: siker, életerő, világos irány. Célhoz vezet, mert látja, merre kell menni.' },
      { name: 'Tiwaz',    symbol: 'ᛏ', from: [2,27],  to: [3,13],  text: 'Tyr isten rúnája: igazság, becsület, áldozatkész bátorság. Vállalja a saját szavát akkor is, ha az árat kell fizetnie érte.' },
      { name: 'Berkano',  symbol: 'ᛒ', from: [3,14],  to: [3,29],  text: 'A nyírfa rúnája: újjászületés, gondoskodás, csendes növekedés. Óvó, tápláló minőség, amely új kezdeteket dajkál.' },
      { name: 'Ehwaz',    symbol: 'ᛖ', from: [3,30],  to: [4,13],  text: 'A ló rúnája: bizalom, együttműködés, közös haladás. Párban vagy csapatban a legerősebb, egyedül nehezebben boldogul.' },
      { name: 'Mannaz',   symbol: 'ᛗ', from: [4,14],  to: [4,28],  text: 'Az ember rúnája: közösség, önismeret, az emberi mérték. A másik emberben ismer önmagára, és abból tanul.' },
      { name: 'Laguz',    symbol: 'ᛚ', from: [4,29],  to: [5,13],  text: 'A víz rúnája: intuíció, áramlás, érzelmi mélység. Megérzésekre hallgat, és ott halad tovább, ahol enged az élet.' },
      { name: 'Ingwaz',   symbol: 'ᛜ', from: [5,14],  to: [5,28],  text: 'Ing isten és a mag rúnája: belső érlelés, felhalmozott potenciál. Sokáig készül csendben, aztán egyszerre robban ki belőle az eredmény.' },
      { name: 'Othala',   symbol: 'ᛟ', from: [5,29],  to: [6,13],  text: 'Az örökség és az otthon rúnája: gyökerek, család, hagyaték. Abból merít erőt, amit kapott, és tovább is akarja adni.' },
      { name: 'Dagaz',    symbol: 'ᛞ', from: [6,14],  to: [6,28],  text: 'A nappal rúnája: áttörés, fény, hirtelen felismerés. A sötétből a világosba lépés pillanata, egy új kezdet küszöbe.' }
    ]
  },

  /* ---------------------------------------------------------------
   * 9) Thai napszínek és Buddha-pózok
   * ------------------------------------------------------------- */
  thai: {
    intro: 'A thai hagyományban — hindu navagraha-alapon — a hét minden napjához szín, égitest és Buddha-szobor-póz tartozik, és a „milyen színű napon születtél" kérdés a hétköznapi kultúra része. A hívők a saját születésnapi Buddha-szobruknál adakoznak a templomokban, és a nap színének viselését szerencsehozónak tartják; a szerda itt is kettéválik, éjszakai fele Ráhué.',
    days: {
      0: { day: 'Vasárnap',  color: 'piros',              planet: 'Nap',        buddha: 'Álló, szemlélődő Buddha, aki hét napon át a megvilágosodás fáját nézi.',          text: 'Méltóságteljes, független és nagylelkű típus, akit tisztelnek a környezetében.' },
      1: { day: 'Hétfő',     color: 'sárga (krémszín)',   planet: 'Hold',       buddha: 'Békéltető Buddha, aki felemelt kézzel csillapítja a viszályt.',                    text: 'Nyugodt, kiegyensúlyozó, jó modorú ember, aki elsimítja a konfliktusokat.' },
      2: { day: 'Kedd',      color: 'rózsaszín',          planet: 'Mars',       buddha: 'Fekvő, a nirvánába térő Buddha.',                                                 text: 'Komoly, bátor és aktív alkat, aki nem riad vissza a nehéz feladatoktól.' },
      3: { day: 'Szerda',    color: 'zöld',               planet: 'Merkúr',     buddha: 'Alamizsnás-szilkés Buddha, aki adományt fogad.',                                  text: 'Kedves, udvarias és jól kommunikáló ember. (Az éjjeli szerdaiaké a szürkés-zöld/fekete szín és a Ráhu: erdei elvonulás Buddhája, akit majom és elefánt táplál.)' },
      4: { day: 'Csütörtök', color: 'narancs',            planet: 'Jupiter',    buddha: 'Meditáló, lótuszülésben ülő Buddha.',                                             text: 'Békés, bölcs és tanulni szerető típus, akit szívesen kérnek tanácsért.' },
      5: { day: 'Péntek',    color: 'világoskék',         planet: 'Vénusz',     buddha: 'Töprengő Buddha, mellkasán keresztezett karokkal.',                                text: 'Élénk, társasági és ambiciózus ember, aki szereti a szépséget és az örömöt.' },
      6: { day: 'Szombat',   color: 'lila',               planet: 'Szaturnusz', buddha: 'Trónoló Buddha, akit a nága-kígyó véd az esőtől.',                                 text: 'Higgadt, logikus és önálló alkat, aki a saját útját járja.' }
    }
  },

  /* ---------------------------------------------------------------
   * 10) Születési holdfázis-típusok (Dane Rudhyar nyomán)
   * ------------------------------------------------------------- */
  moonPhaseTypes: [
    { num: 1, name: 'Újhold típus',                from: 0,   to: 45,  text: 'Ösztönös kezdeményező, aki előre néz, nem hátra. Spontán és szubjektív: gyakran nem is tudja megmagyarázni, miért csinál valamit, csak érzi, hogy azt kell. Úttörő minőség, sok kezdéssel és kevés befejezéssel.' },
    { num: 2, name: 'Növekvő sarló típus',         from: 45,  to: 90,  text: 'Küzdő építkező, aki a múlt lehúzó erőivel szemben tör előre. Erős benne a vágy, hogy kilépjen a hozott mintákból és megteremtse a sajátját. A haladást gyakran a saját tehetetlenségével vívja ki.' },
    { num: 3, name: 'Első negyed típus',           from: 90,  to: 135, text: 'Cselekvő válságkezelő, aki döntéshelyzetekben van elemében. Struktúrákat épít, és nem fél a konfliktustól, ha az az ügyet szolgálja. Kevés az önvizsgálat, sok a lendület.' },
    { num: 4, name: 'Növekvő domború típus',       from: 135, to: 180, text: 'Tökéletesítő elemző, aki folyton a „miért?"-et kérdezi. Céltudatosan finomítja a rendszereket, és nehezen hagy annyiban valamit, ami félkész. Erős technikai és módszertani érzék.' },
    { num: 5, name: 'Telihold típus',              from: 180, to: 225, text: 'Tudatosító típus, aki a kapcsolatokban ismer önmagára. A szemben álló másik tükrében látja meg, ki is ő valójában, ezért a párkapcsolatai és a partnerségei mindig sorsdöntőek. Ez a legobjektívebb fázis.' },
    { num: 6, name: 'Fogyó domború típus',         from: 225, to: 270, text: 'Tanító és „magvető", aki a megszerzett tudást továbbadja. Természetes vágya, hogy amit megértett, azt üzenetté formálja mások számára. Jó pedagógus, előadó, közvetítő.' },
    { num: 7, name: 'Utolsó negyed típus',         from: 270, to: 315, text: 'Rendszerváltó, aki belülről kérdőjelezi meg a régi kereteket. Kívülről néha ellentmondásosnak látszik, mert már mást hisz, mint amit még csinál. A leépítés és az átértékelés a feladata.' },
    { num: 8, name: 'Balzsamos (öreg) hold típus', from: 315, to: 360, text: 'Lezáró-látnok, aki múlt és jövő között közvetít. Egy egész ciklus tapasztalatát hordozza, és gyakran érzi magát kissé kívülállónak. A dolga, hogy magvakat vessen a következő ciklus számára.' }
  ],

  /* ---------------------------------------------------------------
   * 11) Jávai weton
   * ------------------------------------------------------------- */
  weton: {
    intro: 'A weton a jávai kultúra születésnap-fogalma: nem pusztán a dátum, hanem a hétköznapi (7 napos) hét napja és a jávai piaci hét (pasaran, 5 napos ciklus) napjának együttese. Mivel az 5 és a 7 relatív prímek, a kombináció 35 naponta ismétlődik — ez a selapan, a 35 napos weton-ciklus, összesen 35 lehetséges wetonnal. Jáván ma is élő gyakorlat: a weton a személyiség, a szerencsés napok és a párkapcsolati kompatibilitás alapja, a dátumból pedig tisztán a Julián-napszám maradékaival számítható.',
    days: [
      { name: 'Minggu (vasárnap)',  neptu: 5 },
      { name: 'Senin (hétfő)',      neptu: 4 },
      { name: 'Selasa (kedd)',      neptu: 3 },
      { name: 'Rabu (szerda)',      neptu: 7 },
      { name: 'Kamis (csütörtök)',  neptu: 8 },
      { name: 'Jumat (péntek)',     neptu: 6 },
      { name: 'Sabtu (szombat)',    neptu: 9 }
    ],
    pasaran: [
      { name: 'Legi',   neptu: 5, text: 'A fehér szín és a kelet napja: nyitottság, tisztaság, jó kapcsolatteremtő készség.' },
      { name: 'Pahing', neptu: 9, text: 'A vörös szín és a dél napja: erős akarat, szenvedély, kitűnni vágyás.' },
      { name: 'Pon',    neptu: 7, text: 'A sárga szín és a nyugat napja: derű, társaságkedvelés, jó megjelenés.' },
      { name: 'Wage',   neptu: 4, text: 'A fekete szín és az észak napja: szilárdság, kitartás, néha makacsság.' },
      { name: 'Kliwon', neptu: 8, text: 'A kevert színek és a középpont napja: érzékenység, spirituális fogékonyság, karizma.' }
    ],
    combos: 'A születési weton neptu-értéke a hétnap és a pasaran-nap neptu-számának összege (például Rabu Pon = 7 + 7 = 14), így a lehetséges értékek 7-től (Selasa Wage) 18-ig (Sabtu Pahing) terjednek.',
    neptuText: {
      7:  'A legalacsonyabb neptu: szerény, visszafogott, csendes erővel dolgozó ember, aki nem hivalkodik az eredményeivel.',
      8:  'Türelmes és óvatos alkat, aki lassan hoz döntést, de amit elkezd, azt végig is viszi.',
      9:  'Barátságos, alkalmazkodó típus, akit szívesen látnak mindenhol, és könnyen köt új ismeretségeket.',
      10: 'Gyakorlatias, dolgos természet, aki a kézzelfogható eredményekben méri a saját értékét.',
      11: 'Élénk és kíváncsi ember, aki sokfelé nyit, és nehezen viseli az egyhangúságot.',
      12: 'Kiegyensúlyozott, megbízható alkat, aki jól működik közösségben és családban egyaránt.',
      13: 'Éles eszű, önálló gondolkodó, aki szereti a maga feje után menni, akár az árral szemben is.',
      14: 'Erős kisugárzású, szerencsésnek tartott weton: vezetői helyzetekbe kerül, és jól viseli a felelősséget.',
      15: 'Ambiciózus és céltudatos típus, aki magas mércét állít magának, néha a pihenés rovására.',
      16: 'Tekintélyt sugárzó, határozott ember, akire mások szívesen bízzák a döntést.',
      17: 'Nagy energiájú, szenvedélyes alkat, aki intenzíven él, és a hullámhegyeket-hullámvölgyeket is mélyen éli meg.',
      18: 'A legmagasabb neptu: kiemelkedő erő és tekintély, komoly felelősséggel — a hagyomány szerint nagy sorsú, de nem könnyű weton.'
    }
  },

  /* ---------------------------------------------------------------
   * 12) Védikus nakshatrák (27 holdház)
   * ------------------------------------------------------------- */
  nakshatra: {
    intro: 'A nakshatrák a sziderikus zodiákus 27 darab, egyenként 13°20\'-es szakaszai; a születési nakshatra az, amelyben a Hold állt a születés pillanatában. Mindegyikhez uralkodó bolygó (ez indítja a Vimshottari dasát), szimbólum és istenség tartozik, és a védikus hagyományban a Hold nakshatrája fontosabb, mint a nyugati értelemben vett Nap-jegy.',
    list: [
      { num: 1,  name: 'Ashwini',           from: 0,       to: 13.333,  ruler: 'Ketu',       symbol: 'lófej',                       text: 'A gyógyító gyorsaság háza: friss kezdetek, lendület, azonnali segítségnyújtás. Aki ide születik, gyorsan indul, és szeret elsőként a helyszínen lenni.' },
      { num: 2,  name: 'Bharani',           from: 13.333,  to: 26.667,  ruler: 'Vénusz',     symbol: 'anyaöl',                      text: 'A teherbírás és az átalakulás háza: a születés és a halál kapuja. Erős, néha nyers életenergia, amely kihordja, amit magára vállal.' },
      { num: 3,  name: 'Krittika',          from: 26.667,  to: 40,      ruler: 'Nap',        symbol: 'penge, láng',                 text: 'A tisztító tűz háza: élesség, kritikai érzék, a felesleges leválasztása. Nem kertel, és a szavaival is vág, ha kell.' },
      { num: 4,  name: 'Rohini',            from: 40,      to: 53.333,  ruler: 'Hold',       symbol: 'szekér',                      text: 'A növekedés és a szépség háza: termékenység, művészi érzék, vonzerő. A Hold kedvenc nakshatrája, gazdag érzelmi és anyagi világgal.' },
      { num: 5,  name: 'Mrigashira',        from: 53.333,  to: 66.667,  ruler: 'Mars',       symbol: 'szarvasfej',                  text: 'A keresés háza: kíváncsiság, kutatás, örök vándorlás a jobb után. Sokat kérdez, sokfelé néz, és nehezen áll meg egy helyben.' },
      { num: 6,  name: 'Ardra',             from: 66.667,  to: 80,      ruler: 'Rahu',       symbol: 'könnycsepp, vihar',           text: 'A vihar háza: intenzitás, krízis és az abból születő megújulás. Ami itt összetörik, az tisztább formában épül újjá.' },
      { num: 7,  name: 'Punarvasu',         from: 80,      to: 93.333,  ruler: 'Jupiter',    symbol: 'tegez, visszatérés',          text: 'A visszatérés háza: megújulás, optimizmus, az otthon újbóli megtalálása. Bármi történik, mindig van benne erő az újrakezdéshez.' },
      { num: 8,  name: 'Pushya',            from: 93.333,  to: 106.667, ruler: 'Szaturnusz', symbol: 'tehéntőgy, lótusz',           text: 'A táplálás háza: gondoskodás, védelem, a hagyomány legkedvezőbbnek tartott nakshatrája. Csendes, megbízható, tápláló minőség.' },
      { num: 9,  name: 'Ashlesha',          from: 106.667, to: 120,     ruler: 'Merkúr',     symbol: 'kígyó',                       text: 'A tekergőző kígyó háza: hipnotikus vonzerő, pszichológiai mélység, stratégia. Átlát az embereken, és ezt jóra és rosszra is használhatja.' },
      { num: 10, name: 'Magha',             from: 120,     to: 133.333, ruler: 'Ketu',       symbol: 'trónterem',                   text: 'Az ősök és a méltóság háza: tekintély, hagyomány, örökölt rang. Erősen kötődik a felmenőihez, és tisztelettel viseli a nevét.' },
      { num: 11, name: 'Purva Phalguni',    from: 133.333, to: 146.667, ruler: 'Vénusz',     symbol: 'függőágy',                    text: 'Az élvezet háza: kreativitás, románc, pihenés és ünneplés. Tudja, hogyan kell élvezni az életet, és ezt másokkal is megosztja.' },
      { num: 12, name: 'Uttara Phalguni',   from: 146.667, to: 160,     ruler: 'Nap',        symbol: 'ágy, szerződés',              text: 'A szövetségek háza: nagylelkűség, megbízható partnerség, hosszú távú kötések. A barátságban és a házasságban mutatja meg magát legjobban.' },
      { num: 13, name: 'Hasta',             from: 160,     to: 173.333, ruler: 'Hold',       symbol: 'kéz',                         text: 'A kéz háza: ügyesség, kézművesség, gyógyító érintés. Amihez hozzáér, azt formálni tudja — a részletek mestere.' },
      { num: 14, name: 'Chitra',            from: 173.333, to: 186.667, ruler: 'Mars',       symbol: 'ragyogó ékkő',                text: 'A ragyogás háza: design, építés, karizma és látványos forma. Szereti a szépet, és tud is szépet alkotni.' },
      { num: 15, name: 'Swati',             from: 186.667, to: 200,     ruler: 'Rahu',       symbol: 'szélben hajló hajtás',        text: 'A független hajtás háza: rugalmasság, diplomácia, önálló mozgástér. Meghajlik a szélben, de nem törik el.' },
      { num: 16, name: 'Vishakha',          from: 200,     to: 213.333, ruler: 'Jupiter',    symbol: 'diadalív',                    text: 'A cél háza: elszántság, ambíció, a győzelemig kitartó összpontosítás. Amit kitűz maga elé, azt hosszú távon is hajszolja.' },
      { num: 17, name: 'Anuradha',          from: 213.333, to: 226.667, ruler: 'Szaturnusz', symbol: 'lótusz',                      text: 'A barátság háza: odaadás, szervezőkészség, közösségépítés. Idegen környezetben is gyorsan talál társakat.' },
      { num: 18, name: 'Jyeshtha',          from: 226.667, to: 240,     ruler: 'Merkúr',     symbol: 'amulett, ernyő',              text: 'A szeniorátus háza: védelmező erő, tapasztalat, felelősség. Az „idősebb testvér" minősége, aki óv, de irányítani is akar.' },
      { num: 19, name: 'Mula',              from: 240,     to: 253.333, ruler: 'Ketu',       symbol: 'gyökérköteg',                 text: 'A gyökér háza: radikalitás, a dolgok gyökeréig hatolás, kutató szenvedély. Nem elégszik meg a felszínnel, ki akarja ásni az okot.' },
      { num: 20, name: 'Purva Ashadha',     from: 253.333, to: 266.667, ruler: 'Vénusz',     symbol: 'legyező, víz',                text: 'A legyőzhetetlenség háza: lelkesítő erő, meggyőző fellépés, magabiztosság. Magával ragad másokat, mert maga sem kételkedik.' },
      { num: 21, name: 'Uttara Ashadha',    from: 266.667, to: 280,     ruler: 'Nap',        symbol: 'elefántagyar',                text: 'A végső győzelem háza: kitartás, elvhűség, tartós siker. Lassan, de visszavonhatatlanul ér célba.' },
      { num: 22, name: 'Shravana',          from: 280,     to: 293.333, ruler: 'Hold',       symbol: 'fül, három lábnyom',          text: 'A hallgatás háza: tanulás, figyelem, a hagyomány továbbadása. A jó hallgatás képessége teszi bölccsé.' },
      { num: 23, name: 'Dhanishta',         from: 293.333, to: 306.667, ruler: 'Mars',       symbol: 'dob',                         text: 'A ritmus háza: zene, bőség, hírnév és csapatmunka. Megérzi a közös ütemet, és másokat is összehangol.' },
      { num: 24, name: 'Shatabhisha',       from: 306.667, to: 320,     ruler: 'Rahu',       symbol: 'üres kör, száz gyógyító',     text: 'A gyógyítás és a titkok háza: kutató elme, elvonulás, alternatív utak. Egyedül dolgozik a legjobban, és szereti a rejtélyeket.' },
      { num: 25, name: 'Purva Bhadrapada',  from: 320,     to: 333.333, ruler: 'Jupiter',    symbol: 'kétarcú ember',               text: 'Az intenzív átalakulás háza: idealizmus, szélsőségek, spirituális tűz. Két világ között él, és nehezen éri be a hétköznapival.' },
      { num: 26, name: 'Uttara Bhadrapada', from: 333.333, to: 346.667, ruler: 'Szaturnusz', symbol: 'mélységi kígyó',              text: 'A mélység háza: nyugalom, bölcsesség, a felszín alatti erők ismerete. Higgadtan viseli azt is, ami másokat megrendítene.' },
      { num: 27, name: 'Revati',            from: 346.667, to: 360,     ruler: 'Merkúr',     symbol: 'hal, dob',                    text: 'A lezárás háza: útmutatás, együttérzés, biztonságos hazatérés. Az utolsó nakshatra: befejez, elkísér, és útra bocsát.' }
    ],
    rashiIntro: 'A védikus asztrológia a sziderikus zodiákust használja, amely a valódi csillagképekhez rögzített, míg a nyugati tropikus rendszer a tavaszponthoz — a kettő különbsége az ayanamsa, a legelterjedtebb Lahiri-ayanamsa jelenleg kb. 24° (évente ~50,3 ívmásodperccel nő). Ezért a sziderikus Hold-jegy (rashi) általában egy jeggyel „vissza" van a nyugati pozícióhoz képest, és a Jyotishban éppen ez a Hold-jegy és annak nakshatrája az elsődleges mutató, nem a Nap-jegy.'
  },

  /* ---------------------------------------------------------------
   * 13) Arab holdházak — 28 manázil al-kamar
   * ------------------------------------------------------------- */
  manazil: [
    { num: 1,  name: 'As-Saratán',            meaning: 'a két jel (kosszarvak)',   from: 0,       to: 12.857,  text: 'Az indulás háza: utazás, új vállalkozás, gyógyítás és a jó kezdet ereje.' },
    { num: 2,  name: 'Al-Butajn',             meaning: 'a kis has',                from: 12.857,  to: 25.714,  text: 'A rejtett dolgok feltárásának háza: titkok napvilágra hozása, a harag oldása.' },
    { num: 3,  name: 'Ath-Thurajjá',          meaning: 'a Fiastyúk',               from: 25.714,  to: 38.571,  text: 'A bőség háza: hajózás, kereskedelem, alkímia és a gyarapodás ígérete.' },
    { num: 4,  name: 'Ad-Dabarán',            meaning: 'a követő (Aldebaran)',     from: 38.571,  to: 51.429,  text: 'Az ellentétek háza: viszály és bosszú témái — a hagyomány óvatosságra int.' },
    { num: 5,  name: 'Al-Haka',               meaning: 'a fehér folt',             from: 51.429,  to: 64.286,  text: 'A tanulás háza: jó egészség, jóindulat, ismeretszerzés és tanítás.' },
    { num: 6,  name: 'Al-Hana',               meaning: 'a bélyeg, a hajlat',       from: 64.286,  to: 77.143,  text: 'A szövetség háza: vadászat, ostrom, szerződések és társulások kötése.' },
    { num: 7,  name: 'Adz-Dzirá',             meaning: 'a kar',                    from: 77.143,  to: 90,      text: 'A nyereség háza: barátság, jó termés és a közös munka gyümölcse.' },
    { num: 8,  name: 'An-Nathra',             meaning: 'az orrnyereg, a jászol',   from: 90,      to: 102.857, text: 'A szeretet háza: barátság, vendéglátás és az utazók oltalma.' },
    { num: 9,  name: 'At-Tarf',               meaning: 'a tekintet',               from: 102.857, to: 115.714, text: 'A védekezés háza: ártalom elhárítása, a rossz szándék visszafordítása.' },
    { num: 10, name: 'Al-Dzsabha',            meaning: 'a homlok',                 from: 115.714, to: 128.571, text: 'Az építés háza: házak emelése, szerelem és a jóakarat megnyerése.' },
    { num: 11, name: 'Az-Zubra',              meaning: 'a sörény',                 from: 128.571, to: 141.429, text: 'A kereskedelem háza: üzlet, haszon és a foglyok szabadulása.' },
    { num: 12, name: 'Asz-Szarfa',            meaning: 'a fordulat',               from: 141.429, to: 154.286, text: 'A változás háza: termés, gyógyulás és a sors irányának megfordulása.' },
    { num: 13, name: 'Al-Avvá',               meaning: 'az ugató',                 from: 154.286, to: 167.143, text: 'A jóindulat háza: utazás, aratás és a jó szándék megerősítése.' },
    { num: 14, name: 'Asz-Szimák',            meaning: 'a magasan álló (Spica)',   from: 167.143, to: 180,     text: 'A házastársi szeretet háza: gyógynövények, hűség és a közös élet öröme.' },
    { num: 15, name: 'Al-Ghafr',              meaning: 'a fátyol',                 from: 180,     to: 192.857, text: 'A rejtett kincs háza: barátság, keresés és a takart dolgok megtalálása.' },
    { num: 16, name: 'Az-Zubáná',             meaning: 'a skorpió ollói',          from: 192.857, to: 205.714, text: 'Az akadályok háza: a kereskedelem nehézségei — óvatosságra intő szakasz.' },
    { num: 17, name: 'Al-Iklíl',              meaning: 'a korona',                 from: 205.714, to: 218.571, text: 'A hűség háza: tartós épületek, megbízható ígéretek és állandóság.' },
    { num: 18, name: 'Al-Kalb',               meaning: 'a szív (Antares)',         from: 218.571, to: 231.429, text: 'A védelem háza: összeesküvések elhárítása, a rejtett ellenség leleplezése.' },
    { num: 19, name: 'As-Saula',              meaning: 'a fullánk',                from: 231.429, to: 244.286, text: 'Az erő háza: ostrom, foglyok, kemény akarat és harci elszántság.' },
    { num: 20, name: 'An-Naájm',              meaning: 'a struccok',               from: 244.286, to: 257.143, text: 'A szelídítés háza: állatok megzabolázása és a gyors, sikeres utazás.' },
    { num: 21, name: 'Al-Balda',              meaning: 'a város, az üresség',      from: 257.143, to: 270,     text: 'A lezárás háza: termés, építkezés és a köteléktől való elválás.' },
    { num: 22, name: 'Szad adz-Dzábih',       meaning: 'az áldozó szerencséje',    from: 270,     to: 282.857, text: 'A szabadulás háza: gyógyulás, menekülés és a béklyók leoldása.' },
    { num: 23, name: 'Szad Bula',             meaning: 'a nyelő szerencséje',      from: 282.857, to: 295.714, text: 'A vegyes sors háza: gyógyulás és házasság, egyszerre áldás és próbatétel.' },
    { num: 24, name: 'Szad asz-Szuúd',        meaning: 'a szerencsék szerencséje', from: 295.714, to: 308.571, text: 'A legkedvezőbb ház: siker, áldás és minden vállalkozás jó kimenetele.' },
    { num: 25, name: 'Szad al-Ahbija',        meaning: 'a sátrak szerencséje',     from: 308.571, to: 321.429, text: 'A rejtőzés háza: ostrom, bosszú és a védelem kérdései kerülnek előtérbe.' },
    { num: 26, name: 'Al-Fargh al-Mukaddam',  meaning: 'a korsó első kiöntője',    from: 321.429, to: 334.286, text: 'Az egyesülés háza: szerelem, szövetség és a jóakarat megnyerése.' },
    { num: 27, name: 'Al-Fargh al-Muahhar',   meaning: 'a korsó hátsó kiöntője',   from: 334.286, to: 347.143, text: 'A nyereség háza: bő termés, gyógyítás és a munka jutalma.' },
    { num: 28, name: 'Batn al-Hút (Ar-Risá)', meaning: 'a hal hasa, a kötél',      from: 347.143, to: 360,     text: 'A betakarítás háza: termés, kereskedelem és a házasság megkötése.' }
  ],

  /* ---------------------------------------------------------------
   * 14) Születéskövek, születési virágok, hónapszínek
   * ------------------------------------------------------------- */
  birthstones: {
    1:  { stone: 'Gránát',                     alt: 'gránát (hagyományos és brit lista is)',        flower: 'Szegfű (és hóvirág)',                     color: 'sötétvörös',            text: 'A gránát a védelem köve, a szegfű az elbűvölés és a szeretet virága — a hóvirág pedig a reményé.' },
    2:  { stone: 'Ametiszt',                   alt: 'ametiszt',                                     flower: 'Ibolya (és kankalin)',                    color: 'lila',                  text: 'Az ametiszt a józanság és a tiszta gondolkodás köve, az ibolya a szerénységé és a hűségé.' },
    3:  { stone: 'Akvamarin',                  alt: 'vérjáspis (heliotróp)',                        flower: 'Nárcisz',                                 color: 'világoskék',            text: 'Az akvamarin a nyugalom és a tiszta beszéd köve, a nárcisz az újrakezdés és az újjászületés virága.' },
    4:  { stone: 'Gyémánt',                    alt: 'hegyikristály',                                flower: 'Százszorszép (és szagosbükköny)',         color: 'fehér, átlátszó',       text: 'A gyémánt az erő és a törhetetlenség köve, a százszorszép az ártatlanság és a tiszta szeretet virága.' },
    5:  { stone: 'Smaragd',                    alt: 'krizopráz',                                    flower: 'Gyöngyvirág (és galagonya)',              color: 'zöld',                  text: 'A smaragd az újjászületés és a hűség köve, a gyöngyvirág a visszatérő boldogság hírnöke.' },
    6:  { stone: 'Gyöngy, holdkő, alexandrit', alt: 'gyöngy, holdkő',                               flower: 'Rózsa (és lonc)',                         color: 'krém, gyöngyfehér',     text: 'A gyöngy a tisztaság köve, a rózsa a szerelemé — színenként más-más árnyalatú üzenettel.' },
    7:  { stone: 'Rubin',                      alt: 'karneol',                                      flower: 'Szarkaláb (és tavirózsa)',                color: 'vörös',                 text: 'A rubin a szenvedély és az életerő köve, a szarkaláb a könnyed vidámságé és a nyitott szívé.' },
    8:  { stone: 'Peridot, spinell',           alt: 'szardonix',                                    flower: 'Kardvirág (és pipacs)',                   color: 'világoszöld',           text: 'A peridot a szerencse köve, a kardvirág a jellemerő és a becsület virága.' },
    9:  { stone: 'Zafír',                      alt: 'lápisz lazuli',                                flower: 'Őszirózsa (és hajnalka)',                 color: 'sötétkék',              text: 'A zafír a bölcsesség és a hűség köve, az őszirózsa a hit és a szeretet virága.' },
    10: { stone: 'Opál, turmalin',             alt: 'opál',                                         flower: 'Büdöske / körömvirág (és kozmea)',        color: 'rózsaszín, sokszínű',   text: 'Az opál a remény köve, a körömvirág a szenvedély, a kreativitás és a napfény melegének virága.' },
    11: { stone: 'Topáz, citrin',              alt: 'topáz',                                        flower: 'Krizantém',                               color: 'sárga, arany',          text: 'A topáz a szeretet és a barátság köve, a krizantém a hűségé és az örömé — Ázsiában a hosszú életé.' },
    12: { stone: 'Türkiz, cirkon, tanzanit',   alt: 'türkiz, lápisz lazuli',                        flower: 'Nárcisz (papírfehér), magyal, mikulásvirág', color: 'kék, türkiz',        text: 'A türkiz a jólét és az oltalom köve, a magyal a védelem és az ünnep zöldje.' }
  },

  /* ---------------------------------------------------------------
   * 15) Generációk
   * ------------------------------------------------------------- */
  generations: [
    { name: 'Legnagyobb generáció (GI)',   from: 1901, to: 1927, text: 'A két világháború és a nagy gazdasági válság között felnőtt nemzedék, a II. világháború felnőtt hősei. A Strauss–Howe-elmélet „Hős" archetípusa: közösségi, intézményépítő, áldozatvállaló.' },
    { name: 'Csendes / veterán generáció', from: 1928, to: 1945, text: 'Válság- és háborús gyerekkor után csendben, alkalmazkodva építkező nemzedék. Az elmélet „Művész" archetípusa: érzékeny, konszenzuskereső, a szabályokat tisztelő.' },
    { name: 'Baby boomer generáció',       from: 1946, to: 1964, text: 'A háború utáni születési csúcs nemzedéke, amely a jólét és a nagy társadalmi átalakulások korában nőtt fel. Az elmélet „Próféta" archetípusa: idealista, értékvezérelt, a saját igazát kereső.' },
    { name: 'X generáció',                 from: 1965, to: 1980, text: 'A „kulcsos gyerekek" és az MTV nemzedéke, amely az analóg és a digitális világ határán nőtt fel. Az elmélet „Nomád" archetípusa: pragmatikus, önállóságra szoktatott, egészséges szkepszissel.' },
    { name: 'Y / millenniál generáció',    from: 1981, to: 1996, text: 'Az ezredfordulón felnőtt, internet-pionír nemzedék, amelyet a 2008-as válság és a globális mobilitás formált. Az elmélet szerint „Hős" archetípus: közösségi, együttműködő, nagy elvárásokkal indult.' },
    { name: 'Z generáció',                 from: 1997, to: 2012, text: 'Az első nemzedék, amely már okostelefonnal és közösségi médiával nőtt fel — valódi „digitális bennszülöttek". Erős náluk az önkifejezés és a mentális egészség témája, miközben a pandémia is meghatározó élményük.' },
    { name: 'Alfa generáció',              from: 2013, to: 2024, text: 'A címke Mark McCrindle-től származik, és a teljesen érintőképernyős, algoritmusok által formált gyerekkort jelöli. A határai képlékenyek: forrásonként 2010 és 2013 között kezdik.' },
    { name: 'Béta generáció',              from: 2025, to: 2039, text: 'Szintén McCrindle-féle marketingcímke a 2025-től születettekre, akiknek a gyerekkorát a mesterséges intelligencia mindennapos jelenléte szervezi. Jóslat inkább, mint tapasztalat: az évhatárok és a jellemzés is előzetes.' }
  ],

  /* ---------------------------------------------------------------
   * 16) Human Design típusok — tájékoztató jelleggel
   * ------------------------------------------------------------- */
  humanDesign: {
    intro: 'A Human Design modern szinkretikus rendszer, amelyet Ra Uru Hu (Alan Robert Krakower) alkotott meg 1987-ben: a nyugati asztrológiát, az I Csing 64 hexagramját, a kabbalista életfát és a csakrarendszert gyúrja össze — tudományos alapja nincs, de a 2020-as évek egyik legnépszerűbb önismereti trendje. Az alábbi típusleírások csak tájékoztató jellegűek: a pontos típus meghatározásához születési dátum, pontos idő és hely, valamint külön efemerisz-számítás kell — a születés pillanatára és a kb. 88 nappal korábbi „design" pozíciókra is.',
    types: [
      { name: 'Manifesztor',              ratio: 'kb. 9%',  strategy: 'Tájékoztass, majd cselekedj', text: 'A rendszer szerint az egyetlen valóban kezdeményező típus: úttörő, független, aki magától indít el dolgokat. Az ellenállást azzal kerüli el, ha előre szól a környezetének arról, amit tenni készül.' },
      { name: 'Generátor',                ratio: 'kb. 37%', strategy: 'Várj a válaszra',             text: 'A rendszer „építője": kitartó életerő, amely akkor működik jól, ha olyan munkát végez, ami valóban vonzza. Nem kezdeményez a semmiből, hanem a felmerülő lehetőségekre reagál — és ha jól választ, kimeríthetetlen energiával dolgozik.' },
      { name: 'Manifesztáló Generátor',   ratio: 'kb. 33%', strategy: 'Várj a válaszra, majd tájékoztass', text: 'Többpályás, gyors, multipotenciál típus, aki egyszerre több irányban is halad. A rendszer szerint természetes számára, hogy kihagy lépéseket és menet közben korrigál.' },
      { name: 'Projektor',                ratio: 'kb. 20%', strategy: 'Várj a meghívásra',           text: 'Irányító-látó típus, aki mások energiáit tudja bölcsen vezetni és rendszerbe szervezni. Nincs saját, folyamatos munkaenergiája, ezért a rendszer szerint a felismerés és a meghívás a kulcs számára.' },
      { name: 'Reflektor',                ratio: 'kb. 1%',  strategy: 'Várj egy teljes holdciklust (kb. 28 nap)', text: 'A legritkább típus: tükör, aki a környezete állapotát mutatja vissza. Rendkívül érzékeny arra, hogy kik veszik körül és hol tartózkodik, ezért a nagy döntéseknél a rendszer egy teljes holdciklusnyi várakozást javasol.' }
    ]
  }
};
