/* Horoszkóp – napi és heti előrejelzés számítási magja
   Gyors tranzitok a natális képletre, a Hold járása (jegy, ház, fázis,
   üresjárat), bolygóórák, lunációk, ingresszusok, állomások, és a területi
   pontozás. Forrás: docs/33-napi-heti-elorejelzes.md
   Sima script, nem ES modul. Betöltés: core/astro.js után, profile.js előtt. */

(function (global) {
  'use strict';

  var A = global.Astronomy;
  var HCORE = global.HCORE = global.HCORE || {};
  var norm360 = HCORE.norm360;
  function wrap180(x) { var d = norm360(x); return d > 180 ? d - 360 : d; }
  var H = 3600000, MIN = 60000;

  var FAST = [
    { key: 'moon', body: 'Moon', name: 'Hold', symbol: '☽', step: 30 * MIN },
    { key: 'sun', body: 'Sun', name: 'Nap', symbol: '☉', step: 2 * H },
    { key: 'mercury', body: 'Mercury', name: 'Merkúr', symbol: '☿', step: 2 * H },
    { key: 'venus', body: 'Venus', name: 'Vénusz', symbol: '♀', step: 2 * H },
    { key: 'mars', body: 'Mars', name: 'Mars', symbol: '♂', step: 2 * H }
  ];
  var SLOW_FOR_MOON = [
    { key: 'sun', body: 'Sun' }, { key: 'mercury', body: 'Mercury' }, { key: 'venus', body: 'Venus' },
    { key: 'mars', body: 'Mars' }, { key: 'jupiter', body: 'Jupiter' }, { key: 'saturn', body: 'Saturn' },
    { key: 'uranus', body: 'Uranus' }, { key: 'neptune', body: 'Neptune' }, { key: 'pluto', body: 'Pluto' }
  ];
  var ASPECTS = [
    { key: 'conjunction', angle: 0, name: 'együttállás', quality: 'conj' },
    { key: 'sextile', angle: 60, name: 'szextil', quality: 'soft' },
    { key: 'square', angle: 90, name: 'kvadrát', quality: 'hard' },
    { key: 'trine', angle: 120, name: 'trigon', quality: 'soft' },
    { key: 'opposition', angle: 180, name: 'szembenállás', quality: 'hard' }
  ];
  // pozíció-gyorsítótár: a keresők ugyanazokat az időpontokat kérdezik sok célpontra
  var memo = {}, memoN = 0;
  var lonOf = function (body, t) {
    var k = body + '|' + t.getTime();
    if (memo[k] != null) return memo[k];
    if (memoN > 200000) { memo = {}; memoN = 0; }
    var v = norm360(HCORE.eclipticLongitude(body, t));
    memo[k] = v; memoN++;
    return v;
  };

  /** Egy f(t) (fokban, −180..180 közé csavart) nullátmeneteit keresi from–to között. */
  function zeroCrossings(f, from, to, stepMs) {
    var out = [], t0 = from.getTime(), t1 = to.getTime();
    var prev = f(new Date(t0)), prevT = t0;
    for (var t = t0 + stepMs; t <= t1 + stepMs; t += stepMs) {
      var tt = Math.min(t, t1), cur = f(new Date(tt));
      if ((prev < 0) !== (cur < 0) && Math.abs(prev - cur) < 90) {
        var a = prevT, b = tt, fa = prev;
        for (var i = 0; i < 24; i++) {                 // felezés percre
          var m = (a + b) / 2, fm = f(new Date(m));
          if ((fa < 0) !== (fm < 0)) { b = m; } else { a = m; fa = fm; }
          if (b - a < MIN / 2) break;
        }
        out.push(new Date((a + b) / 2));
      }
      prev = cur; prevT = tt;
      if (tt === t1) break;
    }
    return out;
  }

  /* ---------------- gyors tranzitok a natális képletre ---------------- */

  /**
   * @param targets [{ key, name, symbol, lon }] natális pontok
   * @param from, to  Date (UTC)
   * @param cusps     natális házcsúcsok (opcionális) — a tranzit háza
   */
  function fastTransits(targets, from, to, cusps) {
    var out = [];
    FAST.forEach(function (tb) {
      targets.forEach(function (tg) {
        ASPECTS.forEach(function (asp) {
          var f = function (t) { return wrap180(lonOf(tb.body, t) - tg.lon - asp.angle); };
          // a szembenállásnál a −180/+180 ugrás nem valódi átmenet: a wrap kezeli, mert ott f ≈ 0 helyett ±180
          zeroCrossings(f, from, to, tb.step).forEach(function (d) {
            var lon = lonOf(tb.body, d);
            out.push({ planet: tb, target: tg, aspect: asp, date: d, lon: lon,
              sign: HCORE.toSign(lon), house: cusps ? HCORE.houseOf(lon, cusps) : null,
              applyingBefore: true });
          });
        });
      });
    });
    out.sort(function (a, b) { return a.date - b.date; });
    return out;
  }

  /* ---------------- a Hold járása ---------------- */

  /** Jegyváltások egy égitestre: az egész-jegy index változását figyeli, majd percre felezi. */
  function signChanges(body, from, to, stepMs) {
    var out = [], t0 = from.getTime(), t1 = to.getTime();
    var prev = Math.floor(lonOf(body, new Date(t0)) / 30), prevT = t0;
    for (var t = t0 + stepMs; t <= t1 + stepMs; t += stepMs) {
      var tt = Math.min(t, t1), cur = Math.floor(lonOf(body, new Date(tt)) / 30);
      if (cur !== prev) {
        var a = prevT, b = tt;
        for (var i = 0; i < 24; i++) {
          var m = (a + b) / 2;
          if (Math.floor(lonOf(body, new Date(m)) / 30) === prev) a = m; else b = m;
          if (b - a < MIN / 2) break;
        }
        var d = new Date((a + b) / 2);
        out.push({ date: d, sign: HCORE.toSign(lonOf(body, new Date(d.getTime() + MIN))),
          fromSign: HCORE.toSign(lonOf(body, new Date(d.getTime() - MIN))) });
      }
      prev = cur; prevT = tt;
      if (tt === t1) break;
    }
    return out;
  }

  /** Holdjegy-váltások az ablakban. */
  function moonIngresses(from, to) { return signChanges('Moon', from, to, 30 * MIN); }

  /** A Hold pontos ptolemaioszi fényszögei a többi tranzit-bolygóval (üresjárathoz). */
  function moonAspects(from, to) {
    var out = [];
    SLOW_FOR_MOON.forEach(function (p) {
      ASPECTS.forEach(function (asp) {
        var f = function (t) { return wrap180(lonOf('Moon', t) - lonOf(p.body, t) - asp.angle); };
        zeroCrossings(f, from, to, 30 * MIN).forEach(function (d) {
          out.push({ date: d, planet: p.key, aspect: asp });
        });
      });
    });
    out.sort(function (a, b) { return a.date - b.date; });
    return out;
  }

  /**
   * Üresjárat-szakaszok (modern szabály): az utolsó pontos fényszög a jegyben →
   * a jegyváltásig. A vizsgált ablakot 3 nappal kibővítjük, hogy az ablak elején
   * futó üresjárat is meglegyen.
   */
  function voidOfCourse(from, to) {
    var f0 = new Date(from.getTime() - 3 * 86400000), t1 = new Date(to.getTime() + 3 * 86400000);
    var ingr = moonIngresses(f0, t1), asps = moonAspects(f0, t1);
    var out = [];
    for (var i = 0; i < ingr.length; i++) {
      var end = ingr[i].date, start = i > 0 ? ingr[i - 1].date : f0;
      var last = null;
      asps.forEach(function (a) { if (a.date > start && a.date < end) last = a; });
      if (!last) continue;                       // az ablak elején nem tudjuk — kihagyjuk
      if (end < from || last.date > to) continue;
      var signBefore = HCORE.toSign(lonOf('Moon', new Date(end.getTime() - MIN)));
      out.push({ start: last.date, end: end, lastAspect: last, sign: signBefore, nextSign: ingr[i].sign,
        lillyException: ['bika', 'rak', 'nyilas', 'halak'].indexOf(signBefore.key) >= 0 });
    }
    return out;
  }

  /* ---------------- lunációk, ingresszusok, állomások ---------------- */

  function lunations(from, to) {
    var out = [];
    [0, 180].forEach(function (ang) {
      var t = new Date(from.getTime() - 1);
      for (var i = 0; i < 6; i++) {
        var r = A.SearchMoonPhase(ang, t, 40);
        if (!r) break;
        var d = r.date;
        if (d > to) break;
        if (d >= from) {
          var lon = lonOf('Moon', d);
          out.push({ type: ang === 0 ? 'ujhold' : 'telihold', date: d, lon: lon, sign: HCORE.toSign(lon) });
        }
        t = new Date(d.getTime() + 86400000);
      }
    });
    out.sort(function (a, b) { return a.date - b.date; });
    return out;
  }

  /** Jegyváltások (Nap–Mars) az ablakban. */
  function ingresses(from, to) {
    var out = [];
    FAST.forEach(function (tb) {
      if (tb.key === 'moon') return;
      signChanges(tb.body, from, to, 6 * H).forEach(function (c) {
        out.push({ planet: tb, date: c.date, sign: c.sign, fromSign: c.fromSign,
          retrograde: ((c.sign.index - c.fromSign.index + 12) % 12) === 11 });
      });
    });
    out.sort(function (a, b) { return a.date - b.date; });
    return out;
  }

  /** Állomások (a napi mozgás előjelet vált): Merkúr, Vénusz, Mars. */
  function stations(from, to) {
    var out = [];
    ['mercury', 'venus', 'mars'].forEach(function (k) {
      var tb = FAST.filter(function (x) { return x.key === k; })[0];
      var f = function (t) { return HCORE.dailyMotion(tb.body, t) * 10; };  // fok/nap ×10, hogy a felezés jó legyen
      zeroCrossings(f, from, to, 12 * H).forEach(function (d) {
        var after = HCORE.dailyMotion(tb.body, new Date(d.getTime() + 2 * 86400000));
        var lon = lonOf(tb.body, d);
        out.push({ planet: tb, date: d, lon: lon, sign: HCORE.toSign(lon), toRetro: after < 0 });
      });
    });
    return out;
  }

  /* ---------------- bolygóórák ---------------- */

  var CHALDEAN = ['saturn', 'jupiter', 'mars', 'sun', 'venus', 'mercury', 'moon'];
  var DAY_RULER = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'];   // vasárnap = 0

  function localWeekday(date, tz) {
    try {
      var w = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short' }).format(date);
      return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(w);
    } catch (e) { return date.getUTCDay(); }
  }

  /**
   * A napkeltétől napkeltéig tartó bolygónap 24 egyenlőtlen órája.
   * @param date Date (a nap, amelyre kérjük — a megelőző napkeltétől számol)
   * @param lat, lon hely; tz IANA zóna (a hét napjához)
   */
  function planetaryHours(date, lat, lon, tz) {
    if (!A.SearchRiseSet) return null;
    var obs = new A.Observer(lat, lon, 0);
    // a következő napkelte, majd onnan 26 órát visszalépve az előző: r0 <= date < r1
    var next = A.SearchRiseSet(A.Body.Sun, obs, +1, date, 2);
    if (!next) return null;
    var prev = A.SearchRiseSet(A.Body.Sun, obs, +1, new Date(next.date.getTime() - 26 * H), 1.5);
    if (!prev || prev.date > date) return null;
    var r0 = prev.date;
    var set = A.SearchRiseSet(A.Body.Sun, obs, -1, r0, 1.5);
    if (!set) return null;
    var s0 = set.date, e = next.date;
    var wd = localWeekday(new Date(r0.getTime() + H), tz);
    var startIdx = CHALDEAN.indexOf(DAY_RULER[wd]);
    var hours = [];
    var dayLen = (s0 - r0) / 12, nightLen = (e - s0) / 12;
    for (var i = 0; i < 24; i++) {
      var st = i < 12 ? new Date(r0.getTime() + i * dayLen) : new Date(s0.getTime() + (i - 12) * nightLen);
      var en = i < 12 ? new Date(r0.getTime() + (i + 1) * dayLen) : new Date(s0.getTime() + (i - 11) * nightLen);
      hours.push({ index: i + 1, start: st, end: en, ruler: CHALDEAN[(startIdx + i) % 7], day: i < 12 });
    }
    var current = null;
    hours.forEach(function (h) { if (h.start <= date && date < h.end) current = h; });
    return { sunrise: r0, sunset: s0, nextSunrise: e, dayRuler: DAY_RULER[wd], weekday: wd, hours: hours, current: current };
  }

  /* ---------------- pontozás öt területre ---------------- */

  var DOMAINS = ['szerelem', 'munka', 'penz', 'egeszseg', 'kozerzet'];
  var TARGET_DOMAIN = {
    sun: ['munka', 'egeszseg'], moon: ['kozerzet', 'szerelem'], mercury: ['munka'], venus: ['szerelem', 'penz'],
    mars: ['egeszseg', 'munka'], jupiter: ['penz'], saturn: ['munka'], uranus: ['kozerzet'], neptune: ['kozerzet'],
    pluto: ['penz'], asc: ['egeszseg', 'kozerzet'], mc: ['munka'], dsc: ['szerelem'], ic: ['kozerzet']
  };
  var HOUSE_DOMAIN = { 1: 'egeszseg', 2: 'penz', 5: 'szerelem', 6: 'egeszseg', 7: 'szerelem', 8: 'penz', 10: 'munka', 4: 'kozerzet', 12: 'kozerzet' };
  var PLANET_NATURE = { moon: 0, sun: 0, mercury: 0, venus: 1, mars: -1, jupiter: 1, saturn: -1 };
  var PLANET_WEIGHT = { moon: 1, sun: 2, mercury: 1.5, venus: 2, mars: 2 };

  /**
   * Egy nap pontszáma területenként az aznapi pontos tranzitokból.
   * Minden tétel: { domain, delta, reason } — a nézet kiírja a levezetést.
   */
  function scoreDay(events, houseOf) {
    var score = {}, reasons = [];
    DOMAINS.forEach(function (d) { score[d] = 0; });
    events.forEach(function (ev) {
      var q = ev.aspect.quality, w = PLANET_WEIGHT[ev.planet.key] || 1;
      var sign = q === 'soft' ? 1 : q === 'hard' ? -1 : (PLANET_NATURE[ev.planet.key] || 0);
      if (q === 'conj' && sign === 0) sign = 0.5;            // semleges együttállás: enyhén aktiváló
      var domains = (TARGET_DOMAIN[ev.target.key] || []).slice();
      if (ev.house && HOUSE_DOMAIN[ev.house] && domains.indexOf(HOUSE_DOMAIN[ev.house]) < 0) domains.push(HOUSE_DOMAIN[ev.house]);
      if (!domains.length) domains = ['kozerzet'];
      domains.forEach(function (d) {
        var delta = sign * w;
        score[d] += delta;
        reasons.push({ domain: d, delta: delta, event: ev });
      });
    });
    var stars = {};
    DOMAINS.forEach(function (d) {
      var s = score[d];
      stars[d] = s <= -3 ? 1 : s < -0.5 ? 2 : s <= 0.5 ? 3 : s < 3 ? 4 : 5;
    });
    return { score: score, stars: stars, reasons: reasons };
  }

  HCORE.forecast = {
    FAST: FAST, ASPECTS: ASPECTS, DOMAINS: DOMAINS, CHALDEAN: CHALDEAN, DAY_RULER: DAY_RULER,
    fastTransits: fastTransits, moonIngresses: moonIngresses, moonAspects: moonAspects,
    voidOfCourse: voidOfCourse, lunations: lunations, signChanges: signChanges, ingresses: ingresses, stations: stations,
    planetaryHours: planetaryHours, scoreDay: scoreDay, zeroCrossings: zeroCrossings
  };

})(typeof window !== 'undefined' ? window : globalThis);
