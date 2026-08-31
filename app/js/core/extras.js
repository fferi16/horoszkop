/* Asztroláb – kiegészítő számítások: draconikus képlet, Vertex, aszteroidák
   Forrás: docs/25-draconikus-vertex-aszteroidak.md
   Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};
  var A = global.Astronomy;

  var DEG = Math.PI / 180;
  function norm360(x) { return ((x % 360) + 360) % 360; }

  /* ================= draconikus képlet ================= */

  /**
   * Minden hosszúságot elforgat úgy, hogy az Északi holdcsomó 0° Kosra kerüljön.
   * A HÁZAK ÉS A TENGELYEK IS elfordulnak ugyanennyivel — nem újraszámoljuk őket.
   * Ezért a draconikus Asc/MC szimbolikus elforgatás, nem valódi horizont.
   */
  function draconic(chart) {
    if (!chart || !chart.planets.northNode) return null;
    var off = chart.planets.northNode.lon;
    var out = { offset: off, planets: {}, list: [] };

    chart.list.concat([chart.planets.northNode, chart.planets.southNode])
      .forEach(function (p) {
        var lon = norm360(p.lon - off);
        var d = {
          key: p.key, name: p.name, symbol: p.symbol,
          lon: lon, sign: HCORE.toSign(lon), retrograde: p.retrograde
        };
        out.planets[p.key] = d;
        out.list.push(d);
      });

    if (chart.houses) {
      out.asc = norm360(chart.houses.asc - off);
      out.mc = norm360(chart.houses.mc - off);
      out.ascSign = HCORE.toSign(out.asc);
      out.mcSign = HCORE.toSign(out.mc);
    }
    return out;
  }

  /* ================= Vertex ================= */

  /**
   * Vertex: az elsőrendű vertikális és az ekliptika metszéspontja nyugaton.
   * A képlet a Swiss Ephemeris swehouse.c-jével egyezik: Asc(RAMC + 180, ko-szélesség).
   *
   * FIGYELEM: a degenerált tartomány a TRÓPUSOK (|φ| < ε ≈ 23,44°), NEM a sarkvidék.
   * Ott a képlet gyakran az Anti-Vertexet adja vissza — a swisseph is. A 0° szélességen
   * valódi 180°-os ugrás van, ezért az előjelágat pontosan követni kell.
   */
  function vertex(ramc, latDeg, epsDeg) {
    if (Math.abs(latDeg) < 1e-10) return latDeg >= 0 ? 180 : 0;   // egyenlítő: degenerált
    var f = latDeg >= 0 ? (90 - latDeg) : (-90 - latDeg);
    if (Math.abs(90 - f) < 1e-10) return 180;
    if (Math.abs(90 + f) < 1e-10) return 0;
    var R = ramc * DEG, E = epsDeg * DEG, F = f * DEG;
    var v = Math.atan2(-Math.cos(R),
      Math.sin(R) * Math.cos(E) - Math.tan(F) * Math.sin(E)) / DEG;
    return norm360(v);
  }

  /** A trópusokon a Vertex geometriailag megbízhatatlan. */
  function vertexReliable(latDeg, epsDeg) {
    return Math.abs(latDeg) >= (epsDeg || 23.44);
  }

  /* ================= aszteroidák ================= */

  function AD() { return (global.HDATA || {}).asteroids || null; }

  /** Kepler-egyenlet megoldása (excentrikus anomália), Newton-módszerrel. */
  function solveKepler(M, e) {
    var Mr = norm360(M) * DEG;
    var E = Mr + e * Math.sin(Mr);
    for (var i = 0; i < 40; i++) {
      var d = (E - e * Math.sin(E) - Mr) / (1 - e * Math.cos(E));
      E -= d;
      if (Math.abs(d) < 1e-13) break;
    }
    return E;
  }

  /** A megadott epochához legközelebbi elemsor. */
  function nearestRow(rows, t) {
    var best = rows[0], bd = Math.abs(rows[0][0] - t);
    for (var i = 1; i < rows.length; i++) {
      var d = Math.abs(rows[i][0] - t);
      if (d < bd) { bd = d; best = rows[i]; }
    }
    return best;
  }

  /**
   * Heliocentrikus J2000 EKLIPTIKAI helyvektor (AU) a pályaelemekből.
   * @param row [t, a, e, i, Ω, ω, M]
   * @param jd  a kívánt időpont juliánus napja
   */
  function helioEcl(row, jd, base, k) {
    var t0 = row[0], a = row[1], e = row[2];
    var iR = row[3] * DEG, omR = row[4] * DEG, wR = row[5] * DEG;
    var n = (k / Math.pow(a, 1.5)) / DEG;               // fok/nap
    var dt = jd - (base + t0);
    var M = row[6] + n * dt;

    var E = solveKepler(M, e);
    var xv = a * (Math.cos(E) - e);
    var yv = a * Math.sqrt(1 - e * e) * Math.sin(E);
    var v = Math.atan2(yv, xv);
    var r = Math.sqrt(xv * xv + yv * yv);

    var u = v + wR;                                     // argumentum a felszálló csomótól
    var cu = Math.cos(u), su = Math.sin(u);
    var co = Math.cos(omR), so = Math.sin(omR);
    var ci = Math.cos(iR), si = Math.sin(iR);
    return {
      x: r * (co * cu - so * su * ci),
      y: r * (so * cu + co * su * ci),
      z: r * (su * si)
    };
  }

  var OBL_J2000 = 23.4392911 * DEG;

  /** J2000 ekliptikai vektor → J2000 egyenlítői (EQJ), hogy az Astronomy Engine-nel egyezzen. */
  function eclToEqj(v) {
    return {
      x: v.x,
      y: v.y * Math.cos(OBL_J2000) - v.z * Math.sin(OBL_J2000),
      z: v.y * Math.sin(OBL_J2000) + v.z * Math.cos(OBL_J2000)
    };
  }

  var C_AUD = 173.1446326742;      // fénysebesség AU/nap

  /**
   * A négy fő aszteroida látszó geocentrikus ekliptikai hosszúsága (dátum ekliptikájában,
   * ugyanabban a rendszerben, mint a többi égitest a programban).
   */
  function asteroids(date) {
    var D = AD();
    if (!D || !A) return null;
    var jd = date.getTime() / 86400000 + 2440587.5;
    var earth = A.HelioVector(A.Body.Earth, date);      // EQJ

    return D.bodies.map(function (b) {
      var rows = D.elements[b.table];
      if (!rows || !rows.length) return null;
      var row = nearestRow(rows, jd - D.epochBase);

      // fényidő-korrekció: a látott helyzet a korábbi kibocsátáskori
      var t = jd, vec = null;
      for (var i = 0; i < 3; i++) {
        vec = eclToEqj(helioEcl(row, t, D.epochBase, D.gaussK));
        var dx = vec.x - earth.x, dy = vec.y - earth.y, dz = vec.z - earth.z;
        var rho = Math.sqrt(dx * dx + dy * dy + dz * dz);
        t = jd - rho / C_AUD;
      }
      var g = new A.Vector(vec.x - earth.x, vec.y - earth.y, vec.z - earth.z,
        A.MakeTime(date));
      var lon = norm360(A.Ecliptic(g).elon);
      return {
        key: b.key, name: b.name, symbol: b.symbol, keyword: b.keyword,
        text: b.text, lon: lon, sign: HCORE.toSign(lon)
      };
    }).filter(Boolean);
  }

  HCORE.extras = {
    draconic: draconic,
    vertex: vertex,
    vertexReliable: vertexReliable,
    asteroids: asteroids
  };

})(typeof window !== 'undefined' ? window : globalThis);
