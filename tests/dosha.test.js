/* Nedvek (dosha) — docs/26: a nádi busztrofedon-táblája és a bolygó→nedv tábla. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const DS = app.HCORE.dosha, D = app.HDATA.dosha;

  test('a 27 nakshatra nádija a hagyományos táblát adja (Ashwini ādya, Bharani madhya, Krittika antya, Rohini antya, …)', () => {
    // az ismert tábla 6-os periódusú: ādya, madhya, antya, antya, madhya, ādya
    const first = [DS.nadiOf(0), DS.nadiOf(1), DS.nadiOf(2)].map(x => JSON.stringify(x));
    assert.notStrictEqual(first[0], first[1]);
    assert.notStrictEqual(first[1], first[2]);
    assert.notStrictEqual(first[0], first[2]);
    for (let i = 0; i < 27; i++) {
      const pattern = [0, 1, 2, 2, 1, 0][i % 6];
      assert.strictEqual(JSON.stringify(DS.nadiOf(i)), first[pattern], 'nakshatra ' + i);
    }
  });

  test('a bolygó→nedv tábla: Merkúr tridoshás, Nap/Mars pitta, Hold/Vénusz kapha, Szaturnusz váta (BPHS 3.23–30)', () => {
    const P = D.planets || D.planetDosha || D.grahaDosha;
    assert.ok(P, 'nincs bolygótábla');
    const get = k => { const v = P[k]; return Array.isArray(v) ? v.join('+') : (typeof v === 'string' ? v : JSON.stringify(v)); };
    assert.ok(/pitta/i.test(get('sun')), 'Nap');
    assert.ok(/pitta/i.test(get('mars')), 'Mars');
    assert.ok(/kapha/i.test(get('moon')), 'Hold');
    assert.ok(/kapha/i.test(get('venus')), 'Vénusz');
    assert.ok(/vata|váta/i.test(get('saturn')), 'Szaturnusz');
    const m = get('mercury');
    assert.ok(/vata|váta/i.test(m) && /pitta/i.test(m) && /kapha/i.test(m), 'Merkúr tridoshás: ' + m);
  });
};
