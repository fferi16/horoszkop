/*
 * annual.js — szolárhoroszkóp és szekunder progressziók szövegei
 * A profile.js buildAnnual() használja. A jegy- és házszövegeket ahol lehet,
 * a meglévő western.js adatokból veszi át — itt csak az éves technikák saját
 * magyarázatai és a progressziós holdfázisok szerepelnek.
 *
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.annual = {

  solarIntro: 'A szolárhoroszkóp az az égi pillanatfelvétel, amikor a Nap évente pontosan visszatér a születési helyzetére — a hagyomány szerint ez a „személyes újéved", és a képlete az előtted álló szolár év alaphangját adja meg.',

  solarNote: 'A szolárképletet a születési helyre számoltuk (ez a klasszikus gyakorlat; más iskolák a tartózkodási helyre állítják fel). A szolár év a két napvisszatérés közti időszak.',

  progIntro: 'A szekunder progresszió a hagyomány „belső érési naptára": minden életévednek a születésed utáni egy-egy nap feleltethető meg. A progresszív bolygók lassú vándorlása azt mutatja, hová érett a személyiséged — nem eseményeket, hanem belső hangsúlyváltásokat jelez.',

  progSunShift: 'A progresszív Napod már nem a születési jegyedben jár: a %S% minőségei az évek során fokozatosan beépültek az alaptermészetedbe. Ez nem cseréli le a napjegyedet — rárakódik, árnyalja.',

  progSunSame: 'A progresszív Napod még a születési jegyedben, a %S% jegyében jár — az alaptermészeted az eredeti hangnemében érik.',

  progMoon: 'A progresszív Hold kb. két és fél évenként vált jegyet: most a %S% jegyében jár. Ez a mostani érzelmi évszakod — ilyen színezetű élmények, igények és hangulatok kerülnek előtérbe nagyjából %T%-ig.',

  /* A szolár aszcendens jegye — az év „fellépése" (Shea, Eshelman nyomán, saját
     megfogalmazás; docs/28). */
  srAsc: {
    kos: 'lendületes, kezdeményező év: gyorsabban döntesz és bátrabban nyúlsz újhoz, a türelmetlenség a kockázat.',
    bika: 'megszilárdító év: az anyagiak, az otthon és a biztonság kerül előre, a változást inkább kivárod, mint sietteted.',
    ikrek: 'mozgékony, sokfelé nyitó év: több beszélgetés, tanulás és ügyintézés, a szétszórtság a kockázat.',
    rak: 'befelé forduló, érzékeny év: a család, az otthon és a lelki biztonság igénye vezet.',
    oroszlan: 'kifejező, látható év: alkotás, szereplés, elismerés utáni vágy, nagyvonalúság.',
    szuz: 'rendező év: munka, egészség, részletek és előkészületek — a nagy ugrás helyett a finomhangolás ideje.',
    merleg: 'kapcsolati év: a társ, a megállapodások és az egyensúly keresése áll a középpontban.',
    skorpio: 'mélyre ásó év: belső átalakulás, elfojtott érzések felszínre hozása, éles ösztönök.',
    nyilas: 'táguló év: utazás, tanulás, hit és a lehetőségek keresése — a hagyomány szerencsés évnek tartja.',
    bak: 'felelős, célratörő év: a hivatás, a struktúra és az érettség kerül előtérbe.',
    vizonto: 'függetlenedő év: a saját út, a barátok és a szokatlan megoldások vonzanak, a megszokás szorít.',
    halak: 'álmodó, befogadó év: képzelet, spiritualitás és együttérzés erősödik, a gyakorlatiasság lazul.'
  },

  /* A szolár Hold háza — hová „teszed a szíved" idén (Shea kerete, saját szöveg). */
  srMoonHouse: {
    1: 'Idén a saját közérzeted és testi-lelki állapotod foglalkoztat a legjobban: érzékenyebb, hangulatvezéreltebb év, amelyben a szükségleteidet végre kimondod.',
    2: 'Az érzelmi biztonságot idén az anyagiakban keresed: a pénz, a kereset és a tulajdon kérdései hangolják a közérzeted, és a pénzügyi döntéseidet inkább érzés, mint számítás vezeti.',
    3: 'Mozgalmas, beszédes év: sok kis ügy, tanulás, testvérek és szomszédok, rövid utak — a hangulatod a napi információáramlással hullámzik.',
    4: 'Az otthon és a család az év érzelmi központja: költözés, lakásügy, szülők, gyökerek — befelé forduló, „fészekrakó" év.',
    5: 'A szíved az örömökben van idén: szerelem, gyerekek, alkotás, játék — érzelmileg nyitottabb, romantikusabb év.',
    6: 'A mindennapi munka és az egészség hangolja az érzelmeidet: rutinok, kötelességek, testi jelzések — figyelj a túlterhelésre, mert a hangulatod a terhelést tükrözi.',
    7: 'A társkapcsolat az év érzelmi fókusza: a párod vagy egy szoros partner igényei, a „mi" kérdései hangolják a közérzeted.',
    8: 'Érzelmileg intenzív, átalakító év: közös pénzügyek, örökség, intimitás, elengedés — ami eddig a mélyben volt, felszínre jön.',
    9: 'A szíved messzire húz: utazás, külföld, tanulás, hit — a hétköznapoknál nagyobb kérdések adják az év érzelmi tartalmát.',
    10: 'A hivatás és a nyilvános szerep érzelmi ügy lesz: elismerésre vágysz, a munkahelyi változások a hangulatodat is befolyásolják, a magánélet és a nyilvánosság határa vékonyodik.',
    11: 'A barátok, a közösségek és a jövőbeli tervek adják az érzelmi biztonságot: csoportokban találod meg a helyed, a baráti kapcsolatok mélyülnek.',
    12: 'Visszavonuló, feldolgozó év: a Hold a képlet rejtett házában jár — magány, pihenés, múltrendezés, esetleg segítő szerep — a hangulatok belülről jönnek, és nem mindig nevezhetők meg.'
  },

  /* A szolár Hold jegye — az év érzelmi hangneme. */
  srMoonSign: {
    kos: 'gyors, heves érzelmi reakciók, önálló igények',
    bika: 'nyugalom- és kényelemigény, ragaszkodás a megszokotthoz',
    ikrek: 'változékony hangulat, beszélgetésben oldódó érzelmek',
    rak: 'erős otthon- és biztonságigény, gondoskodás és sérülékenység',
    oroszlan: 'büszke, melegszívű érzelmek, elismerés utáni vágy',
    szuz: 'visszafogott, elemző érzelmek, a hasznosságban talált nyugalom',
    merleg: 'harmóniaigény, a másikhoz igazodó hangulat',
    skorpio: 'mély, intenzív, nehezen kimondott érzelmek',
    nyilas: 'derűs, szabadságvágyó, távlatokat kereső hangulat',
    bak: 'fegyelmezett, tartózkodó érzelmek, teljesítményben keresett biztonság',
    vizonto: 'távolságtartó, barátságos, a megszokottól elrugaszkodó hangulat',
    halak: 'érzékeny, együttérző, könnyen befolyásolható hangulat'
  },

  /* A progresszív Hold jegye — a mostani, kb. 2,5 éves érzelmi évszak
     (Blaschke, Brady, Rushman kerete, saját megfogalmazás). */
  progMoonSign: {
    kos: 'Kezdeményező, türelmetlen érzelmi évszak: új dolgokat akarsz indítani, a saját utadat járni, és rosszul viseled, ha várni kell. A konfliktust most könnyebben vállalod.',
    bika: 'Megnyugvó, biztonságkereső évszak: a stabilitás, a kényelem és a kézzelfogható eredmények számítanak — a változásokat lassabban engeded be.',
    ikrek: 'Kíváncsi, beszédes évszak: tanulás, új emberek, sok kis mozgás — az érzelmek beszélgetésben oldódnak, de a szétszórtság is nő.',
    rak: 'Befelé forduló évszak: az otthon, a család és a gyökerek húznak, érzékenyebb és védekezőbb vagy — a saját fészek rendezésének ideje.',
    oroszlan: 'Kifejező, önbizalom-építő évszak: látni akarod magad és látszani akarsz — alkotás, játék, szerelem, elismerés kerül előre.',
    szuz: 'Rendrakó, munkás évszak: az egészség, a rutinok és a részletek foglalkoztatnak, az érzelmeket inkább a hasznosságon keresztül éled meg.',
    merleg: 'Kapcsolati évszak: a társ, az egyensúly és a szépség kerül a középpontba — a magány most jobban fáj, a kompromisszum könnyebben megy.',
    skorpio: 'Mélyülő, intenzív évszak: erős kötődések, elengedések, rejtett érzések felszínre kerülése — ami felszínes, az most nem elég.',
    nyilas: 'Táguló, szabadságvágyó évszak: utazás, tanulás, hit és távlatok — kifelé nyitsz, és a hétköznapi kötöttségeket nehezebben viseled.',
    bak: 'Felelős, célratörő évszak: az elismerés és a kézzelfogható eredmény számít, az érzelmeket fegyelmezed — az építkezés, nem a kitárulkozás ideje.',
    vizonto: 'Függetlenedő, közösségi évszak: a barátok, az eszmék és a saját különállásod kerül előre — az érzelmi távolságtartás nő, a kötöttség szorít.',
    halak: 'Befelé figyelő, érzékeny évszak: intuíció, együttérzés, alkotó képzelet — a határaid vékonyabbak, a pihenés és a visszavonulás most nem gyengeség.'
  },

  progMoonHouse: 'A progresszív Hold most a születési képleted %H%. házán halad át (%T%): az érzelmi évszakod terepe ez az életterület — itt jelentkeznek a mostani igényeid és hangulatváltozásaid.',

  srAscNatalHouse: 'Az idei szolár aszcendens a születési képleted %H%. házába esik (%T%): a hagyomány szerint ez az életterület kerül idén az előtérbe, ilyen ügyeken keresztül „lépsz fel" az évben.',
  srAngles: 'A születési képleted bolygói közül %P% áll idén a szolárképlet sarokpontján (%A%) — Volguine és Shea szerint az ilyen születési bolygó ügyei az évben kiemelten működnek.',
  srNoTime: 'Születési idő nélkül a napvisszatérés pillanata csak ±12 órára ismert, ezért a szolár aszcendens és a házak nem számíthatók — a szolár Hold jegye viszont többnyire így is megbízható.'
