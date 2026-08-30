/*
 * degrees.js — az asztrológiai FOKOK jelentései
 *
 * Tartalom:
 *   1. sabian   — a 360 Szabian szimbólum (Marc Edmund Jones és Elsie Wheeler,
 *                 San Diego, 1925). A szimbólumok jegyenként 1-től 30-ig
 *                 számozódnak, FELFELÉ kerekítve: a 0°00'–0°59' tartomány az
 *                 1. szimbólum, a 29°00'–29°59' a 30. Vagyis a keresett index
 *                 = Math.floor(fok) + 1. A képleírások Jones eredeti
 *                 jegyzeteinek és Dane Rudhyar 1973-as átdolgozásának
 *                 (An Astrological Mandala) tartalmilag hű magyar
 *                 összefoglalásai; az értelmezések saját megfogalmazások.
 *
 *   2. terms    — az egyiptomi (ptolemaioszi) határok / bounds táblája.
 *                 Forrás: a Nechepso–Petosiris hagyományra visszavezetett,
 *                 Vettius Valens és Dorotheus által is használt egyiptomi
 *                 tábla, ahogy Ptolemaiosz a Tetrabiblosz I. könyvében közli.
 *                 Ellenőrizve: sevenstarsastrology.com, augurine.com,
 *                 altairastrology.wordpress.com. Minden jegy 5 szakasza
 *                 pontosan 30 fokot ad ki.
 *
 *   3. critical — a hagyományos kritikus fokok minőség (kardinális / szilárd /
 *                 változó) szerint, valamint a 29. (anaretikus) és a 0. fok.
 *                 Ellenőrizve: cafeastrology.com, astrologyuniversity.com.
 *
 *   4. monomoiria — a fok-urak kaldeus rendje Vettius Valens (Anthologiae IV.)
 *                 és Paulus Alexandrinus rendszere szerint: a jegy első fokát
 *                 a jegy hagyományos ura kapja, onnan a csökkenő kaldeus sor
 *                 (Szaturnusz – Jupiter – Mars – Nap – Vénusz – Merkúr – Hold)
 *                 fut tovább fokról fokra.
 *
 * Sima script (nem ES modul), file:// protokollon is betölthető.
 * Jegykulcsok: kos, bika, ikrek, rak, oroszlan, szuz, merleg, skorpio,
 *              nyilas, bak, vizonto, halak
 */

window.HDATA = window.HDATA || {};

