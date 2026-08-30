/*
 * matrix-arcana.js — a 22 arkánum POZÍCIÓFÜGGŐ jelentései a Sorsmátrixban
 * Nem az arkánum általános jelentése, hanem az, hogy az adott szerepben
 * (életfeladat, pénzcsatorna, kapcsolati csatorna, generációs vonal)
 * mit jelent.
 *
 * Sima script (nem ES modul). Betöltés: matrix.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.matrixArcana = {

  /* ---- életfeladatként (égi/összegző/személyes/társas/spirituális feladat,
          ég-föld vonal, életkor-pont, középpont) ---- */
  task: {
    1: 'feladatként a Mágus azt kéri, hogy merj kezdeményezni és a saját szavaddal-akaratoddal teremteni — a leckéd az önálló indítás, a kísértésed a képességeid szétforgácsolása.',
    2: 'feladatként a Főpapnő a belső hangra tanít: intuíciót fejleszteni, tudást mélyíteni és megtanulni várni — a leckéd a csendben érlelés, a kísértésed a titkolózás.',
    3: 'feladatként a Császárnő a teremtő gondoskodás: létrehozni, táplálni, széppé tenni — a leckéd az adás öröme, a kísértésed a túlgondoskodás és a kényeztetésbe fojtás.',
    4: 'feladatként a Császár a rendteremtés: keretet, struktúrát és felelősséget vállalni — a leckéd a saját tekintély felépítése, a kísértésed a merevség.',
    5: 'feladatként a Főpap a tudás továbbadása: tanulni, majd tanítani, értékrendet képviselni — a leckéd híddá válni a hagyomány és az emberek közt, a kísértésed a dogmatizmus.',
    6: 'feladatként a Szeretők a valódi választás művészete: szívvel dönteni és a döntés mellett kiállni — a leckéd az elköteleződés, a kísértésed az örök mérlegelés.',
    7: 'feladatként a Diadalszekér az irányított akarat: célt kitűzni és fegyelmezetten odaérni — a leckéd a saját életed gyeplőjének kézbevétele, a kísértésed a hajtás megállás nélkül.',
    8: 'feladatként az Igazságosság a mérleg tartása: dönteni, felelni a döntésekért és rendezni a függő ügyeket — a leckéd a következmények vállalása, a kísértésed az ítélkezés.',
    9: 'feladatként a Remete az elmélyülés: időnként kivonulni, hogy a saját bölcsességedhez hozzáférj — a leckéd az egyedüllét megszeretése, a kísértésed az elszigetelődés.',
    10: 'feladatként a Szerencsekerék a változás elfogadása: felismerni a ciklusokat és a jó pillanatban lépni — a leckéd az áramlással haladás, a kísértésed a szerencsére hagyatkozás.',
    11: 'feladatként az Erő a szelíd hatalom: az ösztönök megszelídítése erőszak nélkül — a leckéd a türelmes, belső erő kifejlesztése, a kísértésed az elfojtás vagy a nyers erő.',
    12: 'feladatként az Akasztott ember a nézőpontváltás: elengedni a kapaszkodást és másképp nézni — a leckéd az áldozat és a várakozás értelmének megtalálása, a kísértésed a mártírság.',
    13: 'feladatként a Halál a lezárás művészete: időben befejezni, ami lejárt, hogy jöhessen az új — a leckéd az elengedés, a kísértésed a kapaszkodás a halott formákba.',
    14: 'feladatként a Mértékletesség a vegyítés: ellentéteket kibékíteni, szélsőségek közt középutat találni — a leckéd a türelmes finomhangolás, a kísértésed a langyosság.',
    15: 'feladatként az Ördög a saját árnyék megismerése: szembenézni a vágyakkal, függésekkel, hatalmi játszmákkal — a leckéd a szenvedélyeid uralása, a kísértésed, hogy ők uraljanak téged.',
    16: 'feladatként a Torony a hamis biztonságok lebontása: engedni, hogy összedőljön, ami rossz alapra épült — a leckéd az újjáépítés bátorsága, a kísértésed a romok őrzése.',
    17: 'feladatként a Csillag a remény őrzése: inspirálni, gyógyítani, hosszú távú álmot követni — a leckéd a bizalom megtartása sötétben is, a kísértésed az elérhetetlen ideálba menekülés.',
    18: 'feladatként a Hold a tudattalannal való munka: megérzésekkel, álmokkal, félelmekkel bánni tanulni — a leckéd a saját mélységeid bejárása, a kísértésed az önáltatás.',
    19: 'feladatként a Nap a ragyogás vállalása: láthatóvá válni, örömöt és életerőt sugározni — a leckéd a felhőtlen önkifejezés, a kísértésed a rivaldafény hajszolása.',
    20: 'feladatként az Ítélet az újjászületés: felébreszteni magadban és másokban azt, ami aludt — a leckéd a múlt lezárása utáni hívás követése, a kísértésed a régi bűnök rágása.',
    21: 'feladatként a Világ a beteljesítés: befejezni a nagy köröket és egésszé rendezni az életed — a leckéd a teljesség megélése, a kísértésed a soha-be-nem-fejezés.',
    22: 'feladatként a Bolond a bizalom: mindig újra elindulni, könnyű szívvel, előre nem látható útra — a leckéd a kezdő szem megőrzése, a kísértésed a felelőtlen ugrás.'
  },

  /* ---- a pénzcsatornában ---- */
  money: {
    1: 'a pénzcsatornában a Mágus önálló, kezdeményező pénzteremtést jelez: a jövedelmed a saját ötleteidből és ügyességedből indul — alkalmazottként is akkor keresel jól, ha szabad kezet kapsz.',
    2: 'a pénzcsatornában a Főpapnő csendes, tudás-alapú jövedelmet jelez: tanácsadás, kutatás, háttérmunka — a pénzed nem hangos üzletekből, hanem mély hozzáértésből jön.',
    3: 'a pénzcsatornában a Császárnő bőség-mintát jelez: a pénz gondoskodáson, szépségen, minőségen át áramlik hozzád — akkor apad el, ha fukarkodni kezdesz vele.',
    4: 'a pénzcsatornában a Császár rendszer-építést kér: a pénzed struktúrából, szervezésből, hosszú távú építkezésből jön — az ötletszerű pénzügyek nálad megbosszulják magukat.',
    5: 'a pénzcsatornában a Főpap a tudásátadást jelöli forrásként: tanítás, mentorálás, szakértői szerep — abból élsz jól, amit továbbadsz, nem abból, amit felhalmozol.',
    6: 'a pénzcsatornában a Szeretők társas pénzügyi mintát jelez: partnerségek, közös vállalkozások — a pénzügyi döntéseidben a szív és az ész összehangolása a kulcs.',
    7: 'a pénzcsatornában a Diadalszekér célvezérelt jövedelmet jelez: konkrét célokért hajtasz jól — cél nélkül a pénz szétfolyik, céllal megsokszorozódik.',
    8: 'a pénzcsatornában az Igazságosság tiszta elszámolást kér: szerződések, átlátható ügyek — a szürke zónák nálad az átlagosnál gyorsabban ütnek vissza.',
    9: 'a pénzcsatornában a Remete szerény, de biztos mintát jelez: a pénz nálad eszköz, nem cél — egyedül végzett, elmélyült munkából jön a legjobban.',
    10: 'a pénzcsatornában a Szerencsekerék hullámzó anyagi ciklusokat jelez: fel- és leívelések váltják egymást — a leckéd a jó időszakokban tartalékolni, nem szinten tartani a költekezést.',
    11: 'a pénzcsatornában az Erő kitartás-alapú jövedelmet jelez: a pénzed hosszú, türelmes munkával épül — a gyors meggazdagodási utak nálad rendre zsákutcák.',
    12: 'a pénzcsatornában az Akasztott ember fordított logikát jelez: akkor indul meg a pénz, amikor elengeded a görcsös akarást — az önkéntes, hitből végzett munka nálad később anyagilag is megtérül.',
    13: 'a pénzcsatornában a Halál újrakezdő pénzmintát jelez: az anyagi életedben nagy lezárások és újrakezdések váltják egymást — a régi bevételi forrásokhoz ragaszkodás a fő kockázatod.',
    14: 'a pénzcsatornában a Mértékletesség az egyensúlyt kéri: se fösvénység, se szórás — a fokozatos, vegyes forrásokból építkező pénzügy a te utad.',
    15: 'a pénzcsatornában az Ördög erős pénz-vonzást jelez árnyékkal: jó pénzszerző vagy, de a pénz könnyen urrá válhat rajtad — a függőségek (státusz, luxus, játék) a gyenge pontod.',
    16: 'a pénzcsatornában a Torony pénzügyi összeomlás-újjáépítés mintát jelez: a rossz alapra épült anyagi konstrukcióid látványosan dőlnek — tartalék és több lábon állás a védelmed.',
    17: 'a pénzcsatornában a Csillag jövő-orientált jövedelmet jelez: újító, inspiráló, akár művészi területről jön a pénzed — a megtérülés lassabb, de tartósabb az átlagnál.',
    18: 'a pénzcsatornában a Hold bizonytalan kontúrú pénzügyeket jelez: megérzésből jó, önáltatásból rossz döntések — írásos, számszerű nyilvántartás nálad nem formalitás, hanem védelem.',
    19: 'a pénzcsatornában a Nap napfényes pénzmintát jelez: a láthatóság hozza a pénzt — minél inkább vállalod magad nyilvánosan, annál jobban keresel.',
    20: 'a pénzcsatornában az Ítélet örökség- és fordulat-mintát jelez: az anyagi életedben hirtelen hívások, második esélyek jönnek — a leckéd, hogy a régi anyagi sérelmeket lezárd.',
    21: 'a pénzcsatornában a Világ nemzetközi, széles körű pénzmintát jelez: a jövedelmed tág térből — utazásból, külföldből, nagy rendszerekből — jön a legjobban.',
    22: 'a pénzcsatornában a Bolond szabálytalan pénzmintát jelez: nem a biztos állás, hanem a szabad mozgás hozza a pénzed — a leckéd a könnyedség és a felelőtlenség szétválasztása.'
  },

  /* ---- a kapcsolati csatornában ---- */
  love: {
    1: 'a kapcsolati csatornában a Mágus kezdeményező szerelmi mintát jelez: te teszed meg az első lépést, és a kapcsolataidnak közös alkotás kell — unatkozó párkapcsolatban elsorvadsz.',
    2: 'a kapcsolati csatornában a Főpapnő mély, szavak nélküli kötődést kér: a társadnak a belső világodhoz kell kulcsot kapnia — a felszínes kapcsolat neked magány kettesben.',
    3: 'a kapcsolati csatornában a Császárnő gondoskodó szerelmi mintát jelez: adni, táplálni, otthont teremteni — a leckéd, hogy a gondoskodás ne váljon anyáskodássá.',
    4: 'a kapcsolati csatornában a Császár biztonság-alapú kötődést jelez: neked a kapcsolat váz és megbízhatóság — a leckéd, hogy a rend ne öljön meg minden spontaneitást.',
    5: 'a kapcsolati csatornában a Főpap közös értékrendet kér: a tartós kapcsolatod alapja a közös hit vagy világnézet — értékrendi szakadék fölött nálad nem épül híd.',
    6: 'a kapcsolati csatornában a Szeretők a rendszer legerősebb szerelmi jele: a párkapcsolat központi életterület nálad — a leckéd a tudatos választás és a mellette való kitartás.',
    7: 'a kapcsolati csatornában a Diadalszekér hódító mintát jelez: a megszerzés izgalma hajt — a leckéd megtanulni, hogy a kapcsolat a megérkezés után kezdődik, nem ér véget.',
    8: 'a kapcsolati csatornában az Igazságosság kiegyenlített kapcsolatot kér: adok-kapok egyensúly, kimondott megállapodások — a ki nem mondott elvárások nálad mérgezőbbek az átlagnál.',
    9: 'a kapcsolati csatornában a Remete tér-igényes kötődést jelez: szükséged van egyedüllétre a kapcsolaton belül is — a társad akkor jó, ha ezt nem elutasításnak olvassa.',
    10: 'a kapcsolati csatornában a Szerencsekerék fordulatos szerelmi utat jelez: találkozások és váltások ciklusai — a leckéd felismerni, mikor fordít a kerék, és mikor forgatod te feleslegesen.',
    11: 'a kapcsolati csatornában az Erő szenvedélyes, de megszelídítendő kötődést jelez: erős vonzások és indulatok — a leckéd a szelíd erő: hatni anélkül, hogy uralkodnál.',
    12: 'a kapcsolati csatornában az Akasztott ember áldozat-mintát jelez: hajlamos vagy túl sokat feladni a kapcsolatért — a leckéd az egészséges áldozat és az önfeladás szétválasztása.',
    13: 'a kapcsolati csatornában a Halál átalakító kapcsolatokat jelez: a nagy kapcsolataid gyökeresen megváltoztatnak — a leckéd elengedni azt, ami lejárt, mielőtt megmérgezné az újat.',
    14: 'a kapcsolati csatornában a Mértékletesség a fokozatosság kötődése: lassan épülő, kiegyensúlyozott kapcsolat való neked — a viharos szerelmek nálad kimerítenek, nem táplálnak.',
    15: 'a kapcsolati csatornában az Ördög mágneses, intenzív vonzásokat jelez: erős szenvedély, birtoklás, játszmák kockázatával — a leckéd a szenvedély megtartása függés nélkül.',
    16: 'a kapcsolati csatornában a Torony felszabadító töréseket jelez: a hamis alapú kapcsolataid látványosan érnek véget — minden ilyen összeomlás valójában ajtó egy igazabb kötődés felé.',
    17: 'a kapcsolati csatornában a Csillag ideál-kereső mintát jelez: múzsára, lelki társra vágysz — a leckéd a valós embert szeretni, nem a benne meglátott csillagképet.',
    18: 'a kapcsolati csatornában a Hold érzelmi mélyvizet jelez: megérzed a másikat szavak nélkül — az árnyoldala a vetítés: néha azt látod a társadban, ami a saját mélyedből jön.',
    19: 'a kapcsolati csatornában a Nap meleg, nyílt kötődést jelez: játékosság, öröm, közös ragyogás — az a kapcsolat való neked, amelyben mindketten nagyobbra nőtök, nem árnyékoljátok egymást.',
    20: 'a kapcsolati csatornában az Ítélet karmikus találkozásokat jelez: a fontos kapcsolataid „hívásként" érkeznek és régi mintákat zárnak le — a második esélyeknek nálad különös súlya van.',
    21: 'a kapcsolati csatornában a Világ beteljesítő társkapcsolatot ígér: a kötődéseid tág világot nyitnak — távoli származású társ, közös utazások, együtt lezárt nagy körök.',
    22: 'a kapcsolati csatornában a Bolond szabad kötődést kér: levegő és játék nélkül megfulladsz — a leckéd az elköteleződés megtanulása a szabadság feladása nélkül.'
  },

  /* ---- generációs (apai/anyai) vonalon és a gyökerek pontján ---- */
  ancestry: {
    1: 'örökségként a Mágus tettre kész, ügyes ősöket jelez: a családból hozott ajándékod a kezdeményezőkészség — a feldolgozandó minta az erő önző használata.',
    2: 'örökségként a Főpapnő tudást őrző ági mintát jelez: a családban tanítók, gyógyítók, titkok tudói — az ajándék az intuíció, a feldolgozandó minta az elhallgatás.',
    3: 'örökségként a Császárnő erős anyai-gondoskodó mintát ad: bőség és melegség az ajándék — a feldolgozandó minta a szeretettel fojtás és a túlféltés.',
    4: 'örökségként a Császár erős rendtartó ősöket jelez: szervezők, építők, családfők — az ajándék a tartás, a feldolgozandó minta a rideg tekintélyelv.',
    5: 'örökségként a Főpap hagyományőrző ágat jelez: erős szabályok, hit, rítusok — az ajándék az értékrend, a feldolgozandó minta a „mit szólnak mások" uralma.',
    6: 'örökségként a Szeretők a párválasztás családi mintáit emeli ki: nagy szerelmek vagy nagy kompromisszumok az ágon — a leckéd tudatosan választani, nem a minta szerint.',
    7: 'örökségként a Diadalszekér küzdő, törekvő ősöket jelez: az ajándék a hajtóerő — a feldolgozandó minta a teljesítménybe menekülés és a soha-elég érzése.',
    8: 'örökségként az Igazságosság rendezetlen elszámolásokat jelezhet az ágon: viták, osztozkodások, ki nem mondott igazságok — a leckéd az őszinte rendezés, akár jelképesen is.',
    9: 'örökségként a Remete magányos, bölcs ősöket jelez: az ajándék az önállóság és a mélység — a feldolgozandó minta az érzelmi elzárkózás öröklése.',
    10: 'örökségként a Szerencsekerék nagy sorsfordulós családtörténetet jelez: emelkedések és bukások az ágon — a leckéd, hogy a család hullámzó sorsát ne ismételd öntudatlanul.',
    11: 'örökségként az Erő nagy teherbírású ősöket jelez: az ajándék a szívósság — a feldolgozandó minta az összeszorított fogú tűrés, amely nem kér segítséget.',
    12: 'örökségként az Akasztott ember önfeláldozó ági mintát jelez: valaki(k) az ágon feláldozták magukat a többiekért — az ajándék az odaadás, a leckéd, hogy neked már ne kelljen.',
    13: 'örökségként a Halál nagy veszteségeket és újrakezdéseket hordozó ágat jelez: az ajándék az újrakezdés képessége — a leckéd a gyász végigvitele, amit az ősök talán elhalasztottak.',
    14: 'örökségként a Mértékletesség békítő, kiegyensúlyozó ősöket jelez: az ajándék a türelem és a gyógyító jelenlét — a feldolgozandó minta a konfliktuskerülés békesség címén.',
    15: 'örökségként az Ördög erős szenvedély- és függésmintákat jelez az ágon: az ajándék az életerő és az érvényesülés — a leckéd a családi függőség-minták (ital, játék, hatalom) megtörése.',
    16: 'örökségként a Torony családi töréseket jelez: költözések, veszteségek, összeomlások az ágon — az ajándék az újjáépítés tudása, a leckéd a katasztrófa-várás szorongásának letétele.',
    17: 'örökségként a Csillag álmodó, tehetséges ősöket jelez: az ajándék az inspiráció — a feldolgozandó minta a meg nem valósított álmok csendes szomorúsága, amelyet neked már szabad valóra váltani.',
    18: 'örökségként a Hold érzékeny, sejtelmes ági mintát jelez: erős megérzések, ki nem beszélt családi történetek — a leckéd kimondani, amit az ág elhallgatott.',
    19: 'örökségként a Nap életerős, ragyogó ősöket jelez: az ajándék az optimizmus és a kisugárzás — a feldolgozandó minta a látszat-ragyogás, amely mögé a bajokat rejtette a család.',
    20: 'örökségként az Ítélet a nemzedéki hívást jelzi: az ágon ismétlődő sorsfeladat vár arra, aki felébred és lezárja — a rendszer szerint ez most rád vár.',
    21: 'örökségként a Világ kiteljesedett vagy világjáró ősöket jelez: az ajándék a tágasság — a leckéd befejezni, amit az ág elkezdett, és hazavinni, amit szétszórt.',
    22: 'örökségként a Bolond szabad szellemű, vándorló ősöket jelez: az ajándék a könnyedség és az újrakezdés bátorsága — a feldolgozandó minta a gyökértelenség.'
  }
};
