/* Előrejelzés nézet — napi és heti égi kép a saját képletre.
   A számítás: core/forecast.js, a szövegek: data/forecast.js (docs/33).
   Az űrlapot és a segédeket az app.js adja (window.HAPP). */

(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var F = function () { return window.HCORE && HCORE.forecast; };
  var T = function () { return window.HDATA && HDATA.forecast; };
  var esc = function (s) { return HAPP.esc(String(s == null ? '' : s)); };
  var WD = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
  var MON = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];
  var HOUSE_TITLES = function () { return (HDATA.western && HDATA.western.houses) || []; };
  var PLANET_HU = { sun: 'Nap', moon: 'Hold', mercury: 'Merkúr', venus: 'Vénusz', mars: 'Mars', jupiter: 'Jupiter', saturn: 'Szaturnusz' };

  var ctx = null;          // { input, utc, chart, place, tz, targets, cusps }

  /* ---------------- előkészítés ---------------- */

  function prepare() {
    var input = HAPP.readForm();
    if (!input) return null;
    var place = null;
    var pv = ($('fcPlace').value || '').trim();
    if (pv) place = HDATA.geo.find(pv);
    if (!place) place = input.place;
    var tz = place.tz || 'Europe/Budapest';
    var utc = HCORE.localToUTC(input.year, input.month, input.day, input.hasTime ? input.hour : 12, input.hasTime ? input.minute : 0, input.place.tz);
    var chart = HCORE.chart({ date: utc, lat: input.place.lat, lon: input.place.lon,
      system: input.houseSystem || 'placidus', withHouses: !!input.hasTime });
    var targets = [];
    ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'northNode'].forEach(function (k) {
      var p = chart.planets[k];
      if (p) targets.push({ key: k, name: p.name, symbol: p.symbol, lon: p.lon });
    });
    var cusps = null;
    if (input.hasTime && chart.houses) {
      cusps = chart.houses.cusps;
      targets.push({ key: 'asc', name: 'Aszcendens', symbol: 'AC', lon: chart.houses.asc });
      targets.push({ key: 'mc', name: 'MC', symbol: 'MC', lon: chart.houses.mc });
      targets.push({ key: 'dsc', name: 'Deszcendens', symbol: 'DC', lon: HCORE.norm360(chart.houses.asc + 180) });
      targets.push({ key: 'ic', name: 'IC', symbol: 'IC', lon: HCORE.norm360(chart.houses.mc + 180) });
    } else {
      // egészjegyes közelítés a napjegytől
      var s0 = chart.planets.sun.sign.index * 30;
      cusps = [null]; for (var i = 1; i <= 12; i++) cusps.push(HCORE.norm360(s0 + (i - 1) * 30));
    }
    return { input: input, utc: utc, chart: chart, place: place, tz: tz, targets: targets, cusps: cusps, hasTime: !!input.hasTime };
  }

  function pickedDate() {
    var v = $('fcDate').value;
    if (!v) { var n = new Date(); return { y: n.getFullYear(), m: n.getMonth() + 1, d: n.getDate() }; }
    var p = v.split('-'); return { y: +p[0], m: +p[1], d: +p[2] };
  }
  function dayWindow(y, m, d, tz) {
    var from = HCORE.localToUTC(y, m, d, 0, 0, tz);
    var to = new Date(from.getTime() + 24 * 3600000);
    return { from: from, to: to };
  }
  function fmtTime(date, tz) {
    try { return new Intl.DateTimeFormat('hu-HU', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(date); }
    catch (e) { return date.toISOString().slice(11, 16); }
  }
  function fmtDay(date, tz) {
    try {
      var parts = new Intl.DateTimeFormat('hu-HU', { timeZone: tz, month: 'short', day: 'numeric', weekday: 'long' }).format(date);
      return parts;
    } catch (e) { return date.toISOString().slice(0, 10); }
  }
  function localDayKey(date, tz) {
    try { return new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date); }
    catch (e) { return date.toISOString().slice(0, 10); }
  }
  function houseTitle(h) { var x = HOUSE_TITLES()[h - 1]; return x ? x.title.toLowerCase() : ''; }
  function stars(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += i <= n ? '★' : '<span class="off">★</span>';
    return s;
  }

  /* ---------------- egy nap ---------------- */

  function eventText(ev) {
    var t = T();
    var q = ev.aspect.quality;
    var txt = 'A tranzit ' + ev.planet.name + ' ' + ev.aspect.name + 'ba ér ' + (t.target[ev.target.key] || ev.target.name) + ': ' +
      t.planet[ev.planet.key] + ', ' + t.quality[q] + '.';
    if (q === 'conj' && t.conjNature[ev.planet.key]) txt += t.conjNature[ev.planet.key];
    if (ev.house) txt += ' Az égen ez a képleted ' + ev.house + '. házában (' + houseTitle(ev.house) + ') zajlik.';
    return txt;
  }

  function renderDay(y, m, d, pre) {
    var t = T(), Fc = F(), c = ctx;
    var w = dayWindow(y, m, d, c.tz);
    var mid = new Date(w.from.getTime() + 12 * 3600000);
    var events = pre ? pre.events.filter(function (e) { return e.date >= w.from && e.date < w.to; })
      : Fc.fastTransits(c.targets, w.from, w.to, c.cusps);
    var voc = (pre ? pre.voc : Fc.voidOfCourse(w.from, w.to)).filter(function (v) { return v.end > w.from && v.start < w.to; });
    var moonLon = HCORE.norm360(HCORE.eclipticLongitude('Moon', mid));
    var moonSign = HCORE.toSign(moonLon), moonHouse = HCORE.houseOf(moonLon, c.cusps);
    var mp = HCORE.moonPhase(mid);
    var sc = Fc.scoreDay(events);
    var now = new Date();
    var isToday = localDayKey(now, c.tz) === localDayKey(mid, c.tz);
    var ph = Fc.planetaryHours(isToday ? now : mid, c.place.lat, c.place.lon, c.tz);

    var html = '<div class="fc-day"><h3>' + esc(fmtDay(mid, c.tz)) + (isToday ? ' — ma' : '') + '</h3>';
    html += '<p class="fc-meta">' + esc(c.input.name || 'A képleted') + ' · ' + esc(c.place.name) + (c.hasTime ? '' : ' · ' + esc(t.noTime)) + '</p>';

    // a Hold
    html += '<div class="fc-ev"><div class="t">☽ A Hold ' + esc(moonSign.name) + ' · ' + moonHouse + '. ház · ' + esc(mp.symbol + ' ' + mp.name) + '</div>' +
      '<div>' + esc(t.moonHouse[moonHouse]) + '. ' + esc(t.phase[mp.key] || '') + '.</div></div>';

    // üresjárat
    if (voc.length) {
      voc.forEach(function (v) {
        html += '<div class="fc-ev voc"><div class="t">Üresjáratú Hold: ' + (v.start < w.from ? 'tegnap ' : '') + esc(fmtTime(v.start, c.tz)) + ' – ' +
          (v.end >= w.to ? 'holnap ' : '') + esc(fmtTime(v.end, c.tz)) + ' · ' + esc(v.sign.name) + ' → ' + esc(v.nextSign.name) + '</div>' +
          '<div>' + esc(t.voc) + (v.lillyException ? ' ' + esc(t.vocLilly) : '') + '</div></div>';
      });
    } else {
      html += '<p class="fc-meta">' + esc(t.vocNone) + '</p>';
    }

    // csillagok
    html += '<div class="fc-stars">';
    Fc.DOMAINS.forEach(function (dk) {
      html += '<div class="fc-star"><div class="n">' + esc(t.domains[dk].icon + ' ' + t.domains[dk].name) + '</div><div class="s">' + stars(sc.stars[dk]) + '</div></div>';
    });
    html += '</div>';
    if (sc.reasons.length) {
      html += '<p class="fc-reasons">Levezetés: ' + sc.reasons.map(function (r) {
        return esc(t.domains[r.domain].icon + ' ' + r.event.planet.symbol + ' ' + r.event.aspect.name + ' → ' + r.event.target.name + ' ' + (r.delta > 0 ? '+' : '') + r.delta);
      }).join(' · ') + '. ' + esc(t.starsNote) + '</p>';
    } else {
      html += '<p class="fc-reasons">' + esc(t.quiet) + ' ' + esc(t.starsNote) + '</p>';
    }

    // érintések
    if (events.length) {
      html += '<h4>A nap érintései</h4>';
      events.forEach(function (ev) {
        html += '<div class="fc-ev ' + ev.aspect.quality + '"><div class="t">' + esc(fmtTime(ev.date, c.tz)) + ' — ' +
          esc(ev.planet.symbol + ' ' + ev.planet.name + ' ' + ev.aspect.name + ' ' + ev.target.symbol + ' ' + ev.target.name) + '</div><div>' + esc(eventText(ev)) + '</div></div>';
      });
    }

    // bolygóórák
    if (ph) {
      html += '<h4>Bolygóórák — ' + esc(t.dayRuler[ph.dayRuler] || '') + '</h4>';
      if (ph.current && isToday) html += '<p><strong>Most: ' + esc(PLANET_HU[ph.current.ruler]) + '-óra</strong> (' + esc(fmtTime(ph.current.start, c.tz)) + ' – ' + esc(fmtTime(ph.current.end, c.tz)) + ') — ' + esc(t.hour[ph.current.ruler]) + '.</p>';
      html += '<div class="fc-hours">' + ph.hours.map(function (h) {
        return '<div class="fc-hour' + (ph.current === h && isToday ? ' now' : '') + (h.day ? '' : ' night') + '">' + esc(fmtTime(h.start, c.tz)) + ' ' + esc(PLANET_HU[h.ruler]) + '</div>';
      }).join('') + '</div>';
      html += '<p class="fc-meta">' + esc(t.hourNote) + ' Napkelte ' + esc(fmtTime(ph.sunrise, c.tz)) + ', napnyugta ' + esc(fmtTime(ph.sunset, c.tz)) + '.</p>';
    }
    html += '</div>';
    return html;
  }

  /* ---------------- egy hét ---------------- */

  function renderWeek(y, m, d) {
    var t = T(), Fc = F(), c = ctx;
    var first = dayWindow(y, m, d, c.tz);
    var to = new Date(first.from.getTime() + 7 * 86400000);
    var events = Fc.fastTransits(c.targets, first.from, to, c.cusps);
    var voc = Fc.voidOfCourse(first.from, to);
    var pre = { events: events, voc: voc };
    var days = [];
    for (var i = 0; i < 7; i++) {
      var from = new Date(first.from.getTime() + i * 86400000), end = new Date(from.getTime() + 86400000);
      var evs = events.filter(function (e) { return e.date >= from && e.date < end; });
      var sc = Fc.scoreDay(evs);
      var mid = new Date(from.getTime() + 12 * 3600000);
      var total = 0; Fc.DOMAINS.forEach(function (k) { total += sc.score[k]; });
      days.push({ from: from, mid: mid, sc: sc, total: total, n: evs.length, moon: HCORE.toSign(HCORE.norm360(HCORE.eclipticLongitude('Moon', mid))) });
    }
    var best = days.reduce(function (a, b) { return b.total > a.total ? b : a; }, days[0]);
    var worst = days.reduce(function (a, b) { return b.total < a.total ? b : a; }, days[0]);

    var html = '<h3>A hét — ' + esc(fmtDay(days[0].mid, c.tz)) + ' → ' + esc(fmtDay(days[6].mid, c.tz)) + '</h3>';
    html += '<div class="fc-week">' + days.map(function (dd, i) {
      var cls = dd === best && dd.total > 0 ? ' best' : dd === worst && dd.total < 0 ? ' worst' : '';
      return '<div class="fc-wday' + cls + '" data-i="' + i + '"><div class="d">' + esc(fmtDay(dd.mid, c.tz)) + '</div>' +
        '<div class="sub">☽ ' + esc(dd.moon.name) + ' · ' + dd.n + ' érintés' + (dd === best && dd.total > 0 ? ' · legjobb' : dd === worst && dd.total < 0 ? ' · legnehezebb' : '') + '</div>' +
        Fc.DOMAINS.map(function (k) { return '<div class="row"><span>' + esc(t.domains[k].icon) + '</span><span class="s">' + stars(dd.sc.stars[k]) + '</span></div>'; }).join('') +
        '</div>';
    }).join('') + '</div>';

    // a hét eseményei
    var items = [];
    Fc.lunations(first.from, to).forEach(function (l) {
      var h = HCORE.houseOf(l.lon, c.cusps);
      var hit = c.targets.filter(function (tg) { var dd = Math.abs(HCORE.angleDiff(tg.lon, l.lon)); return dd <= 3 || Math.abs(dd - 180) <= 3; }).map(function (tg) { return tg.name; });
      items.push({ date: l.date, cls: 'conj', text: (l.type === 'ujhold' ? '🌑 ' : '🌕 ') + t.lunation[l.type].replace('%H%', (h === 1 || h === 5 ? 'az ' : 'a ') + h).replace('%D%', fmtDay(l.date, c.tz) + ' ' + fmtTime(l.date, c.tz)).replace('%T%', houseTitle(h)) + (hit.length ? t.lunation.hit.replace('%P%', hit.join(', ')) : '') });
    });
    Fc.ingresses(first.from, to).forEach(function (ig) {
      var h = HCORE.houseOf(ig.sign.index * 30 + 0.01, c.cusps);
      items.push({ date: ig.date, cls: 'soft', text: t.ingress.replace('%P%', ig.planet.name).replace('%D%', fmtDay(ig.date, c.tz) + ' ' + fmtTime(ig.date, c.tz)).replace('%S%', ig.sign.name).replace('%H%', h).replace('%M%', t.ingressMeaning[ig.planet.key] || '') + '.' });
    });
    Fc.stations(first.from, to).forEach(function (st) {
      var h = HCORE.houseOf(st.lon, c.cusps);
      items.push({ date: st.date, cls: st.toRetro ? 'hard' : 'soft', text: (st.toRetro ? t.station.retro : t.station.direct).replace('%P%', st.planet.name).replace('%D%', fmtDay(st.date, c.tz) + ' ' + fmtTime(st.date, c.tz)).replace('%S%', st.sign.text).replace('%H%', h) });
    });
    voc.forEach(function (v) {
      items.push({ date: v.start, cls: 'voc', text: 'Üresjáratú Hold: ' + fmtDay(v.start, c.tz) + ' ' + fmtTime(v.start, c.tz) + ' – ' + fmtDay(v.end, c.tz) + ' ' + fmtTime(v.end, c.tz) + ' (' + v.sign.name + ' → ' + v.nextSign.name + ')' });
    });
    items.sort(function (a, b) { return a.date - b.date; });
    if (items.length) {
      html += '<h4>A hét eseményei a képletedben</h4>' + items.map(function (it) { return '<div class="fc-ev ' + it.cls + '">' + esc(it.text) + '</div>'; }).join('');
    }
    html += '<p class="fc-meta">Kattints egy napra a részletekért. ' + esc(t.disclaimer) + '</p>';
    html += '<div id="fcWeekDay"></div>';
    var out = $('fcOut');
    out.innerHTML = html;
    out.querySelectorAll('.fc-wday').forEach(function (el) {
      el.addEventListener('click', function () {
        var dd = days[+el.dataset.i];
        var k = localDayKey(dd.mid, c.tz).split('-');
        $('fcWeekDay').innerHTML = renderDay(+k[0], +k[1], +k[2], pre);
        $('fcWeekDay').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ---------------- vezérlés ---------------- */

  function run(week) {
    if (!F() || !T()) return;
    ctx = prepare();
    if (!ctx) return;
    var out = $('fcOut');
    out.innerHTML = '<p class="fc-meta">Számolás…</p>';
    var pd = pickedDate();
    setTimeout(function () {
      try {
        if (week) renderWeek(pd.y, pd.m, pd.d);
        else out.innerHTML = renderDay(pd.y, pd.m, pd.d) + '<p class="fc-meta">' + esc(T().intro) + ' ' + esc(T().disclaimer) + '</p>';
      } catch (e) {
        out.innerHTML = '<p class="fc-meta">Hiba a számításban: ' + esc(e.message) + '</p>';
        if (window.console) console.error(e);
      }
    }, 30);
  }

  function init() {
    if (!$('fcDate')) return;
    var n = new Date();
    $('fcDate').value = n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0');
    $('fcDay').addEventListener('click', function () { run(false); });
    $('fcWeek').addEventListener('click', function () { run(true); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
