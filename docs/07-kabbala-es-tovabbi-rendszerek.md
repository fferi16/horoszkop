# Kabbalisztikus asztrológia és további rendszerek — kutatási referencia

> **Projekt:** Horoszkóp app — a 01–06. dokumentumokban még nem tárgyalt rendszerek feldolgozása.
> **Cél:** referencia apphoz/tartalomgeneráláshoz. Minden rendszernél: eredet, számítási mód a születési adatból, típuslista táblázatban, rövid jellemzések, app-integrálhatóság.
> **Fontos elv:** ahol egy rendszer modern eredetű vagy tudományosan megalapozatlan, azt jelezzük — az appban is érdemes korrekt „szórakoztató/önismereti tartalom" címkével kezelni.

---

## 1. Kabbalisztikus asztrológia (fő fókusz)

### Eredet és források

A zsidó asztrológiai hagyomány több rétegből áll:

- **Talmudi réteg** (i. sz. 3–6. század): a Talmud több helyen tárgyalja a csillagok befolyását. Híres vita a *Sabbat 156a* lapon: egyes bölcsek szerint a születés napja/órája meghatározza a jellemet, mások szerint **„Éin mazal le-Jiszraél"** — „Izraelnek nincs csillagzata", azaz a zsidó nép (ima és jó cselekedetek révén) a csillagbefolyás fölött áll. Ez a kettősség végigkíséri az egész hagyományt.
- **Széfer Jecira** („Az Alkotás könyve", kb. 3–6. század): a kabbala legkorábbi alapszövege. A 22 héber betűt három csoportra osztja — 3 anyabetű (elemek), **7 kettős betű (7 bolygó, 7 nap)**, **12 egyszerű betű (12 állatövi jegy, 12 hónap, 12 törzs, 12 érzék/képesség)**. Ez a zsidó „asztrológiai ábécé" magja.
- **Középkori zsidó asztrológusok**: Abraham ibn Ezra (12. sz.) teljes asztrológiai életművet írt (*Reshit Chokhma* — „A bölcsesség kezdete"); Abraham bar Hijja szintén. Maimonidész (Rambam) viszont határozottan elutasította az asztrológiát mint babonát — a zsidó hagyományon belül tehát sosem volt konszenzus.
- **Zohár és lurianus kabbala** (13–16. sz.): a szefirák, a bolygók és az idő minőségeinek misztikus megfeleltetései.
- **Modern réteg**: a Kabbalah Centre-féle „kabbalisztikus asztrológia" (lásd lejjebb).

### A mazal fogalma

A **mazal** (מזל, többes szám: *mazalot*) szó eredetileg **csillagképet/bolygópályát** jelent; gyökere a „csepegés, áramlás" (*nozel*) képzetéhez kapcsolódik — a felfogás szerint az égi szférákból „csepeg alá" az isteni befolyás (*sefa*) a világba. Ebből lett a köznyelvi „szerencse" jelentés: a **„Mazel tov!"** szó szerint „jó csillagzatot!". Kabbalisztikus értelemben a mazal nem determinisztikus sors, hanem **spirituális csatorna**, amelyen keresztül az ember életenergiát kap — és amely fölé imával, szabad akarattal emelkedni lehet (*Éin mazal le-Jiszraél*).

### A 12 héber hónap — betű — törzs — jegy megfeleltetés (Széfer Jecira alapján)

A héber állatövi jegynevek tartalmilag azonosak a nyugatiakkal (a babiloni közös eredet miatt), de a hónapokhoz kötődnek, nem a Nap pontos fokához. **A születési „jegy" tehát a héber naptári születési hónapból adódik.**

| Héber hónap | Gergely-naptár (kb.) | Betű | Állatövi jegy (héberül) | Törzs* | Érzék/képesség |
|---|---|---|---|---|---|
| Niszán | márc–ápr | ה (hé) | Kos — *Tale* (טלה) | Júda | beszéd |
| Ijár | ápr–máj | ו (váv) | Bika — *Sor* (שור) | Isszachár | gondolkodás/elmélkedés |
| Sziván | máj–jún | ז (zajin) | Ikrek — *Teomim* (תאומים) | Zebulon | járás/haladás |
| Tamuz | jún–júl | ח (chet) | Rák — *Szartan* (סרטן) | Ruben | látás |
| Áv | júl–aug | ט (tet) | Oroszlán — *Arje* (אריה) | Simon | hallás |
| Elul | aug–szept | י (jod) | Szűz — *Betula* (בתולה) | Gád | cselekvés/munka |
| Tisri | szept–okt | ל (lamed) | Mérleg — *Moznajim* (מאזניים) | Efraim | érintés/intimitás |
| Chesván | okt–nov | נ (nun) | Skorpió — *Akráv* (עקרב) | Menase | szaglás |
| Kiszlév | nov–dec | ס (számech) | Nyilas — *Keset* (קשת) | Benjámin | alvás/álom |
| Tévét | dec–jan | ע (ajin) | Bak — *Gdi* (גדי) | Dán | harag (uralása) |
| Svát | jan–febr | צ (cádi) | Vízöntő — *Dli* (דלי) | Áser | ízlelés/evés |
| Ádár | febr–márc | ק (kof) | Halak — *Dagim* (דגים) | Naftáli | nevetés/öröm |

\* A törzs-hozzárendelésnek több hagyománya van (a fenti a pusztai táborrend/Arizal szerinti elterjedt változat; a Vilnai Gáon részben más sorrendet használ). Az appban érdemes ezt lábjegyzetben jelezni.

Rövid hónap-jellemzések (a hagyományos értelmezésekből):

- **Niszán/Kos** — a szabadulás (peszach) és az újrakezdés hónapja; vezetői energia, kezdeményezés.
- **Ijár/Bika** — a gyógyulás és az építkezés hónapja; kitartás, természetes növekedés.
- **Sziván/Ikrek** — a Tóra-adás (sávuot) hónapja; tanulás, kommunikáció, kettősségek egyesítése.
- **Tamuz/Rák** — a „látás kijavításának" hónapja; érzelmi mélység, befelé fordulás, próbatételek.
- **Áv/Oroszlán** — a mélypontból (Templom pusztulása) fölemelkedés hónapja; szív, méltóság, újjáépítés.
- **Elul/Szűz** — az önvizsgálat („a Király a mezőn van") hónapja; elemzés, tökéletesítés, szolgálat.
- **Tisri/Mérleg** — az ítélet és megtérés (ros hásáná, jom kipur) hónapja; egyensúly, mérlegelés.
- **Chesván/Skorpió** — a „keserű" (mar-chesván) hónap ünnepek nélkül; mélység, átalakulás, rejtett erő.
- **Kiszlév/Nyilas** — a fények (hanuka) és az álmok hónapja; bizalom, optimizmus, csodavárás.
- **Tévét/Bak** — a tél mélye; fegyelem, felelősség, a harag jó irányba fordítása.
- **Svát/Vízöntő** — a fák újéve (tu bisvát); áramló tudás, közösség, megújulás.
- **Ádár/Halak** — a fokozódó öröm (purim) hónapja; humor, rejtettség mögötti gondviselés, együttérzés.

### A 7 kettős betű és a bolygók

A Széfer Jecira szerint a 7 „kettős" betű (kétféle kiejtésük van) a **7 klasszikus bolygót, a hét 7 napját és 7 alapvető életminőség-párt** teremti (bölcsesség–balgaság, gazdagság–szegénység, termékenység–terméketlenség, élet–halál, uralom–szolgaság, béke–háború, szépség–rútság).

| Betű | Bolygó (elterjedt rabbinikus verzió) | Nap | Minőség-pár |
|---|---|---|---|
| ב (bét) | Szaturnusz | vasárnap | bölcsesség — balgaság |
| ג (gimel) | Jupiter | hétfő | gazdagság — szegénység |
| ד (dalet) | Mars | kedd | termékenység — terméketlenség |
| כ (kaf) | Nap | szerda | élet — halál |
| פ (pé) | Vénusz | csütörtök | uralom — szolgaság |
| ר (rés) | Merkúr | péntek | béke — háború |
| ת (táv) | Hold | szombat | szépség — rútság |

**Fontos:** a kéziratos hagyományok a bolygó-hozzárendelésben eltérnek (Kaplan a rövid, hosszú és GRA-verziót is közli); a nyugati okkult (Golden Dawn-féle) megfeleltetés megint más (bét=Merkúr, gimel=Hold stb.). App-tartalomban elég egy verziót közölni, forrásmegjelöléssel.

A maradék **3 anyabetű**: א (alef) = levegő, מ (mem) = víz, ש (sin) = tűz — a három elem és három évszak-minőség.

### Az Életfa: 10 szefira és bolygó-megfeleltetések

A kabbalisztikus Életfa (Éc Chajim) 10 szefirája (isteni „kiáradás") a későbbi hagyományban a szférákkal/bolygókkal is összekapcsolódott:

| # | Szefira | Jelentés | Égi megfeleltetés (hagyományos) |
|---|---|---|---|
| 1 | Keter | korona | Első Mozgató (Primum Mobile) |
| 2 | Chochma | bölcsesség | az állócsillagok ege / zodiákus |
| 3 | Bina | értelem | Szaturnusz |
| 4 | Cheszed | szeretet, kegyelem | Jupiter |
| 5 | Gevura | erő, szigor | Mars |
| 6 | Tiferet | szépség, harmónia | Nap |
| 7 | Necach | győzelem, kitartás | Vénusz |
| 8 | Hod | dicsőség, ragyogás | Merkúr |
| 9 | Jeszod | alap, kapcsolódás | Hold |
| 10 | Malchut | királyság | Föld (a megvalósulás világa) |

Ez adja a kabbalisztikus asztrológia „pszichológiai térképét": pl. egy Jupiter-hangsúlyos képlet a Cheszed (nagyvonalúság) minőségét, egy Mars-hangsúlyos a Gevura (fegyelem, határok) leckéjét hozza.

### Gematria: a név számértéke

A gematria a héber betűk számértékén alapuló értelmezési módszer — a kabbalisztikus „numerológia".

| Betű | Érték | Betű | Érték | Betű | Érték |
|---|---|---|---|---|---|
| א alef | 1 | י jod | 10 | ק kof | 100 |
| ב bét | 2 | כ kaf | 20 | ר rés | 200 |
| ג gimel | 3 | ל lamed | 30 | ש sin | 300 |
| ד dalet | 4 | מ mem | 40 | ת táv | 400 |
| ה hé | 5 | נ nun | 50 | | |
| ו váv | 6 | ס számech | 60 | | |
| ז zajin | 7 | ע ajin | 70 | | |
| ח chet | 8 | פ pé | 80 | | |
| ט tet | 9 | צ cádi | 90 | | |

- **Számítás:** a név betűértékeinek összege (pl. חיים *Chajim* „élet" = 8+10+10+40 = **68**). Azonos számértékű szavakat a hagyomány tartalmilag rokonnak tekint (pl. אהבה *ahava* „szeretet" = 13 és אחד *echád* „egy" = 13; együtt 26 = יהוה, az istennév értéke).
- Több módszer létezik: *mispar hechrechi* (standard, fenti), *mispar katan* (számjegyre redukált), *mispar gadol* (a szóvégi betűk 500–900 értékkel) stb.
- **App-felhasználás:** a felhasználó (héber vagy átírt) nevének számértéke + rövid értelmezés; illetve „a te számod rokon szavai" játékos tartalom. Latin betűs névnél átírási táblát kell alkalmazni (ez már interpretáció — jelezni kell).

### A zsidó születésnap (héber naptár szerint)

- A héber naptár **luniszoláris**: a hónapok holdhónapok (29/30 nap), és 19 éves (metoni) ciklusban 7 szökőhónap (Ádár II) tartja szinkronban a napévvel. Az év ~353–385 nap hosszú lehet.
- A **héber születésnap** a héber dátum évfordulója — ez a gergely-naptári születésnaptól évente eltérő napra esik (és 19 évente kb. egybeesik). Hagyományosan ez a spirituálisan „erős" nap (a bar/bat micvát és a jahrzeitet is héber dátum szerint számítják).
- **Fontos részlet:** a héber nap **napnyugtakor kezdődik** — aki napnyugta után született, az már a következő héber napon (adott esetben következő hónapban/jegyben!) született. Az app kérdezze meg a születési órát, vagy jelezze a bizonytalanságot.
- **Számítás appban:** a gergely→héber konverzió jól dokumentált algoritmus (Dershowitz–Reingold: *Calendrical Calculations*); kész könyvtárak: **hebcal** (JS, van npm csomag és REST API), Python `pyluach`/`convertdate`, stb. A héber hónapból azonnal adódik a Széfer Jecira-táblázat teljes sora (betű, jegy, törzs, érzék).

### Modern „Kabbalah asztrológia" vs. hagyományos források

- A **Kabbalah Centre** (Philip Berg és családja alapította, 1960-as évektől; híres követője volt Madonna) népszerűsítette a „kabbalisztikus asztrológia" fogalmát (Rav Berg: *Kabbalistic Astrology* c. könyve). Ez lényegében a **nyugati asztrológia újracsomagolása kabbalisztikus szókinccsel** (a 12 jegy héber hónapokhoz és „tikun"-hoz, lélekjavítási feladathoz kötve).
- A **hagyományos zsidó forrásokban** ilyen kidolgozott „személyi horoszkóp-rendszer" nincs: a Széfer Jecira megfeleltetés-hálót ad, nem születési képletelemzést; a rabbinikus hozzáállás az „Éin mazal le-Jiszraél" és az Ibn Ezra-féle gyakorló asztrológia között mozgott; a Rambam kifejezetten tiltotta.
- **App-tartalomban korrekt megoldás:** a héber születésnap + hónapjegy + betű + törzs + gematria a hagyományos réteg (Széfer Jecira forrásmegjelöléssel); a „lélekfeladat/tikun"-szövegek modern (Kabbalah Centre-típusú) értelmezésként címkézve.

### App-integrálhatóság (kabbala)

- Bemenet: születési dátum (+ óra a napnyugta-szabályhoz). Számítás: naptárkonverzió (kész library) + statikus táblázatok. **Nehézség: alacsony.**
- Kimeneti modulok: héber születésnap (és következő évfordulója — értesítésnek is jó!), hónapjegy + betű + törzs + érzék, bolygó-szefira jellemzés, névgematria.

---

## 2. Arab/perzsa hagyomány

### Eredet

A 8–10. századi Bagdad (Abbászida kalifátus) a világ asztrológiai központja volt: perzsa (szászánida), indiai és görög (hellenisztikus) forrásokat fordítottak arabra és dolgoztak össze. Nagy nevek: **Másáalláh** (a bagdadi városalapítás horoszkópjának készítője), **Abu Masar** (Albumasar — a középkori Európa legidézettebb asztrológusa), **Al-Kindi**, **Al-Bíruni** (enciklopédikus összefoglaló), **Abu Ali al-Khajját**. A 12. századtól latin fordításokban (Toledo) ez az anyag alapozta meg az európai asztrológia újjászületését; a *Picatrix* (Ghájat al-Hakím) a mágikus-talizmános ágat közvetítette.

### A 28 holdház (manázil al-kamar)

Az ekliptika 28 egyenlő, egyenként **12°51'26"**-es szakasza; a születési holdház = amelyikben a Hold állt. (Az iszlám csillagászatban a holdnaptárhoz, az asztrológiában időzítéshez/talizmánokhoz használták; rokon az indiai nakshatra- és a kínai hsziu-rendszerrel.)

| # | Arab név | Jelentés | Kezdete (tropikus) | Hagyományos kulcstéma |
|---|---|---|---|---|
| 1 | As-Saratán | a két jel (kosszarvak) | 0°00' Kos | utazás, kezdés, gyógyszerek |
| 2 | Al-Butajn | a kis has | 12°51' Kos | rejtett dolgok feltárása, harag oldása |
| 3 | Ath-Thurajjá | a Fiastyúk | 25°43' Kos | bőség, hajózás, alkímia |
| 4 | Ad-Dabarán | a követő (Aldebaran) | 8°34' Bika | ellentétek, bosszú — óvatosság napja |
| 5 | Al-Haka | a fehér folt | 21°26' Bika | tanulás, egészség, jóindulat |
| 6 | Al-Hana | a bélyeg/hajlat | 4°17' Ikrek | vadászat, ostrom, szövetség |
| 7 | Adz-Dzirá | a kar | 17°09' Ikrek | nyereség, barátság, termés |
| 8 | An-Nathra | az orrnyereg/jászol | 0°00' Rák | szeretet, barátság, utazók |
| 9 | At-Tarf | a tekintet | 12°51' Rák | ártalom elhárítása — védekező nap |
| 10 | Al-Dzsabha | a homlok | 25°43' Rák | épületek, szerelem, jóakarat |
| 11 | Az-Zubra | a sörény | 8°34' Oroszlán | kereskedelem, foglyok szabadulása |
| 12 | Asz-Szarfa | a fordulat | 21°26' Oroszlán | termés, gyógyulás, változás |
| 13 | Al-Avvá | az ugató | 4°17' Szűz | jóindulat, utazás, aratás |
| 14 | Asz-Szimák | a magasan álló (Spica) | 17°09' Szűz | házastársi szeretet, gyógynövények |
| 15 | Al-Ghafr | a fátyol | 0°00' Mérleg | barátság, kincskeresés |
| 16 | Az-Zubáná | a skorpió ollói | 12°51' Mérleg | kereskedelem akadályai — óvatos nap |
| 17 | Al-Iklíl | a korona | 25°43' Mérleg | hűség, épületek tartóssága |
| 18 | Al-Kalb | a szív (Antares) | 8°34' Skorpió | összeesküvések elhárítása |
| 19 | As-Saula | a fullánk | 21°26' Skorpió | ostrom, foglyok — erő napja |
| 20 | An-Naájm | a struccok | 4°17' Nyilas | állatok szelídítése, gyors utazás |
| 21 | Al-Balda | a város/üresség | 17°09' Nyilas | termés, épületek, válás |
| 22 | Szad adz-Dzábih | az áldozó szerencséje | 0°00' Bak | gyógyulás, szökés/szabadulás |
| 23 | Szad Bula | a nyelő szerencséje | 12°51' Bak | gyógyulás, házasság — vegyes nap |
| 24 | Szad asz-Szuúd | a szerencsék szerencséje | 25°43' Bak | a legkedvezőbb ház: siker, áldás |
| 25 | Szad al-Ahbija | a sátrak szerencséje | 8°34' Vízöntő | ostrom, bosszú — védelem kérdése |
| 26 | Al-Fargh al-Mukaddam | a korsó első kiöntője | 21°26' Vízöntő | egyesülés, szerelem, jóakarat |
| 27 | Al-Fargh al-Muahhar | a korsó hátsó kiöntője | 4°17' Halak | nyereség, termés, gyógyítás |
| 28 | Batn al-Hút / Ar-Risá | a hal hasa / a kötél | 17°09' Halak | termés, kereskedelem, házasság |

*(A kezdőfokok kerekítettek; a kulcstémák a Picatrix/középkori talizmán-hagyomány szerintiek. Létezik csillagképhez rögzített — sziderikus — számítási változat is; app-ban a tropikus egyenlő osztás a praktikus.)*

### Arab pontok (érzékeny pontok, „Lots")

Származtatott pontok: három képletelem (jellemzően Aszcendens + bolygó − bolygó) összege az ekliptikán. Náluk nem áll égitest, mégis a hagyomány kiemelt jelentőséget tulajdonít nekik. **Nappali születésnél** (Nap a horizont felett) és **éjszakainál** a képlet legtöbbször felcserélődik.

| Pont | Nappali képlet | Éjszakai képlet | Témája |
|---|---|---|---|
| **Pars Fortunae** (Szerencsepont) | Asc + Hold − Nap | Asc + Nap − Hold | testi jólét, szerencse, „hol áramlik az élet" |
| Pars Spiritus (Szellem pontja) | Asc + Nap − Hold | Asc + Hold − Nap | szellemi célok, hivatás, akarat |
| Erósz pontja (szerelem) | Asc + Vénusz − Spiritus | Asc + Spiritus − Vénusz | vágy, vonzalom |
| Szükség pontja (Merkúr) | Asc + Fortuna − Merkúr | Asc + Merkúr − Fortuna | kényszerek, küzdelmek |
| Bátorság pontja (Mars) | Asc + Fortuna − Mars | Asc + Mars − Fortuna | merészség, konfliktus |
| Győzelem pontja (Jupiter) | Asc + Jupiter − Spiritus | Asc + Spiritus − Jupiter | siker, bizalom |
| Nemezis pontja (Szaturnusz) | Asc + Fortuna − Szaturnusz | Asc + Szaturnusz − Fortuna | rejtett gyengeség, lezárás |

A számolás fokokban, modulo 360 történik (pl. Fortuna = (Asc° + Hold° − Nap°) mod 360). Al-Bíruni közel száz, a hagyomány összesen több száz pontot katalogizált (házasság, gyermekek, betegség, utazás pontja stb.).

### Örökség

A középkori arab asztrológia adta a nyugati asztrológia szakszókincsének jelentős részét (pl. *zenit, nadír, azimut*; a csillagnevek többsége — Aldebaran, Algol, Deneb — arab), az elekciós/hórari módszertant és az arab pontok technikáját, amely ma is minden komoly asztrológiai szoftver része.

### App-integrálhatóság (arab)

- Holdház: kell a Hold ekliptikai hossza (efemerida — ha az app már számol nyugati képletet, ingyen van); onnan `floor(hold_hossz / 12,857°)`. **Nehézség: alacsony** (efemerida birtokában).
- Arab pontok: kell Asc (pontos idő+hely) + Nap/Hold/bolygó-pozíciók; a képletek triviálisak. **Nehézség: közepes** (a pontos születési idő miatt).

---

## 3. Burmai Mahabote

### Eredet

Mianmari (burmai) rendszer, hindu (navagraha — 9 égitest) alapokon, buddhista és helyi elemekkel. Neve kb. „kis kulcs/kis horoszkóp". A burmai kultúrában máig élő: a gyerek **nevének kezdőbetűjét is hagyományosan a születés hétnapja határozza meg**, és a pagodákban mindenki a saját „születésnapi sarkánál" (planetary post) mutat be virág- és vízáldozatot.

### Számítás — a legegyszerűbb rendszer

**Csak a születési dátum kell**: a hét napja adja a jegyet, egyetlen kivétellel — a **szerda kettéválik**: délelőtt (0:00–12:00) Merkúr, délután (12:00–24:00) **Ráhu** uralja. Így lesz 7 napból 8 jegy. (A hét napja Zeller-kongruenciával vagy bármely dátumfüggvénnyel számítható; szerdai születésnél a napszakot meg kell kérdezni.)

### A 8 jegy

| Nap | Égitest | Állat | Égtáj (pagodában) | Rövid jellemzés |
|---|---|---|---|---|
| vasárnap | Nap | garuda (mitikus madár) | ÉK | méltóságteljes, nagylelkű, büszke; vezetésre termett |
| hétfő | Hold | tigris | K | intelligens, intuitív, türelmes; érzékeny és céltudatos |
| kedd | Mars | oroszlán | DK | becsületes, szenvedélyes, bátor; lobbanékony |
| szerda de. | Merkúr | agyaras elefánt | D | kedves, humoros, kommunikatív; szétszórtságra hajlamos |
| szerda du. | Ráhu | agyar nélküli elefánt | ÉNy | titokzatos, erős akaratú, sikerorientált; szélsőségekre hajlamos |
| csütörtök | Jupiter | patkány | Ny | bölcs, tanult, jóindulatú; mentor-alkat |
| péntek | Vénusz | tengerimalac (mórmalac) | É | művészi, szerethető, békeszerető; konfliktuskerülő |
| szombat | Szaturnusz | nága (sárkánykígyó) | DNy | komoly, kitartó, erős jellem; magányos küzdő |

*(A ráhu a hindu asztrológia „árnyékbolygója" — a hold-csomópont; nem valódi égitest.)*

### App-integrálhatóság (Mahabote)

**Triviális**: dátum → hét napja; egyetlen elágazás a szerdai napszakra. Népszerű, vizuálisan hálás (állatok + égtájak). A teljes Mahabote-horoszkóp (7 házas bolygótábla a burmai év számából) is számítható tisztán aritmetikával, de app-MVP-nek a 8 jegy bőven elég.

---

## 4. Nyugat-afrikai (akan/ghánai) születésnap-nevek — kra din

### Eredet

Az **akan** népek (Ghána, Elefántcsontpart: asanti, fanti, akuapem stb.) hite szerint minden ember lelket (**kra**) kap a Teremtőtől, és a lélek „minősége" a születés hétnapjától függ. Ezért minden gyermek automatikusan kap egy **kra din** („lélek-név", hétnapnév) nevet. A rendszer a diaszpórában is ismert (Jamaicán, Suriname-ban is továbbélt). Híres viselői: **Kwame** Nkrumah (szombaton született), **Kofi** Annan (pénteken).

### Számítás

**Csak a dátum kell** → hét napja → név (nem szerint). Ennél egyszerűbb rendszer nincs.

### A nevek és jellemzésük

| Nap | Férfinév (változatok) | Női név (változatok) | A nap lélek-minősége |
|---|---|---|---|
| hétfő | Kwadwo / Kojo / Kwadjo | Adwoa / Adjoa | béke, nyugalom; békéltető alkat |
| kedd | Kwabena / Kobina / Kobi | Abena / Araba | óceán, tűz; kezdeményező, bátor |
| szerda | Kwaku / Kweku | Akua / Ekua | a pók (Ananszi); ravasz, gyors észjárású |
| csütörtök | Yaw / Kwaw | Yaa / Aba | föld; bátor, kitartó, megbízható |
| péntek | Kofi | Afua / Afia / Efua | termékenység; vándorló, kalandvágyó, kreatív |
| szombat | Kwame / Kwamena | Ama / Amma | a Teremtő napja; bölcs, öreg lélek |
| vasárnap | Kwasi / Kwesi / Akwasi | Akosua / Esi | világegyetem/nap; védelmező, tiszta szívű |

A rendszerhez tartoznak jellemrajz-melléknevek (*mmrane*, „appellation") is, pl. a hétfői *Okoto* („krokodil" — nyugodt erő). A jellemzések hagyomány- és forrásfüggőek — az appban „népi hagyomány" címkével közlendők.

### App-integrálhatóság (akan)

**Triviális** (dátum → hét napja + nem). Nagyon jó „megosztható" tartalom: „A te akan neved: Ama". Érdemes a kiejtést is jelezni.

---

## 5. 9 csillag ki (kyūsei kigaku) és a Kua-szám

### Eredet

Japánban rendszerezett (kyūsei kigaku, „kilenc csillag tana"), de kínai gyökerű rendszer: a **Lo Shu bűvös négyzet** 9 száma + az öt elem + a nyolc trigram. A feng shui „repülő csillag" iskolájával közös tőről fakad; Japánban a 20. század elején vált tömegesen népszerűvé (Sonoda Shinjiro nyomán).

### Számítás — fő szám (honmeisei) a születési évből

1. **Évkezdet:** a 9 csillag ki éve **február 4-én** (setsubun/lichun) kezdődik — a január 1. és február 3. között születettek az **előző évhez** tartoznak!
2. Add össze az évszám számjegyeit, redukáld egyjegyűre. Példa: 1984 → 1+9+8+4 = 22 → 2+2 = 4.
3. **Fő szám = 11 − eredmény** (ha 10 felett lenne, redukáld újra; képletként: `szám = 11 − digitgyök(év)`, azaz modulóval: `szám = ((11 − (év_digitgyök)) − 1) mod 9 + 1`). Példa: 1984 → 11−4 = **7**.

(A teljes rendszer három számot használ: év = fő szám, hónap = érzelmi szám, a kettőből származtatott „energia-szám"; app-MVP-nek a fő szám elég.)

### A 9 típus

| Szám | Elem — kép | Trigram | Rövid jellemzés |
|---|---|---|---|
| 1 | Víz | Kan (víz) | mély, alkalmazkodó, önálló; a felszín alatt erős |
| 2 | Föld | Kun (föld) | gondoskodó, támogató, kitartó; a csapat „talaja" |
| 3 | Fa (mennydörgés) | Csen | úttörő, energikus, türelmetlen; gyors indulás |
| 4 | Fa (szél) | Szun | harmonikus, meggyőző, befolyásolható; jó közvetítő |
| 5 | Föld (középpont) | — | erős vezéregyéniség, szélsőségek; mindenki hozzá igazodik |
| 6 | Fém (ég) | Csien | méltóságteljes, elvhű, tekintélyes; született szervező |
| 7 | Fém (tó) | Tuj | sziporkázó, élvezetkedvelő, meggyőző kommunikátor |
| 8 | Föld (hegy) | Ken | csendes erő, kitartás, forradalmi fordulatok |
| 9 | Tűz | Li | ragyogó, szenvedélyes, látható; hírnév és lelkesedés |

### Kua-szám (feng shui, „gua") — képlet férfira/nőre

A személyes szerencseirányokat adó szám, ugyanabból a Lo Shu logikából:

- Add össze a születési év utolsó két számjegyét, redukáld egyjegyűre (x). (Kínai újév/febr. 4. előtti születésnél előző év!)
- **Férfi:** 10 − x (2000-től születetteknél 9 − x).
- **Nő:** x + 5, egyjegyűre redukálva (2000-től x + 6).
- **Ha 5 jön ki** (nincs 5-ös kua): férfinál 2, nőnél 8.
- **Keleti csoport:** 1, 3, 4, 9 — **nyugati csoport:** 2, 6, 7, 8; ebből adódnak a kedvező égtájak (pl. alvás/munka iránya).

### App-integrálhatóság (9 csillag ki)

**Triviális aritmetika** (egyetlen figyelmeztetés: febr. 4-i évhatár). A 9 típus + kua-irányok jól tálalható, a feng shui-érdeklődő közönségnek vonzó.

---

## 6. Skandináv rúna-„horoszkóp" (modern)

### Eredet — modern konstrukció!

A vikingeknek **nem volt születési rúna-rendszere** — ez 20. századi (elsősorban Nigel Pennick és az ezoterikus könyvpiac által népszerűsített) konstrukció: az Elder Futhark 24 rúnáját fél-havonként ráosztották az évkörre (a történelmi rúnanaptárak — primstav — más műfaj: öröknaptárak voltak, nem horoszkópok). Az appban **kötelező a „modern rendszer" címke** — de népszerű, keresett tartalom.

### Számítás

Csak dátum kell: a lenti táblázatból kikeresés. Az év a nyári napfordulónál, **Fehuval (jún. 29.)** indul, minden rúna ~15 napot ural. (A határnapok forrásonként ±1 napot ingadozhatnak.)

### A 24 rúna fél-havi beosztása

| Rúna | Időszak | Jelentés — kulcstéma |
|---|---|---|
| Fehu ᚠ | jún. 29. – júl. 13. | jószág/vagyon — bőség, mozgásban lévő érték |
| Uruz ᚢ | júl. 14. – júl. 28. | őstulok — nyers erő, egészség, kitartás |
| Thurisaz ᚦ | júl. 29. – aug. 12. | óriás/tövis — védekező erő, áttörés |
| Ansuz ᚨ | aug. 13. – aug. 28. | isteni szó (Odin) — kommunikáció, bölcsesség |
| Raidho ᚱ | aug. 29. – szept. 12. | kerék/lovaglás — utazás, saját ritmus |
| Kenaz ᚲ | szept. 13. – szept. 27. | fáklya — tudás, alkotó tűz |
| Gebo ᚷ | szept. 28. – okt. 12. | ajándék — csere, partnerség, nagylelkűség |
| Wunjo ᚹ | okt. 13. – okt. 27. | öröm — harmónia, beteljesülés |
| Hagalaz ᚺ | okt. 28. – nov. 12. | jégeső — próbatétel, radikális tisztulás |
| Nauthiz ᚾ | nov. 13. – nov. 27. | szükség — korlátból születő erő |
| Isa ᛁ | nov. 28. – dec. 12. | jég — mozdulatlanság, koncentráció |
| Jera ᛃ | dec. 13. – dec. 27. | évkör/aratás — türelem meghozza gyümölcsét |
| Eihwaz ᛇ | dec. 28. – jan. 12. | tiszafa — állhatatosság, átalakulás |
| Perthro ᛈ | jan. 13. – jan. 27. | sorspohár — titok, sors, játék |
| Algiz ᛉ | jan. 28. – febr. 12. | jávorszarvas/sás — védelem, magasabb kapcsolat |
| Sowilo ᛊ | febr. 13. – febr. 26. | Nap — siker, életerő, irány |
| Tiwaz ᛏ | febr. 27. – márc. 13. | Tyr isten — igazság, áldozatkész bátorság |
| Berkano ᛒ | márc. 14. – márc. 29. | nyírfa — újjászületés, gondoskodás |
| Ehwaz ᛖ | márc. 30. – ápr. 13. | ló — bizalom, együttműködés, haladás |
| Mannaz ᛗ | ápr. 14. – ápr. 28. | ember — közösség, önismeret |
| Laguz ᛚ | ápr. 29. – máj. 13. | víz — intuíció, áramlás, érzelmek |
| Ingwaz ᛜ | máj. 14. – máj. 28. | Ing isten/mag — belső érlelés, potenciál |
| Othala ᛟ | máj. 29. – jún. 13. | örökség/otthon — gyökerek, hagyaték |
| Dagaz ᛞ | jún. 14. – jún. 28. | nappal — áttörés, fény, új kezdet |

### App-integrálhatóság (rúna)

**Triviális** (dátum-intervallum lookup). A rúnajel maga (Unicode-ban létezik: ᚠᚢᚦ…) erős vizuális elem. Modern eredet jelzése kötelező.

---

## 7. Szláv „csertog"-kerék (modern rodnover rendszer)

### Eredet — modern konstrukció!

A „Szvarog köre" (Szvarozsij krug) 16 „csertogból" (палата/csarnok) álló évkör az **Ynglizmus** nevű orosz újpogány (rodnover) mozgalomból származik, amelyet **Alekszandr Hinyevics** alapított Omszkban az 1990-es években; „ősi szláv-árja védikus" eredete **nem igazolható, a tudomány modern kitalációnak tartja** (a mozgalom Oroszországban jogilag is vitatott). Az interneten ennek ellenére népszerű „szláv horoszkópként" terjed. **App-ban csak egyértelmű „modern, vitatott eredetű" címkével!**

### Számítás és a 16 csertog

Dátum-intervallum lookup (16 × ~22–23 nap; a határok forrásonként pár napot eltérnek):

| # | Csertog | Kb. időszak | Védnök istenség | Szent fa |
|---|---|---|---|---|
| 1 | Szűz (Gyeva) | aug. 28. – szept. 20. | Dzsiva | alma |
| 2 | Vadkan (Vepr) | szept. 20. – okt. 12. | Ramhat | körte |
| 3 | Csuka (Scsuka) | okt. 12. – nov. 3. | Rozsana | szilva |
| 4 | Hattyú (Lebegy) | nov. 3. – nov. 24. | Makos | fenyő |
| 5 | Kígyó (Zmej) | nov. 24. – dec. 17. | Szemargl | hárs |
| 6 | Holló (Voron) | dec. 17. – jan. 8. | Varuna | vörösfenyő |
| 7 | Medve (Medvegy) | jan. 8. – febr. 1. | Szvarog | bükk |
| 8 | Gólya (Buszl) | febr. 1. – febr. 25. | Rod | fűz |
| 9 | Farkas (Volk) | febr. 25. – márc. 22. | Velesz | nyár(fa) |
| 10 | Róka (Lisza) | márc. 22. – ápr. 15. | Marena | ribiszke |
| 11 | Őstulok (Tur) | ápr. 15. – máj. 7. | Krisenv | rezgő nyár |
| 12 | Jávorszarvas (Losz) | máj. 7. – máj. 30. | Lada | nyír |
| 13 | Finist sólyom | máj. 30. – jún. 21. | Visenv | meggy |
| 14 | Ló (Kony) | jún. 21. – júl. 13. | Kupala | szil |
| 15 | Sas (Orjol) | júl. 13. – aug. 4. | Perun | tölgy |
| 16 | Fehér párduc (Rasz) | aug. 4. – aug. 28. | Tarh (Dazsbog) | kőris |

Jellemzések a szokásos sémában (állat-analógia: a Farkas független és hűséges, a Medve erős gazda-alkat stb.).

### App-integrálhatóság (csertog)

Triviális lookup; kelet-európai közönségnél lehet kereslet rá, de a **forráskritikai címke elhagyhatatlan**, és a mozgalom ideológiai holdudvara miatt megfontolandó, hogy egyáltalán bekerüljön-e. Ha igen: csak a semleges állat/fa/évkör tartalom, az „árja védák" narratíva nélkül.

---

## 8. Thai asztrológia (röviden)

### A hét napjának színei és Buddha-pózai

A thai hagyományban (hindu navagraha-alapon) minden naphoz szín, égitest és Buddha-szobor-póz tartozik; a születés napja („milyen színű napon születtél") a thai hétköznapi kultúra része — a szerda itt is kettéválik (éjszakai fele Ráhué).

| Nap | Szín | Égitest | Buddha-póz |
|---|---|---|---|
| vasárnap | piros | Nap | álló, szemlélődő Buddha (7 napig a bódhifát nézi) |
| hétfő | sárga (krémszín) | Hold | békéltető Buddha (felemelt kézzel csillapít) |
| kedd | rózsaszín | Mars | fekvő (nirvánába térő) Buddha |
| szerda (nappal) | zöld | Merkúr | alamizsnás-szilkés Buddha |
| szerda (éjjel) | szürkés-zöld/fekete | Ráhu | erdei elvonulás Buddhája (majom és elefánt táplálja) |
| csütörtök | narancs | Jupiter | meditáló (lótuszülésű) Buddha |
| péntek | világoskék | Vénusz | töprengő Buddha (mellkason keresztezett karok) |
| szombat | lila | Szaturnusz | nága-kígyó védte, trónoló Buddha |

A templomokban a hívők a saját születésnapi Buddha-szobruknál adakoznak; a születésnap színének viselése szerencsehozó (a néhai Bhumibol király hétfői születése miatt sárga volt az „uralkodói" szín).

### Thai zodiákus

A 12 állatéves kör lényegében a kínaival azonos (thai nevekkel; a sárkány éve helyett „nagy kígyó/nága" — *marong*), de a **thai állatöv éve hagyományosan Szongkránkor, április 13-án** (illetve egyes számításokban a thai holdújévkor) **vált** — nem a kínai holdújévkor. A januári–áprilisi születésűeknél ezért a thai és a kínai állatjegy eltérhet.

### App-integrálhatóság (thai)

A napszín + Buddha-póz triviális (dátum → hét napja, szerdánál napszak); az állatjegy a már meglévő kínai modul évhatár-variánsaként (ápr. 13.) olcsón hozzáadható.

---

## 9. Születési holdfázis mint önálló rendszer

### Alap

A Nap–Hold szögtávolság (elongáció) a születés pillanatában: a 29,53 napos szinodikus ciklus 8 × 45°-os fázisra osztva. A modern (Dane Rudhyar *The Lunation Cycle* c. művére visszamenő) asztrológiai értelmezés szerint a születési holdfázis „életfeladat-típust" ad. Appokban (Co–Star, Moonly stb.) az egyik legnépszerűbb, mert **egyetlen jól ismert csillagászati tényen** alapul és szép vizuális.

### Számítás

`elongáció = (Hold_hossz − Nap_hossz) mod 360` → 45°-os sávok. Efemerida nélkül is jól közelíthető (ismert újhold-epochától a szinodikus periódussal), de ha az app már számol bolygópozíciót, pontos.

### A 8 típus

| Fázis | Elongáció | Kulcsszavas jellemzés |
|---|---|---|
| Újhold | 0°–45° | ösztönös kezdeményező; szubjektív, spontán, úttörő |
| Növekvő sarló | 45°–90° | küzdő építkező; a múlt lehúzó erőivel szemben tör előre |
| Első negyed | 90°–135° | cselekvő válságkezelő; döntésképes, struktúrákat épít |
| Növekvő domború | 135°–180° | tökéletesítő elemző; céltudatos, mindig „miért?"-et kérdez |
| Telihold | 180°–225° | tudatosító; kapcsolatokban látja meg önmagát, objektivitás |
| Fogyó domború (szétosztó) | 225°–270° | tanító, „magvető"; a megszerzett tudást továbbadja |
| Utolsó negyed | 270°–315° | rendszerváltó; belső átértékelés, régi keretek lebontása |
| Balzsamos (öreg) hold | 315°–360° | lezáró-látnok; múlt és jövő közti közvetítő, magvak a következő ciklusnak |

### App-integrálhatóság (holdfázis)

**Nagyon erős jelölt**: könnyen számítható, vizuálisan látványos (holdikon), trendi, és jól kombinálható napi tartalommal („ma a te fázisod tér vissza — holdfázis-születésnap havonta!").

---

## 10. Szabian szimbólumok (röviden)

- **Eredet:** 1925, San Diego — **Marc Edmund Jones** asztrológus és **Elsie Wheeler** látnok egyetlen ülés-sorozatban 360 kártyára kapott képet rögzített: a zodiákus **mind a 360 fokához egy-egy szimbolikus kép** tartozik (pl. Kos 1°: „Egy nő emelkedik ki a tengerből, fóka öleli át"). **Dane Rudhyar** *An Astrological Mandala* (1973) című könyve tette világhírűvé, ma a modern asztrológia bevett eszköze.
- **Számítás:** bármely képlet-elem (leggyakrabban a Nap) fokszáma **felfelé kerekítve** adja a szimbólum sorszámát (Nap 15°01' Bika = Bika 16. szimbóluma). Nap-fokhoz elég a születési dátum (+idő a pontos fokhoz).
- **App-felhasználás:** 360 soros JSON (jegy, fok, szimbólum szövege, rövid értelmezés) — „a születésnapod szimbóluma" modul; napi tartalomként is jó („a mai Nap-fok szimbóluma"). A szöveg magyar fordítását egyszer kell elkészíteni. **Nehézség: alacsony**, tartalomigénye közepes (360 értelmezés).

---

## 11. Rövid kitekintés: draconic, karmikus, aszteroidák

- **Drakonikus (draconic) horoszkóp:** minden képletelem hosszából kivonjuk a felszálló holdcsomópont hosszát, így **a csomópont lesz 0° Kos** (`drakonikus_hossz = (tropikus_hossz − felszálló_csomópont) mod 360`). Az így kapott „lélek-képletet" a karmikus irányzatok a mélyebb, „előző életbeli" mintázat térképeként olvassák. Számítás: ha van efemerida, egyetlen kivonás.
- **Karmikus asztrológia (holdcsomópontok):** a felszálló (északi) csomópont jegye/háza = fejlődési irány, a leszálló (déli) = hozott, túlfejlett minták. A csomópont-tengely ~18,6 év alatt kerüli meg (retrográd) a zodiákust, tehát a jegy évekre táblázatosan is megadható — **efemerida nélkül is közelíthető**. Appban népszerű „életfeladat" modul.
- **Aszteroidák:** a négy klasszikus — **Ceres** (gondoskodás, táplálás), **Pallas** (stratégia, kreatív intelligencia), **Juno** (elköteleződés, párkapcsolati minta), **Vesta** (odaadás, fókusz, „szent láng") — jegy-pozíciója modern appok (pl. Co–Star, Chani) kedvelt kiegészítője. Számításukhoz efemerida kell (a **Swiss Ephemeris** mind a négyet tudja), onnan költségük nulla.

---

## 12. FRISSÍTETT AJÁNLÁS az apphoz

Priorizálás **számíthatóság** (kell-e efemerida/pontos idő) és **népszerűség/tálalhatóság** szerint:

| Prio | Rendszer | Bemenet | Számítás | Megjegyzés |
|---|---|---|---|---|
| ★★★ | **Születési holdfázis** | dátum (+idő a pontossághoz) | triviális/közelítő képlet | trendi, látványos, napi tartalomra is jó |
| ★★★ | **Mahabote (burmai)** | dátum (+szerdánál napszak) | **triviális** (hét napja) | 8 állatjegy, egzotikus, vizuális |
| ★★★ | **Akan kra din** | dátum + nem | **triviális** (hét napja) | „a te akan neved" — erősen megosztható |
| ★★★ | **9 csillag ki + Kua-szám** | év (+febr. 4. határ), Kuához nem | **triviális** aritmetika | feng shui közönségnek vonzó |
| ★★☆ | **Thai napszín + Buddha-póz** | dátum (+szerdánál napszak) | **triviális** | jól kombinálható a Mahabotéval (közös hétnap-logika) |
| ★★☆ | **Héber születésnap + kabbala-jegy** | dátum (+óra a napnyugtához) | naptár-library (hebcal) + lookup | egyedi tartalom: betű, törzs, gematria, héber szülinap-értesítő |
| ★★☆ | **Rúna fél-hónap** | dátum | triviális lookup | modern eredet címkével; erős vizuál (ᚠ) |
| ★★☆ | **Szabian szimbólum** | dátum (+idő a pontos fokhoz) | Nap-fok + 360-as lookup | 360 szöveg egyszeri fordítása kell |
| ★☆☆ | **28 arab holdház** | Hold-pozíció (efemerida) | egy osztás, ha van efemerida | a meglévő nyugati modul olcsó bővítése |
| ★☆☆ | **Arab pontok (Fortuna…)** | pontos idő + hely | egyszerű képletek, de Asc kell | haladó/prémium tartalomnak |
| ★☆☆ | **Holdcsomópont/karmikus, draconic, aszteroidák** | efemerida | egyszerű, ha van efemerida | prémium „mélyelemzés" csomagba |
| ⚠ | **Szláv csertog** | dátum | triviális lookup | csak erős forráskritikai címkével; ideológiai kockázat |

**Kulcs-tanulság:** a **hét-napja alapú rendszerek (Mahabote, akan kra din, thai napszín) és a holdfázis / 9 csillag ki gyakorlatilag nulla számítási költségűek** — nem kell hozzájuk efemerida, időzóna-kezelés vagy pontos születési óra (a szerdai napszakot leszámítva), mégis teljes értékű, egzotikus „horoszkóp-élményt" adnak. Ezek ideálisak első kiegészítő modulnak. A kabbalisztikus modul a legnagyobb tartalmi mélységű újdonság (héber szülinap-értesítéssel retenciós funkció is), az efemeridát igénylő tételek pedig a már megépített nyugati számítási magra fillérekből ráépíthetők.

---

## Források (válogatás)

- Aryeh Kaplan: *Sefer Yetzirah — The Book of Creation in Theory and Practice* (Weiser, 1997) — a 12+7+3 betű megfeleltetései, verziókkal
- Sefaria.org: Sefer Yetzirah szövege és Sabbat 156a (talmudi mazal-vita)
- GalEinai / inner.org: a héber hónapok Széfer Jecira-megfeleltetései (betű, jegy, törzs, érzék)
- Arnemancy: *Seeking Astrology in Traditional Kabbalah* — a hagyományos és modern kabbala-asztrológia viszonya
- hebcal.com — héber naptár-konverzió (API, npm)
- Al-Bíruni: *The Book of Instruction in the Elements of the Art of Astrology* (1029) — arab pontok, holdházak
- *Picatrix* (Ghájat al-Hakím) — a 28 manzil talizmános jelentései
- Wikipedia: *Burmese zodiac*; WOFS.com és Go Myanmar Tours — Mahabote jegyleírások
- LearnAkan.com, BrowseGhana, NKENNE blog — akan kra din névtáblázatok és jelentések
- LoveToKnow / prokerala.com — Kua-szám képlet; Intuitive Concepts — 9 csillag ki számítás
- Nigel Pennick: *Runic Astrology* (1990) — a rúna fél-hónapok modern rendszere; Vogue Scandinavia, wayoftherunes.com — dátumtáblák
- Encyclopedia MDPI: *Ynglism* — a szláv-árja naptár (csertogok) modern eredete
- Wikipedia: *Colors of the day in Thailand*; amazing-bangkok.com — thai napszínek és Buddha-pózok
- Dane Rudhyar: *The Lunation Cycle* (1967) — a 8 holdfázis-típus; *An Astrological Mandala* (1973) — Szabian szimbólumok
- Swiss Ephemeris (astro.com) — bolygó-, csomópont- és aszteroida-számítás
