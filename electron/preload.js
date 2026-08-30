/* Horoszkóp – preload híd
   A weboldal innen éri el a keretprogram PDF-mentését, biztonságos,
   szűk felületen át (contextBridge). */

'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronPDF', {
  save: () => ipcRenderer.invoke('save-pdf')
});
