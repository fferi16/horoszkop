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
