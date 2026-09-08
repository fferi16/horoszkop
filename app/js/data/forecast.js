/*
 * forecast.js — a napi/heti előrejelzés szövegei
 * Forrás: docs/33-napi-heti-elorejelzes.md (Hand, Lilly, Ramesey, Rudhyar, Picatrix).
 * Saját megfogalmazás, nem idézet. Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.forecast = {
  intro: 'Ez nem napjegy-horoszkóp: minden sor a saját születési képletedre számolt égi eseményből jön — a Hold és a gyors bolygók pontos fényszögeiből a bolygóidra és sarkaidra, a Hold házából és fázisából, az üresjáratból és a bolygóórákból. A hagyomány szabályait követi (Hand, Lilly, Ramesey), és a csillagszám mögé mindig odaírja, mely érintésekből jött össze.',
  disclaimer: 'Hagyomány, nem előrejelzés: a fényszögek időpontja csillagászati tény, a hozzájuk fűzött jelentés a nyugati asztrológia konszenzusa. A pontozás saját, dokumentált súlyozás (docs/33) — döntést ne erre alapozz.',
  noTime: 'Születési idő nélkül nincs Aszcendens és nincsenek házak: a tranzitokat csak a bolygóidra számoljuk, a Hold „házát" a napjegyedtől számolt egészjegyes házzal közelítjük.',

  domains: {
    szerelem: { name: 'Szerelem és kapcsolatok', icon: '♡' },
    munka: { name: 'Munka és hivatás', icon: '⚒' },
    penz: { name: 'Pénz', icon: '◈' },
    egeszseg: { name: 'Test és energia', icon: '☀' },
    kozerzet: { name: 'Közérzet', icon: '☽' }
  },

  /* a tranzit-bolygó: mit hoz mozgásba */
  planet: {
    moon: 'a Hold a hangulatot és az ösztönös reakciót mozgatja — néhány órás hullám',
    sun: 'a Nap az önérzetet és az életerőt világítja meg — néhány napos hangsúly',
    mercury: 'a Merkúr a gondolatokat, a beszédet, az ügyintézést és a híreket hozza mozgásba',
    venus: 'a Vénusz a vonzást, a kapcsolatokat, a kellemes dolgokat és a pénzt érinti',
    mars: 'a Mars a tetterőt, a türelmetlenséget és a súrlódást hozza'
  },

  /* a natális célpont: mi érintett benned */
  target: {
    sun: 'a Napodat — az önazonosságodat, az életerődet és a fő céljaidat',
    moon: 'a Holdadat — az érzelmi biztonságodat, az otthonodat és a közérzetedet',
    mercury: 'a Merkúrodat — a gondolkodásodat, a szavaidat és a napi ügyeidet',
    venus: 'a Vénuszodat — a szeretetigényedet, a vonzerődet és az élvezeteidet',
    mars: 'a Marsodat — a tetterődet, az akaratodat és a vitakedvedet',
    jupiter: 'a Jupiteredet — a bizalmadat, a lehetőségeidet és a bőség érzését',
    saturn: 'a Szaturnuszodat — a kötelességeidet, a korlátaidat és a felelősségedet',
    uranus: 'az Uránuszodat — a szabadságigényedet és a hirtelen fordulatokat',
    neptune: 'a Neptunuszodat — az érzékenységedet, a képzeletedet és az illúzióidat',
    pluto: 'a Plútódat — a hatalmi és mélységi témáidat, az elengedést',
    northNode: 'a holdcsomódat — az életirányodat és a sorsszerű találkozásokat',
    asc: 'az Aszcendensedet — a testi énedet, a fellépésedet és a napod hangnemét',
    mc: 'az MC-det — a hivatásodat, a nyilvános szerepedet és a céljaidat',
    dsc: 'a Deszcendensedet — a társadat és a szemközti embereket',
    ic: 'az IC-det — az otthonodat, a családodat és a belső alapodat'
  },

  /* a fényszög minősége (a hagyomány: trigon/szextil könnyít, kvadrát/szembenállás feszít) */
  quality: {
    soft: 'könnyen, támogatóan — jó időpont arra, hogy tegyél ezen a téren',
    hard: 'feszülten — súrlódás, sürgetés vagy akadály jelentkezhet; a hagyomány szerint ne ekkor erőltesd',
    conj: 'közvetlenül és erősen — a téma egészen előtérbe kerül, jó és rossz irányban is'
  },
  conjNature: {
    venus: ' A Vénusz együttállása a hagyomány szerint kedvező: kellemes, egyeztető, vonzó.',
    mars: ' A Mars együttállása a hagyomány szerint feszítő: energikus, de türelmetlen és balesetveszélyes.',
    moon: '', sun: '', mercury: ''
  },

  /* a Hold a natális házakban — a házak saját jelentéséből származtatva (docs/33 §1) */
  moonHouse: {
    1: 'a Hold ma az 1. házadban jár: rólad szól a nap — érzékenyebb, láthatóbb vagy, a hangulatod az arcodra van írva; jó indítani, rossz elrejtőzni',
    2: 'a Hold a 2. házadban: az anyagiak és a biztonság hangolják a közérzeted — vásárlás, számlák, „mit érek" kérdései',
    3: 'a Hold a 3. házadban: beszédes, mozgalmas nap — üzenetek, rövid utak, testvérek, sok apró ügy',
    4: 'a Hold a 4. házadban: befelé forduló, otthonos nap — család, lakás, gyökerek; a hagyomány szerint pihenni és rendezkedni jó',
    5: 'a Hold az 5. házadban: játékos, alkotó, romantikus nap — gyerekek, szórakozás, önkifejezés',
    6: 'a Hold a 6. házadban: a munka és az egészség terepe — teendők, rutin, testi jelzések; rendrakó nap',
    7: 'a Hold a 7. házadban: a társ és a másik ember kerül a középpontba — egyeztetés, találkozás, tükör',
    8: 'a Hold a 8. házadban: mélyebb, intenzívebb nap — közös pénzügyek, intimitás, elengedés, rejtett érzések',
    9: 'a Hold a 9. házadban: távlatos nap — tanulás, utazás, hit, nagyobb kérdések; a hétköznapi apróság nem érdekel',
    10: 'a Hold a 10. házadban: a hivatás és a nyilvánosság napja — látszol, elvárnak, dönteni kell',
    11: 'a Hold a 11. házadban: barátok, közösség, tervek — társas, jövőbe néző nap',
    12: 'a Hold a 12. házadban: visszavonuló, feldolgozó nap — magány, pihenés, múlt; a hagyomány szerint ne indíts újat'
  },

  phase: {
    ujhold: 'újhold: kezdés, csendes vetés — amit most indítasz, két hét múlva mutatja meg magát',
    novekvo_sarlo: 'növekvő sarló: az első lépések, lendületvétel',
    elso_negyed: 'első negyed: döntéskényszer és akadály — az építés ideje',
    novekvo_dombor: 'növekvő domború: finomítás, a hajrá a telihold előtt',
    telihold: 'telihold: csúcspont, beteljesedés és felfokozott érzelmek — látszik, mi működik és mi nem',
    fogyo_dombor: 'fogyó domború: megosztás, tanítás, hálakör',
    utolso_negyed: 'utolsó negyed: mérlegelés, elengedés, rendrakás',
    fogyo_sarlo: 'fogyó sarló: pihenés, lezárás, előkészület az újholdra'
  },

  voc: 'Üresjáratú Hold: a Hold már megtette utolsó pontos fényszögét a jegyében, és a jegyváltásig „üresen fut". A hagyomány (Lilly) szerint ilyenkor ne indíts újat, ne köss megállapodást — amit ekkor kezdesz, „nem lesz belőle semmi"; rutinra, pihenésre, befejezésre viszont jó.',
  vocLilly: 'Lilly kivétele: a Hold ilyenkor a Bika, Rák, Nyilas vagy Halak jegyében jár, ahol szerinte „kevesebb a félnivaló".',
  vocNone: 'Ma nincs üresjárat: a Hold végig aktív fényszögek felé halad.',

  lunation: {
    ujhold: 'Újhold %H%. házadban (%D%): a hagyomány szerint itt indul az új havi ciklus — %T% ügyeiben érdemes elvetni valamit; a telihold két hét múlva mutatja meg az eredményt.',
    telihold: 'Telihold %H%. házadban (%D%): a hagyomány szerint itt ér csúcsra és mutatkozik meg, ami az elmúlt két hétben épült — %T% ügyeiben látszik, mi működik és mit kell elengedni.',
    hit: ' A lunáció 3°-on belül érinti a képletedben: %P% — ez a hónap személyes hangsúlya.'
  },

  ingress: 'A %P% %D%-kor a %S% jegyébe lép (a képleted %H%. háza): %M%',
  ingressMeaning: {
    sun: 'egy hónapra ez a házad kerül a fénybe — itt akarsz ragyogni és itt vár figyelem',
    mercury: 'a gondolataid és az ügyeid erre a területre fordulnak néhány hétre',
    venus: 'a kellemes dolgok, a kapcsolatok és a pénz témái ide húzódnak néhány hétre',
    mars: 'ide kerül a tetterőd és a türelmetlenséged ~6 hétre — itt lesz mozgás, és itt lehet súrlódás'
  },
  station: {
    retro: 'A %P% %D%-kor retrográdba fordul (%S%, a képleted %H%. háza): a hagyomány szerint ez a terület néhány hétre visszanéző, újragondoló szakaszba lép — Merkúrnál: kommunikáció, utazás, technika átnézése.',
    direct: 'A %P% %D%-kor direktbe fordul (%S%, a képleted %H%. háza): a visszanéző szakasz lezárul, a hagyomány szerint innen újra előre lehet lépni ezen a területen.'
  },

  mercuryRetroYear: 'A Merkúr retrográd szakaszaiban a hagyomány szerint a kommunikáció, az utazás, a szerződések és a technika átnézésre, újragondolásra kerül — a zárójelben a jegy és a képleted háza, ahol a fordulat történik: ezen az életterületen érdemes lassítani és ellenőrizni.',
  hour: {
    saturn: 'Szaturnusz-óra: türelem, fegyelem, szerkezet — a hagyomány szerint a komoly, lassú, lezáró munkára és a határok meghúzására való',
    jupiter: 'Jupiter-óra: távlat, tanulás, nagyvonalúság — a hagyomány a kérésekhez, tanácshoz, bővítéshez tartja jónak',
    mars: 'Mars-óra: döntés, testi erőfeszítés, indítás — jó a bátorságot kívánó lépésekhez, rossz a vitához',
    sun: 'Nap-óra: láthatóság, tekintély, életerő — a hagyomány a fellépéshez, a fontos emberekhez, a gyógyuláshoz köti',
    venus: 'Vénusz-óra: kapcsolódás, szépség, egyeztetés — a szerelmi és társas ügyek, a művészet ideje',
    mercury: 'Merkúr-óra: beszéd, írás, tanulás, alku — a hagyomány szerint az üzenetek és a szerződések ideje',
    moon: 'Hold-óra: befelé figyelés, gondoskodás, a rutin és az otthon — a hagyomány szerint az utazásra és a változékony ügyekre is'
  },
  hourNote: 'A bolygóórák a Picatrix és Agrippa hagyománya: napkeltétől napnyugtáig 12, napnyugtától napkeltéig 12 egyenlőtlen óra, a káldeus sorrendben; a nap első órájának ura a nap ura. A mai órák a tartózkodási helyed napkeltéjéhez igazodnak.',

  dayRuler: { sun: 'vasárnap — a Nap napja', moon: 'hétfő — a Hold napja', mars: 'kedd — a Mars napja', mercury: 'szerda — a Merkúr napja', jupiter: 'csütörtök — a Jupiter napja', venus: 'péntek — a Vénusz napja', saturn: 'szombat — a Szaturnusz napja' },

  /* a bolygók ma a natális házakban — az aszcendens szerinti napi olvasat (docs/33 §1) */
  planetInHouse: {
    sun: 'a Nap ~egy hónapig itt világít: ez az életterület kér most figyelmet és energiát tőled',
    mercury: 'a Merkúr néhány hétig itt jár: ezen a téren jönnek a hírek, beszélgetések, döntendő apróságok',
    venus: 'a Vénusz néhány hétig itt jár: itt könnyebb a kapcsolódás, a kellemes és az anyagi ügyek',
    mars: 'a Mars ~hat hétig itt jár: ide kerül a tetterőd — és a súrlódás is',
    jupiter: 'a Jupiter ~egy évig itt jár: ezen a téren nyílnak a lehetőségek és nő a bizalom',
    saturn: 'a Szaturnusz ~két és fél évig itt jár: itt kér felelősséget, türelmet és szerkezetet'
  },
  frame: {
    profection: 'Éves profekció: %H%. ház (%S%), az év ura a %L% · havi profekció: %MH%. ház',
    lunar: 'lunáris hónap: %A% – %B%',
    asc: 'Az Aszcendensed %AS%: a házak és a sarokpontok ebből számolódnak — a napi kép ezért a tiéd, nem a napjegyedé.',
    noAsc: 'Aszcendens nélkül (nincs születési idő) a házakat a napjegyedtől számoljuk — ez a napjegy-horoszkópok közelítése.'
  },
  starsNote: 'A csillagok: a nap pontos érintéseinek összege területenként — trigon/szextil +, kvadrát/szembenállás −, együttállás a bolygó természete szerint; a Nap, a Vénusz és a Mars kétszeres, a Merkúr másfélszeres, a Hold egyszeres súllyal. Három csillag = nincs kiemelt érintés.',
  quiet: 'Csendes nap: nincs pontos gyors tranzit a képleted fő pontjaira — a hangnemet a Hold háza és fázisa adja.'
};
