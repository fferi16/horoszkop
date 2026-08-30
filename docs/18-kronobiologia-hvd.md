# Kronobiológiai pszichogenetika — ХВД / csakroanalízis (Zsazskov–Buhtojarov-módszer)

> **A dokumentum célja:** egy orosz nyelvterületen elterjedt, születési dátumból hét csakra-százalékot számoló rendszer **teljes, számokkal kitöltött rekonstrukciója**. A rendszer neve oroszul *хронально-векторная диагностика* (ХВД, „kronálisan-vektoros diagnosztika"), köznyelvi nevén *чакроанализ* (csakroanalízis) vagy „Buhtojarov-módszer".
>
> **Olvasási konvenció:**
> - 📗 **ELSŐDLEGES FORRÁSBÓL** — a szám így szerepel a módszer alapkönyvének táblázat-képén.
> - 🧮 **LEVEZETVE** — zárt képletből számolt érték, amelyet az elsődleges forrás táblázata igazol.
> - ⚠️ **NEM A KÖNYVBŐL** — külső kalkulátorból visszafejtett adat; az alapkönyv I. része nem tartalmazza.
>
> **Fontos:** ez a dokumentum a rendszer *rekonstrukciója*, nem a rendszer *igazolása*. A ХВД áltudomány; a 9. fejezet ezt külön tárgyalja. A rekonstrukció értéke az, hogy a számítás innentől ellenőrizhető és reprodukálható.

---

## Tartalom

1. [A rendszer eredete és névtana](#1-a-rendszer-eredete-és-névtana)
2. [Az algoritmus teljes leírása](#2-az-algoritmus-teljes-leírása)
3. [A számítás rejtett matematikája](#3-a-számítás-rejtett-matematikája)
4. [1. táblázat — év-markerek](#4-1-táblázat--év-markerek)
5. [2. táblázat — hónap-markerek](#5-2-táblázat--hónap-markerek)
6. [3. táblázat — kontúrszám → csakra-százalék](#6-3-táblázat--kontúrszám--csakra-százalék)
7. [Ellenőrzés](#7-ellenőrzés)
8. [Referencia-implementáció](#8-referencia-implementáció)
9. [Kritikai megjegyzés](#9-kritikai-megjegyzés)
10. [Források](#10-források)

---

## 1. A rendszer eredete és névtana

**Artur Zsazskov** (Артур Жажков) szovjet kutató nevéhez fűződik az a számítási táblázat-készlet, amely a három klasszikus bioritmus-ciklust (23 / 28 / 33 nap) egy csakrákból álló „energetikai potenciál"-profillá képezi le. A forrásokban a táblázatokat **„SZSZ-táblák"** (СЗС: Sjuding–Zsazskov–Szolodkij) néven is emlegetik; a bioritmológiai koncepciót Zsazskov **Andrej Szolodkij**jal (Андрей Солодкий) együtt dolgozta ki.

Zsazskov halála után a kéziratok és a táblázatok **A. A. Buhtojarov**hoz (А. А. Бухтояров) kerültek, aki a rendszert publikálta és iskolát alapított rá. Az általa bevezetett szakkifejezés a **хронально-векторная диагностика (ХВД)**. Sokan ezért egyszerűen **„Buhtojarov-módszer"**ként hivatkoznak rá.

A ma legkönnyebben hozzáférhető, **a táblázatokat képként ténylegesen közlő** forrás:

> **Ольга Бекенёва: _Самоучитель по хронально-векторной диагностике. Часть I_**
> (Olga Bekenyova: Önoktató a kronálisan-vektoros diagnosztikához, I. rész)
> — korábbi címén *«Чакры и характер, или как жить в ресурсе»*.

Ebben a könyvben szerepel mind a három táblázat (1. = év-markerek 1900–2151, 2. = hónap-markerek, 3. = kontúrszám → csakra-kapacitás). **Ez a dokumentum ezekből a táblázat-képekből dolgozik.**

Terminológiai megjegyzés: az orosz szakirodalom megkülönbözteti a **ХВД**-t (Buhtojarov iskolája; tágabb rendszer: kontúrok, vektorok, életforgatókönyvek) és a **чакроанализ**t (a szűkebb, csakra-százalékos rész). A számítási magjuk azonos.

---

## 2. Az algoritmus teljes leírása

### 2.1 A három bázisszám

| Kontúr | Bázisszám | Bioritmus-megfelelő |
|---|---:|---|
| Fizikai (физический) | **23** | fizikai bioritmus, 23 nap |
| Érzelmi (эмоциональный) | **28** | érzelmi bioritmus, 28 nap |
| Intellektuális (интеллектуальный) | **33** | intellektuális bioritmus, 33 nap |

Ezek soha nem változnak.

### 2.2 A lépések

Bemenet: a születési dátum (**év, hónap, nap**), semmi más.

1. **Év-marker.** Az 1. táblázatból kiolvasunk az évhez **három** számot: `É₂₃, É₂₈, É₃₃`.
2. **Hónap-marker.** A 2. táblázatból a hónaphoz **három** számot: `H₂₃, H₂₈, H₃₃`.
   *Szökőévben januárra és februárra külön sor van (a táblázatban `I b`, `II b`).*
3. **Nap-marker.** `N = (a születési hónap napjainak száma) − (a születés napja)`.
   Ez **mindhárom** oszlopba ugyanaz a szám kerül.
   *Példa: március 4. → 31 − 4 = 27.*
4. **Oszloponkénti összeadás:**
   ```
   F = É₂₃ + H₂₃ + N        (fizikai oszlop)
   Q = É₂₈ + H₂₈ + N        (érzelmi oszlop)
   R = É₃₃ + H₃₃ + N        (intellektuális oszlop)
   ```
5. **Redukció.** Minden oszlopból addig vonjuk ki a saját bázisszámát, amíg az eredmény **kisebb** nem lesz nála. Ha az összeg eleve kisebb, marad úgy.
   ```
   fizikai kontúrszám        f = F − 23·k   →  0 ≤ f < 23
   érzelmi kontúrszám        e = Q − 28·k   →  0 ≤ e < 28
   intellektuális kontúrszám i = R − 33·k   →  0 ≤ i < 33
   ```
6. **Csakra-kapacitás** a 3. táblázatból:
   - a **fizikai** kontúrszám → **Muladhara** és **Szvadhisthana** %,
   - az **érzelmi** kontúrszám → **Manipura** és **Anahata** %,
   - az **intellektuális** kontúrszám → **Visuddha** és **Adzsna** %.

> ⚠️ **Ez eltér a köznyelvi leírásoktól.** Több magyar és orosz ismertető azt állítja, hogy „a Muladhara külön jön". Ez **téves**: a Muladhara a fizikai kontúrszámból jön, ugyanabból a sorból, mint a Szvadhisthana. Az alapkönyv 3. táblázata minden kontúrhoz egy **számpárt** ad (`30-52`, `50–99`, `29–88`), és a hat szám sorrendben Muladhara–Szvadhisthana–Manipura–Anahata–Visuddha–Adzsna. A könyv kidolgozott példája szó szerint így írja ki.

> ⚠️ **A hetedik csakra (Szahaszrara) nincs az alapkönyv I. részében.** A könyv példája hat csakrával zárul. A Szahaszrara-értéket csak külső kalkulátorok adják meg; ezeket a 6.4 pont közli, külön jelölve.

### 2.3 A táblázat-alak, ahogy a könyv írja

```
23 . 28 . 33      ← bázisszámok
17   21   20      ← év        (1987)
22   23   11      ← hónap     (III. március)
27   27   27      ← nap       (31 − 4)
------------------
66   71   58      ← oszlopösszegek
−23  −28  −33
43   43   25
−23  −28
20   15   25      ← kontúrszámok
```

---

## 3. A számítás rejtett matematikája

A táblázatok nem önkényesek: **egy közönséges bioritmus-napszámlálás** van bennük szétbontva.

Legyen `D` a születési dátum és `E = 1981. december 31.` egy rögzített horgonynap. Akkor

```
N_total = (E − D)   napokban
f = N_total mod 23,   e = N_total mod 28,   i = N_total mod 33
```

A háromtagú összeadás pontosan ezt bontja szét:

| Táblázat | Amit valójában számol | Képlet |
|---|---|---|
| **Nap-marker** | a születésnaptól a hónap végéig hátralévő napok | `dim(év, hó) − nap` |
| **2. táblázat** | a születési hónap **utáni** hónapok napjainak összege | `Σ dim(év, m)`, `m = hó+1 … 12`, mod 23/28/33 |
| **1. táblázat** | az adott év december 31-étől 1981. december 31-éig eltelt napok | `(E − dec31(év)) mod 23/28/33` |

**A horgony bizonyítéka:** a könyv 1. táblázatában az **1981-es sor pontosan `0 · 0 · 0`**. Ez a rendszer nullpontja.

Ezért a teljes 1. táblázat **zárt képletből újraszámolható** bármely évre, és ugyanígy a 2. táblázat is. A 3. táblázat viszont **nem** vezethető le képletből — az egy tapasztalati/önkényes hozzárendelés, amit csak a forrásból lehet kiolvasni.

---

## 4. 1. táblázat — év-markerek

📗 **Forrás:** Bekenyova, 1. táblázat (kép), 1900–2151.
🧮 **Ellenőrzés:** a `(E − dec31(év)) mod 23/28/33` képlet (`E = 1981-12-31`) a könyv minden ellenőrzött sorát visszaadja, két elgépelés kivételével (lásd alább).

Az oszlopok: **23** = fizikai, **28** = érzelmi, **33** = intellektuális.

| Év | 23 | 28 | 33 | Év | 23 | 28 | 33 | Év | 23 | 28 | 33 |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **1900** | 7 | 17 | 17 | **1951** | 10 | 10 | 2 | **2002** | 12 | 2 | 19 |
| **1901\*** | 10 | 16 | 18 | **1952** | 12 | 8 | 32 | **2003** | 15 | 1 | 17 |
| **1902** | 13 | 15 | 13 | **1953** | 15 | 7 | 30 | **2004** | 17 | 27 | 14 |
| **1903** | 16 | 14 | 11 | **1954** | 18 | 6 | 28 | **2005** | 20 | 26 | 12 |
| **1904** | 18 | 12 | 8 | **1955** | 21 | 5 | 26 | **2006** | 0 | 25 | 10 |
| **1905** | 21 | 11 | 6 | **1956** | 0 | 3 | 23 | **2007** | 3 | 24 | 8 |
| **1906** | 1 | 10 | 4 | **1957** | 3 | 2 | 21 | **2008** | 5 | 22 | 5 |
| **1907** | 4 | 9 | 2 | **1958** | 6 | 1 | 19 | **2009** | 8 | 21 | 3 |
| **1908\*** | 5 | 7 | 32 | **1959** | 9 | 0 | 17 | **2010** | 11 | 20 | 1 |
| **1909** | 9 | 6 | 30 | **1960** | 11 | 26 | 14 | **2011** | 14 | 19 | 32 |
| **1910** | 12 | 5 | 28 | **1961** | 14 | 25 | 12 | **2012** | 16 | 17 | 29 |
| **1911** | 15 | 4 | 26 | **1962** | 17 | 24 | 10 | **2013** | 19 | 16 | 27 |
| **1912** | 17 | 2 | 23 | **1963** | 20 | 23 | 8 | **2014** | 22 | 15 | 25 |
| **1913** | 20 | 1 | 21 | **1964** | 22 | 21 | 5 | **2015** | 2 | 14 | 23 |
| **1914** | 0 | 0 | 19 | **1965** | 2 | 20 | 3 | **2016** | 4 | 12 | 20 |
| **1915** | 3 | 27 | 17 | **1966** | 5 | 19 | 1 | **2017** | 7 | 11 | 18 |
| **1916** | 5 | 25 | 14 | **1967** | 8 | 18 | 32 | **2018** | 10 | 10 | 16 |
| **1917** | 8 | 24 | 12 | **1968** | 10 | 16 | 29 | **2019** | 13 | 9 | 14 |
| **1918** | 11 | 23 | 10 | **1969** | 13 | 15 | 27 | **2020** | 15 | 7 | 11 |
| **1919** | 14 | 22 | 8 | **1970** | 16 | 14 | 25 | **2021** | 18 | 6 | 9 |
| **1920** | 16 | 20 | 5 | **1971** | 19 | 13 | 23 | **2022** | 21 | 5 | 7 |
| **1921** | 19 | 19 | 3 | **1972** | 21 | 11 | 20 | **2023** | 1 | 4 | 5 |
| **1922** | 22 | 18 | 1 | **1973** | 1 | 10 | 18 | **2024** | 3 | 2 | 2 |
| **1923** | 2 | 17 | 32 | **1974** | 4 | 9 | 16 | **2025** | 6 | 1 | 0 |
| **1924** | 4 | 15 | 29 | **1975** | 7 | 8 | 14 | **2026** | 9 | 0 | 31 |
| **1925** | 7 | 14 | 27 | **1976** | 9 | 6 | 11 | **2027** | 12 | 27 | 29 |
| **1926** | 10 | 13 | 25 | **1977** | 12 | 5 | 9 | **2028** | 14 | 25 | 26 |
| **1927** | 13 | 12 | 23 | **1978** | 15 | 4 | 7 | **2029** | 17 | 24 | 24 |
| **1928** | 15 | 10 | 20 | **1979** | 18 | 3 | 5 | **2030** | 20 | 23 | 22 |
| **1929** | 18 | 9 | 18 | **1980** | 20 | 1 | 2 | **2031** | 0 | 22 | 20 |
| **1930** | 21 | 8 | 16 | **1981** | 0 | 0 | 0 | **2032** | 2 | 20 | 17 |
| **1931** | 1 | 7 | 14 | **1982** | 3 | 27 | 31 | **2033** | 5 | 19 | 15 |
| **1932** | 3 | 5 | 11 | **1983** | 6 | 26 | 29 | **2034** | 8 | 18 | 13 |
| **1933** | 6 | 4 | 9 | **1984** | 8 | 24 | 26 | **2035** | 11 | 17 | 11 |
| **1934** | 9 | 3 | 7 | **1985** | 11 | 23 | 24 | **2036** | 13 | 15 | 8 |
| **1935** | 12 | 2 | 5 | **1986** | 14 | 22 | 22 | **2037** | 16 | 14 | 6 |
| **1936** | 14 | 0 | 2 | **1987** | 17 | 21 | 20 | **2038** | 19 | 13 | 4 |
| **1937** | 17 | 27 | 0 | **1988** | 19 | 19 | 17 | **2039** | 22 | 12 | 2 |
| **1938** | 20 | 26 | 31 | **1989** | 22 | 18 | 15 | **2040** | 1 | 10 | 32 |
| **1939** | 0 | 25 | 29 | **1990** | 2 | 17 | 13 | **2041** | 4 | 9 | 30 |
| **1940** | 2 | 23 | 26 | **1991** | 5 | 16 | 11 | **2042** | 7 | 8 | 28 |
| **1941** | 5 | 22 | 24 | **1992** | 7 | 14 | 8 | **2043** | 10 | 7 | 26 |
| **1942** | 8 | 21 | 22 | **1993** | 10 | 13 | 6 | **2044** | 12 | 5 | 23 |
| **1943** | 11 | 20 | 20 | **1994** | 13 | 12 | 4 | **2045** | 15 | 4 | 21 |
| **1944** | 13 | 18 | 17 | **1995** | 16 | 11 | 2 | **2046** | 18 | 3 | 19 |
| **1945** | 16 | 17 | 15 | **1996** | 18 | 9 | 32 | **2047** | 21 | 2 | 17 |
| **1946** | 19 | 16 | 13 | **1997** | 21 | 8 | 30 | **2048** | 0 | 0 | 14 |
| **1947** | 22 | 15 | 11 | **1998** | 1 | 7 | 28 | **2049** | 3 | 27 | 12 |
| **1948** | 1 | 13 | 8 | **1999** | 4 | 6 | 26 | **2050** | 6 | 26 | 10 |
| **1949** | 4 | 12 | 6 | **2000** | 6 | 4 | 23 | | | | |
| **1950** | 7 | 11 | 4 | **2001** | 9 | 3 | 21 | | | | |

**\*** = a könyv táblázata itt **eltér** a képlettől. A fenti táblázat a **könyv szerinti** (tehát az online kalkulátorokkal egyező) értéket közli:

| Év | Könyv | Képlet | Megjegyzés |
|---|---|---|---|
| 1901 | 10 · 16 · **18** | 10 · 16 · **15** | valószínű elgépelés a 33-as oszlopban |
| 1908 | **5** · 7 · 32 | **6** · 7 · 32 | valószínű elgépelés a 23-as oszlopban |

### 4.1 A 2050 utáni évek

A könyv táblázata 2151-ig megy, és a képlet ugyanígy folytatható, **de a könyv 2100-tól hibás**: 2100-at szökőévnek veszi (a Gergely-naptárban nem az), ezért **2100. január 1-jétől minden marker 1-gyel kisebb** a helyes értéknél. Emellett a 2098-as sor érzelmi oszlopa is eltér (könyv: 26, képlet: 22), és a 2145–2151 közötti sorok is szórnak. **2050 fölött a táblázatot ne tekintsd megbízhatónak.**

---

## 5. 2. táblázat — hónap-markerek

📗 **Forrás:** Bekenyova, 2. táblázat (kép). 🧮 Mind a 14 sor **hibátlanul** reprodukálható a „a hónap utáni hónapok napjainak összege, mod bázis" képletből.

| Sorszám | Hónap | Napok száma | 23 | 28 | 33 |
|---|---|---:|---:|---:|---:|
| I. | Január | 31 | 12 | 26 | 4 |
| I b | Január (szökőév) | 31 | 13 | 27 | 5 |
| II b | Február (szökőév) | 29 | 7 | 26 | 9 |
| II. | Február | 28 | 7 | 26 | 9 |
| III. | Március | 31 | 22 | 23 | 11 |
| IV. | Április | 30 | 15 | 21 | 14 |
| V. | Május | 31 | 7 | 18 | 16 |
| VI. | Június | 30 | 0 | 16 | 19 |
| VII. | Július | 31 | 15 | 13 | 21 |
| VIII. | Augusztus | 31 | 7 | 10 | 23 |
| IX. | Szeptember | 30 | 0 | 8 | 26 |
| X. | Október | 31 | 15 | 5 | 28 |
| XI. | November | 30 | 8 | 3 | 31 |
| XII. | December | 31 | 0 | 0 | 0 |

**Két észrevétel:**
- Februárnak azért azonos a markere szökő- és normál évben, mert a februárt követő hónapok napszáma nem függ a szökőévtől. A **napok száma** viszont igen (28 vs. 29), ezért a szökőév a *nap-markeren* keresztül hat.
- Decemberre a marker `0 · 0 · 0`, mert utána nincs több hónap az évben — ez is a 3. fejezet szerinti szerkezetet igazolja.

---

## 6. 3. táblázat — kontúrszám → csakra-százalék

📗 **Forrás:** Bekenyova, 3. táblázat (kép). A könyv a markereket **1-től** számozza; a `bázis` értékű sor felel meg a 0 maradéknak (pl. a fizikai 23-as sor az `f = 0` eset).

A táblázat a százalékok mellett kontúronként **típusmegjelölést** is ad.

### 6.1 Fizikai kontúr → Muladhara + Szvadhisthana

| Marker (fizikai) | Muladhara % | Szvadhisthana % | Temperamentum (orosz) | magyarul |
|---:|---:|---:|---|---|
| 1 | 33 | 55 | Сангвиник | szangvinikus |
| 2 | 55 | 72 | Сангвиник-Холерик | szangvinikus-kolerikus |
| 3 | 15 | 65 | Чувствит. Холерик | érzékeny kolerikus |
| 4 | 50 | 72 | Сангвиник-Холерик | szangvinikus-kolerikus |
| 5 | 30 | 41 | Меланхолик | melankolikus |
| 6 | 75 | 21 | Флегматик | flegmatikus |
| 7 | 45 | 72 | Сангвиник-Холерик | szangvinikus-kolerikus |
| 8 | 60 | 22 | Флегматик | flegmatikus |
| 9 | 35 | 28 | Меланхолик | melankolikus |
| 10 | 35 | 49 | Сангвиник | szangvinikus |
| 11 | 95 | 22 | Флегматик | flegmatikus |
| 12 | 30 | 99 | Чувствит. Холерик | érzékeny kolerikus |
| 13 | 40 | 61 | Сангвиник | szangvinikus |
| 14 | 20 | 55 | Чувствит. Холерик | érzékeny kolerikus |
| 15 | 40 | 28 | Меланхолик | melankolikus |
| 16 | 90 | 21 | Флегматик | flegmatikus |
| 17 | 50 | 83 | Сангвиник-Холерик | szangvinikus-kolerikus |
| 18 | 10 | 45 | Чувствит. Холерик | érzékeny kolerikus |
| 19 | 99 | 55 | Сангвиник-Флегмат. | szangvinikus-flegmatikus |
| 20 | 30 | 52 | Сангвиник | szangvinikus |
| 21 | 20 | 79 | Чувствит. Холерик | érzékeny kolerikus |
| 22 | 80 | 63 | Сангвиник-Флегмат. | szangvinikus-flegmatikus |
| **23** *(= 0 maradék)* | 25 | 51 | Меланхолик | melankolikus |

### 6.2 Érzelmi kontúr → Manipura + Anahata

| Marker (érzelmi) | Manipura % | Anahata % | Érzelmi típus (orosz) | magyarul |
|---:|---:|---:|---|---|
| 1 | 69 | 95 | Страстный | szenvedélyes |
| 2 | 75 | 27 | Эгоистичный (лидерск.) | egoista (vezéri) |
| 3 | 31 | 45 | Эмпатический | empatikus |
| 4 | 62 | 77 | Страстный | szenvedélyes |
| 5 | 50 | 59 | Эмпатический | empatikus |
| 6 | 44 | 68 | Эмпатический | empatikus |
| 7 | 12 | 45 | Самоотверж. интегратив | önzetlen, integratív |
| 8 | 6 | 23 | Холодный | hideg |
| 9 | 81 | 54 | Эгоистичный (лидерск.) | egoista (vezéri) |
| 10 | 25 | 77 | Самоотверж. интегратив | önzetlen, integratív |
| 11 | 18 | 50 | Самоотверж. интегратив | önzetlen, integratív |
| 12 | 44 | 59 | Эмпатический | empatikus |
| 13 | 25 | 68 | Самоотверж. интегратив | önzetlen, integratív |
| 14 | 50 | 77 | Страстный | szenvedélyes |
| 15 | 50 | 99 | Страстный | szenvedélyes |
| 16 | 50 | 36 | сентиментальный | szentimentális |
| 17 | 50 | 41 | сентиментальный | szentimentális |
| 18 | 31 | 14 | Холодный | hideg |
| 19 | 99 | 54 | Эгоистичный (лидерск.) | egoista (vezéri) |
| 20 | 44 | 32 | сентиментальный | szentimentális |
| 21 | 62 | 41 | сентиментальный | szentimentális |
| 22 | 25 | 18 | Холодный | hideg |
| 23 | 69 | 59 | Эгоистичный (лидерск.) | egoista (vezéri) |
| 24 | 56 | 41 | сентиментальный | szentimentális |
| 25 | 44 | 68 | Эмпатический | empatikus |
| 26 | 37 | 41 | Холодный | hideg |
| 27 | 56 | 73 | Страстный | szenvedélyes |
| **28** *(= 0 maradék)* | 44 | 73 | Эмпатический | empatikus |

### 6.3 Intellektuális kontúr → Visuddha + Adzsna

Az utolsó, *dőlt* oszlop **nem a könyvből** származik — lásd 6.4.

| Marker (intellektuális) | Visuddha % | Adzsna % | Intellektus-típus (orosz) | magyarul | *(Szahaszrara %)* ⚠️ |
|---:|---:|---:|---|---|---:|
| 1 | 64 | 35 | Гармоничный художественный | harmonikus, művészi | *65* |
| 2 | 21 | 65 | Дискретный | diszkrét | *72* |
| 3 | 21 | 65 | Дискретный | diszkrét | *72* |
| 4 | 93 | 82 | Сверхпродуктивный | szuperproduktív | *56* |
| 5 | 43 | 41 | Гармоничный художественный | harmonikus, művészi | *51* |
| 6 | 0 | 99 | Дискретный | diszkrét | *100* |
| 7 | 57 | 88 | Продуктивный мыслительный | produktív, gondolkodó | *66* |
| 8 | 7 | 41 | Прикладной мыслительный | alkalmazott, gondolkodó | *67* |
| 9 | 29 | 35 | Прикладной смешанный | alkalmazott, kevert | *53* |
| 10 | 86 | 35 | Гармоничный художественный | harmonikus, művészi | *76* |
| 11 | 29 | 82 | Гармоничный мыслительный | harmonikus, gondolkodó | *77* |
| 12 | 86 | 41 | Гармоничный художественный | harmonikus, művészi | *73* |
| 13 | 14 | 71 | Дискретный | diszkrét | *79* |
| 14 | 50 | 59 | Продуктивный смешанный | produktív, kevert | *55* |
| 15 | 78 | 65 | Продуктивный художественный | produktív, művészi | *57* |
| 16 | 93 | 24 | Аналоговый | analóg | *85* |
| 17 | 84 | 71 | Продуктивный художественный | produktív, művészi | *57* |
| 18 | 29 | 41 | Прикладной смешанный | alkalmazott, kevert | *56* |
| 19 | 26 | 71 | Гармоничный мыслительный | harmonikus, gondolkodó | *73* |
| 20 | 99 | 82 | Сверхпродуктивный | szuperproduktív | *59* |
| 21 | 7 | 76 | Дискретный | diszkrét | *85* |
| 22 | 14 | 35 | Прикладной мыслительный | alkalmazott, gondolkodó | *61* |
| 23 | 50 | 65 | Продуктивный смешанный | produktív, kevert | *58* |
| 24 | 26 | 18 | Прикладной смешанный | alkalmazott, kevert | *54* |
| 25 | 29 | 88 | Гармоничный мыслительный | harmonikus, gondolkodó | *80* |
| 26 | 93 | 59 | Продуктивный художественный | produktív, művészi | *67* |
| 27 | 57 | 82 | Продуктивный мыслительный | produktív, gondolkodó | *63* |
| 28 | 29 | 29 | Прикладной смешанный | alkalmazott, kevert | *50* |
| 29 | 29 | 88 | Гармоничный мыслительный | harmonikus, gondolkodó | *80* |
| 30 | 71 | 47 | Гармоничный художественный | harmonikus, művészi | *62* |
| 31 | 7 | 35 | Прикладной мыслительный | alkalmazott, gondolkodó | *64* |
| 32 | 64 | 59 | Продуктивный смешанный | produktív, kevert | *53* |
| **33** *(= 0 maradék)* | 29 | 82 | Гармоничный мыслительный | harmonikus, gondolkodó | *77* |

### 6.4 A Szahaszrara-oszlop ⚠️

A fenti táblázat utolsó, dőlt oszlopa **nem szerepel Bekenyova I. részében**. A [chakrium.com](https://chakrium.com/) ХВД-kalkulátorából fejtettem vissza: 40 egymást követő dátumra kértem le az eredményt (ennyi lefedi az intellektuális marker mind a 33 értékét), és a Szahaszrara minden esetben **kizárólag az intellektuális kontúrszámtól** függött. Ugyanez a kalkulátor a másik hat csakrára pontosan a könyv 3. táblázatát adja vissza, ezért a Szahaszrara-oszlop valószínűleg a rendszer későbbi (II. részbeli vagy iskolabeli) bővítése — de **elsődleges forrással nem tudtam alátámasztani**.

### 6.5 Értelmezési skála

A könyv szerint:

| Sáv | Jelentés |
|---|---|
| 40 % alatt | gyenge potenciál (слабый потенциал) |
| 40–60 % | normál sáv, „ideális" |
| 60–99 % | túlzott potenciál (избыточный потенциал) |

A könyv hangsúlyozza, hogy a magas érték nem „jó", hanem **kezelendő**: a 60 % feletti Muladhara például tekintélyelvű, fáradhatatlan, de fizikai levezetés hiányában agresszióra hajlamos típust jelöl.

---

## 7. Ellenőrzés

### 7.1 1987. március 4. (a könyv saját példája)

| Lépés | Érték |
|---|---|
| Év-marker (1987) | 17 · 21 · 20 |
| Hónap-marker (III.) | 22 · 23 · 11 |
| Nap-marker | 31 − 4 = 27 |
| Oszlopösszeg | 66 · 71 · 58 |
| Kontúrszámok | **20 · 15 · 25** |

| Csakra | Számolt | Elvárt (könyv) | |
|---|---:|---:|---|
| Muladhara | 30 | 30 | ✅ |
| Szvadhisthana | 52 | 52 | ✅ |
| Manipura | 50 | 50 | ✅ |
| Anahata | 99 | 99 | ✅ |
| Visuddha | 29 | 29 | ✅ |
| Adzsna | 88 | 88 | ✅ |
| *Szahaszrara* | *80* | *(nincs a könyvben)* | — |

### 7.2 1982. december 12. (a könyv második, részleges példája)

Év-marker (1982) = `3 · 27 · 31`, hónap-marker (XII.) = `0 · 0 · 0`, nap-marker = `31 − 12 = 19`.
Fizikai oszlop: `3 + 0 + 19 = 22`, ami kisebb 23-nál, tehát marad **22** — **pontosan ezt írja a könyv**. ✅

*(A könyv e-book-változatának szövegében a másik két év-marker OCR-hibás: „37" és „32" áll a helyes 27 és 31 helyett; a táblázat-kép a 27 · 31 értéket mutatja.)*

### 7.3 1956. január 3. (a feladatban megadott magyar forrás példája)

| Lépés | Érték |
|---|---|
| Év-marker (1956) | 0 · 3 · 23 |
| Hónap-marker (I b, szökőév) | 13 · 27 · 5 |
| Nap-marker | 31 − 3 = 28 |
| Kontúrszámok | **18 · 2 · 23** |

| Csakra | Számolt | Magyar forrás | |
|---|---:|---:|---|
| Muladhara (gyökér) | 10 | 45 | ❌ |
| Szvadhisthana (szakrális) | 45 | 10 | ❌ |
| Manipura (köldök) | 75 | 45 | ❌ |
| Anahata (szív) | 27 | 75 | ❌ |
| Visuddha (torok) | 50 | 27 | ❌ |
| Adzsna (homlok) | 65 | 50 | ❌ |
| Szahaszrara (korona) | 58 | 65 | ❌ |

**Ez nem a számítás hibája, hanem egy eltolódás a magyar forrásban.** A magyar számsor `45, 10, 45, 75, 27, 50, 65`, a számolt `10, 45, 75, 27, 50, 65, 58`. A magyar lista **egy pozícióval eltolva** tartalmazza ugyanazokat az értékeket: a magyar „szakrális 10" a Muladhara 10, a magyar „köldök 45" a Szvadhisthana 45, és így tovább; a lista elején egy oda nem tartozó 45-ös áll, a végéről pedig hiányzik az 58. **A magyar forrás címkézése egy sorral elcsúszott.**

Független megerősítés: ugyanerre a dátumra a [chakrium.com](https://chakrium.com/) kalkulátora is a `10 · 45 · 75 · 27 · 50 · 65 · 58` sort adja.

### 7.4 Tömeges ellenőrzés

A képlet-alapú rekonstrukciót **minden évre 1900 és 2099 között** összevetettem egy független ХВД-kalkulátor (chakrium.com) kimenetével, évenként egy dátummal (június 15.), valamint további ~40 szórt dátummal, amelyek mind a 12 hónapot és a szökőévi február 29-ét is lefedik.

| Tartomány | Egyezés |
|---|---|
| 1900–2099, évi 1 minta (200 dátum) | **197 / 200** |
| Eltérő évek | 1901 (33-as oszlop), 1908 (23-as oszlop), 2098 (28-as oszlop) |
| Szórt dátumok (12 hónap, szökőév, 1900–2099) | **38 / 38** |

Mindhárom eltérő év pontosan ott tér el, ahol a **könyv nyomtatott táblázata** is eltér a képlettől — vagyis a kalkulátor a könyv tábláját tartalmazza, elgépelésestől. A 3. táblázat mind a 23 + 28 + 33 sorát külön-külön kiolvastam a kalkulátorból is, és **soronként megegyezik** a könyv táblázat-képével.

---

## 8. Referencia-implementáció

```javascript
const BASES = [23, 28, 33];
const EPOCH = Date.UTC(1981, 11, 31);          // 1981-12-31, a rendszer nullpontja
const DAY   = 86400000;

// 1. táblázat (év-marker) — a könyv elgépeléseit is tartalmazza
const YEAR_FIX = { 1901: [null, null, 18], 1908: [5, null, null], 2098: [null, 26, null] };

function yearMarker(y) {
  const n = (EPOCH - Date.UTC(y, 11, 31)) / DAY;
  const v = BASES.map(b => ((n % b) + b) % b);
  const fix = YEAR_FIX[y];
  if (fix) fix.forEach((f, k) => { if (f !== null) v[k] = f; });
  return v;
}

const dim = (y, m) => new Date(Date.UTC(y, m, 0)).getUTCDate();   // m: 1..12

// 2. táblázat (hónap-marker): a hónap UTÁNI hónapok napjainak összege
function monthMarker(y, m) {
  let s = 0;
  for (let k = m + 1; k <= 12; k++) s += dim(y, k);
  return BASES.map(b => s % b);
}

function contours(y, m, d) {
  const Y = yearMarker(y), M = monthMarker(y, m), N = dim(y, m) - d;
  return BASES.map((b, k) => (Y[k] + M[k] + N) % b);   // [fizikai, érzelmi, intellektuális]
}

// 3. táblázat: index = kontúrszám (0-alapú). A könyv 1..bázis számozásában
// a bázis-edik sor felel meg a 0 indexnek.
const T3_PHYS = [ // [Muladhara, Szvadhisthana]
  [25,51],[33,55],[55,72],[15,65],[50,72],[30,41],[75,21],[45,72],
  [60,22],[35,28],[35,49],[95,22],[30,99],[40,61],[20,55],[40,28],
  [90,21],[50,83],[10,45],[99,55],[30,52],[20,79],[80,63]];

const T3_EMO = [  // [Manipura, Anahata]
  [44,73],[69,95],[75,27],[31,45],[62,77],[50,59],[44,68],[12,45],
  [6,23],[81,54],[25,77],[18,50],[44,59],[25,68],[50,77],[50,99],
  [50,36],[50,41],[31,14],[99,54],[44,32],[62,41],[25,18],[69,59],
  [56,41],[44,68],[37,41],[56,73]];

const T3_INT = [  // [Visuddha, Adzsna, (Szahaszrara — nem a könyvből)]
  [29,82,77],[64,35,65],[21,65,72],[21,65,72],[93,82,56],[43,41,51],
  [0,99,100],[57,88,66],[7,41,67],[29,35,53],[86,35,76],[29,82,77],
  [86,41,73],[14,71,79],[50,59,55],[78,65,57],[93,24,85],[84,71,57],
  [29,41,56],[26,71,73],[99,82,59],[7,76,85],[14,35,61],[50,65,58],
  [26,18,54],[29,88,80],[93,59,67],[57,82,63],[29,29,50],[29,88,80],
  [71,47,62],[7,35,64],[64,59,53]];

function chakras(y, m, d) {
  const [f, e, i] = contours(y, m, d);
  return {
    muladhara:    T3_PHYS[f][0],
    svadhisthana: T3_PHYS[f][1],
    manipura:     T3_EMO[e][0],
    anahata:      T3_EMO[e][1],
    vishuddha:    T3_INT[i][0],
    ajna:         T3_INT[i][1],
    sahasrara:    T3_INT[i][2],   // nem az alapkönyvből
  };
}

// chakras(1987, 3, 4)
//  -> { muladhara:30, svadhisthana:52, manipura:50, anahata:99,
//       vishuddha:29, ajna:88, sahasrara:80 }
```

---

## 9. Kritikai megjegyzés

A rendszer **áltudomány**, és ezt érdemes pontosan megfogalmazni:

1. **A 23/28/33 napos bioritmus-elmélet cáfolt.** Több tucat kontrollált vizsgálat és összefoglaló (Terence Hines áttekintései) egybehangzóan azt találta, hogy a születésnaptól számolt fix hosszúságú „bioritmus"-ciklusok semmilyen teljesítmény-, baleseti vagy hangulati változót nem jósolnak a véletlennél jobban. Lásd a projekt [03-kronobiologia.md](03-kronobiologia.md) anyagát.
2. **A 3. táblázat teljesen önkényes.** Az 1. és 2. táblázat legalább *következetes* (naptári napszámlálás), a 3. viszont egy sehonnan le nem vezetett, kézzel megadott hozzárendelés. Nem derül ki, honnan származnak a százalékok.
3. **A „százalék" félrevezető.** A számok 0–100 közé esnek, de nem valaminek az arányát fejezik ki; összesen kb. 30–35 különböző érték ismétlődik.
4. **A rendszer determinisztikus és durva.** A teljes ciklus 23 · 28 · 33 = **21 252 nap ≈ 58,2 év**, tehát az ennyivel eltérő születésnapú emberek azonos profilt kapnak. A lehetséges kimenetek száma összesen 21 252 — a hét „csakra-százalék" gyakorlatilag egy naptári maradékosztály-címke.
5. **Tudományos irodalma nincs.** Zsazskovról, Szolodkijról és a „SZSZ-táblákról" recenzált publikáció nem található; a hivatkozási lánc kizárólag ezoterikus könyvekre és iskolákra vezet.

Az app szempontjából ez akkor használható tisztességesen, ha **szórakoztató/önismereti tartalomként**, a fentiek megjelölésével szerepel.

---

## 10. Források

**Elsődleges (a táblázatok innen származnak)**
- Ольга Бекенёва: *Самоучитель по хронально-векторной диагностике. Часть I* — a teljes szöveg és a beágyazott táblázat-képek: [flibusta.club/b/691555/read](https://flibusta.club/b/691555/read), [fictionbook.ru](https://fictionbook.ru/author/olga_bekenyova/chakryi_i_harakter_ili_kak_jit_v_resurse/read_online/), [libcat.ru](https://libcat.ru/knigi/nauka-i-obrazovanie/psihologiya/psy-personal/445477-olga-bekeneva-samouchitel-po-hronalno-vektornoj-diagnostike-chast-i.html)
- Ingyenes részlet a kiadóknál: [litres.com](https://litres.com/book/olga-bekeneva/samouchitel-po-hronalno-vektornoy-diagnostike-chast-i-67852821/read/), [mybook.ru](https://mybook.ru/author/olga-bekenyova/chakry-i-harakter-ili-kak-zhit-v-resurse/read/), [livelib.ru](https://www.livelib.ru/book/1204384/readpart-chakry-i-harakter-ili-kak-zhit-v-resurse-olga-bekenjova)
- A szerző saját oldala, könyvrészlettel: [chakra-numerolog.ru/preview-book](https://www.chakra-numerolog.ru/preview-book)

**Kalkulátorok (ellenőrzésre használva)**
- [chakrium.com](https://chakrium.com/) — szerveroldali ХВД-kalkulátor; az eredményt a HTML-be ágyazva adja vissza (`?birthday=ÉÉÉÉ-HH-NN`), ezért gépi ellenőrzésre alkalmas. Mind a 7 csakrát megadja.
- [chakra-diagnostic.com](https://chakra-diagnostic.com/) — a Buhtojarov-iskola oldala, ingyenes számítás + fizetős riportok
- [astronumex.com/chakroanaliz](https://astronumex.com/chakroanaliz), [yookarma.ru/calc/chakroanaliz](https://yookarma.ru/calc/chakroanaliz), [numeria.ru](https://numeria.ru/) — további ingyenes ХВД-kalkulátorok (mind szerveroldali, a táblázatok nincsenek a JS-ükben)

**Háttér, módszertörténet**
- [eliseru.ru — ХВД vs ЧАКРОАНАЛИЗ](https://eliseru.ru/helpful-articles/hvd-vs-chakroanaliz/) — a két elnevezés viszonya, a Zsazskov → Buhtojarov átadási lánc
- [in-contri.ru — Как работать с расчетом по чакрам](https://in-contri.ru/about-chakres/)
- [reikiblog.ru — ХВД — чакроанализ по дате рождения](https://www.reikiblog.ru/%D1%85%D0%B2%D0%B4-%D1%87%D0%B0%D0%BA%D1%80%D0%BE%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7-%D0%BF%D0%BE-%D0%B4%D0%B0%D1%82%D0%B5-%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F/)

**Módszertani megjegyzés a rekonstrukcióhoz**

Az 1. és 2. táblázatot először **visszafejtettem** a könyv egyetlen közölt példájából (1987 → 17 · 21 · 20, március → 22 · 23 · 11), kínai maradéktétellel megkeresve az `1981-12-31` horgonynapot. Ezután **megtaláltam a könyv eredeti táblázat-képeit** (base64-ben beágyazva a szabadon olvasható e-book-változatokba), és a képlet-alapú rekonstrukciót soronként összevetettem velük. A 3. táblázatot előbb egy kalkulátor 40 egymást követő dátumra adott kimenetéből építettem fel, majd a könyv 3. táblázat-képével **sorról sorra igazoltam** — az egyezés hiánytalan.
