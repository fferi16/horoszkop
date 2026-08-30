/*
 * western.js — a nyugati (tropikus) asztrológia adatmodulja
 * Forrás: docs/01-nyugati-asztrologia.md, valamint az elem–temperamentum
 * megfeleltetés a docs/10-tipologiak-es-kartyarendszerek.md fájlból.
 *
 * Sima script (nem ES modul), file:// protokollon is betölthető.
 * Jegykulcsok: kos, bika, ikrek, rak, oroszlan, szuz, merleg, skorpio,
 *              nyilas, bak, vizonto, halak
 *
 * Megjegyzés: a jegyhatárok naptári dátumai évről évre ±1 nappal ingadozhatnak,
 * mert a Nap jegyváltása nem mindig ugyanarra a napra esik. Pontos képlethez
 * ekliptikai hosszúságot kell számolni, nem fix dátumot.
 */

window.HDATA = window.HDATA || {};

window.HDATA.western = {

  /* ------------------------------------------------------------------ *
   *  A 12 állatövi jegy
   * ------------------------------------------------------------------ */
  signs: [
    {
      key: 'kos', name: 'Kos', symbol: '♈', latin: 'Aries',
      start: [3, 21], end: [4, 19],
      element: 'Tűz', quality: 'Kardinális', polarity: 'Yang',
      ruler: 'Mars', rulerTraditional: 'Mars',
      temperament: 'Kolerikus',
      bodyPart: 'fej, arc, koponya, agy',
      luckyNumbers: [1, 8, 17],
      colors: ['piros', 'skarlátvörös'],
      stones: ['gyémánt', 'rubin', 'vérjáspis'],
      metal: 'vas', day: 'kedd',
      positive: ['bátor', 'kezdeményező', 'energikus', 'őszinte', 'lelkes', 'versengő', 'gyors döntéshozó'],
      negative: ['türelmetlen', 'impulzív', 'önző', 'meggondolatlan', 'hirtelen haragú', 'befejezetlenül hagyja a dolgokat'],
      description: 'A zodiákus első jegye, a tavaszpont kardinális tűzjegye: a Kos a tiszta kezdet energiája. Gyorsan dönt, azonnal cselekszik, és jobban bírja a nyílt ütközést, mint a hosszú várakozást. Egyenessége miatt kiszámítható partner, de a türelem és a kitartás nem az erőssége: az indítás izgalma után gyakran elveszíti az érdeklődését. Legfőbb fejlődési feladata, hogy a lendületét befejezett munkákká alakítsa.',
      love: 'A meghódítás izgalma élteti, nyíltan és gyorsan közeledik, a kertelést nem kedveli. Hosszú távon akkor működik jól, ha a kapcsolat is ad neki teret az önállóságra és a közös kihívásokra.',
      career: 'Ott a legjobb, ahol indítani kell valamit: új projekt, versenyhelyzet, önálló döntés. A monoton, hosszan tartó adminisztráció gyorsan kimeríti, ezért érdemes köré kitartó, részletekre figyelő csapatot építeni.',
      compatibility: { best: ['Oroszlán', 'Nyilas'], good: ['Ikrek', 'Vízöntő'], challenging: ['Rák', 'Bak'], opposite: 'Mérleg' }
    },
    {
      key: 'bika', name: 'Bika', symbol: '♉', latin: 'Taurus',
      start: [4, 20], end: [5, 20],
      element: 'Föld', quality: 'Szilárd', polarity: 'Jin',
      ruler: 'Vénusz', rulerTraditional: 'Vénusz',
      temperament: 'Melankolikus',
      bodyPart: 'nyak, torok, hangszálak, pajzsmirigy',
      luckyNumbers: [2, 6, 9, 12, 24],
      colors: ['zöld', 'rózsaszín', 'földszínek'],
      stones: ['smaragd', 'rózsakvarc', 'zafír'],
      metal: 'réz', day: 'péntek',
      positive: ['megbízható', 'türelmes', 'gyakorlatias', 'kitartó', 'hűséges', 'érzéki', 'jó pénzügyi érzékű'],
      negative: ['makacs', 'birtokló', 'anyagias', 'változástól idegenkedő', 'kényelemszerető', 'féltékeny'],
      description: 'A Bika szilárd földjegy, a Vénusz uralma alatt: az anyagi és érzéki világ birtokbavétele a témája. Lassan indul, de amit elkezd, azt jellemzően végig is viszi, és a stabilitást többre értékeli a látványos fordulatoknál. Erős a viszonya a testi élményekhez, az ízekhez, az anyagminőséghez, a természethez. Kockázata a beragadás: a megszokott biztonságot akkor is védi, amikor az már nem szolgálja.',
      love: 'Lassan nyílik meg, de ha elköteleződött, tartósan és testközeli módon jelen van a kapcsolatban. Nehezen viseli a kiszámíthatatlanságot, és a féltékenység a leggyakoribb buktatója.',
      career: 'Türelmet, kézzelfogható eredményt és anyagi biztonságot igénylő területeken a legerősebb: pénzügy, mezőgazdaság, kézműves szakmák, minőségi termékek. A folyamatos átszervezés és a bizonytalan bevétel kifejezetten megviseli.',
      compatibility: { best: ['Szűz', 'Bak'], good: ['Rák', 'Halak'], challenging: ['Oroszlán', 'Vízöntő'], opposite: 'Skorpió' }
    },
    {
      key: 'ikrek', name: 'Ikrek', symbol: '♊', latin: 'Gemini',
      start: [5, 21], end: [6, 20],
      element: 'Levegő', quality: 'Változó', polarity: 'Yang',
      ruler: 'Merkúr', rulerTraditional: 'Merkúr',
      temperament: 'Szangvinikus',
      bodyPart: 'kar, kéz, váll, tüdő, idegrendszer',
      luckyNumbers: [5, 7, 14, 23],
      colors: ['sárga', 'világoszöld', 'világoskék'],
      stones: ['achát', 'citrin', 'alexandrit'],
      metal: 'higany', day: 'szerda',
      positive: ['kíváncsi', 'sokoldalú', 'kommunikatív', 'szellemes', 'alkalmazkodó', 'gyors felfogású', 'társaságkedvelő'],
      negative: ['szétszórt', 'felszínes', 'következetlen', 'ideges', 'pletykás', 'nehezen dönt'],
      description: 'A Merkúr uralta változó levegőjegy: az Ikrek a kapcsolódás, az információ és a nyelv jegye. Gyorsan tanul, könnyen vált témát, és szinte bármilyen közegben megtalálja a hangot a másikkal. Ereje a rugalmasság és a párhuzamos érdeklődés, gyengéje ugyanennek az árnyoldala: a figyelme szétszóródik, és a megkezdett szálak elvarratlanul maradnak. Akkor teljesedik ki, ha a sokféleséget egyetlen, tartós irányba tudja rendezni.',
      love: 'A szellemi izgalom számára az első számú vonzerő: unalmas beszélgetéssel nem lehet megtartani. Szüksége van mozgástérre és változatosságra, a fojtogató szimbiózis gyorsan menekülésre készteti.',
      career: 'A kommunikáció, oktatás, média, kereskedelem, informatika és minden gyors váltást igénylő terep megfelel neki. Az egyhangú, hosszú koncentrációt kívánó munkában viszont hamar elszórakozik.',
      compatibility: { best: ['Mérleg', 'Vízöntő'], good: ['Kos', 'Oroszlán'], challenging: ['Szűz', 'Halak'], opposite: 'Nyilas' }
    },
    {
      key: 'rak', name: 'Rák', symbol: '♋', latin: 'Cancer',
      start: [6, 21], end: [7, 22],
      element: 'Víz', quality: 'Kardinális', polarity: 'Jin',
      ruler: 'Hold', rulerTraditional: 'Hold',
      temperament: 'Flegmatikus',
      bodyPart: 'mellkas, mell, gyomor, emésztőrendszer',
      luckyNumbers: [2, 3, 15, 20],
      colors: ['ezüst', 'fehér', 'tengerkék'],
      stones: ['holdkő', 'gyöngy', 'smaragd'],
      metal: 'ezüst', day: 'hétfő',
      positive: ['gondoskodó', 'empatikus', 'hűséges', 'védelmező', 'intuitív', 'otthonteremtő', 'jó emlékezetű'],
      negative: ['hangulatember', 'sértődékeny', 'múltba ragadó', 'túlféltő', 'zárkózott', 'manipulatív lehet'],
      description: 'A Hold jegye, kardinális vízjegy: a Rák témája az érzelmi biztonság megteremtése és megőrzése. Finom érzékelője van a hangulatoknak, gyakran hamarabb megérzi a feszültséget, mint ahogy az kimondódna. Kifelé óvatos, de ha valakit a köreibe fogadott, rendkívül hűséges és védelmező. Nehézsége a múlthoz és a régi sérelmekhez való ragaszkodás, valamint a saját hullámzó hangulatainak kezelése.',
      love: 'Mély, gondoskodó kötődésre képes, és a hétköznapi együttlét apró gesztusaiban fejezi ki magát. Sérülés esetén visszahúzódik a páncélja mögé, ezért fontos neki a kiszámítható, biztonságos partner.',
      career: 'Az emberekkel, gondozással, otthonnal, élelmiszerrel, ingatlannal, oktatással kapcsolatos területeken erős. A rideg, versengő közeg fárasztja, jó közösségben viszont hosszú távon lojális munkatárs.',
      compatibility: { best: ['Skorpió', 'Halak'], good: ['Bika', 'Szűz'], challenging: ['Kos', 'Mérleg'], opposite: 'Bak' }
    },
    {
      key: 'oroszlan', name: 'Oroszlán', symbol: '♌', latin: 'Leo',
      start: [7, 23], end: [8, 22],
      element: 'Tűz', quality: 'Szilárd', polarity: 'Yang',
      ruler: 'Nap', rulerTraditional: 'Nap',
      temperament: 'Kolerikus',
      bodyPart: 'szív, gerinc, hát, keringési rendszer',
      luckyNumbers: [1, 3, 10, 19],
      colors: ['arany', 'narancs', 'királysárga'],
      stones: ['rubin', 'peridot', 'borostyán'],
      metal: 'arany', day: 'vasárnap',
      positive: ['nagylelkű', 'kreatív', 'melegszívű', 'karizmatikus', 'hűséges', 'vezetői alkat', 'játékos'],
      negative: ['hiú', 'uralkodni vágyó', 'drámázó', 'figyelemigényes', 'kritikát rosszul tűr', 'pazarló'],
      description: 'A Nap saját jegye, szilárd tűzjegy: az Oroszlán az önkifejezés és a személyes jelenlét jegye. Természetes módon kerül a középpontba, és jól viseli a felelősséget, ha látja az értelmét. Nagyvonalú és melegszívű azokkal, akiket a sajátjának tekint, cserébe viszont elismerést vár. Legérzékenyebb pontja az önbecsülés: a kritikát könnyen éli meg személye elutasításaként, és ilyenkor válik hangossá vagy sértetté.',
      love: 'Látványosan és bőkezűen udvarol, a kapcsolatban is szeret ünnepelni és ünnepeltetni. Hűséges partner, de rendszeres visszajelzésre és figyelemre van szüksége, különben elhidegül.',
      career: 'Vezető, előadó, alkotó és reprezentatív szerepekben találja meg magát, ahol a személye is része a teljesítménynek. Névtelen háttérmunkában ritkán motivált, még akkor is, ha jól végzi.',
      compatibility: { best: ['Kos', 'Nyilas'], good: ['Ikrek', 'Mérleg'], challenging: ['Bika', 'Skorpió'], opposite: 'Vízöntő' }
    },
    {
      key: 'szuz', name: 'Szűz', symbol: '♍', latin: 'Virgo',
      start: [8, 23], end: [9, 22],
      element: 'Föld', quality: 'Változó', polarity: 'Jin',
      ruler: 'Merkúr', rulerTraditional: 'Merkúr',
      temperament: 'Melankolikus',
      bodyPart: 'belek, emésztés, lép, idegrendszer',
      luckyNumbers: [5, 14, 15, 23, 32],
      colors: ['szürke', 'bézs', 'sötétzöld', 'barna'],
      stones: ['zafír', 'karneol', 'jáspis'],
      metal: 'higany', day: 'szerda',
      positive: ['precíz', 'elemző', 'szorgalmas', 'segítőkész', 'megbízható', 'gyakorlatias', 'rendszerető'],
      negative: ['túlkritikus', 'aggodalmaskodó', 'perfekcionista', 'kicsinyes', 'nehezen lazít', 'hipochondriára hajlamos'],
      description: 'Változó földjegy a Merkúr uralma alatt: a Szűz a megkülönböztetés, a finomítás és a hasznos munka jegye. Észreveszi azt a részletet, ami mindenki másnak elkerüli a figyelmét, és élvezi, ha egy rendszer végre pontosan működik. Segítőkészsége valódi, de gyakran a szolgálaton keresztül keresi az elfogadást. Legnagyobb terhe a belső kritikus hang, amely a saját teljesítményét ritkán találja elégnek.',
      love: 'Nem a nagy gesztusok, hanem a mindennapi megbízhatóság embere: azzal szeret, hogy tesz valamit a másikért. A javító szándékú megjegyzései könnyen sértőnek hatnak, ezért érdemes tudatosan dicsérnie is.',
      career: 'Elemzői, minőségbiztosítási, egészségügyi, adminisztratív és kutatói feladatokban kimagasló. A kaotikus, improvizatív környezet stresszeli, tiszta folyamatok mellett viszont pótolhatatlan.',
      compatibility: { best: ['Bika', 'Bak'], good: ['Rák', 'Skorpió'], challenging: ['Ikrek', 'Nyilas'], opposite: 'Halak' }
    },
    {
      key: 'merleg', name: 'Mérleg', symbol: '♎', latin: 'Libra',
      start: [9, 23], end: [10, 22],
      element: 'Levegő', quality: 'Kardinális', polarity: 'Yang',
      ruler: 'Vénusz', rulerTraditional: 'Vénusz',
      temperament: 'Szangvinikus',
      bodyPart: 'vese, deréktájék, bőr, hormonális egyensúly',
      luckyNumbers: [4, 6, 13, 15, 24],
      colors: ['pasztellkék', 'rózsaszín', 'zöld'],
      stones: ['opál', 'lapis lazuli', 'zafír'],
      metal: 'réz', day: 'péntek',
      positive: ['diplomatikus', 'igazságos', 'együttműködő', 'esztétikai érzékű', 'békéltető', 'társas', 'kifinomult'],
      negative: ['határozatlan', 'konfliktuskerülő', 'mások véleményétől függő', 'halogató', 'felszínes lehet', 'önsajnálatra hajlamos'],
      description: 'A Vénusz kardinális levegőjegye: a Mérleg a viszonyok, az egyensúly és a méltányosság jegye. Szinte automatikusan a másik nézőpontjából is végiggondolja a helyzetet, ezért kiváló közvetítő és tárgyalópartner. Erős az arány- és formaérzéke, a rendezett, szép környezet nála nem luxus, hanem működési feltétel. Nehézsége a döntés: a mérlegelés könnyen halogatássá válik, a béke kedvéért pedig hajlamos elhallgatni a saját igényeit.',
      love: 'A párkapcsolat számára nem kiegészítő, hanem központi életterület; udvarias, figyelmes és harmóniára törekvő társ. Meg kell tanulnia nyíltan konfliktust vállalni, különben a fel nem mondott sérelmek gyűlnek fel benne.',
      career: 'Jogi, tárgyalási, HR-, tanácsadói, design- és művészeti területeken erős, ahol az egyensúly és az ízlés a munka része. A durva, agresszív munkahelyi stílus gyorsan kimeríti.',
      compatibility: { best: ['Ikrek', 'Vízöntő'], good: ['Oroszlán', 'Nyilas'], challenging: ['Rák', 'Bak'], opposite: 'Kos' }
    },
    {
      key: 'skorpio', name: 'Skorpió', symbol: '♏', latin: 'Scorpio',
      start: [10, 23], end: [11, 21],
      element: 'Víz', quality: 'Szilárd', polarity: 'Jin',
      ruler: 'Plútó', rulerTraditional: 'Mars',
      temperament: 'Flegmatikus',
      bodyPart: 'nemi szervek, kiválasztó rendszer, medence',
      luckyNumbers: [8, 11, 18, 22],
      colors: ['bordó', 'fekete', 'mélyvörös'],
      stones: ['topáz', 'obszidián', 'gránát', 'malachit'],
      metal: 'vas', day: 'kedd',
      positive: ['szenvedélyes', 'elszánt', 'mélyre látó', 'hűséges', 'bátor', 'kitűnő megfigyelő', 'kitartó'],
      negative: ['féltékeny', 'bosszúálló', 'titkolózó', 'megszállott', 'birtokló', 'szélsőséges'],
      description: 'Szilárd vízjegy, hagyományosan a Mars, modern szemléletben a Plútó uralma alatt: a Skorpió a mélység, az intenzitás és az átalakulás jegye. Nem elégszik meg a felszíni magyarázattal, ösztönösen a rejtett motivációt keresi. Bizalmat lassan ad, de akkor teljeset; ugyanígy a csalódást is nehezen bocsátja meg. Élete során többször átmegy olyan krízisen, amely után gyakorlatilag újraépíti önmagát — ez a jegy legfőbb erőforrása is.',
      love: 'Mindent vagy semmit típusú kötődés jellemzi, felszínes viszonyokkal ritkán elégszik meg. A birtoklás és a féltékenység a fő kockázata, a kimondott, őszinte bizalom pedig a legjobb ellenszere.',
      career: 'Kutatás, pszichológia, orvoslás, nyomozás, pénzügyi elemzés, krízismenedzsment: ahol ki kell deríteni valamit, ott elemében van. Rosszul viseli, ha felügyelik vagy ha nem lát rá a teljes képre.',
      compatibility: { best: ['Rák', 'Halak'], good: ['Szűz', 'Bak'], challenging: ['Oroszlán', 'Vízöntő'], opposite: 'Bika' }
    },
    {
      key: 'nyilas', name: 'Nyilas', symbol: '♐', latin: 'Sagittarius',
      start: [11, 22], end: [12, 21],
      element: 'Tűz', quality: 'Változó', polarity: 'Yang',
      ruler: 'Jupiter', rulerTraditional: 'Jupiter',
      temperament: 'Kolerikus',
      bodyPart: 'csípő, comb, máj',
      luckyNumbers: [3, 7, 9, 12, 21],
      colors: ['lila', 'mélykék', 'bíbor'],
      stones: ['türkiz', 'tanzanit', 'ametiszt'],
      metal: 'ón', day: 'csütörtök',
      positive: ['optimista', 'szabadságszerető', 'filozofikus', 'őszinte', 'kalandvágyó', 'nagyvonalú', 'jó tanító'],
      negative: ['tapintatlan', 'felelőtlen', 'túlzásokra hajlamos', 'ígérgető', 'szertelen', 'elkötelezéstől félő'],
      description: 'A Jupiter változó tűzjegye: a Nyilas a tágulás, a jelentéskeresés és a távlat jegye. Érdekli a nagy összefüggés, a világnézet, az idegen kultúra, és szívesen adja tovább, amit megértett. Természetes optimizmusa másokat is átlendít a holtponton, ugyanez az optimizmus viszont hajlamossá teszi a túlvállalásra. Őszinteségét gyakran tapintatlanságként élik meg körülötte, pedig ritkán akar bántani.',
      love: 'Olyan társat keres, akivel közösen lehet felfedezni valamit; a fojtogató rutin gyorsan elveszi a kedvét. Ha megkapja a szabadságát, meglepően hűséges és lelkes partner tud lenni.',
      career: 'Oktatás, kutatás, jog, kiadás, turizmus, nemzetközi kapcsolatok és minden olyan pálya illik hozzá, ahol tanulni és tanítani lehet. A szűk, szabályokba zárt munkakör hamar kiüresíti számára a munkát.',
      compatibility: { best: ['Kos', 'Oroszlán'], good: ['Mérleg', 'Vízöntő'], challenging: ['Szűz', 'Halak'], opposite: 'Ikrek' }
    },
    {
      key: 'bak', name: 'Bak', symbol: '♑', latin: 'Capricornus',
      start: [12, 22], end: [1, 19],
      element: 'Föld', quality: 'Kardinális', polarity: 'Jin',
      ruler: 'Szaturnusz', rulerTraditional: 'Szaturnusz',
      temperament: 'Melankolikus',
      bodyPart: 'térd, csontok, ízületek, fogak, bőr',
      luckyNumbers: [4, 8, 13, 22],
      colors: ['fekete', 'sötétbarna', 'sötétzöld', 'szürke'],
      stones: ['gránát', 'ónix', 'fekete turmalin'],
      metal: 'ólom', day: 'szombat',
      positive: ['fegyelmezett', 'felelősségteljes', 'ambiciózus', 'kitartó', 'gyakorlatias', 'megbízható', 'hosszú távon gondolkodó'],
      negative: ['rideg', 'pesszimista', 'munkamániás', 'merev', 'státuszorientált', 'nehezen bocsát meg'],
      description: 'A Szaturnusz kardinális földjegye: a Bak a struktúra, a felelősség és a hosszú távú építkezés jegye. Korán megtanulja, hogy az eredményért meg kell dolgozni, és ritkán számít külső segítségre. Céljait szakaszokra bontja, és éveken át képes ugyanabban az irányban haladni. Kockázata, hogy a teljesítményt azonosítja az önértékével, és a saját érzelmi szükségleteit halogatja el a munka mögött.',
      love: 'Óvatosan és komolyan közelít, a kapcsolatot is hosszú távú vállalásként kezeli. A gyengédségét inkább tettekkel fejezi ki, ezért fontos, hogy időnként szavakkal is megerősítse a másikat.',
      career: 'Vezetői, pénzügyi, jogi, mérnöki és intézményépítő pályákon a legerősebb, ahol a kitartás idővel kamatozik. Nehezen delegál, és hajlamos túl sok terhet magára venni.',
      compatibility: { best: ['Bika', 'Szűz'], good: ['Skorpió', 'Halak'], challenging: ['Kos', 'Mérleg'], opposite: 'Rák' }
    },
    {
      key: 'vizonto', name: 'Vízöntő', symbol: '♒', latin: 'Aquarius',
      start: [1, 20], end: [2, 18],
      element: 'Levegő', quality: 'Szilárd', polarity: 'Yang',
      ruler: 'Uránusz', rulerTraditional: 'Szaturnusz',
      temperament: 'Szangvinikus',
      bodyPart: 'boka, lábszár, vérkeringés',
      luckyNumbers: [4, 7, 11, 22, 29],
      colors: ['elektromos kék', 'türkiz', 'ezüst'],
      stones: ['ametiszt', 'gránát', 'akvamarin'],
      metal: 'ólom', day: 'szombat',
      positive: ['eredeti', 'humanitárius', 'független', 'találékony', 'jövőorientált', 'közösségépítő', 'toleráns'],
      negative: ['kiszámíthatatlan', 'érzelmileg távolságtartó', 'öncélúan lázadó', 'elméletekben ragadó', 'makacsul különc', 'kötődéstől félő'],
      description: 'Szilárd levegőjegy, hagyományosan a Szaturnusz, modern szemléletben az Uránusz uralma alatt: a Vízöntő az egyéniség és a közösség kettősségének jegye. Képes kívülről ránézni a bevett szokásokra, és megkérdezni, miért éppen így csináljuk. Elvi alapon áll ki mások jogaiért, ugyanakkor a saját érzelmeit gyakran gondolatokká fordítja le, hogy kezelhető maradjon. Fejlődési feladata, hogy az elvei mellett a személyes közelséget is vállalja.',
      love: 'Barátságból építkező, szabadságtisztelő kapcsolatokban működik a legjobban, ahol mindkét félnek marad saját tere. Az érzelmi elzárkózása félreérthető, ezért érdemes megtanulnia kimondani, amit érez.',
      career: 'Technológia, tudomány, innováció, civil szervezet, hálózatépítés: ahol újat lehet kitalálni vagy rendszert lehet átgondolni. A merev hierarchia és az értelmetlen szabály a leggyorsabb módja annak, hogy elveszítse a motivációját.',
      compatibility: { best: ['Ikrek', 'Mérleg'], good: ['Kos', 'Nyilas'], challenging: ['Bika', 'Skorpió'], opposite: 'Oroszlán' }
    },
    {
      key: 'halak', name: 'Halak', symbol: '♓', latin: 'Pisces',
      start: [2, 19], end: [3, 20],
      element: 'Víz', quality: 'Változó', polarity: 'Jin',
      ruler: 'Neptunusz', rulerTraditional: 'Jupiter',
      temperament: 'Flegmatikus',
      bodyPart: 'lábfej, nyirokrendszer, immunrendszer',
      luckyNumbers: [3, 9, 12, 15, 18, 24],
      colors: ['tengerzöld', 'levendula', 'lila'],
      stones: ['akvamarin', 'ametiszt', 'jáde'],
      metal: 'ón', day: 'csütörtök',
      positive: ['együttérző', 'művészi', 'intuitív', 'önzetlen', 'gyógyító hajlamú', 'alkalmazkodó', 'romantikus'],
      negative: ['menekülő', 'áldozatszerepre hajlamos', 'határok nélküli', 'befolyásolható', 'önámító', 'függőségekre hajlamos'],
      description: 'A zodiákus utolsó jegye, változó vízjegy, hagyományosan a Jupiter, modernen a Neptunusz uralma alatt: a Halak az összeolvadás és a feloldódás jegye. Rendkívül átjárható a környezete hangulataira, ezért egyszerre empatikus és sérülékeny. Erős a képzelete és a szimbolikus gondolkodása, ami a művészet és a segítő hivatások felé viszi. Legfontosabb tanulnivalója a határhúzás: megkülönböztetni, mi az övé és mi a másiké.',
      love: 'Odaadóan és romantikusan szeret, hajlamos idealizálni a partnerét, majd csalódni a valóságon. Akkor stabil, ha megtanulja kimondani a saját igényeit ahelyett, hogy csak alkalmazkodna.',
      career: 'Művészet, zene, film, ápolás, terápia, spirituális és szociális területek illenek hozzá, ahol az érzékenység érték. A kemény határidőkkel és számokkal dolgozó közeg extra struktúrát kíván tőle.',
      compatibility: { best: ['Rák', 'Skorpió'], good: ['Bika', 'Bak'], challenging: ['Ikrek', 'Nyilas'], opposite: 'Szűz' }
    }
  ],

  /* ------------------------------------------------------------------ *
   *  A 12 ház
   * ------------------------------------------------------------------ */
  houses: [
    {
      num: 1, name: 'I. ház', title: 'Az én háza',
      keywords: ['megjelenés', 'önkifejezés', 'testi adottságok', 'életkezdet'],
      description: 'A képlet legszemélyesebb szektora: a csúcsa maga az Aszcendens. Azt mutatja, milyen arcot fordítunk a világ felé, milyen az első benyomás rólunk, és hogyan indulunk neki ösztönösen bármilyen helyzetnek. Az itt álló bolygók erősen, jól láthatóan működnek a személyiségben.',
      sign: 'Kos', ruler: 'Mars', type: 'sarkalatos'
    },
    {
      num: 2, name: 'II. ház', title: 'Az anyagiak háza',
      keywords: ['pénz', 'birtoklás', 'erőforrások', 'önértékelés'],
      description: 'A saját erőforrások területe: a kereset, a tulajdon, az anyagi biztonság kérdései. Ugyanakkor a belső értékrendről is szól, arról, mit tartunk értékesnek és mennyire becsüljük meg magunkat. A pénzhez való viszony itt gyakran az önértékelés tükre.',
      sign: 'Bika', ruler: 'Vénusz', type: 'követő'
    },
    {
      num: 3, name: 'III. ház', title: 'A kommunikáció háza',
      keywords: ['tanulás', 'testvérek', 'rövid utak', 'beszéd, írás'],
      description: 'A közvetlen környezet és a mindennapi információcsere háza: a beszéd, az írás, a tanulás első szakasza, a testvérek és a szomszédság. A rövid utazások és a helyi mozgás is ide tartozik. Az itt álló bolygók megmutatják, hogyan gondolkodunk és hogyan adjuk át a gondolatainkat.',
      sign: 'Ikrek', ruler: 'Merkúr', type: 'hanyatló'
    },
    {
      num: 4, name: 'IV. ház', title: 'Az otthon háza',
      keywords: ['család', 'gyökerek', 'ingatlan', 'lelki alap'],
      description: 'A képlet legmélyebb pontja, csúcsa az IC: a származás, a család, a gyerekkori otthon és a lelki alapok szektora. Ide tartozik az ingatlan, a lakhatás és az élet lezáró szakasza is. Az itt álló bolygók arról mesélnek, milyen belső bázisról építkezünk.',
      sign: 'Rák', ruler: 'Hold', type: 'sarkalatos'
    },
    {
      num: 5, name: 'V. ház', title: 'Az önkifejezés háza',
      keywords: ['szerelem', 'gyermekek', 'kreativitás', 'játék'],
      description: 'A szabad alkotás és az öröm szektora: a szerelmi élet, az udvarlás, a gyermekek, a hobbik és a játék. A kockázatvállalás könnyedebb formái, akár a szerencsejáték is idetartoznak. Az itt álló bolygók mutatják, miben találjuk meg a spontán önkifejezés örömét.',
      sign: 'Oroszlán', ruler: 'Nap', type: 'követő'
    },
    {
      num: 6, name: 'VI. ház', title: 'A munka és egészség háza',
      keywords: ['mindennapi munka', 'rutin', 'szolgálat', 'egészség'],
      description: 'A hétköznapok szektora: a napi munkavégzés, a beosztottak és a kollégák, a rendszeres szokások és az egészségi állapot. Nem a karrierről szól, hanem arról, hogyan tesszük a dolgunkat nap mint nap. Az itt álló bolygók a munkastílust és a test-lélek karbantartásának módját színezik.',
      sign: 'Szűz', ruler: 'Merkúr', type: 'hanyatló'
    },
    {
      num: 7, name: 'VII. ház', title: 'A társkapcsolat háza',
      keywords: ['házasság', 'üzlettárs', 'szerződések', 'nyílt ellenfelek'],
      description: 'Az Aszcendenssel szemközti szektor, csúcsa a Descendens: a kétszemélyes viszonyok háza. Ide tartozik a házasság, az élettársi kapcsolat, az üzlettárs, de a nyílt ellenfél és a szerződés is. Gyakran azt mutatja, milyen tulajdonságokat keresünk vagy vetítünk ki a másikra.',
      sign: 'Mérleg', ruler: 'Vénusz', type: 'sarkalatos'
    },
    {
      num: 8, name: 'VIII. ház', title: 'Az átalakulás háza',
      keywords: ['közös pénzek', 'örökség', 'szexualitás', 'krízis'],
      description: 'A mély átalakulások és a másokkal megosztott erőforrások szektora: közös vagyon, hitel, örökség, adó, valamint a szexualitás és az intimitás. Idetartoznak az élet nagy fordulópontjai, a válságok és az újrakezdések is. Az itt álló bolygók megmutatják, hogyan éljük meg a kontrollvesztést és a megújulást.',
      sign: 'Skorpió', ruler: 'Plútó', type: 'követő'
    },
    {
      num: 9, name: 'IX. ház', title: 'A világnézet háza',
      keywords: ['filozófia', 'felsőoktatás', 'külföld', 'hosszú utak'],
      description: 'A távlat és a jelentéskeresés szektora: a felsőoktatás, a filozófia, a hit, a jog és a nagy utazások. Itt formálódik az a világkép, amely alapján az életünket értelmezzük. Az itt álló bolygók jelzik, mi tágítja a látókörünket és milyen igazságokat keresünk.',
      sign: 'Nyilas', ruler: 'Jupiter', type: 'hanyatló'
    },
    {
      num: 10, name: 'X. ház', title: 'A hivatás háza',
      keywords: ['karrier', 'státusz', 'hírnév', 'életcél'],
      description: 'A képlet legmagasabb pontja, csúcsa az MC: a nyilvános szerep, a hivatás, a társadalmi megbecsülés és a tekintélyhez való viszony szektora. Arról szól, mivel akarunk nyomot hagyni a világban. Az itt álló bolygók erősen látszanak a szakmai megjelenésünkben.',
      sign: 'Bak', ruler: 'Szaturnusz', type: 'sarkalatos'
    },
    {
      num: 11, name: 'XI. ház', title: 'A közösség háza',
      keywords: ['barátok', 'csoportok', 'remények', 'célok'],
      description: 'A tágabb közösség szektora: barátok, csapatok, szervezetek, hálózatok és a közös ügyek. Idetartoznak a jövőre vonatkozó remények és tervek is. Az itt álló bolygók mutatják, milyen szerepet töltünk be a csoportokban, és mi az, amiért közösen érdemes tennünk.',
      sign: 'Vízöntő', ruler: 'Uránusz', type: 'követő'
    },
    {
      num: 12, name: 'XII. ház', title: 'Az elvonulás háza',
      keywords: ['tudatalatti', 'titkok', 'elszigeteltség', 'spiritualitás'],
      description: 'A képlet rejtett szektora: a tudattalan tartalmak, az elfojtott minták, a magány és az elvonulás helyszínei (kórház, kolostor, hosszú egyedüllét). Az önfeláldozás, a rejtett ellenfelek és a spirituális gyakorlat is ide tartozik. Az itt álló bolygók a színfalak mögött dolgoznak, gyakran tudattalanul.',
      sign: 'Halak', ruler: 'Neptunusz', type: 'hanyatló'
    }
  ],

  /* ------------------------------------------------------------------ *
   *  Bolygók és számított pontok
   * ------------------------------------------------------------------ */
  planets: [
    {
      key: 'sun', name: 'Nap', symbol: '☉', keyword: 'énerő, életcél',
      description: 'Az alapvető identitás, a tudatos én és az életcél jelölője a képletben. Megmutatja, mi az a szerep, amelyben a leginkább önmagunk vagyunk, és honnan merítjük az életerőnket. Az apa, a tekintély és a szív archetípusa; ez a köznyelvben csillagjegynek nevezett napjegy.'
    },
    {
      key: 'moon', name: 'Hold', symbol: '☽', keyword: 'érzelem, biztonság',
      description: 'Az érzelmi működés, az ösztönös reakciók és a biztonságérzet jelölője. Arról szól, mire van szükségünk ahhoz, hogy nyugodtnak és otthon érezzük magunkat, és hogyan gondoskodunk másokról. Az anya, a gyerekkor és az emlékezet archetípusa; a leggyorsabban mozgó égitest, a napi hangulatok fő motorja.'
    },
    {
      key: 'mercury', name: 'Merkúr', symbol: '☿', keyword: 'gondolkodás, kommunikáció',
      description: 'A gondolkodás, a beszéd, a tanulás és az információcsere jelölője. Megmutatja, hogyan dolgozzuk fel a tapasztalatokat, milyen tempóban és stílusban fejezzük ki magunkat. A kereskedelem, a rövid utak, a technika és a testvérkapcsolatok bolygója.'
    },
    {
      key: 'venus', name: 'Vénusz', symbol: '♀', keyword: 'szeretet, értékek',
      description: 'A vonzalom, a szépség, a harmónia és az értékrend bolygója. Arról árulkodik, mit tartunk vonzónak, hogyan közeledünk a másikhoz, és mivel kényeztetjük magunkat. A pénzhez, a művészethez és az élvezetekhez való viszonyunk is ide tartozik.'
    },
    {
      key: 'mars', name: 'Mars', symbol: '♂', keyword: 'akarat, cselekvés',
      description: 'A cselekvés, az energia és az önérvényesítés bolygója. Megmutatja, hogyan harcolunk azért, amit akarunk, hogyan kezeljük a konfliktust és a haragot, és mi hoz lendületbe. A versengés, a bátorság és a szexuális vágy jelölője is.'
    },
    {
      key: 'jupiter', name: 'Jupiter', symbol: '♃', keyword: 'bőség, tágulás',
      description: 'A növekedés, az optimizmus és a jelentéskeresés bolygója, a hagyomány nagy jótevője. Azt jelzi, hol tágul könnyen az életünk, miben bízunk, és honnan érkezik a szerencsének nevezett lehetőség. Árnyoldala a túlzás, a túlvállalás és a mértékvesztés.'
    },
    {
      key: 'saturn', name: 'Szaturnusz', symbol: '♄', keyword: 'korlát, felelősség',
      description: 'A struktúra, a fegyelem, az idő és a felelősség bolygója, a nagy tanító. Ott jelöl ki határt és feladatot, ahol csak kitartó munkával lehet eredményt elérni, cserébe tartós tudást és mesterségbeli biztonságot ad. Körülbelül 29,5 éves keringése adja a Szaturnusz-visszatérés felnőtté válási krízisét.'
    },
    {
      key: 'uranus', name: 'Uránusz', symbol: '♅', keyword: 'forradalom, szabadság',
      description: 'A hirtelen változás, az eredetiség és a függetlenség bolygója. Ott bontja meg a megszokott rendet, ahol az élet már régóta szűk lett, és váratlan fordulatokkal kényszerít újragondolásra. A technológia, a jövő és a lázadás jelölője; egy jegyben körülbelül hét évet tölt, ezért generációs hatású.'
    },
    {
      key: 'neptune', name: 'Neptunusz', symbol: '♆', keyword: 'oldódás, ihlet',
      description: 'Az álmok, az intuíció, az együttérzés és a művészi ihlet bolygója. Ott oldja fel a határokat, ahol a racionális gondolkodás kevés, és megnyitja a szimbolikus, spirituális tapasztalást. Árnyoldala az illúzió, a köd, az önámítás és a menekülés; jegyenként mintegy 14 évet tölt.'
    },
    {
      key: 'pluto', name: 'Plútó', symbol: '♇', keyword: 'átalakulás, hatalom',
      description: 'A mélyreható átalakulás, a hatalom, a kontroll és a tabuk bolygója. Ott hoz kényszerű újjászületést, ahol valami régi már nem tartható fenn, és ehhez gyakran krízisen keresztül vezet az út. Egy jegyben 12–30 évet is eltölt, ezért erősen generációs jelölő.'
    },
    {
      key: 'northNode', name: 'Felszálló holdcsomópont', symbol: '☊', keyword: 'életfeladat, fejlődési irány',
      description: 'Nem égitest, hanem számított pont: a Hold pályájának és az ekliptikának metszéspontja, a Sárkányfej. A fejlődési irányt mutatja, azt a tapasztalást, amely felé a komfortzónánkból ki kell lépnünk. Szemközti párja, a leszálló csomópont a hozott készségeket és a régi mintákat jelöli; a tengely mentén jönnek létre a fogyatkozások.'
    },
    {
      key: 'chiron', name: 'Chiron', symbol: '⚷', keyword: 'seb és gyógyítás',
      description: '1977-ben felfedezett kentaur-kisbolygó a Szaturnusz és az Uránusz pályája között, a sebzett gyógyító jelölője. Azt a pontot mutatja, ahol mély, gyakran gyógyíthatatlannak érzett sérülést hordozunk, és amelynek feldolgozása révén másokat is tudunk segíteni. Körülbelül 50 éves keringése adja a Chiron-visszatérés életközépi számvetését.'
    },
    {
      key: 'lilith', name: 'Lilith (Fekete Hold)', symbol: '⚸', keyword: 'árnyék, elfojtott vágy',
      description: 'Szintén számított pont: a Hold pályaellipszisének üres gyújtópontja. Az elfojtott, megszelídítetlen vágyakat, a tabusított területeket és az alávetettség elleni lázadást jelöli. Egy jegyben körülbelül kilenc hónapot tölt, a teljes kör mintegy 8,85 év.'
    }
  ],

  /* ------------------------------------------------------------------ *
   *  Bolygó a jegyben (10 × 12)
   * ------------------------------------------------------------------ */
  planetInSign: {
    sun: {
      kos: 'Az önazonosságát a cselekvésen keresztül éli meg: akkor érzi élőnek magát, ha kezdeményezhet és versenyben lehet.',
      bika: 'Az állandóságban és a kézzelfogható eredményben találja meg önmagát, a nyugodt, érzékszervi jelenlét adja az erejét.',
      ikrek: 'A tanuláson, a beszélgetésen és a sokféle érdeklődésen keresztül határozza meg magát, a kíváncsiság az életeleme.',
      rak: 'Az érzelmi kötődés és a gondoskodás adja az identitását, a család és az otthon köré épül az életcélja.',
      oroszlan: 'Saját jegyében a Nap tiszta önkifejezésként működik: elismerés és alkotás közben tud teljesen önmaga lenni.',
      szuz: 'A hasznos munkán és a dolgok jobbá tételén keresztül azonosítja magát, a szakértelem az önbecsülése alapja.',
      merleg: 'A kapcsolatokban és a méltányos egyensúly megteremtésében találja meg önmagát, a másik tükrében ismer magára.',
      skorpio: 'Az intenzív tapasztalás és a mélyre ásás adja az identitását, a válságokon átvezető átalakulás az életútja.',
      nyilas: 'A tágasság és a jelentéskeresés élteti: utazás, tanulás, világnézet adja az önazonossága gerincét.',
      bak: 'A felelősség vállalása és a hosszú távú építkezés határozza meg, a teljesítmény és a szakmai tekintély fontos neki.',
      vizonto: 'Az egyediségén és a közösségi ügyein keresztül azonosítja magát, a függetlenség létfeltétele.',
      halak: 'Az együttérzésen, a képzeleten és a másokkal való összeolvadáson át éli meg önmagát, a művészet vagy a segítés az útja.'
    },
    moon: {
      kos: 'Érzelmei gyorsan fellángolnak és gyorsan el is múlnak; biztonságot a cselekvés és az önállóság ad neki.',
      bika: 'Nyugodt, kiegyensúlyozott érzelmi működés, amely testi kényelmet, állandóságot és megszokott rituálékat kíván.',
      ikrek: 'Az érzéseit szavakká fordítja: akkor nyugszik meg, ha ki tudja beszélni, amit érez, viszont hangulata változékony.',
      rak: 'Saját jegyében a Hold rendkívül érzékeny és gondoskodó, mély családi kötődéssel és erős emlékezettel.',
      oroszlan: 'Meleg, nagyvonalú érzelmi élet, amelynek szüksége van visszajelzésre és arra, hogy különlegesnek érezze magát.',
      szuz: 'Az érzéseit inkább elemzi, mint kimutatja; a rend, a hasznos tevékenység és a tiszta rutin nyugtatja meg.',
      merleg: 'A harmónia és a béke érzelmi szükséglet nála; a konfliktus fizikailag is megviseli, ezért gyakran engedékeny.',
      skorpio: 'Mély, intenzív érzelmi világ, erős kötődéssel és bizalmatlansággal; a felszínes vigasztalás nem hatol el hozzá.',
      nyilas: 'Optimista, lelkes érzelmi alaphang, amely szabadságot és tágas horizontot igényel, a korlátozás nyomasztja.',
      bak: 'Visszafogott érzelemkifejezés, önfegyelem és korai felnőtté válás; a biztonságot a rend és a teljesítmény adja.',
      vizonto: 'Az érzelmeit gondolatokká fordítja, kissé kívülről nézi őket; barátságokban és közösségben érzi jól magát.',
      halak: 'Rendkívül átjárható, empatikus érzelmi működés, amely könnyen felveszi mások hangulatát, ezért határokat kell tanulnia.'
    },
    mercury: {
      kos: 'Gyors, közvetlen és határozott gondolkodás, amely azonnal kimondja, amit gondol, de nem szeret sokáig mérlegelni.',
      bika: 'Lassan, alaposan gondolkodik, a gyakorlati hasznot nézi; amit egyszer megértett, azt tartósan tudja.',
      ikrek: 'Saját jegyében a Merkúr fürge, sokoldalú és beszédes, egyszerre több témát is kézben tart, de könnyen szétszórt.',
      rak: 'Emlékezetre és érzelmi benyomásra épülő gondolkodás; a hangulat erősen befolyásolja, mennyire tud kifejezni valamit.',
      oroszlan: 'Magabiztos, meggyőző előadásmód, szeret a figyelem középpontjában beszélni, a véleményét nehezen módosítja.',
      szuz: 'Elemző, pontos, részletekre figyelő elme, kiváló hibakereső képességgel; a lényeg elveszhet a részletek között.',
      merleg: 'Mérlegelő, udvarias, mindkét oldalt meghallgató gondolkodás, amely a döntést gyakran halogatja.',
      skorpio: 'Kutató, nyomozó elme, amely a rejtett motivációt keresi; ritkán mond ki mindent, amit tud.',
      nyilas: 'Nagy összefüggésekben gondolkodik, lelkesen tanít, viszont a részletekre és a tapintatra kevesebb figyelmet fordít.',
      bak: 'Rendszerező, komoly, célorientált gondolkodás; csak azt mondja ki, amit végiggondolt és alátámasztottnak érez.',
      vizonto: 'Eredeti, elvi alapon működő elme, amely szívesen kérdőjelezi meg a bevett gondolkodási sémákat.',
      halak: 'Képi, asszociatív, intuitív gondolkodás; a megérzései gyakran pontosabbak, mint a logikai levezetései.'
    },
    venus: {
      kos: 'Lelkesen, gyorsan és nyíltan közeledik, a hódítás izgalma vonzza; a hosszú udvarlás türelmét nehezen bírja.',
      bika: 'Saját jegyében a Vénusz érzéki, hűséges és állandóságra vágyó, a szeretet nála testközeli és kézzelfogható.',
      ikrek: 'A szellemes beszélgetés és a közös kíváncsiság a vonzalom alapja; könnyed, játékos, de kötődni nehezebben tud.',
      rak: 'Gondoskodó, otthonteremtő szeretet, erős érzelmi biztonságigénnyel; a visszautasításra nagyon érzékeny.',
      oroszlan: 'Nagyvonalú, látványos, romantikus szeretetnyelv, amely ünnepelni akar és elismerést vár cserébe.',
      szuz: 'A szeretetét segítségben és apró praktikus gesztusokban fejezi ki; a kritikus megjegyzés könnyen elhidegíti a másikat.',
      merleg: 'Saját jegyében a Vénusz kifinomult, udvarias és társkereső: a párkapcsolat központi értéke az életének.',
      skorpio: 'Mély, kizárólagos, szenvedélyes kötődés, amelyben a bizalom és a féltékenység egyszerre van jelen.',
      nyilas: 'A szabadság és a közös felfedezés szeretetnyelve; szüksége van mozgástérre, ígéretei olykor túlzóak.',
      bak: 'Komoly, tartós elköteleződésre törekszik, tettekkel szeret; az érzelmek szóbeli kifejezése nem esik könnyen neki.',
      vizonto: 'Barátságra épülő, szokatlan formákat is elfogadó szeretet, amely szabadságot ad és szabadságot vár.',
      halak: 'Odaadó, romantikus, idealizáló szeretet, amely hajlamos önfeláldozásba fordulni és határok nélkül adni.'
    },
    mars: {
      kos: 'Saját jegyében a Mars közvetlen, gyors és bátor: azonnal cselekszik, a haragja hirtelen lobban és hamar elül.',
      bika: 'Lassan indul, de rendkívül kitartó; nyugodt, míg meg nem sértik, akkor viszont makacsul és sokáig áll ellen.',
      ikrek: 'Szavakkal harcol: az érvelés, a vita és a szellemi versengés a terepe, energiája sokfelé oszlik.',
      rak: 'Közvetett módon érvényesíti az akaratát, gyakran érzelmi úton; a haragját sokáig magában tartja, majd sértettséggé alakítja.',
      oroszlan: 'Magabiztos, látványos cselekvés, amely elismerésért is dolgozik; a büszkeség sérülése azonnal harcra ingerli.',
      szuz: 'Aprólékos, módszeres munkavégzés, amely a hibák kijavításában találja meg a lendületét; feszültsége idegességben jelenik meg.',
      merleg: 'Nehezen vállal nyílt konfliktust, tárgyalással és meggyőzéssel éri el a célját; a döntéskényszer megbénítja.',
      skorpio: 'Hagyományos jegyében a Mars kitartó, stratégiai és rendkívül elszánt; egyszerre képes várni és mindent egy lapra tenni.',
      nyilas: 'Lelkes, kalandvágyó cselekvés, amely nagy célokért indul el, de a kivitelezés részleteinél elveszítheti a türelmét.',
      bak: 'Fegyelmezett, hosszú távra beosztott energia, amely a szakmai eredményre irányul; ritkán pazarol erőt látványos gesztusokra.',
      vizonto: 'Elvekért és közösségi ügyekért mozdul meg, szokatlan módszerekkel; a parancsra rosszul reagál.',
      halak: 'Közvetett, hullámzó akarat, amely inspiráció esetén rendkívül termékeny, motiváció nélkül viszont könnyen elakad.'
    },
    jupiter: {
      kos: 'A bátorság és a kezdeményezés hozza a lehetőségeket; a szerencse általában akkor jön, ha elsőként lép.',
      bika: 'Az anyagi gyarapodás és a kitartás területén tágít; élvezi a bőséget, de a mértéktelenség kockázata is itt jelenik meg.',
      ikrek: 'A tanulás, a kapcsolatépítés és az információ hozza a fejlődést; sokfelé nyit, ezért a fókusz a fő kihívása.',
      rak: 'Exaltációjában a Jupiter érzelmi bőkezűséget, erős családi támogatást és gondoskodó nagyvonalúságot ad.',
      oroszlan: 'Az önkifejezés, az alkotás és a nagyvonalú gesztusok területén tágít; hajlamos a túlzott önbizalomra.',
      szuz: 'A hasznos szakmai tudás és a szolgálat hozza az eredményt; a nagy távlatot apró, gyakorlati lépésekben éli meg.',
      merleg: 'A kapcsolatok, a partnerség és a méltányosság hozzák a lehetőségeket, gyakran másokon keresztül érkezik a szerencse.',
      skorpio: 'A mély kutatás, a krízisek átvészelése és a közös erőforrások kezelése hozza a növekedést.',
      nyilas: 'Saját jegyében a Jupiter tiszta formában működik: hit, távlat, utazás és tanítás a fejlődés természetes útja.',
      bak: 'Esésében a Jupiter óvatos: a bőség kemény munkával, lassan, de tartósan épül fel, a könnyű szerencsében nem hisz.',
      vizonto: 'A közösségi ügyek, a hálózatok és az újító gondolatok hozzák a tágulást; a jövő tervezésében nagyvonalú.',
      halak: 'Hagyományos jegyében a Jupiter együttérző, hívő és adakozó; a spirituális vagy művészi út hozza a gazdagságot.'
    },
    saturn: {
      kos: 'Esésében a Szaturnusz az önérvényesítést teszi feladattá: meg kell tanulnia bátran kezdeményezni és vállalni a saját akaratát.',
      bika: 'Az anyagi biztonság megteremtése komoly, hosszú munka; a hiánytól való félelem sok takarékosságra ösztönöz.',
      ikrek: 'A gondolatok rendezése és a felelős megszólalás a lecke; kezdetben görcsös lehet a kommunikációja, később szakszerű.',
      rak: 'Száműzetésében a Szaturnusz az érzelmek kifejezését nehezíti; korán kell felnőnie, és tanulnia kell elfogadni a gondoskodást.',
      oroszlan: 'Az önbizalom és a szereplés terén szigorú belső mérce működik; az elismerést csak teljesítménnyel érzi jogosnak.',
      szuz: 'A pontosság és a munka iránti felelősség erős, de a perfekcionizmus és az önostorozás visszatérő teher.',
      merleg: 'Exaltációjában a Szaturnusz felelősen és igazságosan kezeli a kapcsolatokat; komoly, tartós elköteleződésre képes.',
      skorpio: 'A bizalom és a kontroll elengedése a lecke; kitartó, de nehezen adja fel a hatalmi pozíciót egy kapcsolatban.',
      nyilas: 'A hit és a világnézet komoly próbán megy át; a szabadság és a felelősség egyensúlyát kell megtalálnia.',
      bak: 'Saját jegyében a Szaturnusz a legjobban működik: fegyelem, kitartás és reális önértékelés hosszú távú eredménnyel.',
      vizonto: 'Hagyományos jegyében a Szaturnusz szervezőerőt ad a közösségi ügyeknek, elvi szigorral és felelős függetlenséggel.',
      halak: 'A határok meghúzása és a valóság elfogadása a feladat; a szorongás oldódik, ha struktúrát ad az érzéseinek.'
    },
    uranus: {
      kos: 'Hirtelen, robbanásszerű kezdeményezésekkel újít, ez a generáció a bátor önállóság új mintáit hozza.',
      bika: 'Az anyagi és a pénzügyi rendszerek átalakítását hozza; a biztonság megszokott formái szakadnak fel.',
      ikrek: 'A kommunikáció és az információáramlás technikai forradalma jellemzi ezt a generációt.',
      rak: 'A család, az otthon és az együttélés hagyományos formáit gondolja újra, gyakran szokatlan életmodellekkel.',
      oroszlan: 'Száműzetésében az Uránusz feszültséget hoz az egyéni önkifejezés és a közösségi elvárás között, de eredeti alkotókat is.',
      szuz: 'A munkavégzés, az egészségügy és a mindennapi rendszerek megújítását hozza, gyakran a hatékonyság új eszközeivel.',
      merleg: 'A párkapcsolatok, a jog és a szerepek átalakulását jelzi; ez a generáció írja újra az egyenlőség szabályait.',
      skorpio: 'A tabuk, a szexualitás és a pszichológiai mélységek nyílt kimondását hozza, gyakran kíméletlen őszinteséggel.',
      nyilas: 'A világnézet, a vallás és az oktatás átalakítására nyit; a szabadság eszméje itt tanná is válhat.',
      bak: 'A hatalmi és intézményi struktúrák felbontását jelzi; a régi rend és az újítás nyílt feszültségbe kerül.',
      vizonto: 'Saját jegyében az Uránusz tisztán érvényesül: technológiai és társadalmi ugrás, erős közösségi tudat.',
      halak: 'A spiritualitás, a művészet és a kollektív képzelet váratlan megújulását hozza, gyakran zavaros formában.'
    },
    neptune: {
      kos: 'Az egyéni bátorság és a hősiesség eszményítése jellemzi, olykor irreális küldetéstudattal.',
      bika: 'Az anyagi értékek és a birtoklás körüli illúziókat oldja; a természet és a testiség szentségének megérzése.',
      ikrek: 'A gondolatok és a hírek határai elmosódnak: kivételes szóképi érzék, de a féligazságok terjedésének veszélye is.',
      rak: 'Az otthon és a család idealizálását hozza, erős nosztalgiával és mély kollektív érzelmi emlékezettel.',
      oroszlan: 'A művészi önkifejezés és a színpadi varázslat kora; ugyanakkor a szerep és a valódi én összemosódhat.',
      szuz: 'Száműzetésében a Neptunusz a szolgálat és a gyógyítás eszményét hozza, de hipochondriát és kételyt is.',
      merleg: 'A tökéletes kapcsolat és az esztétikai harmónia eszményítése, gyakran a valóság kompromisszumainak elutasításával.',
      skorpio: 'A mélylélektani és okkult témák iránti erős vonzódás, ugyanakkor a rejtett dolgok körüli köd is.',
      nyilas: 'A spirituális keresés és a globális világkép kitágulása, a hit és a szektás rajongás kettősségével.',
      bak: 'A struktúrák és a tekintélyek illúziójának feloldódása; a felelősségvállalás spirituális értelmezése.',
      vizonto: 'A közösségi és technológiai utópiák ideje; az összekapcsoltság élménye és az elidegenedés egyszerre.',
      halak: 'Saját jegyében a Neptunusz a legerősebb: mély együttérzés, misztikus élmény, de erős menekülési hajlam is.'
    },
    pluto: {
      kos: 'A kezdeményezés és az önérvényesítés radikális átalakulása; erős, olykor erőszakos úttörő impulzus.',
      bika: 'Az anyagi rend, a tulajdon és az erőforrások mélyreható átformálása, sokszor krízisen keresztül.',
      ikrek: 'A gondolkodás és a kommunikáció hatalmi kérdéssé válik: az információ birtoklása erőforrás.',
      rak: 'A család, a nemzet és a gyökerek szintjén hoz mély átalakulást, a régi kötelékek felbomlásával.',
      oroszlan: 'A tekintély, az egyéniség és az önkifejezés hatalmi kérdéssé válik; erős generációs önérvényesítés.',
      szuz: 'A munka, az egészségügy és a mindennapi rendszerek mélyreható átalakulását hozza.',
      merleg: 'A kapcsolatok, a jog és az igazságosság fogalmának gyökeres újragondolása jellemzi ezt a generációt.',
      skorpio: 'Saját jegyében a Plútó a legintenzívebb: a tabuk, a halál és a szexualitás témái kerülnek felszínre.',
      nyilas: 'A hit, a vallás és a globális világkép hatalmi átalakulása, a nagy narratívák leleplezésével.',
      bak: 'Az intézmények, az állam és a gazdasági struktúrák mély átépülését jelzi, gyakran összeomláson keresztül.',
      vizonto: 'A technológia, a közösségek és a társadalmi szerveződés hatalmi átrendeződését hozza.',
      halak: 'A kollektív tudattalan, a spiritualitás és a menekülési minták mély átalakulását jelzi.'
    }
  },

  /* ------------------------------------------------------------------ *
   *  Bolygó a házban (7 × 12)
   * ------------------------------------------------------------------ */
  planetInHouse: {
    sun: {
      1: 'Erős személyes jelenlét: a megjelenése és az önazonossága szorosan összefonódik, nehezen marad észrevétlen.',
      2: 'Az önértékelése és az anyagi biztonsága összekapcsolódik; büszke arra, amit a saját erejéből teremtett.',
      3: 'A tanulás, a beszéd és a mindennapi kapcsolattartás áll az élete középpontjában, gyakran a testvérekkel együtt.',
      4: 'Az otthon és a család a személyes küldetése; a gyökerek erősen meghatározzák az önképét.',
      5: 'Az alkotás, a szerelem és a játék a fő önkifejezési terepe; szüksége van a saját kreatív terére.',
      6: 'A mindennapi munkán és a hasznos szolgálaton keresztül teljesíti be magát; az egészség fontos kérdés.',
      7: 'Kapcsolatokban ismer önmagára; a partnerség vagy az együttműködés az élete fő fejlődési területe.',
      8: 'Mély válságokon és újrakezdéseken át formálódik az identitása, a közös erőforrások kérdése hangsúlyos.',
      9: 'A tanulás, a hit és a távoli világok tapasztalata adja az életcélját; a világnézete központi ügye.',
      10: 'A hivatás és a társadalmi szerep áll az élete középpontjában; erős késztetése van a láthatóságra.',
      11: 'A közösség, a barátok és a közös célok adják az önmegvalósítás terepét; jól működik csapatban.',
      12: 'Csendben, a színfalak mögött érik be az önazonossága; szüksége van elvonulásra és belső munkára.'
    },
    moon: {
      1: 'Érzelmei azonnal láthatók a viselkedésén; hangulata erősen befolyásolja, hogyan hat másokra.',
      2: 'Az érzelmi biztonságot az anyagi stabilitás adja; a pénzhez való viszonya hangulatfüggő is lehet.',
      3: 'Beszéddel dolgozza fel az érzéseit, sok kapcsolatot tart; a mindennapi környezete erősen hat rá.',
      4: 'Erős otthonigény és családi kötődés; a lakhely minősége közvetlenül befolyásolja a közérzetét.',
      5: 'Érzelmeit alkotásban és játékban éli meg; a gyermekek és a szerelem különösen fontosak számára.',
      6: 'A napi rutin és a rendezett körülmények adják a lelki egyensúlyát; a stressz gyorsan testi tünetté válik.',
      7: 'Érzelmi biztonságát a párkapcsolatban keresi; nehezen viseli, ha sokáig egyedül van.',
      8: 'Intenzív, hullámzó érzelmi élet, mély kötődésekkel és erős krízisérzékenységgel.',
      9: 'A tágas horizont, az utazás és a hit ad neki érzelmi nyugalmat; a szűk közeg nyomasztja.',
      10: 'Érzelmi biztonságát a szakmai megbecsülés adja; a nyilvános szerep és a magánélet nehezen válik szét.',
      11: 'A baráti közösség pótolja számára a családot; a csoporthoz tartozás érzelmi szükséglet.',
      12: 'Rejtett, nehezen megfogalmazható érzelmi világ; szüksége van magányra a feltöltődéshez.'
    },
    mercury: {
      1: 'Gondolkodása és beszéde a személyisége védjegye; gyorsan reagál, sokat kérdez.',
      2: 'Praktikus, pénzügyekre és értékekre irányuló gondolkodás; jól tárgyal és jól számol.',
      3: 'Saját természetes terepén: élénk kommunikáció, folyamatos tanulás, sok rövid út és beszélgetés.',
      4: 'Otthon és családi körben gondolkodik hangosan; a gyerekkori minták erősen hatnak a nyelvhasználatára.',
      5: 'Játékos, kreatív, szórakoztató kifejezésmód; jól ír vagy jól ad elő, a humora eszköz a kezében.',
      6: 'Elemző, munkára és részletekre irányuló elme; kiváló szervező, de hajlamos az aggodalmas gondolatokra.',
      7: 'Párbeszédben gondolkodik: a másik véleménye nélkül nehezen dönt, viszont kiváló tárgyalópartner.',
      8: 'Kutató, nyomozó gondolkodás; érdeklik a titkok, a pszichológia és a pénzügyi háttérfolyamatok.',
      9: 'Nagy összefüggésekben gondolkodik, tanul és tanít, szívesen foglalkozik nyelvekkel és filozófiával.',
      10: 'A szakmai kommunikáció a fő eszköze; gyakran a szavával, a tudásával kerül nyilvánosság elé.',
      11: 'Csoportokban, hálózatokban gondolkodik; jó ötletadó és összekötő ember a közösségben.',
      12: 'Befelé forduló, intuitív elme; a gondolatait nehezen fogalmazza meg, de a megérzései pontosak.'
    },
    venus: {
      1: 'Kellemes, vonzó megjelenés és udvarias modor; könnyen teremt jó első benyomást.',
      2: 'Szereti a szép és jó minőségű tárgyakat; a pénz nála az élet élvezetének eszköze.',
      3: 'Bájos, könnyed kommunikáció; a szomszédsági és testvéri kapcsolatai jellemzően harmonikusak.',
      4: 'Szép, meghitt otthonra vágyik; a családi béke az egyik legfontosabb értéke.',
      5: 'Romantikus, játékos szerelmi élet és erős művészi hajlam; szeret élvezni és élvezetet adni.',
      6: 'A munkahelyi jó légkör kiemelten fontos neki; szívesen segít, és a szépséget a hétköznapokba viszi.',
      7: 'Erős párkapcsolati orientáció; a társas harmónia az élete központi értéke, könnyen köt szövetséget.',
      8: 'Mély, szenvedélyes kötődésekre vágyik; a pénzügyi kérdések gyakran a kapcsolatain keresztül alakulnak.',
      9: 'Vonzzák a távoli kultúrák és a más világnézetű emberek; szívesen szeret utazás vagy tanulás közben.',
      10: 'A szakmai kapcsolatai és a jó megjelenése segítik a karrierjét; művészi vagy emberekkel dolgozó pálya illik hozzá.',
      11: 'Baráti körben mozog otthonosan, sokan kedvelik; a szerelem gyakran a közösségből érkezik.',
      12: 'Titkolt, rejtett vonzalmak és önfeláldozó szeretet; a magány és a szeretetigény együtt van jelen.'
    },
    mars: {
      1: 'Lendületes, harcra kész fellépés; energikus jelenlét, de hajlamos a türelmetlenségre.',
      2: 'Az anyagi javakért keményen megdolgozik; birtoklási vágya és költési lendülete egyszerre erős.',
      3: 'Éles nyelv és vitakészség; a mindennapi közlekedésben és a beszélgetésekben is sietős.',
      4: 'A családi közegben feszültség vagy erős védelmezés jelenik meg; az otthon terepe a küzdelemnek is.',
      5: 'Szenvedélyes szerelmi élet, versengő sport- és alkotókedv, hajlam a kockázatvállalásra.',
      6: 'Kemény, kitartó munkabírás; a stressz és a felgyűlt feszültség könnyen testi tünetté válik.',
      7: 'Kapcsolataiban erős a dinamika: vonzás és vita együtt jár, az együttműködés tanulandó lecke.',
      8: 'Intenzív, mély energia, erős szexualitás és jó krízisbírás; a közös pénzügyek konfliktusforrásak lehetnek.',
      9: 'Lelkesen küzd az elveiért, szívesen utazik és tanul; a meggyőződéseiért nyíltan kiáll.',
      10: 'Erős szakmai ambíció és versenyszellem; célja eléréséért kitartóan és láthatóan dolgozik.',
      11: 'Közösségi ügyekért mozgósít, csapatban is vezető szerepet vesz fel; a barátságokban időnként rivalizál.',
      12: 'Rejtett, nehezen megfogott energia; a haragját elfojtja, ezért fontos, hogy tudatos levezetést találjon.'
    },
    jupiter: {
      1: 'Nagyvonalú, bizakodó fellépés; mások szívesen adnak neki bizalmat, de hajlamos a túlvállalásra.',
      2: 'Az anyagi gyarapodás könnyebben megy neki, ugyanakkor a bőkezűség pazarlásba is fordulhat.',
      3: 'Széles érdeklődés, sok tanulás és kapcsolat; jól magyaráz, szívesen ad tovább tudást.',
      4: 'Tágas otthon és támogató családi háttér; a gyökerekhez való viszonya nagyvonalú és megtartó.',
      5: 'Bőséges alkotókedv, szerencse a szerelemben és a játékban; a kockázatvállalással óvatosnak kell lennie.',
      6: 'A munkájában megbecsülést szerez; egészségre és mértékre viszont figyelnie kell.',
      7: 'A kapcsolatai gyarapítják: partnerségen keresztül érkeznek a lehetőségek és a támogatás.',
      8: 'Örökség, közös pénz vagy támogatás formájában érkezhet segítség; a krízisekből tanulva erősödik.',
      9: 'Természetes terepén: felsőoktatás, külföld, filozófia és hit adják az élete tágulását.',
      10: 'A karrierje felfelé ível, gyakran tanítói, jogi vagy vezetői szerepben; jó szakmai hírnév kíséri.',
      11: 'Támogató, kiterjedt baráti és szakmai hálózat; a közösség sokat ad neki és ő is sokat ad vissza.',
      12: 'Rejtett védettség és belső hit; a spirituális gyakorlat és a háttérből végzett segítés hozza a bőséget.'
    },
    saturn: {
      1: 'Komoly, visszafogott fellépés és korai felelősségvállalás; az önbizalom idővel, munkával épül fel.',
      2: 'Az anyagi biztonság megteremtése hosszú munka; takarékos, de a hiánytól való félelem elkísérheti.',
      3: 'Kezdetben nehézkes kommunikáció vagy tanulási akadály, amelyből később alapos szaktudás lesz.',
      4: 'Szigorú vagy hiányos családi háttér; az otthon megteremtése komoly, tudatos feladat számára.',
      5: 'Óvatos önkifejezés és visszafogott szerelmi élet; az alkotásban a fegyelem hozza meg az eredményt.',
      6: 'Fegyelmezett, kitartó munkavégzés; az egészségre való odafigyelés és a rutinok kialakítása kulcskérdés.',
      7: 'Komoly, tartós elköteleződésre törekszik, a kapcsolatot felelősségként éli meg; a párválasztás lassabban érik.',
      8: 'A kontroll elengedése és a bizalom a lecke; a közös pénzügyekben óvatos, a krízisek megedzik.',
      9: 'A világnézete próbákon át alakul ki; a tanulás kemény munka, de tartós tudást és tekintélyt hoz.',
      10: 'Erős szakmai ambíció és felelősségtudat; a karrier lassan, de tartósan épül, gyakran vezetői pozícióig.',
      11: 'Kevés, de tartós barátság; a közösségben inkább felelős szerepet vállal, mint lelkes tagságot.',
      12: 'Rejtett félelmek és belső szorongások dolgozandó anyaga; a magány struktúrával és belső munkával oldható.'
    }
  },

  /* ------------------------------------------------------------------ *
   *  Fényszögek (aspektusok)
   * ------------------------------------------------------------------ */
  aspects: [
    {
      key: 'conjunction', name: 'Konjunkció', symbol: '☌', angle: 0, orb: 8, nature: 'semleges',
      description: 'A két bolygó energiája összeolvad és felerősíti egymást, ezért a képlet legintenzívebb pontjait adja. Hogy segítő vagy nehéz-e, az teljes egészében az érintett bolygók természetétől függ.'
    },
    {
      key: 'sextile', name: 'Szextil', symbol: '⚹', angle: 60, orb: 6, nature: 'harmonikus',
      description: 'Könnyed együttműködés a két bolygó között: adottság, lehetőség, természetes összhang. Nem működik magától, tudatosan aktiválni kell, különben kihasználatlan marad.'
    },
    {
      key: 'square', name: 'Kvadrát', symbol: '□', angle: 90, orb: 8, nature: 'feszült',
      description: 'Súrlódás és belső konfliktus két összeegyeztethetetlennek tűnő igény között. Kellemetlen, de a fejlődés legfőbb motorja: kényszerít a cselekvésre és a megoldás megkeresésére.'
    },
    {
      key: 'trine', name: 'Trigon', symbol: '△', angle: 120, orb: 8, nature: 'harmonikus',
      description: 'A két energia természetesen és erőfeszítés nélkül áramlik együtt, gyakran veleszületett tehetség formájában. Veszélye éppen a könnyűség: az ember hajlamos kihasználatlanul hagyni.'
    },
    {
      key: 'opposition', name: 'Oppozíció', symbol: '☍', angle: 180, orb: 8, nature: 'feszült',
      description: 'Két ellentétes pólus feszül egymásnak, gyakran a kapcsolatokban, kivetítés formájában megélve. A feladat nem a választás, hanem a két véglet közötti egyensúly megtalálása.'
    },
    {
      key: 'quincunx', name: 'Kvinkunx', symbol: '⚻', angle: 150, orb: 3, nature: 'feszült',
      description: 'Két, egymással semmilyen közös nevezőt nem találó minőség kapcsolata: állandó utánaigazítást igényel. Jellemzően vakfoltként működik, amelyre az ember csak külső visszajelzésből ébred rá.'
    },
    {
      key: 'semisextile', name: 'Félszextil', symbol: '⚺', angle: 30, orb: 2, nature: 'enyhén feszült',
      description: 'Szomszédos jegyek enyhe súrlódása: a két minőség nem illik össze, de nem is ütközik komolyan. Finom, alig érzékelhető feszültséget és apró alkalmazkodási kényszert jelez.'
    }
  ],

  /* ------------------------------------------------------------------ *
   *  Aszcendens a jegyekben
   * ------------------------------------------------------------------ */
  ascendantText: {
    kos: 'Lendületes, közvetlen első benyomást kelt: gyors mozgás, határozott tekintet, azonnali reagálás. Új helyzetbe habozás nélkül veti bele magát, és inkább menet közben korrigál, mint hogy sokáig készülődjön. Türelmetlensége miatt olykor nyersebbnek látszik, mint amilyen valójában.',
    bika: 'Nyugodt, megbízható jelenlétet sugároz, tempója kimért, a mozdulatai határozottak. Új helyzetbe lassan érkezik meg, előbb felméri a terepet és a kényelmi feltételeket. Mások gyakran kiegyensúlyozottnak és megnyugtatónak élik meg a társaságát.',
    ikrek: 'Élénk, mozgékony, beszédes benyomást kelt, gyakran fiatalosabbnak látszik a koránál. Kérdésekkel közelít az új helyzethez, és gyorsan megtalálja a hangot bárkivel. Kifelé könnyed, de a felszín alatt sokkal jobban figyel, mint amennyit mutat.',
    rak: 'Óvatos, tartózkodó első benyomás, amely mögött erős érzelmi figyelem működik. Előbb megérzi egy helyzet hangulatát, csak utána lép be igazán. Ha biztonságban érzi magát, gondoskodó, meleg és otthonos jelenlétté oldódik.',
    oroszlan: 'Magabiztos, észrevehető megjelenés, természetes tartással és melegséggel. Új közegben hamar középpontba kerül, akkor is, ha nem akar. A visszajelzésre érzékeny: a figyelem felszabadítja, a hidegség viszont visszahúzza.',
    szuz: 'Rendezett, visszafogott, ápolt megjelenés, figyelmes, kissé óvatos modorral. Új helyzetet előbb végigelemez, és inkább hasznos szerepet keres magának, mint reflektorfényt. Szerénysége mögött komoly szakértelem és éles megfigyelőképesség rejlik.',
    merleg: 'Kellemes, udvarias, harmonikus benyomást kelt, jellemzően igényes megjelenéssel. Új helyzetben azonnal a viszonyokat méri fel, és igyekszik feszültségmentes hangot találni. Békülékenysége miatt nehezebben mutatja meg, ha valami nem tetszik neki.',
    skorpio: 'Intenzív, tartózkodó, nehezen kiismerhető jelenlét, erős tekintettel. Új helyzetben figyel és mér, keveset ad ki magából, amíg nem alakult ki bizalom. Mások gyakran érzik erősnek vagy titokzatosnak, még akkor is, ha keveset beszél.',
    nyilas: 'Nyílt, lelkes, közvetlen fellépés, gyakran humorral és nagy gesztusokkal. Új helyzetbe kalandként vág bele, és hamar megtalálja a tanulnivalót benne. Őszinteségét némelyek felszabadítónak, mások tapintatlannak élik meg.',
    bak: 'Komoly, fegyelmezett, visszafogott első benyomás, gyakran a koránál érettebb hatás. Új helyzetben kivár, felméri a szabályokat és a hierarchiát, majd módszeresen halad. Zárkózottsága mögött erős lojalitás és száraz humor húzódhat meg.',
    vizonto: 'Egyedi, kissé kívülálló benyomást kelt, barátságos, de tartja a személyes távolságot. Új helyzetben az érdekessége és a szokatlan nézőpontja miatt figyelnek fel rá. Emberekkel könnyen kapcsolódik elvi és értelmi szinten, érzelmileg lassabban.',
    halak: 'Lágy, befogadó, nehezen körvonalazható jelenlét, gyakran álmodozó tekintettel. Új helyzetben a hangulatot érzékeli először, és ösztönösen igazodik a környezetéhez. Empátiája vonzó, de könnyen felveszi mások feszültségét is, ezért határokra van szüksége.'
  },

  /* ------------------------------------------------------------------ *
   *  Dekanátusok (36) — modern, triplicitás-alapú rendszer
   * ------------------------------------------------------------------ */
  decans: [
    { sign: 'Kos', num: 1, from: 0, to: 10, ruler: 'Mars', text: 'A legtisztább Mars-Kos: azonnali cselekvés, nyers lendület, kevés mérlegelés.' },
    { sign: 'Kos', num: 2, from: 10, to: 20, ruler: 'Nap', text: 'Oroszlános színezet: büszkébb, kitartóbb és látványosabb, mint az első dekanátus.' },
    { sign: 'Kos', num: 3, from: 20, to: 30, ruler: 'Jupiter', text: 'Nyilas-hatás: a tettvágyat távlat és lelkes világnézeti küldetéstudat kíséri.' },
    { sign: 'Bika', num: 1, from: 0, to: 10, ruler: 'Vénusz', text: 'Tiszta Vénusz-Bika: érzékiség, esztétika és nyugodt ragaszkodás az anyagi jóhoz.' },
    { sign: 'Bika', num: 2, from: 10, to: 20, ruler: 'Merkúr', text: 'Szüzes árnyalat: gyakorlatiasabb, elemzőbb, a munkában is precízebb bikai jelleg.' },
    { sign: 'Bika', num: 3, from: 20, to: 30, ruler: 'Szaturnusz', text: 'Baki hatás: fegyelmezett, kitartó, hosszú távra tervező, kissé zárkózottabb Bika.' },
    { sign: 'Ikrek', num: 1, from: 0, to: 10, ruler: 'Merkúr', text: 'Tiszta Merkúr-Ikrek: gyors észjárás, sokféle érdeklődés, folyamatos beszélgetés.' },
    { sign: 'Ikrek', num: 2, from: 10, to: 20, ruler: 'Vénusz', text: 'Mérleges színezet: bájosabb, diplomatikusabb, esztétikára is érzékeny kommunikáció.' },
    { sign: 'Ikrek', num: 3, from: 20, to: 30, ruler: 'Uránusz', text: 'Vízöntős hatás: eredeti gondolatok, meghökkentő ötletek, erős függetlenségigény.' },
    { sign: 'Rák', num: 1, from: 0, to: 10, ruler: 'Hold', text: 'Tiszta Hold-Rák: erős érzelmi érzékenység, otthonközpontúság, hullámzó hangulat.' },
    { sign: 'Rák', num: 2, from: 10, to: 20, ruler: 'Plútó', text: 'Skorpiós árnyalat: mélyebb, intenzívebb, jobban titkolt érzelmi világ.' },
    { sign: 'Rák', num: 3, from: 20, to: 30, ruler: 'Neptunusz', text: 'Halas hatás: álmodozóbb, művészibb, a határai még átjárhatóbbak a szokásosnál.' },
    { sign: 'Oroszlán', num: 1, from: 0, to: 10, ruler: 'Nap', text: 'Tiszta Nap-Oroszlán: természetes vezetői jelenlét, nagyvonalúság, erős önbizalom.' },
    { sign: 'Oroszlán', num: 2, from: 10, to: 20, ruler: 'Jupiter', text: 'Nyilas-színezet: tanítói, világnézeti küldetéssel bővült, még nagyvonalúbb Oroszlán.' },
    { sign: 'Oroszlán', num: 3, from: 20, to: 30, ruler: 'Mars', text: 'Kosi hatás: harcosabb, versengőbb, közvetlenebb és lobbanékonyabb önkifejezés.' },
    { sign: 'Szűz', num: 1, from: 0, to: 10, ruler: 'Merkúr', text: 'Tiszta Merkúr-Szűz: aprólékos elemzés, rendszerezés, erős kritikai érzék.' },
    { sign: 'Szűz', num: 2, from: 10, to: 20, ruler: 'Szaturnusz', text: 'Baki árnyalat: célorientáltabb, komolyabb, szakmai tekintélyre törekvő Szűz.' },
    { sign: 'Szűz', num: 3, from: 20, to: 30, ruler: 'Vénusz', text: 'Bikai hatás: lágyabb, érzékibb, esztétikai és anyagi minőségre fogékonyabb Szűz.' },
    { sign: 'Mérleg', num: 1, from: 0, to: 10, ruler: 'Vénusz', text: 'Tiszta Vénusz-Mérleg: harmóniakeresés, kifinomult ízlés, erős kapcsolati fókusz.' },
    { sign: 'Mérleg', num: 2, from: 10, to: 20, ruler: 'Uránusz', text: 'Vízöntős színezet: az igazságosság elvi ügy, a kapcsolatokban szokatlan formákkal.' },
    { sign: 'Mérleg', num: 3, from: 20, to: 30, ruler: 'Merkúr', text: 'Ikres hatás: beszédesebb, mozgékonyabb, még inkább mérlegelő és kíváncsi Mérleg.' },
    { sign: 'Skorpió', num: 1, from: 0, to: 10, ruler: 'Plútó', text: 'Tiszta Plútó-Skorpió: maximális intenzitás, kutató mélység, erős akarat.' },
    { sign: 'Skorpió', num: 2, from: 10, to: 20, ruler: 'Neptunusz', text: 'Halas árnyalat: együttérzőbb, misztikusabb, gyógyító hajlamú Skorpió.' },
    { sign: 'Skorpió', num: 3, from: 20, to: 30, ruler: 'Hold', text: 'Ráki hatás: érzelmesebb, védelmezőbb, a kötődéseiben lágyabb Skorpió.' },
    { sign: 'Nyilas', num: 1, from: 0, to: 10, ruler: 'Jupiter', text: 'Tiszta Jupiter-Nyilas: nagy távlat, hit, tanítói kedv és állandó tágulásvágy.' },
    { sign: 'Nyilas', num: 2, from: 10, to: 20, ruler: 'Mars', text: 'Kosi színezet: tettre készebb, versengőbb, a meggyőződéseiért harcoló Nyilas.' },
    { sign: 'Nyilas', num: 3, from: 20, to: 30, ruler: 'Nap', text: 'Oroszlános hatás: magabiztosabb, karizmatikusabb, előadói tehetséggel megáldott Nyilas.' },
    { sign: 'Bak', num: 1, from: 0, to: 10, ruler: 'Szaturnusz', text: 'Tiszta Szaturnusz-Bak: szigorú fegyelem, kitartás, hosszú távú stratégiai gondolkodás.' },
    { sign: 'Bak', num: 2, from: 10, to: 20, ruler: 'Vénusz', text: 'Bikai árnyalat: az ambíciót anyagi élvezet és nyugodtabb tempó egészíti ki.' },
    { sign: 'Bak', num: 3, from: 20, to: 30, ruler: 'Merkúr', text: 'Szüzes hatás: elemzőbb, részletekre figyelőbb, szakmailag aprólékosabb Bak.' },
    { sign: 'Vízöntő', num: 1, from: 0, to: 10, ruler: 'Uránusz', text: 'Tiszta Uránusz-Vízöntő: eredetiség, függetlenség és erős újítói ösztön.' },
    { sign: 'Vízöntő', num: 2, from: 10, to: 20, ruler: 'Merkúr', text: 'Ikres színezet: beszédesebb, sokoldalúbb, gyorsan kapcsoló és hálózatépítő Vízöntő.' },
    { sign: 'Vízöntő', num: 3, from: 20, to: 30, ruler: 'Vénusz', text: 'Mérleges hatás: társasabb, diplomatikusabb, az emberi kapcsolatokra nyitottabb Vízöntő.' },
    { sign: 'Halak', num: 1, from: 0, to: 10, ruler: 'Neptunusz', text: 'Tiszta Neptunusz-Halak: mély empátia, erős képzelet, könnyen elmosódó határok.' },
    { sign: 'Halak', num: 2, from: 10, to: 20, ruler: 'Hold', text: 'Ráki árnyalat: családközpontúbb, gondoskodóbb, érzelmi emlékezetében erősebb Halak.' },
    { sign: 'Halak', num: 3, from: 20, to: 30, ruler: 'Plútó', text: 'Skorpiós hatás: intenzívebb, mélyre látó, a titkokat és a krízist is bíró Halak.' }
  ],

  /* ------------------------------------------------------------------ *
   *  Esszenciális méltóságok jegyenként
   *  A null érték azt jelenti, hogy a hagyomány ehhez a jegyhez nem
   *  rendel exaltációt / esést. A modern bolygók méltóságai iskolánként
   *  eltérnek, ezért külön mezőkben szerepelnek.
   * ------------------------------------------------------------------ */
  dignities: [
    { sign: 'kos', name: 'Kos', domicile: 'Mars', detriment: 'Vénusz', exaltation: 'Nap', exaltDegree: 19, fall: 'Szaturnusz', modernNote: 'A Plútó exaltációját egyes modern iskolák a Koshoz kötik (vitatott).' },
    { sign: 'bika', name: 'Bika', domicile: 'Vénusz', detriment: 'Mars', exaltation: 'Hold', exaltDegree: 3, fall: 'Uránusz', modernNote: 'Modern kiegészítés: a Plútó száműzetése és az Uránusz esése a Bikában.' },
    { sign: 'ikrek', name: 'Ikrek', domicile: 'Merkúr', detriment: 'Jupiter', exaltation: null, exaltDegree: null, fall: null, modernNote: 'A klasszikus hagyomány az Ikrekhez nem rendel exaltációt és esést.' },
    { sign: 'rak', name: 'Rák', domicile: 'Hold', detriment: 'Szaturnusz', exaltation: 'Jupiter', exaltDegree: 15, fall: 'Mars', modernNote: 'A Neptunusz exaltációját egyes iskolák a Rákhoz (vagy az Oroszlánhoz) kötik.' },
    { sign: 'oroszlan', name: 'Oroszlán', domicile: 'Nap', detriment: 'Szaturnusz', exaltation: null, exaltDegree: null, fall: null, modernNote: 'Modern kiegészítés: az Uránusz száműzetése az Oroszlánban.' },
    { sign: 'szuz', name: 'Szűz', domicile: 'Merkúr', detriment: 'Jupiter', exaltation: 'Merkúr', exaltDegree: 15, fall: 'Vénusz', modernNote: 'Modern kiegészítés: a Neptunusz száműzetése a Szűzben.' },
    { sign: 'merleg', name: 'Mérleg', domicile: 'Vénusz', detriment: 'Mars', exaltation: 'Szaturnusz', exaltDegree: 21, fall: 'Nap', modernNote: 'Modern kiegészítés: a Plútó esését egyes iskolák a Mérleghez kötik.' },
    { sign: 'skorpio', name: 'Skorpió', domicile: 'Plútó', domicileTraditional: 'Mars', detriment: 'Vénusz', exaltation: 'Uránusz', exaltDegree: null, fall: 'Hold', modernNote: 'Az Uránusz skorpiói exaltációja modern, vitatott hozzárendelés.' },
    { sign: 'nyilas', name: 'Nyilas', domicile: 'Jupiter', detriment: 'Merkúr', exaltation: null, exaltDegree: null, fall: null, modernNote: 'A klasszikus hagyomány a Nyilashoz nem rendel exaltációt és esést.' },
    { sign: 'bak', name: 'Bak', domicile: 'Szaturnusz', detriment: 'Hold', exaltation: 'Mars', exaltDegree: 28, fall: 'Jupiter', modernNote: 'Modern kiegészítés: a Neptunusz esését egyes iskolák a Bakhoz kötik.' },
    { sign: 'vizonto', name: 'Vízöntő', domicile: 'Uránusz', domicileTraditional: 'Szaturnusz', detriment: 'Nap', exaltation: null, exaltDegree: null, fall: null, modernNote: 'Modern iskolák a Neptunusz vagy a Plútó esését is a Vízöntőhöz kötik (vitatott).' },
    { sign: 'halak', name: 'Halak', domicile: 'Neptunusz', domicileTraditional: 'Jupiter', detriment: 'Merkúr', exaltation: 'Vénusz', exaltDegree: 27, fall: 'Merkúr', modernNote: 'Hagyományosan a Jupiter a Halak ura; a Merkúr itt egyszerre száműzött és esésben van.' }
  ],

  /* ------------------------------------------------------------------ *
   *  Segédtáblák (elem, minőség, temperamentum)
   * ------------------------------------------------------------------ */
  elements: [
    { name: 'Tűz', signs: ['Kos', 'Oroszlán', 'Nyilas'], qualities: 'meleg + száraz', temperament: 'Kolerikus', keywords: ['energia', 'akarat', 'lelkesedés', 'önkifejezés'] },
    { name: 'Föld', signs: ['Bika', 'Szűz', 'Bak'], qualities: 'hideg + száraz', temperament: 'Melankolikus', keywords: ['anyag', 'biztonság', 'kitartás', 'realitás'] },
    { name: 'Levegő', signs: ['Ikrek', 'Mérleg', 'Vízöntő'], qualities: 'meleg + nedves', temperament: 'Szangvinikus', keywords: ['gondolat', 'kapcsolat', 'információ', 'objektivitás'] },
    { name: 'Víz', signs: ['Rák', 'Skorpió', 'Halak'], qualities: 'hideg + nedves', temperament: 'Flegmatikus', keywords: ['érzés', 'empátia', 'mélység', 'képzelet'] }
  ],

  qualities: [
    { name: 'Kardinális', signs: ['Kos', 'Rák', 'Mérleg', 'Bak'], role: 'évszakkezdő', keywords: ['kezdeményezés', 'indítás', 'vezetés'] },
    { name: 'Szilárd', signs: ['Bika', 'Oroszlán', 'Skorpió', 'Vízöntő'], role: 'évszak közepe', keywords: ['stabilitás', 'kitartás', 'makacsság'] },
    { name: 'Változó', signs: ['Ikrek', 'Szűz', 'Nyilas', 'Halak'], role: 'évszakzáró, átmeneti', keywords: ['alkalmazkodás', 'rugalmasság', 'közvetítés'] }
  ],

  temperaments: [
    { key: 'kolerikus', name: 'Kolerikus', humor: 'sárga epe', element: 'Tűz', qualities: 'meleg + száraz', description: 'Energikus, akaraterős vezéralkat, aki gyorsan dönt és szívesen irányít.', shadow: 'Lobbanékony, türelmetlen, uralkodó.' },
    { key: 'szangvinikus', name: 'Szangvinikus', humor: 'vér', element: 'Levegő', qualities: 'meleg + nedves', description: 'Derűs, társasági, lelkes és optimista alkat, aki könnyen kapcsolódik másokhoz.', shadow: 'Csapongó, felszínes, nehezen tartja a szavát.' },
    { key: 'melankolikus', name: 'Melankolikus', humor: 'fekete epe', element: 'Föld', qualities: 'hideg + száraz', description: 'Mély érzésű, elemző, perfekcionista alkat, aki alaposan végiggondolja a dolgokat.', shadow: 'Borúlátó, szorongó, sértődékeny.' },
    { key: 'flegmatikus', name: 'Flegmatikus', humor: 'nyálka', element: 'Víz', qualities: 'hideg + nedves', description: 'Nyugodt, békés, kiszámítható és diplomatikus alkat, aki jól viseli a terhelést.', shadow: 'Passzív, nehezen mozdul, olykor közönyös.' }
  ]
};
