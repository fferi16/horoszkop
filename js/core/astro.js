/* Horoszkóp – csillagászati számítási réteg
   Astronomy Engine (MIT) fölé épülő vékony asztrológiai réteg.
   Sima script, nem ES modul: file:// protokollon is működik. */

(function (global) {
  'use strict';

  var A = global.Astronomy;
  var HCORE = global.HCORE = global.HCORE || {};

  var DEG = Math.PI / 180;
  var SIGN_KEYS = ['kos', 'bika', 'ikrek', 'rak', 'oroszlan', 'szuz',
    'merleg', 'skorpio', 'nyilas', 'bak', 'vizonto', 'halak'];
  var SIGN_NAMES = ['Kos', 'Bika', 'Ikrek', 'Rák', 'Oroszlán', 'Szűz',
    'Mérleg', 'Skorpió', 'Nyilas', 'Bak', 'Vízöntő', 'Halak'];
  var SIGN_SYMBOLS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
    .map(function (s) { return s + '︎'; });   // szöveges megjelenítés kikényszerítése

  /* ---------- alap segédfüggvények ---------- */

  function norm360(x) {
    x = x % 360;
    return x < 0 ? x + 360 : x;
  }

  function angleDiff(a, b) {          // legkisebb abszolút eltérés két szög közt
    var d = Math.abs(norm360(a) - norm360(b)) % 360;
    return d > 180 ? 360 - d : d;
  }

  /** Ekliptikai hosszúság -> jegy + fok bontás. */
  function toSign(lon) {
    var L = norm360(lon);
    var idx = Math.floor(L / 30);
    var deg = L - idx * 30;
    return {
      index: idx,
      key: SIGN_KEYS[idx],
      name: SIGN_NAMES[idx],
      symbol: SIGN_SYMBOLS[idx],
      degree: deg,
      degreeInt: Math.floor(deg),
      minute: Math.floor((deg - Math.floor(deg)) * 60),
      lon: L,
      text: Math.floor(deg) + '° ' + Math.floor((deg - Math.floor(deg)) * 60) + "' " + SIGN_NAMES[idx]
    };
  }

  HCORE.norm360 = norm360;
  HCORE.angleDiff = angleDiff;
  HCORE.toSign = toSign;
  HCORE.SIGN_KEYS = SIGN_KEYS;
  HCORE.SIGN_NAMES = SIGN_NAMES;
  HCORE.SIGN_SYMBOLS = SIGN_SYMBOLS;

  /* ---------- időzóna-kezelés az IANA adatbázissal ----------
     A böngésző (és a modern Node) beépítve hordozza a teljes tz-adatbázist,
     a történelmi nyári időszámításokkal együtt – ezt használjuk ki. */

  /** Egy adott UTC pillanatban mekkora a zóna eltolása percben. */
  function zoneOffsetMinutes(utcDate, tz) {
    try {
      var dtf = new Intl.DateTimeFormat('en-US', {
        timeZone: tz, hour12: false,
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
      var p = {};
      dtf.formatToParts(utcDate).forEach(function (x) { p[x.type] = x.value; });
      var h = parseInt(p.hour, 10);
      if (h === 24) h = 0;                       // egyes motorok 24-et adnak éjfélre
      var asUTC = Date.UTC(parseInt(p.year, 10), parseInt(p.month, 10) - 1,
        parseInt(p.day, 10), h, parseInt(p.minute, 10), parseInt(p.second, 10));
      return Math.round((asUTC - utcDate.getTime()) / 60000);
    } catch (e) {
      return 0;
    }
  }

  /** Helyi faliórai idő -> UTC Date. Kétlépcsős iteráció a DST-váltások miatt. */
  function localToUTC(y, mo, d, h, mi, tz) {
    var guess = Date.UTC(y, mo - 1, d, h, mi, 0);
    var off = zoneOffsetMinutes(new Date(guess), tz);
    var utc = guess - off * 60000;
    var off2 = zoneOffsetMinutes(new Date(utc), tz);
    if (off2 !== off) utc = guess - off2 * 60000;
    return new Date(utc);
  }

  HCORE.zoneOffsetMinutes = zoneOffsetMinutes;
  HCORE.localToUTC = localToUTC;

  /* ---------- bolygóállások ---------- */

  var BODIES = [
    { key: 'sun', body: 'Sun', name: 'Nap', symbol: '☉' },
    { key: 'moon', body: 'Moon', name: 'Hold', symbol: '☽' },
    { key: 'mercury', body: 'Mercury', name: 'Merkúr', symbol: '☿' },
    { key: 'venus', body: 'Venus', name: 'Vénusz', symbol: '♀' },
    { key: 'mars', body: 'Mars', name: 'Mars', symbol: '♂' },
    { key: 'jupiter', body: 'Jupiter', name: 'Jupiter', symbol: '♃' },
    { key: 'saturn', body: 'Saturn', name: 'Szaturnusz', symbol: '♄' },
    { key: 'uranus', body: 'Uranus', name: 'Uránusz', symbol: '♅' },
    { key: 'neptune', body: 'Neptune', name: 'Neptunusz', symbol: '♆' },
    { key: 'pluto', body: 'Pluto', name: 'Plútó', symbol: '♇' }
  ];
  HCORE.BODIES = BODIES;

  /** Geocentrikus ekliptikai hosszúság fokban. */
  function eclipticLongitude(bodyName, date) {
    if (bodyName === 'Sun') return A.SunPosition(date).elon;
    if (bodyName === 'Moon') return A.EclipticGeoMoon(date).lon;
    var vec = A.GeoVector(A.Body[bodyName], date, true);
    return A.Ecliptic(vec).elon;
  }

  /** Ekliptikai szélesség fokban (a rajzhoz és a Holdhoz). */
  function eclipticLatitude(bodyName, date) {
    if (bodyName === 'Sun') return 0;
    if (bodyName === 'Moon') return A.EclipticGeoMoon(date).lat;
    var vec = A.GeoVector(A.Body[bodyName], date, true);
    return A.Ecliptic(vec).elat;
  }

  /** Napi elmozdulás fokban – ebből derül ki a retrográd mozgás. */
  function dailyMotion(bodyName, date) {
    var dt = 0.5;                                   // fél nap oda-vissza
    var t1 = new Date(date.getTime() - dt * 43200000);
    var t2 = new Date(date.getTime() + dt * 43200000);
    var l1 = eclipticLongitude(bodyName, t1);
    var l2 = eclipticLongitude(bodyName, t2);
    var d = l2 - l1;
    if (d > 180) d -= 360;
    if (d < -180) d += 360;
    return d / dt;
  }

  /* ---------- aszcendens, MC, házak ---------- */

  /** Az ekliptika ferdesége fokban (Meeus, elégséges pontossággal). */
  function obliquity(date) {
    var jd = date.getTime() / 86400000 + 2440587.5;
    var T = (jd - 2451545.0) / 36525;
    return 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.036e-7 * T * T * T;
  }

  /** Helyi csillagidő fokban (kelet felé pozitív földrajzi hosszúsággal). */
  function localSiderealDeg(date, lonEast) {
    return norm360(A.SiderealTime(date) * 15 + lonEast);
  }

  /** Aszcendens ekliptikai hosszúsága. */
  function ascendant(ramc, lat, eps) {
    var r = ramc * DEG, p = lat * DEG, e = eps * DEG;
    var asc = Math.atan2(Math.cos(r),
      -(Math.sin(r) * Math.cos(e) + Math.tan(p) * Math.sin(e))) / DEG;
    return norm360(asc);
  }

  /** Medium Coeli (X. ház csúcsa). */
  function medium(ramc, eps) {
    var r = ramc * DEG, e = eps * DEG;
    return norm360(Math.atan2(Math.sin(r), Math.cos(r) * Math.cos(e)) / DEG);
  }

  /** RA -> ekliptikai hosszúság (az ekliptikán fekvő pontra). */
  function raToLambda(ra, eps) {
    var r = ra * DEG, e = eps * DEG;
    return norm360(Math.atan2(Math.sin(r), Math.cos(r) * Math.cos(e)) / DEG);
  }

  /** Placidus közbenső házcsúcs iteratív megoldással.
      which: 11, 12, 2 vagy 3.  Visszatér null-lal, ha nem konvergál
      (sarkkörön túl ez normális jelenség). */
  function placidusCusp(which, ramc, lat, eps) {
    var init = { 11: 30, 12: 60, 2: 120, 3: 150 }[which];
    var ra = norm360(ramc + init);
    var lambda = null;
    for (var i = 0; i < 60; i++) {
      lambda = raToLambda(ra, eps);
      var decl = Math.asin(Math.sin(lambda * DEG) * Math.sin(eps * DEG)) / DEG;
      var t = Math.tan(lat * DEG) * Math.tan(decl * DEG);
      if (Math.abs(t) > 1) return null;             // cirkumpoláris eset
      var ad = Math.asin(t) / DEG;                  // ascensionalis differencia
      var sd = 90 + ad, sn = 90 - ad;               // fél nappali / éjszakai ív
      var next;
      if (which === 11) next = ramc + sd / 3;
      else if (which === 12) next = ramc + 2 * sd / 3;
      else if (which === 2) next = ramc + 180 - 2 * sn / 3;
      else next = ramc + 180 - sn / 3;
      next = norm360(next);
      if (angleDiff(next, ra) < 1e-8) { ra = next; break; }
      ra = next;
    }
    return raToLambda(ra, eps);
  }

  /** Házcsúcsok kiszámítása. system: 'placidus' | 'equal' | 'whole' */
  function houses(date, lat, lonEast, system) {
    var eps = obliquity(date);
    var ramc = localSiderealDeg(date, lonEast);
    var asc = ascendant(ramc, lat, eps);
    var mc = medium(ramc, eps);
    var cusps = new Array(13);
    var usable = system;

    if (system === 'placidus') {
      var c11 = placidusCusp(11, ramc, lat, eps);
      var c12 = placidusCusp(12, ramc, lat, eps);
      var c2 = placidusCusp(2, ramc, lat, eps);
      var c3 = placidusCusp(3, ramc, lat, eps);
      if (c11 === null || c12 === null || c2 === null || c3 === null) {
        usable = 'equal';                            // sarkvidéki visszaesés
      } else {
        cusps[1] = asc; cusps[2] = c2; cusps[3] = c3;
        cusps[4] = norm360(mc + 180); cusps[5] = norm360(c11 + 180);
        cusps[6] = norm360(c12 + 180); cusps[7] = norm360(asc + 180);
        cusps[8] = norm360(c2 + 180); cusps[9] = norm360(c3 + 180);
        cusps[10] = mc; cusps[11] = c11; cusps[12] = c12;
      }
    }
    if (usable === 'equal') {
      for (var i = 1; i <= 12; i++) cusps[i] = norm360(asc + (i - 1) * 30);
    } else if (usable === 'whole') {
      var base = Math.floor(norm360(asc) / 30) * 30;
      for (var j = 1; j <= 12; j++) cusps[j] = norm360(base + (j - 1) * 30);
    }
    return {
      cusps: cusps, asc: asc, mc: mc,
      desc: norm360(asc + 180), ic: norm360(mc + 180),
      ramc: ramc, obliquity: eps, system: usable
    };
  }

  /** Egy ekliptikai pont melyik házba esik. */
  function houseOf(lon, cusps) {
    var L = norm360(lon);
    for (var i = 1; i <= 12; i++) {
      var a = cusps[i], b = cusps[i === 12 ? 1 : i + 1];
      var span = norm360(b - a);
      var rel = norm360(L - a);
      if (rel < span) return i;
    }
    return 1;
  }

  HCORE.obliquity = obliquity;
  HCORE.localSiderealDeg = localSiderealDeg;
  HCORE.houses = houses;
  HCORE.houseOf = houseOf;

  /* ---------- teljes képlet ---------- */

  /**
   * Natál képlet felállítása.
   * opts: { date (UTC Date), lat, lon (kelet+), system, withHouses (bool) }
   */
  function chart(opts) {
    var date = opts.date;
    var result = { date: date, planets: {}, list: [] };

    BODIES.forEach(function (b) {
      var lon = eclipticLongitude(b.body, date);
      var speed = dailyMotion(b.body, date);
      var p = {
        key: b.key, name: b.name, symbol: b.symbol,
        lon: norm360(lon), lat: eclipticLatitude(b.body, date),
        speed: speed, retrograde: speed < 0,
        sign: toSign(lon)
      };
      result.planets[b.key] = p;
      result.list.push(p);
    });

    // Északi holdcsomópont (átlagos) – klasszikus közelítő képlet
    var jd = date.getTime() / 86400000 + 2440587.5;
    var T = (jd - 2451545.0) / 36525;
    var node = norm360(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T);
    result.planets.northNode = {
      key: 'northNode', name: 'Északi holdcsomópont', symbol: '☊',
      lon: node, speed: -0.053, retrograde: true, sign: toSign(node)
    };
    result.planets.southNode = {
      key: 'southNode', name: 'Déli holdcsomópont', symbol: '☋',
      lon: norm360(node + 180), speed: -0.053, retrograde: true,
      sign: toSign(node + 180)
    };
    // Átlagos Lilith (holdapogeum)
    var lilith = norm360(83.3532465 + 4069.0137287 * T - 0.0103200 * T * T);
    result.planets.lilith = {
      key: 'lilith', name: 'Lilith (holdapogeum)', symbol: '⚸',
      lon: lilith, speed: 0.111, retrograde: false, sign: toSign(lilith)
    };

    if (opts.withHouses) {
      var h = houses(date, opts.lat, opts.lon, opts.system || 'placidus');
      result.houses = h;
      result.ascSign = toSign(h.asc);
      result.mcSign = toSign(h.mc);
      Object.keys(result.planets).forEach(function (k) {
        result.planets[k].house = houseOf(result.planets[k].lon, h.cusps);
      });
    }

    result.aspects = findAspects(result.planets);
    result.moonPhase = moonPhase(date);
    return result;
  }

  /* ---------- fényszögek ---------- */

  var ASPECTS = [
    { key: 'conjunction', name: 'Konjunkció', symbol: '☌', angle: 0, orb: 8 },
    { key: 'opposition', name: 'Oppozíció', symbol: '☍', angle: 180, orb: 8 },
    { key: 'trine', name: 'Trigon', symbol: '△', angle: 120, orb: 8 },
    { key: 'square', name: 'Kvadrát', symbol: '□', angle: 90, orb: 8 },
    { key: 'sextile', name: 'Szextil', symbol: '⚹', angle: 60, orb: 6 },
    { key: 'quincunx', name: 'Kvinkunx', symbol: '⚻', angle: 150, orb: 3 },
    { key: 'semisextile', name: 'Félszextil', symbol: '⚺', angle: 30, orb: 2 }
  ];
  HCORE.ASPECTS = ASPECTS;

  var ASPECT_ORDER = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter',
    'saturn', 'uranus', 'neptune', 'pluto'];

  function findAspects(planets) {
    var out = [];
    for (var i = 0; i < ASPECT_ORDER.length; i++) {
      for (var j = i + 1; j < ASPECT_ORDER.length; j++) {
        var a = planets[ASPECT_ORDER[i]], b = planets[ASPECT_ORDER[j]];
        if (!a || !b) continue;
        var sep = angleDiff(a.lon, b.lon);
        for (var k = 0; k < ASPECTS.length; k++) {
          var asp = ASPECTS[k];
          var delta = Math.abs(sep - asp.angle);
          // a lassú bolygók közti fényszögeknél szűkebb orbist használunk
          var orb = asp.orb;
          if (a.key !== 'sun' && a.key !== 'moon' && b.key !== 'sun' && b.key !== 'moon') {
            orb = Math.max(2, orb - 2);
          }
          if (delta <= orb) {
            out.push({
              a: a.key, b: b.key, aName: a.name, bName: b.name,
              type: asp.key, name: asp.name, symbol: asp.symbol,
              angle: asp.angle, orb: delta,
              exactness: Math.max(0, 1 - delta / orb)
            });
            break;
          }
        }
      }
    }
    out.sort(function (x, y) { return x.orb - y.orb; });
    return out;
  }
  HCORE.findAspects = findAspects;

  /* ---------- holdfázis ---------- */

  var PHASE_NAMES = [
    { key: 'ujhold', name: 'Újhold', symbol: '🌑' },
    { key: 'novekvo_sarlo', name: 'Növekvő sarló', symbol: '🌒' },
    { key: 'elso_negyed', name: 'Első negyed', symbol: '🌓' },
    { key: 'novekvo_dombor', name: 'Növekvő domború', symbol: '🌔' },
    { key: 'telihold', name: 'Telihold', symbol: '🌕' },
    { key: 'fogyo_dombor', name: 'Fogyó domború', symbol: '🌖' },
    { key: 'utolso_negyed', name: 'Utolsó negyed', symbol: '🌗' },
    { key: 'fogyo_sarlo', name: 'Fogyó sarló', symbol: '🌘' }
  ];

  function moonPhase(date) {
    var angle = A.MoonPhase(date);                  // 0 = újhold, 180 = telihold
    var idx = Math.floor(norm360(angle + 22.5) / 45) % 8;
    var illum = (1 - Math.cos(angle * DEG)) / 2;
    var moonLon = A.EclipticGeoMoon(date).lon;
    return {
      angle: angle,
      index: idx,
      key: PHASE_NAMES[idx].key,
      name: PHASE_NAMES[idx].name,
      symbol: PHASE_NAMES[idx].symbol,
      illumination: illum,
      waxing: angle < 180,
      age: angle / 360 * 29.530588,                 // holdkor napokban
      sign: toSign(moonLon)
    };
  }
  HCORE.moonPhase = moonPhase;
  HCORE.PHASE_NAMES = PHASE_NAMES;

  /** Következő/előző fő holdfázis időpontja. */
  function nextPhase(date, targetAngle) {
    try {
      var t = A.SearchMoonPhase(targetAngle, date, 40);
      return t ? t.date : null;
    } catch (e) { return null; }
  }
  HCORE.nextPhase = nextPhase;

  /* ---------- fok-elemzes ----------
     Egy ekliptikai pozicio "mit jelent a fok" bontasa: szabian szimbolum,
     egyiptomi hatar (term), dekanatus, kritikus fok. Az adatok a
     HDATA.degrees es HDATA.western modulokbol jonnek; ha valamelyik
     hianyzik, az adott resz egyszeruen kimarad. */

  function degreeInfo(lon) {
    var D = global.HDATA || {};
    var sign = toSign(lon);
    var deg = sign.degree;                      // 0..29.999 a jegyen belul
    var out = { sign: sign, degree: deg, degreeInt: Math.floor(deg) };

    // Szabian szimbolum: felfele kerekites (0°00'-0°59' -> 1. szimbolum)
    var sabIndex = Math.floor(deg) + 1;
    if (sabIndex > 30) sabIndex = 30;
    out.sabianNumber = sabIndex;
    var sabList = D.degrees && D.degrees.sabian && D.degrees.sabian[sign.key];
    if (sabList && sabList[sabIndex - 1]) out.sabian = sabList[sabIndex - 1];

    // Egyiptomi hatar (term)
    var terms = D.degrees && D.degrees.terms && D.degrees.terms[sign.key];
    if (terms) {
      for (var i = 0; i < terms.length; i++) {
        if (deg >= terms[i].from && deg < terms[i].to) { out.term = terms[i]; break; }
      }
    }

    // Dekanatus a meglevo western modulbol
    var decans = D.western && D.western.decans;
    if (decans) {
      for (var j = 0; j < decans.length; j++) {
        var dd = decans[j];
        if (dd.sign === sign.name && deg >= dd.from && deg < dd.to) { out.decan = dd; break; }
      }
    }

    // Kritikus fokok
    var crit = D.degrees && D.degrees.critical;
    if (crit) {
      var flags = [];
      var whole = Math.floor(deg);
      if (whole === 29) flags.push({ key: 'anaretic', text: crit.anaretic });
      if (whole === 0) flags.push({ key: 'zero', text: crit.zeroPoint });
      var qual = null, sd = signData(sign.key);
      if (sd && sd.quality) {
        var q = sd.quality.toLowerCase();
        if (q.indexOf('kardin') === 0) qual = 'kardinalis';
        else if (q.indexOf('szil') === 0) qual = 'szilard';
        else qual = 'valtozo';
      }
      var byQ = crit.byQuality && crit.byQuality[qual];
      if (byQ && byQ.degrees && byQ.degrees.indexOf(whole) >= 0) {
        flags.push({ key: 'quality', text: byQ.text });
      }
      if (flags.length) out.critical = flags;
    }
    return out;
  }
  HCORE.degreeInfo = degreeInfo;

  // a jegyadatok eleresehez (a profile.js is exportalja, de itt sajat kell)
  function signData(key) {
    var list = (global.HDATA && global.HDATA.western && global.HDATA.western.signs) || [];
    for (var i = 0; i < list.length; i++) if (list[i].key === key) return list[i];
    return null;
  }

  /* ---------- sziderikus (védikus) réteg ---------- */

  /** Lahiri-ayanamsa fokban (jó közelítés a 20–21. századra). */
  function ayanamsa(date) {
    var jd = date.getTime() / 86400000 + 2440587.5;
    var T = (jd - 2451545.0) / 36525;
    return 23.85 + 0.013972 * (T * 100);            // ~50,29"/év
  }
  HCORE.ayanamsa = ayanamsa;

  function toSidereal(lon, date) {
    return norm360(lon - ayanamsa(date));
  }
  HCORE.toSidereal = toSidereal;

  /* ---------- napkelte / napnyugta ---------- */

  /** A Nap horizont feletti magassága fokban egy adott pillanatban. */
  function sunAltitude(date, lat, lon) {
    try {
      var obs = new A.Observer(lat, lon, 0);
      var equ = A.Equator(A.Body.Sun, date, obs, true, true);
      return A.Horizon(date, obs, equ.ra, equ.dec, 'normal').altitude;
    } catch (e) { return null; }
  }
  HCORE.sunAltitude = sunAltitude;

  /**
   * Születési fényprofil – a kronobiológia valódi, születéshez kötött adatai:
   * a nappal hossza (fotoperiódus), a fény iránya (hosszabbodó/rövidülő nappalok)
   * és hogy világosban vagy sötétben született-e az illető.
   */
  function birthLightProfile(date, lat, lon) {
    var t = sunTimes(date, lat, lon);
    var dayLength = null;
    if (t.rise && t.set) {
      var diff = (t.set - t.rise) / 3600000;
      dayLength = diff > 0 ? diff : diff + 24;
    }
    // fotoperiódus iránya: 10 nappal későbbi nappalhossz összevetése
    var later = sunTimes(new Date(date.getTime() + 10 * 86400000), lat, lon);
    var trend = null, laterLen = null;
    if (later.rise && later.set && dayLength != null) {
      var d2 = (later.set - later.rise) / 3600000;
      laterLen = d2 > 0 ? d2 : d2 + 24;
      trend = laterLen > dayLength ? 'hosszabbodó' : 'rövidülő';
    }
    var alt = sunAltitude(date, lat, lon);
    return {
      sunrise: t.rise, sunset: t.set,
      dayLength: dayLength,
      nightLength: dayLength == null ? null : 24 - dayLength,
      trend: trend,
      trendDelta: (laterLen != null && dayLength != null) ? (laterLen - dayLength) * 60 : null,
      sunAltitude: alt,
      daylight: alt != null ? alt > -0.833 : null,
      twilight: alt != null && alt <= -0.833 && alt > -18
    };
  }
  HCORE.birthLightProfile = birthLightProfile;

  function sunTimes(date, lat, lon) {
    try {
      var observer = new A.Observer(lat, lon, 0);
      var start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(),
        date.getUTCDate(), 0, 0, 0));
      var rise = A.SearchRiseSet(A.Body.Sun, observer, +1, start, 1);
      var set = A.SearchRiseSet(A.Body.Sun, observer, -1, start, 1);
      return { rise: rise ? rise.date : null, set: set ? set.date : null };
    } catch (e) { return { rise: null, set: null }; }
  }
  HCORE.sunTimes = sunTimes;

  /* ---------- lassú bolygók tranzitjai ----------
     A következő évek pontos fényszögei a natál képlet érzékeny pontjaira.
     Mintavételes keresés: néhány naponta kiszámoljuk a bolygó hosszúságát,
     és az előjelváltásoknál lineáris interpolációval pontosítjuk a dátumot.
     A retrográd hurok miatti többszöri pontosulást egy eseménybe vonjuk össze. */

  var TRANSIT_BODIES = [
    { key: 'jupiter', body: 'Jupiter', name: 'Jupiter', symbol: '♃', step: 2 },
    { key: 'saturn', body: 'Saturn', name: 'Szaturnusz', symbol: '♄', step: 3 },
    { key: 'uranus', body: 'Uranus', name: 'Uránusz', symbol: '♅', step: 4 },
    { key: 'neptune', body: 'Neptune', name: 'Neptunusz', symbol: '♆', step: 4 },
    { key: 'pluto', body: 'Pluto', name: 'Plútó', symbol: '♇', step: 4 }
  ];

  var TRANSIT_ASPECTS = [
    { key: 'conjunction', angle: 0 },
    { key: 'square', angle: 90 },
    { key: 'trine', angle: 120 },
    { key: 'opposition', angle: 180 }
  ];

  function wrap180(x) {
    x = norm360(x);
    return x > 180 ? x - 360 : x;
  }

  /**
   * targets: [{ key, name, lon }] – natál pontok ekliptikai hosszúsággal.
   * start: Date, years: időtáv években.
   * Vissza: [{ planet, aspect, target, dates: [Date, ...] }] időrendben;
   * a dates a fényszög pontos beállásainak listája (retrográd hurokkal 3-5 is lehet).
   */
  function findTransits(targets, start, years) {
    var events = [];
    var days = Math.round(years * 365.25);

    TRANSIT_BODIES.forEach(function (tb) {
      var lons = [], times = [];
      for (var d = 0; d <= days; d += tb.step) {
        var t = new Date(start.getTime() + d * 86400000);
        times.push(t);
        lons.push(eclipticLongitude(tb.body, t));
      }

      targets.forEach(function (tg) {
        TRANSIT_ASPECTS.forEach(function (asp) {
          // kvadrátnál és trigonnál a jegykörön két helyen áll be a fényszög
          var offsets = (asp.angle === 0 || asp.angle === 180)
            ? [asp.angle] : [asp.angle, 360 - asp.angle];
          var hits = [];
          offsets.forEach(function (off) {
            var goal = norm360(tg.lon + off);
            for (var i = 1; i < lons.length; i++) {
              var d1 = wrap180(lons[i - 1] - goal);
              var d2 = wrap180(lons[i] - goal);
              if (d1 === 0) d1 = 1e-9;
              if (d1 * d2 < 0 && Math.abs(d1 - d2) < 90) {
                var f = d1 / (d1 - d2);
                hits.push({
                  date: new Date(times[i - 1].getTime() +
                    f * (times[i].getTime() - times[i - 1].getTime())),
                  lon: goal
                });
              }
            }
          });
          if (!hits.length) return;
          hits.sort(function (a, b) { return a.date - b.date; });
          // a 16 hónapon belüli pontosulások egy retrográd-hulláma: egy esemény
          function pushEvent(group) {
            events.push({
              planet: tb, aspect: asp, target: tg, lon: group[0].lon,
              dates: group.map(function (h) { return h.date; })
            });
          }
          var group = [hits[0]];
          for (var k = 1; k < hits.length; k++) {
            if (hits[k].date - group[group.length - 1].date < 480 * 86400000) {
              group.push(hits[k]);
            } else {
              pushEvent(group);
              group = [hits[k]];
            }
          }
          pushEvent(group);
        });
      });
    });

    events.sort(function (a, b) { return a.dates[0] - b.dates[0]; });
    return events;
  }
  HCORE.findTransits = findTransits;
  HCORE.TRANSIT_BODIES = TRANSIT_BODIES;

  HCORE.chart = chart;
  HCORE.eclipticLongitude = eclipticLongitude;
  HCORE.dailyMotion = dailyMotion;

})(typeof window !== 'undefined' ? window : globalThis);
