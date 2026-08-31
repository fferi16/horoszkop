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


  /* A 64 kulcs TARTALMA: mit jelent a három szint valójában, és hogyan fordul
     az árnyék befelé (elfojtó) vagy kifelé (reaktív) — a felhasználó csak három
     szót látott korábban, ami címke, nem tartalom.
     Forrás: docs/22-gene-keys.md. SAJÁT megfogalmazás: Richard Rudd könyvének
     szövege szerzői jogvédett, abból szó szerint semmit nem veszünk át. */
  details: {
    1: {
      shadowText: 'A teremtő tűz kialszik: minden szürkének és érdektelennek tűnik. A saját alkotói ciklusod természetes mélypontját könnyű személyes kudarcnak félreérteni.',
      repressive: 'levertség — belesüppedsz a szürkeségbe',
      reactive: 'hajszoltság — mániás elfoglaltsággal futsz a zsibbadtság elől',
      giftText: 'Ha a mélypontot nem legyőzöd, hanem elfogadod, valóban új energia jön a felszínre: az önkifejezés eleven és megismételhetetlen lesz.',
      siddhiText: 'Minden — az árnyék is — egyetlen szép egészként látszik.'
    },
    2: {
      shadowText: 'Kizökkentél a saját irányodból: vagy sodródsz, vagy erőltetsz egy tervet, de sehol nem vagy igazán otthon.',
      repressive: 'elveszettség — horgony nélkül sodródsz',
      reactive: 'szabályozottság — túlszervezed az életed, hogy irányt színlelj',
      giftText: 'Ha átadod magad annak, amit valóban érzel, visszatalálsz egy nagyobb rendbe: nem tanáccsal, hanem puszta jelenléteddel adsz irányt másoknak.',
      siddhiText: 'A keresés véget ér — az elkülönültség sosem volt valóságos.'
    },
    3: {
      shadowText: 'Az ismeretlentől és az új kezdetektől való félelem. Horgonyokba kapaszkodsz — munka, társ, tárgyak —, és ha megbillennek, a körülményeket hibáztatod.',
      repressive: 'merevség — szigorú renddel próbálod kordában tartani az ismeretlent',
      reactive: 'rendetlenség — a félelem dühként és káoszként tör ki',
      giftText: 'Otthonossá válsz a káoszban ahelyett, hogy rettegnél tőle: kísérletezel, elviseled a kudarcot, és megtalálod a rejtett mintát.',
      siddhiText: 'Az élet véget nem érő játék, amely már most teljes.'
    },
    4: {
      shadowText: 'Az elme védekezésből használja a logikát: azonnali választ akar, ezért ráharap arra a hitre, amely megnyugtat — és elutasít mindent, ami ellentmond.',
      repressive: 'közöny — feladod a gondolkodást',
      reactive: 'szőrszálhasogatás — a részletekbe kapaszkodva vezeted le a feszültséget',
      giftText: 'Amikor az elme kimerül, a tudás egész testtel érkezik, nem következtetésként. Az értelem játékos eszköz lesz, nem páncél.',
      siddhiText: 'A kegyelem még az örökölt sebeket is feloldja.'
    },
    5: {
      shadowText: 'Bizalmatlanság a természetes időzítéssel szemben: a nyugtalanság cselekvésre hajt, mielőtt bármi megérne.',
      repressive: 'borúlátás — feladod a várakozást',
      reactive: 'tolakodás — sürgeted az embereket és az eredményt',
      giftText: 'Nem fogcsikorgató várakozás, hanem valódi bizalom a ritmusban: az idegrendszer elcsendesedik, és akkor lépsz, amikor tényleg itt az ideje.',
      siddhiText: 'Az elkülönült én feloldódik, és vele az idő tudata is.'
    },
    6: {
      shadowText: 'Az érzelmeket veszélyesnek éled meg, ezért az egész felépítésed védekezés. A belső hullámzást súrlódásként vetíted ki a kapcsolataidra.',
      repressive: 'túlzott figyelmesség — eltörlöd magad, teljesen a másikra hangolódsz',
      reactive: 'tapintatlanság — nyersen kimondasz és megbántasz, és ezt őszinteségnek nevezed',
      giftText: 'A védelem leengedése: empatikus ráhangolódás stratégia helyett, nyitottan a saját és a másik érzéseire is.',
      siddhiText: 'Nem marad belül semmi, amit védeni kellene.'
    },
    7: {
      shadowText: 'A vezetés hierarchiaként és erőként jelenik meg: hatalom mások fölött, olyan követőkkel, akik függők maradnak.',
      repressive: 'rejtőzés — elrejted a saját vezetői képességedet',
      reactive: 'zsarnokság — uralkodsz, és szándékosan tartod tehetetlenségben a többieket',
      giftText: 'Szolgálatból vezetsz, nem ráerőltetésből: mélyen figyelsz, és nem választ adsz, hanem segítesz megtalálni a másik saját útját.',
      siddhiText: 'A csendben, elismerés nélkül gyűlő jóság.'
    },
    8: {
      shadowText: 'A kitűnéstől való félelem: biztonságra cseréled az egyediséget, ezért utánzol — mások stílusát, véleményét, életformáját.',
      repressive: 'fásultság — üresen végzed a mozdulatokat',
      reactive: 'mesterkéltség — gyártott „egyedi" személyiség, jelmezként hordott lázadás',
      giftText: 'Az igazi egyediség abban a pillanatban jelenik meg, amikor abbahagyod a benyomáskeltés irányítását.',
      siddhiText: 'Az egész egyetlen megismételhetetlen arca, amely nyomot sem hagy.'
    },
    9: {
      shadowText: 'Az életerő apró részletekre forgácsolódik: hatalmas erőfeszítés, semmi haladás — körbe-körbe jársz.',
      repressive: 'vonakodás — látod az utat, de megdermedsz',
      reactive: 'elterelődés — nyughatatlanul eltereled magad az elfojtott feszültségtől',
      giftText: 'Kicsi tettek, szívvel és összpontosítással. A lendület barázdát váj, amely idővel magától húz — egyre kevesebb akaraterő kell.',
      siddhiText: 'A lágyság és az átadás bizonyul törhetetlennek, nem az erő.'
    },
    10: {
      shadowText: 'Csapdába esel a saját belső drámádban: folyton figyeled, hogyan nézel ki és hogyan látnak. Ez a magadra figyelés elzárja a természetes mozgásodat.',
      repressive: 'önmegtagadás — feladod a szükségleteidet, másokon keresztül élsz',
      reactive: 'nárcizmus — minden magadra vonatkozik, a reflektorfényt követeled',
      giftText: 'Nem gyártasz többé identitást: felismered, hogy nem vagy azonos a gondolataiddal és az érzéseiddel. A belső küzdelem spontaneitássá és humorrá enyhül.',
      siddhiText: 'Tiszta jelenlét, amelyben nincs többé kereső.'
    },
    11: {
      shadowText: 'Elveszel az elme képeiben és hiedelmeiben: az erőt vallásoknak vagy eszméknek adod, az eszményt pedig valóságnak véled.',
      repressive: 'ábrándozás — belső világba menekülsz, ami sosem ölt formát',
      reactive: 'önámítás — felfújt önképet vetítesz ki, a mögötte lévő félelem nélkül',
      giftText: 'Könnyedén tartott látomás: az archetipikus szépség felemelő erőként árad, nem tervrajzként — az ihletet józan ítélet egyensúlyozza.',
      siddhiText: 'Közvetlen tudás a hiedelmeken túl: a sötét és a világos egy.'
    },
    12: {
      shadowText: 'Félelem az érzelmi elárasztástól: falat építesz — fegyelmezett külső és éles beszéd tartja távol a többieket.',
      repressive: 'elitizmus — csendes szellemi vagy ízlésbeli fölény',
      reactive: 'rosszindulat — a nyelvet fegyverként használod',
      giftText: 'Ugyanaz a finom érzékenység befelé fordítva: kifinomult ízlés arra, mi hiteles — sokszor művészi vagy zenei adottságként.',
      siddhiText: 'A lényegi szívet semmi külső nem sértheti meg.'
    },
    13: {
      shadowText: 'Csak a negatív frekvenciát hallod meg: válságot, panaszt, rossz hírt. Valódi figyelem nem lehetséges, mert a saját szándékod fut minden beszélgetés alatt.',
      repressive: 'engedékenység — látszólag figyelsz, mindenben egyetértesz',
      reactive: 'szűklátókörűség — elutasítasz mindent, ami reményteli',
      giftText: 'Félreteszed a saját szándékodat, és a szavak alatt hallgatsz: megkülönbözteted a szív bölcsességét az elme fecsegésétől.',
      siddhiText: 'Belülről lenni a másikban — a jelenlét maga gyógyít.'
    },
    14: {
      shadowText: 'Beéred kevesebbel: örökölt hiedelem, hogy a munka robot — az álmokat csendben feladod a biztonságért.',
      repressive: 'tehetetlenség — félelemből választasz, az életerő elfojtva',
      reactive: 'szolgaság — elismerésért túlhajtod magad, sosem érve el a valódi lehetőségedet',
      giftText: 'Amikor abbahagyod a megalkuvást, a lappangó tehetség felszínre jön: a munka mély elégedettséggé válik, valódi szenvedélyből, nem nyomásból.',
      siddhiText: 'A bőség csatornája, amely úgy ad, mint a nap.'
    },
    15: {
      shadowText: 'Félelem a hétköznapitól: az élet ismétlődése szürkének és fogságnak tűnik, ezért elutasítod a saját ritmusodat.',
      repressive: 'üresség — beletörődés, lapos sodródás',
      reactive: 'szélsőségesség — újdonságot hajszolsz, sehol nem maradsz meg',
      giftText: 'A hétköznapi mély elfogadása ragyogást szül: ráhangolódsz a természetes ritmusra, és ítélkezés nélkül fogadod be az emberi sokféleséget.',
      siddhiText: 'A tudat virágba borul — határtalanul, mégis földközelben.'
    },
    16: {
      shadowText: 'Visszatartod a lelkesedést attól, amit valóban szeretsz: végtelen tervezés gyakorlás nélkül, kifogások mögé bújva.',
      repressive: 'hiszékenység — átveszed mások nézeteit, saját ítélet nélkül',
      reactive: 'önámítás — merev rendszerek és önigazoló történetek mögé rejted a tehetetlenséget',
      giftText: 'Az odaadás ismétlésen keresztül technikát, majd tehetséget érlel. A készségeket lazán tartod, nem azonosulsz velük.',
      siddhiText: 'Üres edény: a jól élés művészete.'
    },
    17: {
      shadowText: 'A mintafelismerő elme a hibákra tapad, és egyetlen nézetet identitássá merevít — védesz egy világképet, ami régi sebek köré épült.',
      repressive: 'önkritika — semmilyen véleményt nem mersz tartani',
      reactive: 'véleménykényszer — másoknak tévedniük kell, a logika fegyver lesz',
      giftText: 'Szívvel vezetett gondolkodás: látod, merre tartanak a minták, és kimondod az igazadat anélkül, hogy egyetértést követelnél.',
      siddhiText: 'A látó és a látott eggyé válik.'
    },
    18: {
      shadowText: 'A hibakereső elme állandó panasszá és belső pletykává válik; a kifelé irányuló kritika mindig álcázott önkritika.',
      repressive: 'alsóbbrendűség — a kritikus szem befelé fordul, krónikus elégtelenség',
      reactive: 'felsőbbrendűség — a tekintély megvetése, mások aláásására épült identitás',
      giftText: 'Ugyanaz az éles szem szolgálattá válik: meglátod, mi romlott el valóban, és példával javítasz, nem támadással.',
      siddhiText: 'A világot már befejezettként látod, mégis javítani indít.'
    },
    19: {
      shadowText: 'A szükségleteidet kiszervezed egy társnak vagy egy tekintélynek, és annak áldozataként éled meg, amit adnak vagy megvonnak.',
      repressive: 'szükségesség — kapaszkodsz, bűntudattal és drámával vonsz be gondoskodást',
      reactive: 'elszigetelődés — eltolod magadtól a kapcsolódást, és neheztelsz a távolságért',
      giftText: 'Előbb függetlenség, aztán ráhangolódás: finom érzék mások szükségleteire, hangulatokra, állatokra és tájakra — anélkül, hogy kibillenne.',
      siddhiText: 'Az elkülönült én átadása a közös, egymásra utalt létezésnek.'
    },
    20: {
      shadowText: 'Az élet robotpilótán megy: az elme múltba-jövőbe forgalma miatt sosem érkezel meg a pillanatba.',
      repressive: 'távollét — visszahúzódás és dermedtség, a jelenlét kikapcsolva',
      reactive: 'hajszoltság — nyughatatlan túlpörgés, megállni képtelenül',
      giftText: 'A gondolat leszorul a döntéshozó székéből: a cselekvés spontán és helyénvaló, mert bízol abban, hogy valami mélyebb intézi.',
      siddhiText: 'Tiszta létezés — mély csend, amibe mások öntudatlanul belesimulnak.'
    },
    21: {
      shadowText: 'Az élettel szembeni bizalmatlanság területként jelenik meg: pénzt, munkát, kapcsolatot irányítani kell — mélyén az elégtelenség félelmével.',
      repressive: 'behódolás — átadod az erőt, a körülményeket hibáztatod',
      reactive: 'irányítási kényszer — görcsösen fogsz mindent, aztán kitörsz',
      giftText: 'Elengedéssel vezetsz, nem ráerőltetéssel: az erő feddhetetlenségen át hat, és a hűséget nem követeled, hanem kapod.',
      siddhiText: 'Nemesség a tettben; az én átadva valami nagyobbnak.'
    },
    22: {
      shadowText: 'Nem vállalod a saját érzelmi állapotodat, ezért arra hárítod, aki épp melletted van; régi sebek irányítják, hogyan találkozol az emberekkel.',
      repressive: 'modorosság — merev illem mögé zárt érzelem',
      reactive: 'helyénvalótlanság — rossz pillanatban kitörő, másra vetített érzelem',
      giftText: 'A saját érzelmi vegyészeted teljes vállalása méltóságot és melegséget ad — és nyugalmat, amely nem leng ki örömre-fájdalomra.',
      siddhiText: 'Pillanatok, amelyekben láthatóan az isteni visz egy életet.'
    },
    23: {
      shadowText: 'Az elme túlbonyolít, hogy biztonságban érezze magát: rossz szavak, vagy jó szavak rossz időben — a kirekesztéstől való félelem szüli a kirekesztést.',
      repressive: 'némaság — a hangot belső elfojtás vagy külső elnyomás fojtja el',
      reactive: 'széttöredezettség — sokat beszélsz és rosszul időzítesz, körbe-körbe magyarázva',
      giftText: 'Egyenesen a lényegre vágsz: nem érvelsz, hanem tudsz — és azt az egy mondatot mondod, ami célba ér.',
      siddhiText: 'Feltétel nélküli észlelés, amely puszta jelenlétével ébreszt.'
    },
    24: {
      shadowText: 'Az elme ugyanabba a hurokba tér vissza — szer, gondolat, ember, történet —, hogy elkerülje a csendes réseket, ahol a gyász és a magány felszínre jön.',
      repressive: 'dermedtség — összehúzódsz a résnél, energiavesztés',
      reactive: 'szorongás — lázasan töltöd ki a rést ingerrel, munkával, zajjal',
      giftText: 'Belépsz a résbe ahelyett, hogy menekülnél, és az lesz a valódi eredetiség forrása — ugrások, amelyek téged is meglepnek.',
      siddhiText: 'A gondolkodás egyszerűen megáll.'
    },
    25: {
      shadowText: 'A szív összeszorul az örökölt fájdalom körül; a fájdalom elleni ellenállás szorosabbra húzza a görcsöt, és a szeretet nem tud mozogni.',
      repressive: 'tudatlanság — nem nézel rá a saját szenvedésedre',
      reactive: 'hidegség — elutasítod a fájdalmadat, és keménységként fordítod kifelé',
      giftText: 'Rezdülésről rezdülésre elfogadod, ami van — ez bátorság, nem beletörődés —, és visszatér az energia és a valódi melegség.',
      siddhiText: 'Az előnyben részesítés és a határ feloldódik: minden szeretetként ismerszik fel.'
    },
    26: {
      shadowText: 'A szűkösségtől való félelem ügyessé tesz a megszerzésben: rövidítések, önigazolás, elhárított felelősség — és a nyeremény üresnek érződik.',
      repressive: 'manipuláció — csendes aláásás, bűntudat eszközként',
      reactive: 'kérkedés — hangos önreklám, elfojtott haraggal',
      giftText: 'Ugyanaz az ügyesség az egész szolgálatában: meggyőzés és időzítés arra, hogy az erőforrás oda kerüljön, ahol kell.',
      siddhiText: 'A személyes akarat eltűnik; nyomtalan munka mindenkiért.'
    },
    27: {
      shadowText: 'Nem rosszindulat, hanem tudatlanság: a szűkösség-gondolkodás elvág attól a hálótól, amely táplál, és a hiányt szerzéssel töltöd ki.',
      repressive: 'önfeláldozás — határok nélkül adsz, kimerülten és csendben neheztelve',
      reactive: 'önközpontúság — azért adsz, hogy kapj, és haragszol, ha nem jön vissza',
      giftText: 'A többletből és a szívből táplálsz másokat, azzal a megkülönböztetéssel, hogy hova érdemes adni.',
      siddhiText: 'Gondoskodás, amelyben már nincs bent senki, aki gondoskodna.'
    },
    28: {
      shadowText: 'A halál ősi félelme, mai formájában: a rettegés, hogy az élet értelmetlen. Elhalasztod az életet, és hitek mögé húzódsz.',
      repressive: 'üresség — elfordulsz a félelemtől, és a látszólag rendben lévő élet közepe hiányzik',
      reactive: 'szerencsejáték — a félelmet folyamatos kockázatra váltod',
      giftText: 'Beleszelsz a félelembe, nem megkerülöd, és egészében fogadod az életet — ettől kap a hétköznap mitikus mélységet.',
      siddhiText: 'Az azonosság feloldódik az örök jelenben.'
    },
    29: {
      shadowText: 'Igent mondasz anélkül, hogy egészen ott lennél — félelemből, nem igazságból mondasz igent vagy hagysz félbe.',
      repressive: 'túlvállalás — jóval a természetes végük után is kapaszkodsz a kötelezettségekbe',
      reactive: 'megbízhatatlanság — könnyen rábólintasz, aztán nyomás alatt visszalépsz',
      giftText: 'Az igen a testben jelenik meg, csendes, egyenletes melegségként — nem izgalomként —, és akkor mindent beleadsz.',
      siddhiText: 'Odaadás minden észérven túl.'
    },
    30: {
      shadowText: 'Genetikus vágy, kikapcsoló nélkül: egy beteljesül, jön a következő. Nem a vágy a szenvedés, hanem a vágy ellen vívott háború.',
      repressive: 'túlzott komolyság — a vággyal együtt az életerőt is elfojtod',
      reactive: 'könnyelműség — dacból mindent kiélsz, aztán kiégsz',
      giftText: 'A vágyakat hagyod jönni-menni, mint az időjárást: se nem engedelmeskedsz, se nem harcolsz — humorral és együttérzéssel.',
      siddhiText: 'A vágyakozás átég eksztázisba.'
    },
    31: {
      shadowText: 'Bizonytalanság magabiztosságba öltözve: vágy a meghallgatásra, és az a hit, hogy a hangod irányítja a valóságot.',
      repressive: 'meghunyászkodás — hamis alázat, önlekicsinyléssel kicsikart figyelem',
      reactive: 'lenézés — magadat mások fölé helyezed',
      giftText: 'Befolyás, nem propaganda: sebezhetőségből és megélt kudarcból mondod ki a közösség jövőjét, elismerés-igény nélkül.',
      siddhiText: 'Nem marad senki, akinek alázatosnak kellene lennie.'
    },
    32: {
      shadowText: 'A törzsből való kivetettség ősi rettegése, ma pénzhez és eredményhez tapadva; semmilyen siker nem csendesíti el.',
      repressive: 'fundamentalizmus — merevségbe és zárt körökbe húzódsz',
      reactive: 'szétesettség — ritmustalan harag, csak magadban bízol',
      giftText: 'Érzék ahhoz, mi érdemes a fennmaradásra: az ép gyökereket megőrzöd, és arra oltod rá az újat.',
      siddhiText: 'A félelem tisztelet lesz: egy láncszem vagy egy élő láncban.'
    },
    33: {
      shadowText: 'Az élet lényege kicsúszik a látóteredből. A fájdalmas tapasztalat eltemetve marad, ezért a minta észrevétlenül újrajátszódik.',
      repressive: 'zárkózottság — munkába vagy magányba rejtőzöl',
      reactive: 'kioktatás — haraggal mutogatsz mások hibáira',
      giftText: 'Ítélkezés nélkül figyeled magad: még mindig elrejtőzöl vagy csattansz, de már látod — és az emlékezet bölcsesség nyersanyaga lesz.',
      siddhiText: 'Minden, ami voltál, elengedve; az igazság fellebbenti magát.'
    },
    34: {
      shadowText: 'Nyers túlélőerő tudatosság nélkül: próbálkozás, tolás, az élet hajlítása egy fejben megírt tervhez.',
      repressive: 'önkicsinyítés — félsz a saját erődtől, és elhasználatlanul fáradsz el',
      reactive: 'erőszakosság — öntudatlanul nyomulsz és uralkodsz',
      giftText: 'Az erő időzítéshez és természetes ritmushoz igazodik, nem izomhoz: csak akkor cselekszel, amikor a pillanat valóban megérett.',
      siddhiText: 'A test tiszta csatornaként mozog, erőn és gyengeségen túl.'
    },
    35: {
      shadowText: 'Nyugtalan étvágy, amely folyton kifelé nyúl — étel, pénz, újdonság —, hogy egy belső ürességet töltsön ki.',
      repressive: 'unalom — az éhség eltemetve, laposság és alacsony vitalitás',
      reactive: 'mánia — végtelen inger és változás, sehol megmaradás nélkül',
      giftText: 'A félelem megvan, de már nem uralkodik: a szív kinyílik, és valódi ugrásokat teszel a lezárt élet-rekeszek között.',
      siddhiText: 'A személyes félelem feltétel nélküli szeretetbe oldódik.'
    },
    36: {
      shadowText: 'Érzelmi és szellemi viharok a káosztól való félelemtől hajtva; az intenzitást könnyű összetéveszteni az intimitással.',
      repressive: 'idegesség — a vihart az idegekbe nyeled, a külső nyugalomba kapaszkodva',
      reactive: 'válságra hajlás — kijátszod a vihart: titkok, bűntudat, oldalról érkező katasztrófák',
      giftText: 'Nyíltan felvállalod az érzelmi rendetlenségedet. A szenvedés nem szűnik meg, de az őszinteség összehoz, nem eltaszít.',
      siddhiText: 'A személyes fájdalom egyetemessé válik; marad a vihar utáni csend.'
    },
    37: {
      shadowText: 'Nagyrészt fejben készült tehetetlenség-érzés: nem bízol abban, hogy a szívből adott jó visszatér, ezért alkudozol.',
      repressive: 'túlérzelmesség — melegen beszélsz, de gerinc nélkül',
      reactive: 'kegyetlenség — páncélt öltesz a sebezhetőség ellen, és kifelé keményedsz',
      giftText: 'Úgy élsz, mintha az emberiség egy család volna: könyvelés nélkül adsz, és a támogatás önállóságot épít, nem függést.',
      siddhiText: 'Kollektív anyai mező, amelyben abszolút a biztonság.'
    },
    38: {
      shadowText: 'Küzdelem az élettel, másokkal és magaddal. Az erő valódi, csak rosszul irányzott — a harc tartja életben a különálló, ostromlott ént.',
      repressive: 'vereségtudat — belül feladtad, magadat hibáztatod, a feszültség a testbe áll',
      reactive: 'agresszió — folyton harcolsz, mindig rossz csatákat',
      giftText: 'Ugyanaz a heves energia megtalálja a helyes harcot: az akadály edzéssé válik, és ott is mégy tovább, ahol mások abbahagyják.',
      siddhiText: 'A küzdelem tánccá válik; a másikat a legmagasabb lehetőségén tartod.'
    },
    39: {
      shadowText: 'A csapdába esés félelme, amit mások gombjainak nyomkodásával vezetsz le — inkább a hangsúlyban, mint a tartalomban.',
      repressive: 'bezártság — a haragnál mélyebb félelem megdermeszti az életerőt',
      reactive: 'provokativitás — bántasz, hogy észrevegyenek',
      giftText: 'A gyerek játék-energiája alkotó lendületté érve: ragadós vitalitás, amely magadban és másokban is felold a megrekedést.',
      siddhiText: 'A személyes szabadság átadva az egésznek; a jelenléted szabadít fel másokat.'
    },
    40: {
      shadowText: 'Kimerülés attól, hogy a saját természeted ellenében dolgozol: túladás, túlvállalás, az érzések tagadása.',
      repressive: 'engedékenység — nem tudsz nemet mondani, rossz határokkal',
      reactive: 'megvetés — gőgös elszigetelődésbe húzódsz, a dühöt lenézéssel álcázva',
      giftText: 'A tiszta nem, bűntudat nélkül. A határok és a valódi kikapcsolódás visszaadják az energiát, és az erőfeszítés hozzád illővé válik.',
      siddhiText: 'A magány felfedi a benned lakó istenit; a test a teljes frekvenciáján jár.'
    },
    41: {
      shadowText: 'Az álom sosem ér földet: a remény lesz a szenvedély tárgya, nem a csinálás — a képek csendben helyettesítik a jelent.',
      repressive: 'álmodozás — befelé menekülsz, tespedten',
      reactive: 'túlpörgés — ideges energia fut a valós kapacitásod előtt, egyenest a kiégésbe',
      giftText: 'Megérzed az újat, mielőtt megérkezne: hol akar valójában mozdulni a közös energia, és mi a vágy a felszíni akarás alatt.',
      siddhiText: 'Érintkezés minden kezdet névtelen forrásával.'
    },
    42: {
      shadowText: 'Az életet elhalasztod, mert követeléseket vetítesz a jövőre; a lezárásokat elutasítod, ezért a ciklusok sosem fejeződnek be.',
      repressive: 'kapaszkodás — nem tudsz elengedni embereket, szakaszokat, a múltat',
      reactive: 'csapodárság — sosem köteleződsz el egészen, a csalódást kikerülendő',
      giftText: 'Nem hidegség, hanem teljesebb bennelét: elvárás nélkül intenzívebben éled meg, ami történik — és minden ciklust tisztán zársz le.',
      siddhiText: 'A megfigyelő és a megfigyelt összeomlik; a lezárások maradnak, de belül nevet valami.'
    },
    43: {
      shadowText: 'Gondolati zaj, amely elnyomja a belső tudást: az aggodalom-hurkok kitöltenek minden csendet, mert a nem-tudás elviselhetetlen.',
      repressive: 'aggodalmaskodás — végtelen köröket futó gondolat',
      reactive: 'zajosság — mindenre rábeszélsz, és ezzel mélyíted az elutasítást, amitől félsz',
      giftText: 'Bízol a saját hangodban annyira, hogy kiszűrd a közmegegyezést: a tudás egészben érkezik, testi bizonyosságként.',
      siddhiText: 'A tudat felismeri önmagát; nincs mit hozzátenni ahhoz, ami vagy.'
    },
    44: {
      shadowText: 'Félelemtől torzított emberismeret: örökölt kapcsolati minták zavarják, kit vonzol és kiben bízol — ezért ugyanaz a felállás áll össze újra.',
      repressive: 'bizalmatlanság — egyetlen rossz tapasztalat után lehúzod a redőnyt',
      reactive: 'félreítélés — éles ösztön mellett is a rossz embereket választod',
      giftText: 'Ösztönös, pontos emberismeret: szinte azonnal felméred a másikat, és a megfelelő embert teszed a megfelelő helyre.',
      siddhiText: 'Elosztott, szerves együttműködés, ahol az egyediség tartja össze az egészet.'
    },
    45: {
      shadowText: 'Hierarchia a szűkösség félelmére építve: az a hit, hogy a felemelkedéshez le kell nyomni valakit.',
      repressive: 'félénkség — meghajolsz a tekintély előtt, a konfliktus elkerüléséért',
      reactive: 'fellengzősség — a kapaszkodás megszállottja, mások kicsinyítésével',
      giftText: 'Vezetés létra nélkül: a tekintély és az információ oldalirányban mozog, és az erő azzal nő, hogy másokat erősítesz.',
      siddhiText: 'Olyan teljes egység, amelyben a feltételes csere fölöslegessé válik.'
    },
    46: {
      shadowText: 'Azt akarod, hogy a pillanat más legyen, mint amilyen: aggódsz, szorítasz, eredményt menedzselsz — és épp ott feszülsz meg, ahol lazítani kellene.',
      repressive: 'érzéketlenség — lezárod az érzékiséget, visszahúzódsz a testi örömtől',
      reactive: 'felszínes vidámság — erőltetett jókedv valódi harag fölött',
      giftText: 'Elfogadod, ami van, ettől a test ellazul, és belakod. Ami utána jön, szerencsének látszik: jókor jó helyen — mert abbahagytad a beavatkozást.',
      siddhiText: 'A megnyugodott elme mellett a szív tapintható boldogságmezőt sugároz.'
    },
    47: {
      shadowText: 'Az ősi és kollektív félelem súlya a testben, amely öntudatlanul hajt: sötét szakaszok és az az érzés, hogy az átalakulás lehetetlen.',
      repressive: 'reménytelenség — befelé omlasz, és normálisnak fogadod el a mintát',
      reactive: 'dogmatizmus — merev bizonyosságként vetíted ki az elnyomást',
      giftText: 'Az örökölt sötétséget fejlődéssé alakítod azzal, hogy jelen maradsz a mélypontokon: nincs rögzített azonosság, amit védeni kellene.',
      siddhiText: 'A sejtek maguk fényben oldódnak fel.'
    },
    48: {
      shadowText: 'A félelem, hogy nem vagy elég — hogy hiányzik belőled a szükséges mélység. Vagy a hétköznapiba rejtőzöl, vagy szakértelemmel páncélozol.',
      repressive: 'szürkeség — készen kapott mintákkal fedve, sosem nézve rá a félelemre',
      reactive: 'gátlástalanság — mások félelmére játszol tudással, a sajátodat tagadva',
      giftText: 'Megülsz a félelemmel ahelyett, hogy menekülnél, és kiderül: a kút mindig azt adja, amire a pillanatnak szüksége van.',
      siddhiText: 'Nem felhalmozott tudás, hanem spontán, jelentéktelennek látszó, tökéletesen illeszkedő cselekvés.'
    },
    49: {
      shadowText: 'Eltemetett törzsi szükségletek irányítanak titokban; bármi, ami fenyegeti őket, azonnali érzelmi visszarándulást vált ki.',
      repressive: 'tehetetlenség — az érzelmi élet befagyva, kívül stabilan, belül szárazon',
      reactive: 'elutasítás — előre elutasítasz, hogy ne téged utasítsanak el',
      giftText: 'Tiszta megkülönböztető éberség, amely lemetszi, amire valójában nincs szükséged — csendes sebészet, nem düh.',
      siddhiText: 'Kollektív ébredés: a régi minta leég, és valami valóban új emelkedik ki.'
    },
    50: {
      shadowText: 'A félelem eltorzítja, hogyan dolgozza fel az elme az információt: hierarchia, összehasonlítás, és a beletörődés, hogy a rendszer túl nagy.',
      repressive: 'túlterheltség — a hierarchia követelései alatt feladod a személyes álmot',
      reactive: 'felelőtlenség — haraggal játszod ki a rendszert, senkinek sem elszámolva',
      giftText: 'Szemlélődő középút: belépsz egy működésképtelen csoportba, és addig rendezed az elemeit, amíg önszerveződő összhang lehetségessé válik.',
      siddhiText: 'Nem létrehozott, hanem meglévő harmónia, amibe az elkülönültség belefeloldódik.'
    },
    51: {
      shadowText: 'A test bizalmatlansága azzal szemben, hogy az élet irányítható: krónikus idegi bizonytalanság, versengés, folyamatos készenlét.',
      repressive: 'gyávaság — a remény lassan elszivárog, visszahúzódás',
      reactive: 'ellenségesség — félelem nélküli düh és hiábavalóság, felesleges konfliktusokkal',
      giftText: 'Bátorság egyedül elindulni, kitaposott ösvényen kívül: a versengés befelé fordul kiválósággá, a sokk pedig beavatás lesz.',
      siddhiText: 'Egyetlen, ok nélküli, megismételhetetlen fordulat.'
    },
    52: {
      shadowText: 'Az az érzés, hogy nincs elég idő — inkább kollektív mező, mint magánügy. A felszínes légzés bezárja az elmét és a testet egy szorongás-hurokba.',
      repressive: 'megrekedés — a nyomás alatt közönybe és kimerültségbe omlasz',
      reactive: 'nyughatatlanság — lázas tevékenység menekülésként',
      giftText: 'Nem tétlenség, hanem helyes időzítés: tiszta szándék, aztán hagyni megérni. A munka szolgálatból csírázik, nem félelemből — ezért tart ki.',
      siddhiText: 'A rezgés megszűnik: kiterjedés nélküli békemag, amely a tevékenységben is megmarad.'
    },
    53: {
      shadowText: 'Kívül keresed a beteljesülést, és félelemből indítasz, nem bizalomból: a nyíl már az elengedéskor görbe.',
      repressive: 'komorság — egyetlen tevékenységbe merevedsz, csendes szomorúsággal',
      reactive: 'állhatatlanság — végtelen új kezdet elköteleződés nélkül, önszembesülés elől',
      giftText: 'Erőfeszítés nélküli, szíven át bontakozó növekedés: a tudatosság szeretettel párosul, és természetes módon veted el az új ciklusokat másokban.',
      siddhiText: 'Az anyagi bőségen túl: a forma fejlődik, a tudat sosem fejlődött.'
    },
    54: {
      shadowText: 'Becsvágy hiányérzeten futva: személyes gyarapodás, amely bizalmatlan és ajtókat csuk be — anyagi törekvés, amely sosem érkezik meg.',
      repressive: 'becsvágytalanság — előre feladod az álmot elérhetetlenként',
      reactive: 'kapzsiság — dühtől hajtott felhalmozás, vakon a másokra eső árra',
      giftText: 'Ugyanaz a hajtóerő egyetlen kérdéstől irányt vált: hogyan szolgálja ez az életet? Az anyagi erőfeszítés a tudat létrája lesz.',
      siddhiText: 'Kiérdemelt átalakulás: maga az anyag finomul.'
    },
    55: {
      shadowText: 'Az a meggyőződés, hogy az élet veled történik: az érzelmi időjárásodat külső okoknak és mások viselkedésének adod át.',
      repressive: 'panaszkodás — befelé forduló borúlátás, amely csendben megfoszt az erődtől',
      reactive: 'hibáztatás — konkrét külső célpontra irányított felelősség',
      giftText: 'Nem azt kérded, hol a szabadság, hanem hogy hol NEM vagy szabad: felismered a magad építette ketreceket, és tudatossággal oldod fel őket.',
      siddhiText: 'A hétköznapi tudat átvilágosodik, ahogy az elkülönült én feloldódik.'
    },
    56: {
      shadowText: 'Képtelenség jelen lenni azzal, ami van: kifelé az érzékek ingert hajszolnak, befelé a fantázia visz el — így a környezeted terméke maradsz.',
      repressive: 'mogorvaság — alulingerelt zsibbadtság, örömtelenül',
      reactive: 'túlingereltség — kényszeres újdonság a belső vagy külső valóság tagadására',
      giftText: 'Megkülönbözteted, mi táplál valóban és mi merít ki — se nem falánk, se nem önmegtartóztató. Az élés természetes meditációvá válik.',
      siddhiText: 'Kizárólag az isteni szeretet vonja el a figyelmed.'
    },
    57: {
      shadowText: 'Sejtszintű érzés, hogy valami nincs rendben, szabadon lebegő szorongásként a jövő felé — ez elzárja a test tudását, és az elme veszi át a kormányt.',
      repressive: 'határozatlanság — a kétely elfojtja az intuíciót, bénultság',
      reactive: 'meggondolatlanság — félelemből hozott kapkodó döntések',
      giftText: 'A test valós idejű tájékozódása: finom hallás, amely a helyzetet előbb érzékeli, mint az elme. Ha a jelenben bízol benne, feloldja a szorongást.',
      siddhiText: 'A félelem véget ér, mert eltűnt az, aki félt.'
    },
    58: {
      shadowText: 'Nyugtalanság egy elképzelt jövő felé: az örömöt elhalasztod, ezért a körülményeket javítgatod ahelyett, hogy élnél.',
      repressive: null,
      repressiveNote: 'Ez az egyetlen génkulcs, amelynek Rudd szerint nincs elfojtó pólusa: maga az életerő nem nyomható el.',
      reactive: 'beavatkozás — a természetes folyamatba nyúlsz bele: javítasz, rendszerezel, korrigálsz másokat',
      giftText: 'A nyugtalanság befelé fordítva elevenséggé oldódik: az öröm függetlenné válik a teljesítménytől, és magától átcsordul szolgálatba.',
      siddhiText: 'A tudat elengedi az egyéni fókuszt; a tó elsimul.'
    },
    59: {
      shadowText: 'Nem annyira hazugság, mint stratégia: a védett réteg közted és a másik közt. A félelem a két ember közti térben él.',
      repressive: 'kirekesztettség — kizártnak érzed magad, és titokban magad zárod ki, hogy uralkodj',
      reactive: 'tolakodás — betörsz a másik terébe, testileg vagy érzelmileg',
      giftText: 'A falak leomlanak, miután előbb a saját szíveddel váltál bensőségessé: valódi nyitottság, amely erő nélkül oldja fel a másik védelmét.',
      siddhiText: 'Nem marad én, amely szűrne — tiszta közvetítő.'
    },
    60: {
      shadowText: 'Félelemből fakadó ellenállás az újjal szemben: szabályok és zárt gondolkodás, amelyek újratermelik az ismertet.',
      repressive: 'szerkezetlenség — sodródsz, semmi tartósra nem köteleződsz el',
      reactive: 'merevség — irányító és megkérdőjelezhetetlen; az új ötlet fenyegetés',
      giftText: 'Az elfogadott korlát lesz a mutáció edénye — a mag héja, a folyó partja. Az eszményt szerkezet egyensúlyozza, hogy a zsenialitás földet érjen.',
      siddhiText: 'Ok nélküli igazságosság a karmán és az erkölcsön túl.'
    },
    61: {
      shadowText: 'A megválaszolhatatlan „miért" könyörtelen nyomása alatt az elme szerkesztette valóságot véled valóságnak.',
      repressive: 'kiábrándultság — elfordulsz a kérdéstől, és örökölt kerethez igazodsz',
      reactive: 'fanatizmus — egyetlen válaszra fagysz, és védekezőn térítesz',
      giftText: 'A nyomás alkotásban szabadul fel, nem magyarázatban: minden belátás egy belső káprázatot tör össze, és felszabadítja a benne rekedt energiát.',
      siddhiText: 'Közvetlen belső egyesülés az istenivel — egyszerre üresen és teljesen.'
    },
    62: {
      shadowText: 'A nyelvet és a tényeket arra használod, hogy a valóság biztonságosnak érződjön: az élet ellentétekre és címkékre egyszerűsödik.',
      repressive: 'megszállottság — apró részletekbe temetkezel a saját szenvedésed elől',
      reactive: 'tudálékosság — végtelen kérdés és homályos tények, amikkel erőtlenítesz',
      giftText: 'A részlet visszatalál a szívhez: olyan pontosan rendezed és nevezed meg a dolgokat, hogy a nyelv maga tisztít és gyógyít.',
      siddhiText: 'Cselekvés közvetlenül az ürességből, elkülönült cselekvő nélkül.'
    },
    63: {
      shadowText: 'Az emberi elmébe huzalozott szerkezeti kérdőjel, feloldatlan nyomásként — amit az emberek merev hittel tapasztanak be.',
      repressive: 'önkétely — összehasonlításon át magadra fordított kétely',
      reactive: 'gyanakvás — haraggal keveredett kétely, jellemzően a közeliek felé',
      giftText: 'Ugyanaz a nyomás valódi, nem tapadó kíváncsisággá alakul: türelmes vizsgálódás, amely mindenkit szolgál. A kétely módszer lesz, nem nyomorúság.',
      siddhiText: 'A paradoxon: a kétely maga az igazság.'
    },
    64: {
      shadowText: 'Elmezűrzavar, amelyet az ősi fájdalom termel, mert az elme nem hajlandó érezni: kényszeresen gondolkodsz, hogy lehagyd.',
      repressive: 'utánzás — óriási energiát fordítasz a beolvadásra, ami a képzelet ellensége',
      reactive: 'zavarodottság — a fájdalom kifelé szivárog: kaotikus élet, instabil kapcsolatok',
      giftText: 'Ha nem állsz ellen a zűrzavarnak, és megérzed, mi van alatta, az életerő akadálytalanul árad, a lárma pedig valódi alkotó látomássá tisztul.',
      siddhiText: 'Az ego feladja a létezés kényszerét; a belső fény állandóvá válik.'
    }
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
