/* Végponttól végpontig: teljes profil négy személyre (idővel és idő nélkül).
   Nem a tartalmat ítéli meg, hanem hogy minden szekció felépül, és nincs
   „undefined" / „NaN" / üres kulcstétel a szövegekben. */
'use strict';
module.exports = ({ test, assert, app }) => {
  const H = app.HCORE;
  const BP = { name: 'Budapest', lat: 47.4979, lon: 19.0402, tz: 'Europe/Budapest' };
  const persons = [
    { name: 'Kovács Ágnes', gender: 'no', year: 1989, month: 3, day: 15, hour: 11, minute: 0, hasTime: true, place: BP, special: [] },
    { name: 'Teszt Elek', gender: 'ferfi', year: 1962, month: 11, day: 7, hour: 5, minute: 30, hasTime: true, place: BP, special: [] },
    { name: 'Telihold Teszt', gender: 'no', year: 1990, month: 1, day: 15, hour: 10, minute: 0, hasTime: true, place: BP, special: [] },
    { name: 'Időtlen', gender: 'no', year: 2001, month: 7, day: 22, hour: 12, minute: 0, hasTime: false, place: BP, special: [] }
  ];
  const profiles = {};

  function textsOf(p) {
    const out = [];
    p.sections.forEach(s => {
      out.push(s.title);
      (s.items || []).forEach(it => out.push(it.label, it.value, it.text));
      (s.notes || []).forEach(n => out.push(n));
    });
    return out.filter(x => typeof x === 'string');
  }

  persons.forEach(person => {
    test('felépül: ' + person.name + (person.hasTime ? '' : ' (idő nélkül)'), () => {
      const p = H.buildProfile(person);
      profiles[person.name] = p;
      assert.ok(p && p.sections && p.sections.length >= (person.hasTime ? 34 : 26), 'szekciók: ' + (p && p.sections && p.sections.length));
      const bad = textsOf(p).filter(t => /undefined|NaN|\[object Object\]/.test(t));
      assert.strictEqual(bad.length, 0, 'gyanús szöveg: ' + bad.slice(0, 3).join(' | '));
    });
  });

  test('a születési holdfázis szövege nem üres (regresszió), és a Holdkor személyes', () => {
    persons.forEach(person => {
      const p = profiles[person.name];
      const hold = p.sections.filter(s => s.id === 'hold')[0];
      const it = hold.items.filter(i => i.label === 'Születési holdfázis')[0];
      assert.ok(it && it.text && it.text.length > 40, person.name);
      const kor = hold.items.filter(i => i.label === 'Holdkor')[0];
      assert.ok(kor && /születésedkor/.test(kor.text), person.name + ' holdkor');
    });
  });

  test('időzítés: profekció, releasing, fogyatkozások és lunáris hónap az idős személyeknél; idő nélkül Nap-profekció', () => {
    const agnes = profiles['Kovács Ágnes'], idotlen = profiles['Időtlen'];
    const most = agnes.sections.filter(s => s.id === 'most')[0];
    assert.ok(most.items.some(i => i.label === 'Éves profekció' && /év ura/.test(i.value)));
    assert.ok(most.items.some(i => i.label === 'Havi profekció'));
    assert.ok(most.items.some(i => i.label === 'A mostani holdhónapod'));
    assert.ok(agnes.sections.some(s => s.id === 'releasing' && s.table && s.table.rows.length >= 5));
    assert.ok(agnes.sections.some(s => s.id === 'fogyatkozasok' && s.items.length >= 2));
    const mostI = idotlen.sections.filter(s => s.id === 'most')[0];
    assert.ok(mostI.items.some(i => i.label === 'Éves profekció (a Napból)'));
    assert.ok(!idotlen.sections.some(s => s.id === 'releasing'), 'idő nélkül nincs releasing');
  });

  test('a szekciók sorrendje: Összegzés az első; minden szekciónak van kategóriája és ikonja', () => {
    const p = profiles['Kovács Ágnes'];
    assert.strictEqual(p.sections[0].id, 'osszegzes');
    p.sections.forEach(s => assert.ok(s.category && s.icon, s.id));
  });

  test('a temperamentum a képletből számol, nem a napjegyből (Ágnes: Halak-Nap, mégis flegmatikus a Rák Asc/Hold miatt)', () => {
    const p = profiles['Kovács Ágnes'];
    const ny = p.sections.filter(s => s.id === 'nyugati')[0];
    const t = ny.items.filter(i => i.label === 'Temperamentum')[0];
    assert.ok(t && /Flegmatikus/.test(t.value) && /szavazata/.test(t.text));
  });
};
