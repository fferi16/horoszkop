/*
 * synastry.js — szinasztria (párkapcsolati összehasonlítás) szövegei
 * A profile.js buildSynastry() használja: két születési képlet közti
 * fényszögek, házátfedések és összhang-mutatók magyar értelmezései.
 *
 * Kulcsok: a bolygópárok sorrendfüggetlenek ('sun-moon' = 'moon-sun',
 * mindig ábécé... helyett rögzített bolygósorrendben: sun, moon, mercury,
 * venus, mars, jupiter, saturn, uranus, neptune, pluto, asc.
 * Szövegosztályok: harm (trigon/szextil), hard (kvadrát/oppozíció), conj.
 *
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.synastry = {

  intro: 'A szinasztria a két képlet egymásra vetítése: az egyikőtök bolygói fényszögeket zárnak be a másik bolygóival, és beleesnek a másik házaiba. A támogató kapcsolódások a természetes összhang területei, a feszültek a súrlódásé — de a tartós vonzáshoz mindkettő kell: a csak-harmonikus kapcsolat kényelmes, a feszültség ad neki mélységet és fejlődést.',

  note: 'A pontszámok tájékoztató jellegűek: a fényszögek súlyozott egyenlegéből számolt hangsúlyok, nem ítéletek. Két képlet sosem „összeférhetetlen" — a mutatók azt jelzik, mely területek mennek maguktól, és hol kell tudatosan dolgozni.',

  /* ---------------- összhang-kategóriák ---------------- */

  categories: {
    erzelem: { name: 'Érzelmi összhang',
      text: 'A Hold- és Vénusz-kapcsolódások: mennyire érzitek otthon magatokat egymásnál, egyezik-e a biztonságigényetek és a szeretetnyelvetek.' },
    kommunikacio: { name: 'Kommunikáció',
      text: 'A Merkúr-kapcsolódások: megértitek-e egymás gondolkodását, tudtok-e beszélgetni — a hétköznapok legfontosabb ragasztója.' },
    szenvedely: { name: 'Vonzalom és szenvedély',
      text: 'A Vénusz–Mars és Plútó-kapcsolódások: a fizikai kémia és a vágy dinamikája. A feszült fényszög itt nem hiba — gyakran épp az adja a szikrát.' },
    stabilitas: { name: 'Stabilitás, tartósság',
      text: 'A Szaturnusz- és Jupiter-kapcsolódások: a kapcsolat váza és növekedése. A támogató Szaturnusz-szál a hosszú távú kapcsolatok legjobb jelzője.' }
  },

  overallBands: [
    { min: 75, text: 'Kiemelkedően összehangolt képletpár: a kapcsolódásaitok nagy része támogató. Vigyázzatok, hogy a kényelem ne váljon ellustulássá — a fejlődéshez keressétek tudatosan a kihívást.' },
    { min: 55, text: 'Jó egyensúlyú képletpár: van elég természetes összhang, hogy biztonságban legyetek, és elég súrlódás, hogy fejlődjetek egymás mellett. Ez a tartós kapcsolatok tipikus képe.' },
    { min: 40, text: 'Vegyes képletpár: erős kapcsolódások és valódi feszültségpontok egyszerre. Intenzív, formáló kapcsolat lehet — az útja azon múlik, hajlandóak vagytok-e a súrlódásból tanulni.' },
    { min: 0, text: 'Kihívásokkal teli képletpár: a feszült kapcsolódások vannak túlsúlyban. Ez nem ítélet — de azt jelzi, hogy ez a kapcsolat munkát kér: tudatosságot, türelmet és jó kommunikációt.' }
  ],

  /* ---------------- nevezetes bolygópárok ---------------- */

  pairs: {
    'sun-moon': {
      harm: 'A klasszikus hagyomány első számú házassági mutatója: az egyikőtök lényege és a másik érzelmi világa természetes összhangban van — könnyű együtt „otthon lenni".',
      hard: 'A lényeg és az érzelmi igény feszül egymásnak: az egyikőtök önkifejezése akaratlanul is fel-felborzolja a másik biztonságérzetét. Tudatos odafigyeléssel ez mély egymást-formálássá válik.',
      conj: 'Nap–Hold együttállás: az egyik fél kifelé élt lényege és a másik belső világa ugyanarra a húrra hangolt — a hagyomány szerint az egyik legerősebb összetartozás-jelző.'
    },
    'moon-moon': {
      harm: 'A két érzelmi világ hasonló ütemre lélegzik: hasonlóan éltek meg hangulatokat, hasonló az otthon-igényetek. Szavak nélkül is értitek egymás állapotait.',
      hard: 'Két eltérő érzelmi anyanyelv: amitől az egyik megnyugszik, az a másikat nyugtalanítja. A hétköznapi együttélés (lakás, rutinok, család) kér tudatos egyeztetést.',
      conj: 'Hold–Hold együttállás: szinte azonos érzelmi hullámhossz — mély, ösztönös egymásra hangolódás, de a rossz napjaitok is együtt rezonálnak.'
    },
    'venus-mars': {
      harm: 'A vonzalom klasszikus képlete: az egyik fél vágya és a másik szeretetnyelve egymásba illik — természetes, könnyű kémia.',
      hard: 'Erős, de súrlódó vonzalom: a vágy és az igény üteme eltér, ami hol izgalmas szikra, hol frusztráció. A szenvedélyes kapcsolatok tipikus szála.',
      conj: 'Vénusz–Mars együttállás: mágneses fizikai vonzás — a szinasztria egyik legerősebb kémia-jelzője.'
    },
    'venus-venus': {
      harm: 'Hasonló a szépérzéketek, az értékrendetek és a szeretetnyelvetek: könnyű örömet szerezni egymásnak.',
      hard: 'Másban látjátok a szépet és másképp fejezitek ki a szeretetet — a gesztusaitok célt téveszthetnek, amíg meg nem tanuljátok egymás nyelvét.',
      conj: 'Vénusz–Vénusz együttállás: közös ízlés és értékrend — ugyanazokat a dolgokat szeretitek szeretni.'
    },
    'sun-asc': {
      harm: 'Az egyikőtök lénye könnyedén illeszkedik ahhoz, ahogy a másik a világ felé fordul: jól mutattok együtt, és erősítitek egymás fellépését.',
      hard: 'Az egyik fél lénye akaratlanul is kihívást intéz a másik megjelenése, stílusa ellen — az első benyomások köre kér türelmet.',
      conj: 'Nap–Aszcendens együttállás: az egyik fél pontosan azt testesíti meg, amilyennek a másik mutatni szeretné magát — erős vonzás és azonnali ismerősség-érzés.'
    },
    'moon-asc': {
      harm: 'Az egyik fél érzelmi világa jól olvasható a másik számára: ösztönös gondoskodó összhang.',
      hard: 'Az egyik fél hangulatai megzavarhatják a másik komfortját — az érzelmek kimutatásának módja kér egyeztetést.',
      conj: 'Hold–Aszcendens együttállás: azonnali érzelmi ismerősség — mintha régről ismernétek egymást.'
    },
    'sun-sun': {
      harm: 'A két alaptermészet jól szelel együtt: hasonló az életenergiátok iránya, könnyen húztok egy irányba.',
      hard: 'Két erős, eltérő irányú akarat: rivalizálás vagy kölcsönös kihívás — párharcból is válhat szövetség, ha megtanultok osztozni a fényen.',
      conj: 'Nap–Nap együttállás: (közel) azonos napjegy — mély hasonlóság az alaptermészetben, ami egyszerre megértés és a különbözőség hiánya.'
    },
    'mercury-mercury': {
      harm: 'A gondolkodásotok jól kapcsolódik: hasonló tempó, hasonló humor — tudtok beszélgetni, és ez hosszú távon aranyat ér.',
      hard: 'Két eltérő gondolkodási stílus: az egyik gyorsabb, a másik alaposabb — a félreértések visszatérő mintázata ellen a visszakérdezés véd.',
      conj: 'Merkúr–Merkúr együttállás: közös gondolati hullámhossz — befejezitek egymás mondatait.'
    },
    'venus-saturn': {
      harm: 'A szeretet és a felelősség jó szövetsége: tartósságra, hűségre hajló szál — a hosszú kapcsolatok egyik legjobb jelzője.',
      hard: 'A szeretet és a korlát feszültsége: az egyik fél hidegnek vagy visszatartónak érezheti a másikat, aki közben csak biztonságot akar. Idővel mélyülő, de türelmet kérő szál.',
      conj: 'Vénusz–Szaturnusz együttállás: komoly, elkötelezett kötés — a szeretet itt felelősségvállalásként fejeződik ki, nem tűzijátékként.'
    },
    'moon-saturn': {
      harm: 'Az érzelmek biztos talajra találnak: az egyik fél jelenléte megnyugtató keretet ad a másik belső világának.',
      hard: 'Az érzelmi igény és a távolságtartás feszültsége: az egyik fél elutasítva érezheti magát, a másik nyomás alatt. A kimondott igények oldják.',
      conj: 'Hold–Szaturnusz együttállás: mély, komoly érzelmi kötés — nehezen születik, nehezen bomlik.'
    },
    'sun-saturn': {
      harm: 'A lendület és a szerkezet jó párosa: az egyik fél irányt ad, a másik tartást — együtt építeni tudtok.',
      hard: 'A tekintély-kérdés szála: az egyik fél fékezve, kritizálva érezheti magát a másiktól. A tisztelet kölcsönössé tétele a lecke.',
      conj: 'Nap–Szaturnusz együttállás: sorsszerűen komoly kapcsolódás — tanító-tanítvány dinamika, amely kölcsönös felelősséget kér.'
    },
    'venus-pluto': {
      harm: 'Mély, mágneses érzelmi-erotikus szál: a szeretet itt átalakító erő.',
      hard: 'Szenvedély és birtoklás feszültsége: intenzív vonzás, amely féltékenységi és hatalmi játszmákba fordulhat — a bizalom a kulcsa.',
      conj: 'Vénusz–Plútó együttállás: sorsszerű, mindent átható vonzalom — az a fajta, amit nem lehet félgőzzel csinálni.'
    },
    'mars-mars': {
      harm: 'A két akarat üteme összeillik: jól dolgoztok és mozogtok együtt, a konfliktusaitok is tisztázó jellegűek.',
      hard: 'Két akarat ütközése: azonos dolgokat akartok különböző módon — visszatérő súrlódás, amely sportban, közös munkában jól levezethető.',
      conj: 'Mars–Mars együttállás: közös tetterő — együtt hegyeket mozgattok, egymás ellen falakat.'
    }
  },

  /* ---------------- általános sablonok ---------------- */

  planetTheme: {
    sun: 'az alaptermészet és az életirány',
    moon: 'az érzelmi világ és a biztonságigény',
    mercury: 'a gondolkodás és a kommunikáció',
    venus: 'a szeretetnyelv és az értékrend',
    mars: 'az akarat és a tetterő',
    jupiter: 'a növekedés és a világlátás',
    saturn: 'a felelősség és a keretek',
    uranus: 'a szabadságigény és az újítás',
    neptune: 'az álmok és az idealizálás',
    pluto: 'a mélység és az átalakítás',
    asc: 'a megjelenés és a fellépés'
  },

  generic: {
    harm: '%A% (%TA%) támogató fényszöget zár %B% bolygójával (%TB%): ezen a területen természetes az összhang — erősítitek egymást.',
    hard: '%A% (%TA%) feszült fényszöget zár %B% bolygójával (%TB%): itt üt el egymástól a működésetek — ez a súrlódási felület egyben a közös fejlődés terepe.',
    conj: '%A% (%TA%) együtt áll %B% bolygójával (%TB%): ez a két működés összeolvad köztetek — nagy erő, ha ugyanabba az irányba fordítjátok.'
  },

  /* ---------------- bolygó a másik házában ---------------- */

  houseOverlay: {
    1: '%P% bolygója a(z) %N% 1. házába esik: erős, azonnali hatás — %N% a puszta jelenlététől is elevenebbnek érzi magát.',
    2: '%P% bolygója a(z) %N% 2. házába esik: az anyagiak, az önértékelés és a biztonság témáit mozgatja meg — %N% mellette értékesebbnek (vagy épp megkérdőjelezettnek) érzi, amije van.',
    3: '%P% bolygója a(z) %N% 3. házába esik: beszélgetős, pörgető kapcsolódás — %N% gondolkodását élénkíti, a hétköznapi kommunikációt színezi.',
    4: '%P% bolygója a(z) %N% 4. házába esik: az otthon és a gyökerek húrját pendíti meg — %N% családias, mély bizalmat érezhet iránta.',
    5: '%P% bolygója a(z) %N% 5. házába esik: játék, romantika, alkotókedv — %N% mellette könnyebben engedi el magát és mer örülni.',
    6: '%P% bolygója a(z) %N% 6. házába esik: a hétköznapok, a munka és az egészség terepe — gyakorlati, segítő kapcsolódás, amely a rutinokban mutatkozik meg.',
    7: '%P% bolygója a(z) %N% 7. házába esik: a társ-ház — %N% ösztönösen párkapcsolati szereplőként éli meg őt; a szinasztria egyik legerősebb köteléke.',
    8: '%P% bolygója a(z) %N% 8. házába esik: mélyvíz — intimitás, közös erőforrások, átalakulás. Intenzív, nem felszínes kapcsolódás.',
    9: '%P% bolygója a(z) %N% 9. házába esik: horizonttágítás — %N% mellette többet utazik, tanul, kérdez; a közös világnézet a fő szál.',
    10: '%P% bolygója a(z) %N% 10. házába esik: a hivatás és a nyilvánosság tere — hat %N% céljaira és arra, ahogyan a világ előtt megjelenik.',
    11: '%P% bolygója a(z) %N% 11. házába esik: barátság-szál — közösség, tervek, jövőkép; a szerelem mellé (vagy helyett) erős bajtársiasság.',
    12: '%P% bolygója a(z) %N% 12. házába esik: a tudattalan tere — kimondatlan, sejtelmes hatás; mély spirituális kapcsolódás és félreértés egyaránt teremhet itt.'
  }
};
