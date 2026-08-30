/* Horoszkóp – születési helyek adatbázisa
   Magyarország + a magyarlakta határon túli városok + nagy világvárosok.
   A tz mező IANA zónanév: a böngésző ebből tudja a történelmi nyári
   időszámításokat is (ez a natál-számítás egyik legkényesebb pontja). */

window.HDATA = window.HDATA || {};
window.HDATA.geo = {

  /* --- Magyarország --- */
  hu: [
    ['Budapest', 47.4979, 19.0402], ['Debrecen', 47.5316, 21.6273],
    ['Szeged', 46.2530, 20.1414], ['Miskolc', 48.1035, 20.7784],
    ['Pécs', 46.0727, 18.2323], ['Győr', 47.6875, 17.6504],
    ['Nyíregyháza', 47.9554, 21.7167], ['Kecskemét', 46.8964, 19.6897],
    ['Székesfehérvár', 47.1860, 18.4221], ['Szombathely', 47.2307, 16.6218],
    ['Szolnok', 47.1747, 20.1986], ['Tatabánya', 47.5692, 18.4048],
    ['Kaposvár', 46.3594, 17.7968], ['Békéscsaba', 46.6836, 21.0877],
    ['Érd', 47.3920, 18.9135], ['Veszprém', 47.0933, 17.9110],
    ['Zalaegerszeg', 46.8417, 16.8416], ['Sopron', 47.6817, 16.5845],
    ['Eger', 47.9026, 20.3772], ['Nagykanizsa', 46.4590, 16.9897],
    ['Dunaújváros', 46.9619, 18.9355], ['Hódmezővásárhely', 46.4181, 20.3300],
    ['Szigetszentmiklós', 47.3436, 19.0453], ['Cegléd', 47.1747, 19.7999],
    ['Baja', 46.1817, 18.9541], ['Salgótarján', 48.0935, 19.8000],
    ['Ózd', 48.2206, 20.2907], ['Vác', 47.7757, 19.1352],
    ['Mosonmagyaróvár', 47.8667, 17.2667], ['Gödöllő', 47.5964, 19.3600],
    ['Gyula', 46.6465, 21.2794], ['Pápa', 47.3300, 17.4667],
    ['Kiskunfélegyháza', 46.7106, 19.8517], ['Ajka', 47.1017, 17.5567],
    ['Gyöngyös', 47.7833, 19.9333], ['Esztergom', 47.7928, 18.7406],
    ['Hajdúböszörmény', 47.6717, 21.5167], ['Kazincbarcika', 48.2500, 20.6333],
    ['Orosháza', 46.5667, 20.6667], ['Komló', 46.1889, 18.2600],
    ['Kiskunhalas', 46.4333, 19.4833], ['Szentes', 46.6500, 20.2667],
    ['Dunakeszi', 47.6333, 19.1333], ['Jászberény', 47.5000, 19.9167],
    ['Hatvan', 47.6667, 19.6833], ['Törökszentmiklós', 47.1833, 20.4167],
    ['Berettyóújfalu', 47.2167, 21.5500], ['Keszthely', 46.7667, 17.2500],
    ['Siófok', 46.9000, 18.0500], ['Balatonfüred', 46.9583, 17.8917],
    ['Mohács', 45.9930, 18.6830], ['Szekszárd', 46.3475, 18.7050],
    ['Makó', 46.2167, 20.4833], ['Karcag', 47.3167, 20.9333],
    ['Kisvárda', 48.2167, 22.0833], ['Mátészalka', 47.9500, 22.3167],
    ['Sárvár', 47.2500, 16.9333], ['Csorna', 47.6167, 17.2500],
    ['Kapuvár', 47.5833, 17.0333], ['Körmend', 47.0167, 16.6000],
    ['Marcali', 46.5833, 17.4167], ['Nagykőrös', 47.0333, 19.7833],
    ['Paks', 46.6167, 18.8667], ['Tapolca', 46.8833, 17.4333],
    ['Tata', 47.6500, 18.3167], ['Vecsés', 47.4000, 19.2667],
    ['Budaörs', 47.4614, 18.9578], ['Szentendre', 47.6667, 19.0833],
    ['Békés', 46.7667, 21.1333], ['Bonyhád', 46.3000, 18.5333],
    ['Celldömölk', 47.2500, 17.1500], ['Sátoraljaújhely', 48.4000, 21.6667],
    ['Sárospatak', 48.3167, 21.5667], ['Mezőkövesd', 47.8167, 20.5667],
    ['Hajdúszoboszló', 47.4500, 21.4000], ['Püspökladány', 47.3167, 21.1167],
    ['Kalocsa', 46.5286, 18.9761], ['Kiskunmajsa', 46.4833, 19.7333],
    ['Kisbér', 47.5000, 18.0333], ['Balassagyarmat', 48.0736, 19.2944],
    ['Nagykáta', 47.4167, 19.7500], ['Monor', 47.3500, 19.4500],
    ['Gyál', 47.3833, 19.2167], ['Dabas', 47.1833, 19.3167],
    ['Szigethalom', 47.3167, 18.9833], ['Százhalombatta', 47.3167, 18.9167],
    ['Ráckeve', 47.1667, 18.9500], ['Abony', 47.1833, 20.0000],
    ['Tiszaújváros', 47.9333, 21.0500], ['Tiszavasvári', 47.9667, 21.3500],
    ['Nagyatád', 46.2333, 17.3667], ['Barcs', 45.9667, 17.4667],
    ['Szigetvár', 46.0500, 17.8167], ['Sellye', 45.8667, 17.8500],
    ['Dombóvár', 46.3833, 18.1333], ['Tamási', 46.6333, 18.2833],
    ['Várpalota', 47.2000, 18.1333], ['Balatonalmádi', 47.0333, 18.0167],
    ['Fonyód', 46.7500, 17.5500], ['Vasvár', 47.0500, 16.8000],
    ['Lenti', 46.6167, 16.5333], ['Letenye', 46.4333, 16.7167],
    ['Mór', 47.3833, 18.2000], ['Bicske', 47.4833, 18.6333],
    ['Oroszlány', 47.4833, 18.3167], ['Komárom', 47.7500, 18.1167],
    ['Rétság', 47.9333, 19.1333], ['Pásztó', 47.9167, 19.7000],
    ['Füzesabony', 47.7500, 20.4167], ['Heves', 47.6000, 20.2833],
    ['Hajdúnánás', 47.8500, 21.4333], ['Nyírbátor', 47.8333, 22.1333],
    ['Vásárosnamény', 48.1333, 22.3167], ['Fehérgyarmat', 47.9833, 22.5167],
    ['Szerencs', 48.1667, 21.2000], ['Encs', 48.3333, 21.1333],
    ['Mezőtúr', 47.0000, 20.6333], ['Kunszentmárton', 46.8333, 20.2833],
    ['Csongrád', 46.7167, 20.1500], ['Szarvas', 46.8667, 20.5500],
    ['Sarkad', 46.7500, 21.3833], ['Battonya', 46.2833, 21.0167],
    ['Bácsalmás', 46.1167, 19.3333], ['Jánoshalma', 46.3000, 19.3167]
  ],

  /* --- határon túli, magyarlakta városok --- */
  abroad: [
    ['Kolozsvár (Cluj-Napoca)', 46.7712, 23.6236, 'Europe/Bucharest', 'RO'],
    ['Marosvásárhely (Târgu Mureș)', 46.5425, 24.5579, 'Europe/Bucharest', 'RO'],
    ['Nagyvárad (Oradea)', 47.0722, 21.9211, 'Europe/Bucharest', 'RO'],
    ['Brassó (Brașov)', 45.6580, 25.6012, 'Europe/Bucharest', 'RO'],
    ['Temesvár (Timișoara)', 45.7489, 21.2087, 'Europe/Bucharest', 'RO'],
    ['Szatmárnémeti (Satu Mare)', 47.7900, 22.8800, 'Europe/Bucharest', 'RO'],
    ['Csíkszereda (Miercurea Ciuc)', 46.3600, 25.8000, 'Europe/Bucharest', 'RO'],
    ['Sepsiszentgyörgy (Sf. Gheorghe)', 45.8667, 25.7833, 'Europe/Bucharest', 'RO'],
    ['Székelyudvarhely (Odorheiu S.)', 46.3050, 25.2919, 'Europe/Bucharest', 'RO'],
    ['Arad', 46.1866, 21.3123, 'Europe/Bucharest', 'RO'],
    ['Nagybánya (Baia Mare)', 47.6567, 23.5847, 'Europe/Bucharest', 'RO'],
    ['Nagyszalonta (Salonta)', 46.8000, 21.6500, 'Europe/Bucharest', 'RO'],
    ['Kassa (Košice)', 48.7164, 21.2611, 'Europe/Bratislava', 'SK'],
    ['Pozsony (Bratislava)', 48.1486, 17.1077, 'Europe/Bratislava', 'SK'],
    ['Komárom (Komárno)', 47.7639, 18.1292, 'Europe/Bratislava', 'SK'],
    ['Dunaszerdahely (D. Streda)', 47.9928, 17.6156, 'Europe/Bratislava', 'SK'],
    ['Érsekújvár (Nové Zámky)', 47.9856, 18.1614, 'Europe/Bratislava', 'SK'],
    ['Rimaszombat (Rimavská Sobota)', 48.3833, 20.0167, 'Europe/Bratislava', 'SK'],
    ['Losonc (Lučenec)', 48.3333, 19.6667, 'Europe/Bratislava', 'SK'],
    ['Ungvár (Uzshorod)', 48.6208, 22.2879, 'Europe/Kyiv', 'UA'],
    ['Munkács (Mukacsevo)', 48.4414, 22.7178, 'Europe/Kyiv', 'UA'],
    ['Beregszász (Berehove)', 48.2050, 22.6414, 'Europe/Kyiv', 'UA'],
    ['Szabadka (Subotica)', 46.1000, 19.6650, 'Europe/Belgrade', 'RS'],
    ['Újvidék (Novi Sad)', 45.2671, 19.8335, 'Europe/Belgrade', 'RS'],
    ['Zenta (Senta)', 45.9300, 20.0900, 'Europe/Belgrade', 'RS'],
    ['Zombor (Sombor)', 45.7742, 19.1122, 'Europe/Belgrade', 'RS'],
    ['Nagybecskerek (Zrenjanin)', 45.3833, 20.3833, 'Europe/Belgrade', 'RS'],
    ['Eszék (Osijek)', 45.5550, 18.6955, 'Europe/Zagreb', 'HR'],
    ['Zágráb (Zagreb)', 45.8150, 15.9819, 'Europe/Zagreb', 'HR'],
    ['Eisenstadt (Kismarton)', 47.8456, 16.5236, 'Europe/Vienna', 'AT'],
    ['Lendva (Lendava)', 46.5667, 16.4500, 'Europe/Ljubljana', 'SI']
  ],

  /* --- világvárosok --- */
  world: [
    ['Bécs (Wien)', 48.2082, 16.3738, 'Europe/Vienna', 'AT'],
    ['Prága (Praha)', 50.0755, 14.4378, 'Europe/Prague', 'CZ'],
    ['Varsó (Warszawa)', 52.2297, 21.0122, 'Europe/Warsaw', 'PL'],
    ['Berlin', 52.5200, 13.4050, 'Europe/Berlin', 'DE'],
    ['München', 48.1351, 11.5820, 'Europe/Berlin', 'DE'],
    ['Frankfurt', 50.1109, 8.6821, 'Europe/Berlin', 'DE'],
    ['Hamburg', 53.5511, 9.9937, 'Europe/Berlin', 'DE'],
    ['Zürich', 47.3769, 8.5417, 'Europe/Zurich', 'CH'],
    ['London', 51.5074, -0.1278, 'Europe/London', 'GB'],
    ['Manchester', 53.4808, -2.2426, 'Europe/London', 'GB'],
    ['Dublin', 53.3498, -6.2603, 'Europe/Dublin', 'IE'],
    ['Párizs (Paris)', 48.8566, 2.3522, 'Europe/Paris', 'FR'],
    ['Brüsszel (Bruxelles)', 50.8503, 4.3517, 'Europe/Brussels', 'BE'],
    ['Amszterdam', 52.3676, 4.9041, 'Europe/Amsterdam', 'NL'],
    ['Róma (Roma)', 41.9028, 12.4964, 'Europe/Rome', 'IT'],
    ['Milánó (Milano)', 45.4642, 9.1900, 'Europe/Rome', 'IT'],
    ['Madrid', 40.4168, -3.7038, 'Europe/Madrid', 'ES'],
    ['Barcelona', 41.3874, 2.1686, 'Europe/Madrid', 'ES'],
    ['Lisszabon (Lisboa)', 38.7223, -9.1393, 'Europe/Lisbon', 'PT'],
    ['Athén (Athina)', 37.9838, 23.7275, 'Europe/Athens', 'GR'],
    ['Isztambul', 41.0082, 28.9784, 'Europe/Istanbul', 'TR'],
    ['Bukarest (București)', 44.4268, 26.1025, 'Europe/Bucharest', 'RO'],
    ['Szófia (Sofia)', 42.6977, 23.3219, 'Europe/Sofia', 'BG'],
    ['Belgrád (Beograd)', 44.7866, 20.4489, 'Europe/Belgrade', 'RS'],
    ['Ljubljana', 46.0569, 14.5058, 'Europe/Ljubljana', 'SI'],
    ['Stockholm', 59.3293, 18.0686, 'Europe/Stockholm', 'SE'],
    ['Oslo', 59.9139, 10.7522, 'Europe/Oslo', 'NO'],
    ['Koppenhága (København)', 55.6761, 12.5683, 'Europe/Copenhagen', 'DK'],
    ['Helsinki', 60.1699, 24.9384, 'Europe/Helsinki', 'FI'],
    ['Moszkva (Moskva)', 55.7558, 37.6173, 'Europe/Moscow', 'RU'],
    ['Kijev (Kyiv)', 50.4501, 30.5234, 'Europe/Kyiv', 'UA'],
    ['New York', 40.7128, -74.0060, 'America/New_York', 'US'],
    ['Los Angeles', 34.0522, -118.2437, 'America/Los_Angeles', 'US'],
    ['Chicago', 41.8781, -87.6298, 'America/Chicago', 'US'],
    ['Miami', 25.7617, -80.1918, 'America/New_York', 'US'],
    ['Toronto', 43.6532, -79.3832, 'America/Toronto', 'CA'],
    ['Montréal', 45.5017, -73.5673, 'America/Toronto', 'CA'],
    ['Mexikóváros', 19.4326, -99.1332, 'America/Mexico_City', 'MX'],
    ['São Paulo', -23.5505, -46.6333, 'America/Sao_Paulo', 'BR'],
    ['Buenos Aires', -34.6037, -58.3816, 'America/Argentina/Buenos_Aires', 'AR'],
    ['Kairó (Cairo)', 30.0444, 31.2357, 'Africa/Cairo', 'EG'],
    ['Johannesburg', -26.2041, 28.0473, 'Africa/Johannesburg', 'ZA'],
    ['Tel-Aviv', 32.0853, 34.7818, 'Asia/Jerusalem', 'IL'],
    ['Jeruzsálem', 31.7683, 35.2137, 'Asia/Jerusalem', 'IL'],
    ['Dubaj', 25.2048, 55.2708, 'Asia/Dubai', 'AE'],
    ['Újdelhi (New Delhi)', 28.6139, 77.2090, 'Asia/Kolkata', 'IN'],
    ['Mumbai', 19.0760, 72.8777, 'Asia/Kolkata', 'IN'],
    ['Bangkok', 13.7563, 100.5018, 'Asia/Bangkok', 'TH'],
    ['Szingapúr', 1.3521, 103.8198, 'Asia/Singapore', 'SG'],
    ['Hongkong', 22.3193, 114.1694, 'Asia/Hong_Kong', 'HK'],
    ['Peking (Beijing)', 39.9042, 116.4074, 'Asia/Shanghai', 'CN'],
    ['Sanghaj (Shanghai)', 31.2304, 121.4737, 'Asia/Shanghai', 'CN'],
    ['Szöul (Seoul)', 37.5665, 126.9780, 'Asia/Seoul', 'KR'],
    ['Tokió (Tokyo)', 35.6762, 139.6503, 'Asia/Tokyo', 'JP'],
    ['Sydney', -33.8688, 151.2093, 'Australia/Sydney', 'AU'],
    ['Melbourne', -37.8136, 144.9631, 'Australia/Melbourne', 'AU'],
    ['Auckland', -36.8485, 174.7633, 'Pacific/Auckland', 'NZ']
  ]
};

