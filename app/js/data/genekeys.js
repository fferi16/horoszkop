/* genekeys.js — Gene Keys (Génkulcsok) adatmodul: 64 kulcs és a profil szférái
 * Sima script (nem ES modul), UTF-8. Betöltés: <script src="js/data/genekeys.js"></script>
 * Forrás: docs/22-gene-keys.md (genekeys.com, kulcsoldalanként lekérdezve,
 *         két független összesítővel keresztellenőrizve).
 *
 * Richard Rudd rendszere ugyanazt a 64 kapus kereket használja, mint a Human
 * Design — ezért a kapu- és vonalszámítás a core/humandesign.js-ből jön.
 */
window.HDATA = window.HDATA || {};
window.HDATA.genekeys = {

  intro: 'A Gene Keys (Génkulcsok) Richard Rudd rendszere, amely a Human Designból nőtt ki, ' +
    'és ugyanazt a 64 kapus I Csing-kereket használja — a különbség az értelmezésben van. ' +
    'Minden génkulcsnak három frekvenciaszintje van: az Árnyék a félelemből működő alacsony ' +
    'szint, az Ajándék a kibontakozott alkotóerő, a Sziddhi pedig a legmagasabb, transzcendens ' +
    'megvalósulás. A rendszer szerint nem legyőzni kell az Árnyékot, hanem szemlélni: az ' +
    'Ajándék magában az Árnyékban rejlik.',

  levels: {
    shadow: { name: 'Árnyék', text: 'A félelemre és elkülönültségre épülő alacsony frekvencia — a rendszer szerint minden emberi szenvedés innen ered. Nem ellenség: ez a nyersanyag, amiből az Ajándék kibontakozik.' },
    gift:   { name: 'Ajándék', text: 'A középső szint: a nyitott szívű emberi zsenialitás. Akkor tárul fel, ha az Árnyékot nem elnyomod vagy kiéled, hanem türelmesen szemléled.' },
    siddhi: { name: 'Sziddhi', text: 'A legmagasabb, transzcendens szint — „isteni ajándék", a teljes megvalósulás állapota. A rendszer szerint nem cél, hanem lehetőség.' }
  },

  polarity: {
    intro: 'Minden Árnyéknak két kifordulása van — a hivatalos elnevezés szerint elfojtó és reaktív:',
    repressive: { name: 'Elfojtó', text: 'Az energia befelé fordul: önfeladás, a saját szükségleteid elnyomása mások javára.' },
    reactive:   { name: 'Reaktív', text: 'Az energia kifelé fordul: önfelnagyítás, jellemzően haragként vagy hibáztatásként, mások rovására.' }
  },

  /* ---------------------------------------------------------------
   * A hologenetikus profil szférái.
   * chart: 'p' = személyiség (születés), 'd' = design (88 fokkal korábbi)
   * body:  a core/humandesign.js aktivációs kulcsa
   * ------------------------------------------------------------- */
  sequences: [
    {
      key: 'activation', name: 'Aktivációs szekvencia',
      sub: 'A négy Elsődleges Ajándék — a saját természeted magja',
      text: 'A profil gerince: mit hoztál, mivel dolgozol, és mi ragyog belőled, amikor jól vagy.',
      spheres: [
        { key: 'lifework',  name: 'Életfeladat', chart: 'p', body: 'sun',
          text: 'Ahogyan a világ lát téged, és amiben a napi munkád természete megnyilvánul. A rendszer szerint nem foglalkozás, hanem a jelenléted minősége.' },
        { key: 'evolution', name: 'Evolúció', chart: 'p', body: 'earth',
          text: 'A fő kihívásod: az a terület, ahol a legtöbbet fejlődsz, és amely stabilizál, ha megtanulsz vele bánni.' },
        { key: 'radiance',  name: 'Sugárzás', chart: 'd', body: 'sun',
          text: 'A tested életereje és egészsége — ahogyan sugárzol, amikor a saját természeted szerint élsz.' },
        { key: 'purpose',   name: 'Rendeltetés', chart: 'd', body: 'earth',
          text: 'A mélyebb célod és a belső stabilitásod alapja: a tudattalan hordozórakéta a képlet alatt.' }
      ]
    },
    {
      key: 'venus', name: 'Vénusz-szekvencia',
      sub: 'Kapcsolatok és érzelmi fejlődés',
      text: 'A szeretet és a kapcsolódás útja. Hivatalosan a Rendeltetéssel kezdődik, majd az alábbi öt szféra következik.',
      spheres: [
        { key: 'attraction', name: 'Vonzás', chart: 'd', body: 'moon',
          text: 'Amit tudattalanul vonzol a kapcsolataidba — a minta, ami újra és újra megjelenik körülötted.' },
        { key: 'iq', name: 'IQ — értelmi hányados', chart: 'p', body: 'venus',
          text: 'A tudatos elméd működése: hogyan érted meg és rendezed el, ami veled történik.' },
        { key: 'eq', name: 'EQ — érzelmi hányados', chart: 'p', body: 'mars',
          text: 'Az érzelmi intelligenciád: hogyan éled meg és fejezed ki, amit érzel.' },
        { key: 'sq', name: 'SQ — spirituális hányados', chart: 'd', body: 'venus',
          text: 'A tudattalan, örökölt szint: hogyan kapcsolódsz a nálad nagyobb egészhez.' },
        { key: 'core', name: 'Mag (ősseb)', chart: 'd', body: 'mars',
          text: 'A legmélyebb sérülés, amely köré a védekezéseid épültek — a rendszer szerint egyben a legnagyobb ajándékod forrása is.' }
      ]
    },
    {
      key: 'pearl', name: 'Gyöngy-szekvencia',
      sub: 'Hivatás és bőség',
      text: 'A jólét útja. Két szférája megegyezik korábbi pontokkal: a Hivatás azonos a Maggal (design Mars), a Márka pedig az Életfeladattal (személyiség Nap) — egy kapu, két név.',
      spheres: [
        { key: 'vocation', name: 'Hivatás', chart: 'd', body: 'mars', sameAs: 'core',
          text: 'Az a munka, amely a legmélyebb sebedből nő ki — ugyanaz a kapu, mint a Mag.' },
        { key: 'culture',  name: 'Kultúra', chart: 'd', body: 'jupiter',
          text: 'Az a közeg és közösség, amelyben a munkád valóban hatni tud.' },
        { key: 'brand',    name: 'Márka', chart: 'p', body: 'sun', sameAs: 'lifework',
          text: 'Ahogyan a világ felé megjelensz — ugyanaz a kapu, mint az Életfeladat.' },
        { key: 'pearl',    name: 'Gyöngy', chart: 'p', body: 'jupiter',
          text: 'A szekvencia középpontja: ahol a bőség természetes módon megérkezik, ha a többi a helyén van.' }
      ]
    }
  ],

  /* A hat vonal általános archetípusa. Fenntartás: a hivatalos tanítás szerint
     a vonal jelentése szféránként eltér, ez csak tájékoztató keret. */
  lines: {
    1: { name: 'Kutató',       text: 'Alapokat keres: biztonságra van szüksége ahhoz, hogy megnyíljon.' },
    2: { name: 'Remete',       text: 'Természetes tehetség, amely egyedüllétben töltődik és hívásra bontakozik ki.' },
    3: { name: 'Kísérletező',  text: 'Próbálgatva tanul: a tévedés itt nem kudarc, hanem módszer.' },
    4: { name: 'Opportunista', text: 'A kapcsolatain keresztül halad: a nyitott szív a legfőbb erőforrása.' },
    5: { name: 'Eretnek',      text: 'Gyakorlati megoldásokat kínál, és közben mások kivetítéseivel kell bánnia.' },
    6: { name: 'Példakép',     text: 'Tapasztalatból lesz hiteles: idővel a jelenlétével tanít.' }
  },
  lineNote: 'A vonalak jelentése a hivatalos tanítás szerint szféránként eltér — ' +
    'az itt olvasható leírás általános keret, nem szféra-specifikus értelmezés.',

  /* ---------------------------------------------------------------
   * A 64 génkulcs. Forrás: genekeys.com, kulcsoldalanként.
   * ------------------------------------------------------------- */
  keys: {
    1:  { shadow: 'Entrópia',            gift: 'Frissesség',       siddhi: 'Szépség' },
    2:  { shadow: 'Kizökkentség',        gift: 'Tájékozódás',      siddhi: 'Egység' },
    3:  { shadow: 'Káosz',               gift: 'Innováció',        siddhi: 'Ártatlanság' },
    4:  { shadow: 'Intolerancia',        gift: 'Megértés',         siddhi: 'Megbocsátás' },
    5:  { shadow: 'Türelmetlenség',      gift: 'Türelem',          siddhi: 'Időtlenség' },
    6:  { shadow: 'Viszály',             gift: 'Diplomácia',       siddhi: 'Béke' },
    7:  { shadow: 'Megosztottság',       gift: 'Útmutatás',        siddhi: 'Erény' },
    8:  { shadow: 'Középszerűség',       gift: 'Stílus',           siddhi: 'Kifinomultság' },
    9:  { shadow: 'Tehetetlenség',       gift: 'Elszántság',       siddhi: 'Legyőzhetetlenség' },
    10: { shadow: 'Önmegszállottság',    gift: 'Természetesség',   siddhi: 'Létezés' },
    11: { shadow: 'Homály',              gift: 'Idealizmus',       siddhi: 'Fény' },
    12: { shadow: 'Hiúság',              gift: 'Megkülönböztetés', siddhi: 'Tisztaság' },
    13: { shadow: 'Széthúzás',           gift: 'Ítélőképesség',    siddhi: 'Empátia' },
    14: { shadow: 'Megalkuvás',          gift: 'Hozzáértés',       siddhi: 'Bőkezűség' },
    15: { shadow: 'Fásultság',           gift: 'Vonzerő',          siddhi: 'Kivirágzás' },
    16: { shadow: 'Közöny',              gift: 'Sokoldalúság',     siddhi: 'Mesteri tudás' },
    17: { shadow: 'Vélemény',            gift: 'Előrelátás',       siddhi: 'Mindentudás' },
    18: { shadow: 'Ítélkezés',           gift: 'Feddhetetlenség',  siddhi: 'Tökéletesség' },
    19: { shadow: 'Társfüggőség',        gift: 'Érzékenység',      siddhi: 'Áldozat' },
    20: { shadow: 'Felszínesség',        gift: 'Önbizalom',        siddhi: 'Jelenlét' },
    21: { shadow: 'Irányítás',           gift: 'Tekintély',        siddhi: 'Bátorság' },
    22: { shadow: 'Becstelenség',        gift: 'Kegyesség',        siddhi: 'Kegyelem' },
    23: { shadow: 'Bonyolultság',        gift: 'Egyszerűség',      siddhi: 'Kvintesszencia' },
    24: { shadow: 'Függőség',            gift: 'Feltalálás',       siddhi: 'Csend' },
    25: { shadow: 'Beszűkülés',          gift: 'Elfogadás',        siddhi: 'Egyetemes szeretet' },
    26: { shadow: 'Gőg',                 gift: 'Leleményesség',    siddhi: 'Láthatatlanság' },
    27: { shadow: 'Önzés',               gift: 'Önzetlenség',      siddhi: 'Önmegtagadás' },
    28: { shadow: 'Céltalanság',         gift: 'Teljesség',        siddhi: 'Halhatatlanság' },
    29: { shadow: 'Félszívűség',         gift: 'Elköteleződés',    siddhi: 'Odaadás' },
    30: { shadow: 'Vágy',                gift: 'Könnyedség',       siddhi: 'Elragadtatás' },
    31: { shadow: 'Önteltség',           gift: 'Vezetés',          siddhi: 'Alázat' },
    32: { shadow: 'Kudarc',              gift: 'Megőrzés',         siddhi: 'Tisztelet' },
    33: { shadow: 'Feledés',             gift: 'Éberség',          siddhi: 'Kinyilatkoztatás' },
    34: { shadow: 'Erőszak',             gift: 'Erő',              siddhi: 'Fenség' },
    35: { shadow: 'Éhség',               gift: 'Kaland',           siddhi: 'Határtalanság' },
    36: { shadow: 'Zaklatottság',        gift: 'Emberség',         siddhi: 'Együttérzés' },
    37: { shadow: 'Gyengeség',           gift: 'Egyenlőség',       siddhi: 'Gyengédség' },
    38: { shadow: 'Küzdelem',            gift: 'Kitartás',         siddhi: 'Becsület' },
    39: { shadow: 'Provokáció',          gift: 'Lendület',         siddhi: 'Felszabadulás' },
    40: { shadow: 'Kimerültség',         gift: 'Eltökéltség',      siddhi: 'Isteni akarat' },
    41: { shadow: 'Fantázia',            gift: 'Előérzet',         siddhi: 'Kiáradás' },
    42: { shadow: 'Elvárás',             gift: 'Elengedés',        siddhi: 'Ünneplés' },
    43: { shadow: 'Süketség',            gift: 'Belátás',          siddhi: 'Megvilágosodás' },
    44: { shadow: 'Beavatkozás',         gift: 'Csapatmunka',      siddhi: 'Szinarchia' },
    45: { shadow: 'Uralkodás',           gift: 'Szinergia',        siddhi: 'Közösség' },
    46: { shadow: 'Komorság',            gift: 'Gyönyörködés',     siddhi: 'Eksztázis' },
    47: { shadow: 'Elnyomatás',          gift: 'Átalakítás',       siddhi: 'Színeváltozás' },
    48: { shadow: 'Elégtelenség',        gift: 'Találékonyság',    siddhi: 'Bölcsesség' },
    49: { shadow: 'Reakció',             gift: 'Forradalom',       siddhi: 'Újjászületés' },
    50: { shadow: 'Romlottság',          gift: 'Egyensúly',        siddhi: 'Harmónia' },
    51: { shadow: 'Nyugtalanság',        gift: 'Kezdeményezés',    siddhi: 'Felébredés' },
    52: { shadow: 'Stressz',             gift: 'Önmérséklet',      siddhi: 'Nyugalom' },
    53: { shadow: 'Éretlenség',          gift: 'Kibontakozás',     siddhi: 'Túláradó bőség' },
    54: { shadow: 'Mohóság',             gift: 'Törekvés',         siddhi: 'Felemelkedés' },
    55: { shadow: 'Áldozattá válás',     gift: 'Szabadság',        siddhi: 'Szabadság',
          note: 'Ez az egyetlen kulcs, ahol az Ajándék és a Sziddhi neve megegyezik. Richard Rudd egy későbbi írásában „Romantikára" nevezte át az 55. sziddhit.' },
    56: { shadow: 'Szórakozottság',      gift: 'Gazdagítás',       siddhi: 'Mámor' },
    57: { shadow: 'Szorongás',           gift: 'Intuíció',         siddhi: 'Tisztánlátás' },
    58: { shadow: 'Elégedetlenség',      gift: 'Életerő',          siddhi: 'Üdvözültség' },
    59: { shadow: 'Tisztességtelenség',  gift: 'Intimitás',        siddhi: 'Áttetszőség' },
    60: { shadow: 'Korlátozottság',      gift: 'Realizmus',        siddhi: 'Igazságosság' },
    61: { shadow: 'Pszichózis',          gift: 'Inspiráció',       siddhi: 'Szentség' },
    62: { shadow: 'Intellektus',         gift: 'Pontosság',        siddhi: 'Kifogástalanság' },
    63: { shadow: 'Kétely',              gift: 'Kérdezés',         siddhi: 'Igazság' },
    64: { shadow: 'Zűrzavar',            gift: 'Képzelet',         siddhi: 'Illumináció' }
  },

  partnerNote: 'A programozó partner a keréken pontosan szemben álló génkulcs (180°), ' +
    'ami egyben a fordított hexagram is — mind a hat vonala átbillentve. A rendszer ' +
    'szerint a két Árnyék egymást tartja fenn, ezért a partner ismerete segít kilépni ' +
    'a mintából.',

  note: 'A Gene Keys nem tudományos rendszer, hanem szemlélődési keret: Richard Rudd ' +
    'kifejezetten arra kéri az olvasót, hogy ne higgye el, hanem hosszan figyelje ' +
    'magában. A magyar megfeleltetések saját fordítások — a fogalmakat adják vissza, ' +
    'nem szó szerinti tükörfordítások.'
};
