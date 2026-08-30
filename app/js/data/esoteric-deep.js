/*
 * esoteric-deep.js — a születési kártyák és az angyal-horoszkóp
 * kiértékelésének szövegei. A buildCards() és buildAngels()
 * szintézisrészei használják: a személy saját elemei közti
 * keresztkapcsolatokból olvasnak.
 *
 * Sima script (nem ES modul). Betöltés: angels.js és numbers.js után.
 */

window.HDATA = window.HDATA || {};

/* ---------------- születési kártyák ---------------- */

window.HDATA.cardsDeep = {

  intro: 'A kártyáid kiértékelése a rétegek összeolvasásából áll: a tarot-kártyád hogyan viszonyul az életút-számodhoz és a Sorsmátrixodhoz, a sorskártyád színe pedig milyen életterületre teszi a hangsúlyt.',

  constellationPair: 'A születési dátumod alap-összege %SUM%: ebből a személyiség-kártyád a(z) %P% — így működsz a világban, ezt látják belőled —, a lélek-kártyád pedig a(z) %S%: ez a mélyebb, belső motívum. A hagyomány szerint a kettő összetartozik: a %P% a %S% „felnőtt, kifelé élt arca" — az érett működésed az, amikor a külső kártyád a belsőt szolgálja.',
  constellationSingle: 'A születési dátumod alap-összege (%SUM%) egyetlen lépésben adja ki a kártyádat: nálad a személyiség- és a lélek-kártya ugyanaz az arkánum — ritkább, egyfókuszú mintázat: kifelé és befelé ugyanaz a motívum működik.',

  lifePathLink: 'Fontos összefüggés: a tarot-születéskártya ugyanabból az összegből készül, mint az életút-számod, csak 22 fokozatú, finomabb felbontásban — a(z) %TC%. arkánum számjegyösszege éppen az életút-számod (%LP%). Ezért úgy érdemes olvasni, mint az életút-szám arkánum-szintű kibontását: a szám a „mit", a kártya képi nyelven a „hogyan"-t mondja el.',

  matrixCenter: 'Két független számítás ugyanoda mutat: a tarot-születéskártyád ugyanaz az arkánum, mint a Sorsmátrixod középpontja (a fő feladatod). Amikor két rendszer ennyire egybehangzik, a hagyomány szerint az a képlet legfontosabb üzenete.',
  matrixPurpose: 'A tarot-születéskártyád egybeesik a Sorsmátrixod személyes életfeladatának arkánumával: a kártya, amit a születésed „húzott", ugyanazt a leckét mondja, mint a mátrixod önkeresés-pontja.',

  suits: {
    'Kőr': 'az érzelmek, a szeretet és a kapcsolatok',
    'Káró': 'az érték, az anyagiak és a megvalósítás',
    'Treff': 'a tudás, a gondolkodás és a kommunikáció',
    'Pikk': 'a munka, az egészség és a lelki érés'
  },
  suitLine: 'A sorskártyád színe a %SUIT%: a kártyahagyomány szerint az életed fő tananyaga %DOM% területén zajlik — a lapod értéke ezen a terepen mutatja a szereped.',
  suitElementMatch: {
    'Kőr': { element: 'Víz', text: 'A Kőr szín és a vízjegyű Napod ugyanazt mondja: az érzelmi élet nálad nem az egyik terület a sok közül, hanem a főcsapás — két rendszer szerint is.' },
    'Káró': { element: 'Föld', text: 'A Káró szín és a földjegyű Napod egybehangzik: a kézzelfogható érték és a megvalósítás mindkét rendszer szerint a te terepedet jelenti.' },
    'Treff': { element: 'Levegő', text: 'A Treff szín és a levegőjegyű Napod egybehangzik: a gondolkodás és a szó mindkét rendszer szerint a fő eszközöd.' },
    'Pikk': { element: 'Tűz', text: 'A Pikk szín a munka és az érés lapja, a tűzjegyű Napod pedig a tetterőé: a kettő együtt a megküzdve kivívott eredmény mintázatát adja.' }
  },
  joker: 'A Joker a rendszer egyetlen szín és szám nélküli lapja: a kártyahagyomány szerint a Joker-született nem tartozik egyetlen tananyaghoz sem — bármelyik lap szerepét eljátszhatja. Nagy szabadság, cserébe neki magának kell eldöntenie, melyik lapot éli.',

  note: 'A kiértékelés a tarot-születéskártya (Greer-féle személyiség/lélek-pár) és a sorskártya-hagyomány (cardology) bevett olvasatait követi. Önismereti tükör, nem jóslás.'
};

/* ---------------- angyal-horoszkóp ---------------- */

window.HDATA.angelsDeep = {

  intro: 'Az angyali kép kiértékelése azt nézi, hova mutatnak a rétegek: az őrangyalod bolygója hol áll a TE képletedben, és egybevágnak-e a különböző angyalrendszerek hangsúlyai.',

  planetInChart: 'Az őrangyalod bolygója a %P% — a te képletedben ez a bolygó a %SIGN% jegyében%HOUSE% áll. Az angyal-hagyomány szerint az őrangyal a bolygóján keresztül „szólít meg": nálad tehát ezen az életterületen és ebben a minőségben érdemes keresni a támogatását.',
  houseSuffix: ', a %H%. házban',

  planetChartRuler: 'Ráadásul az őrangyalod bolygója (%P%) éppen a képleted ura (az Aszcendensed uralkodója): az angyalrendszer és az asztrológiai képed ugyanazt a bolygóminőséget teszi az életed kulcsává — ez a legerősebb egybeesés, amit ez a réteg adhat.',
  planetSunRuler: 'Az őrangyalod bolygója (%P%) épp a napjegyed uralkodója: az angyali minőség és az alaptermészeted egy tőről fakad.',
  weekdaySunRuler: 'A születésnapod angyala a %P% bolygóhoz tartozik — ez éppen a napjegyed uralkodója: a hét napja, amelyen születtél, megerősíti a jegyed alaphangját.',
  doublePlanet: 'Az őrangyalod és a születésnapod angyala ugyanahhoz a bolygóhoz (%P%) tartozik: az angyalrendszer két független rétege ugyanazt a minőséget küldi feléd — kétszeres hangsúly.',

  spread: 'Az angyali képed rétegei három különböző minőséget adnak össze: az őrangyalod (%A%) a(z) %Q% angyala; a jegyed arkangyala %AR%; a születésnapod angyalának bolygója a %P%. Nálad ez a három réteg három irányból támogat — nem egyetlen csúcsra hegyezett, hanem szélesre terített angyali kép: mindig az a réteg szólítható, amelyik területen éppen jársz.',

  note: 'A kiértékelés a 72 angyalos (Sefer ha-Zohar utáni) hagyomány és a bolygó-angyal megfeleltetések bevett rendszerét követi. Kulturális-spirituális hagyomány, önismereti olvasatban.'
};
