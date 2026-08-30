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
