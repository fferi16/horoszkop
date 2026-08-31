/* humandesign.js — Human Design adatmodul: kapuk, központok, csatornák, típusok
 * Sima script (nem ES modul), UTF-8. Betöltés: <script src="js/data/humandesign.js"></script>
 * Forrás: docs/21-human-design.md (Jovian Archive, több független forrással
 *         keresztellenőrizve — a szabályok indoklása és a forrás-URL-ek ott).
 *
 * A rendszert Ra Uru Hu (Alan Robert Krakower) alkotta meg 1987-ben; a nyugati
 * asztrológiát, az I Csing 64 hexagramját, a kabbalista életfát és a csakra-
 * rendszert gyúrja össze. Tudományos alapja nincs — önismereti tükörként,
 * kulturális jelenségként érdemes rá tekinteni.
 */
window.HDATA = window.HDATA || {};
window.HDATA.humandesign = {

  intro: 'A Human Design modern szinkretikus rendszer, amelyet Ra Uru Hu (Alan Robert ' +
    'Krakower) alkotott meg 1987-ben: a nyugati asztrológiát, az I Csing 64 hexagramját, ' +
    'a kabbalista életfát és a csakrarendszert gyúrja össze. Tudományos alapja nincs, de ' +
    'a 2020-as évek egyik legnépszerűbb önismereti rendszere. A képlet két pillanatból ' +
    'épül: a személyiség (tudatos, fekete) a születés pillanatából, a design (tudattalan, ' +
    'piros) abból az időpontból, amikor a Nap pontosan 88 fokkal korábban járt — ez ' +
    'nagyjából 88–89 nappal a születés előtt van.',

  /* ---------------------------------------------------------------
   * A 64 kapu a kerék sorrendjében: a 41-es kapu a Vízöntő 2°-án
   * kezdődik, onnan haladnak a zodiákus irányában, egyenként 5,625°.
   * ------------------------------------------------------------- */
  wheelStart: 302,          // 2° Vízöntő ekliptikai hosszúságban
  wheelOrder: [
    41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
    27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
    31, 33, 7, 4, 29, 59, 40, 64, 47, 6, 46, 18, 48, 57, 32, 50,
    28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60
  ],

  /* Kapunevek: az I Csing hexagram neve + a Human Design kulcsszava. */
  gates: {
    1:  { name: 'Az Alkotó',              key: 'Önkifejezés',        center: 'g',      text: 'A saját, senki máséval össze nem téveszthető kreatív irány. Nem kérdezi, tetszik-e — egyszerűen megmutatja.' },
    2:  { name: 'A Befogadó',             key: 'Az Én iránya',       center: 'g',      text: 'A belső iránytű: tudja, merre kell menni, de nem tolja — várja, hogy megszólítsák és felkérjék.' },
    3:  { name: 'Kezdeti nehézség',       key: 'Rendeződés',         center: 'sacral', text: 'Az új dolgok kezdeti káosza és az abból lassan kibontakozó rend. A türelmetlenség itt a legnagyobb kísértés.' },
    4:  { name: 'Ifjonti balgaság',       key: 'Képletalkotás',      center: 'ajna',   text: 'A válasz keresésének mentális energiája: hipotéziseket gyárt, de a bizonyosság nem az ő dolga.' },
    5:  { name: 'Várakozás',              key: 'Állandó ritmusok',   center: 'sacral', text: 'A napi rutin és a szokások ereje. Ha a saját ritmusát tartja, minden más is a helyére kerül.' },
    6:  { name: 'Viszály',                key: 'Súrlódás',           center: 'solar',  text: 'Az intimitás kapuja: mikor engedek közel valakit és mikor nem. A konfliktus itt szűrő, nem hiba.' },
    7:  { name: 'A sereg',                key: 'Az Én szerepe',      center: 'g',      text: 'A vezetés mögötti erő: nem a reflektorfényben áll, hanem irányt ad annak, aki ott áll.' },
    8:  { name: 'Összetartás',            key: 'Hozzájárulás',       center: 'throat', text: 'A hitelesség megmutatása: az egyéniséget nem magyarázza, hanem példát mutat vele.' },
    9:  { name: 'A kicsi szelídítő ereje',key: 'Fókusz',             center: 'sacral', text: 'A részletekre irányuló kitartó figyelem — az az energia, amitől a nagy dolgok végül elkészülnek.' },
    10: { name: 'Taposás',                key: 'Önmagunk viselkedése',center: 'g',     text: 'Az önszeretet és a saját természet vállalása. A rendszer szerint a legfontosabb tanulás: önmagadként viselkedni.' },
    11: { name: 'Béke',                   key: 'Ötletek',            center: 'ajna',   text: 'Az ötletek kimeríthetetlen tárháza. Nem mind neked szól: sok közülük csak megosztásra való.' },
    12: { name: 'Megrekedés',             key: 'Óvatosság',          center: 'throat', text: 'A hangulattól függő önkifejezés: amikor jön a pillanat, megszólal — máskor jobb hallgatni.' },
    13: { name: 'Emberek közössége',      key: 'A hallgató',         center: 'g',      text: 'Mások titkainak természetes gyűjtője: az emberek elmondják neki, amit másnak nem.' },
    14: { name: 'Bővelkedés',             key: 'Erőforrások',        center: 'sacral', text: 'Az anyagi bőség és a munkaerő kapuja: ha a helyes irányba fordul, vonzza az eszközöket.' },
    15: { name: 'Szerénység',             key: 'Szélsőségek',        center: 'g',      text: 'A szélsőséges ritmusok elfogadása. Az emberi sokféleség szeretete — nem szereti a szabályos mintát.' },
    16: { name: 'Lelkesedés',             key: 'Készségek',          center: 'throat', text: 'A gyakorlásból születő mesterség és a lelkesedés, ami másokat is magával ragad.' },
    17: { name: 'Követés',                key: 'Vélemények',         center: 'ajna',   text: 'A rendszerező elme: mindig van róla véleménye, hogyan lehetne jobban csinálni.' },
    18: { name: 'Munka a megromlotton',   key: 'Javítás',            center: 'spleen', text: 'Az ösztönös érzék arra, hogy mi nincs rendben — kritika, amely javítani akar, nem bántani.' },
    19: { name: 'Közeledés',              key: 'Szükséglet',         center: 'root',   text: 'Az érzékenység arra, mire van szüksége a közösségnek — és az igény a támogatásra, elfogadásra.' },
    20: { name: 'Szemlélődés',            key: 'A Most',             center: 'throat', text: 'A jelen pillanat kapuja: azonnali tudás és azonnali megnyilvánulás, itt és most.' },
    21: { name: 'Áthatolás',              key: 'A vadász',           center: 'heart',  text: 'Az irányítás akarása: a saját terület, a saját erőforrások feletti kontroll igénye.' },
    22: { name: 'Kellem',                 key: 'Nyitottság',         center: 'solar',  text: 'A hangulattól függő társas nyitottság és kecsesség — ha megnyílik, mindenkit meghallgat.' },
    23: { name: 'Széthullás',             key: 'Asszimiláció',       center: 'throat', text: 'A képesség, hogy a bonyolultat egyszerűen mondja ki. Rossz időzítéssel viszont érthetetlen marad.' },
    24: { name: 'Visszatérés',            key: 'Racionalizálás',     center: 'ajna',   text: 'Az elme visszatérése ugyanahhoz a kérdéshez, amíg meg nem születik a felismerés.' },
    25: { name: 'Ártatlanság',            key: 'Az Én szelleme',     center: 'g',      text: 'Az egyetemes, személytelen szeretet: mindenkire ugyanúgy tekint, ártatlan szívvel.' },
    26: { name: 'A nagy szelídítő ereje', key: 'Az egoista',         center: 'heart',  text: 'A meggyőzés és az emlékezet ereje: úgy adja el az igazságot, hogy közben a maga javára fordítja.' },
    27: { name: 'Táplálás',               key: 'Gondoskodás',        center: 'sacral', text: 'A törődés energiája: felelősség másokért, néha a saját határain túl is.' },
    28: { name: 'A nagy túlsúlya',        key: 'A játékos',          center: 'spleen', text: 'A kockázatvállalás és az értelemkeresés: mi az, amiért érdemes küzdeni az életben?' },
    29: { name: 'A feneketlen mélység',   key: 'Igent mondás',       center: 'sacral', text: 'Az elköteleződés ereje: ha igent mond, végigcsinálja — ezért fontos, mire mond igent.' },
    30: { name: 'A ragaszkodó tűz',       key: 'Vágyak',             center: 'solar',  text: 'A vágyak tüze: az érzés, hogy valaminek történnie kell — az élmény utáni sóvárgás.' },
    31: { name: 'Befolyás',               key: 'Vezetés',            center: 'throat', text: 'A demokratikus vezetés: akkor működik, ha megválasztják rá, nem ha magának veszi.' },
    32: { name: 'Tartósság',              key: 'Folytonosság',       center: 'spleen', text: 'Az ösztönös érzék arra, mi maradandó és mi bukik el — a kudarctól való félelemmel együtt.' },
    33: { name: 'Visszavonulás',          key: 'Visszavonulás',      center: 'throat', text: 'Az emlékezés és a mesélés kapuja: a magányba vonulás után hozza el a tanulságot.' },
    34: { name: 'A nagy hatalma',         key: 'Erő',                center: 'sacral', text: 'A tiszta, nyers életerő. Akkor a legszebb, ha a saját dolgát csinálja vele, nem másokét.' },
    35: { name: 'Haladás',                key: 'Változás',           center: 'throat', text: 'A tapasztalatéhség: mindent kipróbálna egyszer — és utána tovább is lép.' },
    36: { name: 'A fény elhomályosulása', key: 'Válság',             center: 'solar',  text: 'Az érzelmi krízis és az új élmény utáni vágy. A türelmetlenség itt fájdalmat szül.' },
    37: { name: 'A család',               key: 'Barátság',           center: 'solar',  text: 'A közösség melegsége és az alkuk betartása: a család, a törzs összetartó ereje.' },
    38: { name: 'Szembenállás',           key: 'A harcos',           center: 'root',   text: 'A küzdelem energiája: kiáll azért, ami fontos — de tudnia kell, miért érdemes harcolni.' },
    39: { name: 'Akadály',                key: 'Provokáció',         center: 'root',   text: 'A provokáció, amely érzelmet vált ki másokból — így deríti ki, mi van bennük valójában.' },
    40: { name: 'Megszabadulás',          key: 'Egyedüllét',         center: 'heart',  text: 'A munka utáni visszavonulás: dolgozik a közösségért, de utána egyedül kell töltődnie.' },
    41: { name: 'Csökkenés',              key: 'Fantázia',           center: 'root',   text: 'Minden tapasztalás kiindulópontja: a képzelet, amely elindítja az új élmény vágyát.' },
    42: { name: 'Gyarapodás',             key: 'Növekedés',          center: 'sacral', text: 'A ciklusok lezárása: amit elkezd, azt végig kell vinnie — a félbehagyás kínozza.' },
    43: { name: 'Áttörés',                key: 'Belátás',            center: 'ajna',   text: 'A hirtelen belső felismerés, amit nehéz szavakba önteni — ezért tűnhet különcnek.' },
    44: { name: 'Elébe menni',            key: 'Éberség',            center: 'spleen', text: 'Az ösztönös emberismeret: a múlt mintáiból azonnal megérzi, kiben lehet megbízni.' },
    45: { name: 'Összegyűjtés',           key: 'A gyűjtő',           center: 'throat', text: 'A vezető hang, amely összefogja a közösség erőforrásait — a „miénk" hangja.' },
    46: { name: 'Felfelé törekvés',       key: 'Az Én elszántsága',  center: 'g',      text: 'A testben lakozás öröme és a jókor jó helyen lét szerencséje.' },
    47: { name: 'Elnyomatás',             key: 'Felismerés',         center: 'ajna',   text: 'A mentális nyomás, hogy értelmet adjon a múlt zavaros élményeinek — amíg meg nem világosodik.' },
    48: { name: 'A kút',                  key: 'Mélység',            center: 'spleen', text: 'A mélység kútja: ösztönös tudás, amelyhez az elégtelenségtől való félelem tapad.' },
    49: { name: 'Forradalom',             key: 'Elvek',              center: 'solar',  text: 'Az elvek kapuja: ha megszegik az alapelveket, kész felrúgni a kapcsolatot vagy a rendszert.' },
    50: { name: 'Az üst',                 key: 'Értékek',            center: 'spleen', text: 'A törzsi értékek és szabályok őrzője — a felelősség ösztöne másokért.' },
    51: { name: 'A rázkódás',             key: 'Sokk',               center: 'heart',  text: 'A sokk, amely felébreszt: versengés és bátorság, ami másokat is felráz.' },
    52: { name: 'Nyugalom',               key: 'Nyugalom',           center: 'root',   text: 'A mozdulatlanság ereje: az összpontosításhoz szükséges belső csend.' },
    53: { name: 'Fejlődés',               key: 'Kezdetek',           center: 'root',   text: 'Az új ciklus elindításának nyomása — a befejezés viszont már nem az ő dolga.' },
    54: { name: 'A férjhez menő lány',    key: 'Ambíció',            center: 'root',   text: 'A feljebb jutás vágya: a törekvés, hogy az anyagi és a spirituális szinten is emelkedjen.' },
    55: { name: 'Bőség',                  key: 'Szellem',            center: 'solar',  text: 'Az érzelmi hullám csúcsa és mélypontja: a bőség kérdése végül hit kérdése.' },
    56: { name: 'A vándor',               key: 'Ösztönzés',          center: 'throat', text: 'A történetmesélő: élményeket ad tovább, és ezzel ösztönöz másokat.' },
    57: { name: 'A szelíd',               key: 'Intuitív tisztánlátás',center: 'spleen',text: 'A jelen pillanat ösztönös hallása — a legfinomabb intuíció a rendszerben.' },
    58: { name: 'Az örvendetes',          key: 'Életöröm',           center: 'root',   text: 'A vitalitás és az életöröm, amely hajtja a javítás, a jobbítás igényét.' },
    59: { name: 'Feloldódás',             key: 'Intimitás',          center: 'sacral', text: 'A falak lebontása: a szexualitás és a bensőséges közelség teremtő energiája.' },
    60: { name: 'Korlátozás',             key: 'Elfogadás',          center: 'root',   text: 'A korlátok elfogadása — és épp ebből születik a mutáció, az igazi újdonság.' },
    61: { name: 'Belső igazság',          key: 'Misztérium',         center: 'head',   text: 'A tudni akarás nyomása: a megismerhetetlen titok vonzása, ami inspirációt szül.' },
    62: { name: 'A kicsi túlsúlya',       key: 'Részletek',          center: 'throat', text: 'A részletek és a nevek kapuja: rendet rak a tényekben, hogy érthető legyen.' },
    63: { name: 'A beteljesülés után',    key: 'Kétely',             center: 'head',   text: 'A kételkedés nyomása: mindig megkérdezi, biztosan igaz-e — ebből születik a logika.' },
    64: { name: 'A beteljesülés előtt',   key: 'Zűrzavar',           center: 'head',   text: 'A fejben kavargó képek nyomása, amíg egyszer csak összeáll az értelmes kép.' }
  },

  /* ---------------------------------------------------------------
   * A 9 központ
   * ------------------------------------------------------------- */
  /* A központok kétállapotú leírással: a felhasználó SAJÁT képletére szabva.
     Forrás: docs/21-human-design.md — Jovian Archive, több iskolával egyeztetve.
     A százalék csak ott szerepel, ahol hiteles forrás áll mögötte. */
  centers: {
    head: {
      name: 'Fej', motor: false, sub: 'inspiráció', pct: 'kb. 30%',
      defined: 'Következetesen a saját kérdéseid foglalkoztatnak, és a tudni akarás nyomása ' +
        'nálad mindig be van kapcsolva. Kifelé inspiráló hatású vagy: kérdéseket és ötleteket ' +
        'sugárzol, amelyektől mások is kíváncsivá válnak. Árnyoldala a gondolati túlterhelés — ' +
        'nehéz eldönteni, melyik kérdés érdemli meg valóban a figyelmedet.',
      open: 'Mások kérdéseit és kételyeit veszed fel és erősíted föl — sokszor élesebben ' +
        'érzed a nyomást, mint az, akitől ered. A rendszer szerint itt könnyű abba a csapdába ' +
        'esni, hogy olyan kérdéseket próbálsz megválaszolni, amelyek valójában nem a tieid.',
      question: 'Mások kérdéseit próbálom megválaszolni?',
      wisdom: 'Idővel éles érzéked lesz ahhoz, mi és ki igazán inspiráló — és melyik kérdést ' +
        'nem kell egyáltalán megoldani.'
    },
    ajna: {
      name: 'Ajna', motor: false, sub: 'tudatosság',
      defined: 'Rögzített gondolkodásmódod van: stabil fogalmaid és véleményeid, amelyekre ' +
        'számíthatsz. Mások mentálisan határozottnak látnak. Árnyoldala, hogy ugyanez a ' +
        'következetesség be is szűkíthet, és az elme folyamatosan jár — ehhez kifutás kell.',
      open: 'Sokféle gondolkodásmódot veszel be, és egyszerre több nézőpontot is tudsz ' +
        'tartani. Ez rugalmasság, nem hiányosság — de a rendszer szerint nyomás alatt ' +
        'kísértés biztosabbnak mutatkozni, mint amennyire valóban az vagy.',
      question: 'Azt próbálom bizonygatni másoknak (vagy magamnak), hogy biztos vagyok a dolgomban?',
      wisdom: 'Idővel magukról a gondolatokról és a hitrendszerekről leszel bölcs: sokfélét ' +
        'tudsz mérlegelni anélkül, hogy bármelyik foglyul ejtene.'
    },
    throat: {
      name: 'Torok', motor: false, sub: 'megnyilvánulás',
      defined: 'Következetes, felismerhető módon kommunikálsz és cselekszel — az ismerőseid ' +
        'tudják, milyen a „hangod". Fontos tudni: a torok nem forrás, hanem sebességváltó; ' +
        'az, amit közvetít, attól függ, melyik központtal van összekötve.',
      open: 'A körülötted lévő hangokat erősíted fel, és ahhoz igazítod a kommunikációdat, ' +
        'akivel épp vagy. A rendszer szerint itt a jellemző csapda, hogy a figyelem ' +
        'kikényszerítéséért szólalsz meg vagy cselekszel.',
      question: 'Azért beszélek vagy cselekszem, hogy felhívjam magamra a figyelmet?',
      wisdom: 'Idővel megtanulod megkülönböztetni a hiteles megszólalást az előadottól, és ' +
        'ráérzel az időzítésre. A hagyomány szerint épp akkor kapsz figyelmet, amikor már ' +
        'nem próbálod kicsikarni — érdemes megvárni, hogy kérdezzenek.'
    },
    g: {
      name: 'G-központ', motor: false, sub: 'identitás, irány',
      defined: 'Stabil önazonosságod és következetes irányérzéked van, amely a különböző ' +
        'helyzetekben és kapcsolatokban is ugyanaz marad. Ez a stabilitás átadható: mások ' +
        'meg tudnak benne pihenni. Árnyoldala a merevség — ha minden helyzetben ugyanazt az ' +
        'identitást várod el magadtól és másoktól.',
      open: 'Annak az identitását, irányát és szeretetét veszed fel, aki épp jelen van — és ' +
        'sajátosan magáé a környezeté is. A rendszer szerint itt a keresés maga a csapda: ' +
        'a szorítás, hogy megtaláld, „ki vagy".',
      question: 'Szeretetet és irányt keresek?',
      wisdom: 'Idővel bölcs leszel az identitásról, a szeretetről — és jellegzetesen a ' +
        'helyről is: ennél a központnál az irány a helyes környezeten keresztül oldódik meg.'
    },
    heart: {
      name: 'Szív (Ego)', motor: true, sub: 'akaraterő', pct: 'kb. 33%',
      defined: 'Következetesen hozzáférsz az akaraterőhöz, és stabil értékérzeted van: ' +
        'ha ígérsz valamit, meg is tartod. Fontos tudni, hogy ez lüktető, nem folyamatos ' +
        'motor — munka, aztán pihenés. A jellemző hiba, ha a csúcson túl sokat ígérsz, ' +
        'és a pihenőszakaszt kudarcként éled meg.',
      open: 'Mások akaraterejét és értékkel kapcsolatos nyomását erősíted fel, és az ' +
        'önértékelésed a társaságtól függően ingadozik. A rendszer szerint innen ered a ' +
        'legismertebb csapda: a bizonyítási kényszer. A hagyomány hangsúlyozza, hogy nem ' +
        'az érzés a baj, hanem az, amit kompenzálásból teszünk ellene.',
      question: 'Van valami bizonyítanivalóm — vagy javítanivalóm magamon?',
      wisdom: 'Idővel bölcs leszel arról, mi érdemel egyáltalán bizonyítást és mi nem. ' +
        'A rendszer válasza egyszerű: nincs mit bizonyítanod.'
    },
    sacral: {
      name: 'Szakrális', motor: true, sub: 'életerő', pct: 'kb. 70%',
      defined: 'Megújuló életerő, amely alvással töltődik: a rendszer szerint arra vagy ' +
        'tervezve, hogy dolgozz és válaszolj a felmerülő lehetőségekre. A világ munkatempóját ' +
        'nagyrészt az ilyen képletek szabják meg. Figyelem: a hagyomány kifejezetten cáfolja, ' +
        'hogy a definiált szakrális automatikusan tudná, mikor elég — ez pillanatról pillanatra ' +
        'zajló figyelem kérdése.',
      open: 'A körülötted lévők életerejét erősíted fel — a hagyomány szerint akár túl ' +
        'intenzíven is —, de ez kölcsönvett energia, amit nem tudsz sokáig tartani. ' +
        'A jellemző csapda: nem tudni, mikor elég.',
      question: 'Tudom, mikor elég?',
      wisdom: 'Idővel magáról az energiáról leszel bölcs: megérzed, kiben van most valódi ' +
        'lendület, ki tetteti, és ki az, aki már a lezáráshoz ért.'
    },
    solar: {
      name: 'Napfonat', motor: true, sub: 'érzelmek', pct: 'kb. fele az embereknek',
      defined: 'Saját érzelmi hullámod van, amely a saját ütemében emelkedik és süllyed, ' +
        'a környezettől függetlenül. Ebből következik a legfontosabb szabály: nálad nincs ' +
        'azonnali igazság — az érzelmi tisztaság idővel érik. Árnyoldala, hogy a hullámod ' +
        'a szándékodtól függetlenül is meghatározza egy tér hangulatát.',
      open: 'A saját hullám helyett mások érzelmeit veszed be, és sajátodként éled meg. ' +
        'A rendszer szerint itt korán megtanult stratégia lesz a konfliktus kerülése — ' +
        'a béke fenntartása akár az igazság rovására is.',
      question: 'Kerülöm a konfrontációt és az igazságot?',
      wisdom: 'Idővel magukról az érzelmekről leszel bölcs: megérzed egy tér érzelmi ' +
        'állapotát, és megtanulsz kicsit nagyobb távolságból nézni arra, ami átfut rajtad.'
    },
    spleen: {
      name: 'Lép', motor: false, sub: 'ösztön',
      defined: 'Következetesen hozzáférsz az ösztönös éberséghez és a jóllét testi ' +
        'érzetéhez; megbízható az időzítésed. A körülötted lévők is érzik ezt a biztonságot. ' +
        'Fontos: ez a jelzés halk, spontán, és nem ismétli meg magát — könnyen elnyomja ' +
        'az elme vagy egy érzelmi hullám.',
      open: 'Mások félelmeit és ösztöneit is felerősíted, és érzékenyebb vagy a biztonság ' +
        'kérdéseire. A rendszer szerint a jellemző csapda a ragaszkodás: emberekhez, ' +
        'munkához vagy szokáshoz, mert az ismerősség biztonságnak érződik.',
      question: 'Ragaszkodom ahhoz, ami nem tesz jót nekem?',
      wisdom: 'Idővel bölcs leszel arról, mi és ki tesz valóban jót neked, és megtanulod ' +
        'megkülönböztetni a félelmet az intuíciótól — és megbízni a szükséges lezárásokban.'
    },
    root: {
      name: 'Gyökér', motor: true, sub: 'lendület',
      defined: 'Következetes módon kezeled a nyomást, és motivációként tudod használni. ' +
        'Viszonylag védett vagy mások sürgetésétől — cserébe te adod a tempót, vagyis ' +
        'nyomást helyezel másokra. Ez az energia lüktet, nem folyamatos, ezért az időzítés számít.',
      open: 'Mások stresszét, határidejét és sürgetését erősíted fel, mintha a sajátod volna. ' +
        'A rendszer szerint a jellemző csapda a sietés: minél előbb túlesni mindenen, hogy ' +
        'végre megszabadulj a nyomástól.',
      question: 'Sietek mindent elvégezni, hogy megszabaduljak a nyomástól?',
      wisdom: 'Idővel bölcs leszel a nyomásról és az időzítésről: megkülönbözteted, melyik ' +
        'nyomás a tiéd és melyik nem — és hogy a nyomásra nem kötelező azonnal cselekedni.'
    }
  },

  openNote: 'A nyitott központok a hagyomány szerint nem hiányosak és nem javítandók: ' +
    'itt vagy a legfogékonyabb, és a rendszer szerint épp ezek válnak idővel a bölcsesség ' +
    'helyévé. A „nem-önmagad" kérdések nem rólad szóló ítéletek, hanem olyan belső hangok, ' +
    'amelyeket maga a rendszer bírál — arra valók, hogy felismerd őket.',

  fullyOpenNote: 'A teljesen nyitott központban egyetlen kapud sincs aktiválva: nincs ' +
    'rögzített viszonyítási pont, amelyhez a kívülről érkezőt mérhetnéd. A hagyomány ' +
    'szerint ez egyszerre a legnagyobb befolyásolhatóság és a legnagyobb bölcsesség-lehetőség.',

  hangingNote: 'A nyitott központban aktivált („lógó") kapu rögzített viszonyítási pontot ' +
    'ad: van mihez mérned, ami kívülről érkezik.',

  /* ---------------------------------------------------------------
   * A 36 csatorna
   * ------------------------------------------------------------- */
  channels: [
    { g: [1, 8],   name: 'Inspiráció',        text: 'A kreatív szerepmodell csatornája: a saját egyediségeddel mutatsz példát.' },
    { g: [2, 14],  name: 'Az Ütem',           text: 'Az irány és az erőforrás összekapcsolása: tudod, merre kell menni, és van hozzá energiád.' },
    { g: [3, 60],  name: 'Mutáció',           text: 'Az újdonság csatornája: a változás nem tervezhető, hullámokban érkezik.' },
    { g: [4, 63],  name: 'Logika',            text: 'A kételytől a képletig: mintákat keresel, amelyek a jövőben is működnek.' },
    { g: [5, 15],  name: 'Ritmus',            text: 'A természet ritmusához illeszkedő életvitel — a rendszeresség adja az erődet.' },
    { g: [6, 59],  name: 'Párosodás',         text: 'Az intimitás csatornája: falak lebontása és a bensőséges közelség teremtése.' },
    { g: [7, 31],  name: 'Az Alfa',           text: 'A vezetés csatornája — de csak akkor működik, ha megválasztanak rá.' },
    { g: [9, 52],  name: 'Koncentráció',      text: 'A kitartó összpontosítás: a részletekben maradás képessége.' },
    { g: [10, 20], name: 'Ébredés',           text: 'Önmagad lenni itt és most — a hitelesség csatornája.' },
    { g: [10, 34], name: 'Feltárás',          text: 'A meggyőződés követése: azt csinálod, amiben hiszel, akkor is, ha nem értik.' },
    { g: [10, 57], name: 'Tökéletesített forma', text: 'Az ösztönös túlélés csatornája: a tested pontosan tudja, mi jó neked.' },
    { g: [11, 56], name: 'Kíváncsiság',       text: 'Az ötletek és a történetek keresője: gondolatokat adsz tovább, nem igazságokat.' },
    { g: [12, 22], name: 'Nyitottság',        text: 'A hangulatfüggő önkifejezés: ha jön a pillanat, gyönyörűen szólalsz meg.' },
    { g: [13, 33], name: 'A Tékozló',         text: 'A tanú csatornája: gyűjtöd a múlt tapasztalatait, hogy továbbadhasd.' },
    { g: [16, 48], name: 'A hullámhossz',     text: 'A tehetség csatornája: a mélységből gyakorlással lesz mesterség.' },
    { g: [17, 62], name: 'Elfogadás',         text: 'A vélemény és a részletek: rendezett érveléssel győzöl meg másokat — szervező alkat.' },
    { g: [18, 58], name: 'Ítélkezés',         text: 'A jobbítás csatornája: meglátod, mi nem működik, és javítani akarsz rajta.' },
    { g: [19, 49], name: 'Szintézis',         text: 'Az érzékenység csatornája: megérzed, mire van szüksége a közösségnek.' },
    { g: [20, 34], name: 'Karizma',           text: 'A tett csatornája: amit gondolsz, azt azonnal cselekvésbe is fordítod.' },
    { g: [20, 57], name: 'Az agyhullám',      text: 'A pillanatnyi intuíció azonnali kimondása — ösztönös tisztánlátás.' },
    { g: [21, 45], name: 'A pénz vonala',     text: 'Az anyagi világ irányítása: erőforrások fölötti kontroll és felelősség.' },
    { g: [23, 43], name: 'Strukturálás',      text: 'A zsenialitás csatornája: egyedi belátásaidat érthetővé teszed — ha jó az időzítés.' },
    { g: [24, 61], name: 'Tudatosság',        text: 'A gondolkodó csatornája: a titok vonzása, amíg meg nem születik a felismerés.' },
    { g: [25, 51], name: 'Beavatás',          text: 'A sokk és az egyetemes szeretet: kihívásokon keresztül vezetsz másokat.' },
    { g: [26, 44], name: 'Megadás',           text: 'Az emlékezet és a meggyőzés: közvetítő alkat, aki tudja, mit hogyan kell átadni.' },
    { g: [27, 50], name: 'Megőrzés',          text: 'A gondoskodás csatornája: a törzs értékeit és a rászorulókat óvod.' },
    { g: [28, 38], name: 'Küzdelem',          text: 'A makacsság csatornája: keresed, miért érdemes küzdeni az életben.' },
    { g: [29, 46], name: 'Rátalálás',         text: 'A siker csatornája: ha igent mondasz és jelen vagy, jókor vagy jó helyen — ott is sikerülhet, ahol másoknak nem.' },
    { g: [30, 41], name: 'Felismerés',        text: 'A vágy csatornája: a képzelet elindítja az élmény utáni sóvárgást.' },
    { g: [32, 54], name: 'Átalakulás',        text: 'A becsvágy csatornája: az ambíciót ösztönös értékítélet fékezi.' },
    { g: [34, 57], name: 'Erő',               text: 'Az ösztönös erő: a tested pontosan tudja, mikor kell cselekedni.' },
    { g: [35, 36], name: 'Mulandóság',        text: 'A tapasztalás csatornája: mindent kipróbálnál — és tovább is lépsz.' },
    { g: [37, 40], name: 'Közösség',          text: 'Az alku csatornája: adok-kapok egyensúlya a családban és a munkában.' },
    { g: [39, 55], name: 'Érzelmesség',       text: 'A hangulat csatornája: provokációval hozod felszínre mások érzéseit.' },
    { g: [42, 53], name: 'Érés',              text: 'A ciklusok csatornája: amit elkezdesz, azt végig is kell vinned.' },
    { g: [47, 64], name: 'Absztrakció',       text: 'Az elme csatornája: a kavargó képekből egyszer csak összeáll az értelem.' }
  ],

  /* ---------------------------------------------------------------
   * Típusok, tekintélyek, profilok, definíció
   * ------------------------------------------------------------- */
  types: {
    manifestor: { name: 'Manifesztor', ratio: 'kb. 9%', strategy: 'Tájékoztass, majd cselekedj',
      notSelf: 'harag',
      text: 'A rendszer szerint az egyetlen valóban kezdeményező típus: úttörő, független, aki magától indít el dolgokat. Az ellenállást azzal kerüli el, ha előre szól a környezetének arról, amit tenni készül.' },
    generator: { name: 'Generátor', ratio: 'kb. 37%', strategy: 'Várj a válaszra',
      notSelf: 'frusztráció',
      text: 'A rendszer „építője": kitartó életerő, amely akkor működik jól, ha olyan munkát végez, ami valóban vonzza. Nem kezdeményez a semmiből, hanem a felmerülő lehetőségekre reagál — és ha jól választ, kimeríthetetlen energiával dolgozik.' },
    magenerator: { name: 'Manifesztáló Generátor', ratio: 'kb. 33%', strategy: 'Várj a válaszra, majd tájékoztass',
      notSelf: 'frusztráció és harag',
      text: 'Többpályás, gyors, multipotenciál típus, aki egyszerre több irányban is halad. A rendszer szerint természetes számára, hogy kihagy lépéseket és menet közben korrigál.' },
    projector: { name: 'Projektor', ratio: 'kb. 20%', strategy: 'Várj a meghívásra',
      notSelf: 'keserűség',
      text: 'Irányító-látó típus, aki mások energiáit tudja bölcsen vezetni és rendszerbe szervezni. Nincs saját, folyamatos munkaenergiája, ezért a rendszer szerint a felismerés és a meghívás a kulcs számára.' },
    reflector: { name: 'Reflektor', ratio: 'kb. 1%', strategy: 'Várj egy teljes holdciklust (kb. 28 nap)',
      notSelf: 'csalódottság',
      text: 'A legritkább típus: tükör, aki a környezete állapotát mutatja vissza. Rendkívül érzékeny arra, hogy kik veszik körül és hol tartózkodik, ezért a nagy döntéseknél a rendszer egy teljes holdciklusnyi várakozást javasol.' }
  },

  authorities: {
    emotional:  { name: 'Érzelmi (Napfonat)',    text: 'Nincs azonnali igazság: az érzelmi hullámod csúcsán és mélypontján másképp látod ugyanazt. Aludj rá egyet — a döntés az idővel érik meg.' },
    sacral:     { name: 'Szakrális',             text: 'A tested azonnali válasza dönt: a zsigeri „ühüm / ühm-ühm" megbízhatóbb, mint bármilyen érvelés.' },
    splenic:    { name: 'Lép (ösztönös)',        text: 'Az ösztönöd egyetlen halk jelzést ad, a jelen pillanatban — ha nem hallgatsz rá azonnal, nem ismétli meg.' },
    ego:        { name: 'Ego (akarat)',          text: 'Azt kérdezd, valóban akarod-e — a szíved akarata és az önérdeked a helyes iránytű.' },
    self:       { name: 'Ön-vetítéses (G)',      text: 'Hallgasd meg, hogyan beszélsz róla: a saját hangod árulja el, mi az igazi irányod. Beszélj róla egy megbízható embernek.' },
    mental:     { name: 'Mentális (rezonáló)',   text: 'Nem magadban döntesz: beszéld át több emberrel, és figyeld, mit vált ki belőled a beszélgetés. A környezet dönt, nem az érvek.' },
    lunar:      { name: 'Holdciklus',            text: 'A nagy döntésekhez idő kell: egy teljes holdciklus (kb. 28 nap) alatt sokféle helyen és emberrel megnézed, hogyan érzed.' }
  },

  profiles: {
    '1/3': { name: 'Kutató / Kísérletező',   text: 'Alapokat ásol ki, aztán a saját bőrödön próbálod ki: a tévedés nálad nem kudarc, hanem módszer.' },
    '1/4': { name: 'Kutató / Opportunista',  text: 'Mélyre ásol, és a tudásodat a saját baráti hálódon keresztül adod tovább — a kapcsolataid a legfőbb erőforrásod.' },
    '2/4': { name: 'Remete / Opportunista',  text: 'Természetes tehetség, aki egyedüllétben töltődik, de a hálózata hívja elő: a lehetőségeket mások hozzák neked.' },
    '2/5': { name: 'Remete / Eretnek',       text: 'Visszahúzódó tehetség, akitől mégis megoldást várnak: vigyázz, mert könnyen kivetítik rád, amit ők szeretnének látni.' },
    '3/5': { name: 'Kísérletező / Eretnek',  text: 'Próbálgatva tanulsz, aztán gyakorlati megoldást kínálsz másoknak — csak azt vállald, amit tényleg meg tudsz oldani.' },
    '3/6': { name: 'Kísérletező / Példakép', text: 'Az élet első harmadában sokat kísérletezel, később a tapasztalataidból lesz példamutató bölcsesség.' },
    '4/6': { name: 'Opportunista / Példakép',text: 'A kapcsolataid hálója visz előre, és idővel te leszel az, akire mások felnéznek.' },
    '4/1': { name: 'Opportunista / Kutató',  text: 'Rögzített szemszög: azt adod tovább, amit mélyen tudsz, a baráti körödön keresztül. Nehezen tántorítanak el.' },
    '5/1': { name: 'Eretnek / Kutató',       text: 'Gyakorlatias megoldó, aki alapos tudásra épít. Mások kivetítéseivel kell megtanulnod bánni.' },
    '5/2': { name: 'Eretnek / Remete',       text: 'Kihívják a rejtekhelyedről, mert megoldást várnak tőled — te viszont a magányban töltődsz.' },
    '6/2': { name: 'Példakép / Remete',      text: 'Három szakaszban élsz: kísérletezés, tetőn töltött visszavonulás, majd bölcs példamutatás.' },
    '6/3': { name: 'Példakép / Kísérletező', text: 'Sok próbán mész át, hogy végül hiteles, tapasztalt példakép lehess.' }
  },

  crossTypes: {
    right: { name: 'Jobb szög (személyes sors)',   text: 'A saját tapasztalataidon keresztül bontakozik ki az életfeladatod.' },
    jux:   { name: 'Egymás mellett (rögzített sors)', text: 'Rögzített, sajátos szerep, amelyet nehezen térít el a környezet.' },
    left:  { name: 'Bal szög (átvitt sors)',       text: 'Az életfeladatod másokon keresztül teljesedik ki: a találkozások viszik előre.' }
  },

  definitions: {
    0: { name: 'Nincs definíció', text: 'Egyetlen központod sem definiált — teljesen nyitott, tükröző képlet.' },
    1: { name: 'Egyszeres definíció', text: 'A definiált központjaid egyetlen összefüggő egységet alkotnak: önmagadban is egész vagy, nem kell külső kapcsolat a működéshez.' },
    2: { name: 'Osztott (kettős) definíció', text: 'Két különálló csoport alkotja a definíciódat: két „belső ember", akiket mások vagy a tranzitok kötnek össze. Ezért kell néha idő, míg összeérsz.' },
    3: { name: 'Hármas hasadás', text: 'Három különálló csoport: sokféle inger kell, hogy összeálljon a kép — a nyüzsgő környezet jót tesz.' },
    4: { name: 'Négyes hasadás', text: 'Négy különálló csoport: nagyon sokrétű működés, amelyet a környezet köt össze.' }
  },

  note: 'A Human Design nem tudományos rendszer: az asztrológiai pozíciókat az I Csing ' +
    'hexagramjaihoz rendeli, és ebből vezet le személyiségképet. Pontos születési idő ' +
    'nélkül a torok, a G-központ és a profil is elcsúszhat — órányi eltérés is más típust adhat.',

  nodeNote: 'A holdcsomópontokat átlagos (mean) csomópont szerint számoljuk. Más ' +
    'kalkulátorok valós (true) csomóponttal is dolgozhatnak, ami legfeljebb ~1,7°, ' +
    'azaz kb. egyharmad kapunyi eltérés — ha egy csomóponti kapud épp határon áll, ' +
    'előfordulhat, hogy egy másik program eggyel odébb sorolja.'
};
