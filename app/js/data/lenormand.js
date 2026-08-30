/*
 * lenormand.js — a 36 lapos Petit Lenormand magyar jelentésekkel,
 * kirakási módok és kiértékelő szövegek.
 * A Lenormand-hagyományban NINCS fordított állás; az olvasás kombinatorikus:
 * a lapok párban-láncban, "mondatszerűen" olvasandók.
 * polarity: '+' kedvező, '-' nehéz, '0' semleges lap.
 * Sima script (nem ES modul).
 */

window.HDATA = window.HDATA || {};

window.HDATA.lenormand = {

  name: 'Lenormand',
  reversals: false,
  imgPath: 'assets/lenormand/',   // antik Dondorf-pakli (~1880, közkincs)

  cards: {
    l01: { name: 'Lovas', glyph: '🐎', polarity: '0', insert: 'kőr 9',
      up: 'Hír, üzenet, érkezés: valami úton van feléd — mozgás és lendület a kérdésben.' },
    l02: { name: 'Lóhere', glyph: '🍀', polarity: '+', insert: 'káró 6',
      up: 'Kis szerencse, gyors és múló lehetőség: kapd el, amíg friss — nem vár sokáig.' },
    l03: { name: 'Hajó', glyph: '⛵', polarity: '0', insert: 'pikk 10',
      up: 'Utazás, távolság, külföld, vágyakozás: valami messziről érkezik, vagy téged hív messzire.' },
    l04: { name: 'Ház', glyph: '🏠', polarity: '+', insert: 'kőr király',
      up: 'Otthon, család, biztonság, ingatlan: szilárd alap — a kérdés a magánélet terepén dől el.' },
    l05: { name: 'Fa', glyph: '🌳', polarity: '0', insert: 'kőr 7',
      up: 'Egészség, életerő, lassú növekedés: ami itt épül, annak idő kell — de gyökeret ver.' },
    l06: { name: 'Felhők', glyph: '☁️', polarity: '-', insert: 'treff király',
      up: 'Zavar, bizonytalanság, átmeneti köd: most nem látni tisztán — ne ilyenkor dönts véglegeset.' },
    l07: { name: 'Kígyó', glyph: '🐍', polarity: '-', insert: 'treff dáma',
      up: 'Csábítás, kerülőút, rivális, árulás veszélye: okosság kell — és óvatosság, kiben bízol.' },
    l08: { name: 'Koporsó', glyph: '⚰️', polarity: '-', insert: 'káró 9',
      up: 'Lezárás, vég, elengedés: valami lezárul — a gyász után hely marad az újnak.' },
    l09: { name: 'Csokor', glyph: '💐', polarity: '+', insert: 'pikk dáma',
      up: 'Ajándék, öröm, meghívás, kedvesség: kellemes meglepetés vagy gesztus érkezik.' },
    l10: { name: 'Kasza', glyph: '🌾', polarity: '-', insert: 'káró bubi',
      up: 'Hirtelen vágás, gyors esemény, döntés: valami egyik pillanatról a másikra dől el — figyelmeztetés és aratás egyszerre.' },
    l11: { name: 'Seprű', glyph: '🧹', polarity: '-', insert: 'treff bubi',
      up: 'Vita, ismétlődő súrlódás, feszültség: tisztázó veszekedés — vagy végre kisöpörni a régit.' },
    l12: { name: 'Madarak', glyph: '🐦', polarity: '-', insert: 'káró 7',
      up: 'Izgatottság, pletyka, aggodalom, sok beszéd: zsongás a kérdés körül — szűrd meg, mire hallgatsz.' },
    l13: { name: 'Gyermek', glyph: '👶', polarity: '+', insert: 'pikk bubi',
      up: 'Újrakezdés, kicsiben indulás, ártatlanság: valami még kicsi — de növekedésre született.' },
    l14: { name: 'Róka', glyph: '🦊', polarity: '-', insert: 'treff 9',
      up: 'Ravaszság, óvatosság, hamisság — modern olvasatban a munka(hely) lapja is: járj nyitott szemmel.' },
    l15: { name: 'Medve', glyph: '🐻', polarity: '0', insert: 'treff 10',
      up: 'Erő, hatalom, főnök- vagy anyafigura, vagyon: nagy erő áll a kérdésben — melletted vagy fölötted.' },
    l16: { name: 'Csillagok', glyph: '✨', polarity: '+', insert: 'kőr 6',
      up: 'Remény, inspiráció, tisztánlátás, jó vezettetés: az irány kedvező — bízhatsz a csillagodban.' },
    l17: { name: 'Gólya', glyph: '🕊️', polarity: '+', insert: 'kőr dáma',
      up: 'Változás, költözés, újdonság — olykor gyermekáldás: valami átrendeződik, jobbra.' },
    l18: { name: 'Kutya', glyph: '🐕', polarity: '+', insert: 'kőr 10',
      up: 'Barátság, hűség, megbízható személy: van, akire számíthatsz — vagy te vagy az, akire számítanak.' },
    l19: { name: 'Torony', glyph: '🏰', polarity: '0', insert: 'pikk 6',
      up: 'Hatóság, intézmény, tekintély — olykor elszigeteltség: hivatalos út vagy magaslati magány.' },
    l20: { name: 'Kert', glyph: '🌷', polarity: '+', insert: 'pikk 8',
      up: 'Társaság, nyilvánosság, rendezvény, közösség: a kérdés emberek előtt, közösségben dől el.' },
    l21: { name: 'Hegy', glyph: '⛰️', polarity: '-', insert: 'treff 8',
      up: 'Akadály, késedelem, blokk: valami az útban áll — nem végleges, de meg kell mászni vagy kerülni.' },
    l22: { name: 'Út', glyph: '🛤️', polarity: '0', insert: 'káró dáma',
      up: 'Válaszút, döntés, alternatívák: kettő közül választani kell — és a nem-választás is választás.' },
    l23: { name: 'Egerek', glyph: '🐭', polarity: '-', insert: 'treff 7',
      up: 'Veszteség, őrlődés, ami lassan felemészt: apránként fogy valami — állítsd meg, mielőtt elfogy.' },
    l24: { name: 'Szív', glyph: '❤️', polarity: '+', insert: 'kőr bubi',
      up: 'Szerelem, érzelmek, szívügy: a kérdés magja érzelmi — a szív dönt, nem az ész.' },
    l25: { name: 'Gyűrű', glyph: '💍', polarity: '+', insert: 'treff ász',
      up: 'Kapcsolat, szerződés, elkötelezettség, ismétlődés: kötés jön létre — vagy kötés kér megújítást.' },
    l26: { name: 'Könyv', glyph: '📖', polarity: '0', insert: 'káró 10',
      up: 'Titok, tudás, tanulás: valami még rejtve van — a válasz ismeret vagy felfedés útján jön.' },
    l27: { name: 'Levél', glyph: '✉️', polarity: '0', insert: 'pikk 7',
      up: 'Írásos hír, dokumentum, üzenet: papíron (vagy képernyőn) érkezik a fejlemény.' },
    l28: { name: 'Úr', glyph: '🤵', polarity: '0', insert: 'kőr ász',
      up: 'A kérdező férfi — vagy a kérdés férfi főszereplője: körülötte forognak a szomszédos lapok.' },
    l29: { name: 'Hölgy', glyph: '👩', polarity: '0', insert: 'pikk ász',
      up: 'A kérdező nő — vagy a kérdés női főszereplője: körülötte forognak a szomszédos lapok.' },
    l30: { name: 'Liliom', glyph: '⚜️', polarity: '0', insert: 'pikk király',
      up: 'Békesség, érettség, tapasztalat — olykor idősebb támogató férfi: a higgadt út a jó út.' },
    l31: { name: 'Nap', glyph: '☀️', polarity: '+', insert: 'káró ász',
      up: 'Siker, energia, győzelem — a pakli legjobb lapja: amire rásüt, az sikerül.' },
    l32: { name: 'Hold', glyph: '🌙', polarity: '+', insert: 'kőr 8',
      up: 'Elismerés, hírnév, romantika, intuíció: érzelmi ragyogás — látnak és éreznek téged.' },
    l33: { name: 'Kulcs', glyph: '🗝️', polarity: '+', insert: 'káró 8',
      up: 'Megoldás, bizonyosság, fontos felismerés — a pakli „igen"-lapja: nyílik a zár.' },
    l34: { name: 'Halak', glyph: '🐟', polarity: '+', insert: 'káró király',
      up: 'Pénz, bőség, üzlet, függetlenség: anyagi áramlás a kérdésben — jellemzően bőven.' },
    l35: { name: 'Horgony', glyph: '⚓', polarity: '+', insert: 'pikk 9',
      up: 'Stabilitás, munka, hosszú táv, megérkezés: amit itt találsz, az tartós — le lehet horgonyozni.' },
    l36: { name: 'Kereszt', glyph: '✝️', polarity: '-', insert: 'treff 6',
      up: 'Teher, sors, próbatétel: rövid, de intenzív nehézség — amit hittel könnyebb vinni.' }
  },

  spreads: [
    { key: 'napi', name: 'Napi kártya', cards: 1,
      desc: 'Egyetlen lap a nap üzeneteként — a Lenormand tárgyszerű nyelvén: konkrét téma, amire ma figyelni érdemes.',
      positions: [{ name: 'A nap lapja', text: 'A nap fő témája vagy eseménye — a Lenormand konkrétan fogalmaz.' }] },
    { key: 'harmas', name: 'Hármas sor', cards: 3,
      desc: 'A Lenormand alapterítése, „mondat-logikával": a középső lap a téma (alany), a bal oldali módosítja (honnan), a jobb oldali továbbviszi (merre).',
      positions: [
        { name: 'Módosító (bal)', text: 'Az előzmény vagy ok: ez színezi a témát.' },
        { name: 'A téma (közép)', text: 'A mondat alanya: erről szól a terítés.' },
        { name: 'Irány (jobb)', text: 'A kimenet vagy folytatás: erre visz a mondat.' }] },
    { key: 'otos', name: 'Ötös sor', cards: 5,
      desc: 'Bővített mondat: a középső lap a téma, a két-két szélső lap az odavezető út és a kifutás — részletesebb történet-ív.',
      positions: [
        { name: 'Távolabbi előzmény', text: 'A történet kezdete: ahonnan a folyamat indult.' },
        { name: 'Közvetlen előzmény', text: 'Ami közvetlenül a téma előtt áll: a kiváltó.' },
        { name: 'A téma (közép)', text: 'A terítés magja: erről szól a kérdés.' },
        { name: 'Következő lépés', text: 'Ami közvetlenül ezután jön.' },
        { name: 'Kifutás', text: 'A folyamat távolabbi iránya.' }] },
    { key: 'kilences', name: 'Kilences tabló (3×3)', cards: 9,
      layout: { cols: 3, rows: 3, cells: [
        { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 },
        { r: 2, c: 1 }, { r: 2, c: 2 }, { r: 2, c: 3 },
        { r: 3, c: 1 }, { r: 3, c: 2 }, { r: 3, c: 3 }] },
      desc: 'A kis tabló: 3×3-as négyzet. A középső lap a helyzet szíve; a felső sor a gondolatok szintje, az alsó a valóság alapja; a bal oszlop a múlt, a jobb a jövő.',
      positions: [
        { name: 'Gondolatok — múlt', text: 'Ami korábban foglalkoztatott: a téma gondolati előzménye.' },
        { name: 'Gondolatok — jelen', text: 'Ami most jár a fejedben: a helyzet fölött lebegő gondolat.' },
        { name: 'Gondolatok — jövő', text: 'Amerre a gondolataid tartanak: várakozás vagy terv.' },
        { name: 'Történés — múlt', text: 'Ami történt: a helyzet közvetlen előzménye.' },
        { name: 'A helyzet szíve', text: 'A tabló középpontja: maga a kérdés magja — minden lap ehhez képest olvasandó.' },
        { name: 'Történés — jövő', text: 'Amerre az események tartanak.' },
        { name: 'Alap — múlt', text: 'A mélyebb gyökér: amire a helyzet épült.' },
        { name: 'Alap — jelen', text: 'Ami most tart vagy visszahúz: a helyzet talapzata.' },
        { name: 'Alap — jövő', text: 'Amivé az alap válik: a tartós következmény.' }] }
  ],

  synthesis: {
    intro: 'Összkép — a lapok együtt:',
    lineCombo: 'A Lenormand mondat-logikája szerint: a téma a(z) %C%, amelyet balról a(z) %L% színez (ez az ok vagy előzmény), jobbról pedig a(z) %R% visz tovább (ez az irány) — a hármat egyetlen mondatként olvasd össze.',
    toneGood: 'A terítés összképe kedvező: a lapok többsége (%N%/%T%) jótékony — a helyzet erőtere támogat, a nehezebb lapok itt inkább figyelmeztetések, mint falak.',
    toneHard: 'A terítés összképe nehéz: a lapok többsége (%N%/%T%) kihívást hoz — a Lenormand ilyenkor nem ítéletet mond, hanem terepviszonyt: lassabban, óvatosabban, szövetségesekkel.',
    toneMixed: 'A terítés kevert képet ad: kedvező és nehéz lapok váltakoznak — a kimenet azon múlik, melyik lapok mellé állsz oda a figyelmeddel.',
    person: 'A terítésben megjelent a(z) %P% lapja: a kérdés személyesen rólad (vagy a kérdés főszereplőjéről) szól — a mellette fekvő lapok a legfontosabbak az egész terítésben.',
    keyCard: 'A Kulcs is a lapok közt van: a hagyomány szerint ez a terítés „igen"-je — a megoldás elérhető, a zár nyílik.',
    sunCard: 'A Nap is a lapok közt van — a pakli legjobb lapja: amire a kérdés irányul, arra rásüt.',
    heavyCluster: 'A terítésben egyszerre több súlyos lap (%LIST%) szerepel: a hagyomány ilyenkor valódi próbatételt jelez — de a Lenormand nehéz lapjai mindig konkrétak: nevezd meg, mitől félsz, és kezelhetővé válik.',
    note: 'A Lenormand nem lélektani tükör, hanem tárgyszerű jelzőrendszer: hétköznapi dolgokról beszél hétköznapi nyelven, fordított állás nélkül. A lapok párban, láncban olvasandók — egy lap önmagában csak szó, a mondat a szomszédjaival együtt áll össze.'
  }
};
