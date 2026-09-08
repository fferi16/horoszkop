# Éves profekció és az év ura — kutatási jegyzet

> A `docs/11` 9. pontja csak a számítást írta le („életkor mod 12"). Ez a fejezet az
> **értelmezés** forrásait gyűjti össze, hogy a „Hol tartasz most" szekció ne csak
> „2. ház – Oroszlán" legyen, hanem elmondja, mit jelent ez **ennek** a képletnek.
> Készült: 2026-09-08. Elv: [[kutatas-epites-elott]].

## 1. Források

| Forrás | Mit ad |
|---|---|
| **Vettius Valens**, *Anthologiae* IV.11–IV.17 (Riley-fordítás, 2010) | a technika legrészletesebb ókori leírása; „átadás" (paradosis); az Aszcendensen kívül a Napból, Holdból, Fortunából, Daimónból is számol |
| **Paulus Alexandrinus**, *Eisagogika* 31. fej. (Project Hindsight, Hand szerk.) | éves és havi/napi profekció menete; Olympiodorus kommentárja |
| **Firmicus Maternus**, *Mathesis* II.27 | az Aszcendenstől számol; megjegyzi, hogy egyesek nappali születésnél a Naptól, éjszakainál a Holdtól indulnak |
| **Ptolemaiosz**, *Tetrabiblos* IV.10 | a havi profekcióhoz 28 napot ad egy jegyre |
| **Chris Brennan**, *Hellenistic Astrology* (2017) 17. fej.; The Astrology Podcast 153. adás (2018) | mai szintézis: az év ura natális állapota, a profektált jegyben álló bolygók, a tranzitok aktiválása |
| Seven Stars Astrology: *Profections in the Style of Vettius Valens*; *Monthly Profections* | Valens-idézetek fejezetszámmal, a havi számlálás változatai |

## 2. Számítás (rögzített döntések)

- **Egészjegyes házak** (whole sign): az 1. ház = az Aszcendens jegye. Ez nem a felhasználó
  által választott házrendszer — a profekció mindig egészjegyes.
- `aktivált ház = (betöltött életkor mod 12) + 1`; a jegy = Aszcendens jegye + (ház − 1).
- Az **év** születésnaptól születésnapig tart (nem naptári év).
- Az **év ura** a profektált jegy **hagyományos** uralkodója (7 bolygó; Skorpió → Mars,
  Vízöntő → Szaturnusz, Halak → Jupiter) — ugyanaz a `TRAD_DOM` tábla, mint a sorsrészeknél.
- **Havi profekció:** a születésnaptól számolva havonta egy jegy, az éves jegyből indulva
  (1. hónap = az éves jegy). Ez Brennan és a Seven Stars gyakorlata; Ptolemaiosz 28 napos,
  Abu Ma'shar 30 napos, al-Bírúní 13-as osztást használt — ezeket **nem** követjük, a
  születésnap-évforduló a legátláthatóbb.
- **Nincs születési idő:** Firmicus II.27 és Valens IV.11 alapján a **Napból** is lehet
  profektálni (a Nap-profekció Valensnél „rang, kiemelkedés, az apa, nagy emberek" ügyeit
  mutatja). Idő nélkül ezt adjuk, de világosan jelezve, hogy nem az Aszcendensből számolt
  „fő" profekció, hanem annak Nap-alapú helyettese, és a ház-tematika ilyenkor a napjegytől
  számolt egészjegyes házat jelenti.

## 3. Értelmezés — mi attesztált a forrásokban

### 3.1 A profektált ház témája
Valens IV.11: az Aszcendens-profekció „az élet hossza, a testi és szellemi tevékenység"
ügyeit hozza; a Napé a rangot, az apát; a Holdé az egészségi veszélyeket, az anyát; a
Fortunáé a szerencsét és sikert; az MC-é a foglalkozást és megélhetést. A ház témái
(Brennan összefoglalása a hellenisztikus jelentésekről):

| Ház | Az évben előtérbe kerülő ügyek |
|---|---|
| 1 | test, egészség, jellem, megjelenés, önálló újrakezdés — 12, 24, 36, 48, 60 évesen mindig ez |
| 2 | pénz, megélhetés, vagyon |
| 3 | testvérek, tanulás, rövid utak, kommunikáció |
| 4 | szülők, otthon, lakhely, család |
| 5 | gyermekek, alkotás, szerelem, öröm |
| 6 | betegség, sérülés, munka mint kötelesség, alárendeltek |
| 7 | házasság, társ, szerződéses kapcsolatok, nyílt ellenfelek |
| 8 | halál, örökség, mások pénze, válság |
| 9 | utazás, külföld, felsőbb tanulás, hit |
| 10 | hivatás, hírnév, előrelépés, feljebbvalók |
| 11 | barátok, csoportok, szövetségek, remények |
| 12 | veszteség, betegség, elzártság, rejtett ellenségek |

### 3.2 Az év ura natális állapota (ez a személyre szóló rész)
Brennan (ep. 153) és Valens IV.11 együtt: az év minőségét az adja, **hogyan áll az év ura
a születési képletben**:
1. **Szekta** — nappali képletben a Jupiter a legjobb, a Mars a legnehezebb; éjszakaiban a
   Vénusz a legjobb, a Szaturnusz a legnehezebb. Ha az év ura a szektához tartozó jótevő,
   az év könnyebb; ha a szektán kívüli rosszindulatú, nehezebb.
2. **Méltóság** — otthon/felmagasztalva: az úr „szabadon" működik; száműzetés/esés: gyengébb.
3. **Ház** — az év ura natális háza mutatja, *honnan* jön az év fő ügye (2. házbeli úr →
   pénz; 10. házbeli → hivatás). Ez a „transzfer": a profektált ház témája és az úr háza
   összekapcsolódik.
4. **Angularitás** — sarokházban erős, lehanyatlóban gyenge (Valens: „az átadás jelentős,
   akár jótevőkhöz, akár rosszindulatúakhoz, akár sarokhelyekre, akár nem").
5. **Fényszögek** — Jupiter/Vénusz trigonja, szextilje segít; Mars/Szaturnusz kvadrátja,
   szembenállása akadályoz.

### 3.3 A profektált jegyben álló natális bolygók
Valens V.7: ha a profekció olyan jegybe ér, amelyben bolygó áll, **az a bolygó kapja az
átadást**, nem az úr („ha a jegy üres, akkor az uralkodójától számolj tovább"). Brennan:
jótevő a profektált jegyben → gördülékeny év; rosszindulatú → akadályok (szekta és
méltóság enyhíthet). Példája: L. M. Presley 25 évesen (2. házas év) örökölt, mert nappali
képletében a Jupiter állt a 2. házban.

### 3.4 Tranzitok
Három réteg aktiválódik (Brennan): (a) tranzitok **az év urához**; (b) az év ura **saját**
tranzitjai; (c) bármely bolygó tranzitja **a profektált jegyen át**. Valens IV.11: az
átadást a szolárképlettel kell ellenőrizni („nézd meg az évre újraállított képletet,
különösen a bolygók tranzitjait, hasonló-e az alakzat a születésihez").

### 3.5 Valens a jó és rossz évről
IV.11: „ha rosszindulatúak uralják az évet, de a három afetikus pont [Nap, Hold, Asc]
jótékonyan hat, az év — némi kétség, aggodalom és bosszúság után — erőteljes és
kiemelkedő lesz." Tehát az év ura önmagában nem ítélet: az Aszcendens, a Nap és a Hold
profekciója együtt számít. Az appban ezért az Aszcendens-profekció mellé odatesszük a
**Nap- és Hold-profekció** jegyét is (egy-egy sor, tematikával).

## 4. Mit NEM építünk be
- „X. házas év = biztosan Y történik" jövendölést — a hagyomány feltételes (natális állapot).
- A napi profekciót (Paulus 31: naponta egy jegy, a 13. nap újra a hónap jegye) — túl
  finom, és a források sem egységesek.
- Zodiacal releasing — külön technika, külön kutatást kér.

## 5. Hivatkozások
- Riley, M. (ford.): *Vettius Valens, Anthologies* — csus.edu/indiv/r/rileymt
- Paulus Alexandrinus: *Introductory Matters* (Project Hindsight, Greek Track I)
- Firmicus Maternus: *Mathesis* (Holden ford., AFA 2011) II.27, II.29
- Brennan, C.: *Hellenistic Astrology: The Study of Fate and Fortune* (2017)
- theastrologypodcast.com — ep. 153 (Annual Profections) átirat és diák
- sevenstarsastrology.com — „Profections in the Style of Vettius Valens", „Monthly Profections"
