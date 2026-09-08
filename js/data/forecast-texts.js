/*
 * forecast-texts.js — a napi/heti előrejelzés konkrét olvasatai
 * tranzit-bolygó × születési pont × fényszögminőség (soft = trigon/szextil,
 * hard = kvadrát/szembenállás, conj = együttállás). Robert Hand (Planets in
 * Transit) kerete: a tranzit bolygó a kiváltó, a natális pont az érintett
 * életterület, a fényszög a mód. Saját megfogalmazás, nem idézet — docs/33.
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};
window.HDATA.forecast = window.HDATA.forecast || {};

window.HDATA.forecast.pair = {

  /* ---------------- HOLD (néhány órás hullám) ---------------- */
  moon: {
    sun: {
      soft: 'Pár órára összhangba kerül, amit érzel és amit akarsz: könnyebb dönteni, kérni, megmutatni magad. Jó időszak a fontos beszélgetésre és arra, hogy elindíts valamit, amit halogattál.',
      hard: 'A kedved és a szándékod ma keresztezi egymást: amit eltökéltél, azt most nincs kedved csinálni, vagy fordítva. Ne ekkor kérj szívességet és ne ekkor vitatkozz — a hullám órákon belül elvonul.',
      conj: 'A havi „személyes újholdad": a Hold a Napodon jár. Belül csendesebb, kifelé kevésbé látható óra — vess el egy szándékot, de a nagy bejelentést halaszd holnapra.'
    },
    moon: {
      soft: 'Otthon vagy a saját bőrödben: a hangulatod stabil, a megérzéseid jók. Jó pár óra a családi ügyekre, a gondoskodásra, a pihenésre.',
      hard: 'Érzékenyebb vagy a szokásosnál, könnyebben veszed magadra, amit mondanak. Kevesebb ember, több egyedüllét — és ne ekkor dönts érzelmi ügyben.',
      conj: 'A Hold visszatért a születési helyére: a havi érzelmi ciklusod nullpontja. Figyeld, mire vágysz most igazán — ez a hónap érzelmi témája.'
    },
    mercury: {
      soft: 'Gördülékeny beszélgetések, jó szófordulatok, gyorsan jövő válaszok: írd meg most az üzenetet, intézd el a telefont, tanulj.',
      hard: 'Félreértésre hajlamos órák: amit mondasz, mást hallanak, és a gondolataid is csapongnak. Kérdezz vissza, mielőtt reagálsz; a fontos e-mailt írd meg, de küldd el később.',
      conj: 'Az érzés és a gondolat egymásra talál: most ki tudod mondani, amit eddig csak éreztél. Jó óra naplóra, őszinte beszélgetésre.'
    },
    venus: {
      soft: 'Kellemes, engedékeny órák: könnyebb közeledni, megbocsátani, élvezni az apró jót. Jó randevúra, találkozóra, vásárlásra, szépítkezésre.',
      hard: 'Több figyelmet, kényeztetést vársz, mint amennyi jön, és ez csalódottságot vagy duzzogást hoz. Ne ekkor mérd le a kapcsolatot — és ne ekkor költs vigasztalásból.',
      conj: 'Ellágyuló, ragaszkodó hangulat: erősebb a vágy a közelségre és a kellemesre. Jó időszak kibékülésre, gyengédségre; a túlevés-túlköltés kísértését tartsd szemmel.'
    },
    mars: {
      soft: 'Energikus, bátor órák: amit el kell intézni, most könnyen megy, a sport és a fizikai munka jólesik. Jó időpont nemet mondani vagy kiállni magadért.',
      hard: 'Ingerlékeny, kapkodó órák: hamar felcsattansz, és a másik is. Vezess óvatosan, ne ekkor vitázz a családdal — a mérged nem a helyzetről szól, órákon belül elmúlik.',
      conj: 'Felforr az érzelem: erős késztetés cselekedni, kimondani, lezárni. Használd testmozgásra vagy egy régóta halasztott bátor lépésre, ne veszekedésre.'
    },
    jupiter: {
      soft: 'Derűs, nagyvonalú hangulat, könnyebb bizalom: jó pár óra kérni, tervezni, emberekkel lenni, ajánlatot tenni. A jókedv ragadós.',
      hard: 'Túlzásra csábító órák: nagyot mondasz, többet vállalsz, többet költesz, mint kellene. Élvezd a lendületet, de az ígéretet és a rendelést gondold át holnap.',
      conj: 'Tágas, bizakodó órák: a hangulatod „minden lehetséges"-re áll. Jó időpont bátorító beszélgetésre és arra, hogy elhidd: megérdemled a jót.'
    },
    saturn: {
      soft: 'Higgadt, összeszedett órák: jól esik rendet rakni, tervezni, kötelességet teljesíteni. Az érzelmek nem zavarnak, a döntés józan.',
      hard: 'Nyomott, magányos hangulat pár órára: minden nehezebbnek látszik, mint amilyen. Ne ekkor mérd fel az életed — ez a Hold és a Szaturnuszod találkozása, nem a valóság. Egy konkrét elvégzett feladat segít.',
      conj: 'Komoly, befelé forduló órák: felelősség, kötelesség, esetleg régi hiány érzése. Jó a magányos, alapos munkára; a társaság most fáraszt.'
    },
    uranus: {
      soft: 'Friss, meglepetésre nyitott hangulat: könnyebben törsz ki a rutinból, jó ötletek jönnek. Csinálj valamit másképp, mint szoktad.',
      hard: 'Nyugtalan, ideges órák: hirtelen hangulatváltás, váratlan hír, terv-borulás. Ne dönts kapkodva; ami most sürgősnek tűnik, holnapra nem az.',
      conj: 'Elektromos érzés: valami váratlan mozdítja meg a napot, és te is másképp reagálsz, mint szoktál. Hagyj teret a spontaneitásnak, de ne szakíts semmivel ebben az órában.'
    },
    neptune: {
      soft: 'Álmodozó, együttérző órák: a képzelet, a zene, a csend jót tesz. Jó időpont pihenésre, művészetre, valaki csendes meghallgatására.',
      hard: 'Ködös, szétfolyó órák: könnyű félreérteni, elfelejteni, becsapódni, vagy önsajnálatba csúszni. Ne írj alá semmit, ne ekkor higgy a rossz előérzetnek — aludj rá.',
      conj: 'Vékonyak a határaid: mások hangulatát a sajátodként éled meg. Vonulj el kicsit; az intuíciód éles, de a tényeket ellenőrizd.'
    },
    pluto: {
      soft: 'Mélyre látó, összeszedett órák: ki tudod mondani, ami eddig kimondhatatlan volt, és el tudsz engedni valamit. Jó időpont őszinte, terápiás beszélgetésre.',
      hard: 'Intenzív, kontrollálni akaró hangulat: féltékenység, gyanakvás, hatalmi harc felszínre jöhet — otthon vagy bent. Ne fenyegess és ne szakíts ebben az órában; ami feljött, azt nézd meg holnap.',
      conj: 'Erős, sűrű érzelmi óra: valami régi és mély mozdul meg. Adj neki teret egyedül; kényszerítő döntést ne hozz.'
    },
    northNode: {
      soft: 'A napod egy pillanatra „egy irányba mutat": olyan emberrel, hírrel találkozol, ami a hosszú távú utad felé lök. Vedd észre, ne hessegesd el.',
      hard: 'A megszokott és az új húz kétfelé: a kényelmes visszatérne, az irány előre hív. Ne dönts most, de jegyezd meg, mi volt a kísértés.',
      conj: 'Sorsszerűnek érzett találkozás vagy felismerés jöhet — apró, de emlékezetes. Figyelj arra, ki bukkan fel ma.'
    },
    asc: {
      soft: 'Jó a fellépésed, könnyen kapcsolódsz, az emberek szimpatikusnak látnak. Jó órák bemutatkozásra, interjúra, első találkozóra.',
      hard: 'A hangulatod az arcodra van írva, és nem a legjobb: ingerültnek vagy sértődöttnek látnak, pedig csak érzékeny vagy. Kevesebb nyilvános szereplés, több csend.',
      conj: 'A Hold felkel a képletedben: rólad szól a nap, az érzéseid azonnal látszanak. Új holdhónapod kezdete — indíts valamit, aminek nőnie kell.'
    },
    mc: {
      soft: 'A munkahelyi légkör kedvez neked: észreveszik, amit csinálsz, könnyebben kapsz támogatást. Jó időpont a főnökkel beszélni vagy megmutatni egy eredményt.',
      hard: 'Otthon és munka húz kétfelé, vagy nyilvánosan érint érzelmileg valami. Ne vidd be a magánéletet a munkába ezekben az órákban, és ne reagálj a nyilvánosság előtt.',
      conj: 'A Hold a képleted tetején: láthatóvá válsz, az érzelmeid a nyilvános szereped részévé válnak. Jó a közönség előtti, gondoskodó szerepre; kockázatos a kifakadásra.'
    },
    dsc: {
      soft: 'A másik ember ma közelebb kerül: könnyű egyeztetni, kibékülni, együttműködni. Jó órák a párral, az ügyféllel, a tárgyalófélre figyelni.',
      hard: 'A társ vagy egy fontos ember hangulata a tiédbe rándít: könnyű egymásra vetíteni. Hallgasd végig, mielőtt megsértődsz.',
      conj: 'A Hold a Deszcendenseden: a másik érzése lesz a főszereplő. Jó időpont találkozásra, kérésre, a kapcsolatról beszélni — ha te is kimondod, mit érzel.'
    },
    ic: {
      soft: 'Otthonos, gyökeres órák: jólesik hazamenni, főzni, a családdal lenni, rendezni a lakást. A biztonságérzeted erős.',
      hard: 'Családi vagy lakásügyi feszültség: valaki a régi mintát hozza elő, vagy a magánélet szorít a munka mellett. Ne ekkor rendezd le a régi sérelmet.',
      conj: 'A Hold a képleted alján: a legbelsőbb hangulatod ideje. Vonulj vissza, aludj, pihenj — a kifelé fordulás ma nem hoz sokat.'
    }
  },

  /* ---------------- NAP (néhány napos hangsúly) ---------------- */
  sun: {
    sun: {
      soft: 'Négy hónapos ciklusod jó pontja: az életerőd és az önbizalmad magasan jár, a céljaid tisztábbak. Használd ki a napokat egy fontos lépésre.',
      hard: 'A születésnapodtól számolt negyed- vagy félév: mérlegelő, néha fáradtabb napok. Ami nem működik az idei tervekben, most látszik — igazíts, ne add fel.',
      conj: 'Boldog születésnapot: a szolár éved kezdete, a Nap visszatért a helyére. Ezekben a napokban tűzd ki az év szándékát — az „Éves égi képed" szekció erről szól.'
    },
    moon: {
      soft: 'Az akarat és az érzés egy irányba tart: nyugodtabb, biztosabb napok, jó otthoni és családi ügyekre, gondoskodásra, egészségre.',
      hard: 'A célok és a szükségletek ütköznek: amit tenned kell, az fáraszt, amire vágysz, arra nincs idő. Aludj többet, és kérj segítséget — ez pár nap.',
      conj: 'Az évnek az a szakasza, amikor a Nap az érzelmi alapodat világítja meg: figyelj a testre, az otthonra, az anyai-gondoskodó kapcsolatokra. Új kezdet a magánéletben.'
    },
    mercury: {
      soft: 'Tiszta fej, jó érvek, gördülékeny ügyintézés: intézd el a hivatalos dolgokat, tanulj, tárgyalj, adj le beadványt.',
      hard: 'Túlgondolás és félreértés napjai: könnyű elszólni magad, elfelejteni, rossz irányba küldeni valamit. Ellenőrizz mindent kétszer, és ne ekkor vállalj vitát.',
      conj: 'A Nap a Merkúrodon: a gondolkodásod és a szavaid kerülnek fénybe — mondd ki, írd le, add elő. Jó napok tanulásra, előadásra, fontos levélre.'
    },
    venus: {
      soft: 'Kellemes, vonzó napok: könnyebb a szeretet, a társasági élet, a pénzügyi könnyebbség. Randevú, ünneplés, szépítés — most jó.',
      hard: 'Az önérzet és a kapcsolat ütközik: úgy érzed, nem becsülnek eléggé, vagy a pénz miatt feszülsz. Ne ekkor kérj számon; adj magadnak valamit.',
      conj: 'A Nap a Vénuszodon: az évnek az a hete, amikor a vonzerőd, a szeretetigényed és az értékrended kerül fénybe. Jó időpont a kapcsolat felfrissítésére és önmagad megbecsülésére.'
    },
    mars: {
      soft: 'Tetterős, bátor napok: a fizikai munka, a sport, az önérvényesítés könnyen megy. Indítsd el, amihez bátorság kell.',
      hard: 'Türelmetlen, súrlódó napok: konfliktus a tekintéllyel, sietség, baleseti hajlam. Ne erőltess semmit; a mozgás levezeti a feszültséget.',
      conj: 'A Nap a Marsodon: az akaratod és a harci kedved az év csúcsán. Jó indításra, versenyre, kiállásra — a sértettséget ne hagyd eluralkodni.'
    },
    jupiter: {
      soft: 'Szerencsés, bizakodó napok: kapsz segítséget, nyílik ajtó, jól esik nagyot tervezni. Jó időpont kérni, pályázni, utazást szervezni.',
      hard: 'Túlvállalás és önhittség veszélye: több ígéret, több költés, mint amit bírsz. A lendület jó — a mérték a tanulság.',
      conj: 'A Nap a Jupitereden: az év optimista hete, amikor a lehetőségeid és a bizalmad fénybe kerül. Vess el egy nagy tervet; a részleteket később.'
    },
    saturn: {
      soft: 'Fegyelmezett, eredményes napok: a kitartó munka most elismerést hoz, a felelősség nem nyomaszt. Jó időpont hosszú távú kötelezettséget vállalni.',
      hard: 'Nehéz, próbáló napok: akadály, késlekedés, a tekintéllyel való ütközés, fáradtság. Ne kezdj újat; fejezd be, amit kell — ez pár nap.',
      conj: 'A Nap a Szaturnuszodon: az év számvetése — mit építettél fel, mi a felelősséged. Komoly, de nem rossz napok: a tiszta döntések ideje.'
    },
    uranus: {
      soft: 'Friss ötletek, hirtelen megoldás, találkozás szokatlan emberrel: engedj a spontaneitásnak, ma jó irányba visz.',
      hard: 'Váratlan fordulat, terv-borulás, nyugtalanság: valami kibillent a megszokottból. Ne reagálj azonnal — a szabadságvágyad most könnyen rombol.',
      conj: 'A Nap az Uránuszodon: az év azon napjai, amikor a különállásod és a változásigényed fénybe kerül. Jó időpont kitörni egy megrögzött mintából.'
    },
    neptune: {
      soft: 'Ihletett, együttérző napok: művészet, segítés, spiritualitás, pihenés. Az intuíciód jól vezet.',
      hard: 'Ködös, fáradt napok: bizonytalanság, önámítás, csalódás egy idealizált emberben. Ne írj alá, ne dönts pénzről; pihenj, és ellenőrizd a tényeket.',
      conj: 'A Nap a Neptunuszodon: az énhatáraid vékonyak, az érzékenységed csúcson. Jó alkotásra, elvonulásra, gyógyulásra — a nagy döntést halaszd.'
    },
    pluto: {
      soft: 'Erős, célratörő napok: mélyre látsz, meg tudsz szabadulni egy tehertől. Jó időpont nagytakarításra — belül és kívül.',
      hard: 'Hatalmi harc, kényszer, makacs ütközés: valaki irányítani akar, vagy te. Ne vedd fel a kesztyűt; ami feljön, azt nézd meg őszintén.',
      conj: 'A Nap a Plútódon: az év legintenzívebb hete az átalakulás terén. Valami régit el kell engedni; a hatalmat magadon gyakorold, ne máson.'
    },
    northNode: {
      soft: 'Az irány tisztul: olyan lehetőség, találkozás jön, ami a hosszú távú utadhoz tartozik. Mondj igent, ha új, és nem, ha a régi.',
      hard: 'A múlt kényelme visszahúz: könnyebb a megszokott, de nem az visz előre. Vedd észre a kísértést.',
      conj: 'A Nap a holdcsomódon: az év sorsszerű napjai — figyelj arra, mi indul el, és ki bukkan fel. Ezt a hetet érdemes megjegyezni.'
    },
    asc: {
      soft: 'Jó fellépés, magabiztosság, láthatóság: jó napok bemutatkozásra, interjúra, tárgyalásra, egészségi újrakezdésre.',
      hard: 'Az énkép és a környezet visszajelzése ütközik: úgy érzed, nem látnak, vagy másnak látnak. Ne bizonyíts erőből; a testre figyelj.',
      conj: 'A Nap az Aszcendenseden: az év azon napjai, amikor a személyed és a tested kerül fénybe. Új kezdet — külső változtatás (megjelenés, szokás) most tartósabb.'
    },
    mc: {
      soft: 'Kedvező napok a hivatásban: észreveszik, amit csinálsz, a tekintéllyel jó a viszony. Kérj, jelentkezz, mutasd meg az eredményt.',
      hard: 'Nyilvános ütközés a tekintéllyel vagy a célokkal: kritika, felülbírálat, otthon–munka feszültség. Ne ekkor menj szembe a főnökkel.',
      conj: 'A Nap az MC-den: az év hivatásbeli csúcsnapjai — látszol, elvárnak, dönteni kell. Jó bejelentésre, pályázatra, előlépésre.'
    },
    dsc: {
      soft: 'Kapcsolatokban kedvező napok: könnyebb az egyeztetés, a megállapodás, a társ támogat. Jó tárgyalásra, párbeszédre.',
      hard: 'Az énérvényesítés és a társ igénye ütközik: konfliktus a párral, üzlettárssal, nyílt ellenféllel. Hallgass, mielőtt döntesz.',
      conj: 'A Nap a Deszcendenseden: az év azon napjai, amikor a másik ember áll a középpontban. Jó a kapcsolat újratárgyalására, szövetségkötésre.'
    },
    ic: {
      soft: 'Otthonos, alapozó napok: család, lakás, gyökerek — jó a rendezésre, a hazalátogatásra, a belső feltöltődésre.',
      hard: 'Otthoni feszültség a hivatás mellett: a család és a munka húz kétfelé, régi családi minta jön elő. Adj időt az otthonnak.',
      conj: 'A Nap az IC-den: az év legbelsőbb napjai — otthon, család, magánélet. Kevesebb kifelé, több befelé; jó időpont lakásügyre és családi beszélgetésre.'
    }
  },

  /* ---------------- MERKÚR (napok) ---------------- */
  mercury: {
    sun: {
      soft: 'Tisztán látod, mit akarsz, és el is tudod mondani: jó napok tervezésre, tárgyalásra, önéletrajzra, fontos telefonra.',
      hard: 'Kritika, félreértés, túl sok vélemény az ügyeidről: ne védekezz azonnal, és ne ekkor vitasd meg a céljaidat a tekintéllyel.',
      conj: 'A Merkúr a Napodon: gondolatban és szóban a te ügyeid a főszereplők. Jó bemutatkozásra, előadásra, hivatalos levélre.'
    },
    moon: {
      soft: 'Az érzéseidet könnyebb megfogalmazni, a családi beszélgetés gördül: jó napok az érzelmi tisztázásra, otthoni ügyintézésre.',
      hard: 'A fej és a szív vitázik: túlgondolod az érzéseidet, vagy a családban félreértés támad. Ne ekkor mondj ki végleges dolgot.',
      conj: 'A Merkúr a Holdadon: a hangulatod szavakat keres — naplózz, beszélj bizalmas emberrel; emlékek jönnek elő, jó rendezni őket.'
    },
    mercury: {
      soft: 'Éles, gyors ész, jó memória: tanulj, írj, intézz, tárgyalj — a gondolataid rendben jönnek.',
      hard: 'Ideges, szétszórt gondolkodás, elírás, elfelejtett találkozó: lassíts, ellenőrizz, ne vitázz apróságon.',
      conj: 'A Merkúr visszatért a helyére: a gondolkodásod éves újrakezdése. Jó napok új tanulmányra, fontos írásra, döntésre kommunikációs ügyekben.'
    },
    venus: {
      soft: 'Kedves szavak, könnyű flört, jó ízlésű döntések: jó napok szerelmes üzenetre, vásárlásra, tárgyalásra pénzről.',
      hard: 'Tapintatlanság vagy félreértett kedvesség: könnyű megbántani, megbántódni. A pénzügyi egyeztetést tedd tisztázottá, ne sejtelmessé.',
      conj: 'A Merkúr a Vénuszodon: a szeretet és az érték szavakat kap — mondd ki, mit szeretsz, tárgyald meg, mi mennyit ér neked.'
    },
    mars: {
      soft: 'Határozott, célratörő gondolkodás: gyors döntés, jó érvelés, hatékony ügyintézés. Jó napok tárgyalásra, ahol ki kell állni.',
      hard: 'Éles nyelv, vita, elhamarkodott szó: hamar felcsattansz, és a másik is. Ne ekkor írj mérges e-mailt; vezess figyelmesen.',
      conj: 'A Merkúr a Marsodon: a gondolataid harcosak — jó a vitára, a meggyőzésre, a gyors döntésre, rossz a diplomáciára.'
    },
    jupiter: {
      soft: 'Tág látókör, jó tanács, sikeres kérés: jó napok pályázatra, tanulásra, utazás szervezésére, nagy terv megfogalmazására.',
      hard: 'Nagyot mondás, elnagyolt ítélet, túl sok részlet kihagyása: ne ígérj, amit nem tudsz; olvasd el az apró betűt.',
      conj: 'A Merkúr a Jupitereden: a gondolkodásod optimista és távlatos. Jó napok tanításra, publikálásra, a jövő megtervezésére.'
    },
    saturn: {
      soft: 'Módszeres, koncentrált napok: jó a komoly munkára, szerződésre, hosszú távú tervezésre, a részletek rendezésére.',
      hard: 'Nehézkes, pesszimista gondolatok, késlekedő hírek, hivatali akadály: ne ekkor dönts végleg; a tények lassan tisztázódnak.',
      conj: 'A Merkúr a Szaturnuszodon: komoly beszélgetések, felelős döntések, esetleg rossz hír, amit józanul kell fogadni. Jó szerkezetet adni a gondolataidnak.'
    },
    uranus: {
      soft: 'Villámgyors ötletek, váratlan jó hír, eredeti megoldás: jó napok újításra, technikára, hálózatépítésre.',
      hard: 'Idegesség, kapkodás, elhamarkodott szó, technikai hiba: menteni, lassítani, nem dönteni hirtelen.',
      conj: 'A Merkúr az Uránuszodon: a gondolkodásod kilép a keretből — jó a feltalálásra, meglepő beszélgetésre; rossz a rutin-ügyintézésre.'
    },
    neptune: {
      soft: 'Ihletett, képzeletgazdag gondolkodás: jó alkotásra, versre, zenére, együttérző beszélgetésre.',
      hard: 'Ködös fej, félreértés, feledékenység, becsapás veszélye: ne írj alá, ne higgy el mindent, ellenőrizd a részleteket.',
      conj: 'A Merkúr a Neptunuszodon: a gondolataid inkább képek, mint mondatok. Jó a művészi munkára, rossz a szerződésre.'
    },
    pluto: {
      soft: 'Mélyre látó, kutató elme: kideríted, amit rejtettek, meggyőzően érvelsz. Jó nyomozásra, kutatásra, terápiás beszélgetésre.',
      hard: 'Gyanakvás, manipuláció, kényszerítő szó: hatalmi harc a beszélgetésben. Ne fenyegess és ne engedj fenyegetésnek.',
      conj: 'A Merkúr a Plútódon: a szavaid súlyosak lesznek — ki tudsz mondani valami régóta rejtettet. Használd gyógyításra, ne sebzésre.'
    },
    northNode: {
      soft: 'Egy beszélgetés vagy hír az irányodba mutat: figyelj a véletlennek látszó információra.',
      hard: 'A régi gondolkodásmód húz vissza: vedd észre, ha a megszokott kifogást ismétled.',
      conj: 'A Merkúr a holdcsomódon: sorsszerű üzenet, találkozás, tanulási lehetőség jöhet.'
    },
    asc: {
      soft: 'Jó a szavad, könnyen mutatkozol be, meggyőző vagy: jó napok interjúra, előadásra, ismerkedésre.',
      hard: 'Idegesnek, szétszórtnak látszol, félreértik, amit mondasz: figyelj a testbeszédre, beszélj lassabban.',
      conj: 'A Merkúr az Aszcendenseden: kommunikatív napok — te vagy, aki beszél, kérdez, intéz. Jó bejelentésre, ismerkedésre.'
    },
    mc: {
      soft: 'Jó tárgyalás a főnökkel, sikeres prezentáció, hasznos szakmai hír: mutasd meg, mit tudsz.',
      hard: 'Szakmai félreértés, kritika, rossz hír a munkában: ne reagálj azonnal, kérj tisztázást.',
      conj: 'A Merkúr az MC-den: a hivatásod szavakat kap — előadás, jelentés, pályázat, hivatalos ügy most kerül fénybe.'
    },
    dsc: {
      soft: 'Jó egyeztetés a párral, üzlettárssal: könnyű megállapodni. Jó napok szerződésre, párbeszédre.',
      hard: 'Vita a társsal, üzlettárssal, nyílt ellenféllel: mindenki a magáét mondja. Hallgass végig, mielőtt válaszolsz.',
      conj: 'A Merkúr a Deszcendenseden: a másik ember mond fontosat — figyelj, tárgyalj, egyeztess.'
    },
    ic: {
      soft: 'Jó családi beszélgetés, otthoni ügyintézés, emlékek rendezése: jó napok lakásügyre, családi egyeztetésre.',
      hard: 'Családi félreértés, lakásügyi bosszúság, a múlt vitája: ne ekkor rendezd le a régi sérelmet.',
      conj: 'A Merkúr az IC-den: a gyökereidről gondolkodsz — család, otthon, múlt. Jó időpont családi beszélgetésre, otthoni tervezésre.'
    }
  },

  /* ---------------- VÉNUSZ (napok–hét) ---------------- */
  venus: {
    sun: {
      soft: 'Kedvelt vagy, könnyű a társasági élet, jönnek a kellemes dolgok: jó napok ünneplésre, randevúra, művészi munkára, önbecsülésre.',
      hard: 'Hiúság és sértettség: úgy érzed, nem becsülnek eléggé, vagy túl sokat vársz. Ne kérj bizonyítékot a szeretetre; adj magadnak.',
      conj: 'A Vénusz a Napodon: az év vonzó, kellemes napjai — a szeretet, a szépség, az élvezet közel jön. Jó időpont kapcsolat indítására, önmagad ünneplésére.'
    },
    moon: {
      soft: 'Gyengéd, otthonos napok: könnyebb a közelség, a családi béke, a kényelem. Jó vendégségre, főzésre, ölelésre.',
      hard: 'Érzelmi és kényelmi igény ütközik: túl sok édességet, vigaszvásárlást, duzzogást hoz. Ne mérd le a szeretetet ajándékban.',
      conj: 'A Vénusz a Holdadon: az érzelmi biztonság és a szeretet találkozik — jó kibékülésre, gyengédségre, az otthon szépítésére.'
    },
    mercury: {
      soft: 'Kedves szavak, könnyű ismerkedés, jó tárgyalás pénzről: írd meg a szerelmes üzenetet, egyeztess a párral.',
      hard: 'Kedveskedés helyett félreértés, hízelgés, amit nem hisznek el: beszélj egyszerűen.',
      conj: 'A Vénusz a Merkúrodon: a szeretet és a beszéd összeér — vallomás, kedves levél, művészi szöveg ideje.'
    },
    venus: {
      soft: 'Harmonikus, vonzó napok: a kapcsolatok gördülnek, a pénzügy könnyebb, az ízlésed pontos. Jó szépítkezésre, vásárlásra, randevúra.',
      hard: 'Túlzott igény a kellemesre: lustaság, túlköltés, elkényeztetettség, féltékenység. Élvezd, de mértékkel.',
      conj: 'A Vénusz visszatért a helyére: a szeretetigényed éves újrakezdése. Jó időpont a kapcsolat felfrissítésére, az értékrended átgondolására.'
    },
    mars: {
      soft: 'Szenvedély és vonzalom: jó napok szerelemre, testi közelségre, közös programra, alkotó munkára.',
      hard: 'Vonzalom és feszültség egyszerre: féltékenység, szeszély, veszekedés a párral, amiből kibékülés is lehet. Ne ekkor dönts a kapcsolatról.',
      conj: 'A Vénusz a Marsodon: a vágy és a vonzás csúcsán — intenzív találkozás, új vonzalom, vagy a meglévő kapcsolat felforrósodása.'
    },
    jupiter: {
      soft: 'Bőség, nagyvonalúság, szerencse a kapcsolatokban és a pénzben: jó napok ünnepre, ajándékra, kérésre, utazásra.',
      hard: 'Túlzás: túl sok költés, túl nagy ígéret, elkényeztetés. Jókedv, de a számla is jön.',
      conj: 'A Vénusz a Jupitereden: az év egyik legkellemesebb hete — szeretet, öröm, bőség érzése. Élvezd, és oszd meg.'
    },
    saturn: {
      soft: 'Hűség, megbízhatóság, tartós megállapodás: jó napok elköteleződésre, pénzügyi rendezésre, idős rokonnal töltött időre.',
      hard: 'Hidegség, elutasítás, magány érzése a kapcsolatban, vagy anyagi szűkösség: ne ekkor mérd le, szeretnek-e. Ez elmúlik.',
      conj: 'A Vénusz a Szaturnuszodon: komoly szeretet — felelősség, hűség, esetleg kötelesség a kapcsolatban. Jó a tartós döntésre, rossz a könnyedségre.'
    },
    uranus: {
      soft: 'Meglepő vonzalom, izgalmas találkozás, friss szín a kapcsolatban: engedj a spontán programnak.',
      hard: 'Hirtelen szeszély, szakítás-hangulat, váratlan pénzügyi meglepetés: ne dönts a kapcsolatról ebben a pár napban.',
      conj: 'A Vénusz az Uránuszodon: a szabadság és a szeretet találkozik — új, szokatlan vonzalom, vagy a régi kapcsolat felfrissítése.'
    },
    neptune: {
      soft: 'Romantikus, ihletett napok: zene, művészet, együttérzés, gyengédség. Jó alkotásra, randevúra gyertyafénynél.',
      hard: 'Idealizálás, csalódás, becsapás a szerelemben vagy pénzben: ne higgy el mindent; a rózsaszín köd eloszlik.',
      conj: 'A Vénusz a Neptunuszodon: az ideális szerelem hangulata — gyönyörű, ha alkotásra használod; veszélyes, ha valakire vetíted.'
    },
    pluto: {
      soft: 'Mély kötődés, szenvedélyes közelség, elengedés a kapcsolatban: jó napok őszinte intimitásra, pénzügyi rendezésre.',
      hard: 'Féltékenység, birtoklás, hatalmi játszma a szerelemben vagy a pénzben: ne zsarolj és ne hagyd magad zsarolni.',
      conj: 'A Vénusz a Plútódon: intenzív, sorsszerűnek érzett vonzalom vagy a kapcsolat átalakulása. Mélyre visz — nézd meg, mit hoz fel.'
    },
    northNode: {
      soft: 'Kapcsolati lehetőség az irányodba: figyelj az új emberre.',
      hard: 'A régi kapcsolati minta visszahúz: vedd észre, ha ugyanazt a típust választod.',
      conj: 'A Vénusz a holdcsomódon: sorsszerűnek érzett találkozás vagy kapcsolati fordulat jöhet.'
    },
    asc: {
      soft: 'Vonzó, kedvelt vagy, jó a megjelenésed: jó napok ismerkedésre, fényképezkedésre, önmagad szépítésére.',
      hard: 'Hiúság, elkényeztetettség, a külső miatti bizonytalanság: ne a tükörből ítéld meg magad.',
      conj: 'A Vénusz az Aszcendenseden: te vagy a vonzó — az év azon napjai, amikor könnyű szeretve lenni. Jó új kapcsolatra, külső változtatásra.'
    },
    mc: {
      soft: 'Kedvelt vagy a munkahelyen, jó a viszony a főnökkel, elismerés, esetleg anyagi jó hír: kérj most.',
      hard: 'Hiúsági sérelem a munkában, kedvezőtlen pénzügyi hír, kapcsolat és karrier ütközése.',
      conj: 'A Vénusz az MC-den: a hivatásod kellemes napjai — elismerés, jó kapcsolatok fent, művészi vagy diplomáciai siker.'
    },
    dsc: {
      soft: 'A társ közel, a megállapodás könnyű, új ismeretség jöhet: jó napok randevúra, egyeztetésre, tárgyalásra.',
      hard: 'A kapcsolat kiegyenlítetlensége látszik: az egyik többet ad, mint kap. Beszéljétek meg, ne sértődj.',
      conj: 'A Vénusz a Deszcendenseden: a párkapcsolat és az együttműködés az év kedvező napjaiban — jó szövetségre, kibékülésre, új kapcsolatra.'
    },
    ic: {
      soft: 'Otthoni béke, szépítés, családi öröm: jó napok lakás-szépítésre, családi ünnepre.',
      hard: 'Otthoni kényelmi vagy anyagi feszültség, a család nem ért egyet a kapcsolatoddal.',
      conj: 'A Vénusz az IC-den: az otthon és a család szeretete kerül előtérbe — jó időpont hazalátogatásra, otthonteremtésre.'
    }
  },

  /* ---------------- MARS (~hét) ---------------- */
  mars: {
    sun: {
      soft: 'Energia, bátorság, cselekvőkedv: jó napok versenyre, fizikai munkára, önérvényesítésre, indításra.',
      hard: 'Sürgetés, konfliktus a tekintéllyel, baleseti hajlam, gyulladás: ne erőltess, ne siess; a mozgás segít, a vita nem.',
      conj: 'A Mars a Napodon: kétévente egyszer — az akaratod és az életerőd csúcsa. Indíts, harcolj a jó ügyért, de vigyázz a testedre.'
    },
    moon: {
      soft: 'Bátran kimondott érzések, energikus otthoni munka: jó napok rendrakásra, családi döntésre.',
      hard: 'Ingerültség, családi veszekedés, gyomorideg: könnyű felcsattanni. Vezesd le mozgással, ne a szeretteiden.',
      conj: 'A Mars a Holdadon: az érzelmeid harcossá válnak — erős reakciók, védekezés, szenvedély. Használd bátor lépésre, ne sértésre.'
    },
    mercury: {
      soft: 'Gyors döntés, éles érvelés, hatékony ügyintézés: jó napok tárgyalásra, vizsgára, gyors munkára.',
      hard: 'Vita, éles szó, elhamarkodott döntés, közlekedési bosszúság: gondold végig, mielőtt mondod; vezess figyelmesen.',
      conj: 'A Mars a Merkúrodon: a gondolataid támadóvá válnak — jó a versenyhelyzetre, rossz a diplomáciára. Ne küldj mérgesen semmit.'
    },
    venus: {
      soft: 'Szenvedély, vonzás, alkotó energia: jó napok szerelemre, közös programra, művészi munkára.',
      hard: 'Vágy és feszültség: féltékenység, sértettség, veszekedés a párral. Ne ekkor dönts a kapcsolatról; az energia elvonul.',
      conj: 'A Mars a Vénuszodon: a vágy csúcsán — intenzív vonzalom, szenvedélyes közelség, vagy erős vita a párral. Mindkettő elmúlik pár nap alatt.'
    },
    mars: {
      soft: 'Tetterős, hatékony napok: amit el akarsz érni, most könnyen megy. Jó sportra, indításra.',
      hard: 'Türelmetlenség, agresszió, baleset, kimerülés: az energia rossz irányba megy. Lassíts, ne kockáztass.',
      conj: 'A Mars visszatért a helyére (kétévente): új akarati ciklus kezdete. Jó időpont eldönteni, miért harcolsz a következő két évben.'
    },
    jupiter: {
      soft: 'Sikeres cselekvés, vállalkozó kedv, szerencsés lépés: jó napok indításra, pályázatra, sportra.',
      hard: 'Túlzott kockázat, elhamarkodott nagy lépés, önhittség: a lendület jó, a mérték hiányzik. Ne fogadj, ne vállalj túl.',
      conj: 'A Mars a Jupitereden: az energiád és a bizalmad egyszerre csúcson — jó nagy lépésre, ha megtervezted.'
    },
    saturn: {
      soft: 'Kitartó, fegyelmezett munka, ami eredményt hoz: jó napok nehéz feladatra, hosszú távú építkezésre.',
      hard: 'Frusztráció: akadály, késlekedés, gátolt energia, ütközés a tekintéllyel. Ne erőből; türelemmel és apró lépésekkel.',
      conj: 'A Mars a Szaturnuszodon: a legkeményebb munka ideje — ha elfogadod a korlátot, tartósat építesz; ha lázadsz, kimerülsz.'
    },
    uranus: {
      soft: 'Gyors, eredeti cselekvés, hirtelen jó lépés: jó napok újításra, kalandra, technikai munkára.',
      hard: 'Baleset, hirtelen konfliktus, kapkodás, lázadás: ne siess, ne vezess mérgesen, ne szakíts hirtelen.',
      conj: 'A Mars az Uránuszodon: robbanékony energia — kitörés a keretből, váratlan cselekvés. Jó a bátor változtatásra, veszélyes a kockázatra.'
    },
    neptune: {
      soft: 'Ihletett cselekvés, együttérző segítés, művészi energia: jó napok alkotásra, jótékonyságra.',
      hard: 'Erőtlenség, bizonytalan cél, önámítás, becsapás: ne kezdj újat, ne higgy a nagy ígéretnek; pihenj.',
      conj: 'A Mars a Neptunuszodon: az energiád szétfolyik vagy ihletté válik — jó a spirituális, művészi munkára, rossz a versenyre.'
    },
    pluto: {
      soft: 'Erő, célratörés, átalakító cselekvés: jó napok nagy változtatásra, nagytakarításra, fizikai kihívásra.',
      hard: 'Hatalmi harc, kényszer, erőszakos ütközés, kimerítő küzdelem: ne vedd fel a kesztyűt; ami nem a te harcod, engedd el.',
      conj: 'A Mars a Plútódon: a nyers erő találkozik a mélységgel — vagy megszabadulsz valamitől, vagy túl keményen harcolsz. Irányítsd magadra.'
    },
    northNode: {
      soft: 'Cselekvési lehetőség az irányodba: lépj, ha új.',
      hard: 'A régi harcmodor visszahúz: vedd észre, ha ugyanúgy küzdesz, mint régen.',
      conj: 'A Mars a holdcsomódon: sorsszerű lépés, bátor döntés ideje.'
    },
    asc: {
      soft: 'Energikus, határozott fellépés, jó fizikai forma: jó napok kiállásra, sportra, indításra.',
      hard: 'Agresszívnak látszol, összeütközés a környezettel, baleseti hajlam: figyelj a testedre, ne provokálj.',
      conj: 'A Mars az Aszcendenseden: a személyes energiád csúcsa (kétévente) — bátor, tettre kész, harcias vagy. Indíts, de ne ütközz.'
    },
    mc: {
      soft: 'Hatékony munka, előlépés, sikeres kezdeményezés a hivatásban: kérj, indíts, versenyezz.',
      hard: 'Konfliktus a főnökkel, szakmai küzdelem, sietség hiba: ne menj szembe a tekintéllyel ezekben a napokban.',
      conj: 'A Mars az MC-den: a hivatásod cselekvő napjai — nagy erőfeszítés, verseny, kiállás. Jó indításra, rossz a nyilvános vitára.'
    },
    dsc: {
      soft: 'Energikus együttműködés, sikeres tárgyalás, szenvedély a kapcsolatban.',
      hard: 'Nyílt konfliktus a párral, üzlettárssal, ellenféllel: valaki ellened megy, vagy te ellene. Ne ekkor tárgyalj.',
      conj: 'A Mars a Deszcendenseden: a másik ember a kihívás — konfliktus vagy vonzalom, mindkettő intenzív. Ne kezdj harcot, amit nem akarsz végigvinni.'
    },
    ic: {
      soft: 'Otthoni munka, felújítás, családi döntés energiával: jó napok lakásügyre, rendezésre.',
      hard: 'Családi veszekedés, otthoni baleset, a múlt dühe: ne ekkor rendezd a régi sérelmet; vigyázz a konyhában és a létrán.',
      conj: 'A Mars az IC-den: az otthon és a család a cselekvés terepe — felújítás, költözés, családi ügy rendezése.'
    }
  }
};

