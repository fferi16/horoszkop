/*
 * lenormand-pairs.js — a Lenormand lappár-kombinációk adatbázisa
 * A Lenormand-olvasás lelke: két lap együtt "mondatot" ad.
 * - special: kézzel írt klasszikus párok (sorrendfüggetlen kulcs: kisebb-nagyobb szám)
 * - subj/area: az összerakó elemei — minden pár kap olvasatot, a nem kézzel
 *   írtak a "subj(A) + area(B)" képlettel állnak össze.
 * HDATA.lenormandPairs.combine(aId, bId) adja vissza a szöveget.
 *
 * Sima script (nem ES modul). Betöltés: lenormand.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.lenormandPairs = (function () {

  /* Mit JELENT a lap (alany-szerep) */
  var subj = {
    l01: 'hír, érkezés', l02: 'kis szerencse, gyors lehetőség', l03: 'utazás, távoli ügy',
    l04: 'az otthon, a család ügye', l05: 'az egészség, a lassú növekedés', l06: 'zavar, bizonytalanság',
    l07: 'csábítás, kerülőút, rivális', l08: 'lezárás, vég', l09: 'ajándék, öröm, meghívás',
    l10: 'hirtelen döntés, gyors vágás', l11: 'vita, ismétlődő súrlódás', l12: 'izgatott beszéd, pletyka',
    l13: 'új, kicsiben induló dolog', l14: 'ravaszság, munkahelyi ügy', l15: 'erő, hatalmi tényező, főnök',
    l16: 'remény, tisztánlátás, jó irány', l17: 'változás, költözés', l18: 'barát, megbízható segítő',
    l19: 'hivatalos ügy, intézmény', l20: 'társasági esemény, nyilvánosság', l21: 'akadály, késedelem',
    l22: 'döntés, válaszút', l23: 'lassú veszteség, őrlődés', l24: 'szerelem, szívügy',
    l25: 'kötés, szerződés, elkötelezés', l26: 'titok, rejtett tudás', l27: 'írásos hír, dokumentum',
    l28: 'a kérdés férfi szereplője', l29: 'a kérdés női szereplője', l30: 'békés érlelődés, támogató tapasztalat',
    l31: 'siker, győzelem', l32: 'elismerés, érzelmi ragyogás', l33: 'megoldás, bizonyosság',
    l34: 'pénz, üzleti ügy', l35: 'tartós stabilitás, munka', l36: 'teher, próbatétel'
  };

  /* MILYEN TERÜLETEN (módosító-szerep) */
  var area = {
    l01: 'hírek és érkezések körül', l02: 'egy gyors, múló lehetőségben', l03: 'utazás vagy távoli ügy kapcsán',
    l04: 'az otthon és a család területén', l05: 'az egészség és a hosszú távú növekedés terén', l06: 'zavaros, tisztázatlan körülmények közt',
    l07: 'kerülőúton, rivális vagy csábítás árnyékában', l08: 'egy lezáruló ügyben', l09: 'örömteli, ajándékozó közegben',
    l10: 'hirtelen, éles helyzetben', l11: 'viták és súrlódások közepette', l12: 'sok beszéd és izgatottság közt',
    l13: 'valami újban, kicsiben', l14: 'a munka terén vagy ravaszsággal körítve', l15: 'egy erős személy vagy hatalom vonzásában',
    l16: 'reményteli, tisztuló irányban', l17: 'változás és átrendeződés közben', l18: 'baráti, megbízható közegben',
    l19: 'hivatalos-intézményes úton', l20: 'társaságban, nyilvánosan', l21: 'akadályokkal és késéssel',
    l22: 'döntési helyzetben', l23: 'lassú fogyás, apadás közben', l24: 'a szívügyek terén',
    l25: 'kötés, megállapodás keretében', l26: 'titokban vagy tudás útján', l27: 'írásban, papíron',
    l28: 'a férfi szereplő körül', l29: 'a női szereplő körül', l30: 'békés, érett mederben',
    l31: 'sikeres, napfényes kimenettel', l32: 'elismeréstől kísérve', l33: 'biztos megoldással',
    l34: 'a pénz és az üzlet terén', l35: 'tartós, munkával megalapozott formában', l36: 'teherrel, próbatétellel súlyosbítva'
  };

  /* Kézzel írt klasszikus párok — kulcs: 'kisebb-nagyobb' lapszám */
  function k(a, b) { return Math.min(a, b) + '-' + Math.max(a, b); }
  var special = {};
  function S(a, b, text) { special[k(a, b)] = text; }

  /* --- Lovas (1): hírek --- */
  S(1, 24, 'szerelmes üzenet: hír érkezik a szíved ügyében — vagy valaki közeledik, aki a szívednek szól');
  S(1, 27, 'fontos levél vagy hivatalos értesítés van úton — hamarosan kézbesítik');
  S(1, 34, 'pénzügyi hír: ajánlat, kifizetés vagy üzleti megkeresés érkezik');
  S(1, 4, 'látogató vagy hír érkezik a házhoz — a családot érintő újság');
  S(1, 3, 'messziről jövő hír: külföldi vagy távoli kapcsolat jelentkezik');
  S(1, 31, 'örömhír: győzelemről, sikerről szóló üzenet');
  S(1, 8, 'lezárásról szóló hír — valami végének a bejelentése');
  S(1, 28, 'egy férfi közeledik vagy jelentkezik — tőle érkezik a hír');
  S(1, 29, 'egy nő közeledik vagy jelentkezik — tőle érkezik a hír');
  S(1, 13, 'hír egy gyermekről vagy egy új kezdetről — örömteli kis újság');

  /* --- Lóhere (2): kis szerencse --- */
  S(2, 34, 'gyors, kisebb pénzszerencse: nyereség vagy váratlan bevétel — kapd el, amíg tart');
  S(2, 21, 'a szerencse akadályba ütközik: a lehetőség él, de késik — ne add fel az első falnál');
  S(2, 31, 'kettős szerencse: ritka kedvező együttállás — a kis lehetőségből nagy siker nőhet');
  S(2, 6, 'a szerencse bizonytalan: ami kedvezőnek tűnik, előbb tisztázást kér');
  S(2, 24, 'szerencsés fordulat a szerelemben: kedvező, könnyű időszak a szívügyekben');

  /* --- Hajó (3): utazás, távolság --- */
  S(3, 34, 'üzleti út vagy külföldi kereset: a pénz a távolból érkezik');
  S(3, 4, 'költözés vagy hazatérés: az otthon és a távolság feszültsége rendeződik');
  S(3, 24, 'távkapcsolat vagy messziről jött szerelem — vágyódás a szívügyben');
  S(3, 35, 'hosszú út utáni megérkezés: a vándorlás tartós révbe ér');
  S(3, 17, 'nagy helyváltoztatás: költözés, akár külföldre');

  /* --- Ház (4): otthon, család --- */
  S(4, 34, 'ingatlan és pénz: ház körüli anyagi ügy — vétel, eladás, felújítás vagy örökség');
  S(4, 25, 'az otthonra kötött szerződés: adásvétel, bérlet — vagy összeköltözés, családi kötés');
  S(4, 24, 'szerelem az otthon falai közt: összeköltözés, családdá válás — a szív hazaér');
  S(4, 8, 'lezárás a családban: elköltözés, elengedés — egy otthon-korszak vége');
  S(4, 18, 'házhoz kötődő barát: megbízható ember a családi körben');
  S(4, 5, 'a család egészsége és gyarapodása: mélyülő gyökerek');

  /* --- Fa (5): egészség --- */
  S(5, 8, 'egészségi figyelmeztetés: lezáruló, kimerülő szakasz — ideje komolyan pihenni és kivizsgáltatni');
  S(5, 31, 'gyógyulás, erőre kapás: az életerő visszatér');
  S(5, 23, 'lassan őrlődő egészség: valami apránként meríti az erőt — állítsd meg időben');
  S(5, 35, 'tartós, jó egészség: mély gyökerű életerő');
  S(5, 24, 'mélyülő, gyökeret verő szerelem: a kapcsolat organikusan növekszik');

  /* --- Felhők (6): zavar --- */
  S(6, 33, 'a köd feloszlik: a zavaros helyzetre megoldás, tiszta válasz érkezik');
  S(6, 22, 'döntés ködben: most ne dönts véglegeset — előbb tisztázd, mit nem látsz');
  S(6, 24, 'zavar a szívügyekben: félreértés vagy bizonytalanság a kapcsolatban — tisztázó beszélgetést kér');
  S(6, 34, 'zavaros pénzügy: átláthatatlan anyagi helyzet — világíts bele, mielőtt lépsz');

  /* --- Kígyó (7): csábítás, rivális --- */
  S(7, 24, 'rivális a szerelemben vagy csábítás: a szívügyben harmadik szereplő árnyéka — nézz a felszín mögé');
  S(7, 34, 'pénzügyi óvatosság: kerülőúton mozgó pénz, megtévesztés kockázata — olvasd el az apróbetűt');
  S(7, 28, 'egy férfival óvatosan: nem minden az, aminek mutatja magát');
  S(7, 29, 'egy nővel óvatosan: rivális vagy kétes szándék lehet a háttérben');
  S(7, 22, 'kerülőút a válaszúton: a hosszabb út bizonyulhat járhatóbbnak — de nézd meg, ki terelget');

  /* --- Koporsó (8): lezárás --- */
  S(8, 24, 'szerelmi bánat vagy egy kapcsolat lezárulása — gyász után hely az újnak');
  S(8, 34, 'pénzügyi veszteség vagy egy bevételi forrás vége — zárd le rendezetten');
  S(8, 13, 'egy vég és egy kezdet kéz a kézben: ami lezárul, kicsiben újjászületik');
  S(8, 31, 'nehéz lezárás után napfény: a vég felszabadulásnak bizonyul');
  S(8, 19, 'hivatalos lezárás: ügy, szerződés vagy munkaviszony vége intézményes úton');

  /* --- Csokor (9): ajándék --- */
  S(9, 24, 'szerelmi gesztus: virág, meghívás, kedvesség — a szívügy szépen alakul');
  S(9, 20, 'meghívás társaságba: ünnepség, rendezvény, kellemes esemény');
  S(9, 34, 'anyagi ajándék: prémium, juttatás, nagyvonalú gesztus');

  /* --- Kasza (10): hirtelen vágás --- */
  S(10, 24, 'hirtelen fordulat a szerelemben: gyors fellángolás vagy éles szakítás — nem lesz átmenet');
  S(10, 34, 'gyors pénzügyi döntés: hirtelen bevétel vagy váratlan kiadás — az időzítés minden');
  S(10, 33, 'gyors megoldás: egyetlen határozott vágással megoldódik, ami régóta húzódik');
  S(10, 5, 'egészségügyi figyelmeztetés: hirtelen jelentkező panasz — ne halogasd az orvost');

  /* --- Seprű (11): vita --- */
  S(11, 24, 'ismétlődő vita a kapcsolatban: ugyanaz a kör — a minta megtörése hozna békét');
  S(11, 4, 'családi súrlódások: feszültség a házon belül — tisztázó nagytakarítást kér');
  S(11, 19, 'vita hivatalos úton: per, panasz, hatósági ügy');

  /* --- Madarak (12): pletyka --- */
  S(12, 24, 'sok beszéd a szerelemről: pletyka vagy izgatott találgatás a kapcsolat körül — ne a szóbeszédre hallgass');
  S(12, 27, 'telefonok és üzenetek pörgése: élénk kommunikáció, gyors hírváltás');

  /* --- Gyermek (13): új kezdet --- */
  S(13, 24, 'új szerelem születik: friss, ártatlan kezdet a szívügyekben');
  S(13, 34, 'kicsiben induló pénzügy: kis befektetés, amiből növekedés lehet');
  S(13, 17, 'gyermekáldás vagy nagy, örömteli újdonság a láthatáron');

  /* --- Róka (14): munka, ravaszság --- */
  S(14, 34, 'munkából jövő pénz: kereset, mellékes — de számolj utána, minden tiszta-e');
  S(14, 24, 'óvatosság a szívügyben: valaki taktikázik — a szép szavak mögé nézz');
  S(14, 19, 'ügyeskedés hivatalos ügyben: járj nyitott szemmel a papírmunkában');
  S(14, 18, 'barátnak látszó róka: nem minden segítő önzetlen — válogasd meg, kiben bízol');

  /* --- Medve (15): erő, főnök --- */
  S(15, 34, 'nagy pénz, befolyásos forrásból: főnök, befektető vagy vagyonos személy szerepe');
  S(15, 24, 'erős, védelmező szerelem — vagy birtokló féltékenység: az erő iránya dönt');
  S(15, 19, 'hatalmi ügy hivatalban: erős ember áll az ügy mögött vagy útjában');

  /* --- Csillagok (16): remény --- */
  S(16, 24, 'reményteli szerelem: tiszta égbolt a szívügyek felett — jó vezettetés');
  S(16, 33, 'a jó irány bizonyossága: az út világos, a megoldás kirajzolódik');
  S(16, 26, 'megvilágosodó titok: a tudás utat mutat');

  /* --- Gólya (17): változás --- */
  S(17, 4, 'költözés: az otthon megújul vagy helyet vált');
  S(17, 24, 'a kapcsolat új szakaszba lép: pozitív fordulat a szívügyekben');
  S(17, 34, 'anyagi fordulat jobbra: a pénzügyek átrendeződnek — javulás');
  S(17, 13, 'gyermekáldás vagy családbővülés klasszikus jelzése');

  /* --- Kutya (18): barát --- */
  S(18, 24, 'barátságból szerelem — vagy hűséges, megbízható társ a szívügyben');
  S(18, 34, 'megbízható üzleti partner: pénzügy baráti, tiszta kézben');
  S(18, 36, 'barát a bajban: a terhet nem egyedül viszed');

  /* --- Torony (19): hivatal --- */
  S(19, 27, 'hivatalos irat: határozat, szerződés, igazolás érkezik');
  S(19, 34, 'pénz hivatalos úton: adó, támogatás, banki ügy');
  S(19, 25, 'hivatalos kötés: házasságkötés, cégalapítás, szerződés intézményes formában');

  /* --- Kert (20): társaság --- */
  S(20, 24, 'nyilvános szerelem: megismerkedés társaságban — vagy vállalt, látható kapcsolat');
  S(20, 34, 'üzlet társaságban: hálózat, rendezvény, közös vállalkozás hozza a pénzt');

  /* --- Hegy (21): akadály --- */
  S(21, 24, 'akadály a szerelemben: távolság, harmadik fél vagy belső fal — nem végleges, de meg kell mászni');
  S(21, 34, 'pénzügyi akadály: befagyott összeg, késő kifizetés — türelem és nyomásgyakorlás együtt');
  S(21, 33, 'az akadály kulcsra nyílik: amit falnak hittél, ajtónak bizonyul');
  S(21, 22, 'elakadt döntés: a válaszút előtt torlasz — előbb az akadályt kezeld, aztán dönts');

  /* --- Út (22): döntés --- */
  S(22, 24, 'döntés a szívügyben: két érzés vagy két ember között — a nem-választás is választás');
  S(22, 34, 'pénzügyi válaszút: két ajánlat vagy irány — számold ki mindkettőt');
  S(22, 33, 'jó döntés: a választott út kulcsra zárja a kérdést');

  /* --- Egerek (23): veszteség --- */
  S(23, 34, 'apadó pénz: lassú, észrevétlen szivárgás — keresd meg a lyukat a zsákon');
  S(23, 24, 'kopó szerelem: a kapcsolatot apránként emészti valami — ideje megnevezni, mi');
  S(23, 5, 'őrlődő egészség: a stressz lassan eszi az erőt');

  /* --- Szív (24): szerelem --- */
  S(24, 25, 'eljegyzés, elköteleződés: a szerelem kötéssé érik — a Lenormand egyik legszebb párja');
  S(24, 31, 'boldog, kiteljesedő szerelem: napfény a szívügyekben');
  S(24, 33, 'a szív kulcsa: szerelmi kérdésre igen — a kapcsolat megoldás, nem probléma');
  S(24, 26, 'titkos szerelem: rejtett érzelem vagy titokban tartott kapcsolat');
  S(24, 27, 'szerelmes levél: írásos vallomás vagy fontos üzenet a szívügyben');
  S(24, 32, 'romantika és elismerés: a kapcsolat ragyog — és látják is');
  S(24, 34, 'szerelem és pénz összefonódva: közös anyagiak — vagy anyagi kérdés a kapcsolatban');
  S(24, 35, 'tartós szerelem: lehorgonyzó, hosszú távra szóló kötődés');
  S(24, 36, 'terhelt szerelem: a szívügy próbatétellel jár — a hit viszi át');
  S(24, 28, 'a férfi szíve: az ő érzelmei állnak a kérdés középpontjában');
  S(24, 29, 'a nő szíve: az ő érzelmei állnak a kérdés középpontjában');

  /* --- Gyűrű (25): kötés --- */
  S(25, 34, 'üzleti szerződés: pénzügyi megállapodás köttetik — nézd át a feltételeket');
  S(25, 8, 'felbomló kötés: szerződés vagy kapcsolat zárul le');
  S(25, 33, 'a megállapodás révbe ér: biztos kötés, működő egyezség');
  S(25, 11, 'ismétlődő kör: a kötésben újra és újra ugyanaz a súrlódás tér vissza');

  /* --- Könyv (26): titok --- */
  S(26, 33, 'a titok nyitja: rejtett tudás kerül napvilágra — a felismerés old');
  S(26, 34, 'pénzügyi titok: rejtett költség vagy nem publikus lehetőség');
  S(26, 27, 'tanulás, vizsga, dokumentumok: a tudás papírformát ölt');

  /* --- Levél (27): írás --- */
  S(27, 34, 'pénzről szóló irat: számla, szerződés, banki levél');
  S(27, 33, 'a válasz írásban érkezik — és megoldást hoz');

  /* --- Úr/Hölgy (28/29) --- */
  S(28, 29, 'a pár: a kérdés két főszereplője egymás mellett — a köztük fekvő és őket követő lapok mesélik a történetüket');
  S(28, 34, 'a férfi és a pénz: az ő anyagi ügyei, keresete a téma');
  S(29, 34, 'a nő és a pénz: az ő anyagi ügyei, keresete a téma');

  /* --- Liliom (30): béke, érettség --- */
  S(30, 24, 'érett, letisztult szerelem: nem viharzó, hanem mély és békés kötődés');
  S(30, 35, 'kiegyensúlyozott, tartós békeidőszak: rendezett élet');

  /* --- Nap (31): siker --- */
  S(31, 34, 'anyagi siker: gyarapodás, jól fizető időszak — az erőfeszítés beérik');
  S(31, 33, 'teljes siker: a lehető legjobb kimenetel — ajtó és kulcs egyszerre');
  S(31, 35, 'tartós siker: nem fellángolás, hanem berendezkedő jólét');

  /* --- Hold (32): elismerés --- */
  S(32, 34, 'jól fizető hírnév: az elismerés pénzre váltható');
  S(32, 24, 'mély romantika: érzelmekben gazdag, intuitív kapcsolat');

  /* --- Kulcs (33): megoldás --- */
  S(33, 34, 'pénzügyi megoldás: az anyagi kérdés nyitja meglesz — biztos forrás');
  S(33, 35, 'tartós megoldás: ami most rendeződik, hosszú távra szól');
  S(33, 36, 'a próbatétel kulcsa: a teher értelmet nyer, és letehetővé válik');

  /* --- Halak (34): pénz --- */
  S(34, 35, 'stabil anyagi alap: pénz, ami megmarad — jól lehorgonyzott jólét');
  S(34, 36, 'pénzügyi teher: adósság, kötelezettség — rendezhető, de súlya van');

  /* --- Horgony (35), Kereszt (36) --- */
  S(35, 36, 'terhet bíró stabilitás: a nehézség nem dönt le — a kitartás átvisz');
  S(35, 17, 'a változás után révbe érsz: az átrendeződés tartós állapotba fut ki');
  S(36, 16, 'a próbatétel értelme megvilágosodik: a teher iránytűvé válik');

  function combine(aId, bId) {
    var an = parseInt(aId.slice(1), 10), bn = parseInt(bId.slice(1), 10);
    var sp = special[k(an, bn)];
    if (sp) return sp;
    return (subj[aId] || '') + ' ' + (area[bId] || '');
  }

  return { special: special, subj: subj, area: area, combine: combine };
})();
