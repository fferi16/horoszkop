/* modules.js — az Asztroláb összes szkriptje EGY helyen, dokumentálva.
   Az index.html csak ezt az egy fájlt tölti be; innen töltődik minden más,
   pontosan ebben a sorrendben. Új modul: ide írd be a megfelelő csoportba.

   Sorrendfüggés csak itt van:
     • geo-hu a geo UTÁN (kiegészíti a listáját),
     • a számítási mag az adatmodulok UTÁN, astro.js az elsőként,
     • profile.js a mag végén, a felület (ui/) mindennek a végén.
   Az adatmodulok egymástól függetlenek (mind a HDATA-ba írnak). */
(function () {
  'use strict';

  var MODULES = [
    /* ---- csillagászati könyvtár (Astronomy Engine, MIT) ---- */
    'lib/astronomy.browser.js',

    /* ---- adat: helyek ---- */
    'data/geo.js',            // születési helyek kézi listája
    'data/geo-hu.js',         // teljes magyar településlista (a geo.js után!)

    /* ---- adat: nyugati asztrológia ---- */
    'data/western.js',        // jegyek, bolygók, házak alapadatai
    'data/western-ext.js',    // kiegészítő értelmezések (bolygó jegyben/házban)
    'data/western-cusp.js',   // házcsúcsokon álló jegyek
    'data/western-deep.js',   // „A képlet szerkezete és erőviszonyai" szövegei
    'data/timing.js',         // releasing, fogyatkozások, lunáris visszatérés szövegei
    'data/extras2.js',        // azték, Chiron, szoláris ív, félpontok, asztrokartográfia szövegei
    'data/degrees.js',        // fokok jelentései (Sabian, egyiptomi határok)
    'data/patterns.js',       // fényszög-alakzatok
    'data/stars.js',          // klasszikus állócsillagok
    'data/transits.js',       // lassú bolygók tranzitjai
    'data/annual.js',         // szolár és progressziók
    'data/synastry.js',       // szinasztria
    'data/lots.js',           // hellenisztikus sorsrészek, perzsa firdaria
    'data/asteroids.js',      // Ceres, Pallas, Juno, Vesta pályaelemei

    /* ---- adat: keleti rendszerek ---- */
    'data/eastern.js',        // kínai, koreai, japán, védikus alapadatok
    'data/eastern-ext.js',    // keleti kiegészítő értelmezések
    'data/eastern-deep.js',   // keleti szekciók mélyítése
    'data/dosha.js',          // váta/pitta/kapha a jyotisha szerint

    /* ---- adat: számok és mátrixok ---- */
    'data/numbers.js',        // numerológia, születéskártya, Destiny Cards, Ji King
    'data/numbers-deep.js',   // numerológia teljes kiértékelése
    'data/psycho.js',         // Pitagorasz-négyzet (pszichomátrix)
    'data/psycho-deep.js',    // pszichomátrix kiértékelése
    'data/matrix.js',         // Sorsmátrix (Destiny Matrix)
    'data/matrix-arcana.js',  // a 22 arkánum pozíciófüggő jelentései
    'data/matrix-deep.js',    // Sorsmátrix kiértékelése
    'data/hvd.js',            // kronobiológiai pszichogenetika (csakraanalízis)

    /* ---- adat: kártyák ---- */
    'data/tarot.js',          // 78 lapos Rider–Waite
    'data/lenormand.js',      // 36 lapos Petit Lenormand
    'data/lenormand-pairs.js',// Lenormand lappárok
    'data/gypsy.js',          // 36 lapos cigánykártya
    'data/spread-recommend.js', // kirakásajánló

    /* ---- adat: egyéb és modern rendszerek ---- */
    'data/exotic.js',         // maja, kelta, egyiptomi, totem, rúna, weton, Kua…
    'data/angels.js',         // 72 születési angyal, kabbala
    'data/esoteric-deep.js',  // születési kártyák és angyal-horoszkóp mélyítése
    'data/hungarian.js',      // magyar népi hagyomány
    'data/chrono.js',         // kronobiológia, bioritmus, holdnaptár
    'data/chrono-deep.js',    // kronobiológiai kiértékelés
    'data/humandesign.js',    // Human Design: kapuk, központok, csatornák
    'data/genekeys.js',       // Gene Keys: 64 kulcs, a profil szférái

    /* ---- számítási mag (sorrend számít!) ---- */
    'core/astro.js',          // bolygóállások, házak, fényszögek — ELSŐ
    'core/calendars.js',      // naptárrendszerek, nakshatra, dasa
    'core/chrono.js',         // kronobiológiai számítások
    'core/tarot.js',          // kártyahúzás és kiértékelés
    'core/humandesign.js',    // Human Design képlet
    'core/lots.js',           // sorsrészek és firdaria
    'core/timing.js',         // zodiacal releasing, fogyatkozások, lunáris visszatérés
    'core/locational.js',     // asztrokartográfia, szoláris ív, félpontok, azték, Chiron-ciklus
    'core/extras.js',         // draconikus, Vertex, aszteroidák
    'core/dosha.js',          // nedvek
    'core/profile.js',        // a teljes profil összeállítása — UTOLSÓ a magban

    /* ---- felület ---- */
    'ui/wheel.js',            // képletkerék rajzolása
    'ui/charts.js',           // grafikonok
    'ui/app.js'               // az alkalmazás
  ];

  // Az async=false biztosítja, hogy a dinamikusan beszúrt szkriptek
  // beszúrási sorrendben fussanak le (a szabvány garantálja).
  var base = document.currentScript.src.replace(/modules\.js.*$/, '');
  MODULES.forEach(function (path) {
    var s = document.createElement('script');
    s.src = base + path;
    s.async = false;
    document.head.appendChild(s);
  });
})();