/* a Hold a natális házakban — bővebb, tanáccsal (a ház saját jelentéséből származtatva) */
window.HDATA.forecast.moonHouseLong = {
  1: 'Rólad szól a nap: a Hold az 1. házadban érzékenyebbé, láthatóbbá tesz — a hangulatod az arcodra van írva, és az emberek erre reagálnak. Jó nap újat indítani, magadért kiállni, orvoshoz menni; rossz nap elrejtőzni vagy mások kedvéért alakoskodni.',
  2: 'Az anyagiak és a biztonság hangolják a közérzeted: pénz, számlák, vásárlás, „mit érek" kérdései jönnek elő. Jó nap pénzügyeket rendezni, értéket felmérni, kényelemben lenni; rossz nap vigasztalásból költeni.',
  3: 'Beszédes, mozgalmas nap: üzenetek, telefonok, rövid utak, testvérek, sok apró ügy. Jó nap tanulni, intézni, kapcsolatot tartani; a mélyebb elmerülés ma nem megy.',
  4: 'Befelé forduló, otthonos nap: a család, a lakás, a gyökerek húznak, a hangulatod a múlthoz kötődik. Jó nap pihenni, rendezkedni, főzni, a szülőkkel beszélni; rossz nap nagy nyilvános fellépésre.',
  5: 'Játékos, alkotó, romantikus nap: gyerekek, szórakozás, önkifejezés, a szív ügyei. Jó nap randevúra, alkotásra, játékra; a kötelesség ma nehezebben megy.',
  6: 'A munka és az egészség terepe: teendők, rutin, testi jelzések, kollégák. Jó nap rendet rakni, egészségügyi ügyet intézni, apró munkákat befejezni; ne várj nagy érzelmi eseményt.',
  7: 'A társ és a másik ember a középpontban: egyeztetés, találkozás, tükör. Jó nap a párral vagy üzlettárssal beszélni, megállapodni, mások szemével látni; rossz nap egyedül dönteni közös ügyben.',
  8: 'Mélyebb, intenzívebb nap: közös pénzügyek, intimitás, elengedés, rejtett érzések, esetleg krízis. Jó nap az őszinte beszélgetésre, a lezárásra, a tartozás rendezésére; a felszínes társaság fáraszt.',
  9: 'Távlatos nap: tanulás, utazás, hit, nagyobb kérdések, idegen emberek. Jó nap tervezni, olvasni, útra kelni, tanulni; a hétköznapi apróság ma nem érdekel.',
  10: 'A hivatás és a nyilvánosság napja: látszol, elvárnak, dönteni kell. Jó nap főnökkel beszélni, eredményt megmutatni, felelősséget vállalni; a magánéleti hangulatot ne vidd be.',
  11: 'Barátok, közösség, tervek: társas, jövőbe néző nap. Jó nap baráti találkozóra, csoportmunkára, a nagy tervek megosztására; a magány ma nem tesz jót.',
  12: 'Visszavonuló, feldolgozó nap: magány, pihenés, múlt, esetleg segítő szerep. Jó nap aludni, meditálni, lezárni; a hagyomány szerint ne indíts újat, és ne hidd el a rossz előérzetet.'
};
