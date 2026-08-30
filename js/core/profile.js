/* Horoszkóp – profilösszeállító
   Egy születési adatsorból felépíti a teljes, minden rendszerre kiterjedő
   jelentést. A számítás a HCORE rétegekből, a szöveg a HDATA modulokból jön. */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};
  var C = HCORE.cal;

  /** Biztonságos mélylekérés: get(HDATA, 'western.signs.0.name') */
  function get(obj, path, fallback) {
    var parts = path.split('.'), cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return fallback;
      cur = cur[parts[i]];
    }
    return cur == null ? fallback : cur;
  }
  HCORE.get = get;

  function D() { return global.HDATA || {}; }

  /** Magyar hatarozott nevelo: maganhangzo elott "az", egyebkent "a". */
  function az(word) {
    return /^[aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ]/.test(String(word || '')) ? 'az' : 'a';
  }
  HCORE.az = az;

  function fmtDeg(x) { return x.toFixed(2).replace('.', ',') + '°'; }

  function section(id, title, icon, category) {
    return { id: id, title: title, icon: icon, category: category, items: [], notes: [] };
  }
  function item(sec, label, value, text) {
    sec.items.push({ label: label, value: value || '', text: text || '' });
    return sec;
  }

  /* ================= fő belépési pont ================= */

  /**
   * input: {
   *   name, gender ('ferfi'|'no'|''), year, month, day,
   *   hour, minute, hasTime (bool), place {name, lat, lon, tz},
   *   houseSystem ('placidus'|'equal'|'whole'), special (kulcsok tömbje)
   * }
   */
  function buildProfile(input) {
    var y = input.year, m = input.month, d = input.day;
    var hasTime = !!input.hasTime;
    var hour = hasTime ? input.hour : 12;
    var minute = hasTime ? input.minute : 0;
    var place = input.place || { name: 'Budapest', lat: 47.4979, lon: 19.0402, tz: 'Europe/Budapest' };
    var tz = place.tz || 'Europe/Budapest';

    var utc = HCORE.localToUTC(y, m, d, hour, minute, tz);
    var offset = HCORE.zoneOffsetMinutes(utc, tz);
    var now = new Date();

    var chart = HCORE.chart({
      date: utc, lat: place.lat, lon: place.lon,
      system: input.houseSystem || 'placidus', withHouses: hasTime
    });

    var out = {
      input: input, utc: utc, offsetMinutes: offset, place: place,
      chart: chart, weekday: C.weekday(y, m, d),
      age: C.ageAt(utc, now), sections: [], summary: {}
    };

    buildWestern(out);
    buildHouses(out);
    buildPlanetDetails(out);
    buildStructure(out);
    buildMoonSection(out);
    buildVedic(out);
    buildChinese(out);
    buildKoreanJapanese(out);
    buildNumerology(out);
    buildPsychomatrix(out);
    buildDestinyMatrix(out);
    buildHvd(out);
    buildCards(out);
    buildAngels(out);
    buildExotic(out);
    buildWeekdaySystems(out);
    buildHungarian(out);
    buildChrono(out);
    buildConception(out);
    buildPatterns(out);
    buildStars(out);
    buildCurrent(out);
    buildAnnual(out);
    buildTransits(out);
    buildSynastry(out);
    buildSummary(out);

    // olyan szekció is megmarad, amelynek csak táblázata vagy grafikonja van
    out.sections = out.sections.filter(function (s) {
      return s && (s.items.length || s.table || s.aspects || s.biorhythm || s.chronoTool || s.matrix || s.matrixDM || s.hvd || s.houseDetails || s.planetDetails || s.dashaTable || s.baziBalance || s.transits || s.synastry);
    });
    return out;
  }

  /* ================= nyugati ================= */

  function signData(key) {
    var list = get(D(), 'western.signs', []);
    for (var i = 0; i < list.length; i++) if (list[i].key === key) return list[i];
    return null;
  }
  HCORE.signData = signData;

  function buildWestern(out) {
    var c = out.chart, s = section('nyugati', 'Nyugati asztrológia', '♌', 'nyugati');
    var sun = c.planets.sun, moon = c.planets.moon;
    var sd = signData(sun.sign.key);

    out.summary.sunSign = sun.sign.name;
    out.summary.moonSign = moon.sign.name;

    item(s, 'Napjegy', sun.sign.name + ' ' + sun.sign.symbol + ' (' + sun.sign.text + ')',
      sd ? sd.description : '');
    if (sd) {
      item(s, 'Elem és minőség', sd.element + ' · ' + sd.quality + ' · ' + sd.polarity, '');
      item(s, 'Uralkodó bolygó', sd.ruler || '', '');
      if (sd.temperament) item(s, 'Temperamentum', sd.temperament,
        'A klasszikus nedvtan szerinti alkat, ami a hagyományban az elemhez kapcsolódik.');
      if (sd.positive) item(s, 'Erősségek', sd.positive.join(', '), '');
      if (sd.negative) item(s, 'Árnyoldalak', sd.negative.join(', '), '');
      if (sd.love) item(s, 'Párkapcsolatban', '', sd.love);
      if (sd.career) item(s, 'Munkában', '', sd.career);
      if (sd.compatibility) {
        item(s, 'Legjobb párosítások', (sd.compatibility.best || []).join(', '), '');
        item(s, 'Kihívást jelentő párosítások', (sd.compatibility.challenging || []).join(', '), '');
      }
      if (sd.stones) item(s, 'Kövei, színei', (sd.stones || []).join(', ') + ' · ' + (sd.colors || []).join(', '), '');
    }

    item(s, 'Holdjegy', moon.sign.name + ' ' + moon.sign.symbol + ' (' + moon.sign.text + ')',
      'Az érzelmi működésed és a belső biztonságigényed jegye — a részletes ' +
      'értelmezése a bolygók közötti Hold-kártyán olvasható.');

    if (out.input.hasTime && c.ascSign) {
      out.summary.ascSign = c.ascSign.name;
      item(s, 'Aszcendens', c.ascSign.name + ' ' + c.ascSign.symbol + ' (' + c.ascSign.text + ')',
        get(D(), 'western.ascendantText.' + c.ascSign.key, ''));
      item(s, 'MC (X. ház csúcsa)', c.mcSign.name + ' (' + c.mcSign.text + ')',
        'A hivatás, a társadalmi szerep és a nyilvános arcod pontja.');
      s.notes.push('A „nagy hármas": ' + sun.sign.name + ' Nap · ' + moon.sign.name +
        ' Hold · ' + c.ascSign.name + ' aszcendens.');
    } else {
      s.notes.push('Aszcendens és házak csak pontos születési idővel számolhatók — ' +
        'idő nélkül a Hold állása is akár 6-7 fokot tévedhet.');
    }

    // bolygóállások táblázata
    var rows = [];
    function pushRow(p) {
      rows.push({
        planet: p.name, symbol: p.symbol, sign: p.sign.name,
        deg: p.sign.text, retro: p.retrograde, house: p.house || null,
        speed: p.speed
      });
    }
    c.list.forEach(pushRow);
    ['northNode', 'lilith'].forEach(function (k) {
      if (c.planets[k]) pushRow(c.planets[k]);
    });
    s.table = { type: 'planets', rows: rows };

    // fényszögek
    if (c.aspects.length) {
      s.aspects = c.aspects.slice(0, 14).map(function (a) {
        return {
          text: a.aName + ' ' + a.symbol + ' ' + a.bName,
          name: a.name, orb: fmtDeg(a.orb), exact: a.exactness > 0.8
        };
      });
    }


    out.sections.push(s);
  }

  /* ---- segédek a részletes nyugati nézethez ---- */

  /** Egy egitest eszencialis meltosaga az adott jegyben. */
  function dignityOf(p) {
    var dl = get(D(), 'western.dignities', []);
    var arr = Array.isArray(dl) ? dl : Object.keys(dl).map(function (k) { return dl[k]; });
    for (var i = 0; i < arr.length; i++) {
      var dd = arr[i];
      if (dd.sign !== p.sign.key) continue;
      if (dd.domicile === p.name) return { key: 'domicilium', name: 'otthonában', text: 'Otthonában (domicílium): itt a legerősebb, a saját természete szerint működik.' };
      if (dd.exaltation === p.name) return { key: 'exaltacio', name: 'felmagasztalva', text: 'Felmagasztalva (exaltáció): kiemelt, ünnepi működés — de könnyen túlzásba is viheti.' };
      if (dd.detriment === p.name) return { key: 'szamuzetes', name: 'száműzetésben', text: 'Száműzetésben: a jegy természete szemben áll a bolygóéval, ezért kerülőúton érvényesül.' };
      if (dd.fall === p.name) return { key: 'eses', name: 'esésben', text: 'Esésben: itt a leghalkabb — nem gyenge, csak több tudatosságot kér.' };
      break;
    }
    return null;
  }

  var SABIAN_NOTE = 'Szabian szimbólumok: minden állatövi fokhoz tartozik egy kép (Marc Edmund Jones és Elsie Wheeler, 1925). A számozás felfelé kerekít — az N. fok a (N−1)°00′ és (N−1)°59′ közötti sávot fedi, mert az első fok a 0°00′-nál kezdődik. Egy 19°09′-es pozíció tehát a 20. fok szimbólumát kapja.';

  var ROMAN = ['', 'I.', 'II.', 'III.', 'IV.', 'V.', 'VI.',
    'VII.', 'VIII.', 'IX.', 'X.', 'XI.', 'XII.'];
  function h_ordinal(n) { return ROMAN[n] || (n + '.'); }

  var PLANET_BY_HU = {
    'Nap': 'sun', 'Hold': 'moon', 'Merkúr': 'mercury', 'Vénusz': 'venus',
    'Mars': 'mars', 'Jupiter': 'jupiter', 'Szaturnusz': 'saturn',
    'Uránusz': 'uranus', 'Neptunusz': 'neptune', 'Plútó': 'pluto'
  };

  /** Egy fok "mit jelent" bontása megjelenítésre kész alakban. */
  function degreeBlock(lon, ownerLabel) {
    if (!HCORE.degreeInfo) return null;
    var di = HCORE.degreeInfo(lon);
    var parts = [];
    var deg = di.sign.degree;
    var lo = Math.floor(deg);
    // A pontos pozicio, hogy latszodjon: ez a TE fokod, nem altalanossag.
    var head = (ownerLabel ? ownerLabel + ' · ' : '') + di.sign.text;
    if (di.sabian) {
      parts.push({
        label: 'Szabian szimbólum — ' + di.sign.name + ' ' + di.sabianNumber + '. foka' +
          ' (a ' + lo + '°00\u2032–' + lo + '°59\u2032 sáv)',
        value: di.sabian.symbol || '',
        text: di.sabian.text || ''
      });
    }
    if (di.decan) {
      parts.push({
        label: 'Dekanátus',
        value: di.decan.num + '. dekanátus — uralkodója ' + di.decan.ruler,
        text: di.decan.text || ''
      });
    }
    if (di.term) {
      // A magyarazo szoveg a szekcio jegyzetebe kerul, nem ide - kulonben
      // minden egyes fok-blokkban megismetlodne.
      parts.push({
        label: 'Egyiptomi határ (term)',
        value: di.term.ruler + ' határa (' + di.term.from + '°–' + di.term.to + '°)',
        text: ''
      });
    }
    if (di.critical) {
      // csak a jelzes kerul ide; a magyarazat egyszer, a szekcio jegyzeteben all
      var CRIT_NAME = { anaretic: 'A 29. fok (anaretikus, „sorsfok")',
        zero: 'A 0. fok (nullpont)', quality: 'A jegy minősége szerinti kritikus fok' };
      di.critical.forEach(function (cf) {
        parts.push({ label: 'Kritikus fok', value: CRIT_NAME[cf.key] || '', text: '' });
      });
    }
    return parts.length ? { head: head, parts: parts } : null;
  }
  HCORE.degreeBlock = degreeBlock;

  /* ================= házak ================= */

  function buildHouses(out) {
    if (!out.input.hasTime || !out.chart.houses) return;
    var c = out.chart;
    var s = section('hazak', 'Házak és életterületek', '🏛', 'nyugati');
    var names = { placidus: 'Placidus', equal: 'Egyenlő házak', whole: 'Egész jegyes' };
    s.notes.push('Házrendszer: ' + (names[c.houses.system] || c.houses.system) + '. ' +
      'A ház csúcsa (kuszpisz) az a fok, ahol az adott életterület kezdődik; ' +
      'a rajta álló jegy és annak uralkodója adja a terület alaphangját.');
    s.notes.push('Minden háznál kiírjuk, hol áll a ház ura — ez mutatja, hogy az ' +
      'adott terület ügyei hová vezetnek a képletedben.');
    var termsIntro = get(D(), 'degrees.termsIntro', '');
    if (termsIntro) s.notes.push('Egyiptomi határok (term): ' + termsIntro);
    s.notes.push(SABIAN_NOTE);

    var hd = get(D(), 'western.houses', []);
    var rows = [], details = [];

    for (var i = 1; i <= 12; i++) {
      var cusp = HCORE.toSign(c.houses.cusps[i]);
      var meta = hd[i - 1] || {};
      var extra = get(D(), 'westernExt.houseExtra.' + i, null);

      // a házban álló égitestek
      var occ = [];
      c.list.forEach(function (p) {
        if (p.house === i) {
          occ.push({
            name: p.name, symbol: p.symbol, key: p.key,
            deg: p.sign.text, retro: p.retrograde,
            text: get(D(), 'western.planetInHouse.' + p.key + '.' + i, '') ||
                  get(D(), 'westernExt.planetInHouse.' + p.key + '.' + i, '')
          });
        }
      });
      ['northNode', 'lilith'].forEach(function (k) {
        var p = c.planets[k];
        if (p && p.house === i) {
          occ.push({
            name: p.name, symbol: p.symbol, key: k, deg: p.sign.text, retro: p.retrograde,
            text: get(D(), 'westernExt.planetInHouse.' + k + '.' + i, '')
          });
        }
      });

      rows.push({
        num: i, title: meta.title || (i + '. ház'), cusp: cusp.text,
        planets: occ.map(function (o) { return o.symbol + ' ' + o.name; }).join(', '),
        ruler: rulerHu || ''
      });

      // a ház urának elhelyezkedése
      // A hagyomanyos uralkodo a klasszikus hazur-technika alapja;
      // a modern uralkodot csak jelezzuk, ha eltero.
      var rulerHu = null, rulerInfo = null, modernRuler = null;
      var sd = signData(cusp.key);
      if (sd) {
        rulerHu = sd.rulerTraditional || sd.ruler;
        if (sd.ruler && sd.ruler !== rulerHu) modernRuler = sd.ruler;
      }
      var rKey = rulerHu && PLANET_BY_HU[rulerHu];
      if (rKey && c.planets[rKey]) {
        var rp = c.planets[rKey];
        var rSab = null;
        if (HCORE.degreeInfo) {
          var rdi = HCORE.degreeInfo(rp.lon);
          if (rdi.sabian) rSab = rdi.sign.name + ' ' + rdi.sabianNumber + '. foka: ' +
            rdi.sabian.symbol;
        }
        rulerInfo = {
          key: rKey, name: rp.name, symbol: rp.symbol,
          sign: rp.sign.name, deg: rp.sign.text, house: rp.house || null,
          retro: rp.retrograde,
          dignity: dignityOf(rp),
          sabian: rSab,
          signText: get(D(), 'western.planetInSign.' + rKey + '.' + rp.sign.key, ''),
          houseText: rp.house
            ? (get(D(), 'western.planetInHouse.' + rKey + '.' + rp.house, '') ||
               get(D(), 'westernExt.planetInHouse.' + rKey + '.' + rp.house, ''))
            : '',
          text: rp.house ? get(D(), 'westernExt.rulerInHouse.' + i + '.' + rp.house, '') : ''
        };
      }

      // Interceptalt jegy: olyan jegy, amelynek MINDEN foka a hazon belulre esik,
      // vagyis egyetlen hazcsucs sem hasitja ket reszre. Ilyenkor a jegy temai
      // "elrejtve" mukodnek. Csak akkor fordul elo, ha a haz 30 foknal szelesebb.
      var houseStart = c.houses.cusps[i];
      var houseSpan = HCORE.norm360(c.houses.cusps[i === 12 ? 1 : i + 1] - houseStart);
      var intercepted = [];
      for (var sIdx = 0; sIdx < 12; sIdx++) {
        var relStart = HCORE.norm360(sIdx * 30 - houseStart);
        if (relStart > 0 && relStart + 30 < houseSpan) {
          intercepted.push({
            key: HCORE.SIGN_KEYS[sIdx], name: HCORE.SIGN_NAMES[sIdx],
            symbol: HCORE.SIGN_SYMBOLS[sIdx]
          });
        }
      }

      // stelliumhoz csak a tiz egitest szamit, a holdcsomopont es a Lilith nem
      var planetCount = 0;
      c.list.forEach(function (pp) { if (pp.house === i) planetCount++; });

      details.push({
        // Az 1., 4., 7. es 10. haz csucsa valodi tengelypont (ASC/IC/DSC/MC).
        // A tobbi kozbulso csucs erosen fugg a valasztott hazrendszertol,
        // ezert a rajtuk allo fok jelentese masodlagos.
        isAngle: (i === 1 || i === 4 || i === 7 || i === 10),
        stellium: planetCount >= 3 ? planetCount : 0,
        num: i, name: meta.name || (i + '. ház'), title: meta.title || '',
        type: meta.type || '', keywords: meta.keywords || [],
        description: meta.description || '',
        cusp: cusp.text, cuspSign: cusp.name, cuspSymbol: cusp.symbol,
        cuspSignText: get(D(), 'westernCusp.signInHouse.' + i + '.' + cusp.key, ''),
        degree: degreeBlock(c.houses.cusps[i], h_ordinal(i) + ' ház csúcsa'),
        ruler: rulerInfo, rulerName: rulerHu, modernRuler: modernRuler,
        planets: occ,
        intercepted: intercepted.length ? intercepted : null,
        questions: extra && extra.questions ? extra.questions : null,
        empty: !occ.length,
        emptyText: (!occ.length && extra && extra.empty) ? extra.empty : '',
        // uresen allo haznal ide mutat a szal: a csucs jegye + a haz ura
        emptyPointer: (!occ.length && rulerInfo)
          ? ('Ezt a területet nálad ' + az(cusp.name) + ' ' + cusp.name +
             ' jegye színezi, és ' + rulerHu + ' irányítja, aki a ' +
             rulerInfo.house + '. házban áll — ' +
             'vagyis ' + (rulerInfo.house === i ? 'saját házában marad, ami erős, önálló működést jelent.' :
             'ott keresd, hogy ez az életterület mihez kapcsolódik nálad.'))
          : '',
        bodyArea: extra ? extra.bodyArea : '',
        lifeAge: extra ? extra.lifeAge : ''
      });
    }

    s.table = { type: 'houses', rows: rows };
    s.houseDetails = details;

    /* --- eloszlas: hol halmozodik, hol ures --- */
    var counts = {};
    c.list.forEach(function (p) { if (p.house) counts[p.house] = (counts[p.house] || 0) + 1; });
    var filled = [], empties = [], stelliums = [];
    for (var n = 1; n <= 12; n++) {
      var cnt = counts[n] || 0;
      if (cnt === 0) empties.push(n);
      else filled.push(n);
      if (cnt >= 3) stelliums.push({ house: n, count: cnt, title: (hd[n - 1] || {}).title || '' });
    }
    s.houseSpread = { filled: filled, empty: empties, stelliums: stelliums, counts: counts };

    item(s, 'Hogyan oszlanak el az égitestek',
      filled.length + ' házban áll égitest, ' + empties.length + ' üres',
      'Tíz égitest van tizenkét házra, ezért teljesen normális, hogy több ház ' +
      'üresen marad — a legtöbb képletben 5-7 ilyen van. Az üres ház NEM azt ' +
      'jelenti, hogy az az életterület hiányzik vagy nem működik: azt a csúcsán ' +
      'álló jegy és a ház ura irányítja, akit máshol találsz meg a képletben.');

    if (empties.length) {
      var eNames = empties.map(function (n) {
        return n + '. (' + ((hd[n - 1] || {}).title || '') + ')';
      });
      item(s, 'Égitest nélküli házaid', eNames.join(' · '),
        'Ezeknél a lenti kártyákban külön kiírjuk, hol keresd a szálat: melyik ' +
        'jegy áll a csúcsukon, és hol áll a ház ura.');
    }

    stelliums.forEach(function (st) {
      var who = [];
      c.list.forEach(function (p) { if (p.house === st.house) who.push(p.symbol + ' ' + p.name); });
      item(s, 'Halmozódás (stellium) a ' + st.house + '. házban',
        st.count + ' égitest: ' + who.join(', '),
        'Három vagy több égitest egy házban a képlet egyik súlypontja: ' +
        (st.title ? 'a(z) „' + st.title + '" területe ' : 'ez az életterület ') +
        'aránytalanul sok figyelmet és energiát kap az életedben. A hagyomány ' +
        'szerint az ilyen terület egyszerre a legnagyobb erősség és a legnagyobb ' +
        'lekötöttség: könnyen ide csúszik minden, míg a képlet üresebb részei ' +
        'háttérbe szorulnak.');
    });

    out.sections.push(s);
  }

  /* ================= bolygók részletesen ================= */

  function buildPlanetDetails(out) {
    var c = out.chart;
    var s = section('bolygok', 'A bolygók jelentése a képletedben', '☉', 'nyugati');
    var meta = get(D(), 'western.planets', []);
    function planetMeta(key) {
      for (var i = 0; i < meta.length; i++) if (meta[i].key === key) return meta[i];
      return null;
    }

    var list = c.list.slice();
    ['northNode', 'lilith'].forEach(function (k) {
      if (c.planets[k]) list.push(c.planets[k]);
    });

    s.planetDetails = list.map(function (p) {
      var pm = planetMeta(p.key) || {};
      var dig = dignityOf(p);

      // fenyszogei: a fo aspektusok elore, azon belul szorosabb orbis szerint
      var MAJOR = ['conjunction', 'opposition', 'trine', 'square', 'sextile'];
      var asps = (c.aspects || []).filter(function (a) {
        return a.a === p.key || a.b === p.key;
      }).sort(function (x, y) {
        var mx = MAJOR.indexOf(x.type) >= 0 ? 0 : 1;
        var my = MAJOR.indexOf(y.type) >= 0 ? 0 : 1;
        return mx !== my ? mx - my : x.orb - y.orb;
      }).slice(0, 6).map(function (a) {
        var other = a.a === p.key ? a.bName : a.aName;
        var otherKey = a.a === p.key ? a.b : a.a;
        var pair = [p.key, otherKey].sort().join('-');
        return {
          text: a.symbol + ' ' + a.name + ' — ' + other +
            (a.applying === true ? ' · közeledő' :
             (a.applying === false ? ' · távolodó' : '')),
          orb: a.orb.toFixed(1).replace('.', ',') + '°',
          exact: a.exactness > 0.8,
          interp: get(D(), 'westernExt.aspectText.' + pair + '.' + a.type, '')
        };
      });

      return {
        key: p.key, name: p.name, symbol: p.symbol,
        keyword: pm.keyword || '', description: pm.description || '',
        sign: p.sign.name, signSymbol: p.sign.symbol, deg: p.sign.text,
        retro: p.retrograde, speed: p.speed,
        house: p.house || null,
        signText: get(D(), 'western.planetInSign.' + p.key + '.' + p.sign.key, ''),
        houseText: p.house
          ? (get(D(), 'western.planetInHouse.' + p.key + '.' + p.house, '') ||
             get(D(), 'westernExt.planetInHouse.' + p.key + '.' + p.house, ''))
          : '',
        dignity: dig,
        degree: degreeBlock(p.lon, p.symbol + ' ' + p.name),
        aspects: asps
      };
    });

    if (!out.input.hasTime) {
      s.notes.push('Pontos születési idő nélkül a házak nem szerepelnek, ezért itt ' +
        'csak a jegy szerinti jelentés látszik.');
    }
    s.notes.push('A retrográd (℞) jelölés nem hibát jelent: a hagyomány szerint az ' +
      'ilyen bolygó befelé fordulva, lassabban és tudatosabban működik.');
    var apn = get(D(), 'westernDeep.applyingNote', '');
    if (apn) s.notes.push(apn);
    var critIntro = get(D(), 'degrees.critical.intro', '');
    if (critIntro) s.notes.push('Kritikus fokok: ' + critIntro);
    s.notes.push(SABIAN_NOTE);
    s.notes.push('A dekanátusok a modern, triplicitás-alapú felosztást követik: ' +
      'a jegy három harmadát a saját elemének három jegye uralja. Létezik egy másik, ' +
      'régebbi (kaldeus) rendszer is, amely eltérő uralkodókat ad.');
    out.sections.push(s);
  }

  /* ================= a képlet szerkezete és erőviszonyai ================= */

  var HU_PLANET_KEY = { 'Nap': 'sun', 'Hold': 'moon', 'Merkúr': 'mercury',
    'Vénusz': 'venus', 'Mars': 'mars', 'Jupiter': 'jupiter',
    'Szaturnusz': 'saturn', 'Uránusz': 'uranus', 'Neptunusz': 'neptune',
    'Plútó': 'pluto' };

  function dignityRow(signKey) {
    var dl = get(D(), 'western.dignities', []);
    for (var i = 0; i < dl.length; i++) if (dl[i].sign === signKey) return dl[i];
    return null;
  }

  function buildStructure(out) {
    var WD = get(D(), 'westernDeep', null);
    if (!WD) return;
    var c = out.chart;
    var s = section('szerkezet', 'A képlet szerkezete és erőviszonyai', '⚖', 'nyugati');
    var KEYS = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
      'saturn', 'uranus', 'neptune', 'pluto'];
    var hasTime = out.input.hasTime && c.houses;

    /* --- szekta --- */
    var isDay = null;
    if (hasTime) {
      isDay = c.planets.sun.house >= 7;         // 7–12. ház: a horizont felett
      var sd = isDay ? WD.sect.day : WD.sect.night;
      item(s, 'Szekta', sd.name, sd.text);
      out.sect = isDay ? 'day' : 'night';
    } else {
      s.notes.push(WD.sect.noTime);
    }

    /* --- a képlet ura --- */
    if (hasTime && c.ascSign) {
      var ascSd = signData(c.ascSign.key);
      var rulerKey = ascSd && HU_PLANET_KEY[ascSd.ruler];
      if (rulerKey && c.planets[rulerKey]) {
        var rp = c.planets[rulerKey];
        item(s, 'A képlet ura', rp.symbol + ' ' + rp.name + ' — ' +
          rp.sign.text + (rp.house ? ' · ' + rp.house + '. ház' : ''),
          WD.chartRuler.intro + ' ' + WD.chartRuler.line
            .replace(/%P%/g, rp.name).replace('%S%', c.ascSign.name));
      }
    }

    /* --- diszpozitor-lánc --- */
    var disp = {};
    KEYS.forEach(function (k) {
      var row = dignityRow(c.planets[k].sign.key);
      disp[k] = row ? HU_PLANET_KEY[row.domicile] : null;
    });
    var finals = KEYS.filter(function (k) { return disp[k] === k; });
    if (finals.length === 1) {
      item(s, 'Végdiszpozitor', c.planets[finals[0]].symbol + ' ' +
        c.planets[finals[0]].name,
        WD.dispositor.intro + ' ' +
        WD.dispositor.single.replace(/%P%/g, c.planets[finals[0]].name));
    } else if (finals.length > 1) {
      item(s, 'Végdiszpozitorok',
        finals.map(function (k) { return c.planets[k].name; }).join(', '),
        WD.dispositor.intro + ' ' + WD.dispositor.multiple
          .replace('%P%', finals.map(function (k) { return c.planets[k].name; }).join(', ')));
    } else {
      // korforgas: kovessuk a lancot a Naptol, amig ismetlodik
      var seen = [], cur = 'sun';
      while (cur && seen.indexOf(cur) < 0) { seen.push(cur); cur = disp[cur]; }
      var loop = cur ? seen.slice(seen.indexOf(cur)) : seen;
      item(s, 'Diszpozitor-körforgás',
        loop.map(function (k) { return c.planets[k].name; }).join(' → '),
        WD.dispositor.intro + ' ' + WD.dispositor.loop
          .replace('%P%', loop.map(function (k) { return c.planets[k].name; }).join(', ')));
    }

    /* --- Jones-féle képletalak --- */
    var lons = KEYS.map(function (k) { return c.planets[k].lon; })
      .sort(function (a, b) { return a - b; });
    var gaps = [], gi;
    for (gi = 0; gi < lons.length; gi++) {
      var nextL = lons[(gi + 1) % lons.length];
      gaps.push({ size: HCORE.norm360(nextL - lons[gi]), after: gi });
    }
    var maxGap = gaps.reduce(function (m, g) { return g.size > m.size ? g : m; }, gaps[0]);
    var arc = 360 - maxGap.size;

    // vödör: kilenc egy félkörben, egy különálló a túloldalon
    var bucketHandle = null;
    KEYS.forEach(function (k) {
      if (bucketHandle) return;
      var others = KEYS.filter(function (x) { return x !== k; })
        .map(function (x) { return c.planets[x].lon; })
        .sort(function (a, b) { return a - b; });
      var mg = 0;
      for (var q = 0; q < others.length; q++) {
        var g2 = HCORE.norm360(others[(q + 1) % others.length] - others[q]);
        if (g2 > mg) mg = g2;
      }
      var minDist = 999;
      others.forEach(function (ol) {
        var dd = HCORE.angleDiff(c.planets[k].lon, ol);
        if (dd < minDist) minDist = dd;
      });
      if (360 - mg <= 175 && minDist >= 55) bucketHandle = k;
    });

    var shape, shapeExtra = '';
    if (bucketHandle) {
      shape = WD.shape.bucket;
      shapeExtra = c.planets[bucketHandle].name;
    } else if (arc <= 125) shape = WD.shape.bundle;
    else if (arc <= 185) shape = WD.shape.bowl;
    else if (arc <= 245) {
      shape = WD.shape.locomotive;
      // a vezérbolygó: az üres harmad után zodiákus irányban első bolygó
      var leadLon = lons[(maxGap.after + 1) % lons.length];
      KEYS.forEach(function (k) {
        if (Math.abs(HCORE.norm360(c.planets[k].lon - leadLon)) < 0.01) {
          shapeExtra = c.planets[k].name;
        }
      });
    } else {
      var bigGaps = gaps.filter(function (g) { return g.size >= 55; }).length;
      if (bigGaps === 2) shape = WD.shape.seesaw;
      else if (bigGaps >= 3) shape = WD.shape.splay;
      else shape = WD.shape.splash;
    }
    item(s, 'A képlet alakja (Jones)', shape.name,
      WD.shape.intro + ' ' + shape.text.replace('%P%', shapeExtra || ''));

    /* --- féltekehangsúly --- */
    if (hasTime) {
      var top = 0, east = 0;
      KEYS.forEach(function (k) {
        var h = c.planets[k].house;
        if (h >= 7) top++;
        if (h >= 10 || h <= 3) east++;
      });
      var hemi = [];
      if (top >= 7) hemi.push(WD.hemispheres.south);
      else if (top <= 3) hemi.push(WD.hemispheres.north);
      if (east >= 7) hemi.push(WD.hemispheres.east);
      else if (east <= 3) hemi.push(WD.hemispheres.west);
      if (!hemi.length) hemi.push(WD.hemispheres.balanced);
      item(s, 'Féltekehangsúly',
        'fent ' + top + ' · lent ' + (10 - top) + ' · keleti ' + east +
        ' · nyugati ' + (10 - east),
        WD.hemispheres.intro + ' ' + hemi.join(' '));
    }

    /* --- esszenciális méltóságpontozás (a hét klasszikus bolygó) --- */
    var TRIP = {
      'Tűz': { day: 'Nap', night: 'Jupiter' },
      'Föld': { day: 'Vénusz', night: 'Hold' },
      'Levegő': { day: 'Szaturnusz', night: 'Merkúr' },
      'Víz': { day: 'Vénusz', night: 'Mars' }
    };
    var CLASSICAL = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    var CLASSICAL_HU = ['Nap', 'Hold', 'Merkúr', 'Vénusz', 'Mars', 'Jupiter', 'Szaturnusz'];
    var sectKey = isDay === false ? 'night' : 'day';

    var scored = CLASSICAL.map(function (k) {
      var p = c.planets[k];
      var row = dignityRow(p.sign.key) || {};
      var sd2 = signData(p.sign.key);
      var pts = 0, parts = [];
      var domicile = row.domicileTraditional || row.domicile;
      if (domicile === p.name) { pts += 5; parts.push('otthon (+5)'); }
      if (row.exaltation === p.name && CLASSICAL_HU.indexOf(row.exaltation) >= 0) {
        pts += 4; parts.push('erőben (+4)');
      }
      if (sd2 && TRIP[sd2.element] && TRIP[sd2.element][sectKey] === p.name) {
        pts += 3; parts.push('háromság ura (+3)');
      }
      var terms = get(D(), 'degrees.terms.' + p.sign.key, []);
      for (var t = 0; t < terms.length; t++) {
        if (p.sign.degree >= terms[t].from && p.sign.degree < terms[t].to) {
          if (terms[t].ruler === p.name) { pts += 2; parts.push('saját határ (+2)'); }
          break;
        }
      }
      var decans = get(D(), 'western.decans', []);
      for (var dc = 0; dc < decans.length; dc++) {
        if (decans[dc].sign === p.sign.name &&
            p.sign.degree >= decans[dc].from && p.sign.degree < decans[dc].to) {
          if (decans[dc].ruler === p.name) { pts += 1; parts.push('saját arc (+1)'); }
          break;
        }
      }
      if (row.detriment === p.name) { pts -= 5; parts.push('száműzetés (−5)'); }
      if (row.fall === p.name && CLASSICAL_HU.indexOf(row.fall) >= 0) {
        pts -= 4; parts.push('esés (−4)');
      }
      return { key: k, name: p.name, symbol: p.symbol, pts: pts, parts: parts,
        sign: p.sign.name };
    });

    scored.sort(function (a, b) { return b.pts - a.pts; });
    item(s, 'Méltóságpontok',
      scored.map(function (x) {
        return x.symbol + ' ' + (x.pts > 0 ? '+' : '') + x.pts;
      }).join(' · '),
      WD.dignityScore.intro);

    var strong = scored[0], weak = scored[scored.length - 1];
    item(s, 'A képlet bajnoka', strong.symbol + ' ' + strong.name + ' (' +
      (strong.pts > 0 ? '+' : '') + strong.pts + ' pont, ' + strong.sign + ')',
      (strong.parts.length ? strong.parts.join(', ') + ' — ' : '') +
      strong.name + ' ' + WD.dignityScore.strong);
    item(s, 'A leghalkabb bolygó', weak.symbol + ' ' + weak.name + ' (' +
      (weak.pts > 0 ? '+' : '') + weak.pts + ' pont, ' + weak.sign + ')',
      (weak.parts.length ? weak.parts.join(', ') + ' — ' : '') +
      weak.name + ' ' + WD.dignityScore.weak +
      (weak.pts === 0 && !weak.parts.length ? ' ' + WD.dignityScore.peregrine : ''));
    s.notes.push(WD.dignityScore.note);

    out.sections.push(s);
  }

  /* ================= Hold ================= */

  function buildMoonSection(out) {
    var s = section('hold', 'Hold és holdnaptár', '🌙', 'nyugati');
    var mp = out.chart.moonPhase;
    var phases = get(D(), 'chrono.moon.phases', []);
    var pd = null;
    for (var i = 0; i < phases.length; i++) if (phases[i].key === mp.key) { pd = phases[i]; break; }

    item(s, 'Születési holdfázis', mp.symbol + ' ' + mp.name +
      ' (' + Math.round(mp.illumination * 100) + '%-os megvilágítás)', pd ? pd.text : '');
    item(s, 'Holdkor', mp.age.toFixed(1).replace('.', ',') + ' napos hold', '');

    // a 8 születési holdfázis-típus (Rudhyar)
    var types = get(D(), 'exotic.moonPhaseTypes', []);
    var t = types[mp.index];
    if (t) item(s, 'Holdfázis-típusod', t.name, t.text);

    item(s, 'A Hold jegye', mp.sign.name, get(D(), 'chrono.moon.inSign.' + mp.sign.key, ''));

    var fm = get(D(), 'chrono.moon.fullMoonNames.' + out.input.month, null);
    if (fm) item(s, 'A születési hónap teliholdja', fm.name || '', fm.text || '');

    out.sections.push(s);
  }

  /* ================= védikus ================= */

  function buildVedic(out) {
    var s = section('vedikus', 'Védikus asztrológia (Jyotish)', '🕉', 'kelet');
    var utc = out.utc;
    var ay = HCORE.ayanamsa(utc);
    var sidSun = HCORE.toSidereal(out.chart.planets.sun.lon, utc);
    var sidMoon = HCORE.toSidereal(out.chart.planets.moon.lon, utc);
    var sunSign = HCORE.toSign(sidSun), moonSign = HCORE.toSign(sidMoon);

    s.notes.push('A védikus rendszer sziderikus zodiákust használ: a jegyek a valódi ' +
      'csillagképekhez igazodnak, ezért a nyugatihoz képest jelenleg ' +
      fmtDeg(ay) + '-kal eltolódnak.');

    item(s, 'Hold-jegy (Rashi)', moonSign.name + ' (' + moonSign.text + ')',
      'A védikus hagyományban ez a legfontosabb jegy — nem a napjegy. ' +
      (get(D(), 'western.planetInSign.moon.' + moonSign.key, '')
        ? 'A ' + moonSign.name + ' Hold nálad: ' +
          get(D(), 'western.planetInSign.moon.' + moonSign.key, '') : ''));
    var tropSun = out.chart.planets.sun.sign.name;
    item(s, 'Nap-jegy (sziderikus)', sunSign.name + ' (' + sunSign.text + ')',
      sunSign.name === tropSun
        ? ('Nálad a sziderikus és a nyugati napjegy ugyanaz maradt. A sziderikus ' +
           'pozíció nagyjából ' + fmtDeg(ay) + '-kal hátrébb esik, ezért csak akkor ' +
           'marad meg a jegy, ha a Nap a nyugati képletben a jegy utolsó néhány ' +
           'fokán áll — nálad ez a helyzet.')
        : ('A nyugati rendszerben ' + tropSun + ' vagy, itt viszont ' + sunSign.name +
           '. Ez nem ellentmondás: a két zodiákus más kiindulópontot használ, és a ' +
           'precesszió miatt mára nagyjából ' + fmtDeg(ay) + '-kal eltolódtak egymáshoz ' +
           'képest. Aki a jegyhatár közelében születik, ezért kap két különböző jegyet. ' +
           (get(D(), 'western.planetInSign.sun.' + sunSign.key, '')
             ? 'A sziderikus olvasat szerint tehát ez is benned él: ' +
               get(D(), 'western.planetInSign.sun.' + sunSign.key, '') : '')));

    var nk = C.nakshatra(sidMoon);
    if (nk.data) {
      item(s, 'Nakshatra (holdház)', nk.name + ' – ' + nk.pada + '. pada',
        (nk.data.text || '') + (nk.data.ruler ? ' Uralkodója: ' + nk.data.ruler + '.' : ''));
    } else {
      item(s, 'Nakshatra (holdház)', nk.name + ' – ' + nk.pada + '. pada', '');
    }

    var mz = C.manzil(sidMoon);
    if (mz.data) item(s, 'Arab holdház (manázil)', mz.data.name || '', mz.data.text || '');

    /* --- Vimshottari dasa: a védikus rendszer fő előrejelző eszköze --- */
    var vd = C.vimshottari(sidMoon, out.utc, new Date());
    if (vd && vd.current) {
      var dMeta = function (k) { return get(D(), 'easternExt.dasha.' + k, null); };
      var cur = dMeta(vd.current.key);
      item(s, 'Jelenlegi fő-időszakod (mahadasa)',
        vd.current.name + ' — ' + vd.current.from.getFullYear() + '–' +
        vd.current.to.getFullYear(),
        (cur ? cur.text + ' ' : '') +
        'Ez a ' + vd.current.years + ' éves szakasz ' +
        (vd.current.partial ? 'a születésedkor már részben eltelt.' : 'teljes egészében a tiéd.'));

      if (vd.next) {
        var nx = dMeta(vd.next.key);
        item(s, 'A következő szakaszod',
          vd.next.name + ' — ' + vd.next.from.toLocaleDateString('hu-HU') + '-től',
          nx ? nx.text : '');
      }

      item(s, 'Születéskori maradék',
        vd.firstLord.name + ' időszakából ' +
        vd.balanceYears.toFixed(1).replace('.', ',') + ' év volt még hátra',
        'A Vimshottari a Hold nakshatrájának urától indul, és onnan halad tovább ' +
        'a rögzített sorrendben. Ezért kezdődik a te ciklusod a ' +
        vd.firstLord.name + ' szakaszának közepén.');

      /* --- al-időszak (antardasa) a mahadasán belül --- */
      var YEAR_MS = 365.2425 * 86400000;
      var mahaIdx = -1;
      C.DASHA.forEach(function (d, di2) { if (d.key === vd.current.key) mahaIdx = di2; });
      if (mahaIdx >= 0) {
        var t = vd.current.from.getTime(), nowMs = Date.now(), sub = null;
        for (var ai = 0; ai < 9; ai++) {
          var ad = C.DASHA[(mahaIdx + ai) % 9];
          var len = vd.current.years * ad.years / 120 * YEAR_MS;
          if (nowMs >= t && nowMs < t + len) {
            sub = { lord: ad, from: new Date(t), to: new Date(t + len) };
            break;
          }
          t += len;
        }
        if (sub) {
          var subMeta = get(D(), 'easternExt.dasha.' + sub.lord.key, null);
          item(s, 'Al-időszak (antardasa)',
            vd.current.name + ' / ' + sub.lord.name + ' — ' +
            fmtTransitDate(sub.from) + ' – ' + fmtTransitDate(sub.to),
            get(D(), 'easternDeep.antardashaIntro', '') +
            (subMeta ? ' Az al-időszak ura most a ' + sub.lord.name + ': ' +
              subMeta.text : ''));
        }
      }

      s.dashaTable = vd.periods.slice(0, 9).map(function (x) {
        return {
          name: x.name, years: x.years,
          from: x.from.getFullYear(), to: x.to.getFullYear(),
          current: vd.current && x.from.getTime() === vd.current.from.getTime()
        };
      });
      var di = get(D(), 'easternExt.dashaIntro', '');
      if (di) s.notes.push(di);
      var dn = get(D(), 'easternExt.dashaNote', '');
      if (dn) s.notes.push(dn);
    }

    /* --- a kilenc graha sziderikus táblázata --- */
    var EDv = get(D(), 'easternDeep', null);
    if (EDv) {
      var rows = [];
      ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'].forEach(function (k) {
        var p = out.chart.planets[k];
        var sid = HCORE.toSign(HCORE.toSidereal(p.lon, utc));
        rows.push({ planet: p.name, symbol: p.symbol, sign: sid.name,
          deg: sid.text, retro: p.retrograde, house: null, speed: p.speed });
      });
      var rahuSid = HCORE.toSign(HCORE.toSidereal(out.chart.planets.northNode.lon, utc));
      var ketuSid = HCORE.toSign(HCORE.toSidereal(out.chart.planets.southNode.lon, utc));
      rows.push({ planet: 'Ráhu', symbol: '☊', sign: rahuSid.name, deg: rahuSid.text,
        retro: true, house: null, speed: -0.053 });
      rows.push({ planet: 'Ketu', symbol: '☋', sign: ketuSid.name, deg: ketuSid.text,
        retro: true, house: null, speed: -0.053 });
      s.table = { type: 'planets', rows: rows };
      item(s, 'A kilenc graha', '', EDv.grahaIntro);

      /* --- klasszikus jógák a sziderikus képletben --- */
      function sidIdx(k) {
        return HCORE.toSign(HCORE.toSidereal(out.chart.planets[k].lon, utc)).index;
      }
      var mIdx = sidIdx('moon');
      var yogaHits = [];
      var jupDist = ((sidIdx('jupiter') - mIdx) % 12 + 12) % 12;
      if ([0, 3, 6, 9].indexOf(jupDist) >= 0) yogaHits.push(EDv.yogas.gajakesari);
      if (sidIdx('sun') === sidIdx('mercury')) yogaHits.push(EDv.yogas.budhaAditya);
      var marsDist = ((sidIdx('mars') - mIdx) % 12 + 12) % 12;
      if (marsDist === 0 || marsDist === 6) yogaHits.push(EDv.yogas.chandraMangala);
      var lonely = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'].every(function (k) {
        var dd = ((sidIdx(k) - mIdx) % 12 + 12) % 12;
        return dd !== 0 && dd !== 1 && dd !== 11;
      });
      if (lonely) yogaHits.push(EDv.yogas.kemadruma);

      if (yogaHits.length) {
        yogaHits.forEach(function (y) {
          item(s, y.name, '', y.text);
        });
        s.notes.push(EDv.yogas.intro);
      } else {
        item(s, 'Klasszikus jógák', '', EDv.yogas.intro + ' ' + EDv.yogas.none);
      }

      /* --- összkép: a saját védikus adataid összefüggései --- */
      if (vd && vd.current) {
        var vsy = [];
        var nakRuler = nk.data && nk.data.ruler;
        var rashiSd = signData(moonSign.key);
        var rashiRuler = rashiSd && rashiSd.ruler;

        if (nakRuler && vd.current.name === nakRuler) {
          vsy.push('A mostani mahadasa ura (' + vd.current.name + ') éppen a ' +
            'holdházad ura is: „hazai pályás" életszakaszban jársz — a ' +
            'születési képleted alapígéretei most aktiválódnak a ' +
            'legközvetlenebbül.');
        } else if (rashiRuler && vd.current.name === rashiRuler) {
          vsy.push('A mostani mahadasa ura (' + vd.current.name + ') egyben a ' +
            'holdjegyed (Rashi) ura: az időszak az érzelmi alaptermészetedet ' +
            'szólítja meg — ismerős terepen mélyülsz, nem idegenen tanulsz.');
        } else if (nakRuler) {
          vsy.push('A mostani ' + vd.current.name + '-mahadasa más urat hoz, mint ' +
            'a holdházadé (' + nakRuler + '): olyan minőséget gyakorolsz most, ' +
            'amely nem az alapfelszerelésed — az ilyen időszak tágít, még ha ' +
            'idegenebbül is érződik.');
        }

        if (yogaHits.length) {
          var yNames = yogaHits.map(function (y) { return y.name; }).join(', ');
          var hasKema = yogaHits.some(function (y) {
            return y === EDv.yogas.kemadruma;
          });
          if (hasKema && yogaHits.length > 1) {
            vsy.push('A képletedben a ' + yNames + ' együtt áll fenn: a ' +
              'Kemadruma magány-hajlamát a többi jóga a hagyomány szerint ' +
              'érdemben enyhíti — a belső hullámzásod mögött valódi tartalék van.');
          } else if (!hasKema) {
            vsy.push('Mindehhez a ' + yNames + ' ad többleterőt: a mostani ' +
              'időszak témáihoz nem üres kézzel érkezel.');
          }
        }
        if (vsy.length) {
          item(s, 'Összkép — a védikus képed összefüggései', '', vsy.join(' '));
        }
      }
    }

    out.sections.push(s);
  }

  /* ================= kínai ================= */

  function buildChinese(out) {
    var s = section('kinai', 'Kínai asztrológia', '🐉', 'kelet');
    var i = out.input;
    var sunLon = out.chart.planets.sun.lon;
    var bz = C.fourPillars(i.year, i.month, i.day, i.hasTime ? i.hour : 12, i.minute || 0, sunLon);

    var animals = get(D(), 'eastern.animals', []);
    function animalData(key) {
      for (var k = 0; k < animals.length; k++) if (animals[k].key === key) return animals[k];
      return null;
    }
    var yearAnimal = animalData(bz.year.animal);
    out.summary.chineseAnimal = bz.year.animalHu;
    out.summary.chineseElement = bz.year.elementHu;

    item(s, 'Év állatjegye', bz.year.elementHu + ' ' + bz.year.animalHu +
      ' (' + bz.year.yinYang + ') ' + bz.year.cn, yearAnimal ? yearAnimal.description : '');

    var comboText = get(D(), 'eastern.animalElement.' + bz.year.animal + '.' + bz.year.element, '');
    if (comboText) item(s, 'Elem és állat együtt', bz.year.elementHu + ' ' + bz.year.animalHu, comboText);

    if (yearAnimal) {
      item(s, 'Jellemzők', (yearAnimal.positive || []).join(', ') +
        ' — árnyoldal: ' + (yearAnimal.negative || []).join(', '), '');
      // a trigon, a titkos barat es az utkozes hatterenek kifejtese
      var myHu = bz.year.animalHu;
      var myTrine = null, myFriend = null, myClash = null;
      (get(D(), 'eastern.trines', []) || []).forEach(function (t) {
        if ((t.animals || []).indexOf(myHu) >= 0) myTrine = t;
      });
      (get(D(), 'eastern.secretFriends', []) || []).forEach(function (f) {
        if ((f.pair || []).indexOf(myHu) >= 0) myFriend = f;
      });
      (get(D(), 'eastern.conflicts', []) || []).forEach(function (cf) {
        if ((cf.pair || []).indexOf(myHu) >= 0) myClash = cf;
      });
      var partnerTxt = [];
      if (myTrine) {
        partnerTxt.push(myTrine.name + ': ' +
          myTrine.animals.filter(function (a) { return a !== myHu; }).join(' és ') +
          ' a hármas szövetségeseid. ' + (myTrine.text || ''));
      }
      if (myFriend) {
        var other = myFriend.pair.filter(function (a) { return a !== myHu; })[0];
        partnerTxt.push('Titkos barátod a ' + other + ': ' + (myFriend.text || ''));
      }
      if (myClash) {
        var foe = myClash.pair.filter(function (a) { return a !== myHu; })[0];
        partnerTxt.push('Ütköző jegyed a ' + foe + ' — a szemközti állat: ' +
          (myClash.text || ''));
      }
      item(s, 'Kikkel illesz össze', (yearAnimal.best || []).join(', ') +
        (yearAnimal.worst && yearAnimal.worst.length
          ? ' · Ütközés: ' + yearAnimal.worst.join(', ') : ''),
        partnerTxt.join(' '));
    }

    // belső és titkos állat
    var inner = C.findByRange(get(D(), 'eastern.innerAnimal', []), i.month, i.day);
    if (inner) item(s, 'Belső állat (születési hónap)', inner.animal || '', inner.text || '');
    if (i.hasTime) {
      var sec = C.secretAnimal(i.hour);
      var hoursList = get(D(), 'eastern.doubleHours', []);
      var hd = hoursList[sec.index];
      item(s, 'Titkos állat (születési óra)', sec.name, hd ? hd.text : '');
    } else {
      s.notes.push('A titkos állat és az órapillér csak pontos születési idővel határozható meg.');
    }

    // Ba Zi négy pillér
    var PM = function (k) { return get(D(), 'easternExt.pillarMeaning.' + k, ''); };
    s.table = {
      type: 'bazi', rows: [
        { label: 'Év pillére', value: bz.year.label, cn: bz.year.cn, note: PM('ev') },
        { label: 'Hónap pillére', value: bz.month.label, cn: bz.month.cn, note: PM('honap') },
        { label: 'Nap pillére', value: bz.day.label, cn: bz.day.cn, note: PM('nap') },
        { label: 'Óra pillére', value: i.hasTime ? bz.hour.label : '—',
          cn: i.hasTime ? bz.hour.cn : '', note: i.hasTime ? PM('ora') : '' }
      ]
    };
    item(s, 'Nap Ura (Day Master)', bz.dayMasterYinYang + ' ' + bz.dayMasterHu,
      get(D(), 'eastern.dayMasterText.' + bz.dayMaster, '') +
      ' A Ba Zi rendszerben ez az elem képvisel téged magadat a képletben.');

    /* --- elemmérleg: a Ba Zi lelke --- */
    var bal = C.baziBalance(bz, i.hasTime);
    out.baziBalance = bal;
    var EX = function (path, fb) { return get(D(), 'easternExt.' + path, fb || ''); };

    item(s, 'A Nap Urad erőssége',
      C.ELEM_HU[bal.dayMaster] + ' — ' + bal.support + '/' + bal.total +
      ' írásjegy támogatja (' + Math.round(bal.ratio * 100) + '%)',
      EX('dayMasterStrength.' + bal.strength + '.text') + ' ' +
      EX('dayMasterByElement.' + bal.dayMaster + '.' + bal.strength));

    item(s, 'Legerősebb elemed', C.ELEM_HU[bal.strongest] +
      ' (' + bal.counts[bal.strongest] + ' írásjegy)',
      EX('elementExcess.' + bal.strongest));

    if (bal.missing.length) {
      item(s, 'Hiányzó elem', bal.missing.map(function (k) { return C.ELEM_HU[k]; }).join(', '),
        bal.missing.map(function (k) { return EX('elementMissing.' + k); })
          .filter(Boolean).join(' '));
    }

    item(s, 'Kedvező elemed', C.ELEM_HU[bal.favorable],
      EX('favorableElement.' + bal.favorable));

    s.baziBalance = bal;

    /* --- az aktuális év viszonya --- */
    var now = new Date();
    var rel = C.chineseYearRelation(bz.year.animal, now.getFullYear(),
      now.getMonth() + 1, now.getDate());
    var relMeta = get(D(), 'easternExt.yearRelation.' + rel.relation, null);
    item(s, 'A mostani év (' + rel.year + ' — ' + rel.animalHu + ') viszonya',
      relMeta ? relMeta.name : rel.relation, relMeta ? relMeta.text : '');

    /* --- ágkapcsolatok a saját pillérek közt --- */
    var ED = get(D(), 'easternDeep', null);
    if (ED && ED.branchRelations) {
      var BR = ED.branchRelations;
      var pl = [['year', bz.year], ['month', bz.month], ['day', bz.day]];
      if (i.hasTime) pl.push(['hour', bz.hour]);
      var bIdx = function (p) { return C.BRANCH_ANIMAL.indexOf(p.animal); };
      var LIUHE = { '0-1': 1, '2-11': 1, '3-10': 1, '4-9': 1, '5-8': 1, '6-7': 1 };
      var SANHE = [[8, 0, 4], [2, 6, 10], [5, 9, 1], [11, 3, 7]];
      var rels = [];
      for (var bi = 0; bi < pl.length; bi++) {
        for (var bj = bi + 1; bj < pl.length; bj++) {
          var x = bIdx(pl[bi][1]), y = bIdx(pl[bj][1]);
          var lo = Math.min(x, y), hi = Math.max(x, y);
          var names2 = BR.pillarNames[pl[bi][0]] + ' ↔ ' + BR.pillarNames[pl[bj][0]];
          var animals2 = pl[bi][1].animalHu + ' – ' + pl[bj][1].animalHu;
          if (LIUHE[lo + '-' + hi]) {
            rels.push({ l: 'Hat-harmónia: ' + animals2, n: names2, t: BR.liuhe });
          } else if ((x + 6) % 12 === y) {
            rels.push({ l: 'Ütközés: ' + animals2, n: names2, t: BR.chong });
          } else if (x !== y && SANHE.some(function (g) {
            return g.indexOf(x) >= 0 && g.indexOf(y) >= 0;
          })) {
            rels.push({ l: 'Hármas harmónia: ' + animals2, n: names2, t: BR.sanhe });
          }
        }
      }
      if (rels.length) {
        rels.forEach(function (r) {
          item(s, r.l, r.n, r.t);
        });
        s.notes.push(BR.intro);
      } else {
        item(s, 'Ágkapcsolatok a pilléreid közt', '', BR.intro + ' ' + BR.none);
      }
    }

    /* --- Da Yun: tízéves szerencseoszlopok --- */
    if (ED && ED.dayun) {
      if (!i.gender) {
        item(s, 'Nagy szerencseoszlopok (Da Yun)', '', ED.dayun.noGender);
      } else {
        var forward = (bz.year.yinYang === 'Yang') === (i.gender === 'ferfi');
        // a legközelebbi jié (szoláris hónapkezdet): a Nap hossza ≡ 15 (mod 30)
        var curLon = out.chart.planets.sun.lon;
        var offset = HCORE.norm360(curLon - 15) % 30;      // ennyivel a jié után
        var degs = forward ? (30 - offset) : offset;
        var days = degs / 0.9856;
        // finomítás egy iterációval a valódi napsebességgel
        var probe = new Date(out.utc.getTime() + (forward ? 1 : -1) * days * 86400000);
        var probeLon = HCORE.eclipticLongitude('Sun', probe);
        var missDeg = HCORE.norm360(probeLon - 15) % 30;
        if (missDeg > 15) missDeg -= 30;
        days += (forward ? -1 : 1) * missDeg / 0.9856;
        var startAge = Math.max(0.2, days / 3);

        var STEM_ELEM2 = ['fa', 'fa', 'tuz', 'tuz', 'fold', 'fold', 'fem', 'fem', 'viz', 'viz'];
        var BRANCH_ELEM = ['viz', 'fold', 'fa', 'fa', 'fold', 'tuz',
          'tuz', 'fold', 'fem', 'fem', 'fold', 'viz'];
        var CONTROLS = { fa: 'fold', fold: 'viz', viz: 'tuz', tuz: 'fem', fem: 'fa' };
        var burdening = bal.strength === 'weak'
          ? CONTROLS[bal.dayMaster]                          // ami a gyenge Nap Urat töri
          : bal.dayMaster;                                   // ami az erőset tovább duzzasztja
        var msIdx = C.STEMS.indexOf(bz.month.stem);
        var mbIdx = C.BRANCH_ANIMAL.indexOf(bz.month.animal);
        var ageNow = out.age.years;
        var luck = [];
        for (var n = 1; n <= 8; n++) {
          var st = ((msIdx + (forward ? n : -n)) % 10 + 10) % 10;
          var br = ((mbIdx + (forward ? n : -n)) % 12 + 12) % 12;
          var aFrom = startAge + (n - 1) * 10;
          var els = [STEM_ELEM2[st], BRANCH_ELEM[br]];
          var tone = els.indexOf(bal.favorable) >= 0 ? 'favorable'
            : (els.indexOf(burdening) >= 0 ? 'unfavorable' : 'neutral');
          luck.push({
            name: C.ELEM_HU[STEM_ELEM2[st]] + ' ' + C.ANIMAL_HU[br],
            from: Math.round(i.year + aFrom),
            to: Math.round(i.year + aFrom + 10),
            years: Math.round(aFrom) + '–' + Math.round(aFrom + 10) + ' év',
            current: ageNow >= aFrom && ageNow < aFrom + 10,
            tone: tone
          });
        }
        s.luckPillars = luck;
        var curLuck = luck.filter(function (L) { return L.current; })[0];
        item(s, 'Nagy szerencseoszlopok (Da Yun)',
          'első váltás ' + startAge.toFixed(1).replace('.', ',') + ' évesen · ' +
          (forward ? 'előre haladó' : 'visszafelé haladó') + ' sor',
          ED.dayun.intro + ' ' + (forward ? ED.dayun.forward : ED.dayun.backward) +
          (curLuck ? ' A mostani évtizeded a ' + curLuck.name + ' oszlop — ' +
            ED.dayun[curLuck.tone] : ''));
        s.notes.push(ED.dayun.note);
      }
    }

    /* --- összkép: a saját képletelemeid viszonyaiból levont következtetés --- */
    (function () {
      var GEN = { fa: 'tuz', tuz: 'fold', fold: 'fem', fem: 'viz', viz: 'fa' };
      var CTRL = { fa: 'fold', fold: 'viz', viz: 'tuz', tuz: 'fem', fem: 'fa' };
      var dm = bal.dayMaster, strong = bal.strongest;
      var sy = [];

      if (strong === dm) {
        sy.push('A képleted túlsúlyos eleme ugyanaz, mint a Nap Urad (' +
          C.ELEM_HU[dm] + '): önerős, magabiztos szerkezet — a fő kérdésed nem az, ' +
          'honnan szerezz erőt, hanem hogy mibe öntsd, mielőtt önjáróvá válik.');
      } else if (GEN[strong] === dm) {
        sy.push('A túlsúlyos ' + C.ELEM_HU[strong] + ' elem a termelési körben épp ' +
          'a Nap Uradat (' + C.ELEM_HU[dm] + ') táplálja: mély, folyamatosan ' +
          'utántöltődő tartalékon állsz — a kitartás a természetes erőforrásod.');
      } else if (CTRL[strong] === dm) {
        sy.push('A túlsúlyos ' + C.ELEM_HU[strong] + ' elem a vezérlési körben ' +
          'a Nap Uraddal (' + C.ELEM_HU[dm] + ') szemben áll: a képleted ' +
          'alapfeszültsége, hogy a legerősebb belső anyagod épp azt nyomja, aki ' +
          'vagy. Ez edz — de figyeld, mikor válik túlterheléssé.');
      } else if (GEN[dm] === strong) {
        sy.push('A Nap Urad (' + C.ELEM_HU[dm] + ') a termelési körben épp a ' +
          'túlsúlyos ' + C.ELEM_HU[strong] + ' elemet táplálja: az energiád ' +
          'természetes iránya a kiadás — sokat adsz ki magadból, ezért a ' +
          'feltöltődést tudatosan kell beépítened.');
      } else {
        sy.push('A Nap Urad (' + C.ELEM_HU[dm] + ') és a túlsúlyos ' +
          C.ELEM_HU[strong] + ' elem a vezérlési körben úgy áll, hogy te vagy ' +
          'az irányító oldalon: sok belső anyagot tudsz megfegyelmezni és ' +
          'formába önteni — vezetői mintázat.');
      }

      // az állataid egymáshoz képest: év (külső) vs titkos (ösztönös)
      if (i.hasTime) {
        var yA = C.BRANCH_ANIMAL.indexOf(bz.year.animal);
        var hA = C.BRANCH_ANIMAL.indexOf(bz.hour.animal);
        var SANHE2 = [[8, 0, 4], [2, 6, 10], [5, 9, 1], [11, 3, 7]];
        if (yA === hA) {
          sy.push('Az év- és az óra-állatod ugyanaz (' + bz.year.animalHu +
            '): amit a világ lát belőled, és ami ösztönösen vagy, nálad ' +
            'ritka mértékben egybeesik — kifelé is hiteles vagy.');
        } else if ((yA + 6) % 12 === hA) {
          sy.push('Az év-állatod (' + bz.year.animalHu + ') és a titkos állatod (' +
            bz.hour.animalHu + ') ütköző pár: a külső szereped és a legbelső ' +
            'ösztöneid két irányba húznak — a környezeted gyakran mást lát, ' +
            'mint amit belül élsz. A kettő összebékítése életfeladat.');
        } else if (SANHE2.some(function (g) {
          return g.indexOf(yA) >= 0 && g.indexOf(hA) >= 0;
        })) {
          sy.push('Az év-állatod (' + bz.year.animalHu + ') és a titkos állatod (' +
            bz.hour.animalHu + ') ugyanahhoz a hármas szövetséghez tartozik: a ' +
            'külső szereped és az ösztöneid egy irányba húznak — amit elkezdesz, ' +
            'azt belülről is fedezed.');
        }
      }

      // a mostani helyzet: évviszony + évtized együtt
      var relGood = rel.relation === 'trigon';
      var relBad = rel.relation === 'utkozes' || rel.relation === 'benming';
      var luckNow = s.luckPillars ? s.luckPillars.filter(function (L) {
        return L.current;
      })[0] : null;
      if (luckNow) {
        var toneName = {
          favorable: 'kedvező elemű',
          unfavorable: 'munkásabb, a Nap Uradat terhelő elemű',
          neutral: 'semleges elem-időjárású'
        }[luckNow.tone];
        var yearClause = relGood
          ? 'az idei ' + rel.animalHu + '-év a hármas szövetségesed'
          : (relBad
            ? (rel.relation === 'benming'
              ? 'idén épp a saját jegyed éve (Ben Ming Nian) fut, amit a hagyomány hullámzónak tart'
              : 'az idei ' + rel.animalHu + '-év ütközik a jegyeddel')
            : 'az idei ' + rel.animalHu + '-év semleges viszonyban áll a jegyeddel');
        var concl;
        if (luckNow.tone === 'favorable') {
          concl = relGood
            ? 'kettős hátszélben vagy — a nagyobb lépéseknek most van itt az ideje.'
            : (relBad
              ? 'az évtized hátszele megmarad, de idén érdemes visszavenni a tempót — az évtized hosszabb, mint az év.'
              : 'az évtized hátszele a meghatározó — használd ki.');
        } else if (luckNow.tone === 'unfavorable') {
          concl = relGood
            ? 'a nagyobb terepen küzdesz, de az idei év könnyít — az idei lehetőségeket ragadd meg.'
            : (relBad
              ? 'a hagyomány ilyenkor a megőrzést, rendezést, tanulást ajánlja a terjeszkedés helyett — ami most lassúnak tűnik, később alapnak bizonyul.'
              : 'az évtized kér türelmet — az idei év legalább nem nehezít rajta.');
        } else {
          concl = relGood
            ? 'így az idei támogató év a hangadó — élj vele.'
            : (relBad
              ? 'így az idei év feszültsége a hangadó — az óvatos tervezés éve.'
              : 'se hátszél, se ellenszél — az számít, mit teszel.');
        }
        sy.push('A mostani évtized (' + luckNow.name + ') ' + toneName +
          ', és ' + yearClause + ': ' + concl);
      }

      item(s, 'Összkép — a képletelemeid egymás közt', '', sy.join(' '));
    })();

    if (bz.newYear) {
      s.notes.push('A ' + i.year + '-es kínai újév: ' + bz.newYear[0] + '. hó ' +
        bz.newYear[1] + '. — az állatjegy ehhez a határhoz igazodik, nem január 1-jéhez.');
    }
    if (!i.hasTime) {
      s.notes.push('Pontos születési idő híján az órapillér hiányzik, ezért az ' +
        'elemmérleg hat írásjegyből készült nyolc helyett.');
    }
    out.chineseBazi = bz;
    out.sections.push(s);
  }

  function buildKoreanJapanese(out) {
    var s = section('koreai', 'Koreai, japán és más kelet-ázsiai olvasat', '🏯', 'kelet');
    var bz = out.chineseBazi;
    if (!bz) return;

    var tti = get(D(), 'eastern.korean.ttiNames.' + bz.year.animal, '');
    var dmEl = bz.dayMaster;
    item(s, 'Koreai tti (띠)', tti || bz.year.animalHu,
      get(D(), 'easternExt.sajuByElement.' + dmEl, '') ||
      get(D(), 'eastern.korean.intro', ''));

    var gh = get(D(), 'easternExt.gunghapByAnimal.' + bz.year.animal, '');
    if (gh) item(s, 'Gunghap — kivel illesz össze', '', gh);

    var jp = get(D(), 'eastern.japanese', null);
    if (jp) {
      // a japán évhatár január 1., ezért a jegy eltérhet
      var jpYear = out.input.year;
      var jpIdx = ((jpYear - 4) % 12 + 12) % 12;
      var jpAnimal = C.ANIMAL_HU[jpIdx];
      var jpKey = C.BRANCH_ANIMAL[jpIdx];
      item(s, 'Japán eto (十二支)',
        jpAnimal + (jpAnimal !== bz.year.animalHu ? ' — eltér a kínaitól!' : ''),
        get(D(), 'easternExt.etoByAnimal.' + jpKey, '') ||
        ((jp.intro || '') + ' ' + (jp.note || '')));
      if (jpAnimal !== bz.year.animalHu) {
        s.notes.push('A japán rendszer január 1-jén vált évet, a kínai a holdújévkor — ' +
          'ezért kaphatsz két különböző állatjegyet. Te a határ előtt születtél.');
      }
    }

    var vn = get(D(), 'eastern.vietnamese', null);
    if (vn) {
      var map = vn.animalMap || {};
      var vName = map[bz.year.animal] || bz.year.animalHu;
      item(s, 'Vietnami zodiákus', vName, vn.intro || '');
    }

    /* --- kilenc csillag ki (japán honmeisei) --- */
    var NSK = get(D(), 'easternDeep.nineStarKi', null);
    if (NSK) {
      var ky = out.input.year;
      if (out.input.month < 2 || (out.input.month === 2 && out.input.day < 4)) ky--;
      var ds = ky;
      while (ds > 9) {
        ds = String(ds).split('').reduce(function (a, b) { return a + (+b); }, 0);
      }
      var star = 11 - ds;
      if (star > 9) star -= 9;
      var sMeta = NSK.stars[star];
      if (sMeta) {
        // keresztkapcsolat a Ba Zi-vel: milyen elemet hoz a csillagod
        var STAR_ELEM = { 1: 'viz', 2: 'fold', 3: 'fa', 4: 'fa', 5: 'fold',
          6: 'fem', 7: 'fem', 8: 'fold', 9: 'tuz' };
        var cross = '';
        var balK = out.baziBalance;
        if (balK) {
          var se = STAR_ELEM[star];
          if (se === balK.favorable) {
            cross = ' Figyelemre méltó összefüggés: a japán csillagod épp azt az ' +
              'elemet (' + C.ELEM_HU[se] + ') hozza, amelyre a Ba Zi elemmérleged ' +
              'szerint a legnagyobb szükséged van — a két rendszer itt ugyanazt ' +
              'az irányt jelöli ki neked.';
          } else if (se === balK.dayMaster) {
            cross = ' A japán csillagod ugyanazt az elemet (' + C.ELEM_HU[se] +
              ') képviseli, mint a Ba Zi Nap Urad: a két rendszer egybehangzóan ' +
              'ezt az elemet teszi a személyiséged magjává.';
          } else if (balK.missing && balK.missing.indexOf(se) >= 0) {
            cross = ' Érdekes összefüggés: a japán csillagod épp azt az elemet (' +
              C.ELEM_HU[se] + ') hozza, amely a Ba Zi képletedből teljesen ' +
              'hiányzik — a japán olvasat mintha pótolná, amit a kínai hiányol.';
          }
        }
        item(s, 'Kilenc csillag ki — honmeisei', sMeta.name,
          NSK.intro + ' ' + sMeta.text + cross);
      }
    }

    var tb = get(D(), 'eastern.tibetan', null);
    if (tb && tb.mewa) {
      // Mewa: kilencéves ciklus, a rabjung-rendszer szerint visszafelé forog
      var mewaNum = ((2 - (out.input.year - 1927)) % 9 + 9) % 9 + 1;
      var mw = tb.mewa[mewaNum - 1];
      if (mw) item(s, 'Tibeti Mewa', mewaNum + ' – ' + (mw.color || ''), mw.text || '');
    }
    out.sections.push(s);
  }

  /* ================= numerológia ================= */

  function buildNumerology(out) {
    var s = section('numerologia', 'Numerológia', '🔢', 'szam');
    var i = out.input;
    var lp = C.lifePath(i.year, i.month, i.day);
    var lpd = get(D(), 'numbers.lifePath.' + lp, null);
    out.summary.lifePath = lp;

    item(s, 'Életút-szám', String(lp) + (lpd && lpd.title ? ' – ' + lpd.title : ''),
      lpd ? lpd.description : '');
    if (lpd && lpd.strengths) item(s, 'Erősségek', '', lpd.strengths);
    if (lpd && lpd.challenges) item(s, 'Kihívások', '', lpd.challenges);

    var bd = get(D(), 'numbers.birthdayNumber.' + i.day, '');
    if (bd) item(s, 'Születésnap-szám', String(i.day), bd);

    if (i.name && i.name.trim()) {
      var nn = C.nameNumbers(i.name);
      if (nn) {
        item(s, 'Sorsszám (teljes név)', String(nn.destiny), get(D(), 'numbers.destinyNumber.' + nn.destiny, ''));
        item(s, 'Lélekszám (magánhangzók)', String(nn.soul), get(D(), 'numbers.soulNumber.' + nn.soul, ''));
        item(s, 'Személyiségszám (mássalhangzók)', String(nn.personality),
          get(D(), 'numbers.personalityNumber.' + nn.personality, ''));
        s.notes.push('A névszámok a magyar ékezetes betűk ékezettelenített alakjából készültek.');
      }
    } else {
      s.notes.push('A név megadásával a sorsszám, a lélekszám és a személyiségszám is kiszámítható.');
    }

    var py = C.personalYear(i.month, i.day, new Date().getFullYear());
    item(s, 'Személyes éved (' + new Date().getFullYear() + ')', String(py),
      get(D(), 'numbers.personalYear.' + py, ''));

    out.sections.push(s);
  }

  /* ================= Pitagorasz-négyzet (pszichomátrix) ================= */

  function buildPsychomatrix(out) {
    var s = section('pszichomatrix', 'Pitagorasz-négyzet (pszichomátrix)', '▦', 'szam');
    var i = out.input;
    var pm = C.psychomatrix(i.year, i.month, i.day);
    var PD = get(D(), 'psycho', null);
    if (!PD) return;

    item(s, 'Munkaszámok', pm.working.join(' · '),
      PD.workingNumbers + (pm.rule2000
        ? ' (2000 után születetteknél a harmadik munkaszám a bevett szabály szerint ' +
          'az első + 19 — ez a XX. századi nemzedékek „örökségét" jelképezi.)' : ''));

    // cellák: csak a jelentőseket írjuk ki tételesen (a rács mindent mutat)
    for (var n = 1; n <= 9; n++) {
      var cnt = pm.counts[n];
      var cell = PD.cells[n];
      if (!cell) continue;
      var lvl = cnt >= 5 ? 5 : cnt;
      var txt = cell.levels[lvl] || '';
      item(s, cell.name + ' (' + n + ')',
        cnt ? pm.cellStr(n) + ' — ' + cnt + ' db' : 'üres', txt);
    }

    // sorok, oszlopok, átlók
    var lineOrder = ['celratores', 'csalad', 'stabilitas', 'onertekeles',
      'anyagiak', 'tehetseg', 'szellemiseg', 'temperamentum'];
    var lineRows = [];
    lineOrder.forEach(function (k) {
      var meta = PD.lines[k];
      if (!meta) return;
      var v = pm.lines[k];
      var band = v >= 5 ? 'strong' : (v >= 3 ? 'normal' : 'weak');
      lineRows.push({ name: meta.name, count: v, text: meta[band] });
    });
    s.matrixLines = lineRows;
    s.matrix = pm;

    s.notes.push(PD.intro);
    s.notes.push(PD.disclaimer);
    out.sections.push(s);
  }

  /* ========== Kronobiológiai pszichogenetika (ХВД csakraanalízis) ========== */

  function buildHvd(out) {
    var HD = get(D(), 'hvd', null);
    if (!HD) return;
    var i = out.input;
    var pr = C.hvdProfile(i.year, i.month, i.day);
    if (!pr) return;

    var s = section('hvd', 'Kronobiológiai pszichogenetika (csakraanalízis)',
      '\u269B', 'ezoterikus');

    item(s, 'A három marker',
      'fizikai ' + pr.markers.fizikai + ' · érzelmi ' + pr.markers.erzelmi +
      ' · intellektuális ' + pr.markers.intellektualis,
      'A 23, 28 és 33 napos ciklus állása a születésedkor. Ezek indexelik a ' +
      'rendszer tábláit, és minden további érték ezekből következik.');

    pr.contours.forEach(function (c) {
      var meta = HD.contours[c.key];
      item(s, meta.name + ' — ' + (c.type || ''),
        c.parts[0] + '% + ' + c.parts[1] + '% = ' + c.sum,
        meta.text);
    });

    item(s, 'Életenergia', String(pr.lifeEnergy),
      'A három kontúr összege — a rendszer szerint ez az általános energiaszinted.');

    /* --- kiértékelés a rendszer saját skálája szerint --- */
    var HDD = get(D(), 'hvdDeep', null);
    if (HDD && pr.chakras && pr.chakras.length) {
      var UPPER = ['szahaszrara', 'adzsna', 'visuddha'];
      var LOWER = ['manipura', 'szvadhisthana', 'muladhara'];
      var evalParts = [HDD.intro];
      var excess = pr.chakras.filter(function (ch) { return ch.band.key === 'tulzott'; });
      var deficit = pr.chakras.filter(function (ch) { return ch.band.key === 'gyenge'; });

      if (!excess.length && !deficit.length) {
        evalParts.push(HDD.allNormal);
      } else {
        excess.forEach(function (ch) {
          if (HDD.excess[ch.key]) {
            evalParts.push(ch.name + ' (' + ch.value + '%): ' + HDD.excess[ch.key] + '.');
          }
        });
        deficit.forEach(function (ch) {
          if (HDD.deficit[ch.key]) {
            evalParts.push(ch.name + ' (' + ch.value + '%): ' + HDD.deficit[ch.key] + '.');
          }
        });
      }

      var avg = function (keys) {
        var vals = pr.chakras.filter(function (ch) { return keys.indexOf(ch.key) >= 0; });
        return vals.length
          ? vals.reduce(function (a, ch) { return a + ch.value; }, 0) / vals.length : null;
      };
      var up = avg(UPPER), lo = avg(LOWER);
      if (up != null && lo != null) {
        if (up - lo >= 15) evalParts.push(HDD.upperTilt);
        else if (lo - up >= 15) evalParts.push(HDD.lowerTilt);
        else evalParts.push(HDD.balancedTilt);
      }

      item(s, 'Kiértékelés — a csakraszerkezeted összképe', '', evalParts.join(' '));
      s.notes.push(HDD.disclaimer);
    }

    s.hvd = pr;
    s.notes.push(HD.intro);
    s.notes.push(HD.sahasraraNote);
    s.notes.push(HD.disclaimer);
    out.sections.push(s);
  }

  /* ================= Sorsmátrix (Destiny Matrix) ================= */

  function buildDestinyMatrix(out) {
    var s = section('sorsmatrix', 'Sorsmátrix (Destiny Matrix)', '\u2726', 'szam');
    var i = out.input;
    var dm = C.destinyMatrix(i.year, i.month, i.day);
    var MD = get(D(), 'matrix', null);
    if (!MD) return;

    function arc(n) {
      var t = get(D(), 'numbers.tarotCards.' + n, null);
      return t ? (n + '. ' + t.name) : String(n);
    }
    function arcText(n) {
      return get(D(), 'matrix.arcana.' + n, '') ||
        get(D(), 'numbers.tarotCards.' + n + '.text', '');
    }

    item(s, 'A fő feladatod (középpont)', arc(dm.E),
      (MD.positions.E || '') + ' ' + arcText(dm.E));
    item(s, 'Személyiség (nap)', arc(dm.A), (MD.positions.A || '') + ' ' + arcText(dm.A));
    item(s, 'Legmagasabb pont (hónap)', arc(dm.B), (MD.positions.B || '') + ' ' + arcText(dm.B));
    item(s, 'Talentum (év)', arc(dm.C), (MD.positions.C || '') + ' ' + arcText(dm.C));
    item(s, 'Gyökerek', arc(dm.D), (MD.positions.D || '') + ' ' + arcText(dm.D));
    item(s, 'Égi (személyes) életfeladat', arc(dm.L2), MD.positions.L2 || '');
    item(s, 'Összegző életfeladat', arc(dm.L1), MD.positions.L1 || '');
    item(s, 'Ég és föld vonala', arc(dm.skyTask) + ' · ' + arc(dm.earthTask),
      MD.positions.skyEarth || '');

    // életfeladat-hármas
    item(s, 'Önkeresés (személyes feladat)',
      arc(dm.purpose.personal) + '  ←  ég ' + dm.purpose.sky + ' + föld ' + dm.purpose.earth,
      (MD.purpose && MD.purpose.personal) || '');
    item(s, 'Szocializáció (társas feladat)',
      arc(dm.purpose.social) + '  ←  férfi ág ' + dm.maleLine.result +
      ' + női ág ' + dm.femaleLine.result,
      (MD.purpose && MD.purpose.social) || '');
    item(s, 'Spirituális feladat',
      arc(dm.purpose.spiritual), (MD.purpose && MD.purpose.spiritual) || '');

    // pénz- és kapcsolati csatorna
    item(s, 'Pénzcsatorna \uD83D\uDCB0',
      arc(dm.moneyChannel.outer) + '  →  ' + arc(dm.moneyChannel.mid) +
      '  →  ' + arc(dm.moneyChannel.apex),
      (MD.channels && MD.channels.money) || '');
    item(s, 'Kapcsolati csatorna \u2665',
      arc(dm.loveChannel.outer) + '  →  ' + arc(dm.loveChannel.mid) +
      '  →  ' + arc(dm.loveChannel.apex),
      (MD.channels && MD.channels.love) || '');

    // generációs vonalak
    item(s, 'Férfi (apai) generációs vonal',
      dm.maleLine.a + ' · ' + dm.maleLine.b + '  →  ' + arc(dm.maleLine.result),
      (MD.lines && MD.lines.male) || '');
    item(s, 'Női (anyai) generációs vonal',
      dm.femaleLine.a + ' · ' + dm.femaleLine.b + '  →  ' + arc(dm.femaleLine.result),
      (MD.lines && MD.lines.female) || '');

    // aktuális életkor-pont
    var ap = C.matrixAgePoint(dm.ageWheel, out.age.years);
    item(s, 'Az életkorod pontja (' + out.age.years + ' év)', arc(ap.arcana),
      (MD.positions.age || '') + ' ' + arcText(ap.arcana));

    /* --- teljes kiértékelés: a mátrixpontok egymás közti összefüggései --- */
    var MDD = get(D(), 'matrixDeep', null);
    if (MDD) {
      var evalRows = [];

      // 1. ismétlődő arkánumok a kulcspontokon
      var POINTS = [
        ['személyiség', dm.A], ['legmagasabb pont', dm.B], ['talentum', dm.C],
        ['gyökerek', dm.D], ['fő feladat', dm.E],
        ['égi feladat', dm.L2], ['összegző feladat', dm.L1],
        ['személyes életfeladat', dm.purpose.personal],
        ['társas életfeladat', dm.purpose.social],
        ['spirituális életfeladat', dm.purpose.spiritual],
        ['apai vonal', dm.maleLine.result], ['anyai vonal', dm.femaleLine.result],
        ['pénzcsatorna', dm.moneyChannel.mid], ['pénz-csúcs', dm.moneyChannel.apex],
        ['kapcsolati csatorna', dm.loveChannel.mid],
        ['életkor-pont', ap.arcana]
      ];
      var freq = {};
      POINTS.forEach(function (p) {
        (freq[p[1]] = freq[p[1]] || []).push(p[0]);
      });
      var repeats = Object.keys(freq).filter(function (n) {
        return freq[n].length >= 3;
      }).sort(function (a, b) { return freq[b].length - freq[a].length; });

      if (repeats.length) {
        repeats.slice(0, 2).forEach(function (n) {
          evalRows.push(MDD.repeated
            .replace('%ARC%', arc(+n))
            .replace('%N%', String(freq[n].length))
            .replace('%POS%', freq[n].join(', '))
            .replace('%TEXT%', arcText(+n)));
        });
      } else {
        evalRows.push(MDD.noRepeat);
      }

      // 2. a középpont kapcsolatai
      if (dm.E === dm.A) evalRows.push(MDD.centerLinks.personality);
      if (dm.E === dm.C) evalRows.push(MDD.centerLinks.talent);
      if (dm.E === dm.D) evalRows.push(MDD.centerLinks.roots);
      if (dm.E === dm.purpose.personal) evalRows.push(MDD.centerLinks.purpose);
      if ([dm.moneyChannel.outer, dm.moneyChannel.mid, dm.moneyChannel.apex]
        .indexOf(dm.E) >= 0) evalRows.push(MDD.centerLinks.money);
      if ([dm.loveChannel.outer, dm.loveChannel.mid, dm.loveChannel.apex]
        .indexOf(dm.E) >= 0) evalRows.push(MDD.centerLinks.love);

      // 3. csatorna-átfedések
      var moneySet = [dm.moneyChannel.outer, dm.moneyChannel.mid, dm.moneyChannel.apex];
      var loveSet = [dm.loveChannel.outer, dm.loveChannel.mid, dm.loveChannel.apex];
      if (moneySet.indexOf(dm.C) >= 0) evalRows.push(MDD.channelLinks.moneyTalent);
      if (moneySet.indexOf(dm.D) >= 0) evalRows.push(MDD.channelLinks.moneyRoots);
      if (loveSet.indexOf(dm.A) >= 0) evalRows.push(MDD.channelLinks.lovePersonality);
      if (loveSet.indexOf(dm.D) >= 0) evalRows.push(MDD.channelLinks.loveRoots);
      var sharedMid = moneySet.some(function (n) {
        return n !== dm.moneyChannel.apex && loveSet.indexOf(n) >= 0;
      });
      if (sharedMid) evalRows.push(MDD.channelLinks.shared);

      // 4. generációs minták
      if (dm.maleLine.result === dm.femaleLine.result) {
        evalRows.push(MDD.generational.same);
      } else {
        if (dm.D === dm.maleLine.result) evalRows.push(MDD.generational.rootsMale);
        if (dm.D === dm.femaleLine.result) evalRows.push(MDD.generational.rootsFemale);
      }

      // 5. az életszakasz szerint aktív életfeladat
      var stage = out.age.years < 40 ? 'personal'
        : (out.age.years < 60 ? 'social' : 'spiritual');
      var stageArc = dm.purpose[stage === 'personal' ? 'personal'
        : (stage === 'social' ? 'social' : 'spiritual')];
      evalRows.push(MDD.purposeStage[stage]
        .replace('%AGE%', String(out.age.years))
        .replace('%ARC%', arc(stageArc)));

      // 6. a következő évtizedes fordulópont
      var nextMajor = null;
      dm.ageWheel.forEach(function (w) {
        if (w.major && w.age > out.age.years && w.age <= 80 && !nextMajor) nextMajor = w;
      });
      if (nextMajor) {
        evalRows.push(MDD.ageNext
          .replace('%AGE%', String(nextMajor.age))
          .replace('%ARC%', arc(nextMajor.arcana))
          .replace('%TEXT%', arcText(nextMajor.arcana)));
      }

      item(s, 'Teljes kiértékelés — a mátrixod összefüggései', '',
        MDD.intro + ' ' + evalRows.join(' '));
      s.notes.push(MDD.note);
    }

    s.matrixDM = dm;
    s.matrixAge = ap;
    s.matrixChakras = dm.chakras.map(function (c) {
      return {
        key: c.key, name: c.name,
        physics: c.physics, energy: c.energy, emotion: c.emotion,
        arc: arc(c.emotion), text: arcText(c.emotion),
        meaning: get(D(), 'matrix.chakraMeanings.' + c.key, '')
      };
    });
    s.matrixChakraResult = dm.chakraResult;

    s.notes.push(MD.intro);
    s.notes.push(MD.disclaimer);
    out.sections.push(s);
  }

  /* ================= kártyák ================= */

  function buildCards(out) {
    var s = section('kartyak', 'Születési kártyák', '🃏', 'ezoterikus');
    var i = out.input;

    var tc = C.tarotBirthCard(i.year, i.month, i.day);
    var tcd = get(D(), 'numbers.tarotCards.' + tc, null);
    if (tcd) {
      item(s, 'Tarot-születéskártya', (tcd.roman ? tcd.roman + '. ' : '') + tcd.name,
        tcd.text + (tcd.keywords ? ' Kulcsszavak: ' + tcd.keywords.join(', ') + '.' : ''));
    }

    var dc = C.destinyCard(i.month, i.day);
    var dcd = dc.key ? get(D(), 'numbers.destinyCards.' + dc.key, null) : null;
    item(s, 'Sorskártya (Destiny Card)', dc.name,
      (dcd && dcd.text) ? dcd.text : (dc.text || get(D(), 'numbers.destinyIntro', '')));

    out.sections.push(s);
  }

  /* ================= angyalok, kabbala ================= */

  function buildAngels(out) {
    var s = section('angyal', 'Angyal-horoszkóp és kabbala', '👼', 'ezoterikus');
    var i = out.input;

    var ga = C.guardianAngel(i.month, i.day);
    if (ga) {
      item(s, 'Születési őrangyalod', ga.num + '. ' + ga.name + (ga.hebrew ? ' (' + ga.hebrew + ')' : ''),
        (ga.quality ? 'Minősége: ' + ga.quality + '. ' : '') + (ga.text || ''));
      if (ga.choir) item(s, 'Angyali kar', ga.choir + (ga.planet ? ' · ' + ga.planet : ''), '');
    }

    var sunKey = out.chart.planets.sun.sign.key;
    var arch = get(D(), 'angels.archangels.bySign.' + sunKey, null);
    if (arch) item(s, 'Jegyed arkangyala', arch.name || '', arch.text || '');

    var wa = get(D(), 'angels.byWeekday.' + out.weekday, null);
    if (wa) item(s, 'Születésnapod angyala', (wa.name || '') + (wa.planet ? ' · ' + wa.planet : ''), wa.text || '');

    // kabbalisztikus hónap
    var hebd = C.hebrewDate(out.utc);
    if (hebd) {
      item(s, 'Héber naptár szerinti születésnap', hebd.text, '');
      var months = get(D(), 'angels.kabbalah.months', []);
      for (var k = 0; k < months.length; k++) {
        var mo = months[k];
        if (mo.hebrew && hebd.month && hebd.month.toLowerCase().indexOf(mo.hebrew.toLowerCase().slice(0, 4)) >= 0) {
          item(s, 'Kabbalisztikus hónap', mo.hebrew + ' – betű: ' + (mo.letter || '') +
            (mo.tribe ? ' · törzs: ' + mo.tribe : ''), mo.text || '');
          break;
        }
      }
    }
    if (get(D(), 'angels.intro', '')) s.notes.push(get(D(), 'angels.intro', ''));
    out.sections.push(s);
  }

  /* ================= egzotikus rendszerek ================= */

  function buildExotic(out) {
    var s = section('egzotikus', 'További naptárrendszerek', '🌍', 'ezoterikus');
    var i = out.input;

    // maja
    var tz = C.tzolkin(i.year, i.month, i.day);
    if (tz.sign) {
      item(s, 'Maja Tzolkin-jegy', tz.label + (tz.sign.maya ? ' (' + tz.sign.maya + ')' : ''),
        (tz.sign.text || '') + (tz.tone ? ' A ' + tz.number + '-es tónus: ' + (tz.tone.keyword || '') + '. ' + (tz.tone.text || '') : ''));
    }

    // kelta fa
    var tree = C.findByRange(get(D(), 'exotic.celtic.trees', []), i.month, i.day);
    if (tree) item(s, 'Kelta fajegy', tree.name, tree.text || '');

    // egyiptomi
    var eg = C.findByRange(get(D(), 'exotic.egyptian.signs', []), i.month, i.day);
    if (eg) item(s, 'Egyiptomi istenség-jegy', eg.name, eg.text || '');

    // totemállat
    var tt = C.findByRange(get(D(), 'exotic.totem.signs', []), i.month, i.day);
    if (tt) item(s, 'Indián totemállat', tt.name + (tt.element ? ' · ' + tt.element : ''), tt.text || '');

    // rúna
    var rn = C.findByRange(get(D(), 'exotic.runes.signs', []), i.month, i.day);
    if (rn) item(s, 'Rúna fél-hónap', rn.name + (rn.symbol ? ' ' + rn.symbol : ''), rn.text || '');

    // jávai weton
    var w = C.weton(i.year, i.month, i.day);
    var pas = null, pl = get(D(), 'exotic.weton.pasaran', []);
    for (var k = 0; k < pl.length; k++) if (pl[k].name === w.pasaran) pas = pl[k];
    item(s, 'Jávai weton', w.label + ' (neptu: ' + w.neptu + ')',
      (pas && pas.text ? pas.text + ' ' : '') + get(D(), 'exotic.weton.neptuText.' + w.neptu, ''));

    // 9 csillag ki + Kua
    var ky = C.kyusei(i.year, i.month, i.day);
    var kyd = get(D(), 'exotic.kyusei.numbers.' + ky.number, null);
    if (kyd) item(s, 'Kilenc csillag ki', ky.number + ' – ' + (kyd.name || ''), kyd.text || '');
    if (i.gender) {
      var kua = C.kuaNumber(i.year, i.month, i.day, i.gender);
      var dirs = get(D(), 'exotic.kyusei.kuaDirections.' + kua.number, null);
      item(s, 'Kua-szám (feng shui)', kua.number + ' – ' + kua.group,
        dirs ? 'Kedvező irányok: ' + (dirs.good || []).join(', ') + '. Kerülendő: ' + (dirs.bad || []).join(', ') + '.' : '');
    }

    // születéskő
    var bs = get(D(), 'exotic.birthstones.' + i.month, null);
    if (bs) item(s, 'Születési kő és virág', (bs.stone || '') + ' · ' + (bs.flower || ''), bs.text || '');

    // generáció
    var gen = C.generation(i.year);
    if (gen) item(s, 'Generáció', gen.name, gen.text || '');

    out.sections.push(s);
  }

  /* ================= hét napja alapú rendszerek ================= */

  function buildWeekdaySystems(out) {
    var s = section('hetnapja', 'A születés napja szerinti rendszerek', '📅', 'ezoterikus');
    var wd = out.weekday, i = out.input;
    item(s, 'A hét napja', C.DAY_HU[wd].charAt(0).toUpperCase() + C.DAY_HU[wd].slice(1), '');

    var mb = C.mahabote(i.year, i.month, i.day, i.hasTime ? i.hour : null);
    if (mb && mb.sign) {
      item(s, 'Burmai Mahabote', mb.sign.name + (mb.sign.animal ? ' · ' + mb.sign.animal : ''),
        mb.sign.text || '');
    }

    var ak = get(D(), 'exotic.akan.days.' + wd, null);
    if (ak) {
      var akName = i.gender === 'no' ? ak.female : (i.gender === 'ferfi' ? ak.male : ak.male + ' / ' + ak.female);
      item(s, 'Akan (ghánai) lélek-név', akName, ak.meaning || '');
    }

    var th = get(D(), 'exotic.thai.days.' + wd, null);
    if (th) item(s, 'Thai napszín', (th.color || '') + ' szín', (th.text || '') + ' ' + (th.buddha || ''));

    out.sections.push(s);
  }

  /* ================= magyar népi ================= */

  function buildHungarian(out) {
    var s = section('magyar', 'Magyar népi hagyomány', '🇭🇺', 'nepi');
    var i = out.input, wd = out.weekday;

    var wb = get(D(), 'hungarian.weekdayBirth.' + wd, null);
    if (wb) item(s, 'Néphit a születés napjáról', wb.day || '', wb.text || '');

    var nd = C.namedDay(i.month, i.day);
    if (nd) item(s, 'Jeles nap', nd.name || '', nd.text || '');

    var names = C.nameDay(i.month, i.day);
    if (names) item(s, 'A születésnapod névnapja', names.join(', '), '');

    if (i.name) {
      var own = C.findNameDayOf(i.name);
      if (own && own.length) {
        item(s, 'A neved névnapja', own.map(function (k) {
          var p = k.split('-'); return parseInt(p[0], 10) + '. hó ' + parseInt(p[1], 10) + '.';
        }).join(', '), '');
      }
    }

    var om = get(D(), 'hungarian.oldMonthNames.' + i.month, '');
    if (om) item(s, 'Régi magyar hónapnév', om, '');

    // különleges születési körülmények
    if (i.special && i.special.length) {
      var sb = get(D(), 'hungarian.specialBirth', []);
      i.special.forEach(function (key) {
        for (var k = 0; k < sb.length; k++) {
          if (sb[k].key === key) item(s, sb[k].name, '', sb[k].text);
        }
      });
    }

    // holdhoz kötődő népi szabály a születési fázisra
    var mp = out.chart.moonPhase;
    var lore = get(D(), 'hungarian.moonLore', null);
    if (lore) {
      var key = mp.key === 'ujhold' ? 'newMoon' : (mp.key === 'telihold' ? 'fullMoon' :
        (mp.waxing ? 'waxing' : 'waning'));
      if (lore[key]) item(s, 'Holdhoz fűződő néphit', '', lore[key]);
    }

    // populáris „cigány horoszkóp"
    var gh = C.findByRange(get(D(), 'hungarian.gypsyHoroscope.signs', []), i.month, i.day);
    if (gh) {
      item(s, 'Populáris „cigány horoszkóp" jegye', gh.name, gh.text || '');
      s.notes.push(get(D(), 'hungarian.gypsyHoroscope.intro', ''));
    }

    out.sections.push(s);
  }

  /* ================= kronobiológia ================= */

  function buildChrono(out) {
    var s = section('kronobiologia', 'Kronobiológia — a születésed fényviszonyai', '🔬', 'tudomany');
    var i = out.input;

    /* --- 1. a születés fényviszonyai: tényadatok, nem jóslat --- */
    var light = HCORE.birthLightProfile(out.utc, out.place.lat, out.place.lon);
    if (light && light.dayLength != null) {
      var h = Math.floor(light.dayLength);
      var mi = Math.round((light.dayLength - h) * 60);
      item(s, 'Fotoperiódus a születésed napján', h + ' óra ' + mi + ' perc nappal',
        'Ennyi ideig volt a Nap a horizont felett ' + out.place.name + ' fölött. ' +
        'Ez tényadat a születésed napjáról. Állatkísérletekben a születés körüli ' +
        'nappalhossz valóban befolyásolja a belső óra beállítását, embernél azonban ' +
        'ilyen hatást nem sikerült kimutatni.');
    }
    if (light && light.trend) {
      item(s, 'A nappalok iránya', light.trend + ' nappalok' +
        (light.trendDelta != null ? ' (10 nap alatt ' +
          (light.trendDelta > 0 ? '+' : '') + Math.round(light.trendDelta) + ' perc)' : ''),
        light.trend === 'hosszabbodó'
          ? 'Növekvő fotoperiódusban születtél: az első heteidben egyre több fény érte a szemedet.'
          : 'Csökkenő fotoperiódusban születtél: az első heteidben egyre kevesebb fény érte a szemedet.');
    }
    if (light && light.daylight != null && i.hasTime) {
      var altTxt = light.sunAltitude != null
        ? ' A Nap ' + light.sunAltitude.toFixed(1).replace('.', ',') + '°-on állt.' : '';
      item(s, 'Fény a születésed pillanatában',
        light.daylight ? 'Nappal, világosban' : (light.twilight ? 'Szürkületben' : 'Éjszaka, sötétben'),
        (light.daylight
          ? 'A születésed pillanatában a Nap a horizont felett járt.'
          : 'A születésed pillanatában a Nap a horizont alatt volt.') + altTxt +
        ' Érdekesség: a spontán szülések gyakorisága éjszaka és hajnalban a legnagyobb — ' +
        'ez a szülés élettanának cirkadián vonása, és semmit nem mond a te belső órádról.');
    }

    /* --- 2. évszak, őszinte hatásmérettel --- */
    var seas = C.season(i.month, i.day);
    var seasonHu = { tavasz: 'tavasz', nyar: 'nyár', osz: 'ősz', tel: 'tél' }[seas];
    item(s, 'Születési évszak', seasonHu.charAt(0).toUpperCase() + seasonHu.slice(1),
      get(D(), 'chrono.seasonText.' + seas, ''));

    /* --- kiértékelés: a saját fényprofilod értelmezése, levezetéssel --- */
    var CD = get(D(), 'chronoDeep.birth', null);
    if (CD && light && light.dayLength != null) {
      var evalTxt = [CD.intro];
      if (light.dayLength >= 13.5) evalTxt.push(CD.photoLong);
      else if (light.dayLength <= 10.5) evalTxt.push(CD.photoShort);
      else evalTxt.push(CD.photoMid);
      if (light.trend === 'hosszabbodó') evalTxt.push(CD.trendUp);
      else if (light.trend === 'rövidülő') evalTxt.push(CD.trendDown);
      evalTxt.push(CD.effectSize);
      evalTxt.push(CD.closing);
      item(s, 'Kiértékelés — a te fényprofilod', '', evalTxt.join(' '));
    }

    s.notes.push('Fontos korlát: a születési évszak és a kronotípus közti összefüggés ' +
      'valószínűleg létezik, de a legjobb becslés szerint legfeljebb 15–18 perc ' +
      'csoportátlag-különbséget jelent — egyéni szinten ez a pénzfeldobás szintje. ' +
      'A kronotípusodat ezért nem a születési dátumodból számoljuk, hanem megkérdezzük: ' +
      'ehhez való a lenti mérés.');
    s.notes.push('A születés ÓRÁJÁBÓL nem következtetünk a belső órádra. Erre nincs ' +
      'tudományos bizonyíték — és nem is várható, mert az újszülöttnek még nincs saját ' +
      'cirkadián ritmusa: az a születés után hetekkel alakul ki.');

    out.sections.push(s);

    /* --- 3. a belső óra mérése: interaktív eszköz --- */
    var t = section('belsoora', 'A belső órád — mérés és időzítés', '⏰', 'tudomany');
    t.chronoTool = true;
    t.age = out.age.years;
    t.gender = i.gender;
    t.notes.push('Ez a szakasz nem a születési adataidból dolgozik, hanem abból, amit ' +
      'a saját alvásodról megadsz. A kronotípus mérése validált eszközökkel történik: ' +
      'rMEQ (Adan & Almirall 1991) és MCTQ (Roenneberg és mtsai). A napi görbe a ' +
      'két-folyamat modellre épül (Borbély 1982; Daan–Beersma–Borbély 1984), a ' +
      'fénytanácsok pedig a humán fázisválasz-görbére (Khalsa és mtsai 2003).');
    out.sections.push(t);

    /* --- 4. bioritmus: külön szekció, a születéstől futó hagyomány --- */
    var b = section('bioritmus', 'Bioritmus a születésedtől számítva', '📈', 'tudomany');
    var full = C.biorhythmFull(out.utc, new Date());

    item(b, 'A születésed óta eltelt', full.days.toLocaleString('hu-HU') + ' nap',
      'A bioritmus-elmélet szerint a ciklusok a születés pillanatában indulnak ' +
      'nulláról, és azóta megszakítás nélkül futnak. Minden érték ebből a ' +
      'napszámból következik.');
    item(b, 'A teljes ciklus záródása', full.cycleRestart.toLocaleString('hu-HU') + ' nap múlva',
      'A három elsődleges ciklus 21 252 naponta — nagyjából 58 és fél évente — ' +
      'kerül újra egyszerre nullára, ugyanabba az állásba, mint a születésedkor.');

    b.biorhythm = {
      days: full.days, overall: full.overall, criticalCount: full.criticalCount,
      values: full.values.map(function (v) {
        return {
          name: v.name, percent: v.percent, phase: v.phase, len: v.len,
          color: v.color, primary: v.primary, rising: v.rising,
          text: get(D(), 'chrono.biorhythm.phaseText.' + v.phase, '')
        };
      }),
      composites: full.composites
    };
    b.series = C.biorhythmSeries(out.utc, new Date(), 14, 14);
    b.notes.push(get(D(), 'chrono.biorhythm.intro', ''));
    b.notes.push('A másodlagos ciklusokat (intuíció, esztétikai, tudatosság, ' +
      'spirituális) a 20. századi bioritmus-irodalom vezette be; ezekre még ' +
      'kevesebb alapja van a hagyománynak, mint a három eredeti ciklusra.');
    b.notes.push('Ez a szakasz NEM azonos a tudományos kronobiológiával — csak a nevük ' +
      'hasonlít. A bioritmus rögzített 23/28/33 napos ciklusokat feltételez a születéstől; ' +
      'a kronobiológia ezzel szemben a fény által naponta újraállított belső órát vizsgálja.');
    out.sections.push(b);
  }

  /* ================= fogantatás ================= */

  function buildConception(out) {
    var s = section('fogantatas', 'Fogantatási horoszkóp', '🌱', 'ezoterikus');
    var pl = C.prenatalLunation(out.utc);
    if (pl) {
      item(s, 'Prenatális lunáció', 'A születésed előtti utolsó ' + pl.type + ': ' +
        pl.date.toLocaleDateString('hu-HU') + ' (' + pl.daysBefore + ' nappal korábban)',
        'A hellenisztikus hagyomány a születés előtti utolsó újholdat vagy teliholdat ' +
        'érzékeny pontként kezeli a képletben.');
    }
    var ce = C.conceptionEstimate(out.utc);
    var ceSun = HCORE.eclipticLongitude('Sun', ce);
    item(s, 'Becsült fogantatási időszak', ce.toLocaleDateString('hu-HU') + ' körül',
      'Átlagos 266 napos terhességgel visszaszámolva. Ekkor a Nap a ' +
      HCORE.toSign(ceSun).name + ' jegyében járt. Ez tájékoztató becslés: ' +
      'a valódi fogantatási idő ritkán ismert, ezért az asztrológiai hagyomány is ' +
      'a születési képletből számol vissza (Trutina Hermetis).');
    out.sections.push(s);
  }

  /* ================= aktuális állapot ================= */

  function buildCurrent(out) {
    var s = section('most', 'Hol tartasz most', '⏳', 'nyugati');
    var now = new Date();
    var age = out.age;

    item(s, 'Életkor', age.years + ' év (' + age.days.toLocaleString('hu-HU') + ' nap)', '');

    // éves profekció
    if (out.input.hasTime && out.chart.ascSign) {
      var pr = C.profection(age.years, out.chart.ascSign.index);
      item(s, 'Éves profekció', pr.house + '. ház – ' + pr.sign,
        'A hellenisztikus technika szerint ebben az életévedben ez a ház és jegy ' +
        'kerül fókuszba; a jegy uralkodója az „év ura".');
    }

    // Szaturnusz-visszatérés
    var natalSat = out.chart.planets.saturn.lon;
    var curSat = HCORE.eclipticLongitude('Saturn', now);
    var satDiff = HCORE.angleDiff(natalSat, curSat);
    if (satDiff < 12) {
      item(s, 'Szaturnusz-visszatérés', 'Aktív (' + fmtDeg(satDiff) + ' eltérés)',
        'A Szaturnusz visszatért a születési helyzetéhez. Ez a hagyomány szerint ' +
        'számvetési és érési időszak — jellemzően 29-30, majd 58-60 éves kor körül.');
    }

    // aktuális holdfázis
    var mp = HCORE.moonPhase(now);
    item(s, 'Mai holdfázis', mp.symbol + ' ' + mp.name + ' · a Hold ' + mp.sign.name + ' jegyében',
      get(D(), 'chrono.moon.inSign.' + mp.sign.key, ''));

    // retrográd bolygók most
    var retro = [];
    ['mercury', 'venus', 'mars', 'jupiter', 'saturn'].forEach(function (k) {
      var b = null;
      HCORE.BODIES.forEach(function (x) { if (x.key === k) b = x; });
      if (b && HCORE.dailyMotion(b.body, now) < 0) retro.push(b.name);
    });
    item(s, 'Most retrográd', retro.length ? retro.join(', ') : 'egyik sem a belső bolygók közül', '');

    // mai jeles nap és névnap
    var tm = now.getMonth() + 1, td = now.getDate();
    var todayNames = C.nameDay(tm, td);
    if (todayNames) item(s, 'Ma névnapja van', todayNames.join(', '), '');
    var todayFeast = C.namedDay(tm, td);
    if (todayFeast) item(s, 'Mai jeles nap', todayFeast.name || '', todayFeast.text || '');

    out.sections.push(s);
  }

  /* ================= a következő 5 év tranzitjai ================= */

  var HU_MONTHS = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.',
    'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];

  function fmtTransitDate(dt) {
    return dt.getFullYear() + '. ' + HU_MONTHS[dt.getMonth()] + ' ' + dt.getDate() + '.';
  }

  /** Nevezetes életciklus-tranzit kulcsa, ha a bolygó a saját natál helyét éri. */
  function specialTransitKey(ev) {
    if (ev.planet.key !== ev.target.key) return null;
    var a = ev.aspect.key, p = ev.planet.key;
    if (p === 'jupiter' && a === 'conjunction') return 'jupiterReturn';
    if (p === 'saturn' && a === 'conjunction') return 'saturnReturn';
    if (p === 'saturn' && a === 'opposition') return 'saturnOpposition';
    if (p === 'uranus' && a === 'opposition') return 'uranusOpposition';
    if (p === 'uranus' && a === 'square') return 'uranusSquare';
    if (p === 'neptune' && a === 'square') return 'neptuneSquare';
    if (p === 'pluto' && a === 'square') return 'plutoSquare';
    return null;
  }

  function buildTransits(out) {
    var TD = get(D(), 'transits', null);
    if (!TD || !HCORE.findTransits) return;
    var c = out.chart;
    var s = section('tranzitok', 'A következő 5 év fontos tranzitjai', '🪐', 'nyugati');

    /* --- natál célpontok --- */
    var targets = [];
    ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'].forEach(function (k) {
      var p = c.planets[k];
      if (p) targets.push({ key: k, name: p.name, symbol: p.symbol, lon: p.lon });
    });
    // a külső bolygók natál helye csak a saját (nemzedéki) ciklusukhoz érdekes
    ['uranus', 'neptune', 'pluto'].forEach(function (k) {
      var p = c.planets[k];
      if (p) targets.push({ key: k, name: p.name, symbol: p.symbol, lon: p.lon, cycleOnly: true });
    });
    if (out.input.hasTime && c.houses) {
      targets.push({ key: 'asc', name: 'Aszcendens', symbol: 'AC', lon: c.houses.asc });
      targets.push({ key: 'mc', name: 'MC', symbol: 'MC', lon: c.houses.mc });
    }

    var now = new Date();
    var events = HCORE.findTransits(targets, now, 5);

    /* --- pontozás: melyik érintés elég fontos a listához --- */
    var PW = { jupiter: 3, saturn: 5, uranus: 4, neptune: 3, pluto: 4 };
    var AW = { conjunction: 5, opposition: 4, square: 4, trine: 2 };
    var TW = { sun: 5, moon: 5, asc: 5, mc: 4, mercury: 2, venus: 3, mars: 3,
      jupiter: 2, saturn: 3, uranus: 2, neptune: 2, pluto: 2 };

    var scored = [];
    events.forEach(function (ev) {
      if (ev.target.cycleOnly && ev.planet.key !== ev.target.key) return;
      var special = specialTransitKey(ev);
      var score = (PW[ev.planet.key] || 2) + (AW[ev.aspect.key] || 2) +
        (TW[ev.target.key] || 2) + (special ? 4 : 0);
      scored.push({ ev: ev, score: score, special: special });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    var kept = scored.slice(0, 26);
    kept.sort(function (a, b) { return a.ev.dates[0] - b.ev.dates[0]; });

    /* --- események szöveggé fűzése --- */
    var aspNames = {};
    HCORE.ASPECTS.forEach(function (a) { aspNames[a.key] = a; });
    var houseMeta = get(D(), 'western.houses', []);

    s.transits = kept.map(function (rec) {
      var ev = rec.ev;
      var P = TD.planets[ev.planet.key] || {};
      var T = TD.targets[ev.target.key] || { label: ev.target.name, domain: '' };
      var asp = aspNames[ev.aspect.key] || { name: ev.aspect.key, symbol: '' };
      var cls = ev.aspect.key === 'conjunction' ? 'conj'
        : (ev.aspect.key === 'trine' ? 'soft' : 'hard');

      var txt = '';
      if (rec.special && TD.special[rec.special]) txt += TD.special[rec.special] + ' ';
      if (T.domain) txt += T.domain + ' ';
      if (P[cls]) txt += P[cls];

      if (ev.dates.length > 1 && TD.multiHit) {
        txt += ' ' + TD.multiHit.replace('%N%', String(ev.dates.length));
      }
      if (out.input.hasTime && c.houses && TD.houseLine) {
        var h = HCORE.houseOf(ev.lon, c.houses.cusps);
        var hm = houseMeta[h - 1];
        txt += ' ' + TD.houseLine.replace('%H%', String(h))
          .replace('%T%', hm ? hm.title.toLowerCase() : 'életterület');
      }

      return {
        year: ev.dates[0].getFullYear(),
        sym: ev.planet.symbol + ' ' + asp.symbol + ' ' + ev.target.symbol,
        title: ev.planet.name + ' ' + asp.name.toLowerCase() + ' — ' + T.label,
        dates: ev.dates.map(fmtTransitDate).join(' · '),
        badge: rec.special ? (TD.specialNames[rec.special] || '') : '',
        major: rec.score >= 13,
        text: txt
      };
    });

    if (TD.intro) item(s, 'Mit mutat ez a lista', '', TD.intro);
    if (TD.note) s.notes.push(TD.note);
    if (!out.input.hasTime) {
      s.notes.push('Pontos születési idő nélkül az Aszcendensre és az MC-re eső ' +
        'tranzitok nem számolhatók, és a Holdat érintő dátumok is pontatlanabbak.');
    }

    out.sections.push(s);
  }

  /* ================= fényszög-alakzatok ================= */

  function buildPatterns(out) {
    var PD = get(D(), 'patterns', null);
    if (!PD) return;
    var c = out.chart;
    var s = section('alakzatok', 'Fényszög-alakzatok a képletedben', '△', 'nyugati');
    var KEYS = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
      'saturn', 'uranus', 'neptune', 'pluto'];

    var has = {};
    c.aspects.forEach(function (a) {
      has[a.a + '|' + a.b + '|' + a.type] = true;
      has[a.b + '|' + a.a + '|' + a.type] = true;
    });
    function asp(a, b, t) { return !!has[a + '|' + b + '|' + t]; }
    function names(list) {
      return list.map(function (k) {
        return c.planets[k].symbol + ' ' + c.planets[k].name;
      }).join(' · ');
    }
    function majority(list, field) {
      var cnt = {};
      list.forEach(function (k) {
        var sd = signData(c.planets[k].sign.key);
        if (sd && sd[field]) cnt[sd[field]] = (cnt[sd[field]] || 0) + 1;
      });
      var best = null, n = 0;
      Object.keys(cnt).forEach(function (x) { if (cnt[x] > n) { n = cnt[x]; best = x; } });
      return best;
    }

    var found = 0;

    // stellium — három vagy több égitest ugyanabban a jegyben
    var bySign = {};
    KEYS.forEach(function (k) {
      var sg = c.planets[k].sign.name;
      (bySign[sg] = bySign[sg] || []).push(k);
    });
    Object.keys(bySign).forEach(function (sg) {
      if (bySign[sg].length < 3) return;
      found++;
      item(s, PD.stellium.name + ' — ' + sg, names(bySign[sg]), PD.stellium.base);
    });

    // hármas és négyes alakzatok
    var grandTrines = [], usedInKite = {};
    var i, j, k, m;
    for (i = 0; i < KEYS.length; i++)
      for (j = i + 1; j < KEYS.length; j++)
        for (k = j + 1; k < KEYS.length; k++) {
          if (asp(KEYS[i], KEYS[j], 'trine') && asp(KEYS[j], KEYS[k], 'trine') &&
              asp(KEYS[i], KEYS[k], 'trine')) {
            grandTrines.push([KEYS[i], KEYS[j], KEYS[k]]);
          }
        }

    // sárkány: nagy trigon + szembenálló negyedik, amely a másik két taggal szextil
    grandTrines.forEach(function (gt) {
      KEYS.forEach(function (mk) {
        if (gt.indexOf(mk) >= 0) return;
        gt.forEach(function (tail) {
          var rest = gt.filter(function (x) { return x !== tail; });
          if (asp(mk, tail, 'opposition') &&
              asp(mk, rest[0], 'sextile') && asp(mk, rest[1], 'sextile')) {
            found++;
            usedInKite[gt.join()] = true;
            item(s, PD.kite.name, names(gt.concat([mk])), PD.kite.base +
              ' A húzóerőt itt ' + c.planets[mk].name + ' adja.');
          }
        });
      });
    });

    grandTrines.forEach(function (gt) {
      if (usedInKite[gt.join()]) return;
      found++;
      var el = majority(gt, 'element');
      item(s, PD.grandTrine.name + (el ? ' (' + el.toLowerCase() + ')' : ''), names(gt),
        PD.grandTrine.base + (el && PD.grandTrine.byElement[el]
          ? ' ' + PD.grandTrine.byElement[el] : ''));
    });

    // nagy kereszt és T-kvadrát
    var oppPairs = [];
    for (i = 0; i < KEYS.length; i++)
      for (j = i + 1; j < KEYS.length; j++)
        if (asp(KEYS[i], KEYS[j], 'opposition')) oppPairs.push([KEYS[i], KEYS[j]]);

    var inCross = {};
    for (i = 0; i < oppPairs.length; i++)
      for (j = i + 1; j < oppPairs.length; j++) {
        var a1 = oppPairs[i][0], a2 = oppPairs[i][1];
        var b1 = oppPairs[j][0], b2 = oppPairs[j][1];
        if (asp(a1, b1, 'square') && asp(b1, a2, 'square') &&
            asp(a2, b2, 'square') && asp(b2, a1, 'square')) {
          found++;
          var all = [a1, b1, a2, b2];
          all.forEach(function (x) { inCross[x] = true; });
          var qu = majority(all, 'quality');
          item(s, PD.grandCross.name + (qu ? ' (' + qu.toLowerCase() + ')' : ''), names(all),
            PD.grandCross.base + (qu && PD.grandCross.byQuality[qu]
              ? ' ' + PD.grandCross.byQuality[qu] : ''));
        }
      }

    oppPairs.forEach(function (op) {
      if (inCross[op[0]] && inCross[op[1]]) return;   // a kereszt része
      KEYS.forEach(function (apex) {
        if (op.indexOf(apex) >= 0) return;
        if (asp(op[0], apex, 'square') && asp(op[1], apex, 'square')) {
          found++;
          item(s, PD.tSquare.name, names(op.concat([apex])),
            PD.tSquare.base + ' ' +
            PD.tSquare.apex.replace('%P%', c.planets[apex].name));
        }
      });
    });

    // Yod: két kvinkunx egy csúcsra + szextil az alap között
    for (i = 0; i < KEYS.length; i++)
      for (j = i + 1; j < KEYS.length; j++)
        KEYS.forEach(function (apex) {
          if (apex === KEYS[i] || apex === KEYS[j]) return;
          if (asp(KEYS[i], apex, 'quincunx') && asp(KEYS[j], apex, 'quincunx') &&
              asp(KEYS[i], KEYS[j], 'sextile')) {
            found++;
            item(s, PD.yod.name, names([KEYS[i], KEYS[j], apex]),
              PD.yod.base + ' ' + PD.yod.apex.replace('%P%', c.planets[apex].name));
          }
        });

    if (!found) {
      item(s, 'Nincs zárt alakzat a képletedben', '',
        'Ez teljesen szokványos: az emberek jó részének képletében nincs szabályos ' +
        'nagy alakzat. A fényszögeid ettől még ugyanúgy működnek — párosával, ' +
        'a bolygókártyákon olvashatod őket.');
    }
    out.sections.push(s);
  }

  /* ================= éves égi kép: szolár és progressziók ================= */

  function buildAnnual(out) {
    var AD = get(D(), 'annual', null);
    if (!AD || !HCORE.activeSolarReturn) return;
    var s = section('eves', 'Éves égi képed — szolár és progressziók', '☀', 'nyugati');
    var now = new Date();

    /* --- szolárhoroszkóp --- */
    var sr = HCORE.activeSolarReturn(out.chart.planets.sun.lon, out.utc, now);
    var srChart = HCORE.chart({
      date: sr.start, lat: out.place.lat, lon: out.place.lon,
      system: out.input.houseSystem || 'placidus', withHouses: true
    });
    item(s, 'A mostani szolár éved',
      fmtTransitDate(sr.start) + ' – ' + fmtTransitDate(sr.end), AD.solarIntro);
    if (srChart.ascSign) {
      item(s, 'A szolárképlet aszcendense',
        srChart.ascSign.name + ' (' + srChart.ascSign.text + ')',
        'Az év „fellépése", stílusa — ilyen hangnemben szólít meg az idei éved. ' +
        get(D(), 'western.ascendantText.' + srChart.ascSign.key, ''));
      var sunHouse = srChart.planets.sun.house;
      if (sunHouse) {
        var hMeta = get(D(), 'western.houses', [])[sunHouse - 1];
        item(s, 'Az év fő hangsúlya: ' + sunHouse + '. ház' +
          (hMeta ? ' — ' + hMeta.title : ''), '',
          'A szolárképletben a Nap háza mutatja, mely életterület áll az év ' +
          'középpontjában. ' +
          (get(D(), 'western.planetInHouse.sun.' + sunHouse, '') ||
           get(D(), 'westernExt.planetInHouse.sun.' + sunHouse, '')));
      }
      item(s, 'A szolár Hold', srChart.planets.moon.sign.name +
        (srChart.planets.moon.house ? ' · ' + srChart.planets.moon.house + '. ház' : ''),
        'Az év érzelmi alaphangja és igényei ebből a jegyből szólnak.');
    }
    s.notes.push(AD.solarNote);

    /* --- szekunder progressziók --- */
    var ageYears = (now - out.utc) / (365.2425 * 86400000);
    var pDate = new Date(out.utc.getTime() + ageYears * 86400000);
    var progSunLon = HCORE.eclipticLongitude('Sun', pDate);
    var progMoonLon = HCORE.eclipticLongitude('Moon', pDate);
    var progSun = HCORE.toSign(progSunLon);
    var progMoon = HCORE.toSign(progMoonLon);
    var natalSunSign = out.chart.planets.sun.sign;

    item(s, 'Szekunder progressziók', '', AD.progIntro);
    item(s, 'Progresszív Nap', progSun.text,
      (progSun.index === natalSunSign.index
        ? AD.progSunSame : AD.progSunShift).replace('%S%', progSun.name));

    // a progresszív Hold jegyváltása: hátralévő fok / napi (=évi) mozgás
    var moonSpeed = HCORE.dailyMotion('Moon', pDate);      // fok / progressziós év
    var remain = 30 - progMoon.degree;
    var yearsLeft = moonSpeed > 0 ? remain / moonSpeed : null;
    var until = '';
    if (yearsLeft != null && yearsLeft < 4) {
      var d2 = new Date(now.getTime() + yearsLeft * 365.2425 * 86400000);
      until = d2.getFullYear() + '. ' + HU_MONTHS[d2.getMonth()];
    }
    item(s, 'Progresszív Hold', progMoon.text,
      AD.progMoon.replace('%S%', progMoon.name)
        .replace('%T%', until || 'a következő jegyváltásig'));

    var phase = HCORE.moonPhase(pDate);
    item(s, 'Progressziós holdfázis', phase.symbol + ' ' + phase.name,
      AD.phases[phase.key] || '');

    out.sections.push(s);
  }

  /* ================= állócsillagok ================= */

  function buildStars(out) {
    var SD = get(D(), 'stars', null);
    if (!SD || !SD.list) return;
    var s = section('allocsillagok', 'Állócsillagok a képletedben', '✷', 'nyugati');
    var c = out.chart;

    var points = [];
    ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn',
      'uranus', 'neptune', 'pluto'].forEach(function (k) {
      points.push({ name: c.planets[k].name, symbol: c.planets[k].symbol,
        lon: c.planets[k].lon });
    });
    if (out.input.hasTime && c.houses) {
      points.push({ name: 'Aszcendens', symbol: 'AC', lon: c.houses.asc });
      points.push({ name: 'MC', symbol: 'MC', lon: c.houses.mc });
    }

    var years = out.utc.getFullYear() + out.utc.getMonth() / 12 - 2000;
    var hits = 0;
    SD.list.forEach(function (st) {
      var lon = HCORE.norm360(st.lon2000 + SD.precessionPerYear * years);
      points.forEach(function (pt) {
        var d = HCORE.angleDiff(pt.lon, lon);
        if (d <= (SD.orb || 1.5)) {
          hits++;
          item(s, st.name + ' ☌ ' +
            (pt.symbol === pt.name ? pt.name : pt.symbol + ' ' + pt.name),
            fmtDeg(d) + ' orbisz · ' + st.mag + ' magnitúdó',
            st.text);
        }
      });
    });

    if (!hits) {
      item(s, 'Nincs szoros együttállás', '',
        'A képleted egyik fő pontja sem áll 1,5 fokon belül klasszikus ' +
        'állócsillaggal — ez gyakori; ilyenkor ez az ősi réteg egyszerűen ' +
        'nem hangsúlyos a képletedben.');
    }
    s.notes.push(SD.note);
    out.sections.push(s);
  }

  /* ================= szinasztria ================= */

  var SYN_ORDER = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
    'saturn', 'uranus', 'neptune', 'pluto', 'asc'];
  var SYN_W = { sun: 5, moon: 5, mercury: 3, venus: 4, mars: 4, jupiter: 2,
    saturn: 3, uranus: 1, neptune: 1, pluto: 2, asc: 4 };
  var POSS_YOUR = { sun: 'Napod', moon: 'Holdad', mercury: 'Merkúrod',
    venus: 'Vénuszod', mars: 'Marsod', jupiter: 'Jupitered',
    saturn: 'Szaturnuszod', uranus: 'Uránuszod', neptune: 'Neptunuszod',
    pluto: 'Plútód', asc: 'Aszcendensed' };
  var POSS_THEIR = { sun: 'Napja', moon: 'Holdja', mercury: 'Merkúrja',
    venus: 'Vénusza', mars: 'Marsa', jupiter: 'Jupitere',
    saturn: 'Szaturnusza', uranus: 'Uránusza', neptune: 'Neptunusza',
    pluto: 'Plútója', asc: 'Aszcendense' };

  var SYN_ASPECTS = [
    { key: 'conjunction', name: 'együttállás', symbol: '☌', angle: 0, orb: 6, cls: 'conj' },
    { key: 'opposition', name: 'szembenállás', symbol: '☍', angle: 180, orb: 5, cls: 'hard' },
    { key: 'trine', name: 'trigon', symbol: '△', angle: 120, orb: 5, cls: 'harm' },
    { key: 'square', name: 'kvadrát', symbol: '□', angle: 90, orb: 5, cls: 'hard' },
    { key: 'sextile', name: 'szextil', symbol: '⚹', angle: 60, orb: 4, cls: 'harm' }
  ];

  function synPairKey(a, b) {
    return SYN_ORDER.indexOf(a) <= SYN_ORDER.indexOf(b) ? a + '-' + b : b + '-' + a;
  }

  function synCategories(pairKey) {
    var cats = [];
    var p = pairKey.split('-');
    function both(x, list) { return list.indexOf(x) >= 0; }
    if (['sun-moon', 'moon-moon', 'moon-venus', 'moon-jupiter', 'venus-venus',
      'sun-venus'].indexOf(pairKey) >= 0) cats.push('erzelem');
    if (p[0] === 'mercury' || p[1] === 'mercury') cats.push('kommunikacio');
    if (['venus-mars', 'mars-mars', 'sun-mars', 'venus-pluto', 'mars-pluto',
      'moon-mars'].indexOf(pairKey) >= 0) cats.push('szenvedely');
    if ((p.indexOf('saturn') >= 0 &&
         (both(p[0], ['sun', 'moon', 'venus', 'mercury', 'saturn']) ||
          both(p[1], ['sun', 'moon', 'venus', 'mercury', 'saturn']))) ||
        (p.indexOf('jupiter') >= 0 &&
         (both(p[0], ['sun', 'moon', 'venus', 'jupiter']) ||
          both(p[1], ['sun', 'moon', 'venus', 'jupiter'])))) cats.push('stabilitas');
    return cats;
  }

  function buildSynastry(out) {
    var p = out.input.partner;
    var SY = get(D(), 'synastry', null);
    if (!p || !SY) return;

    var tz = (p.place && p.place.tz) || 'Europe/Budapest';
    var pu = HCORE.localToUTC(p.year, p.month, p.day,
      p.hasTime ? p.hour : 12, p.hasTime ? p.minute : 0, tz);
    var pc = HCORE.chart({
      date: pu, lat: p.place.lat, lon: p.place.lon,
      system: out.input.houseSystem || 'placidus', withHouses: !!p.hasTime
    });
    out.partnerChart = pc;

    var youName = out.input.name || 'Te';
    var pName = p.name || 'a párod';
    var s = section('szinasztria', 'Szinasztria — ' + (p.name || 'kettőtök') +
      ' és a te képleted', '♡', 'nyugati');

    item(s, pName + ' képlete',
      pc.planets.sun.sign.name + ' Nap · ' + pc.planets.moon.sign.name + ' Hold' +
      (pc.ascSign ? ' · ' + pc.ascSign.name + ' aszcendens' : ''),
      SY.intro);

    /* --- pontlisták (ASC csak ott, ahol van idő) --- */
    function pointsOf(chart, hasTime) {
      var o = {};
      SYN_ORDER.forEach(function (k) {
        if (k === 'asc') {
          if (hasTime && chart.houses) o.asc = { lon: chart.houses.asc };
        } else o[k] = { lon: chart.planets[k].lon };
      });
      return o;
    }
    var A = pointsOf(out.chart, out.input.hasTime);
    var B = pointsOf(pc, p.hasTime);

    /* --- képletközi fényszögek --- */
    var links = [];
    Object.keys(A).forEach(function (ka) {
      Object.keys(B).forEach(function (kb) {
        if (ka === 'asc' && kb === 'asc') return;
        var sep = HCORE.angleDiff(A[ka].lon, B[kb].lon);
        for (var x = 0; x < SYN_ASPECTS.length; x++) {
          var asp = SYN_ASPECTS[x];
          var delta = Math.abs(sep - asp.angle);
          if (delta <= asp.orb) {
            links.push({
              a: ka, b: kb, asp: asp, orb: delta,
              exact: 1 - delta / asp.orb,
              w: (SYN_W[ka] || 1) + (SYN_W[kb] || 1)
            });
            break;
          }
        }
      });
    });

    /* --- összhang-pontszámok --- */
    var scores = { erzelem: 0, kommunikacio: 0, szenvedely: 0, stabilitas: 0 };
    var counts = { erzelem: 0, kommunikacio: 0, szenvedely: 0, stabilitas: 0 };
    links.forEach(function (l) {
      var key = synPairKey(l.a, l.b);
      var mult = 0.5 + 0.5 * l.exact;
      synCategories(key).forEach(function (cat) {
        var v;
        if (l.asp.cls === 'harm') v = 2;
        else if (l.asp.cls === 'conj') {
          v = (l.a === 'saturn' || l.b === 'saturn' ||
               l.a === 'pluto' || l.b === 'pluto') ? 1 : 2;
        } else v = (cat === 'szenvedely') ? 1 : -2;
        scores[cat] += v * mult;
        counts[cat]++;
      });
    });

    var cats = [], sum = 0, nCat = 0;
    Object.keys(scores).forEach(function (cat) {
      var pct = Math.max(4, Math.min(96, Math.round(50 + scores[cat] * 9)));
      var meta = SY.categories[cat] || { name: cat, text: '' };
      cats.push({ key: cat, name: meta.name, percent: pct, text: meta.text,
        empty: counts[cat] === 0 });
      sum += pct; nCat++;
    });
    var overall = Math.round(sum / nCat);
    var band = null;
    (SY.overallBands || []).forEach(function (b) {
      if (band === null && overall >= b.min) band = b.text;
    });

    /* --- a legfontosabb kapcsolódások szövege --- */
    links.sort(function (x, y) {
      return (y.w + y.exact * 3) - (x.w + x.exact * 3);
    });
    var shown = links.slice(0, 14).map(function (l) {
      var key = synPairKey(l.a, l.b);
      var pairText = get(SY, 'pairs.' + key + '.' + l.asp.cls, '');
      var text;
      if (pairText) text = pairText;
      else {
        text = 'A ' + (POSS_YOUR[l.a] || l.a) + ' (' +
          (SY.planetTheme[l.a] || '') + ') és ' + pName + ' ' +
          (POSS_THEIR[l.b] || l.b) + ' (' + (SY.planetTheme[l.b] || '') + ') ' +
          (SY.generic[l.asp.cls] || '');
      }
      return {
        label: 'A ' + (POSS_YOUR[l.a] || l.a) + ' ' + l.asp.symbol + ' ' +
          pName + ' ' + (POSS_THEIR[l.b] || l.b),
        aspName: l.asp.name, orb: fmtDeg(l.orb),
        cls: l.asp.cls, exact: l.exact > 0.75, text: text
      };
    });

    /* --- bolygók a másik házaiban --- */
    var overlays = [];
    var KEY4 = ['sun', 'moon', 'venus', 'mars'];
    if (p.hasTime && pc.houses) {
      KEY4.forEach(function (k) {
        var h = HCORE.houseOf(out.chart.planets[k].lon, pc.houses.cusps);
        overlays.push({
          label: 'A ' + (POSS_YOUR[k] || k) + ' → ' + pName + ' ' + h + '. háza',
          text: (SY.houseOverlay[h] || '')
        });
      });
    }
    if (out.input.hasTime && out.chart.houses) {
      KEY4.forEach(function (k) {
        var h = HCORE.houseOf(pc.planets[k].lon, out.chart.houses.cusps);
        overlays.push({
          label: pName + ' ' + (POSS_THEIR[k] || k) + ' → a te ' + h + '. házad',
          text: (SY.houseOverlay[h] || '')
        });
      });
    }

    s.synastry = {
      youName: youName, partnerName: pName,
      overall: overall, overallText: band || '',
      cats: cats, aspects: shown, overlays: overlays
    };
    if (!out.input.hasTime || !p.hasTime) {
      s.notes.push('Ahol nincs pontos születési idő, ott az Aszcendens és a ' +
        'házátfedések kimaradnak, és a Hold fényszögei is pontatlanabbak.');
    }
    s.notes.push(SY.note);
    out.sections.push(s);
  }

  /* ================= záró összegzés ================= */

  function buildSummary(out) {
    var s = section('osszegzes', 'Összegzés — a lényeg egy helyen', '\u2728', 'osszegzes');
    var c = out.chart, i = out.input, sum = out.summary;

    /* --- elem- és minőségmérleg a tíz égitestből --- */
    var elemCount = { 'Tűz': 0, 'Föld': 0, 'Levegő': 0, 'Víz': 0 };
    var qualCount = { 'Kardinális': 0, 'Szilárd': 0, 'Változó': 0 };
    c.list.forEach(function (p) {
      var sd = signData(p.sign.key);
      if (!sd) return;
      if (elemCount[sd.element] != null) elemCount[sd.element]++;
      if (qualCount[sd.quality] != null) qualCount[sd.quality]++;
    });
    function topOf(obj) {
      var best = null, bv = -1, low = null, lv = 99;
      Object.keys(obj).forEach(function (k) {
        if (obj[k] > bv) { bv = obj[k]; best = k; }
        if (obj[k] < lv) { lv = obj[k]; low = k; }
      });
      return { top: best, topN: bv, low: low, lowN: lv };
    }
    var el = topOf(elemCount), qu = topOf(qualCount);
    out.balance = { elements: elemCount, qualities: qualCount };

    /* --- egy bekezdés rólad --- */
    var sunSd = signData(c.planets.sun.sign.key);
    var moonSd = signData(c.planets.moon.sign.key);
    var para = 'A Napod ' + sum.sunSign + ' jegyében áll' +
      (sunSd ? ' (' + sunSd.element.toLowerCase() + ' elem, ' +
        sunSd.quality.toLowerCase() + ' minőség)' : '') +
      ': ez az alaptermészeted és az, amiben a leginkább önmagad vagy. ' +
      'A Holdad ' + sum.moonSign + ' jegyében jár: érzelmileg ' +
      (moonSd ? moonSd.element.toLowerCase() + ' elem szerint' : 'másképp') +
      ' működsz, ami nem feltétlenül ugyanaz, mint amit kifelé mutatsz.';
    if (sum.ascSign) {
      para += ' Az aszcendensed ' + sum.ascSign + ': elsőre így látnak téged, ' +
        'és ösztönösen így vágsz bele az új helyzetekbe.';
    }
    para += ' A képletedben ' + el.top.toLowerCase() + ' elem van túlsúlyban (' +
      el.topN + ' égitest), ' + (el.lowN === 0
        ? el.low.toLowerCase() + ' elem viszont egyáltalán nincs — az ehhez tartozó ' +
          'minőségeket jellemzően kívülről, más emberektől vonzod be.'
        : 'a leggyengébb a ' + el.low.toLowerCase() + ' (' + el.lowN + ').');

    item(s, 'Egy bekezdésben rólad', '', para);

    item(s, 'Elemek mérlege',
      Object.keys(elemCount).map(function (k) { return k + ' ' + elemCount[k]; }).join(' · '),
      'A tíz égitest eloszlása. A túlsúlyban lévő elem adja a legerősebb ' +
      'működésmódodat, a hiányzó pedig azt a területet, ahol tudatosan kell ' +
      'pótolnod, amit mások természetesnek éreznek.');

    item(s, 'Minőségek mérlege',
      Object.keys(qualCount).map(function (k) { return k + ' ' + qualCount[k]; }).join(' · '),
      qu.top === 'Kardinális'
        ? 'Kezdeményező típus: te indítod a dolgokat, a befejezés a nehezebb.'
        : (qu.top === 'Szilárd'
          ? 'Kitartó típus: amit elkezdesz, végigviszed, de nehezen váltasz irányt.'
          : 'Alkalmazkodó típus: rugalmasan reagálsz a változásra, viszont könnyen elsodródsz.'));

    /* --- a képlet három hangsúlya --- */
    var hits = [];
    var hz = null;
    out.sections.forEach(function (x) { if (x.id === 'hazak') hz = x; });
    if (hz && hz.houseSpread) {
      hz.houseSpread.stelliums.forEach(function (st) {
        hits.push('A ' + st.house + '. házban ' + st.count + ' égitest gyűlt össze' +
          (st.title ? ' — ' + st.title.toLowerCase() : '') +
          ': ez a képleted egyik súlypontja.');
      });
    }
    if (c.aspects && c.aspects.length) {
      var tight = c.aspects.filter(function (a) { return a.exactness > 0.85; }).slice(0, 2);
      tight.forEach(function (a) {
        hits.push(a.aName + ' ' + a.symbol + ' ' + a.bName + ' nagyon szoros fényszög (' +
          a.orb.toFixed(1).replace('.', ',') + '°): ez a kapcsolat erősen meghatározó.');
      });
    }
    var sat = c.planets.saturn;
    if (sat && sat.house) {
      hits.push('A Szaturnusz a ' + sat.house + '. házban áll: itt kell a legtöbbet ' +
        'dolgoznod, és itt épül a legtartósabb tudásod.');
    }
    if (hits.length) {
      item(s, 'A képleted hangsúlyai', '', hits.slice(0, 4).join(' '));
    }

    /* --- amit a többi rendszer hozzátesz --- */
    var others = [];
    if (sum.chineseAnimal) {
      others.push({ k: 'Kínai jegy', v: sum.chineseElement + ' ' + sum.chineseAnimal });
    }
    if (sum.lifePath != null) {
      var lp = get(D(), 'numbers.lifePath.' + sum.lifePath, null);
      others.push({ k: 'Életút-szám', v: sum.lifePath + (lp && lp.title ? ' – ' + lp.title : '') });
    }
    var mp = c.moonPhase;
    if (mp) others.push({ k: 'Születési holdfázis', v: mp.symbol + ' ' + mp.name });
    var ga = C.guardianAngel(i.month, i.day);
    if (ga) others.push({ k: 'Születési angyal', v: ga.num + '. ' + ga.name });
    var tz = C.tzolkin(i.year, i.month, i.day);
    if (tz && tz.sign) others.push({ k: 'Maja jegy', v: tz.label });
    var dm = C.destinyMatrix(i.year, i.month, i.day);
    if (dm) {
      var t = get(D(), 'numbers.tarotCards.' + dm.E, null);
      others.push({ k: 'Sorsmátrix középpont', v: dm.E + (t ? '. ' + t.name : '') });
    }
    if (others.length) {
      s.summaryGrid = others;
    }

    /* --- mit kezdj vele --- */
    item(s, 'Hogyan olvasd ezt', '',
      'A fenti rendszerek egymástól függetlenül keletkeztek, más-más kultúrában, és ' +
      'nem egymás megerősítései: ahol egybecsengenek, az véletlen, nem bizonyíték. ' +
      'Akkor hasznos ez az egész, ha tükörként használod — az ismerős pontok ' +
      'gondolkodásra hívnak, a nem illőket pedig nyugodtan tedd félre.');

    out.sections.push(s);
  }

  HCORE.buildProfile = buildProfile;

})(typeof window !== 'undefined' ? window : globalThis);
