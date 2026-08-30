/*
 * chrono-deep.js — a kronobiológiai kiértékelés szövegei
 * Két rész: (1) a születési fényprofil értelmezése a profilban,
 * (2) a belső óra mérésének összegzett kiértékelése a mérőeszközben.
 * Minden megállapítás mellé odatesszük a levezetését is, hogy a
 * kiértékelés valóban értelmezhető legyen.
 *
 * Sima script (nem ES modul). Betöltés: chrono.js (data) után.
 */

window.HDATA = window.HDATA || {};

/* A ХВД-csakraanalízis kiértékelése — a rendszer belső logikája szerint:
   a 40–60% a kívánatos sáv, a magas érték kezelendő TÖBBLET, az alacsony
   táplálandó hiány. */
window.HDATA.hvdDeep = {
  intro: 'Összegzés a rendszer (Bekenyova-féle hronálvektor-diagnosztika) saját értelmezési skálája szerint: 40% alatt „gyenge potenciál", 40–60% a normál-ideális sáv, 60% felett „túlzott potenciál" — a magas érték tehát nem „jó pont", hanem kezelendő többlet, az alacsony pedig táplálandó terület:',
  excess: {
    muladhara: 'a túlzott gyökércsakra a könyv szerint tekintélyelvű, fáradhatatlan típust jelöl, aki rendszeres fizikai levezetés nélkül feszültté, agresszióra hajlamossá válik — a mozgás nála nem hobbi, hanem karbantartás',
    szvadhisthana: 'a túlműködő szakrális csakra túlfűtött vágy- és élménykeresést jelez — a mérték és a jelenlét a kezelése',
    manipura: 'a túlműködő napfonat túlpörgő akaratot, kontrolligényt jelez — a delegálás és az elengedés a kezelése',
    anahata: 'a túlműködő szívcsakra önfeladó, határok nélküli adást jelez — az egészséges önzés a kezelése',
    visuddha: 'a túlműködő torokcsakra túlbeszélést, a hallgatás nehézségét jelzi — a figyelő csend a kezelése',
    adzsna: 'a túlműködő homlokcsakra túlgondolást, rágódást jelez — a cselekvés és a testbe térés a kezelése',
    szahaszrara: 'a túlműködő koronacsakra elszakadást jelez a földi gyakorlattól — a hétköznapok megbecsülése a kezelése'
  },
  deficit: {
    muladhara: 'a gyenge gyökércsakra a földelés, a testi-anyagi stabilitás hiányát jelzi — rendszeres testmozgás, kézzelfogható rutinok táplálják',
    szvadhisthana: 'a gyenge szakrális csakra az örömképesség megkopását jelzi — játék, érzéki élmények, alkotás táplálja',
    manipura: 'a gyenge napfonat a határhúzás és az önérvényesítés nehézségét jelzi — kis, kimondott nemek táplálják',
    anahata: 'a gyenge szívcsakra a kapcsolódás óvatosságát jelzi — az adás-kapás apró, biztonságos gyakorlatai táplálják',
    visuddha: 'a gyenge torokcsakra a kimondás nehézségét jelzi — a saját hang keresése, írás, éneklés táplálja',
    adzsna: 'a gyenge homlokcsakra az intuíció elhanyagolását jelzi — csend, megérzés-napló, reflexió táplálja',
    szahaszrara: 'a gyenge koronacsakra a tágabb értelem-kapcsolat hiányérzetét jelzi — természet, elmélyülés, rácsodálkozás táplálja'
  },
  upperTilt: 'A felső (szellemi) csakráid összességében erősebbek az alsóknál: a rendszer olvasatában „fentről lefelé" élsz — a gondolat és a jelentés az anyanyelved, a megvalósítás és a testi jelenlét a gyakorlófeladatod.',
  lowerTilt: 'Az alsó (gyakorlati) csakráid összességében erősebbek a felsőknél: a rendszer olvasatában „lentről felfelé" élsz — a cselekvés és a kézzelfoghatóság az anyanyelved, a távlat és az elcsendesedés a gyakorlófeladatod.',
  balancedTilt: 'A felső és alsó csakráid egyensúlyban vannak: a rendszer olvasatában a gondolat és a cselekvés között jó az átjárásod — ez a szerkezet legstabilabb mintázata.',
  allNormal: 'Minden csakrád a normál sávban van: a rendszer szerint kiegyensúlyozott, karbantartást nem igénylő szerkezettel születtél — ritka mintázat.',
  disclaimer: 'Ez az összegzés a ХВД-rendszer saját szabályait követi, tudományos érvényessége nincs — önismereti kérdéslistának érdemes olvasni, nem diagnózisnak.'
};

