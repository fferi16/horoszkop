/*
 * transits.js — a lassú bolygók tranzitjainak értelmező szövegei
 * A profile.js buildTransits() függvénye használja: a következő évek
 * pontos fényszögeit vetíti rá a születési képletre.
 *
 * Sima script (nem ES modul), file:// protokollon is betölthető.
 * Betöltési sorrend: a western.js után, a core rétegek előtt.
 *
 * Szövegosztályok bolygónként:
 *   conj — együttállás, hard — kvadrát/oppozíció, soft — trigon
 */

window.HDATA = window.HDATA || {};

window.HDATA.transits = {

  /* ---------------- a tranzitáló bolygók hangja ---------------- */

  planets: {
    jupiter: {
      cycle: 'kb. 12 éves kör',
      conj: 'A Jupiter együttállása a bővülés, a bizakodás és a lehetőségek időszakát nyitja meg ezen a területen: ajtók nyílnak, látókör tágul, és amit most elindítasz, annak hosszú távon is lendülete lesz.',
      hard: 'A Jupiter feszült fényszöge is növel, csak éppen mértéktelenül: túlvállalás, elbizakodottság vagy szétforgácsolódás kísértheti. A lehetőség valódi — józan kerettel ér a legtöbbet.',
      soft: 'A Jupiter támogató fényszöge gördülékeny, szerencsés hónapokat jelez ezen a területen: kevesebb erőfeszítéssel több érhető el, és a segítség is könnyebben megtalál.'
    },
    saturn: {
      cycle: 'kb. 29 éves kör',
      conj: 'A Szaturnusz együttállása számvetésre és rendrakásra hív: ami ezen a területen valódi és teherbíró, azt megszilárdítja, ami korhadt, azt elbontatja. Munkás, de érlelő időszak — a végén kevesebb lesz, de az a tiéd.',
      hard: 'A Szaturnusz feszült fényszöge korlátokat, késleltetést és megmérettetést hoz erre a területre. Nem büntetés, hanem terheléspróba: ami kiállja, arra utána évekig építhetsz.',
      soft: 'A Szaturnusz támogató fényszöge a csendes, kitartó építkezés ideje: most könnyebb struktúrát adni a dolgoknak, felelősséget vállalni és hosszú távra alapozni ezen a területen.'
    },
    uranus: {
      cycle: 'kb. 84 éves kör',
      conj: 'Az Uránusz együttállása váratlan fordulatot és felszabadulást hoz erre a területre: ami itt megcsontosodott, azt hirtelen kérdőjelezi meg. A változás előbb kényelmetlen, utóbb rendszerint frissítő.',
      hard: 'Az Uránusz feszült fényszöge nyugtalanságot és hirtelen törésvonalakat hozhat erre a területre: erős a késztetés kitörni a régi keretből. Érdemes tudatosan újítani, mielőtt az élet teszi meg helyetted.',
      soft: 'Az Uránusz támogató fényszöge izgalmas, de nem felforgató megújulást kínál: most könnyű újítani, kísérletezni és a saját utadra lépni ezen a területen — feszültség nélkül.'
    },
    neptune: {
      cycle: 'kb. 165 éves kör',
      conj: 'A Neptunusz együttállása finoman feloldja a határokat ezen a területen: nő az érzékenység, az ihlet és a spirituális fogékonyság, de a körvonalak is elmosódnak. Az álmodozásnak tere van — a fontos döntésekhez viszont kérj józan, külső szemet.',
      hard: 'A Neptunusz feszült fényszöge ködöt ereszthet erre a területre: illúziók, kifáradás vagy bizonytalanság kísérheti. Ilyenkor ne a nagy ugrás, hanem a tisztázás a feladat — a köd magától felszáll, ha lejár az ideje.',
      soft: 'A Neptunusz támogató fényszöge megemeli az intuíciót, az empátiát és az alkotóerőt ezen a területen: jó időszak művészetre, segítésre, belső munkára — a hétköznapok is költőibbek lesznek.'
    },
    pluto: {
      cycle: 'kb. 248 éves kör',
      conj: 'A Plútó együttállása mélyreható, visszafordíthatatlan átalakulást indít ezen a területen: ami itt kiüresedett, azt elbontja, hogy a helyére erősebb épülhessen. Lassú, többéves folyamat — ellenállni fárasztóbb, mint együttműködni vele.',
      hard: 'A Plútó feszült fényszöge hatalmi kérdéseket és mély, lassú átrendeződést hoz erre a területre: valami régi kapaszkodót el kell engedni. Ami a folyamat végén megmarad, az sokkal szilárdabb lesz.',
      soft: 'A Plútó támogató fényszöge csendes, de mély megerősödést hoz: most fájdalom nélkül tudsz megújulni ezen a területen, és a kitartásod szokatlanul nagy — jó időszak gyökeres, önként vállalt változtatásra.'
    }
  },

  /* ---------------- a natál célpontok — mit érint nálad ---------------- */

  targets: {
    sun:     { label: 'a születési Napod',        domain: 'Ez a tranzit az éntudatodat, az életerődet és a legfontosabb céljaidat szólítja meg — azt, aki a mélyben vagy.' },
    moon:    { label: 'a születési Holdad',       domain: 'Ez a tranzit az érzelmi életedet, a biztonságérzetedet, az otthonodat és a legközelebbi kötődéseidet érinti.' },
    mercury: { label: 'a születési Merkúrod',     domain: 'Ez a tranzit a gondolkodásodat, a kommunikációdat, a tanulást és a mindennapi ügyintézést érinti.' },
    venus:   { label: 'a születési Vénuszod',     domain: 'Ez a tranzit a párkapcsolatodat, a vonzalmaidat, az értékrendedet és az anyagi örömöket érinti.' },
    mars:    { label: 'a születési Marsod',       domain: 'Ez a tranzit a tetterődet, az akaratodat, a küzdőképességedet és a testi energiáidat érinti.' },
    jupiter: { label: 'a születési Jupitered',    domain: 'Ez a tranzit a fejlődésedet, a hitedet, a tanulmányaidat és a lehetőségeidhez való viszonyodat érinti.' },
    saturn:  { label: 'a születési Szaturnuszod', domain: 'Ez a tranzit a felelősségeidet, a munkád szerkezetét, a korlátaidhoz és a kötelességekhez való viszonyodat érinti.' },
    uranus:  { label: 'a születési Uránuszod',    domain: 'Ez a tranzit a szabadságigényedet és az újító oldaladat érinti — a saját nemzedéki ciklusod egyik állomása.' },
    neptune: { label: 'a születési Neptunuszod',  domain: 'Ez a tranzit az álmaidhoz, az ideáljaidhoz való viszonyodat érinti — a saját nemzedéki ciklusod egyik állomása.' },
    pluto:   { label: 'a születési Plútód',       domain: 'Ez a tranzit a belső erőforrásaidat és a megújulóképességedet érinti — a saját nemzedéki ciklusod egyik állomása.' },
    asc:     { label: 'az Aszcendensed',          domain: 'Ez a tranzit a személyiséged legszemélyesebb pontját érinti: a testi énedet, a fellépésedet és azt, ahogyan a világ felé fordulsz.' },
    mc:      { label: 'az MC-d (a képlet csúcsa)', domain: 'Ez a tranzit a hivatásodat, a társadalmi szerepedet és a nyilvános megítélésedet érinti.' }
  },

  /* ---------------- nevezetes életciklus-tranzitok ---------------- */

  special: {
    jupiterReturn: 'Ez Jupiter-visszatérés: a bolygó 12 évente ér vissza a születési helyére, és új növekedési kört nyit — a hagyomány szerint az egyik legkedvezőbb évkezdő tranzit.',
    saturnReturn: 'Ez Szaturnusz-visszatérés: 29-30 évente esedékes nagy számvetés, a felnőtté érés, illetve az élet második felében a letisztulás klasszikus mérföldköve.',
    saturnOpposition: 'Ez a Szaturnusz-ciklus félideje: a bolygó szemben áll a születési helyével. Ilyenkor derül ki, mennyire teherbíró mindaz, amit az előző visszatérés óta felépítettél.',
    uranusOpposition: 'Ez az Uránusz-oppozíció, a híres „életközépi forduló" (40-44 év körül): a bolygó szemben áll a születési helyével, és mindent megkérdőjelez, ami nem a sajátod. Nem válság — útkorrekció.',
    uranusSquare: 'Ez az Uránusz-ciklus egyik negyedpontja (21, 63 év körül): a szabadság és a keretek viszonyát kell újrahangolni.',
    neptuneSquare: 'Ez a Neptunusz-kvadrát a saját Neptunuszodra (41-42 év körül): az ideálok felülvizsgálatának időszaka — mi az, amiben tényleg hiszel, és mi volt csak illúzió?',
    plutoSquare: 'Ez a Plútó-kvadrát a saját Plútódra (a mai nemzedékeknél 36-48 év között): mélyről jövő erőpróba, amely a legmakacsabb berögződéseket is képes átformálni.'
  },

  specialNames: {
    jupiterReturn: 'Jupiter-visszatérés',
    saturnReturn: 'Szaturnusz-visszatérés',
    saturnOpposition: 'Szaturnusz-félidő',
    uranusOpposition: 'életközépi forduló',
    uranusSquare: 'Uránusz-negyed',
    neptuneSquare: 'Neptunusz-kvadrát',
    plutoSquare: 'Plútó-kvadrát'
  },

  multiHit: 'A bolygó hurokmozgása (retrográd szakasza) miatt %N% alkalommal pontosul be, így a téma hosszabban, hullámokban van jelen — az első érintés felveti, az utolsó lezárja.',

  houseLine: 'Az égen mindez a képleted %H%. házában zajlik (%T%), tehát elsősorban ezen az életterületen ölt testet.',

  intro: 'Az alábbi lista a lassú bolygók (Jupiter, Szaturnusz, Uránusz, Neptunusz, Plútó) pontos fényszögeit mutatja a születési képleted érzékeny pontjaira, időrendben. Ezek a hosszú hatású, hónapokig-évekig érő tranzitok — a gyors bolygók (Nap, Merkúr, Vénusz, Mars) érintései napok alatt lezajlanak, ezért itt nem szerepelnek.',

  note: 'A felsorolt dátumok a fényszög pontos beállásának napjai; a tranzit hatása a hagyomány szerint már 1-2 fokkal (hetekkel-hónapokkal) korábban érződik, és utána is kitart. A lista a legfontosabb érintésekre szűrt — a halványabb fényszögek (szextilek, gyors tranzitok) szándékosan maradtak ki.'
};
