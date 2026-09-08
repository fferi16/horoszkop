/* Horoszkóp – időzítő technikák II.
   Zodiacal releasing (Valens IV.4–10, Brennan rekonstrukciója), fogyatkozások
   (Astronomy Engine), lunáris visszatérés. Forrás: docs/31-releasing-fogyatkozas-lunar.md
   Sima script, nem ES modul. Betöltés: core/lots.js után. */

(function (global) {
  'use strict';

  var A = global.Astronomy;
  var HCORE = global.HCORE = global.HCORE || {};
  var norm360 = HCORE.norm360;
  function wrap180(x) { var d = norm360(x); return d > 180 ? d - 360 : d; }

  /* ---------------- zodiacal releasing ---------------- */

  // a jegyek évei (a hagyományos úr kis évei; Bak 27, Vízöntő 30) — Kos-tól indexelve
  var SIGN_YEARS = [15, 8, 20, 25, 19, 20, 8, 15, 12, 27, 30, 12];
  var YEAR_MS = 360 * 86400000, MONTH_MS = 30 * 86400000;   // Valens: 360 napos év, 30 napos hónap

  /** Melyik sarok a Fortuna jegyétől számolva (1/4/7/10), egyébként 0. */
  function peakOf(signIdx, fortuneIdx) {
    var d = (signIdx - fortuneIdx + 12) % 12;
    return d === 0 ? 1 : d === 3 ? 4 : d === 6 ? 7 : d === 9 ? 10 : 0;
  }

  /** 2. szint egy fejezeten belül: a fejezet jegyéből indul, hónapokban; ha a
      sorozat visszaérne a fejezet jegyéhez, a szemközti jegybe ugrik (kötés elengedése). */
  function subPeriods(l1, fortuneIdx) {
    var out = [], t = l1.start.getTime(), endT = l1.end.getTime();
    var idx = l1.sign, first = true, jumped = false;
    while (t < endT && out.length < 40) {
      var lb = false;
      if (!first && idx === l1.sign) { idx = (idx + 6) % 12; lb = true; jumped = true; }
      var e = Math.min(t + SIGN_YEARS[idx] * MONTH_MS, endT);
      out.push({ sign: idx, start: new Date(t), end: new Date(e), months: SIGN_YEARS[idx],
        lb: lb, peak: peakOf(idx, fortuneIdx) });
      t += SIGN_YEARS[idx] * MONTH_MS;
      idx = (idx + 1) % 12;
      first = false;
    }
    out.jumped = jumped;
    return out;
  }

  /**
   * Releasing egy pontból.
   * @param startIdx   a kiinduló sorsrész jegyének indexe
   * @param fortuneIdx a Fortuna jegyének indexe (csúcsok)
   * @param birthUTC   születés (Date)
   * @param now        vonatkoztatási idő (Date)
   */
  function releasing(startIdx, fortuneIdx, birthUTC, now) {
    var L1 = [], t = birthUTC.getTime(), idx = startIdx;
    var horizon = now.getTime() + 45 * 365.25 * 86400000;
    while (t < horizon && L1.length < 16) {
      var yrs = SIGN_YEARS[idx];
      L1.push({ sign: idx, years: yrs, start: new Date(t), end: new Date(t + yrs * YEAR_MS),
        peak: peakOf(idx, fortuneIdx) });
      t += yrs * YEAR_MS;
      idx = (idx + 1) % 12;
    }
    var cur = null;
    for (var i = 0; i < L1.length; i++) if (L1[i].start <= now && now < L1[i].end) { cur = L1[i]; break; }
    if (!cur) return null;
    var L2 = subPeriods(cur, fortuneIdx);
    var cur2 = null, next2 = null;
    for (var j = 0; j < L2.length; j++) {
      if (L2[j].start <= now && now < L2[j].end) { cur2 = L2[j]; next2 = L2[j + 1] || null; break; }
    }
    // következő kötés-elengedés és következő csúcs (L2-ben a mostani fejezeten belül, aztán L1-ben)
    var nextLB = null, nextPeak = null;
    L2.forEach(function (p) {
      if (p.start > now) {
        if (p.lb && !nextLB) nextLB = p;
        if (p.peak && !nextPeak) nextPeak = { level: 2, period: p };
      }
    });
    if (!nextPeak) {
      L1.forEach(function (p) { if (p.start > now && p.peak && !nextPeak) nextPeak = { level: 1, period: p }; });
    }
    return { L1: L1, current: cur, L2: L2, current2: cur2, next2: next2, nextLB: nextLB, nextPeak: nextPeak };
  }

  HCORE.releasing = releasing;
  HCORE.releasingSignYears = SIGN_YEARS;

  /* ---------------- fogyatkozások ---------------- */

  function solarInfo(ec) {
    var d = ec.peak.date;
    return { type: 'solar', kind: ec.kind, date: d, lon: norm360(A.SunPosition(d).elon),
      obscuration: ec.obscuration };
  }
  function lunarInfo(ec) {
    var d = ec.peak.date;
    return { type: 'lunar', kind: ec.kind, date: d, lon: norm360(A.EclipticGeoMoon(d).lon),
      obscuration: ec.obscuration };
  }

  /** Nap- és holdfogyatkozások két időpont között, időrendben. */
  function eclipsesBetween(from, to) {
    var out = [];
    try {
      var s = A.SearchGlobalSolarEclipse(from);
      while (s && s.peak.date < to) { out.push(solarInfo(s)); s = A.NextGlobalSolarEclipse(s.peak); }
      var l = A.SearchLunarEclipse(from);
      while (l && l.peak.date < to) { out.push(lunarInfo(l)); l = A.NextLunarEclipse(l.peak); }
    } catch (e) { /* a könyvtár tartományán kívül */ }
    out.sort(function (a, b) { return a.date - b.date; });
    return out;
  }

  /** A születés előtti utolsó nap- és holdfogyatkozás. */
  function prenatalEclipses(birthUTC) {
    var from = new Date(birthUTC.getTime() - 400 * 86400000);
    var list = eclipsesBetween(from, new Date(birthUTC.getTime() + 2 * 86400000));
    var solar = null, lunar = null, near = null;
    list.forEach(function (e) {
      if (Math.abs(e.date - birthUTC) <= 1.5 * 86400000 && !near) near = e;
      if (e.date <= birthUTC) { if (e.type === 'solar') solar = e; else lunar = e; }
    });
    return { solar: solar, lunar: lunar, near: near };
  }

  HCORE.eclipsesBetween = eclipsesBetween;
  HCORE.prenatalEclipses = prenatalEclipses;

  /* ---------------- lunáris visszatérés ---------------- */

  function lunarReturnDate(natalMoonLon, aroundDate) {
    var t = new Date(aroundDate.getTime());
    for (var i = 0; i < 12; i++) {
      var d = wrap180(A.EclipticGeoMoon(t).lon - natalMoonLon);
      if (Math.abs(d) < 1e-5) break;
      t = new Date(t.getTime() - d / 13.176 * 86400000);
    }
    return t;
  }

  /** Az érvényben lévő holdhónap: az utolsó visszatérés (<= now) és a következő. */
  function activeLunarReturn(natalMoonLon, now) {
    var lr = lunarReturnDate(natalMoonLon, now);
    if (lr > now) lr = lunarReturnDate(natalMoonLon, new Date(lr.getTime() - 27.321582 * 86400000));
    var next = lunarReturnDate(natalMoonLon, new Date(lr.getTime() + 27.321582 * 86400000));
    return { start: lr, end: next };
  }

  HCORE.lunarReturnDate = lunarReturnDate;
  HCORE.activeLunarReturn = activeLunarReturn;

})(typeof window !== 'undefined' ? window : globalThis);
