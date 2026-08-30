/*
 * eastern-deep.js — a keleti szekciók mélyítésének szövegei
 * Nagy szerencseoszlopok (Da Yun), ágkapcsolatok a saját pillérek közt,
 * védikus al-időszak (antardasha), jógák, kilenc csillag ki.
 *
 * Sima script (nem ES modul). Betöltés: eastern-ext.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.easternDeep = {

  /* ---------------- Da Yun — nagy szerencseoszlopok ---------------- */

  dayun: {
    intro: 'A Ba Zi rendszer az életutat tízéves „szerencseoszlopokra" osztja: minden évtizednek saját égi törzse és földi ága van, amely a születési képleteddel együtt hat. Az oszlop nem sorsot ír elő — azt mutatja, milyen elem-időjárás uralkodik az adott évtizedben.',
    forward: 'A pillérek nálad előre haladnak (yang évben született férfi, illetve yin évben született nő a hónappillértől előrefelé lépked).',
    backward: 'A pillérek nálad visszafelé haladnak (yin évben született férfi, illetve yang évben született nő a hónappillértől visszafelé lépked).',
    noGender: 'A szerencseoszlopok irányát a hagyomány a születési év yin-yang jellegéből ÉS a nemből együtt vezeti le — add meg a nemet az űrlapon, és kiszámoljuk a tízéves ciklusaidat is.',
    favorable: 'kedvező elemű évtized: a képleted számára támogató energia uralkodik — az ilyen szakaszokban könnyebben mennek a dolgok.',
    unfavorable: 'a Nap Uradat terhelő elemű évtized: nem rossz, hanem munkásabb szakasz — ilyenkor a tudatosság pótolja, amit az elem-időjárás nem ad ingyen.',
    neutral: 'semleges elemű évtized: se nem emel, se nem terhel különösebben — az számít, mit kezdesz vele.',
    note: 'A kezdőéletkor a születés és a legközelebbi szoláris hónapkezdet (jié) távolságából adódik: három nap = egy év. A hagyomány a váltásokat nem éles határnak, hanem fokozatos átmenetnek tekinti.'
  },

  /* ---------------- ágkapcsolatok a saját pillérek közt ---------------- */

  branchRelations: {
    intro: 'A négy pillér földi ágai egymással is kapcsolatban állnak: a harmóniák belső összhangot, az ütközések belső feszültséget jeleznek az érintett életterületek (pillérek) között.',
    liuhe: 'Hat-harmónia (六合): a két ág vonzza és támogatja egymást — az érintett pillérek életterületei természetes szövetségben állnak nálad.',
    sanhe: 'Hármas harmónia (三合): az ágak ugyanannak az elem-szövetségnek a tagjai — erős, közös irányba húzó belső áramlat.',
    chong: 'Ütközés (沖): a két ág szemben áll — az érintett pillérek életterületei közt visszatérő belső feszültség, ide-oda rángó dinamika lehet. Tudatosítva ez hajtóerő.',
    pillarNames: { year: 'év (ősök, gyerekkor)', month: 'hónap (szülők, karrier)', day: 'nap (én és a társ)', hour: 'óra (gyerekek, időskor)' },
    none: 'A pilléreid ágai között nincs kiemelt harmónia vagy ütközés — a képleted e tekintetben csendes, kiegyensúlyozott.'
  },

  /* ---------------- védikus al-időszak ---------------- */

  antardashaIntro: 'A mahadasán belül al-időszakok (antardasa/bhukti) futnak: a nagy időszak urának „vendégei" sorban átveszik a hangolást. A gyakorlatban a mahadasa adja az évtized témáját, az antardasa a hónapok-évek színezetét.',

  /* ---------------- védikus jógák ---------------- */

  yogas: {
    intro: 'A jóga a védikus asztrológiában bolygók kitüntetett együttállása vagy helyzete — a hagyomány több száz jógát ismer, itt a legismertebbeket ellenőrizzük a sziderikus képletedben.',
    gajakesari: { name: 'Gadzsakeszári jóga', text: 'A Jupiter szöglethelyzetben (1., 4., 7. vagy 10. jegy) áll a Holdadtól: a hagyomány szerint bölcsességet, jó hírnevet és védettséget adó, szerencsés jóga — az „elefánt és oroszlán" ereje.' },
    budhaAditya: { name: 'Budha-Áditja jóga', text: 'A Nap és a Merkúr ugyanabban a jegyben áll: éles értelem, jó kifejezőkészség és ügyes hivatali-szellemi érvényesülés jógája.' },
    chandraMangala: { name: 'Csandra-Mangala jóga', text: 'A Hold és a Mars kapcsolatban áll (azonos vagy szemközti jegy): vállalkozó szellem és anyagi életrevalóság — az érzelem és a tetterő összefog.' },
    kemadruma: { name: 'Kemadruma jóga', text: 'A Holdad „magányos": sem mellette, sem a két szomszédos jegyben nem áll bolygó. A hagyomány szerint érzelmi hullámzásra és magány-érzésre hajlamosít — modern olvasatban: a belső életed önjáró, tudatos kapcsolódást kér. A legtöbb forrás szerint más jógák jelenléte enyhíti.' },
    none: 'A vizsgált klasszikus jógák közül egyik sem áll fenn a képletedben — ez a leggyakoribb eset, a képlet erejét ilyenkor a bolygók egyedi helyzetei adják.'
  },

  grahaIntro: 'A kilenc graha (a hét klasszikus bolygó + a holdcsomópontok: Ráhu és Ketu) sziderikus helyzete — a védikus számítások ezekre épülnek.',

  /* ---------------- kilenc csillag ki (japán) ---------------- */

  nineStarKi: {
    intro: 'A kilenc csillag ki (九星気学) a japán hagyomány fő születési rendszere: az év (február 4-i határral) egy kilencéves ciklus egyik „csillagát" adja — ez a honmeisei, az alaptermészeted csillaga.',
    stars: {
      1: { name: '1 – Fehér Víz (Ippaku)', text: 'A mély víz csillaga: alkalmazkodó, kitartó, befelé élő természet. Nehéz helyzetekben is megtalálja az utat — ahogy a víz a rést. Ereje a csendes állhatatosság, tanulnivalója a nyílt önkifejezés.' },
      2: { name: '2 – Fekete Föld (Jikoku)', text: 'A tápláló föld csillaga: gondoskodó, szolgálatkész, közösségépítő. A háttérből tart össze mindent — ereje a megbízhatóság, tanulnivalója a saját igények kimondása.' },
      3: { name: '3 – Zöld Fa (Sanpeki)', text: 'A tavaszi mennydörgés csillaga: lendületes, úttörő, hirtelen. Elsőként indul el — ereje a kezdeményezés, tanulnivalója a befejezés és a türelem.' },
      4: { name: '4 – Zöld Fa (Shiroku)', text: 'A szél csillaga: szelíd, közvetítő, messzire jutó. Kapcsolatokban és utazásban erős — ereje a rugalmas terjeszkedés, tanulnivalója az állhatatosság.' },
      5: { name: '5 – Sárga Föld (Goō)', text: 'A középpont csillaga: erős akaratú, központi szerepre születő természet — köré rendeződnek a dolgok. Nagy mélypontokra nagy felívelések felelnek; ereje a hatás, tanulnivalója a mérték.' },
      6: { name: '6 – Fehér Fém (Roppaku)', text: 'Az ég csillaga: elvhű, méltóságteljes, vezetésre termett. Természetes tekintély — ereje a rend és a felelősség, tanulnivalója a lazítás és az elfogadás.' },
      7: { name: '7 – Vörös Fém (Shichiseki)', text: 'A tó csillaga: társasági, szellemes, élvezetekre fogékony. Könnyen old fel hangulatot — ereje a báj és a beszéd, tanulnivalója a mélység és a kitartás.' },
      8: { name: '8 – Fehér Föld (Happaku)', text: 'A hegy csillaga: szilárd, hallgatag, nagy belső tartalékú. Lassan, de visszafordíthatatlanul változik — ereje a stabilitás és az örökség, tanulnivalója a nyitás.' },
      9: { name: '9 – Bíbor Tűz (Kyūshi)', text: 'A tűz csillaga: ragyogó, szenvedélyes, látható. Vonzza a figyelmet — ereje a lelkesítés és a világosság, tanulnivalója a kitartás, amikor kialszik a rivaldafény.' }
    }
  }
};
