/*
 * extras2.js — azték tonalpohualli, Chiron, szoláris ív, félpontok, asztrokartográfia
 * Forrás: docs/32. Saját megfogalmazás, nem idézet. Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.aztec = {
  intro: 'A tonalpohualli („a napok számlálása") az azték/mexika 260 napos szent naptár: 20 napjegy és 13 szám együttese, minden napnak saját sorsa (tonalli) van, és a gyermek a születési napjáról kapta a nevét — a nap jegye adta a sorsát. Ugyanaz a számlálás, mint a maja Tzolkin (a Caso-féle 584283 korrelációval), csak a nevek és az istenek mások.',
  signs: [
    { name: 'Cipactli', hu: 'Kajmán', deity: 'Tonacatecuhtli', dir: 'kelet', text: 'A teremtés első napja: a kajmán hátán áll a világ. A jegy szülöttét a hagyomány kezdeményezőnek, bőséget hozónak és a munkában fáradhatatlannak tartja — az ő dolga az alapozás.' },
    { name: 'Ehecatl', hu: 'Szél', deity: 'Quetzalcoatl', dir: 'észak', text: 'A tollaskígyó lehelete: mozgás, gondolat, változékonyság. A szülött nyugtalan, szavakban és utakban él, a hagyomány szerint a szél elviszi, amit felhalmoz — a tudás az, amit megtart.' },
    { name: 'Calli', hu: 'Ház', deity: 'Tepeyollotl', dir: 'nyugat', text: 'A ház és a hegy szíve: nyugalom, belső élet, védettség. A szülött befelé forduló, otthonához és családjához kötődő ember, akinek a csend és a tartósság az ereje.' },
    { name: 'Cuetzpalin', hu: 'Gyík', deity: 'Huehuecoyotl', dir: 'dél', text: 'A gyík és az öreg kojot: fürgeség, alkalmazkodás, játék. A szülött életrevaló, gyorsan talpra álló, a hagyomány szerint szerencsés az anyagiakban, ha nem szalad el a figyelme.' },
    { name: 'Coatl', hu: 'Kígyó', deity: 'Chalchiuhtlicue', dir: 'kelet', text: 'A kígyó és a vizek asszonya: erő, átalakulás, kettősség. A szülött intenzív, vonzó és titokzatos, sorsa a levedlés — ami régi, azt le kell vetnie ahhoz, hogy nőjön.' },
    { name: 'Miquiztli', hu: 'Halál', deity: 'Tecciztecatl', dir: 'észak', text: 'A halál napja a hagyományban nem rossz ómen: az átmenet, a lezárás és a rejtett tudás jegye. A szülött komoly, a küszöbök embere, aki mások félelmeit is ismeri — gyógyítói, papi hajlam.' },
    { name: 'Mazatl', hu: 'Szarvas', deity: 'Tlaloc', dir: 'nyugat', text: 'A szarvas és az esőisten: érzékenység, szelídség, éberség. A szülött finom ösztönű, könnyen megriad, a vadon és a szabadság vonzza — a hagyomány szerint a vándorlás a sorsa.' },
    { name: 'Tochtli', hu: 'Nyúl', deity: 'Mayahuel', dir: 'dél', text: 'A nyúl és az agávé istennője: termékenység, ünnep, mámor. A szülött derűs, bőségteremtő, élvezetkedvelő, a hagyomány a túlzástól (a 400 nyúl, a részegség istenei) inti.' },
    { name: 'Atl', hu: 'Víz', deity: 'Xiuhtecuhtli', dir: 'kelet', text: 'A víz és a tűz ura egy napon: érzelem, tisztulás, ellentétek. A szülött szenvedélyes és megtisztító erejű, sorsa hullámzó — a hagyomány „jó nap a harcra, rossz a pihenésre".' },
    { name: 'Itzcuintli', hu: 'Kutya', deity: 'Mictlantecuhtli', dir: 'észak', text: 'A kutya, amely átvezet az alvilág folyóján: hűség, vezetés, a halottak kísérete. A szülött megbízható, ragaszkodó, a hagyomány szerint szerencsés és nagylelkű, de a sötétebb utakat is ismeri.' },
    { name: 'Ozomatli', hu: 'Majom', deity: 'Xochipilli', dir: 'nyugat', text: 'A majom és a virágok hercege: játék, művészet, csínytevés. A szülött szórakoztató, kreatív, mindenütt otthon van — a hagyomány szerint a mesterségek és a tánc embere.' },
    { name: 'Malinalli', hu: 'Fű', deity: 'Patecatl', dir: 'dél', text: 'A szívós fű és a gyógyszerek istene: kitartás, alázat, körforgás. A szülött letaposva is újranő; a hagyomány szerint nehezebb indulás után erősödik, és a gyógyítás vonzza.' },
    { name: 'Acatl', hu: 'Nád', deity: 'Tezcatlipoca', dir: 'kelet', text: 'A nád és a Füstölgő Tükör: üresség, amely megtelik — tudás, hatalom, törékenység. A szülött okos, szónok, tekintélyre vágyó; a hagyomány szerint sorsa a felemelkedés és a próbatétel.' },
    { name: 'Ocelotl', hu: 'Jaguár', deity: 'Tlazolteotl', dir: 'észak', text: 'A jaguár és a szenny istennője (aki a bűnt is magába fogadja): erő, éjszaka, varázslat. A szülött bátor, vad, a hagyomány szerint harcosnak vagy látónak való — de a saját sötétjével kell megküzdenie.' },
    { name: 'Cuauhtli', hu: 'Sas', deity: 'Xipe Totec', dir: 'nyugat', text: 'A sas és a Nyúzott Urunk: látás, magasság, megújulás. A szülött célratörő, vezető alkat, aki magasról lát — a hagyomány szerint harcos és nagyravágyó, sorsa a felemelkedés ára.' },
    { name: 'Cozcacuauhtli', hu: 'Keselyű', deity: 'Itzpapalotl', dir: 'dél', text: 'A keselyű és az Obszidiánpillangó: hosszú élet, bölcsesség, ítélet. A szülött a hagyomány szerint sokáig él, józan és tapasztalt, a veszteséget is hasznára fordítja.' },
    { name: 'Ollin', hu: 'Mozgás', deity: 'Xolotl', dir: 'kelet', text: 'A mozgás, a földrengés és a Nap útja: változás, fejlődés, a Negyedik Nap vége. A szülött nyugtalan, alakváltó, sorsa fordulatokból áll — a hagyomány szerint nagy dolgokra és nagy rázkódásokra egyaránt képes.' },
    { name: 'Tecpatl', hu: 'Kovakés', deity: 'Chalchiuhtotolin', dir: 'észak', text: 'Az áldozati kés és az ékköves pulyka: élesség, igazság, vágás. A szülött egyenes, kemény, döntésképes; a hagyomány szerint bátor, de a terméketlenség és a kegyetlenség kísértése ellen kell dolgoznia.' },
    { name: 'Quiahuitl', hu: 'Eső', deity: 'Tonatiuh', dir: 'nyugat', text: 'Az eső és a Nap egy napon: áldás, termékenység, szeszély. A szülött érzékeny, adakozó, a hagyomány szerint sorsa a bőség és a hirtelen fordulat egyszerre.' },
    { name: 'Xochitl', hu: 'Virág', deity: 'Xochiquetzal', dir: 'dél', text: 'A virág és a szerelem istennője: szépség, művészet, öröm — a 20 jegy záróköve. A szülött művész, szerető, ünneplő; a hagyomány szerint tehetséges, de a hiúság és a mulandóság a leckéje.' }
  ],
  lords: [
    { name: 'Xiuhtecuhtli', hu: 'a Tűz és az Év Ura', text: 'kedvező: a tűz melege, a családi tűzhely, az idő rendje' },
    { name: 'Tezcatlipoca', hu: 'a Füstölgő Tükör', text: 'kétélű: hatalom, sors, próbatétel, a tükör, amely megmutatja, aki vagy' },
    { name: 'Piltzintecuhtli', hu: 'a Nemes Ifjú Úr', text: 'kedvező: a felkelő nap, a fiatalság, a gyógyítás' },
    { name: 'Centeotl', hu: 'a Kukorica Ura', text: 'kedvező: táplálék, bőség, termés' },
    { name: 'Mictlantecuhtli', hu: 'az Alvilág Ura', text: 'kedvezőtlen: halál, veszteség — de a mélység tudása is' },
    { name: 'Chalchiuhtlicue', hu: 'a Jáde-szoknyás', text: 'kedvező: az élő vizek, a születés, a tisztulás' },
    { name: 'Tlazolteotl', hu: 'a Szenny Felfalója', text: 'kétélű: vágy, vétek és bűnbocsánat, a földi élet teljessége' },
    { name: 'Tepeyollotl', hu: 'a Hegy Szíve', text: 'kétélű: a barlang, a jaguár, a földrengés, a visszhang' },
    { name: 'Tlaloc', hu: 'az Eső Ura', text: 'kedvező: eső, termékenység, a hegyek vize' }
  ],
  numberNote: 'A 13 szám a hagyományban a 13 égi réteg: a kis számok (1–4) a kezdés és az egyszerűség, a középsők (5–9) a kibontakozás, a nagyok (10–13) a beteljesedés és a túlcsordulás napjai — a jegy sorsát erősítik vagy gyengítik.',
  lordNote: 'Az Éjszaka Urait a maja G1–G9 sorozat mintájára (584283 = G9) rendeltük a napokhoz; ez a szokásos, de nem bizonyított megfeleltetés.',
  trecena: 'A születésed 13 napos szakasza (trecena) %T% jeggyel kezdődött: a hagyomány szerint a trecena első jegye adja a szakasz alaphangját, a te napjegyed ezen belül a saját színed.'
};

window.HDATA.chiron = {
  intro: 'A Chiron a Szaturnusz és az Uránusz pályája között keringő kentaur (1977-ben fedezték fel). Az asztrológiában a „sebzett gyógyító": az a pont, ahol a sérülésünk nem múlik el, hanem tudássá érik, amellyel másokat segítünk. A jegy a seb természetét, a ház az életterületét mutatja (Reinhart, Clow).',
  sign: {
    kos: 'A seb az önérvényesítésben: mintha nem volna jogod a saját akaratodhoz. Az ajándék: másokat bátorítani, hogy kiálljanak magukért.',
    bika: 'A seb a biztonságban és a testben: mintha sosem lenne elég, vagy a tested cserbenhagyna. Az ajándék: a valódi érték és az önbizalom tanítása.',
    ikrek: 'A seb a szóban és a meghallgatásban: mintha nem értenének, vagy nem tudnád kimondani. Az ajándék: másoknak hangot adni.',
    rak: 'A seb az odatartozásban: mintha nem lenne igazi otthonod. Az ajándék: érzelmi menedéket teremteni másoknak.',
    oroszlan: 'A seb a láthatóságban: mintha a fényed nem számítana. Az ajándék: másokat a saját tehetségükhöz vezetni.',
    szuz: 'A seb az elégségesség érzésében: mintha sosem volnál elég jó vagy egészséges. Az ajándék: pontos, gyakorlati gyógyítás.',
    merleg: 'A seb a kapcsolatban és az egyenlőségben: mintha a másik mindig többet érne. Az ajándék: a kapcsolati bölcsesség és az igazságosság.',
    skorpio: 'A seb a veszteségben és a túlélésben: az elárultatás, a mélység ismerete. Az ajándék: másokat átvezetni a krízisen.',
    nyilas: 'A seb a hitben és a jelentésben: mintha az életnek nem lenne értelme. Az ajándék: másoknak segíteni a saját világképük megtalálásában.',
    bak: 'A seb a teljesítményben és a tekintélyben: mintha a siker sosem érne el. Az ajándék: valódi hozzáértés és mentorálás.',
    vizonto: 'A seb a közösséghez tartozásban: az örök kívülálló. Az ajándék: az egyéniség és a közösség összebékítése.',
    halak: 'A seb a spirituális érdemességben: mintha nem érdemelnéd meg a kegyelmet. Az ajándék: a határtalan együttérzés és a gyógyító jelenlét.'
  },
  house: {
    1: 'a testben és a jelenlétben: a saját megjelenésed, életerőd körül — az ajándék a hiteles, testben lakó jelenlét',
    2: 'az önértékben és az anyagiakban: pénz, tulajdon, „mit érek" — az ajándék az érték és az érdemesség megértése',
    3: 'a beszédben és a tanulásban: iskola, testvérek, a hangod — az ajándék másoknak hangot adni',
    4: 'az otthonban és a családban: gyökerek, szülők, odatartozás — az ajándék valódi családi menedék teremtése',
    5: 'az alkotásban és a szerelemben: gyerekek, játék, romantika — az ajándék mások alkotó és szerető erejének felszabadítása',
    6: 'az egészségben és a munkában: test, rutin, szolgálat — az ajándék a test és a lélek kapcsolatának ismerete',
    7: 'a társkapcsolatban: házasság, partnerek — az ajándék a kiegyensúlyozott kapcsolat bölcsessége',
    8: 'a veszteségben és az intimitásban: közös erőforrások, halál, átalakulás — az ajándék mások mély lelki gyógyulásának kísérése',
    9: 'a jelentésben és a tanulásban: hit, külföld, felsőoktatás — az ajándék a tanító és a vezető szerepe',
    10: 'a hivatásban és a nyilvános szerepben: karrier, tekintély — az ajándék a hivatásbeli mentorálás',
    11: 'a barátságban és a közösségben: csoportok, eszmék — az ajándék valódi közösség építése',
    12: 'a tudattalanban és a spiritualitásban: elvonulás, rejtett dolgok — az ajándék a mély lelki vezetés'
  },
  cycle: {
    90: 'Chiron-kvadrát (a hagyomány szerint ~21 és ~79 éves kor körül): az első szembesülés a sebbel — ekkor derül ki, hol fáj igazán.',
    180: 'Chiron-szembenállás (~25 év körül): a seb kívülről, kapcsolatokon és helyzeteken keresztül jelenik meg — a „másik" tükröz.',
    270: 'Záró Chiron-kvadrát (~37 év körül): a seb tudatos átdolgozása, a gyógyítói szerep kezdete.',
    360: 'Chiron-visszatérés (49–51 év között): a nagy küszöb — a seb orvossággá érik, a hagyomány szerint ez az „idősebb tanító" beavatása.'
  },
  cycleNote: 'A Chiron pályája erősen elnyúlt (egyes jegyekben 2, másokban 8 évet tölt), ezért a ciklus életkorai egyénenként eltérnek — a dátumok itt a tényleges pályából számolva, nem táblázatból.'
};

window.HDATA.solarArc = {
  intro: 'A szoláris ív direkció (Tyl) az egész képletet a progresszív Nap ívével tolja előre — nagyjából egy fokot évente. Amikor egy irányított bolygó vagy sarok pontos kemény fényszögbe (együttállás, kvadrát, szembenállás) ér egy születési ponttal, az a hagyomány szerint datálható, kívülről is látható fordulat — az orbis egy fok, azaz kb. egy év (fél év közeledő, fél év távolodó).',
  line: 'Irányított %P% → születési %T%: %A%, %D% körül. %M%',
  aspectHu: { conjunction: 'együttállás', square: 'kvadrát', opposition: 'szembenállás' },
  none: 'A következöt öt évben nincs pontos szoláris ív érintés a képleted fő pontjai között — a direkciós szempontból csendes, „belül épülő" időszak.',
  arcNow: 'A mostani ív %A%: a születési képleted minden pontja ennyivel tolódott előre — a Napod a %S%, az Aszcendensed %AS% jegyébe ért a direkció szerint.'
};

window.HDATA.midpoints = {
  intro: 'A félpont (Ebertin kozmobiológiája, Witte Hamburgi iskolája nyomán) két pont közötti középpont; ha egy harmadik bolygó rááll — 1,5°-on belül, a 90°-os tárcsán, tehát együttállással, kvadráttal vagy szembenállással —, „bolygókép" jön létre: A = B/C, ahol A a B és C közös témáját hozza működésbe. A hagyomány a Nap/Hold és az Aszcendens/MC félpontját tartja a legszemélyesebbnek.',
  pair: {
    'sun/moon': 'a belső egyensúly, a férfi–női minta, a kapcsolat alapigénye',
    'sun/mercury': 'a gondolkodás és az önazonosság, ahogy megfogalmazod magad',
    'sun/venus': 'a szeretet és az érték az életedben, a vonzás és a szépség',
    'sun/mars': 'az akarat és a tettrekészség, a testi energia',
    'sun/jupiter': 'a bizalom, a szerencse és a növekedés érzése',
    'sun/saturn': 'a felelősség, a korlát és az önfegyelem, az apa-minta',
    'sun/asc': 'a személyes jelenlét, ahogy a környezet lát',
    'sun/mc': 'az életcél és a hivatás iránya',
    'moon/mercury': 'az érzés és a gondolat kapcsolata, ahogy a hangulatot kimondod',
    'moon/venus': 'a gyengédség, az érzelmi és a női minta, az anya-kép',
    'moon/mars': 'az érzelmi indulat, a gyors reakció, a védekezés',
    'moon/jupiter': 'az érzelmi bőség, a jóság, a bizalom a világban',
    'moon/saturn': 'az érzelmi fegyelem, a magány, az önvédelem és a kötelesség',
    'moon/asc': 'a hangulatod és a személyes környezeted viszonya',
    'moon/mc': 'a lelki irány, a hivatás és az otthon összekapcsolása',
    'mercury/venus': 'a szép beszéd, a művészi érzék, a kellemes gondolkodás',
    'mercury/mars': 'a vitakedv, az éles ész, a gyors döntés',
    'mercury/jupiter': 'a tág gondolkodás, a tanulás és a tanítás öröme',
    'mercury/saturn': 'a mély, módszeres gondolkodás, a koncentráció és a nehézkesség',
    'mercury/asc': 'a kommunikáció a személyes környezettel',
    'mercury/mc': 'a hivatásbeli gondolkodás, a szakmai tudás',
    'venus/mars': 'a szerelmi és a testi vágy, a szenvedély',
    'venus/jupiter': 'az öröm, a jólét, a szeretet bősége',
    'venus/saturn': 'a szeretet és a kötelesség, a hűség és az önmegtartóztatás',
    'venus/asc': 'a vonzerő, ahogy másokat magadhoz kapcsolsz',
    'venus/mc': 'a szeretet és a hivatás, a művészi életcél',
    'mars/jupiter': 'a sikeres cselekvés, a vállalkozó kedv',
    'mars/saturn': 'a kitartó, kemény munka — vagy a gátolt energia, a feszültség',
    'mars/asc': 'a fellépés ereje, a harcos jelenlét',
    'mars/mc': 'a hivatásbeli erő, a céltudatosság',
    'jupiter/saturn': 'a tervezés és a türelem, a hosszú távú építkezés',
    'jupiter/asc': 'a nagyvonalú, bizakodó fellépés',
    'jupiter/mc': 'a hivatásbeli szerencse és növekedés',
    'saturn/asc': 'a komoly, visszafogott fellépés, a személyes korlátok',
    'saturn/mc': 'a hivatásbeli felelősség, a lassú, tartós előrehaladás',
    'asc/mc': 'a személyiség és az életcél egysége — a képlet „én itt és most" pontja'
  },
  body: {
    sun: 'a Nap ezt az önazonosság középpontjába emeli: ez lesz az egyik fő élettéma',
    moon: 'a Hold érzelmileg érzékennyé teszi: a hangulatod ezen keresztül mozdul',
    mercury: 'a Merkúr gondolattá és beszéddé formálja: sokat foglalkozol vele, kimondod',
    venus: 'a Vénusz szépséggel és vonzással tölti meg: ezen keresztül szeretsz és kötődsz',
    mars: 'a Mars tetté és energiává teszi: ezen a téren vagy a legaktívabb — és a legingerlékenyebb',
    jupiter: 'a Jupiter felnagyítja és szerencséssé teszi: itt nyílnak a lehetőségek',
    saturn: 'a Szaturnusz megpróbálja és megszilárdítja: itt lassú, felelős, de tartós az építkezés',
    uranus: 'az Uránusz váratlanná és eredetivé teszi: itt törsz ki a megszokottból',
    neptune: 'a Neptunusz feloldja és megérzéssel tölti: itt a képzelet és a bizonytalanság dolgozik',
    pluto: 'a Plútó átalakítja és felerősíti: itt a hatalom, a válság és az újjászületés témái jönnek elő',
    chiron: 'a Chiron sebezhetővé és gyógyítóvá teszi: itt fáj, és innen tudsz másoknak segíteni'
  },
  none: 'A képleted fő félpontjain nem áll bolygó 1,5°-on belül — a képletedet inkább a közvetlen fényszögek, mint a félpont-képek jellemzik.'
};

window.HDATA.astrocarto = {
  intro: 'Az asztrokartográfia (Jim Lewis, 1976) a születési képletet a Föld térképére vetíti: minden bolygónak négy vonala van — ahol a születésed pillanatában épp kelt (ASC), nyugodott (DSC), delelt (MC) vagy a mélyponton állt (IC). A hagyomány szerint ezeken a helyeken az adott bolygó témája erősödik fel az életedben. Térkép helyett az app 212 magyar, határon túli és világvárosát vetjük a vonalaidra; az orbis 4° hosszúság (kb. 300 km).',
  angle: {
    MC: 'MC-vonal — a hivatás, a láthatóság és a nyilvános szerep helye: amit itt teszel, azt látják',
    IC: 'IC-vonal — az otthon, a gyökerek és a belső alap helye: itt letelepedni, elvonulni, gyökeret verni lehet',
    ASC: 'ASC-vonal — az én és a megjelenés helye: itt a bolygó jellege válik a személyiséged részévé',
    DSC: 'DSC-vonal — a társak és a találkozások helye: itt a bolygó jellegű emberek és kapcsolatok jönnek szembe'
  },
  planet: {
    sun: 'a Nap: életerő, önazonosság, elismerés — a hagyomány szerint az egyik legjobb hely a saját út megtalálására',
    moon: 'a Hold: érzelmi otthonosság, család, közérzet — a „hazaérkezés" vonala',
    mercury: 'a Merkúr: tanulás, kommunikáció, üzlet, mozgás',
    venus: 'a Vénusz: szerelem, szépség, művészet, kellemes élet — a hagyomány kedvenc „jó hely" vonala',
    mars: 'a Mars: energia, harc, tettrekészség — de súrlódás és baleset-hajlam is',
    jupiter: 'a Jupiter: szerencse, növekedés, lehetőségek, tanulás — a klasszikus „bőség" vonal',
    saturn: 'a Szaturnusz: felelősség, munka, magány, érés — nehéz, de érlelő hely',
    uranus: 'az Uránusz: szabadság, változás, váratlan fordulatok, függetlenség',
    neptune: 'a Neptunusz: spiritualitás, művészet, feloldódás — vagy zavar és illúzió',
    pluto: 'a Plútó: átalakulás, hatalom, mély válságok és újjászületés'
  },
  none: 'A listázott 212 város közül egyik sem esik 4°-on belül a vonalaidra — ez a listák szűkösségét mutatja, nem a képletedet. A saját vonalaid földrajzi hosszúságát az MC/IC oszlop adja.',
  hint: 'Nem költözési tanács: a hagyomány szerint a vonalak azt mutatják, milyen minőség erősödik fel egy helyen — utazáskor, munkavállaláskor érdemes figyelni rá.'
};