window.HDATA.chronoDeep = {

  /* ---------------- a születési fényprofil kiértékelése ---------------- */

  birth: {
    intro: 'Az alábbi kiértékelés kizárólag a fenti tényadatokból (nappalhossz, fényirány, évszak) indul ki, és csak azt mondja ki, amit a kutatások az ilyen adatokkal rendelkező emberek CSOPORTJÁRÓL találtak. Egyéni jóslat nem vezethető le belőle — arra a lenti mérés való.',
    photoLong: 'Hosszú nappalok idején születtél (a nappal jóval 12 óra fölött volt): a nyári félév szülöttei közé tartozol. A születési évszak és a kronotípus kapcsolatát vizsgáló kutatások (Natale és mtsai; Mongrain és mtsai) szerint a tavasszal-nyáron születettek csoportja átlagosan pár perccel KÉSŐBBI kronotípus felé tolódik.',
    photoShort: 'Rövid nappalok idején születtél (a nappal jóval 12 óra alatt volt): a téli félév szülöttei közé tartozol. A születési évszakot vizsgáló kutatások szerint az ősszel-télen születettek csoportja átlagosan pár perccel KORÁBBI kronotípus felé tolódik.',
    photoMid: 'Napéjegyenlőség környékén születtél (a nappal 12 óra körül volt): a fotoperiódus szempontjából köztes csoportba tartozol, amelyre a születési évszak szerinti eltolódások a legkevésbé jellemzőek.',
    trendUp: 'Az, hogy a nappalok éppen hosszabbodtak, azt jelenti: az első heteidben napról napra több fény érte a szemed. Állatmodellekben az ilyen „tavaszi" fényminta a belső óra fénykövetését hangolja — embernél ezt meggyőzően kimutatni eddig nem sikerült.',
    trendDown: 'Az, hogy a nappalok éppen rövidültek, azt jelenti: az első heteidben napról napra kevesebb fény érte a szemed. Állatmodellekben az ilyen „őszi" fényminta óvatosabb, késleltetettebb fénykövetést hangol — embernél ezt meggyőzően kimutatni eddig nem sikerült.',
    effectSize: 'A hatásméret a lényeg: a legnagyobb humán vizsgálatokban a születési évszak szerinti csoportkülönbség a kronotípusban legfeljebb 15–18 perc. Ez azt jelenti, hogy a te tényleges belső órádról a születési dátumod gyakorlatilag semmit nem árul el — a csoportstatisztika nem egyéni diagnózis.',
    closing: 'Ezért a valódi kiértékeléshez a lenti „Belső órád" mérőeszközt használd: az a TÉNYLEGES alvásidődből számol, és az az eredmény már rád vonatkozik, nem a csoportodra.'
  },

  /* ---------------- a mérőeszköz összegzett kiértékelése ---------------- */

  tool: {
    heading: 'Összegzett kiértékelés',

    howToRead: 'Hogyan olvasd: a kronotípus mérőszáma az MSFsc — a szabadnapi alvásod középpontja, alváshiányra korrigálva (pl. a 04:30 azt jelenti, hogy amikor senki nem szól bele, az alvásod közepe hajnali fél ötre esik). A percentilis azt mutatja, a korosztályod hány százaléka korábbi nálad. A szociális jetlag a munkanapi és szabadnapi alvásközép különbsége — ennyivel él a belső órád „más időzónában" hétköznap. A kiértékelés kizárólag ezekből a mért értékekből áll össze; a születési adataidnak nincs benne szerepe.',

    classes: {
      korai: 'A mért adataid alapján KORAI (reggeli) kronotípus vagy: a belső órád a korosztályod nagy részénél előrébb jár. Ez azt jelenti, hogy a szellemi csúcsod délelőttre esik, az estéid viszont hamar kifogynak — a korai típus a reggeli kötelezettségekkel jól, a késői társasági élettel nehezebben barátkozik.',
      atlagos: 'A mért adataid alapján KÖZTES kronotípus vagy: a belső órád a korosztályod középmezőnyében jár. Ez a legrugalmasabb helyzet — mindkét irányba van mozgástered, és a szokásos munkarendek nagyjából a ritmusodra vannak szabva.',
      kesoi: 'A mért adataid alapján KÉSŐI (esti) kronotípus vagy: a belső órád a korosztályod nagy részénél hátrébb jár. Ez nem lustaság és nem szokás kérdése, hanem mérhető élettani beállítás — a korai kezdésű munkarend számodra tartós alváshiányt termel, a teljesítménycsúcsod délutánra-estére esik.'
    },

    consistent: 'A kérdőíves preferenciád (rMEQ) és a tényleges alvásidőd (MCTQ) ugyanazt mutatja: stabil, jól beállt kronotípusod van, és az életed nagyjából a belső órád szerint jár. Ez a legjobb kiindulóhelyzet — a lenti fénytanácsokkal finomhangolni tudsz.',
    inconsistent: 'A kérdőíves preferenciád (%A%) és a tényleges alvásod (%B%) NEM ugyanazt mutatja. Ez az eltérés tipikusan azt jelzi, hogy a mindennapjaidat külső kényszer (munkarend, család, szokások) időzíti, nem a belső órád — a preferenciád az, amit a tested szeretne, az alvásidőd az, amit az életed enged. Érdemes a kettőt közelíteni egymáshoz.',

    sjl: {
      ok: 'A szociális jetlaged alacsony (1 óra alatt): a hétköznapi és a hétvégi életed nagyjából ugyanabban az „időzónában" zajlik. Ezt tartsd meg — ez a cirkadián egészség egyik legjobb mutatója.',
      moderate: 'A szociális jetlaged mérsékelt (1–2 óra): hétköznap és hétvégén érezhetően más fázisban élsz. Ekkora eltérésnél már kimutatható a fáradékonyság és a hétfői mélypont — a legtöbbet a hétvégi kelési idő kordában tartásával nyerheted.',
      severe: 'A szociális jetlaged magas (2 óra felett): a belső órád hétről hétre oda-vissza utazik két „időzóna" közt. A kutatások ezt a szintet már rosszabb közérzettel, anyagcsere- és hangulati mutatókkal hozzák összefüggésbe — ez a kiértékelés legfontosabb teendője: közelítsd a hétköznapi és hétvégi alvásidőd.'
    },

    debt: 'A szabadnapi többletalvásod (%H% óra) alváshiányra utal: hétköznap kevesebbet alszol, mint amennyit a szervezeted kér, és hétvégén törleszted. A törlesztés működik, de nem ingyen — az adósság felhalmozása közben a nappali teljesítmény és a hangulat sínyli meg.',

    season: {
      intro: 'Érdekességként összevetettük a mért kronotípusodat a születési évszakoddal (%S%): a csoportstatisztika szerint az ilyenkor születettek átlaga icipicit a %D% kronotípus felé tolódik.',
      match: 'Nálad a mérés iránya egybeesik ezzel a csoporttendenciával — de ne feledd: az egybeesés fő oka szinte biztosan nem a születési évszak, hanem az életmódod és a genetikád.',
      mismatch: 'Nálad a mérés NEM ezt az irányt mutatja — remek példa arra, miért nem lehet a születési dátumból egyéni kronotípust jósolni: a te valós, mért adatod felülírja a csoportstatisztikát.',
      neutral: 'A te mért értéked a középmezőnyben van, így ez az apró csoporthatás nálad se pro, se kontra nem látszik.'
    },

    goal: {
      fits: 'A kitűzött célod (%G%) összhangban van a mért kronotípusoddal — a lenti fény- és időzítési tanácsokkal reálisan elérhető.',
      hard: 'A kitűzött célod (%G%) a mért kronotípusoddal szemben megy: nem lehetetlen, de tudd, hogy a biológiád ellen dolgozol — számíts rá, hogy folyamatos karbantartást igényel, és csak fokozatosan, 15–20 perces lépésekben megy.',
      names: { earlier: 'korábbra hozás', later: 'későbbre tolás', stabilize: 'stabilizálás' }
    }
  }
};
