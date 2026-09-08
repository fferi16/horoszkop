# Kiegészítő technikák III. — azték tonalpohualli, Chiron, szoláris ív, félpontok, asztrokartográfia

> A „Jöhet mind" második üteme. Készült: 2026-09-08. Elv: kutatás → docs → kód.

## A) Azték tonalpohualli

| Forrás | Mit ad |
|---|---|
| Wikipedia: *Tōnalpōhualli*, *Lords of the Night*; azteccalendar.com (Caso-korreláció) | a 20 napjegy Nahuatl neve, védőistene és égtája; a 13 szám; a 9 Éjszaka Ura; a Caso-féle 584283 korreláció (= a maja GMT-korreláció) |
| Sahagún, *Florentine Codex* IV. könyv (a napjegyek sorsjóslata) — közvetett, a mai összefoglalókon át | a szülött sorsa napjegy szerint; a számok szerencséje |
| whats-your-sign.com (Avia) | a 20 jegy modern kulcsszavai — csak keret, nem forrás |

**Számítás:** ugyanaz a 260-napos számlálás, mint a maja Tzolkinnál (`jdn − 584283`): 1 Cipactli = 1 Imix; a napjegy indexe és a szám is azonos. **Éjszaka Ura:** a maja G-sorozat mintájára (584283 = G9), az azték kilenc urat (Xiuhtecuhtli … Tlaloc) a G1–G9 sorrenddel feleltetjük meg — ez a szokásos, de nem bizonyított azonosítás, jelezzük. **Trecena:** a 13 napos szakasz első jegye = a napjegytől visszaszámolva (szám − 1) jegy. A szövegek a jegy mitológiai tartalmából (védőisten, égtáj, a jel jelentése) írt saját olvasatok; a Sahagún-féle részletes sorsjóslatot (pl. „a 1 Ocelotl-napon születettet elfogják") nem vesszük át szó szerint.

**Miért nincs ogham?** A „kelta fa-horoszkóp" Robert Graves *White Goddess*-beli (1948) konstrukciója: az ogham-ábécét átrendezte, 13 „holdhónaphoz" kötötte — Peter Berresford Ellis és mások cáfolták, a fennmaradt ogham-anyag nem naptári. Az app kelta fa-jegye ugyanez a hagyomány (docs/04 jelzi); egy második, ugyanilyen alapon álló réteg nem indokolt.

## B) Chiron

| Forrás | Mit ad |
|---|---|
| JPL Horizons API (2060 Chiron, 1900–2050, 730 naponként, J2000 ekliptika, heliocentrikus oszkuláló elemek) | a pályaelem-tábla — ugyanaz a Kepler-megoldó, mint a négy aszteroidánál (docs/25); 2000-01-01: 11°34' Nyilas (Horizons: 11°33') |
| Melanie Reinhart, *Chiron and the Healing Journey*; Barbara Hand Clow, *Chiron: Rainbow Bridge*; Martin Lass; thalira.com összefoglaló | a „sebzett gyógyító" keret: a **jegy** a seb természete, a **ház** az életterülete; ciklus: kvadrát ~21, szembenállás ~25, visszatérés 49–51, kvadrát ~79 (a pálya excentrikus, ezért egyénenként eltér) |

Az appban: Chiron jegye + háza + a hozzá tartozó saját szövegek; a ciklus dátumai az efemeriszből (nem táblázatból), retrográd hurkoknál első és utolsó pontos érintéssel.

## C) Szoláris ív direkciók

| Forrás | Mit ad |
|---|---|
| Noel Tyl, *Solar Arcs* (2001) | 1° ≈ 1 év; orbis 1° (½ év közeledő — erős —, ½ év távolodó); csak kemény fényszögek (0/90/180); a sarkokra érő ívek a legjobban datálhatók |
| celesian.com, augurine.com összefoglalók | a technika és a progresszió különbsége: az egész képlet a progresszív Nap ívével tolódik |

**Számítás:** ív = progresszív Nap − natális Nap (a progresszív Nap a szekunder progresszióból, tehát a valódi napi mozgás, nem fix 1°). A következő 5 évben: irányított bolygó/sarok → natális bolygó/sarok, 0/90/180/270°, a pontos év-hónap; 1° visszamenőleg (elváló) is szerepel. Az értelmezés a tranzit-adattábla bolygó/célpont szövegeivel, a direkció saját keretében.

## D) Félpontok (Ebertin)

| Forrás | Mit ad |
|---|---|
| Reinhold Ebertin, *The Combination of Stellar Influences* (1940/1972) | A = B/C „bolygóképek"; a 90°-os tárcsa (0/90/180/270 egyenértékű); orbis 1–1,5° |
| Alfred Witte (Hamburgi iskola), Michael Munkasey; cafeastrology összefoglaló | a Nap/Hold és az ASC/MC félpont kiemelt szerepe; a lágy fényszögek nem számítanak |

**Számítás:** a Nap, Hold, Merkúr, Vénusz, Mars, Jupiter, Szaturnusz, ASC, MC páronkénti közeli félpontjai (36 pár); rájuk álló bolygó (a 10 bolygó + Chiron) 1,5° orbisszal a 90°-os tárcsán; a legszorosabb 8 kép. A pár-szövegek saját megfogalmazások Ebertin kategóriái (pszichológiai/szociológiai megfelelés) alapján, nem idézetek.

## E) Asztrokartográfia — városlistával

| Forrás | Mit ad |
|---|---|
| Jim Lewis, *Astro*Carto*Graphy* (1976), Lewis–Guttman *Book of Maps* | a négy vonal (MC: hivatás, láthatóság; IC: otthon, gyökerek; ASC: az én; DSC: a társak); orbis ~700–800 mérföld |
| kerykeion.net, starmapper.com összefoglalók | a vonalak jelentése bolygónként; parán (Brady: 1° szélesség) — nem építjük be |

**Számítás:** minden bolygó RA/dec a születéskor (ekliptikai → egyenlítői), Greenwich-csillagidő; **MC-vonal**: λ = RA − GST; **IC**: +180°; **ASC/DSC**: adott φ szélességen az óraszög cos H = −tan φ · tan δ, λ = RA ∓ H − GST. Térkép helyett a `geo.js` 212 városát (magyar + határon túli + világvárosok) vetjük a vonalakra, **4° hosszúsági orbisszal** (~300 km, szűkebb Lewisnál, hogy a lista ne legyen parttalan). A kimenet: bolygónként a vonal típusa és a legközelebbi városok; a jelentés a bolygó × sarok saját szövegeiből áll össze.