window.HDATA.degrees = {

  /* ------------------------------------------------------------------ *
   *  1. SZABIAN SZIMBÓLUMOK — mind a 360 fok
   * ------------------------------------------------------------------ */

  sabianIntro: 'A Szabian szimbólumokat 1925 egy San Diegó-i délutánján rögzítette Marc Edmund Jones asztrológus és Elsie Wheeler médium: az állatöv mind a 360 fokához egyetlen látomásszerű képet társítottak. A rendszert Dane Rudhyar dolgozta át 1973-ban, azóta a fokelemzés legelterjedtebb eszköze. A szimbólumok jegyenként 1-től 30-ig számozódnak, és felfelé kerekítünk: a 0°00’ és 0°59’ közötti helyzet az 1. szimbólumhoz tartozik, a 29°00’ és 29°59’ közötti a 30.-hoz.',

  sabianUsage: 'Fokindex = a jegyen belüli fok egész része + 1. Például 14°37’ Bika esetén a Bika 15. szimbóluma érvényes.',

  sabian: {

    /* ---------------- KOS ---------------- */
    kos: [
      { deg: 1, symbol: 'Egy nő kikel a tengerből, egy fóka öleli át', text: 'A tiszta kezdet pillanata: valami új lép ki a formátlan ősanyagból, még félig az ösztönvilághoz kötve.' },
      { deg: 2, symbol: 'Egy komikus szórakoztatja a közönséget', text: 'A személyiség a másokkal való játékos érintkezésben találja meg önmagát és a saját hangját.' },
      { deg: 3, symbol: 'Egy férfi arcéle kirajzolódik hazája körvonalában', text: 'Az egyén sorsa összeforr a közösségével: azt fejezi ki, ami sokak közös öröksége.' },
      { deg: 4, symbol: 'Két szerelmes sétál egy félreeső ösvényen', text: 'A kapcsolat elvonulást kíván a világ zajától, hogy a bensőséges kötelék megerősödhessen.' },
      { deg: 5, symbol: 'Szárnyas háromszög', text: 'A gondolat és a szellemi felismerés fölemelkedik a puszta anyagi érdek fölé.' },
      { deg: 6, symbol: 'Egy négyszög, amelynek csak az egyik oldala van megvilágítva', text: 'Minden helyzetnek van megvilágított és árnyékban maradó fele: az önismeret a sötét oldal felderítésével kezdődik.' },
      { deg: 7, symbol: 'Egy férfi sikeresen fejezi ki magát két világban egyszerre', text: 'Képesség arra, hogy valaki a hétköznapi és a belső valóságban egyaránt otthon legyen.' },
      { deg: 8, symbol: 'Széles karimájú női kalap, szalagjait fújja a keleti szél', text: 'Az érzékenység kitárulkozik a felülről érkező hatások előtt, de védelemre is szorul.' },
      { deg: 9, symbol: 'Kristálygömbbe néző jós', text: 'A figyelem befelé fordul, hogy a felszín alatti mintázatokat is meglássa.' },
      { deg: 10, symbol: 'Egy tanító új jelképes formát ad a régi képeknek', text: 'A hagyomány akkor marad élő, ha minden nemzedék újrafogalmazza a maga nyelvén.' },
      { deg: 11, symbol: 'Egy ország vezetője', text: 'A felelősségvállalás foka: az egyéni akarat a közösség szolgálatába áll.' },
      { deg: 12, symbol: 'Vadludak csapata', text: 'A közös cél és a rendezett együtthaladás messzebbre visz, mint a magányos erőfeszítés.' },
      { deg: 13, symbol: 'Egy fel nem robbant bomba, egy kudarcba fulladt forradalom emléke', text: 'Kimondatlan feszültség marad a mélyben: a változás igénye jelen van, de még nem talált utat.' },
      { deg: 14, symbol: 'Kígyó tekereg egy férfi és egy nő körül', text: 'A vágy és a tudás kísértése átszövi a kapcsolatokat, és döntés elé állít.' },
      { deg: 15, symbol: 'Egy indián takarót sző', text: 'A türelmes, mintázatot építő munka rendet teremt a szétszórt szálakból.' },
      { deg: 16, symbol: 'Manók táncolnak a lemenő napban', text: 'A természet játékos, tudattalan erői mozdulnak meg, amikor a nappali értelem elcsendesedik.' },
      { deg: 17, symbol: 'Két illedelmes hajadon ül némán egymás mellett', text: 'A visszafogottság megőrzi a méltóságot, de meg is akadályozhatja az őszinte találkozást.' },
      { deg: 18, symbol: 'Egy üres függőágy', text: 'A pihenés kínálja magát; a felkínált lehetőséggel élni is kell tudni.' },
      { deg: 19, symbol: 'Repülő szőnyeg lebeg a nagyváros lepusztult negyede fölött', text: 'Felülnézet és képzelet segít átlátni azt, amiben belülről elveszne az ember.' },
      { deg: 20, symbol: 'Fiatal lány madarakat etet télen', text: 'A szűkösség idején tanúsított gondoskodás tartja életben a törékeny értékeket.' },
      { deg: 21, symbol: 'Egy ökölvívó lép a ringbe', text: 'Elérkezett a nyílt megmérettetés pillanata: a felkészülést tettre kell váltani.' },
      { deg: 22, symbol: 'A beteljesült vágyak kertjének kapuja', text: 'A vágyak világa megnyílik, de a küszöb átlépése tudatos választást kíván.' },
      { deg: 23, symbol: 'Egy nő pasztellszínű ruhában nehéz, letakart terhet visz', text: 'Könnyed külső mögött értékes és súlyos belső örökség rejtőzik.' },
      { deg: 24, symbol: 'Nyitott ablak, a függöny bőségszaruvá dagad', text: 'Ha az ember kinyílik, a bőség magától áramlik befelé.' },
      { deg: 25, symbol: 'Egy kettős ígéret feltárja külső és belső jelentését', text: 'Amit kimondunk, mindig két szinten kötelez: a világ és a saját lelkiismeretünk felé.' },
      { deg: 26, symbol: 'Egy férfi több adományt kapott, mint amennyit elbír', text: 'A tehetség bősége áldás és teher is: válogatni és összpontosítani kell.' },
      { deg: 27, symbol: 'A képzelet visszaszerzi az elszalasztott lehetőséget', text: 'Amit a sors elvett, azt a belső munka más formában visszaadhatja.' },
      { deg: 28, symbol: 'Nagy, csalódott közönség', text: 'Az elvárások és a valóság között támadt szakadék józanító tanulságot hoz.' },
      { deg: 29, symbol: 'A szférák zenéje', text: 'A rész beleilleszkedik a nagy egész harmóniájába, ha az ember elég csendes hozzá.' },
      { deg: 30, symbol: 'Kacsaúsztató a fiókákkal', text: 'A védett, otthonos közeg biztosítja a kezdeti fejlődés nyugalmát.' }
    ],

    /* ---------------- BIKA ---------------- */
    bika: [
      { deg: 1, symbol: 'Tiszta hegyi patak', text: 'Az érintetlen forrás energiája: friss, egyszerű és önmagában is elegendő kezdet.' },
      { deg: 2, symbol: 'Elektromos vihar', text: 'A felgyülemlett feszültség hirtelen kisül, és megtisztítja a levegőt.' },
      { deg: 3, symbol: 'Természetes lépcsőfokok vezetnek egy virágzó lóheremezőre', text: 'A fokozatos, lépésről lépésre haladás vezet el a bőséghez.' },
      { deg: 4, symbol: 'Aranyfazék a szivárvány végén', text: 'Az ígéret vonzó, de a valódi érték a keresés útján gyűlik össze.' },
      { deg: 5, symbol: 'Özvegy a nyitott sírnál', text: 'A veszteség szembesít azzal, hogy minden birtoklás ideiglenes.' },
      { deg: 6, symbol: 'Híd épül egy szakadék fölött', text: 'Türelmes munkával áthidalható az, ami áthidalhatatlannak látszott.' },
      { deg: 7, symbol: 'A szamáriai asszony az ősi kútnál', text: 'A mindennapi teendő közben váratlanul megnyílik egy mélyebb, szellemi forrás.' },
      { deg: 8, symbol: 'Szánkó hó nélkül', text: 'A legjobb eszköz is használhatatlan, ha nincs meg hozzá a megfelelő pillanat.' },
      { deg: 9, symbol: 'Teljesen feldíszített karácsonyfa', text: 'A belső gazdagság látható, ünnepi formát ölt, és örömöt sugároz másoknak.' },
      { deg: 10, symbol: 'Vöröskeresztes ápolónő', text: 'Az odaadó, gyakorlati segítségnyújtás a válság idején mutatja meg az igazi értéket.' },
      { deg: 11, symbol: 'Egy nő virágokat locsol', text: 'A rendszeres, szerény gondoskodás nélkül a szépség elhervad.' },
      { deg: 12, symbol: 'Fiatal pár nézegeti a kirakatokat a főutcán', text: 'A vágyak felmérése és összehangolása előkészíti a közös döntéseket.' },
      { deg: 13, symbol: 'Hordár nehéz poggyásszal', text: 'Vállalt teher, amelyet nem magunkért, hanem másokért cipelünk.' },
      { deg: 14, symbol: 'Gyerekek játszanak a parton, a vízszélen kagylók tapogatóznak', text: 'A tudatos öröm és az ösztönös élet ugyanazon a határvonalon osztozik.' },
      { deg: 15, symbol: 'Bebugyolált férfi hetyke selyemcilinderben', text: 'A külsőség önvédelem és önkifejezés is egyszerre.' },
      { deg: 16, symbol: 'Az öreg tanár nem tudja lekötni a diákjait a régi tudással', text: 'A tudás akkor él tovább, ha képes új nyelven megszólalni.' },
      { deg: 17, symbol: 'Jelképes küzdelem kardok és fáklyák között', text: 'Az erő és a megvilágosodás útja verseng egymással a döntés pillanatában.' },
      { deg: 18, symbol: 'Egy nő régi zsákot szellőztet a napos ablakban', text: 'A múltból hozott terheket ki kell szellőztetni, hogy újra használhatóvá váljanak.' },
      { deg: 19, symbol: 'Új földrész emelkedik ki az óceánból', text: 'A tudattalanból váratlanul szilárd, új alap bukkan elő.' },
      { deg: 20, symbol: 'Szárnyszerű felhőfoszlányok húznak át az égen', text: 'Finom jelek előlegezik meg a közelgő változást.' },
      { deg: 21, symbol: 'Egy ujj a nyitott könyv egy sorára mutat', text: 'A lényeg egyetlen pontosan kiemelt mondatban is megragadható.' },
      { deg: 22, symbol: 'Fehér galamb repül a háborgó vizek fölött', text: 'A béke és a bizalom átvisz a nyugtalanság időszakán.' },
      { deg: 23, symbol: 'Ékszerbolt, tele csodálatos drágakövekkel', text: 'A sokféle érték közül a saját ízlés és mérték szerint kell választani.' },
      { deg: 24, symbol: 'Indián harcos vágtat, övén hadizsákmánnyal', text: 'A nyers, hódító életerő megmutatja magát, de mértéket kell tanulnia.' },
      { deg: 25, symbol: 'Nagy, jól gondozott közpark', text: 'A közösen ápolt tér mindenkit gazdagít, ha vigyáznak rá.' },
      { deg: 26, symbol: 'Egy spanyol férfi szerenádot ad kedvesének', text: 'Az érzelmet szépen formált gesztussal kell kifejezni, hogy célba érjen.' },
      { deg: 27, symbol: 'Öreg indián asszony gyöngyöket árul', text: 'A hagyomány apró, kézzelfogható formákban adja tovább magát.' },
      { deg: 28, symbol: 'Egy nő az élete delén túl új szerelemre talál', text: 'A megújulás nem életkor kérdése: az érzelem bármikor újranyithat egy kaput.' },
      { deg: 29, symbol: 'Két cipész dolgozik egy asztalnál', text: 'A megosztott, csendes közös munka biztos megélhetést és összetartozást ad.' },
      { deg: 30, symbol: 'Páva sétál a régi kastély teraszán', text: 'A megszerzett érték büszke megmutatása szép, de könnyen üres pompává válik.' }
    ],

    /* ---------------- IKREK ---------------- */
    ikrek: [
      { deg: 1, symbol: 'Üvegfenekű csónak felfedi a tenger mélyének csodáit', text: 'A kíváncsi értelem átlát a felszínen, és megmutatja, ami odalent zajlik.' },
      { deg: 2, symbol: 'A Mikulás titokban tölti meg a zoknikat', text: 'A rejtve maradó jótétemény önzetlen öröme.' },
      { deg: 3, symbol: 'A párizsi Tuileriák kertje', text: 'A kulturált, formába rendezett tér társas találkozásra hív.' },
      { deg: 4, symbol: 'Magyal és fagyöngy hozza az ünnepet a házba', text: 'Néhány jelképes tárgy is képes megteremteni a közös hangulatot.' },
      { deg: 5, symbol: 'Radikális folyóirat harsány címlappal cselekvésre szólít', text: 'A gondolat nyílt kiállássá és mozgósító erővé válik.' },
      { deg: 6, symbol: 'Munkások olajat fúrnak', text: 'Kitartó munkával a mélyben rejlő nyersanyag a felszínre hozható.' },
      { deg: 7, symbol: 'Régimódi kút', text: 'A közösség régóta ismert, megbízható forrásához mindig vissza lehet térni.' },
      { deg: 8, symbol: 'Feldühödött sztrájkolók veszik körül a gyárat', text: 'A közös elégedetlenség hangot és formát talál magának.' },
      { deg: 9, symbol: 'Nyilakkal teli tegez', text: 'Sokféle eszköz áll készen, de mindegyiket külön kell célra tartani.' },
      { deg: 10, symbol: 'Zuhanórepülést végző repülőgép', text: 'A merész kockázat csak biztos irányítással válik teljesítménnyé.' },
      { deg: 11, symbol: 'Frissen megnyitott földek várják a telepeseket', text: 'Az új terep szabad lehetőséget kínál annak, aki mer belevágni.' },
      { deg: 12, symbol: 'Egy rabszolgalány követeli a jogait az úrnőjétől', text: 'A kimondott igény az első lépés a méltóság visszaszerzése felé.' },
      { deg: 13, symbol: 'Világhírű zongorista ad hangversenyt', text: 'A hosszú gyakorlás gyümölcse a közönség előtti szabad, magabiztos önkifejezés.' },
      { deg: 14, symbol: 'Két távol élő ember gondolati úton érintkezik', text: 'A valódi kapcsolat a távolságot is áthidalja.' },
      { deg: 15, symbol: 'Két holland gyerek beszélget', text: 'A közös nyelv és háttér egyszerű, közvetlen megértést teremt.' },
      { deg: 16, symbol: 'Szónok szenvedélyes beszédben dramatizálja az ügyét', text: 'Az érzelmi hevület figyelmet kelt, de torzíthatja is az igazságot.' },
      { deg: 17, symbol: 'Egy izmos ifjú feje érett gondolkodóévá változik', text: 'A nyers életerő idővel belátássá és bölcsességgé érik.' },
      { deg: 18, symbol: 'Két kínai férfi az anyanyelvén beszélget idegen tömegben', text: 'A saját kulturális kör megőrzi az identitást az idegen közegben is.' },
      { deg: 19, symbol: 'Vaskos ősi könyv tárja fel a hagyomány bölcsességét', text: 'A régi forrásokhoz fordulás megalapozza a mai döntéseket.' },
      { deg: 20, symbol: 'Önkiszolgáló étterem gazdag kínálattal', text: 'A bőséges választék szabadságot ad, de önálló ízlést is követel.' },
      { deg: 21, symbol: 'Zajos munkástüntetés', text: 'A közös akarat látványos erővel lép a nyilvánosság elé.' },
      { deg: 22, symbol: 'Táncoló párok töltik meg a csűrt az aratóünnepen', text: 'A befejezett munka öröme közösségi ünneppé oldódik.' },
      { deg: 23, symbol: 'Három fióka egy magas fán lévő fészekben', text: 'A védett magasban zajló érés még nem kész a repülésre.' },
      { deg: 24, symbol: 'Gyerekek korcsolyáznak a jégen', text: 'A könnyed mozgás akkor is öröm, ha a talaj bizonytalan.' },
      { deg: 25, symbol: 'Kertész pálmafákat nyes', text: 'A gondos metszés adja meg a növekedés helyes formáját.' },
      { deg: 26, symbol: 'Zúzmarás fák a téli napfényben', text: 'A dermedt időszaknak is megvan a maga tiszta, átlátszó szépsége.' },
      { deg: 27, symbol: 'Fiatal vándor kilép az erdőből, és a távoli városokat nézi', text: 'A megszokott világ határáról feltárul egy tágasabb élet ígérete.' },
      { deg: 28, symbol: 'A csőd lehetőséget ad az újrakezdésre', text: 'A régi terhek eltörlése után tiszta lappal lehet újraindulni.' },
      { deg: 29, symbol: 'A tavasz első énekesmadara szól a fa tetején', text: 'Egyetlen bátor hang jelenti be a mindenki által várt fordulatot.' },
      { deg: 30, symbol: 'Szépségverseny felvonulása a strandon', text: 'A megmutatkozás és a mások tekintete alakítja az önértékelést.' }
    ],

    /* ---------------- RÁK ---------------- */
    rak: [
      { deg: 1, symbol: 'A hajón a matrózok bevonják a régi zászlót, és újat húznak fel', text: 'A hovatartozás tudatos megváltoztatása új korszakot nyit.' },
      { deg: 2, symbol: 'Repülő szőnyegen ülve tág tájakat szemlél egy férfi', text: 'A képzelet fölemel, és átfogó képet ad az élet egészéről.' },
      { deg: 3, symbol: 'Sarkkutató rénszarvast vezet a jégszurdokban', text: 'A zord körülmények között a kitartás és a hűséges társ visz előre.' },
      { deg: 4, symbol: 'Macska vitatkozik egy egérrel', text: 'A természetes erőviszonyokat nem lehet szavakkal felülírni.' },
      { deg: 5, symbol: 'A vasúti átjáróban vonat töri össze az autót', text: 'A figyelmetlenség a személyes akarat és a nagy rendszerek ütközéséhez vezet.' },
      { deg: 6, symbol: 'Vadmadarak bélelik ki a fészküket', text: 'Az otthon megteremtése az ösztönös gondoskodás első lépése.' },
      { deg: 7, symbol: 'Két tündér táncol a holdfényes éjszakában', text: 'A képzelet és az érzés finom világa a hétköznapok mögött is elevenen él.' },
      { deg: 8, symbol: 'Felöltöztetett nyulak vonulnak fel', text: 'A társas szerepek gyakran csak jelmezek az ösztönös természet fölött.' },
      { deg: 9, symbol: 'Meztelen kislány a tó fölé hajolva halat próbál fogni', text: 'A tudattalanból merítés kezdetleges, játékos, de őszinte kísérlete.' },
      { deg: 10, symbol: 'Nagy gyémánt a csiszolás első fázisában', text: 'A nyers érték csak formálás után mutatja meg a ragyogását.' },
      { deg: 11, symbol: 'Bohóc ismert személyeket karikíroz', text: 'A humor leleplez, és emberi mértékre szállítja le a nagyságot.' },
      { deg: 12, symbol: 'Kínai asszony szoptat egy gyermeket, akinek aurája nagy tanítót sejtet', text: 'A hétköznapi gondoskodás mögött sokszor sorsdöntő jelentőség rejlik.' },
      { deg: 13, symbol: 'Enyhén behajlított kéz feltűnően nagy hüvelykujjal', text: 'Az akarat és a fogás képessége a jellem legfontosabb eszköze.' },
      { deg: 14, symbol: 'Nagyon idős férfi néz szembe a hatalmas északkeleti sötétséggel', text: 'Az élet végén az ismeretlennel való szembenézés bátorságot kíván.' },
      { deg: 15, symbol: 'Csoport, amely jóllakott, és élvezte is', text: 'Az élvezet természetes és jogos, amíg nem válik egyetlen céllá.' },
      { deg: 16, symbol: 'Egy férfi ősi könyv segítségével mandalát tanulmányoz', text: 'A hagyományos jelképek rendszere segít eligazodni a belső világban.' },
      { deg: 17, symbol: 'A magból tudás és élet bontakozik ki', text: 'Egyetlen kis kezdeményből egész életút és egész gondolatvilág nőhet ki.' },
      { deg: 18, symbol: 'Tyúk kapirgál a csibéinek', text: 'A gondoskodás mindennapos, aprólékos, fáradhatatlan munka.' },
      { deg: 19, symbol: 'Pap esketési szertartást végez', text: 'A közösség szentesíti és megtartja a személyes köteléket.' },
      { deg: 20, symbol: 'Velencei gondolások szerenádot adnak', text: 'A szépség és az érzelem hagyományos, kifinomult formában szólal meg.' },
      { deg: 21, symbol: 'Primadonna énekel', text: 'A kiemelkedő tehetség vállalja a színpad és a figyelem magányát is.' },
      { deg: 22, symbol: 'Fiatal nő vitorlást vár', text: 'A várakozás nyitottságot és hűséget kíván a bizonytalanságban.' },
      { deg: 23, symbol: 'Irodalmi kör összejövetele', text: 'A hasonló érdeklődésűek együttléte elmélyíti a gondolkodást.' },
      { deg: 24, symbol: 'Egy nő és két férfi hajótöröttként egy déltengeri szigeten', text: 'A szűk, zárt közeg felnagyítja a viszonyokat és a köztük lévő feszültséget.' },
      { deg: 25, symbol: 'Sötét palást borul hirtelen a jobb vállra', text: 'A saját akaratnál nagyobb erő is beleszólhat az ember terveibe.' },
      { deg: 26, symbol: 'Vendégek olvasnak egy gazdag ház könyvtárában', text: 'A felhalmozott tudás akkor ér valamit, ha megosztják.' },
      { deg: 27, symbol: 'Dühöngő vihar söpör végig a lakónegyeden', text: 'Az érzelmi vihar próbára teszi az otthon és a biztonság falait.' },
      { deg: 28, symbol: 'Indián lány bemutatja fehér kedvesét a törzsének', text: 'A világok közötti kapocs elfogadtatása bátorságot és tapintatot kíván.' },
      { deg: 29, symbol: 'Múzsa arany mérlegen méri az újszülött ikreket', text: 'A születő új mögött rejtett, magasabb mérce és egyensúly munkál.' },
      { deg: 30, symbol: 'Az Amerikai Forradalom Leányai egyesület tagja', text: 'Az örökölt származás rangot ad, de nem helyettesíti a saját teljesítményt.' }
    ],

    /* ---------------- OROSZLÁN ---------------- */
    oroszlan: [
      { deg: 1, symbol: 'Vér tolul a fejbe, ahogy a becsvágy mozgósítja az életerőt', text: 'A felfokozott önérvényesítés hatalmas energiát szabadít fel, de kockázatot is hordoz.' },
      { deg: 2, symbol: 'Mumpszjárvány', text: 'Az egyéni gyengeség közös, ragályos jelenséggé válhat a csoportban.' },
      { deg: 3, symbol: 'Érett nő rövidre vágatja a haját', text: 'A régi szerep levetése és a korral való lépéstartás bátor önmeghatározás.' },
      { deg: 4, symbol: 'Ünnepi öltözetű idős férfi vadásztrófeái mellett', text: 'A múlt sikereinek fitogtatása addig tartható, amíg valódi teljesítmény áll mögötte.' },
      { deg: 5, symbol: 'Sziklaalakzatok magasodnak a mély kanyon fölé', text: 'A hosszú idő formálta szilárd értékek felülemelkednek a pillanat változásain.' },
      { deg: 6, symbol: 'Régimódi hölgy szembesül egy mai lánnyal', text: 'A nemzedékek találkozása mindkét felet a saját mércéje felülvizsgálatára készteti.' },
      { deg: 7, symbol: 'A csillagképek fényesen ragyognak az éjszakai égen', text: 'Az egyéni sors beleíródik egy sokkal nagyobb, rendezett mintázatba.' },
      { deg: 8, symbol: 'Aktivista terjeszti forradalmi eszméit', text: 'A meggyőződés lelkes hirdetése formálja a közösség gondolkodását.' },
      { deg: 9, symbol: 'Üvegfúvók lehelete gyönyörű vázákat formál', text: 'A fegyelmezett, tudatosan irányított életerő szépséget teremt.' },
      { deg: 10, symbol: 'Hajnali harmat csillog a napfényben', text: 'A friss kezdet apró jelei csak a megfelelő megvilágításban látszanak.' },
      { deg: 11, symbol: 'Gyerekek hintáznak egy hatalmas tölgyfán', text: 'A biztos háttér adja a szabad, gondtalan játék lehetőségét.' },
      { deg: 12, symbol: 'Esti kerti mulatság felnőtteknek', text: 'A társasági élet könnyed formái is fontos kapcsolatokat építenek.' },
      { deg: 13, symbol: 'Öreg hajóskapitány hintázik a háza tornácán', text: 'A megélt kalandok után a nyugalom és a visszatekintés ideje jön el.' },
      { deg: 14, symbol: 'Egy lélek suttogva keresi a megtestesülés lehetőségét', text: 'A vágy, hogy valami elgondolt végre formát öltsön a világban.' },
      { deg: 15, symbol: 'Ünnepi menet halad a zsúfolt utcán', text: 'A közösen felmutatott jelkép sokakat egyesít egyetlen élményben.' },
      { deg: 16, symbol: 'Ragyogó napsütés közvetlenül a vihar után', text: 'A megrázkódtatás után a tisztaság és a megkönnyebbülés fénye jön.' },
      { deg: 17, symbol: 'Kórus egyházi öltözet nélkül', text: 'A közös élmény lényege nem a külsőségekben, hanem az együtthangzásban van.' },
      { deg: 18, symbol: 'Vegyész kísérletet mutat be a diákjainak', text: 'A tudás átadásának leghatékonyabb módja a szemléletes bemutatás.' },
      { deg: 19, symbol: 'Társaság mulat egy lakóhajón', text: 'A könnyed együttlét oldottá és emberivé teszi a kapcsolatokat.' },
      { deg: 20, symbol: 'Indiánok napszertartást végeznek', text: 'A közös rítus összekapcsolja a csoportot az éltető forrással.' },
      { deg: 21, symbol: 'Kapatos tyúkok szárnycsapkodva próbálnak repülni', text: 'A mesterségesen felfokozott lelkesedés nem pótolja a valódi képességet.' },
      { deg: 22, symbol: 'Postagalamb teljesíti a küldetését', text: 'A megbízhatóság és a hazatalálás ösztöne fontosabb a látványosságnál.' },
      { deg: 23, symbol: 'Cirkuszi műlovarnő mutatja be veszélyes tudását', text: 'A hosszú gyakorlás teszi lehetővé, hogy a kockázat mégis kecsesnek látsszon.' },
      { deg: 24, symbol: 'A belső célra összpontosító ember elhanyagolja a testét', text: 'A szellemi összpontosítás könnyen az élet többi részének kárára megy.' },
      { deg: 25, symbol: 'Nagy teve kel át a végtelen sivatagon', text: 'A tartalékok és a kitartás visznek át a hosszú, terméketlen szakaszokon.' },
      { deg: 26, symbol: 'A heves vihar után szivárvány', text: 'A megpróbáltatás után az ígéret és a kiengesztelődés jele mutatkozik.' },
      { deg: 27, symbol: 'Pirkadat dereng a keleti égen', text: 'Az új korszak első, még halovány, de biztos jelei.' },
      { deg: 28, symbol: 'Sok kismadár egy nagy fa ágán', text: 'A közös menedék körül élénk, sokszínű élet alakul ki.' },
      { deg: 29, symbol: 'Sellő bukkan fel a hullámokból, hogy emberré szülessen', text: 'Az érzelmi mélységből kilépő új tudat vállalja a szilárd formát.' },
      { deg: 30, symbol: 'Felbontatlan levél', text: 'Kimondatlan üzenet vár arra, hogy valaki végre szembenézzen vele.' }
    ],

    /* ---------------- SZŰZ ---------------- */
    szuz: [
      { deg: 1, symbol: 'Egy arckép a modell legjobb vonásait emeli ki', text: 'Az eszményítés megmutatja, mivé válhatna az ember a legjobb formájában.' },
      { deg: 2, symbol: 'Nagy fehér kereszt áll magányosan a domb tetején', text: 'Az áldozat és az elköteleződés jele messziről irányt mutat.' },
      { deg: 3, symbol: 'Két őrangyal nyújt oltalmat', text: 'A láthatatlan segítség éppen a legkiszolgáltatottabb pillanatban érkezik.' },
      { deg: 4, symbol: 'Különböző bőrszínű gyerekek boldogan játszanak együtt', text: 'A természetes együttlét megelőzi a felnőttek megkülönböztetéseit.' },
      { deg: 5, symbol: 'Egy ember észreveszi a természet szellemi erőit', text: 'A finomabb valóságra való ráérzés kitágítja a világképet.' },
      { deg: 6, symbol: 'Körhinta', text: 'Az ismétlődő körforgás szórakoztat, de nem visz előre.' },
      { deg: 7, symbol: 'Hárem', text: 'A birtoklás és a függés hálója korlátozza mindkét oldalt.' },
      { deg: 8, symbol: 'Egy lány első táncóráján', text: 'A tanulás alázata a mozdulat legelemibb formáinál kezdődik.' },
      { deg: 9, symbol: 'Egy festő jövőbe mutató képet alkot', text: 'A saját látásmód akkor is érvényes, ha még senki nem érti.' },
      { deg: 10, symbol: 'Két fej néz ki az árnyékon túlra', text: 'A kettős látásmód segít túllátni a pillanatnyi homályon.' },
      { deg: 11, symbol: 'Fiú, akit anyja vágyai formálnak', text: 'A rá vetített elvárások könnyen elnyomják a saját irányt.' },
      { deg: 12, symbol: 'Menyasszony, akinek lerántják a fátylát', text: 'A leleplezés fájdalmas, de az igazi arc megmutatásához vezet.' },
      { deg: 13, symbol: 'Erős kezű államférfi úrrá lesz a politikai hisztérián', text: 'A higgadt vezetés lecsillapítja a tömeg indulatait.' },
      { deg: 14, symbol: 'Családfa', text: 'Az örökség ismerete megmutatja, honnan jönnek a saját mintáink.' },
      { deg: 15, symbol: 'Finom csipkés zsebkendő', text: 'A törékeny szépség és az aprólékos kidolgozás önmagában is érték.' },
      { deg: 16, symbol: 'Orangután', text: 'A kulturált felszín alatt is ott él a nyers, ösztönös természet.' },
      { deg: 17, symbol: 'Vulkánkitörés', text: 'A hosszan elfojtott feszültség hirtelen és pusztító erővel tör fel.' },
      { deg: 18, symbol: 'Két lány szellemidéző táblával játszik', text: 'A tudattalannal való könnyelmű játék kiszámíthatatlan hatásokat kelt.' },
      { deg: 19, symbol: 'Úszóverseny', text: 'A közös elemben mérik össze az erőt: mindenki ugyanazzal az árral küzd.' },
      { deg: 20, symbol: 'Autókaraván tart a nyugati partra', text: 'A közös cél felé tartó vándorlás új életre nyit lehetőséget.' },
      { deg: 21, symbol: 'Lánykosárlabda-csapat', text: 'A csapatmunkában az egyéni ügyesség csak összehangolva ér valamit.' },
      { deg: 22, symbol: 'Drágakövekkel díszített királyi címer', text: 'A rang és az örökség jelképe kötelezettséget is ró viselőjére.' },
      { deg: 23, symbol: 'Idomár bátran lép a cirkuszi porondra', text: 'A vad erőkkel csak nyugalom és tekintély bánik el.' },
      { deg: 24, symbol: 'Mária és a kis fehér báránya', text: 'Az ártatlan ragaszkodás egyszerű és megbonthatatlan kapcsolat.' },
      { deg: 25, symbol: 'Félárbocra eresztett zászló a középület előtt', text: 'A közösség együtt gyászol, és így ismeri el a veszteséget.' },
      { deg: 26, symbol: 'Ministráns fiú füstölővel az oltárnál', text: 'A szolgálat alázatos betöltése beavat a nagyobb rendbe.' },
      { deg: 27, symbol: 'Előkelő idős hölgyek délutáni teán', text: 'A megőrzött formák nyugalmat adnak, de el is zárhatnak az élettől.' },
      { deg: 28, symbol: 'Kopasz férfi, aki magához ragadta a hatalmat', text: 'A határozott, mindent felvállaló akarat szerzi meg a vezetést.' },
      { deg: 29, symbol: 'Egy férfi ősi tekercsből titkos tudást merít', text: 'Az elmélyült kutatás olyan ismerethez juttat, amit nem osztanak meg mindenkivel.' },
      { deg: 30, symbol: 'A feladatára összpontosító ember süket minden csábításra', text: 'A teljes összeszedettség pajzsot ad a figyelemelterelés ellen.' }
    ],

    /* ---------------- MÉRLEG ---------------- */
    merleg: [
      { deg: 1, symbol: 'Tűvel átszúrt, tökéletesre preparált pillangó', text: 'A szépség megőrzése érdekében feláldozott elevenség kettős tanulsága.' },
      { deg: 2, symbol: 'A hatodik faj fénye átalakul a hetedikké', text: 'Az emberi tudat egy magasabb fejlődési fokra lép át.' },
      { deg: 3, symbol: 'Az új nap hajnala mindent megváltozva mutat', text: 'Egyetlen éjszaka alatt is átrendeződhet, ahogyan a világot látjuk.' },
      { deg: 4, symbol: 'Fiatalok ülnek tábortűz körül szellemi közösségben', text: 'A közös eszmény erősebb köteléket teremt a puszta ismeretségnél.' },
      { deg: 5, symbol: 'Egy tanító az új világ belső tudását adja át tanítványainak', text: 'Az igazi tanítás a láthatón túli összefüggéseket világítja meg.' },
      { deg: 6, symbol: 'Egy ember eszményei bőségesen kikristályosodnak', text: 'A sokáig érlelt elképzelés végre világos, megfogható alakot ölt.' },
      { deg: 7, symbol: 'Egy nő eteti a tyúkokat, és védi őket a héjától', text: 'A gondoskodás mindig együtt jár az oltalmazás feladatával.' },
      { deg: 8, symbol: 'Lobogó tűz egy elhagyott házban', text: 'Az érték akkor is megmarad, ha éppen senki sem használja.' },
      { deg: 9, symbol: 'Három régi mester képe a képtár külön termében', text: 'A kiválóság kiemelt helyet és nyugodt figyelmet érdemel.' },
      { deg: 10, symbol: 'Kenu ér partot veszélyes vizeken át', text: 'Az ügyesség és a hidegvér átvezet a legkockázatosabb szakaszon is.' },
      { deg: 11, symbol: 'Professzor a szemüvege fölött néz a diákjaira', text: 'A megszerzett tekintély kritikus, mérlegelő tekintettel jár együtt.' },
      { deg: 12, symbol: 'Bányászok jönnek fel a mélyből a napfényre', text: 'A sötétben végzett munka után jár a felszínre kerülés öröme.' },
      { deg: 13, symbol: 'Gyerekek szappanbuborékot fújnak', text: 'A múlékony szépség létrehozása is teljes értékű alkotás.' },
      { deg: 14, symbol: 'A déli hőségben egy férfi szunyókál', text: 'A megújuláshoz szükséges a szándékos megállás és a tétlenség is.' },
      { deg: 15, symbol: 'Körkörös ösvények', text: 'Az ismétlődő minták addig térnek vissza, amíg fel nem ismerjük őket.' },
      { deg: 16, symbol: 'A vihar után újjá kell építeni a kikötőt', text: 'A megrázkódtatás után a helyreállítás türelmes munkája következik.' },
      { deg: 17, symbol: 'Nyugalmazott kapitány nézi az érkező és induló hajókat', text: 'A tapasztalt szemlélő már nem vesz részt mindenben, de mindent ért.' },
      { deg: 18, symbol: 'Két férfit letartóztatnak', text: 'A közösség szabályai határt szabnak az egyéni önkénynek.' },
      { deg: 19, symbol: 'Rejtőzködő rablóbanda', text: 'A társadalom peremén szerveződő erők titokban készülnek a maguk céljára.' },
      { deg: 20, symbol: 'Rabbi végzi a szolgálatát', text: 'A hagyomány hűséges gyakorlása fogja össze és tartja meg a közösséget.' },
      { deg: 21, symbol: 'Tömeg a tengerparton', text: 'Sokan keresik egyszerre ugyanazt a felüdülést és nyitottságot.' },
      { deg: 22, symbol: 'Gyerek itatja a madarakat a szökőkútnál', text: 'A spontán jóság a legkisebb gesztusban is megnyilvánul.' },
      { deg: 23, symbol: 'A kakas lelkes hangon köszönti a felkelő napot', text: 'A magabiztos hirdetés jelenti be az új nap kezdetét.' },
      { deg: 24, symbol: 'Harmadik szárny nő a pillangó bal oldalán', text: 'A rendhagyó képesség egyszerre előny és felborult egyensúly.' },
      { deg: 25, symbol: 'Egy hulló őszi levél láttán a zarándok megérti az élet és halál titkát', text: 'A legegyszerűbb természeti jel is teljes felismerést hozhat.' },
      { deg: 26, symbol: 'Sas és nagy fehér galamb átalakulnak egymásba', text: 'Az erő és a béke ugyanannak a lelki erőnek a két arca.' },
      { deg: 27, symbol: 'Repülőgép száll magasan a tiszta égen', text: 'A távlat és a fölülemelkedés tisztán mutatja meg az összefüggéseket.' },
      { deg: 28, symbol: 'Mély csüggedésben lévő emberhez észrevétlen segítők érkeznek', text: 'A reménytelennek látszó helyzetben is működik láthatatlan támogatás.' },
      { deg: 29, symbol: 'Az emberiség kitartó törekvése a nemzedékeken átadható tudásra', text: 'Az egyéni felismerés akkor teljesedik ki, ha továbbadható formát kap.' },
      { deg: 30, symbol: 'A bölcselő fején a tudás három dudora', text: 'A sokféle tudás összegyűlik, és jellemmé formálódik.' }
    ],

    /* ---------------- SKORPIÓ ---------------- */
    skorpio: [
      { deg: 1, symbol: 'Turistákkal teli városnéző busz', text: 'A közös felfedezés kényelmes, de felszínes formája.' },
      { deg: 2, symbol: 'Eltört üveg, kiömlött parfüm', text: 'A veszteség pillanatában szabadul fel a legerősebben az illat és a hatás.' },
      { deg: 3, symbol: 'A szomszédok együtt húzzák fel a házat a faluban', text: 'A kölcsönös segítség pótolhatatlan tőkéje a közösségnek.' },
      { deg: 4, symbol: 'Fiatal gyertyát visz egy szertartáson', text: 'Az odaadó szolgálat őrzi és továbbadja a fényt.' },
      { deg: 5, symbol: 'Sziklás part állja a tenger ostromát', text: 'A szilárd jellem kitart a kitartó érzelmi nyomás alatt is.' },
      { deg: 6, symbol: 'Az aranyláz elszakítja az embereket a szülőföldjüktől', text: 'A gyors meggazdagodás vágya gyökértelenné teheti az embert.' },
      { deg: 7, symbol: 'Mélytengeri búvárok', text: 'A tudattalan legmélyebb rétegeinek feltárása felszereltséget és bátorságot kíván.' },
      { deg: 8, symbol: 'A hold fénye csillan a tavon', text: 'Az érzelmi felszín visszaveri és felnagyítja a rejtett fényt.' },
      { deg: 9, symbol: 'Fogorvos munka közben', text: 'A fájdalmas beavatkozás gyógyulást hoz, ha szakértő kézben van.' },
      { deg: 10, symbol: 'Baráti vacsora hozza össze a régi társakat', text: 'A közös múlt megerősítése új erőt ad a jelenhez.' },
      { deg: 11, symbol: 'Fuldoklót mentenek ki', text: 'A végveszélyben nyújtott segítség új életesélyt teremt.' },
      { deg: 12, symbol: 'Hivatalos követségi bál', text: 'A szigorú formák teszik lehetővé a különböző világok találkozását.' },
      { deg: 13, symbol: 'Feltaláló kísérletezik a laboratóriumában', text: 'A kitartó próbálkozás nyitja meg az ismeretlen felé az utat.' },
      { deg: 14, symbol: 'Telefonszerelők új vezetékeket kötnek be', text: 'Az összeköttetés megteremtése észrevétlen, de nélkülözhetetlen munka.' },
      { deg: 15, symbol: 'Gyerekek öt homokdomb körül játszanak', text: 'Az érzékek öt kapuja a tapasztalás kiindulópontja.' },
      { deg: 16, symbol: 'Egy lány arcán mosoly fut át', text: 'Egyetlen őszinte rezdülés is képes oldani a feszültséget.' },
      { deg: 17, symbol: 'Egy nő saját lelkétől megtermékenyülve hozza világra gyermekét', text: 'Az alkotás forrása belülről fakad, önmagából újul meg.' },
      { deg: 18, symbol: 'Ösvény őszi színekben pompázó erdőben', text: 'A búcsúzás időszakának is megvan a maga gazdag szépsége.' },
      { deg: 19, symbol: 'Papagáj elismétli a kihallgatott beszélgetést', text: 'Az átvett szavak visszhangzása nem azonos a valódi megértéssel.' },
      { deg: 20, symbol: 'Egy nő széthúzza a szent utat elzáró sötét függönyöket', text: 'A bátor szembenézés nyitja meg a beavatás útját.' },
      { deg: 21, symbol: 'A lelkiismeretére hallgató katona megtagadja a parancsot', text: 'Van, amikor a belső törvény felülírja a külső tekintélyt.' },
      { deg: 22, symbol: 'Vadászok vadkacsára lőnek', text: 'A vadászösztön célra tör, de a szabad élet elpusztításának árán.' },
      { deg: 23, symbol: 'Nyúl természetszellemmé változik', text: 'A félénk ösztönlény átalakulhat finomabb, szellemibb minőséggé.' },
      { deg: 24, symbol: 'A hegyi beszéd hallgatói hazafelé indulnak', text: 'A nagy felismerést a hétköznapokba is haza kell vinni.' },
      { deg: 25, symbol: 'Röntgenfelvétel', text: 'A felszín alá látás könyörtelenül feltárja a rejtett szerkezetet.' },
      { deg: 26, symbol: 'Indiánok tábort vernek az új területen', text: 'Az új helyen az első dolog a saját rend és fészek kialakítása.' },
      { deg: 27, symbol: 'Katonazenekar vonul harsogva a városban', text: 'A hangos közös fellépés erőt és összetartozást demonstrál.' },
      { deg: 28, symbol: 'A tündérkirály közeledik a birodalmához', text: 'A finomabb világ törvényei is uralkodót és rendet kívánnak.' },
      { deg: 29, symbol: 'Indián asszony a gyermekei életéért könyörög a főnöknek', text: 'A szeretet erejéből fakadó közbenjárás megfordíthatja a döntést.' },
      { deg: 30, symbol: 'Jelmezes gyerekek csínyeket követnek el', text: 'A halloweeni álarc mögött a sötét oldal játékosan élheti ki magát.' }
    ],

    /* ---------------- NYILAS ---------------- */
    nyilas: [
      { deg: 1, symbol: 'Veteránok tábortüze', text: 'A közös múlt felidézése összekapcsolja azokat, akik ugyanazt élték át.' },
      { deg: 2, symbol: 'Fehér tarajos hullámok mutatják a szél erejét', text: 'A láthatatlan erő a hatásában válik láthatóvá.' },
      { deg: 3, symbol: 'Két férfi sakkozik', text: 'A szabályokba foglalt küzdelem az értelmet és az előrelátást csiszolja.' },
      { deg: 4, symbol: 'Kisgyermek járni tanul', text: 'Minden önállóság az esetlen, ismételt próbálkozásokkal kezdődik.' },
      { deg: 5, symbol: 'Öreg bagoly a fa tetején', text: 'A csendes megfigyelés és a türelem a bölcsesség alapja.' },
      { deg: 6, symbol: 'Krikettmérkőzés', text: 'A közösen elfogadott szabályok teszik nemessé a versengést.' },
      { deg: 7, symbol: 'Ámor kopogtat az emberi szív ajtaján', text: 'A szerelem hívása megérkezik, de be is kell engedni.' },
      { deg: 8, symbol: 'Sziklák és a bennük képződő kristályok', text: 'A rideg anyag mélyén is szabályos, értékes szerkezet formálódik.' },
      { deg: 9, symbol: 'Anya lépésről lépésre vezeti fel a gyermekét a lépcsőn', text: 'A fejlődéshez türelmes kísérés és biztos kéz kell.' },
      { deg: 10, symbol: 'Színpadon megjelenített aranyhajú szerencseistennő', text: 'A lehetőség megragadható, de fel kell ismerni, amikor felkínálja magát.' },
      { deg: 11, symbol: 'A testi megvilágosodás lámpása a bal halántékon', text: 'A tudás gyakorlati, hétköznapi formája is fényt gyújt.' },
      { deg: 12, symbol: 'Zászló sassá változik, amely felrikolt', text: 'A jelkép megelevenedik, és önálló erővé válik.' },
      { deg: 13, symbol: 'Egy özvegy múltja napvilágra kerül', text: 'A titkolt előzmények előbb-utóbb a felszínre bukkannak.' },
      { deg: 14, symbol: 'A piramisok és a szfinx', text: 'A régmúlt hatalmas alkotásai máig megfejtetlen kérdéseket őriznek.' },
      { deg: 15, symbol: 'A mormota az árnyékát keresi', text: 'Az apró jelekből próbálunk következtetni a következő időszakra.' },
      { deg: 16, symbol: 'Sirályok repkednek a hajó körül élelemre várva', text: 'A készen kapott ellátás kényelmes, de függőséget teremt.' },
      { deg: 17, symbol: 'Húsvéti hajnali istentisztelet', text: 'A közös megújulás élménye sokakat vonz ugyanabba a pillanatba.' },
      { deg: 18, symbol: 'Apró gyerekek napvédő főkötőben', text: 'Az ártatlanságot óvni kell a túl erős hatásoktól.' },
      { deg: 19, symbol: 'Pelikánok új élőhelyet keresnek', text: 'Ha a régi feltételek megszűnnek, együtt kell új helyet találni.' },
      { deg: 20, symbol: 'Munkások jégtömböt vágnak', text: 'A megdermedt anyagot darabokra bontva lehet hasznossá tenni.' },
      { deg: 21, symbol: 'Gyerek és kutya kölcsönkapott szemüvegben', text: 'Mások szemüvegén át nézni a világot mulatságos, de nem célravezető.' },
      { deg: 22, symbol: 'Kínai mosoda', text: 'A szerény, alázatos munka is megbecsült helyet szerezhet az idegenben.' },
      { deg: 23, symbol: 'Bevándorlók lépnek be az új országba', text: 'Az új kezdet reménye és bizonytalansága egyszerre van jelen.' },
      { deg: 24, symbol: 'Kék madár áll a ház ajtajában', text: 'A boldogság magától kopogtat be, ha nyitva marad az ajtó.' },
      { deg: 25, symbol: 'Pufók fiú hintalovon', text: 'A képzeletbeli utazás előkészíti a valódit, de nem helyettesíti.' },
      { deg: 26, symbol: 'Zászlóvivő a csatában', text: 'Az eszme felmutatása bátorságot igényel, és sokakat magával ragad.' },
      { deg: 27, symbol: 'Szobrász a műve fölött', text: 'A formátlan anyagból csak céltudatos munkával lesz alak.' },
      { deg: 28, symbol: 'Régi híd a szép patak fölött ma is használatban van', text: 'Ami jól van megépítve, azt a nemzedékek tovább használják.' },
      { deg: 29, symbol: 'Kövér fiú füvet nyír', text: 'A mindennapi kötelesség elvégzése formába hozza az embert.' },
      { deg: 30, symbol: 'A pápa megáldja a híveket', text: 'A legmagasabb szellemi tekintély összefogja és felemeli a közösséget.' }
    ],

    /* ---------------- BAK ---------------- */
    bak: [
      { deg: 1, symbol: 'Indián főnök hatalmat kér az összegyűlt törzstől', text: 'A vezetés legitimitása mindig a közösség beleegyezéséből fakad.' },
      { deg: 2, symbol: 'Három ólomüveg ablak a gótikus templomban, az egyik háborús sérüléssel', text: 'A hagyomány sérülten is megőrzi a fényét és a jelentését.' },
      { deg: 3, symbol: 'Az emberi lélek nyitottan fogadja a növekedést és a megértést', text: 'A tanulékonyság a legfontosabb belső feltétele a fejlődésnek.' },
      { deg: 4, symbol: 'Emberek nagy kenuba szállnak a vízi útra', text: 'A közös vállalkozás elindulásához mindenkinek be kell szállnia.' },
      { deg: 5, symbol: 'Indiánok eveznek, majd harci táncot járnak', text: 'A közös erőfeszítést rítus és lelkesedés hangolja össze.' },
      { deg: 6, symbol: 'Tíz farönk hever a sötét erdőbe vezető boltív alatt', text: 'A teljes ciklus lezárul, mielőtt az ember az ismeretlenbe lép.' },
      { deg: 7, symbol: 'Fátyolos próféta szól isteni hatalomtól megszállva', text: 'A magasabb üzenet mindig közvetítőn keresztül, elfátyolozva érkezik.' },
      { deg: 8, symbol: 'Madarak vidáman énekelnek a házban', text: 'Az otthon akkor él, ha természetes öröm hangja tölti be.' },
      { deg: 9, symbol: 'Hárfát vivő angyal', text: 'A harmónia és a szépség üzenete felülről érkezik.' },
      { deg: 10, symbol: 'Albatrosz eszik a tengerész kezéből', text: 'A vad természet és az ember között is kialakulhat bizalom.' },
      { deg: 11, symbol: 'Nagy fácáncsapat', text: 'A gondozott bőség együtt jár a kiszolgáltatottsággal.' },
      { deg: 12, symbol: 'Természetkutató kevéssé ismert életjelenségekről beszél', text: 'A szakértő tudás olyan összefüggéseket tár fel, amelyeket mások nem látnak.' },
      { deg: 13, symbol: 'Tűzimádó a lét végső valóságain elmélkedik', text: 'Az elmélyült szemlélődés a legalapvetőbb kérdésekhez vezet.' },
      { deg: 14, symbol: 'Ősi gránit dombormű tanúskodik egy elfeledett kultúráról', text: 'A tartósan megformált tudás túléli a létrehozóit.' },
      { deg: 15, symbol: 'A kórház gyermekosztálya tele van játékokkal', text: 'A szenvedés enyhítéséhez a gyakorlati ellátáson túl öröm is kell.' },
      { deg: 16, symbol: 'Iskolaudvar tele tornaruhás fiatalokkal', text: 'A fegyelmezett közös gyakorlás formálja a jellemet és a testet.' },
      { deg: 17, symbol: 'Lány titokban fürdik a szabadban', text: 'A természetes önvállalás a szabályok szorításában is utat keres.' },
      { deg: 18, symbol: 'Új hadihajó árbocán a lobogó', text: 'A hatalom megújított eszközei mögött ott áll a régi tekintély.' },
      { deg: 19, symbol: 'Ötéves gyermek hatalmas bevásárlószatyrot cipel', text: 'Túl korán vállalt felelősség szétfeszítheti a gyermeki kereteket.' },
      { deg: 20, symbol: 'Rejtett kórus énekel a szertartás alatt', text: 'A háttérben maradó közreműködés adja a legmélyebb hatást.' },
      { deg: 21, symbol: 'Váltófutás', text: 'A siker attól függ, hogy pontosan adjuk-e tovább, amit ránk bíztak.' },
      { deg: 22, symbol: 'Egy tábornok méltósággal fogadja a vereséget', text: 'Az igazi tartás a kudarc pillanatában mutatkozik meg.' },
      { deg: 23, symbol: 'Két kitüntetés a háborús bátorságért', text: 'Az elismerés emlékeztet, hogy a helytállásnak ára és értéke van.' },
      { deg: 24, symbol: 'Egy nő belép a kolostorba', text: 'A világ szűkítése a belső élet elmélyítésének eszköze lehet.' },
      { deg: 25, symbol: 'Szőnyegkereskedő értékes darabokkal teli boltjában', text: 'A felhalmozott értékek átadása és megbecsülése is szakma.' },
      { deg: 26, symbol: 'Természetszellem táncol a vízesés páráján', text: 'A szüntelen mozgásból váratlanul könnyed szépség születik.' },
      { deg: 27, symbol: 'Zarándoklat a hegyre', text: 'A cél felé vezető nehéz út maga a beavatás.' },
      { deg: 28, symbol: 'Nagy madárház', text: 'A sokféleség együtt tartása gondos rendet és teret kíván.' },
      { deg: 29, symbol: 'Egy nő teafűből jósol', text: 'A hétköznapi apróságokban is jelentést keresünk, ha bizonytalanok vagyunk.' },
      { deg: 30, symbol: 'Egy nagyvállalat vezetői zárt tanácskozáson', text: 'A döntések a nyilvánosság elől elzárt körben születnek meg.' }
    ],

    /* ---------------- VÍZÖNTŐ ---------------- */
    vizonto: [
      { deg: 1, symbol: 'Régi kaliforniai misszió vályogépülete', text: 'A múltból örökölt szilárd alapokra épül minden újítás.' },
      { deg: 2, symbol: 'Váratlan égzengés', text: 'A hirtelen felismerés kizökkent a megszokott menetből.' },
      { deg: 3, symbol: 'Szökevény a haditengerészettől', text: 'Az egyéni lelkiismeret szembekerülhet a szigorú kötelékkel.' },
      { deg: 4, symbol: 'Hindu gyógyító misztikus erőtől ragyogva', text: 'A gyógyítás forrása gyakran a személyen túli erőben van.' },
      { deg: 5, symbol: 'Az ősök tanácsa támogatja a fiatal vezető törekvéseit', text: 'A múlt tapasztalata láthatatlanul segíti az új kezdeményezést.' },
      { deg: 6, symbol: 'Álarcos alak végzi a rítust a misztériumjátékban', text: 'A szerep vállalása által mondható ki az, ami személyesen nem.' },
      { deg: 7, symbol: 'Tojáshéjból született gyermek', text: 'Az új tudat saját, önálló burokból lép a világba.' },
      { deg: 8, symbol: 'Gyönyörűen felöltöztetett viaszbabák a kirakatban', text: 'A tökéletes külső élettelen marad, ha nincs mögötte valódi tartalom.' },
      { deg: 9, symbol: 'A zászló sassá változik', text: 'A közös eszme élő, szárnyaló erővé alakul.' },
      { deg: 10, symbol: 'Egy férfi felismeri, hogy ő maga nem azonos a róla alkotott eszményképpel', text: 'A népszerűség múlandó, a személyes valóság marad.' },
      { deg: 11, symbol: 'A csendes órában új sugallat éri az embert', text: 'A megvilágosodás akkor jön, amikor abbahagyjuk a keresést.' },
      { deg: 12, symbol: 'Emberek egy fölfelé vezető, hatalmas lépcsőn', text: 'A fejlődés közös, de mindenki a maga fokán áll.' },
      { deg: 13, symbol: 'Barométer', text: 'Az érzékeny mérés előre jelzi a hangulat és a körülmények változását.' },
      { deg: 14, symbol: 'Vonat fut be az alagútba', text: 'Az átmenet sötét szakasza is a kitűzött cél felé visz.' },
      { deg: 15, symbol: 'Két szerelmesmadár ül a kerítésen és énekel', text: 'A megtalált összhang önmagában is örömet sugároz.' },
      { deg: 16, symbol: 'Nagy üzletember az íróasztalánál', text: 'A szervezőerő a háttérből mozgat egész rendszereket.' },
      { deg: 17, symbol: 'Házőrző kutya vigyáz a gazdájára és a vagyonára', text: 'A hűséges éberség nélkül a megszerzett érték védtelen.' },
      { deg: 18, symbol: 'Az álarcosbálon lelepleznek egy férfit', text: 'A megjátszott szerep egyszer csak lehullik a viselőjéről.' },
      { deg: 19, symbol: 'Eloltott erdőtűz', text: 'Az összefogás megfékezi a pusztító, elszabadult erőt.' },
      { deg: 20, symbol: 'Nagy fehér galamb hozza az üzenetet', text: 'A várt jó hír a béke és a megnyugvás jeleként érkezik.' },
      { deg: 21, symbol: 'Csalódott nő bátran néz szembe az ürességgel', text: 'A kiábrándulás után a méltósággal viselt üresség új tartást ad.' },
      { deg: 22, symbol: 'Szőnyeg a padlón, hogy a gyerekek játszhassanak rajta', text: 'A biztonságos, kijelölt tér szabaddá teszi a kísérletezést.' },
      { deg: 23, symbol: 'Nagy medve ül, és mancsaival integet', text: 'A nyers erő játékos, barátságos formában is megmutatkozhat.' },
      { deg: 24, symbol: 'Egy férfi hátat fordít a szenvedélyeinek, és a tapasztalatából tanít', text: 'A legyőzött indulatok tapasztalata a legjobb tanítás forrása.' },
      { deg: 25, symbol: 'Pillangó, amelynek jobb szárnya tökéletesebb', text: 'A tudatos oldal gyorsabban fejlődik, mint az ösztönös.' },
      { deg: 26, symbol: 'Szerelő az akkumulátort méri', text: 'Az erőforrások rendszeres ellenőrzése előzi meg a megállást.' },
      { deg: 27, symbol: 'Ősi cserépedényben ibolyák', text: 'A régi forma új, eleven tartalmat képes hordozni.' },
      { deg: 28, symbol: 'Kivágott és felfűrészelt fa a téli tüzelőnek', text: 'Az előrelátó gondoskodás átsegít a szűkös időszakon.' },
      { deg: 29, symbol: 'Pillangó bújik elő a bábból', text: 'A hosszú belső átalakulás után megszületik az új alak.' },
      { deg: 30, symbol: 'Holdfényes mezők virágoznak ott, ahol egykor Babilon állt', text: 'A birodalmak elmúlnak, az élet mégis újra kivirágzik a helyükön.' }
    ],

    /* ---------------- HALAK ---------------- */
    halak: [
      { deg: 1, symbol: 'Zsúfolt piactér', text: 'Az élet sokfélesége egyetlen zsibongó helyen sűrűsödik össze.' },
      { deg: 2, symbol: 'Mókus rejtőzik a vadászok elől', text: 'Az óvatosság és a visszahúzódás a túlélés eszköze.' },
      { deg: 3, symbol: 'Kövült erdő', text: 'Ami egykor élt, most a múlt tanújaként kővé dermedt.' },
      { deg: 4, symbol: 'Sűrű forgalom a keskeny földszoroson', text: 'A szűk átjárón mindenkinek át kell férnie, ez feszültséget szül.' },
      { deg: 5, symbol: 'Templomi jótékonysági vásár', text: 'A közösség hétköznapi eszközökkel gyakorolja a szolidaritást.' },
      { deg: 6, symbol: 'Tisztek díszszemlén', text: 'A formális rend és a fegyelem látványos megmutatása.' },
      { deg: 7, symbol: 'Fénysugárban nagy kereszt fekszik a tengeri párába vesző sziklákon', text: 'Az áldozat jelentése a homályban is felragyog egy pillanatra.' },
      { deg: 8, symbol: 'Egy lány kürtöt fúj', text: 'A hívó jel elindítja azt, amire mindenki készült.' },
      { deg: 9, symbol: 'Zsoké sarkantyúzza a lovát, hogy lehagyja a többieket', text: 'A versenyhelyzet a végsőkig fokozza az erőkifejtést.' },
      { deg: 10, symbol: 'Repülő halad a látást elzáró felhőkön át', text: 'A műszerekre és a belső iránytűre kell hagyatkozni, ha nem látszik az út.' },
      { deg: 11, symbol: 'Emberek keskeny ösvényen keresik a megvilágosodást', text: 'A szellemi út szűk, és csak egyesével járható.' },
      { deg: 12, symbol: 'A beavatottak vizsgája egy titkos testvériség szentélyében', text: 'A tudás továbbadását próbatétel és felelősség előzi meg.' },
      { deg: 13, symbol: 'Sok csatát megjárt kard a múzeumban', text: 'Ami egykor eszköz volt, most emlékké és tanulsággá vált.' },
      { deg: 14, symbol: 'Hölgy rókaprémben', text: 'A megszerzett külső ragyogás mögött ravaszság és számítás is meghúzódhat.' },
      { deg: 15, symbol: 'Tiszt gyakorlatra vezényli az embereit', text: 'A készenlétet a béke idején kell begyakorolni.' },
      { deg: 16, symbol: 'Csendes pillanatban az alkotó megéli az ihlet áramlását', text: 'Az igazi alkotás forrása a belső csendben nyílik meg.' },
      { deg: 17, symbol: 'Húsvéti korzó', text: 'A megújulást a közösség együtt, látható formában ünnepli.' },
      { deg: 18, symbol: 'Hatalmas sátorban látványos ébredési gyűlést tart egy prédikátor', text: 'A tömeges lelkesedés hatásos, de könnyen külsőségessé válik.' },
      { deg: 19, symbol: 'Mester tanítja a tanítványát', text: 'A személyes átadás a tudás legmélyebb formája.' },
      { deg: 20, symbol: 'Megterített asztal az esti étkezéshez', text: 'A gondos előkészítés teremti meg a közös együttlét kereteit.' },
      { deg: 21, symbol: 'Kis fehér bárány, egy gyermek és egy kínai szolga', text: 'Az ártatlanság, a bizalom és a szolgálat együtt alkot védett világot.' },
      { deg: 22, symbol: 'Próféta hozza le az új törvényt a hegyről', text: 'A magasban kapott felismerés törvénnyé formálva válik közkinccsé.' },
      { deg: 23, symbol: 'Médium szeánszot tart', text: 'A láthatatlannal való érintkezés vonzó, de könnyen félrevezető.' },
      { deg: 24, symbol: 'Lakott sziget', text: 'Az elkülönült világ is képes önálló, teljes életet fenntartani.' },
      { deg: 25, symbol: 'A papság megtisztítása', text: 'A megromlott intézményt belülről kell megújítani.' },
      { deg: 26, symbol: 'Az újhold jelzi, hogy ideje belefogni a terveinkbe', text: 'A megfelelő pillanat felismerése a kezdés fele.' },
      { deg: 27, symbol: 'Telihold világítja be a tiszta őszi eget', text: 'A beérés pillanatában minden világosan és teljesen látszik.' },
      { deg: 28, symbol: 'Termékeny kert a telihold fényében', text: 'A gondozott bőség a nyugalom óráiban mutatja meg magát.' },
      { deg: 29, symbol: 'A fény prizmán áthaladva színekre bomlik', text: 'Az egységes forrás a sokféleségben mutatja meg a gazdagságát.' },
      { deg: 30, symbol: 'Egy fiú arcot formázó sziklát választ eszményképül, és felnőttként hasonlítani kezd rá', text: 'Amit hosszan csodálunk, azzá is válunk lassanként.' }
    ]
  },

  /* ------------------------------------------------------------------ *
   *  2. EGYIPTOMI HATÁROK (terms / bounds) — a ptolemaioszi tábla
   * ------------------------------------------------------------------ */

  termsIntro: 'A határok (görögül horia, latinul termini, magyarul határ vagy terminus) minden állatövi jegyet öt egyenlőtlen szakaszra osztanak, és mindegyik szakasznak külön bolygóurat adnak — a Nap és a Hold ebből a rendszerből kimarad, csak az öt klasszikus bolygó szerepel benne. A hellenisztikus asztrológia ezt tekintette a legfinomabb lényegi méltóságnak: nem elég tudni, hogy egy bolygó melyik jegyben áll, azt is meg kell nézni, kinek a határán belül. Saját határán a bolygó megerősödik és a maga természete szerint működik, idegen határon viszont a határ urának színezetét veszi fel, ezért ugyanaz a bolygóállás két szomszédos fokon egészen mást jelenthet.',

  termsNote: 'Az alábbi az úgynevezett egyiptomi tábla, amelyet Vettius Valens és Dorotheus is használt, és amelyet Ptolemaiosz a Tetrabiblosz I. könyvében közöl. A from érték benne van a szakaszban, a to már nem: a 6-tól 12-ig tartó határ a 6°00’ és 11°59’ közötti fokokat fedi le. Minden jegy öt szakasza pontosan 30 fokot ad ki.',

  terms: {
    kos:      [ { from: 0,  to: 6,  ruler: 'Jupiter' },  { from: 6,  to: 12, ruler: 'Vénusz' },   { from: 12, to: 20, ruler: 'Merkúr' },     { from: 20, to: 25, ruler: 'Mars' },       { from: 25, to: 30, ruler: 'Szaturnusz' } ],
    bika:     [ { from: 0,  to: 8,  ruler: 'Vénusz' },   { from: 8,  to: 14, ruler: 'Merkúr' },   { from: 14, to: 22, ruler: 'Jupiter' },    { from: 22, to: 27, ruler: 'Szaturnusz' }, { from: 27, to: 30, ruler: 'Mars' } ],
    ikrek:    [ { from: 0,  to: 6,  ruler: 'Merkúr' },   { from: 6,  to: 12, ruler: 'Jupiter' },  { from: 12, to: 17, ruler: 'Vénusz' },     { from: 17, to: 24, ruler: 'Mars' },       { from: 24, to: 30, ruler: 'Szaturnusz' } ],
    rak:      [ { from: 0,  to: 7,  ruler: 'Mars' },     { from: 7,  to: 13, ruler: 'Vénusz' },   { from: 13, to: 19, ruler: 'Merkúr' },     { from: 19, to: 26, ruler: 'Jupiter' },    { from: 26, to: 30, ruler: 'Szaturnusz' } ],
    oroszlan: [ { from: 0,  to: 6,  ruler: 'Jupiter' },  { from: 6,  to: 11, ruler: 'Vénusz' },   { from: 11, to: 18, ruler: 'Szaturnusz' }, { from: 18, to: 24, ruler: 'Merkúr' },     { from: 24, to: 30, ruler: 'Mars' } ],
    szuz:     [ { from: 0,  to: 7,  ruler: 'Merkúr' },   { from: 7,  to: 17, ruler: 'Vénusz' },   { from: 17, to: 21, ruler: 'Jupiter' },    { from: 21, to: 28, ruler: 'Mars' },       { from: 28, to: 30, ruler: 'Szaturnusz' } ],
    merleg:   [ { from: 0,  to: 6,  ruler: 'Szaturnusz' }, { from: 6, to: 14, ruler: 'Merkúr' },  { from: 14, to: 21, ruler: 'Jupiter' },    { from: 21, to: 28, ruler: 'Vénusz' },     { from: 28, to: 30, ruler: 'Mars' } ],
    skorpio:  [ { from: 0,  to: 7,  ruler: 'Mars' },     { from: 7,  to: 11, ruler: 'Vénusz' },   { from: 11, to: 19, ruler: 'Merkúr' },     { from: 19, to: 24, ruler: 'Jupiter' },    { from: 24, to: 30, ruler: 'Szaturnusz' } ],
    nyilas:   [ { from: 0,  to: 12, ruler: 'Jupiter' },  { from: 12, to: 17, ruler: 'Vénusz' },   { from: 17, to: 21, ruler: 'Merkúr' },     { from: 21, to: 26, ruler: 'Szaturnusz' }, { from: 26, to: 30, ruler: 'Mars' } ],
    bak:      [ { from: 0,  to: 7,  ruler: 'Merkúr' },   { from: 7,  to: 14, ruler: 'Jupiter' },  { from: 14, to: 22, ruler: 'Vénusz' },     { from: 22, to: 26, ruler: 'Szaturnusz' }, { from: 26, to: 30, ruler: 'Mars' } ],
    vizonto:  [ { from: 0,  to: 7,  ruler: 'Merkúr' },   { from: 7,  to: 13, ruler: 'Vénusz' },   { from: 13, to: 20, ruler: 'Jupiter' },    { from: 20, to: 25, ruler: 'Mars' },       { from: 25, to: 30, ruler: 'Szaturnusz' } ],
    halak:    [ { from: 0,  to: 12, ruler: 'Vénusz' },   { from: 12, to: 16, ruler: 'Jupiter' },  { from: 16, to: 19, ruler: 'Merkúr' },     { from: 19, to: 28, ruler: 'Mars' },       { from: 28, to: 30, ruler: 'Szaturnusz' } ]
  },

  /* ------------------------------------------------------------------ *
   *  3. KRITIKUS FOKOK
   * ------------------------------------------------------------------ */

  critical: {

    intro: 'A kritikus fokok az állatöv olyan pontjai, ahol egy bolygó vagy sarokpont hatása felerősödik: az ide eső elem hangsúlyosabbá, sürgetőbbé és a sorsban is láthatóbbá válik. A hagyomány szerint eredetük a Hold napi mozgásához köthető: a huszonnyolc holdház határai osztották fel így az állatövet, és ezek a törésvonalak maradtak fenn kritikus fokokként. A gyakorlatban azt jelzik, hogy az ott álló bolygó nem működhet észrevétlenül — döntést, kiállást vagy nyilvánosságot hoz magával. Nem jó és nem rossz fokok, csak felerősítik azt, ami ott áll.',

    anaretic: 'A 29. fok, vagyis a 29°00’ és 29°59’ közötti sáv az anaretikus vagy sorsfok: a jegy legutolsó szakasza, ahol a bolygó már a kilépés küszöbén áll. Az itt álló bolygó úgy viselkedik, mint aki mindent tud a jegy témájáról, de már nincs ideje kényelmesen bánni vele: sürgető, megoldást követelő minőség, gyakran a döntésképtelenség és a halogatás kísértésével. Egy témát ilyenkor le kell zárni, mielőtt az élet továbblép — ezért kötik a hagyomány szerint válsághoz, végkifejlethez és karmikus lezáráshoz. Ugyanakkor a legérettebb, legkidolgozottabb tapasztalatot is jelenti: az ember mesterévé vált annak, amit a jegy tanított.',

    zeroPoint: 'A 0. fok, vagyis a 0°00’ és 0°59’ közötti sáv a jegy nyitánya: az itt álló bolygó tiszta, kipróbálatlan, tanulatlan formában éli meg a jegy minőségét. Friss, nyers energiát ad, erős késztetéssel, de tapasztalat nélkül — ezért lelkes, de kiszámíthatatlan. Különösen erős a kardinális jegyek 0. foka, a világ négy sarka (0° Kos, Rák, Mérleg, Bak), mert ezek egyszerre jelölik az évszakok fordulóit; ide eső bolygó vagy sarokpont mindig nyilvános, sorsformáló jelentőséget kap.',

    byQuality: {
      kardinalis: {
        degrees: [0, 13, 26],
        signs: ['Kos', 'Rák', 'Mérleg', 'Bak'],
        text: 'A kardinális jegyekben a 0., a 13. és a 26. fok kritikus. Ezek a kezdeményezés fokai: az ide eső bolygó cselekvésre, indításra, nyílt lépésre kényszerít, és ritkán engedi, hogy a helyzet magától rendeződjön el.'
      },
      szilard: {
        degrees: [8, 9, 21, 22],
        signs: ['Bika', 'Oroszlán', 'Skorpió', 'Vízöntő'],
        text: 'A szilárd jegyekben a 8-9. és a 21-22. fok kritikus. Ezek a megtartás és a kitartás fokai: az itt álló bolygó nehezen mozdítható, hosszú hatású, és az ember életében visszatérő, makacsul ismétlődő témát jelöl.'
      },
      valtozo: {
        degrees: [4, 17],
        signs: ['Ikrek', 'Szűz', 'Nyilas', 'Halak'],
        text: 'A változó jegyekben a 4. és a 17. fok kritikus. Ezek az alkalmazkodás és a közvetítés fokai: az ide eső bolygó nyugtalanná, sokirányúvá és rugalmassá teszi a témát, gyakori irányváltásokkal és erős kapcsolódási igénnyel.'
      }
    },

    usage: 'Egy bolygó akkor áll kritikus fokon, ha a jegyen belüli egész foka szerepel a jegy minőségéhez tartozó listán — például a Bika (szilárd) 8°34’ vagy a Nyilas (változó) 17°02’. A 29. és a 0. fok minden jegyben érvényes, minőségtől függetlenül.'
  },

  /* ------------------------------------------------------------------ *
   *  4. MONOMOIRIA — fok-urak a kaldeus sorrend szerint
   * ------------------------------------------------------------------ */

  monomoiria: {

    intro: 'A monomoiria (görögül monomoiria, azaz egyetlen fok) a hellenisztikus asztrológia legfinomabb felosztása: az állatöv mind a 360 fokához egyetlen bolygóurat rendel. Vettius Valens (Anthologiae IV. könyv) és Paulus Alexandrinus (378) is leírja. A leggyakrabban használt változat szabálya egyszerű: a jegy első fokát a jegy hagyományos ura kapja, onnantól pedig fokról fokra a csökkenő kaldeus sorrend fut tovább — Szaturnusz, Jupiter, Mars, Nap, Vénusz, Merkúr, Hold —, majd elölről kezdődik, amíg a jegy mind a harminc foka urat nem kap. Így például a Kos ura a Mars, ezért a Kos 1. fokának ura a Mars, a 2. foké a Nap, a 3. foké a Vénusz, és így tovább.',

    usage: 'A fok-urat a bolygó jegyen belüli fokának egész részéből kapjuk: index = a fok egész része + 1, ugyanúgy felfelé kerekítve, mint a Szabian szimbólumoknál. A monomoiria ura a bolygó hangoltságát árnyalja: az adott bolygó a fok urának természetén keresztül szólal meg. Kiegészítő, finomhangoló eszköz, nem önálló ítélet alapja.',

    chaldeanOrder: ['Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold'],

    signRulers: {
      kos: 'Mars', bika: 'Vénusz', ikrek: 'Merkúr', rak: 'Hold',
      oroszlan: 'Nap', szuz: 'Merkúr', merleg: 'Vénusz', skorpio: 'Mars',
      nyilas: 'Jupiter', bak: 'Szaturnusz', vizonto: 'Szaturnusz', halak: 'Jupiter'
    },

    caveat: 'A hagyomány több monomoiria-rendszert is ismer (Paulus egy második, a triplicitásokra épülő változatot is közöl), ezért ez a tábla az egyik, jól dokumentált változat, nem az egyetlen érvényes felosztás.',

    rulers: {
      kos: ['Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap'],
      bika: ['Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr'],
      ikrek: ['Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold'],
      rak: ['Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz'],
      oroszlan: ['Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz'],
      szuz: ['Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold'],
      merleg: ['Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr'],
      skorpio: ['Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap'],
      nyilas: ['Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars'],
      bak: ['Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter'],
      vizonto: ['Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter'],
      halak: ['Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars', 'Nap', 'Vénusz', 'Merkúr', 'Hold', 'Szaturnusz', 'Jupiter', 'Mars']
    }
  }
};
