/*
 * numbers-deep.js — a numerológia teljes kiértékelésének szövegei
 * A buildNumerology() szintézisrésze használja: a személy számainak
 * EGYMÁS KÖZTI viszonyából (életút–sorsszám, lélek–személyiség,
 * hármascsoportok, érettségi szám, karmikus jelzések, ciklushelyzet)
 * von le következtetéseket.
 *
 * Sima script (nem ES modul). Betöltés: numbers.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.numbersDeep = {

  intro: 'A numerológia igazi olvasata nem az egyes számok külön-külön, hanem a viszonyaik: ugyanaz az életút-szám mást jelent egy vele összhangban lévő és egy vele feszültségben álló sorsszám mellett. Az alábbi kiértékelés a te számaid egymás közti dinamikájából olvas.',

  /* a három klasszikus számcsalád */
  groups: {
    mental: { name: 'szellemi-független család (1-5-7)', trait: 'az önállóság, a gondolkodás és a szabadság' },
    practical: { name: 'gyakorlati-építő család (2-4-8)', trait: 'az együttműködés, a munka és az anyagi építkezés' },
    creative: { name: 'kreatív-humánus család (3-6-9)', trait: 'az önkifejezés, a gondoskodás és az emberekhez fordulás' }
  },

  pathDestiny: {
    same: 'Az életút-számod és a sorsszámod ugyanaz a szám: ritka, erős egybeesés — amit az élet feladatként hoz, azt a neved (a képességeid) ugyanabban a nyelvben mondja el. Nálad nincs belső vita a „mit kellene" és a „mit tudok" között.',
    sameGroup: 'Az életút-számod és a sorsszámod ugyanabba a családba tartozik (%G%): az utad és az eszközeid egy irányba mutatnak — %T% a közös nevező, ezen a terepen vagy elemedben.',
    diff: 'Az életút-számod (%A%) és a sorsszámod (%B%) két különböző családból való: az utad %TA% felé visz, az eszközeid viszont %TB% nyelvén szólnak. Ez nem hiba, hanem kettős műveltség — a leckéd a kettő összedolgozása, hogy ne váltakozva élj két üzemmódban.'
  },

  soulPersonality: {
    same: 'A lélekszámod és a személyiségszámod megegyezik: amit belül szeretnél, azt mutatod kifelé is — átlátszó, hiteles jelenlét. Az emberek nálad azt kapják, amit látnak.',
    sameGroup: 'A lélekszámod (%A%) és a személyiségszámod (%B%) különbözik ugyan, de egy családból való: a belső vágyaid és a kifelé mutatott arcod rokon nyelvet beszél — árnyalatokban térnek el, nem irányban, ezért a környezeted összképe rólad nagyjából pontos.',
    diff: 'A lélekszámod (%A%) és a személyiségszámod (%B%) eltér: belül %TA% hajt, kifelé viszont %TB% arcát mutatod. A környezeted ezért gyakran mást hisz rólad, mint ami belül zajlik — a leckéd időnként megmutatni a belső szobát is.'
  },

  soulPath: {
    same: 'A lélekszámod egybeesik az életút-számoddal: a szíved vágya pontosan azt akarja, amerre az utad amúgy is visz — belső szélcsend, erős motiváció.',
    sameGroup: 'A lélekszámod egy családban van az életút-számoddal: a vágyaid támogatják az utad — amit szeretnél, az nagyjából az is, amit tenned érdemes.',
    diff: 'A lélekszámod (%A%) más családból való, mint az életút-számod (%B%): a szíved %TA% felé húz, az utad viszont %TB% terepén vezet. Az elégedettséged kulcsa, hogy a vágyaidnak külön teret adj — különben az út robotolássá válik.'
  },

  birthdaySame: 'A születésnap-számod ugyanoda redukálódik, mint az életút-számod: a hozott ajándékod pontosan az úthoz való szerszám — kettős nyomaték ugyanazon a témán.',

  masters: {
    11: 'A számaid közt ott a 11-es mesterszám: a hagyomány szerint megemelt érzékenység és inspirációs csatorna — a 2-es alapfeladat (kapcsolódás) magasfeszültségű változata. Nagy kisugárzás jár vele, cserébe ingatagabb idegrendszer: földelést kér.',
    22: 'A számaid közt ott a 22-es mesterszám, a „mesterépítő": a 4-es alapfeladat (építés) nagyléptékű változata — képesség nagy, maradandó dolgokat a valóságba hozni. A kísértése a saját mércéje alatt élni, mert az kényelmesebb.',
    33: 'A számaid közt ott a 33-as mesterszám, a „mestertanító": a 6-os alapfeladat (gondoskodás) egyetemes változata — gyógyító-tanító jelenlét. A kísértése az önfeláldozás: adni csak töltött kancsóból lehet.'
  },

  karmicDay: {
    13: 'A 13-án születés a hagyomány szerint karmikus adósság-szám (13/4): a munkához való viszony a lecke — a rendszeres, alapos munka nálad nem opció, hanem az út maga; a sarokvágás rendre visszaüt.',
    14: 'A 14-én születés a hagyomány szerint karmikus adósság-szám (14/5): a szabadság és a mérték a lecke — a túlzásokra (élvezetek, kapkodás, felelőtlen váltások) hajlamosít, a leckéd a szabadság fegyelmezett használata.',
    16: 'A 16-án születés a hagyomány szerint karmikus adósság-szám (16/7): az ego és a kapcsolatok a lecke — váratlan összeomlások bonthatják le, amit hiúságra építettél; ami alázatra épül, az megmarad.',
    19: 'A 19-én születés a hagyomány szerint karmikus adósság-szám (19/1): az önállóság és a hatalom a lecke — egyedül akarsz megoldani mindent, vagy másokra támaszkodsz túl; az egészséges kérni-tudás a felszabadulásod.'
  },

  maturityIntro: 'Az érettségi szám (életút + sorsszám) a hagyomány szerint az élet második felében — nagyjából a negyvenes évektől — egyre erősebben színező téma: ez az, amivé az utad és a képességeid ÖSSZEGE érlel.',
  maturity: {
    1: 'Érettségi számod az 1-es: az évek előrehaladtával egyre önállóbbá, kezdeményezőbbé válsz — az élet második fele a saját út felvállalásáról szól.',
    2: 'Érettségi számod a 2-es: az évekkel egyre fontosabbá válik a társ, a béke és az együttműködés — a második életfeled a kapcsolódás művészetéről szól.',
    3: 'Érettségi számod a 3-as: az évekkel egyre erősebben tör elő az önkifejezés és a játékosság — a második életfeled az alkotásról és az örömről szól.',
    4: 'Érettségi számod a 4-es: az évekkel egyre fontosabb lesz a rend, az otthon és a maradandó mű — a második életfeled az építésről szól.',
    5: 'Érettségi számod az 5-ös: az évekkel nem csillapodsz, hanem szabadabbá válsz — a második életfeled a változásról, utazásról, új tapasztalatokról szól.',
    6: 'Érettségi számod a 6-os: az évekkel egyre inkább a család, a közösség és a szépség gondozója leszel — a második életfeled a felelős szeretetről szól.',
    7: 'Érettségi számod a 7-es: az évekkel egyre erősebb a befelé fordulás és a megértés igénye — a második életfeled a bölcsességről és az elmélyülésről szól.',
    8: 'Érettségi számod a 8-as: az évekkel nő az anyagi és szervezői erőd — a második életfeled a hatalom és a bőség felelős kezeléséről szól.',
    9: 'Érettségi számod a 9-es: az évekkel egyre tágabb kör felé fordulsz — a második életfeled az elengedésről, a nagylelkűségről és a továbbadásról szól.',
    11: 'Érettségi számod a 11-es mesterszám: az évekkel az intuíciód és az inspiráló jelenléted erősödik — a második életfeled mások megvilágosítása lehet, ha a saját idegrendszeredet is gondozod.',
    22: 'Érettségi számod a 22-es mesterszám: az évekkel egyre nagyobb léptékű építésre kapsz erőt és lehetőséget — a második életfeled maradandó mű létrehozásáról szólhat.',
    33: 'Érettségi számod a 33-as mesterszám: az évekkel egyre tisztább a gyógyító-tanító szereped — a második életfeled az egyetemes gondoskodásról szólhat.'
  },

  yearCycle: 'A kilencéves személyes ciklusodnak most a(z) %P%. évében jársz (%PH%).',
  yearPhases: {
    1: 'ez a vetés éve — amit most indítasz, az a következő kilenc év magva',
    2: 'ez a csírázás éve — türelem és kapcsolatépítés ideje, nem a látványos eredményeké',
    3: 'ez a kivirágzás éve — önkifejezés, társaság, láthatóvá válás',
    4: 'ez az alapozás éve — munka, rend, keretek: nem látványos, de minden későbbi ezen áll',
    5: 'ez a fordulat éve — változás, mozgás, váratlan lehetőségek: a ciklus közepén szellőztetni kell',
    6: 'ez a felelősség éve — család, otthon, kötelezettségek kerülnek középre',
    7: 'ez a befelé fordulás éve — tanulás, elemzés, lelki munka: a külső hajtás most keveset hoz',
    8: 'ez az aratás éve — a nyolc évvel ezelőtt elindított dolgok most hozzák az anyagi-hatalmi eredményt',
    9: 'ez a lezárás éve — selejtezés, elengedés, búcsúk: helyet csinálsz a jövőre induló új ciklusnak'
  },
  yearEqualsPath: 'Ráadásul a személyes éved száma egybeesik az életút-számoddal: a hagyomány szerint az ilyen év kiemelt, „sűrített" tanév — az életfeladatod fő témája most a mindennapokban is megjelenik.',

  note: 'A kiértékelés a pitagoraszi iskola bevett gyakorlatát követi (számcsaládok, érettségi szám, karmikus adósság-számok, kilencéves ciklus). Numerológiai típustan: önismereti tükör, nem mérés.'
};
