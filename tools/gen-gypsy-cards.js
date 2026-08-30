/* Cigánykártya-generátor: 36 SVG-lap egységes antik keretben.
   Futtatás:  node tools/gen-gypsy-cards.js
   Kimenet:   app/assets/gypsy/g01.svg … g36.svg
   Stílus: XIX. századi jóskártya-hangulat — pergamen, kettős keret,
   fametszetes, síkszínes jelenetek vékony tuskontúrral. */

'use strict';
const fs = require('fs');
const path = require('path');

const W = 260, H = 400;
const INK = '#43301d';          // tus
const RED = '#a63b2a';
const GOLD = '#c9a227';
const GREEN = '#5c7a4a';
const BLUE = '#4a6b8a';
const CREAM = '#f7efdc';
const BROWN = '#8a6a3f';
const SKIN = '#e8c9a0';
const DARK = '#2e2417';

/* ---------- közös elemek ---------- */

function frame(name) {
  return `
  <defs>
    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f4ead0"/><stop offset=".55" stop-color="#eddfba"/>
      <stop offset="1" stop-color="#e3d2a6"/>
    </linearGradient>
    <radialGradient id="glow" cx=".5" cy=".38" r=".75">
      <stop offset="0" stop-color="#fdf8ea" stop-opacity=".95"/>
      <stop offset="1" stop-color="#fdf8ea" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect x="1.5" y="1.5" width="${W - 3}" height="${H - 3}" rx="12" fill="url(#pg)" stroke="#9a7d4d" stroke-width="3"/>
  <rect x="9" y="9" width="${W - 18}" height="${H - 18}" rx="7" fill="none" stroke="#b99a5f" stroke-width="1.4"/>
  <ellipse cx="${W / 2}" cy="150" rx="115" ry="130" fill="url(#glow)"/>
  <g fill="#a98d58">
    <path d="M20 16 q8 6 16 2 q-6 8 -2 16 q-8 -6 -16 -2 q6 -8 2 -16" opacity=".8"/>
    <path d="M${W - 20} ${H - 16} q-8 -6 -16 -2 q6 -8 2 -16 q8 6 16 2 q-6 8 -2 16" opacity=".8"/>
  </g>`;
}

function banner(name) {
  const fs2 = name.length > 14 ? 17 : 20;
  return `
  <rect x="22" y="${H - 66} " width="${W - 44}" height="42" rx="6" fill="${CREAM}" stroke="#b99a5f" stroke-width="1.6"/>
  <path d="M22 ${H - 45} h-9 l9 -12 M${W - 22} ${H - 45} h9 l-9 -12" fill="none" stroke="#b99a5f" stroke-width="1.6"/>
  <text x="${W / 2}" y="${H - 38}" text-anchor="middle" font-family="Palatino Linotype, Georgia, serif" font-size="${fs2}" font-weight="700" letter-spacing="1.5" fill="#5d4a28">${name.toUpperCase()}</text>`;
}

function ground(y = 268, col = '#d9c48d') {
  return `<path d="M28 ${y} q60 -14 102 0 q52 12 102 0 l0 40 q-104 14 -204 0 z" fill="${col}" opacity=".65"/>`;
}

/** Stilizált alak (mellkép): fej, váll, ruha. */
function bust(cx, cy, opts = {}) {
  const s = opts.s || 1;
  const robe = opts.robe || BLUE;
  const hair = opts.hair || DARK;
  let extra = '';
  if (opts.scarf) {
    extra += `<path d="M${cx - 26 * s} ${cy - 4 * s} q0 -40 26 -40 q26 0 26 40 l-6 12 q-20 -10 -40 0 z" fill="${opts.scarf}" stroke="${INK}" stroke-width="2"/>`;
  }
  if (opts.hat) {
    extra += `<path d="M${cx - 24 * s} ${cy - 26 * s} h${48 * s} l-5 -9 h-${38 * s} z" fill="${DARK}" stroke="${INK}" stroke-width="2"/>
      <rect x="${cx - 15 * s}" y="${cy - 52 * s}" width="${30 * s}" height="${19 * s}" rx="3" fill="${DARK}" stroke="${INK}" stroke-width="2"/>`;
  }
  if (opts.cap) {
    extra += `<path d="M${cx - 20 * s} ${cy - 30 * s} q20 -16 40 0 l0 8 h-40 z" fill="${RED}" stroke="${INK}" stroke-width="2"/>
      <rect x="${cx - 21 * s}" y="${cy - 23 * s}" width="${42 * s}" height="6" fill="${GOLD}" stroke="${INK}" stroke-width="1.5"/>`;
  }
  return `
  <path d="M${cx - 42 * s} ${cy + 62 * s} q0 -40 42 -40 q42 0 42 40 z" fill="${robe}" stroke="${INK}" stroke-width="2.4"/>
  ${opts.collar ? `<path d="M${cx - 12 * s} ${cy + 24 * s} l12 16 l12 -16 z" fill="${CREAM}" stroke="${INK}" stroke-width="1.6"/>` : ''}
  <circle cx="${cx}" cy="${cy}" r="${22 * s}" fill="${SKIN}" stroke="${INK}" stroke-width="2.4"/>
  ${opts.bald ? '' : `<path d="M${cx - 22 * s} ${cy - 2 * s} q-2 -26 22 -26 q24 0 22 26 q-8 -14 -22 -14 q-14 0 -22 14" fill="${hair}" stroke="${INK}" stroke-width="1.6"/>`}
  ${opts.beard ? `<path d="M${cx - 14 * s} ${cy + 12 * s} q14 18 28 0 q-2 16 -14 16 q-12 0 -14 -16" fill="#cfc4b0" stroke="${INK}" stroke-width="1.4"/>` : ''}
  <circle cx="${cx - 8 * s}" cy="${cy - 3 * s}" r="1.9" fill="${INK}"/>
  <circle cx="${cx + 8 * s}" cy="${cy - 3 * s}" r="1.9" fill="${INK}"/>
  <path d="M${cx - 6 * s} ${cy + 9 * s} q6 5 12 0" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/>
  ${extra}`;
}

