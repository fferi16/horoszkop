/* Magyar népi hagyomány adatmodul
 * Forrás: docs/08-magyar-nepi-hagyomanyok.md, docs/09-roma-hagyomanyok.md (4. fejezet)
 * Sima script (nem ES modul), UTF-8.
 */
window.HDATA = window.HDATA || {};
window.HDATA.hungarian = {

  intro: 'A magyar paraszti kultúrában nem létezett zodiákus-alapú horoszkóp: a gyermek sorsát nem a bolygóállás, hanem a születés körülményei jelezték előre — hogyan, mikor és milyen testi jeggyel jött világra. A hét napja, a jeles ünnepek közelsége, a holdfázis és a születési jegyek (burok, fog, hetedik gyermekként való születés) együtt alkották azt a rendszert, amely a néphitben a „születési horoszkóp" szerepét betöltötte. Fontos tudni, hogy ezek táji hiedelmek voltak: ugyanannak a napnak vidékenként akár ellentétes jelentése is lehetett, a néphit sosem volt egységes országos rendszer.',

  // 1) A hét napjaihoz kötődő születési néphit (0 = vasárnap ... 6 = szombat)
  weekdayBirth: {
    0: {
      day: 'Vasárnap',
      text: 'A vasárnapi gyerek a magyar néphit egyik legáltalánosabb szerencsés figurája: aki az Úr napján születik, arra egész életében rámosolyog a szerencse. Egyes vidékeken ennél is többet tulajdonítottak neki — látó képességet, vagyis azt, hogy meglátja azt is, ami mások elől rejtve marad. A vasárnapi születés a néphitben a keresztény ünnepnap áldásából részesítette a gyermeket.'
    },
    1: {
      day: 'Hétfő',
      text: 'A hétfő a hét kezdőnapja: a néphit szerint amit ezen a napon elkezdenek, az adja meg az egész hét irányát. A hétfőn születettet dolgos, kezdeményező természetűnek tartották, olyannak, aki a maga kezébe veszi a sorsát. Néhol óvatosságra intettek: a hétfőn kezdett munka gyorsan halad, de gyorsan el is fogy a lendülete.'
    },
    2: {
      day: 'Kedd',
      text: 'A kedd a néphit legellentmondásosabb napja, és épp ezért a legjobb példa a magyar hiedelmek táji sokszínűségére. Nógrádban a keddi születésű gyereknek azt jósolták, hogy sokan fogják szeretni — kedvelt, közkedvelt ember lesz belőle. Kalotaszegen ellenben épp az ellenkezőjét tartották: a kedden születettből haszontalan ember válik.'
    },
    3: {
      day: 'Szerda',
      text: 'A hét közepe a paraszti munkarendben a nyugodt, egyenletes haladás napja volt, se nem kezdés, se nem befejezés. A szerdán születettet kiegyensúlyozottnak, megbízhatónak tartották, aki jól megfér az emberekkel. A szerda a böjti napok közé is tartozott, ezért a mértékletesség napjának is számított.'
    },
    4: {
      day: 'Csütörtök',
      text: 'A csütörtök a néphitben a boszorkányos, „gonoszjáró" napok közé sorolódott több vidéken is, különösen az esti-éjszakai órákban. Ugyanakkor a csütörtökön születettnek erőt és ellenálló képességet tulajdonítottak: aki ilyen napon jön világra, azt nem fogja könnyen a rontás. Néhol e napon tilos volt fonni és mosni, nehogy a ház szerencséje elszálljon.'
    },
    5: {
      day: 'Péntek',
      text: 'A péntek a magyar néphit legbaljósabb napja: pénteken kezdett munkán „nincs áldás", és a pénteki születést balszerencsés ómennek tartották. Krisztus halálának napjaként szigorú böjti és munkatilalmi nap volt, ilyenkor nem költöztek, nem vágtak állatot, nem kezdtek új dolgot. A pénteki gyereket ezért gyakran különös figyelemmel óvták: piros szalaggal, fokhagymával védték a rontástól.'
    },
    6: {
      day: 'Szombat',
      text: 'A szombat a készülődés, a takarítás és a tisztálkodás napja volt, a hét lezárása és az ünnep előkészítése. A szombaton születettet gondos, rendszerető, a családjáról gondoskodó embernek tartották. Boldogasszony napjaként a szombat egyben a Szűzanya oltalmának napja is volt, ami a néphitben védelmet jelentett a gyermekre.'
    }
  },

  // 2) Különleges születési körülmények
  specialBirth: [
    {
      key: 'burokban',
      name: 'Burokban született',
      text: 'A magyar nyelvterület egészén elterjedt hiedelem szerint az a gyermek, aki a magzatburok egy darabjával a fején jött világra, egész életében szerencsés lesz — innen a máig élő szólás, hogy valaki „burokban született". A burokban születettnek különleges látóképességet tulajdonítottak: meglátja az elásott pénzt, a rejtett kincset. A megszárított burkot amulettként őrizték: aki háborúban a nyakában hordta, azt a hiedelem szerint nem fogta a golyó, és szerencsét hozott vándorúton, vizsgán, pereskedéskor is.'
    },
    {
      key: 'foggal',
      name: 'Foggal született',
      text: 'A magyar néphit legmarkánsabb születési jegye: a foggal született gyermekből táltos lesz, az ősi magyar hitvilág samanisztikus tudója, aki nem tanulással, hanem születési elrendeléssel nyeri az erejét. A táltos-jegy lényege a számfeletti csont — fog, dupla fogsor, hat ujj —, mert a csonttöbblet a többlet-tudás testi jele. A hiedelem szerint a táltosjelöltet gyermekkorában elragadják, betegségszerű átalakuláson megy át, majd gyógyító, viharlátó, kincslátó képességgel tér vissza; a szülők sokszor titkolták vagy kivették az újszülött fogát, hogy megkíméljék a nehéz táltos-sorstól.'
    },
    {
      key: 'hetedik',
      name: 'Hetedik gyermek',
      text: 'A család hetedik, egymás után született azonos nemű gyermekének rendkívüli képességeket jósoltak: gyógyítást, kincslátást és halottlátást. A hiedelem szerint a hetedik gyermek Szent György éjjelén vagy karácsony éjszakáján acéltükörben, kristályüvegben megláthatta az elásott kincset — a halottlátók hiedelemköre is gyakran hivatkozik a hetedikként születésre mint kiválasztottsági jegyre.'
    },
    {
      key: 'luca',
      name: 'Luca napján született',
      text: 'December 13-a a néphit szerint gonoszjáró, boszorkányjáró nap volt, ezért baljós ómennek számított ezen a napon világra jönni. Egyes vidékeken a Luca-napi születésűt boszorkányos hajlamúnak tartották — ugyanakkor mások szerint épp ez a nap adta neki a legerősebb rontáselhárító tudást, hiszen a legmágikusabb napon született.'
    },
    {
      key: 'karacsony',
      name: 'Karácsonykor született',
      text: 'A karácsony éjjelén született gyermeket kiválasztottnak és szerencsésnek tartották: az év legszentebb éjszakája a néphit szerint áldást hozott az egész életére. A karácsonykor vagy újév napján születettnek látó képességet is tulajdonítottak, közel álltak hozzájuk a rejtett dolgok — a kincslátás és a halottlátás egyaránt felbukkan a hiedelmekben.'
    },
    {
      key: 'ejfel',
      name: 'Éjfélkor született',
      text: 'Az éjfél a néphitben a „szellemóra": a világok határa, amikor a túlvilág átjárhatóvá válik. Az ekkor születettnek látó képességet és a holtakkal való kapcsolattartás adottságát tulajdonították, ezért gyakran a néző, látó vagy halottlátó szerepét szánták neki a közösségben.'
    },
    {
      key: 'ujhold',
      name: 'Újholdkor vagy növő holdon született',
      text: 'A hold a magyar néphitben a növekedés és fogyás analógiás mágiájának hordozója volt: amit növő holdon kezdenek, az gyarapszik. Aki újholdkor vagy növekvő holdnál jött világra, arról azt tartották, hogy szerencsés, „gyarapodó" életű lesz, míg a fogyó holdon születés gyengébb életerőt jelzett.'
    },
    {
      key: 'holdtolte',
      name: 'Holdtöltekor született',
      text: 'A telihold a néphitben a teljesség képe: ami ilyenkor kezdődik, az kerek egésszé válik. A holdtöltekor születettnek „teljes" életet és jó egészséget jósoltak, olyan sorsot, amelyben semmi lényeges nem marad hiányos.'
    },
    {
      key: 'hatujj',
      name: 'Hat ujjal született',
      text: 'A számfeletti ujj a foggal születéshez hasonlóan táltosjegynek számított: a csonttöbblet a néphit logikája szerint tudástöbbletet jelentett. Az ilyen gyermekben a közösség a leendő tudót, gyógyítót látta, akit már születésekor kiválasztottak a rendkívüli sorsra.'
    },
    {
      key: 'anyajegy',
      name: 'Feltűnő anyajeggyel született',
      text: 'Az anyajegyet a néphit az anya kívánságából, megcsodálásából eredeztette: „megkívánta az epret", és a gyermeken maradt a jele. Az anyajegy helye és formája a hiedelem szerint sorsot jelzett: szerencsét, védettséget vagy éppen figyelmeztető jegyet, amit egész életében magával hord.'
    },
    {
      key: 'ustokkel',
      name: 'Dús hajjal, „üstökkel" született',
      text: 'A hosszú hajjal, dús üstökkel világra jött gyermeket erősnek és hosszú életűnek tartották. A haj a néphitben az életerő hordozója volt, ezért a bőséges üstök a bőséges élet ígéretének számított.'
    }
  ],

  // 3) Jeles napok — a születésnaphoz és a mai naphoz is használjuk. Kulcs: 'HH-NN'
  namedDays: {
    '01-01': {
      name: 'Újév napja',
      text: 'A néphit szerint amilyen az újév első napja, olyan lesz az egész esztendő — ezért ezen a napon mindenki igyekezett jókedvű, tiszta és bőkezű lenni. Az étel-mágia szigorú szabályokat írt elő: lencse, hogy legyen pénz, malac, mert előre túrja a szerencsét, tyúk viszont tilos, mert hátrakaparja; aki újévkor mos, annak a hiedelem szerint halottja lesz az évben. Aki ezen a napon született, arról azt tartották, hogy az egész élete tiszta lappal indul, és a karácsonykor születettekhez hasonlóan látó képességgel is megáldhatta a nap.'
    },
    '01-22': {
      name: 'Vince napja',
      text: 'A szőlősgazdák nagy jóslónapja: „Ha megcsordul a Vince, tele lesz a pince" — vagyis ha ezen a napon olvad az eresz, bő bortermés várható, ha fagy, gyenge lesz az esztendő. A gazdák szőlővesszőt vágtak és vízbe tették, hogy a hajtásából a termésre következtessenek. Aki Vince napján született, arról azt tartották, hogy szerencsés kezű a föld és a szőlő körül, bőséget hoz a gazdaságra, és ért ahhoz, hogy a maga munkájából gyarapodjon.'
    },
    '01-25': {
      name: 'Pál fordulása (pálforduló)',
      text: 'A tél közepének fordulónapja, amelyből az egész évre jósoltak: ha tiszta idő van, jó termés jön, ha szeles, háborús vagy rossz esztendő; „Pál fordul köddel, ember hullik döggel" — a köd járványt jelzett. A néphit szerint ekkor fordul meg a medve is a barlangjában. Aki ezen a napon született, arról úgy tartották, hogy az élete fordulatokban gazdag lesz: nagy változásokat él meg, de mindig talpra áll, mert a nap maga is a megfordulásról szól.'
    },
    '02-02': {
      name: 'Gyertyaszentelő Boldogasszony',
      text: 'A templomban szentelt gyertyát az egész évben őrizték: haldokló kezébe adták, vihar idején meggyújtották a rontás és a villám ellen. A legismertebb regula a medvéhez kötődik: ha a medve ezen a napon meglátja az árnyékát, vagyis napos az idő, visszamegy a barlangjába, mert még hosszú tél lesz; ha borús, hamar jön a tavasz. A Gyertyaszentelőkor születettet a néphit a fény gyermekének tartotta: olyan embernek, aki a legsötétebb időszakban is világosságot visz a környezetébe, és akit a szentelt gyertya oltalma kísér.'
    },
    '02-24': {
      name: 'Mátyás napja',
      text: 'A „jégtörő Mátyás" a tél megtörésének napja: „Mátyás ront, ha talál, ha nem talál, csinál" — vagyis ha van jég, megtöri, ha nincs, akkor hoz fagyot. A halászok ekkor kezdték a jég alatti halászatot, a gazdák pedig az időből a tavaszi munkák kezdetére jósoltak. Aki Mátyás napján született, arról azt tartották, hogy erős akaratú, akadálytörő természet: ott is utat nyit magának, ahol mások megtorpannak, de kemény és néha kiszámíthatatlan.'
    },
    '03-12': {
      name: 'Gergely napja',
      text: 'A Gergely-járás napja: a diákok jelmezes, énekes menetben járták a falut, adományt gyűjtöttek és az iskolába toborozták a kisebbeket. Az időjárásból is jósoltak — ha ezen a napon fúj a szél, azt mondták, „Gergely megrázza a szakállát", és még hideg napok jönnek. Aki Gergely napján született, arról azt tartották, hogy tanulékony és jó szavú ember lesz, akire hallgatnak a többiek: a tudás és a közösségszervezés napja adta neki a jegyét.'
    },
    '03-18': {
      name: 'Sándor napja',
      text: 'A „melegehozó" napok közül az első: „Sándor, József, Benedek, zsákban hozzák a meleget" — e három nap a meteorológiai tavasz népi kezdete. Sándor napján kezdték a kerti munkákat, ekkor vetették az első magvakat. Aki ezen a napon született, arról a néphit azt tartotta, hogy meleg szívű, derűs ember lesz, aki elhozza a jó időt oda, ahol megjelenik.'
    },
    '03-19': {
      name: 'József napja',
      text: 'A tavasz legfontosabb kezdőnapja: ekkor eresztették ki a méheket, ekkor indult igazán a szántás-vetés, és a nap időjárásából az egész termésre jósoltak — a József-napi derű bő esztendőt ígért. A gólyák érkezését is ehhez a naphoz kötötték. A József napján születettnek szorgalmat, jó gazda-kezet és családszeretetet tulajdonítottak: olyan embert láttak benne, aki csendben, kitartó munkával teremt biztonságot a családjának.'
    },
    '03-21': {
      name: 'Benedek napja',
      text: 'A melegehozó napok harmadika, egyben a tavaszi napéjegyenlőség környéke, amikor a nappal végleg legyőzi az éjszakát. Benedek napján fokhagymát szenteltek, amit egész évben gyógyításra és rontáselhárításra használtak. Aki ekkor született, arról azt tartották, hogy egyensúlyt teremtő ember lesz, aki a fény és az árnyék között is megtalálja a helyes mértéket, és akinek gyógyító keze van.'
    },
    '04-24': {
      name: 'Szent György napja',
      text: 'Az „igazi" tavasz kezdete, az állatok első kihajtásának napja, egyben a legfontosabb boszorkányjáró nap: a hiedelem szerint a boszorkányok hajnali harmatszedéssel lopták el a tehenek tejhasznát, ezért a gazdák zöld ággal, fokhagymával, tüzes szertartásokkal védekeztek. György éjszakáján lehetett meglátni az elásott kincset, és az ekkor fogott gyík vagy kígyó mágikus erejűnek számított. A Szent György napján születettről azt tartották, hogy erős védelmező, aki felismeri és elhárítja a rontást — sárkányölő természet, aki a gyengébbek mellé áll.'
    },
    '05-01': {
      name: 'Május elseje, májusfa-állítás',
      text: 'A tavasz és a termékenység ünnepe: a legények az éjszaka leple alatt feldíszített májusfát állítottak a lányos házak elé, és a fa nagysága, szépsége a szerelem komolyságát üzente. A májusi harmatban való mosakodás szépséget és egészséget adott a hiedelem szerint. Aki május elsején született, arról azt tartották, hogy szeretetreméltó, vonzó egyéniség lesz, akit korán megtalál a szerelem, és aki bőséget hoz a házba.'
    },
    '06-08': {
      name: 'Medárd napja',
      text: 'A magyar néphit leghíresebb esőszabálya: ha Medárdkor esik, negyven napig esik, ha nem, negyven napig szárazság lesz. Ez a nap a nyári időjárás egészének „mintanapja" volt, a gazdák ehhez igazították a kaszálás és a szénahordás terveit. A Medárd napján születettnek kitartást és állhatatosságot tulajdonítottak: olyan ember jegyét viseli, aki ha egyszer elindul egy úton, hosszan és rendíthetetlenül végigmegy rajta.'
    },
    '06-24': {
      name: 'Szent Iván éje',
      text: 'A nyári napforduló ünnepe, az év leghosszabb nappalának éjszakája: szentiváni tüzet gyújtottak, és a legények-lányok átugrották a lángot — aki átugrotta, egészséges maradt, a lányok pedig férjhez mentek az évben. A tűzbe vetett gyógynövények, a szentiváni alma és a párokat összeéneklő szokások mind a termékenységvarázslás részei. Aki Szent Iván éjjelén született, arról azt tartották, hogy tűzben edzett, sugárzó egyéniség, akit szeretnek az emberek, és aki az élete nagy döntéseiben mindig bátran ugrik.'
    },
    '07-20': {
      name: 'Illés napja',
      text: 'A viharok napja: a néphit szerint ilyenkor „Illés szekere dörög" az égen, ezért szigorú munkatilalom volt érvényben — aki mégis aratni ment, abba a hiedelem szerint belecsapott a villám. Az aratás közepén ez a nap kényszerű pihenőt is jelentett. Az Illés napján születettet szenvedélyes, viharos természetűnek tartották, akiben nagy erő lakik: haragja gyors, de igazságos, és ért ahhoz, hogy megvédje, ami az övé.'
    },
    '08-20': {
      name: 'Szent István napja, az új kenyér ünnepe',
      text: 'Az első király ünnepe egyben az új kenyér ünnepe: az aratás betakarítása után ekkor sütötték meg az új búzából az első kenyeret, és a család feje szentelte, szegte meg. A nap időjárásából az őszi vetésre jósoltak. Aki Szent István napján született, arról azt tartották, hogy vezetésre termett, felelősséget vállaló ember lesz, akire rá lehet bízni a közösség dolgait, és akinek mindig lesz kenyér az asztalán.'
    },
    '09-29': {
      name: 'Szent Mihály napja',
      text: 'A gazdasági év nagy fordulónapja: ekkor számoltak el a pásztorokkal, ekkor hajtották be a jószágot a legelőről, és ekkor kezdődött a lakodalmak őszi szezonja. Időjóslás is fűződik hozzá: ha Mihály-napkor még itt vannak a fecskék, hosszú és szép ősz lesz, a keleti szél viszont kemény telet jelez. A Mihály napján születettnek igazságérzetet és jó számadó fejet tulajdonítottak: olyan ember jegye ez, aki rendet tesz maga körül, és mérlegre teszi a dolgokat.'
    },
    '10-20': {
      name: 'Vendel napja',
      text: 'A jószágtartó gazdák és pásztorok fogadalmi napja: Vendel a háziállatok védőszentje, ezen a napon állatvész elhárításáért miséztek, és sok helyen tilos volt igába fogni a jószágot. A pásztorok ekkor tartották a maguk ünnepét. Aki Vendel napján született, arról azt tartották, hogy jó keze van az állatokhoz, gondoskodó és hűséges természet, akire rábízhatók a védtelenek.'
    },
    '11-11': {
      name: 'Márton napja',
      text: 'A híres lúdcsont-időjóslás napja: a Márton-napi liba mellcsontja ha fehér és hosszú, havas telet jelez, ha barna és rövid, sáros, enyhe tél jön — ugyanezt mondja a regula is, hogy „ha Márton fehér lovon jön, enyhe tél lesz, ha barnán, kemény". Ekkor kóstolták az újbort, és aki Márton napján libát nem eszik, az a mondás szerint egész évben éhezik. A Márton napján születettnek bőséget és vendégszeretetet jósoltak: olyan embert, akinek mindig terített asztala van, és aki szívesen ad abból, amije van.'
    },
    '11-25': {
      name: 'Katalin napja',
      text: 'A lányok férjhezmeneteli jóslónapja és egyben téljóslás: „Ha Katalin kopog, karácsony locsog" — vagyis ha ezen a napon fagy, karácsonyra sár lesz, és fordítva. A Katalin-ág a legismertebb rítusa: a lány vízbe tett gyümölcságat, és ha az karácsonyra kizöldült, közeli házasságot ígért. Aki Katalin napján született, arról azt tartották, hogy korán rátalál a párjára, és jó házasság lesz az osztályrésze; a néphit szerint az ilyen ember megérzi mások szíve szándékát.'
    },
    '11-30': {
      name: 'András napja',
      text: 'A magyar néphit legfőbb szerelmi jóslónapja: az eladósorban lévő lányok böjtöltek, férfi ruhadarabot tettek a párnájuk alá, hogy álmukban meglássák a jövendőbelijüket, ólmot öntöttek, gombócot főztek férfineves cédulákkal, vagy az ólat rugdosták — ahányat röffent a disznó, annyi év múlva mentek férjhez. Ez a nap indítja az adventet és a disznóvágások idejét is. Aki András napján született, arról azt tartották, hogy szerencsés a szerelemben, és megvan benne a jövőbe látás adottsága: megérzi, mi következik, mielőtt megtörténne.'
    },
    '12-04': {
      name: 'Borbála napja',
      text: 'A Borbála-ág napja: a lány ezen a napon cseresznye- vagy meggyágat tett vízbe, és ha az karácsonyra kivirágzott, a következő évben férjhez ment — és jó termés is várható volt. Ekkor kezdték a búzacsíráztatást is, és a bányászok, ágyúöntők védőszentjeként Borbálának oltalmat kértek. Aki Borbála napján született, arról azt tartották, hogy a legsötétebb időben is virágba tud borulni: a reménység és az újrakezdés embere, aki bátran szembenéz a veszéllyel.'
    },
    '12-06': {
      name: 'Miklós napja',
      text: 'Az ajándékozás napja, amelyhez alakoskodó „Miklós-járás" is tartozott: a jó gyermek ajándékot, a rossz virgácsot kapott, és a láncos-csörgős kísérő a fegyelmezés szerepét játszotta. Miklós a gyerekek, halászok és hajósok védőszentje. Aki Miklós napján született, arról a néphit azt tartotta, hogy adakozó, bőkezű természetű lesz, akit szeretnek a gyerekek, és aki jókedvet visz a házba.'
    },
    '12-13': {
      name: 'Luca napja',
      text: 'A magyar néphit leggazdagabb jósló-varázsló napja, a naptárreform előtt az év legrövidebb napja — gonoszjáró, boszorkányjáró nap. Ekkor kezdték a Luca székét, amit tizenhárom nap alatt, naponta egyetlen művelettel, kilenc- vagy tizenháromféle fából készítettek: aki a karácsonyi éjféli misén ráállt, meglátta, ki a boszorkány a faluban. Ekkor indul a Luca-naptár, amelyben a Lucától karácsonyig tartó tizenkét nap időjárása a következő év tizenkét hónapját mutatja meg, ekkor csíráztatták a lucabúzát, sütötték a pénzérmés lucapogácsát, és ekkor írták a tizenhárom lucacédulát a jövendőbeli nevével. Aki Luca napján született, arról egyes vidékeken azt tartották, hogy boszorkányos hajlamú, máshol viszont épp fordítva: a legerősebb rontáselhárító tudás birtokosa, hiszen az év legmágikusabb napja adta neki a jegyét.'
    },
    '12-24': {
      name: 'Ádám és Éva napja, karácsony böjtje',
      text: 'A szigorú böjt és a felfokozott mágikus készülődés napja: ekkor terítették meg a karácsonyi asztalt, amely alá szalmát tettek, és amelynek abrosza, morzsája egész évben gyógyerejű maradt. Az éjféli miséhez kötődik a Luca székének próbája, és ekkor végezték az almamag-jóslást: a kettévágott alma ép magjai egészséget, csillag alakú magháza szerencsét ígért. Aki karácsony böjtjén született, arról azt tartották, hogy szerencsés és kiválasztott gyermek, akinek az egész élete az ünnep áldása alatt áll, és aki meglátja azt is, ami mások elől rejtve marad.'
    },
    '12-25': {
      name: 'Karácsony napja',
      text: 'Az egész következő év „mintanapja": ahogyan ezt a napot töltik, olyan lesz az esztendő, ezért ügyeltek a békességre, a bőségre és arra, hogy semmit ne adjanak ki a házból. A csillagos ég karácsony éjjelén jó termést ígért, a karácsonyi morzsát és a szentelt ételmaradékot pedig gyógyszerként, illetve az állatoknak adva a jószág védelmére használták. A karácsonykor született gyermeket kiválasztottnak tartották: szerencsés életet, sőt látó képességet, kincslátást és a holtakkal való kapcsolat adottságát is tulajdonították neki.'
    },
    '12-28': {
      name: 'Aprószentek napja',
      text: 'A vesszőzés, más néven odoricsolás napja: a legények és a gyerekek friss vesszővel megcsapkodták egymást és a lányokat, mert a hiedelem szerint az ütés egészséget, frissességet, termékenységet varázsolt a következő évre. A vesszőzést mondókával kísérték, és a megvesszőzött ajándékkal hálálta meg. Aki Aprószentek napján született, arról azt tartották, hogy szívós és egészséges lesz, akit nem fog a betegség, és aki védelmezi a gyerekeket.'
    },
    '12-31': {
      name: 'Szilveszter napja',
      text: 'Az óév búcsúztatásának és a jövendőmondásnak a nagy napja: ólmot öntöttek, és a megdermedt fém alakjából a jövő évre, a jövendőbeli foglalkozására jósoltak, gombócot főztek férfineves cédulákkal — amelyik először feljött a vízben, az lett a jövendőbeli neve. Zajkeltéssel, kolompolással űzték el a gonoszt, és vigyáztak, hogy semmit ne vigyenek ki a házból. Aki Szilveszterkor született, arról azt tartották, hogy a lezárás és az újrakezdés embere: jól látja, mikor kell valamit befejezni, és mindig van ereje tiszta lappal újrakezdeni.'
    }
  },

  // 4) Magyar hónapnevek (régi)
  oldMonthNames: {
    1: 'Boldogasszony hava',
    2: 'Böjtelő hava',
    3: 'Böjtmás hava',
    4: 'Szent György hava',
    5: 'Pünkösd hava',
    6: 'Szent Iván hava',
    7: 'Szent Jakab hava',
    8: 'Kisasszony hava',
    9: 'Szent Mihály hava',
    10: 'Mindszent hava',
    11: 'Szent András hava',
    12: 'Karácsony hava'
  },

  // 5) Népi csillagnevek
  starNames: [
    {
      name: 'Göncölszekér',
      modern: 'Nagy Medve',
      text: 'A néphit szerint ez Göncöl táltos szekere, amelynek azért görbe a rúdja, mert a gazdája — más változatokban a részeg kocsis — elgörbítette. Nevezték Szent Péter szekerének és Illés szekerének is, a pásztorok pedig a forgásából mérték az éjszakai időt, órára pontosan.'
    },
    {
      name: 'Kisgöncöl',
      modern: 'Kis Medve',
      text: 'A Göncölszekér kisebbik párja, amelyet a néphit ugyanannak a szekérnek a kicsinyített mására formázott. A pásztorok a nagy testvérével együtt tájékozódtak róla az éjszakában.'
    },
    {
      name: 'Sarkcsillag',
      modern: 'Polaris',
      text: 'Bábamotollának, Furu csillagának és Égi cöveknek is nevezték: a néphit szerint ez az a szög, amihez az egész égbolt ki van kötve, és amely körül minden más csillag forog. Mozdulatlansága miatt a biztos pont képe volt a vándor és a pásztor számára.'
    },
    {
      name: 'Fiastyúk',
      modern: 'Plejádok',
      text: 'A magyar néphit kotlós tyúkot látott benne a csirkéivel, innen a Kotlós és a Fiescsirke elnevezés is. Hajnali feljöttét nyár végén a pásztorélet fontos időjelzőjeként tartották számon: „felszállott a Fiastyúk" — vagyis közeleg az ősz.'
    },
    {
      name: 'Kaszáscsillag',
      modern: 'Orion öve',
      text: 'A három fényes csillagban három egymás mögött haladó kaszást láttak, akik rendre vágják az égi rendet. Feltűnése a gazdasági év fordulóját jelezte, és a nyomában jár az égen az ételt vivő Sánta Kata.'
    },
    {
      name: 'Sánta Kata',
      modern: 'Szíriusz',
      text: 'A monda szerint ő az a sánta lány, aki ételt visz a kaszásoknak, és sántítva, bicegve halad utánuk. A név a horizont közelében erősen szikrázó, „billegő" fény népi magyarázata.'
    },
    {
      name: 'Hadak útja',
      modern: 'Tejút',
      text: 'A legszebb magyar csillagmonda szerint ezen a fényes úton tér vissza az égből Csaba királyfi a hun vitézeivel, valahányszor a székelyeket veszedelem fenyegeti. Más nevei — Csaba útja, Országút, Szalmásút — a szalmát elszóró szekér nyomának képéhez kötődnek.'
    },
    {
      name: 'Esthajnalcsillag',
      modern: 'Vénusz',
      text: 'Vacsoracsillagnak hívták, amikor este jött fel, mert a feljötte volt a vacsora jele, és Hajnalcsillagnak, amikor a hajnali kelést jelezte. A néphit a betlehemi csillaggal is azonosította.'
    },
    {
      name: 'Ökörkereső',
      modern: 'Arcturus',
      text: 'Nevét onnan kapta, hogy a feljöttekor indultak a gazdák megkeresni az éjszakára szabadon hagyott ökröket. A csillag a hajnali munkakezdés jeladója volt a paraszti időrendben.'
    },
    {
      name: 'A saját csillagod',
      modern: 'hullócsillag-hiedelem',
      text: 'A magyar néphit legszemélyesebb égi képzete szerint minden embernek megvan a maga csillaga, amely a születésekor gyullad ki, és a halálakor hull le — innen a szólás, hogy valakinek „lefutott a csillaga". A hullócsillag látványa ezért mindig azt jelentette, hogy valahol meghalt valaki.'
    }
  ],

  // 6) Holdhoz kötődő népi szabályok
  moonLore: {
    newMoon: 'Az újholdat „holdújságnak" nevezték — innen ered az „újságolni" szó is —, és a kezdés idejének tartották: újholdkor volt szerencsés esküdni, nagy dologba fogni, szerződést kötni. Sokan pénzt ráztak a zsebükben, amikor először megpillantották az új holdat, hogy a pénz is úgy szaporodjon, ahogy a hold nő.',
    waxing: 'A növő hold a gyarapodás ideje: ilyenkor kell elkezdeni mindent, aminek nőnie kell. Növő holdkor vetették a föld felett termő növényeket, a gabonát, gyümölcsöt, virágot, ilyenkor hordtak trágyát, ültettek kotlót, és a hiedelem szerint a növő holdnál vágott haj dúsan és gyorsan nő vissza — ez a szabály máig él.',
    fullMoon: 'A holdtölte a teljesség ideje: ami ekkor van a csúcsán, az egész és erős. Holdtöltekor vágott disznó húsa a hiedelem szerint nem fő össze és nem férgesedik, és a telihold fényénél végzett munkát szerencsésnek tartották — ugyanakkor a telihold fényében aludni nem volt tanácsos, mert „megbolondítja" az embert.',
    waning: 'A fogyó hold a csökkenés, a lezárás ideje: ilyenkor kell azt csinálni, aminek fogynia vagy pusztulnia kell. Fogyó holdon vetették a föld alatt termő répát, hagymát, burgonyát — „amikor a hold is a föld alatt jár" —, ekkor döntötték az épületfát, hogy ne szuvasodjon, és fogyó holdnál „olvasták le" a szemölcsöt is.'
  },

  // 7) Névnapok a hivatalos magyar névnaptár alapján. Kulcs: 'HH-NN'
  nameDays: {
    '01-01': ['Fruzsina'],
    '01-02': ['Ábel'],
    '01-03': ['Genovéva', 'Benjámin'],
    '01-04': ['Titusz', 'Leona'],
    '01-05': ['Simon', 'Edvárd'],
    '01-06': ['Boldizsár'],
    '01-07': ['Attila', 'Ramóna'],
    '01-08': ['Gyöngyvér'],
    '01-09': ['Marcell'],
    '01-10': ['Melánia'],
    '01-11': ['Ágota'],
    '01-12': ['Ernő'],
    '01-13': ['Veronika'],
    '01-14': ['Bódog'],
    '01-15': ['Lóránt', 'Loránd'],
    '01-16': ['Gusztáv'],
    '01-17': ['Antal', 'Antónia'],
    '01-18': ['Piroska'],
    '01-19': ['Sára', 'Márió'],
    '01-20': ['Fábián', 'Sebestyén'],
    '01-21': ['Ágnes'],
    '01-22': ['Vince', 'Artúr'],
    '01-23': ['Zelma', 'Rajmund'],
    '01-24': ['Timót'],
    '01-25': ['Pál'],
    '01-26': ['Vanda', 'Paula'],
    '01-27': ['Angelika'],
    '01-28': ['Károly', 'Karola'],
    '01-29': ['Adél'],
    '01-30': ['Martina', 'Gerda'],
    '01-31': ['Marcella'],

    '02-01': ['Ignác'],
    '02-02': ['Karolina', 'Aida'],
    '02-03': ['Balázs'],
    '02-04': ['Ráhel', 'Csenge'],
    '02-05': ['Ágota', 'Ingrid'],
    '02-06': ['Dorottya', 'Dóra'],
    '02-07': ['Tódor', 'Rómeó'],
    '02-08': ['Aranka'],
    '02-09': ['Abigél', 'Alex'],
    '02-10': ['Elvira'],
    '02-11': ['Bertold', 'Marietta'],
    '02-12': ['Lívia', 'Lídia'],
    '02-13': ['Ella', 'Linda'],
    '02-14': ['Bálint', 'Valentin'],
    '02-15': ['Kolos', 'Georgina'],
    '02-16': ['Julianna', 'Lilla'],
    '02-17': ['Donát'],
    '02-18': ['Bernadett'],
    '02-19': ['Zsuzsanna'],
    '02-20': ['Aladár', 'Álmos'],
    '02-21': ['Eleonóra'],
    '02-22': ['Gerzson'],
    '02-23': ['Alfréd'],
    '02-24': ['Mátyás', 'Jázmin'],
    '02-25': ['Géza'],
    '02-26': ['Edina'],
    '02-27': ['Ákos', 'Bátor'],
    '02-28': ['Elemér'],
    '02-29': ['Szökőnap'],

    '03-01': ['Albin'],
    '03-02': ['Lujza'],
    '03-03': ['Kornélia'],
    '03-04': ['Kázmér'],
    '03-05': ['Adorján', 'Adrián'],
    '03-06': ['Leonóra', 'Inez'],
    '03-07': ['Tamás'],
    '03-08': ['Zoltán'],
    '03-09': ['Franciska', 'Fanni'],
    '03-10': ['Ildikó'],
    '03-11': ['Szilárd'],
    '03-12': ['Gergely'],
    '03-13': ['Krisztián', 'Ajtony'],
    '03-14': ['Matild'],
    '03-15': ['Kristóf'],
    '03-16': ['Henrietta'],
    '03-17': ['Gertrúd', 'Patrik'],
    '03-18': ['Sándor', 'Ede'],
    '03-19': ['József', 'Bánk'],
    '03-20': ['Klaudia'],
    '03-21': ['Benedek'],
    '03-22': ['Beáta', 'Izolda'],
    '03-23': ['Emőke'],
    '03-24': ['Gábor', 'Karina'],
    '03-25': ['Irén', 'Írisz'],
    '03-26': ['Emánuel'],
    '03-27': ['Hajnalka'],
    '03-28': ['Gedeon', 'Johanna'],
    '03-29': ['Auguszta'],
    '03-30': ['Zalán'],
    '03-31': ['Árpád'],

    '04-01': ['Hugó'],
    '04-02': ['Áron'],
    '04-03': ['Buda', 'Richárd'],
    '04-04': ['Izidor'],
    '04-05': ['Vince'],
    '04-06': ['Vilmos', 'Bíborka'],
    '04-07': ['Herman'],
    '04-08': ['Dénes'],
    '04-09': ['Erhard'],
    '04-10': ['Zsolt'],
    '04-11': ['Leó', 'Szaniszló'],
    '04-12': ['Gyula'],
    '04-13': ['Ida'],
    '04-14': ['Tibor'],
    '04-15': ['Anasztázia', 'Tas'],
    '04-16': ['Csongor'],
    '04-17': ['Rudolf'],
    '04-18': ['Andrea', 'Ilma'],
    '04-19': ['Emma'],
    '04-20': ['Tivadar'],
    '04-21': ['Konrád'],
    '04-22': ['Csilla', 'Noémi'],
    '04-23': ['Béla'],
    '04-24': ['György'],
    '04-25': ['Márk'],
    '04-26': ['Ervin'],
    '04-27': ['Zita'],
    '04-28': ['Valéria'],
    '04-29': ['Péter'],
    '04-30': ['Katalin', 'Kitti'],

    '05-01': ['Fülöp', 'Jakab'],
    '05-02': ['Zsigmond'],
    '05-03': ['Tímea', 'Irma'],
    '05-04': ['Mónika', 'Flórián'],
    '05-05': ['Györgyi'],
    '05-06': ['Ivett', 'Frida'],
    '05-07': ['Gizella'],
    '05-08': ['Mihály'],
    '05-09': ['Gergely'],
    '05-10': ['Ármin', 'Pálma'],
    '05-11': ['Ferenc'],
    '05-12': ['Pongrác'],
    '05-13': ['Szervác', 'Imola'],
    '05-14': ['Bonifác'],
    '05-15': ['Zsófia', 'Szonja'],
    '05-16': ['Mózes', 'Botond'],
    '05-17': ['Paszkál'],
    '05-18': ['Erik', 'Alexandra'],
    '05-19': ['Ivó', 'Milán'],
    '05-20': ['Bernát', 'Felícia'],
    '05-21': ['Konstantin'],
    '05-22': ['Júlia', 'Rita'],
    '05-23': ['Dezső'],
    '05-24': ['Eliza'],
    '05-25': ['Orbán'],
    '05-26': ['Fülöp', 'Evelin'],
    '05-27': ['Hella'],
    '05-28': ['Emil', 'Csanád'],
    '05-29': ['Magdolna'],
    '05-30': ['Janka', 'Zsanett'],
    '05-31': ['Angéla', 'Petronella'],

    '06-01': ['Tünde'],
    '06-02': ['Kármen', 'Anita'],
    '06-03': ['Klotild'],
    '06-04': ['Bulcsú'],
    '06-05': ['Fatime'],
    '06-06': ['Norbert', 'Cintia'],
    '06-07': ['Róbert'],
    '06-08': ['Medárd'],
    '06-09': ['Félix'],
    '06-10': ['Margit', 'Gréta'],
    '06-11': ['Barnabás'],
    '06-12': ['Villő'],
    '06-13': ['Antal', 'Anett'],
    '06-14': ['Vazul'],
    '06-15': ['Jolán', 'Vid'],
    '06-16': ['Jusztin'],
    '06-17': ['Laura', 'Alida'],
    '06-18': ['Arnold', 'Levente'],
    '06-19': ['Gyárfás'],
    '06-20': ['Rafael'],
    '06-21': ['Alajos', 'Leila'],
    '06-22': ['Paulina'],
    '06-23': ['Zoltán'],
    '06-24': ['Iván'],
    '06-25': ['Vilmos'],
    '06-26': ['János', 'Pál'],
    '06-27': ['László'],
    '06-28': ['Levente', 'Irén'],
    '06-29': ['Péter', 'Pál'],
    '06-30': ['Pál'],

    '07-01': ['Tihamér', 'Annamária'],
    '07-02': ['Ottó'],
    '07-03': ['Kornél', 'Soma'],
    '07-04': ['Ulrik'],
    '07-05': ['Emese', 'Sarolta'],
    '07-06': ['Csaba'],
    '07-07': ['Apollónia'],
    '07-08': ['Ellák'],
    '07-09': ['Lukrécia'],
    '07-10': ['Amália'],
    '07-11': ['Nóra', 'Lili'],
    '07-12': ['Izabella', 'Dalma'],
    '07-13': ['Jenő'],
    '07-14': ['Örs', 'Stella'],
    '07-15': ['Henrik', 'Roland'],
    '07-16': ['Valter'],
    '07-17': ['Endre', 'Elek'],
    '07-18': ['Frigyes'],
    '07-19': ['Emília'],
    '07-20': ['Illés'],
    '07-21': ['Dániel', 'Daniella'],
    '07-22': ['Magdolna'],
    '07-23': ['Lenke'],
    '07-24': ['Kinga', 'Kincső'],
    '07-25': ['Kristóf', 'Jakab'],
    '07-26': ['Anna', 'Anikó'],
    '07-27': ['Olga', 'Liliána'],
    '07-28': ['Szabolcs'],
    '07-29': ['Márta', 'Flóra'],
    '07-30': ['Judit', 'Xénia'],
    '07-31': ['Oszkár'],

    '08-01': ['Boglárka'],
    '08-02': ['Lehel'],
    '08-03': ['Hermina'],
    '08-04': ['Domonkos', 'Dominika'],
    '08-05': ['Krisztina'],
    '08-06': ['Berta', 'Bettina'],
    '08-07': ['Ibolya'],
    '08-08': ['László'],
    '08-09': ['Emőd'],
    '08-10': ['Lőrinc'],
    '08-11': ['Zsuzsanna', 'Tiborc'],
    '08-12': ['Klára'],
    '08-13': ['Ipoly'],
    '08-14': ['Marcell'],
    '08-15': ['Mária'],
    '08-16': ['Ábrahám'],
    '08-17': ['Jácint'],
    '08-18': ['Ilona'],
    '08-19': ['Huba'],
    '08-20': ['István'],
    '08-21': ['Sámuel', 'Hajna'],
    '08-22': ['Menyhért', 'Mirjam'],
    '08-23': ['Bence'],
    '08-24': ['Bertalan'],
    '08-25': ['Lajos', 'Patrícia'],
    '08-26': ['Izsó'],
    '08-27': ['Gáspár'],
    '08-28': ['Ágoston'],
    '08-29': ['Beatrix', 'Erna'],
    '08-30': ['Rózsa'],
    '08-31': ['Erika', 'Bella'],

    '09-01': ['Egyed', 'Egon'],
    '09-02': ['Rebeka', 'Dorina'],
    '09-03': ['Hilda'],
    '09-04': ['Rozália'],
    '09-05': ['Viktor', 'Lőrinc'],
    '09-06': ['Zakariás'],
    '09-07': ['Regina'],
    '09-08': ['Mária', 'Adrienn'],
    '09-09': ['Ádám'],
    '09-10': ['Nikolett', 'Hunor'],
    '09-11': ['Teodóra'],
    '09-12': ['Mária'],
    '09-13': ['Kornél'],
    '09-14': ['Szeréna', 'Roxána'],
    '09-15': ['Enikő', 'Melitta'],
    '09-16': ['Edit'],
    '09-17': ['Zsófia'],
    '09-18': ['Diána'],
    '09-19': ['Vilhelmina'],
    '09-20': ['Friderika'],
    '09-21': ['Máté', 'Mirella'],
    '09-22': ['Móric'],
    '09-23': ['Tekla'],
    '09-24': ['Gellért', 'Mercédesz'],
    '09-25': ['Eufrozina', 'Kende'],
    '09-26': ['Jusztina'],
    '09-27': ['Adalbert'],
    '09-28': ['Vencel'],
    '09-29': ['Mihály'],
    '09-30': ['Jeromos'],

    '10-01': ['Malvin'],
    '10-02': ['Petra'],
    '10-03': ['Helga'],
    '10-04': ['Ferenc'],
    '10-05': ['Aurél'],
    '10-06': ['Brúnó', 'Renáta'],
    '10-07': ['Amália'],
    '10-08': ['Koppány'],
    '10-09': ['Dénes'],
    '10-10': ['Gedeon'],
    '10-11': ['Brigitta'],
    '10-12': ['Miksa'],
    '10-13': ['Kálmán', 'Ede'],
    '10-14': ['Helén'],
    '10-15': ['Teréz'],
    '10-16': ['Gál'],
    '10-17': ['Hedvig'],
    '10-18': ['Lukács'],
    '10-19': ['Nándor'],
    '10-20': ['Vendel'],
    '10-21': ['Orsolya'],
    '10-22': ['Előd'],
    '10-23': ['Gyöngyi'],
    '10-24': ['Salamon'],
    '10-25': ['Blanka', 'Bianka'],
    '10-26': ['Dömötör'],
    '10-27': ['Szabina'],
    '10-28': ['Simon', 'Szimonetta'],
    '10-29': ['Nárcisz'],
    '10-30': ['Alfonz'],
    '10-31': ['Farkas'],

    '11-01': ['Marianna'],
    '11-02': ['Achilles'],
    '11-03': ['Győző'],
    '11-04': ['Károly'],
    '11-05': ['Imre'],
    '11-06': ['Lénárd'],
    '11-07': ['Rezső'],
    '11-08': ['Zsombor'],
    '11-09': ['Tivadar'],
    '11-10': ['Réka'],
    '11-11': ['Márton'],
    '11-12': ['Jónás', 'Renátó'],
    '11-13': ['Szilvia'],
    '11-14': ['Aliz'],
    '11-15': ['Albert', 'Lipót'],
    '11-16': ['Ödön'],
    '11-17': ['Hortenzia', 'Gergő'],
    '11-18': ['Jenő'],
    '11-19': ['Erzsébet'],
    '11-20': ['Jolán'],
    '11-21': ['Olivér'],
    '11-22': ['Cecília'],
    '11-23': ['Kelemen', 'Klementina'],
    '11-24': ['Emma'],
    '11-25': ['Katalin'],
    '11-26': ['Virág'],
    '11-27': ['Virgil'],
    '11-28': ['Stefánia'],
    '11-29': ['Taksony'],
    '11-30': ['András', 'Andor'],

    '12-01': ['Elza'],
    '12-02': ['Melinda', 'Vivien'],
    '12-03': ['Ferenc', 'Olívia'],
    '12-04': ['Borbála', 'Barbara'],
    '12-05': ['Vilma'],
    '12-06': ['Miklós'],
    '12-07': ['Ambrus'],
    '12-08': ['Mária'],
    '12-09': ['Natália'],
    '12-10': ['Judit'],
    '12-11': ['Árpád'],
    '12-12': ['Gabriella'],
    '12-13': ['Luca', 'Otília'],
    '12-14': ['Szilárda'],
    '12-15': ['Valér'],
    '12-16': ['Etelka', 'Aletta'],
    '12-17': ['Lázár', 'Olimpia'],
    '12-18': ['Auguszta'],
    '12-19': ['Viola'],
    '12-20': ['Teofil'],
    '12-21': ['Tamás'],
    '12-22': ['Zénó'],
    '12-23': ['Viktória'],
    '12-24': ['Ádám', 'Éva'],
    '12-25': ['Eugénia'],
    '12-26': ['István'],
    '12-27': ['János'],
    '12-28': ['Kamilla'],
    '12-29': ['Tamás', 'Tamara'],
    '12-30': ['Dávid'],
    '12-31': ['Szilveszter']
  },

  // 8) A populáris „cigány horoszkóp" 12 tárgyjegye
  gypsyHoroscope: {
    intro: 'A „cigány horoszkóp" néven terjedő, tárgyszimbólumokra épülő 12 jegyes rendszer modern, kereskedelmi eredetű konstrukció: nincs néprajzi bizonyíték arra, hogy roma közösségek valaha születési dátum alapú asztrológiát használtak volna, a jegyhatárok pedig napra pontosan a nyugati zodiákusra vannak ráhúzva. A szimbólumkészlet a 19–20. századi jóskártya- és talizmán-ikonográfiából épül, a magyar weboldalak listái ráadásul egymástól is eltérnek — vagyis szórakoztató célú tartalom, amely a roma kultúra szimbólumvilágából csak lazán merít, és nem hiteles roma hagyomány.',
    signs: [
      {
        name: 'Tőr',
        from: [3, 21],
        to: [4, 20],
        text: 'A kezdeményezés jegye: a leírások szerint aki ide tartozik, nyílt lapokkal játszik, egyenesen kimondja, amit gondol, és a becsület a legfontosabb értéke. Hirtelen haragú, de a dühe éppolyan gyorsan el is múlik, mint ahogy fellángolt.'
      },
      {
        name: 'Korona',
        from: [4, 21],
        to: [5, 20],
        text: 'Erős kisugárzású, született vezető, akire önkéntelenül is felnéznek az emberek. Kiváló a pénzügyi érzéke és rendkívül szorgalmas, ezért a leírások szerint általában megteremti magának azt a biztonságot, amire vágyik.'
      },
      {
        name: 'Gyertyatartó',
        from: [5, 21],
        to: [6, 20],
        text: 'Az elvei szerint élő, őszinte ember jegye, aki a fényt viszi oda, ahol sötét van, és az élet apró örömeit is észreveszi. Néha rugalmatlan, mert nehezen mond le arról, amit egyszer helyesnek ismert fel.'
      },
      {
        name: 'Kerék',
        from: [6, 21],
        to: [7, 21],
        text: 'A családközpontúság és a termékenység jegye: érzelmileg érzékeny, mélyen kötődő ember, akinek az otthon a világ közepe. A leírások szerint optimista és ellenálló — a kerék mindig továbbfordul, akármi is éri.'
      },
      {
        name: 'Csillag',
        from: [7, 22],
        to: [8, 22],
        text: 'A hatágú csillag az egyensúly és a béke jelképe ebben a rendszerben. Népszerű, tapintatos ember jegye, akit gyakran hívnak békéltetni, mert mindenkiben meg tudja találni azt, ami összeköti a szemben állókat.'
      },
      {
        name: 'Harang',
        from: [8, 23],
        to: [9, 23],
        text: 'A fejlődés és a folytonos jobbítás jegye: aki ide tartozik, sosem elégszik meg a felszínnel, mindig tovább csiszolja a munkáját és önmagát. Elvhű ember, de a leírások szerint tud kompromisszumot kötni, ha a közös ügy úgy kívánja.'
      },
      {
        name: 'Érme',
        from: [9, 24],
        to: [10, 22],
        text: 'Az igazságosság jegye: kiváló kommunikátor, aki szavakkal teremt rendet a viszályban, és mindig a gyengébb oldalára áll. Az érme két oldala a mérlegelést jelenti — nem dönt addig, amíg mindkét felet meg nem hallgatta.'
      },
      {
        name: 'Kés',
        from: [10, 23],
        to: [11, 21],
        text: 'A harcos jegye: szenvedélyes, erős és ösztönös ember, aki a saját erkölcsi kódexét követi, akkor is, ha az szembemegy a világ elvárásaival. A leírások szerint mély érzelmi élete van, amit ritkán mutat meg bárkinek.'
      },
      {
        name: 'Fejsze',
        from: [11, 22],
        to: [12, 21],
        text: 'A szabadság és a függetlenség jegye — más listákban Dob vagy Kulcs néven szerepel, ami jól mutatja a rendszer modern, változékony eredetét. Elszánt, derűlátó és bátor ember, aki inkább utat vág magának, mint hogy megalkudjon.'
      },
      {
        name: 'Patkó',
        from: [12, 22],
        to: [1, 20],
        text: 'A szerencse és a kitartás jegye: a patkó a leírásokban nem véletlen szerencsét jelent, hanem azt, amit kemény munkával kiérdemelnek. Megbízható, felelősségvállaló ember, akire a család és a közösség egyaránt számíthat.'
      },
      {
        name: 'Csésze',
        from: [1, 21],
        to: [2, 19],
        text: 'A lélek edénye: alkalmazkodó, szelíd természet, aki könnyen megtalálja a boldogságot ott is, ahol mások csak hiányt látnak. A leírások szerint befogadó ember, akihez szívesen fordulnak mások a gondjaikkal. Egyes változatokban Kehely néven szerepel.'
      },
      {
        name: 'Kápolna',
        from: [2, 20],
        to: [3, 20],
        text: 'A hit, a remény és a spiritualitás jegye: mélyen empatikus, segítőkész ember, aki ösztönösen megérzi mások fájdalmát. Olykor álmodozó, és a leírások szerint épp ezért van szüksége olyan társakra, akik visszahúzzák a földre.'
      }
    ]
  }
};
