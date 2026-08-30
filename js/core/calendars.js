/* Horoszkóp – naptár- és számrendszer-réteg
   Minden olyan rendszer, amely a születési dátumból (és néha az időből)
   közvetlenül számolható. A szövegeket a window.HDATA modulok adják. */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};
  var HC = HCORE.cal = {};

  /* ---------- dátum-alapok ---------- */

  /** Julián-napszám egy naptári dátumhoz (helyi polgári nap, délben). */
  function jdn(y, m, d) {
    var a = Math.floor((14 - m) / 12);
    var yy = y + 4800 - a;
    var mm = m + 12 * a - 3;
    return d + Math.floor((153 * mm + 2) / 5) + 365 * yy +
      Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
  }
  HC.jdn = jdn;

  /** A hét napja: 0 = vasárnap. */
  function weekday(y, m, d) {
    return (jdn(y, m, d) + 1) % 7;
  }
  HC.weekday = weekday;

  /** Két [hónap, nap] határ közé esik-e a dátum (évfordulón átnyúlva is). */
  function inRange(m, d, from, to) {
    var v = m * 100 + d, a = from[0] * 100 + from[1], b = to[0] * 100 + to[1];
    return a <= b ? (v >= a && v <= b) : (v >= a || v <= b);
  }
  HC.inRange = inRange;

  /** Dátumsávos listából kikeresi az illeszkedő elemet. */
  function findByRange(list, m, d, fromKey, toKey) {
    fromKey = fromKey || 'from'; toKey = toKey || 'to';
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      if (it.ranges) {                                  // többsávos (egyiptomi)
        for (var j = 0; j < it.ranges.length; j++) {
          if (inRange(m, d, it.ranges[j][0], it.ranges[j][1])) return it;
        }
      } else if (it[fromKey] && it[toKey] && inRange(m, d, it[fromKey], it[toKey])) {
        return it;
      }
    }
    return null;
  }
  HC.findByRange = findByRange;

  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  HC.pad2 = pad2;

  /* ---------- numerológia ---------- */

  function reduceNum(n, keepMaster) {
    while (n > 9) {
      if (keepMaster && (n === 11 || n === 22 || n === 33)) return n;
      var s = 0, t = n;
      while (t > 0) { s += t % 10; t = Math.floor(t / 10); }
      n = s;
    }
    return n;
  }
  HC.reduceNum = reduceNum;

  function digitSum(n) {
    var s = 0; n = Math.abs(n);
    while (n > 0) { s += n % 10; n = Math.floor(n / 10); }
    return s;
  }

  /** Életút-szám: a teljes dátum számjegyeinek redukciója, mesterszámokkal. */
  function lifePath(y, m, d) {
    var parts = [reduceNum(m, true), reduceNum(d, true), reduceNum(digitSum(y), true)];
    var total = parts.reduce(function (a, b) { return a + b; }, 0);
    return reduceNum(total, true);
  }
  HC.lifePath = lifePath;

  /** Ékezetek leválasztása a névszámításhoz. */
  function deaccent(s) {
    var map = { 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ö': 'O', 'Ő': 'O', 'Ú': 'U', 'Ü': 'U', 'Ű': 'U' };
    return (s || '').toUpperCase().replace(/[ÁÉÍÓÖŐÚÜŰ]/g, function (c) { return map[c]; })
      .replace(/[^A-Z]/g, '');
  }
  HC.deaccent = deaccent;

  var VOWELS = 'AEIOUY';

  /** Névből számolt sorsszám / lélekszám / személyiségszám. */
  function nameNumbers(name) {
    var table = (global.HDATA && HDATA.numbers && HDATA.numbers.letterValues) || null;
    function val(ch) {
      if (table && table[ch] != null) return table[ch];
      return ((ch.charCodeAt(0) - 65) % 9) + 1;          // pitagoraszi alapérték
    }
    var clean = deaccent(name);
    if (!clean) return null;
    var all = 0, vow = 0, con = 0;
    for (var i = 0; i < clean.length; i++) {
      var v = val(clean[i]);
      all += v;
      if (VOWELS.indexOf(clean[i]) >= 0) vow += v; else con += v;
    }
    return {
      destiny: reduceNum(all, true),
      soul: reduceNum(vow, true),
      personality: reduceNum(con, true),
      letters: clean.length
    };
  }
  HC.nameNumbers = nameNumbers;

  /** Személyes év a következő születésnapig. */
  function personalYear(m, d, refYear) {
    return reduceNum(reduceNum(m, false) + reduceNum(d, false) + digitSum(refYear), false);
  }
  HC.personalYear = personalYear;

  /* ---------- kiterjesztett bioritmus ----------
     A három klasszikus cikluson túl a bioritmus-irodalom négy másodlagos
     ciklust és összetett mutatókat is számol. Tudományosan egyik sem
     igazolt – hagyományként, nem előrejelzésként érdemes nézni. */

  var CYCLES = [
    { key: 'fizikai', name: 'Fizikai', len: 23, color: '#e05252', primary: true },
    { key: 'erzelmi', name: 'Érzelmi', len: 28, color: '#4a90d9', primary: true },
    { key: 'szellemi', name: 'Szellemi', len: 33, color: '#4caf50', primary: true },
    { key: 'intuicio', name: 'Intuíció', len: 38, color: '#9b59b6', primary: false },
    { key: 'esztetikai', name: 'Esztétikai', len: 43, color: '#e08e45', primary: false },
    { key: 'tudatossag', name: 'Tudatosság', len: 48, color: '#26a69a', primary: false },
    { key: 'spiritualis', name: 'Spirituális', len: 53, color: '#8d6e63', primary: false }
  ];
  HC.CYCLES = CYCLES;

  function cycleValue(days, len) { return Math.sin(2 * Math.PI * days / len); }

  /** Teljes bioritmus-kép: 7 ciklus + összetett pontszámok. */
  function biorhythmFull(birthUTC, refUTC) {
    var days = Math.floor((refUTC - birthUTC) / 86400000);
    var vals = {};
    var list = CYCLES.map(function (c) {
      var v = cycleValue(days, c.len);
      var prev = cycleValue(days - 1, c.len);
      var critical = (v >= 0) !== (prev >= 0) || Math.abs(v) < 0.05;
      vals[c.key] = v;
      return {
        key: c.key, name: c.name, len: c.len, color: c.color, primary: c.primary,
        value: v, percent: Math.round(v * 100),
        phase: critical ? 'critical' : (v > 0 ? 'high' : 'low'),
        critical: critical,
        rising: v > prev
      };
    });

    // összetett mutatók a klasszikus bioritmus-irodalomból
    function comp(a, b) { return Math.round((vals[a] + vals[b]) / 2 * 100); }
    var composites = [
      {
        key: 'eletero', name: 'Életerő', percent: comp('fizikai', 'erzelmi'),
        formula: 'fizikai + érzelmi',
        text: 'A testi állóképesség és az érzelmi töltöttség együttese: mennyi ' +
          'lendülettel bírod ma a napot.'
      },
      {
        key: 'teljesitmeny', name: 'Teljesítmény', percent: comp('fizikai', 'szellemi'),
        formula: 'fizikai + szellemi',
        text: 'Kézügyesség és gondolkodás összhangja — a hagyomány szerint ez ' +
          'kedvez a kitartást és pontosságot igénylő munkának.'
      },
      {
        key: 'bolcsesseg', name: 'Bölcsesség', percent: comp('erzelmi', 'szellemi'),
        formula: 'érzelmi + szellemi',
        text: 'Érzelmi érettség és tiszta fej együtt: döntésekhez, tárgyalásokhoz ' +
          'tartják kedvezőnek.'
      }
    ];

    var avg = Math.round((vals.fizikai + vals.erzelmi + vals.szellemi) / 3 * 100);
    var criticalCount = list.filter(function (x) { return x.primary && x.critical; }).length;

    return {
      days: days, values: list, composites: composites,
      overall: avg, criticalCount: criticalCount,
      // 21 252 nap után mind a három elsődleges ciklus egyszerre indul újra
      cycleRestart: 21252 - (days % 21252)
    };
  }
  HC.biorhythmFull = biorhythmFull;

  /** Görbeadatok a bioritmus-diagramhoz: napi bontás egy adott ablakban. */
  function biorhythmSeries(birthUTC, refUTC, daysBefore, daysAfter) {
    var base = Math.floor((refUTC - birthUTC) / 86400000);
    var series = CYCLES.map(function (c) {
      var pts = [];
      for (var d = -daysBefore; d <= daysAfter; d++) {
        pts.push({ offset: d, value: cycleValue(base + d, c.len) });
      }
      return { key: c.key, name: c.name, color: c.color, primary: c.primary, points: pts };
    });
    return { base: base, from: -daysBefore, to: daysAfter, series: series };
  }
  HC.biorhythmSeries = biorhythmSeries;

  /* ---------- cirkadián napi energiagörbe (tudományos) ----------
     Vázlatos éberséggörbe a dokumentált cirkadián markerek alapján:
     hajnali mélypont, kortizol-ébredési válasz, délelőtti csúcs,
     ebéd utáni holtpont, kora esti testhőmérséklet-csúcs, majd a
     melatonin megindulása (DLMO). A kronotípus a görbét eltolja. */

  var ALERT_ANCHORS = [
    [0, 22], [2, 12], [4.5, 5], [6, 18], [7, 38], [8.5, 62], [10, 84],
    [11.5, 92], [13, 74], [14.5, 58], [16, 76], [17.5, 89], [19, 79],
    [20.5, 62], [21.5, 46], [23, 30], [24, 22]
  ];

  var CHRONO_SHIFT = { korai: -1.5, kozepes: 0, kesoi: 2.0 };

  function interpAnchors(h) {
    var a = ALERT_ANCHORS;
    for (var i = 0; i < a.length - 1; i++) {
      if (h >= a[i][0] && h <= a[i + 1][0]) {
        var t = (h - a[i][0]) / (a[i + 1][0] - a[i][0]);
        var s = (1 - Math.cos(Math.PI * t)) / 2;          // koszinuszos simítás
        return a[i][1] + (a[i + 1][1] - a[i][1]) * s;
      }
    }
    return a[0][1];
  }

  /**
   * Napi éberséggörbe és jelölőpontok a kronotípushoz.
   * chronotype: 'korai' | 'kozepes' | 'kesoi'
   */
  function circadianCurve(chronotype) {
    var shift = CHRONO_SHIFT[chronotype] != null ? CHRONO_SHIFT[chronotype] : 0;
    var points = [];
    for (var q = 0; q <= 96; q++) {                        // negyedórás felbontás
      var h = q / 4;
      var src = ((h - shift) % 24 + 24) % 24;
      points.push({ hour: h, value: interpAnchors(src) });
    }
    function fmt(h) {
      var hh = ((h % 24) + 24) % 24;
      var mm = Math.round((hh - Math.floor(hh)) * 60);
      if (mm === 60) { mm = 0; hh += 1; }
      return pad2(Math.floor(hh)) + ':' + pad2(mm);
    }
    var markers = [
      { hour: 4.5 + shift, label: 'Testhőmérséklet-minimum', text: 'A nap legmélyebb pontja: itt a legrosszabb a reakcióidő és az ítélőképesség.' },
      { hour: 6.5 + shift, label: 'Kortizol-ébredési válasz', text: 'Az ébredés utáni fél órában megugrik a kortizolszint — ez indítja be a napot.' },
      { hour: 11.5 + shift, label: 'Szellemi csúcs', text: 'A koncentrációt és a rövid távú memóriát igénylő munka legjobb sávja.' },
      { hour: 14.5 + shift, label: 'Ebéd utáni holtpont', text: 'Cirkadián eredetű éberségesés, nem csak az ebédtől van. Rövid szunyókálásra vagy rutinfeladatra való.' },
      { hour: 17.5 + shift, label: 'Fizikai csúcs', text: 'A testhőmérséklet és az izomerő maximuma: a sport és az edzés ideális ideje.' },
      { hour: 21.0 + shift, label: 'Melatonin megindulása (DLMO)', text: 'Kb. 2 órával a természetes elalvás előtt indul. Innentől az erős fény késlelteti az elalvást.' }
    ].map(function (m) { m.time = fmt(m.hour); return m; });

    return { shift: shift, points: points, markers: markers, chronotype: chronotype };
  }
  HC.circadianCurve = circadianCurve;

  /** A születés órája melyik cirkadián szakaszra esett. */
  var BIRTH_WINDOWS = [
    {
      from: 0, to: 4, name: 'Éjszakai mélypont',
      text: 'A biológiai éjszaka közepén születtél, amikor a melatoninszint a ' +
        'csúcsán, a testhőmérséklet a mélypontján van. A szervezet ilyenkor a ' +
        'legmélyebb regenerációs fázisban működik.'
    },
    {
      from: 4, to: 7, name: 'Hajnali fordulópont',
      text: 'A cirkadián nap fordulópontján születtél: itt van a testhőmérséklet ' +
        'minimuma, és épp ekkor indul a kortizolszint emelkedése, amely az ' +
        'ébredést készíti elő.'
    },
    {
      from: 7, to: 11, name: 'Délelőtti felfutás',
      text: 'A kortizol-ébredési válasz utáni felfutó szakaszban születtél, ' +
        'amikor az éberség és a szellemi teljesítmény a napi csúcsa felé tart.'
    },
    {
      from: 11, to: 14, name: 'Délelőtti csúcs',
      text: 'A cirkadián éberség napi maximuma körül születtél — ez a nap ' +
        'legkoncentráltabb, legvilágosabb szakasza.'
    },
    {
      from: 14, to: 16, name: 'Kora délutáni holtpont',
      text: 'Az ebéd utáni cirkadián éberségesés idején születtél. Ez a mélyedés ' +
        'valódi belső ritmus, nem pusztán az étkezés következménye.'
    },
    {
      from: 16, to: 20, name: 'Kora esti csúcs',
      text: 'A testhőmérséklet és az izomerő napi maximuma környékén születtél — ' +
        'ez a fizikai teljesítmény legjobb sávja.'
    },
    {
      from: 20, to: 24, name: 'Esti lecsengés',
      text: 'A melatonin megindulásának (DLMO) idején születtél, amikor a ' +
        'szervezet átkapcsol az éjszakai üzemmódra.'
    }
  ];

  function birthCircadianWindow(hour) {
    if (hour == null) return null;
    for (var i = 0; i < BIRTH_WINDOWS.length; i++) {
      if (hour >= BIRTH_WINDOWS[i].from && hour < BIRTH_WINDOWS[i].to) return BIRTH_WINDOWS[i];
    }
    return BIRTH_WINDOWS[0];
  }
  HC.birthCircadianWindow = birthCircadianWindow;

  /** Szociális jetlag: a szabadnapi és munkanapi alvásközép különbsége. */
  function socialJetlag(workMid, freeMid) {
    var d = Math.abs(freeMid - workMid);
    return {
      hours: d,
      level: d < 1 ? 'elhanyagolható' : (d < 2 ? 'enyhe' : (d < 3 ? 'közepes' : 'jelentős'))
    };
  }
  HC.socialJetlag = socialJetlag;

  /* ---------- kínai rendszer ---------- */

  var STEMS = ['Jiǎ', 'Yǐ', 'Bǐng', 'Dīng', 'Wù', 'Jǐ', 'Gēng', 'Xīn', 'Rén', 'Guǐ'];
  var STEM_CN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  var STEM_ELEM = ['fa', 'fa', 'tuz', 'tuz', 'fold', 'fold', 'fem', 'fem', 'viz', 'viz'];
  var BRANCH_CN = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  var BRANCH_ANIMAL = ['patkany', 'bivaly', 'tigris', 'nyul', 'sarkany', 'kigyo',
    'lo', 'kecske', 'majom', 'kakas', 'kutya', 'diszno'];
  var ANIMAL_HU = ['Patkány', 'Bivaly', 'Tigris', 'Nyúl', 'Sárkány', 'Kígyó',
    'Ló', 'Kecske', 'Majom', 'Kakas', 'Kutya', 'Disznó'];
  var ELEM_HU = { fa: 'Fa', tuz: 'Tűz', fold: 'Föld', fem: 'Fém', viz: 'Víz' };

  HC.STEMS = STEMS; HC.BRANCH_ANIMAL = BRANCH_ANIMAL; HC.ANIMAL_HU = ANIMAL_HU;
  HC.ELEM_HU = ELEM_HU;

  /** A kínai holdújév dátuma az adott évben (a HDATA táblából). */
  function chineseNewYear(year) {
    var t = global.HDATA && HDATA.eastern && HDATA.eastern.newYear;
    if (t && t[year]) return t[year];
    return null;
  }

  /** Melyik kínai évhez tartozik a dátum (holdújév szerint). */
  function chineseYearOf(y, m, d) {
    var ny = chineseNewYear(y);
    if (!ny) return y;                                  // táblán kívül: közelítés
    var v = m * 100 + d, n = ny[0] * 100 + ny[1];
    return v < n ? y - 1 : y;
  }
  HC.chineseYearOf = chineseYearOf;

  function stemBranchOfYear(cy) {
    var i = ((cy - 4) % 60 + 60) % 60;
    return { index: i, stem: i % 10, branch: i % 12 };
  }

  /**
   * Négy pillér (Ba Zi). sunLon: a Nap tropikus hosszúsága a születéskor –
   * ebből jön a hónappillér, mert az a szoláris termektől függ.
   */
  function fourPillars(y, m, d, hour, minute, sunLon) {
    hour = hour == null ? 12 : hour;
    var cy = chineseYearOf(y, m, d);
    var yp = stemBranchOfYear(cy);

    // nappillér: folytonos 60-as ciklus; 23:00 után már a következő nap
    var J = jdn(y, m, d);
    if (hour >= 23) J += 1;
    var dIdx = ((J + 49) % 60 + 60) % 60;
    var dayStem = dIdx % 10, dayBranch = dIdx % 12;

    // hónappillér: az ágat a Nap hosszúsága adja (315° = Lìchūn, Tigris hava)
    var mb = 0;
    if (sunLon != null) mb = Math.floor((((sunLon - 315) % 360) + 360) % 360 / 30);
    var monthBranch = (mb + 2) % 12;                     // 0 -> 寅 (index 2)
    var monthStem = (yp.stem * 2 + 2 + mb) % 10;

    // órapillér
    var hourBranch = Math.floor(((hour + 1) % 24) / 2);
    var hourStem = (dayStem * 2 + hourBranch) % 10;

    function pillar(s, b) {
      return {
        stem: STEMS[s], stemCn: STEM_CN[s], element: STEM_ELEM[s],
        elementHu: ELEM_HU[STEM_ELEM[s]],
        yinYang: s % 2 === 0 ? 'Yang' : 'Yin',
        branchCn: BRANCH_CN[b], animal: BRANCH_ANIMAL[b], animalHu: ANIMAL_HU[b],
        label: ELEM_HU[STEM_ELEM[s]] + ' ' + ANIMAL_HU[b],
        cn: STEM_CN[s] + BRANCH_CN[b]
      };
    }

    return {
      chineseYear: cy,
      year: pillar(yp.stem, yp.branch),
      month: pillar(monthStem, monthBranch),
      day: pillar(dayStem, dayBranch),
      hour: pillar(hourStem, hourBranch),
      dayMaster: STEM_ELEM[dayStem],
      dayMasterHu: ELEM_HU[STEM_ELEM[dayStem]],
      dayMasterYinYang: dayStem % 2 === 0 ? 'Yang' : 'Yin',
      newYear: chineseNewYear(y)
    };
  }
  HC.fourPillars = fourPillars;

  /* ---------- Ba Zi elemmerleg ----------
     A Negy Pillér lelke: a ot elem eloszlasa a nyolc irasjegyben.
     Minden pillérnek van egy égi törzse (annak eleme) és egy földi ága
     (az allat rogzitett eleme). A Nap Ura ehhez kepest lesz eros vagy gyenge. */

  var BRANCH_ELEM = {
    patkany: 'viz', bivaly: 'fold', tigris: 'fa', nyul: 'fa',
    sarkany: 'fold', kigyo: 'tuz', lo: 'tuz', kecske: 'fold',
    majom: 'fem', kakas: 'fem', kutya: 'fold', diszno: 'viz'
  };
  HC.BRANCH_ELEM = BRANCH_ELEM;

  // tapláló (generáló) és kontrolláló körök
  var FEEDS = { fa: 'tuz', tuz: 'fold', fold: 'fem', fem: 'viz', viz: 'fa' };
  var CONTROLS = { fa: 'fold', fold: 'viz', viz: 'tuz', tuz: 'fem', fem: 'fa' };
  HC.FEEDS = FEEDS; HC.CONTROLS = CONTROLS;

  /**
   * Elemmerleg a negy pillerbol. Az orapiller csak akkor szamit,
   * ha ismert a szuletesi ido.
   */
  function baziBalance(bz, hasHour) {
    var pillars = [bz.year, bz.month, bz.day];
    if (hasHour) pillars.push(bz.hour);

    var counts = { fa: 0, tuz: 0, fold: 0, fem: 0, viz: 0 };
    var detail = [];
    pillars.forEach(function (p, idx) {
      var stemEl = p.element;
      var brEl = BRANCH_ELEM[p.animal];
      counts[stemEl]++;
      counts[brEl]++;
      detail.push({
        pillar: ['év', 'hónap', 'nap', 'óra'][idx],
        stem: stemEl, branch: brEl
      });
    });

    var total = pillars.length * 2;
    var dm = bz.dayMaster;

    // A Nap Urat tamogatja: a sajat eleme + ami taplalja.
    var supporter = null;
    Object.keys(FEEDS).forEach(function (k) { if (FEEDS[k] === dm) supporter = k; });
    var support = counts[dm] + (supporter ? counts[supporter] : 0);
    var ratio = support / total;

    var strength;
    if (ratio >= 0.55) strength = 'eros';
    else if (ratio <= 0.3) strength = 'gyenge';
    else strength = 'kiegyensulyozott';

    // legerosebb, leggyengebb, hianyzo elemek
    var keys = Object.keys(counts);
    var maxK = keys[0], minK = keys[0];
    keys.forEach(function (k) {
      if (counts[k] > counts[maxK]) maxK = k;
      if (counts[k] < counts[minK]) minK = k;
    });
    var missing = keys.filter(function (k) { return counts[k] === 0; });

    return {
      counts: counts, total: total, detail: detail,
      dayMaster: dm, support: support, ratio: ratio, strength: strength,
      supporter: supporter,
      strongest: maxK, weakest: minK, missing: missing,
      // amit a hagyomany szerint erdemes erositeni
      favorable: strength === 'eros' ? CONTROLS[dm] : (supporter || dm),
      hasHour: !!hasHour
    };
  }
  HC.baziBalance = baziBalance;

  /** Az adott ev allatjegye es viszonya a sajatunkhoz. */
  function chineseYearRelation(myAnimalKey, refYear, refMonth, refDay) {
    var cy = chineseYearOf(refYear, refMonth || 6, refDay || 15);
    var idx = ((cy - 4) % 12 + 12) % 12;
    var yearAnimal = BRANCH_ANIMAL[idx];
    var myIdx = BRANCH_ANIMAL.indexOf(myAnimalKey);
    var diff = ((idx - myIdx) % 12 + 12) % 12;
    var rel;
    if (diff === 0) rel = 'benming';        // sajat evunk (Ben Ming Nian)
    else if (diff === 6) rel = 'utkozes';    // szembenallo jegy
    else if (diff === 4 || diff === 8) rel = 'trigon';
    else rel = 'semleges';
    return {
      year: cy, animal: yearAnimal, animalHu: ANIMAL_HU[idx],
      relation: rel, offset: diff
    };
  }
  HC.chineseYearRelation = chineseYearRelation;

  /* ---------- Vimshottari dasa (vedikus fo-idoszakok) ----------
     A Hold sziderikus helyzetebol szamolt 120 eves ciklus: ez a
     vedikus asztrologia legfontosabb elorejelzo eszkoze. */

  var DASHA = [
    { key: 'ketu', name: 'Ketu', years: 7 },
    { key: 'venus', name: 'Vénusz', years: 20 },
    { key: 'sun', name: 'Nap', years: 6 },
    { key: 'moon', name: 'Hold', years: 10 },
    { key: 'mars', name: 'Mars', years: 7 },
    { key: 'rahu', name: 'Ráhu', years: 18 },
    { key: 'jupiter', name: 'Jupiter', years: 16 },
    { key: 'saturn', name: 'Szaturnusz', years: 19 },
    { key: 'mercury', name: 'Merkúr', years: 17 }
  ];
  HC.DASHA = DASHA;

  /**
   * siderealMoonLon: a Hold sziderikus hosszusaga fokban
   * birthUTC: a szuletes idopontja
   * Visszaadja a fo-idoszakok (mahadasa) sorat es az eppen aktualisat.
   */
  function vimshottari(siderealMoonLon, birthUTC, refUTC) {
    var span = 360 / 27;                              // 13,333° egy nakshatra
    var lon = ((siderealMoonLon % 360) + 360) % 360;
    var nakIndex = Math.floor(lon / span);
    var into = (lon - nakIndex * span) / span;        // 0..1 mennyit haladt at rajta

    var startIdx = nakIndex % 9;
    var first = DASHA[startIdx];
    var remaining = first.years * (1 - into);         // az elso idoszak hatralevo resze

    var YEAR_MS = 365.2425 * 86400000;
    var periods = [];
    var t = birthUTC.getTime() - first.years * (into) * YEAR_MS;  // elvi kezdet
    for (var k = 0; k < 10; k++) {
      var d = DASHA[(startIdx + k) % 9];
      var from = new Date(t);
      t += d.years * YEAR_MS;
      periods.push({
        key: d.key, name: d.name, years: d.years,
        from: from, to: new Date(t),
        partial: k === 0
      });
    }

    var now = (refUTC || new Date()).getTime();
    var current = null, next = null;
    for (var j = 0; j < periods.length; j++) {
      if (now >= periods[j].from.getTime() && now < periods[j].to.getTime()) {
        current = periods[j];
        next = periods[j + 1] || null;
        break;
      }
    }
    return {
      nakIndex: nakIndex, into: into,
      firstLord: first, balanceYears: remaining,
      periods: periods, current: current, next: next
    };
  }
  HC.vimshottari = vimshottari;

  /** Titkos állat = a születés kettős órája. */
  function secretAnimal(hour) {
    if (hour == null) return null;
    var b = Math.floor(((hour + 1) % 24) / 2);
    return { key: BRANCH_ANIMAL[b], name: ANIMAL_HU[b], index: b };
  }
  HC.secretAnimal = secretAnimal;

  /* ---------- Pitagorasz-negyzet / pszichomatrix ---------- */

  /**
   * A nemzetkozileg elterjedt (Alekszandrov-fele) pszichomatrix.
   * 1. munkaszam: a szuletesi datum szamjegyeinek osszege
   * 2. munkaszam: az elso szamjegyeinek osszege
   * 3. munkaszam: elso - 2 x (a nap elso nem nulla szamjegye);
   *    2000 utan szuletetteknel a bevett szabaly: elso + 19
   * 4. munkaszam: a harmadik szamjegyeinek osszege
   * A matrixba a datum es a negy munkaszam MINDEN szamjegye kerul (a nullak nem).
   */
  function psychomatrix(y, m, d) {
    function digitsOf(n) {
      return String(Math.abs(n)).split('').map(Number).filter(function (x) { return x > 0; });
    }
    var dateDigits = (String(d).length < 2 ? '0' + d : String(d)) +
      (String(m).length < 2 ? '0' + m : String(m)) + String(y);
    var dd = dateDigits.split('').map(Number);
    var w1 = dd.reduce(function (a, b) { return a + b; }, 0);
    var w2 = digitSum(w1);
    var firstDayDigit = digitsOf(d)[0] || 0;
    var w3, rule2000 = y >= 2000;
    if (rule2000) w3 = w1 + 19;
    else w3 = Math.abs(w1 - 2 * firstDayDigit);
    var w4 = digitSum(w3);

    var counts = {};
    for (var i = 1; i <= 9; i++) counts[i] = 0;
    dd.concat(digitsOf(w1), digitsOf(w2), digitsOf(w3), digitsOf(w4))
      .forEach(function (x) { if (x >= 1 && x <= 9) counts[x]++; });

    function cellStr(n) {
      return counts[n] ? new Array(counts[n] + 1).join(String(n)) : '—';
    }
    function lineSum(a, b, c) { return counts[a] + counts[b] + counts[c]; }

    return {
      working: [w1, w2, w3, w4], rule2000: rule2000,
      counts: counts, cellStr: cellStr,
      // klasszikus elrendezes: oszloponkent 1-2-3 / 4-5-6 / 7-8-9
      grid: [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
      lines: {
        celratores: lineSum(1, 4, 7),     // 1-4-7 sor
        csalad: lineSum(2, 5, 8),         // 2-5-8 sor
        stabilitas: lineSum(3, 6, 9),     // 3-6-9 sor
        onertekeles: lineSum(1, 2, 3),    // 1-2-3 oszlop
        anyagiak: lineSum(4, 5, 6),       // 4-5-6 oszlop
        tehetseg: lineSum(7, 8, 9),       // 7-8-9 oszlop
        szellemiseg: lineSum(1, 5, 9),    // atlo
        temperamentum: lineSum(3, 5, 7)   // atlo
      }
    };
  }
  HC.psychomatrix = psychomatrix;

  /* ---------- Kronobiologiai pszichogenetika (HVD csakraanalizis) ---------- */

  /**
   * A rendszer harom markere: a szuletestol 1981. december 31-ig eltelt
   * napok szama mod 23 / 28 / 33. A nulla maradek a bazisszamnak felel meg,
   * mert a forrastablazatok 1-tol szamoznak.
   */
  function hvdMarkers(y, m, d) {
    var N = Math.round((Date.UTC(1981, 11, 31) - Date.UTC(y, m - 1, d)) / 86400000);
    function mk(base) { var r = ((N % base) + base) % base; return r === 0 ? base : r; }
    return { days: N, fizikai: mk(23), erzelmi: mk(28), intellektualis: mk(33) };
  }
  HC.hvdMarkers = hvdMarkers;

  /** A markerekbol kiolvasott csakra-szazalekok es tipusnevek. */
  function hvdProfile(y, m, d) {
    var H = global.HDATA && global.HDATA.hvd;
    if (!H) return null;
    var mk = hvdMarkers(y, m, d);
    var ph = H.physical[mk.fizikai] || [];
    var em = H.emotional[mk.erzelmi] || [];
    var it = H.intellectual[mk.intellektualis] || [];

    function band(v) {
      for (var i = 0; i < H.scale.length; i++) if (v <= H.scale[i].max) return H.scale[i];
      return H.scale[H.scale.length - 1];
    }
    function ch(key, val, uncertain) {
      return {
        key: key, name: H.chakraNames[key], value: val,
        meaning: H.chakraMeaning[key], band: band(val),
        uncertain: !!uncertain
      };
    }

    var chakras = [
      ch('szahaszrara', it[3], true),
      ch('adzsna', it[1]),
      ch('visuddha', it[0]),
      ch('anahata', em[1]),
      ch('manipura', em[0]),
      ch('szvadhisthana', ph[1]),
      ch('muladhara', ph[0])
    ];

    // kontur-osszegek: a ket-ket csakra egyuttes toltottsege
    var contours = [
      { key: 'fizikai', marker: mk.fizikai, type: ph[2],
        sum: (ph[0] || 0) + (ph[1] || 0), parts: [ph[0], ph[1]] },
      { key: 'erzelmi', marker: mk.erzelmi, type: em[2],
        sum: (em[0] || 0) + (em[1] || 0), parts: [em[0], em[1]] },
      { key: 'intellektualis', marker: mk.intellektualis, type: it[2],
        sum: (it[0] || 0) + (it[1] || 0), parts: [it[0], it[1]] }
    ];
    var lifeEnergy = contours.reduce(function (a, c) { return a + c.sum; }, 0);

    return {
      markers: mk, chakras: chakras, contours: contours, lifeEnergy: lifeEnergy
    };
  }
  HC.hvdProfile = hvdProfile;

  /* ---------- Sorsmatrix (Destiny Matrix) ---------- */

  /** 22-es arkanumra redukalas: amig 22 fole esik, szamjegyosszeg. */
  function arcana22(n) {
    n = Math.abs(Math.round(n));
    while (n > 22) n = digitSum(n);
    return n === 0 ? 22 : n;
  }
  HC.arcana22 = arcana22;

  /**
   * Sorsmatrix (Матрица Судьбы) — a 22 nagy arkanumra epulo oktagram.
   * A pontok elnevezese a nemzetkozi gyakorlatot koveti.
   */
  function destinyMatrix(y, m, d) {
    var A = arcana22(d);                 // nap — a szemelyiseg pontja (nyugat)
    var B = arcana22(m);                 // honap — a legmagasabb pont (eszak)
    var C = arcana22(digitSum(y));       // ev — a talentum pontja (kelet)
    var D = arcana22(A + B + C);         // a gyokerek pontja (del)
    var E = arcana22(A + B + C + D);     // a kozeppont: a fo feladat

    // masodlagos pontok a tengelyeken
    var J = arcana22(A + E), K = arcana22(B + E);
    var L = arcana22(C + E), M = arcana22(D + E);
    var O = arcana22(A + J), P = arcana22(B + K);
    var Q = arcana22(L + C), N = arcana22(M + D);
    var S = arcana22(J + E), T = arcana22(K + E);

    // atlok: a csaladi (generacios) vonalak
    var F = arcana22(A + B), G = arcana22(B + C);
    var H = arcana22(C + D), I = arcana22(D + A);
    var F2 = arcana22(F + E), G2 = arcana22(G + E);
    var H2 = arcana22(H + E), I2 = arcana22(I + E);
    var F1 = arcana22(F + F2), G1 = arcana22(G + G2);
    var H1 = arcana22(H + H2), I1 = arcana22(I + I2);

    // eletfeladat
    var L2 = arcana22(F + G + H + I);    // egi (szemelyes) feladat
    var L1 = arcana22(E + L2);           // a kozos, osszegzo feladat
    var skyTask = arcana22(A + B);       // eg vonala
    var earthTask = arcana22(C + D);     // fold vonala

    // Csakrasor haromoszlopos tablazata.
    //  - Fizika:  a vizszintes (fold) tengely pontjai
    //  - Energia: a fuggoleges (eg) tengely pontjai
    //  - Erzelem: a ketto osszege
    function chakra(key, name, physics, energy) {
      return {
        key: key, name: name,
        physics: physics, energy: energy,
        emotion: arcana22(physics + energy),
        value: arcana22(physics + energy)
      };
    }
    var chakras = [
      chakra('sahasrara', 'Szahaszrára', A, B),
      chakra('adzsna', 'Adzsna', O, P),
      chakra('visuddha', 'Visuddha', J, K),
      chakra('anahata', 'Anahata', S, T),
      chakra('manipura', 'Manipura', E, E),
      chakra('szvadhisthana', 'Szvadhisthána', L, M),
      chakra('muladhara', 'Muladhára', C, D)
    ];
    // "Eredmeny" sor: az oszlopok osszege 22-re redukalva
    function colSum(f) {
      return arcana22(chakras.reduce(function (a, c) { return a + f(c); }, 0));
    }
    var chakraResult = {
      physics: colSum(function (c) { return c.physics; }),
      energy: colSum(function (c) { return c.energy; }),
      emotion: colSum(function (c) { return c.emotion; })
    };

    // Penz- es kapcsolati csatorna a jobb also szektorban.
    // A ket tengelypont (L a vizszintesen, M a fuggolegesen) egy haromszoget
    // zar be: a csucs a ketto osszege, oldalankent egy-egy kozbulso pont.
    var rApex = arcana22(M + L);          // a szektor kozos csucsa
    var rLove = arcana22(rApex + M);      // a kapcsolati oldal pontja
    var rMoney = arcana22(rApex + L);     // a penzoldal pontja
    var moneyChannel = { outer: L, mid: rMoney, apex: rApex };
    var loveChannel = { outer: M, mid: rLove, apex: rApex };

    // Generacios vonalak: az atlok ket-ket sarokpontja es azok osszege
    var maleLine = { a: F, b: H, result: arcana22(F + H) };
    var femaleLine = { a: G, b: I, result: arcana22(G + I) };

    // Eletfeladat-harmas
    var purposeSky = arcana22(B + D);          // eg: honap + gyokerek
    var purposeEarth = arcana22(A + C);        // fold: nap + ev
    var purposePersonal = arcana22(purposeSky + purposeEarth);
    var purposeSocial = arcana22(maleLine.result + femaleLine.result);
    var purposeSpiritual = arcana22(purposePersonal + purposeSocial);

    // Eletkor-kerek: a nyolcszog pontjai 10 evenkent kovetik egymast,
    // a felezopontok a ket szomszed osszege (5 eves felbontas).
    var ring = [
      { age: 0, v: A }, { age: 10, v: F }, { age: 20, v: B }, { age: 30, v: G },
      { age: 40, v: C }, { age: 50, v: H }, { age: 60, v: D }, { age: 70, v: I }
    ];
    var ageWheel = [];
    for (var r = 0; r < ring.length; r++) {
      var cur = ring[r], nxt = ring[(r + 1) % ring.length];
      ageWheel.push({ age: cur.age, arcana: cur.v, major: true });
      ageWheel.push({ age: cur.age + 5, arcana: arcana22(cur.v + nxt.v), major: false });
    }

    return {
      A: A, B: B, C: C, D: D, E: E,
      J: J, K: K, L: L, M: M, O: O, P: P, Q: Q, N: N, S: S, T: T,
      F: F, G: G, H: H, I: I,
      F1: F1, G1: G1, H1: H1, I1: I1,
      F2: F2, G2: G2, H2: H2, I2: I2,
      L1: L1, L2: L2, skyTask: skyTask, earthTask: earthTask,
      chakras: chakras, chakraResult: chakraResult,
      maleLine: maleLine, femaleLine: femaleLine,
      moneyChannel: moneyChannel, loveChannel: loveChannel,
      purpose: {
        sky: purposeSky, earth: purposeEarth, personal: purposePersonal,
        social: purposeSocial, spiritual: purposeSpiritual
      },
      ageWheel: ageWheel
    };
  }
  HC.destinyMatrix = destinyMatrix;

  /** Melyik eletkor-pont aktiv az adott korban (80 eves korben forogva). */
  function matrixAgePoint(wheel, age) {
    var a = ((age % 80) + 80) % 80;
    var best = wheel[0];
    for (var i = 0; i < wheel.length; i++) {
      if (wheel[i].age <= a) best = wheel[i]; else break;
    }
    return best;
  }
  HC.matrixAgePoint = matrixAgePoint;

  /* ---------- maja Tzolkin ---------- */

  var TZOLKIN_DEFAULT = ['Imix', 'Ik', 'Akbal', 'Kan', 'Chicchan', 'Cimi', 'Manik',
    'Lamat', 'Muluc', 'Oc', 'Chuen', 'Eb', 'Ben', 'Ix', 'Men', 'Cib',
    'Caban', 'Etznab', 'Cauac', 'Ahau'];

  function tzolkin(y, m, d) {
    var n = ((jdn(y, m, d) - 584283) % 260 + 260) % 260;
    var number = ((n + 3) % 13) + 1;
    var idx = (n + 19) % 20;
    var list = (global.HDATA && HDATA.exotic && HDATA.exotic.maya && HDATA.exotic.maya.signs) || null;
    var sign = list && list[idx] ? list[idx] : { name: TZOLKIN_DEFAULT[idx] };
    var tones = (global.HDATA && HDATA.exotic && HDATA.exotic.maya && HDATA.exotic.maya.tones) || null;
    return {
      dayIndex: n, number: number, signIndex: idx,
      sign: sign, tone: tones && tones[number - 1] ? tones[number - 1] : null,
      label: number + ' ' + (sign.name || TZOLKIN_DEFAULT[idx])
    };
  }
  HC.tzolkin = tzolkin;

  /* ---------- jávai weton ---------- */

  var PASARAN = ['Legi', 'Pahing', 'Pon', 'Wage', 'Kliwon'];
  var PASARAN_NEPTU = { Legi: 5, Pahing: 9, Pon: 7, Wage: 4, Kliwon: 8 };
  var DAY_NEPTU = [5, 4, 3, 7, 8, 6, 9];               // vasárnaptól szombatig
  var DAY_JAVA = ['Minggu', 'Senen', 'Selasa', 'Rebo', 'Kemis', 'Jemuwah', 'Setu'];
  var DAY_HU = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
  HC.DAY_HU = DAY_HU;

  function weton(y, m, d) {
    var J = jdn(y, m, d);
    var wd = (J + 1) % 7;                                // 0 = vasárnap
    // A pasaran-ciklus horgonya ellenőrzött születésnapokból: Jokowi
    // (1961-06-21 = Rebo Pon) és Suharto (1921-06-08 = Rebo Kliwon).
    var pIdx = ((J % 5) + 5) % 5;
    var p = PASARAN[pIdx];
    var neptu = DAY_NEPTU[wd] + PASARAN_NEPTU[p];
    return {
      weekday: wd, dayJava: DAY_JAVA[wd], dayHu: DAY_HU[wd],
      pasaran: p, pasaranIndex: pIdx,
      neptu: neptu, dayNeptu: DAY_NEPTU[wd], pasaranNeptu: PASARAN_NEPTU[p],
      label: DAY_JAVA[wd] + ' ' + p
    };
  }
  HC.weton = weton;

  /* ---------- kilenc csillag ki és Kua-szám ---------- */

  function kyusei(y, m, d) {
    var yy = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;   // febr. 4-i évhatár
    var n = 11 - (reduceNum(digitSum(yy), false));
    if (n > 9) n -= 9;
    if (n < 1) n += 9;
    return { year: yy, number: n };
  }
  HC.kyusei = kyusei;

  function kuaNumber(y, m, d, gender) {
    var yy = (m < 2 || (m === 2 && d < 4)) ? y - 1 : y;
    var s = reduceNum(digitSum(yy), false);
    var k;
    if (gender === 'no') {
      k = yy >= 2000 ? s + 6 : s + 5;
      k = reduceNum(k, false);
      if (k === 5) k = 8;
    } else {
      k = yy >= 2000 ? 9 - s : 10 - s;
      k = ((k - 1) % 9 + 9) % 9 + 1;
      if (k === 5) k = 2;
    }
    return { number: k, group: [1, 3, 4, 9].indexOf(k) >= 0 ? 'Keleti csoport' : 'Nyugati csoport' };
  }
  HC.kuaNumber = kuaNumber;

  /* ---------- sorskártya (Destiny Cards) ---------- */

  var SUITS = ['Treff', 'Káró', 'Kőr', 'Pikk'];
  var VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function destinyCard(m, d) {
    var v = 55 - (2 * m + d);
    if (v < 1) return { joker: true, name: 'Joker', text: 'December 31-i születés – a hagyomány szerint a Joker lapja.' };
    var suitIndex = Math.floor((v - 1) / 13);
    var valIndex = (v - 1) % 13;
    if (suitIndex > 3) suitIndex = 3;
    return {
      value: v, suit: SUITS[suitIndex], rank: VALUES[valIndex],
      name: SUITS[suitIndex] + ' ' + VALUES[valIndex],
      key: VALUES[valIndex] + ['C', 'D', 'H', 'S'][suitIndex]
    };
  }
  HC.destinyCard = destinyCard;

  /* ---------- tarot-születéskártya ---------- */

  function tarotBirthCard(y, m, d) {
    var sum = m + d + digitSum(y);
    while (sum > 22) sum = digitSum(sum);
    if (sum === 0) sum = 22;
    return sum;
  }
  HC.tarotBirthCard = tarotBirthCard;

  /* ---------- héber naptár (kabbala-réteg) ---------- */

  function hebrewDate(utcDate) {
    try {
      var f = new Intl.DateTimeFormat('en-u-ca-hebrew', {
        year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
      });
      var p = {};
      f.formatToParts(utcDate).forEach(function (x) { p[x.type] = x.value; });
      return { month: p.month, day: p.day, year: p.year, text: p.day + ' ' + p.month + ' ' + p.year };
    } catch (e) { return null; }
  }
  HC.hebrewDate = hebrewDate;

  /* ---------- egyszerű, hét napja alapú rendszerek ---------- */

  function byWeekday(dataObj, wd) {
    if (!dataObj) return null;
    return dataObj[wd] || dataObj[String(wd)] || null;
  }
  HC.byWeekday = byWeekday;

  function mahabote(y, m, d, hour) {
    var wd = weekday(y, m, d);
    var data = global.HDATA && HDATA.exotic && HDATA.exotic.mahabote;
    if (!data || !data.signs) return null;
    var key = wd;
    if (wd === 3 && hour != null && hour >= 12 && data.signs['wed_pm']) key = 'wed_pm';
    var s = data.signs[key] || data.signs[String(key)];
    return s ? { weekday: wd, dayHu: DAY_HU[wd], sign: s } : null;
  }
  HC.mahabote = mahabote;

  /* ---------- évszak és generáció ---------- */

  function season(m, d) {
    if (inRange(m, d, [3, 20], [6, 20])) return 'tavasz';
    if (inRange(m, d, [6, 21], [9, 22])) return 'nyar';
    if (inRange(m, d, [9, 23], [12, 20])) return 'osz';
    return 'tel';
  }
  HC.season = season;

  function generation(y) {
    var list = (global.HDATA && HDATA.exotic && HDATA.exotic.generations) || [];
    for (var i = 0; i < list.length; i++) {
      if (y >= list[i].from && y <= list[i].to) return list[i];
    }
    return null;
  }
  HC.generation = generation;

  /* ---------- fogantatás és prenatális lunáció ---------- */

  /** Becsült fogantatási idő (átlagos 266 nap a megtermékenyítéstől). */
  function conceptionEstimate(birthUTC) {
    return new Date(birthUTC.getTime() - 266 * 86400000);
  }
  HC.conceptionEstimate = conceptionEstimate;

  /** A születés előtti utolsó újhold és telihold. */
  function prenatalLunation(birthUTC) {
    if (!HCORE.nextPhase) return null;
    var start = new Date(birthUTC.getTime() - 32 * 86400000);
    var newMoon = null, full = null, t = start;
    for (var i = 0; i < 4; i++) {
      var nm = HCORE.nextPhase(t, 0);
      if (!nm) break;
      if (nm.getTime() <= birthUTC.getTime()) newMoon = nm; else break;
      t = new Date(nm.getTime() + 86400000);
    }
    t = start;
    for (var j = 0; j < 4; j++) {
      var fm = HCORE.nextPhase(t, 180);
      if (!fm) break;
      if (fm.getTime() <= birthUTC.getTime()) full = fm; else break;
      t = new Date(fm.getTime() + 86400000);
    }
    var last = null, type = null;
    if (newMoon && full) {
      if (newMoon > full) { last = newMoon; type = 'újhold'; }
      else { last = full; type = 'telihold'; }
    } else if (newMoon) { last = newMoon; type = 'újhold'; }
    else if (full) { last = full; type = 'telihold'; }
    return last ? { date: last, type: type, daysBefore: Math.round((birthUTC - last) / 86400000) } : null;
  }
  HC.prenatalLunation = prenatalLunation;

  /* ---------- nakshatra ---------- */

  function nakshatra(siderealMoonLon) {
    var span = 360 / 27;
    var idx = Math.floor(((siderealMoonLon % 360) + 360) % 360 / span);
    var list = (global.HDATA && HDATA.exotic && HDATA.exotic.nakshatra &&
      HDATA.exotic.nakshatra.list) || null;
    var pada = Math.floor((((siderealMoonLon % span) + span) % span) / (span / 4)) + 1;
    return {
      index: idx, pada: pada,
      data: list && list[idx] ? list[idx] : null,
      name: list && list[idx] ? list[idx].name : ('Nakshatra ' + (idx + 1))
    };
  }
  HC.nakshatra = nakshatra;

  /** Arab holdház (28 manázil) a sziderikus Hold alapján. */
  function manzil(siderealMoonLon) {
    var idx = Math.floor(((siderealMoonLon % 360) + 360) % 360 / (360 / 28));
    var list = (global.HDATA && HDATA.exotic && HDATA.exotic.manazil) || null;
    return { index: idx, data: list && list[idx] ? list[idx] : null };
  }
  HC.manzil = manzil;

  /* ---------- születési angyal ---------- */

  function guardianAngel(m, d) {
    var list = (global.HDATA && HDATA.angels && HDATA.angels.guardian) || null;
    if (!list) return null;
    return findByRange(list, m, d);
  }
  HC.guardianAngel = guardianAngel;

  /* ---------- névnap és jeles nap ---------- */

  function nameDay(m, d) {
    var t = global.HDATA && HDATA.hungarian && HDATA.hungarian.nameDays;
    if (!t) return null;
    return t[pad2(m) + '-' + pad2(d)] || null;
  }
  HC.nameDay = nameDay;

  function namedDay(m, d) {
    var t = global.HDATA && HDATA.hungarian && HDATA.hungarian.namedDays;
    if (!t) return null;
    return t[pad2(m) + '-' + pad2(d)] || t[m + '-' + pad2(d)] || null;
  }
  HC.namedDay = namedDay;

  /** Melyik napra esik idén a névnap, ha a nevet megadták. */
  function findNameDayOf(name) {
    var t = global.HDATA && HDATA.hungarian && HDATA.hungarian.nameDays;
    if (!t || !name) return null;
    var target = deaccent(name.split(/\s+/).pop());
    var hits = [];
    Object.keys(t).forEach(function (k) {
      (t[k] || []).forEach(function (n) {
        if (deaccent(n) === target) hits.push(k);
      });
    });
    return hits.length ? hits : null;
  }
  HC.findNameDayOf = findNameDayOf;

  /* ---------- éves profekció ---------- */

  function profection(ageYears, ascSignIndex) {
    var house = (ageYears % 12) + 1;
    var signIdx = (ascSignIndex + (house - 1)) % 12;
    return { house: house, signIndex: signIdx, sign: HCORE.SIGN_NAMES[signIdx] };
  }
  HC.profection = profection;

  /* ---------- életkor ---------- */

  function ageAt(birthUTC, refUTC) {
    var b = new Date(birthUTC), r = new Date(refUTC);
    var years = r.getUTCFullYear() - b.getUTCFullYear();
    var mDiff = r.getUTCMonth() - b.getUTCMonth();
    if (mDiff < 0 || (mDiff === 0 && r.getUTCDate() < b.getUTCDate())) years--;
    var days = Math.floor((r - b) / 86400000);
    return { years: years, days: days, weeks: Math.floor(days / 7) };
  }
  HC.ageAt = ageAt;

})(typeof window !== 'undefined' ? window : globalThis);