function heart(cx, cy, s = 1, col = RED) {
  return `<path d="M${cx} ${cy + 26 * s} C ${cx - 34 * s} ${cy - 2 * s} ${cx - 20 * s} ${cy - 26 * s} ${cx} ${cy - 10 * s} C ${cx + 20 * s} ${cy - 26 * s} ${cx + 34 * s} ${cy - 2 * s} ${cx} ${cy + 26 * s} z" fill="${col}" stroke="${INK}" stroke-width="2.4"/>`;
}

function coin(cx, cy, r = 13) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.62}" fill="none" stroke="${INK}" stroke-width="1.1" opacity=".7"/>`;
}

function star(cx, cy, r = 12, col = GOLD) {
  let p = '';
  for (let i = 0; i < 10; i++) {
    const rr = i % 2 === 0 ? r : r * 0.42;
    const a = -Math.PI / 2 + i * Math.PI / 5;
    p += (i ? 'L' : 'M') + (cx + rr * Math.cos(a)).toFixed(1) + ' ' + (cy + rr * Math.sin(a)).toFixed(1) + ' ';
  }
  return `<path d="${p}z" fill="${col}" stroke="${INK}" stroke-width="1.6"/>`;
}

function envelope(cx, cy, w = 88, h = 58) {
  return `<rect x="${cx - w / 2}" y="${cy - h / 2}" width="${w}" height="${h}" rx="4" fill="${CREAM}" stroke="${INK}" stroke-width="2.4"/>
  <path d="M${cx - w / 2} ${cy - h / 2} l${w / 2} ${h * 0.55} l${w / 2} -${h * 0.55}" fill="none" stroke="${INK}" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy + h * 0.16}" r="7" fill="${RED}" stroke="${INK}" stroke-width="1.6"/>`;
}

function sunrise(cx, cy, r = 34) {
  let rays = '';
  for (let i = 0; i < 7; i++) {
    const a = Math.PI + (i + 0.5) * Math.PI / 7;
    rays += `<line x1="${(cx + Math.cos(a) * (r + 6)).toFixed(1)}" y1="${(cy + Math.sin(a) * (r + 6)).toFixed(1)}" x2="${(cx + Math.cos(a) * (r + 22)).toFixed(1)}" y2="${(cy + Math.sin(a) * (r + 22)).toFixed(1)}" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round"/>`;
  }
  return `${rays}<path d="M${cx - r} ${cy} a${r} ${r} 0 0 1 ${2 * r} 0 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.4"/>
  <line x1="${cx - r - 22}" y1="${cy}" x2="${cx + r + 22}" y2="${cy}" stroke="${INK}" stroke-width="2.4"/>`;
}

function tree(cx, cy, s = 1) {
  return `<rect x="${cx - 5 * s}" y="${cy}" width="${10 * s}" height="${44 * s}" fill="${BROWN}" stroke="${INK}" stroke-width="2"/>
  <circle cx="${cx}" cy="${cy - 16 * s}" r="${30 * s}" fill="${GREEN}" stroke="${INK}" stroke-width="2.2"/>
  <circle cx="${cx - 20 * s}" cy="${cy + 2 * s}" r="${18 * s}" fill="${GREEN}" stroke="${INK}" stroke-width="2.2"/>
  <circle cx="${cx + 20 * s}" cy="${cy + 2 * s}" r="${18 * s}" fill="${GREEN}" stroke="${INK}" stroke-width="2.2"/>`;
}

