/*
 * tarot.js — a teljes 78 lapos Rider–Waite pakli magyar jelentésekkel,
 * kirakási módok és a kiértékelés szövegei.
 * A kártyaképek: app/assets/tarot/<id>.jpg (metabismuth/tarot-json, MIT;
 * a grafika Pamela Colman Smith 1909-es, közkincs műve).
 *
 * Minden lapnál: name, up (egyenes állás), rev (fordított állás).
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.tarot = {

  suits: {
    w: { name: 'Botok', element: 'Tűz', domain: 'akarat, energia, vállalkozás, szenvedély' },
    c: { name: 'Kelyhek', element: 'Víz', domain: 'érzelmek, kapcsolatok, intuíció' },
    s: { name: 'Kardok', element: 'Levegő', domain: 'gondolatok, konfliktusok, igazság' },
    p: { name: 'Érmék', element: 'Föld', domain: 'anyagiak, munka, test, biztonság' }
  },
  ranks: { 11: 'Apród', 12: 'Lovag', 13: 'Királynő', 14: 'Király' },

  cards: {
    /* ---------------- Nagy Arkánum ---------------- */
    m00: { name: 'A Bolond', major: true, num: 0,
      up: 'Új kezdet, nyitottság, bizalom az ismeretlenben — ugrás a szakadék felett, könnyű szívvel.',
      rev: 'Meggondolatlanság vagy épp a bátorság hiánya: vagy vakon ugrasz, vagy el sem indulsz.' },
    m01: { name: 'A Mágus', major: true, num: 1,
      up: 'Minden eszközöd megvan: akarat, szó és ügyesség — most tudsz a szándékból valóságot csinálni.',
      rev: 'Szétszórt erő, manipuláció vagy önáltatás: a képesség megvan, az irány vagy a tisztaság hiányzik.' },
    m02: { name: 'A Főpapnő', major: true, num: 2,
      up: 'Belső tudás, intuíció, a még ki nem mondott dolgok ideje — figyelj befelé, a válasz már megvan.',
      rev: 'Elnyomott megérzés, titkok, felszínesség: nem hallod (vagy nem akarod hallani) a belső hangot.' },
    m03: { name: 'A Császárnő', major: true, num: 3,
      up: 'Termékenység, bőség, gondoskodás — valami növekszik, és a te dolgod táplálni.',
      rev: 'Túlgondoskodás, önelhanyagolás vagy terméketlen időszak: az adás-kapás egyensúlya billent meg.' },
    m04: { name: 'A Császár', major: true, num: 4,
      up: 'Rend, stabilitás, felelős irányítás — ideje keretet adni annak, ami eddig formátlan volt.',
      rev: 'Merevség, kontrollmánia vagy tekintélyprobléma: a rend elnyomássá válik, vagy épp hiányzik.' },
    m05: { name: 'A Főpap', major: true, num: 5,
      up: 'Hagyomány, tanulás, útmutatás — most a bevált út és a tanító segít tovább.',
      rev: 'Dogma vagy lázadás: a szabályok kiüresedtek — a saját meggyőződésed kell megtalálnod.' },
    m06: { name: 'A Szeretők', major: true, num: 6,
      up: 'Valódi választás és szívbéli kapcsolódás — döntés, amely mellett az egész lényed odaáll.',
      rev: 'Elkerült döntés, értékütközés, diszharmónia: a fejed és a szíved mást mond.' },
    m07: { name: 'A Diadalszekér', major: true, num: 7,
      up: 'Akaraterő és győzelem — ellentétes erőket fogsz egy irányba, és haladsz.',
      rev: 'Elvesztett irányítás vagy erőltetett hajtás: a szekér sodródik, vagy túl keményen rántod a gyeplőt.' },
    m08: { name: 'Az Erő', major: true, num: 8,
      up: 'Szelíd erő: türelemmel és belső nyugalommal szelídíted meg, ami benned vagy körülötted vad.',
      rev: 'Önbizalomhiány vagy nyers erőltetés: vagy nem hiszed el, hogy bírod, vagy erőből próbálod.' },
    m09: { name: 'A Remete', major: true, num: 9,
      up: 'Visszavonulás és belső keresés — a válasz csendben, egyedül található meg.',
      rev: 'Elszigetelődés vagy a magánytól való menekülés: vagy túl mélyre húzódtál, vagy nem mersz egyedül maradni.' },
    m10: { name: 'A Szerencsekerék', major: true, num: 10,
      up: 'Fordulat, új ciklus — ami mozgásba jött, azt nem megállítani, hanem meglovagolni érdemes.',
      rev: 'Megrekedt vagy ellenállásba ütköző változás: a kereket fogod, pedig forognia kellene.' },
    m11: { name: 'Az Igazságosság', major: true, num: 11,
      up: 'Egyensúly, tiszta döntés, következmények — ami jár, az megérkezik; ami dőlt, az kiegyenesedik.',
      rev: 'Méltánytalanság, elfogultság vagy a felelősség hárítása: a mérleg hamisan áll.' },
    m12: { name: 'Az Akasztott ember', major: true, num: 12,
      up: 'Termékeny várakozás és nézőpontváltás — most nem cselekedni kell, hanem másképp látni.',
      rev: 'Értelmetlen áldozat, húzott-halasztott döntés: a függés már nem tanít, csak fáraszt.' },
    m13: { name: 'A Halál', major: true, num: 13,
      up: 'Lezárás és átalakulás — valami véget ér, hogy hely legyen az újnak. Nem veszteség: vedlés.',
      rev: 'Elakadt lezárás: kapaszkodsz abba, ami már lejárt, és ez tartja vissza az újat.' },
    m14: { name: 'A Mértékletesség', major: true, num: 14,
      up: 'Harmónia, gyógyulás, arany középút — a türelmes vegyítés most többre visz, mint a szélsőség.',
      rev: 'Egyensúlyvesztés, túlzások, türelmetlenség: az arányok csúsztak el.' },
    m15: { name: 'Az Ördög', major: true, num: 15,
      up: 'Kötöttség és vágy: valami fogva tart — nézd meg, mibe kapaszkodsz, és mi kapaszkodik beléd.',
      rev: 'Szabadulás a láncból: a függés, játszma vagy félelem gyengül — most el lehet engedni.' },
    m16: { name: 'A Torony', major: true, num: 16,
      up: 'Hirtelen összeomlás, felszabadító villámcsapás — ami hamis alapra épült, most ledől.',
      rev: 'Halogatott, elhúzódó összeomlás: a szükséges változást fékezed, ezért részletekben jön.' },
    m17: { name: 'A Csillag', major: true, num: 17,
      up: 'Remény, gyógyulás, inspiráció — a vihar után tiszta ég: bízhatsz a hosszú távú irányban.',
      rev: 'Elhalványuló hit, kiábrándultság: a csillag megvan, csak felhő takarja — táplálni kell a reményt.' },
    m18: { name: 'A Hold', major: true, num: 18,
      up: 'Bizonytalanság, megérzések, a tudattalan terepe — nem látni tisztán, de a hold is vezet, ha figyelsz.',
      rev: 'Oszló köd: a félelmek és illúziók lelepleződnek — kezd kitisztulni, mi volt valós.' },
    m19: { name: 'A Nap', major: true, num: 19,
      up: 'Öröm, siker, életerő — az egyik legkedvezőbb lap: ami most van, azt szabad felhőtlenül élvezni.',
      rev: 'Takarásban lévő nap: az öröm és a siker megvan, csak nehezen engeded magadhoz.' },
    m20: { name: 'Az Ítélet', major: true, num: 20,
      up: 'Ébredés, hívás, újjászületés — a múlt lezárul, és valami magasabb szólít tovább.',
      rev: 'Elengedésre váró önvád, meg nem hallott hívás: a múltat rágod, ahelyett hogy felállnál.' },
    m21: { name: 'A Világ', major: true, num: 21,
      up: 'Beteljesedés, egész-ség, a kör bezárul — megérkeztél; ünnepelj, mielőtt új kör indul.',
      rev: 'Majdnem kész: az utolsó lépés hiányzik a lezáráshoz — fejezd be, ne hagyd nyitva.' },

    /* ---------------- Botok (Tűz) ---------------- */
    w01: { name: 'Botok Ásza', up: 'Tiszta kezdőenergia: új lelkesedés, ötlet, vállalkozás szikrája — gyújtsd meg.', rev: 'Késlekedő szikra, elfojtott lendület: az ötlet megvan, a tűz nem kap levegőt.' },
    w02: { name: 'Botok Kettes', up: 'Tervezés és távlat: a világ a kezedben — döntsd el, merre indulsz.', rev: 'Beszorult tervek, a komfortzóna falai: a térkép megvan, az indulás marad el.' },
    w03: { name: 'Botok Hármas', up: 'Az első eredmények látszanak: a hajóid elindultak — tarts ki a távlat mellett.', rev: 'Késlekedő eredmények, szűk látókör: a várakozás türelmet és nagyobb rálátást kér.' },
    w04: { name: 'Botok Négyes', up: 'Ünnep, otthonra találás, stabil alap — az első szint elkészült, meg lehet ünnepelni.', rev: 'Bizonytalan alapok, elmaradt ünnep: az átmenet elhúzódik — az otthonosság belül kezdődik.' },
    w05: { name: 'Botok Ötös', up: 'Termékeny súrlódás: versengés, vita — a küzdelem most edz, nem rombol.', rev: 'Kerülgetett vagy kimerítő konfliktus: a feszültség vagy elfojtva lappang, vagy öncélúvá vált.' },
    w06: { name: 'Botok Hatos', up: 'Győzelem és elismerés: az eredményed láthatóvá válik — fogadd el a tapsot.', rev: 'Elmaradt elismerés vagy üres siker: a taps kívülről nem pótolja a belső mércét.' },
    w07: { name: 'Botok Hetes', up: 'Kiállás a magaslaton: megvéded, amit felépítettél — előnyben vagy, ha nem hátrálsz.', rev: 'Kimerítő védekezés, megkérdőjelezett pozíció: válogasd meg, mely csatákat vívod meg.' },
    w08: { name: 'Botok Nyolcas', up: 'Felgyorsuló események, hírek, gyors haladás — most minden mozgásban van: repülj vele.', rev: 'Fennakadás, késés, szétszórt irányok: a lendület megvan, de torlódik.' },
    w09: { name: 'Botok Kilences', up: 'Megviselt, de álló őrség: az utolsó szakasz — a tartalékaidból is kitelik még ez az egy kör.', rev: 'Kiégés-közeli védekezés, bizalmatlanság: a falak, amelyek védtek, már fárasztanak.' },
    w10: { name: 'Botok Tízes', up: 'Teherhordás: sok a vállalt súly, de a cél közel — vidd be az utolsó métereket.', rev: 'Túlvállalás, cipelt felesleg: tedd le, ami nem a tiéd — a cél terhek nélkül is cél marad.' },
    w11: { name: 'Botok Apródja', up: 'Lelkes hírnök: új ötlet, tanulási kedv, friss szikra — merj kezdő lenni.', rev: 'Szalmaláng-lelkesedés, éretlen kapkodás: az ötlet kifullad, mielőtt formát kapna.' },
    w12: { name: 'Botok Lovagja', up: 'Lendület, kaland, merész akció — a bátor mozdulat most többet ér a tökéletes tervnél.', rev: 'Meggondolatlan száguldás vagy elakadt lendület: a ló vagy elragad, vagy megmakacsolja magát.' },
    w13: { name: 'Botok Királynője', up: 'Meleg, magabiztos kisugárzás: vonzod, amit akarsz — a karizmád most a fő eszközöd.', rev: 'Megcsappant önbizalom vagy féltékeny tűz: a ragyogás befelé fordult vagy perzselni kezd.' },
    w14: { name: 'Botok Királya', up: 'Vízionárius vezető: nagy kép, bátor irány — most te adod a tüzet másoknak is.', rev: 'Türelmetlen zsarnokság vagy irányvesztés: a vezetői tűz éget, vagy pislákol.' },

    /* ---------------- Kelyhek (Víz) ---------------- */
    c01: { name: 'Kelyhek Ásza', up: 'Új érzelem forrása fakad: szerelem, együttérzés, ihlet — engedd túlcsordulni.', rev: 'Elfojtott vagy visszatartott érzés: a kehely tele van, csak nem mersz inni belőle.' },
    c02: { name: 'Kelyhek Kettes', up: 'Kölcsönös vonzalom, szövetség, kiegyenlített adok-kapok — találkozás szemtől szemben.', rev: 'Megbomlott összhang, félreértés a kapcsolatban: a két kehely nem egy magasságban van.' },
    c03: { name: 'Kelyhek Hármas', up: 'Ünneplés, barátság, közösségi öröm — oszd meg, ami sikerült.', rev: 'Felszínes társaság, túlzásba vitt mulatság vagy kimaradás-érzés: az ünnep elveszti ízét.' },
    c04: { name: 'Kelyhek Négyes', up: 'Apátia, telítettség: a felkínált lehetőséget észre sem veszed — nézz fel.', rev: 'Ébredő nyitottság: a fásultság oldódik, az elutasított kehely újra érdekes lehet.' },
    c05: { name: 'Kelyhek Ötös', up: 'Gyász és csalódás: három kehely kiborult — de kettő még áll mögötted.', rev: 'A veszteség feldolgozása megindul: a hátad mögötti két kehely felé fordulsz.' },
    c06: { name: 'Kelyhek Hatos', up: 'Nosztalgia, gyermeki kedvesség, a múlt ajándékai — a gyökereid most táplálnak.', rev: 'A múltban ragadás: az emlék édes, de a jelen elől nem lehet visszaköltözni belé.' },
    c07: { name: 'Kelyhek Hetes', up: 'Sok csábító lehetőség, ábrándok — válassz, mielőtt a ködből mind elillan.', rev: 'Kijózanodás: a ködképek oszlanak, és látszik, melyik kehelyben van valódi tartalom.' },
    c08: { name: 'Kelyhek Nyolcas', up: 'Elfordulás a betelt körtől: valami működik, mégis továbbhívnak — kövesd a mélyebb hangot.', rev: 'Se menni, se maradni: tudod, hogy tovább kellene lépni, de visszahúz a megszokás.' },
    c09: { name: 'Kelyhek Kilences', up: 'Beteljesült kívánság, elégedettség — a „kívánság-lap": élvezd, amit elértél.', rev: 'Üres elégedettség, telhetetlenség: a kívánság teljesült, de a hiányérzet maradt.' },
    c10: { name: 'Kelyhek Tízes', up: 'Érzelmi beteljesedés, családi harmónia, szivárvány — ez az, amiért érdemes volt.', rev: 'A képeslap-idill mögötti feszültség: a harmónia külsőre kész, belülre még munka vár.' },
    c11: { name: 'Kelyhek Apródja', up: 'Játékos érzelmi hírnök: bók, gesztus, kreatív ötlet — a hal kinéz a kehelyből: csodálkozz rá.', rev: 'Érzelmi éretlenség, sértődékenység: a játékosság durcássággá savanyodik.' },
    c12: { name: 'Kelyhek Lovagja', up: 'Romantikus ajánlat, invitálás, művészi lendület — valaki (talán te) a szívét nyújtja.', rev: 'Szép szavak fedezet nélkül, csapongó érzelmek: az ajánlat mögé nézz.' },
    c13: { name: 'Kelyhek Királynője', up: 'Mély empátia és érzelmi bölcsesség: biztonságos öl — másoknak és magadnak is.', rev: 'Érzelmi túlcsordulás, önfeladó segítés: a határaid elmosódnak.' },
    c14: { name: 'Kelyhek Királya', up: 'Érett érzelmi jelenlét: vihar közepén is nyugodt szív — érzel, de nem sodródsz.', rev: 'Elfojtott vagy manipulált érzelmek: a nyugalom maszk, alatta hullámzik a víz.' },

    /* ---------------- Kardok (Levegő) ---------------- */
    s01: { name: 'Kardok Ásza', up: 'Éles tisztánlátás, áttörő igazság, új gondolat — a köd egyetlen vágással oszlik.', rev: 'Zavaros gondolatok, félreértés, tompa penge: a tisztázás elmarad vagy bántásba fordul.' },
    s02: { name: 'Kardok Kettes', up: 'Patthelyzet, bekötött szem: döntés előtt állsz, amit halogatsz — a mérleg rád vár.', rev: 'A patt felbomlik: az információ megérkezik, a döntést nem lehet tovább kerülni.' },
    s03: { name: 'Kardok Hármas', up: 'Szívfájdalom, kimondott fájó igazság — fáj, de tiszta: innen lehet gyógyulni.', rev: 'Gyógyuló seb, nehezen engedett fájdalom: ideje kihúzni a kardokat, nem forgatni őket.' },
    s04: { name: 'Kardok Négyes', up: 'Pihenő, visszavonulás, regeneráció — a csata után a fegyverszünet is feladat.', rev: 'Megtagadott pihenés vagy túl hosszúra nyúlt visszavonulás: az egyensúly billent.' },
    s05: { name: 'Kardok Ötös', up: 'Pirruszi győzelem: nyerhetsz úgy, hogy mindenki veszít — nézd meg, megéri-e.', rev: 'A meddő harc vége közeleg: kiengesztelődés vagy a veszteség beismerése hoz szabadulást.' },
    s06: { name: 'Kardok Hatos', up: 'Átkelés nyugodtabb vizekre: hátrahagyás, költözés, gyógyulás — az út már visz.', rev: 'Akadozó továbblépés: a csónak megvan, de a múlt terhei visszahúznak a partra.' },
    s07: { name: 'Kardok Hetes', up: 'Taktika, kerülőút, diszkréció — nem minden csata nyílt: de nézd meg, kit játszol ki.', rev: 'Lelepleződő trükk, önbecsapás: a kerülőút visszakanyarodik hozzád.' },
    s08: { name: 'Kardok Nyolcas', up: 'Gúzsba kötöttség — de a kötél laza, a szemkendő levehető: a börtön nagyrészt gondolat.', rev: 'Szabadulás a gondolati csapdából: a korlátokról kiderül, hogy belülről voltak zárva.' },
    s09: { name: 'Kardok Kilences', up: 'Éjszakai szorongás, rágódás — a falon lógó kardok nem esnek le: a félelem nagyobb, mint a veszély.', rev: 'A szorongás oldódik vagy mélyül: ideje kimondani és segítséget kérni.' },
    s10: { name: 'Kardok Tízes', up: 'Mélypont és vég — de a lap mögött hajnalodik: ennél lejjebb nincs, innen felfelé visz.', rev: 'Lassú felállás a mélypontról: a legrosszabb elmúlt, a felépülés megindult.' },
    s11: { name: 'Kardok Apródja', up: 'Éber kíváncsiság, figyelés, kérdezés — gyűjtsd az információt, mielőtt vágsz.', rev: 'Pletyka, kémkedő gyanakvás, éretlen kritika: a szó éles szerszám — ne játékszer.' },
    s12: { name: 'Kardok Lovagja', up: 'Rohamozó értelem: gyors, egyenes, célratörő fellépés — most a határozottság nyer.', rev: 'Vakon rohanás, agresszív vita: a sebesség meggondolás nélkül árt.' },
    s13: { name: 'Kardok Királynője', up: 'Tiszta ítélőképesség, éles szem, egyenes beszéd — függetlenség érzelgősség nélkül.', rev: 'Keserű élesség, hidegség: a tisztánlátás cinizmusba fagyott.' },
    s14: { name: 'Kardok Királya', up: 'Higgadt, elvszerű döntéshozó: a tiszta gondolat tekintélye — most az ész vezet jól.', rev: 'Rideg logika, hatalmi szó: az igazság igazságtalansággá élesedik.' },

    /* ---------------- Érmék (Föld) ---------------- */
    p01: { name: 'Érmék Ásza', up: 'Kézzelfogható új lehetőség: állás, pénz, mag a tenyérben — ültesd el.', rev: 'Elszalasztott vagy késlekedő lehetőség: a mag megvan, a talaj még nem kész.' },
    p02: { name: 'Érmék Kettes', up: 'Zsonglőrködés: több dolog egyensúlyban — a rugalmasság most erőforrás.', rev: 'Kicsúszó egyensúly, túlvállalt kötelezettségek: valamit le kell tenni, mielőtt leesik.' },
    p03: { name: 'Érmék Hármas', up: 'Csapatmunka és mesterségbeli tudás: az első elismert munka — építs másokkal.', rev: 'Széthúzó együttműködés, középszer: a minőséghez rend és megbecsülés kell.' },
    p04: { name: 'Érmék Négyes', up: 'Megtartás, biztonság, takarékosság — az alap stabil, de a görcsös szorítás már nem véd.', rev: 'A szorítás enged vagy fösvénységbe fordul: tisztázd, mit véd a kapaszkodás.' },
    p05: { name: 'Érmék Ötös', up: 'Szűkösség és kirekesztettség-érzés — a templomablak világít: a segítség közelebb van, mint hiszed.', rev: 'A nehéz időszak vége: ajtó nyílik, a talpra állás megkezdődhet.' },
    p06: { name: 'Érmék Hatos', up: 'Adás és kapás egyensúlya: nagyvonalúság, támogatás — most áramlik a kölcsönösség.', rev: 'Egyenlőtlen csere, megalázó segítség vagy önérdekű adakozás: nézd meg a mérleget a kezekben.' },
    p07: { name: 'Érmék Hetes', up: 'Türelmes várakozás a termésre: az ültetés kész — most érlelni kell, nem kapkodni.', rev: 'Türelmetlenség vagy rossz helyre fektetett munka: mérd fel, megéri-e tovább öntözni.' },
    p08: { name: 'Érmék Nyolcas', up: 'Szorgalmas mesterlés: gyakorlás, csiszolás — a tudásod érmévé kovácsolódik.', rev: 'Gépies robotolás vagy trehány munka: a minőség és az értelem veszett el a rutinban.' },
    p09: { name: 'Érmék Kilences', up: 'Megérdemelt jólét, önálló élvezet: a saját kerted gyümölcse — elegancia és függetlenség.', rev: 'Külső csillogás belső fedezet nélkül, vagy munkába temetett magány.' },
    p10: { name: 'Érmék Tízes', up: 'Tartós bőség, családi örökség, generációk biztonsága — amit építesz, túlmutat rajtad.', rev: 'Családi-anyagi feszültségek, ingatag örökség: a hosszú távú biztonság rendezést kér.' },
    p11: { name: 'Érmék Apródja', up: 'Szorgalmas tanuló: új készség, ösztöndíj, gyakorlati kezdet — vedd komolyan az apró első lépést.', rev: 'Szétszórt tanulás, halogatott gyakorlat: az érme nézegetéséből nem lesz tudás.' },
    p12: { name: 'Érmék Lovagja', up: 'Megbízható, kitartó haladás: lassú ló, de odaér — a következetesség most a leggyorsabb út.', rev: 'Megrekedt rutin, unalomba fúlt szorgalom: a kitartás önjáró körré vált.' },
    p13: { name: 'Érmék Királynője', up: 'Gyakorlati gondoskodás: meleg otthon, biztos kéz, termő kert — jólét, amiből mások is esznek.', rev: 'Önelhanyagoló gondoskodás vagy anyagiasság: a kert művelője magára is öntözzön.' },
    p14: { name: 'Érmék Királya', up: 'Beérett siker, anyagi biztonság, megbízható vezetés — a Midász-érintés felelős változata.', rev: 'Vagyonféltés, makacs materializmus: az érintés aranyoz, de melegíteni elfelejt.' }
  },

  /* ---------------- kirakási módok ---------------- */

  spreads: [
    { key: 'napi', name: 'Napi kártya', cards: 1,
      desc: 'A legegyszerűbb kirakás: egyetlen lap a nap üzeneteként — reggel húzva a nap hangoltságát adja, este a nap tanulságát.',
      positions: [{ name: 'A nap üzenete', text: 'Ez a minőség kéri ma a figyelmedet: hangolódásnak és esti visszatekintésnek egyaránt jó.' }] },
    { key: 'mjj', name: 'Múlt – Jelen – Jövő', cards: 3,
      desc: 'A klasszikus hármas: honnan jössz, hol állsz, merre mutat az irány. A „jövő" nem ítélet, hanem a jelen irányának kivetítése.',
      positions: [
        { name: 'Múlt', text: 'Ami idáig hozott: a helyzet gyökere, a magaddal hozott tapasztalat.' },
        { name: 'Jelen', text: 'Ahol most állsz: a helyzet magja, a jelenlegi erőtér.' },
        { name: 'Jövő', text: 'Amerre a jelenlegi irány visz, ha nem változtatsz: lehetőség, nem végzet.' }] },
    { key: 'hat', name: 'Helyzet – Akadály – Tanács', cards: 3,
      desc: 'Gyakorlati hármas konkrét kérdésre: mi történik, mi nehezíti, és mit érdemes tenni.',
      positions: [
        { name: 'A helyzet', text: 'A kérdésed valódi magja — olykor más, mint aminek látszik.' },
        { name: 'Az akadály', text: 'Ami keresztben áll: külső nehézség vagy belső minta.' },
        { name: 'A tanács', text: 'A javasolt hozzáállás vagy lépés — a kirakás kulcslapja.' }] },
    { key: 'kapcsolat', name: 'Kapcsolat-kirakás', cards: 5,
      desc: 'Két ember dinamikája öt lapban: te, a másik, ami összeköt, ami feszít, és amerre tart.',
      positions: [
        { name: 'Te a kapcsolatban', text: 'Amit te hozol: a hozzáállásod, az energiád ebben a kötelékben.' },
        { name: 'A másik fél', text: 'Amit ő hoz: az ő helyzete, hangoltsága — ahogy a kapcsolat felől látszik.' },
        { name: 'Ami összeköt', text: 'A kapcsolat ereje, közös alapja — ami miatt működik.' },
        { name: 'Ami feszít', text: 'A kapcsolat munkapontja: a súrlódás vagy hiány, amivel dolgozni érdemes.' },
        { name: 'Merre tart', text: 'A jelenlegi dinamika iránya — amin a két fél közösen változtathat.' }] },
    { key: 'dontes', name: 'Döntés-kirakás', cards: 5,
      desc: 'Válaszút előtt: a helyzet, a két út természete, a rejtett szempont és a tanács.',
      positions: [
        { name: 'A helyzet', text: 'A döntési helyzet magja — miért most kell választani.' },
        { name: 'Az „A" út', text: 'Az első lehetőség természete: milyen energiát hoz az életedbe.' },
        { name: 'A „B" út', text: 'A második lehetőség természete: milyen energiát hoz az életedbe.' },
        { name: 'Amit nem látsz', text: 'A rejtett tényező: szempont, amelyet a mérlegelésed eddig kihagyott.' },
        { name: 'Tanács', text: 'A kirakás iránymutatása — nem dönt helyetted, de megvilágítja a mérleget.' }] },
    { key: 'vakfolt', name: 'Vakfolt-kirakás', cards: 4,
      layout: { cols: 2, rows: 2, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 1 }, { r: 2, c: 2 }] },
      desc: 'A Johari-ablak tarot-változata: mit tudsz magadról te, mit látnak mások — és mi a vakfoltod.',
      positions: [
        { name: 'A nyílt éned', text: 'Amit te is tudsz magadról, és mások is látnak: a közös valóság.' },
        { name: 'A rejtett éned', text: 'Amit csak te tudsz: amit tudatosan vagy szemérmesen nem mutatsz meg.' },
        { name: 'A vakfoltod', text: 'Amit mások látnak, de te nem — a kirakás kulcslapja: ezt hoztad ki tükörnek.' },
        { name: 'A tudattalan', text: 'Amit (még) senki sem lát: a mélyben formálódó erő.' }] },
    { key: 'csillag', name: 'Csillag-kirakás', cards: 7,
      layout: { cols: 3, rows: 4, cells: [
        { r: 4, c: 2 },      // 1. a probléma (alul)
        { r: 3, c: 1 },      // 2. pozitív hatások
        { r: 3, c: 3 },      // 3. negatív hatások
        { r: 2, c: 1 },      // 4. múltbeli gyökér
        { r: 2, c: 3 },      // 5. tanács
        { r: 1, c: 2 },      // 6. kimenetel (a csillag csúcsa)
        { r: 2, c: 2 }] },   // 7. összegzés (közép)
      desc: 'Remény- és gyógyulás-kirakás: amikor egy nehéz helyzetben tisztánlátásra és irányra van szükség.',
      positions: [
        { name: 'A probléma', text: 'A jelenlegi helyzet magja — amiből felfelé indulunk.' },
        { name: 'Pozitív hatások', text: 'Ami a helyzetet jó irányba tolja: erőforrásaid.' },
        { name: 'Negatív hatások', text: 'Ami nehezíti: amivel számolnod kell.' },
        { name: 'A gyökér', text: 'A múltbeli ok, amiből a helyzet táplálkozik.' },
        { name: 'Tanács', text: 'A javasolt hozzáállás vagy lépés.' },
        { name: 'Kimenetel', text: 'A csillag csúcsa: amerre a helyzet a jelen állás szerint tart.' },
        { name: 'Összegzés', text: 'A közép: az egész kirakás egyetlen lapba sűrítve.' }] },
    { key: 'evkor', name: 'Évkör (12 hónap)', cards: 12,
      layout: { cols: 4, rows: 3, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 },
        { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 }, { r: 2, c: 4 },
        { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }, { r: 3, c: 4 }] },
      desc: 'Tizenkét lap a következő tizenkét hónapra: az első lap a mostani hónap, és sorban halad előre. Születésnapon vagy évkezdéskor a legszebb.',
      positions: [
        { name: '1. hónap', text: 'A mostani hónap témája.' },
        { name: '2. hónap', text: '' }, { name: '3. hónap', text: '' },
        { name: '4. hónap', text: '' }, { name: '5. hónap', text: '' },
        { name: '6. hónap', text: 'Az év első felének fordulója.' },
        { name: '7. hónap', text: '' }, { name: '8. hónap', text: '' },
        { name: '9. hónap', text: '' }, { name: '10. hónap', text: '' },
        { name: '11. hónap', text: '' },
        { name: '12. hónap', text: 'A kör zárólapja: amivé az év érik.' }] },
    { key: 'asztro', name: 'Asztrológiai kirakás (12 ház)', cards: 12,
      layout: { cols: 4, rows: 3, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 },
        { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 }, { r: 2, c: 4 },
        { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }, { r: 3, c: 4 }] },
      desc: 'Nagy életleltár: a 12 asztrológiai ház mindegyikére egy lap — ugyanazok az életterületek, amelyeket a születési képleted házai is mutatnak, így közvetlenül összevetheted a profiloddal.',
      positions: [
        { name: '1. ház — az én', text: 'Önkép, fellépés, testi éned jelenlegi állapota.' },
        { name: '2. ház — anyagiak', text: 'Pénz, birtoklás, önértékelés.' },
        { name: '3. ház — kommunikáció', text: 'Beszéd, tanulás, testvérek, közeli környezet.' },
        { name: '4. ház — otthon', text: 'Család, gyökerek, magánélet.' },
        { name: '5. ház — örömök', text: 'Alkotás, szerelem, játék, gyermekek.' },
        { name: '6. ház — hétköznapok', text: 'Munka, rutinok, egészség.' },
        { name: '7. ház — társ', text: 'Párkapcsolat, társulások, nyílt viszonyok.' },
        { name: '8. ház — mélység', text: 'Közös erőforrások, intimitás, átalakulás.' },
        { name: '9. ház — távlatok', text: 'Utazás, tanulmányok, világnézet.' },
        { name: '10. ház — hivatás', text: 'Karrier, társadalmi szerep, célok.' },
        { name: '11. ház — közösség', text: 'Barátok, tervek, jövőkép.' },
        { name: '12. ház — belső világ', text: 'Elvonulás, tudattalan, lezárások.' }] },
    { key: 'patko', name: 'Patkó-kirakás', cards: 7,
      layout: { cols: 7, rows: 3, cells: [
        { r: 3, c: 1 }, { r: 2, c: 2 }, { r: 1, c: 3 }, { r: 1, c: 4 },
        { r: 1, c: 5 }, { r: 2, c: 6 }, { r: 3, c: 7 }] },
      desc: 'Hét lapos áttekintés egy folyamatról: múlt, jelen, rejtett hatások, akadály, környezet, tanács, kimenetel.',
      positions: [
        { name: 'Múlt', text: 'A folyamat előzménye, gyökere.' },
        { name: 'Jelen', text: 'A jelenlegi állás.' },
        { name: 'Rejtett hatások', text: 'Ami a felszín alatt dolgozik: ki nem mondott motivációk, háttérerők.' },
        { name: 'Akadály', text: 'A legfőbb nehézség, amin át kell jutni.' },
        { name: 'A környezet', text: 'Mások hatása: ahogy a környezeted segíti vagy nehezíti az ügyet.' },
        { name: 'Tanács', text: 'A javasolt lépés vagy hozzáállás.' },
        { name: 'Kimenetel', text: 'Amerre a folyamat a jelen állás szerint tart.' }] },
    { key: 'kelta', name: 'Kelta kereszt', cards: 10,
      layout: { cols: 4, rows: 4, cells: [
        { r: 2, c: 2 },                 // 1. a helyzet (közép)
        { r: 2, c: 2, cross: true },    // 2. a keresztező erő (ráfektetve)
        { r: 3, c: 2 },                 // 3. a gyökér (alul)
        { r: 2, c: 1 },                 // 4. a múlt (balra)
        { r: 1, c: 2 },                 // 5. a korona (felül)
        { r: 2, c: 3 },                 // 6. a közeljövő (jobbra)
        { r: 4, c: 4 },                 // 7. önmagad (pálca alja)
        { r: 3, c: 4 },                 // 8. a környezet
        { r: 2, c: 4 },                 // 9. remények és félelmek
        { r: 1, c: 4 }] },              // 10. a kimenetel (pálca teteje)
      desc: 'A leghíresebb nagy kirakás: tíz lap, amely a helyzet minden rétegét — tudatosat és tudattalant, múltat és kimenetelt — feltérképezi. A bal oldali kereszt a helyzet, a jobb oldali pálca a fejlődés íve.',
      positions: [
        { name: '1. A helyzet', text: 'A kérdés magja: ahol most állsz.' },
        { name: '2. A keresztező erő', text: 'Ami keresztbe fekszik: a fő kihívás vagy épp a fő segítség — mindig a helyzettel kölcsönhatásban.' },
        { name: '3. A gyökér', text: 'A helyzet tudattalan alapja: ami mélyről táplálja.' },
        { name: '4. A múlt', text: 'Ami elmúlóban van: a közelmúlt still ható energiája.' },
        { name: '5. A korona', text: 'A tudatos cél vagy a lehetséges legjobb kimenet: amire törekszel.' },
        { name: '6. A közeljövő', text: 'A következő szakasz energiája — ami hamarosan belép.' },
        { name: '7. Önmagad', text: 'Ahogy te állsz a helyzetben: a saját hozzáállásod tükre.' },
        { name: '8. A környezet', text: 'Ahogy mások és a körülmények hatnak: a külső erőtér.' },
        { name: '9. Remények és félelmek', text: 'A legmélyebb várakozásod — a remény és a félelem itt gyakran ugyanaz a lap két oldala.' },
        { name: '10. A kimenetel', text: 'Az összegzés: amerre az egész a jelen állás szerint tart.' }] }
  ],

  /* ---------------- a kiértékelés szövegei ---------------- */

  synthesis: {
    intro: 'Összkép — a lapok együtt:',
    majorsHigh: 'A kirakásban feltűnően sok a Nagy Arkánum (%N%/%T%): a hagyomány szerint a kérdésed nem hétköznapi ügy, hanem sorsszintű téma — az események nagyobb erővel mozognak, mint amennyit az egyéni akarat szokott mozgatni.',
    majorsLow: 'A kirakásban nincs vagy alig van Nagy Arkánum: a kérdésed a hétköznapi, kézben tartható rétegben mozog — a kimenetel főleg a te döntéseiden múlik.',
    suitDominant: 'A lapok többsége %SUIT% (%EL% elem): a helyzet súlypontja %DOM% területén van — bármi is a kérdés felszíne, a válasz ezen a rétegen keresendő.',
    suitMissing: 'Feltűnő, hogy egyetlen %SUIT% lap sincs a kirakásban: %DOM% szempontja mintha hiányozna a helyzetből — érdemes rákérdezni, nem épp ez-e a vakfolt.',
    reversedMany: 'A lapok fele vagy több fordított állású: a hagyomány szerint a helyzet energiái befelé fordultak vagy elakadtak — a munka most elsősorban belső: tisztázás, elengedés, újrahangolás.',
    reversedNone: 'Minden lap egyenes állású: az energiák szabadon, kifelé áramlanak — a helyzet nyitott, a cselekvésnek most van tere.',
    courtsMany: 'Feltűnően sok az udvari lap (apród, lovag, királynő, király): a helyzetben az emberek és a szerepek a főszereplők — kevésbé az események, inkább a személyiségek dinamikája dönt.',
    acesMany: 'Több Ász is érkezett: csupa új kezdet gyülekezik — a helyzet magvetési időszakban van, a lapok inkább lehetőségeket, mint kész válaszokat mutatnak.',
    sameRank: 'A kirakásban %N% azonos értékű lap (%R%) szerepel: a numerológiai hagyomány szerint ez a téma nyomatékosítása — ugyanaz a lecke több elem nyelvén szólal meg.',
    tension: 'A kirakás két legerősebb feszültsége: %A% és %B% — a kiértékelés kulcsa a kettő közti viszony.',
    note: 'A tarot nem jóslás, hanem tükör: a lapok nem megmondják, mi lesz, hanem megmutatják, hogyan áll a helyzet erőtere — a döntés mindig a tiéd. A fordított lap nem „rossz lap": ugyanannak az energiának a befelé forduló, elakadt vagy érlelődő változata.'
  }
};
