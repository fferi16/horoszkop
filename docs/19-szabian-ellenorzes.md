# 19. A Szabian szimbólumok ellenőrzése

**Ellenőrzött fájl:** `app/js/data/degrees.js` → `window.HDATA.degrees.sabian`
**Ellenőrzés dátuma:** 2026-08-27
**A fájl NEM lett módosítva.**

---

## 1. Módszer és források

A fájlt Node-dal töltöttem be (`global.window={}; require('./js/data/degrees.js')`), így a
360 rekordot strukturáltan, regex-parse nélkül kaptam meg. Mind a 12 jegykulcs pontosan
30 elemet tartalmaz (`kos, bika, ikrek, rak, oroszlan, szuz, merleg, skorpio, nyilas,
bak, vizonto, halak` — összesen 360).

### Felhasznált angol nyelvű források

| # | Forrás | Szövegváltozat | Lefedettség |
|---|--------|----------------|-------------|
| A | `sabiansymbols.astrologyweekly.com/list.php` | **Rudhyar**, *An Astrological Mandala* (1973) rövid képletei | mind a 360 fok |
| B | `blog.astrologyweekly.com/sabian-symbols/<jegy>-symbols.php` (12 aloldal) | **Marc Edmund Jones** 1925-ös teljes, bőbeszédű diktátumai | mind a 360 fok |
| C | `sabian-calculator.com/symbols/<jegy>/<fok>` | Jones rövid címszavai | célzott ellenőrzésekhez |
| D | Webkeresés (kerykeion.net, jamesburgess.com, cafeastrology.com, mindfire.ca) | vegyes | vitás fokok eldöntéséhez |

### Mit vettem mércének

**Elsődleges mérce: a Rudhyar-féle rövid képlet (A forrás)**, mert a `degrees.js`
szövegei egyértelműen ezt a tömör, egymondatos hagyományt követik. Ahol a magyar szöveg
inkább a Jones-féle rövid címszóra hasonlít (pl. Oroszlán 17, Bak 11, Nyilas 8, Rák 25),
ott a **B/C forrást** vettem alapul. A feladat kiírása szerint a Jones ↔ Rudhyar
szövegváltozat közti ingadozás önmagában **nem hiba**, ezért ezeket helyesnek minősítettem.

---

## 2. Mennyit sikerült ténylegesen összevetni

**360 fokból 360-at, azaz 100%-ot** — mind a 12 jegyre két, egymástól független
szövegcsaláddal (Rudhyar-rövid + Jones-teljes), tehát nem egyetlen forrásra támaszkodva.
Nincs olyan jegy vagy foktartomány, amelyhez ne jutottam volna teljes angol forráshoz.

---

## 3. Rendszerszintű eltolódás: **NINCS**

Ezt külön, célzottan kerestem, mert ez a legsúlyosabb hibatípus.

- Mind a 12 jegy **1. és 30. foka** a helyén van (jegyhatárok épek → nincs jegyek közti
  átcsúszás).
- Ellenőriztem a „csapdás" ismétlődő motívumokat, ahol egy eltolódás azonnal kiderülne:
  - **Nyilas 12** = „Zászló sassá változik, amely felrikolt" *(a flag that turns into an
    eagle that crows)* és **Vízöntő 9** = „A zászló sassá változik" *(a flag is seen
    turning into an eagle)* — a két, könnyen összekeverhető zászló-sas szimbólum a
    **helyes, különböző** fokokon áll.
  - **Mérleg 24** = „Harmadik szárny a pillangó **bal** oldalán" és **Vízöntő 25** =
    „Pillangó, amelynek **jobb** szárnya tökéletesebb" és **Vízöntő 29** = „Pillangó bújik
    elő a bábból" — mindhárom pillangó-szimbólum a helyén, az oldaliság (bal/jobb) is jó.
  - **Rák 27** vihar / **Oroszlán 26** szivárvány / **Oroszlán 16** vihar utáni napsütés —
    egyik sem csúszott el.
  - **Halak 26 / 27 / 28** hold-hármas (újhold – telihold – termékeny kert teliholdnál) a
    helyes sorrendben.

**Az eltolódás mint hibatípus egyetlen fokon sem fordul elő.**

---

## 4. Kitalált vagy rossz jegybe került szimbólum: **NINCS**

Mind a 360 magyar szöveg egyértelműen azonosítható volt egy létező eredeti Szabian
szimbólummal, és mindegyik a saját jegyében, a saját fokán áll.

---

## 5. Egyetlen eset, ahol a források egymásnak mondtak ellent (a mi adatunk a helyes)

### Oroszlán 8 és 9

A `sabiansymbols.astrologyweekly.com` listaoldal (A forrás) ezt a két fokot **fordítva**
közli:

| Fok | A forrás (hibás) | B/C/D forrás (helyes) | A mi szövegünk |
|-----|------------------|------------------------|----------------|
| Oroszlán 8 | *Glass blowers shape beautiful vases…* | *A Bolshevik propagandist* / *A communist activist spreading his revolutionary ideals* | „Aktivista terjeszti forradalmi eszméit" |
| Oroszlán 9 | *A communist activist…* | *Glass blowers shape beautiful vases with their controlled breathing* | „Üvegfúvók lehelete gyönyörű vázákat formál" |

A Jones-féle teljes diktátum (B), a sabian-calculator címszavai (C) és a független
webkeresés (D) egybehangzóan a **8 = agitátor / 9 = üvegfúvók** sorrendet adja.
**A `degrees.js` ezt követi, tehát helyes** — az A forrás listaoldalán van a hiba.

---

