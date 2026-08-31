/* lots.js — hellenisztikus sorsrészek és perzsa firdaria adatmodul
 * Sima script (nem ES modul), UTF-8.
 * Forrás: docs/23-sorsreszek.md és docs/24-firdaria.md
 *   (Greenbaum, Culture and Cosmos 11.2; Abu Ma'sar IV. könyv Dykes fordításában)
 */
window.HDATA = window.HDATA || {};

window.HDATA.lots = {

  intro: 'A sorsrészek (görögül klēroi, magyarul gyakran „arab pontok") számított ' +
    'pontok: mindegyik ugyanazt a geometriát követi — megmérünk egy ívet két pont ' +
    'között, majd ugyanezt az ívet felmérjük az aszcendenstől. Nem égitestek, nincs ' +
    'saját mozgásuk. A hellenisztikus hagyomány a Fortunát tartotta a képlet ' +
    'legerősebb pontjának.',

  sectNote: 'A legtöbb sorsrész megfordul nappali és éjszakai születésnél. Mi a ' +
    'hellenisztikus fősodrot követjük, amely megfordít — Ptolemaiosz volt a kivétel, ' +
    'és mivel William Lilly őt követte, a legtöbb modern program NEM fordít meg. ' +
    'Ezért láthattál máshol eltérő Fortuna-állást.',

  /* A sorsrészek definíciója.
     add/sub: 'sun' | 'moon' | ... | 'fortune' | 'spirit'
     A nappali képlet: Asc + add − sub; éjjel a kettő felcserélődik. */
  list: [
    { key: 'fortune', name: 'Fortuna', greek: 'Tychē', symbol: '⊗', ruler: 'Hold',
      add: 'moon', sub: 'sun',
      text: 'A hagyomány szerint a képlet legerősebb pontja: a test, az egészség, a testi ' +
        'alkat, a megélhetés és az anyagi körülmények helye. Az, ami történik veled — ' +
        'a szándékodtól függetlenül. Figyelem: a görög tychē erkölcsileg semleges ' +
        'sors-körülmény, nem a mai értelemben vett „szerencse".' },
    { key: 'spirit', name: 'Szellem', greek: 'Daimōn', symbol: '⊕', ruler: 'Nap',
      add: 'sun', sub: 'moon',
      text: 'A Fortuna tükörképe az aszcendensre nézve. A Nap jellegét hordozza: elme, ' +
        'lélek, szándékos cselekvés, hivatás, hírnév, rang — az, amit választasz és teszel.' },
    { key: 'eros', name: 'Erósz', greek: 'Erōs', symbol: '♡', ruler: 'Vénusz',
      add: 'venus', sub: 'spirit',
      text: 'A vágy és a vonzalom sorsrésze: mi az, amire valóban vágysz, és mi mozgat ' +
        'a kapcsolataidban. Valens a vágyakozás és a barátság helyeként említi.' },
    { key: 'necessity', name: 'Szükségszerűség', greek: 'Anankē', symbol: '⚷', ruler: 'Merkúr',
      add: 'fortune', sub: 'mercury',
      text: 'A kényszer és a szorongatottság pontja: amiben nincs választásod, amit el ' +
        'kell viselned. Az Erósz ellenpárja.' },
    { key: 'courage', name: 'Bátorság', greek: 'Tolma', symbol: '⚔', ruler: 'Mars',
      add: 'fortune', sub: 'mars',
      text: 'A merészség, a vakmerőség és a nyers erő helye — ahol kockáztatsz, és ahol ' +
        'esetleg túl messzire mész.' },
    { key: 'victory', name: 'Győzelem', greek: 'Nikē', symbol: '✷', ruler: 'Jupiter',
      add: 'jupiter', sub: 'spirit',
      text: 'A remény, a bizalom és a siker sorsrésze: ahol kitartasz, mert hiszel a ' +
        'jó kimenetelben.' },
    { key: 'nemesis', name: 'Nemezis', greek: 'Nemesis', symbol: '☖', ruler: 'Szaturnusz',
      add: 'fortune', sub: 'saturn',
      text: 'A rejtett gyengeség és a lezárás helye: ahol a múlt utolér, és ahol a ' +
        'hagyomány szerint a láthatatlan akadályok állnak.' }
  ],

  basis: {
    name: 'Basis', greek: 'Basis', symbol: '⊥',
    text: 'Az „alap": a Fortuna és a Szellem közti rövidebb ív felmérve az aszcendenstől — ' +
      'ezért mindig a horizont alá esik. Valens a rang megítélésénél sorolja a Fortuna és ' +
      'a Szellem mellé; Rhetorius „az élet és a lélegzet járulékos okának" nevezi.',
    note: 'A Basis kevésbé bevett, mint a hét hermetikus sorsrész, és a források két ' +
      'megfogalmazása (szekta szerinti képlet, illetve „a rövidebb ív") csak akkor esik ' +
      'egybe, ha a rövidebb ív szabálya elsőbbséget élvez. Mi a rövidebb ívet használjuk.'
  },

  fortuneHouseNote: 'A Fortuna „második aszcendensként" is működik a testi-anyagi ' +
    'ügyekben: a hagyomány tőle is számol házakat — de kizárólag egész jegyes ' +
    'rendszerben. A Fortunától számított 11. hely a „Szerzés Helye", Valens szerint ' +
    'a javak és a vagyon adományozója.',

  note: 'A sorsrészek a hellenisztikus asztrológia sajátjai, és a modern gyakorlat ' +
    'részben újraértelmezte őket: a mai asztrológia a Fortunát inkább lélektanian, ' +
    'az öröm és a természetes tehetség helyeként olvassa. A kettő nem ugyanaz.'
};

