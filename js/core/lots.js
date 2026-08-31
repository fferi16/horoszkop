/* Asztroláb – hellenisztikus sorsrészek és perzsa firdaria motor
   Forrás: docs/23-sorsreszek.md, docs/24-firdaria.md
   Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};

  function norm360(x) { return ((x % 360) + 360) % 360; }

  /* ================= sorsrészek ================= */

  /**
   * Szekta: házrendszertől függetlenül, a valódi horizont szerint.
   * A Nap ekliptikai szélessége ~0, ezért ez pontos.
   * Konvenció (nem ókori szabály): a Nap pontosan az aszcendensen → nappali,
   * pontosan a deszcendensen → éjszakai.
   */
  function isDayBirth(sunLon, ascLon) {
    var d = norm360(sunLon - ascLon);
    if (d === 0) return true;
    if (d === 180) return false;
    return d > 180;
  }

  /**
   * A hét hermetikus sorsrész + Basis.
   * @param p  { sun, moon, mercury, venus, mars, jupiter, saturn } hosszúságok
   * @param asc aszcendens hosszúsága
   * @param isDay nappali születés-e
   */
  function lots(p, asc, isDay) {
    var D = (global.HDATA || {}).lots;
    if (!D) return null;

    var out = {};

    // 1) Fortuna és Szellem — a többi ezekre hivatkozik, ezért előbb kellenek
    out.fortune = isDay ? norm360(asc + p.moon - p.sun) : norm360(asc + p.sun - p.moon);
    out.spirit  = isDay ? norm360(asc + p.sun - p.moon) : norm360(asc + p.moon - p.sun);

    // 2) a többi sorsrész — a MÁR szekta szerint javított Fortunára/Szellemre épül
    function valueOf(key) {
      if (key === 'fortune') return out.fortune;
      if (key === 'spirit') return out.spirit;
      return p[key];
    }
    D.list.forEach(function (L) {
      if (L.key === 'fortune' || L.key === 'spirit') return;
      var a = valueOf(L.add), b = valueOf(L.sub);
      out[L.key] = isDay ? norm360(asc + a - b) : norm360(asc + b - a);
    });

    // 3) Basis: a Fortuna és a Szellem közti RÖVIDEBB ív az aszcendenstől
    var d = norm360(out.spirit - out.fortune);
    out.basis = norm360(asc + (d <= 180 ? d : 360 - d));

    return out;
  }

  /* ================= firdaria ================= */

  function rotate(arr, startKey) {
    var i = arr.indexOf(startKey);
    if (i < 0) return arr.slice();
    return arr.slice(i).concat(arr.slice(0, i));
  }

  /** A szekta szerinti teljes 9 elemű periódussor (Abu Ma'sar változat). */
  function sequence(isDay) {
    var F = (global.HDATA || {}).firdaria;
    var planets = rotate(F.chaldean, isDay ? 'sun' : 'moon');
    return planets.concat(['northNode', 'southNode']);
  }

  /**
   * Melyik firdaria-periódusban és alperiódusban tart a szülött egy adott napon.
   * @param birthUTC születés
   * @param whenUTC  a vizsgált időpont
   * @param isDay    nappali születés-e
   */
  function firdaria(birthUTC, whenUTC, isDay) {
    var F = (global.HDATA || {}).firdaria;
    if (!F) return null;

    var seq = sequence(isDay);
    var elapsed = (whenUTC.getTime() - birthUTC.getTime()) / 86400000 / F.yearLength;
    if (elapsed < 0) return null;

    var cycle = elapsed % 75;                    // 75 év után elölről
    var cycles = Math.floor(elapsed / 75);

    // fő periódus
    var acc = 0, idx = 0, startAge = 0;
    for (var i = 0; i < seq.length; i++) {
      var len = F.years[seq[i]];
      if (cycle < acc + len) { idx = i; startAge = acc; break; }
      acc += len;
    }
    var lord = seq[idx];
    var lordYears = F.years[lord];
    var into = cycle - startAge;

    // alperiódus — a csomóknak nincs
    var sub = null, subIdx = -1, subOrder = null;
    if (lord !== 'northNode' && lord !== 'southNode') {
      subOrder = rotate(F.chaldean, lord);
      var subLen = lordYears / 7;
      subIdx = Math.min(6, Math.floor(into / subLen));
      sub = subOrder[subIdx];
    }

    function ageToDate(age) {
      return new Date(birthUTC.getTime() +
        (cycles * 75 + age) * F.yearLength * 86400000);
    }

    return {
      sequence: seq, cycles: cycles,
      lord: lord, lordYears: lordYears,
      startAge: startAge, endAge: startAge + lordYears,
      start: ageToDate(startAge), end: ageToDate(startAge + lordYears),
      sub: sub, subIndex: subIdx, subOrder: subOrder,
      subStart: sub ? ageToDate(startAge + subIdx * (lordYears / 7)) : null,
      subEnd: sub ? ageToDate(startAge + (subIdx + 1) * (lordYears / 7)) : null,
      elapsedYears: elapsed
    };
  }

  /** A teljes 75 éves menetrend (a felület táblázatához). */
  function schedule(birthUTC, isDay) {
    var F = (global.HDATA || {}).firdaria;
    if (!F) return [];
    var seq = sequence(isDay), acc = 0, rows = [];
    seq.forEach(function (k) {
      var len = F.years[k];
      rows.push({
        lord: k, years: len, fromAge: acc, toAge: acc + len,
        from: new Date(birthUTC.getTime() + acc * F.yearLength * 86400000),
        to: new Date(birthUTC.getTime() + (acc + len) * F.yearLength * 86400000)
      });
      acc += len;
    });
    return rows;
  }

  HCORE.lots = {
    isDayBirth: isDayBirth,
    compute: lots,
    firdaria: firdaria,
    firdariaSchedule: schedule,
    firdariaSequence: sequence
  };

})(typeof window !== 'undefined' ? window : globalThis);
