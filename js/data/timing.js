/*
 * timing.js — zodiacal releasing, fogyatkozások és lunáris visszatérés szövegei
 * Forrás: docs/31-releasing-fogyatkozas-lunar.md (Valens IV, Brennan; Brady; Townley).
 * Saját megfogalmazás, nem idézet. Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.timing = {

  releasing: {
    intro: 'A zodiacal releasing (aphesis, „elengedés") Vettius Valens 2. századi technikája: az életet a Szellem Pontjának jegyéből indulva fejezetekre osztja — minden jegy annyi (360 napos) évet kap, amennyi a hagyományos urának kis éve —, és a fejezeteken belül ugyanezt hónapokban is végigviszi. Nem eseményt jósol: azt mutatja, mikor melyik életterület és melyik bolygó hangneme adja az évek „alaphangját", és mikor jönnek a hivatás csúcsidőszakai.',
    spiritNote: 'A Szellemből (Daimón) indított sorozat a cselekvés, a hivatás és az életirány fejezeteit adja; a Fortunából indított a test, az egészség és a külső körülmények ritmusát.',
    peak: {
      1: 'a Fortuna saját jegye: csúcsidőszak, amelyben a tetteid a saját sorskörülményeidet érintik — kezdet, alapozás, önmagad újra-elhelyezése',
      4: 'a Fortunától számolt 4. hely: csúcsidőszak az otthon, a család, a gyökerek és a belső alap felől — a hagyomány „a végek és alapok" helyének nevezi',
      7: 'a Fortunától számolt 7. hely: csúcsidőszak, amely másokon, társakon és ellenfeleken keresztül hozza a fordulatot',
      10: 'a Fortunától számolt 10. hely — a hagyomány szerint a hivatás legmagasabb csúcsa: láthatóság, elismerés, a tetteid nyilvános következménye'
    },
    noPeak: 'nem sarokhelyről indul a Fortunához képest, ezért a hagyomány szerint csendesebb, előkészítő vagy feldolgozó időszak',
    lb: 'Ez a bekezdés a „kötés elengedése" után jön: a sorozat visszaért volna a fejezet kiinduló jegyéhez, ezért a szemközti jegybe ugrott. Valens ezt a fejezeten belüli nagy irányváltás, „lapozás" pillanatának tartja.',
    nextLB: 'A következő kötés-elengedés (irányváltás a fejezeten belül): %D%, amikor a sorozat %S% jegyébe ugrik.',
    nextPeak: 'A következő csúcsidőszak: %D% (%L%. szint, %S%, a Fortunától számolt %P%. hely).',
    disclaimer: 'A releasing 360 napos évekkel és 30 napos hónapokkal számol, ahogy Valens; a dátumok ezért nem a naptári születésnapokhoz igazodnak. A fejezet „hangneme" a jegy hagyományos urának natális állapotából és a jegyben álló bolygókból olvasható — nem előre megírt esemény.'
  },

  eclipses: {
    intro: 'A fogyatkozások a hagyományban felerősített új- és teliholdak: a napfogyatkozás Brady szerint arról szól, „hogyan hat rám a világ" (kezdet, identitás), a holdfogyatkozás arról, „hogyan veszek részt benne" (lezárás, tudatosodás). A képletben csak a szoros — 3°-on belüli — együttállás, szembenállás vagy kvadrát számít, és a hatás a fogyatkozási szezonban (a dátum körüli két hétben) jelentkezik.',
    kinds: { total: 'teljes', partial: 'részleges', annular: 'gyűrűs', penumbral: 'félárnyékos' },
    prenatalSolar: 'A születésed előtti utolsó napfogyatkozás a modern hagyomány (Lineman, Teal) szerint a képlet „szikrája": az a fok, ahol az életed alapindíttatása őrződik. Nálad: %S%%H%.',
    prenatalLunar: 'A születésed előtti utolsó holdfogyatkozás a képlet „visszhangja": a lezárandó, tudatosítandó örökség pontja. Nálad: %S%%H%.',
    hits: 'A fokot a képletedben %P% érinti (3°-on belül) — ez a bolygó a fogyatkozás témáját személyesen hordozza.',
    noHits: 'A fokhoz nem áll 3°-on belül natális bolygó vagy sarok, ezért a pont inkább tranzitokra érzékeny: ha egy későbbi fogyatkozás ugyanide esik (19 évente ugyanarra a fokra jön), az különösen hangsúlyos időszak.',
    bornNear: 'Fogyatkozás közelében születtél (%D%, %K% %T%): Brady szerint az ilyen ember „a nagy ciklus energiájában" születik — a fogyatkozás foka a képlet egyik legérzékenyebb pontja marad.',
    upcomingIntro: 'A következő öt év azon fogyatkozásai, amelyek a képleted valamelyik bolygóját vagy sarokpontját 3°-on belül érintik. A hatás a dátum körüli két hétben jelentkezik; a csomóponti tengely a ház-párt 12–18 hónapig aktiválja.',
    upcoming: '%K% %T% %S% — a képletedben %H%. Érinti: %P%. %M%',
    upcomingNone: 'A következök öt évben egyetlen fogyatkozás sem esik 3°-on belül a képleted bolygóira vagy sarkaira — a fogyatkozások ebben az időszakban a házak szintjén hatnak, nem személyes ponton.',
    solarMeaning: 'Napfogyatkozás: a hagyomány szerint kezdet, új irány vagy külső esemény, amely az érintett pont ügyeit kimozdítja.',
    lunarMeaning: 'Holdfogyatkozás: a hagyomány szerint lezárás, beérés, tudatosodás — ami az érintett pont ügyeiben eddig épült, most láthatóvá válik.',
    houseAxis: 'A mostani fogyatkozás-sorozat a képleted %A%. és %B%. házának tengelyén zajlik: Brady szerint ez a házpár marad a fogyatkozások terepe, amíg a holdcsomópontok tovább nem lépnek.'
  },

  lunar: {
    intro: 'A Hold 27,3 naponta tér vissza a születési helyére; az erre a pillanatra állított képlet Townley szerint a következő holdhónap „érzelmi tájképe". A Nap és a Hold háza mutatja, hol lesz a hónap fő cselekménye, az aszcendens jegye a hónap stílusát.',
    asc: {
      kos: 'gyors, kezdeményező hónap — hamar döntesz, könnyen ütközöl',
      bika: 'lassabb, biztonságkereső hónap — az anyagiak és a kényelem számít',
      ikrek: 'mozgalmas, beszédes hónap — sok ügy, sok ember, kevés elmélyülés',
      rak: 'befelé forduló, érzékeny hónap — otthon, család, hangulatok',
      oroszlan: 'kifejező, látható hónap — szereplés, alkotás, elismerés',
      szuz: 'rendrakó, munkás hónap — részletek, egészség, teendők',
      merleg: 'kapcsolati hónap — társ, egyeztetés, egyensúlykeresés',
      skorpio: 'intenzív, mélyre menő hónap — rejtett ügyek, erős érzelmek',
      nyilas: 'táguló, derűs hónap — utazás, tanulás, távlatok',
      bak: 'felelős, célratörő hónap — munka, szerkezet, kötelesség',
      vizonto: 'függetlenedő, közösségi hónap — barátok, ötletek, kilépés a megszokottból',
      halak: 'álmodó, érzékeny hónap — pihenés, képzelet, együttérzés'
    },
    body: 'A hónap fő cselekménye a Nap háza szerint %SH%. házadban (%ST%), az érzelmi hangsúly a Hold háza szerint %MH%. házadban (%MT%) lesz.',
    sameHouse: 'A Nap és a Hold ugyanabba a házba esik, ezért a hónap egyetlen életterületre összpontosul: %ST%.',
    angles: 'A születési képleted bolygói közül %P% áll a havi képlet sarokpontján — Townley szerint az ilyen bolygó ügye a hónap főszereplője.',
    note: 'A havi képlet a szolár év alárendeltje: azt időzíti, amit az éves égi kép felvet. Csak pontos születési idővel számítható.'
  }
};
