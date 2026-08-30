/*
 * western-deep.js — „A képlet szerkezete és erőviszonyai" szekció szövegei
 * Szekta, képlet ura, diszpozitor-lánc, Jones-féle képletalak,
 * féltekehangsúly, esszenciális méltóságpontozás.
 *
 * Sima script (nem ES modul). Betöltés: western-ext.js után.
 */

window.HDATA = window.HDATA || {};

window.HDATA.westernDeep = {

  /* ---------------- szekta: nappali / éjszakai születés ---------------- */

  sect: {
    day: {
      name: 'Nappali születés',
      text: 'A Nap a horizont felett állt, amikor születtél: a hellenisztikus hagyomány szerint nappali („diurnális") képleted van. Ilyenkor a Nap a vezérfény, a nagy jótevő szerepét a Jupiter tölti be a legtisztábban, a Szaturnusz pedig megszelídülve, építő fegyelemként működik. A képlet nehezebb bolygója a szektán kívül rekedt Mars: az ő témái (harag, sietség, él) kérik nálad a legtöbb tudatosságot.'
    },
    night: {
      name: 'Éjszakai születés',
      text: 'A Nap a horizont alatt járt, amikor születtél: a hellenisztikus hagyomány szerint éjszakai („nokturnális") képleted van. Ilyenkor a Hold a vezérfény, a nagy jótevő szerepét a Vénusz tölti be a legtisztábban, a Mars pedig megszelídülve, egészséges küzdőerőként működik. A képlet nehezebb bolygója a szektán kívül rekedt Szaturnusz: az ő témái (szigor, félelem, halogatás) kérik nálad a legtöbb tudatosságot.'
    },
    noTime: 'A szekta (nappali vagy éjszakai születés) csak pontos születési idővel állapítható meg.'
  },

  /* ---------------- a képlet ura ---------------- */

  chartRuler: {
    intro: 'Az Aszcendens jegyének uralkodója a „képlet ura": a hagyomány szerint ő a hajód kormányosa — ahol áll, arra visz az életed fő sodra.',
    line: 'A képleted ura %P%, mert az Aszcendensed %S%. %P% helyzete (jegy, ház, fényszögek) ezért a szokásosnál nagyobb súllyal esik latba — a részletes elemzését a bolygókártyáján találod.'
  },

  /* ---------------- diszpozitor-lánc ---------------- */

  dispositor: {
    intro: 'Minden bolygónak van „vendéglátója": annak a jegynek az ura, amelyben áll. A láncokat végigkövetve kirajzolódik, kinél fut össze a képlet — ő a végdiszpozitor.',
    single: 'A képleted minden szála egyetlen bolygónál fut össze: %P% a végdiszpozitor (saját jegyében áll, és közvetve minden más bolygót ő „lát vendégül"). Ez a bolygó a képleted csendes karmestere — a témái mindenben ott vannak, amit csinálsz.',
    multiple: 'A képletedben több végdiszpozitor is van: %P%. Mindegyikük a saját jegyében áll, és a bolygók láncai náluk érnek véget — több, egymástól független belső központod van.',
    loop: 'A képletedben nincs egyetlen végdiszpozitor: a láncok körbe érnek (%P% kölcsönösen egymást „látják vendégül"). Az ilyen kör azt jelzi, hogy a személyiséged súlypontja nem egy pontban, hanem egy belső körforgásban van — ezek a bolygók együtt kormányoznak.'
  },

  /* ---------------- Jones-féle képletalak ---------------- */

  shape: {
    intro: 'Marc Edmund Jones nyomán a tíz égitest égi eloszlásának összképe is jellemez: nem egy-egy bolygó, hanem az egész képlet „testtartása".',
    bundle: { name: 'Csokor (Bundle)', text: 'Mind a tíz égitest egy szűk, 120 fokos íven belül áll: ritka, összpontosított alkat. Az életed egy jól körülhatárolt terepen zajlik, ott viszont szakértői mélységgel — a világ többi része felé tudatosan kell hidat építened.' },
    bowl: { name: 'Tál (Bowl)', text: 'Minden égitested az ég egyik felében áll: „tál" alkat. Erős belső önellátás jellemez — úgy érezheted, valami mindig hiányzik a túloldalról, és épp ez a hiány hajt: a tál pereme (a szélső bolygóid) mutatja, min keresztül fordulsz a világ felé.' },
    bucket: { name: 'Vödör (Bucket)', text: 'Kilenc égitested egy félkörben áll, egy pedig egyedül a túloldalon: „vödör" alkat, a magányos bolygó a fogantyú. Ez a bolygó (%P%) a képleted kifolyócsöve: rajta keresztül összpontosul és adódik ki mindaz, amit a többiek gyűjtenek — kiemelt, életfeladat-szerű szerepe van.' },
    locomotive: { name: 'Mozdony (Locomotive)', text: 'Az égitesteid a kör kétharmadát töltik ki, egyharmada üres: „mozdony" alkat. Erős, gyakorlatias hajtóerő jellemez, és az üres harmad témái jelentik a hiányt, amit be akarsz tölteni. A mozdony vezérbolygója %P% — ő húzza a szerelvényt.' },
    seesaw: { name: 'Mérleghinta (Seesaw)', text: 'Az égitesteid két, egymással szemben álló csoportba rendeződnek: „mérleghinta" alkat. Két jól elkülönülő életterület vagy énrész között ingázol — a képességed a két nézőpont összekapcsolása, a kísértésed a folytonos ide-oda billegés.' },
    splay: { name: 'Küllős (Splay)', text: 'Az égitesteid több, egymástól elkülönülő csomóban szóródnak: „küllős" alkat. Erősen egyéni, nehezen skatulyázható személyiség — több, egymástól független tehetség-góccal. Nem szereted, ha rendszerbe akarják fogni az életed.' },
    splash: { name: 'Szórt (Splash)', text: 'Az égitesteid nagyjából egyenletesen oszlanak el a teljes körön: „szórt" alkat. Sokoldalú, sokfelé nyitott természet — mindenhez van érzéked, a művészet az elmélyülés: hogy a sokféle szál ne forgácsoljon szét.' }
  },

  /* ---------------- féltekehangsúly ---------------- */

  hemispheres: {
    intro: 'Az égitestek eloszlása a horizont és a meridián négy térfele közt azt mutatja, merre húz az életenergiád természetes sodra.',
    east: 'Keleti (felszálló) túlsúly: a bolygóid többsége az Aszcendens térfelén áll — önindító alkat vagy: az életed fő eseményeit inkább te kezdeményezed, mint hogy elszenvednéd őket.',
    west: 'Nyugati (leszálló) túlsúly: a bolygóid többsége a Deszcendens térfelén áll — kapcsolati alkat vagy: az életed a másokkal való találkozásokon, együttműködéseken keresztül bontakozik ki.',
    north: 'Alsó (éjszakai) túlsúly: a bolygóid többsége a horizont alatt áll — befelé élő, privát alkat: a lényeg nálad a személyes, belső és otthoni világban történik, a nyilvánosság másodlagos.',
    south: 'Felső (nappali) túlsúly: a bolygóid többsége a horizont felett áll — kifelé élő, látható alkat: az életed a nyilvános térben, szerepekben és hivatásban bontakozik ki.',
    balanced: 'Kiegyenlített eloszlás: egyik térfél sem uralkodik — az élet belső és külső, önindító és kapcsolati oldala közt természetes az átjárásod.'
  },

  /* ---------------- méltóságpontozás ---------------- */

  dignityScore: {
    intro: 'A klasszikus asztrológia pontozza a hét régi bolygó erejét az öt esszenciális méltóság szerint: otthon (+5), erőben (+4), háromság (+3), határ (+2), arc (+1); száműzetés (−5), esés (−4). A pontszám nem „jóság", hanem hatóerő: az erős bolygó könnyen, a gyenge kerülőúton érvényesíti a témáit.',
    strong: 'a képleted bajnoka: a témái szinte maguktól sikerülnek — rá érdemes építened.',
    weak: 'a képleted leggyengébb hatóerejű bolygója: a témái kerülőúton, több tudatossággal érvényesülnek — nem hiba, hanem életfeladat.',
    peregrine: 'vándor (peregrin): méltóság nélkül áll — a viselkedését ilyenkor főleg a vendéglátója (diszpozitora) színezi.',
    note: 'A pontozás a hagyományos (hét bolygós) rendszert követi, Dorotheus-féle háromság-urakkal és egyiptomi határokkal; a modern bolygókat (Uránusz, Neptunusz, Plútó) a klasszikus pontozás nem tartalmazza.'
  },

  /* ---------------- közeledő / távolodó fényszögek ---------------- */

  applyingNote: 'A fényszögeknél a „közeledő" azt jelenti, hogy a gyorsabb bolygó még tart a pontos szög felé (a hagyomány szerint az ilyen fényszög erősebb, „kibontakozó"), a „távolodó" pedig már túljutott rajta (beérett, csendesedő hatás).'
};
