/* Horoszkóp – kronobiológiai mag
   Publikált modellekre épül, nem saját becslésre:
   - Process S: Borbély 1982 / Daan–Beersma–Borbély 1984 (τ_r = 18,2 h, τ_d = 4,2 h)
   - Process C (éberség): Åkerstedt–Folkard háromfolyamat-modell kétharmonikusos alakja
   - rMEQ: Adan & Almirall 1991 (a MEQ 1., 7., 10., 18., 19. tétele)
   - MCTQ / MSFsc: Roenneberg és mtsai; SJL: Wittmann és mtsai 2006
   - Fázismarkerek: CBTmin ≈ ébredés − 3 h; DLMO ≈ CBTmin − 7 h
   - Fény-PRC: Khalsa és mtsai 2003 (aszimmetrikus: −3,6 h késés / +2,0 h sietés)
   Részletek: docs/15, docs/16, docs/17 */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};
  var CH = HCORE.chrono = {};

  /* ================= idősegédek ================= */

  function norm24(h) { return ((h % 24) + 24) % 24; }

  function fmtHour(h) {
    h = norm24(h);
    var hh = Math.floor(h), mm = Math.round((h - hh) * 60);
    if (mm === 60) { mm = 0; hh = (hh + 1) % 24; }
    return (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
  }

  /** "23:30" -> 23.5 */
  function parseHour(s) {
    if (typeof s === 'number') return s;
    var m = /^(\d{1,2}):(\d{2})$/.exec(String(s || '').trim());
    return m ? (+m[1]) + (+m[2]) / 60 : null;
  }

  /** Körkörös különbség: a-tól b-ig előre haladva hány óra. */
  function forwardDiff(a, b) { return norm24(b - a); }

  /** Előjeles, legrövidebb különbség (-12 .. +12). */
  function signedDiff(a, b) {
    var d = b - a;
    while (d > 12) d -= 24;
    while (d < -12) d += 24;
    return d;
  }

  CH.norm24 = norm24; CH.fmtHour = fmtHour; CH.parseHour = parseHour;
  CH.signedDiff = signedDiff;

  /* ================= Process S – homeosztatikus alvásnyomás ================= */

  var TAU_RISE = 18.2;      // h – ébrenléti emelkedés időállandója (DBB 1984)
  var TAU_DECAY = 4.2;      // h – alvás alatti lecsengés időállandója
  var S_ASYMPTOTE = 1.0;    // normalizált felső aszimptota

  /** Analitikus léptetés: tetszőleges lépésköznél pontos és stabil. */
  function stepS(S, dt, asleep) {
    return asleep
      ? S * Math.exp(-dt / TAU_DECAY)
      : S_ASYMPTOTE + (S - S_ASYMPTOTE) * Math.exp(-dt / TAU_RISE);
  }
  CH.stepS = stepS;

  /* ================= Process C – cirkadián moduláció ================= */

  var OMEGA = 2 * Math.PI / 24;

  /**
   * Cirkadián ÉBRESZTŐ jel.
   *
   * Fontos megkülönböztetés: a Daan–Beersma–Borbély 1984 ötharmonikusos C-je
   * az *alvási hajlam* küszöbmodulációja — alvásidőzítés előrejelzésére való.
   * Az éberséggörbéhez az Åkerstedt–Folkard háromfolyamat-modelljének
   * kétharmonikusos alakja a megfelelő: egy 24 órás alapkomponens, plusz egy
   * 12 órás felharmonikus, amely a kora délutáni holtpontot állítja elő.
   *
   * A fázisokat az egyén CBTmin-jéhez horgonyozzuk, hogy a görbe a saját
   * belső idejéhez igazodjon:
   *   - a 24 órás komponens csúcsa CBTmin + 12,3 óra,
   *   - a 12 órás komponens völgye CBTmin + 10,5 óra.
   *
   * A 12 órás komponens amplitúdóját (0,50) úgy hangoltuk, hogy a teljes
   * éberséggörbe a mérésekből ismert mintázatot adja vissza: délelőtti csúcs
   * ~10:30, kora délutáni holtpont ~14:15, esti csúcs ~19:15 (átlagos alvónál).
   * Ez illesztett érték — a szakirodalom is jelzi, hogy a délutáni holtpont
   * csak részben cirkadián eredetű (étkezés és testhelyzet is hozzájárul).
   */
  var C_A1 = 1.00, C_A2 = 0.50;
  var C_PHI1 = 12.3, C_PHI2 = 4.5;

  function processC(hour, cbtMin) {
    return C_A1 * Math.cos(OMEGA * (hour - (cbtMin + C_PHI1))) +
      C_A2 * Math.cos(2 * OMEGA * (hour - (cbtMin + C_PHI2)));
  }
  CH.processC = processC;

  var C_MIN = -1.50, C_MAX = 1.50;    // a fenti amplitúdókból adódó elvi szélsőértékek

  /* ================= éberséggörbe ================= */

  /**
   * Napi éberséggörbe a két-folyamat modellből, beállt (steady state) állapotra.
   * opts: { sleepOnset, wakeTime, cbtMin } – decimális órában
   */
  function alertnessCurve(opts) {
    var onset = norm24(opts.sleepOnset);
    var wake = norm24(opts.wakeTime);
    var cbt = norm24(opts.cbtMin);
    var dt = 0.25;
    var sleepLen = forwardDiff(onset, wake);

    function asleepAt(h) { return forwardDiff(onset, norm24(h)) < sleepLen; }

    // beállás: hat nap előfuttatás, hogy S ne a kezdőértéktől függjön
    var S = 0.5;
    for (var day = 0; day < 6; day++) {
      for (var t = 0; t < 24; t += dt) S = stepS(S, dt, asleepAt(t));
    }

    var pts = [];
    for (var h = 0; h <= 24; h += dt) {
      var sleeping = asleepAt(h);
      var c = processC(h, cbt);
      var cNorm = (c - C_MIN) / (C_MAX - C_MIN);            // 0..1
      // a cirkadián jel dominál, a felgyűlt alvásnyomás rontja az éberséget
      var raw = 0.62 * cNorm + 0.38 * (1 - S);
      pts.push({
        hour: h, S: S, C: c, asleep: sleeping,
        value: Math.max(0, Math.min(100, raw * 100))
      });
      S = stepS(S, dt, sleeping);
    }
    return {
      points: pts, sleepOnset: onset, wakeTime: wake, cbtMin: cbt,
      sleepLength: sleepLen
    };
  }
  CH.alertnessCurve = alertnessCurve;

  /* ================= fázismarkerek ================= */

  /**
   * Belső fázis becslése a szokásos (szabadnapi) alvásidőkből.
   * Csak beállt, szabályos ritmusnál érvényes – ezt jelezni kell.
   */
  function phaseMarkers(sleepOnsetFree, wakeFree) {
    var cbt = norm24(wakeFree - 3);            // CBTmin ≈ ébredés − 3 h
    var dlmo = norm24(cbt - 7);                // DLMO ≈ CBTmin − 7 h
    return {
      cbtMin: cbt, cbtMinText: fmtHour(cbt),
      dlmo: dlmo, dlmoText: fmtHour(dlmo),
      // a legnehezebb elalvási sáv közvetlenül a DLMO előtt
      wakeMaintenance: [norm24(dlmo - 3), dlmo],
      wakeMaintenanceText: fmtHour(norm24(dlmo - 3)) + '–' + fmtHour(dlmo),
      // PRC: a CBTmin utáni fény siettet, az előtte lévő késleltet
      advanceWindow: [cbt, norm24(cbt + 4)],
      advanceWindowText: fmtHour(cbt) + '–' + fmtHour(norm24(cbt + 4)),
      delayWindow: [norm24(cbt - 6), cbt],
      delayWindowText: fmtHour(norm24(cbt - 6)) + '–' + fmtHour(cbt),
      // a testhőmérséklet és az izomerő maximuma ~13 órával a CBTmin után
      physicalPeak: norm24(cbt + 13),
      physicalPeakText: fmtHour(norm24(cbt + 13)),
      // a görbe tényleges kora délutáni völgye
      afternoonDip: norm24(cbt + 9.75),
      afternoonDipText: fmtHour(norm24(cbt + 9.75)),
      // a délelőtti éberségi csúcs
      morningPeak: norm24(cbt + 6),
      morningPeakText: fmtHour(norm24(cbt + 6)),
      sleepOnset: norm24(sleepOnsetFree),
      wake: norm24(wakeFree)
    };
  }
  CH.phaseMarkers = phaseMarkers;

  /* ================= rMEQ (Adan & Almirall 1991) ================= */

  var RMEQ_ITEMS = [
    {
      meqItem: 1,
      q: 'Ha teljesen szabadon dönthetnél a napodról, hány órakor kelnél fel?',
      options: [
        { label: '05:00–06:30', score: 5 },
        { label: '06:30–07:45', score: 4 },
        { label: '07:45–09:45', score: 3 },
        { label: '09:45–11:00', score: 2 },
        { label: '11:00–12:00', score: 1 }
      ]
    },
    {
      meqItem: 7,
      q: 'Az ébredés utáni első fél órában mennyire érzed magad frissnek?',
      options: [
        { label: 'Egyáltalán nem', score: 1 },
        { label: 'Alig', score: 2 },
        { label: 'Elég frissnek', score: 3 },
        { label: 'Nagyon frissnek', score: 4 }
      ]
    },
    {
      meqItem: 10,
      q: 'Este mikor érzed, hogy elálmosodsz, és aludni szeretnél?',
      options: [
        { label: '20:00–21:00', score: 5 },
        { label: '21:00–22:15', score: 4 },
        { label: '22:15–00:45', score: 3 },
        { label: '00:45–02:00', score: 2 },
        { label: '02:00–03:00', score: 1 }
      ]
    },
    {
      meqItem: 18,
      q: 'A nap melyik szakaszában érzed magad a legjobb formában?',
      options: [
        { label: '05:00–08:00', score: 5 },
        { label: '08:00–10:00', score: 4 },
        { label: '10:00–17:00', score: 3 },
        { label: '17:00–22:00', score: 2 },
        { label: '22:00–05:00', score: 1 }
      ]
    },
    {
      meqItem: 19,
      q: 'Minek tartod magad?',
      options: [
        { label: 'Határozottan reggeli típusnak', score: 6 },
        { label: 'Inkább reggeli típusnak', score: 4 },
        { label: 'Inkább esti típusnak', score: 2 },
        { label: 'Határozottan esti típusnak', score: 0 }
      ]
    }
  ];
  CH.RMEQ_ITEMS = RMEQ_ITEMS;

  var RMEQ_CATEGORIES = [
    { max: 7, key: 'hatarozottan_esti', name: 'Határozottan esti típus', broad: 'kesoi' },
    { max: 11, key: 'mersekelten_esti', name: 'Mérsékelten esti típus', broad: 'kesoi' },
    { max: 17, key: 'koztes', name: 'Köztes típus', broad: 'kozepes' },
    { max: 21, key: 'mersekelten_reggeli', name: 'Mérsékelten reggeli típus', broad: 'korai' },
    { max: 25, key: 'hatarozottan_reggeli', name: 'Határozottan reggeli típus', broad: 'korai' }
  ];

  function scoreRMEQ(scores) {
    var sum = 0, answered = 0;
    for (var i = 0; i < RMEQ_ITEMS.length; i++) {
      if (scores[i] != null) { sum += scores[i]; answered++; }
    }
    if (answered < RMEQ_ITEMS.length) {
      return { complete: false, answered: answered, total: RMEQ_ITEMS.length };
    }
    var cat = RMEQ_CATEGORIES[RMEQ_CATEGORIES.length - 1];
    for (var k = 0; k < RMEQ_CATEGORIES.length; k++) {
      if (sum <= RMEQ_CATEGORIES[k].max) { cat = RMEQ_CATEGORIES[k]; break; }
    }
    return {
      complete: true, score: sum, min: 4, max: 25,
      category: cat.name, key: cat.key, broad: cat.broad
    };
  }
  CH.scoreRMEQ = scoreRMEQ;

  /* ================= MCTQ ================= */

  /**
   * MCTQ-számítás. Bemenet decimális órákban:
   *  soW/seW – munkanapi elalvás és ébredés, soF/seF – szabadnapi,
   *  wd – munkanapok száma hetente, alarmF – szabadnapon is ébresztő (bool)
   */
  function computeMCTQ(inp) {
    var soW = norm24(inp.soW), seW = norm24(inp.seW);
    var soF = norm24(inp.soF), seF = norm24(inp.seF);
    var wd = Math.max(0, Math.min(7, inp.wd == null ? 5 : inp.wd));
    var fd = 7 - wd;

    var sdW = forwardDiff(soW, seW);
    var sdF = forwardDiff(soF, seF);
    var msW = norm24(soW + sdW / 2);
    var msF = norm24(soF + sdF / 2);
    var sdWeek = (sdW * wd + sdF * fd) / 7;

    // MSFsc: alváskorrekció csak akkor, ha szabadnapon többet alszik
    var msfSc = msF, corrected = false;
    if (sdF > sdW) { msfSc = norm24(soF + sdWeek / 2); corrected = true; }

    var sjlRel = signedDiff(msW, msF);

    var warnings = [];
    if (inp.alarmF) {
      warnings.push('Szabadnapon is ébresztőórát használsz, ezért a szabadnapi ' +
        'ébredésed levágott: a valódi kronotípusod ennél valószínűleg későbbi. ' +
        'A kanonikus MCTQ-feldolgozás az ilyen eseteket ki is zárja — itt ' +
        'alsó becslésként kezeld az eredményt.');
    }
    if (sdW < 3 || sdF < 3 || sdW > 14 || sdF > 14) {
      warnings.push('A megadott alvásidők szokatlanok — érdemes ellenőrizni őket.');
    }

    return {
      sdW: sdW, sdF: sdF, msW: msW, msF: msF, sdWeek: sdWeek,
      msfSc: msfSc, corrected: corrected,
      msfScText: fmtHour(msfSc), msWText: fmtHour(msW), msFText: fmtHour(msF),
      sdWText: sdW.toFixed(1).replace('.', ',') + ' óra',
      sdFText: sdF.toFixed(1).replace('.', ',') + ' óra',
      sjl: Math.abs(sjlRel), sjlRel: sjlRel,
      sleepDebt: Math.max(0, sdF - sdW),
      soF: soF, seF: seF,
      warnings: warnings
    };
  }
  CH.computeMCTQ = computeMCTQ;

  /* ================= életkori normák =================
     Fischer, Lombardi, Marucci-Wellman & Roenneberg (2017) PLOS ONE,
     N = 53 689 (ATUS).  FIGYELEM: ez nyers hétvégi alvásközép (MSF_We),
     nem alváskorrigált MSFsc, és amerikai minta — relatív viszonyításra
     való, nem abszolút referenciának. */

  var AGE_NORMS = [
    { from: 15, to: 19, all: 4.40, no: 4.33, ferfi: 4.48, sd: 1.98 },
    { from: 20, to: 24, all: 4.41, no: 4.30, ferfi: 4.53, sd: 2.53 },
    { from: 25, to: 29, all: 3.84, no: 3.74, ferfi: 3.93, sd: 2.28 },
    { from: 30, to: 34, all: 3.56, no: 3.42, ferfi: 3.70, sd: 2.10 },
    { from: 35, to: 39, all: 3.37, no: 3.35, ferfi: 3.40, sd: 2.03 },
    { from: 40, to: 44, all: 3.27, no: 3.29, ferfi: 3.25, sd: 2.03 },
    { from: 45, to: 49, all: 3.20, no: 3.25, ferfi: 3.14, sd: 2.01 },
    { from: 50, to: 54, all: 3.12, no: 3.17, ferfi: 3.06, sd: 1.97 },
    { from: 55, to: 59, all: 3.04, no: 3.15, ferfi: 2.92, sd: 1.84 },
    { from: 60, to: 64, all: 2.97, no: 3.08, ferfi: 2.86, sd: 1.73 },
    { from: 65, to: 69, all: 2.93, no: 3.06, ferfi: 2.79, sd: 1.71 },
    { from: 70, to: 74, all: 2.90, no: 3.03, ferfi: 2.74, sd: 1.76 },
    { from: 75, to: 79, all: 2.87, no: 2.87, ferfi: 2.88, sd: 1.68 },
    { from: 80, to: 120, all: 2.83, no: 2.87, ferfi: 2.77, sd: 1.77 }
  ];

  function ageNorm(age, gender) {
    for (var i = 0; i < AGE_NORMS.length; i++) {
      if (age >= AGE_NORMS[i].from && age <= AGE_NORMS[i].to) {
        var n = AGE_NORMS[i];
        var mean = (gender === 'no' || gender === 'ferfi') ? n[gender] : n.all;
        return {
          mean: mean, sd: n.sd, from: n.from, to: n.to,
          meanText: fmtHour(mean)
        };
      }
    }
    return null;
  }
  CH.ageNorm = ageNorm;

  function normalCdf(z) {                       // Abramowitz–Stegun közelítés
    var t = 1 / (1 + 0.2316419 * Math.abs(z));
    var d = 0.3989423 * Math.exp(-z * z / 2);
    var p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 +
      t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  }

  /** Hol áll a felhasználó a saját korcsoportjához képest. */
  function chronoPercentile(msfSc, age, gender) {
    var n = ageNorm(age, gender);
    if (!n) return null;
    var diff = signedDiff(n.mean, msfSc);
    var z = diff / n.sd;
    return {
      percentile: Math.max(1, Math.min(99, Math.round(normalCdf(z) * 100))),
      diffHours: diff, z: z, norm: n, later: diff > 0
    };
  }
  CH.chronoPercentile = chronoPercentile;

  /** Az életkorral együtt mozgó kronotípus – Roenneberg 2004. */
  function ageTrend(age) {
    if (age < 19) {
      return 'A kronotípus a pubertástól kezdve folyamatosan későbbre tolódik — ' +
        'a te korodban ez a késés még tart.';
    }
    if (age <= 22) {
      return 'A kronotípus késése nagyjából 20 éves korban éri el a csúcsát ' +
        '(nőknél ~19,5, férfiaknál ~20,9 év), és utána fordul vissza. ' +
        'Roenneberg szerint épp ez a fordulópont a serdülőkor vége biológiai markere.';
    }
    if (age < 50) {
      return 'A csúcs (kb. 20 éves kor) óta a kronotípusod fokozatosan korábbra ' +
        'tolódik, és ez az élet végéig folytatódik.';
    }
    return 'Az ötvenes évektől a kronotípus tovább tolódik korábbra, és a férfiak ' +
      'és nők közti különbség — amely a felnőttkor nagy részében fennáll — eltűnik.';
  }
  CH.ageTrend = ageTrend;

  /* ================= fény-tanácsok a PRC alapján ================= */

  /**
   * Khalsa és mtsai 2003 alapján: a CBTmin ELŐTTI fény késleltet,
   * az UTÁNI előrehoz. Az aszimmetria miatt a késleltetés (−3,6 h)
   * majdnem kétszerese az előrehozásnak (+2,0 h).
   * goal: 'earlier' | 'later' | 'stabilize'
   */
  function lightAdvice(markers, goal) {
    var out = { goal: goal, seek: [], avoid: [], warnings: [], pace: '' };
    var cbt = markers.cbtMin, wake = markers.wake;

    if (goal === 'earlier') {
      out.seek.push('Erős fény — lehetőleg szabadban — az ébredés utáni első 1–2 órában, ' +
        'de semmiképp sem ' + fmtHour(cbt) + ' előtt.');
      out.avoid.push('Erős fény és képernyő az elalvás előtti 3 órában, tehát nagyjából ' +
        fmtHour(norm24(markers.dlmo - 1)) + ' után.');
      // A hajnali fény csapdája: ha a CBTmin késői órára esik, akkor a szokásos
      // reggeli fényajánlás még a CBTmin ELŐTT érné az illetőt, vagyis a PRC
      // késleltető ágára — ilyenkor a szokásos tanács rontana a helyzeten.
      if (cbt >= 5.5) {
        out.warnings.push('Figyelem: a becsült maghőmérséklet-minimumod ' + fmtHour(cbt) +
          ' körül van. Az ennél korábban kapott erős fény nem előrehozza, hanem ' +
          'KÉSLELTETI a belső órádat — vagyis a „kelj fel hajnalban, menj ki a napra" ' +
          'tanács a te esetedben rontana a helyzeten. A fényt ' + fmtHour(cbt) +
          ' után add meg magadnak, és onnan húzd fokozatosan egyre korábbra.');
      }
      out.pace = 'Reális ütem: napi 20–60 perc elmozdulás. Egy 3 órás eltolódás ' +
        'rendezése így 4–7 nap, nem egy éjszaka.';
    } else if (goal === 'later') {
      out.seek.push('Erős fény késő délután és kora este.');
      out.avoid.push('Kora reggeli erős fény — ébredés után akár napszemüveggel.');
      out.pace = 'A késleltetés könnyebben megy, mint az előrehozás: a belső óra ' +
        'természetes hajlama a késés (a szabadonfutó periódus ~24,2 óra).';
    } else {
      out.seek.push('Napközben minél több természetes fény, lehetőleg minden nap ' +
        'nagyjából ugyanabban az időben.');
      out.avoid.push('Erős esti fény, és a hétvégi „alvási időzóna-váltás".');
      out.pace = 'A ritmus stabilitása fontosabb, mint az abszolút időzítés.';
    }
    return out;
  }
  CH.lightAdvice = lightAdvice;

  /* ================= szociális jetlag ================= */

  function sjlLevel(sjl) {
    if (sjl < 1) return { key: 'elhanyagolhato', name: 'elhanyagolható' };
    if (sjl < 2) return { key: 'enyhe', name: 'enyhe' };
    if (sjl < 3) return { key: 'kozepes', name: 'közepes' };
    return { key: 'jelentos', name: 'jelentős' };
  }
  CH.sjlLevel = sjlLevel;

  /* ================= kronotípus alapértelmezett alvásidők ================= */

  /** Ha nincs MCTQ-adat, a kronotípusból adunk tipikus alvásidőt. */
  var TYPICAL = {
    korai: { onset: 22.0, wake: 6.0 },
    kozepes: { onset: 23.5, wake: 7.5 },
    kesoi: { onset: 1.5, wake: 9.5 }
  };
  CH.typicalSleep = function (broad) { return TYPICAL[broad] || TYPICAL.kozepes; };

})(typeof window !== 'undefined' ? window : globalThis);
