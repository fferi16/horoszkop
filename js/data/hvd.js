/* Horoszkóp – Kronobiológiai pszichogenetika (ХВД csakraanalízis)
   Zsazskov (1980-as évek) rendszere, Buhtojarov népszerűsítésében.
   Európában „kronobiológia" néven fut.

   A számítás zárt képlet: a születéstől 1981. december 31-ig eltelt napok
   száma mod 23 / 28 / 33. A három maradék indexeli az alábbi táblázatokat.
   Forrás: Bekenyova, „Önoktató a hronális-vektoros diagnosztikához, I. rész"
   (3. táblázat), lásd docs/18-kronobiologia-hvd.md.

   FIGYELEM: ez a cáfolt bioritmus-elméletre épülő ezoterikus típustan,
   nem azonos a tudományos kronobiológiával (az a „Belső órád" szekció). */

window.HDATA = window.HDATA || {};
window.HDATA.hvd = {
  intro: 'A kronobiológiai pszichogenetikát Artur Zsazskov dolgozta ki az 1980-as ' +
    'években, a hippokratészi vérmérséklet-tanra és a bioritmus-elméletre építve. ' +
    'A módszer a születési dátumból három „markert" számol — a 23, 28 és 33 napos ' +
    'ciklusok állását —, és ezekből olvassa ki hét energiaközpont töltöttségét ' +
    'százalékban. Oroszul csakraanalízis (ХВД) a neve, Európában kronobiológiaként ' +
    'terjedt el.',

  scale: [
    { max: 39, key: 'gyenge', name: 'gyenge potenciál',
      text: 'A rendszer szerint ez a terület kevés saját energiát kap: tudatos ' +
        'figyelmet és külső támogatást igényel.' },
    { max: 60, key: 'normal', name: 'normál sáv',
      text: 'A könyv szerint ez az „ideális" tartomány: az adott terület ' +
        'kiegyensúlyozottan, feltűnés nélkül működik.' },
    { max: 100, key: 'tulzott', name: 'túlzott potenciál',
      text: 'A magas érték a rendszer szerint nem előny, hanem kezelendő többlet: ' +
        'ha nincs hova levezetni, feszültséggé vagy túlhajtássá válik.' }
  ],

  contours: {
    fizikai: {
      name: 'Fizikai kontúr',
      base: 23,
      chakras: ['muladhara', 'szvadhisthana'],
      text: 'A testi működés, a cselekvés sebessége, a vágyak és az anyagi ' +
        'világhoz való viszony. A hagyomány szerint ez mutatja, milyen gyorsan ' +
        'kapcsolódsz be, és mennyire bírod a terhelést.'
    },
    erzelmi: {
      name: 'Érzelmi kontúr',
      base: 28,
      chakras: ['manipura', 'anahata'],
      text: 'Az akarat, az önérvényesítés és az érzelmi kapcsolódás területe: ' +
        'hogyan bánsz a hatalommal, és hogyan engedsz közel másokat.'
    },
    intellektualis: {
      name: 'Intellektuális kontúr',
      base: 33,
      chakras: ['visuddha', 'adzsna'],
      text: 'A gondolkodás, a tanulás és a célok szintje: hogyan dolgozod fel az ' +
        'információt, és milyen módon vagy kreatív.'
    }
  },

  chakraNames: {
    muladhara: 'Muladhára (gyökér)',
    szvadhisthana: 'Szvadhisthána (szakrális)',
    manipura: 'Manipura (napfonat)',
    anahata: 'Anahata (szív)',
    visuddha: 'Visuddha (torok)',
    adzsna: 'Adzsna (harmadik szem)',
    szahaszrara: 'Szahaszrára (korona)'
  },

  chakraMeaning: {
    muladhara: 'Túlélés, biztonság, földelés, fizikai állóképesség.',
    szvadhisthana: 'Vágyak, érzékiség, kreativitás, az ingerek felvétele.',
    manipura: 'Akarat, önbizalom, hatalom, érvényesülés.',
    anahata: 'Szeretet, empátia, megbocsátás, kapcsolódás.',
    visuddha: 'Kommunikáció, önkifejezés, igazmondás.',
    adzsna: 'Intuíció, belső látás, tervezés.',
    szahaszrara: 'Szellemi kapcsolódás, világkép, értelemkeresés.'
  },

  /* --- 1. tábla: fizikai marker (1–23) → Muladhára, Szvadhisthána, temperamentum --- */
  physical: {
    1: [33, 55, 'Szangvinikus'], 2: [55, 72, 'Szangvinikus-kolerikus'],
    3: [15, 65, 'Érzékeny kolerikus'], 4: [50, 72, 'Szangvinikus-kolerikus'],
    5: [30, 41, 'Melankolikus'], 6: [75, 21, 'Flegmatikus'],
    7: [45, 72, 'Szangvinikus-kolerikus'], 8: [60, 22, 'Flegmatikus'],
    9: [35, 28, 'Melankolikus'], 10: [35, 49, 'Szangvinikus'],
    11: [95, 22, 'Flegmatikus'], 12: [30, 99, 'Érzékeny kolerikus'],
    13: [40, 61, 'Szangvinikus'], 14: [20, 55, 'Érzékeny kolerikus'],
    15: [40, 28, 'Melankolikus'], 16: [90, 21, 'Flegmatikus'],
    17: [50, 83, 'Szangvinikus-kolerikus'], 18: [10, 45, 'Érzékeny kolerikus'],
    19: [99, 55, 'Szangvinikus-flegmatikus'], 20: [30, 52, 'Szangvinikus'],
    21: [20, 79, 'Érzékeny kolerikus'], 22: [80, 63, 'Szangvinikus-flegmatikus'],
    23: [25, 51, 'Melankolikus']
  },

  /* --- 2. tábla: érzelmi marker (1–28) → Manipura, Anahata, érzelmi típus --- */
  emotional: {
    1: [69, 95, 'Szenvedélyes'], 2: [75, 27, 'Egoista (vezéri)'],
    3: [31, 45, 'Empatikus'], 4: [62, 77, 'Szenvedélyes'],
    5: [50, 59, 'Empatikus'], 6: [44, 68, 'Empatikus'],
    7: [12, 45, 'Önzetlen, integratív'], 8: [6, 23, 'Hideg'],
    9: [81, 54, 'Egoista (vezéri)'], 10: [25, 77, 'Önzetlen, integratív'],
    11: [18, 50, 'Önzetlen, integratív'], 12: [44, 59, 'Empatikus'],
    13: [25, 68, 'Önzetlen, integratív'], 14: [50, 77, 'Szenvedélyes'],
    15: [50, 99, 'Szenvedélyes'], 16: [50, 36, 'Szentimentális'],
    17: [50, 41, 'Szentimentális'], 18: [31, 14, 'Hideg'],
    19: [99, 54, 'Egoista (vezéri)'], 20: [44, 32, 'Szentimentális'],
    21: [62, 41, 'Szentimentális'], 22: [25, 18, 'Hideg'],
    23: [69, 59, 'Egoista (vezéri)'], 24: [56, 41, 'Szentimentális'],
    25: [44, 68, 'Empatikus'], 26: [37, 41, 'Hideg'],
    27: [56, 73, 'Szenvedélyes'], 28: [44, 73, 'Empatikus']
  },

  /* --- 3. tábla: intellektuális marker (1–33) → Visuddha, Adzsna, típus, Szahaszrára ---
     A negyedik érték (Szahaszrára) nem szerepel a könyv I. részében:
     a chakrium.com kalkulátorából visszafejtve, ezért külön jelöljük. */
  intellectual: {
    1: [64, 35, 'Harmonikus, művészi', 65], 2: [21, 65, 'Diszkrét', 72],
    3: [21, 65, 'Diszkrét', 72], 4: [93, 82, 'Szuperproduktív', 56],
    5: [43, 41, 'Harmonikus, művészi', 51], 6: [0, 99, 'Diszkrét', 100],
    7: [57, 88, 'Produktív, gondolkodó', 66], 8: [7, 41, 'Alkalmazott, gondolkodó', 67],
    9: [29, 35, 'Alkalmazott, kevert', 53], 10: [86, 35, 'Harmonikus, művészi', 76],
    11: [29, 82, 'Harmonikus, gondolkodó', 77], 12: [86, 41, 'Harmonikus, művészi', 73],
    13: [14, 71, 'Diszkrét', 79], 14: [50, 59, 'Produktív, kevert', 55],
    15: [78, 65, 'Produktív, művészi', 57], 16: [93, 24, 'Analóg', 85],
    17: [84, 71, 'Produktív, művészi', 57], 18: [29, 41, 'Alkalmazott, kevert', 56],
    19: [26, 71, 'Harmonikus, gondolkodó', 73], 20: [99, 82, 'Szuperproduktív', 59],
    21: [7, 76, 'Diszkrét', 85], 22: [14, 35, 'Alkalmazott, gondolkodó', 61],
    23: [50, 65, 'Produktív, kevert', 58], 24: [26, 18, 'Alkalmazott, kevert', 54],
    25: [29, 88, 'Harmonikus, gondolkodó', 80], 26: [93, 59, 'Produktív, művészi', 67],
    27: [57, 82, 'Produktív, gondolkodó', 63], 28: [29, 29, 'Alkalmazott, kevert', 50],
    29: [29, 88, 'Harmonikus, gondolkodó', 80], 30: [71, 47, 'Harmonikus, művészi', 62],
    31: [7, 35, 'Alkalmazott, gondolkodó', 64], 32: [64, 59, 'Produktív, kevert', 53],
    33: [29, 82, 'Harmonikus, gondolkodó', 77]
  },

  sahasraraNote: 'A koronacsakra értéke nem szerepel az alapkönyvben — online ' +
    'kalkulátorból visszafejtve került ide, ezért kevésbé megbízható, mint a többi hat.',

  disclaimer: 'Ez a szakasz NEM azonos a tudományos kronobiológiával, csak a nevük ' +
    'egyezik. A rendszer a 23/28/33 napos bioritmus-elméletre épül, amelyet a ' +
    'tudomány cáfolt, a százalékokat adó táblázat pedig önkényes hozzárendelés, ' +
    'nem levezetett érték. Kulturális-önismereti rendszerként érdemes nézni. ' +
    'A valódi, mérhető belső órád a „Belső órád" szekcióban található.'
};