window.HDATA.firdaria = {

  intro: 'A firdaria perzsa eredetű időurak-rendszer: az életet egymást követő ' +
    'bolygóperiódusokra osztja, összesen 75 évre, majd elölről kezdi. A hagyomány ' +
    'szerint a periódus ura nem hozzáad valamit, hanem aktiválja azt, amit az adott ' +
    'bolygó a születési képletedben ígér — ezért érdemes megnézni, hol áll nálad.',

  years: { sun: 10, venus: 8, mercury: 13, moon: 9, saturn: 11, jupiter: 12, mars: 7,
    northNode: 3, southNode: 2 },

  /* Csökkenő kaldeus sorrend — ebből forog ki a fő- és az alperiódus-sor is. */
  chaldean: ['saturn', 'jupiter', 'mars', 'sun', 'venus', 'mercury', 'moon'],

  names: {
    sun: 'Nap', venus: 'Vénusz', mercury: 'Merkúr', moon: 'Hold', saturn: 'Szaturnusz',
    jupiter: 'Jupiter', mars: 'Mars', northNode: 'Északi holdcsomó', southNode: 'Déli holdcsomó'
  },
  symbols: {
    sun: '☉', venus: '♀', mercury: '☿', moon: '☽', saturn: '♄',
    jupiter: '♃', mars: '♂', northNode: '☊', southNode: '☋'
  },

  meanings: {
    sun: 'Identitás, életerő, elismerés és tekintély. Az apa, a pályán való láthatóság, a becsület ügyei.',
    moon: 'A test, az érzelmi élet, az otthon, a család és az anya. A közönség, a változékonyság, a költözés.',
    mercury: 'Tanulás, írás, beszéd, kereskedelem és alkudozás. Testvérek, utazás, szellemi nyugtalanság.',
    venus: 'Kapcsolatok, házasság, öröm, szépség és művészet. Másokon keresztül érkező haszon, társas könnyedség.',
    mars: 'Cselekvés, becsvágy, konfliktus és verseny. Műtét, baleset, elválás — és a nyomás szülte bátorság.',
    jupiter: 'Kibontakozás, lehetőség, pártfogók. Jog, hit és bölcselet, vagyon, gyerekek, általános jó sors.',
    saturn: 'Szerkezet, fegyelem, kemény munka. Késleltetés, korlát, veszteség és gyász, érettség, hosszú távú építkezés.',
    northNode: 'Növekedés és felnagyítás: új terület, gyarapodás abban, amit érint.',
    southNode: 'Csökkenés és elengedés: lezárások, elválás, összehúzódás, a fölösleg leadása.'
  },

  yearLength: 365.2422,

  variantNote: 'Az éjszakai sorrendben a két holdcsomó helye vitatott. Mi Abu Ma\'sar ' +
    'szövegét követjük, amely mindkét szektában a 70–75 éves korra teszi őket. A modern ' +
    'programok egy része Bonatti nyomán éjszakai képletnél a Mars után, 39–44 éves korban ' +
    'hozza a csomókat — ez al-Qabīṣī összefoglalójából ered, amely kihagyta Abu Ma\'sar ' +
    'egyértelműsítő mondatát.',

  subNote: 'Minden bolygóperiódus hét egyenlő alperiódusra oszlik, ugyanabban a kaldeus ' +
    'sorrendben, a periódus saját urától indítva. A holdcsomók periódusai nem oszlanak ' +
    'tovább: Abu Ma\'sar szerint azért, „mert nincs házuk".',

  note: 'Az év hosszát a források nem rögzítik — egész években és életkorban beszélnek. ' +
    'Mi közepes trópusi évvel (365,2422 nap) számolunk, ami a teljes 75 éves cikluson ' +
    'legfeljebb néhány nap eltérést jelent.'
};