,

  phases: {
    ujhold: 'Progressziós újhold-szakasz: egy kb. 30 éves belső ciklus kezdete. Vetés ideje — az újat még sötétben, hitből kell elindítani, a látható eredmény később érik.',
    novekvo_sarlo: 'Növekvő sarló szakasz: az új irány első próbái. Küzdelmesebb időszak — a régi berögződések visszahúznak, de minden megtett lépés gyökeret ereszt.',
    elso_negyed: 'Első negyed szakasz: cselekvési válság és áttörés. Most kell aktívan felépíteni azt, ami az újholdkor elindult — a súrlódás nem hiba, hanem építkezés.',
    novekvo_dombor: 'Növekvő domború szakasz: finomhangolás és tökéletesítés. Az irány már látszik, most a hogyanon dolgozol — elemzés, javítás, elmélyítés ideje.',
    telihold: 'Progressziós telihold-szakasz: a ciklus csúcspontja. Ami eddig épült, most megmutatkozik és beérik — láthatóvá válsz, és az is kiderül, mi nem működik.',
    fogyo_dombor: 'Fogyó domború (terjesztő) szakasz: a beérett tapasztalat továbbadása. Tanítás, megosztás, a tanulságok kimondása — most abból élsz, amit felépítettél.',
    utolso_negyed: 'Utolsó negyed szakasz: tudatossági fordulat. Ami betöltötte a szerepét, azt el kell kezdeni elengedni — belső átértékelés, a következő ciklus csendes előkészítése.',
    fogyo_sarlo: 'Fogyó sarló (mérleg) szakasz: a ciklus lezárása. Visszavonulóban lévő, befelé forduló időszak — a magvak kiválogatása a következő újholdra. A pihenés most munka.'
  }
};
