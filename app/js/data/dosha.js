/* dosha.js — váta / pitta / kapha a jyotisha klasszikus szövegei szerint
 * Sima script (nem ES modul), UTF-8. Forrás: docs/26-dosha.md
 *   BPHS 3.20, 3.23–30, 4.5 · Sāravalī 3.21–27, 38.5, 38.16–21
 *
 * FIGYELEM: ez NEM ájurvédikus alkatmeghatározás. A klasszikus ájurvéda
 * (Csaraka, Susruta) testi és viselkedésbeli vizsgálattal állapítja meg a
 * prakritit, nem horoszkópból. Semmilyen étrendi, gyógynövényes vagy
 * életmódbeli javaslat nem szerepelhet ebben a modulban.
 */
window.HDATA = window.HDATA || {};
window.HDATA.dosha = {

  intro: 'A védikus asztrológia klasszikus szövegei nedveket (váta, pitta, kapha) ' +
    'rendelnek a bolygókhoz és a jegyekhez. Az alábbi elemzés ezeket a szövegeket ' +
    'követi, versszám szerinti hivatkozással — mindegyik komponenst külön mutatjuk, ' +
    'összesített „a te dósád" ítélet nélkül, mert arra a hagyományban nincs ' +
    'szabványos módszer.',

  /* --- a három nedv --- */
  doshas: {
    vata: {
      name: 'Váta', sanskrit: 'vāta', elements: 'éter + levegő',
      qualities: 'száraz, könnyű, hideg, érdes, finom, mozgékony, szabálytalan',
      fn: 'A mozgás elve: a légzés, a keringés, a kiválasztás, az idegimpulzus és a gondolat.',
      temperament: 'Gyors, alkotó, változékony. A Sāravalī leírása szerint: hidegre ' +
        'érzékeny, beszédes, gyors járású, karcsú alkat.'
    },
    pitta: {
      name: 'Pitta', sanskrit: 'pitta', elements: 'tűz + víz',
      qualities: 'forró, éles, könnyű, olajos, terjedő',
      fn: 'Az átalakítás elve: az emésztés, az anyagcsere, a testhő, a látás és az észlelés.',
      temperament: 'Éles, összpontosított, versengő. A Sāravalī leírása szerint: nagy, ' +
        'tiszta köröm és szem, tudós hajlam, félelmet nem ismerő természet.'
    },
    kapha: {
      name: 'Kapha', sanskrit: 'kapha', elements: 'föld + víz',
      qualities: 'nehéz, lassú, hűvös, olajos, sima, tömör, stabil, puha',
      fn: 'A szerkezet elve: az összetartás, a kenés, a stabilitás és a szöveti tömeg.',
      temperament: 'Kitartó, türelmes, hűséges. A Sāravalī leírása szerint: jó felépítés, ' +
        'erős ízületek, mély zengő hang, kitartás.'
    },
    tri: {
      name: 'Kevert (tridosikus)', sanskrit: 'sama',
      elements: 'mind a három',
      qualities: 'a három nedv együtt',
      fn: 'A hagyomány szerint sem egyik, sem másik nem uralkodik egyértelműen.',
      temperament: 'A Csaraka hét prakriti-típust ismer: hármat egyszereset, hármat ' +
        'kettőset és egy kiegyensúlyozottat — a kevert eredmény tehát nem hiba.'
    }
  },

  /* --- bolygó → nedv, BPHS 3.23–30 --- */
  planets: {
    sun:     { d: ['pitta'],          src: 'BPHS 3.23 — „epés"' },
    moon:    { d: ['vata', 'kapha'],  src: 'BPHS 3.24 — „nagyon szeles és nyálkás"',
               note: 'A Sāravalī 3. fejezete csak nyálkásnak (kapha) mondja — ez a két klasszikus szöveg közti egyetlen valódi eltérés.' },
    mars:    { d: ['pitta'],          src: 'BPHS 3.25 — „epés"' },
    mercury: { d: ['vata', 'pitta', 'kapha'], src: 'BPHS 3.26 — „mind a három nedv keveréke"',
               note: 'A neten uralkodó tábla vátának mondja a Merkúrt — ez ellentmond mindkét elsődleges szövegnek.' },
    jupiter: { d: ['kapha'],          src: 'BPHS 3.27 — „nyálkás"' },
    venus:   { d: ['kapha', 'vata'],  src: 'BPHS 3.28 — „nyálkás és szeles"' },
    saturn:  { d: ['vata'],           src: 'BPHS 3.29 — „szeles természetű"' },
    northNode:{ d: ['vata'],          src: 'BPHS 3.30 — „szeles természetű"' },
    southNode:{ d: ['vata'],          src: 'BPHS 3.30 — „Kétu hasonló Ráhuhoz"' }
  },

  /* --- jegy → nedv, BPHS 4.5 (tiszta elem-megfeleltetés) --- */
  signs: {
    kos: 'pitta', oroszlan: 'pitta', nyilas: 'pitta',
    bika: 'vata', szuz: 'vata', bak: 'vata',
    ikrek: 'tri', merleg: 'tri', vizonto: 'tri',
    rak: 'kapha', skorpio: 'kapha', halak: 'kapha'
  },
  signSrc: 'BPHS 4.5 — „A Kos, az Oroszlán és a Nyilas epés. A Bika, a Szűz és a Bak ' +
    'szeles. Az Ikrek, a Mérleg és a Vízöntő kevert, a többi nyálkás."',
  signNote: 'A neten terjedő versengő tábla a 12 jegyből 6-nál mást mond, és belsőleg ' +
    'is következetlen — mi a BPHS besorolását követjük.',

  /* --- Sāravalī 38.5: az öt tāra graha és a tattvájuk --- */
  taraGrahas: [
    { key: 'jupiter', name: 'Jupiter',    tattva: 'éter' },
    { key: 'venus',   name: 'Vénusz',     tattva: 'víz' },
    { key: 'saturn',  name: 'Szaturnusz', tattva: 'levegő' },
    { key: 'mars',    name: 'Mars',       tattva: 'tűz' },
    { key: 'mercury', name: 'Merkúr',     tattva: 'föld' }
  ],
  saravaliSrc: 'Sāravalī 38.5 — „A Jupiter, a Vénusz, a Szaturnusz, a Mars és a Merkúr ' +
    'erőssége szerint a szülött az öt tattva hatásait szerzi meg. A legerősebb bolygó ' +
    'adja a megfelelő temperamentumot… Ha több bolygó is erős, ezek keverednek."',
  saravaliCaveat: 'A szabály bolygóerőt (balát) kíván. A programban a méltóságot ' +
    'használjuk közelítésként — ez a Sthána Bala, az erő hat összetevője közül csak ' +
    'az egyik. A sorrend tehát tájékoztató, nem teljes értékű Sadbala-számítás.',

  /* --- nádi (nakshatra) --- */
  nadiNames: { vata: 'Ádi', pitta: 'Madhja', kapha: 'Antja' },
  nadiSrc: 'Az Aṣṭakūṭa párosítási rendszer nádi-kútája.',
  nadiCaveat: 'Ehhez a táblához NEM találtunk klasszikus szöveghelyet: a Sāravalīban ' +
    'egyáltalán nem szerepel, és minden forrás versszám nélkül közli. Ráadásul eredeti ' +
    'szerepe a párosítás-vizsgálat, nem az alkatmeghatározás — két partner azonos nádija ' +
    'számít kedvezőtlennek. Az „ebből következik az alkatod" olvasat a szabály ' +
    'átcímkézése. Nyelvi csapda: a párosításban a „nádi-dósa" hibát jelent, nem ' +
    'ájurvédikus dósát.',

  /* --- keretezés --- */
  prakritiNote: 'A prakriti a fogantatáskor rögzült alkati alap, amely a hagyomány ' +
    'szerint egy életen át változatlan — és nem hiba: aki váta-túlsúlyos, az nincs ' +
    '„kibillenve", ez a természete. A vikriti ezzel szemben a pillanatnyi eltérés ettől ' +
    'az alaptól. Az „egyensúly" tehát nem azt jelenti, hogy mindhárom nedv egyenlő, ' +
    'hanem hogy az ember a saját alapjánál van.',

  disclaimer: 'Kulturális hagyomány — nem egészségügyi tanács. Ez az elemzés a védikus ' +
    'asztrológia klasszikus szövegeit követi, amelyek a bolygókhoz és a jegyekhez ' +
    'ájurvédikus nedveket rendelnek. Fontos: a klasszikus ájurvédikus orvosi szövegek ' +
    '(Csaraka-szanhitá, Susruta-szanhitá) NEM horoszkópból határozzák meg az alkatot, ' +
    'hanem testi és viselkedésbeli vizsgálattal. Az itt látható számítás tehát ' +
    'asztrológiai hagyomány, nem ájurvédikus alkatmeghatározás. A tartalom kulturális ' +
    'és szórakoztató célú: nem orvosi tanács, nem diagnózis, és nem alkalmas betegség ' +
    'megelőzésére vagy kezelésére. Egészségügyi kérdéssel fordulj orvoshoz, és a ' +
    'panaszaid kivizsgálását ne halaszd emiatt.',

  shortDisclaimer: 'Hagyományos jyotisha-számítás. Nem ájurvédikus alkatmeghatározás ' +
    'és nem orvosi tanács.'
};