/* Egységes, kereshető lista összeállítása */
(function () {
  var g = window.HDATA.geo;
  var all = [];
  g.hu.forEach(function (c) {
    all.push({ name: c[0], lat: c[1], lon: c[2], tz: 'Europe/Budapest', country: 'HU' });
  });
  g.abroad.forEach(function (c) {
    all.push({ name: c[0], lat: c[1], lon: c[2], tz: c[3], country: c[4] });
  });
  g.world.forEach(function (c) {
    all.push({ name: c[0], lat: c[1], lon: c[2], tz: c[3], country: c[4] });
  });
  g.all = all;
  g.find = function (name) {
    var n = (name || '').toLowerCase().trim();
    if (!n) return null;
    for (var i = 0; i < all.length; i++) {
      if (all[i].name.toLowerCase() === n) return all[i];
    }
    for (var j = 0; j < all.length; j++) {
      if (all[j].name.toLowerCase().indexOf(n) === 0) return all[j];
    }
    return null;
  };
  g.search = function (q, limit) {
    var n = (q || '').toLowerCase().trim();
    if (!n) return [];
    var starts = [], contains = [];
    for (var i = 0; i < all.length; i++) {
      var ln = all[i].name.toLowerCase();
      if (ln.indexOf(n) === 0) starts.push(all[i]);
      else if (ln.indexOf(n) > 0) contains.push(all[i]);
    }
    return starts.concat(contains).slice(0, limit || 8);
  };
})();
