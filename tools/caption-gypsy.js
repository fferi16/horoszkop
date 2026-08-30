/* Feliratozó: a generált cigánykártya-képek aljára pergamen-szalagot és
   magyar lapnevet komponál (mint az eredeti paklikon).
   Futtatás:  npx electron tools/caption-gypsy.js
   A képeket helyben írja felül (app/assets/gypsy-ai/). */

'use strict';
const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'app', 'assets', 'gypsy-ai');

const NAMES = {
  g01: 'Ajándék', g02: 'Állandóság', g03: 'Betegség', g04: 'Bíró',
  g05: 'Bosszúság', g06: 'Ellenség', g07: 'Féltékenység', g08: 'Gondolat',
  g09: 'Gyermek', g10: 'Halál', g11: 'Hamisság', g12: 'Ház',
  g13: 'Házasság', g14: 'Hűség', g15: 'Katonatiszt', g16: 'Kispénz',
  g17: 'Látogatás', g18: 'Levél', g19: 'Özvegyasszony', g20: 'Özvegyember',
  g21: 'Pap', g22: 'Pénz', g23: 'Remény', g24: 'Szerelem',
  g25: 'Szerelmes férfi', g26: 'Szerelmes nő', g27: 'Szerencse',
  g28: 'Szerencsétlenség', g29: 'Szomorúság', g30: 'Tolvaj', g31: 'Utazás',
  g32: 'Üzenet', g33: 'Vágy', g34: 'Váratlan öröm', g35: 'Veszteség',
  g36: 'Vidámság'
};

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, webPreferences: { offscreen: true, nodeIntegration: true, contextIsolation: false } });
  await win.loadURL('about:blank');
  let n = 0;
  for (const id of Object.keys(NAMES)) {
    const file = path.join(DIR, id + '.png');
    if (!fs.existsSync(file)) { console.error('hianyzik:', id); continue; }
    const b64 = fs.readFileSync(file).toString('base64');
    const name = NAMES[id];
    const out = await win.webContents.executeJavaScript(`
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const W = img.width, H = img.height, BAND = Math.round(H * 0.085);
          const c = document.createElement('canvas');
          c.width = W; c.height = H;
          const x = c.getContext('2d');
          x.drawImage(img, 0, 0);
          // pergamen-szalag
          const y0 = H - BAND;
          const grad = x.createLinearGradient(0, y0, 0, H);
          grad.addColorStop(0, '#f4ead0'); grad.addColorStop(1, '#e3d2a6');
          x.fillStyle = grad; x.fillRect(0, y0, W, BAND);
          x.strokeStyle = '#43301d'; x.lineWidth = 3;
          x.beginPath(); x.moveTo(0, y0 + 1.5); x.lineTo(W, y0 + 1.5); x.stroke();
          x.strokeStyle = '#b99a5f'; x.lineWidth = 1.5;
          x.beginPath(); x.moveTo(10, y0 + 7); x.lineTo(W - 10, y0 + 7); x.stroke();
          // felirat
          const nm = ${JSON.stringify(name)}.toUpperCase();
          let fs2 = Math.round(BAND * 0.52);
          x.font = '700 ' + fs2 + 'px "Palatino Linotype", Georgia, serif';
          while (x.measureText(nm).width > W - 44 && fs2 > 14) {
            fs2 -= 2;
            x.font = '700 ' + fs2 + 'px "Palatino Linotype", Georgia, serif';
          }
          x.fillStyle = '#43301d'; x.textAlign = 'center'; x.textBaseline = 'middle';
          x.fillText(nm, W / 2, y0 + BAND * 0.58);
          // kis díszek
          x.fillStyle = '#a63b2a';
          const dy = y0 + BAND * 0.55, tw = x.measureText(nm).width / 2;
          x.beginPath(); x.arc(W / 2 - tw - 18, dy, 3.4, 0, 7); x.fill();
          x.beginPath(); x.arc(W / 2 + tw + 18, dy, 3.4, 0, 7); x.fill();
          resolve(c.toDataURL('image/png').split(',')[1]);
        };
        img.src = 'data:image/png;base64,' + ${JSON.stringify('')} + '${b64}';
      })
    `);
    fs.writeFileSync(file, Buffer.from(out, 'base64'));
    n++;
    console.log(id + ' feliratozva (' + n + '/36)');
  }
  console.log('KESZ: ' + n + ' kep');
  app.quit();
}).catch(e => { console.error('HIBA:', e); app.exit(1); });
