# Időzítés II. — zodiacal releasing, fogyatkozások, lunáris visszatérés

> Három időzítő technika, amelyek a meglévő sorsrész–profekció–szolár vonalat egészítik ki.
> Készült: 2026-09-08. Elv: kutatás → docs → kód ([[kutatas-epites-elott]]).

## A) Zodiacal releasing (aphesis) — Valens IV.4–IV.10

### Források
| Forrás | Mit ad |
|---|---|
| **Vettius Valens**, *Anthologiae* IV.4–IV.10 (Riley-ford.; Schmidt 1996) | az egyetlen fennmaradt ókori leírás, két példaképlettel; a jegyek évei; az „elengedés" a Szellemből (cselekvés, hivatás) és a Fortunából (test, körülmények) |
| **Chris Brennan**, *Hellenistic Astrology* (2017) 18. fej.; The Astrology Podcast 192. adás átirata | a mai rekonstrukció: 360 napos év, 30 napos hónap; L2 ugyanabból a jegyből indul; „a kötés elengedése"; csúcsidőszakok a Fortuna sarkairól; a periódus megítélése |
| kerykeion.net, *Zodiacal Releasing* | a szabályok összefoglalása, a „nem eseményt, hanem hangnemet és intenzitást jelez" megkötés |

### Számítás (rögzített döntések)
- **Évek jegyenként** (a hagyományos úr kis évei): Kos 15, Bika 8, Ikrek 20, Rák 25, Oroszlán 19, Szűz 20, Mérleg 8, Skorpió 15, Nyilas 12, **Bak 27**, **Vízöntő 30**, Halak 12. (Összesen 211.)
- **Kiindulás:** a Szellem Pontjának jegye (hivatás, cselekvés — ezt mutatjuk elsődlegesen); a Fortuna jegye (test, körülmények) másodlagosan. Ha a kettő egy jegyben áll, Brennan szerint a Szellem a következő jegyből indul.
- **1. szint (fejezetek):** a születéstől a kiinduló jegy évei, majd zodiákus sorrendben a következő jegyek. **360 napos év.**
- **2. szint (bekezdések):** minden L1-fejezet a saját jegyéből indul, a jegyek éveit **30 napos hónapokként** adva, zodiákus sorrendben.
- **A kötés elengedése (loosing of the bond):** ha az L2-sorozat egy fejezeten belül visszaérne a fejezet kiinduló jegyéhez, nem oda lép, hanem a **szemközti jegybe ugrik**, és onnan folytatja. Csak a 17 évnél hosszabb fejezetekben (Ikrek, Rák, Oroszlán, Szűz, Bak, Vízöntő) fordul elő. (Brennan; a kerykeion megfogalmazása — „amikor a szemközti jegyet eléri" — az ugrás eredményét írja le, nem a feltételét.)
- **Csúcsidőszakok:** a Fortuna jegyétől számolt 1., 4., 7., 10. egészjegyes hely; a 10. a hivatás csúcsa. L1 és L2 szinten egyaránt.
- 3–4. szint (2,5 napos „hetek", 5 órás „napok") — nem építjük be.

### Értelmezés (Brennan, ep. 192)
A csúcs **aktivitást** jelent, nem minőséget. A periódus minőségét adja: (1) a jegy hagyományos urának natális állapota; (2) a jegyben álló natális bolygók; (3) jótevő/rosszindulatú és szekta. A releasing „fejezeteket" ad, nem eseményt. Az appban: a jelenlegi L1 és L2 (kezdet–vég, úr, csúcs?), a következő kötés-elengedés és csúcs dátuma, és a teljes L1-idővonal táblázatban.

## B) Fogyatkozások a képletben

### Források
| Forrás | Mit ad |
|---|---|
| **Bernadette Brady**, *Predictive Astrology: The Eagle and the Lark* (1992); The Astrology Podcast 119. adás átirata | orbis 2–3°; a hatás a fogyatkozási szezonban (±2 hét) jelentkezik; a csomóponti tengely 12–18 hónapig egy házpárt aktivál; nap- vs holdfogyatkozás; Saros-sorozat; a fogyatkozásra született ember |
| **Rose Lineman**, *Eclipse Interpretation Manual*; **Celeste Teal**, *Eclipses* (2006) | prenatális fogyatkozás (PNE) mint a képlet „szikrája"; ház és bolygó-együttállás |
| Astronomy Engine | `SearchGlobalSolarEclipse`, `SearchLunarEclipse` — a csúcs időpontja és fajtája; a fok a Nap (napfogyatkozás) ill. a Hold (holdfogyatkozás) hosszúsága a csúcskor |

### Rögzített döntések
- **Prenatális napfogyatkozás:** a születés előtti utolsó napfogyatkozás foka, jegye, natális háza, ±3°-on érintett natális bolygó/sarok. Ugyanez a **prenatális holdfogyatkozásra**.
- **Születés fogyatkozás közelében:** ha a születés ±1 napra esik egy fogyatkozástól, külön jelezzük (Brady: „a nagy ciklus energiájában született").
- **A következő 5 év fogyatkozásai:** minden nap- és holdfogyatkozás, amely a natális bolygókat vagy sarkokat ±3°-on együttállással/szembenállással/kvadráttal érinti (Brady orbisa; a lágy fényszögek kimaradnak), a natális házzal. A hatás időablaka: a fogyatkozás ±2 hete (Brady), a házpár aktiválása pedig a csomópont-tranzit idejére.
- A Saros-sorozatok Brady-féle jelentéseit **nem** vesszük át (szerzői anyag; a sorozat születési képletének elemzését kívánná).

## C) Lunáris visszatérés (havi képlet)

### Források
| Forrás | Mit ad |
|---|---|
| **John Townley**, *Lunar Returns* (2003) | a Hold 27,3 naponta visszatér a natális helyére; a képlet a következő holdhónap „érzelmi tájképe"; a Nap és a Hold háza mutatja, hol lesz a hónap fő cselekménye; az ASC jegye a stílus; a Hold fényszögei egyben natális tranzitok |
| Volguine, *La technique des révolutions solaires* (lunáris fejezet) | a havi képlet a szolár alárendeltje: a szolár témáját időzíti |

### Rögzített döntések
- Csak **pontos születési idővel** (a natális Hold ±6° hiba ±12 óra hibát adna a visszatérés idejére).
- Számítás: a Hold hosszúsága = natális Hold hosszúsága, a mostani időpont előtti utolsó visszatérés (Newton-iteráció, 13,18°/nap), a következő visszatérés = a hónap vége. A képlet a születési helyre.
- Kiírjuk: a holdhónap határai, az LR aszcendens jegye (stílus), a Nap és a Hold LR-háza (hol lesz a cselekmény), natális bolygó az LR-sarkokon (±3°), a szolár év témájával összekötve.
