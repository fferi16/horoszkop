/*
 * psycho-deep.js — a Pitagorasz-négyzet teljes kiértékelésének szövegei
 * A buildPsychomatrix() szintézisrésze használja: a cellák és vonalak
 * EGYMÁSHOZ viszonyított erejéből von le személyre szabott következtetéseket.
 *
 * Sima script (nem ES modul). Betöltés: psycho.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.psychoDeep = {

  intro: 'A négyzet igazi olvasata a cellák egymáshoz viszonyított ereje: ugyanaz a szám mást jelent egy egyébként üres és egy zsúfolt mátrixban. Az alábbi kiértékelés a te mátrixod belső arányaiból olvas.',

  dominant: 'A mátrixod súlypontja a(z) %C% cellában van (%N% jegy — a legtöltöttebb cellád): a hagyomány szerint ez a tulajdonság annyira magától értetődő neked, hogy észre sem veszed — mások viszont elsőre ezt látják benned.',

  empties: 'Üres celláid: %LIST%. A hagyomány ezeket nem hibának, hanem „szabad sávnak" olvassa: e területeken nem hozott mintát a születésed — életed során magad töltöd fel őket tapasztalattal, ezért itt vagy a legformálhatóbb.',
  noEmpty: 'Nincs üres cellád: minden alaptulajdonságból hoztál valamennyit — sokoldalú, de emiatt nehezebben specializálódó mátrix.',
  manyEmpties: 'Feltűnően sok (%N%) üres cellád van: a mátrixod kevés, de annál hangsúlyosabb tulajdonságra összpontosít — a kevés töltött cella nálad éles, karakteres vonásokat ad.',

  willEnergy: {
    willDominant: 'Az akaratod (1-es cella: %W% jegy) érezhetően erősebb, mint az energiád (2-es cella: %E% jegy): többet vállalsz, mint amennyit a szervezeted kényelmesen bír — a kifulladás ellen tudatos pihenéssel kell védekezned, mert az akaratod nem fog magától megálljt parancsolni.',
    energyDominant: 'Az energiád (2-es cella: %E% jegy) erősebb, mint az akaratod (1-es cella: %W% jegy): sok az üzemanyagod, de a kormányzás kér tudatosságot — célok nélkül az energiád szétszóródik vagy nyugtalanságba fordul.',
    balanced: 'Az akaratod (1-es) és az energiád (2-es) egyensúlyban van: amennyit vállalsz, annyit bírsz is — ez a mátrix egyik legjobb páros-mintázata.'
  },

  rows: {
    goalOverFamily: 'A célratörés-sorod (1-4-7: %A%) erősebb, mint a család-sorod (2-5-8: %B%): az irányod alapból a feladatok és az érvényesülés felé húz — a kapcsolatokra tudatosan kell időt szánnod, mert maguktól hátrébb sorolódnak.',
    familyOverGoal: 'A család-sorod (2-5-8: %B%) erősebb, mint a célratörés-sorod (1-4-7: %A%): az irányod alapból az emberek és a kötődések felé húz — a saját ambícióid képviseletét kell tudatosan gyakorolnod.',
    rowsBalanced: 'A célratörés- és a család-sorod nagyjából egyforma erős: a feladat és a kapcsolat nálad nem rivális — mindkettőnek jut hely, ha hagyod.'
  },

  diagonals: {
    spiritOverFlesh: 'A szellemi átlód (1-5-9: %A%) erősebb, mint a testi-temperamentum átlód (3-5-7: %B%): a belső élet, az elvek és az értelem felé billen a mérleged — a test jelzései háttérbe szorulhatnak, érdemes rájuk külön figyelni.',
    fleshOverSpirit: 'A temperamentum-átlód (3-5-7: %B%) erősebb, mint a szellemi átlód (1-5-9: %A%): erős testi jelenlét, vérmérséklet és életvágy jellemez — az elcsendesedés és a reflexió a gyakorlófeladatod.',
    diagBalanced: 'A két átlód (szellemiség és temperamentum) egyensúlyban van: a belső élet és a testi jelenlét jól kiegészíti egymást nálad.'
  },

  columns: {
    intro: 'A három oszlop közül nálad a(z) %C% a legerősebb (%N% jegy): ',
    onertekeles: 'az önmeghatározás oszlopa viszi a mátrixod — a legfontosabb kérdésed mindig az, ki vagy te; a külső siker ennek csak visszatükröződése.',
    anyagiak: 'a gyakorlati-anyagi oszlop viszi a mátrixod — a kézzelfogható eredmény, a megélhetés és a rend a természetes terepe az erődnek.',
    tehetseg: 'a tehetség-oszlop viszi a mátrixod — a képességeid kibontása és megmutatása az életed fő sodra; véka alá rejtve megbetegít, kibontva feltölt.'
  },

  center: {
    emptyCompensated: 'Az 5-ös (logika) cellád üres, de a 9-es (ész-memória) cellád erős: a hagyomány szerint a hiányzó lépésenkénti logikát nálad az emlékezet és az intuitív átlátás pótolja — nem levezetsz, hanem „rálátsz" a megoldásra.',
    empty: 'Az 5-ös (logika) cellád üres: a rendszer szerint a döntéseidet inkább megérzésből, mint levezetésből hozod — a fontos döntéseknél segít, ha kívülről kérsz egy lépésenkénti ellenőrzést.',
    full: 'Az 5-ös (logika) cellád erősen töltött: a mátrixod közepén elemző erő áll — mindent átgondolsz, aminek ára a túlgondolás lehet.'
  },

  note: 'Ez a kiértékelés az Alekszandrov-féle iskola bevett összehasonlító olvasatát követi (cellapárok és vonalpárok egymáshoz mérése). Numerológiai típustan: önismereti kérdéslista, nem mérés.'
};
