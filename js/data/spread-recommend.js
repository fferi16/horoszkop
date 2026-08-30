/* Kirakásajánló — téma alapján ajánl paklit és kirakási módot.
   A deck/spread kulcsok a tarot.js, lenormand.js és gypsy.js
   spreads tömbjeinek kulcsaira mutatnak. */
'use strict';
window.HDATA = window.HDATA || {};

HDATA.spreadRecommend = {

  topics: [
    { key: 'szerelem',  icon: '💞', label: 'Párkapcsolat, szerelem' },
    { key: 'munka',     icon: '💼', label: 'Munka, hivatás' },
    { key: 'penz',      icon: '💰', label: 'Pénz, anyagiak' },
    { key: 'dontes',    icon: '⚖️', label: 'Döntés előtt állok' },
    { key: 'jovo',      icon: '🔭', label: 'Jövő, általános kép' },
    { key: 'onismeret', icon: '🪞', label: 'Önismeret, belső munka' },
    { key: 'elakadas',  icon: '🧱', label: 'Elakadás, nehéz időszak' },
    { key: 'igennem',   icon: '❓', label: 'Gyors igen–nem kérdés' }
  ],

  recs: {
    szerelem: [
      { deck: 'tarot', spread: 'kapcsolat',
        why: 'Mindkét fél nézőpontját külön lapok mutatják, a kapcsolat közös lapjával — ez a legtisztább kép kettőtökről.' },
      { deck: 'gypsy', spread: 'szerelemkereso',
        why: 'A hagyományos 13 lapos szerelmi terítés: a cigánykártya klasszikus válasza arra, mi van és mi lesz a szívügyeidben.' },
      { deck: 'lenormand', spread: 'kilences',
        why: 'A kérdésed a tabló közepére kerül, körülötte kirajzolódik, mi hat rá — konkrét szerelmi kérdéshez ideális.' },
      { deck: 'tarot', spread: 'kelta',
        why: 'Ha a kapcsolat összetett, régi történet, a Kelta kereszt a mélyrétegeket is felfejti: múltat, félelmeket, kimenetelt.' }
    ],

    munka: [
      { deck: 'tarot', spread: 'hat',
        why: 'Helyzet – Akadály – Tanács: gyors, gyakorlatias hármas, pontosan megmutatja, min akad el a munkád és mit tegyél.' },
      { deck: 'tarot', spread: 'patko',
        why: 'Hét lapos folyamatkép: honnan indul az ügy, milyen rejtett hatások dolgoznak, és merre tart — pályázathoz, váltáshoz jó.' },
      { deck: 'lenormand', spread: 'otos',
        why: 'Rövid, konkrét munkahelyi kérdésre a Lenormand tárgyilagos ötös sora ad a legkevésbé mellébeszélő választ.' }
    ],

    penz: [
      { deck: 'gypsy', spread: 'penzkereso',
        why: 'A 13 lapos Pénzkereső kifejezetten anyagi ügyekre született: bevétel, kiadás, rejtett lehetőség, veszteségforrás.' },
      { deck: 'lenormand', spread: 'hetes',
        why: 'A hetes sor középső lapja a kérdésed magja, a két szárny az odavezető és kivezető út — pénzügyi döntésekhez pontos.' },
      { deck: 'tarot', spread: 'hat',
        why: 'Ha csak azt akarod tudni, mi fékezi az anyagi helyzeted és mit tanácsol a kártya: ez a legrövidebb út.' }
    ],

    dontes: [
      { deck: 'tarot', spread: 'dontes',
        why: 'Két út — A és B — külön lapokkal: mindkét választás következménye kirajzolódik, mielőtt lépnél.' },
      { deck: 'lenormand', spread: 'igennem',
        why: 'Ha a kérdés eldöntendő, a Lenormand igen–nem vetése a lapok színe alapján szavaz — gyors és egyértelmű.' },
      { deck: 'tarot', spread: 'hat',
        why: 'Ha nem két út közt vacillálsz, hanem azt sem tudod, mi a valódi kérdés: helyzet, akadály és tanács hármasa tisztáz.' }
    ],

    jovo: [
      { deck: 'tarot', spread: 'mjj',
        why: 'Múlt – Jelen – Jövő: a legegyszerűbb ívkép arról, honnan jössz és merre tartasz — ideális első kirakásnak.' },
      { deck: 'tarot', spread: 'evkor',
        why: 'Tizenkét lap, tizenkét hónap: a következő éved hónapról hónapra — születésnap vagy évkezdet táján a legszebb.' },
      { deck: 'lenormand', spread: 'gt',
        why: 'A Grand Tableau mind a 36 lapot kiteríti: teljes életkép házakkal, közel-távol hatásokkal — a legátfogóbb vetés.' },
      { deck: 'gypsy', spread: 'nagyterites',
        why: 'A cigánykártya nagyterítése a közeli és távoli sorsfordulókat választja szét — a hagyomány nagy „mindent látó" vetése.' }
    ],

    onismeret: [
      { deck: 'tarot', spread: 'vakfolt',
        why: 'Amit te tudsz magadról, amit mások látnak, és amit senki — a vakfolt-kirakás a rejtett éned tükre.' },
      { deck: 'tarot', spread: 'eletfa',
        why: 'A kabbalisztikus Életfa tíz állomása a személyiséged teljes térképe a szellemi céloktól a gyakorlati alapokig.' },
      { deck: 'tarot', spread: 'csillag',
        why: 'Hét lapos belső iránytű: erőforrásaid, árnyékaid és a következő lépés — csendes önvizsgálathoz való.' }
    ],

    elakadas: [
      { deck: 'tarot', spread: 'hat',
        why: 'Először nevezd meg az akadályt: a hármas kirakás megmutatja, mi fékez valójában, és mit tanácsol a kártya.' },
      { deck: 'gypsy', spread: 'rontasvizsgalat',
        why: 'Ha úgy érzed, sorozatosan „megfogták" a dolgaid, a hagyomány 13 lapos Rontásvizsgálata nézi meg, kívülről jön-e a baj.' },
      { deck: 'tarot', spread: 'patko',
        why: 'A patkó íve az elakadt folyamatot rajzolja ki: honnan indult, milyen rejtett erők tartják fogva, és hogyan oldódik.' }
    ],

    igennem: [
      { deck: 'lenormand', spread: 'igennem',
        why: 'A Lenormand lapok színe szavaz: gyors, hagyományos igen–nem — fogalmazd a kérdést eldöntendőre.' },
      { deck: 'tarot', spread: 'igennem',
        why: 'Három tarot-lap állása dönt, az indoklást is elmondja — ha nemcsak a válasz érdekel, hanem a miért is.' },
      { deck: 'gypsy', spread: 'kiskereszt',
        why: 'Ha a kérdés igen–nem-nél árnyaltabb, a kis kereszt öt lapja rövid, kerek helyzetképet ad.' }
    ]
  }
};
