/* Gene Keys — az adattábla teljessége és a kerékből származtatott partnerek (docs/22). */
'use strict';
module.exports = ({ test, assert, app }) => {
  const GK = app.HDATA.genekeys, HD = app.HCORE.humanDesign;

  test('mind a 64 kulcsnak van árnyék / ajándék / sziddhi címkéje', () => {
    for (let g = 1; g <= 64; g++) {
      const k = GK.keys[g];
      assert.ok(k && k.shadow && k.gift && k.siddhi, 'kulcs ' + g);
    }
  });

  test('mind a 64 kulcsnak van részletes leírása (árnyék-, ajándék-, sziddhi-szöveg)', () => {
    for (let g = 1; g <= 64; g++) {
      const d = GK.details[g];
      assert.ok(d && d.shadowText && d.giftText && d.siddhiText, 'részletek ' + g);
    }
  });

  test('a 3 szekvencia együtt 11 szférát ad, mindegyik bolygóhoz és képlethez (p/d) kötve', () => {
    const spheres = [].concat(...GK.sequences.map(s => s.spheres));
    assert.strictEqual(spheres.length, 13);                       // 13 szféra, ebből 2 dokumentált átfedés
    assert.strictEqual(spheres.filter(s => !s.sameAs).length, 11);
    spheres.forEach(s => assert.ok(s.body && (s.chart === 'p' || s.chart === 'd'), s.key));
  });

  test('programozó partnerek a kerékből: 1↔2 és 7↔13 (a hivatalos példák), GK58-nak nincs elfojtó pólusa', () => {
    assert.strictEqual(HD.partnerOf(1), 2);
    assert.strictEqual(HD.partnerOf(7), 13);
    assert.ok(!GK.details[58].repressive || GK.details[58].repressiveNote, 'GK58 elfojtó pólus');
  });

  test('6 vonal-leírás van', () => {
    for (let l = 1; l <= 6; l++) assert.ok(GK.lines[l] && GK.lines[l].name, 'vonal ' + l);
  });
};
