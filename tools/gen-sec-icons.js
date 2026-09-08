/* Szekció-ikonok legyártása helyi ComfyUI-val (világos + sötét témához).
   Előfeltétel: fut a ComfyUI a 127.0.0.1:8188-on DreamShaper_8_pruned modellel.
   Futtatás:  node tools/gen-sec-icons.js [csak_ezek_pl: releasing,felpontok]
   Kimenet:   tools/sec-raw/<slug>-l.png és -d.png (512×512) — utána
              a tools/sec-icons-webp.py készíti a 128×128-as webp-t. */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const HOST = '127.0.0.1', PORT = 8188;
const OUT = path.join(__dirname, 'sec-raw');

const STYLE = {
  l: 'round emblem icon inside a soft circle, pale cream background, delicate watercolor and gold ink, ' +
     'muted powder blue and warm gold palette, minimalist centered composition, airy, gentle daylight, no text',
  d: 'round emblem icon inside a soft circle, deep midnight purple and black background, glowing ethereal light, ' +
     'mystical night sky mood, luminous gold and violet accents, minimalist centered composition, no text'
};
const NEG = 'text, letters, words, numbers, caption, watermark, signature, frame, photo, photorealistic, ' +
  '3d render, cartoon, anime, people, faces, hands, lowres, blurry, cluttered';

const ICONS = {
  releasing: 'a spiral path of twelve small stepping stones winding around a glowing lot symbol, chapters of life, unfolding scroll',
  fogyatkozasok: 'a solar eclipse: black moon disc covering the sun with a thin radiant corona ring, a small crescent below',
  felpontok: 'two small stars joined by a thin arc with a bright point exactly at the midpoint, geometric balance, a faint 90 degree dial',
  asztrokarto: 'a stylized globe with graceful curved meridian lines and a glowing planetary line crossing it, old map feeling'
};

function workflow(prefix, prompt, seed) {
  return {
    '1': { class_type: 'CheckpointLoaderSimple', inputs: { ckpt_name: 'DreamShaper_8_pruned.safetensors' } },
    '2': { class_type: 'CLIPTextEncode', inputs: { clip: ['1', 1], text: prompt } },
    '3': { class_type: 'CLIPTextEncode', inputs: { clip: ['1', 1], text: NEG } },
    '4': { class_type: 'EmptyLatentImage', inputs: { width: 512, height: 512, batch_size: 1 } },
    '5': { class_type: 'KSampler', inputs: { model: ['1', 0], positive: ['2', 0], negative: ['3', 0],
      latent_image: ['4', 0], seed: seed, steps: 30, cfg: 7, sampler_name: 'dpmpp_2m', scheduler: 'karras', denoise: 1 } },
    '6': { class_type: 'VAEDecode', inputs: { samples: ['5', 0], vae: ['1', 2] } },
    '7': { class_type: 'SaveImage', inputs: { images: ['6', 0], filename_prefix: 'sec_' + prefix } }
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
  const themes = process.env.THEMES ? process.env.THEMES.split(',') : ['l', 'd'];
  const slugs = Object.keys(ICONS).filter(s => !only || only.indexOf(s) >= 0);
  let n = 0;
  for (const slug of slugs) {
    for (const theme of themes) {
      const seed = 7000 + Object.keys(ICONS).indexOf(slug) * 10 + (theme === 'd' ? 1 : 0) + (parseInt(process.env.SEED_OFFSET || '0', 10));
      const prompt = ICONS[slug] + ', ' + STYLE[theme];
      const res = JSON.parse((await req('POST', '/prompt', { prompt: workflow(slug + '_' + theme, prompt, seed) })).toString());
      if (!res.prompt_id) { console.error(slug, theme, 'HIBA:', JSON.stringify(res).slice(0, 300)); continue; }
      const hist = await waitDone(res.prompt_id);
      const im = hist.outputs['7'].images[0];
      const png = await req('GET', '/view?filename=' + encodeURIComponent(im.filename) +
        '&subfolder=' + encodeURIComponent(im.subfolder || '') + '&type=' + im.type);
      fs.writeFileSync(path.join(OUT, slug + '-' + theme + '.png'), png);
      n++;
      console.log(slug + '-' + theme + ' kesz (' + Math.round(png.length / 1024) + ' KB)');
    }
  }
  console.log('OSSZESEN: ' + n + ' kep -> ' + OUT);
})().catch(e => { console.error('HIBA:', e.message); process.exit(1); });