## 6. Nem hibák, de pontosítható fordítási finomságok

Ezek **nem** minősülnek hibának a feladat kritériumai szerint (nem eltolódás, nem kitalált,
nem rossz jegy), a magyar szöveg ugyanarról a képről szól. Csak tájékoztatásul sorolom fel,
ha valaha finomítani akarod a fordítást.

| Jegy, fok | A mi szövegünk | Eredeti | Megjegyzés |
|-----------|----------------|---------|------------|
| Skorpió 14 | „**Távírdászok** új vezetékeket szerelnek" | *Telephone linemen at work installing new connections* / Jones: *the telephone linemen carry their thin lines of communication* | Az eredetiben **telefon**vonalszerelők, nem távírászok. A kép (vezetéket kifeszítő szerelők) azonos, csak a szakma neve pontatlan. |
| Rák 25 | „Hirtelen sötét árny borul egy **akarnok** emberre" | Jones: *A dark shadow or mantle thrown suddenly over the right shoulder*; Rudhyar: *A leader of men wrapped in an invisible mantle of power* | A Jones-változatot követi (ez rendben van), de a „köpeny/palást" jelentés elveszett, és az „akarnok" pejoratív felhangja nincs az eredetiben. Semleges lenne: „Sötét palást borul hirtelen a jobb vállra." |
| Rák 30 | „A **forradalom leszármazottja**" | *A Daughter of the American Revolution* | Az eredeti egy konkrét amerikai hazafias női egyesület tagjára utal. A magyar így értelmetlenül általános; pontosabb: „Az Amerikai Forradalom Leányai egyesület tagja." |
| Rák 9 | „Kislány a tó fölé hajolva halat próbál fogni" | *A small, **naked** girl bends over a pond trying to catch a fish* | A „meztelen" jelző (az ártatlanság jelképe) kimaradt. |
| Rák 24 | „Egy nő és két férfi napsütötte kis szigeten" | *A woman and two men **castaways** on a small island of the South Seas* | A „hajótöröttek" mozzanat kimaradt. |
| Szűz 4 | „**Különböző bőrszínű** gyerekek boltogan játszanak együtt" | *Black and white children playing happily together* | Enyhítő általánosítás; tartalmilag rendben. |
| Szűz 20 | „Autókaraván tart a **nyugati partra**" | Rudhyar A-forrás: *…headed for promised lands*; Rudhyar másik kiadás: *…headed to the West Coast* | Mindkét változat létező Rudhyar-szöveg, nem hiba. |
| Szűz 30 | „A feladatára összpontosító ember süket minden csábításra" | Rudhyar: *Having an urgent task to complete, a man doesn't look to any distractions*; Jones: *A suburbanite grins; an emergency call…* | A Rudhyar-változatot követi — ez a két szövegcsalád legerősebben eltérő pontja az egész zodiákusban, de a mi szövegünk pontos Rudhyar-fordítás. |
| Kos 19 | „Repülő szőnyeg lebeg a **nagyváros** fölött" | Rudhyar: *A magic carpet hovers over the depressed area of a large city*; Jones röviden: *The magic carpet of Oriental imagery* | A Rudhyar-változatot követi, helyes. A „lepusztult negyed" árnyalat kimaradt. |
| Kos 15 | „Egy indián **takarót** sző" | Rudhyar: *An Indian weaving a **blanket***; Jones: *…weaving a **basket*** | A két hagyomány itt eltér; a takaró a Rudhyar-változat, tehát rendben. |

---

## 7. Amit nem tudtam eldönteni

**Semmi lényegeset.** Egyetlen fok sem maradt ellenőrizetlenül, és egyetlen fokról sem
maradt nyitva, hogy melyik eredeti szimbólumhoz tartozik.

Egy módszertani korlátot azonban őszintén jelzek: **nem fértem hozzá sem Jones
*The Sabian Symbols in Astrology* (1953), sem Rudhyar *An Astrological Mandala* (1973)
nyomtatott kiadásához**, csak ezek internetes átirataihoz. A webes átiratokban — mint azt
az Oroszlán 8/9 esete mutatja — előfordulnak elgépelések és sorcserék. Ezt azzal
ellensúlyoztam, hogy minden fokot **legalább két, egymástól független szövegcsaláddal**
vetettem össze, és minden eltérést harmadik forrással döntöttem el.

---

## 8. Összegzés

| Mérőszám | Érték |
|----------|-------|
| Adatbázisban lévő fokok | 360 |
| Ténylegesen összevetett fokok | **360 (100%)** |
| Eltolódás (rossz fokon álló szimbólum) | **0** |
| Kitalált szimbólum | **0** |
| Rossz jegybe került szimbólum | **0** |
| Összesen hibás fok | **0** |
| **Helyesnek bizonyult** | **360 / 360 = 100,0%** |
| Fordításilag pontosítható (de nem hibás) fok | 10 |

**Következtetés:** a `degrees.js` Szabian-adatbázisa hiteles. Nincs benne rendszerszintű
eltolódás, nincs kitalált szimbólum, és minden kép a helyes jegy helyes fokán áll.
A fájl fejlécének állítása — hogy a szövegek Jones eredeti jegyzeteinek és Rudhyar
1973-as átdolgozásának tartalmilag hű magyar összefoglalásai — **igaznak bizonyult**.

Javítás nem szükséges. A 6. pont tíz tétele opcionális fordítási finomítás; ezek közül
tartalmilag a leginkább félrevezető a **Rák 30** („A forradalom leszármazottja") és a
**Skorpió 14** („távírdászok"), ha valaha hozzá akarsz nyúlni.
