/*
 * matrix-deep.js — a Sorsmátrix teljes kiértékelésének szövegei
 * A buildDestinyMatrix() szintézisrésze használja: a kiszámolt mátrixpontok
 * EGYMÁS KÖZTI összefüggéseiből (ismétlődések, egybeesések, átfedések)
 * von le személyre szabott következtetéseket.
 *
 * Sima script (nem ES modul). Betöltés: matrix.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.matrixDeep = {

  intro: 'A mátrix igazi olvasata nem az egyes pontok külön-külön, hanem az, ahogyan ismétlődnek és összekapcsolódnak: ahol ugyanaz az arkánum többször bukkan fel, ott a rendszer szerint az élet „ragaszkodik" egy témához.',

  repeated: 'A(z) %ARC% összesen %N% kulcsponton jelenik meg a mátrixodban (%POS%): a rendszer olvasatában ez a mátrixod vezérfonala — ez a téma az, amely elől nem lehet kitérni, mert több irányból is visszatér. %TEXT%',

  noRepeat: 'A mátrixod kulcspontjain nincs háromnál többször ismétlődő arkánum: a témáid szétoszlanak — sokszínűbb, de kevésbé egyetlen fókusz köré rendezett életrajzot jelez.',

  centerLinks: {
    personality: 'A középponti fő feladatod ugyanaz az arkánum, mint a személyiség-pontod: az vagy, amivé válnod kell — a rendszer szerint nálad nincs szakadék a természetes éned és az életfeladatod között.',
    talent: 'A középponti fő feladatod egybeesik a talentum-pontoddal: a feladatodhoz az eszköz is veled született — a kérdés csak az, mered-e használni.',
    roots: 'A középponti fő feladatod egybeesik a gyökerek pontjával: a családi örökség feldolgozása nálad nem mellékszál, hanem maga a fő feladat.',
    purpose: 'A fő feladatod és a személyes életfeladatod ugyanabba az arkánumba fut: ritka egybeesés — a komfortzónád és az önkeresésed egy irányba mutat, a fejlődésed nem a kényelmed ellenében zajlik.',
    money: 'A pénzcsatornád érinti a mátrix középpontját: az anyagi kérdések nálad nem különálló ügyek — a pénz akkor indul meg, amikor a fő feladatoddal foglalkozol, és akkor apad el, amikor kitérsz előle.',
    love: 'A kapcsolati csatornád érinti a mátrix középpontját: a párkapcsolat nálad a fő feladat gyakorlóterepe — a legfontosabb leckéidet társon keresztül kapod.'
  },

  channelLinks: {
    moneyTalent: 'A pénzcsatornádban ott a talentum-pontod arkánuma: a rendszer szerint a jövedelmed természetes forrása a saját tehetséged kibontása — a „mellékes" pénzkeresés nálad tartósan nem működik.',
    moneyRoots: 'A pénzcsatornádban a gyökerek arkánuma áll: az anyagi mintáidat a családból hozod — az öröklött pénz-hiedelmek tudatosítása nálad közvetlenül a pénztárcán látszik meg.',
    lovePersonality: 'A kapcsolati csatornádban ott a személyiség-pontod arkánuma: a párkapcsolat nálad az önazonosság terepe — csak olyan kapcsolat működik tartósan, amelyben önmagad lehetsz.',
    loveRoots: 'A kapcsolati csatornádban a gyökerek arkánuma áll: a párválasztásod a családi mintát ismétli vagy gyógyítja — érdemes tudatosan megnézni, melyiket.',
    shared: 'A pénz- és a kapcsolati csatornád közös csúcsba fut, és útközben közös arkánumot is érint: a rendszer szerint nálad az anyagi és az érzelmi biztonság összefonódik — az egyik billenése a másikat is billenti.'
  },

  generational: {
    same: 'Az apai és az anyai generációs vonal ugyanabba az arkánumba fut: mindkét ág ugyanazt a leckét örökítette rád — ez a téma nálad kétszeres súllyal van jelen, de a feldolgozása is két ágat gyógyít.',
    rootsMale: 'A gyökereid pontja megegyezik az apai vonal eredményével: a családi örökséged súlypontja az apai ágon van — az ottani minták ismétlődnek a legerősebben.',
    rootsFemale: 'A gyökereid pontja megegyezik az anyai vonal eredményével: a családi örökséged súlypontja az anyai ágon van — az ottani minták ismétlődnek a legerősebben.'
  },

  purposeStage: {
    personal: 'Az életfeladat-hármasból a rendszer szerint most, %AGE% évesen a SZEMÉLYES feladat (%ARC%) van fókuszban: a hagyomány ezt nagyjából a 40. életévig teszi — most magadat építed, a társas és spirituális szint később nyílik rá erre az alapra.',
    social: 'Az életfeladat-hármasból a rendszer szerint most, %AGE% évesen a TÁRSAS feladat (%ARC%) van fókuszban: a hagyomány ezt nagyjából a 40–60 év közti szakaszra teszi — amit eddig magadban felépítettél, azt most a közösség felé kell fordítanod.',
    spiritual: 'Az életfeladat-hármasból a rendszer szerint most, %AGE% évesen a SPIRITUÁLIS feladat (%ARC%) van fókuszban: a hagyomány ezt a 60. életév utánra teszi — a kérdés már nem az, mit érsz el, hanem az, mit adsz tovább és minek látod az egészet.'
  },

  ageNext: 'A következő évtizedes fordulópontod %AGE% évesen jön: az életkor-kerék szerint akkor a(z) %ARC% témája nyílik meg — érdemes úgy tekinteni rá, mint egy előre kitűzött tananyagra. %TEXT%',

  note: 'Ez a kiértékelés a Sorsmátrix-rendszer saját szabályait követi (az egybeesések a 22-es redukció miatt gyakoribbak, mint elsőre gondolnánk — kb. minden ötödik pontpár egyezik véletlenül is). Önismereti tükörnek való, nem jóslatnak.'
};
