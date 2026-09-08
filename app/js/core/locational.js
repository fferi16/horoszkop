/* Horoszkóp – kiegészítő technikák III.
   Asztrokartográfia (Jim Lewis vonalai városlistával), szoláris ív direkciók
   (Tyl), félpontok (Ebertin), azték tonalpohualli, Chiron-ciklus.
   Forrás: docs/32-azték-chiron-szolarisiv-felpontok-asztrokartografia.md
   Sima script, nem ES modul. Betöltés: core/extras.js után. */

(function (global) {
  'use strict';

  var A = global.Astronomy;
  var HCORE = global.HCORE = global.HCORE || {};
  var norm360 = HCORE.norm360, DEG = Math.PI / 180;
  function wrap180(x) { var d = norm360(x); return d > 180 ? d - 360 : d; }

  /* ---------------- asztrokartográfia ---------------- */

  /** Ekliptikai (λ, β) → egyenlítői (RA, dec) fokban. */
  function eclToEq(lon, lat, eps) {
    var l = lon * DEG, b = lat * DEG, e = eps * DEG;
    var ra = Math.atan2(Math.sin(l) * Math.cos(e) - Math.tan(b) * Math.sin(e), Math.cos(l));
    var dec = Math.asin(Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(l));
    return { ra: norm360(ra / DEG), dec: dec / DEG };
  }

  /**
   * Egy bolygó vonalai a születés pillanatában.
   * @param planet { lon, lat } ekliptikai
   * @param date   születés (UTC)
   * @returns { mc, ic: földrajzi hosszúság (kelet +), rise(φ), set(φ): függvények }
   */
  function planetLines(planet, date) {
    var eps = HCORE.obliquity(date);
    var eq = eclToEq(planet.lon, planet.lat || 0, eps);
    var gst = HCORE.localSiderealDeg(date, 0);         // Greenwich csillagidő fokban
    var mc = wrap180(eq.ra - gst);                      // ahol LST = RA
    var ic = wrap180(mc + 180);
    var decR = eq.dec * DEG;
    function horizonLon(latDeg, rising) {
      var x = -Math.tan(latDeg * DEG) * Math.tan(decR);
      if (x < -1 || x > 1) return null;                // ezen a szélességen nem kel/nyugszik
      var H = Math.acos(x) / DEG;                       // óraszög fokban
      var lst = rising ? eq.ra - H : eq.ra + H;
      return wrap180(lst - gst);
    }
    return { ra: eq.ra, dec: eq.dec, mc: mc, ic: ic,
      rise: function (lat) { return horizonLon(lat, true); },
      set: function (lat) { return horizonLon(lat, false); } };
  }

  /**
   * Városok a vonalak közelében.
   * @param planets [{ key, name, lon, lat }]
   * @param date    születés (UTC)
   * @param cities  [[name, lat, lon, ...]]
   * @param orbDeg  hosszúsági orbis fokban (a vonaltól)
   */
  function cityHits(planets, date, cities, orbDeg) {
    var out = [];
    planets.forEach(function (p) {
      var L = planetLines(p, date);
      var hits = { key: p.key, name: p.name, symbol: p.symbol, lines: { MC: [], IC: [], ASC: [], DSC: [] } };
      cities.forEach(function (c) {
        var lat = c[1], lon = c[2];
        var dMC = Math.abs(wrap180(lon - L.mc)), dIC = Math.abs(wrap180(lon - L.ic));
        if (dMC <= orbDeg) hits.lines.MC.push({ city: c[0], d: dMC });
        if (dIC <= orbDeg) hits.lines.IC.push({ city: c[0], d: dIC });
        var r = L.rise(lat), s = L.set(lat);
        if (r != null && Math.abs(wrap180(lon - r)) <= orbDeg) hits.lines.ASC.push({ city: c[0], d: Math.abs(wrap180(lon - r)) });
        if (s != null && Math.abs(wrap180(lon - s)) <= orbDeg) hits.lines.DSC.push({ city: c[0], d: Math.abs(wrap180(lon - s)) });
      });
      Object.keys(hits.lines).forEach(function (k) { hits.lines[k].sort(function (a, b) { return a.d - b.d; }); });
      hits.mc = L.mc; hits.ic = L.ic;
      out.push(hits);
    });
    return out;
  }

  /* ---------------- szoláris ív direkciók ---------------- */

  /**
   * A következő évek szoláris ív érintései (kemény fényszögek, 1° orbis = ~1 év).
   * @param natal  [{ key, name, lon }] irányított pontok
   * @param targets [{ key, name, lon }] natális célpontok
   * @param birthUTC, now
   * @param years  előretekintés
   */
  function solarArcHits(natal, targets, birthUTC, now, years) {
    var natalSun = HCORE.eclipticLongitude('Sun', birthUTC);
    function arcAt(t) {
      var age = (t - birthUTC) / (365.2425 * 86400000);
      var pDate = new Date(birthUTC.getTime() + age * 86400000);
      return norm360(HCORE.eclipticLongitude('Sun', pDate) - natalSun);
    }
    var arcNow = arcAt(now);
    var rate = (arcAt(new Date(now.getTime() + 365.2425 * 86400000)) - arcNow); // fok/év most
    if (rate <= 0) rate = 0.9856;
    var out = [];
    natal.forEach(function (p) {
      targets.forEach(function (q) {
        if (p.key === q.key) return;
        [0, 90, 180, 270].forEach(function (asp) {
          // az ív, amelynél p+ív = q+asp
          var need = norm360(q.lon + asp - p.lon);
          var delta = need - arcNow;               // hány fok van még hátra
          if (delta < -1) delta += 360;
          if (delta < -1 || delta > years) return; // 1° visszamenőleg (elváló) még számít
          var when = new Date(now.getTime() + delta / rate * 365.2425 * 86400000);
          out.push({ planet: p, target: q, aspect: asp === 0 ? 'conjunction' : asp === 180 ? 'opposition' : 'square',
            date: when, delta: delta });
        });
      });
    });
    out.sort(function (a, b) { return a.date - b.date; });
    return { hits: out, arc: arcNow, rate: rate };
  }

  /* ---------------- félpontok (Ebertin) ---------------- */

  function midpoint(a, b) {
    var d = wrap180(b - a);
    return norm360(a + d / 2);
  }

  /**
   * Bolygók félpontokon (90°-os tárcsa: 0/90/180/270), orbis fokban.
   * @param pairs  [{ key, name, lon }] a félpont-alkotó pontok
   * @param bodies [{ key, name, lon }] a félpontra álló bolygók
   */
  function midpointPictures(pairs, bodies, orb) {
    var out = [];
    for (var i = 0; i < pairs.length; i++) {
      for (var j = i + 1; j < pairs.length; j++) {
        var m = midpoint(pairs[i].lon, pairs[j].lon);
        bodies.forEach(function (b) {
          if (b.key === pairs[i].key || b.key === pairs[j].key) return;
          var d = norm360(b.lon - m) % 90;
          var dev = Math.min(d, 90 - d);
          if (dev <= orb) {
            var exact = Math.abs(wrap180(b.lon - m)) <= orb;
            out.push({ body: b, a: pairs[i], b2: pairs[j], mid: m, orb: dev, direct: exact });
          }
        });
      }
    }
    out.sort(function (x, y) { return x.orb - y.orb; });
    return out;
  }

  /* ---------------- azték tonalpohualli ---------------- */

  var AZTEC_SIGNS = ['Cipactli', 'Ehecatl', 'Calli', 'Cuetzpalin', 'Coatl', 'Miquiztli', 'Mazatl',
    'Tochtli', 'Atl', 'Itzcuintli', 'Ozomatli', 'Malinalli', 'Acatl', 'Ocelotl', 'Cuauhtli',
    'Cozcacuauhtli', 'Ollin', 'Tecpatl', 'Quiahuitl', 'Xochitl'];
  var NIGHT_LORDS = ['Xiuhtecuhtli', 'Tezcatlipoca', 'Piltzintecuhtli', 'Centeotl', 'Mictlantecuhtli',
    'Chalchiuhtlicue', 'Tlazolteotl', 'Tepeyollotl', 'Tlaloc'];

  /** Azték napjegy a Caso-féle (584283) korrelációval — ugyanaz a számlálás, mint a maja Tzolkin. */
  function aztec(jdn) {
    var off = jdn - 584283;
    var n = ((off % 260) + 260) % 260;
    var number = ((n + 3) % 13) + 1;
    var idx = (n + 19) % 20;
    var lord = ((((off % 9) + 9) % 9) + 8) % 9;       // 584283 = G9 (a maja G-sorozat szerint)
    var trecenaStart = (idx - (number - 1) + 20) % 20; // a 13 napos szakasz első jegye
    return { number: number, signIndex: idx, sign: AZTEC_SIGNS[idx], lordIndex: lord,
      lord: NIGHT_LORDS[lord], trecenaIndex: trecenaStart, trecena: AZTEC_SIGNS[trecenaStart],
      label: number + ' ' + AZTEC_SIGNS[idx] };
  }

  /* ---------------- Chiron-ciklus ---------------- */

  /** Chiron kemény fényszögei a natális Chironra (kvadrát ~21/79, szembenállás ~25, visszatérés ~50). */
  function chironCycle(natalLon, birthUTC, maxYears) {
    var X = HCORE.extras;
    if (!X || !X.asteroids) return [];
    var out = [], prev = null, t0 = birthUTC.getTime();
    var step = 20 * 86400000;
    for (var d = step; d < (maxYears || 85) * 365.25 * 86400000; d += step) {
      var date = new Date(t0 + d);
      var list = X.asteroids(date), ch = null;
      for (var i = 0; i < list.length; i++) if (list[i].key === 'chiron') ch = list[i];
      if (!ch) return [];
      var rel = norm360(ch.lon - natalLon);
      if (prev != null) {
        [90, 180, 270, 360].forEach(function (asp) {
          var a = asp === 360 ? 0 : asp;
          // átlépés az adott szögön (direkt vagy retrográd irányban)
          var p = wrap180(prev - a), q = wrap180(rel - a);
          if (p * q < 0 && Math.abs(p) < 45 && Math.abs(q) < 45) {
            var last = out[out.length - 1];
            out.push({ aspect: asp, date: date, age: d / (365.25 * 86400000) });
          }
        });
      }
      prev = rel;
    }
    // ugyanazon fényszög több átlépése (retrográd hurok): első és utolsó dátum
    var grouped = {};
    out.forEach(function (h) {
      var k = h.aspect + ':' + Math.round(h.age / 8);     // 8 éven belül egy „esemény"
      if (!grouped[k]) grouped[k] = { aspect: h.aspect, first: h.date, last: h.date, age: h.age, n: 0 };
      grouped[k].last = h.date; grouped[k].n++;
    });
    return Object.keys(grouped).map(function (k) { return grouped[k]; })
      .sort(function (a, b) { return a.first - b.first; });
  }

  HCORE.locational = {
    planetLines: planetLines, cityHits: cityHits, solarArcHits: solarArcHits,
    midpoint: midpoint, midpointPictures: midpointPictures, aztec: aztec,
    aztecSigns: AZTEC_SIGNS, nightLords: NIGHT_LORDS, chironCycle: chironCycle
  };

})(typeof window !== 'undefined' ? window : globalThis);
