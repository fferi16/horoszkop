/* Horoszkóp – Sorsmátrix (Destiny Matrix) értelmező szövegei
   A 22 nagy arkánumra épülő, oktagram alakú rendszer. Modern, 2000-es évekbeli
   orosz eredetű szinkretizmus (numerológia + tarot + kabbala + csakratan). */

window.HDATA = window.HDATA || {};
window.HDATA.matrix = {
  intro: 'A Sorsmátrix (oroszul Матрица Судьбы) a születési dátum három számából — ' +
    'nap, hónap, év — épít egy nyolcszög alakú ábrát, amelyben minden pont a tarot ' +
    '22 nagy arkánumának egyikét kapja. A pontok egymásból származnak: két szám ' +
    'összegét mindig visszaredukáljuk 22 alá. A rendszer a 2000-es években állt ' +
    'össze Oroszországban, és onnan terjedt el világszerte.',

  positions: {
    A: 'A nyugati pont a születés napjából: ez a személyiséged alaprajza, amit ' +
      'a világ elsőként lát belőled.',
    B: 'Az északi, legmagasabb pont a hónapból: a hagyomány szerint ez mutatja, ' +
      'mi felé érdemes növekedned, és mi az, amiben a legjobbá válhatsz.',
    C: 'A keleti pont az évszámból: a hozott talentum, a képesség, amit a ' +
      'rendszer szerint készen kaptál.',
    D: 'A déli pont a három szám összegéből: a gyökerek, a származás és az a ' +
      'tapasztalati alap, amiről indulsz.',
    E: 'A középpont a mátrix szíve: a rendszer szerint ez az élet fő feladata és ' +
      'egyben a „komfortzónád" — az az energia, amiben a legtermészetesebben mozogsz, ' +
      'és amit a leginkább tanulnod kell megélni.',
    L2: 'Az égi, személyes életfeladat a négy átlós pont összegéből: befelé irányuló ' +
      'feladat, amit elsősorban magaddal kell elvégezned.',
    L1: 'Az összegző életfeladat a középpont és az égi feladat egyesítése: a ' +
      'hagyomány szerint ez az a szerep, amiben a személyes és a közösségi ' +
      'feladat találkozik.',
    skyEarth: 'Az ég vonala a szellemi, a föld vonala az anyagi-gyakorlati oldalt ' +
      'jelöli; a kettő egyensúlya adja a rendszer szerint a kiegyensúlyozott életet.',
    age: 'A nyolcszög egyben életkor-kerék is: a bal oldali ponttól az óramutató ' +
      'járása szerint haladva minden csúcs 10 évet jelöl, a köztes pontok az ' +
      'ötéves felezőket. A hagyomány szerint az itt álló arkánum adja az adott ' +
      'életszakasz fő témáját.'
  },

  purpose: {
    personal: 'Az első szint: önmagad megtalálása. A férfi és a női minta ' +
      'keveredése, a kapcsolatok építése és a saját képességek felismerése. ' +
      'Az „ég" a belső, a „föld" a külső oldala ugyanennek a feladatnak.',
    social: 'A második szint: a társas és családi rendszerekben elfoglalt hely — ' +
      'a munka eredménye és annak közösségi elfogadása. A két generációs ág ' +
      'összegéből származik.',
    spiritual: 'A harmadik szint: a rendszer szerint ez az élet „szellemi vizsgája". ' +
      'Az előző két feladat összegéből jön, tehát csak azokon keresztül közelíthető meg.'
  },

  channels: {
    money: 'A pénzcsatorna a mátrix jobb alsó szektorában fut, a vízszintes ' +
      '(anyagi) tengely felől befelé. Három arkánumból áll: az első a pénzhez ' +
      'való hozzáállásod alapmintája, a második a próbatétel, amin keresztül a ' +
      'jövedelem megérkezik, a harmadik pedig az a pont, ahol a rendszer szerint ' +
      'a csatorna „megnyílik". A hagyomány szerint ezek az energiák akkor ' +
      'működnek, ha nem az árnyoldalukat éled meg.',
    love: 'A kapcsolati csatorna ugyanennek a szektornak a másik oldala, az alsó ' +
      '(gyökér felőli) tengely felől. Szintén három arkánum: a párkapcsolati ' +
      'alapmintád, a benne rejlő lecke, és a közös csúcspont, ahol a két csatorna ' +
      'találkozik. A rendszer szerint a pénz és a párkapcsolat ugyanabból a ' +
      'szektorból táplálkozik — ezért mozdul gyakran együtt a kettő.'
  },

  lines: {
    male: 'Az apai ág vonala: a mátrix egyik átlója. A hagyomány szerint az itt ' +
      'álló arkánumok mutatják a férfiágon hozott mintákat és feladatokat.',
    female: 'Az anyai ág vonala: a másik átló. Az itt álló arkánumok a női ágon ' +
      'öröklött mintákra utalnak.'
  },

  chakraIntro: 'A csakrasor a mátrix két tengelyéből olvasható ki. A vízszintes ' +
    '(föld) tengely adja a „fizika" oszlopot: ahogy az adott életterület a ' +
    'külvilágban, a testben és az anyagi életben megjelenik. A függőleges (ég) ' +
    'tengely az „energia" oszlop: ahogy ugyanez belülről működik. A kettő összege ' +
    'az „érzelem" oszlop. Az utolsó sor mindhárom oszlop összege — a rendszer ' +
    'ezt nevezi közös energiazónának.',

  chakraCols: { physics: 'Fizika', energy: 'Energia', emotion: 'Érzelem' },

  chakraMeanings: {
    sahasrara: 'Küldetés, szellemi kapcsolódás, világkép.',
    adzsna: 'Sors, egregorok — látásmód, tervezés, jövőkép.',
    visuddha: 'Sors és önkifejezés — kommunikáció, hivatás, láthatóság.',
    anahata: 'Kapcsolatok és világkép — szeretet, elfogadás, önérték.',
    manipura: 'Státusz és birtoklás — akarat, hatalom, önérvényesítés.',
    szvadhisthana: 'Gyermekek szeretete, öröm — kreativitás, szexualitás.',
    muladhara: 'Test és anyag — egészség, biztonság, anyagi alapok.'
  },
  chakraResultName: 'Eredmény — közös energiazóna',

  /* A 22 arkánum rövid jelentése kifejezetten mátrix-környezetben.
     (A tarot-lapok bővebb leírása a numerológiai modulban található.) */
  arcana: {
    1: 'A Mágus energiája: kezdeményezés, önálló akarat, a saját erő felismerése. Árnyoldala a manipuláció.',
    2: 'A Főpapnő energiája: intuíció, csend, belső tudás. Árnyoldala a passzivitás és a titkolózás.',
    3: 'A Császárnő energiája: bőség, alkotás, gondoskodás, testi jóllét. Árnyoldala a tétlen kényelem.',
    4: 'A Császár energiája: rend, tekintély, struktúra, felelősség. Árnyoldala a merevség és a zsarnokság.',
    5: 'A Főpap energiája: tanítás, hagyomány, értékrend, hit. Árnyoldala a dogmatizmus.',
    6: 'A Szerelmesek energiája: kapcsolatok, választás, harmónia. Árnyoldala a döntésképtelenség.',
    7: 'A Diadalszekér energiája: előrehaladás, akarat, győzelem. Árnyoldala a türelmetlen hajtás.',
    8: 'Az Erő energiája: szelíd hatalom, önuralom, kitartás. Árnyoldala az elfojtott indulat.',
    9: 'A Remete energiája: elmélyülés, magány, bölcsesség. Árnyoldala az elszigetelődés.',
    10: 'A Szerencsekerék energiája: ciklusok, változás, sorsfordulók. Árnyoldala a sodródás.',
    11: 'Az Igazság energiája: egyensúly, méltányosság, tiszta látás. Árnyoldala a rideg ítélkezés.',
    12: 'Az Akasztott energiája: nézőpontváltás, elengedés, áldozat. Árnyoldala a tehetetlen várakozás.',
    13: 'A Halál energiája: lezárás és újrakezdés, átalakulás. Árnyoldala a ragaszkodás ahhoz, ami már véget ért.',
    14: 'A Mértékletesség energiája: egyensúly, gyógyítás, ötvözés. Árnyoldala a langyos középszer.',
    15: 'Az Ördög energiája: vágy, kötődés, anyagi erő, szenvedély. Árnyoldala a függőség.',
    16: 'A Torony energiája: hirtelen összeomlás és felszabadulás. Árnyoldala a válságkeresés.',
    17: 'A Csillag energiája: remény, ihlet, gyógyulás, jövőkép. Árnyoldala az irreális ábrándozás.',
    18: 'A Hold energiája: képzelet, álom, félelmek, tudattalan. Árnyoldala az illúzió és a szorongás.',
    19: 'A Nap energiája: siker, világosság, öröm, láthatóság. Árnyoldala a hiúság.',
    20: 'Az Ítélet energiája: felébredés, számvetés, hivatás. Árnyoldala az önostorozás.',
    21: 'A Világ energiája: teljesség, beérkezés, tágasság. Árnyoldala a lezáratlan vándorlás.',
    22: 'A Bolond energiája: szabadság, kockázat, tiszta lappal indulás. Árnyoldala a felelőtlenség.'
  },

  disclaimer: 'A Sorsmátrix modern ezoterikus rendszer: tarot, numerológia és ' +
    'csakratan szinkretizmusa, amelynek nincs tudományos alapja, és nem is ősi ' +
    'hagyomány. Önismereti tükörként és szimbólumrendszerként érdemes nézni.'
};
