/* Sorsrészek és firdaria — docs/23 (Greenbaum-példa) és docs/24. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const E = app.HCORE.lots, N = app.HCORE.norm360;

  test('Greenbaum nappali példája: Asc 215°, Nap 112°, Hold 144° → Fortuna 7° Nyilas, Szellem 3° Mérleg', () => {
    assert.strictEqual(E.isDayBirth(112, 215), true);
    const L = E.compute({ sun: 112, moon: 144, mercury: 100, venus: 90, mars: 80, jupiter: 70, saturn: 60 }, 215, true);
    assert.strictEqual(Math.round(L.fortune), 247);
    assert.strictEqual(Math.round(L.spirit), 183);
  });

  test('éjszakai képletben a Fortuna és a Szellem helyet cserél', () => {
    const p = { sun: 112, moon: 144, mercury: 100, venus: 90, mars: 80, jupiter: 70, saturn: 60 };
    const d = E.compute(p, 215, true), n = E.compute(p, 215, false);
    assert.ok(Math.abs(N(d.fortune) - N(n.spirit)) < 1e-9);
    assert.ok(Math.abs(N(d.spirit) - N(n.fortune)) < 1e-9);
  });

  test('a szekta: a Nap az Aszcendens alatt (norm(sun−asc) ≤ 180) éjszakai', () => {
    assert.strictEqual(E.isDayBirth(300, 215), false);   // 85° az Asc után → a horizont alatt
    assert.strictEqual(E.isDayBirth(100, 215), true);
  });

  test('Basis: az Aszcendenstől a Fortuna–Szellem rövidebb íve', () => {
    const L = E.compute({ sun: 112, moon: 144, mercury: 100, venus: 90, mars: 80, jupiter: 70, saturn: 60 }, 215, true);
    const arc = Math.min(N(L.spirit - L.fortune), N(L.fortune - L.spirit));
    assert.ok(Math.abs(N(L.basis - 215) - arc) < 1e-9);
  });

  test('firdaria: a fő időszakok 75 évet adnak ki; nappal a Nap, éjjel a Hold kezd', () => {
    const day = E.firdariaSequence(true), night = E.firdariaSequence(false);
    const Y = app.HDATA.firdaria.years;
    const sum = seq => seq.reduce((a, k) => a + (Y[k] || 0), 0);
    assert.strictEqual(sum(day), 75);
    assert.strictEqual(sum(night), 75);
    assert.strictEqual(day[0], 'sun');
    assert.strictEqual(night[0], 'moon');
  });

  test('firdaria: 37 évesen a nappali sorozat a Hold-időszakban jár (Nap 10 + Vénusz 8 + Merkúr 13 = 31 → Hold 31–40)', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const f = E.firdaria(b, new Date(Date.UTC(2026, 8, 8)), true);
    assert.ok(f && f.lord, 'nincs firdaria');
    assert.strictEqual(f.lord, 'moon');
    assert.strictEqual(f.startAge, 31);
    assert.strictEqual(f.endAge, 40);
  });
};
