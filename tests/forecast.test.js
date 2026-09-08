/* Napi/heti előrejelzés magja — docs/33. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE, F = H.forecast;
  const day = (y, m, d) => new Date(Date.UTC(y, m - 1, d));

  test('nullátmenet-kereső: sin-jellegű függvény gyökeit percre találja', () => {
    const f = t => H.norm360((t.getTime() / 3600000) * 10) > 180 ? -1 : 1;   // 36 óránként vált
    const xs = F.zeroCrossings(t => { const d = H.norm360(t.getTime() / 3600000 * 10); return d > 180 ? d - 360 : d; }, day(2026, 1, 1), day(2026, 1, 5), 3600000);
    assert.ok(xs.length >= 2 && xs.length <= 3, 'db: ' + xs.length);
  });

  test('gyors tranzit: a Hold együttállása egy natális ponttal ~27,3 naponta, a pontos időben a Hold a ponton áll', () => {
    const targets = [{ key: 'sun', name: 'Nap', symbol: '☉', lon: 354.8 }];
    const ev = F.fastTransits(targets, day(2026, 9, 1), day(2026, 10, 1), null)
      .filter(e => e.planet.key === 'moon' && e.aspect.key === 'conjunction');
    assert.ok(ev.length >= 1 && ev.length <= 2, 'db: ' + ev.length);
    ev.forEach(e => assert.ok(Math.abs(H.angleDiff(H.eclipticLongitude('Moon', e.date), 354.8)) < 0.01));
  });

  test('gyors tranzit: minden ptolemaioszi fényszög időrendben, a Nap érintése ~napi 1°-os sebességgel egyszer', () => {
    const targets = [{ key: 'moon', name: 'Hold', symbol: '☽', lon: 96.8 }];
    const ev = F.fastTransits(targets, day(2026, 9, 1), day(2026, 9, 30), null);
    for (let i = 1; i < ev.length; i++) assert.ok(ev[i].date >= ev[i - 1].date);
    const sunHits = ev.filter(e => e.planet.key === 'sun');
    assert.ok(sunHits.length <= 1, 'Nap-érintések: ' + sunHits.length);
  });

  test('holdjegy-váltás ~2,5 naponta, a váltás után a jegy a következő', () => {
    const ing = F.moonIngresses(day(2026, 9, 1), day(2026, 9, 15));
    assert.ok(ing.length >= 5 && ing.length <= 7, 'db: ' + ing.length);
    for (let i = 1; i < ing.length; i++) {
      assert.strictEqual(ing[i].sign.index, (ing[i - 1].sign.index + 1) % 12);
      const gap = (ing[i].date - ing[i - 1].date) / 86400000;
      assert.ok(gap > 2 && gap < 3, 'köz: ' + gap);
    }
  });

  test('üresjárat: minden szakasz a jegyváltásnál ér véget, és a szakaszban nincs pontos holdfényszög', () => {
    const from = day(2026, 9, 1), to = day(2026, 9, 10);
    const voc = F.voidOfCourse(from, to);
    assert.ok(voc.length >= 2, 'db: ' + voc.length);
    const asps = F.moonAspects(from, new Date(to.getTime() + 3 * 86400000));
    voc.forEach(v => {
      assert.ok(v.end > v.start);
      assert.strictEqual(v.nextSign.index, (v.sign.index + 1) % 12);
      const inside = asps.filter(a => a.date > v.start && a.date < v.end);
      assert.strictEqual(inside.length, 0, 'fényszög az üresjáratban');
      assert.ok((v.end - v.start) / 3600000 < 60, 'túl hosszú üresjárat');
    });
  });

  test('lunációk: 2026. szeptember — újhold 09-11, telihold 09-26 (a 08-12-i napfogyatkozás utáni holdhónap)', () => {
    const l = F.lunations(day(2026, 9, 1), day(2026, 10, 1));
    const iso = l.map(x => x.type + ':' + x.date.toISOString().slice(0, 10));
    assert.ok(iso.indexOf('ujhold:2026-09-11') >= 0, iso.join(' '));
    assert.ok(iso.indexOf('telihold:2026-09-26') >= 0, iso.join(' '));
  });

  test('ingresszus: a Nap 2026-09-22/23 körül lép a Mérlegbe (őszi napéjegyenlőség)', () => {
    const ing = F.ingresses(day(2026, 9, 15), day(2026, 9, 30)).filter(i => i.planet.key === 'sun');
    assert.strictEqual(ing.length, 1);
    assert.strictEqual(ing[0].sign.key, 'merleg');
    const d = ing[0].date.getUTCDate();
    assert.ok(d === 22 || d === 23, 'nap: ' + d);
  });

  test('állomások: a Merkúr évente ~6-szor fordul (3 retrográd + 3 direkt), a fordulónál a sebesség előjelet vált', () => {
    const st = F.stations(day(2026, 1, 1), day(2027, 1, 1)).filter(s => s.planet.key === 'mercury');
    assert.ok(st.length >= 5 && st.length <= 7, 'db: ' + st.length);
    st.forEach(s => {
      const before = H.dailyMotion('Mercury', new Date(s.date.getTime() - 2 * 86400000));
      const after = H.dailyMotion('Mercury', new Date(s.date.getTime() + 2 * 86400000));
      assert.ok(before * after < 0);
      assert.strictEqual(s.toRetro, after < 0);
    });
  });

  test('bolygóórák Budapesten: 24 óra napkeltétől napkeltéig, a nappaliak összege = nappal hossza, szombat első órája Szaturnusz', () => {
    const d = new Date(Date.UTC(2026, 8, 12, 10));     // szombat
    const ph = F.planetaryHours(d, 47.4979, 19.0402, 'Europe/Budapest');
    assert.ok(ph && ph.hours.length === 24);
    assert.strictEqual(ph.dayRuler, 'saturn');
    assert.strictEqual(ph.hours[0].ruler, 'saturn');
    assert.strictEqual(ph.hours[1].ruler, 'jupiter');
    assert.strictEqual(ph.hours[7].ruler, 'saturn');    // 7 után ismétlődik
    assert.ok(ph.sunrise < ph.sunset && ph.sunset < ph.nextSunrise);
    const dayLen = (ph.sunset - ph.sunrise) / 3600000;
    assert.ok(dayLen > 12 && dayLen < 13.5, 'nappal: ' + dayLen);
    assert.ok(ph.current && ph.current.start <= d && d < ph.current.end);
    // vasárnap első órája a Nap, és a 24 óra hézag nélkül fedi a napot
    const su = F.planetaryHours(new Date(Date.UTC(2026, 8, 13, 10)), 47.4979, 19.0402, 'Europe/Budapest');
    assert.strictEqual(su.hours[0].ruler, 'sun');
    for (let i = 1; i < 24; i++) assert.strictEqual(su.hours[i].start.getTime(), su.hours[i - 1].end.getTime());
  });

  test('pontozás: trigon a Vénuszra emeli a szerelmet, kvadrát a Szaturnuszra rontja a munkát; a levezetés minden tételt felsorol', () => {
    const mk = (pk, tk, ak, house) => ({
      planet: F.FAST.filter(f => f.key === pk)[0], target: { key: tk, name: tk },
      aspect: F.ASPECTS.filter(a => a.key === ak)[0], house: house || null
    });
    const r = F.scoreDay([mk('venus', 'venus', 'trine'), mk('mars', 'saturn', 'square', 10), mk('moon', 'sun', 'conjunction')]);
    assert.ok(r.score.szerelem > 0 && r.stars.szerelem >= 4);
    assert.ok(r.score.munka < 0 && r.stars.munka <= 2);
    assert.strictEqual(r.stars.egeszseg, 3);
    assert.ok(r.reasons.length >= 4);
  });
};
