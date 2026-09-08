/* Horoszkóp – az előrejelzés szekciói a profilban (Ma, A hét, A hónap, Az év)
   A számítás: core/forecast.js, a szövegek: data/forecast.js (docs/33).
   A profile.js hívja a képlet felépítése után; a szekciók a többi szekcióval
   azonos formában (items/notes/table) kerülnek a profilba, „Előrejelzés" kategóriába. */

(function (global) {
  'use strict';

  var HCORE = global.HCORE = global.HCORE || {};
  var norm360 = function (x) { return HCORE.norm360(x); };
  var PLANET_HU = { sun: 'Nap', moon: 'Hold', mercury: 'Merkúr', venus: 'Vénusz', mars: 'Mars', jupiter: 'Jupiter', saturn: 'Szaturnusz' };
  var SIGN_IN = { kos: 'Kosban', bika: 'Bikában', ikrek: 'Ikrekben', rak: 'Rákban', oroszlan: 'Oroszlánban', szuz: 'Szűzben',
    merleg: 'Mérlegben', skorpio: 'Skorpióban', nyilas: 'Nyilasban', bak: 'Bakban', vizonto: 'Vízöntőben', halak: 'Halakban' };
  var DAY = 86400000, H = 3600000;

  function T() { return global.HDATA && HDATA.forecast; }
  function F() { return HCORE.forecast; }
  function section(id, title, icon) { return { id: id, title: title, icon: icon, category: 'elorejelzes', items: [], notes: [] }; }
  function item(s, label, value, text) { s.items.push({ label: label, value: value || '', text: text || '' }); }
  function houseArticle(n) { return (n === 1 || n === 5) ? 'az' : 'a'; }

  function fmtTime(date, tz) {
    try { return new Intl.DateTimeFormat('hu-HU', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(date); }
    catch (e) { return date.toISOString().slice(11, 16); }
  }
  function fmtDay(date, tz) {
    try { return new Intl.DateTimeFormat('hu-HU', { timeZone: tz, month: 'short', day: 'numeric', weekday: 'long' }).format(date); }
    catch (e) { return date.toISOString().slice(0, 10); }
  }
  function fmtMonth(date, tz) {
    try { return new Intl.DateTimeFormat('hu-HU', { timeZone: tz, year: 'numeric', month: 'long' }).format(date); }
    catch (e) { return date.toISOString().slice(0, 7); }
  }
  function localParts(date, tz) {
    try {
      var p = new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date).split('-');
      return { y: +p[0], m: +p[1], d: +p[2] };
    } catch (e) { return { y: date.getUTCFullYear(), m: date.getUTCMonth() + 1, d: date.getUTCDate() }; }
  }
  function dayStart(y, m, d, tz) { return HCORE.localToUTC(y, m, d, 0, 0, tz); }
  function starsText(n) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= n ? '★' : '☆'; return s; }

  /* ---------------- előkészítés a profilból ---------------- */

  function context(out) {
    var c = out.chart, input = out.input;
    var place = out.place || input.place || { name: 'Budapest', lat: 47.4979, lon: 19.0402, tz: 'Europe/Budapest' };
    var tz = place.tz || 'Europe/Budapest';
    var hasTime = !!(input.hasTime && c.houses);
    var targets = [];
    ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'northNode'].forEach(function (k) {
      var p = c.planets[k];
      if (p) targets.push({ key: k, name: p.name, symbol: p.symbol, lon: p.lon });
    });
    var cusps;
    if (hasTime) {
      cusps = c.houses.cusps;
      targets.push({ key: 'asc', name: 'Aszcendens', symbol: 'AC', lon: c.houses.asc });
      targets.push({ key: 'mc', name: 'MC', symbol: 'MC', lon: c.houses.mc });
      targets.push({ key: 'dsc', name: 'Deszcendens', symbol: 'DC', lon: norm360(c.houses.asc + 180) });
      targets.push({ key: 'ic', name: 'IC', symbol: 'IC', lon: norm360(c.houses.mc + 180) });
    } else {
      var s0 = c.planets.sun.sign.index * 30;
      cusps = [null]; for (var i = 1; i <= 12; i++) cusps.push(norm360(s0 + (i - 1) * 30));
    }
    var HOUSES = (global.HDATA && HDATA.western && HDATA.western.houses) || [];
    return { out: out, chart: c, input: input, utc: out.utc, place: place, tz: tz, hasTime: hasTime, targets: targets, cusps: cusps,
      now: new Date(), houseTitle: function (h) { return HOUSES[h - 1] ? HOUSES[h - 1].title.toLowerCase() : ''; } };
  }

  function bigThree(ctx) {
    var ch = ctx.chart, parts = [ch.planets.sun.sign.name + ' Nap', ch.planets.moon.sign.name + ' Hold'];
    if (ctx.hasTime && ch.ascSign) parts.push(ch.ascSign.name + ' aszcendens');
    return parts.join(' · ');
  }

  function eventText(ctx, ev) {
    var t = T(), q = ev.aspect.quality;
    var pair = t.pair && t.pair[ev.planet.key] && t.pair[ev.planet.key][ev.target.key];
    var txt;
    if (pair && pair[q]) {
      txt = pair[q];
    } else {
      txt = 'A tranzit ' + ev.planet.name + ' ' + ev.aspect.name + 'ba ér ' + (t.target[ev.target.key] || ev.target.name) + ': ' +
        t.planet[ev.planet.key] + ', ' + t.quality[q] + '.';
    }
    if (ev.house) txt += ' (Az égen a képleted ' + ev.house + '. házában, ' + ctx.houseTitle(ev.house) + ' terepén.)';
    return txt;
  }
  /** A nap egy bekezdésben: a Hold háza + a legfontosabb érintések, folyó szöveggé fűzve. */
  function daySummary(ctx, moonHouse, mp, events, voc, from, to) {
    var t = T();
    var parts = [];
    var mh = (t.moonHouseLong && t.moonHouseLong[moonHouse]) || t.moonHouse[moonHouse];
    parts.push(mh);
    var ph = t.phase[mp.key];
    if (ph) parts.push('A Hold ' + mp.name.toLowerCase() + ' fázisban jár — ' + ph.replace(/^[^:]+:\s*/, '') + '.');
    var W = { sun: 2, venus: 2, mars: 2, mercury: 1.5, moon: 1 };
    var sorted = events.slice().sort(function (a, b) { return (W[b.planet.key] || 1) - (W[a.planet.key] || 1); });
    sorted.slice(0, 3).forEach(function (ev) {
      parts.push(fmtTime(ev.date, ctx.tz) + '-kor a ' + ev.planet.name + ' ' + ev.aspect.name + 'ba ér ' + (t.target[ev.target.key] ? t.target[ev.target.key].split(' — ')[0] : ev.target.name) + ': ' + eventText(ctx, ev).replace(/ \(Az égen.*\)$/, ''));
    });
    if (voc.length) parts.push('Üresjárat ' + (from && voc[0].start < from ? 'tegnap ' : '') + fmtTime(voc[0].start, ctx.tz) + '-tól ' + (to && voc[0].end >= to ? 'holnap ' : '') + fmtTime(voc[0].end, ctx.tz) + '-ig: ekkor ne indíts újat, fejezz be, pihenj.');
    return parts.join(' ');
  }
  function shortEvent(ctx, ev) {
    return fmtTime(ev.date, ctx.tz) + ' ' + ev.planet.symbol + ' ' + ev.aspect.name + ' ' + ev.target.symbol + ' ' + ev.target.name;
  }

  /* ---------------- MA ---------------- */

  function buildToday(ctx) {
    var t = T(), Fc = F(), c = ctx.chart, now = ctx.now;
    var lp = localParts(now, ctx.tz);
    var from = dayStart(lp.y, lp.m, lp.d, ctx.tz), to = new Date(from.getTime() + DAY);
    var mid = new Date(from.getTime() + 12 * H);
    var s = section('elore-ma', 'Ma — a napi égi képed', '🔭');
    var events = Fc.fastTransits(ctx.targets, from, to, ctx.cusps);
    var voc = Fc.voidOfCourse(from, to).filter(function (v) { return v.end > from && v.start < to; });
    var moonLon = norm360(HCORE.eclipticLongitude('Moon', mid));
    var moonSign = HCORE.toSign(moonLon), moonHouse = HCORE.houseOf(moonLon, ctx.cusps);
    var mp = HCORE.moonPhase(mid);
    var sc = Fc.scoreDay(events);

    item(s, fmtDay(mid, ctx.tz), bigThree(ctx) + ' · ' + ctx.place.name,
      (ctx.hasTime ? t.frame.asc.replace('%AS%', SIGN_IN[c.ascSign.key] || c.ascSign.name) : t.frame.noAsc) + ' ' + frameLine(ctx, now));

    item(s, 'A nap egy bekezdésben', '', daySummary(ctx, moonHouse, mp, events, voc, from, to));

    item(s, 'A nap mérlege', Fc.DOMAINS.map(function (k) { return t.domains[k].icon + ' ' + starsText(sc.stars[k]); }).join('  '),
      (sc.reasons.length
        ? 'Levezetés: ' + sc.reasons.map(function (r) { return t.domains[r.domain].icon + ' ' + r.event.planet.symbol + ' ' + r.event.aspect.name + ' → ' + r.event.target.name + ' ' + (r.delta > 0 ? '+' : '') + r.delta; }).join(' · ') + '. '
        : t.quiet + ' ') + t.starsNote);

    item(s, 'A Hold ma', moonSign.name + ' · ' + moonHouse + '. ház · ' + mp.symbol + ' ' + mp.name,
      t.moonHouse[moonHouse] + '. ' + (t.phase[mp.key] || '') + '.');

    if (voc.length) {
      voc.forEach(function (v) {
        item(s, 'Üresjáratú Hold', (v.start < from ? 'tegnap ' : '') + fmtTime(v.start, ctx.tz) + ' – ' + (v.end >= to ? 'holnap ' : '') + fmtTime(v.end, ctx.tz) + ' · ' + v.sign.name + ' → ' + v.nextSign.name,
          t.voc + (v.lillyException ? ' ' + t.vocLilly : ''));
      });
    } else item(s, 'Üresjáratú Hold', 'ma nincs', t.vocNone);

    events.forEach(function (ev) {
      item(s, fmtTime(ev.date, ctx.tz) + ' — ' + ev.planet.symbol + ' ' + ev.planet.name + ' ' + ev.aspect.name + ' ' + ev.target.symbol + ' ' + ev.target.name,
        ev.sign.text + (ev.house ? ' · ' + ev.house + '. ház' : ''), eventText(ctx, ev));
    });

    // a bolygók ma a házaidban
    var ph = ['sun', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'].map(function (k) {
      var body = k.charAt(0).toUpperCase() + k.slice(1);
      var lon = norm360(HCORE.eclipticLongitude(body, mid)), sg = HCORE.toSign(lon), h = HCORE.houseOf(lon, ctx.cusps);
      var retro = HCORE.dailyMotion(body, mid) < 0;
      return { k: k, sg: sg, h: h, retro: retro };
    });
    item(s, 'A bolygók ma a házaidban', ph.map(function (p) { return PLANET_HU[p.k] + (p.retro ? ' ℞' : '') + ' ' + p.sg.name + ' · ' + p.h + '. ház'; }).join(' · '),
      ph.map(function (p) { return PLANET_HU[p.k] + ' — ' + houseArticle(p.h) + ' ' + p.h + '. házadban (' + ctx.houseTitle(p.h) + '): ' + t.planetInHouse[p.k]; }).join('. ') + '.');

    // bolygóóra most
    var hrs = Fc.planetaryHours(now, ctx.place.lat, ctx.place.lon, ctx.tz);
    if (hrs && hrs.current) {
      item(s, 'Bolygóóra most', PLANET_HU[hrs.current.ruler] + '-óra (' + fmtTime(hrs.current.start, ctx.tz) + ' – ' + fmtTime(hrs.current.end, ctx.tz) + ') · ' + (t.dayRuler[hrs.dayRuler] || ''),
        t.hour[hrs.current.ruler] + '. ' + t.hourNote + ' Napkelte ' + fmtTime(hrs.sunrise, ctx.tz) + ', napnyugta ' + fmtTime(hrs.sunset, ctx.tz) + '. A mai órák: ' +
        hrs.hours.map(function (h) { return fmtTime(h.start, ctx.tz) + ' ' + PLANET_HU[h.ruler]; }).join(', ') + '. (A profil készítésének pillanatára számolva.)');
    }
    s.notes.push(t.intro);
    if (!ctx.hasTime) s.notes.push(t.noTime);
    s.notes.push(t.disclaimer);
    return s;
  }

  /** A keret: éves/havi profekció és lunáris hónap. */
  function frameLine(ctx, when) {
    var t = T(), c = ctx.chart, out = [];
    try {
      var start = (ctx.hasTime && c.ascSign) ? c.ascSign : c.planets.sun.sign;
      var age = HCORE.cal.ageAt(ctx.utc, when);
      var pr = HCORE.cal.profection(age.years, start.index);
      var signs = (global.HDATA && HDATA.western && HDATA.western.signs) || [];
      var sd = signs.filter(function (x) { return x.key === HCORE.SIGN_KEYS[pr.signIndex]; })[0];
      var lord = sd ? (sd.rulerTraditional || sd.ruler) : '?';
      var bm = ctx.input.month - 1, bd = ctx.input.day;
      var last = new Date(when.getFullYear(), bm, bd); if (last > when) last = new Date(when.getFullYear() - 1, bm, bd);
      var months = (when.getFullYear() - last.getFullYear()) * 12 + when.getMonth() - last.getMonth(); if (when.getDate() < bd) months--;
      months = Math.max(0, Math.min(11, months));
      out.push(t.frame.profection.replace('%H%', pr.house).replace('%S%', pr.sign).replace('%L%', lord).replace('%MH%', ((pr.house - 1 + months) % 12) + 1));
      if (ctx.hasTime && HCORE.activeLunarReturn) {
        var lr = HCORE.activeLunarReturn(c.planets.moon.lon, when);
        out.push(t.frame.lunar.replace('%A%', fmtDay(lr.start, ctx.tz)).replace('%B%', fmtDay(lr.end, ctx.tz)));
      }
    } catch (e) { /* keret nélkül is megy */ }
    return out.join(' · ') + (out.length ? '.' : '');
  }

  /* ---------------- A HÉT ---------------- */

  function weekEvents(ctx, from, to, s, withVoc) {
    var t = T(), Fc = F();
    var items = [];
    Fc.lunations(from, to).forEach(function (l) {
      var h = HCORE.houseOf(l.lon, ctx.cusps);
      var hit = ctx.targets.filter(function (tg) { var d = Math.abs(HCORE.angleDiff(tg.lon, l.lon)); return d <= 3 || Math.abs(d - 180) <= 3; }).map(function (tg) { return tg.name; });
      items.push({ date: l.date, label: (l.type === 'ujhold' ? '🌑 Újhold' : '🌕 Telihold') + ' — ' + fmtDay(l.date, ctx.tz), value: l.sign.text + ' · ' + h + '. ház',
        text: t.lunation[l.type].replace('%H%', houseArticle(h) + ' ' + h).replace('%D%', fmtDay(l.date, ctx.tz) + ' ' + fmtTime(l.date, ctx.tz)).replace('%T%', ctx.houseTitle(h)) + (hit.length ? t.lunation.hit.replace('%P%', hit.join(', ')) : '') });
    });
    Fc.ingresses(from, to).forEach(function (ig) {
      var h = HCORE.houseOf(ig.sign.index * 30 + 0.01, ctx.cusps);
      items.push({ date: ig.date, label: ig.planet.symbol + ' ' + ig.planet.name + ' a ' + ig.sign.name + ' jegyébe lép — ' + fmtDay(ig.date, ctx.tz), value: h + '. ház',
        text: t.ingress.replace('%P%', ig.planet.name).replace('%D%', fmtDay(ig.date, ctx.tz) + ' ' + fmtTime(ig.date, ctx.tz)).replace('%S%', ig.sign.name).replace('%H%', h).replace('%M%', t.ingressMeaning[ig.planet.key] || '') + '.' });
    });
    Fc.stations(from, to).forEach(function (st) {
      var h = HCORE.houseOf(st.lon, ctx.cusps);
      items.push({ date: st.date, label: st.planet.symbol + ' ' + st.planet.name + (st.toRetro ? ' retrográdba fordul' : ' direktbe fordul') + ' — ' + fmtDay(st.date, ctx.tz), value: st.sign.text + ' · ' + h + '. ház',
        text: (st.toRetro ? t.station.retro : t.station.direct).replace('%P%', st.planet.name).replace('%D%', fmtDay(st.date, ctx.tz) + ' ' + fmtTime(st.date, ctx.tz)).replace('%S%', st.sign.text).replace('%H%', h) });
    });
    if (withVoc) {
      Fc.voidOfCourse(from, to).forEach(function (v) {
        items.push({ date: v.start, label: 'Üresjáratú Hold — ' + fmtDay(v.start, ctx.tz), value: fmtTime(v.start, ctx.tz) + ' – ' + fmtDay(v.end, ctx.tz) + ' ' + fmtTime(v.end, ctx.tz) + ' · ' + v.sign.name + ' → ' + v.nextSign.name, text: t.voc });
      });
    }
    items.sort(function (a, b) { return a.date - b.date; });
    items.forEach(function (it) { item(s, it.label, it.value, it.text); });
    return items.length;
  }

  function buildWeek(ctx) {
    var t = T(), Fc = F(), now = ctx.now;
    var lp = localParts(now, ctx.tz);
    var from = dayStart(lp.y, lp.m, lp.d, ctx.tz), to = new Date(from.getTime() + 7 * DAY);
    var s = section('elore-het', 'A hét — napról napra', '🔭');
    var events = Fc.fastTransits(ctx.targets, from, to, ctx.cusps);
    var days = [];
    for (var i = 0; i < 7; i++) {
      var f = new Date(from.getTime() + i * DAY), e = new Date(f.getTime() + DAY), mid = new Date(f.getTime() + 12 * H);
      var evs = events.filter(function (x) { return x.date >= f && x.date < e; });
      var sc = Fc.scoreDay(evs), total = 0;
      Fc.DOMAINS.forEach(function (k) { total += sc.score[k]; });
      var ml = norm360(HCORE.eclipticLongitude('Moon', mid));
      days.push({ mid: mid, evs: evs, sc: sc, total: total, moon: HCORE.toSign(ml), moonHouse: HCORE.houseOf(ml, ctx.cusps) });
    }
    var best = days.reduce(function (a, b) { return b.total > a.total ? b : a; }, days[0]);
    var worst = days.reduce(function (a, b) { return b.total < a.total ? b : a; }, days[0]);
    days.forEach(function (d, i) {
      var tag = d === best && d.total > 0 ? ' · a hét legjobb napja' : d === worst && d.total < 0 ? ' · a hét legnehezebb napja' : '';
      item(s, (i === 0 ? 'Ma — ' : '') + fmtDay(d.mid, ctx.tz) + tag,
        Fc.DOMAINS.map(function (k) { return t.domains[k].icon + starsText(d.sc.stars[k]); }).join(' ') + ' · ☽ ' + d.moon.name + ' ' + d.moonHouse + '. ház',
        (d.evs.length ? d.evs.map(function (ev) { return shortEvent(ctx, ev); }).join(' · ') + '. ' +
          eventText(ctx, d.evs.slice().sort(function (a, b) { return (b.planet.key === 'moon' ? 1 : 2) - (a.planet.key === 'moon' ? 1 : 2); })[0]).replace(/ \(Az égen.*\)$/, '') : t.quiet) +
        ' ' + t.moonHouse[d.moonHouse] + '.');
    });
    weekEvents(ctx, from, to, s, true);
    s.notes.push(t.starsNote);
    s.notes.push(t.disclaimer);
    return s;
  }

  /* ---------------- A HÓNAP ---------------- */

  function buildMonth(ctx) {
    var t = T(), Fc = F(), now = ctx.now;
    var lp = localParts(now, ctx.tz);
    var from = dayStart(lp.y, lp.m, lp.d, ctx.tz), to = new Date(from.getTime() + 30 * DAY);
    var s = section('elore-honap', 'A hónap — a következő 30 nap', '🔭');
    item(s, fmtDay(from, ctx.tz) + ' – ' + fmtDay(new Date(to.getTime() - DAY), ctx.tz), bigThree(ctx), frameLine(ctx, now));

    // kiemelt napok: a Nap–Mars pontos érintései a képletre, súly szerint
    var noMoon = ctx.targets;
    var events = Fc.fastTransits(noMoon, from, to, ctx.cusps).filter(function (e) { return e.planet.key !== 'moon'; });
    var W = { sun: 2, mercury: 1.5, venus: 2, mars: 2 }, TW = { sun: 2, moon: 2, asc: 2, mc: 2, venus: 1.5, mars: 1.5, saturn: 1.5 };
    events.forEach(function (e) { e.weight = (W[e.planet.key] || 1) * (TW[e.target.key] || 1) * (e.aspect.quality === 'soft' ? 1 : 1.2); });
    var top = events.slice().sort(function (a, b) { return b.weight - a.weight; }).slice(0, 8).sort(function (a, b) { return a.date - b.date; });
    top.forEach(function (ev) {
      item(s, fmtDay(ev.date, ctx.tz) + ' — ' + ev.planet.symbol + ' ' + ev.planet.name + ' ' + ev.aspect.name + ' ' + ev.target.symbol + ' ' + ev.target.name,
        ev.sign.text + (ev.house ? ' · ' + ev.house + '. ház' : ''), eventText(ctx, ev));
    });
    if (!top.length) item(s, 'Kiemelt napok', '', 'A következő 30 napban nincs pontos gyors-bolygó érintés a képleted fő pontjaira.');

    weekEvents(ctx, from, to, s, false);

    // a bolygók a hónap elején és végén
    var moves = ['sun', 'mercury', 'venus', 'mars'].map(function (k) {
      var body = k.charAt(0).toUpperCase() + k.slice(1);
      var h1 = HCORE.houseOf(norm360(HCORE.eclipticLongitude(body, from)), ctx.cusps), h2 = HCORE.houseOf(norm360(HCORE.eclipticLongitude(body, to)), ctx.cusps);
      return PLANET_HU[k] + ': ' + h1 + '. ház' + (h2 !== h1 ? ' → ' + h2 + '. ház' : '');
    });
    item(s, 'A gyors bolygók útja a házaidban', moves.join(' · '),
      ['sun', 'mercury', 'venus', 'mars'].map(function (k) { return PLANET_HU[k] + ': ' + t.planetInHouse[k]; }).join('. ') + '.');
    s.notes.push('A hónap listája a Nap, a Merkúr, a Vénusz és a Mars pontos érintéseiből a nyolc legsúlyosabbat mutatja (a bolygó és a célpont súlya szerint); a Hold napi érintései a heti nézetben vannak.');
    s.notes.push(t.disclaimer);
    return s;
  }

  /* ---------------- AZ ÉV ---------------- */

  function buildYear(ctx) {
    var t = T(), Fc = F(), now = ctx.now, c = ctx.chart;
    var lp = localParts(now, ctx.tz);
    var from = dayStart(lp.y, lp.m, 1, ctx.tz), to = new Date(from.getTime() + 366 * DAY);
    var s = section('elore-ev', 'Az év — hónapról hónapra', '🔭');
    var lastMonth = new Date(from.getTime()); lastMonth.setUTCMonth(from.getUTCMonth() + 11); lastMonth = new Date(lastMonth.getTime() + 10 * DAY);
    item(s, fmtMonth(from, ctx.tz) + ' – ' + fmtMonth(lastMonth, ctx.tz), bigThree(ctx), frameLine(ctx, now) +
      ' Az éves keret részletei a „Hol tartasz most" (profekció, lunáris hónap), az „Éves égi képed" (szolár, progressziók, szoláris ív), a „Tranzitok" és a „Fogyatkozások" szekciókban.');

    var luns = Fc.lunations(from, to), ings = Fc.ingresses(from, to), sts = Fc.stations(from, to);
    // lassú tranzitok az évben (a meglévő kereső, 1 év)
    var slow = [];
    try {
      var tg = ctx.targets.filter(function (x) { return ['sun', 'moon', 'mercury', 'venus', 'mars', 'asc', 'mc'].indexOf(x.key) >= 0; });
      slow = HCORE.findTransits ? HCORE.findTransits(tg, from, 1.02) : [];
    } catch (e) { slow = []; }

    // Merkúr retrográd időszakok
    var merc = sts.filter(function (x) { return x.planet.key === 'mercury'; });
    var periods = [];
    for (var i = 0; i < merc.length; i++) {
      if (merc[i].toRetro) {
        var end = merc[i + 1] && !merc[i + 1].toRetro ? merc[i + 1] : null;
        periods.push(fmtDay(merc[i].date, ctx.tz) + ' – ' + (end ? fmtDay(end.date, ctx.tz) : '…') + ' (' + merc[i].sign.name + ', ' + HCORE.houseOf(merc[i].lon, ctx.cusps) + '. ház)');
      }
    }
    if (periods.length) item(s, 'Merkúr retrográd az évben', periods.join(' · '), t.mercuryRetroYear);

    // havi tábla
    var rows = [];
    for (var m = 0; m < 12; m++) {
      var mStart = new Date(from.getTime()); mStart.setUTCMonth(from.getUTCMonth() + m);
      var mEnd = new Date(from.getTime()); mEnd.setUTCMonth(from.getUTCMonth() + m + 1);
      var mid = new Date((mStart.getTime() + mEnd.getTime()) / 2);
      var sunH = HCORE.houseOf(norm360(HCORE.eclipticLongitude('Sun', mid)), ctx.cusps);
      var nm = luns.filter(function (l) { return l.type === 'ujhold' && l.date >= mStart && l.date < mEnd; }).map(function (l) { return HCORE.houseOf(l.lon, ctx.cusps) + '. ház'; }).join(', ') || '–';
      var fm = luns.filter(function (l) { return l.type === 'telihold' && l.date >= mStart && l.date < mEnd; }).map(function (l) { return HCORE.houseOf(l.lon, ctx.cusps) + '. ház'; }).join(', ') || '–';
      var sl = slow.filter(function (ev) { return ev.dates.some(function (d) { return d >= mStart && d < mEnd; }); })
        .map(function (ev) { return ev.planet.symbol + ' ' + (ev.aspect.key === 'conjunction' ? '☌' : ev.aspect.key === 'opposition' ? '☍' : ev.aspect.key === 'square' ? '□' : '△') + ' ' + ev.target.name; });
      var ev2 = ings.filter(function (x) { return x.date >= mStart && x.date < mEnd && x.planet.key === 'mars'; }).map(function (x) { return '♂ → ' + HCORE.houseOf(x.sign.index * 30 + 0.01, ctx.cusps) + '. ház'; });
      var st2 = sts.filter(function (x) { return x.date >= mStart && x.date < mEnd; }).map(function (x) { return x.planet.symbol + (x.toRetro ? ' ℞' : ' D'); });
      rows.push({ hl: m === 0, cells: [fmtMonth(mid, ctx.tz), sunH + '. ház', nm, fm, sl.concat(ev2, st2).join(', ') || '–'] });
    }
    s.table = { type: 'generic', head: ['Hónap', 'A Nap háza', 'Újhold', 'Telihold', 'Lassú tranzit, Mars-ingresszus, állomás'],
      rows: rows, note: 'A Nap háza: hol kér figyelmet az élet abban a hónapban; az újhold háza: hol indul valami; a telihold háza: hol ér csúcsra. A lassú tranzitok a „Tranzitok" szekció pontos dátumai; ☌ együttállás, ☍ szembenállás, □ kvadrát, △ trigon; ℞ retrográd forduló, D direkt forduló.' };
    s.notes.push('Az éves kép a hagyomány rétegeit rakja egymásra: a profekció adja az év témáját, a szolár a hangnemét, a lassú tranzitok a nagy eseményeket, a lunációk a havi indulásokat és csúcsokat.');
    s.notes.push(t.disclaimer);
    return s;
  }

  HCORE.forecastSections = function (out) {
    if (!T() || !F() || !out || !out.chart) return [];
    var ctx = context(out);
    return [buildToday(ctx), buildWeek(ctx), buildMonth(ctx), buildYear(ctx)];
  };

})(typeof window !== 'undefined' ? window : globalThis);
