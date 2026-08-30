/*
 * western-ext.js — a nyugati asztrológia adatmoduljának kiegészítése
 * Kiegészíti a western.js-t: a hiányzó bolygók házhelyzetei, a házurak
 * elhelyezkedése (rulerInHouse), ház-kiegészítések és fényszög-értelmezések.
 *
 * Sima script (nem ES modul), file:// protokollon is betölthető.
 * Betöltési sorrend: western.js után.
 *
 * Bolygókulcsok: uranus, neptune, pluto, northNode, lilith
 * Fényszögkulcsok: conjunction, opposition, trine, square, sextile
 */

window.HDATA = window.HDATA || {};

window.HDATA.westernExt = {

  /* ------------------------------------------------------------------ *
   *  1. A hiányzó bolygók a házakban (a western.js planetInHouse
   *     kiegészítése: Uránusz, Neptunusz, Plútó, Északi holdcsomópont, Lilith)
   * ------------------------------------------------------------------ */
  planetInHouse: {

    uranus: {
      1: 'Feltűnően eredeti, kiszámíthatatlan jelenlét: a szabadság kérdése már az első benyomásban ott van, és nehezen tűri, ha bárki meg akarja szabni, milyen legyen.',
      2: 'Az anyagi helyzet hullámzó, a jövedelem szokatlan vagy több forrásból érkezik; az önértékelése a függetlenségéhez, nem a birtokolt javakhoz kötődik.',
      3: 'Ugrásszerű, villanásokban működő gondolkodás és eredeti ötletek; a tanulás nem lineáris, és a szokatlan nézőpont a legfőbb szellemi tőkéje.',
      4: 'Nyugtalan gyökerek: költözések, szokatlan családi felállás vagy a hagyománytól való tudatos elszakadás; az otthonban is szüksége van mozgástérre.',
      5: 'Nem konvencionális alkotókedv és szerelmi élet; a kísérletezés izgalmasabb számára a biztonságnál, a gyerekekben is a különállást tiszteli.',
      6: 'A merev napi rutin nehezen viselhető; a szabad beosztású, technikai vagy újító jellegű munka illik hozzá, és a közérzete is a szabadságérzetétől függ.',
      7: 'A kapcsolataiban mozgásteret igényel; vonzza a szokatlan partner és a hagyományostól eltérő kötés, a fojtogató közelségtől viszont menekül.',
      8: 'Váratlan fordulatok a közös pénzügyekben és a mélyfolyamatokban; a krízisek nála nem lassan érnek, hanem hirtelen áttörésként robbannak be.',
      9: 'Független, olykor lázadó világnézet: a hitet nem örökölni, hanem újragondolni akarja, és a régi tekintélyeket szívesen kérdőjelezi meg.',
      10: 'Szokatlan pálya és hirtelen karrierfordulók; nehezen tűri a merev hierarchiát, viszont képes új szakmai utat nyitni ott, ahol addig nem volt.',
      11: 'Erős közösségi újítókedv: haladó eszmék, sokszínű baráti kör, jövőbe néző célok — a csoportban gyakran ő a katalizátor.',
      12: 'A szabadságvágy tudattalanul dolgozik: hirtelen belső felismerések, nyugtalan álmok, rejtett lázadás a saját belső korlátai ellen.'
    },

    neptune: {
      1: 'Finom, nehezen megragadható jelenlét: mások erős, de nem mindig pontos benyomást alakítanak ki róla, és ő maga is lassan találja meg a körvonalait.',
      2: 'Az anyagiakhoz laza, olykor irreális a viszonya; a pénzügyi határok könnyen elmosódnak, ezért a tiszta nyilvántartás nála nem formalitás, hanem védelem.',
      3: 'Képekben, hangulatokban és megérzésekben gondolkodik; a pontos tények kevésbé kötik le, viszont kivételes érzéke van a sorok között olvasáshoz.',
      4: 'Az otthon és a család idealizált vagy ködös: erős, de nehezen kimondható érzelmi szál fűzi a gyökereihez, és menedéknek is használja a magánszféráját.',
      5: 'Gazdag fantázia és romantikus képzelet; az alkotásban ez ihlet, a szerelemben viszont hajlamos ideált látni a valós ember helyett.',
      6: 'A szigorú rend nehezen tartható, a szervezete érzékeny és jelzésértékű; erős a hajlama a segítő szolgálatra, akár a saját határai kárára is.',
      7: 'A partnerben eszményt keres: a kapcsolat inspiráló és odaadó, de a tisztánlátás és a kijózanodás külön munkát igényel.',
      8: 'Mély, misztikus vonzalom a határhelyzetekhez és a láthatatlan folyamatokhoz; a közös pénzügyekben viszont érdemes írásbeli tisztaságra törekedni.',
      9: 'Erős spirituális igény: a hit nála inkább átélés és élmény, mint tanrendszer, és a világnézete idővel többször átalakul.',
      10: 'A hivatás művészi, segítő vagy spirituális irányba húz; a pálya körvonalai lassan állnak össze, gyakran kerülőutakon át.',
      11: 'Eszményekért lelkesedő közösségi ember: nagylelkű a barátaival, de meg kell tanulnia különbséget tenni a valódi szövetséges és a szép ígéret között.',
      12: 'A tudattalan a legerősebb terepe: álmok, meditáció, mély beleérzés — a saját és a mások érzései közti határ meghúzása viszont élethosszig tartó lecke.'
    },

    pluto: {
      1: 'Intenzív, átható jelenlét, amelyet mások megéreznek, mielőtt megszólalna; az élete során többször alapjaiban építi újra önmagát.',
      2: 'Az anyagi helyzet szélsőségesen hullámzik; a birtoklás és az elengedés kérdése végigkíséri, és az önértéke sem a vagyonon múlik, hiába tűnik úgy.',
      3: 'Kutató, mélyre ásó elme: a szavaival erős hatást gyakorol, olykor akaratlanul is, ezért érdemes figyelnie a súlyukra.',
      4: 'A családi múltban erős, feldolgozandó örökség; a gyökerek átalakítása és a nemzedéki teher letétele élethosszig tartó munka.',
      5: 'Szenvedélyes alkotás és szerelem: az önkifejezésben nála nincs félgőz, ezért az alkotás egyszerre kockázat és gyógyulás.',
      6: 'A munka és az egészség területén mély átalakulások zajlanak; képes a mindennapjait teljesen újraszervezni, ha felismeri, hogy a régi már nem működik.',
      7: 'A kapcsolatai intenzívek és átalakítók; a hatalmi dinamika tudatosítása — ki irányít, ki enged — a fő feladata a párkapcsolatban.',
      8: 'Saját terepén áll: krízisek, mélylélektan, közös erőforrások — természetes érzékkel olvassa a rejtett folyamatokat, amit gyógyítóan is használhat.',
      9: 'A világnézete radikálisan átalakul az élete során; a nagy kérdések nála nem elméleti ügyek, hanem sorsfordulókban dőlnek el.',
      10: 'Hatalommal, felelősséggel és nyilvános újjáépítéssel járó pálya; a karrierje több szakaszban formálódik újra, olykor teljes irányváltással.',
      11: 'A közösségi kapcsolatai mélyek és sorsfordítók; képes csoportfolyamatokat átformálni, ezért fontos, hogy tudatában legyen a befolyásának.',
      12: 'A nagy átalakulások a tudattalanban zajlanak; a rejtett félelmek és a kimondatlan harag felszínre hozása a fejlődés kulcsa.'
    },

    northNode: {
      1: 'A fejlődés iránya az önállóság: saját kezdeményezés, saját arc, saját akarat felvállalása ahelyett, hogy mindig a másikhoz igazodna.',
      2: 'A feladata a stabil értékrend és a saját erőforrás felépítése; a biztonságot magának kell megteremtenie, nem mástól megkapnia.',
      3: 'A tanulás, a kérdezés és a hétköznapi kapcsolódás felé kell nyitnia: kevesebb nagy elmélet, több valódi párbeszéd a közvetlen környezetével.',
      4: 'A fejlődés befelé és a gyökerek felé vezet: otthon, család, érzelmi biztonság megteremtése fontosabb, mint a külső elismerés hajszolása.',
      5: 'Az önkifejezés, az alkotás és a szívből jövő öröm vállalása a feladata; itt a kockázat és a megmutatkozás nem hiba, hanem fejlődés.',
      6: 'A növekedés a mindennapi rendben, a hasznos munkában és a test gondozásában rejlik; a nagy víziókat apró, ismételhető lépésekre kell váltania.',
      7: 'A kapcsolódást, a kompromisszumot és a másikra figyelést kell megtanulnia; a saját erejéből egy ponton túl nem jut tovább.',
      8: 'Az út a mélységbe, az intimitásba és a közös erőforrásokba vezet; a fő lecke az elengedés és a bizalom, a görcsös kontroll helyett.',
      9: 'A tágas horizont felé kell mozdulnia: tanulás, utazás, saját világkép kialakítása a megszokott vélemények átvétele helyett.',
      10: 'A feladata a nyilvános szerep és a felelősség vállalása; ki kell lépnie a magánszféra biztonságából a látható, mérhető terepre.',
      11: 'A fejlődés a közösség, a barátságok és a közös célok felé vezet; a személyes ambícióját nagyobb ügybe kell illesztenie.',
      12: 'Az út a belső élet, az engedés és a spirituális igény felé mutat; a kontroll lazítása és a csend elviselése a lecke.'
    },

    lilith: {
      1: 'A megjelenésében és az önérvényesítésében van valami provokatív, nehezen szelídíthető erő; vagy vállalja ezt, vagy egész életében szégyelli.',
      2: 'Az önértékelés és a birtoklás területén jelentkezik a szégyen vagy a dac; élesen merül fel a kérdés, hogy mennyit ér önmagában, teljesítmény nélkül.',
      3: 'A kimondott szava tabudöntő: nehezen viseli, ha elhallgattatják, és a hallgatás nála belső feszültséget termel.',
      4: 'A családban van egy elhallgatott, kitagadott téma; a gyökereihez kettős érzés fűzi, egyszerre kötődik és menekülne.',
      5: 'A szerelemben és az alkotásban jelenik meg a vad, konvenciókkal nem törődő oldala; itt éli meg a legerősebb szabadságot és a legerősebb bűntudatot.',
      6: 'A napi kiszolgáltatottság és az alávetettség kérdése érzékeny pont; nehezen tűri a megalázó munkakörülményt, és a teste is jelzi, ha eltűri.',
      7: 'A kapcsolataiban erős a vonzás és a taszítás játéka; a függetlenség és az összetartozás feszültsége itt élesedik ki a leginkább.',
      8: 'Mély szenvedély és erős tabuérzékenység: a hatalom és az intimitás összefonódása a fő témája, és ezt csak tudatosan lehet jól kezelni.',
      9: 'A hagyományos tanokkal szemben kritikus; saját, olykor eretneknek tűnő meggyőződést alakít ki, és ezért kész vitába is szállni.',
      10: 'A nyilvános szerepében megjelenik az elutasítás vagy a megbélyegzés élménye; a saját tekintélyét magának kell kivívnia, készen kapott legitimáció nélkül.',
      11: 'A csoportban kívülállónak érzi magát; a közösségi normákkal való szembenállás visszatérő élmény, ami egyszerre magány és szabadság.',
      12: 'A tudattalanba szorult harag és szégyen dolgozik benne; a felszínre hozásuk — akár terápiás, akár alkotói úton — hozza el a szabadságot.'
    }
  },

  /* ------------------------------------------------------------------ *
   *  2. Házurak elhelyezkedése — „az N. ház ura az M. házban"
   *
   *  A hagyományos asztrológia egyik legmélyebb eszköze. A ház csúcsán álló
   *  jegy uralkodó bolygója viszi tovább az adott életterület témáját oda,
   *  ahol a képletben áll. Így derül ki, hogy egy életterület „hova vezet":
   *  például a 2. ház ura a 10. házban azt jelzi, hogy a pénz a hivatáson
   *  keresztül érkezik.
   *
   *  Olvasás: rulerInHouse[annak a háznak a száma, amelynek az uráról szó
   *  van][annak a háznak a száma, ahol ez a bolygó áll].
   * ------------------------------------------------------------------ */
  rulerInHouse: {

    1: {
      1: 'Az életút iránya belülről fakad: az önérvényesítés természetes, az ember maga a saját legfontosabb ügye, és ritkán vár engedélyt bárkitől.',
      2: 'Az önmegvalósítás az anyagi biztonság és a saját erőforrások építésén át halad; az önértékelés szorosan összefonódik azzal, amit fel tud mutatni.',
      3: 'Az élete a tanulás, a beszéd és a közeli kapcsolatok mozgásában bontakozik ki; a testvérek és a mindennapi környezet erősen alakítják.',
      4: 'Az identitása a családhoz, az otthonhoz és a gyökerekhez horgonyzódik; az élete fő eseményei többnyire a magánszférában zajlanak.',
      5: 'Önmagát az alkotásban, a szerelemben és a gyerekekben ismeri fel; szüksége van egy saját terepre, ahol játszhat és megmutatkozhat.',
      6: 'Az élete a napi munkán, a rutinon és a hasznos szolgálaton át formálódik; a test és az egészség visszatérően jelzi, jó irányban halad-e.',
      7: 'A másikon keresztül talál önmagára: a párkapcsolatok és a társulások adják az önismeret legfontosabb tükrét.',
      8: 'Az élete mély válságokon és újrakezdéseken át halad; a saját ereje azon mérődik, mit képes átalakítani abból, ami összeomlott.',
      9: 'Az útja kifelé és felfelé vezet — tanulás, hit, idegen kultúrák —, és a tágas horizont nála nem luxus, hanem az önazonosság feltétele.',
      10: 'Az identitása a hivatásban és a nyilvános szerepben ölt testet; azzá válik, amit a világ előtt felépít.',
      11: 'Az élete a közösségben, a baráti hálózatban és a közös célokban talál medret; egyedül nehezebben indul el, csoportban azonnal mozdul.',
      12: 'A fejlődése a háttérben, a csendben és a belső munkában történik; időnként vissza kell húzódnia ahhoz, hogy megtalálja önmagát.'
    },

    2: {
      1: 'A megélhetést a saját személye, teste és fellépése hozza: ő maga a legfőbb tőkéje, és ez az önbizalmán is meglátszik.',
      2: 'Zárt, önmagát erősítő anyagi kör: az erőforrásai stabilak, a gyarapodás lassú, a megőrzés viszont jól megy neki.',
      3: 'A pénz a szóból, az információból és a mozgásból jön — tanításból, írásból, kereskedelemből —, jellemzően sok kis csatornán át.',
      4: 'Az anyagi biztonság alapja a család, az ingatlan és az otthon; gyakran örökölt vagy otthonhoz kötött vagyonról van szó.',
      5: 'A jövedelme az alkotásból, a szórakoztatásból vagy a kockázatvállalásból származik; a pénz könnyen jön, és éppolyan könnyen megy.',
      6: 'A keresetét a napi munka, a szakértelem és a szolgálat egyenletes ritmusa hozza; nem a nagy összeg, hanem a rendszeresség a kulcs.',
      7: 'Az anyagiak a partneren, a házasságon vagy az üzlettársakon keresztül alakulnak; a szerződések súlya nála átlagon felüli.',
      8: 'A saját pénze összefonódik a máséval — hitel, örökség, közös kassza, befektetés —, ezért a nyereség és a kockázat mindig együtt jár.',
      9: 'A gyarapodása a tudáshoz, a külföldhöz és a világnézethez kötődik: oktatás, kiadás, távoli ügyletek hozzák a bevételt.',
      10: 'A pénz a hivatásán és a jó nevén keresztül érkezik; a szakmai pozíció nála közvetlenül fordul anyagi biztonságra.',
      11: 'A bevétele a hálózatból, a barátokból és a közös vállalkozásokból ered; a kapcsolatai az igazi vagyona.',
      12: 'Az anyagi ügyei a háttérben, olykor átláthatatlanul mozognak; a tartalék rejtve gyűlik, és az adakozás is szerves része a képnek.'
    },

    3: {
      1: 'A beszéde és a gondolkodása a személyisége védjegye: a szava az arca, és az emberek elsősorban arról ismerik meg.',
      2: 'A tudása és a kapcsolattartása pénzzé válik; azt mondja el és azt tanítja, aminek kézzelfogható értéke van.',
      3: 'Sűrű, élénk mindennapi élet: sok információ, rövid utak, testvéri és szomszédsági szálak — ez a természetes közege.',
      4: 'A tanulás és a beszélgetés otthon zajlik; a családi történetek és a gyerekkori környezet határozzák meg a gondolkodását.',
      5: 'A gondolatait alkotásban formálja meg: írás, tanítás, játékos előadás — a kifejezés nála örömforrás, nem kötelesség.',
      6: 'A gondolkodása a gyakorlati problémamegoldás szolgálatában áll; az információ nála napi munkaeszköz, nem szórakozás.',
      7: 'A kommunikáció a párkapcsolat és a tárgyalás terepe; a másikkal folytatott párbeszéd viszi előre a gondolkodását.',
      8: 'A kíváncsisága a mélybe fúr — kutatás, titkok, tabuk, lélektan —, és ritkán elégszik meg a felszínes magyarázattal.',
      9: 'A hétköznapi tanulásból nagy világkép nő ki; a rövid utakat idővel távoli célok és nagyobb kérdések követik.',
      10: 'A szó a karrier eszköze: tanítás, média, tárgyalás, ügyintézés — a szakmai hírneve a kommunikációján múlik.',
      11: 'A gondolatai a közösségben találnak visszhangra; a barátokkal folytatott eszmecsere formálja a világképét.',
      12: 'A gondolkodása befelé fordul: napló, csendes tanulás, intuitív megérzések — nem mondja ki mindazt, amit tud.'
    },

    4: {
      1: 'Az otthona és a származása közvetlenül látszik rajta; a család témája végigkíséri az önképét, akár vállalja, akár tagadja.',
      2: 'A család anyagi értelemben is háttér: az otthon vagyontárgy, és a gyökerek kézzelfogható biztonságot termelnek.',
      3: 'A családi élet mozgalmas és beszédes: közel élnek egymáshoz, sok szó, sok mozgás, olykor sok költözés jellemzi.',
      4: 'Mélyen gyökerező otthonosság: erős kötődés a szülőföldhöz, a családi házhoz és a folytonossághoz, amit nehezen ad fel.',
      5: 'Az otthon az alkotás és a gyerekek tere; a családi élete játékos, kreatív, olykor kifejezetten színpadszerű.',
      6: 'Az otthon munkahely is: a háztartás, a gondoskodás és a napi rutin adja a családi élet vázát, néha a pihenés rovására.',
      7: 'A gyökerei a párkapcsolatán keresztül újulnak meg; az otthont igazán a társsal együtt tudja megteremteni.',
      8: 'A családi múltban feldolgozatlan mélységek vannak; az örökség, a titkok és az átalakulás témái ide vezetnek vissza.',
      9: 'A gyökerei messzire nyúlnak: külföldi szál, kivándorlás, vagy a családtól örökölt hit és világkép határozza meg az otthonképét.',
      10: 'A magánélet és a hivatás összeér: családi vállalkozás, otthonról végzett munka, vagy a szülői minta közvetlen folytatása a pályán.',
      11: 'A családja baráti kör is; az otthona nyitott ház, ahol a közösség természetes módon otthon érzi magát.',
      12: 'A gyökerei homályba vesznek: hiányzó vagy titkolt családi szál, és egy csendes, elvonulásra alkalmas otthon iránti igény.'
    },

    5: {
      1: 'Az alkotás és a szerelem közvetlenül a személyiségén keresztül nyilvánul meg; a megmutatkozás nála természetes állapot.',
      2: 'A tehetsége pénzt hoz: az alkotás értékké, sok esetben megélhetéssé válik, és ez az önértékelését is emeli.',
      3: 'A kreativitása a szóban él — írás, előadás, ötletek —, jellemzően sok apró alkotás és sok könnyed flört formájában.',
      4: 'Az alkotás és a gyerekek a családhoz kötődnek; otthon a legszabadabb, és ott merész, amit kifelé nem mutat meg.',
      5: 'Erős, önjáró alkotókedv: a játék, a szerelem és az önkifejezés nála nem külön program, hanem alapállapot.',
      6: 'A tehetsége napi gyakorlássá és szakmává szelídül; az alkotás nála fegyelmezett munka, nem hangulat kérdése.',
      7: 'A szerelem partnerségbe fordul; az alkotás közös műhelyben, társsal együtt működik a legjobban.',
      8: 'A szerelme és az alkotása mély, intenzív, olykor válságos; a szenvedély nála átalakító erő, nem díszlet.',
      9: 'Az alkotása világnézetet fejez ki: a tanítás, az utazás és a nagy témák inspirálják, a puszta forma kevés neki.',
      10: 'A tehetsége nyilvános színpadra kerül; az alkotás a hivatásának és a hírnevének az alapja.',
      11: 'Az alkotása közösségben talál otthonra: a barátok a közönség, és a szerelem is gyakran barátságból nő ki.',
      12: 'Az alkotása a magányban születik; a szerelme rejtett vagy idealizált, a fantázia viszont gazdag és kimeríthetetlen terep.'
    },

    6: {
      1: 'A munka és az egészség kérdései a testén, a megjelenésén és a napi közérzetén keresztül szólalnak meg.',
      2: 'A mindennapi munkája közvetlenül a megélhetést szolgálja; a szakértelme a legfőbb tőkéje, és tudja is ezt.',
      3: 'A munkája sokrétű, mozgalmas és kommunikációs; több feladat fut egyszerre, és ez inkább élteti, mint fárasztja.',
      4: 'A munka és az otthon összeér: otthoni iroda, családi ügyek intézése, a háztartás mint komolyan vett feladat.',
      5: 'A napi munkája kreatív; a rutinba is bele kell férnie az örömnek, különben gyorsan kiüresedik számára.',
      6: 'A rendszeresség önmagában erő: a napi rend, az egészségtudatosság és a szakmai alaposság stabil vázat ad az életének.',
      7: 'A munka partnerségben zajlik; az egészsége és a közérzete is a kapcsolatai állapotát tükrözi vissza.',
      8: 'A munkája mély, terhelt vagy kockázatos területen zajlik; az egészség kérdései nála átalakulást hoznak, nem csak kellemetlenséget.',
      9: 'A szakmáját tanulás és távlat élteti: képzés, külföldi munka, oktatás tartozik a mindennapjaihoz.',
      10: 'A napi munkából épül a karrierje; a szakmai elismerés a kitartás és a minőség lassan érő eredménye.',
      11: 'A munkája csapatmunka: a kollégákból barátok lesznek, és a közös cél tartja fenn a napi rendet.',
      12: 'A munkája a háttérben, csendben vagy intézményi keretben folyik; a szolgálata gyakran láthatatlan marad mások előtt.'
    },

    7: {
      1: 'A társ szorosan az élete részévé válik; a kapcsolat közvetlenül alakítja az önképét és a döntéseit.',
      2: 'A partner anyagi ügyekben is szerepet játszik; a kapcsolat és a biztonság kérdése nála összefonódik.',
      3: 'A kapcsolat a beszélgetésen áll vagy bukik; a társát gyakran a közeli környezetéből vagy tanulás közben találja meg.',
      4: 'A párkapcsolata az otthonteremtésről szól; a társ a szó legteljesebb értelmében családtaggá válik.',
      5: 'A kapcsolata szerelemből, játékból és közös alkotásból él; a romantika nála nem díszlet, hanem alapfeltétel.',
      6: 'A partnersége a mindennapokban működik: közös munka, közös rutin, kölcsönös gondoskodás tartja össze.',
      7: 'A kapcsolat önmagában központi életterep; a másikkal való szembenézés a legfontosabb tanulása.',
      8: 'A kapcsolata mélyre visz: intimitás, közös vagyon, krízisek és újjászületések tartoznak hozzá.',
      9: 'A társa más világot hoz — külföldet, más kultúrát, más hitet —, és a kapcsolat tágítja a horizontját.',
      10: 'A partner a szakmai élete része; a kapcsolat státusz- és pályakérdés is egyben, nem csak magánügy.',
      11: 'A társa barát is; a kapcsolat közös célok és közös társaság körül szerveződik meg.',
      12: 'A kapcsolata rejtett, távoli vagy erősen idealizált; a másikban gyakran a saját tudattalanját keresi.'
    },

    8: {
      1: 'Az átalakulás témája a saját testén és személyiségén keresztül jelentkezik; többször újjászületik egy élet alatt.',
      2: 'A közös és a saját pénz szorosan összefügg: hitel, örökség vagy támogatás formálja az anyagi helyzetét.',
      3: 'A mélység nála szóvá válik — kutatás, elemzés, kimondott tabuk —, és nem riad vissza a nehéz témáktól.',
      4: 'A krízisei a családban gyökereznek; az örökség és a nemzedéki teher szorosan az otthonhoz köti.',
      5: 'Az átalakulás az alkotáson és a szenvedélyen át történik; az intenzitása alkotóerővé tud alakulni.',
      6: 'A mélyfolyamatok a testében és a munkájában mutatkoznak meg; a válságait munkával dolgozza fel.',
      7: 'A közös erőforrások a partnerségben dőlnek el; a kapcsolat egyszerre bizalmi és pénzügyi ügy nála.',
      8: 'Erős, önmagát tápláló mélység: a válságkezelés, a kutatás és az átalakítás nála természetes képesség.',
      9: 'A krízis világnézetté érik: a mély tapasztalatból hit, filozófia vagy tanítás lesz idővel.',
      10: 'Az átalakulás a pályán zajlik: karrierfordulók, hatalmi kérdések és mások sorsáért viselt felelősség.',
      11: 'A közös erőforrások a közösséghez kötődnek; a barátok támogatása krízisben döntőnek bizonyul.',
      12: 'A mélyfolyamatok tudattalanul dolgoznak; a feloldódás, az engedés és a spirituális átalakulás a fő téma.'
    },

    9: {
      1: 'A világnézete a személyisége része: hordozza és képviseli azt, amiben hisz, akkor is, ha nem szónokol róla.',
      2: 'A tudása és a meggyőződése anyagi értékké válik; a hite gyakorlati haszonnal is jár.',
      3: 'A nagy témák hétköznapi nyelven szólalnak meg nála: ismeretterjesztés, tanítás, sok olvasás jellemzi.',
      4: 'A hitét otthonról hozta; a világképe családi örökség, vagy éppen a gyökerek tudatos keresése.',
      5: 'A tanulása és a hite alkotásban fejeződik ki: a tudás játékká, előadássá vagy gyerekneveléssé válik.',
      6: 'A világnézetét a napi gyakorlat teszi próbára; a hite munkává, módszerré és szokássá fordul.',
      7: 'A világképét a kapcsolatai formálják; a társ vagy egy mester nyitja ki előtte a horizontot.',
      8: 'A hite mély, kutató és átalakuló; a nagy kérdései a válságokon át érnek be.',
      9: 'Természetes tágasság: az utazás, a tanulás és a szellemi keresés nála önjáró életprogram.',
      10: 'A tudása hivatássá válik: oktatás, jog, kiadás vagy nemzetközi pálya illik hozzá.',
      11: 'A világnézete közösséget teremt; eszmetársakkal együtt gondolkodik és cselekszik.',
      12: 'A hite befelé fordul: elvonulás, meditáció, csendes szellemi munka — nem hirdeti, hanem éli.'
    },

    10: {
      1: 'A pálya a személyiségére épül: ő maga a márka, és a hivatás visszahat az önképére is.',
      2: 'A karrier célja az anyagi biztonság; a szakmai pozícióját kereset és értékrend együtt méri.',
      3: 'A hivatása a szóra épül: média, tanítás, tárgyalás, ügyintézés, közvetítés.',
      4: 'A pályája a családhoz kötődik: otthonról dolgozik, családi vállalkozásban, vagy a szülői mintát folytatja.',
      5: 'A hivatása alkotó és látványos; a szakmai siker a tehetség megmutatásán múlik, nem a háttérmunkán.',
      6: 'A karrierjét aprómunka és szakmai alaposság építi; lassan, de kiszámíthatóan emelkedik.',
      7: 'A pályája partnerségben bontakozik ki; a társulás és a szerződés a karrierje motorja.',
      8: 'A hivatása mély, felelősségteljes terepen zajlik: hatalom, pénzügy, krízismenedzsment vagy gyógyítás.',
      9: 'A pályája külföldre, oktatásba vagy nemzetközi térbe visz; a szakmai útja tanulással tágul.',
      10: 'Erős, önmagát vivő ambíció: a hivatása világos, és a társadalmi szerep szinte magától adódik.',
      11: 'A karrierjét a hálózat és a közösségi cél viszi előre; a pártfogók és a barátok nyitnak ajtót.',
      12: 'A hivatása a háttérben teljesedik ki: intézmény, kutatás, segítő vagy spirituális munka, kevés nyilvánossággal.'
    },

    11: {
      1: 'A közösségben vezető szerepet vállal; a barátságai közvetlenül alakítják, hogy ki ő.',
      2: 'A kapcsolati hálója anyagi hasznot hoz; a barátokon keresztül nyílnak meg a lehetőségek.',
      3: 'A barátságai a mindennapi érintkezésből nőnek ki: sok laza, élénk, mozgalmas kapcsolat.',
      4: 'A baráti köre családdá válik; a közösség otthont ad neki, az otthona pedig közösségi tér.',
      5: 'A barátságaiban ott a játék és a szerelem; a közös célok alkotó projektek körül szerveződnek.',
      6: 'A barátai a munkából kerülnek ki; a közös cél a napi együttműködésben valósul meg.',
      7: 'A barátságból szerelem lesz, vagy a partner hozza a társaságot; a kettő nála nehezen választható szét.',
      8: 'A barátságai mélyek és sorsfordítók; a közösség krízisben mutatja meg az igazi arcát.',
      9: 'A közösségét közös világnézet tartja össze: szellemi kör, külföldi kapcsolatok, eszmei szövetség.',
      10: 'A hálózata a karrierjét szolgálja; a szakmai közösség és a jó név egymást erősíti.',
      11: 'Természetes közösségi ember: a barátság, a jövőkép és a csoport a legfőbb éltető közege.',
      12: 'A barátságai rejtettek vagy kevesek, de mélyek; a nagy céljai csendben, háttérből épülnek.'
    },

    12: {
      1: 'A rejtett és a tudattalan közvetlenül a személyiségén szűrődik át; olykor önmaga előtt is talány.',
      2: 'A háttérfolyamatok az anyagiakat érintik: rejtett tartalék, tisztázatlan pénzügy vagy jelentős adakozás.',
      3: 'A tudattalan gondolatokban és szavakban jelentkezik: erős intuíció, mellette kimondatlanul maradó feszültségek.',
      4: 'A rejtett világa az otthonához köti: visszahúzódó magánélet, családi titok, csendes menedék.',
      5: 'A tudattalan alkotásban tör felszínre; álmok, fantáziák és rejtett szerelmek táplálják a művét.',
      6: 'A háttérfolyamatok a testében és a napi rendjében jelentkeznek; a szolgálata gyakran láthatatlan marad.',
      7: 'A kapcsolataiban jelenik meg a tudattalan: idealizálás, megmentő szerep, vagy rejtve tartott viszony.',
      8: 'A mélység és a rejtettség egymást erősíti; a gyógyulás, a gyász és a spirituális átalakulás a fő téma.',
      9: 'A belső világa hitté és filozófiává érik: zarándoklat, elvonulás, csendes szellemi kutatás.',
      10: 'A hivatása a háttérben teljesedik ki, vagy a nyilvános szerepe mögött rejtett motívumok dolgoznak.',
      11: 'A közösségi élete zárt körben, segítő vagy szellemi csoportban zajlik; kevés, de fontos szövetségese van.',
      12: 'Erős belső élet: a magány nála nem hiány, hanem műhely, ahol a tudattalan a legszabadabban dolgozik.'
    }
  },

  /* ------------------------------------------------------------------ *
   *  3. Ház-kiegészítések
   *
   *  bodyArea  — a hagyományos melothesia (zodiákus-ember) szerinti
   *              testrész-megfelelés, a ház természetes jegyén keresztül.
   *  lifeAge   — a hagyományos hétéves lépcső: az I. háztól a XII.-ig
   *              12 x 7 = 84 év, ami az Uránusz teljes körforgása.
   *              Szemléleti modell, nem naptári menetrend.
   *  questions — a kérdések, amelyekre az adott ház válaszol.
   *  empty     — mit jelent (és mit nem jelent), ha nincs bolygó a házban.
   * ------------------------------------------------------------------ */
  houseExtra: {

    1: {
      bodyArea: 'fej, arc, koponya, valamint az egész alkat és az általános életerő',
      lifeAge: 'a csecsemő- és kisgyermekkor, nagyjából a születéstől 7 éves korig: az elkülönült én és a testkép kialakulása',
      questions: ['Ki vagyok én, mielőtt bármit is tennék?', 'Milyen benyomást keltek elsőre?', 'Hogyan vágok bele ösztönösen egy új helyzetbe?'],
      empty: 'Az üres I. ház nem jelent gyenge személyiséget. Ilyenkor az Aszcendens jegye és annak uralkodó bolygója írja le a fellépést, gyakran feltűnőbben is, mintha egy bolygó ülne a házban.'
    },

    2: {
      bodyArea: 'nyak, torok, hangszálak, pajzsmirigy',
      lifeAge: 'kora gyermekkor, nagyjából 7-től 14 éves korig: az enyém és a tiéd megkülönböztetése, az első saját tulajdon',
      questions: ['Mit tartok valóban értékesnek?', 'Miből tudom eltartani magam?', 'Mennyire becsülöm meg önmagam teljesítmény nélkül is?'],
      empty: 'Az üres II. ház nem szegénységet jelez. Az anyagi témák egyszerűen nem állnak az élet fókuszában; a ház csúcsán álló jegy és annak ura mutatja meg, hogyan alakul a pénzhez és az önértékeléshez fűződő viszony.'
    },

    3: {
      bodyArea: 'váll, kar, kéz, tüdő, idegrendszer',
      lifeAge: 'iskoláskor és korai serdülőkor, nagyjából 14-től 21 éves korig: a tanulás, a kortárskapcsolatok és az önálló mozgás ideje',
      questions: ['Hogyan gondolkodom és hogyan fejezem ki magam?', 'Milyen a viszonyom a testvéreimhez és a közvetlen környezetemhez?', 'Hogyan tanulok a leghatékonyabban?'],
      empty: 'Az üres III. ház nem jelent gyenge kommunikációt vagy testvértelenséget. A mindennapi érintkezés magától értetődően működik; a részleteket a ház ura és a csúcson álló jegy adja meg.'
    },

    4: {
      bodyArea: 'mellkas, mell, gyomor, emésztőrendszer',
      lifeAge: 'a fiatal felnőttkor eleje, nagyjából 21-től 28 éves korig: az önálló otthon megteremtése és a szülői háztól való leválás',
      questions: ['Honnan jövök, és mi az érzelmi alapom?', 'Mitől érzem otthon magam?', 'Mit hoztam magammal a családi múltból?'],
      empty: 'Az üres IV. ház nem jelent hideg otthont vagy hiányzó családot. A gyökerek témája egyszerűen kevesebb belső munkát kíván; a ház ura mutatja meg, hol és min keresztül talál otthonra az ember.'
    },

    5: {
      bodyArea: 'szív, hát, gerinc, keringési rendszer',
      lifeAge: 'a felnőttkor első teljes szakasza, nagyjából 28-tól 35 éves korig: az alkotás, a párválasztás és a gyerekvállalás időszaka',
      questions: ['Miben fejezem ki magamat a legszabadabban?', 'Mi okoz valódi örömet?', 'Milyen a viszonyom a gyerekekhez, a szerelemhez és a kockázathoz?'],
      empty: 'Az üres V. ház nem jelenti azt, hogy valaki tehetségtelen vagy gyermektelen marad. Az alkotás és a szerelem témái másutt, a ház urának helyzetén keresztül jelennek meg a képletben.'
    },

    6: {
      bodyArea: 'belek, hasüreg, anyagcsere, valamint a napi működés egésze',
      lifeAge: 'az érett felnőttkor, nagyjából 35-től 42 éves korig: a szakmai elmélyülés, a rutin és a test terhelhetőségének ideje',
      questions: ['Hogyan szervezem meg a mindennapjaimat?', 'Miben vagyok igazán hasznos?', 'Mit üzen a testem az életmódomról?'],
      empty: 'Az üres VI. ház nem garantál tökéletes egészséget, és nem is jelez munkanélküliséget. Ezen a területen jellemzően kevesebb a súrlódás; a hangsúlyt a ház ura és a csúcson álló jegy adja meg.'
    },

    7: {
      bodyArea: 'vese, deréktájék, bőr, hormonális egyensúly',
      lifeAge: 'az élet delelője felé, nagyjából 42-től 49 éves korig: a hosszú távú kapcsolatok és társulások mérlegre kerülnek',
      questions: ['Mit keresek a másikban?', 'Hogyan kötök és tartok meg egyezségeket?', 'Mit vetítek ki a partneremre önmagamból?'],
      empty: 'Az üres VII. ház nem jelent magányt vagy sikertelen párkapcsolatot. A kapcsolatok ilyenkor kevésbé problematikus terepet jelentenek; a ház ura mutatja meg, honnan és milyen minőségben érkezik a társ.'
    },

    8: {
      bodyArea: 'nemi szervek, kiválasztó rendszer, medence',
      lifeAge: 'az érettség mélyülő szakasza, nagyjából 49-től 56 éves korig: a veszteségek, az örökség és a belső átalakulás ideje',
      questions: ['Mit engedek el, és mit tartok görcsösen?', 'Hogyan bánok a máséval és a közössel?', 'Mi az, ami válságon át alakít át?'],
      empty: 'Az üres VIII. ház nem véd meg a válságoktól, és nem is jelez különös kockázatot. Ez a témakör egyszerűen nem az élet fő tanulóterepe; a ház ura jelöli ki, hol jelentkezik mégis.'
    },

    9: {
      bodyArea: 'csípő, comb, máj',
      lifeAge: 'a szellemi összegzés kezdete, nagyjából 56-tól 63 éves korig: a világkép letisztulása, a tanítás és a nagy utak ideje',
      questions: ['Miben hiszek, és miért éppen abban?', 'Mi tágítja a világomat?', 'Mit adok tovább abból, amit megértettem?'],
      empty: 'Az üres IX. ház nem jelent szűk látókört vagy hitetlenséget. A világnézet kialakítása nem külön küzdelem; a ház ura mutatja meg, mi táplálja a tanulási és utazási kedvet.'
    },

    10: {
      bodyArea: 'térd, csontok, ízületek, fogak, bőr',
      lifeAge: 'a pálya csúcsa, nagyjából 63-tól 70 éves korig: a társadalmi szerep és az addigi életmű mérlege',
      questions: ['Mivé akarok válni a világ szemében?', 'Milyen felelősséget vagyok hajlandó vállalni?', 'Mit hagyok magam után szakmailag?'],
      empty: 'Az üres X. ház nem jelent karrier nélküli életet. A hivatás kérdése ilyenkor kevesebb belső feszültséget hordoz; a Medium Coeli jegye és annak ura írja le a pálya irányát.'
    },

    11: {
      bodyArea: 'lábszár, boka, vérkeringés',
      lifeAge: 'a késői érettség, nagyjából 70-től 77 éves korig: a közösség, a barátságok és a továbbadott célok ideje',
      questions: ['Kikkel tartozom össze?', 'Milyen jövőt szeretnék, és kikkel együtt?', 'Mit kapok és mit adok a közösségemnek?'],
      empty: 'Az üres XI. ház nem jelenti azt, hogy valakinek nincsenek barátai. A közösségi élet egyszerűen kevesebb tudatos erőfeszítést kíván; a ház ura mutatja meg, milyen körökön keresztül érkeznek a szövetségesek.'
    },

    12: {
      bodyArea: 'lábfej, nyirokrendszer, immunrendszer',
      lifeAge: 'az élet lezáró szakasza, nagyjából 77-től 84 éves korig: a visszatekintés, az elengedés és a belső összegzés ideje',
      questions: ['Mi az, amit magam elől is rejtegetek?', 'Hol veszítem el a határaimat?', 'Mi az, amit csak csendben tudok feldolgozni?'],
      empty: 'Az üres XII. ház nem jelent rejtett ellenségeket vagy elmaradt spiritualitást. A tudattalan témái ilyenkor kevésbé sűrűsödnek össze; a ház ura mutatja meg, hol dolgoznak mégis a háttérfolyamatok.'
    }
  },

  /* ------------------------------------------------------------------ *
   *  4. Fényszög-értelmezések a hét klasszikus égitest 21 párosára
   *
   *  Kulcsformátum: 'kisebbik-nagyobbik' a sun, moon, mercury, venus,
   *  mars, jupiter, saturn sorrend szerint (pl. 'moon-venus').
   *
   *  Ahol a note mező szerepel, ott csillagászati korlát miatt bizonyos
   *  fényszögek nem jöhetnek létre — ezt a szöveg is jelzi.
   * ------------------------------------------------------------------ */
  aspectText: {

    'sun-moon': {
      conjunction: 'Újhold-alkat: az akarat és az érzelem egy irányba húz, ezért határozott és egységes a személyiség — kevés viszont a belső ellensúly, így nehezebben látja magát kívülről.',
      opposition: 'Telihold-alkat: a tudatos célok és az érzelmi szükségletek szembefeszülnek, gyakran a kapcsolatokban kivetítve; a feszültség tudatosítása hozza meg a valódi önismeretet.',
      trine: 'Az ösztönök és a szándékok könnyen összhangba kerülnek: természetes önbizalom és belső béke, amely mellett tudatos erőfeszítés kell a kihívások kereséséhez.',
      square: 'Belső súrlódás az akarat és a szükségletek között, gyakran a két szülői minta ütközéseként; ugyanez a feszültség tartja mozgásban és kényszeríti önismeretre.',
      sextile: 'Az érzelmi és az akarati oldal jól kiegészíti egymást, de ez lehetőség, nem automatizmus: akkor működik, ha tudatosan él vele.'
    },

    'sun-mercury': {
      note: 'A Merkúr sosem távolodik 28 foknál messzebbre a Naptól, ezért e két égitest között a gyakorlatban csak együttállás jöhet létre.',
      conjunction: 'A gondolkodás és az önazonosság összeolvad: éles észjárás és erős azonosulás a saját véleménnyel — nehezebb viszont kívülről ránézni a saját gondolataira. Ha a Merkúr három foknál közelebb van, a hagyomány szerint megégett: belül élénk a gondolat, kifelé nehezebben jut el.',
      opposition: 'Csillagászatilag nem fordulhat elő: a Merkúr sosem kerül szembe a Nappal.',
      trine: 'Csillagászatilag nem fordulhat elő: a Merkúr maximális elongációja jóval a 120 fok alatt marad.',
      square: 'Csillagászatilag nem fordulhat elő: a Merkúr sosem távolodik 90 fokra a Naptól.',
      sextile: 'Csillagászatilag nem fordulhat elő: a 60 fokos távolság meghaladja a Merkúr lehetséges elongációját.'
    },

    'sun-venus': {
      note: 'A Vénusz legfeljebb 48 fokra távolodik a Naptól, ezért közöttük a gyakorlatban csak együttállás (és határesetként félszextil) alakulhat ki.',
      conjunction: 'A vonzerő és az önazonosság összefonódik: kellemes fellépés, esztétikai érzék és erős harmóniaigény — az önérvényesítés viszont könnyen feláldozódik a béke kedvéért.',
      opposition: 'Csillagászatilag nem fordulhat elő: a Vénusz sosem kerül szembe a Nappal.',
      trine: 'Csillagászatilag nem fordulhat elő: a Vénusz elongációja messze elmarad a 120 foktól.',
      square: 'Csillagászatilag nem fordulhat elő: a Vénusz sosem távolodik 90 fokra a Naptól.',
      sextile: 'Csillagászatilag nem fordulhat elő: a 60 fok éppen meghaladja a Vénusz legnagyobb lehetséges elongációját.'
    },

    'sun-mars': {
      conjunction: 'Erős akarat és lendület: bátor, versengő, gyorsan cselekvő alkat, akinél a tett olykor megelőzi a mérlegelést.',
      opposition: 'Az önérvényesítés és az indulat gyakran a másikban jelenik meg; a nyílt konfliktusok tanítják meg arra, hogyan képviselje magát egyenesen, támadás nélkül.',
      trine: 'Egészséges önbizalom és természetes kezdeményezőkészség, jó fizikai energiákkal — ezeket érdemes valódi kihívásra fordítani, különben szétforgácsolódnak.',
      square: 'Türelmetlenség, hirtelen harag és bizonyítási kényszer feszíti; ugyanez az energia viszont fegyelmezve kitartó, magas szintű teljesítménnyé formálható.',
      sextile: 'A cselekvőkészség jól támogatja a célokat: kis lökésre gyorsan mozdul, de a kezdeményezést neki magának kell megtennie.'
    },

    'sun-jupiter': {
      conjunction: 'Nagyvonalú, optimista és önbizalommal teli alkat, akit a lehetőségek maguktól megtalálnak; a mértéktartás viszont külön tanulnivaló.',
      opposition: 'A tágulás vágya és az önazonosság feszül egymásnak: túlvállalás és nagyratörő tervek jellemzik, amíg meg nem találja a reális léptéket.',
      trine: 'Természetes szerencse, tágas világkép és jóindulat; a könnyedség mellé tudatosan kell hozzátennie a kitartást.',
      square: 'Hajlamos a túlzásra, a felnagyításra és az önhittségre, ugyanakkor éppen ez a lendület viszi nagy célok felé, ha reális keretet kap.',
      sextile: 'A növekedés és az önkifejezés jól kiegészíti egymást: tanulási és utazási lehetőségek nyílnak, ha valóban él velük.'
    },

    'sun-saturn': {
      conjunction: 'Komoly, felelősségtudó és fegyelmezett alkat: az önbizalom lassan épül, de amit felépít, az tartósnak bizonyul.',
      opposition: 'A tekintélyhez — gyakran az apai mintához — fűződő viszony feszültsége; korlátozva érzi magát, amíg meg nem tanulja a saját mércéjét használni a másokéi helyett.',
      trine: 'Kitartás, önfegyelem és megbízhatóság szinte adottságként; a szerénység mellett érdemes a saját teljesítményét is felvállalnia.',
      square: 'Önbizalomhiány, önostorozás és nehéz kezdetek kísérik, viszont éppen ez a fényszög nevel a leginkább érett, valódi szaktekintélyt — csak időbe telik.',
      sextile: 'A szerkezet és az önkifejezés jól összejátszik: a szorgalom kézzelfogható eredményt hoz, ha kitartóan él a lehetőséggel.'
    },

    'moon-mercury': {
      conjunction: 'Az érzelmek és a gondolatok szorosan összefonódnak: jó emlékezet és élénk beszéd, de a hangulat erősen színezi az ítéletet.',
      opposition: 'Az ész és az érzés szembefeszül: elemzi, amit érez, és érzi, amit gondol — a kettő összehangolása hosszú tanulás, a végén viszont ritka önismeret.',
      trine: 'Könnyed, természetes önkifejezés: jól szavakba önti, amit érez, és mások érzéseit is pontosan érti.',
      square: 'Az érzelmek zavarják a tiszta gondolkodást, a gondolkodás pedig elnyomja az érzéseket; a súrlódás viszont kivételes lélektani érzékké érhet.',
      sextile: 'Az érzés és a megfogalmazás jól kiegészíti egymást: jó kommunikációs érzék, ha tudatosan használja.'
    },

    'moon-venus': {
      conjunction: 'Meleg, gyengéd, kapcsolatra nyitott alkat: erős harmóniaigény és esztétikai érzék, olykor kényelemszeretettel párosulva.',
      opposition: 'Az érzelmi szükségletek és a kapcsolati elvárások feszülnek egymásnak; a szeretetigény és a függetlenség egyensúlyát kell megtalálnia.',
      trine: 'Természetes báj és érzelmi kiegyensúlyozottság: könnyen teremt jó légkört, de érdemes a konfliktusokat sem kerülnie.',
      square: 'A szeretetigény és az önérték kérdése összegabalyodik: kényeztetés vagy megfelelés a csapdája — a kiút a saját érték felismerése.',
      sextile: 'Az érzelmi élet és a kapcsolati készség támogatja egymást: barátságos, kellemes jelenlét, ha maga is kezdeményez.'
    },

    'moon-mars': {
      conjunction: 'Heves, közvetlen érzelmi reagálás: bátorság és lendület, ugyanakkor gyorsan fellobbanó indulat is.',
      opposition: 'Az érzelmi biztonság és a harci kedv szembefeszül; a konfliktusok jellemzően a kapcsolatokban robbannak ki, és ott is tanul belőlük a legtöbbet.',
      trine: 'Az érzések azonnal cselekvéssé válnak: bátor, spontán, jó ösztönökkel dolgozó alkat.',
      square: 'Ingerlékenység, dacos reakciók és régi sérelmek gyors felizzása jellemzi; a nyers érzelmi energia viszont jól irányítva komoly hajtóerő.',
      sextile: 'Az ösztön és a tett jó szövetsége: gyorsan és mégis érzékenyen reagál a helyzetekre, ha tudatosan használja.'
    },

    'moon-jupiter': {
      conjunction: 'Nagylelkű, derűs és bizakodó kedély, jó alapvető életérzéssel; a mértéktartás megtanulása tartozik hozzá.',
      opposition: 'Az érzelmi igények és a tágulás vágya feszül egymásnak: hajlam a túlzott elvárásra és az érzelmi túlfűtöttségre, amit a realitás szelídít meg.',
      trine: 'Természetes optimizmus és belső bőségérzet, könnyű kapcsolódással; jót tesz, ha önfegyelem is társul mellé.',
      square: 'Túlzott érzelmi lelkesedés és mértéken felüli nagyvonalúság jellemzi, ugyanez a melegség viszont valódi közösségépítő erő, ha keretet kap.',
      sextile: 'A jóindulat és az érzelmi nyitottság kiegészíti egymást: a lehetőségek jellemzően emberi kapcsolatokon át érkeznek.'
    },

    'moon-saturn': {
      conjunction: 'Visszafogott, komoly érzelmi világ: korán megtanult felelősséget, de nehezen enged közel magához másokat.',
      opposition: 'Az érzelmi szükséglet és a kötelesség szemben áll; a viszonyulását mások olykor hidegnek érzik, amit tudatos melegséggel lehet oldani.',
      trine: 'Érzelmi kitartás és megbízhatóság: nyugodt, jól terhelhető kedély, amely másoknak is támaszt ad.',
      square: 'Érzelmi magány, önmegvonás és a nem vagyok elég érzése kíséri — a legnehezebb, ugyanakkor a legérettebbé formáló fényszögek egyike, amely idővel valódi belső tartást ad.',
      sextile: 'A stabilitás és az érzelem jó szövetsége: megbízható és mégis érző jelenlét, ha épít rá.'
    },

    'mercury-venus': {
      note: 'A Merkúr és a Vénusz együttes elongációja miatt legfeljebb 76 fokra kerülhetnek egymástól, ezért közöttük csak együttállás, félszextil és szextil jöhet létre.',
      conjunction: 'Kellemes, mértéktartó kifejezésmód: a gondolat és az ízlés együtt dolgozik, jó érzékkel a szavakhoz, a formákhoz és a diplomatikus fogalmazáshoz.',
      opposition: 'Csillagászatilag nem fordulhat elő: a két bolygó sosem kerül szembe egymással.',
      trine: 'Csillagászatilag nem fordulhat elő: a lehetséges legnagyobb távolságuk jóval 120 fok alatt marad.',
      square: 'Csillagászatilag nem fordulhat elő: a maximális 76 fokos távolság nem éri el a 90 fokot.',
      sextile: 'A gondolkodás és az esztétikai érzék jól összejátszik: szép fogalmazás és jó tárgyalókészség, ha tudatosan használja.'
    },

    'mercury-mars': {
      conjunction: 'Éles, gyors, harcos elme: kiváló vitakészség, mellette viszont éles nyelv is.',
      opposition: 'A gondolkodás és a lendület vitába keveredik egymással; hajlamos a szócsatákra, amelyekben megtanulhatja a másik érveit is meghallani.',
      trine: 'Gyors felfogás és határozott kifejezésmód: jó döntési tempó, hasznos vitakészséggel párosulva.',
      square: 'Türelmetlen, olykor sértő fogalmazás és kapkodó gondolkodás jellemzi; fegyelmezve viszont kivételesen éles problémamegoldó képesség.',
      sextile: 'A gondolat és a tett jól összekapcsolódik: hatékony munkatempó, ha tudatosan él vele.'
    },

    'mercury-jupiter': {
      conjunction: 'Tág látókörű, lelkes elme: jó tanuló és jó előadó, akit néha elragad a nagy kép a részletek rovására.',
      opposition: 'A részlet és az egész feszül egymásnak: hajlam a túlbeszélésre és a nagyvonalú pontatlanságra, amit a fegyelem tesz valódi értékké.',
      trine: 'Természetes tanulási és tanítási képesség: könnyed fogalmazás, széles érdeklődés, jó áttekintés.',
      square: 'Túlzó ígéretek, felületesség és szétszórt figyelem kísérheti, ugyanakkor komoly szellemi kapacitás rejlik benne, ha irányt kap.',
      sextile: 'A tudás és a tágasság jól kiegészíti egymást: tanulási és utazási lehetőségek nyílnak, ha valóban él velük.'
    },

    'mercury-saturn': {
      conjunction: 'Fegyelmezett, alapos és komoly gondolkodás: lassabb, de mélyebb, ezért jól használható hosszú távú, rendszerezett munkához.',
      opposition: 'A gondolkodás és a szigor szembefeszül: önkritika és kimondási gátlás jellemzi, amit a tapasztalat és a szakmai magabiztosság old fel.',
      trine: 'Rendszerező elme és megbízható ítélőképesség: jó memória, gyakorlati bölcsesség, hasznos szakmai alaposság.',
      square: 'Gátlásos kifejezésmód, borúlátó gondolkodás és kezdeti tanulási nehézségek kísérik; kitartással viszont éppen ez a fényszög adja a legalaposabb szakembert.',
      sextile: 'A szerkezet és a gondolat jó szövetsége: a módszeres tanulás kézzelfogható eredményt hoz, ha rááll.'
    },

    'venus-mars': {
      conjunction: 'Erős vonzerő és szenvedélyes természet: a vágy és a szeretetigény együtt mozog, olykor türelmetlenül.',
      opposition: 'A gyengédség és a vágy szemben áll egymással; a kapcsolataiban vonzás és feszültség váltakozik, és éppen ebből tanul a legtöbbet.',
      trine: 'Természetes érzékiség és kapcsolati könnyedség: a vágy és a harmónia jól megfér egymással.',
      square: 'Feszült szerelmi élet, hullámzó vonzalmak és ütköző vágyak jellemzik; ugyanez viszont erős alkotó- és szenvedélyenergia, ha nem fojtja el.',
      sextile: 'A vonzalom és a kezdeményezés jól kiegészíti egymást: kellemes, mégis határozott kapcsolati stílus.'
    },

    'venus-jupiter': {
      conjunction: 'Nagylelkű, szeretetteljes és élvezetkedvelő: könnyen kap és könnyen ad, a mérték megtalálása viszont a fő lecke.',
      opposition: 'A vágy és a bőség feszül egymásnak: hajlam a túlköltekezésre és a kapcsolati túlzásokra, amit a realitás fokozatosan szelídít.',
      trine: 'Természetes vonzerő és szerencse a kapcsolatokban és az anyagiakban; a könnyedség mellé jó, ha kitartás is társul.',
      square: 'Mértéktelenség, kényelemszeretet és túlígérés kíséri, ugyanakkor őszinte melegség is, amely irányítva komoly kapcsolati tőkét épít.',
      sextile: 'A báj és a nagyvonalúság jó szövetsége: társasági és anyagi lehetőségek nyílnak, ha él velük.'
    },

    'venus-saturn': {
      conjunction: 'Hűséges, komoly és tartós kötődés: a szeretet lassan épül, de megbízható; a hidegség látszatát viszont tudatosan kell oldania.',
      opposition: 'A szeretetigény és a félelem szembefeszül; a kapcsolataiban távolságtartás vagy elutasítottság-élmény jelenik meg, amelyből érett szeretetképesség nőhet ki.',
      trine: 'Kitartó, felelős kapcsolati stílus: hosszú távú kötések és józan értékrend jellemzi.',
      square: 'Szeretetéhség, önértékelési kétely és nehéz kapcsolati kezdetek kísérik; ez a fényszög tanítja meg a leginkább, hogy a szeretet nem érdem kérdése.',
      sextile: 'A tartósság és a vonzalom kiegészíti egymást: komoly, megbízható kapcsolatok, ha nyit feléjük.'
    },

    'mars-jupiter': {
      conjunction: 'Lendületes, vállalkozó szellem, nagy tettvággyal; a mérték megtanulása tartozik hozzá.',
      opposition: 'A tett és a tágulás szembefeszül: túlvállalás és kockázatkeresés jellemzi, amíg meg nem tanul reálisan felmérni egy helyzetet.',
      trine: 'Természetes bátorság és jó időzítés: a lendület és a szerencse itt együtt dolgozik.',
      square: 'Meggondolatlan kockázat, harciasság és hirtelen nekilendülés kíséri; irányítva viszont kivételes teljesítőerő rejlik benne.',
      sextile: 'A cselekvés és a lehetőség jó szövetsége: a bátor lépés általában megtérül, ha valóban megteszi.'
    },

    'mars-saturn': {
      conjunction: 'Fegyelmezett, kitartó erő: lassabb, de sokkal tartósabb teljesítmény — a visszafojtott indulatra viszont figyelnie kell.',
      opposition: 'A lendület és a korlát ütközik: frusztráció és akadályozottság-érzés kíséri, amelyből idővel komoly kitartás és önuralom nőhet.',
      trine: 'Céltudatos, fegyelmezett cselekvés: jól bírja a hosszú távú megterhelést, és be is fejezi, amit elkezd.',
      square: 'Gátolt akarat, elfojtott harag és sorozatos akadályok jellemzik; éppen ez a fényszög fejleszti a leginkább a türelmet és a szívós munkabírást.',
      sextile: 'Az energia és a szerkezet jól kiegészíti egymást: módszeres, kitartó munkabírás, ha épít rá.'
    },

    'jupiter-saturn': {
      conjunction: 'A tágulás és a szerkezet találkozása: reális nagyravágyás, hosszú távú építkezés, óvatos, de tartós növekedés.',
      opposition: 'A bizakodás és az óvatosság szembefeszül: hullámzás a lelkesedés és a visszafogottság között, amíg meg nem találja a kettő egyensúlyát.',
      trine: 'Jó érzék a mérték és a lehetőség egyensúlyához: kiszámítható, folyamatos gyarapodás.',
      square: 'A növekedés és a korlát folyamatos ütközése: időzítési nehézségek és torlódó tervek — de éppen ez tanítja meg a valóságos léptéket.',
      sextile: 'A tervezés és a lehetőség jó szövetsége: a kitartó, mértéktartó építkezés idővel meghozza a gyümölcsét.'
    }
  }
};
