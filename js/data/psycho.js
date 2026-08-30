/* Horoszkóp – Pitagorasz-négyzet (pszichomátrix) értelmező szövegei
   A nemzetközileg elterjedt, Alekszandrov-féle iskola szerinti jelentések.
   Numerológiai típustan: kulturális hagyomány, nem tudományos módszer. */

window.HDATA = window.HDATA || {};
window.HDATA.psycho = {
  intro: 'A Pitagorasz-négyzet (pszichomátrix) a születési dátum számjegyeiből ' +
    'épített 3×3-as tábla: a dátum és a belőle képzett négy „munkaszám" minden ' +
    'számjegye a saját cellájába kerül, és minél többször fordul elő egy szám, ' +
    'annál erősebbnek tartja a hagyomány az adott tulajdonságot. A rendszer ' +
    'Oroszországból terjedt el világszerte (Alekszandrov-módszer), és bár nevét ' +
    'Püthagoraszról kapta, valójában 20. századi numerológiai típustan.',

  cells: {
    1: {
      name: 'Jellem, akaraterő',
      levels: {
        0: 'A hagyomány szerint a jellem itt „üres" — a rendszer eredeti formájában ez elő sem fordulhat, mert a munkaszámokban mindig keletkezik egyes.',
        1: 'Finom, visszafogott akarat: inkább alkalmazkodó, mint érvényesítő. A hagyomány szerint az ilyen ember dicsérettel motiválható, nyomással nem.',
        2: 'Rugalmas, egészséges önérvényesítés: tud engedni és tud kiállni magáért is. A hagyomány ezt tartja a legharmonikusabb jellem-cellának.',
        3: 'Változékony akarat: hol nagyon határozott, hol váratlanul engedékeny. A hagyomány szerint hangulattól függ, melyik arca kerül elő.',
        4: 'Erős, határozott jellem: vezetői hajlam, kitartás, nagy teherbírás. Az árnyoldala a makacsság.',
        5: 'Uralkodó természet: a hagyomány szerint a nagyon sok egyes „diktátor-hajlamot" jelez — az ilyen embernek tanulnia kell mások meghallgatását.'
      }
    },
    2: {
      name: 'Energia',
      levels: {
        0: 'Kevés saját energia: az ilyen ember a hagyomány szerint másoktól „töltődik", és jót tesz neki a mozgás, a friss levegő és a rendszeres pihenés.',
        1: 'Mérsékelt energiaszint: beosztással jól gazdálkodik vele, de a túlterhelés hamar kimeríti.',
        2: 'Kiegyensúlyozott energia: elegendő a mindennapokhoz, és másoknak is jut belőle. A hagyomány szerint az ilyen ember jó „gyógyító" alkat.',
        3: 'Erős energiatöbblet: aktív, tevékeny természet, aki nehezen bír egy helyben ülni.',
        4: 'Nagyon erős energia: a hagyomány szerint az ilyen ember hatással van a környezetére — vezetésre, tanításra, gyógyításra tartják alkalmasnak.',
        5: 'Kivételes energiaszint: ha nem talál medret magának, feszültséggé alakul — a rendszeres, kemény testmozgás a hagyomány szerint nélkülözhetetlen.'
      }
    },
    3: {
      name: 'Tudásvágy, rend',
      levels: {
        0: 'A pontosság és a rend nem magától értetődő: az ilyen ember a hagyomány szerint kreatív rendetlenségben él, és inkább a lényeg érdekli, mint a részletek.',
        1: 'Szelektív rendszeretet: ami fontos neki, abban precíz, a többiben nagyvonalú.',
        2: 'Jó rendszerező készség: szereti a tiszta struktúrákat, vonzza a tudomány és a technika.',
        3: 'Erős elemző hajlam: a hagyomány szerint kiváló mérnöki, kutatói, rendszerezői képesség.',
        4: 'Kivételes precizitás: a rend és a pontosság már-már önálló szükséglet — az árnyoldala a rugalmatlanság.',
        5: 'A hagyomány szerint a nagyon sok hármas a részletekbe veszés kockázatát hordozza: a tökéletesség hajszolása megbéníthatja a cselekvést.'
      }
    },
    4: {
      name: 'Egészség, testi erő',
      levels: {
        0: 'A hagyomány szerint a szervezet érzékenyebb az átlagnál: az ilyen embernek különösen fontos az életmód, a mozgás és a pihenés. (Ez nem orvosi állítás!)',
        1: 'Átlagos alkat: az egészség karbantartást igényel, de jól reagál a törődésre.',
        2: 'Jó fizikum: természetes ellenálló képesség, sportos hajlam.',
        3: 'Erős szervezet: a hagyomány szerint kiváló regenerálódó képesség és nagy fizikai teherbírás.',
        4: 'Kivételesen erős alkat: a hagyomány élsportolói cellának tartja.',
        5: 'A nagyon sok négyes a hagyomány szerint azt jelzi, hogy a testi erő a személyiség központi témája — a sport vagy a fizikai munka szinte hivatássá válik.'
      }
    },
    5: {
      name: 'Logika, intuíció',
      levels: {
        0: 'A hagyomány szerint az ilyen ember nem a logikán, hanem a tapasztalaton keresztül tanul: sokat próbálkozik, és a saját kárán okul — de éppen ezért nyitott marad.',
        1: 'Gyakorlati logika: a hétköznapi döntésekben jól eligazodik, az elvont okoskodás kevésbé vonzza.',
        2: 'Jó logikai készség és megérzés: átlátja a helyzeteket, ritkán lehet félrevezetni.',
        3: 'Erős intuíció: a hagyomány szerint az ilyen ember gyakran előre „tudja", mi fog történni, és tervezésben kiváló.',
        4: 'Kivételes elemző elme: éles logika, ami szinte látnoki megérzéssel párosul.',
        5: 'A hagyomány szerint a nagyon sok ötös terhe, hogy az ilyen ember mindent előre kiszámol — és közben nehezen engedi el a kontrollt.'
      }
    },
    6: {
      name: 'Gyakorlatiasság, munka',
      levels: {
        0: 'A kétkezi munka nem vonzza: az ilyen ember a hagyomány szerint inkább fejben dolgozik, és a fizikai feladatokat szívesen adja át másnak.',
        1: 'Kiegyensúlyozott gyakorlatiasság: elvégzi, amit kell, de nem a fizikai munkában él ki.',
        2: 'Ügyes kéz és mesterségbeli hajlam: szeret alkotni, szerelni, kertészkedni.',
        3: 'Erős gyakorlati véna: a hagyomány szerint az ilyen ember keze alatt „ég a munka" — de figyelnie kell, hogy a robotolás ne nyelje el.',
        4: 'A fizikai munka és az anyagi világ központi téma: kitartó, földközeli, teherbíró alkat.',
        5: 'A hagyomány szerint a nagyon sok hatos a túlhajtás jele: az ilyen embernek tudatosan kell időt hagynia a szellemi és érzelmi életére.'
      }
    },
    7: {
      name: 'Szerencse, tehetség',
      levels: {
        0: 'A hagyomány szerint az ilyen embernek mindent a saját munkájával kell megszereznie — a sors keveset ad ingyen, de amit elér, az tartós.',
        1: 'Szelíd szerencse: időnként jókor van jó helyen, és van egy terület, ahol tehetsége megmutatkozik.',
        2: 'Kifejezett tehetség: a hagyomány szerint az ilyen embernek érdemes tudatosan keresnie a saját területét, mert ott messzire juthat.',
        3: 'Erős „szerencsecsillag": a dolgok gyakran maguktól rendeződnek körülötte. Az árnyoldala a könnyelműség.',
        4: 'Kivételes adottságok: a hagyomány szerint ritka, sokoldalú tehetség — a kérdés csak az, melyik irányba fordítja.',
        5: 'A hagyomány szerint a nagyon sok hetes már-már sorsszerű védettséget jelez — de aki mindent készen kap, nehezen tanul meg küzdeni.'
      }
    },
    8: {
      name: 'Felelősség, jóság',
      levels: {
        0: 'A kötelességtudat nem magától értetődő: az ilyen ember a hagyomány szerint a szabadságát őrzi, és nehezen vállal tartós elköteleződést.',
        1: 'Mérsékelt felelősségérzet: megbízható, de nem áldozza fel magát másokért.',
        2: 'Erős kötelességtudat: családszerető, segítőkész, jószívű — rá lehet számítani.',
        3: 'Kivételes felelősségvállalás: a hagyomány szerint az ilyen ember mások terhét is a vállára veszi. Vigyáznia kell, hogy ki ne használják.',
        4: 'A szolgálat embere: a hagyomány szerint gyógyító, tanító, segítő hivatásokra termett.',
        5: 'A nagyon sok nyolcas a hagyomány szerint azt jelzi, hogy a önfeláldozás már a saját élet rovására mehet — a határok kijelölése a fő feladat.'
      }
    },
    9: {
      name: 'Emlékezet, értelem',
      levels: {
        0: 'A hagyomány szerint az emlékezet szelektív: az ilyen ember csak azt őrzi meg, ami valóban fontos neki — a többit elengedni nem hiba, hanem alkat.',
        1: 'Praktikus memória: a lényegre emlékszik, a részletekre kevésbé.',
        2: 'Jó emlékezet és gyors felfogás: könnyen tanul, és sokáig megőrzi, amit egyszer megértett.',
        3: 'Kiváló elme: a hagyomány szerint éles ész, erős memória — és hajlam arra, hogy mindenkinél okosabbnak érezze magát.',
        4: 'Kivételes szellemi képességek: fotografikus emlékezetre hajló, gyors, mély gondolkodás.',
        5: 'A hagyomány szerint a nagyon sok kilences ritka adottság — az ilyen elme akkor marad egészséges, ha folyamatosan kap méltó feladatot.'
      }
    }
  },

  lines: {
    celratores: {
      name: 'Céltudatosság (1–4–7 sor)',
      strong: 'Erős sor: ha az ilyen ember célt tűz ki, végig is viszi — a kérdés csak a cél megválasztása.',
      normal: 'Kiegyensúlyozott célkövetés: kitűzi és követi a céljait, de nem válik megszállottá.',
      weak: 'A célok gyakran cserélődnek: az ilyen embernek a hagyomány szerint kisebb, közeli célokból érdemes építkeznie.'
    },
    csalad: {
      name: 'Család (2–5–8 sor)',
      strong: 'A család központi érték: az ilyen ember számára az otthon a világ közepe.',
      normal: 'Egészséges egyensúly a család és a saját élet között.',
      weak: 'A családalapítás nem sürgető belső igény — az ilyen ember a hagyomány szerint később, tudatos döntéssel talál rá a maga formájára.'
    },
    stabilitas: {
      name: 'Stabilitás (3–6–9 sor)',
      strong: 'Erős kötődés a megszokotthoz: a változás stresszt okoz, a kiszámíthatóság biztonságot ad.',
      normal: 'Rugalmas stabilitás: szereti a rendet, de nem esik szét, ha felborul.',
      weak: 'A változás éltető közeg: az ilyen ember unatkozik az állandóságban, és könnyen újrakezd.'
    },
    onertekeles: {
      name: 'Önértékelés (1–2–3 oszlop)',
      strong: 'Magabiztos önkép: tudja, mit ér — az árnyoldala az önteltség lehet.',
      normal: 'Reális önértékelés: se nem alá-, se nem túlbecsüli magát.',
      weak: 'Az önbizalom építést igényel: az ilyen embernek a hagyomány szerint sokat segít a látható, kézzelfogható siker.'
    },
    anyagiak: {
      name: 'Megélhetés (4–5–6 oszlop)',
      strong: 'Erős gyakorlati-anyagi véna: jól bánik a pénzzel és a megélhetés megszervezésével.',
      normal: 'Kiegyensúlyozott viszony az anyagiakkal: fontos, de nem cél.',
      weak: 'A pénz önmagában nem motiválja — az ilyen ember akkor keres jól, ha a munkája értelmét látja.'
    },
    tehetseg: {
      name: 'Tehetség (7–8–9 oszlop)',
      strong: 'Kiemelkedő adottság-oszlop: a hagyomány szerint az ilyen embernek kötelessége megtalálni és használni a talentumát.',
      normal: 'Szolid, megbízható képességek, amelyek munkával szépen kibontakoznak.',
      weak: 'A tehetség itt nem készen kapott, hanem megszerzett — a kitartás pótolja, amit a sors nem adott ingyen.'
    },
    szellemiseg: {
      name: 'Szellemi átló (1–5–9)',
      strong: 'Erős szellemi-lelki érdeklődés: a kérdései a „miért"-ek körül forognak.',
      normal: 'Egészséges egyensúly az égi és a földi dolgok között.',
      weak: 'A gyakorlat embere: a filozofálásnál jobban érdekli az, ami működik.'
    },
    temperamentum: {
      name: 'Temperamentum-átló (3–5–7)',
      strong: 'Erős temperamentum: szenvedélyes, intenzív érzelmi élet.',
      normal: 'Kiegyensúlyozott vérmérséklet.',
      weak: 'Visszafogott, szemérmes érzelmi kifejezés — ami belül él, nem mindig látszik kívül.'
    }
  },

  workingNumbers: 'A négy munkaszám a hagyomány szerint külön is beszédes: az első a ' +
    'születéskor hozott feladatot, a második a fő jellemvonást, a harmadik a szülőktől ' +
    'kapott örökséget, a negyedik pedig az élet második felének fő tulajdonságát jelzi.',

  disclaimer: 'A pszichomátrix numerológiai típustan: kulturális hagyomány és önismereti ' +
    'játék, nem tudományosan igazolt módszer. Az egészségre vonatkozó cellák (4) nem ' +
    'orvosi állítások.'
};