function cloudShape(cx, cy, s = 1, col = '#8d8578') {
  return `<path d="M${cx - 34 * s} ${cy} a14 14 0 0 1 12 -20 a18 18 0 0 1 34 -6 a15 15 0 0 1 22 14 a12 12 0 0 1 -4 12 z" fill="${col}" stroke="${INK}" stroke-width="2"/>`;
}

/* ---------- a 36 jelenet ---------- */

const scenes = {
  g01: () => `${ground(258)}
    <rect x="86" y="182" width="88" height="76" rx="5" fill="${RED}" stroke="${INK}" stroke-width="2.6"/>
    <rect x="80" y="168" width="100" height="20" rx="4" fill="#c14a37" stroke="${INK}" stroke-width="2.6"/>
    <rect x="122" y="168" width="16" height="90" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>
    <path d="M130 168 q-26 -26 -34 -8 q-6 14 24 10 M130 168 q26 -26 34 -8 q6 14 -24 10" fill="${GOLD}" stroke="${INK}" stroke-width="2.2"/>
    ${star(72, 120, 9)} ${star(190, 104, 12)} ${star(152, 74, 7)}`,

  g02: () => `${ground(272)}
    <path d="M100 258 v-142 a30 16 0 0 1 60 0 v142 z" fill="${CREAM}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M100 122 a30 16 0 0 1 60 0" fill="none" stroke="${INK}" stroke-width="2" opacity=".5"/>
    <rect x="88" y="256" width="84" height="16" rx="3" fill="#d9c48d" stroke="${INK}" stroke-width="2.4"/>
    <rect x="88" y="94" width="84" height="14" rx="3" fill="#d9c48d" stroke="${INK}" stroke-width="2.4"/>
    <line x1="112" y1="116" x2="112" y2="250" stroke="#b99a5f" stroke-width="2.2"/>
    <line x1="130" y1="114" x2="130" y2="252" stroke="#b99a5f" stroke-width="2.2"/>
    <line x1="148" y1="116" x2="148" y2="250" stroke="#b99a5f" stroke-width="2.2"/>
    <path d="M64 180 q-10 -26 14 -34 M196 180 q10 -26 -14 -34" fill="none" stroke="${GREEN}" stroke-width="3.2" stroke-linecap="round"/>
    <circle cx="78" cy="146" r="4" fill="${GREEN}"/><circle cx="182" cy="146" r="4" fill="${GREEN}"/>`,

  g03: () => `
    <rect x="46" y="196" width="168" height="48" rx="8" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
    <rect x="40" y="176" width="20" height="72" rx="4" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    <rect x="200" y="186" width="20" height="62" rx="4" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M60 208 q70 -22 140 0 l0 -16 q-70 -20 -140 0 z" fill="${CREAM}" stroke="${INK}" stroke-width="2.2"/>
    <circle cx="86" cy="176" r="17" fill="${SKIN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M78 172 q8 -4 16 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <path d="M80 180 q6 4 12 0" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <rect x="64" y="150" width="44" height="10" rx="5" fill="${CREAM}" stroke="${INK}" stroke-width="1.8"/>
    <path d="M150 120 q10 -14 0 -24 M162 124 q12 -16 0 -30" fill="none" stroke="#8d8578" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>`,

  g04: () => `
    <rect x="118" y="98" width="24" height="14" rx="3" fill="${BROWN}" stroke="${INK}" stroke-width="2"/>
    <line x1="130" y1="112" x2="130" y2="238" stroke="${INK}" stroke-width="4"/>
    <line x1="66" y1="128" x2="194" y2="128" stroke="${INK}" stroke-width="3.4"/>
    <path d="M66 128 l-20 44 a26 12 0 0 0 40 0 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.2"/>
    <path d="M194 128 l-20 44 a26 12 0 0 0 40 0 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.2"/>
    <rect x="96" y="238" width="68" height="16" rx="4" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    ${star(130, 78, 9)}`,

  g05: () => `${ground(266)}
    ${cloudShape(130, 108, 1.25)}
    <path d="M120 116 l-10 22 h12 l-8 24" fill="none" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
    ${bust(130, 196, { robe: GREEN })}
    <path d="M118 202 q6 -5 12 0" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" transform="translate(0,-6)"/>`,

  g06: () => `${ground(268)}
    <g transform="rotate(38 130 176)">
      <path d="M130 74 l7 14 v96 h-14 v-96 z" fill="#cfc8ba" stroke="${INK}" stroke-width="2.2"/>
      <rect x="106" y="184" width="48" height="9" rx="4" fill="${GOLD}" stroke="${INK}" stroke-width="1.8"/>
      <rect x="124" y="193" width="12" height="26" rx="4" fill="${BROWN}" stroke="${INK}" stroke-width="1.8"/>
    </g>
    <g transform="rotate(-38 130 176)">
      <path d="M130 74 l7 14 v96 h-14 v-96 z" fill="#cfc8ba" stroke="${INK}" stroke-width="2.2"/>
      <rect x="106" y="184" width="48" height="9" rx="4" fill="${GOLD}" stroke="${INK}" stroke-width="1.8"/>
      <rect x="124" y="193" width="12" height="26" rx="4" fill="${BROWN}" stroke="${INK}" stroke-width="1.8"/>
    </g>`,

  g07: () => `
    ${heart(130, 170, 1.35)}
    <path d="M64 118 q66 -34 132 0 q-66 24 -132 0 z" fill="${GREEN}" stroke="${INK}" stroke-width="2.4" opacity=".92"/>
    <circle cx="130" cy="118" r="15" fill="${CREAM}" stroke="${INK}" stroke-width="2.2"/>
    <circle cx="130" cy="118" r="6.5" fill="${INK}"/>
    <path d="M96 210 l68 -78" stroke="${INK}" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M164 132 l4 -14 l-14 4 z" fill="${INK}"/>`,

  g08: () => `${ground(266)}
    ${bust(130, 190, { robe: '#6d5a7a' })}
    <ellipse cx="130" cy="104" rx="46" ry="26" fill="${CREAM}" stroke="${INK}" stroke-width="2.2"/>
    <path d="M112 134 q-8 4 -4 10 M104 148 a4 4 0 1 1 0 .1" fill="none" stroke="${INK}" stroke-width="2"/>
    ${star(112, 100, 7)} ${star(134, 106, 9)} ${star(152, 96, 6)}
    <path d="M112 200 q-2 -6 4 -8" fill="none" stroke="${INK}" stroke-width="1.6"/>`,

  g09: () => `${ground(266)}
    <path d="M76 178 h108 l-10 44 h-88 z" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M80 236 a34 34 0 0 0 100 0" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
    <path d="M84 186 q46 26 92 0 l-4 -14 q-42 20 -84 0 z" fill="${CREAM}" stroke="${INK}" stroke-width="2"/>
    <circle cx="130" cy="158" r="19" fill="${SKIN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M116 150 q14 -12 28 0" fill="none" stroke="${INK}" stroke-width="1.8"/>
    <circle cx="124" cy="158" r="1.8" fill="${INK}"/><circle cx="136" cy="158" r="1.8" fill="${INK}"/>
    <path d="M126 166 q4 4 8 0" fill="none" stroke="${INK}" stroke-width="1.6" stroke-linecap="round"/>
    ${star(78, 116, 8)} ${star(182, 116, 8)} ${star(130, 94, 10)}`,

  g10: () => `${ground(272)}
    <rect x="112" y="150" width="36" height="112" rx="6" fill="${CREAM}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M130 148 q-8 -12 0 -22 q8 10 0 22" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>
    <path d="M130 120 q10 -16 2 -30 q-2 -6 4 -10" fill="none" stroke="#8d8578" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M64 244 a20 30 0 0 1 24 -26 M196 244 a20 30 0 0 0 -24 -26" fill="none" stroke="${INK}" stroke-width="2.2"/>
    <path d="M78 262 h104" stroke="${INK}" stroke-width="3"/>`,

  g11: () => `
    <path d="M70 118 q0 -30 30 -30 q28 0 28 30 q0 34 -28 46 q-30 -12 -30 -46 z" fill="${CREAM}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M132 132 q0 -30 30 -30 q28 0 28 30 q0 34 -28 46 q-30 -12 -30 -46 z" fill="${DARK}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M82 112 q8 -6 16 0 M104 112 q6 -4 12 0" stroke="${INK}" stroke-width="2" fill="none"/>
    <path d="M86 140 q12 10 24 0" stroke="${INK}" stroke-width="2.2" fill="none"/>
    <path d="M144 126 q8 -6 16 0 M166 126 q6 -4 12 0" stroke="${CREAM}" stroke-width="2" fill="none"/>
    <path d="M148 158 q12 -10 24 0" stroke="${CREAM}" stroke-width="2.2" fill="none"/>
    <path d="M96 196 q34 26 68 6" fill="none" stroke="#b99a5f" stroke-width="2.2" stroke-dasharray="4 5"/>`,

  g12: () => `${ground(270)}
    <rect x="72" y="170" width="116" height="94" fill="${CREAM}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M60 172 l70 -54 l70 54 z" fill="${RED}" stroke="${INK}" stroke-width="2.6"/>
    <rect x="118" y="212" width="26" height="52" fill="${BROWN}" stroke="${INK}" stroke-width="2.2"/>
    <rect x="84" y="186" width="24" height="22" fill="${BLUE}" stroke="${INK}" stroke-width="2"/>
    <rect x="152" y="186" width="24" height="22" fill="${BLUE}" stroke="${INK}" stroke-width="2"/>
    <rect x="158" y="128" width="14" height="26" fill="${BROWN}" stroke="${INK}" stroke-width="2"/>
    <path d="M160 110 q6 -10 12 0 q6 8 -2 12" fill="none" stroke="#8d8578" stroke-width="2" stroke-linecap="round"/>`,

  g13: () => `
    <circle cx="106" cy="168" r="34" fill="none" stroke="${GOLD}" stroke-width="7"/>
    <circle cx="154" cy="168" r="34" fill="none" stroke="${GOLD}" stroke-width="7"/>
    <circle cx="106" cy="168" r="34" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <circle cx="154" cy="168" r="34" fill="none" stroke="${INK}" stroke-width="1.6"/>
    <path d="M106 128 l-7 -12 h14 z M154 128 l-7 -12 h14 z" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/>
    ${heart(130, 100, 0.62)}
    <path d="M76 232 q54 24 108 0" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="86" cy="234" r="4" fill="${RED}"/><circle cx="130" cy="242" r="4" fill="${RED}"/><circle cx="174" cy="234" r="4" fill="${RED}"/>`,

  g14: () => `${ground(270)}
    <path d="M96 262 v-44 q-8 -34 18 -52 q-6 -14 4 -24 q10 -10 24 -2 l16 10 q16 2 18 18 q2 12 -10 18 q8 26 -2 42 v34 h-12 v-28 h-32 v28 z" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M118 138 l-4 -18 q12 -2 14 12 M148 148 l16 -6 q2 12 -10 16" fill="${BROWN}" stroke="${INK}" stroke-width="2"/>
    <circle cx="132" cy="158" r="2.6" fill="${INK}"/>
    <ellipse cx="118" cy="172" rx="5" ry="4" fill="${INK}"/>
    <path d="M96 240 q-18 0 -16 -20" fill="none" stroke="${BROWN}" stroke-width="6" stroke-linecap="round"/>
    ${heart(188, 116, 0.5)}`,

  g15: () => `${ground(270)}
    ${bust(130, 170, { robe: BLUE, cap: true, collar: true })}
    <circle cx="106" cy="212" r="6" fill="${GOLD}" stroke="${INK}" stroke-width="1.4"/>
    <circle cx="130" cy="218" r="6" fill="${GOLD}" stroke="${INK}" stroke-width="1.4"/>
    <circle cx="154" cy="212" r="6" fill="${GOLD}" stroke="${INK}" stroke-width="1.4"/>
    <path d="M88 214 l-16 -6 v14 l16 -4 M172 214 l16 -6 v14 l-16 -4" fill="${GOLD}" stroke="${INK}" stroke-width="1.8"/>`,

  g16: () => `${ground(266)}
    ${coin(108, 218, 15)} ${coin(140, 224, 15)} ${coin(124, 196, 15)}
    <path d="M164 176 q20 -10 24 8 q4 16 -14 18" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
    <text x="108" y="224" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="${INK}" opacity=".7">1</text>
    <text x="140" y="230" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="${INK}" opacity=".7">1</text>
    <text x="124" y="202" text-anchor="middle" font-family="Georgia, serif" font-size="13" fill="${INK}" opacity=".7">1</text>`,

  g17: () => `${ground(272)}
    <rect x="70" y="112" width="86" height="152" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
    <rect x="82" y="112" width="62" height="152" fill="#6d5230" stroke="${INK}" stroke-width="2"/>
    <circle cx="134" cy="192" r="5" fill="${GOLD}" stroke="${INK}" stroke-width="1.4"/>
    <path d="M156 112 l30 14 v152 l-30 -14 z" fill="#5a4326" stroke="${INK}" stroke-width="2.2"/>
    ${bust(196, 190, { robe: GREEN }).replace(/stroke-width="2.4"/g, 'stroke-width="2.2"')}
    <path d="M96 148 a6 6 0 1 1 0 .1 M112 148 a6 6 0 1 1 0 .1" fill="none" stroke="${GOLD}" stroke-width="1.6"/>`,

  g18: () => `
    ${envelope(130, 176, 128, 84)}
    <path d="M70 236 q60 18 120 0" fill="none" stroke="#b99a5f" stroke-width="2" stroke-dasharray="3 5"/>
    <path d="M186 128 q16 -18 30 -8 q-2 14 -22 16" fill="${CREAM}" stroke="${INK}" stroke-width="2"/>
    <path d="M74 128 q-16 -18 -30 -8 q2 14 22 16" fill="${CREAM}" stroke="${INK}" stroke-width="2"/>`,

  g19: () => `${ground(270)}
    ${bust(130, 172, { robe: '#6d5a7a', scarf: '#8a6a3f', collar: true })}
    <path d="M104 132 q26 -18 52 0" fill="none" stroke="${INK}" stroke-width="2"/>`,

  g20: () => `${ground(270)}
    ${bust(130, 172, { robe: DARK, hat: true, beard: true, collar: true })}`,

  g21: () => `${ground(270)}
    ${bust(130, 170, { robe: DARK, bald: true, collar: false })}
    <path d="M108 148 a22 22 0 0 1 44 0" fill="#cfc4b0" stroke="${INK}" stroke-width="1.8"/>
    <rect x="124" y="196" width="12" height="34" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/>
    <rect x="112" y="206" width="36" height="11" fill="${GOLD}" stroke="${INK}" stroke-width="1.6"/>`,

  g22: () => `${ground(268)}
    <path d="M92 176 q-14 62 38 62 q52 0 38 -62 q-8 -22 -38 -22 q-30 0 -38 22 z" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
    <path d="M104 162 q26 -14 52 0 l6 -18 q-32 -14 -64 0 z" fill="#6d5230" stroke="${INK}" stroke-width="2.2"/>
    <path d="M112 144 q-4 -14 8 -18 M148 144 q4 -14 -8 -18" fill="none" stroke="${INK}" stroke-width="2.4"/>
    ${coin(88, 250, 12)} ${coin(176, 246, 12)} ${coin(130, 206, 16)}
    <text x="130" y="213" text-anchor="middle" font-family="Georgia, serif" font-size="17" font-weight="700" fill="${INK}" opacity=".72">$</text>`,

  g23: () => `${sunrise(130, 218, 40)}
    <path d="M96 118 q8 -10 16 0 q8 -10 16 0" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M148 96 q7 -8 14 0 q7 -8 14 0" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
    <path d="M60 250 q70 16 140 0" fill="none" stroke="${GREEN}" stroke-width="3.4" stroke-linecap="round"/>`,

  g24: () => `
    ${heart(130, 162, 1.7)}
    <path d="M76 214 l108 -104" stroke="${INK}" stroke-width="3.6" stroke-linecap="round"/>
    <path d="M184 110 l6 -18 l-18 6 z" fill="${INK}"/>
    <path d="M76 214 l-14 6 l8 -13 z" fill="${INK}"/>
    <circle cx="84" cy="248" r="6" fill="${RED}" stroke="${INK}" stroke-width="1.6"/>
    <circle cx="176" cy="248" r="6" fill="${RED}" stroke="${INK}" stroke-width="1.6"/>
    <path d="M84 254 q0 12 10 16 M176 254 q0 12 -10 16" fill="none" stroke="${GREEN}" stroke-width="2.4"/>`,

  g25: () => `${ground(270)}
    ${bust(120, 172, { robe: '#7a4a3a', collar: true })}
    <circle cx="188" cy="150" r="9" fill="${RED}" stroke="${INK}" stroke-width="1.8"/>
    <path d="M188 159 q-2 30 -14 44" fill="none" stroke="${GREEN}" stroke-width="2.6"/>
    <path d="M181 176 q-8 0 -10 -8 M193 186 q8 0 10 -8" fill="${GREEN}" stroke="${INK}" stroke-width="1.2"/>
    ${heart(74, 116, 0.5)}`,

  g26: () => `${ground(270)}
    ${bust(136, 172, { robe: '#a0526d', hair: '#5a3a1d', collar: true })}
    <path d="M110 130 q26 -20 52 0 q6 22 -6 30 q-6 -22 -20 -22 q-14 0 -20 22 q-12 -8 -6 -30" fill="#5a3a1d" stroke="${INK}" stroke-width="1.6"/>
    <circle cx="70" cy="150" r="8" fill="${RED}" stroke="${INK}" stroke-width="1.6"/>
    <path d="M70 158 q0 22 10 34" fill="none" stroke="${GREEN}" stroke-width="2.4"/>
    ${heart(192, 116, 0.5)}`,

  g27: () => `
    <path d="M84 236 a48 48 0 1 1 92 0 l-16 0 a32 32 0 1 0 -60 0 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.6"/>
    <circle cx="88" cy="242" r="4" fill="${INK}" opacity=".55"/><circle cx="172" cy="242" r="4" fill="${INK}" opacity=".55"/>
    <circle cx="98" cy="212" r="4" fill="${INK}" opacity=".55"/><circle cx="162" cy="212" r="4" fill="${INK}" opacity=".55"/>
    <g transform="translate(0,66)">
      <path d="M130 118 q-8 -12 -18 -6 q-8 6 2 14 q-14 -2 -14 10 q0 10 14 8 q-10 8 -2 15 q9 6 18 -6 q8 12 18 6 q8 -7 -2 -15 q14 2 14 -8 q0 -12 -14 -10 q10 -8 2 -14 q-10 -6 -18 6 z" fill="${GREEN}" stroke="${INK}" stroke-width="2"/>
      <line x1="130" y1="144" x2="130" y2="160" stroke="${GREEN}" stroke-width="2.6"/>
    </g>
    ${star(74, 132, 8)} ${star(188, 132, 8)} ${star(130, 102, 11)}`,

  g28: () => `${ground(272, '#c9b183')}
    <rect x="118" y="176" width="20" height="88" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M128 176 l-26 -34 M128 176 l30 -28 M118 210 l-24 -12" stroke="${BROWN}" stroke-width="7" stroke-linecap="round"/>
    <path d="M128 176 l-26 -34 M128 176 l30 -28" stroke="${INK}" stroke-width="1.4" opacity=".5"/>
    ${cloudShape(120, 92, 1.3, '#6d655a')}
    <path d="M124 100 l-14 30 h16 l-12 34 l34 -42 h-18 l14 -22 z" fill="${GOLD}" stroke="${INK}" stroke-width="2"/>`,

  g29: () => `${ground(272)}
    <rect x="122" y="86" width="16" height="60" fill="${BROWN}" stroke="${INK}" stroke-width="2.2"/>
    <path d="M130 88 q-66 0 -74 66 q56 -18 44 60 M130 88 q66 0 74 66 q-56 -18 -44 60 M130 88 q-34 24 -28 118 M130 88 q34 24 28 118 M130 88 v126" fill="none" stroke="${GREEN}" stroke-width="4" stroke-linecap="round"/>
    <path d="M130 88 q-52 8 -58 88 M130 88 q52 8 58 88" fill="none" stroke="#4a6238" stroke-width="3" stroke-linecap="round" opacity=".8"/>
    <path d="M62 154 v34 M198 154 v34" stroke="${GREEN}" stroke-width="3" stroke-linecap="round" opacity=".7"/>
    <path d="M102 258 q2 -22 18 -22 q14 0 17 15 l-3 9 q-15 -7 -29 0 z" fill="${BLUE}" stroke="${INK}" stroke-width="2.2"/>
    <circle cx="121" cy="228" r="10" fill="${SKIN}" stroke="${INK}" stroke-width="2"/>
    <path d="M114 241 q7 8 15 3" fill="none" stroke="${INK}" stroke-width="1.5"/>`,

  g30: () => `${ground(270)}
    ${bust(112, 178, { robe: DARK, hair: DARK })}
    <path d="M92 170 h40" stroke="${DARK}" stroke-width="12"/>
    <circle cx="104" cy="170" r="2.6" fill="${CREAM}"/><circle cx="120" cy="170" r="2.6" fill="${CREAM}"/>
    <path d="M160 200 q26 -10 30 12 q4 24 -18 28 q-16 2 -20 -14" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M158 200 q10 -12 22 -6" fill="none" stroke="${INK}" stroke-width="2.2"/>
    ${coin(178, 220, 8)}`,

  g31: () => `${ground(268)}
    <path d="M40 258 q60 -60 84 -92 q20 -28 60 -44" fill="none" stroke="#b99a5f" stroke-width="8" stroke-linecap="round"/>
    <path d="M40 258 q60 -60 84 -92 q20 -28 60 -44" fill="none" stroke="${CREAM}" stroke-width="2.4" stroke-dasharray="8 9"/>
    <rect x="152" y="176" width="6" height="56" fill="${BROWN}" stroke="${INK}" stroke-width="1.8"/>
    <path d="M158 180 h44 l10 8 l-10 8 h-44 z" fill="${CREAM}" stroke="${INK}" stroke-width="2"/>
    <rect x="66" y="196" width="52" height="36" rx="5" fill="${BROWN}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M80 196 v-8 q0 -6 12 -6 q12 0 12 6 v8" fill="none" stroke="${INK}" stroke-width="2.2"/>
    ${sunrise(206, 108, 20)}`,

  g32: () => `
    <path d="M74 176 q24 -34 56 -22 q10 -18 30 -14 q22 4 22 26 q0 24 -26 24 l-58 0 q-20 0 -24 -14 z" fill="${CREAM}" stroke="${INK}" stroke-width="2.4"/>
    <path d="M160 142 q14 -12 26 -6 l-12 14" fill="${CREAM}" stroke="${INK}" stroke-width="2.2"/>
    <circle cx="168" cy="152" r="2.2" fill="${INK}"/>
    <path d="M96 190 l-22 26 l30 -12" fill="${CREAM}" stroke="${INK}" stroke-width="2.2"/>
    ${envelope(130, 244, 66, 42)}
    <path d="M118 208 q10 14 24 0" fill="none" stroke="${INK}" stroke-width="1.8" opacity=".6"/>`,

  g33: () => `${ground(272)}
    <path d="M96 258 q0 -34 20 -48 q-10 -10 -4 -22 q6 -10 18 -8 q4 -14 20 -12 q18 2 16 20 q16 6 12 24 q-4 16 -20 16 q6 16 4 30 z" fill="#7a5a8a" stroke="${INK}" stroke-width="2.4" opacity="0"/>
    ${bust(112, 196, { robe: '#7a5a8a' })}
    <path d="M136 214 q30 -24 44 -66" fill="none" stroke="${SKIN}" stroke-width="7" stroke-linecap="round"/>
    <path d="M136 214 q30 -24 44 -66" fill="none" stroke="${INK}" stroke-width="1.6" opacity=".5"/>
    ${star(190, 118, 15)} ${star(160, 88, 8)} ${star(206, 84, 7)}`,

  g34: () => `${ground(268)}
    ${bust(130, 190, { robe: RED })}
    <path d="M92 158 l-10 -16 M168 158 l10 -16 M130 140 v-18" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round"/>
    ${star(84, 122, 9)} ${star(176, 122, 9)} ${star(130, 100, 12)}
    <path d="M104 250 q26 14 52 0" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>`,

  g35: () => `${ground(272, '#c9b183')}
    <g transform="rotate(118 124 190)">
      <path d="M92 176 q-12 54 32 54 q44 0 32 -54 q-6 -20 -32 -20 q-26 0 -32 20 z" fill="${BROWN}" stroke="${INK}" stroke-width="2.6"/>
      <path d="M102 162 q22 -12 44 0 l5 -15 q-27 -12 -54 0 z" fill="#6d5230" stroke="${INK}" stroke-width="2.2"/>
    </g>
    ${coin(168, 236, 11)} ${coin(192, 252, 9)} ${coin(148, 258, 9)}
    <path d="M162 208 l4 16 M186 226 l4 14 M146 232 l2 14" stroke="${INK}" stroke-width="1.4" opacity=".5"/>
    <path d="M66 112 q10 2 10 12 q0 8 -10 10 q-8 -10 0 -22 M88 96 q10 2 10 12 q0 8 -10 10 q-8 -10 0 -22" fill="#c0771f" stroke="${INK}" stroke-width="1.6"/>`,

  g36: () => `
    <path d="M92 148 l20 60 h-14 l-4 34 h32 l-4 -34 h-14 z" fill="none"/>
    <path d="M88 142 q14 56 22 62 l0 34 h-14 v8 h44 v-8 h-14 l0 -34 q8 -6 22 -62 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.4" transform="translate(-24,4) scale(.9)"/>
    <path d="M88 142 q14 56 22 62 l0 34 h-14 v8 h44 v-8 h-14 l0 -34 q8 -6 22 -62 z" fill="${GOLD}" stroke="${INK}" stroke-width="2.4" transform="translate(64,4) scale(.9)"/>
    <path d="M112 158 l38 -12" stroke="${INK}" stroke-width="2" opacity=".4"/>
    <circle cx="130" cy="106" r="3" fill="${INK}"/>
    <path d="M148 92 q6 -14 -4 -20 M162 100 q8 -16 -2 -26" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M170 108 l4 -10 M96 96 a4 4 0 1 1 0 .1 M108 84 l0 -12 l8 2 l0 10 z" fill="${INK}" stroke="${INK}" stroke-width="1.6"/>`
};

/* ---------- generálás ---------- */

const names = {
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

const outDir = path.join(__dirname, '..', 'app', 'assets', 'gypsy');
fs.mkdirSync(outDir, { recursive: true });

let ok = 0;
Object.keys(names).forEach(function (id) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">` +
    frame() + (scenes[id] ? scenes[id]() : '') + banner(names[id]) + '</svg>';
  fs.writeFileSync(path.join(outDir, id + '.svg'), svg, 'utf8');
  ok++;
});
console.log(ok + ' lap generalva ide: ' + outDir);
