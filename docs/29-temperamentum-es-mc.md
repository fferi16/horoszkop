# Nedvtani alkat (temperamentum) és az MC — kutatási jegyzet

> Feladatlista 4. pont: a „Nyugati asztrológia" szekció Temperamentum, MC és Holdjegy tétele
> általános volt. Készült: 2026-09-08.

## 1. Temperamentum — miért nem a napjegy eleme

A régi appverzió a napjegy eleméből írta ki az alkatot („Halak → flegmatikus"). Ez a
tömeghoroszkóp-egyszerűsítés; a hagyományban a temperamentum **a képlet több tényezőjének
összegzése**, és tipikusan kevert eredményt ad.

### Források
| Forrás | Mit ad |
|---|---|
| **William Lilly**, *Christian Astrology* (1647), III. könyv | az érett módszer: Aszcendens és ura, a Hold és a rá tekintő bolygók, a Nap évszaka, a geniture ura |
| **Dorian Gieseler Greenbaum**, *Temperament: Astrology's Forgotten Key* (2005) | a mai szabvány pontozás (Lilly, Saunders, Culpeper alapján) |
| **John Frawley** (*The Real Astrology Applied*), augurine.com temperament calculator | ötpontos változat (Asc, Asc ura, Nap évszak szerint, Hold, geniture ura), fázis súly nélkül |
| Ptolemaiosz, *Tetrabiblos* I.4 | a bolygók minőségei (Vénusz: melegítő-nedvesítő) |

### A beépített pontozás (Greenbaum súlyai)
| Tényező | Minőség forrása | Pont |
|---|---|---|
| A születés **évszaka** (a Nap jegyéből: Kos–Ikrek tavasz, Rák–Szűz nyár, Mérleg–Nyilas ősz, Bak–Halak tél; déli féltekén fordítva) | tavasz meleg-nedves, nyár meleg-száraz, ősz hideg-száraz, tél hideg-nedves | 2 |
| Az **Aszcendens jegye** | elem: tűz meleg-száraz, föld hideg-száraz, levegő meleg-nedves, víz hideg-nedves | 2 |
| A **Hold jegye** | elem | 2 |
| Az **Aszcendens ura** (hagyományos) | bolygó természete: Nap és Mars meleg-száraz, Hold hideg-nedves, Merkúr hideg-száraz, Vénusz és Jupiter meleg-nedves, Szaturnusz hideg-száraz | 1 |
| A **születési holdfázis** (Lilly negyedei) | újhold→I. negyed meleg-nedves; →telihold meleg-száraz; →III. negyed hideg-száraz; →újhold hideg-nedves | 1 |
| A **Hold diszpozitorának** jegye | elem | 1 |
| Az Aszcendens almutenje | — **kihagyva** (almuten-számítás nincs az appban; Greenbaum 1 pontja) | — |

Eredmény: a meleg/hideg és a száraz/nedves tengely külön dől el; ha valamelyik tengelyen a
különbség ≤ 1, **kevert** alkatot írunk (pl. „Szangvinikus–kolerikus"), ahogy Frawley is
megjegyzi, hogy a tiszta egynedvű eredmény ritkább. Idő nélkül az Aszcendens és ura kimarad
(4 tényező, 6 pont) — jelezzük.

## 2. Az MC jegye
Az MC (Medium Coeli) a X. ház csúcsa: a hivatás, a nyilvános szerep, „amiről emlékeznek rád".
Az értelmezés három rétege: (1) az MC jegye — a pálya stílusa és a nyilvános arc; (2) az MC
ura háza — *min keresztül* épül a hivatás; (3) bolygó az MC-n (±5°) — ami a legjobban látszik.
Források: Sasportas, *The Twelve Houses* (1985) X. ház fejezete; Tyl, *Synthesis & Counseling
in Astrology* (1994) hivatás-fejezete; a modern összefoglalók (astrology.com, Almanac). A 12
jegyszöveg saját megfogalmazás a tizedik ház hagyományos jelentései alapján, nem idézet.
Megjegyzés: az MC 15 perc időhiba esetén is jegyet válthat — pontos idő kell hozzá.

## 3. Holdjegy
A sor mostantól a `western.planetInSign.moon` személyes szövegét és a Hold házát hozza (a
korábbi „lásd a Hold-kártyát" átirányítás helyett).
