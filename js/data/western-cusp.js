/*
 * western-cusp.js — a házcsúcsokon álló jegyek értelmezése
 * Kiegészíti a western.js / western-ext.js adatait: melyik jegy áll
 * melyik ház csúcsán, és ez hogyan színezi az adott életterületet.
 *
 * Sima script (nem ES modul), file:// protokollon is betölthető.
 * Betöltési sorrend: western.js (és western-ext.js) után.
 *
 * Házkulcsok: 1–12 (szám)
 * Jegykulcsok: kos, bika, ikrek, rak, oroszlan, szuz,
 *              merleg, skorpio, nyilas, bak, vizonto, halak
 */

window.HDATA = window.HDATA || {};

window.HDATA.westernCusp = {

  intro: 'A házcsúcson álló jegy azt mutatja meg, milyen stílusban nyúlsz hozzá az adott életterülethez: nem azt, mi történik veled, hanem azt, ahogyan megfogod. Ugyanaz a téma egy Kos-csúcson lendületesen és nyersen, egy Halak-csúcson álmodozva és határok nélkül működik. Az alábbi leírások ezt a személyes hangnemet és a hozzá tartozó jellegzetes buktatót fogalmazzák meg házról házra.',

  signInHouse: {

    /* ---- 1. ház: ahogyan megjelensz és nekivágsz ---- */
    1: {
      kos: 'Az első benyomás nálad azonnali és határozott: belépsz egy térbe, és rögtön érezhető a jelenléted. Gyorsan cselekszel, sokszor előbb, mint ahogy végiggondolnád, ezért olyan helyzetekbe is belevágsz, amiket később nem akarsz végigvinni.',
      bika: 'Lassan melegszel be, de amit egyszer felvettél magadra — hanghordozás, tempó, stílus —, azt évekig hordod. Nyugodt, testi jelenlétet sugárzol, amitől mások megnyugszanak melletted; a bökkenő, hogy ha valaki noszogat vagy változást vár tőled, ösztönösen megmakacsolod magad.',
      ikrek: 'Szavakkal lépsz be a helyzetekbe: kérdezel, viccelsz, kapcsolatot teremtesz, és pár perc alatt kiismered a terepet. Rugalmasan váltasz hangnemet aszerint, hogy kivel beszélsz, ezért néha te magad sem tudod eldönteni, melyik változatod az igazi.',
      rak: 'Óvatosan közelítesz: előbb kitapogatod a hangulatot, és csak akkor mutatsz meg magadból valamit, ha biztonságban érzed magad. Kívülről lágynak és befogadónak látszol, ezért sokan azonnal megnyílnak előtted — közben te könnyen húzódsz vissza a páncélod mögé, ha megbántanak.',
      oroszlan: 'Nehéz nem észrevenni téged: van egy természetes színpadiasságod, ami a tartásodban, a hangodban, sokszor a külsődben is megjelenik. Jólesik, ha figyelnek rád, és ez hajt is előre, de ha elmarad az elismerés, hajlamos vagy jobban játszani a szerepet, mint amennyi jólesne.',
      szuz: 'Visszafogottan, ápoltan, kicsit tartózkodóan lépsz be egy helyzetbe, és először inkább megfigyelsz, mint bemutatkozol. Rögtön észreveszed, mi nincs rendben — magadon is, ezért az önkritika sokszor előbb szólal meg benned, mint az önbizalom.',
      merleg: 'Kedvesen, kiegyensúlyozottan és a másikra figyelve jelensz meg; ösztönösen keresed azt a hangnemet, ami összeköt titeket. Emiatt könnyen kedvelnek, viszont annyira igazodsz a társaságodhoz, hogy a saját szándékod csak később, néha késve fogalmazódik meg.',
      skorpio: 'Csendben, de sűrűn vagy jelen: keveset mutatsz magadból, mégis érezhető, hogy komolyan veendő ember érkezett. Előbb felméred, kiben lehet megbízni, és ez a tartózkodás védelem — ám könnyen azt az érzést kelti másokban, hogy titkolsz valamit.',
      nyilas: 'Nyíltan, lendületesen és jó adag humorral közelítesz az emberekhez; szívesen mondod ki, amit gondolsz, mielőtt mérlegelnéd a hatását. Ez felszabadítóan hat a környezetedre, de az őszinteséged néha nyersebbre sikerül, mint amennyire szántad.',
      bak: 'Komolyabbnak és összeszedettebbnek látszol, mint amilyennek belül érzed magad; fiatalon felnőttes, később egyre oldottabb a megjelenésed. Nem osztod meg könnyen a bizonytalanságaidat, ezért sokan erősnek látnak, miközben a felelősség terhét jórészt egyedül cipeled.',
      vizonto: 'Van benned valami eleve más: egy szokatlan stílusjegy, gondolat vagy hangnem, ami megkülönböztet, és ezt nem is akarod levetkőzni. Barátságosan, de egy lépés távolságból kapcsolódsz, és rosszul viseled, ha bárki meg akarja szabni, hogyan jelenj meg.',
      halak: 'Lágy, nehezen megfogható benyomást keltesz: az emberek gyakran a saját vágyaikat vagy hiányaikat látják beléd. Rendkívül érzékenyen veszed fel a környezet hangulatát, ezért egy rossz társaságban órák alatt elveszítheted a saját közérzetedet.'
    },

    /* ---- 2. ház: pénz, javak, önérték ---- */
    2: {
      kos: 'A pénz nálad gyorsan jön és gyorsan megy: hamar meglátsz egy lehetőséget, belevágsz, és a magad erejéből szerzed meg, amit akarsz. Az önértékelésed ahhoz kötődik, hogy meg tudod-e magad szerezni a dolgokat, a kockázat pedig az impulzusvásárlás és a túl korán meghozott anyagi döntés.',
      bika: 'Türelmesen, lépésről lépésre építed a hátteredet, és a birtoklás nálad testi élvezet is: jó anyagok, jó ízek, kézzelfogható javak. Nehezen válsz meg bármitől, ezért a felhalmozás idővel súlyt is jelenthet, nem csak biztonságot.',
      ikrek: 'Több forrásból, több sávon szeretsz keresni, és unod, ha egyetlen bevételi csatornához kell láncolnod magad. Az információ és a jó kapcsolat neked valódi vagyont ér, viszont a szétaprózódás miatt sok apró bevétel folyik el nyomtalanul.',
      rak: 'A pénz nálad érzelmi biztonság kérdése: akkor vagy nyugodt, ha van tartalék, és ösztönösen félreteszel a családra, az otthonra. Rosszkedvben viszont vásárolsz vagy eszel a hiány ellen, és olyasmihez is ragaszkodsz, aminek már csak emlékértéke van.',
      oroszlan: 'Nagyvonalúan bánsz a pénzzel, és fontos, hogy amit birtokolsz, az minőségi legyen és látszódjon is. Sokat tudsz keresni azzal, amiben tehetséges vagy, viszont a nagy gesztusok és a látvány ára könnyen felemészti a tartalékodat.',
      szuz: 'Pontosan tudod, mennyi jön be és mennyi megy ki; jól tervezel, és a megtakarítás nálad nem áldozat, hanem rendszer. A gond inkább az, hogy a szűkösségtől való félelem miatt akkor is szorongsz a pénz miatt, amikor tárgyilagosan nincs rá okod.',
      merleg: 'Szívesen költesz szépségre, kényelemre és arra, amit másokkal együtt élvezhetsz; az anyagiak nálad gyakran összefonódnak egy társsal vagy üzlettárssal. Nehezen mondasz nemet egy csábító ajánlatra, és az egyensúly keresése közben hol túlköltesz, hol bűntudatosan megvonsz magadtól mindent.',
      skorpio: 'Az anyagiakhoz mély, majdnem szenvedélyes viszonyod van: vagy nagyon szorosan fogod a pénzt, vagy váratlanul mindent felszámolsz és újrakezded. Jól látod, hol van érték ott, ahol más nem veszi észre, viszont a pénzügyekben nehezen osztod meg a kontrollt.',
      nyilas: 'Bizakodva viszonyulsz a pénzhez: hiszed, hogy mindig lesz elég, és ez a hit meglepően sokszor beválik. A tanulás, az utazás és a nagyobb ívű tervek megérik neked a kiadást, de a nagyvonalúság és a túlbecsült lehetőségek időnként lyukat ütnek a költségvetésen.',
      bak: 'Komolyan veszed az anyagi felelősséget, korán megtanulsz beosztani, és lassan, de tartósan építkezel. Az önértékelésed könnyen a teljesítményedhez és a számlaegyenlegedhez tapad, ezért a bőségben is lehet szűkösségérzeted.',
      vizonto: 'Szokatlan, hullámzó vagy több lábon álló módon szerzed a jövedelmet, és a technika, az újdonság, a közösség gyakran szerepet kap benne. Nem akarsz a birtoklás foglya lenni, a bökkenő viszont, hogy a kiszámíthatatlan bevételek mellett nehezen alakítasz ki stabil tartalékot.',
      halak: 'Lazán, néha varázsütésszerűen bánsz a pénzzel: jön, ha kell, de a pontos számok és a határidők könnyen kicsúsznak a kezedből. Sokat adsz másoknak, olykor a saját károdra, ezért fontos, hogy legyen valaki vagy valami rendszer, ami keretet ad az anyagi ügyeidnek.'
    },

    /* ---- 3. ház: gondolkodás, beszéd, tanulás ---- */
    3: {
      kos: 'Gyorsan kapcsolsz és gyorsan mondod ki: a beszélgetésben a lényeget keresed, a hosszú felvezetés idegesít. Vitában is otthon vagy, viszont hajlamos vagy közbevágni, és a végig nem hallgatott mondatokból születnek a félreértéseid.',
      bika: 'Lassan, alaposan gondolkodsz, és amit egyszer megértettél, azt véglegesen tudod. Nyugodt hangon beszélsz, amitől megbíznak benned, de egy új nézőpontot csak sokadszorra engedsz közel magadhoz.',
      ikrek: 'Élvezed a szavakat: könnyen fogalmazol, sok mindenről tudsz valamit, és folyamatosan információt gyűjtesz. A veszély a felszínesség és a szétszórtság — sok félbehagyott könyv, kurzus és beszélgetés maradhat utánad.',
      rak: 'Nem tényekben, hanem hangulatokban gondolkodsz: megérzed, mi van a mondatok mögött, és jól emlékszel arra, ki hogyan beszélt veled. Ha megbántanak, elhallgatsz vagy célzásokban közlöd a sértettséget ahelyett, hogy kimondanád.',
      oroszlan: 'Színesen, lendületesen és jól hallhatóan fejezed ki magad; szeretsz történetet mesélni, és tudod tartani a figyelmet. Amikor a véleményedet kétségbe vonják, könnyen személyes sértésként éled meg a szakmai vitát is.',
      szuz: 'Pontos, tagolt, tényszerű a gondolkodásod: észreveszed az ellentmondást, a hibás adatot, a rosszul megfogalmazott mondatot. Ez remek elemzővé és szerkesztővé tesz, de a részletek javítgatása közben néha elvész a beszélgetés melege.',
      merleg: 'Udvariasan, kiegyensúlyozottan fogalmazol, és ösztönösen keresed azt a formát, amivel senkit nem bántasz meg. Jó közvetítő vagy, viszont a döntéseidet halogatod, mert minden érvet és ellenérvet újra és újra átfordítasz magadban.',
      skorpio: 'A felszíni társalgás untat: azt akarod tudni, mi van mögötte, és a kérdéseid gyakran kényelmetlenül pontosak. Sokat magadban tartasz, ezért a környezeted nem mindig érti, miért reagálsz olyan élesen egy odavetett megjegyzésre.',
      nyilas: 'Nagy összefüggésekben gondolkodsz, és szívesen fordítod a beszélgetést elvekre, tanulságokra, tágabb képre. Lelkesítő előadó vagy, de a részletek pontatlansága és az oktató hangnem az, ami visszaüthet.',
      bak: 'Fegyelmezetten, célra tartva tanulsz és beszélsz: kevés szóval mondod el, aminek súlya van. Ez tekintélyt ad, ugyanakkor a saját gondolataidat is szigorúan megszűröd, és sok jó ötleted azért marad kimondatlan, mert még nem tartod elég késznek.',
      vizonto: 'Eredeti, ugrásszerű gondolkodás jellemez: gyakran a végén kezded, és olyan összefüggéseket látsz meg, amikre mások csak később jönnek rá. Nehezen viseled a magyarázást, ezért néha úgy tűnik, mintha átugranál lépéseket, amiket a másik még nem tett meg.',
      halak: 'Képekben, hangulatokban, asszociációkban gondolkodsz, és a megérzésed sokszor előbb tud valamit, mint az érveid. A pontos megfogalmazás és a határidős ügyintézés viszont könnyen kicsúszik a kezedből, ezért érdemes írásban rögzítened a megbeszélteket.'
    },

    /* ---- 4. ház: otthon, család, gyökerek ---- */
    4: {
      kos: 'Otthon sem vagy csendes: nálad a család élénk, néha hangos, és te vagy az, aki mozgásba hozza a dolgokat. Korán önállósodni akartál, és a régi családi feszültségek jó eséllyel nyílt összecsapásokban, nem elfojtásban jelentek meg.',
      bika: 'Az otthonod menedék és befektetés is egyben: fontos a kényelem, az illat, az étel, a megszokott sarok. Nehezen költözöl, és a régi bútoroktól, szokásoktól akkor sem válsz meg szívesen, ha már rég kinőtted őket.',
      ikrek: 'Az otthon nálad inkább élénk találkozóhely, mint elzárt fészek: jönnek-mennek az emberek, szól a beszéd, és a testvéri vagy rokoni szálak súlya nagy. Előfordulhat két lakóhely vagy sok költözés, és a gyökerekhez fűződő viszonyod is mozgékony, nem véglegesített.',
      rak: 'A család a legmélyebb kérdésed: itt vagy a legsebezhetőbb, és itt tudsz a leginkább gondoskodni. Erős a kötés az anyai vonalhoz, és ha az érzelmi biztonságot nem kaptad meg időben, felnőttként a saját fészek megteremtése lesz a legfontosabb ügyed.',
      oroszlan: 'Szép, tágas, mutatós otthonra vágysz: vendégeket fogadni, ünnepelni, magad köré gyűjteni a családot. Otthon is központ szeretnél lenni, ezért nehéz pillanat, amikor a család nem téged tesz a történet közepére.',
      szuz: 'Rendezett otthonban tudsz megnyugodni, és a takarítás, a rendrakás nálad valódi lelki eszköz. A családban gyakran te vagy, aki mindent elintéz és mindenkit helyre tesz, közben a kritikus szemed a legközelebbieket találja el a legérzékenyebben.',
      merleg: 'Az otthon nálad harmónia kérdése: fontos az esztétika, és nehezen viseled, ha feszültség ül a falak között. Békítesz, simítasz, engedsz, de ha túl sokáig kerülöd a nyílt szót, a család csendes elégedetlensége évekig elhúzódhat.',
      skorpio: 'A családi múltadban van valami, amit nem beszéltetek ki: titkok, mély kötések, erős hatalmi szálak. Te magad is zárt ajtók mögött éled a magánéleted, és az otthonod inkább erőd, mint nyitott ház.',
      nyilas: 'A gyökereid tágasak: külföld, más kultúra, vallás vagy szellemi hagyomány gyakran átszövi a családi történetet. Nagy térben érzed jól magad, és nehezen viselnéd, ha egy szűk lakás és egy szűk világkép közé zárnának.',
      bak: 'A családban korán komolyan kellett venned magad: felelősség, kötelesség, néha egy szigorú vagy távoli szülő emléke. Az otthont később, kitartó munkával építed fel, és megéri, mert az évekkel nálad valóban oldódik a szigor.',
      vizonto: 'A családod szokatlan felállású, vagy te léptél ki tudatosan a hagyományos családmintából. Otthon is kell a saját tered és a szabadságod, és inkább a választott közösséged, mint a vér szerinti rokonságod jelenti neked az igazi hátteret.',
      halak: 'Az otthon nálad hangulat kérdése: érzed a falakat, a régi történeteket, és könnyen felszívod a család rejtett szomorúságát. Idealizálhatod vagy homályban hagyhatod a származásodat, ezért fontos, hogy legyen egy csendes saját sarkod, ahol leteheted mások érzéseit.'
    },

    /* ---- 5. ház: alkotás, szerelem, játék ---- */
    5: {
      kos: 'Szerelemben te teszed meg az első lépést, és a hódítás izgalma legalább annyira vonz, mint maga a másik. Az alkotásban is a nekifutás a legjobb részed, a kihívás pedig az, hogy a lelkesedés elmúltával is ott maradj a félkész műnél.',
      bika: 'Az élvezet nálad testi és lassú: jó étel, érintés, zene, kézzelfogható alkotás. Szerelemben hűséges és kitartó vagy, de a birtoklási vágy és a megszokáshoz ragaszkodás könnyen kiszárítja a játékot a kapcsolatból.',
      ikrek: 'Szavakkal, humorral, kacérkodással udvarolsz, és aki untat, azt gyorsan elveszíted. Sok párhuzamos ötleted, hobbid, flörtöd lehet, ezért a mélységet nálad tudatosan kell választani, mert magától nem alakul ki.',
      rak: 'A szerelem és az alkotás nálad ugyanabból a forrásból jön: az érzelmi ráhangolódásból. Gyorsan kötődsz és mélyen érzel, de ha nem érzed viszonzottnak magad, inkább duzzogsz vagy visszahúzódsz, mint hogy megkérdezd, mi történt.',
      oroszlan: 'Ez a te elemed: szeretsz ragyogni, ajándékozni, nagy gesztusokat tenni, és az önkifejezés nem hiúság nálad, hanem életszükséglet. A buktató a visszajelzéstől való függés — ha nem tapsolnak, hajlamos vagy azt hinni, hogy nem is voltál jó.',
      szuz: 'A játékhoz és a szerelemhez is komolyan állsz hozzá: előbb megvizsgálod, biztonságos-e, aztán engeded el magad. Kiváló mesterségbeli tudást fejlesztesz abban, amit alkotsz, csak épp a belső bíráló miatt ritkán engeded, hogy bárki lássa a félkész változatot.',
      merleg: 'Vonz a széppé formált udvarlás: a hangulat, a kettesben töltött este, a jól eltalált gesztus. Könnyen szerelmes leszel a szerelembe, és néha inkább fenntartod a kellemes hangulatot, mint hogy megkérdezd magadtól, valóban jó-e neked ez az ember.',
      skorpio: 'Nálad nincs félig szerelem: vagy mindent beleteszel, vagy hozzá sem kezdesz, és a féltékenység is ehhez a hőfokhoz tartozik. Az alkotásaidban a sötétebb, nyersebb rétegek is megjelennek, és éppen ez adja az erejüket.',
      nyilas: 'A szerelem és a szórakozás nálad kalandot jelent: utazás, új élmény, nevetés, tágas terek. Nagyvonalú és lelkesítő partner vagy, de akkor riadsz meg, amikor a másik szűkíteni kezdi a mozgásteredet.',
      bak: 'Óvatosan és komolyan nyílsz meg, és inkább a tartós, kiszámítható kapcsolatot választod, mint a fellángolást. Az alkotásban mestermunkára törekszel, viszont a szigorú mércéd elveszi a folyamat örömét — a játékot nálad tanulni kell.',
      vizonto: 'Szokatlan szerelmi és alkotói utakat jársz: barátságból induló kapcsolatok, szabad formák, közös alkotás másokkal. Nehezen viseled a birtoklást, ezért a szenvedélyt is inkább a fejeden keresztül engeded be, mint a testeden.',
      halak: 'Álmodozva, romantikusan és határok nélkül szeretsz: könnyen idealizálod a másikat, és a fantázia sokszor szebb, mint a valóság. Az alkotásban rendkívül ihletett vagy, de a formába öntéshez keresned kell valakit vagy valamit, ami földet ad az anyagnak.'
    },

    /* ---- 6. ház: hétköznapi munka, rutin, egészség ---- */
    6: {
      kos: 'A hétköznapokban is versenyt futsz: gyorsan dolgozol, sokat vállalsz, és a monotónia perceken belül idegesíteni kezd. A tested ezt fejfájással, gyulladással vagy hirtelen kimerüléssel jelzi, ha nem hagysz magadnak visszakapcsolást.',
      bika: 'Egyenletes, kitartó munkatempó jellemez: nem vagy gyors, de megbízhatóan végigviszed, amit elkezdtél. Az egészségedben az étkezés és a testi kényelem a kulcskérdés, és a megszokott rossz szokásokat rendkívül nehezen cseréled le.',
      ikrek: 'Egyszerre több feladattal, változó helyszínekkel és sok beszéddel jársz jól; a nyolc óra ugyanaz fojtogató neked. Az idegrendszered az egészséged gyenge pontja, a felgyűlt információ és a nyugtalanság alvászavarban is megjelenhet.',
      rak: 'Akkor dolgozol jól, ha érzelmileg biztonságos a közeg, és van gondoskodó szerepe annak, amit csinálsz. A munkahelyi feszültséget viszont a gyomrodban hordozod, és a kollégák hangulatát is hazaviszed magaddal.',
      oroszlan: 'Beleteszed a szívedet a munkádba, és fontos, hogy legyen benne alkotás és látható eredmény. Ha nem ismerik el a mindennapi teljesítményedet, elmegy a kedved; a szíved és a hátad az, ami a túlhajtást leghamarabb megérzi.',
      szuz: 'Itt vagy elemedben: rendszert építesz, listát vezetsz, kiszűröd a hibát, és a részletek pontos elvégzése valódi elégedettséget ad. Az árnyoldal a folyamatos elégedetlenség és a testi tünetekre irányuló túlzott figyelem — a szorongásod az emésztésedben jelentkezik.',
      merleg: 'Kellemes környezetben, jó kollégákkal és tiszta munkamegosztással tudsz jól teljesíteni; a nyers hangnem konkrétan leblokkol. Hajlamos vagy a saját feladatod helyett mások dolgát elrendezni, és a nemet mondás halogatása vezet a kimerüléshez.',
      skorpio: 'Megszállottan tudsz dolgozni, ha valami tényleg érdekel, közben pedig simán figyelmen kívül hagyod a felszínes elvárásokat. A munkahelyi hatalmi játszmákat azonnal átlátod, de a kimondatlan feszültséget a tested viseli el helyetted.',
      nyilas: 'Akkor vagy jó munkaerő, ha van a napjaidban mozgás, tanulás, tágasság vagy értelmes cél; a ketrecbe zárt rutint sokáig nem bírod. Nagyvonalúan vállalsz, néha többet, mint amennyi belefér, ezért a túlvállalás a legjellemzőbb terhelésed.',
      bak: 'Fegyelmezetten és felelősen dolgozol, gyakran te vagy az, akire mindent rá lehet bízni. Ez rangot ad, de a szünet nélküli teljesítés miatt a csontok, az ízületek és a krónikus feszültség figyelmeztetnek, hogy nem vagy gép.',
      vizonto: 'Szabad beosztás, technika, csapatmunka vagy újító feladat: ezekben működsz jól, a merev protokoll viszont kifejezetten fáraszt. A napirended szabálytalan, ezért az egészségedet inkább az alvás és az étkezés kiszámíthatatlansága viseli meg, mint maga a munka.',
      halak: 'Beleolvadsz a munkádba és a kollégáid hangulatába: sokat adsz, gyakran ki nem mondott elvárások mentén. A határok hiánya miatt hamar elfáradsz, ezért neked a rendszeres pihenés és a világos munkaidő nem luxus, hanem gyógyszer.'
    },

    /* ---- 7. ház: párkapcsolat, társ, szerződések ---- */
    7: {
      kos: 'Olyan társ vonz, akiben van tűz és önállóság, közben pont vele ütközöl a legtöbbet. A kapcsolataidban gyorsan lángolsz fel, és a saját akaratosságodat többnyire a partnereden keresztül ismered fel.',
      bika: 'Tartós, kiszámítható kötést keresel, és a szerelemben az anyagi meg a testi biztonság sem mellékes szempont. Sokáig kitartasz egy kapcsolat mellett, néha tovább is, mint ameddig valóban jó, mert a szakítás gondolata megrémít.',
      ikrek: 'Beszélgetni akarsz a társaddal, és ha ez nem működik, hiába minden más. Lehet, hogy több fontos kapcsolatod lesz, vagy egy olyan társ, akiben több személyiség fér el; az unalom nálad valódi kapcsolati kockázat.',
      rak: 'A párkapcsolatban otthont keresel: gondoskodást, érzelmi közelséget, közös fészket. Az érzékenységed miatt viszont apróságon is megsértődsz, és a kimondatlan sérelmek lassan falat építenek kettőtök közé.',
      oroszlan: 'Olyan társra vágysz, akire büszke lehetsz, és aki téged is büszkén mutat fel. Nagyvonalú és hűséges partner vagy, de rosszul viseled, ha a kapcsolatban nem érzed magad különlegesnek.',
      szuz: 'Alaposan megvizsgálod a partnert, mielőtt elköteleződsz, és a szeretetet is konkrét, hasznos tettekben fejezed ki. A kritikus szemed viszont a legközelebbi emberre irányul a legélesebben, és a javítgatás nálad könnyen a szeretet helyére kerül.',
      merleg: 'A párkapcsolat nálad az élet fő ügye: társsal érzed magad teljesnek, és sokat teszel a béke fenntartásáért. A veszély, hogy annyira igazodsz, hogy elveszíted a saját igényeidet, és a felgyűlt sérelmek egyszer csak hirtelen szakításban törnek ki.',
      skorpio: 'Mély, sorsszerű, néha átalakító erejű kapcsolatokat vonzol, ahol a bizalom és a kontroll a fő kérdés. Mindent akarsz vagy semmit, és a féltékenység, a hatalmi játszma vagy egy krízis gyakran ezen a területen tanít meg valamit.',
      nyilas: 'Olyan társ kell, akivel tanulni és tágulni lehet: közös utazás, közös világnézet, sok nevetés. A szabadságod viszont nem alku tárgya, és a hivatalos elköteleződéstől akkor is idegenkedhetsz, ha egyébként hűséges vagy.',
      bak: 'Komolyan veszed a kötelezettséget: nem játszol a kapcsolatokkal, és a tartós, felelős felállás vonz. Előfordul, hogy idősebb vagy komolyabb partnerhez kötődsz, és hogy az elköteleződés későn, de annál stabilabban érkezik.',
      vizonto: 'Barátságra épülő, egyenrangú, szabad kapcsolatot keresel, ahol nem kell egymás életét felügyelni. A távolságtartás azonban két irányban vág: te is nehezen engedsz igazán közel bárkit, ha érzelmi függés fenyeget.',
      halak: 'Együttérző, önzetlen partner vagy, aki hajlamos megmenteni, felemelni vagy idealizálni a másikat. Ez gyönyörű tud lenni, de a határok hiánya miatt olyan társat is vonzhatsz, aki jóval többet vesz el, mint amennyit ad.'
    },

    /* ---- 8. ház: közös értékek, intimitás, válság ---- */
    8: {
      kos: 'A válságokra azonnali cselekvéssel válaszolsz: nem rágódsz sokat, hanem nekimész annak, ami fáj. A közös pénz és az intimitás terén viszont épp a türelmetlenséged okoz éles konfliktust, mert nehezen viseled, ha a másiknak több idő kell.',
      bika: 'A mély átalakulást lassan és vonakodva engeded be, de amit egyszer feldolgoztál, azt véglegesen letetted. A közös anyagiakban stabilizáló erő vagy, ugyanakkor a ragaszkodás miatt a veszteséget nehezebben gyászolod meg, mint kellene.',
      ikrek: 'Kérdezéssel, olvasással, megértéssel dolgozod fel a nehéz dolgokat: ami megnevezhető, az már kevésbé félelmetes. A közös anyagiaid több szálon futnak, és jó eséllyel te tudod meg elsőként azt, amit mások titkolnak.',
      rak: 'Az intimitás nálad az érzelmi biztonságon múlik: ha nem érzed magad védve, a tested és a lelked is bezárul. A veszteséget mélyen és sokáig hordozod, és a családi örökség kérdései hangsúlyosan felmerülhetnek az életedben.',
      oroszlan: 'A krízisekből büszkén és megerősödve akarsz kikerülni, és a gyengeség megmutatása jóval nehezebb neked, mint maga a próbatétel. Az intimitásban is szükséged van elismerésre, ezért a másik visszahúzódását könnyen éled meg elutasításként.',
      szuz: 'A nehéz helyzeteket elemzéssel és gyakorlati rendrakással kezeled: kimutatás, terv, tiszta ügyintézés. A közös pénzügyeket példásan viszed, de a saját félelmeidhez és vágyaidhoz nehezen engeded közel az irányítást elengedő ellazulást.',
      merleg: 'Az intimitásban a kölcsönösség a legfontosabb kérdésed: pontosan érzed, ha billen a mérleg. A közös vagyon, az örökség vagy egy válás ügyében a méltányos megállapodást keresed, és a nyílt ütközés kerülése az, ami ezt megnehezíti.',
      skorpio: 'Otthon vagy a mélységben: kibírod a válságot, és sokszor épp a legnehezebb időszakok után születik meg belőled valami új. A kockázat a kontroll és a titkolózás — a bizalom megadása nagyobb feladat neked, mint a fájdalom elviselése.',
      nyilas: 'A krízist tanulságként fogod fel: keresed a jelentését, és képes vagy elhinni, hogy jóra fordul. Ez valódi erő, de az anyagi kockázatokat és a másokkal közös pénzek kezelését hajlamos vagy túl könnyen venni.',
      bak: 'Fegyelemmel és összeszorított foggal viszed át magad a nehéz időszakokon, a közös anyagiakban pedig komoly, számonkérhető rendet tartasz. A gyász és a félelem viszont sokáig lefagyva marad benned, mert nem engeded meg magadnak az összeomlást.',
      vizonto: 'Meglepően távolságtartóan viszonyulsz a végső kérdésekhez: inkább megérteni akarod a folyamatot, mint átélni. A közös pénzügyekben szokatlan megoldásokat választasz, és a hirtelen fordulatok, váratlan veszteségek vagy nyereségek nem idegenek az életedtől.',
      halak: 'A határaid eleve átjárhatók, ezért az intimitásban mély összeolvadásra vagy képes — és arra is, hogy elveszítsd magad a másikban. A veszteséget lelki-szellemi úton dolgozod fel, de a pénzügyi részletek homályban hagyása komoly bajt okozhat.'
    },

    /* ---- 9. ház: világkép, hit, távolság, tanulás ---- */
    9: {
      kos: 'A világnézeted harcos: azonnal kiállsz azért, amit igaznak tartasz, és szívesen vitatkozol elvekről. A tanulásban a nekifutás megy jól, a hosszú, aprómunkás elmélyülés kevésbé, ezért sok félbehagyott kurzusod lehet.',
      bika: 'Ahhoz hiszel, amit megtapasztaltál: a kézzelfogható, bevált igazságokat becsülöd, az elvont teóriákat nem. Az utazás nálad az élvezetről szól, a meggyőződéseidet pedig rendkívül nehéz elmozdítani, ha egyszer megszilárdultak.',
      ikrek: 'Sok mindent olvasol és sok minden érdekel, de nehezen köteleződsz el egyetlen világnézet mellett. Ez nyitottá és sokoldalúvá tesz, ugyanakkor a szilárd belső iránytű kialakítása külön feladat számodra.',
      rak: 'A hited érzelmi és családi gyökerű: az számít igaznak, ami otthonos és biztonságos. Az utazás akkor jó neked, ha van hova hazatérni, és a nagy szellemi kérdésekre inkább megérzéssel, mint érveléssel válaszolsz.',
      oroszlan: 'Meggyőződéssel és lelkesedéssel képviseled a világnézetedet, és jó tanár vagy előadó válhat belőled. A buktató, hogy a saját igazságodhoz erős személyes büszkeség tapad, ezért nehezen ismered el, ha tévedtél.',
      szuz: 'Kritikusan vizsgálsz meg minden nagy állítást: bizonyítékot, forrást, pontosságot kérsz. Kiváló kutató válhat belőled, viszont a szüntelen ellenőrzés közben néha elkerül a nagy kép öröme és a hit egyszerű élménye.',
      merleg: 'Több nézőpontot is meg tudsz hallgatni, és a világképed az igazságosság körül forog. Ez kulturált, nyitott gondolkodóvá tesz, de a saját álláspontod kimondása gyakran késik, mert mindig van még egy ellenérv, amit mérlegelnél.',
      skorpio: 'A felszínes hitrendszerekkel nem tudsz mit kezdeni: a mélyben kutatsz, gyakran a tabuk és a rejtett tudás felé. Amiben hiszel, azt teljes súllyal képviseled, és egy-egy világnézeti fordulat az életedben szinte újjászületésszerű.',
      nyilas: 'A tágasság alapszükséglet nálad: utazás, idegen kultúra, filozófia, nagy összefüggések. Lelkesítően tudsz beszélni arról, amiben hiszel, de a mértéket és az apró tényeket könnyen elveszíted közben.',
      bak: 'Komolyan és rendszerezetten építed a tudásodat, gyakran hivatalos képzésen, fokozaton keresztül. A világnézeted józanabb és konzervatívabb az átlagnál, és a hitet is inkább felelősségnek, mint eksztázisnak éled meg.',
      vizonto: 'Szokatlan, néha kifejezetten lázadó gondolkodás jellemez: a bevett dogmák helyett a saját fejeddel gondolod végig a nagy kérdéseket. A jövő, a tudomány és a társadalmi haladás érdekel, és nem tűröd, ha valaki készen akarja adni a válaszokat.',
      halak: 'Nem érvekkel, hanem megérzéssel és belső élménnyel jutsz el a hitedhez; a misztikus, művészi, együttérző utak vonzanak. A gond, hogy hajlamos vagy elhinni, amit szeretnél, ezért jó, ha van melletted valaki, aki földközelben tart.'
    },

    /* ---- 10. ház: hivatás, nyilvános szerep, tekintély ---- */
    10: {
      kos: 'Vezetni akarsz, vagy legalább a magad ura lenni: nehezen viseled, ha valaki fölötted áll és lassít. Gyorsan futsz neki egy pályának, és a váltásoktól sem félsz, viszont a kitartás hiánya időnként lenullázza az addig felépítettet.',
      bika: 'Lassú, egyenletes szakmai emelkedés jellemez, és a szilárd, jövedelmező, kézzelfogható területek illenek hozzád. Megbízhatóként tartanak számon, de ha egy pálya kifullad, akkor is éveket maradsz benne a megszokás miatt.',
      ikrek: 'A pályád többfelé ágazik: gyakran két szakma, két szerep vagy folyamatos újratanulás jellemez. A kommunikáció, a közvetítés, az információ a fő eszközöd, a kockázat pedig, hogy egyik területen sem mélyülsz el eléggé.',
      rak: 'Olyan hivatás illik hozzád, ahol gondoskodhatsz, védhetsz vagy hátteret adhatsz; a rideg, versengő közeg kifárasztja az idegeidet. A szakmai megítélés érzelmileg is megvisel, ezért a nyilvános kritikát sokáig hordozod magaddal.',
      oroszlan: 'Látható szerepre születtél: olyan pálya visz előre, ahol nevet szerezhetsz, alkothatsz vagy vezethetsz. Sokat adsz a hivatásodnak, de az elismerés utáni vágy miatt a háttérmunkát nehezen viseled hosszú távon.',
      szuz: 'Szakértőként emelkedsz: pontosság, alaposság, mesterségbeli tudás — erre épül a jó híred. Ritkán tolakszol előre, ezért gyakran nálad kevésbé felkészültek kapják a pozíciót, miközben a valódi munkát te végzed.',
      merleg: 'A pályádon a kapcsolatok, a tárgyalás, az esztétika vagy a méltányosság kérdései kapnak főszerepet. Jól képviselsz másokat, viszont a saját ambíciód kimondása kényelmetlen neked, és emiatt hagyod, hogy mások jelöljék ki az irányt.',
      skorpio: 'Olyan hivatás vonz, ahol mélyre lehet menni: krízis, kutatás, pénzügy, gyógyítás, rejtett folyamatok. A karriered valószínűleg egy-két gyökeres átalakuláson megy át, és a hatalommal való bánásmód lesz a nagy tanulságod.',
      nyilas: 'Akkor vagy elégedett, ha a munkádnak jelentése és tágassága van: tanítás, külföld, kiadás, nagy ívű tervek. A tekintélyt könnyen megszerzed, viszont a rutinná dermedő állás pár év után menekülési vágyat vált ki belőled.',
      bak: 'Itt vagy hazai pályán: célt tűzöl, lépcsőfokokat mászol, és a tekintélyt kitartó munkával, nem ügyeskedéssel szerzed meg. A veszély, hogy a hivatásod felemészti az életed többi részét, és a siker sem hoz elég belső elégedettséget.',
      vizonto: 'Nem a szokásos karrierúton haladsz: szabadúszás, újító terület, technológia vagy közösségi ügy jellemezheti a pályádat. Rosszul tűröd a hierarchiát, ezért ott vagy igazán jó, ahol a saját szabályaid szerint teljesíthetsz.',
      halak: 'Olyan hivatás felé húz, ami segít, gyógyít, művel vagy képzeletet igényel; a rideg üzleti logika idegen tőled. A pályád iránya sokáig homályos maradhat, és a nyilvános szerepben könnyen elmosódik, pontosan mi is a te érdemed.'
    },

    /* ---- 11. ház: barátok, közösség, jövőtervek ---- */
    11: {
      kos: 'A barátságokban te vagy a kezdeményező: te hívsz, te szervezel, te lendíted meg a társaságot. Lelkes csapattag vagy, de a vezetői ösztönöd miatt könnyen kerülsz rangsorvitába azokkal, akikkel elvileg egyenrangú vagy.',
      bika: 'Kevés, de évtizedeken átívelő barátságod van, és a közös szokások, a rendszeres találkozók tartják őket életben. Nehezen engedsz be új embert a körödbe, és a baráti társaságban is te vagy a legkevésbé mozdítható pont.',
      ikrek: 'Sok ismerősöd van, több körben mozogsz, és könnyen teremtesz kapcsolatot bárkivel. A kockázat, hogy a széles háló mellett kevés a valóban mély barátság, és a laza szálak gyorsan el is szakadnak.',
      rak: 'A barátaid gyakorlatilag a második családod: gondoskodsz róluk, számon tartod az életüket, te vagy a biztos pont. Cserébe személyesen éled meg, ha valaki eltávolodik, és a csalódásokat sokáig hordozod.',
      oroszlan: 'Szívesen vagy a társaság középpontja, és nagylelkűen adsz a barátaidnak időt, figyelmet, néha pénzt is. A nehézség az, hogy a csoportban is elismerést vársz, és rosszul viseled, ha egy közösségben nem téged emelnek ki.',
      szuz: 'Válogatós vagy: kevés embert engedsz közel, de nekik gyakorlati segítséget, konkrét támaszt adsz. A közösségben te vagy, aki megszervezi és rendben tartja a dolgokat, közben ritkán kéred, hogy veled is törődjenek.',
      merleg: 'Könnyen mozogsz társaságban, és ösztönösen összekötöd az embereket egymással. Kellemes, harmóniateremtő jelenlét vagy, viszont a baráti konfliktusokban a semlegesség kedvéért néha egyik oldal mellett sem állsz ki elég határozottan.',
      skorpio: 'A barátságban is mindent vagy semmit adsz: kevés emberrel vagy közel, de velük mélyen és feltétel nélkül. Az árulást nem felejted el, és a csoportok rejtett hatalmi viszonyait pontosan látod, akkor is, ha nem beszélsz róla.',
      nyilas: 'Széles, sokszínű, gyakran nemzetközi baráti kör vesz körül, és a közös élmények, utazások, eszmecserék tartják össze. Lelkesíted a társaságot, de a szabadságigényed miatt nehezen vállalsz állandó szerepet egy közösségben.',
      bak: 'Kevés, de megbízható és gyakran nálad idősebb vagy tapasztaltabb barát vesz körül; a szakmai és a baráti köröd átfedésben van. Komolyan veszed a közös célokat, viszont a személyes megnyílás társaságban is nehezen megy neked.',
      vizonto: 'A közösség a te tereped: ötletek, ügyek, hasonlóan gondolkodó emberek köre tartja életben a jövőképedet. Sok emberrel vagy jóban, de mindenkitől tartod ugyanazt a barátságos távolságot, és a mélyebb kötődés lassabban alakul.',
      halak: 'Együttérzésből és közös hangulatból szövődnek a barátságaid, és gyakran te vagy az, akihez bajban fordulnak. Nehezen mondasz nemet, ezért érdemes figyelned, kik azok, akik csak elvesznek belőled, és kik adnak vissza.'
    },

    /* ---- 12. ház: rejtett világ, visszavonulás, feldolgozás ---- */
    12: {
      kos: 'A haragod és a saját akaratod az, ami rejtve marad előled: kifelé kedves lehetsz, miközben belül feszítesz. Egyedül és csendben töltődsz fel, és a fel nem ismert indulat az, ami hirtelen, látszólag indokolatlan kitörésekben tör felszínre.',
      bika: 'A biztonság iránti vágyad mélyen és tudattalanul működik: néha csak utólag veszed észre, hogy a félelem, nem a józan ész tartott meg egy helyzetben. A visszavonulásod testi és kézzelfogható — csend, természet, jó étel, alvás.',
      ikrek: 'A fejedben szüntelenül fut egy háttérbeszélgetés, amit ritkán osztasz meg bárkivel. Írásban, naplózásban, magányos olvasásban tudod a legjobban feldolgozni magad, és az álmaid is szokatlanul beszédesek.',
      rak: 'A gyerekkori és családi érzelmek nálad a felszín alatt élnek tovább, és magyarázat nélküli hangulatokként térnek vissza. Erős a beleérző képességed, de fontos, hogy legyen kihez vinned azt, amit másoktól szedtél fel.',
      oroszlan: 'Titokban vágysz az elismerésre, miközben kifelé azt mutatod, hogy nincs rá szükséged. A háttérben tudsz igazán alkotni, és a legmélyebb megerősítést az adja, ha magadnak is elhiszed, hogy értékes vagy — taps nélkül is.',
      szuz: 'A szorongásod aprólékos formát ölt: listák, ellenőrzés, testi tünetek figyelése, mindent előre kiszámoló fej. A visszavonulás nálad rendrakással és csendes, hasznos tevékenységgel működik, és a segítő, gyógyító háttérmunkában találod meg a helyed.',
      merleg: 'A mások kedvében járás nálad tudattalan reflex: gyakran csak jóval később veszed észre, hogy megint a másik igényét tetted előre. A magány kezdetben nehéz, de éppen ez tanít meg arra, hogy nélküle is egész vagy.',
      skorpio: 'A legfontosabb folyamataid mélyen a felszín alatt zajlanak, és a titkok megőrzésében szinte senki nem múl felül. A gyógyulásod is odalent történik: terápiában, elvonulásban, önvizsgálatban tudod feloldani azt, ami régóta nyomott.',
      nyilas: 'A hited és a szabadságvágyad a rejtett erőforrásod: még reménytelen helyzetben is találsz értelmet. A veszély a menekülés — hosszú utak, nagy tervek és bizakodó magyarázatok mögé bújni azzal, amivel szembe kellene nézni.',
      bak: 'A magányos küzdés mintája mélyen beléd ivódott: nehezen kérsz segítséget még akkor is, amikor egyértelműen jár neked. Az elvonulás és a csendes, fegyelmezett önvizsgálat viszont valóban gyógyít, és az évekkel egyre könnyebben teszed le a terhet.',
      vizonto: 'Belül különállónak, néha kívülállónak érzed magad akkor is, amikor kifelé jól működsz egy közösségben. A magány nálad kifejezetten alkotó állapot, és a régi, tudattalan minták felismerése is inkább hirtelen belátásként érkezik, mint fokozatosan.',
      halak: 'Ez a legotthonosabb helyed: kivételes érzékenységgel fogod a másik ember és a környezet rejtett rezdüléseit. Épp ezért kell tudatosan visszavonulnod és tisztítanod magad — enélkül a felszedett terhek szorongásban, fáradtságban vagy menekülő szokásokban ülepednek le.'
    }

  }
};
