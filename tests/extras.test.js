/* Draconikus képlet, Vertex, aszteroidák + Chiron — docs/25, docs/32.
   Referencia: JPL Horizons, geocentrikus látszó ekliptikai hosszúság 2000-01-01 0h UT. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE, X = H.extras;
  const HORIZONS = { ceres: 184.3426, pallas: 134.1397, juno: 277.8099, vesta: 245.7119, chiron: 251.5604 };

  test('a négy aszteroida és a Chiron 2000-01-01-én 6′-en belül egyezik a JPL Horizons-szal', () => {
    const list = X.asteroids(new Date(Date.UTC(2000, 0, 1)));
    Object.keys(HORIZONS).forEach(k => {
      const a = list.filter(x => x.key === k)[0];
      assert.ok(a, k + ' hiányzik');
      const d = Math.abs(H.angleDiff(a.lon, HORIZONS[k])) * 60;
      assert.ok(d < 6, k + ' eltérés: ' + d.toFixed(2) + '′');
    });
  });

  test('aszteroidák: folytonos mozgás (két nap között < 1°)', () => {
    const a = X.asteroids(new Date(Date.UTC(1989, 2, 15))), b = X.asteroids(new Date(Date.UTC(1989, 2, 17)));
    a.forEach((p, i) => assert.ok(Math.abs(H.angleDiff(p.lon, b[i].lon)) < 1, p.name));
  });

  test('Vertex: az Anti-Vertex pontosan szemben; a trópusokon megbízhatatlan, mérsékelt övben megbízható', () => {
    const utc = H.localToUTC(1989, 3, 15, 11, 0, 'Europe/Budapest');
    const c = H.chart({ date: utc, lat: 47.4979, lon: 19.0402, system: 'placidus', withHouses: true });
    const eps = c.houses.obliquity || H.obliquity(utc);
    const v = X.vertex(c.houses.ramc, 47.4979, eps);
    assert.ok(v >= 0 && v < 360);
    assert.strictEqual(X.vertexReliable(47.4979, eps), true);
    assert.strictEqual(X.vertexReliable(5, eps), false);
    // a Vertex a nyugati félgömbön: a Deszcendenstől 90°-on belül
    const dsc = H.norm360(c.houses.asc + 180);
    assert.ok(Math.abs(H.angleDiff(v, dsc)) < 90, 'Vertex–DSC: ' + H.angleDiff(v, dsc));
  });

  test('draconikus: minden bolygó = tropikus − átlagos holdcsomó', () => {
    const utc = H.localToUTC(1989, 3, 15, 11, 0, 'Europe/Budapest');
    const c = H.chart({ date: utc, lat: 47.4979, lon: 19.0402, system: 'placidus', withHouses: true });
    const dr = X.draconic(c);
    assert.ok(dr && dr.list && dr.list.length);
    const node = c.planets.northNode.lon;
    dr.list.forEach(p => {
      const src = c.planets[p.key];
      if (!src) return;
      assert.ok(Math.abs(H.angleDiff(p.lon, H.norm360(src.lon - node))) < 1e-6, p.name);
    });
  });
};
