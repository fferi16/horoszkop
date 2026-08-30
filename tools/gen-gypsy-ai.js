/* AI-kártyagenerátor: a 36 cigánykártya-kép legyártása helyi ComfyUI-val.
   Előfeltétel: fut a ComfyUI a 127.0.0.1:8188-on, a models/checkpoints
   mappában a DreamShaper_8_pruned.safetensors modellel.
   Futtatás:  node tools/gen-gypsy-ai.js [csak_ezek_pl: g01,g07]
   Kimenet:   app/assets/gypsy-ai/g01.png … g36.png */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '127.0.0.1', PORT = 8188;
const OUT = path.join(__dirname, '..', 'app', 'assets', 'gypsy-ai');

const STYLE = 'antique fortune telling card illustration, 1905 austro-hungarian oracle card, ' +
  'vintage watercolor and fine ink linework, muted warm earthy colors, aged parchment background, ' +
  'simple centered composition, folk art, soft lighting, subtle craquelure';
const NEG = 'text, letters, words, numbers, caption, watermark, signature, border, frame, ' +
  'photo, photorealistic, modern, 3d render, cartoon, anime, extra limbs, deformed, lowres, blurry';

/* A jelenetek az eredeti Piatnik-ikonográfiát követik, ahol az ismert
   (pl. Szerencse = Fortuna bőségszaruval; Állandóság = Isten szeme;
   Remény = horgony; Tolvaj = ablakon mászó betörő). */
const CARDS = {
  g01: 'a still life table with presents: an open book, golden candelabra, vase of red roses, framed portrait, draped red curtain, festive abundance of gifts',
  g02: 'a large single all-seeing eye in a triangle surrounded by fluffy white clouds and long golden sun rays, centered divine emblem, providence symbol',
  g03: 'a pale person resting in an old wooden bed under a beige blanket, nightcap, concerned doctor standing beside with a small bottle',
  g04: 'a stern judge in black robe seated at a high wooden bench holding brass scales, law books and quill, courtroom',
  g05: 'a domestic quarrel scene, an annoyed woman with hands on hips scolding, broken plate on the floor, small dark cloud above',
  g06: 'a sinister man in dark cloak lurking with a dagger behind a tree, watching, threatening shadow, enemy',
  g07: 'a jealous woman peeking from behind a red curtain watching a courting couple in the distance, green tint',
  g08: 'a pensive young woman seated at a table resting her head on her hand, distant gaze, candle light, deep in thought',
  g09: 'a rosy-cheeked baby in an old wooden cradle wrapped in white swaddle, toys beside, gentle light',
  g10: 'a single extinguished white candle with a wisp of smoke, hourglass and wilted flower beside, dark quiet room, dignified',
  g11: 'a smiling elegant woman holding a mask behind her back while a snake coils in the grass at her feet, deception',
  g12: 'a stately old manor house with red roof and garden fence, green trees, warm evening light, prosperity',
  g13: 'a wedding couple at the altar, groom in black suit and bride in white veil holding hands, priest blessing, flowers',
  g14: 'a loyal dog lying at the feet of its seated master, looking up devotedly, fireplace glow, faithfulness',
  g15: 'a proud military officer in blue uniform with golden epaulettes and red cap, portrait, 1900s',
  g16: 'a small pile of shiny gold and silver coins next to an open drawstring leather pouch on a rustic wooden table, closeup still life',
  g17: 'a well-dressed visitor with hat in hand greeting a hostess at the parlor door, welcoming warm interior',
  g18: 'a hand holding a sealed letter with red wax seal, quill pen and inkwell on the desk below',
  g19: 'a dignified elderly widow in black mourning dress and veil, kind wrinkled face, portrait',
  g20: 'a dignified elderly widower with grey beard, black coat and hat, holding a cane, portrait',
  g21: 'a kind old priest in black cassock with golden cross, blessing gesture, church interior soft light',
  g22: 'an open wooden chest overflowing with golden coins and jewelry, sacks of money beside, wealth',
  g23: 'a hopeful woman leaning on a large anchor at the seashore, sailing ship on the horizon at sunrise',
  g24: 'a young courting couple in 1900s clothes sitting close on a garden bench under roses, tender look, red heart glow above',
  g25: 'a handsome young man in 1900s attire offering a red rose, gentle smile, portrait',
  g26: 'a beautiful young woman in 1900s dress holding a red rose to her heart, gentle smile, portrait',
  g27: 'goddess fortuna balancing on a golden sphere pouring coins from a cornucopia of flowers, flowing red and blue drapery',
  g28: 'an overturned carriage on a stormy road, lightning striking a broken tree, dark clouds, dramatic but painterly',
  g29: 'a sorrowful woman in dark dress weeping into a handkerchief at a table, wilted flowers, melancholic blue-green light',
  g30: 'a masked burglar climbing through an open window at night with a sack, moonlight, rooftops behind',
  g31: 'an old postal stagecoach with four horses and luggage on a country road toward the horizon, milestone, morning light',
  g32: 'a uniformed messenger boy running while holding up a letter, post horn slung at his side, village street',
  g33: 'a yearning young woman at an open window gazing at the evening star, hand on heart, deep blue dusk',
  g34: 'a joyful family celebrating around a table, raised arms, surprise gift opened, golden light, festive',
  g35: 'a distressed man finding his purse empty, coins scattered and rolling away on the ground, autumn leaves drifting',
  g36: 'a merry peasant couple dancing at a village feast, musician with violin behind, garlands and wine jugs'
};

