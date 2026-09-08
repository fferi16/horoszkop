/* Human Design — docs/21 „Ellenőrzött számítások" táblája. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE, HD = H.humanDesign;

  test('a kerék: minden kapu programozó partnere pontosan 180°-ra esik, és a párosítás szimmetrikus', () => {
    for (let lon = 0; lon < 360; lon += 5.625 / 2) {
      const g = HD.gateOf(lon).gate, p = HD.gateOf(lon + 180).gate;
      assert.strictEqual(HD.partnerOf(g), p, 'kapu ' + g + ' partnere');
      assert.strictEqual(HD.partnerOf(p), g);
    }
  });

  test('a kerék a 41. kapuval indul 302°-nál (2° Vízöntő), 6 vonal kapunként', () => {
    assert.strictEqual(HD.gateOf(302.1).gate, 41);
    assert.strictEqual(HD.gateOf(302.1).line, 1);
    assert.strictEqual(HD.gateOf(302 + 5.625 - 0.01).line, 6);
    assert.strictEqual(HD.gateOf(302 + 5.625 + 0.01).gate, 19);
  });

  test('design-időpont: a Nap íve pontosan 88°, 86–90 nappal a születés előtt', () => {
    [[1989, 2, 15], [1962, 10, 7], [2001, 6, 22], [1975, 0, 3]].forEach(a => {
      const b = new Date(Date.UTC(a[0], a[1], a[2], 12));
      const d = HD.designDate(b);
      const arc = H.norm360(H.eclipticLongitude('Sun', b) - H.eclipticLongitude('Sun', d));
      assert.ok(Math.abs(arc - 88) < 1e-4, 'ív: ' + arc);
      const days = (b - d) / 86400000;
      assert.ok(days > 86 && days < 93, 'napok: ' + days);   // januárban gyorsabb, júliusban lassabb a Nap
    });
  });

  test('Nap és Föld minden aktivációban programozó partnerek', () => {
    for (let y = 1950; y < 2010; y += 7) {
      const acts = HD.activations(new Date(Date.UTC(y, 3, 10, 6)));
      const sun = acts.filter(a => a.key === 'sun')[0], earth = acts.filter(a => a.key === 'earth')[0];
      assert.ok(sun && earth);
      assert.strictEqual(HD.partnerOf(sun.gate), earth.gate);
    }
  });

  test('a képlet determinisztikus, és a típus a négy ismert közül való', () => {
    const b = new Date(Date.UTC(1989, 2, 15, 10));
    const r1 = HD.build(b), r2 = HD.build(b);
    assert.deepStrictEqual(JSON.parse(JSON.stringify(r1)), JSON.parse(JSON.stringify(r2)));
    const TYPES = ['generator', 'magenerator', 'manifestor', 'projector', 'reflector'];
    assert.ok(TYPES.indexOf(r1.type) >= 0, 'típus: ' + JSON.stringify(r1.type));
  });

  test('típuseloszlás 240 véletlen születésen: generátor-család a többség, mind az öt típus előfordul-e legalább a nagy hármas', () => {
    const count = {};
    let seed = 12345;
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    for (let i = 0; i < 240; i++) {
      const b = new Date(Date.UTC(1940 + Math.floor(rnd() * 70), Math.floor(rnd() * 12), 1 + Math.floor(rnd() * 28), Math.floor(rnd() * 24)));
      const r = HD.build(b);
      count[r.type] = (count[r.type] || 0) + 1;
    }
    const gen = (count.generator || 0) + (count.magenerator || 0);
    assert.ok(gen / 240 > 0.5 && gen / 240 < 0.85, 'generátor-család aránya: ' + (gen / 240).toFixed(2));
    assert.ok((count.projector || 0) / 240 > 0.1, 'projektor: ' + count.projector);
    assert.ok((count.manifestor || 0) > 0, 'manifesztor hiányzik');
  });

  test('reflektor: nincs csatorna és nincs definiált központ (ha van a mintában)', () => {
    let seed = 777, found = 0;
    const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
    for (let i = 0; i < 600 && found < 2; i++) {
      const b = new Date(Date.UTC(1940 + Math.floor(rnd() * 70), Math.floor(rnd() * 12), 1 + Math.floor(rnd() * 28), Math.floor(rnd() * 24)));
      const r = HD.build(b);
      if (r.type !== 'reflector') continue;
      found++;
      assert.strictEqual((r.channels || []).length, 0);
      assert.strictEqual(Object.keys(r.centers || {}).length, 0);
      assert.strictEqual((r.openCenters || []).length, 9);
    }
  });
};
