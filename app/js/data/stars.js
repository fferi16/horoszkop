/*
 * stars.js — a klasszikus állócsillagok adatai és jelentései
 * lon2000: tropikus ekliptikai hosszúság J2000.0 epochára, fokban.
 * A precesszió (~50,29"/év) számítását a profile.js végzi.
 * Orb: hagyományosan ~1,5° együttállásra (a Regulusnál és a Spicánál
 * a fényességük miatt szokás tágabban is nézni — itt egységes 1,5°).
 *
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.stars = {

  orb: 1.5,
  precessionPerYear: 0.0139697,   // fok/év (50,29"/év)

  note: 'Az állócsillagok a hagyományos asztrológia legrégebbi rétegéből valók: csak az együttállásukat nézzük, szűk (1,5°-os) orbisszal. A hosszúságok a születési évre számított precesszióval igazítottak. A csillagjelentések a hellenisztikus és középkori hagyományt követik — a „szerencsés/szerencsétlen" címkéket a modern gyakorlat inkább hangsúlyként, mint ítéletként olvassa.',

  list: [
    { name: 'Algol', lon2000: 56.17, mag: 2.1, nature: 'kihívó',
      text: 'A hagyomány leghírhedtebb csillaga, a „Medúza feje": nyers, intenzív erő. Modern olvasatban a legmélyebb félelmekkel való szembenézés és az abból nyerhető rendkívüli erő pontja — sebészek, válságkezelők, határhelyzetek csillaga.' },
    { name: 'Alcyone (Fiastyúk)', lon2000: 60.00, mag: 2.9, nature: 'érzékeny',
      text: 'A Plejádok legfényesebbike: látnoki érzékenység, művészi hajlam és mély érzelmek. A hagyomány a „könnyek csillagának" is nevezte — a nagy érzékenység ára és ajándéka együtt jár.' },
    { name: 'Aldebaran', lon2000: 69.79, mag: 0.9, nature: 'szerencsés',
      text: 'A négy perzsa királycsillag egyike, a Kelet őrzője: becsület, egyenesség és vezetői tekintély — de csak addig tart a szerencséje, amíg az ember tisztességes marad. A feddhetetlenség csillaga.' },
    { name: 'Rigel', lon2000: 76.83, mag: 0.1, nature: 'szerencsés',
      text: 'Az Orion lába: tanítói és építő erő, gyors felemelkedés a tudás és a szorgalom révén. A hagyomány a tartós hírnév egyik legjobb jelzőjének tartotta.' },
    { name: 'Betelgeuse', lon2000: 88.75, mag: 0.5, nature: 'szerencsés',
      text: 'Az Orion válla: erő, siker és elismerés — a hagyomány szerint anyagi és közéleti szerencsét ígér annak, aki mer nagyot vállalni.' },
    { name: 'Sirius', lon2000: 104.08, mag: -1.5, nature: 'szerencsés',
      text: 'Az égbolt legfényesebb csillaga: hírnév, becsvágy és „égő" lelkesedés. Nagy sikerek jelzője, de a lángja mértéket kíván — könnyen éget, ha túl közel mész hozzá.' },
    { name: 'Castor', lon2000: 110.22, mag: 1.6, nature: 'vegyes',
      text: 'A halandó iker: szellemes, sokoldalú írói-szónoki tehetség, hirtelen fel- és leívelésekkel. A kettősség csillaga — a fény és árnyék gyors váltakozása.' },
    { name: 'Pollux', lon2000: 113.22, mag: 1.1, nature: 'kihívó',
      text: 'A halhatatlan iker, a „gonosz fiú" régi neve ellenére: bátor, harcos szellem, éles nyelv és a küzdelemben megtalált méltóság.' },
    { name: 'Procyon', lon2000: 115.79, mag: 0.4, nature: 'vegyes',
      text: 'A „Kutya előtt járó": gyors emelkedés, hirtelen lehetőségek — amelyeket gyorsan meg is kell ragadni, mert az ereje lendületes, de rövid ívű.' },
    { name: 'Regulus', lon2000: 149.83, mag: 1.4, nature: 'szerencsés',
      text: 'A királycsillag, az Észak őrzője, az „oroszlánszív": becsvágy, nagyság és nyilvános siker — azzal a régi feltétellel, hogy a bosszú lerontja. Nagylelkűséggel megtartott hatalom csillaga.' },
    { name: 'Spica', lon2000: 203.84, mag: 1.0, nature: 'szerencsés',
      text: 'A Szűz búzakalásza, a hagyomány legjótékonyabb csillaga: védettség, tehetség és „ajándék" — amihez hozzáér a képletedben, azt megáldja.' },
    { name: 'Arcturus', lon2000: 204.23, mag: 0.0, nature: 'szerencsés',
      text: 'A Medveőrző: úttörő szellem, jólét és vezetés új utakon. A saját ösvényt taposó ember csillaga.' },
    { name: 'Antares', lon2000: 249.79, mag: 1.0, nature: 'kihívó',
      text: 'A Skorpió szíve, a Nyugat őrzője, a „Mars vetélytársa": szenvedélyes, mindent-vagy-semmit természet. Nagy sikerre képes, de kerülnie kell a megszállottságot — a mértéktelenség a próbája.' },
    { name: 'Vega', lon2000: 285.32, mag: 0.0, nature: 'szerencsés',
      text: 'A Lant csillaga: művészi kifejezőerő, varázslatos vonzerő és idealizmus. A zene, a költészet és a karizma pontja.' },
    { name: 'Altair', lon2000: 301.78, mag: 0.8, nature: 'vegyes',
      text: 'A Sas: merészség, hirtelen felemelkedés és függetlenség. Bátor, olykor vakmerő — a kockázatvállalás csillaga.' },
    { name: 'Deneb Algedi', lon2000: 323.55, mag: 2.9, nature: 'vegyes',
      text: 'A Bak farka: a bölcs bíró csillaga — igazságérzet, pártfogói szerep, a szomorúság és öröm érett egyensúlya.' },
    { name: 'Fomalhaut', lon2000: 333.87, mag: 1.2, nature: 'szerencsés',
      text: 'A Dél őrzője, a négy királycsillag legköltőibbje: nagy álmok és ideálok — a szerencséje addig tart, amíg az eszmények tiszták maradnak. Művészek és látnokok csillaga.' }
  ]
};
