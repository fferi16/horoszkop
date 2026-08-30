/*
 * patterns.js — fényszög-alakzatok értelmező szövegei
 * A profile.js buildPatterns() használja: a natál képletben felismert
 * alakzatok (stellium, nagy trigon, T-kvadrát, nagy kereszt, Yod, sárkány)
 * magyar leírásai.
 *
 * Sima script (nem ES modul). Betöltés: a western.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.patterns = {

  stellium: {
    name: 'Stellium (halmozódás)',
    symbol: '☍☍☍',
    base: 'Három vagy több égitest gyűlt össze ugyanabban a jegyben: az életenergiád szokatlanul nagy része összpontosul egyetlen minőségre. Ez a jegy témái körül forgó, elmélyült — olykor egyoldalú — személyiséget ad: amiben erős vagy, abban nagyon erős vagy, de érdemes tudatosan táplálni a képlet többi részét is.'
  },

  grandTrine: {
    name: 'Nagy trigon',
    symbol: '△',
    base: 'Három égitest szabályos háromszöget zár be (120°-onként): a köztük áramló energia akadálytalan, természetes tehetséget és belső nyugalmat ad. Az árnyoldala a kényelem — mivel magától működik, hajlamos vagy nem fejleszteni. Tudatos használattal viszont ez a képlet legnagyobb ajándéka.',
    byElement: {
      'Tűz': 'Tűz-elemű nagy trigon: veleszületett lendület, önbizalom és lelkesítő erő — magától értetődő számodra a cselekvés és az önkifejezés.',
      'Föld': 'Föld-elemű nagy trigon: gyakorlati tehetség, anyagi érzék és megbízhatóság — a kezed alatt maguktól rendeződnek a dolgok.',
      'Levegő': 'Levegő-elemű nagy trigon: könnyed gondolkodás, kapcsolatteremtő és kifejezőkészség — az ötletek és a szavak természetes közeged.',
      'Víz': 'Víz-elemű nagy trigon: mély érzelmi intelligencia, beleérzés és intuíció — ösztönösen érted, amit mások éreznek.'
    }
  },

  tSquare: {
    name: 'T-kvadrát',
    symbol: '⊤',
    base: 'Két szembenálló égitest mindegyike kvadrátot zár be egy harmadikkal: a feszültség a csúcsponti bolygóban összpontosul. Ez a képlet legnagyobb hajtómotorja — állandó belső nyomás, amely cselekvésre kényszerít. A csúcsponti bolygó területén vagy a legtermékenyebb, ha megtanulod irányítani, és ott égeted magad ki, ha nem.',
    apex: 'A feszültség csúcspontja: %P% — itt sűrűsödik a hajtóerő, és a vele szemközti üres pont mutatja a kiegyenlítés irányát.'
  },

  grandCross: {
    name: 'Nagy kereszt',
    symbol: '✚',
    base: 'Négy égitest áll keresztben (két szembenállás, négy kvadrát): ritka és nagy erejű alakzat. Az élet több irányból egyszerre feszít — sokáig úgy érződhet, mintha minden ajtó egyszerre nyílna és csukódna. Aki megtanulja hordozni, rendkívüli teherbírású és sokoldalú lesz; a kulcs az, hogy egyszerre mindig csak az egyik karjával foglalkozz.',
    byQuality: {
      'Kardinális': 'Kardinális kereszt: a feszültség cselekvésben tör ki — mindig új helyzetet teremtesz, a türelmetlenség a fő kísértés.',
      'Szilárd': 'Szilárd kereszt: a feszültség makacs kitartássá sűrűsödik — hatalmas az állóképességed, az elengedés a fő lecke.',
      'Változó': 'Változó kereszt: a feszültség szétszórtságban jelentkezhet — rugalmas vagy, de meg kell tanulnod egy irányba fogni az erőt.'
    }
  },

  yod: {
    name: 'Yod („Isten ujja")',
    symbol: 'ʏ',
    base: 'Két, egymással szextilben álló égitest kvinkunxot zár be egy harmadikkal: az alakzat hegye egy pontra mutat. A hagyomány szerint sorsszerű alakzat — a csúcsponti bolygó területén az élet ismétlődő finomhangolást, sorozatos kiigazítást kér, míg meg nem találod a rendeltetésed ezen a területen. Nem teher, hanem irányjelző.',
    apex: 'Az ujj hegye: %P% — ide mutat a képlet, ezen a területen kéri az élet a folyamatos finomhangolást.'
  },

  kite: {
    name: 'Sárkány',
    symbol: '⬖',
    base: 'Nagy trigon, amelynek egyik tagjával szemben egy negyedik égitest áll: a szabadon áramló tehetség irányt és célt kap. A szembenálló bolygó a sárkány „farka" — ez adja a húzóerőt, amitől a nagy trigon kényelme teljesítménnyé válik. A képlet egyik legszerencsésebb alakzata.'
  }
};
