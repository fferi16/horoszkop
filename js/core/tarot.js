/* Asztroláb – tarot motor
   Véletlen húzás (crypto-alapú), kirakás-kiértékelés és összkép-szintézis.
   Az adatok a HDATA.tarot modulból jönnek. Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};

  function TD() { return (global.HDATA && global.HDATA.tarot) || null; }

  /** A pakli kártyaazonosítói rögzített sorrendben. */
  function deckIds() {
    var t = TD();
    return t ? Object.keys(t.cards) : [];
  }

  /** Kriptográfiai véletlen egész [0, n). */
  function rnd(n) {
    if (global.crypto && global.crypto.getRandomValues) {
      var buf = new Uint32Array(1);
      global.crypto.getRandomValues(buf);
      return buf[0] % n;
    }
    return Math.floor(Math.random() * n);
  }

  /** n lap húzása visszatevés nélkül; kb. minden harmadik lap fordított. */
  function draw(n) {
    var pool = deckIds().slice();
    var picks = [];
    for (var i = 0; i < n && pool.length; i++) {
      var idx = rnd(pool.length);
      picks.push({ id: pool[idx], reversed: rnd(3) === 0 });
      pool.splice(idx, 1);
    }
    return picks;
  }

  /** Egy lap metaadatai: szín, rang, udvari-e, ász-e. */
  function cardMeta(id) {
    var t = TD();
    var c = t.cards[id];
    var m = { id: id, card: c, major: !!c.major };
    if (!c.major) {
      m.suitKey = id.charAt(0);
      m.suit = t.suits[m.suitKey];
      m.rank = parseInt(id.slice(1), 10);
      m.court = m.rank >= 11;
      m.ace = m.rank === 1;
    }
    return m;
  }

  /**
   * Kirakás kiértékelése.
   * spreadKey: a HDATA.tarot.spreads egyik kulcsa
   * picks: [{ id, reversed }]
   * Vissza: { spread, rows: [...], synthesis: [szövegek] }
   */
  function evaluate(spreadKey, picks) {
    var t = TD();
    if (!t) return null;
    var spread = null;
    t.spreads.forEach(function (sp) { if (sp.key === spreadKey) spread = sp; });
    if (!spread) return null;

    var rows = picks.map(function (p, i) {
      var meta = cardMeta(p.id);
      var pos = spread.positions[i] || { name: (i + 1) + '. lap', text: '' };
      return {
        position: pos.name,
        positionText: pos.text,
        id: p.id,
        name: meta.card.name,
        reversed: !!p.reversed,
        img: 'assets/tarot/' + p.id + '.jpg',
        meaning: p.reversed ? meta.card.rev : meta.card.up,
        major: meta.major,
        suitName: meta.suit ? meta.suit.name : null
      };
    });

    /* --- összkép-szintézis --- */
    var SY = t.synthesis;
    var syn = [];
    var T = picks.length;
    var metas = picks.map(function (p) { return cardMeta(p.id); });
    var majors = metas.filter(function (m) { return m.major; }).length;
    var reversed = picks.filter(function (p) { return p.reversed; }).length;
    var courts = metas.filter(function (m) { return m.court; }).length;
    var aces = metas.filter(function (m) { return m.ace; }).length;

    if (T >= 3) {
      if (majors >= Math.ceil(T / 2)) {
        syn.push(SY.majorsHigh.replace('%N%', String(majors)).replace('%T%', String(T)));
      } else if (majors === 0) {
        syn.push(SY.majorsLow);
      }
    }

    // színek eloszlása
    var suitCount = { w: 0, c: 0, s: 0, p: 0 };
    metas.forEach(function (m) { if (m.suitKey) suitCount[m.suitKey]++; });
    var minors = T - majors;
    Object.keys(suitCount).forEach(function (k) {
      if (minors >= 3 && suitCount[k] >= Math.ceil(T / 2)) {
        syn.push(SY.suitDominant
          .replace('%SUIT%', t.suits[k].name)
          .replace('%EL%', t.suits[k].element)
          .replace('%DOM%', t.suits[k].domain));
      }
    });
    // hiányzó szín: csak ha pontosan EGY szín hiányzik — az az igazi vakfolt
    if (T >= 7 && minors >= 5) {
      var missing = Object.keys(suitCount).filter(function (k) {
        return suitCount[k] === 0;
      });
      if (missing.length === 1) {
        syn.push(SY.suitMissing
          .replace('%SUIT%', t.suits[missing[0]].name)
          .replace('%DOM%', t.suits[missing[0]].domain));
      }
    }

    if (T >= 3) {
      if (reversed >= Math.ceil(T / 2)) syn.push(SY.reversedMany);
      else if (reversed === 0) syn.push(SY.reversedNone);
    }
    if (T >= 4 && courts >= Math.ceil(T / 2)) syn.push(SY.courtsMany);
    if (aces >= 2) syn.push(SY.acesMany);

    // azonos értékű lapok
    if (T >= 3) {
      var rankCount = {};
      metas.forEach(function (m) {
        if (!m.major) rankCount[m.rank] = (rankCount[m.rank] || 0) + 1;
      });
      var bestRank = null;
      Object.keys(rankCount).forEach(function (r) {
        if (rankCount[r] >= 2 && (!bestRank || rankCount[r] > rankCount[bestRank])) {
          bestRank = r;
        }
      });
      if (bestRank) {
        var rn = +bestRank;
        var rName = rn === 1 ? 'Ász' : (t.ranks[rn] || (rn + '-es'));
        syn.push(SY.sameRank
          .replace('%N%', String(rankCount[bestRank]))
          .replace('%R%', rName));
      }
    }

    return { spread: spread, rows: rows, synthesis: syn };
  }

  HCORE.tarot = {
    deckIds: deckIds,
    draw: draw,
    cardMeta: cardMeta,
    evaluate: evaluate
  };

})(typeof window !== 'undefined' ? window : globalThis);
