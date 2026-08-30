/* Asztroláb – kártyavető motor (tarot, Lenormand, cigánykártya)
   Véletlen húzás (crypto-alapú), kirakás-kiértékelés és összkép-szintézis.
   Az adatok a HDATA.tarot / HDATA.lenormand / HDATA.gypsy modulokból jönnek.
   Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};

  function deckOf(deckKey) {
    var H = global.HDATA || {};
    if (deckKey === 'lenormand') return H.lenormand || null;
    if (deckKey === 'gypsy') return H.gypsy || null;
    return H.tarot || null;
  }

  function deckIds(deckKey) {
    var d = deckOf(deckKey);
    return d ? Object.keys(d.cards) : [];
  }

  function hasReversals(deckKey) {
    var d = deckOf(deckKey);
    return d ? d.reversals !== false : true;
  }

  /** A pakli képmappája, vagy null, ha szimbólum-lapokkal jelenik meg. */
  function imgBase(deckKey) {
    var d = deckOf(deckKey);
    if (!d) return null;
    if (d.imgPath) return d.imgPath;
    return d.glyphCards ? null : 'assets/tarot/';
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

  /** n lap húzása visszatevés nélkül; tarot-nál kb. minden harmadik fordított. */
  function draw(deckKey, n) {
    var pool = deckIds(deckKey).slice();
    var rev = hasReversals(deckKey);
    var picks = [];
    for (var i = 0; i < n && pool.length; i++) {
      var idx = rnd(pool.length);
      picks.push({ id: pool[idx], reversed: rev && rnd(3) === 0 });
      pool.splice(idx, 1);
    }
    return picks;
  }

  /** Egy lap metaadatai. */
  function cardMeta(deckKey, id) {
    var d = deckOf(deckKey);
    var c = d.cards[id];
    var m = { id: id, card: c, major: !!c.major, polarity: c.polarity || null,
      tag: c.tag || null };
    if (deckKey === 'tarot' && !c.major) {
      m.suitKey = id.charAt(0);
      m.suit = d.suits[m.suitKey];
      m.rank = parseInt(id.slice(1), 10);
      m.court = m.rank >= 11;
      m.ace = m.rank === 1;
    }
    return m;
  }

  /* ---------------- szintézis: tarot ---------------- */

  function tarotSynthesis(t, picks, metas) {
    var SY = t.synthesis, syn = [];
    var T = picks.length;
    var majors = metas.filter(function (m) { return m.major; }).length;
    var reversed = picks.filter(function (p) { return p.reversed; }).length;
    var courts = metas.filter(function (m) { return m.court; }).length;
    var aces = metas.filter(function (m) { return m.ace; }).length;

    if (T >= 3) {
      if (majors >= Math.ceil(T / 2)) {
        syn.push(SY.majorsHigh.replace('%N%', String(majors)).replace('%T%', String(T)));
      } else if (majors === 0) syn.push(SY.majorsLow);
    }

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
    return syn;
  }

  /* ---------------- szintézis: Lenormand / cigánykártya ---------------- */

  function glyphSynthesis(deckKey, d, spread, rows, metas) {
    var SY = d.synthesis, syn = [];
    var T = rows.length;

    // kereső-vetés: egy adott lapot keresünk a terítésben
    if (spread.seeker && SY.seeker) {
      var hit = -1;
      rows.forEach(function (r, i) {
        if (hit < 0 && spread.seeker.targets.indexOf(r.id) >= 0) hit = i;
      });
      var targetNames = spread.seeker.targets.map(function (id) {
        return d.cards[id].name;
      }).join(' / ');
      if (hit >= 0) {
        var half = hit < T / 2;
        syn.push(SY.seeker.found
          .replace('%C%', rows[hit].name)
          .replace('%P%', String(hit + 1))
          .replace('%H%', half ? SY.seeker.firstHalf : SY.seeker.secondHalf)
          .replace('%HTXT%', half ? SY.seeker.firstHalfTime : SY.seeker.secondHalfTime));
        if (hit > 0) {
          syn.push(SY.seeker.before.replace('%LIST%',
            rows.slice(Math.max(0, hit - 3), hit).map(function (r) {
              return r.name;
            }).join(' → ')));
        }
        if (hit < T - 1) {
          syn.push(SY.seeker.after.replace('%LIST%',
            rows.slice(hit + 1, hit + 3).map(function (r) {
              return r.name;
            }).join(', ')));
        }
        if (spread.key === 'rontasvizsgalat' && hit >= 2) {
          syn.push(SY.seeker.enemyWho
            .replace('%W%', rows[hit - 1].name)
            .replace('%W2%', rows[hit - 2].name));
        }
      } else {
        syn.push(SY.seeker.notFound.replace('%C%', targetNames));
        if (spread.key === 'rontasvizsgalat') syn.push(SY.seeker.clean);
      }
    }

    // mondat-logika a hármas sornál (Lenormand)
    if (SY.lineCombo && T === 3 && spread.key === 'harmas') {
      syn.push(SY.lineCombo
        .replace('%C%', rows[1].name)
        .replace('%L%', rows[0].name)
        .replace('%R%', rows[2].name));
    }

    // hangulatmérleg a polaritásokból
    if (T >= 3) {
      var pos = metas.filter(function (m) { return m.polarity === '+'; }).length;
      var neg = metas.filter(function (m) { return m.polarity === '-'; }).length;
      if (pos >= Math.ceil(T / 2) && pos > neg) {
        syn.push(SY.toneGood.replace('%N%', String(pos)).replace('%T%', String(T)));
      } else if (neg >= Math.ceil(T / 2) && neg > pos) {
        syn.push(SY.toneHard.replace('%N%', String(neg)).replace('%T%', String(T)));
      } else {
        syn.push(SY.toneMixed);
      }
    }

    // személylapok
    var personIds = deckKey === 'lenormand' ? ['l28', 'l29'] : ['g25', 'g26'];
    metas.forEach(function (m) {
      if (personIds.indexOf(m.id) >= 0 && SY.person) {
        syn.push(SY.person.replace('%P%', m.card.name));
      }
    });

    if (deckKey === 'lenormand') {
      var ids = metas.map(function (m) { return m.id; });
      if (ids.indexOf('l33') >= 0 && SY.keyCard) syn.push(SY.keyCard);
      if (ids.indexOf('l31') >= 0 && SY.sunCard) syn.push(SY.sunCard);
      var heavy = ['l08', 'l10', 'l21', 'l23', 'l36'].filter(function (h) {
        return ids.indexOf(h) >= 0;
      });
      if (heavy.length >= 3 && SY.heavyCluster) {
        syn.push(SY.heavyCluster.replace('%LIST%', heavy.map(function (h) {
          return d.cards[h].name;
        }).join(', ')));
      }
    }

    // témadominancia (cigánykártya)
    if (SY.themes && T >= 3) {
      var tagCount = {};
      metas.forEach(function (m) {
        if (m.tag) tagCount[m.tag] = (tagCount[m.tag] || 0) + 1;
      });
      var best = null;
      Object.keys(tagCount).forEach(function (k) {
        if (!best || tagCount[k] > tagCount[best]) best = k;
      });
      if (best && tagCount[best] >= Math.max(2, Math.ceil(T / 3)) && SY.themes[best]) {
        syn.push(SY.themeDominant
          .replace('%THEME%', SY.themes[best])
          .replace('%N%', String(tagCount[best])));
      }
    }
    return syn;
  }

  /**
   * Kirakás kiértékelése.
   * deckKey: 'tarot' | 'lenormand' | 'gypsy'
   * spreadKey: a pakli spreads-listájának kulcsa
   * picks: [{ id, reversed }]
   */
  function evaluate(deckKey, spreadKey, picks) {
    var d = deckOf(deckKey);
    if (!d) return null;
    var spread = null;
    d.spreads.forEach(function (sp) { if (sp.key === spreadKey) spread = sp; });
    if (!spread) return null;

    var seekerHit = -1;
    if (spread.seeker) {
      picks.forEach(function (p, i) {
        if (seekerHit < 0 && spread.seeker.targets.indexOf(p.id) >= 0) seekerHit = i;
      });
    }

    var rows = picks.map(function (p, i) {
      var meta = cardMeta(deckKey, p.id);
      var pos = spread.positions[i] ||
        (spread.seeker
          ? { name: (i + 1) + '. lap' + (i === seekerHit ? ' — A KERESETT LAP' : ''),
              text: i === seekerHit ? 'Itt bukkant fel a keresett lap.' : '' }
          : { name: (i + 1) + '. lap', text: '' });
      return {
        position: pos.name,
        positionText: pos.text,
        id: p.id,
        name: meta.card.name,
        reversed: !!p.reversed,
        img: imgBase(deckKey) ? imgBase(deckKey) + p.id + '.jpg' : null,
        glyph: meta.card.glyph || null,
        meaning: (p.reversed && meta.card.rev) ? meta.card.rev : meta.card.up,
        major: meta.major,
        polarity: meta.polarity
      };
    });

    var metas = picks.map(function (p) { return cardMeta(deckKey, p.id); });
    var syn = deckKey === 'tarot'
      ? tarotSynthesis(d, picks, metas)
      : glyphSynthesis(deckKey, d, spread, rows, metas);

    return { deckKey: deckKey, spread: spread, rows: rows, synthesis: syn };
  }

  HCORE.tarot = {
    deckOf: deckOf,
    deckIds: deckIds,
    hasReversals: hasReversals,
    imgBase: imgBase,
    draw: draw,
    cardMeta: cardMeta,
    evaluate: evaluate
  };

})(typeof window !== 'undefined' ? window : globalThis);
