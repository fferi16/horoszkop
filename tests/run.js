/* Önellenőrző tesztek — függőség nélkül, Node alatt.
   Futtatás:  node tests/run.js            (minden teszt)
              node tests/run.js lots hd    (csak a nevükben egyező fájlok)
   Az app modulokat a modules.js sorrendjében tölti be egy böngésző nélküli
   vm-környezetbe (window = a környezet globálja), ahogy a böngésző tenné. */

'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const APP = path.join(__dirname, '..', 'app', 'js');

function loadApp() {
  const g = { console: console, Date: Date, Math: Math, setTimeout: setTimeout, Intl: Intl };
  g.window = g; g.globalThis = g; g.self = g;
  vm.createContext(g);
  const src = fs.readFileSync(path.join(APP, 'modules.js'), 'utf8');
  const list = Array.from(src.matchAll(/'((?:lib|data|core)\/[^']+\.js)'/g)).map(m => m[1]);
  for (const f of list) {
    vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8'), g, { filename: f });
  }
  return g;
}

const only = process.argv.slice(2);
const files = fs.readdirSync(__dirname)
  .filter(f => f.endsWith('.test.js'))
  .filter(f => !only.length || only.some(o => f.indexOf(o) >= 0))
  .sort();

const t0 = Date.now();
const app = loadApp();
let pass = 0, fail = 0;
const failures = [];

for (const f of files) {
  const suite = require(path.join(__dirname, f));
  const tests = [];
  suite({ test: (name, fn) => tests.push({ name, fn }), assert, app });
  for (const t of tests) {
    try {
      t.fn();
      pass++;
      console.log('  OK   ' + f.replace('.test.js', '') + ' › ' + t.name);
    } catch (e) {
      fail++;
      failures.push(f + ' › ' + t.name + '\n       ' + (e && e.message ? e.message.split('\n')[0] : e));
      console.log('  HIBA ' + f.replace('.test.js', '') + ' › ' + t.name);
    }
  }
}

console.log('\n' + pass + ' rendben, ' + fail + ' hiba (' + ((Date.now() - t0) / 1000).toFixed(1) + ' s)');
if (failures.length) { console.log('\n' + failures.join('\n')); process.exit(1); }
