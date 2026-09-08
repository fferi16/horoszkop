/* Asztrokartográfia, szoláris ív, félpontok, azték tonalpohualli — docs/32. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE, L = H.locational, C = H.cal;

  test('azték: Tenochtitlan eleste (1521-08-13 jul. = 08-23 greg.) = 1 Coatl; 2026-09-08 = 8 Atl (azteccalendar.com)', () => {
    assert.strictEqual(L.aztec(C.jdn(1521, 8, 23)).label, '1 Coatl');
    assert.strictEqual(L.aztec(C.jdn(2026, 9, 8)).label, '8 Atl');
  });

  test('azték = maja Tzolkin ugyanazzal a számlálással (szám és jegyindex azonos), 9 Éjszaka Ura ciklikusan', () => {
    for (let d = 0; d < 300; d += 37) {
      const jd = C.jdn(1990, 1, 1) + d;
      const a = L.aztec(jd), t = C.tzolkin(1990, 1, 1 + d);
      assert.strictEqual(a.number, t.number);
      assert.strictEqual(a.signIndex, t.signIndex);
    }
    const l0 = L.aztec(C.jdn(2000, 1, 1)).lordIndex, l9 = L.aztec(C.jdn(2000, 1, 10)).lordIndex;
    assert.strictEqual(l0, l9);
    assert.strictEqual(L.aztec(C.jdn(2000, 1, 2)).lordIndex, (l0 + 1) % 9);
  });

  test('félpont: a 0°/360° határon át is a közelebbi középpont (350° és 10° → 0°)', () => {
    assert.ok(Math.abs(H.norm360(L.midpoint(350, 10))) < 1e-9);
    assert.ok(Math.abs(L.midpoint(10, 350)) < 1e-9);
    assert.ok(Math.abs(L.midpoint(100, 140) - 120) < 1e-9);
  });

  test('bolygókép: a félpontra (és 90°-ra) álló bolygót megtalálja, a párt alkotókat nem sorolja magára', () => {
    const pairs = [{ key: 'a', name: 'A', lon: 100 }, { key: 'b', name: 'B', lon: 140 }];
    const bodies = [{ key: 'x', name: 'X', lon: 120.5 }, { key: 'y', name: 'Y', lon: 210.2 }, { key: 'z', name: 'Z', lon: 170 }, { key: 'a', name: 'A', lon: 100 }];
    const pics = L.midpointPictures(pairs, bodies, 1.5);
    const keys = pics.map(p => p.body.key).sort();
    assert.strictEqual(JSON.stringify(keys), JSON.stringify(['x', 'y']));
    assert.strictEqual(pics[0].body.key, 'y');            // a szorosabb (0,2°) elöl
    assert.strictEqual(pics.filter(p => p.body.key === 'x')[0].direct, true);
    assert.strictEqual(pics.filter(p => p.body.key === 'y')[0].direct, false);
  });

  test('asztrokartográfia: MC és IC 180°-ra; a kelő és nyugvó vonal az MC-re szimmetrikus (dec = 0-nál ±90°)', () => {
    const date = new Date(Date.UTC(1989, 2, 15, 10));
    const eps = H.obliquity(date);
    const pl = L.planetLines({ lon: 0, lat: 0 }, date);             // 0° Kos: RA 0, dec 0
    assert.ok(Math.abs(Math.abs(pl.mc - pl.ic) - 180) < 1e-9);
    assert.ok(Math.abs(pl.dec) < 1e-9 && Math.abs(pl.ra) < 1e-9);
    const r = pl.rise(47.5), s = pl.set(47.5);
    assert.ok(Math.abs(H.norm360(pl.mc - r) - 90) < 1e-6, 'kelő: ' + r);
    assert.ok(Math.abs(H.norm360(s - pl.mc) - 90) < 1e-6, 'nyugvó: ' + s);
    assert.strictEqual(L.planetLines({ lon: 90, lat: 0 }, date).rise(75), null);  // 23,4° deklináció 75°-on cirkumpoláris
  });

  test('asztrokartográfia: a Nap MC-vonala a születési hely közelében, ha délben született', () => {
    const utc = H.localToUTC(1989, 6, 15, 12, 50, 'Europe/Budapest');   // nyári idő: a valódi dél Budapesten ~12:50
    const sun = { lon: H.eclipticLongitude('Sun', utc), lat: 0 };
    const pl = L.planetLines(sun, utc);
    assert.ok(Math.abs(pl.mc - 19.04) < 3, 'Nap-MC hosszúság: ' + pl.mc);
    const hits = L.cityHits([{ key: 'sun', name: 'Nap', lon: sun.lon, lat: 0 }], utc, [['Budapest', 47.4979, 19.0402]], 4);
    assert.strictEqual(hits[0].lines.MC[0].city, 'Budapest');
  });

  test('szoláris ív: az ív ≈ életkor fokban, az érintések az ablakon belül és időrendben', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10)), now = new Date(Date.UTC(2026, 8, 8));
    const pts = [{ key: 'sun', name: 'Nap', lon: 354 }, { key: 'moon', name: 'Hold', lon: 96.8 }, { key: 'asc', name: 'Asc', lon: 99 }];
    const r = L.solarArcHits(pts, pts, b, now, 5);
    assert.ok(Math.abs(r.arc - 37.5) < 1.5, 'ív: ' + r.arc);
    assert.ok(r.rate > 0.9 && r.rate < 1.1);
    r.hits.forEach(h => assert.ok(h.delta >= -1 && h.delta <= 5));
    for (let i = 1; i < r.hits.length; i++) assert.ok(r.hits[i].date >= r.hits[i - 1].date);
  });

  test('Chiron-ciklus: 1989-03-15-re a visszatérés 49–51 éves kor között', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const natal = H.extras.asteroids(b).filter(a => a.key === 'chiron')[0].lon;
    const cyc = L.chironCycle(natal, b, 60);
    const ret = cyc.filter(e => e.aspect === 360)[0];
    assert.ok(ret, 'nincs visszatérés');
    assert.ok(ret.age > 48.5 && ret.age < 51.5, 'életkor: ' + ret.age);
  });
};
