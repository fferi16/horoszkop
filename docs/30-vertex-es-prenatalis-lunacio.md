# Vertex és prenatális lunáció — az értelmezés forrásai

> Feladatlista 6–7. pont: a Vertex csak pozíció + történet volt, a prenatális lunáció csak
> dátum. Ez a jegyzet a személyes olvasathoz kellett. Készült: 2026-09-08.
> A számítás a `docs/25` B) részében (Vertex) és a `docs/06` 2. pontjában (lunáció) van.

## 1. Vertex

### Források
| Forrás | Mit ad |
|---|---|
| **Brian Clark**, *The Vertex and Anti-Vertex* (astrosynthesis.com.au, PDF) | a legrészletesebb mai értelmezési keret: jegy (a Deszcendenssel szembeállítva), ház (5–8., egyenlítő közelében 4./9.), bolygó a tengely ±10°-án, Anti-Vertex mint „tartalék-aszcendens" |
| L. E. Johndro, Charles Jayne (1930-as évek levelezés) | eredet: „elektromos aszcendens"; Jayne szerint a szemközti pont (a mai Vertex) az érzékenyebb, különösen szoláris ív direkciókra |
| Swiss Ephemeris forrás | képlet; a |φ| < 23,44° megbízhatatlanság (docs/25) |
| Modern összefoglalók (astrologysoftware.com szótár, celesian.com) | a „sorsszerű találkozás" közhely eredete és az 5–8. házas tipikus helyzet |

### Clark értelmezési lépései (ezt követi az app)
1. **A Vertex jegye** a Deszcendens jegyével szembeállítva: a Deszcendens a tudatosan keresett
   társ-minőség, a Vertex a mögötte lévő, nem látott igény. Ha a kettő azonos jegyben van, a
   minta felerősödik és nehezen különíthető el (ez akkor jellemző, ha az MC 0° Rák/Bak közelében
   áll).
2. **A Vertex háza**: az az életterület, ahol a sorsszerűnek érzett találkozások történnek.
   Mérsékelt szélességen az 5–8. ház; az egyenlítő közelében a 4. vagy 9. is lehet.
3. **Bolygó a tengely ±10°-án**: a kényszerítő, nehezen elengedhető kapcsolati minta.
4. **Az Anti-Vertex** (keleti oldal): az Aszcendenst kisegítő, nem tudatos erőforrás.
5. Tranzitok és a partner bolygói a tengelyen aktiválják — szinasztriában a legfontosabb.

Clark saját jegypéldái: Kos — tudattalan rivalizálás; Ikrek — befejezetlenség, testvér-
és „ikerlélek"-téma; Skorpió — erotikus-érzelmi intrika, a veszteségtől való félelem. A
többi jegy szövege az appban ezek mintájára, a jegy alapjelentéséből készült saját
megfogalmazás (`HDATA.vertex.sign`), nem idézet.

## 2. Prenatális lunáció (prenatal syzygy)

### Források
| Forrás | Mit ad |
|---|---|
| **Ptolemaiosz**, *Tetrabiblos* III.2 (LacusCurtius, Robbins-ford.) | „vegyük a születést közvetlenül megelőző szüzügiát, akár újhold, akár telihold; újholdnál mindkét fény fokát, teliholdnál azét, amelyik a föld felett van"; az uralkodót öt méltóság (trigon, ház, exaltáció, határ, fázis) szerint keressük |
| Dorotheus, Valens (Seven Stars Astrology, kerykeion.net összefoglalói) | a lunáció mint hyleg-jelölt (a szektafény, a másik fény, Fortuna, lunáció, Aszcendens sorrendjében); „afetikus" házak: 1, 7, 9, 10, 11 |
| kerykeion.net, *The Prenatal Syzygy in Chart Delineation* | a lunáció jegye = zodiákus-kontextus; háza = az az életterület, amely a születés előtti körülményekhez kötődik; a lunáció ura a születési körülmények „háttérkezelője", natális méltóság, ház, fényszögek szerint olvasva |
| lincosastrology.com, *The Prenatal Lunation* | újhold-születés: mag, indítás, előremozdulás; telihold-születés: beteljesedés, tudatosodás, kapcsolat |
| hellenisztikus gyakorlat (Seven Stars) | a fok **határura** (egyiptomi határok): Mars → küzdelmes, Vénusz → támogató születési környezet |

### Rögzített döntések
- A lunáció foka: újholdnál a Nap (= Hold) foka a konjunkció pillanatában; teliholdnál a
  Ptolemaiosz-szabály szerint a születéskor a horizont felett álló fény (Nap a 7–12. házban →
  Nap, különben Hold) foka az oppozíció pillanatában. Idő nélkül teliholdnál a Hold foka.
- A lunáció ura: **hagyományos** jegyúr (TRAD_DOM), méltósága a `tradDignity` táblával, háza
  a natális házrendszerrel; jótevő/rosszindulatú kontaktok a `profContacts` szabályaival.
- A határúr az app egyiptomi tábláiból (`degrees.terms`).
- A hyleg-jelöltséget csak jelezzük (afetikus ház), a hosszú-élet-számítást nem építjük be.
