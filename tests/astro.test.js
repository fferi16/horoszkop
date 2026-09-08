/* Csillagászati alapok: jegyek, házak, holdfázis-kulcsok, szolár visszatérés. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE, D = app.HDATA;

  test('toSign: 0° = Kos, 359,9° = Halak, 29° Bika fokjegy', () => {
    assert.strictEqual(H.toSign(0).key, 'kos');
    assert.strictEqual(H.toSign(359.9).key, 'halak');
    assert.strictEqual(H.toSign(59.5).degreeInt, 29);
  });

  test('angleDiff a 0°/360° határon át is a rövidebb ívet adja', () => {
    assert.ok(Math.abs(Math.abs(H.angleDiff(350, 10)) - 20) < 1e-9);
    assert.ok(Math.abs(Math.abs(H.angleDiff(10, 350)) - 20) < 1e-9);
  });

  test('houseOf egyenlő házakkal: 45° a 2. házba esik', () => {
    const cusps = [null]; for (let i = 1; i <= 12; i++) cusps.push((i - 1) * 30);
    assert.strictEqual(H.houseOf(45, cusps), 2);
    assert.strictEqual(H.houseOf(359, cusps), 12);
  });

  test('a holdfázis-kulcsok (astro.js) és a holdnaptár-szövegek (chrono.js) kulcsai azonosak', () => {
    // regresszió: 2026-09-08-ig kötőjeles vs. aláhúzásos kulcsok miatt üres volt a születési holdfázis szövege
    const astroKeys = H.PHASE_NAMES.map(p => p.key).sort();
    const dataKeys = D.chrono.moon.phases.map(p => p.key).sort();
    assert.strictEqual(JSON.stringify(astroKeys), JSON.stringify(dataKeys));
    assert.strictEqual(JSON.stringify(Object.keys(D.annual.phases).sort()), JSON.stringify(astroKeys));
  });

  test('moonPhase: 1989-03-15 első negyed, növekvő, ~8,4 napos', () => {
    const mp = H.moonPhase(new Date(Date.UTC(1989, 2, 15, 10)));
    assert.strictEqual(mp.key, 'elso_negyed');
    assert.ok(mp.waxing);
    assert.ok(Math.abs(mp.age - 8.4) < 0.3);
  });

  test('szolár visszatérés a születésnap ±1,5 napján belül, a Nap foka egyezik', () => {
    const birth = new Date(Date.UTC(1989, 2, 15, 10));
    const sunLon = H.eclipticLongitude('Sun', birth);
    const sr = H.activeSolarReturn(sunLon, birth, new Date(Date.UTC(2026, 8, 8)));
    assert.strictEqual(sr.start.getUTCMonth(), 2);
    assert.ok(Math.abs(sr.start.getUTCDate() - 15) <= 1);
    assert.ok(Math.abs(H.angleDiff(H.eclipticLongitude('Sun', sr.start), sunLon)) < 0.001);
    assert.ok(Math.abs((sr.end - sr.start) / 86400000 - 365.25) < 0.5);
  });

  test('képlet: ASC és MC 90° körül különbözik (Budapest, 1989-03-15 11:00), Nap a 10. házban', () => {
    const utc = H.localToUTC(1989, 3, 15, 11, 0, 'Europe/Budapest');
    const c = H.chart({ date: utc, lat: 47.4979, lon: 19.0402, system: 'placidus', withHouses: true });
    assert.strictEqual(c.ascSign.key, 'rak');
    assert.strictEqual(c.mcSign.key, 'halak');
    assert.strictEqual(c.planets.sun.house, 10);
    const d = Math.abs(H.angleDiff(c.houses.asc, c.houses.mc));
    assert.ok(d > 60 && d < 120, 'ASC–MC szög: ' + d);
  });
};
