/* Zodiacal releasing, fogyatkozások, lunáris visszatérés — docs/31. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE;

  test('a jegyek évei: Kos 15 … Bak 27, Vízöntő 30; a teljes kör 211 év', () => {
    const Y = H.releasingSignYears;
    assert.strictEqual(JSON.stringify(Array.from(Y)), JSON.stringify([15, 8, 20, 25, 19, 20, 8, 15, 12, 27, 30, 12]));
    assert.strictEqual(Y.reduce((a, b) => a + b, 0), 211);
  });

  test('releasing: az 1. szint a kiinduló jegyből indul 360 napos évekkel, a 2. szint a fejezet jegyéből', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const R = H.releasing(11, 8, b, new Date(Date.UTC(2026, 8, 8)));   // Halak Szellem, Nyilas Fortuna
    assert.strictEqual(R.L1[0].sign, 11);
    assert.ok(Math.abs((R.L1[0].end - R.L1[0].start) / 86400000 - 12 * 360) < 1e-6);
    assert.strictEqual(R.L1[1].sign, 0);
    assert.strictEqual(R.current.sign, 2);                     // Ikrek-fejezet 2023–2043
    assert.strictEqual(R.L2[0].sign, R.current.sign);
    assert.ok(Math.abs((R.L2[0].end - R.L2[0].start) / 86400000 - 20 * 30) < 1e-6);
  });

  test('a kötés elengedése: a 2. szint a fejezet jegyéhez visszaérve a szemközti jegybe ugrik (Ikrek → Nyilas), 17,6 év után', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const R = H.releasing(11, 8, b, new Date(Date.UTC(2026, 8, 8)));
    const lb = R.L2.filter(p => p.lb)[0];
    assert.ok(lb, 'nincs kötés-elengedés az Ikrek-fejezetben');
    assert.strictEqual(lb.sign, 8);
    const years = (lb.start - R.current.start) / (360 * 86400000);
    assert.ok(Math.abs(years - 211 / 12) < 0.01, 'évek: ' + years);
  });

  test('csúcsidőszak: a Fortunától számolt 1/4/7/10. hely', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const R = H.releasing(11, 8, b, new Date(Date.UTC(2026, 8, 8)));
    R.L1.forEach(p => {
      const d = (p.sign - 8 + 12) % 12;
      const exp = d === 0 ? 1 : d === 3 ? 4 : d === 6 ? 7 : d === 9 ? 10 : 0;
      assert.strictEqual(p.peak, exp, 'jegy ' + p.sign);
    });
  });

  test('prenatális fogyatkozások 1989-03-15-re: részleges napfogyatkozás 1989-03-07, teljes holdfogyatkozás 1989-02-20', () => {
    const pe = H.prenatalEclipses(new Date(Date.UTC(1989, 2, 15, 10)));
    assert.strictEqual(pe.solar.date.toISOString().slice(0, 10), '1989-03-07');
    assert.strictEqual(pe.solar.kind, 'partial');
    assert.strictEqual(pe.lunar.date.toISOString().slice(0, 10), '1989-02-20');
    assert.strictEqual(pe.lunar.kind, 'total');
    assert.ok(Math.abs(pe.solar.lon - 347.2) < 0.3);   // 17° Halak
  });

  test('fogyatkozások egy évben: 4–7 darab, időrendben, a fok a Nap (nap-) ill. a Hold (holdfogyatkozás) helye', () => {
    const from = new Date(Date.UTC(2027, 0, 1)), to = new Date(Date.UTC(2028, 0, 1));
    const list = H.eclipsesBetween(from, to);
    assert.ok(list.length >= 4 && list.length <= 7, 'darab: ' + list.length);
    for (let i = 1; i < list.length; i++) assert.ok(list[i].date >= list[i - 1].date);
    list.forEach(e => {
      const sun = H.norm360(H.eclipticLongitude('Sun', e.date)), moon = H.norm360(H.eclipticLongitude('Moon', e.date));
      const ref = e.type === 'solar' ? sun : moon;
      assert.ok(Math.abs(H.angleDiff(e.lon, ref)) < 0.01);
      if (e.type === 'lunar') assert.ok(Math.abs(Math.abs(H.angleDiff(sun, moon)) - 180) < 1.5);
    });
  });

  test('lunáris visszatérés: a Hold a natális fokán, a hónap 27–28 nap, a kezdet ≤ most < vég', () => {
    const natal = 96.8, now = new Date(Date.UTC(2026, 8, 8, 12));
    const lr = H.activeLunarReturn(natal, now);
    assert.ok(lr.start <= now && now < lr.end);
    assert.ok(Math.abs(H.angleDiff(H.eclipticLongitude('Moon', lr.start), natal)) < 0.001);
    const days = (lr.end - lr.start) / 86400000;
    assert.ok(days > 26.8 && days < 28, 'napok: ' + days);
  });
};