function workflow(id, prompt, seed) {
  return {
    '1': { class_type: 'CheckpointLoaderSimple',
      inputs: { ckpt_name: 'DreamShaper_8_pruned.safetensors' } },
    '2': { class_type: 'CLIPTextEncode',
      inputs: { clip: ['1', 1], text: prompt + ', ' + STYLE } },
    '3': { class_type: 'CLIPTextEncode', inputs: { clip: ['1', 1], text: NEG } },
    '4': { class_type: 'EmptyLatentImage',
      inputs: { width: 512, height: 768, batch_size: 1 } },
    '5': { class_type: 'KSampler',
      inputs: { model: ['1', 0], positive: ['2', 0], negative: ['3', 0],
        latent_image: ['4', 0], seed: seed, steps: 30, cfg: 7,
        sampler_name: 'dpmpp_2m', scheduler: 'karras', denoise: 1 } },
    '6': { class_type: 'VAEDecode', inputs: { samples: ['5', 0], vae: ['1', 2] } },
    '7': { class_type: 'SaveImage',
      inputs: { images: ['6', 0], filename_prefix: 'gypsy_' + id } }
  };
}

function req(method, p, body) {
  return new Promise((resolve, reject) => {
    const r = http.request({ host: HOST, port: PORT, path: p, method: method,
      headers: { 'Content-Type': 'application/json' } }, res => {
      let d = [];
      res.on('data', c => d.push(c));
      res.on('end', () => resolve(Buffer.concat(d)));
    });
    r.on('error', reject);
    if (body) r.write(JSON.stringify(body));
    r.end();
  });
}

async function waitDone(pid) {
  for (let i = 0; i < 300; i++) {
    await new Promise(r => setTimeout(r, 2000));
    const h = JSON.parse((await req('GET', '/history/' + pid)).toString());
    if (h[pid] && h[pid].outputs) return h[pid];
  }
  throw new Error('timeout: ' + pid);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.argv[2] ? process.argv[2].split(',') : null;
  const ids = Object.keys(CARDS).filter(id => !only || only.indexOf(id) >= 0);
  let n = 0;
  for (const id of ids) {
    const seed = 4200 + parseInt(id.slice(1), 10);   // rögzített, reprodukálható
    const res = JSON.parse((await req('POST', '/prompt',
      { prompt: workflow(id, CARDS[id], seed) })).toString());
    if (!res.prompt_id) { console.error(id, 'HIBA:', JSON.stringify(res).slice(0, 300)); continue; }
    const hist = await waitDone(res.prompt_id);
    const imgs = hist.outputs['7'].images;
    const im = imgs[0];
    const png = await req('GET', '/view?filename=' + encodeURIComponent(im.filename) +
      '&subfolder=' + encodeURIComponent(im.subfolder || '') + '&type=' + im.type);
    fs.writeFileSync(path.join(OUT, id + '.png'), png);
    n++;
    console.log(id + ' kesz (' + n + '/' + ids.length + ', ' +
      Math.round(png.length / 1024) + ' KB)');
  }
  console.log('OSSZESEN: ' + n + ' kep -> ' + OUT);
})().catch(e => { console.error('HIBA:', e.message); process.exit(1); });
