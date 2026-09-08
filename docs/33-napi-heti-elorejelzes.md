# Napi és heti előrejelzés a saját képletre — kutatási jegyzet és modulterv

> A tömeghoroszkóp a 12 napjegyre általánosít; nekünk a teljes születési képlet áll
> rendelkezésre, ezért ugyanazt a mechanikát személyre lehet futtatni. Ez a fejezet a
> hagyomány szabályait gyűjti össze (mit néz a napi/heti horoszkópíró), rögzíti a
> számítási döntéseket, és leírja a külön modul tervét. Készült: 2026-09-08.
> Előzmény: `docs/01` §10 („A napi/heti/havi horoszkóp készítésének logikája").

## 1. Mi hajtja a napi és a heti előrejelzést — a források

| Réteg | Forrás | Mit ad |
|---|---|---|
| **Gyors tranzitok a natális képletre** | Robert Hand, *Planets in Transit* (1976); thalira.com összefoglaló | a napi előrejelzés a Hold és a Merkúr, a heti a Vénusz és a Mars tranzitjaiból áll; orbis gyors bolygóknál 1–3° (Holdnál 1–2°); a közeledő (applying) érintés épít, a pontos a csúcs, a távolodó lecseng; a **sarkokra** eső tranzit a legerősebb; a ház adja az életterületet |
| **A Hold járása** | Dane Rudhyar, *The Lunation Cycle* (1967); Demetra George | a holdfázis 8 szakasza; az újhold kezdés, a telihold beteljesedés/kiengedés; az újhold **natális háza** mutatja, hol indul a havi ciklus |
| **Üresjáratú Hold (void of course)** | William Lilly, *Christian Astrology* (1647) 122. o.; Anthony Louis elemzése (2021); Chris Brennan (hellenisztikus *kenodromia*) | Lilly: „a bolygó üresjáratú, ha elvált egy bolygótól, és a jegyében nem lép rögtön újabb alkalmazásba"; Lilly az **orbison belüli** alkalmazást nézi (akár a következő jegyben pontosul); a modern szabály: nincs több pontos ptolemaioszi fényszög a jegy elhagyása előtt; a hellenisztikus: nincs pontos fényszög a következő 30°-on, jegyhatártól függetlenül. Lilly kivételei: Bika, Rák, Nyilas, Halak — „kevesebb a félnivaló" |
| **A Hold fényszögei mint választási szabály** | William Ramesey, *Astrologie Restored* (1653); Bethem aforizmái Coley-nál (1676); skyscript.co.uk „Electing by the Moon" | a Hold jótevőhöz (Jupiter, Vénusz) alkalmazva kedvez, rosszindulatúhoz (Szaturnusz, Mars) alkalmazva nem; „a választott pillanat harmonizáljon a születési képlettel" |
| **Bolygóórák** | *Picatrix* (10–11. sz.), Agrippa *De occulta philosophia* (1533), kerykeion.net összefoglaló | napkeltétől napnyugtáig 12 egyenlőtlen nappali, napnyugtától napkeltéig 12 éjszakai óra; a **káldeus sorrend** (Szaturnusz, Jupiter, Mars, Nap, Vénusz, Merkúr, Hold); a nap első órájának ura a nap ura (vasárnap Nap … szombat Szaturnusz); a nap napkeltekor kezdődik |
| **Az égi „főcím"** | `docs/01` §10; `docs/11` §12 (retrográd Merkúr) | a heti pontos bolygó–bolygó fényszögek, jegyváltások (ingresszusok), állomások (retrográd fordulók), új-/telihold, fogyatkozás — a **szoláris ház** trükkje helyett nálunk a valódi natális ház |

Amit **nem** találtunk hitelesnek: a „Hold a 12 natális házban" napi jelentés-táblák (cafeastrology-jellegű cikkek) forrás nélküliek — az appban a ház saját jelentéséből (western.houses) írt rövid olvasat lesz, jelölve, hogy származtatott.

## 2. Rögzített számítási döntések

1. **Gyors tranzit-kereső**: Hold (30 perces lépés, majd finomítás percre), Nap–Merkúr–Vénusz–Mars (2 órás lépés). Célpontok: a 10 bolygó, holdcsomó, ASC, MC, IC, DSC. Fényszögek: együttállás, szextil, kvadrát, trigon, szembenállás. **Orbis a listázáshoz:** a pontos beállás időpontját adjuk, az „aktív ablak" Holdnál ±1°, a többinél ±1° (≈ ±1 nap). A már meglévő lassú-tranzit kereső (`findTransits`) érintetlen marad.
2. **A Hold natális háza** a felhasználó házrendszerével (Placidus alapból); idő nélkül egészjegyes ház a napjegytől, ezt jelezve.
3. **Üresjárat**: a **modern** szabályt számoljuk (utolsó pontos ptolemaioszi fényszög a jegyben → a jegyváltásig üresjárat), mert ez a mai naptárakkal egyezik és egyértelmű; a Lilly-féle orbisos változatot lábjegyzetben említjük, a hellenisztikus 30°-os szabályt nem. A tranzit-bolygók egymás közti fényszögei számítanak (nem a natálisak).
4. **Bolygóórák**: Astronomy Engine `SearchRiseSet` a felhasználó helyére (a tartózkodási hely = a születési hely alapból, de a nézetben átállítható); nappali/éjszakai 12–12 óra; a nap ura a hét napjából, az órák a káldeus sorrendben. Sarkkörön túl (nincs napkelte) nem számolunk.
5. **Lunáció**: az aktuális és a következő új-/telihold időpontja, jegye, natális háza, és a natális bolygóhoz 3°-on belüli együttállás/szembenállás (Brady orbisa fogyatkozásnál; itt is ezt használjuk).
6. **Ingresszusok és állomások** a heti ablakban: Nap–Mars jegyváltásai, Merkúr/Vénusz/Mars állomásai (a napi mozgás előjelváltása), melyik natális házban.
7. **Pontozás öt területre** — látható levezetéssel: minden aktív tranzit kap egy súlyt (bolygó × fényszög minősége × a célpont területi tartozása). Területek és célpontjaik: *szerelem* (Vénusz, Hold, 5./7. ház ura és csúcsa), *munka* (MC, Szaturnusz, Nap, 6./10. ház), *pénz* (Jupiter, Vénusz, 2./8. ház), *egészség* (Mars, Nap, ASC, 1./6. ház), *közérzet* (Hold, ASC, Neptunusz). Trigon/szextil +, kvadrát/szembenállás −, együttállás a bolygó természete szerint (jótevő +, rosszindulatú −, semleges 0). Az eredmény 1–5 csillag, és a nézet **kiírja, melyik érintésekből jött össze** — a pontszám nem lehet fekete doboz.
8. **Heti nézet**: 7 nap × 5 terület, a legjobb és a legnehezebb nap kiemelve; a hét eseményei (lunáció, ingresszus, állomás, üresjárat-blokkok) a natális házzal.
9. **Idő nélkül**: nincs ASC/MC/házak → csak a bolygókra eső tranzitok, egészjegyes napjegy-házak; a nézet ezt kimondja.

## 3. Szövegtár (saját megfogalmazás)

- tranzit bolygó (5) × natális célpont (13) × fényszögminőség (3: harmonikus, feszült, együttállás) — sablonos összerakás: *„A tranzit Vénusz trigont zár a Holdaddal (kedd 14:20): …"* — a bolygó-mondat + a célpont-terület + a minőség; nem 195 külön szöveg, hanem 5 + 13 + 3 elem.
- a Hold natális házban (12), újhold/telihold natális házban (12+12), üresjárat (1), bolygóórák (7), ingresszus (5 bolygó × 12 jegy — a jegy alapszövegéből), állomás (3).

## 4. A modul (külön kódmodul, a profil részeként megjelenítve)

- A felhasználó kérésére (2026-09-08) nincs külön nézet és dátumválasztó: az előrejelzés a **profillal együtt** készül el, a tartalom-rácsban **Előrejelzés** kategóriaként (4 szekció), mindig a mai naptól.
- Fájlok: `core/forecast.js` (gyors tranzitok, üresjárat, bolygóórák, lunáció, ingresszus, állomás, pontozás), `core/forecast-sections.js` (a négy szekció összeállítása a profil item/notes/table formájában), `data/forecast.js` (szövegek), tesztek `tests/forecast.test.js`.
- **Ma**: nagy hármas + keret (éves/havi profekció, lunáris hónap), a nap mérlege (5 terület csillaggal + levezetés), a Hold háza és fázisa, üresjárat, a nap érintései időponttal, a bolygók ma a házaidban (aszcendens szerinti olvasat), bolygóóra most.
- **A hét**: napról napra csillagok + a nap érintései + a Hold háza; a hét eseményei (lunáció a házban, ingresszus, állomás, üresjárat).
- **A hónap** (30 nap): a Nap–Mars nyolc legsúlyosabb pontos érintése a képletre, lunációk, ingresszusok, állomások, a gyors bolygók útja a házakban.
- **Az év** (12 hónap): Merkúr-retrográd időszakok házzal; havi tábla — a Nap háza, újhold/telihold háza, lassú tranzitok pontos hónapja (a meglévő keresővel), Mars-ingresszus, állomások; a keret a profekció/szolár/tranzit/fogyatkozás szekciókra mutat.

## 5. Tisztesség

A nézet minden mondata mögött egy konkrét égi esemény és időpont áll, és a szöveg a hagyomány szabályait követi (Hand, Lilly, Ramesey), nem előrejelzést ígér. A pontozás saját, dokumentált súlyozás — ezt a nézet is kimondja. Nem építünk be: horoszkóp-„jóslatot" eseményekre, „szerencseszámot", és nem használjuk a szoláris-ház egyszerűsítést, ha van valódi képlet.

## 6. Hivatkozások
- William Lilly: *Christian Astrology* (1647), I. könyv, 122. o. (void of course); Anthony Louis: „Lilly's definition of the Void of Course Moon" (2021)
- Chris Brennan: *Hellenistic Astrology* (2017) — kenodromia
- William Ramesey: *Astrologie Restored* (1653); Henry Coley: *Key to the Whole Art of Astrology* (1676) — skyscript.co.uk/moonelect.html
- Robert Hand: *Planets in Transit* (1976)
- Dane Rudhyar: *The Lunation Cycle* (1967)
- *Picatrix* (Ghāyat al-Ḥakīm), Agrippa: *De occulta philosophia* II. (1533) — bolygóórák; kerykeion.net „Planetary Hours"
- thalira.com „How to Read Astrology Transits" — orbis-összefoglaló
