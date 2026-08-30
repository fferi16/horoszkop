/* Horoszkóp – kronobiológiai diagramok (SVG) */

(function (global) {
  'use strict';

  var HUI = global.HUI = global.HUI || {};

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /**
   * Bioritmus-görbék a születéstől számítva, a mai nap körüli ablakban.
   * data: HCORE.cal.biorhythmSeries() eredménye
   * only: megjelenítendő cikluskulcsok tömbje (üres = mind)
   */
  HUI.drawBiorhythm = function (data, only) {
    var W = 720, H = 240, padL = 34, padR = 12, padT = 14, padB = 26;
    var iw = W - padL - padR, ih = H - padT - padB;
    var n = data.to - data.from;
    var x = function (off) { return padL + (off - data.from) / n * iw; };
    var y = function (v) { return padT + ih / 2 - v * (ih / 2 - 4); };
    var out = ['<svg class="chart" viewBox="0 0 ' + W + ' ' + H +
      '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bioritmus-görbék">'];

    // rácsvonalak
    [1, 0.5, 0, -0.5, -1].forEach(function (v) {
      out.push('<line x1="' + padL + '" y1="' + y(v).toFixed(1) + '" x2="' + (W - padR) +
        '" y2="' + y(v).toFixed(1) + '" stroke="currentColor" stroke-opacity="' +
        (v === 0 ? 0.35 : 0.12) + '"/>');
      out.push('<text x="' + (padL - 6) + '" y="' + (y(v) + 3).toFixed(1) +
        '" text-anchor="end" font-size="9" fill="currentColor" fill-opacity=".5">' +
        Math.round(v * 100) + '</text>');
    });

    // heti osztás
    for (var d = data.from; d <= data.to; d += 7) {
      out.push('<line x1="' + x(d).toFixed(1) + '" y1="' + padT + '" x2="' + x(d).toFixed(1) +
        '" y2="' + (padT + ih) + '" stroke="currentColor" stroke-opacity=".1"/>');
      out.push('<text x="' + x(d).toFixed(1) + '" y="' + (H - 8) +
        '" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity=".5">' +
        (d === 0 ? 'ma' : (d > 0 ? '+' + d : d)) + '</text>');
    }

    // görbék
    data.series.forEach(function (s) {
      if (only && only.length && only.indexOf(s.key) < 0) return;
      var pts = s.points.map(function (p) {
        return x(p.offset).toFixed(1) + ',' + y(p.value).toFixed(1);
      }).join(' ');
      out.push('<polyline points="' + pts + '" fill="none" stroke="' + s.color +
        '" stroke-width="' + (s.primary ? 2 : 1.3) + '" stroke-opacity="' +
        (s.primary ? 0.95 : 0.6) + '"' + (s.primary ? '' : ' stroke-dasharray="4,3"') + '/>');
    });

    // "ma" jelölő
    out.push('<line x1="' + x(0).toFixed(1) + '" y1="' + padT + '" x2="' + x(0).toFixed(1) +
      '" y2="' + (padT + ih) + '" stroke="currentColor" stroke-opacity=".55" stroke-width="1.5"/>');
    data.series.forEach(function (s) {
      if (only && only.length && only.indexOf(s.key) < 0) return;
      var p0 = s.points.filter(function (p) { return p.offset === 0; })[0];
      if (p0) out.push('<circle cx="' + x(0).toFixed(1) + '" cy="' + y(p0.value).toFixed(1) +
        '" r="3.5" fill="' + s.color + '"/>');
    });

    out.push('</svg>');
    return out.join('');
  };

  /**
   * Napi éberséggörbe a két-folyamat modellből, az egyén saját fázisával.
   * curve:   HCORE.chrono.alertnessCurve() eredménye
   * markers: HCORE.chrono.phaseMarkers() eredménye
   */
  HUI.drawAlertness = function (curve, markers) {
    var W = 720, H = 250, padL = 32, padR = 12, padT = 18, padB = 46;
    var iw = W - padL - padR, ih = H - padT - padB;
    var x = function (h) { return padL + h / 24 * iw; };
    var y = function (v) { return padT + ih - (v / 100) * ih; };
    var out = ['<svg class="chart" viewBox="0 0 ' + W + ' ' + H +
      '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Napi éberséggörbe">'];

    // alvási sávok árnyalása (az éjfélen átnyúlót két darabban rajzoljuk)
    function shade(from, to) {
      if (to > from) {
        out.push('<rect x="' + x(from).toFixed(1) + '" y="' + padT + '" width="' +
          (x(to) - x(from)).toFixed(1) + '" height="' + ih +
          '" fill="currentColor" fill-opacity=".08"/>');
      } else {
        shade(from, 24); shade(0, to);
      }
    }
    shade(curve.sleepOnset, curve.wakeTime);

    // rácsvonalak
    for (var h = 0; h <= 24; h += 3) {
      out.push('<line x1="' + x(h).toFixed(1) + '" y1="' + padT + '" x2="' + x(h).toFixed(1) +
        '" y2="' + (padT + ih) + '" stroke="currentColor" stroke-opacity=".1"/>');
      out.push('<text x="' + x(h).toFixed(1) + '" y="' + (padT + ih + 14) +
        '" text-anchor="middle" font-size="9" fill="currentColor" fill-opacity=".55">' +
        (h < 10 ? '0' + h : h) + ':00</text>');
    }
    [25, 50, 75].forEach(function (v) {
      out.push('<line x1="' + padL + '" y1="' + y(v).toFixed(1) + '" x2="' + (W - padR) +
        '" y2="' + y(v).toFixed(1) + '" stroke="currentColor" stroke-opacity=".07"/>');
    });

    // görbe
    var pts = curve.points.map(function (p) {
      return x(p.hour).toFixed(1) + ',' + y(p.value).toFixed(1);
    }).join(' ');
    out.push('<polygon points="' + x(0) + ',' + (padT + ih) + ' ' + pts + ' ' +
      x(24) + ',' + (padT + ih) + '" fill="var(--accent)" fill-opacity=".15"/>');
    out.push('<polyline points="' + pts + '" fill="none" stroke="var(--accent)" stroke-width="2"/>');

    // fázismarkerek
    var marks = [
      { h: markers.cbtMin, label: 'CBTmin', color: '#4a90d9' },
      { h: markers.morningPeak, label: 'délelőtti csúcs', color: '#4caf50' },
      { h: markers.afternoonDip, label: 'holtpont', color: '#e08e45' },
      { h: markers.physicalPeak, label: 'fizikai csúcs', color: '#4caf50' },
      { h: markers.dlmo, label: 'DLMO', color: '#9b59b6' }
    ];
    marks.forEach(function (m) {
      var hh = ((m.h % 24) + 24) % 24;
      var v = 50;
      curve.points.forEach(function (p) { if (Math.abs(p.hour - hh) < 0.13) v = p.value; });
      out.push('<line x1="' + x(hh).toFixed(1) + '" y1="' + y(v).toFixed(1) + '" x2="' +
        x(hh).toFixed(1) + '" y2="' + (padT + ih) + '" stroke="' + m.color +
        '" stroke-opacity=".45" stroke-dasharray="2,3"/>');
      out.push('<circle cx="' + x(hh).toFixed(1) + '" cy="' + y(v).toFixed(1) +
        '" r="4" fill="var(--bg2)" stroke="' + m.color + '" stroke-width="2"><title>' +
        esc(m.label) + '</title></circle>');
      out.push('<text x="' + x(hh).toFixed(1) + '" y="' + (H - 8) +
        '" text-anchor="middle" font-size="8.5" fill="' + m.color + '">' +
        esc(m.label) + '</text>');
    });

    out.push('</svg>');
    return out.join('');
  };

  /**
   * Sorsmátrix oktagram. dm: HCORE.cal.destinyMatrix() eredménye.
   * A négy fő pont a világtájakon, a négy átlós pont közöttük, középen E.
   */
  HUI.drawMatrix = function (dm) {
    var S = 460, cx = S / 2, cy = S / 2, R = 178, R2 = 108;
    var out = ['<svg class="chart matrix-svg" viewBox="0 0 ' + S + ' ' + S +
      '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sorsmátrix oktagram">'];

    function pt(r, deg) {
      var a = (deg - 90) * Math.PI / 180;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }
    // fő pontok: B fent (0°), C jobbra (90°), D lent (180°), A balra (270°)
    var main = [
      { v: dm.B, deg: 0, lbl: 'B' }, { v: dm.C, deg: 90, lbl: 'C' },
      { v: dm.D, deg: 180, lbl: 'D' }, { v: dm.A, deg: 270, lbl: 'A' }
    ];
    // átlós pontok: G (45°), H (135°), I (225°), F (315°)
    var diag = [
      { v: dm.G, deg: 45, lbl: 'G' }, { v: dm.H, deg: 135, lbl: 'H' },
      { v: dm.I, deg: 225, lbl: 'I' }, { v: dm.F, deg: 315, lbl: 'F' }
    ];

    // két négyzet: a nyolcszög váza
    function poly(list, r, cls) {
      var d = list.map(function (x) {
        var q = pt(r, x.deg); return q[0].toFixed(1) + ',' + q[1].toFixed(1);
      }).join(' ');
      out.push('<polygon points="' + d + '" fill="none" stroke="currentColor" ' +
        'stroke-opacity="' + (cls === 'main' ? .38 : .22) + '"/>');
    }
    poly(main, R, 'main');
    poly(diag, R, 'diag');

    // küllők a középpontba
    main.concat(diag).forEach(function (x) {
      var q = pt(R, x.deg);
      out.push('<line x1="' + cx + '" y1="' + cy + '" x2="' + q[0].toFixed(1) +
        '" y2="' + q[1].toFixed(1) + '" stroke="currentColor" stroke-opacity=".14"/>');
    });

    // másodlagos pontok a küllőkön (J/K/L/M)
    var mid = [
      { v: dm.K, deg: 0 }, { v: dm.L, deg: 90 },
      { v: dm.M, deg: 180 }, { v: dm.J, deg: 270 }
    ];
    mid.forEach(function (x) {
      var q = pt(R2, x.deg);
      out.push('<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) +
        '" r="15" fill="var(--bg)" stroke="currentColor" stroke-opacity=".3"/>');
      out.push('<text x="' + q[0].toFixed(1) + '" y="' + (q[1] + 4.5).toFixed(1) +
        '" text-anchor="middle" font-size="13" fill="currentColor" fill-opacity=".7">' +
        x.v + '</text>');
    });

    // fő és átlós pontok
    function node(x, big) {
      var q = pt(R, x.deg);
      out.push('<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) +
        '" r="' + (big ? 22 : 18) + '" fill="var(--bg2)" stroke="' +
        (big ? 'var(--accent)' : 'currentColor') + '" stroke-opacity="' +
        (big ? 1 : .4) + '" stroke-width="' + (big ? 2 : 1.2) + '"/>');
      out.push('<text x="' + q[0].toFixed(1) + '" y="' + (q[1] + 6).toFixed(1) +
        '" text-anchor="middle" font-size="' + (big ? 18 : 15) +
        '" font-weight="' + (big ? 700 : 400) + '" fill="currentColor">' + x.v + '</text>');
      var lp = pt(R + (big ? 34 : 30), x.deg);
      out.push('<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + 4).toFixed(1) +
        '" text-anchor="middle" font-size="10" fill="currentColor" fill-opacity=".5">' +
        x.lbl + '</text>');
    }
    main.forEach(function (x) { node(x, true); });
    diag.forEach(function (x) { node(x, false); });

    // pénz- és kapcsolati csatorna a jobb alsó szektorban
    if (dm.moneyChannel && dm.loveChannel) {
      var mc = dm.moneyChannel, lc = dm.loveChannel;
      function chip(x, y, val, color) {
        out.push('<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) +
          '" r="13" fill="var(--bg)" stroke="' + color + '" stroke-width="1.6"/>');
        out.push('<text x="' + x.toFixed(1) + '" y="' + (y + 4.5).toFixed(1) +
          '" text-anchor="middle" font-size="12" fill="currentColor">' + val + '</text>');
      }
      var mx = cx + 62, my = cy + 62;                    // a szektor közepe
      // csúcs
      chip(mx, my, mc.apex, 'var(--accent)');
      // pénzoldal (jobbra, a vízszintes tengely felé)
      chip(mx + 44, my - 26, mc.mid, '#4c8b5a');
      out.push('<text x="' + (mx + 44) + '" y="' + (my - 46) +
        '" text-anchor="middle" font-size="14" fill="#4c8b5a">$</text>');
      // kapcsolati oldal (lefelé, a függőleges tengely felé)
      chip(mx - 26, my + 44, lc.mid, '#d94141');
      out.push('<text x="' + (mx - 26) + '" y="' + (my + 68) +
        '" text-anchor="middle" font-size="13" fill="#d94141">\u2665</text>');
      // összekötő szaggatott vonalak
      out.push('<path d="M' + (mx + 44) + ',' + (my - 26) + ' L' + mx + ',' + my +
        ' L' + (mx - 26) + ',' + (my + 44) + '" fill="none" stroke="currentColor" ' +
        'stroke-opacity=".3" stroke-dasharray="3,3"/>');
    }

    // középpont
    out.push('<circle cx="' + cx + '" cy="' + cy + '" r="30" fill="var(--accent-soft)" ' +
      'stroke="var(--accent)" stroke-width="2.5"/>');
    out.push('<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" ' +
      'font-size="23" font-weight="700" fill="var(--accent)">' + dm.E + '</text>');

    out.push('</svg>');
    return out.join('');
  };

})(typeof window !== 'undefined' ? window : globalThis);
