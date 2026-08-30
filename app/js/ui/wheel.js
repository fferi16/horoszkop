/* Horoszkóp – natál horoszkópábra rajzolása SVG-be */

(function (global) {
  'use strict';

  var HUI = global.HUI = global.HUI || {};
  var VS = '︎';   // variation selector: szöveges (nem emoji) megjelenítés
  var SYMBOLS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map(function(s){return s+VS;});
  var ELEM_COLOR = ['#c0552f', '#5d7a3a', '#c99a2e', '#3f7fa6'];   // tűz, föld, levegő, víz

  function polar(cx, cy, r, deg) {
    var a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function el(tag, attrs, text) {
    var s = '<' + tag;
    Object.keys(attrs).forEach(function (k) { s += ' ' + k + '="' + attrs[k] + '"'; });
    if (text != null) return s + '>' + text + '</' + tag + '>';
    return s + '/>';
  }

  /**
   * Horoszkópkerék rajzolása.
   * chart: a HCORE.chart() eredménye; hasHouses: van-e pontos idő.
   */
  HUI.drawWheel = function (chart, hasHouses) {
    var S = 560, cx = S / 2, cy = S / 2;
    var rOuter = 262, rZodiac = 228, rHouse = 168, rPlanet = 196, rInner = 150;
    var out = [];

    // Az ábrát az aszcendens forgatja: az ASC a bal oldali vízszintesre kerül,
    // az MC felülre. A zodiákus az óramutatóval ellentétesen halad, ezért a
    // hosszúság előjelét meg kell fordítani (a polar() ugyanis órairányú).
    var rot = hasHouses && chart.houses ? chart.houses.asc : 0;
    function pos(lon) { return ((rot - lon + 270) % 360 + 360) % 360; }

    out.push('<svg class="wheel" viewBox="0 0 ' + S + ' ' + S + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Natál horoszkópábra">');

    // háttérkörök
    out.push(el('circle', { cx: cx, cy: cy, r: rOuter, fill: 'none', stroke: 'currentColor', 'stroke-opacity': .25 }));
    out.push(el('circle', { cx: cx, cy: cy, r: rZodiac, fill: 'none', stroke: 'currentColor', 'stroke-opacity': .25 }));
    out.push(el('circle', { cx: cx, cy: cy, r: rHouse, fill: 'none', stroke: 'currentColor', 'stroke-opacity': .18 }));
    out.push(el('circle', { cx: cx, cy: cy, r: rInner, fill: 'none', stroke: 'currentColor', 'stroke-opacity': .12 }));

    // zodiákus-szeletek
    for (var i = 0; i < 12; i++) {
      // fordított körüljárás miatt a szeletet a végétől az elejéig rajzoljuk
      var a1 = pos((i + 1) * 30), a2 = pos(i * 30);
      var color = ELEM_COLOR[i % 4];
      // szelet háttér
      var p1 = polar(cx, cy, rZodiac, a1), p2 = polar(cx, cy, rZodiac, a2);
      var q1 = polar(cx, cy, rOuter, a1), q2 = polar(cx, cy, rOuter, a2);
      out.push('<path d="M' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1) +
        ' A' + rZodiac + ',' + rZodiac + ' 0 0 1 ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1) +
        ' L' + q2[0].toFixed(1) + ',' + q2[1].toFixed(1) +
        ' A' + rOuter + ',' + rOuter + ' 0 0 0 ' + q1[0].toFixed(1) + ',' + q1[1].toFixed(1) +
        ' Z" fill="' + color + '" fill-opacity="0.13"/>');
      // elválasztó vonal
      var l1 = polar(cx, cy, rZodiac, a1), l2 = polar(cx, cy, rOuter, a1);
      out.push(el('line', {
        x1: l1[0].toFixed(1), y1: l1[1].toFixed(1), x2: l2[0].toFixed(1), y2: l2[1].toFixed(1),
        stroke: 'currentColor', 'stroke-opacity': .28
      }));
      // jegy szimbóluma
      var mid = polar(cx, cy, (rZodiac + rOuter) / 2, pos(i * 30 + 15));
      out.push(el('text', {
        x: mid[0].toFixed(1), y: (mid[1] + 7).toFixed(1), 'text-anchor': 'middle',
        'font-size': 21, fill: color, 'font-family': 'serif'
      }, SYMBOLS[i]));
    }

    // házak
    if (hasHouses && chart.houses) {
      for (var h = 1; h <= 12; h++) {
        var ha = pos(chart.houses.cusps[h]);
        var axis = (h === 1 || h === 4 || h === 7 || h === 10);
        var s1 = polar(cx, cy, rInner, ha), s2 = polar(cx, cy, rZodiac, ha);
        out.push(el('line', {
          x1: s1[0].toFixed(1), y1: s1[1].toFixed(1), x2: s2[0].toFixed(1), y2: s2[1].toFixed(1),
          stroke: 'currentColor', 'stroke-opacity': axis ? .6 : .2,
          'stroke-width': axis ? 2 : 1
        }));
        // házszám
        var nextA = pos(chart.houses.cusps[h === 12 ? 1 : h + 1]);
        var span = ((ha - nextA) + 360) % 360;          // a ház a képernyőn visszafelé nyílik
        var numPos = polar(cx, cy, rInner + 14, ha - span / 2);
        out.push(el('text', {
          x: numPos[0].toFixed(1), y: (numPos[1] + 4).toFixed(1), 'text-anchor': 'middle',
          'font-size': 11, fill: 'currentColor', 'fill-opacity': .5
        }, String(h)));
      }
      // ASC / MC felirat
      var ascP = polar(cx, cy, rOuter + 16, pos(chart.houses.asc));
      out.push(el('text', {
        x: ascP[0].toFixed(1), y: (ascP[1] + 4).toFixed(1), 'text-anchor': 'middle',
        'font-size': 12, 'font-weight': 700, fill: 'currentColor'
      }, 'ASC'));
      var mcP = polar(cx, cy, rOuter + 16, pos(chart.houses.mc));
      out.push(el('text', {
        x: mcP[0].toFixed(1), y: (mcP[1] + 4).toFixed(1), 'text-anchor': 'middle',
        'font-size': 12, 'font-weight': 700, fill: 'currentColor'
      }, 'MC'));
    }

    // fényszögvonalak a belső körben
    var byKey = chart.planets;
    var aspColor = {
      conjunction: '#8a8a8a', opposition: '#c0552f', square: '#c0552f',
      trine: '#3f7fa6', sextile: '#3f7fa6', quincunx: '#a08a2e', semisextile: '#a08a2e'
    };
    (chart.aspects || []).forEach(function (a) {
      var pa = byKey[a.a], pb = byKey[a.b];
      if (!pa || !pb) return;
      var A = polar(cx, cy, rInner, pos(pa.lon)), B = polar(cx, cy, rInner, pos(pb.lon));
      var dashed = (a.type === 'quincunx' || a.type === 'semisextile');
      out.push(el('line', {
        x1: A[0].toFixed(1), y1: A[1].toFixed(1), x2: B[0].toFixed(1), y2: B[1].toFixed(1),
        stroke: aspColor[a.type] || '#999',
        'stroke-opacity': (0.25 + 0.5 * a.exactness).toFixed(2),
        'stroke-width': a.exactness > 0.75 ? 1.6 : 1,
        'stroke-dasharray': dashed ? '3,3' : ''
      }));
    });

    // bolygók – ütközésmentesítéssel
    var placed = [];
    var items = chart.list.slice();
    var nn = chart.planets.northNode;
    if (nn) items.push(nn);
    items.sort(function (a, b) { return pos(a.lon) - pos(b.lon); });

    items.forEach(function (p) {
      var ang = pos(p.lon);
      // ha túl közel van egy már kirakott jelhez, tolunk rajta
      var tries = 0;
      while (tries < 40 && placed.some(function (x) {
        return Math.abs(((ang - x + 540) % 360) - 180) < 8;   // 8 foknál közelebb: ütközik
      })) { ang += 4.2; tries++; }
      placed.push(ang);

      var pp = polar(cx, cy, rPlanet, ang);
      var tick1 = polar(cx, cy, rZodiac, pos(p.lon));
      var tick2 = polar(cx, cy, rZodiac - 9, pos(p.lon));
      out.push(el('line', {
        x1: tick1[0].toFixed(1), y1: tick1[1].toFixed(1),
        x2: tick2[0].toFixed(1), y2: tick2[1].toFixed(1),
        stroke: 'currentColor', 'stroke-opacity': .5
      }));
      out.push(el('text', {
        x: pp[0].toFixed(1), y: (pp[1] + 7).toFixed(1), 'text-anchor': 'middle',
        'font-size': 19, fill: 'currentColor', 'font-family': 'serif'
      }, p.symbol + VS));
      // fok + retrográd jelzés
      var dp = polar(cx, cy, rPlanet - 21, ang);
      out.push(el('text', {
        x: dp[0].toFixed(1), y: (dp[1] + 3).toFixed(1), 'text-anchor': 'middle',
        'font-size': 9, fill: 'currentColor', 'fill-opacity': .55
      }, Math.floor(p.sign.degree) + '°' + (p.retrograde ? ' ℞' : '')));
    });

    out.push('</svg>');
    return out.join('');
  };

})(typeof window !== 'undefined' ? window : globalThis);
