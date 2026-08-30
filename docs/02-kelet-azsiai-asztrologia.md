# Kelet-ázsiai asztrológiai rendszerek — referenciadokumentum

> **Cél:** ez a dokumentum a kínai, koreai, japán, vietnami és tibeti asztrológiai rendszerek adatgazdag, fejlesztésre alkalmas referenciája. A táblázatok közvetlenül felhasználhatók horoszkóp-alkalmazás adatbázisának feltöltéséhez vagy tartalomgyártáshoz.
>
> **Fontos általános szabály:** a kelet-ázsiai állatöv-év NEM a Gergely-naptári évvel (jan. 1.) kezdődik, hanem a holdújévvel (kínai újév), amely évente változóan **január 21. és február 20. közé** esik. Aki januárban vagy február elején született, annak jegye jellemzően még az **előző** év állata! (Kivétel: a modern Japán, lásd 3. fejezet.)

---

## Tartalom

1. [Kínai asztrológia](#1-kínai-asztrológia)
2. [Koreai rendszer: Saju / Saju Palja](#2-koreai-rendszer-saju--saju-palja-사주팔자)
3. [Japán rendszerek](#3-japán-rendszerek)
4. [Vietnami zodiákus](#4-vietnami-zodiákus)
5. [Tibeti asztrológia](#5-tibeti-asztrológia)
6. [Kínai újév dátumai 2020–2035 (app-fejlesztéshez)](#6-a-kínai-újév-dátumai-2020–2035-app-fejlesztéshez)
7. [Források](#7-források)

---

# 1. Kínai asztrológia

## 1.1 Áttekintés

A kínai asztrológia (生肖 *shēngxiào* = „születési hasonlóság") alapja a **luniszoláris kínai naptár**. Három fő rétegből áll:

- **12 állatjegy** (Földi Ágak) — az év, a hónap, a nap és az óra is hordoz egy-egy állatot;
- **5 elem** (Wu Xing: Fa, Tűz, Föld, Fém, Víz) — mindegyik yin vagy yang polaritással;
- **60 éves szexagenáris ciklus** — a 10 Égi Törzs és a 12 Földi Ág kombinációja (10 és 12 legkisebb közös többszöröse = 60).

A 12 éves ciklus csillagászati háttere a **Jupiter ~11,86 éves keringési ideje** (a Jupitert „év-csillagnak", 歲星 *suìxīng*-nek nevezték). A rendszer legalább a Han-dinasztia koráig (i. e. 206 – i. sz. 220) visszavezethető.

## 1.2 A 12 állatjegy évtáblázata (1924–2044)

**⚠️ Dátumhatár-figyelmeztetés:** minden sor a **kínai újév napjától** érvényes, és a **következő kínai újév előtti napig** tart. A január 1. és a táblázatban jelzett dátum közé eső születésnapok az **előző sor** állatjegyéhez tartoznak! Példa: aki 1990. január 20-án született, az nem Ló, hanem **Föld-Kígyó** (az 1989-es év jegye), mert a Ló éve csak 1990. január 27-én kezdődött.

**Megjegyzés (Ba Zi):** a klasszikus Négy Pillér számításban az évhatár nem a holdújév, hanem a **Lìchūn (立春, „a tavasz kezdete")** szoláris terminus, amely mindig **február 3–5.** közé esik (lásd 1.8). A népi állatjegy-hagyomány viszont a holdújévet használja — egy app-ban érdemes mindkét módot felkínálni vagy a holdújévet használni alapértelmezésként.

| Gergely-év | Kínai újév kezdete | Állatjegy | Elem | Polaritás | Szexagenáris név (pinyin) |
|---|---|---|---|---|---|
| 1924 | 1924. febr. 5. | Patkány | Fa | yang | Jiǎzǐ |
| 1925 | 1925. jan. 24. | Bivaly | Fa | yin | Yǐchǒu |
| 1926 | 1926. febr. 13. | Tigris | Tűz | yang | Bǐngyín |
| 1927 | 1927. febr. 2. | Nyúl | Tűz | yin | Dīngmǎo |
| 1928 | 1928. jan. 23. | Sárkány | Föld | yang | Wùchén |
| 1929 | 1929. febr. 10. | Kígyó | Föld | yin | Jǐsì |
| 1930 | 1930. jan. 30. | Ló | Fém | yang | Gēngwǔ |
| 1931 | 1931. febr. 17. | Kecske | Fém | yin | Xīnwèi |
| 1932 | 1932. febr. 6. | Majom | Víz | yang | Rénshēn |
| 1933 | 1933. jan. 26. | Kakas | Víz | yin | Guǐyǒu |
| 1934 | 1934. febr. 14. | Kutya | Fa | yang | Jiǎxū |
| 1935 | 1935. febr. 4. | Disznó | Fa | yin | Yǐhài |
| 1936 | 1936. jan. 24. | Patkány | Tűz | yang | Bǐngzǐ |
| 1937 | 1937. febr. 11. | Bivaly | Tűz | yin | Dīngchǒu |
| 1938 | 1938. jan. 31. | Tigris | Föld | yang | Wùyín |
| 1939 | 1939. febr. 19. | Nyúl | Föld | yin | Jǐmǎo |
| 1940 | 1940. febr. 8. | Sárkány | Fém | yang | Gēngchén |
| 1941 | 1941. jan. 27. | Kígyó | Fém | yin | Xīnsì |
| 1942 | 1942. febr. 15. | Ló | Víz | yang | Rénwǔ |
| 1943 | 1943. febr. 5. | Kecske | Víz | yin | Guǐwèi |
| 1944 | 1944. jan. 25. | Majom | Fa | yang | Jiǎshēn |
| 1945 | 1945. febr. 13. | Kakas | Fa | yin | Yǐyǒu |
| 1946 | 1946. febr. 2. | Kutya | Tűz | yang | Bǐngxū |
| 1947 | 1947. jan. 22. | Disznó | Tűz | yin | Dīnghài |
| 1948 | 1948. febr. 10. | Patkány | Föld | yang | Wùzǐ |
| 1949 | 1949. jan. 29. | Bivaly | Föld | yin | Jǐchǒu |
| 1950 | 1950. febr. 17. | Tigris | Fém | yang | Gēngyín |
| 1951 | 1951. febr. 6. | Nyúl | Fém | yin | Xīnmǎo |
| 1952 | 1952. jan. 27. | Sárkány | Víz | yang | Rénchén |
| 1953 | 1953. febr. 14. | Kígyó | Víz | yin | Guǐsì |
| 1954 | 1954. febr. 3. | Ló | Fa | yang | Jiǎwǔ |
| 1955 | 1955. jan. 24. | Kecske | Fa | yin | Yǐwèi |
| 1956 | 1956. febr. 12. | Majom | Tűz | yang | Bǐngshēn |
| 1957 | 1957. jan. 31. | Kakas | Tűz | yin | Dīngyǒu |
| 1958 | 1958. febr. 18. | Kutya | Föld | yang | Wùxū |
| 1959 | 1959. febr. 8. | Disznó | Föld | yin | Jǐhài |
| 1960 | 1960. jan. 28. | Patkány | Fém | yang | Gēngzǐ |
| 1961 | 1961. febr. 15. | Bivaly | Fém | yin | Xīnchǒu |
| 1962 | 1962. febr. 5. | Tigris | Víz | yang | Rényín |
| 1963 | 1963. jan. 25. | Nyúl | Víz | yin | Guǐmǎo |
| 1964 | 1964. febr. 13. | Sárkány | Fa | yang | Jiǎchén |
| 1965 | 1965. febr. 2. | Kígyó | Fa | yin | Yǐsì |
| 1966 | 1966. jan. 21. | Ló | Tűz | yang | Bǐngwǔ |
| 1967 | 1967. febr. 9. | Kecske | Tűz | yin | Dīngwèi |
| 1968 | 1968. jan. 30. | Majom | Föld | yang | Wùshēn |
| 1969 | 1969. febr. 17. | Kakas | Föld | yin | Jǐyǒu |
| 1970 | 1970. febr. 6. | Kutya | Fém | yang | Gēngxū |
| 1971 | 1971. jan. 27. | Disznó | Fém | yin | Xīnhài |
| 1972 | 1972. febr. 15. | Patkány | Víz | yang | Rénzǐ |
| 1973 | 1973. febr. 3. | Bivaly | Víz | yin | Guǐchǒu |
| 1974 | 1974. jan. 23. | Tigris | Fa | yang | Jiǎyín |
| 1975 | 1975. febr. 11. | Nyúl | Fa | yin | Yǐmǎo |
| 1976 | 1976. jan. 31. | Sárkány | Tűz | yang | Bǐngchén |
| 1977 | 1977. febr. 18. | Kígyó | Tűz | yin | Dīngsì |
| 1978 | 1978. febr. 7. | Ló | Föld | yang | Wùwǔ |
| 1979 | 1979. jan. 28. | Kecske | Föld | yin | Jǐwèi |
| 1980 | 1980. febr. 16. | Majom | Fém | yang | Gēngshēn |
| 1981 | 1981. febr. 5. | Kakas | Fém | yin | Xīnyǒu |
| 1982 | 1982. jan. 25. | Kutya | Víz | yang | Rénxū |
| 1983 | 1983. febr. 13. | Disznó | Víz | yin | Guǐhài |
| 1984 | 1984. febr. 2. | Patkány | Fa | yang | Jiǎzǐ |
| 1985 | 1985. febr. 20. | Bivaly | Fa | yin | Yǐchǒu |
| 1986 | 1986. febr. 9. | Tigris | Tűz | yang | Bǐngyín |
| 1987 | 1987. jan. 29. | Nyúl | Tűz | yin | Dīngmǎo |
| 1988 | 1988. febr. 17. | Sárkány | Föld | yang | Wùchén |
| 1989 | 1989. febr. 6. | Kígyó | Föld | yin | Jǐsì |
| 1990 | 1990. jan. 27. | Ló | Fém | yang | Gēngwǔ |
| 1991 | 1991. febr. 15. | Kecske | Fém | yin | Xīnwèi |
| 1992 | 1992. febr. 4. | Majom | Víz | yang | Rénshēn |
| 1993 | 1993. jan. 23. | Kakas | Víz | yin | Guǐyǒu |
| 1994 | 1994. febr. 10. | Kutya | Fa | yang | Jiǎxū |
| 1995 | 1995. jan. 31. | Disznó | Fa | yin | Yǐhài |
| 1996 | 1996. febr. 19. | Patkány | Tűz | yang | Bǐngzǐ |
| 1997 | 1997. febr. 7. | Bivaly | Tűz | yin | Dīngchǒu |
| 1998 | 1998. jan. 28. | Tigris | Föld | yang | Wùyín |
| 1999 | 1999. febr. 16. | Nyúl | Föld | yin | Jǐmǎo |
| 2000 | 2000. febr. 5. | Sárkány | Fém | yang | Gēngchén |
| 2001 | 2001. jan. 24. | Kígyó | Fém | yin | Xīnsì |
| 2002 | 2002. febr. 12. | Ló | Víz | yang | Rénwǔ |
| 2003 | 2003. febr. 1. | Kecske | Víz | yin | Guǐwèi |
| 2004 | 2004. jan. 22. | Majom | Fa | yang | Jiǎshēn |
| 2005 | 2005. febr. 9. | Kakas | Fa | yin | Yǐyǒu |
| 2006 | 2006. jan. 29. | Kutya | Tűz | yang | Bǐngxū |
| 2007 | 2007. febr. 18. | Disznó | Tűz | yin | Dīnghài |
| 2008 | 2008. febr. 7. | Patkány | Föld | yang | Wùzǐ |
| 2009 | 2009. jan. 26. | Bivaly | Föld | yin | Jǐchǒu |
| 2010 | 2010. febr. 14. | Tigris | Fém | yang | Gēngyín |
| 2011 | 2011. febr. 3. | Nyúl | Fém | yin | Xīnmǎo |
| 2012 | 2012. jan. 23. | Sárkány | Víz | yang | Rénchén |
| 2013 | 2013. febr. 10. | Kígyó | Víz | yin | Guǐsì |
| 2014 | 2014. jan. 31. | Ló | Fa | yang | Jiǎwǔ |
| 2015 | 2015. febr. 19. | Kecske | Fa | yin | Yǐwèi |
| 2016 | 2016. febr. 8. | Majom | Tűz | yang | Bǐngshēn |
| 2017 | 2017. jan. 28. | Kakas | Tűz | yin | Dīngyǒu |
| 2018 | 2018. febr. 16. | Kutya | Föld | yang | Wùxū |
| 2019 | 2019. febr. 5. | Disznó | Föld | yin | Jǐhài |
| 2020 | 2020. jan. 25. | Patkány | Fém | yang | Gēngzǐ |
| 2021 | 2021. febr. 12. | Bivaly | Fém | yin | Xīnchǒu |
| 2022 | 2022. febr. 1. | Tigris | Víz | yang | Rényín |
| 2023 | 2023. jan. 22. | Nyúl | Víz | yin | Guǐmǎo |
| 2024 | 2024. febr. 10. | Sárkány | Fa | yang | Jiǎchén |
| 2025 | 2025. jan. 29. | Kígyó | Fa | yin | Yǐsì |
| 2026 | 2026. febr. 17. | Ló | Tűz | yang | Bǐngwǔ |
| 2027 | 2027. febr. 6. | Kecske | Tűz | yin | Dīngwèi |
| 2028 | 2028. jan. 26. | Majom | Föld | yang | Wùshēn |
| 2029 | 2029. febr. 13. | Kakas | Föld | yin | Jǐyǒu |
| 2030 | 2030. febr. 3. | Kutya | Fém | yang | Gēngxū |
| 2031 | 2031. jan. 23. | Disznó | Fém | yin | Xīnhài |
| 2032 | 2032. febr. 11. | Patkány | Víz | yang | Rénzǐ |
| 2033 | 2033. jan. 31. | Bivaly | Víz | yin | Guǐchǒu |
| 2034 | 2034. febr. 19. | Tigris | Fa | yang | Jiǎyín |
| 2035 | 2035. febr. 8. | Nyúl | Fa | yin | Yǐmǎo |
| 2036 | 2036. jan. 28. | Sárkány | Tűz | yang | Bǐngchén |
| 2037 | 2037. febr. 15. | Kígyó | Tűz | yin | Dīngsì |
| 2038 | 2038. febr. 4. | Ló | Föld | yang | Wùwǔ |
| 2039 | 2039. jan. 24. | Kecske | Föld | yin | Jǐwèi |
| 2040 | 2040. febr. 12. | Majom | Fém | yang | Gēngshēn |
| 2041 | 2041. febr. 1. | Kakas | Fém | yin | Xīnyǒu |
| 2042 | 2042. jan. 22. | Kutya | Víz | yang | Rénxū |
| 2043 | 2043. febr. 10. | Disznó | Víz | yin | Guǐhài |
| 2044 | 2044. jan. 30. | Patkány | Fa | yang | Jiǎzǐ |

*A dátumok forrása: chinesefortunecalendar.com (Hongkongi Obszervatórium adatai alapján); a szexagenáris név az Égi Törzs + Földi Ág pinyin átirata.*

## 1.3 A 12 állatjegy jellemvonásai

| # | Jegy | Kínai (pinyin) | Fix elem | Polaritás | Fő jellemvonások | Árnyoldalak |
|---|---|---|---|---|---|---|
| 1 | **Patkány** | 鼠 shǔ | Víz | yang | intelligens, alkalmazkodó, gyors észjárású, takarékos, sármos, találékony | kapzsi, gyanakvó, önző, nyugtalan |
| 2 | **Bivaly** (Ökör) | 牛 niú | Föld | yin | kitartó, megbízható, szorgalmas, türelmes, módszeres, becsületes | makacs, konzervatív, nehezen bocsát meg |
| 3 | **Tigris** | 虎 hǔ | Fa | yang | bátor, magabiztos, karizmatikus, versengő, igazságérzettel teli | vakmerő, indulatos, kiszámíthatatlan |
| 4 | **Nyúl** | 兔 tù | Fa | yin | szelíd, diplomatikus, elegáns, együttérző, óvatos, jó ízlésű | konfliktuskerülő, határozatlan, sértődékeny |
| 5 | **Sárkány** | 龙 lóng | Föld | yang | energikus, ambiciózus, nagyvonalú, vezéregyéniség, szerencsés | arrogáns, türelmetlen, uralkodó |
| 6 | **Kígyó** | 蛇 shé | Tűz | yin | bölcs, intuitív, elegáns, titokzatos, elemző, jó pénzügyi érzékű | féltékeny, zárkózott, birtokló |
| 7 | **Ló** | 马 mǎ | Tűz | yang | szabadságszerető, energikus, társasági, vidám, kalandvágyó | csapongó, türelmetlen, önfejű |
| 8 | **Kecske** (Juh) | 羊 yáng | Föld | yin | művészi, gyengéd, empatikus, békés, kreatív | aggodalmaskodó, passzív, pesszimizmusra hajló |
| 9 | **Majom** | 猴 hóu | Fém | yang | zseniális problémamegoldó, humoros, sokoldalú, kíváncsi | ravasz, felszínes, manipulatív |
| 10 | **Kakas** | 鸡 jī | Fém | yin | precíz, szorgalmas, őszinte, magabiztos, jó megfigyelő | kritikus, hiú, kérkedő |
| 11 | **Kutya** | 狗 gǒu | Föld | yang | hűséges, igazságos, őszinte, védelmező, megbízható | szorongó, cinikus, ítélkező |
| 12 | **Disznó** | 猪 zhū | Víz | yin | nagylelkű, jószívű, élvezetkedvelő, őszinte, toleráns | naiv, hiszékeny, önmérséklet hiánya |

*A „fix elem" (belső elem) az állat saját, állandó eleme — nem tévesztendő össze az évelemmel, amely 60 évenként forog (1.5).*

## 1.4 Kompatibilitás

### Trikonok (San He, 三合 — „három harmónia"): a legjobb társak

A 12 jegy négy harmonikus hármasságot (trikont) alkot; a trikon tagjai 4 év távolságra vannak egymástól, világképük hasonló:

| Trikon | Tagok | Közös jellem |
|---|---|---|
| 1. „Cselekvők" | **Patkány – Sárkány – Majom** | intenzív, kezdeményező, hatalomorientált |
| 2. „Gondolkodók" | **Bivaly – Kígyó – Kakas** | céltudatos, kitartó, módszeres |
| 3. „Függetlenek" | **Tigris – Ló – Kutya** | idealista, szabadságszerető, impulzív |
| 4. „Békeszeretők" | **Nyúl – Kecske – Disznó** | művészi, együttérző, harmóniakereső |

### Hat harmónia (Liu He, 六合) — „titkos barátok"

Páronkénti, különösen erős vonzalom:

| Pár | | Pár | |
|---|---|---|---|
| Patkány ↔ Bivaly | | Sárkány ↔ Kakas | |
| Tigris ↔ Disznó | | Kígyó ↔ Majom | |
| Nyúl ↔ Kutya | | Ló ↔ Kecske | |

### Hat ütközés (Liu Chong, 六冲) — a legrosszabb párosítások

A zodiákus-körben egymással szemben (6 év távolságra) álló jegyek ütköznek:

| Ütköző pár | | Ütköző pár | |
|---|---|---|---|
| Patkány ✕ Ló | | Nyúl ✕ Kakas | |
| Bivaly ✕ Kecske | | Sárkány ✕ Kutya | |
| Tigris ✕ Majom | | Kígyó ✕ Disznó | |

### További (finomabb) viszonyok

- **Hat ártalom (Liu Hai, 六害):** Patkány–Kecske, Bivaly–Ló, Tigris–Kígyó, Nyúl–Sárkány, Majom–Disznó, Kakas–Kutya — rejtett súrlódás.
- **Önbüntetés / büntetési csoportok (Xing, 刑):** pl. Tigris–Kígyó–Majom, Bivaly–Kecske–Kutya, Patkány–Nyúl; a Sárkány, a Ló, a Kakas és a Disznó „önmagát bünteti", ha kettőzve jelenik meg a képletben.
- Az ütköző jegy évében az adott jegy szülötte a **Tai Sui-t „sérti"** (犯太歲) — a hagyomány szerint az ilyen év nehezebb; ugyanez igaz a saját jegy évére (Ben Ming Nian, 本命年), amikor piros viselése ajánlott.

## 1.5 Az öt elem (Wu Xing, 五行) és a 60 éves ciklus

### Az elemek és tulajdonságaik

| Elem | Kínai | Évszak | Irány | Szín | Bolygó | Jellem-hozzáadás a jegyhez |
|---|---|---|---|---|---|---|
| **Fa** (mù) | 木 | tavasz | kelet | zöld | Jupiter | növekedés, kreativitás, idealizmus |
| **Tűz** (huǒ) | 火 | nyár | dél | vörös | Mars | szenvedély, dinamizmus, kifejezőerő |
| **Föld** (tǔ) | 土 | nyárutó | közép | sárga | Szaturnusz | stabilitás, gyakorlatiasság, megbízhatóság |
| **Fém** (jīn) | 金 | ősz | nyugat | fehér | Vénusz | fegyelem, határozottság, precizitás |
| **Víz** (shuǐ) | 水 | tél | észak | fekete/kék | Merkúr | bölcsesség, rugalmasság, intuíció |

### Tápláló és kontrolláló ciklus

- **Tápláló (sheng) kör:** Fa → táplálja a Tüzet → a Tűz hamuja Földet ad → a Föld Fémet terem → a Fém „összegyűjti" a Vizet → a Víz táplálja a Fát.
- **Kontrolláló (ke) kör:** Fa kimeríti a Földet → Föld felfogja a Vizet → Víz kioltja a Tüzet → Tűz megolvasztja a Fémet → Fém kivágja a Fát.

### Hogyan forog a 60 éves ciklus?

Minden elem **két egymást követő évet** ural (először yang, majd yin változatban), így 10 év alatt fordul körbe az öt elem, 12 év alatt a 12 állat — a kettő 60 évenként ér össze ugyanabban a kombinációban (pl. Fa-Patkány: 1924 → 1984 → 2044). Gyors képlet a Gergely-év **utolsó számjegyéből** (az évkezdő dátum figyelembevételével!):

| Év utolsó számjegye | Elem | Polaritás |
|---|---|---|
| 0 | Fém | yang |
| 1 | Fém | yin |
| 2 | Víz | yang |
| 3 | Víz | yin |
| 4 | Fa | yang |
| 5 | Fa | yin |
| 6 | Tűz | yang |
| 7 | Tűz | yin |
| 8 | Föld | yang |
| 9 | Föld | yin |

**Yin/yang évek:** páros Gergely-év = yang, páratlan = yin. A yang évekhez a „páratlan" (aktív) állatok tartoznak (Patkány, Tigris, Sárkány, Ló, Majom, Kutya), a yin évekhez a többiek (Bivaly, Nyúl, Kígyó, Kecske, Kakas, Disznó) — állat és évpolaritás mindig konzisztens.

**Elem-állat kombináció értelmezése:** az évelem árnyalja az állat alapkarakterét — pl. a **Tűz-Ló** (1966, 2026) a Ló legrobbanékonyabb, legszenvedélyesebb változata, míg a **Víz-Ló** (2002) diplomatikusabb, alkalmazkodóbb. Egy app-ban a 12 × 5 = 60 kombinációhoz érdemes külön leírást készíteni.

## 1.6 A belső állat (születési hónap)

A hagyomány szerint az évjegy a külvilág felé mutatott arc, a **hónap jegye a „belső állat"** — a motivációk, a magánélet jellege. A hónapokat a szoláris terminusok (jieqi) határolják, ezért a Gergely-dátumok ±1 napot ingadozhatnak évről évre:

| Hónapjegy | Időszak (közelítő) | Szoláris hónap kezdete |
|---|---|---|
| **Tigris** | febr. 4. – márc. 5. | Lìchūn (a tavasz kezdete) |
| **Nyúl** | márc. 6. – ápr. 4. | Jīngzhé |
| **Sárkány** | ápr. 5. – máj. 5. | Qīngmíng |
| **Kígyó** | máj. 6. – jún. 5. | Lìxià |
| **Ló** | jún. 6. – júl. 6. | Mángzhòng |
| **Kecske** | júl. 7. – aug. 7. | Xiǎoshǔ |
| **Majom** | aug. 8. – szept. 7. | Lìqiū |
| **Kakas** | szept. 8. – okt. 7. | Báilù |
| **Kutya** | okt. 8. – nov. 6. | Hánlù |
| **Disznó** | nov. 7. – dec. 6. | Lìdōng |
| **Patkány** | dec. 7. – jan. 5. | Dàxuě |
| **Bivaly** | jan. 6. – febr. 3. | Xiǎohán |

## 1.7 A titkos állat (születési óra) — a 12 kettős óra

A nap 12 kétórás egységre (時辰 *shíchen*) oszlik; a születési óra jegye a **„titkos állat"** — a legbelső én, amelyet csak a legközelebbiek ismernek. (A hagyomány a **valódi szoláris időt** használja; app-ban a helyi zónaidő + hosszúsági korrekció adja a pontos eredményt.)

| Óra (Földi Ág) | Időintervallum | Titkos állat | Hagyományos név |
|---|---|---|---|
| Zǐ 子 | 23:00 – 00:59 | Patkány | éjfél órája |
| Chǒu 丑 | 01:00 – 02:59 | Bivaly | kakasszó előtti óra |
| Yín 寅 | 03:00 – 04:59 | Tigris | hajnalhasadás |
| Mǎo 卯 | 05:00 – 06:59 | Nyúl | napkelte |
| Chén 辰 | 07:00 – 08:59 | Sárkány | reggeli óra |
| Sì 巳 | 09:00 – 10:59 | Kígyó | délelőtt |
| Wǔ 午 | 11:00 – 12:59 | Ló | dél |
| Wèi 未 | 13:00 – 14:59 | Kecske | kora délután |
| Shēn 申 | 15:00 – 16:59 | Majom | délután |
| Yǒu 酉 | 17:00 – 18:59 | Kakas | napnyugta |
| Xū 戌 | 19:00 – 20:59 | Kutya | szürkület |
| Hài 亥 | 21:00 – 22:59 | Disznó | éjszaka kezdete |

## 1.8 Ba Zi / Négy Pillér (四柱八字) alapjai

A **Ba Zi** („nyolc írásjegy") a kínai sorselemzés legfejlettebb formája: a születés **évének, hónapjának, napjának és órájának** mindegyikéhez egy Égi Törzs + Földi Ág pár (= egy „pillér") tartozik → 4 pillér × 2 jegy = 8 írásjegy.

### A 10 Égi Törzs (Tiān Gān, 天干)

| # | Törzs | Kínai | Elem | Polaritás | Képi jelentés |
|---|---|---|---|---|---|
| 1 | Jiǎ | 甲 | Fa | yang | szálfa, nagy fa |
| 2 | Yǐ | 乙 | Fa | yin | virág, fű, inda |
| 3 | Bǐng | 丙 | Tűz | yang | nap, nagy láng |
| 4 | Dīng | 丁 | Tűz | yin | gyertyaláng, mécses |
| 5 | Wù | 戊 | Föld | yang | hegy, szikla |
| 6 | Jǐ | 己 | Föld | yin | termőföld, kert |
| 7 | Gēng | 庚 | Fém | yang | kard, nyersfém |
| 8 | Xīn | 辛 | Fém | yin | ékszer, finom fém |
| 9 | Rén | 壬 | Víz | yang | óceán, folyam |
| 10 | Guǐ | 癸 | Víz | yin | eső, harmat, forrás |

### A 12 Földi Ág (Dì Zhī, 地支)

| # | Ág | Kínai | Állat | Fő elem | Hónap | Óra |
|---|---|---|---|---|---|---|
| 1 | Zǐ | 子 | Patkány | Víz (yang) | dec. | 23–01 |
| 2 | Chǒu | 丑 | Bivaly | Föld (yin) | jan. | 01–03 |
| 3 | Yín | 寅 | Tigris | Fa (yang) | febr. | 03–05 |
| 4 | Mǎo | 卯 | Nyúl | Fa (yin) | márc. | 05–07 |
| 5 | Chén | 辰 | Sárkány | Föld (yang) | ápr. | 07–09 |
| 6 | Sì | 巳 | Kígyó | Tűz (yin) | máj. | 09–11 |
| 7 | Wǔ | 午 | Ló | Tűz (yang) | jún. | 11–13 |
| 8 | Wèi | 未 | Kecske | Föld (yin) | júl. | 13–15 |
| 9 | Shēn | 申 | Majom | Fém (yang) | aug. | 15–17 |
| 10 | Yǒu | 酉 | Kakas | Fém (yin) | szept. | 17–19 |
| 11 | Xū | 戌 | Kutya | Föld (yang) | okt. | 19–21 |
| 12 | Hài | 亥 | Disznó | Víz (yin) | nov. | 21–23 |

*(A Földi Ágak „rejtett törzseket" is tartalmaznak — pl. a Yín 寅 fő eleme a yang Fa, de rejtve Tüzet és Földet is hordoz; ez a mélyebb Ba Zi-elemzés alapja.)*

### A négy pillér jelentésrétegei

| Pillér | Életterület | Életszakasz |
|---|---|---|
| **Év pillére** | ősök, család, társadalmi közeg | gyermekkor (0–16 év) |
| **Hónap pillére** | szülők, karrier, lehetőségek | fiatal felnőttkor (17–32) |
| **Nap pillére** | maga a személy (**Nap Ura**, 日主) és a házastárs | felnőttkor (33–48) |
| **Óra pillére** | gyermekek, ambíciók, örökség | időskor (49–) |

- A **Nap Ura (Day Master)** — a nap pillérének Égi Törzse — a képlet középpontja: a többi elemhez fűződő viszonyából származnak a **Tíz Isten** (十神) szerepkörei (vagyon, hatalom, erőforrás, kifejezés, társ).
- Az elemzés célja az elem-egyensúly feltárása és a **hasznos elem** (用神 *yòngshén*) megtalálása.
- A **szerencsepillérek** (大運 *dàyùn*) 10 éves szakaszokban írják le az életút változó energiáit.
- **Évhatár:** a Ba Zi a **Lìchūn**-t (febr. 3–5.) használja évkezdetként, a hónaphatárok a szoláris terminusok — nem a holdhónapok!

---

# 2. Koreai rendszer: Saju / Saju Palja (사주팔자)

## 2.1 Mi a Saju?

A **Saju** (사주, „négy pillér"), teljes nevén **Saju Palja** (사주팔자, „négy pillér, nyolc írásjegy") a kínai Ba Zi koreai megfelelője. Kínából a Három Királyság korában (kb. 4–7. század) került Koreába, és önálló mesterhagyományokká fejlődött.

## 2.2 Egyezések a kínai Ba Zi-val

- **Azonos matematikai alap:** ugyanaz a 10 Égi Törzs + 12 Földi Ág, ugyanazok a pillérek — helyes naptárkonverzióval **ugyanabból a születési adatból ugyanaz a képlet** jön ki mindkét rendszerben.
- Azonos az öt elem tana, a Tíz Isten (십신 *sipsin*) rendszere és a szerencsepillérek (대운 *daeun*) logikája.

## 2.3 Eltérések

| Szempont | Kínai Ba Zi | Koreai Saju |
|---|---|---|
| Hangsúly | technikai-metafizikai rendszer (hasznos elem, vagyonstruktúra, feng shuival összekapcsolva) | gyakorlatias, közvetlen életvezetési tanácsadás |
| Tíz Isten | fontos eszköz a sok közül | kiemelten hangsúlyos, az elemzés gerince |
| Társadalmi jelenlét | inkább szaktanácsadói műfaj | tömegkultúra: saju-kávézók, mobilappok, randevú-téma |
| Időszámítás | kínai zónaidő / valódi szoláris idő | koreai gyakorlatban a KST-hez képest kb. **–30 perc** korrekció szokásos (Korea tényleges hosszúsága miatt) |

## 2.4 A koreai zodiákus: tti (띠)

A 12 állat megegyezik a kínaival (Korea a **Nyulat** és a **Juhot/Kecskét** is megtartja): 쥐 (patkány), 소 (ökör), 호랑이 (tigris), 토끼 (nyúl), 용 (sárkány), 뱀 (kígyó), 말 (ló), 양 (juh), 원숭이 (majom), 닭 (kakas), 개 (kutya), 돼지 (disznó). Az adott évben születettek „X-tti"-k (pl. 말띠 *mal-tti* = ló-évi).

**Évhatár-sajátosság:** a hétköznapokban sokan a Gergely-naptári jan. 1-től vagy a koreai holdújévtől (**Seollal**, 설날 — dátuma megegyezik a kínai újévvel) számolják a jegyet, a hagyományos saju-számítás viszont az **ipchun**-tól (입춘 = Lìchūn, febr. 3–5.). Egy app-ban ezt érdemes explicit beállításként kezelni.

## 2.5 Kulturális szerep

- **Gunghap (궁합) — párkompatibilitás:** házasság vagy komoly kapcsolat előtt a két fél saju-képletének összevetése máig élő gyakorlat; randevúkultúrában is gyakori beszédtéma. Rossz gunghap miatt házasságok hiúsultak/hiúsulnak meg.
- **Névadás (작명 *jakmyeong*):** a gyermek nevét gyakran a saju elemhiányait pótló hanja-írásjegyekkel választják ki, névadó mesterek segítségével.
- **Újévi jóslás:** Seollal környékén tömegek kérnek éves saju-kitekintést (신년운세 *sinnyeon unse*).

## 2.6 Tojŏng pigyŏl (토정비결, Tojeong-bigyeol)

Koreai **újévi jóskönyv**, amelyet a hagyomány a 16. századi tudós **Yi Ji-ham** (írói nevén *Tojeong*) alakjához köt; mai formájában a 19. század óta terjed. Jellemzői:

- A születési **év, hónap és nap** adataiból (óra nélkül!) három számjegyet képez, és ezek alapján **144 lehetséges kombináció** egyikéhez rendel verses jóslatot az új évre, havi bontásban.
- A holdújév (Seollal) körüli időszak népszokása; ma már online kalkulátorok és mobilappok is kínálják.
- Egyszerűsége miatt (nincs szükség pontos születési órára) app-funkciónak kifejezetten alkalmas „éves koreai jóslat" modulként.

---

# 3. Japán rendszerek

## 3.1 A japán zodiákus: eto (干支) / jūnishi (十二支)

A 12 állat rendszere Kínából érkezett, de több ponton sajátos:

| Sajátosság | Részletek |
|---|---|
| **Évkezdet: január 1.!** | Japán 1873-ban (Meidzsi-reform) áttért a Gergely-naptárra, ezért a zodiákus-év a **naptári évvel együtt** vált — nincs mozgó jan/feb határ. Ugyanaz a személy tehát a japán és a kínai rendszerben eltérő jegyű lehet, ha januárban–február elején született! |
| **Vaddisznó a Disznó helyett** | A 12. jegy Japánban az **inoshishi (猪, vaddisznó)** — a kínai házi disznó helyett. A vaddisznó a bátorság és elszántság jelképe. |
| **A Nyúl éve: usagi (卯/兎)** | Japán megtartja a nyulat; a nyúl-motívum (holdbéli nyúl) a japán folklór kedvelt alakja. |
| **Juh: hitsuji (未/羊)** | a Kecske helyett egyértelműen juh. |
| Nengajō | Az újévi üdvözlőlapokon (年賀状) az adott év állata a fő motívum — hatalmas kulturális iparág. |
| **Yakudoshi** kapcsolódás | a „balszerencsés évek" (férfi: 25, 42, 61; nő: 19, 33, 37) számítása szintén az évjegyekhez kötődő népszokás. |
| **Hinoe-uma (丙午, Tűz-Ló)** | Híres demográfiai adat: az 1966-os Tűz-Ló évben a japán születésszám kb. **25%-kal zuhant**, mert a néphit szerint a Tűz-Ló évében született nők „veszélyesek a férjükre". A következő Tűz-Ló év: **2026**. |

A teljes **eto** (干支) szó valójában a 10 törzs + 12 ág 60-as ciklusát jelenti (jikkan-jūnishi), de a köznyelvben az évek állatjegyére használják.

## 3.2 Vércsoport-személyiségtan: ketsueki-gata (血液型)

A modern Japán (és Dél-Korea) legelterjedtebb „horoszkóp-pótléka": a hiedelem szerint az **ABO-vércsoport meghatározza a személyiséget**. Tudományos alapja nincs (a pszichológiai kutatások nem igazolták), kulturális ereje viszont hatalmas: társkereső profilok, állásinterjúk, anime-karakterlapok visszatérő adata.

**Történet:** Furukawa Takedzsi 1927-es cikke vetette fel; az 1970-es években **Nomi Maszahiko** könyvei tették tömegjelenséggé. Árnyoldala a **bura-hara** (blood-type harassment): vércsoport alapú megkülönböztetés.

| Vércsoport | Aránya Japánban (kb.) | Pozitív vonások | Negatív vonások | Sztereotip címke |
|---|---|---|---|---|
| **A** | ~40% | rendszerető, megbízható, precíz, türelmes, tapintatos | túlfeszült, merev, aggodalmaskodó, konfliktuskerülő | „a komoly" (majime) |
| **O** | ~30% | magabiztos, nagyvonalú, célratörő, természetes vezető, optimista | önérzetes, versengő, nemtörődöm a részletekkel | „a vezér" |
| **B** | ~20% | kreatív, szenvedélyes, önálló, rugalmas, kíváncsi | szeszélyes, önző, felelőtlennek látott | „a szabad szellem" |
| **AB** | ~10% | racionális, hűvös fejű, sokoldalú, alkalmazkodó | távolságtartó, kiszámíthatatlan, „kétarcú" | „a különc zseni" |

**Kompatibilitási közhelyek:** A–A (harmonikus, de feszült), A–O (klasszikus „jó pár"), B–O (szórakoztató), A–B (súrlódásos), AB bárkivel „rejtély". App-ötlet: a vércsoport-modul jól kombinálható a nyugati és kínai jeggyel „háromdimenziós" profillá.

## 3.3 Rokuyō (六曜) — a hatnapos szerencsenaptár

Hat, ciklikusan ismétlődő nap, amely a japán naptárakban máig fel van tüntetve; esküvő- és temetésszervezésnél a gyakorlatban is számít:

| Nap | Kanji | Jelentés / szabály |
|---|---|---|
| **Senshō** | 先勝 | „aki előbb lép, nyer" — a délelőtt szerencsés, a délután nem |
| **Tomobiki** | 友引 | „barátot húz magával" — jó nap, de **temetésre tilos** (a halott „magával húzná" barátait) |
| **Senbu** | 先負 | „aki előbb lép, veszít" — délelőtt kerülendő, délután rendben |
| **Butsumetsu** | 仏滅 | „Buddha halála" — a **legszerencsétlenebb** nap; esküvőt kerülik (olcsóbbak a termek!) |
| **Taian** | 大安 | „nagy béke" — a **legszerencsésebb** nap; esküvők, nyitások kedvelt napja |
| **Shakkō** | 赤口 | „vörös száj" — baljós nap, csak a déli óra (11–13) szerencsés |

A sorrend a holdnaptár hónapkezdeteihez igazodva újraindul, ezért a Gergely-naptárban szabálytalannak tűnik — app-ban holdnaptár-konverzióval számítható.

---

# 4. Vietnami zodiákus

A vietnami rendszer (Tử Vi hagyomány, 12 con giáp) a kínaiból ered — az évhatár a **Tết** (vietnami holdújév), amely szinte mindig egybeesik a kínai újévvel (ritkán, az eltérő időzóna — Vietnam UTC+7, Kína UTC+8 — miatt 1 nap, kivételesen egy teljes holdhónap eltérés is előfordult, pl. 1985-ben). Három állat azonban eltér:

| Pozíció | Kínai jegy | Vietnami jegy | Magyarázat |
|---|---|---|---|
| 2. | Ökör/Bivaly (niú) | **Vízibivaly** (Sửu — con trâu) | a vietnami rizstermesztés igavonója a vízibivaly; kulturálisan is központi állat |
| 4. | **Nyúl** (tù) | **Macska** (Mão/Mẹo — con mèo) | fő magyarázat nyelvi: a kínai „mǎo" (卯) hangzása egybecseng a vietnami „mèo" (macska) szóval; más értelmezés szerint a nyúl–patkány „hasonlósága" miatt cserélték le |
| 8. | Juh/Kecske (yáng) | egyértelműen **Kecske** (Mùi — con dê) | a kecske elterjedtebb a vietnami vidéken |

A teljes vietnami sor: **Tý** (patkány), **Sửu** (vízibivaly), **Dần** (tigris), **Mão** (macska), **Thìn** (sárkány), **Tỵ** (kígyó), **Ngọ** (ló), **Mùi** (kecske), **Thân** (majom), **Dậu** (kakas), **Tuất** (kutya), **Hợi** (disznó).

**A Macska éve** (a kínai Nyúl évének megfelelője, pl. 2023) a vietnami értelmezésben nem a szelídség, hanem az **ügyesség, éberség, önállóság** éve — a macska-szülöttek intuitívnak, ambiciózusnak és óvatosnak számítanak. Az öt elem és a 60-as ciklus (can chi) a kínaival azonos módon működik.

**App-fejlesztési következmény:** a vietnami lokalizációhoz elegendő a jegynevek cseréje (Nyúl→Macska, Ökör→Vízibivaly) — az évszámítás, elemek és kompatibilitási táblák változatlanok maradhatnak.

---

# 5. Tibeti asztrológia

A tibeti asztrológia (bod-kyi rtsis-rig, röviden **Tsi**) tudatosan **két hagyomány szintézise**, és szorosan összefonódik a tibeti orvoslással (Sowa Rigpa):

| Ág | Tibeti név | Eredet | Tárgya |
|---|---|---|---|
| **Jungtsi** (byung rtsis), más néven „fekete asztrológia" (nagtsi) | elemi asztrológia | **kínai** rendszerből | 12 állat, 5 elem, mewa, parkha — születési képlet, évminőség, kompatibilitás |
| **Kartsi** (skar rtsis), „fehér asztrológia" | csillag-asztrológia | **indiai** (Kálacsakra-tantra, dzsjótis) | bolygómozgások, holdházak (27 nakshatra), naptárkészítés, időzítés |

## 5.1 A Jungtsi építőelemei

- **12 állat:** azonos a kínai sorral (a Nyúl helyén a tibeti hagyomány **Mezei nyulat/Hare-t**, a Disznó helyén gyakran Vaddisznót nevez meg). Az évek a **Loszár**-ral (tibeti újév) kezdődnek, amely legtöbbször a kínai újév közelébe esik, de a tibeti naptárszámítás miatt akár **egy hónappal is eltérhet**.
- **5 elem:** Fa, Tűz, Föld, Fém (Vas), Víz — minden elem 2 évig tart (hím/férfi = yang, majd nőstény/női = yin év).
- **60 éves ciklus (rabjung):** az első ciklust 1027-től számítják (a Kálacsakra Tibetbe érkezése); a tibeti ciklus a **Tűz-Nyúl** évvel kezdődik (nem a Fa-Patkánnyal, mint a kínai).

## 5.2 Mewa (sme ba) — a 9 szám

Kilenc számjegy 3×3-as **bűvös négyzetben** (minden sor/oszlop/átló összege 15, ún. „Szaturnusz-négyzet"), amely évente hátrafelé lépve vándorol. Mindegyik számhoz szín és jelentés tartozik:

| Mewa | Szín | Kapcsolódó terület |
|---|---|---|
| 1 | fehér | gyógyítás, spiritualitás |
| 2 | fekete | akadályok, betegséghajlam |
| 3 | kék (türkiz) | víz-energia, érzelmek |
| 4 | zöld | mozgás, kommunikáció |
| 5 | sárga | középpont, hatalom, stabilitás |
| 6 | fehér | védelem, istenségek támogatása |
| 7 | vörös | szenvedély, konfliktus |
| 8 | fehér | jólét, hosszú élet |
| 9 | bordó/vörös | erő, beteljesülés |

A születési mewa a **múltbeli életek karmájára**, az egészségre és az életerőre vonatkozó kulcs; évente kiszámítható az „aktuális mewa" is.

## 5.3 Parkha (spar kha) — a 8 trigram

A kínai *ba gua* (a Ji Csing nyolc trigramja) tibeti megfelelője: **Li** (tűz), **Khon** (föld), **Da** (fém/tó), **Khen** (ég), **Kham** (víz), **Gin** (hegy), **Zin** (fa/mennydörgés), **Zon** (szél). A születési parkha a kedvező/kedvezőtlen égtájakat, az egészségi hajlamokat és az éves szerencsét jelzi.

## 5.4 Alkalmazás

A tibeti asztrológus a képletből **életerő (sok), egészség (lü), hatalom (wangthang) és szerencse (lungta)** oszlopokat számol; házassági kompatibilitást, utazási és szertartási időpontokat, illetve a halál utáni teendőket is ebből határozzák meg. App-kontextusban a mewa + állatjegy + elem kombináció adja a legkönnyebben implementálható tibeti modult.

---

# 6. A kínai újév dátumai 2020–2035 (app-fejlesztéshez)

Az állatév a megadott naptól a következő újév **előtti napjáig** tart. (Forrás: Hongkongi Obszervatórium / chinesefortunecalendar.com; a dátumok a kínai időzóna, UTC+8 szerint értendők.)

| Gergely-év | Kínai újév napja | Az év vége | Állatjegy | Elem | Szexagenáris név |
|---|---|---|---|---|---|
| 2020 | 2020. január 25. | 2021. február 11. | Patkány | Fém (yang) | Gēngzǐ 庚子 |
| 2021 | 2021. február 12. | 2022. január 31. | Bivaly | Fém (yin) | Xīnchǒu 辛丑 |
| 2022 | 2022. február 1. | 2023. január 21. | Tigris | Víz (yang) | Rényín 壬寅 |
| 2023 | 2023. január 22. | 2024. február 9. | Nyúl | Víz (yin) | Guǐmǎo 癸卯 |
| 2024 | 2024. február 10. | 2025. január 28. | Sárkány | Fa (yang) | Jiǎchén 甲辰 |
| 2025 | 2025. január 29. | 2026. február 16. | Kígyó | Fa (yin) | Yǐsì 乙巳 |
| 2026 | 2026. február 17. | 2027. február 5. | Ló | Tűz (yang) | Bǐngwǔ 丙午 |
| 2027 | 2027. február 6. | 2028. január 25. | Kecske | Tűz (yin) | Dīngwèi 丁未 |
| 2028 | 2028. január 26. | 2029. február 12. | Majom | Föld (yang) | Wùshēn 戊申 |
| 2029 | 2029. február 13. | 2030. február 2. | Kakas | Föld (yin) | Jǐyǒu 己酉 |
| 2030 | 2030. február 3. | 2031. január 22. | Kutya | Fém (yang) | Gēngxū 庚戌 |
| 2031 | 2031. január 23. | 2032. február 10. | Disznó | Fém (yin) | Xīnhài 辛亥 |
| 2032 | 2032. február 11. | 2033. január 30. | Patkány | Víz (yang) | Rénzǐ 壬子 |
| 2033 | 2033. január 31. | 2034. február 18. | Bivaly | Víz (yin) | Guǐchǒu 癸丑 |
| 2034 | 2034. február 19. | 2035. február 7. | Tigris | Fa (yang) | Jiǎyín 甲寅 |
| 2035 | 2035. február 8. | 2036. január 27. | Nyúl | Fa (yin) | Yǐmǎo 乙卯 |

## Fejlesztői jegyzetek

- **Ne képlettel számold az újév napját** — a holdújév csillagászati számítást igényel (újhold + szoláris terminusok, UTC+8). A legbiztosabb egy **lookup-tábla** (a fenti + az 1.2-es táblázat lefedi 1924–2044-et).
- Gyors jegy-képletek (csak az újév utáni születésekre): `állat_index = (év - 4) % 12` (0 = Patkány), `törzs_index = (év - 4) % 10`, elem = törzs_index / 2 (0 = Fa, 1 = Tűz, 2 = Föld, 3 = Fém, 4 = Víz), polaritás = év párossága (páros = yang).
- **Határnapok kezelése:** jan. 1. és az adott évi újév közötti születés → előző év jegye. Kínálj opciót a Ba Zi-féle Lìchūn-határra (febr. 3–5.) is.
- **Időzóna:** a klasszikus számítás a kínai (UTC+8) naptárnapot használja; vietnami lokalizációnál UTC+7, koreainál a −30 perces saju-korrekció merülhet fel.
- **Órajegy** (titkos állat) számításánál a 23:00–00:59 sáv a **következő nap** Patkány-órájának számít a Ba Zi-ban (éjfél után kezdődő nappillér-kérdés: iskolánként eltér, dokumentáld a választott konvenciót!).

---

# 7. Források

- China Highlights — Chinese Zodiac: https://www.chinahighlights.com/travelguide/chinese-zodiac/ és https://www.chinahighlights.com/travelguide/chinese-zodiac/years.htm
- Chinese Fortune Calendar — New Year Days 1900–2050: https://www.chinesefortunecalendar.com/TDB/NewYearDays.asp
- chinesenewyear.net — Zodiac & compatibility: https://chinesenewyear.net/zodiac/
- Travel China Guide — Zodiac years chart: https://www.travelchinaguide.com/intro/chinese-zodiac-years-chart.htm
- Purplestarmapper — What Is Saju? Korean Four Pillars vs Bazi: https://www.purplestarmapper.com/en/blog/what-is-saju-korean-four-pillars
- Sajumuse — Saju vs BaZi: Key Differences: https://www.sajumuse.com/blog/saju-vs-bazi-korean-vs-chinese-four-pillars-explained
- Uranao — Saju vs BaZi vs Japanese astrology: https://www.uranao.ai/learn/what-is-saju-korean-four-pillars-vs-bazi-japanese-astrology
- FluentU — Zodiac Signs in Japanese (eto, ketsueki-gata): https://www.fluentu.com/blog/japanese/zodiac-signs-in-japanese/
- rokuyo.org — Japanese zodiac & rokuyō reference: https://rokuyo.org/reference/zodiac.php
- Japanese Zodiac Org — Year of the Boar (inoshishi): https://japanesezodiac.org/japanese-zodiac-sign-of-the-boar-inoshishi.html
- Wikipedia — Vietnamese zodiac: https://en.wikipedia.org/wiki/Vietnamese_zodiac ; Cat (zodiac): https://en.wikipedia.org/wiki/Cat_(zodiac) ; Water buffalo (zodiac): https://en.wikipedia.org/wiki/Water_buffalo_(zodiac)
- VinWonders — Vietnamese zodiac overview: https://vinwonders.com/en/wonderpedia/news/vietnamese-zodiac/
- Tibetan Buddhist Encyclopedia — Elemental Astrology (Jungtsi): https://tibetanbuddhistencyclopedia.com/en/index.php/Elemental_Astrology
- sorig.net (Men-Tsee-Khang) — Tibetan Astrology: https://www.sorig.net/about/what-is-sowa-rigpa/tibetan-astrology
- tibetanastrology.org — Birth element, animal sign, mewa: https://tibetanastrology.org/

*Utolsó frissítés: 2026. augusztus 26.*
