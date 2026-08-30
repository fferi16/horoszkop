/*
 * gypsy.js — a 36 lapos cigánykártya magyar jelentésekkel,
 * kirakási módok és kiértékelő szövegek.
 * A hagyományban nincs fordított állás; az olvasás jelenetek összefűzése,
 * erősen érzelmi-történetmesélő.
 * polarity: '+' kedvező, '-' nehéz, '0' semleges; tag: témakör a szintézishez.
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.gypsy = {

  name: 'Cigánykártya',
  reversals: false,
  imgPath: 'assets/gypsy-ai/',   // helyben generált antik illusztrációk
  imgExt: '.png',

  cards: {
    g01: { name: 'Ajándék', glyph: '🎁', polarity: '+', tag: 'orom',
      up: 'Váratlan kedvezés, amit nem kellett kiérdemelni: figyelmesség, meglepetés — fogadd el, ne keress mögé árat.' },
    g02: { name: 'Állandóság', glyph: '🪨', polarity: '+', tag: 'sors',
      up: 'Hosszú távú, sorsszerű dolgok lapja: ami itt szerepel, az nem múló szeszély — tartós elem az életedben.' },
    g03: { name: 'Betegség', glyph: '🛌', polarity: '-', tag: 'test',
      up: 'Energiavesztés, kényszerpihenő: a test (vagy a lélek) lassítást kér — jobb önként megadni, mint kivárni, míg kikényszeríti.' },
    g04: { name: 'Bíró', glyph: '⚖️', polarity: '0', tag: 'hivatal',
      up: 'Döntés, mérlegelés, hivatalos ügy — és önkorlátozás: nézd meg, nem te vagy-e a saját legszigorúbb bírád.' },
    g05: { name: 'Bosszúság', glyph: '😤', polarity: '-', tag: 'konfliktus',
      up: 'Apró, idegesítő súrlódások: nem tragédia, hanem tanítás — az elvárások és a valóság közti rés jelzése.' },
    g06: { name: 'Ellenség', glyph: '🗡️', polarity: '-', tag: 'konfliktus',
      up: 'Ellenlábas — kívül vagy belül: valaki (vagy a saját rosszabbik éned) a szándékaid ellen dolgozik.' },
    g07: { name: 'Féltékenység', glyph: '🟢', polarity: '-', tag: 'szerelem',
      up: 'Harmadik jelenléte, önbizalomhiány, birtoklás: a féltés mögött mindig a saját biztonságérzet kérdése áll.' },
    g08: { name: 'Gondolat', glyph: '💭', polarity: '0', tag: 'szellem',
      up: 'Töprengés, tervezgetés, magányos okoskodás: a megoldás közel — de a gondolatból egyszer tetté kell válnia.' },
    g09: { name: 'Gyermek', glyph: '👶', polarity: '+', tag: 'csalad',
      up: 'Gyermekáldás, megújulás, friss kezdet: valami kicsi és új születik — ötlet, kapcsolat vagy valódi gyermek.' },
    g10: { name: 'Halál', glyph: '🕯️', polarity: '-', tag: 'sors',
      up: 'Végleges lezárás és újrakezdés: egy szakasz visszavonhatatlanul véget ér — a hagyomány szerint ritkán szó szerinti.' },
    g11: { name: 'Hamisság', glyph: '🎭', polarity: '-', tag: 'konfliktus',
      up: 'Látszat, megtévesztés, álca: valami nem az, aminek mutatja magát — nézz a felszín mögé, mielőtt bizalmat adsz.' },
    g12: { name: 'Ház', glyph: '🏠', polarity: '+', tag: 'csalad',
      up: 'Stabilitás, család, béke, ingatlan: a biztos pont — ahová hazatérsz, vagy amit most építesz.' },
    g13: { name: 'Házasság', glyph: '💒', polarity: '+', tag: 'szerelem',
      up: 'Tartós kötés, szövetség — olykor üzleti társulás: hosszú távra szóló egyezség lapja.' },
    g14: { name: 'Hűség', glyph: '🐕', polarity: '+', tag: 'szerelem',
      up: 'Lojalitás, kitartás, megbízhatóság: van, aki melletted áll — de nézd meg, a hűség nem a változástól való félelem-e.' },
    g15: { name: 'Katonatiszt', glyph: '🎖️', polarity: '0', tag: 'szemely',
      up: 'Erélyes, egyenruhás-tekintélyes férfialak — vagy a saját harcosabb oldalad: kitartás, olykor erőszakosság.' },
    g16: { name: 'Kispénz', glyph: '🪙', polarity: '0', tag: 'penz',
      up: 'Kisebb összegek, mindennapi kiadások-bevételek: nem a nagy fordulat — a rendszeres, apró anyagi mozgás.' },
    g17: { name: 'Látogatás', glyph: '🚪', polarity: '+', tag: 'tarsasag',
      up: 'Vendég, találkozás, segítő szándékú közeledés: valaki belép az ajtódon — vagy neked kell bekopognod.' },
    g18: { name: 'Levél', glyph: '✉️', polarity: '0', tag: 'hir',
      up: 'Fontos írásos üzenet, hivatalos papír, hír: a fejlemény írásban érkezik.' },
    g19: { name: 'Özvegyasszony', glyph: '👵', polarity: '0', tag: 'szemely',
      up: 'Idősebb nőalak: anya, anyós, tapasztalt asszony — az anyai szál vagy egy érett női tanács a kérdésben.' },
    g20: { name: 'Özvegyember', glyph: '👴', polarity: '0', tag: 'szemely',
      up: 'Idősebb férfialak: apa, após, tapasztalt férfi — az apai szál vagy egy érett férfitanács a kérdésben.' },
    g21: { name: 'Pap', glyph: '🕍', polarity: '0', tag: 'szellem',
      up: 'Tanító, mester, lelki vezető: a helyzet tanácsot, áldást vagy szertartásos lezárást kér.' },
    g22: { name: 'Pénz', glyph: '💰', polarity: '+', tag: 'penz',
      up: 'Bőség, gyarapodás, nagyobb anyagi mozgás: pénz jön — a környező lapok mutatják, marad-e.' },
    g23: { name: 'Remény', glyph: '🌅', polarity: '+', tag: 'orom',
      up: 'Bizakodás, távlat — a hagyomány szerint távoli út vagy régi kapcsolat felújítása is: van miért előre nézni.' },
    g24: { name: 'Szerelem', glyph: '❤️', polarity: '+', tag: 'szerelem',
      up: 'Erős, olykor irányíthatatlan érzelem: a szív főszereplővé vált — a kérdés igazi tétje érzelmi.' },
    g25: { name: 'Szerelmes férfi', glyph: '🤵', polarity: '0', tag: 'szemely',
      up: 'A kérdező férfi — vagy a kérdés szeretett férfialakja: a körülötte fekvő lapok róla szólnak.' },
    g26: { name: 'Szerelmes nő', glyph: '👰', polarity: '0', tag: 'szemely',
      up: 'A kérdező nő — vagy a kérdés szeretett nőalakja: a körülötte fekvő lapok róla szólnak.' },
    g27: { name: 'Szerencse', glyph: '🍀', polarity: '+', tag: 'orom',
      up: 'Tervek megvalósulása, nyereség, kedvező fordulat: az élet most melléd áll — de a szerencse a készet segíti.' },
    g28: { name: 'Szerencsétlenség', glyph: '⛈️', polarity: '-', tag: 'sors',
      up: 'Váratlan csapás, komoly próba, választóvonal: nehéz lap — de a hagyomány szerint fordulópont is: utána más ember áll fel.' },
    g29: { name: 'Szomorúság', glyph: '😢', polarity: '-', tag: 'lelek',
      up: 'Befelé fordulás, bánat, magányosság: a lélek most csendet és időt kér — nem kell azonnal „megjavítani".' },
    g30: { name: 'Tolvaj', glyph: '🕵️', polarity: '-', tag: 'penz',
      up: 'Veszteség veszélye, eltulajdonítás — átvitt értelemben az is, ami az idődet, energiádat lopja: vigyázz az értékeidre.' },
    g31: { name: 'Utazás', glyph: '🧳', polarity: '0', tag: 'valtozas',
      up: 'Rövidebb út, kimozdulás, változás: a helyzet mozgást kér — fizikai vagy belső helyváltoztatást.' },
    g32: { name: 'Üzenet', glyph: '📨', polarity: '0', tag: 'hir',
      up: 'Szóbeli hír, telefon, kommunikáció: beszélni kell — a kimondott szó viszi előre az ügyet.' },
    g33: { name: 'Vágy', glyph: '🌠', polarity: '0', tag: 'lelek',
      up: 'Sóvárgás, várakozás, halasztott terv: amit nagyon akarsz, még érik — a türelem itt nem tétlenség.' },
    g34: { name: 'Váratlan öröm', glyph: '🎉', polarity: '+', tag: 'orom',
      up: 'Nem várt jó fordulat, lelkesítő felismerés: az élet meglep — engedd, hogy jólessen.' },
    g35: { name: 'Veszteség', glyph: '🍂', polarity: '-', tag: 'penz',
      up: 'Elengedés, kiesés, hiány: valami kikerül a kezedből — nézd meg, valóban a tiéd volt-e még.' },
    g36: { name: 'Vidámság', glyph: '😊', polarity: '+', tag: 'orom',
      up: 'Könnyedség, örömforrás, társasági derű: felszabadult időszak — csak a felszínességre vigyázz.' }
  },

  spreads: [
    { key: 'napi', name: 'Napi kártya', cards: 1,
      desc: 'Egy lap a nap hangulataként — a cigánykártya érzelmi nyelvén.',
      positions: [{ name: 'A nap lapja', text: 'A nap érzelmi alaphangja vagy fő eseménye.' }] },
    { key: 'mjj', name: 'Múlt – Jelen – Jövő', cards: 3,
      desc: 'A klasszikus hármas a cigánykártya történetmesélő nyelvén.',
      positions: [
        { name: 'Múlt', text: 'A történet eleje: ami idáig hozott.' },
        { name: 'Jelen', text: 'Ahol a történet most tart.' },
        { name: 'Jövő', text: 'Amerre a történet a jelen állás szerint folytatódik.' }] },
    { key: 'kiskereszt', name: 'Kis kereszt', cards: 5,
      layout: { cols: 3, rows: 3, cells: [
        { r: 2, c: 2 },      // 1. a helyzet (közép)
        { r: 1, c: 2 },      // 2. ami segít (felül)
        { r: 3, c: 2 },      // 3. ami hátráltat (alul)
        { r: 2, c: 1 },      // 4. a múlt (balra)
        { r: 2, c: 3 }] },   // 5. a kimenet (jobbra)
      desc: 'Ötlapos kereszt: középen a helyzet, felette ami segít, alatta ami hátráltat, balra a múlt, jobbra a kimenet.',
      positions: [
        { name: 'A helyzet', text: 'A kereszt közepe: a kérdés magja.' },
        { name: 'Ami segít', text: 'A felső lap: erő és támogatás, amire építhetsz.' },
        { name: 'Ami hátráltat', text: 'Az alsó lap: teher vagy gyengeség, amivel számolni kell.' },
        { name: 'A múlt', text: 'A bal lap: az előzmény, amiből a helyzet kinőtt.' },
        { name: 'A kimenet', text: 'A jobb lap: amerre a helyzet a jelen állás szerint tart.' }] },
    { key: 'felhold', name: 'Félhold (7 lapos)', cards: 7,
      layout: { cols: 7, rows: 3, cells: [
        { r: 3, c: 1 }, { r: 2, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 },
        { r: 1, c: 5 }, { r: 2, c: 6 }, { r: 3, c: 7 }] },
      desc: 'A magyar hagyomány félhold-terítése: az első három lap a múlt, a negyedik a kulcslap, az utolsó három a jövő. Rövid távra (a következő hetek, 1-2 hónap) olvas.',
      positions: [
        { name: 'Múlt I.', text: 'Az előzmények kezdete.' },
        { name: 'Múlt II.', text: 'Ahogy a helyzet kialakult.' },
        { name: 'Múlt III.', text: 'A közvetlen előzmény.' },
        { name: 'Kulcslap', text: 'A kérdés központi témája — a félhold csúcsa: ehhez képest olvasandó az összes többi lap.' },
        { name: 'Jövő I.', text: 'A közeljövő első fejleménye.' },
        { name: 'Jövő II.', text: 'A folyamat kibontakozása.' },
        { name: 'Jövő III.', text: 'A várható végkifejlet (1-2 hónapos távlat).' }] },
    { key: 'alapvetes', name: 'Alap vetés (9 lapos)', cards: 9,
      layout: { cols: 3, rows: 3, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 },
        { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 },
        { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }] },
      desc: 'A magyar hagyomány praktikus alapvetése: a lapok sorban három kupacba kerülnek — bal oszlop a múlt (1-4-7. lap), középső a jelen (2-5-8.), jobb a jövő (3-6-9.). A személyjelölő lapot nem vesszük ki előre: ha felbukkan, az is üzenet.',
      positions: [
        { name: 'Múlt I.', text: 'A múlt-kupac első lapja: a történet gyökere.' },
        { name: 'Jelen I.', text: 'A jelen-kupac első lapja: a mostani helyzet alaphangja.' },
        { name: 'Jövő I.', text: 'A jövő-kupac első lapja: az irány első jele.' },
        { name: 'Múlt II.', text: 'A múlt kibontása.' },
        { name: 'Jelen II.', text: 'A jelen kibontása — a vetés közepe.' },
        { name: 'Jövő II.', text: 'A jövő kibontása.' },
        { name: 'Múlt III.', text: 'A múlt-szál lezárása: amit magaddal hozol.' },
        { name: 'Jelen III.', text: 'A jelen-szál lezárása: amin most állsz.' },
        { name: 'Jövő III.', text: 'A jövő-szál lezárása: amerre az egész tart.' }] },
    { key: 'szerelemkereso', name: 'Szerelemkereső (13 lap)', cards: 13,
      seeker: { targets: ['g25', 'g26'], question: 'Megtalálom-e a páromat egy éven belül?' },
      desc: 'Kereső-vetés a magyar hagyományból: 13 lapot terítünk, és a Szerelmes férfi/nő lapját keressük. Ha benne van, a helye az időzítést, az előtte lévő lapok az odavezető utat, az utána következők a társat és a kapcsolatot mutatják.',
      positions: [] },
    { key: 'penzkereso', name: 'Pénzkereső (13 lap)', cards: 13,
      seeker: { targets: ['g22'], question: 'Jobbra fordul-e az anyagi helyzetem egy éven belül?' },
      desc: 'Kereső-vetés: 13 lap között a Pénz lapot keressük. Ha benne van, az előtte lévő lapok a gyarapodáshoz vezető utat, az utána következők a pénz felhasználását mutatják.',
      positions: [] },
    { key: 'rontasvizsgalat', name: 'Rontásvizsgálat (13 lap)', cards: 13,
      seeker: { targets: ['g06'], question: 'Van-e rajtam ártó szándék, „rontás"?' },
      desc: 'Kereső-vetés: 13 lap között az Ellenség lapot keressük. Ha nincs benne, megnyugodhatsz. Ha benne van, az előtte lévő lapok az okról és az ártó személyről mesélnek.',
      positions: [] },
    { key: 'kilences', name: 'Kilences tabló (3×3)', cards: 9,
      layout: { cols: 3, rows: 3, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 },
        { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 },
        { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }] },
      desc: 'Kilenc lap 3×3-ban: a középső lap a kérdező helyzete, a körülötte lévők a történet rétegei — sorok: gondolat / valóság / alap; oszlopok: múlt / jelen / jövő.',
      positions: [
        { name: 'Gondolatok — múlt', text: 'Ami korábban foglalkoztatott.' },
        { name: 'Gondolatok — jelen', text: 'Ami most jár a fejedben.' },
        { name: 'Gondolatok — jövő', text: 'Amit remélsz vagy amitől tartasz.' },
        { name: 'Történés — múlt', text: 'Ami történt: a közvetlen előzmény.' },
        { name: 'A helyzet szíve', text: 'A tabló közepe: te magad a helyzetben.' },
        { name: 'Történés — jövő', text: 'Amerre az események tartanak.' },
        { name: 'Alap — múlt', text: 'A mélyebb gyökér.' },
        { name: 'Alap — jelen', text: 'Ami most tart vagy visszahúz.' },
        { name: 'Alap — jövő', text: 'A tartós következmény.' }] }
  ],

  synthesis: {
    intro: 'Összkép — a lapok együtt:',
    toneGood: 'A terítés hangulata derűs: a lapok többsége (%N%/%T%) kedvező — a történet, amit a kártyák mesélnek, jó irányba tart.',
    toneHard: 'A terítés hangulata nehéz: a lapok többsége (%N%/%T%) terhet hordoz — a cigánykártya érzelmi nyelvén ez azt jelenti: a lelki munka most fontosabb, mint a külső lépés.',
    toneMixed: 'A terítés fény és árnyék között mozog: a kedvező és nehéz lapok kiegyenlítik egymást — a történet nyitott, és a te hozzáállásod írja tovább.',
    person: 'A terítésben megjelent a(z) %P% lapja: a kérdés személyesen érintett szereplőt kapott — a mellette fekvő lapok közvetlenül róla (rólad) szólnak.',
    themeDominant: 'A lapok között feltűnően sok a(z) %THEME% témájú (%N% lap): bármi volt is a kérdés, a kártyák következetesen erre a területre mutatnak — itt van a történet súlypontja.',
    themes: {
      szerelem: 'szerelem és kötődés', penz: 'pénz és anyagiak', konfliktus: 'konfliktus és feszültség',
      csalad: 'család és otthon', orom: 'öröm és szerencse', sors: 'sorsfordulat',
      szemely: 'személyek és szereplők', hir: 'hírek és üzenetek', lelek: 'lelki élet',
      szellem: 'gondolatok és tanulás', tarsasag: 'társaság és találkozások',
      valtozas: 'változás és mozgás', hivatal: 'hivatalos ügyek', test: 'egészség'
    },
    seeker: {
      found: 'A keresett lap (%C%) BENNE VAN a terítésben, a %P%. helyen: a hagyomány szerint a válasz IGEN — és mivel a lap a terítés %H%, az esemény az időszak %HTXT% várható.',
      notFound: 'A keresett lap (%C%) NINCS a 13 lap között: a hagyomány szerint a kérdezett dolog ebben az időtávban nem mutatkozik. Nem végleges nem — a hagyomány ilyenkor hosszabb időtávval (2, majd 3 év) ismétli a vetést, vagy a hozzáállás vizsgálatát ajánlja.',
      firstHalf: 'első felében áll', secondHalf: 'második felében áll',
      firstHalfTime: 'első felében', secondHalfTime: 'második felében',
      before: 'Az odavezető utat az előtte lévő lapok mutatják: %LIST%.',
      after: 'A keresett lap utáni lapok a folytatást színezik: %LIST%.',
      enemyWho: 'A rontásvizsgálat hagyománya szerint a közvetlenül előtte lévő lap (%W%) a „miértre" felel, a kettővel előtte lévő (%W2%) az ártó jellemét mutatja.',
      clean: 'Megnyugtató terítés: a hagyomány szerint nincs jele ártó szándéknak — ha mégis sorozatosan bukkanna fel az Ellenség lap más vetésekben, akkor érdemes visszatérni a kérdésre.'
    },
    note: 'A cigánykártya a XIX–XX. századi közép-európai jóskártya-hagyomány: életképekben, érzelmekben mesél, fordított állás nélkül. A lapok jelenetei összefűzve adnak ki történetet — önismereti tükörként érdemes olvasni, nem jóslatként.'
  }
};
