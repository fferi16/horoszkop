/* Asztroláb – Human Design motor
   A képlet két pillanatból épül:
     • személyiség (tudatos): a születés pillanata,
     • design (tudattalan): az az időpont, amikor a Nap pontosan 88 fokkal
       korábban járt — ez kb. 88–89 nappal a születés előtt van.
   Minden égitest hosszúságát a 64 kapus kerékre vetítjük (a 41-es kapu a
   Vízöntő 2°-án kezdődik, egy kapu 5,625°, azon belül 6 vonal).
   Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};

  var GATE_SPAN = 360 / 64;          // 5,625°
  var LINE_SPAN = GATE_SPAN / 6;     // 0,9375°

  function D() { return (global.HDATA || {}).humandesign || {}; }

  function norm360(x) { return ((x % 360) + 360) % 360; }

  /** Előjeles szögkülönbség (-180, 180]. */
  function signedDiff(a, b) {
    var d = norm360(a - b);
    return d > 180 ? d - 360 : d;
  }

  /* ---------------- kapu és vonal a hosszúságból ---------------- */

  /** Ekliptikai hosszúság → { gate, line, gateStart, pct } */
  function gateOf(lon) {
    var order = D().wheelOrder || [];
    var start = D().wheelStart != null ? D().wheelStart : 302;
    var off = norm360(lon - start);
    var idx = Math.floor(off / GATE_SPAN);
    if (idx > 63) idx = 63;
    var within = off - idx * GATE_SPAN;
    var line = Math.floor(within / LINE_SPAN) + 1;
    if (line > 6) line = 6;
    return {
      gate: order[idx], line: line,
      gateStart: norm360(start + idx * GATE_SPAN),
      pct: within / GATE_SPAN
    };
  }

  /* ---------------- a design időpont megkeresése ---------------- */

  /**
   * Az az UTC időpont, amikor a Nap ekliptikai hosszúsága pontosan 88 fokkal
   * kisebb volt, mint születéskor. Newton-iterációval, a Nap átlagos napi
   * mozgásából (0,9856°/nap) indulva.
   */
  function designDate(birthUTC) {
    var sunAt = function (d) { return HCORE.eclipticLongitude('Sun', d); };
    var target = norm360(sunAt(birthUTC) - 88);
    var t = new Date(birthUTC.getTime() - 88.3 * 86400000);
    for (var i = 0; i < 8; i++) {
      var diff = signedDiff(sunAt(t), target);     // hány fokkal jár tovább
      if (Math.abs(diff) < 1e-7) break;
      var speed = (sunAt(new Date(t.getTime() + 43200000)) -
                   sunAt(new Date(t.getTime() - 43200000)));
      speed = signedDiff(speed + 360, 0);          // napi mozgás, wrap-biztosan
      if (!speed) speed = 0.9856;
      t = new Date(t.getTime() - (diff / speed) * 86400000);
    }
    return t;
  }

  /* ---------------- aktivációk egy időpontra ---------------- */

  var ACTIVATION_BODIES = [
    { key: 'sun', body: 'Sun', name: 'Nap', symbol: '☉' },
    { key: 'earth', body: null, name: 'Föld', symbol: '⊕' },   // Nap + 180°
    { key: 'northNode', body: null, name: 'Északi holdcsomó', symbol: '☊' },
    { key: 'southNode', body: null, name: 'Déli holdcsomó', symbol: '☋' },
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

  /** Átlagos északi holdcsomó egy dátumra (ugyanaz a képlet, mint a chartban). */
  function northNodeLon(date) {
    var jd = date.getTime() / 86400000 + 2440587.5;
    var T = (jd - 2451545.0) / 36525;
    return norm360(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T);
  }

  /** Egy időpont összes aktivációja: [{key, name, symbol, lon, gate, line}] */
  function activations(date) {
    var sun = HCORE.eclipticLongitude('Sun', date);
    var node = northNodeLon(date);
    return ACTIVATION_BODIES.map(function (b) {
      var lon;
      if (b.key === 'earth') lon = norm360(sun + 180);
      else if (b.key === 'northNode') lon = node;
      else if (b.key === 'southNode') lon = norm360(node + 180);
      else lon = norm360(HCORE.eclipticLongitude(b.body, date));
      var g = gateOf(lon);
      return {
        key: b.key, name: b.name, symbol: b.symbol,
        lon: lon, gate: g.gate, line: g.line
      };
    });
  }

  /* ---------------- központok, csatornák, típus ---------------- */

  /** Melyik csatornák definiáltak a megnyitott kapuk alapján. */
  function definedChannels(gateSet) {
    return (D().channels || []).filter(function (ch) {
      return gateSet[ch.g[0]] && gateSet[ch.g[1]];
    });
  }

  /** A definiált csatornák által bekapcsolt központok halmaza. */
  function definedCenters(channels) {
    var gates = D().gates || {}, out = {};
    channels.forEach(function (ch) {
      out[gates[ch.g[0]].center] = true;
      out[gates[ch.g[1]].center] = true;
    });
    return out;
  }

  /**
   * Összefüggő komponensek a definiált központok gráfjában (a definíció típusa).
   * A csatornák az élek, a központok a csúcsok.
   */
  function components(channels) {
    var gates = D().gates || {};
    var adj = {}, seen = {}, comps = [];
    channels.forEach(function (ch) {
      var a = gates[ch.g[0]].center, b = gates[ch.g[1]].center;
      (adj[a] = adj[a] || []).push(b);
      (adj[b] = adj[b] || []).push(a);
    });
    Object.keys(adj).forEach(function (c) {
      if (seen[c]) return;
      var stack = [c], group = [];
      seen[c] = true;
      while (stack.length) {
        var cur = stack.pop();
        group.push(cur);
        (adj[cur] || []).forEach(function (n) {
          if (!seen[n]) { seen[n] = true; stack.push(n); }
        });
      }
      comps.push(group);
    });
    return comps;
  }

  /** Van-e definiált út valamelyik motortól a torokig? */
  function motorToThroat(channels) {
    var centers = D().centers || {};
    var comps = components(channels);
    for (var i = 0; i < comps.length; i++) {
      var g = comps[i];
      if (g.indexOf('throat') < 0) continue;
      for (var j = 0; j < g.length; j++) {
        if (centers[g[j]] && centers[g[j]].motor) return true;
      }
    }
    return false;
  }

  /** Típus a definiált központokból. */
  function typeOf(centers, channels) {
    var anyDefined = Object.keys(centers).length > 0;
    if (!anyDefined) return 'reflector';
    if (centers.sacral) return motorToThroat(channels) ? 'magenerator' : 'generator';
    if (motorToThroat(channels)) return 'manifestor';
    return 'projector';
  }

  /** Belső tekintély a szokásos hierarchia szerint. */
  function authorityOf(centers, type) {
    if (type === 'reflector') return 'lunar';
    if (centers.solar) return 'emotional';
    if (centers.sacral) return 'sacral';
    if (centers.spleen) return 'splenic';
    if (centers.heart) return 'ego';
    if (centers.g) return 'self';
    return 'mental';
  }

  /** Az inkarnációs kereszt szöge a profilból. */
  function crossTypeOf(profile) {
    if (profile === '4/1') return 'jux';
    if (['5/1', '5/2', '6/2', '6/3'].indexOf(profile) >= 0) return 'left';
    return 'right';
  }

  /* ---------------- teljes képlet ---------------- */

  /**
   * @param {Date} birthUTC a születés UTC időpontja
   * @returns teljes Human Design képlet
   */
  function build(birthUTC) {
    var dDate = designDate(birthUTC);
    var pers = activations(birthUTC);
    var des = activations(dDate);

    var gateSet = {}, gateSource = {};
    function mark(list, which) {
      list.forEach(function (a) {
        gateSet[a.gate] = true;
        var s = gateSource[a.gate] = gateSource[a.gate] || { pers: false, des: false };
        s[which] = true;
      });
    }
    mark(pers, 'pers');
    mark(des, 'des');

    var chans = definedChannels(gateSet);
    var centers = definedCenters(chans);
    var type = typeOf(centers, chans);
    var authority = authorityOf(centers, type);

    var pSun = pers[0], dSun = des[0], pEarth = pers[1], dEarth = des[1];
    var profile = pSun.line + '/' + dSun.line;

    var comps = components(chans);

    return {
      designDate: dDate,
      personality: pers,
      design: des,
      gates: gateSet,
      gateSource: gateSource,
      channels: chans,
      centers: centers,
      openCenters: Object.keys(D().centers || {}).filter(function (c) { return !centers[c]; }),
      type: type,
      authority: authority,
      profile: profile,
      crossType: crossTypeOf(profile),
      cross: { pSun: pSun.gate, pEarth: pEarth.gate, dSun: dSun.gate, dEarth: dEarth.gate },
      definition: comps.length
    };
  }

  HCORE.humanDesign = {
    build: build,
    gateOf: gateOf,
    designDate: designDate,
    activations: activations,
    GATE_SPAN: GATE_SPAN
  };

})(typeof window !== 'undefined' ? window : globalThis);
