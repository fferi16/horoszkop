/* Asztroláb – váta/pitta/kapha a jyotisha klasszikus szabályai szerint
   Forrás: docs/26-dosha.md (BPHS 3.20, 3.23–30, 4.5 · Sāravalī 38.5)
   Sima script (nem ES modul). */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};

  function DD() { return (global.HDATA || {}).dosha || null; }

  /* ---------------- védikus méltóság ----------------
     A nyugati méltóságtábla modern uralkodókat használ (Vízöntő = Uránusz),
     ami a jyotishában értelmezhetetlen: ott csak a hét klasszikus bolygó van,
     hagyományos uralommal. Ezért külön tábla. */

  var OWN = {
    kos: ['mars'], bika: ['venus'], ikrek: ['mercury'], rak: ['moon'],
    oroszlan: ['sun'], szuz: ['mercury'], merleg: ['venus'], skorpio: ['mars'],
    nyilas: ['jupiter'], bak: ['saturn'], vizonto: ['saturn'], halak: ['jupiter']
  };
  var EXALT = {
    sun: 'kos', moon: 'bika', mars: 'bak', mercury: 'szuz',
    jupiter: 'rak', venus: 'halak', saturn: 'merleg'
  };
  var DEBIL = {
    sun: 'merleg', moon: 'skorpio', mars: 'rak', mercury: 'halak',
    jupiter: 'bak', venus: 'szuz', saturn: 'kos'
  };
  var MOOLA = {
    sun: 'oroszlan', moon: 'bika', mars: 'kos', mercury: 'szuz',
    jupiter: 'nyilas', venus: 'merleg', saturn: 'vizonto'
  };

  /**
   * Méltóság-pontszám a sziderikus jegyben. A Sadbala hat összetevője közül
   * csak a Sthána Balát közelíti — a felület ezt kiírja.
   */
  function dignity(planetKey, signKey) {
    if (EXALT[planetKey] === signKey) return { score: 5, name: 'felmagasztalva (uccsa)' };
    if (MOOLA[planetKey] === signKey) return { score: 4, name: 'múlatrikóna' };
    if ((OWN[signKey] || []).indexOf(planetKey) >= 0) return { score: 3, name: 'saját jegyében' };
    if (DEBIL[planetKey] === signKey) return { score: 0, name: 'gyengülve (nícsa)' };
    return { score: 2, name: 'semleges' };
  }

  /* ---------------- nádi a nakshatra sorszámából ----------------
     A 27 elemű tábla szabályos oda-vissza (busztrofedon) minta, ezért
     táblázat helyett képlettel állítjuk elő; a teszt mind a 27-et ellenőrzi. */

  var NADI_BASE = ['vata', 'pitta', 'kapha', 'kapha', 'pitta',
                   'vata', 'vata', 'pitta', 'kapha'];

  function nadiOf(nakshatraIndex) {
    var i = ((nakshatraIndex % 27) + 27) % 27;
    var base = NADI_BASE[i % 9];
    var group = Math.floor(i / 9);
    if (group === 1) {                       // a középső kilencesben váta ↔ kapha csere
      if (base === 'vata') return 'kapha';
      if (base === 'kapha') return 'vata';
    }
    return base;
  }

  /* ---------------- a teljes elemzés ---------------- */

  /**
   * @param opts.planetSigns  { sun:'kos', moon:..., } sziderikus jegykulcsok
   * @param opts.lagnaSign    a sziderikus aszcendens jegykulcsa (vagy null)
   * @param opts.nakshatra    a Hold nakshatra-sorszáma (0-alapú) vagy null
   */
  function analyse(opts) {
    var D = DD();
    if (!D) return null;
    var out = { components: [] };

    /* 1) Sāravalī 38.5 — az öt tāra graha közül a legerősebb(ek) */
    var ranked = D.taraGrahas.map(function (g) {
      var sign = opts.planetSigns[g.key];
      var dig = sign ? dignity(g.key, sign) : { score: 0, name: '—' };
      var pd = D.planets[g.key];
      return {
        key: g.key, name: g.name, tattva: g.tattva, sign: sign,
        score: dig.score, dignity: dig.name,
        doshas: pd ? pd.d : [], src: pd ? pd.src : ''
      };
    }).sort(function (a, b) { return b.score - a.score; });

    var top = ranked[0] ? ranked[0].score : 0;
    var strongest = ranked.filter(function (r) { return r.score === top; });
    var saravaliDoshas = {};
    strongest.forEach(function (r) {
      r.doshas.forEach(function (d) { saravaliDoshas[d] = (saravaliDoshas[d] || 0) + 1; });
    });

    out.components.push({
      key: 'saravali',
      title: 'A legerősebb bolygó temperamentuma',
      source: D.saravaliSrc,
      caveat: D.saravaliCaveat,
      confidence: 'klasszikus',
      ranked: ranked,
      strongest: strongest,
      doshas: Object.keys(saravaliDoshas)
    });

    /* 2) BPHS 4.5 — a lagna jegyének nedve */
    if (opts.lagnaSign && D.signs[opts.lagnaSign]) {
      out.components.push({
        key: 'lagna',
        title: 'A lagna (aszcendens) jegye',
        source: D.signSrc, caveat: D.signNote,
        confidence: 'klasszikus',
        signKey: opts.lagnaSign,
        doshas: [D.signs[opts.lagnaSign]]
      });

      /* 3) BPHS 3 — a lagna urának nedve */
      var lord = (OWN[opts.lagnaSign] || [])[0];
      if (lord && D.planets[lord]) {
        out.components.push({
          key: 'lagnalord',
          title: 'A lagna urának természete',
          source: D.planets[lord].src,
          caveat: D.planets[lord].note || null,
          confidence: 'klasszikus',
          lord: lord,
          doshas: D.planets[lord].d
        });
      }
    }

    /* 4) nádi — külön jelölve, hogy nincs klasszikus szöveghelye */
    if (opts.nakshatra != null) {
      var nd = nadiOf(opts.nakshatra);
      out.components.push({
        key: 'nadi',
        title: 'A Hold nakshatrájának nádija',
        source: D.nadiSrc, caveat: D.nadiCaveat,
        confidence: 'hagyományos, versszám nélkül',
        nadiName: D.nadiNames[nd],
        doshas: [nd]
      });
    }

    /* összesítés — csak megjelenítéshez, NEM „ez a te dósád" ítélet */
    var tally = { vata: 0, pitta: 0, kapha: 0 };
    out.components.forEach(function (c) {
      c.doshas.forEach(function (d) {
        if (d === 'tri') { tally.vata++; tally.pitta++; tally.kapha++; }
        else if (tally[d] != null) tally[d]++;
      });
    });
    out.tally = tally;

    return out;
  }

  HCORE.dosha = { analyse: analyse, nadiOf: nadiOf, dignity: dignity };

})(typeof window !== 'undefined' ? window : globalThis);
