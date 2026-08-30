/* Horoszkóp – Electron keretprogram
   A webes alkalmazást (app/index.html) csomagolja asztali alkalmazásba.
   Telepítő: electron-builder (NSIS), frissítés: electron-updater GitHub
   Releases-ből — a package.json "build.publish" mezőjében kell megadni
   a GitHub felhasználónevet és a repó nevét. */

'use strict';

const { app, BrowserWindow, Menu, dialog, shell } = require('electron');
const path = require('path');

let autoUpdater = null;
try {
  autoUpdater = require('electron-updater').autoUpdater;
} catch (e) { /* fejlesztői környezetben elmaradhat */ }

let win = null;

/* ---------------- ablak ---------------- */

function createWindow() {
  win = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 720,
    minHeight: 560,
    autoHideMenuBar: false,
    backgroundColor: '#f6f4ef',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false
    }
  });

  win.loadFile(path.join(__dirname, '..', 'app', 'index.html'));

  // külső hivatkozás a rendszerböngészőben nyíljon, ne az alkalmazásban
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });

  win.on('closed', () => { win = null; });
}

/* ---------------- frissítéskezelés ---------------- */

let updateCheckInteractive = false;

function setupUpdater() {
  if (!autoUpdater) return;
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('update-available', (info) => {
    if (updateCheckInteractive) {
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Frissítés érhető el',
        message: 'Új verzió érhető el: ' + info.version,
        detail: 'A letöltés a háttérben elindult. Ha elkészült, szólunk.'
      });
    }
  });

  autoUpdater.on('update-not-available', () => {
    if (updateCheckInteractive) {
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Nincs frissítés',
        message: 'A legfrissebb verziót használod (' + app.getVersion() + ').'
      });
    }
    updateCheckInteractive = false;
  });

  autoUpdater.on('update-downloaded', (info) => {
    updateCheckInteractive = false;
    dialog.showMessageBox(win, {
      type: 'question',
      title: 'Frissítés kész',
      message: 'A(z) ' + info.version + ' verzió letöltődött.',
      detail: 'Újraindítod most az alkalmazást, hogy települjön? Ha nem, a következő bezáráskor települ magától.',
      buttons: ['Újraindítás most', 'Majd később'],
      defaultId: 0,
      cancelId: 1
    }).then((r) => {
      if (r.response === 0) autoUpdater.quitAndInstall();
    });
  });

  autoUpdater.on('error', (err) => {
    if (updateCheckInteractive) {
      dialog.showMessageBox(win, {
        type: 'warning',
        title: 'A frissítés nem érhető el',
        message: 'Nem sikerült frissítést keresni.',
        detail: 'Ok: ' + (err && err.message ? err.message : String(err)) +
          '\n\nHa még nincs beállítva a frissítési forrás (GitHub repó a ' +
          'package.json build.publish mezőjében), ez a hiba normális.'
      });
    }
    updateCheckInteractive = false;
  });
}

function checkForUpdates(interactive) {
  if (!app.isPackaged) {
    if (interactive) {
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Fejlesztői mód',
        message: 'Fejlesztői módban (npm start) nincs frissítéskeresés — az a telepített alkalmazásban működik.'
      });
    }
    return;
  }
  if (!autoUpdater) return;
  updateCheckInteractive = !!interactive;
  autoUpdater.checkForUpdates().catch(() => { /* az 'error' esemény kezeli */ });
}

/* ---------------- menü ---------------- */

function buildMenu() {
  const template = [
    {
      label: 'Fájl',
      submenu: [
        {
          label: 'Nyomtatás / PDF…',
          accelerator: 'CmdOrCtrl+P',
          click: () => { if (win) win.webContents.executeJavaScript('window.print()', true); }
        },
        { type: 'separator' },
        { role: 'quit', label: 'Kilépés' }
      ]
    },
    {
      label: 'Nézet',
      submenu: [
        { role: 'reload', label: 'Újratöltés' },
        { type: 'separator' },
        { role: 'zoomIn', label: 'Nagyítás' },
        { role: 'zoomOut', label: 'Kicsinyítés' },
        { role: 'resetZoom', label: 'Eredeti méret' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Teljes képernyő' },
        { role: 'toggleDevTools', label: 'Fejlesztői eszközök' }
      ]
    },
    {
      label: 'Súgó',
      submenu: [
        {
          label: 'Frissítések keresése…',
          click: () => checkForUpdates(true)
        },
        { type: 'separator' },
        {
          label: 'Névjegy',
          click: () => {
            dialog.showMessageBox(win, {
              type: 'info',
              title: 'Névjegy',
              message: 'Horoszkóp ' + app.getVersion(),
              detail: 'A program egyetlen születési adatsorból készít teljes ' +
                'önismereti profilt több mint húsz hagyomány — nyugati, keleti, ' +
                'népi rendszerek — és a modern kronobiológia alapján.\n' +
                'Minden számítás helyben, a saját gépeden fut; ' +
                'az adataid nem hagyják el a gépet.\n\n' +
                'Powered by Pacsai Ferenc\n' +
                'A fejlesztés folyamatosan zajlik — új funkciók érkeznek.\n\n' +
                'Csillagászati mag: Astronomy Engine (MIT licenc).'
            });
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

/* ---------------- életciklus ---------------- */

app.whenReady().then(() => {
  buildMenu();
  createWindow();
  setupUpdater();
  // indulás után csendben megnézzük, van-e új verzió
  setTimeout(() => checkForUpdates(false), 3000);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
