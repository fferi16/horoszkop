/* Horoszkóp – felület vezérlése */

(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  };

  var state = { place: null, profile: null, filter: 'all' };

  /* ---------------- helyválasztó ---------------- */

  function setPlace(p) {
    state.place = p;
    $('fPlace').value = p.name;
    $('placeInfo').textContent = p.lat.toFixed(3) + '° É, ' + p.lon.toFixed(3) +
      '° K · időzóna: ' + p.tz;
  }

  function initPlace() {
    var box = $('placeSuggest'), input = $('fPlace');
    setPlace(HDATA.geo.find('Budapest'));

    input.addEventListener('input', function () {
      var q = input.value.trim();
      var hits = HDATA.geo.search(q, 8);
      if (!hits.length) { box.classList.remove('open'); return; }
      box.innerHTML = hits.map(function (h, i) {
        return '<div data-i="' + i + '">' + esc(h.name) +
          '<span class="cty">' + esc(h.country) + '</span></div>';
      }).join('');
      box._hits = hits;
      box.classList.add('open');
    });

    box.addEventListener('mousedown', function (e) {
      var d = e.target.closest('div[data-i]');
      if (!d) return;
      e.preventDefault();
      setPlace(box._hits[+d.dataset.i]);
      box.classList.remove('open');
    });

    input.addEventListener('blur', function () {
      setTimeout(function () { box.classList.remove('open'); }, 120);
      var found = HDATA.geo.find(input.value);
      if (found) setPlace(found);
      else if (state.place) $('placeInfo').textContent =
        'Ismeretlen település — a számítás ' + state.place.name + ' adataival készül. ' +
        'Válassz a listából a pontos eredményért.';
    });
  }

  /* ---------------- a partner helyválasztója ---------------- */

  function initPartnerPlace() {
    var box = $('pPlaceSuggest'), input = $('pPlace'), info = $('pPlaceInfo');
    if (!input) return;
    state.partnerPlace = HDATA.geo.find('Budapest');

    input.addEventListener('input', function () {
      var hits = HDATA.geo.search(input.value.trim(), 8);
      if (!hits.length) { box.classList.remove('open'); return; }
      box.innerHTML = hits.map(function (h, i) {
        return '<div data-i="' + i + '">' + esc(h.name) +
          '<span class="cty">' + esc(h.country) + '</span></div>';
      }).join('');
      box._hits = hits;
      box.classList.add('open');
    });

    box.addEventListener('mousedown', function (e) {
      var d = e.target.closest('div[data-i]');
      if (!d) return;
      e.preventDefault();
      state.partnerPlace = box._hits[+d.dataset.i];
      input.value = state.partnerPlace.name;
      info.textContent = state.partnerPlace.lat.toFixed(3) + '° É, ' +
        state.partnerPlace.lon.toFixed(3) + '° K';
      box.classList.remove('open');
    });

    input.addEventListener('blur', function () {
      setTimeout(function () { box.classList.remove('open'); }, 120);
      var found = HDATA.geo.find(input.value);
      if (found) {
        state.partnerPlace = found;
        info.textContent = found.lat.toFixed(3) + '° É, ' + found.lon.toFixed(3) + '° K';
      }
    });
  }

  /* ---------------- népi jelölőnégyzetek ---------------- */

  function initSpecial() {
    var list = (window.HDATA.hungarian && HDATA.hungarian.specialBirth) || [];
    $('specialBox').innerHTML = list.map(function (s) {
      return '<label><input type="checkbox" value="' + esc(s.key) + '"> ' + esc(s.name) + '</label>';
    }).join('');
  }

  /* ---------------- űrlap beolvasása ---------------- */

  function readForm() {
    var dv = $('fDate').value;
    if (!dv) { alert('Add meg a születési dátumot!'); return null; }
    var parts = dv.split('-');
    var noTime = $('fNoTime').checked;
    var tv = ($('fTime').value || '12:00').split(':');
    var special = [].slice.call(document.querySelectorAll('#specialBox input:checked'))
      .map(function (c) { return c.value; });

    // partner a szinasztriához (csak ha van dátum)
    var partner = null;
    var pd = $('pDate') && $('pDate').value;
    if (pd) {
      var pp = pd.split('-');
      var pt = ($('pTime').value || '12:00').split(':');
      partner = {
        name: $('pName').value.trim(),
        year: +pp[0], month: +pp[1], day: +pp[2],
        hour: +pt[0], minute: +pt[1], hasTime: !$('pNoTime').checked,
        place: state.partnerPlace || state.place
      };
    }

    return {
      name: $('fName').value.trim(),
      gender: $('fGender').value,
      year: +parts[0], month: +parts[1], day: +parts[2],
      hour: +tv[0], minute: +tv[1], hasTime: !noTime,
      place: state.place, houseSystem: $('fHouse').value,
      special: special, partner: partner
    };
  }

  /* ---------------- megjelenítés ---------------- */

  function renderHero(p) {
    var i = p.input;
    var dateStr = i.year + '. ' + String(i.month).padStart(2, '0') + '. ' +
      String(i.day).padStart(2, '0') + '.';
    var timeStr = i.hasTime ? ' ' + String(i.hour).padStart(2, '0') + ':' +
      String(i.minute).padStart(2, '0') : ' (idő nélkül)';
    var s = p.summary;

    var facts = [
      { lbl: 'Napjegy', val: s.sunSign, sym: HCORE.SIGN_SYMBOLS[p.chart.planets.sun.sign.index] },
      { lbl: 'Holdjegy', val: s.moonSign, sym: '☽' }
    ];
    if (s.ascSign) facts.push({ lbl: 'Aszcendens', val: s.ascSign, sym: '↑' });
    facts.push({ lbl: 'Kínai jegy', val: s.chineseElement + ' ' + s.chineseAnimal, sym: '🐉' });
    facts.push({ lbl: 'Életút-szám', val: String(s.lifePath), sym: '🔢' });

    var html = '<h2>' + (i.name ? esc(i.name) : 'A születési profilod') + '</h2>' +
      '<p class="who">' + dateStr + timeStr + ' · ' + esc(p.place.name) +
      ' · ' + p.age.years + ' éves</p>' +
      '<div class="bigfacts">' + facts.map(function (f) {
        return '<div class="fact"><div class="lbl">' + esc(f.lbl) + '</div>' +
          '<div class="sym">' + f.sym + '</div>' +
          '<div class="val">' + esc(f.val) + '</div></div>';
      }).join('') + '</div>';

    if (window.HUI && HUI.drawWheel) {
      html += '<div class="wheel-box">' + HUI.drawWheel(p.chart, i.hasTime) + '</div>';
      if (!i.hasTime) {
        html += '<p style="text-align:center"><small>Pontos születési idő nélkül a ' +
          'házak és az aszcendens nem szerepelnek az ábrán.</small></p>';
      }
    }
    $('hero').innerHTML = html;
  }

  function renderTable(t) {
    if (!t) return '';
    if (t.type === 'planets') {
      return '<div class="tbl-scroll"><table><thead><tr><th>Égitest</th><th>Jegy</th>' +
        '<th>Pozíció</th><th>Ház</th><th>Napi mozgás</th></tr></thead><tbody>' +
        t.rows.map(function (r) {
          return '<tr><td><span class="sym">' + r.symbol + '</span>' + esc(r.planet) +
            (r.retro ? ' <span class="retro">℞</span>' : '') + '</td>' +
            '<td>' + esc(r.sign) + '</td><td>' + esc(r.deg.replace(' ' + r.sign, '')) + '</td>' +
            '<td>' + (r.house || '–') + '</td>' +
            '<td>' + (r.speed != null ? r.speed.toFixed(2).replace('.', ',') + '°' : '–') +
            '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<p><small>A részletes jelentések a lenti kártyákban olvashatók.</small></p>';
    }
    if (t.type === 'houses') {
      return '<div class="tbl-scroll"><table><thead><tr><th>Ház</th><th>Életterület</th>' +
        '<th>Csúcs</th><th>Ura</th><th>Égitestek</th></tr></thead><tbody>' +
        t.rows.map(function (r) {
          return '<tr><td><strong>' + r.num + '.</strong></td>' +
            '<td>' + esc(r.title) + '</td>' +
            '<td>' + esc(r.cusp) + '</td>' +
            '<td>' + esc(r.ruler || '–') + '</td>' +
            '<td>' + esc(r.planets || '–') + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }
    if (t.type === 'bazi') {
      return '<div class="tbl-scroll"><table><thead><tr><th>Pillér</th><th>Elem és állat</th>' +
        '<th>Írásjegy</th><th>Mit jelöl</th></tr></thead><tbody>' +
        t.rows.map(function (r) {
          return '<tr><td>' + esc(r.label) + '</td><td>' + esc(r.value) + '</td>' +
            '<td style="font-size:1.2rem">' + esc(r.cn) + '</td>' +
            '<td>' + esc(r.note || '') + '</td></tr>';
        }).join('') + '</tbody></table></div>';
    }
    return '';
  }

  function bioRow(v) {
    var w = Math.abs(v.percent) / 2;
    var left = v.percent >= 0 ? 50 : 50 - w;
    return '<div class="bio-row"><div>' + esc(v.name) +
      (v.len ? ' <small>(' + v.len + ' n)</small>' : '') + '</div>' +
      '<div class="bio-track"><div class="bio-mid"></div>' +
      '<div class="bio-fill" style="left:' + left + '%;width:' + w + '%;background:' +
      (v.color || 'var(--accent)') + '"></div></div>' +
      '<div class="bio-val" style="color:' + (v.color || 'var(--accent)') + '">' +
      (v.percent > 0 ? '+' : '') + v.percent + '%' +
      (v.critical ? ' <span class="crit">!</span>' : '') + '</div></div>';
  }

  function renderBiorhythm(b, series) {
    if (!b) return '';
    var primary = b.values.filter(function (v) { return v.primary !== false; });
    var secondary = b.values.filter(function (v) { return v.primary === false; });
    var html = '';

    if (series && window.HUI && HUI.drawBiorhythm) {
      html += '<div class="chart-box">' + HUI.drawBiorhythm(series) + '</div>' +
        '<p class="chart-cap"><small>A folytonos vonalak a három eredeti ciklus, ' +
        'a szaggatottak a későbbi kiegészítések. A függőleges vonal a mai nap.</small></p>';
    }

    html += '<h4 class="sub">Elsődleges ciklusok</h4><div class="bio-bars">' +
      primary.map(bioRow).join('') + '</div>';

    if (b.composites && b.composites.length) {
      html += '<h4 class="sub">Összetett mutatók</h4><div class="bio-bars">' +
        b.composites.map(function (c) {
          return bioRow({ name: c.name, percent: c.percent, color: 'var(--accent)' });
        }).join('') + '</div>' +
        '<div class="comp-notes">' + b.composites.map(function (c) {
          return '<p><strong>' + esc(c.name) + '</strong> <em>(' + esc(c.formula) + ')</em> — ' +
            esc(c.text) + '</p>';
        }).join('') + '</div>';
    }

    if (secondary.length) {
      html += '<details class="extra-cycles"><summary>Másodlagos ciklusok</summary>' +
        '<div class="bio-bars">' + secondary.map(bioRow).join('') + '</div></details>';
    }

    if (b.overall != null) {
      html += '<p class="overall">Összesített napi mutató: <strong>' +
        (b.overall > 0 ? '+' : '') + b.overall + '%</strong>' +
        (b.criticalCount ? ' · ' + b.criticalCount + ' kritikus (nullátmenetes) ciklus ma' : '') +
        '</p>';
    }
    return html;
  }

  function renderPsychomatrix(sec) {
    if (!sec.matrix) return '';
    var pm = sec.matrix;
    var html = '<h3 class="sec-h3">A mátrix</h3><div class="pm-grid">';
    // a rács soronként épül: [1,4,7] / [2,5,8] / [3,6,9]
    pm.grid.forEach(function (row) {
      row.forEach(function (n) {
        var cnt = pm.counts[n];
        var cellName = (window.HDATA.psycho && HDATA.psycho.cells[n]) ?
          HDATA.psycho.cells[n].name : String(n);
        html += '<div class="pm-cell' + (cnt ? '' : ' empty') + '">' +
          '<div class="pm-num">' + (cnt ? pm.cellStr(n) : '—') + '</div>' +
          '<div class="pm-name">' + esc(cellName) + '</div></div>';
      });
    });
    html += '</div>';

    if (sec.matrixLines && sec.matrixLines.length) {
      html += '<h3 class="sec-h3">Sorok, oszlopok, átlók</h3><div class="sec-items">' +
        sec.matrixLines.map(function (l) {
          return '<div class="row"><div class="lbl">' + esc(l.name) +
            ' — ' + l.count + ' számjegy</div>' +
            '<div class="txt">' + esc(l.text) + '</div></div>';
        }).join('') + '</div>';
    }
    return html;
  }

  function renderDestinyMatrix(sec) {
    if (!sec.matrixDM) return '';
    var html = '';
    if (window.HUI && HUI.drawMatrix) {
      html += '<div class="wheel-box">' + HUI.drawMatrix(sec.matrixDM) + '</div>' +
        '<p style="text-align:center"><small>A négy nagy pont: B = hónap (fent), ' +
        'C = év (jobbra), D = gyökerek (lent), A = nap (balra). Középen a fő feladat.' +
        '</small></p>';
    }
    if (sec.matrixChakras && sec.matrixChakras.length) {
      var MD = window.HDATA.matrix || {};
      var cols = MD.chakraCols || {};
      html += '<h3 class="sec-h3">Egészségkártya — csakrasor</h3>' +
        '<p><small>' + esc(MD.chakraIntro || '') + '</small></p>' +
        '<div class="tbl-scroll"><table class="chakra-tbl"><thead><tr>' +
        '<th>Csakra</th><th>' + esc(cols.physics || 'Fizika') + '</th>' +
        '<th>' + esc(cols.energy || 'Energia') + '</th>' +
        '<th>' + esc(cols.emotion || 'Érzelem') + '</th>' +
        '<th>Jelentés</th></tr></thead><tbody>' +
        sec.matrixChakras.map(function (c, i) {
          return '<tr><td><span class="ch-dot ch-' + (i + 1) + '"></span>' +
            '<strong>' + esc(c.name) + '</strong></td>' +
            '<td class="num">' + c.physics + '</td>' +
            '<td class="num">' + c.energy + '</td>' +
            '<td class="num accent">' + c.emotion + '</td>' +
            '<td>' + esc(c.meaning || '') + '</td></tr>';
        }).join('') +
        (sec.matrixChakraResult ? '<tr class="tot"><td><strong>' +
          esc(MD.chakraResultName || 'Eredmény') + '</strong></td>' +
          '<td class="num">' + sec.matrixChakraResult.physics + '</td>' +
          '<td class="num">' + sec.matrixChakraResult.energy + '</td>' +
          '<td class="num accent">' + sec.matrixChakraResult.emotion + '</td>' +
          '<td>Az oszlopok összege: a rendszer szerint az általános energiaszinted.</td></tr>' : '') +
        '</tbody></table></div>';
    }
    return html;
  }

  function renderHvd(sec) {
    if (!sec.hvd) return '';
    var colors = {
      szahaszrara: '#7b3fa0', adzsna: '#3f5ed0', visuddha: '#2eaad4',
      anahata: '#4caf50', manipura: '#e8c62e', szvadhisthana: '#e8892e',
      muladhara: '#d94141'
    };
    var html = '<h3 class="sec-h3">Csakrák töltöttsége</h3><div class="hvd-bars">';
    sec.hvd.chakras.forEach(function (c) {
      html += '<div class="hvd-row">' +
        '<div class="hvd-name"><span class="ch-dot" style="background:' +
        colors[c.key] + '"></span>' + esc(c.name) +
        (c.uncertain ? ' <span class="unc" title="visszafejtett érték">*</span>' : '') +
        '</div>' +
        '<div class="hvd-track"><div class="hvd-zone"></div>' +
        '<div class="hvd-fill" style="width:' + c.value + '%;background:' +
        colors[c.key] + '"></div></div>' +
        '<div class="hvd-val">' + c.value + '%</div>' +
        '<div class="hvd-band band-' + esc(c.band.key) + '">' + esc(c.band.name) + '</div>' +
        '</div>' +
        '<div class="hvd-desc">' + esc(c.meaning) + '</div>';
    });
    html += '</div><p><small>A halvány sáv a 40–60% közötti „normál" tartomány. ' +
      'A rendszer szerint a magas érték nem előny, hanem kezelendő többlet. ' +
      'A csillaggal jelölt érték visszafejtett, nem az alapkönyvből származik.</small></p>';
    return html;
  }

  /** A "mit jelent a fok" blokk: szabian szimbólum, dekanátus, határ, kritikus fok. */
  function renderDegree(block) {
    if (!block || !block.parts || !block.parts.length) return '';
    return '<div class="deg-block">' +
      '<div class="deg-head">Mit jelent ez a fok — <strong>' + esc(block.head) +
      '</strong></div>' +
      block.parts.map(function (d) {
        return '<div class="deg-item"><span class="deg-lbl">' + esc(d.label) + '</span>' +
          (d.value ? '<span class="deg-val">' + esc(d.value) + '</span>' : '') +
          (d.text ? '<span class="deg-txt">' + esc(d.text) + '</span>' : '') + '</div>';
      }).join('') + '</div>';
  }

  function renderHouseDetails(list) {
    if (!list || !list.length) return '';
    return '<h3 class="sec-h3">A tizenkét ház a te képletedben</h3>' +
      '<p><small>Minden házban előbb az szerepel, ami a te képletedből következik, ' +
      'és csak utána, külön jelölve az általános tudnivaló arról, mit jelent ez a ' +
      'ház bárkinél.</small></p>' +
      '<div class="detail-list">' + list.map(function (h) {
        var body = '<div class="personal">';

        /* --- ami RÓLAD szól --- */
        body += '<div class="sec-items">';

        // a csúcson álló jegy: ez a személyre szabott alaphang
        body += '<div class="row"><div class="lbl">' + esc(h.cuspSign) + ' áll a csúcsán · ' +
          esc(h.cusp) + '</div>' +
          (h.cuspSignText ? '<div class="txt">' + esc(h.cuspSignText) + '</div>' : '') +
          '</div>';

        // a ház ura és hova vezet
        if (h.ruler) {
          var r = h.ruler;
          body += '<div class="row ruler-row' + (h.empty ? ' key' : '') + '">' +
            '<div class="lbl">' + (h.empty ? 'Itt keresd — a' : 'A') + ' ház ura: ' +
            r.symbol + ' ' + esc(r.name) + ' · ' + esc(r.deg) +
            (r.retro ? ' <span class="retro">℞</span>' : '') +
            (r.house ? ' · ' + r.house + '. ház' : '') + '</div>' +
            (r.text ? '<div class="txt">' + esc(r.text) + '</div>' : '') +
            (h.empty && r.houseText
              ? '<div class="txt">' + esc(r.houseText) + '</div>' : '') +
            (h.empty && r.dignity
              ? '<div class="txt sub-note">' + esc(r.dignity.text) + '</div>' : '') +
            (h.empty && r.sabian
              ? '<div class="txt sub-note">Az urának foka — ' + esc(r.sabian) + '</div>' : '') +
            (h.modernRuler
              ? '<div class="txt sub-note">Modern uralkodója ' + esc(h.modernRuler) + '.</div>'
              : '') +
            '</div>';
        }

        // benne álló égitestek
        if (h.planets && h.planets.length) {
          body += h.planets.map(function (o) {
            return '<div class="row"><div class="lbl">' + o.symbol + ' ' + esc(o.name) +
              ' itt áll · ' + esc(o.deg) +
              (o.retro ? ' <span class="retro">℞</span>' : '') + '</div>' +
              (o.text ? '<div class="txt">' + esc(o.text) + '</div>' : '') + '</div>';
          }).join('');
        } else if (h.empty) {
          body += '<div class="row"><div class="lbl">Nincs benne égitest</div>' +
            (h.emptyPointer
              ? '<div class="txt pointer">' + esc(h.emptyPointer) + '</div>' : '') +
            (h.emptyText ? '<div class="txt">' + esc(h.emptyText) + '</div>' : '') +
            '</div>';
        }

        // interceptált jegy
        if (h.intercepted) {
          body += '<div class="row"><div class="lbl">Beszorult jegy: ' +
            h.intercepted.map(function (x) { return esc(x.name) + ' ' + x.symbol; }).join(', ') +
            '</div><div class="txt">Ez a jegy teljes egészében ezen a házon belül van, ' +
            'egyetlen házcsúcs sem esik rá. A hagyomány szerint az ilyen jegy témái ' +
            'rejtettebben működnek: nehezebben férsz hozzájuk, és gyakran csak ' +
            'később, tudatos munkával bontakoznak ki.</div></div>';
        }
        body += '</div>';
        if (h.degree) {
          if (h.isAngle) {
            body += renderDegree(h.degree);
          } else {
            body += '<details class="general cusp-deg"><summary>A csúcs foka ' +
              '(másodlagos — házrendszerfüggő)</summary>' +
              '<p class="gen-line">Ez a házcsúcs nem tengelypont: a helye attól függ, ' +
              'melyik házrendszert választod, ezért a rajta álló fok jelentése ' +
              'bizonytalanabb, mint egy bolygóé. A ház fő kulcsa a fenti uralkodó.</p>' +
              renderDegree(h.degree) + '</details>';
          }
        }
        body += '</div>';

        /* --- ami ÁLTALÁNOS --- */
        var gen = '<p class="d-desc">' + esc(h.description) + '</p>';
        if (h.keywords && h.keywords.length) {
          gen += '<p class="d-keys">' + h.keywords.map(function (k) {
            return '<span class="tag">' + esc(k) + '</span>';
          }).join('') + '</p>';
        }
        if (h.questions && h.questions.length) {
          gen += '<p class="gen-line"><strong>Mire válaszol:</strong> ' +
            h.questions.map(esc).join(' · ') + '</p>';
        }
        if (h.bodyArea) {
          gen += '<p class="gen-line"><strong>Testi megfelelés:</strong> ' +
            esc(h.bodyArea) + '</p>';
        }
        if (h.lifeAge) {
          gen += '<p class="gen-line"><strong>Életszakasz:</strong> ' + esc(h.lifeAge) + '</p>';
        }
        body += '<details class="general"><summary>Általánosan a ' + h.num +
          '. házról</summary>' + gen + '</details>';

        return '<details class="d-item"><summary>' +
          '<span class="d-num">' + h.num + '.</span>' +
          '<span class="d-title">' + esc(h.title) + '</span>' +
          '<span class="d-meta">' + esc(h.cuspSign) + ' ' + h.cuspSymbol +
          (h.planets && h.planets.length
            ? ' · ' + h.planets.map(function (o) { return o.symbol; }).join(' ')
            : ' · üres') +
          (h.stellium ? ' <span class="badge">halmozódás</span>' : '') +
          '</span></summary>' + body + '</details>';
      }).join('') + '</div>';
  }

  function renderPlanetDetails(list) {
    if (!list || !list.length) return '';
    return '<div class="detail-list">' + list.map(function (p) {
      var body = '<div class="personal"><div class="sec-items">';
      body += '<div class="row"><div class="lbl">' + esc(p.sign) + ' jegyében</div>' +
        '<div class="val">' + esc(p.deg) + (p.retro ? ' <span class="retro">℞</span>' : '') +
        '</div>' + (p.signText ? '<div class="txt">' + esc(p.signText) + '</div>' : '') +
        '</div>';
      if (p.house) {
        body += '<div class="row"><div class="lbl">' + p.house + '. házban</div>' +
          (p.houseText ? '<div class="txt">' + esc(p.houseText) + '</div>' : '') + '</div>';
      }
      if (p.dignity) {
        body += '<div class="row"><div class="lbl">Méltóság</div>' +
          '<div class="txt">' + esc(p.dignity.text) + '</div></div>';
      }

      body += '</div>';
      body += renderDegree(p.degree);
      body += '</div>';
      if (p.description) {
        body += '<details class="general"><summary>Általánosan a(z) ' + esc(p.name) +
          ' szerepéről</summary><p class="d-desc">' + esc(p.description) + '</p></details>';
      }
      if (p.aspects && p.aspects.length) {
        body += '<h4 class="sub">Fényszögei</h4><div class="asp-list">' +
          p.aspects.map(function (a) {
            return '<div class="asp-row"><span class="asp' + (a.exact ? ' exact' : '') +
              '">' + esc(a.text) + '<span class="orb">' + esc(a.orb) + '</span></span>' +
              (a.interp ? '<span class="asp-txt">' + esc(a.interp) + '</span>' : '') +
              '</div>';
          }).join('') + '</div>';
      }
      return '<details class="d-item"><summary>' +
        '<span class="d-num">' + p.symbol + '</span>' +
        '<span class="d-title">' + esc(p.name) +
        (p.keyword ? ' <em>' + esc(p.keyword) + '</em>' : '') + '</span>' +
        '<span class="d-meta">' + esc(p.deg) + (p.retro ? ' ℞' : '') +
        (p.house ? ' · ' + p.house + '. ház' : '') + '</span></summary>' + body + '</details>';
    }).join('') + '</div>';
  }

  function renderBaziBalance(bal) {
    if (!bal) return '';
    var HU = { fa: 'Fa', tuz: 'Tűz', fold: 'Föld', fem: 'Fém', viz: 'Víz' };
    var COL = { fa: '#4c8b5a', tuz: '#d94141', fold: '#c9a227', fem: '#9aa5b1', viz: '#3f7fa6' };
    var max = 0;
    Object.keys(bal.counts).forEach(function (k) { if (bal.counts[k] > max) max = bal.counts[k]; });
    return '<h3 class="sec-h3">Az öt elem mérlege a nyolc írásjegyben</h3>' +
      '<div class="elem-bars">' + Object.keys(HU).map(function (k) {
        var n = bal.counts[k];
        var w = max ? (n / max) * 100 : 0;
        return '<div class="elem-row' + (k === bal.dayMaster ? ' dm' : '') + '">' +
          '<div class="elem-name">' + HU[k] +
          (k === bal.dayMaster ? ' <span class="badge">Nap Ura</span>' : '') + '</div>' +
          '<div class="elem-track"><div class="elem-fill" style="width:' + w +
          '%;background:' + COL[k] + '"></div></div>' +
          '<div class="elem-val">' + n + '</div></div>';
      }).join('') + '</div>' +
      '<p><small>Minden pillér két írásjegyet ad: az égi törzs és a földi ág elemét. ' +
      (bal.hasHour ? 'Négy pillér, nyolc írásjegy.' :
        'Születési idő híján csak három pillér, hat írásjegy szerepel.') +
      '</small></p>';
  }

  function renderDashaTable(rows, title, unit) {
    if (!rows || !rows.length) return '';
    return '<h3 class="sec-h3">' + esc(title || 'A fő-időszakok sora') + '</h3>' +
      '<div class="dasha-list">' + rows.map(function (r) {
        return '<div class="dasha-row' + (r.current ? ' now' : '') + '">' +
          '<span class="d-name">' + esc(r.name) + '</span>' +
          '<span class="d-span">' + r.from + ' – ' + r.to + '</span>' +
          '<span class="d-len">' + esc(String(r.years)) + (unit || ' év') + '</span>' +
          (r.current ? '<span class="badge">most</span>' : '') + '</div>';
      }).join('') + '</div>';
  }

  /* ---------------- kronobiológiai mérőeszköz ---------------- */

  function renderChronoTool(sec) {
    var CH = HCORE.chrono;
    var q = CH.RMEQ_ITEMS.map(function (item, qi) {
      return '<div class="q"><p>' + (qi + 1) + '. ' + esc(item.q) + '</p><div class="opts">' +
        item.options.map(function (o) {
          return '<label><input type="radio" name="rmeq' + qi + '" value="' + o.score +
            '"> ' + esc(o.label) + '</label>';
        }).join('') + '</div></div>';
    }).join('');

    return '<div class="chrono-tool" id="chronoTool" data-age="' + (sec.age || 30) +
      '" data-gender="' + esc(sec.gender || '') + '">' +

      '<h3 class="sec-h3">1. Kronotipus-teszt (rMEQ)</h3>'.replace('Kronotipus', 'Kronotípus') +
      '<p><small>Az rMEQ a Horne&ndash;&Ouml;stberg-k&eacute;rd&otilde;&iacute;v validált, 5 tételes rövidítése ' +
      '(Adan &amp; Almirall, 1991). A pontszám 4 és 25 között mozog: minél magasabb, ' +
      'annál reggelibb típus.</small></p>' +
      '<div class="quiz">' + q + '</div>' +

      '<h3 class="sec-h3">2. Alvási időpontjaid (MCTQ)</h3>' +
      '<p><small>A müncheni kronotípus-kérdőív nem preferenciát kérdez, hanem tényleges ' +
      'alvásidőket — ebből órában kifejezett kronotípus (MSF<sub>sc</sub>) és ' +
      'szociális jetlag számolható. Add meg, mikor <em>alszol el</em> és mikor ' +
      '<em>ébredsz</em>.</small></p>' +
      '<div class="sleep-grid">' +
      '<div><span class="lbl">Munkanapokon</span>' +
      '<label>elalvás <input type="time" id="soW" value="23:00"></label>' +
      '<label>ébredés <input type="time" id="seW" value="06:30"></label></div>' +
      '<div><span class="lbl">Szabadnapokon</span>' +
      '<label>elalvás <input type="time" id="soF" value="00:00"></label>' +
      '<label>ébredés <input type="time" id="seF" value="08:30"></label></div>' +
      '<div><span class="lbl">Egyéb</span>' +
      '<label>munkanap/hét <input type="number" id="wdCount" min="0" max="7" value="5"></label>' +
      '<label class="check"><input type="checkbox" id="alarmF"> szabadnapon is ébresztek</label>' +
      '</div></div>' +

      '<h3 class="sec-h3">3. Mit szeretnél elérni?</h3>' +
      '<div class="opts goal-opts">' +
      '<label><input type="radio" name="chronoGoal" value="earlier"> Korábbra hoznám az órámat</label>' +
      '<label><input type="radio" name="chronoGoal" value="stabilize" checked> Stabilizálnám a ritmusomat</label>' +
      '<label><input type="radio" name="chronoGoal" value="later"> Későbbre tolnám az órámat</label>' +
      '</div>' +

      '<div class="actions" style="margin-top:16px">' +
      '<button type="button" class="primary" id="chronoRun">Belső óra kiszámítása</button></div>' +

      '<div id="chronoResult" class="chrono-result"></div></div>';
  }

  function runChronoTool() {
    var CH = HCORE.chrono;
    var box = $('chronoTool'), res = $('chronoResult');
    if (!box) return;

    var scores = [];
    for (var i = 0; i < CH.RMEQ_ITEMS.length; i++) {
      var sel = box.querySelector('input[name="rmeq' + i + '"]:checked');
      scores.push(sel ? +sel.value : null);
    }
    var rmeq = CH.scoreRMEQ(scores);

    var soW = CH.parseHour($('soW').value), seW = CH.parseHour($('seW').value);
    var soF = CH.parseHour($('soF').value), seF = CH.parseHour($('seF').value);
    var mctq = null;
    if (soW != null && seW != null && soF != null && seF != null) {
      mctq = CH.computeMCTQ({
        soW: soW, seW: seW, soF: soF, seF: seF,
        wd: +$('wdCount').value, alarmF: $('alarmF').checked
      });
    }

    if (!rmeq.complete && !mctq) {
      res.innerHTML = '<p class="warn-box">Töltsd ki a tesztet vagy add meg az alvási ' +
        'időpontjaidat — bármelyik önmagában is elég a becsléshez.</p>';
      res.classList.add('show');
      return;
    }

    var age = +box.dataset.age || 30;
    var gender = box.dataset.gender || '';
    var html = '<h3 class="sec-h3">Az eredményed</h3><div class="sec-items">';

    if (rmeq.complete) {
      html += '<div class="row"><div class="lbl">rMEQ-pontszám</div><div class="val">' +
        rmeq.score + ' / 25 — ' + esc(rmeq.category) + '</div>' +
        '<div class="txt">A kategóriahatárok a szakirodalomban önkényesen választottak, ' +
        'nem populációs kritériumok — érdemes a korhoz viszonyított besorolással együtt nézni.</div></div>';
    }

    var markers = null, broad = rmeq.complete ? rmeq.broad : 'kozepes';

    if (mctq) {
      html += '<div class="row"><div class="lbl">Kronotípus órában (MSFsc)</div>' +
        '<div class="val">' + mctq.msfScText + '</div>' +
        '<div class="txt">Az alváskorrigált alvásközép szabadnapon — a kronobiológia ' +
        'ezt tekinti a kronotípus mérőszámának. ' +
        (mctq.corrected
          ? 'A korrekciót alkalmaztuk, mert szabadnapon többet alszol (alváspótlás).'
          : 'Korrekcióra nem volt szükség, mert szabadnapon nem alszol többet.') +
        '</div></div>';

      var sjlL = CH.sjlLevel(mctq.sjl);
      html += '<div class="row"><div class="lbl">Szociális jetlag</div><div class="val">' +
        mctq.sjl.toFixed(1).replace('.', ',') + ' óra — ' + esc(sjlL.name) + '</div>' +
        '<div class="txt">A munkanapi és szabadnapi alvásközép különbsége: ennyivel él ' +
        'a belső órád más időzónában hétköznap, mint hétvégén. ' +
        (mctq.sleepDebt > 0.5
          ? 'Szabadnapon ' + mctq.sleepDebt.toFixed(1).replace('.', ',') +
            ' órával többet alszol — ez alváshiányra utal.' : '') +
        '</div></div>';

      html += '<div class="row"><div class="lbl">Alvásidő</div><div class="val">' +
        'munkanap ' + mctq.sdWText + ' · szabadnap ' + mctq.sdFText + '</div></div>';

      var pct = CH.chronoPercentile(mctq.msfSc, age, gender);
      if (pct) {
        html += '<div class="row"><div class="lbl">A korosztályodhoz képest</div>' +
          '<div class="val">' + pct.percentile + '. percentilis</div>' +
          '<div class="txt">A ' + pct.norm.from + '–' + pct.norm.to + ' évesek átlagos ' +
          'alvásközepe ' + pct.norm.meanText + '; te ' +
          Math.abs(pct.diffHours).toFixed(1).replace('.', ',') + ' órával ' +
          (pct.later ? 'később' : 'korábban') + ' vagy. Viszonyítási alap: Fischer és ' +
          'mtsai (2017), N = 53 689 — amerikai minta nyers hétvégi alvásközéppel, ' +
          'ezért relatív helyzetként értelmezd.</div></div>';
      }
      html += '<div class="row"><div class="lbl">Életkor és kronotípus</div>' +
        '<div class="txt">' + esc(CH.ageTrend(age)) + '</div></div>';

      markers = CH.phaseMarkers(mctq.soF, mctq.seF);
    } else {
      var typ = CH.typicalSleep(broad);
      markers = CH.phaseMarkers(typ.onset, typ.wake);
      html += '<div class="row"><div class="lbl">Megjegyzés</div><div class="txt">' +
        'Alvási időpontok híján a kronotípusodhoz tartozó tipikus alvásidőkkel ' +
        'számoltunk. Add meg a saját időpontjaidat a pontos fázisbecsléshez.</div></div>';
    }
    html += '</div>';

    html += '<h3 class="sec-h3">A belső órád fázisa</h3><div class="sec-items">' +
      '<div class="row"><div class="lbl">CBTmin — maghőmérséklet-minimum</div>' +
      '<div class="val">' + markers.cbtMinText + '</div>' +
      '<div class="txt">A cirkadián nap mélypontja, a fázis horgonypontja. Becslés: ' +
      'ébredés − 3 óra. Csak beállt, szabályos ritmusnál érvényes; a bizonytalanság ' +
      'nagyságrendileg ±1 óra.</div></div>' +
      '<div class="row"><div class="lbl">DLMO — a melatonin megindulása</div>' +
      '<div class="val">' + markers.dlmoText + '</div>' +
      '<div class="txt">Kb. 2–3 órával a természetes elalvásod előtt. Innentől az erős ' +
      'fény késlelteti az elalvást.</div></div>' +
      '<div class="row"><div class="lbl">„Wake maintenance zone"</div>' +
      '<div class="val">' + markers.wakeMaintenanceText + '</div>' +
      '<div class="txt">A DLMO előtti néhány óra: ekkor a legnehezebb elaludni, még akkor ' +
      'is, ha fáradt vagy. Ha ilyenkor forgolódsz, az nem álmatlanság — rossz időzítés.</div></div>' +
      '<div class="row"><div class="lbl">Szellemi csúcs · holtpont · fizikai csúcs</div>' +
      '<div class="val">' + markers.morningPeakText + ' · ' + markers.afternoonDipText +
      ' · ' + markers.physicalPeakText + '</div></div></div>';

    var curve = CH.alertnessCurve({
      sleepOnset: markers.sleepOnset, wakeTime: markers.wake, cbtMin: markers.cbtMin
    });
    if (window.HUI && HUI.drawAlertness) {
      html += '<h3 class="sec-h3">Napi éberséggörbéd</h3>' +
        '<div class="chart-box">' + HUI.drawAlertness(curve, markers) + '</div>' +
        '<p><small>A görbe a két-folyamat modellből számol: a cirkadián ébresztő jel ' +
        '(Process C) és a felgyűlő alvásnyomás (Process S) eredője. Az árnyékolt sáv ' +
        'az alvásod. A modell a saját fázisodra van hangolva — nem általános sablon.</small></p>';
    }

    var goalSel = box.querySelector('input[name="chronoGoal"]:checked');
    var advice = CH.lightAdvice(markers, goalSel ? goalSel.value : 'stabilize');
    html += '<h3 class="sec-h3">Fény és időzítés</h3><div class="advice">';
    advice.warnings.forEach(function (w) {
      html += '<p class="warn-box">' + esc(w) + '</p>';
    });
    advice.seek.forEach(function (a) { html += '<p class="do">' + esc(a) + '</p>'; });
    advice.avoid.forEach(function (a) { html += '<p class="dont">' + esc(a) + '</p>'; });
    html += '<p class="pace">' + esc(advice.pace) + '</p></div>';

    ((mctq && mctq.warnings) || []).forEach(function (w) {
      html += '<p class="warn-box">' + esc(w) + '</p>';
    });

    html += '<p class="src"><small>A fénytanácsok a humán fázisválasz-görbén alapulnak ' +
      '(Khalsa és mtsai, 2003): a maghőmérséklet-minimum <em>előtti</em> fény késlelteti, ' +
      'az <em>utáni</em> előrehozza a belső órát. A hatás aszimmetrikus — késleltetni ' +
      'közel kétszer olyan könnyű, mint előrehozni.</small></p>';

    /* ---- összegzett kiértékelés, levezetéssel ---- */
    var CD = window.HDATA.chronoDeep && HDATA.chronoDeep.tool;
    if (CD) {
      var rows = [];

      // besorolás: mért adatból, ha van; különben a kérdőívből
      var cls, clsBasis;
      if (mctq) {
        var pct2 = CH.chronoPercentile(mctq.msfSc, age, gender);
        if (pct2) {
          cls = pct2.percentile <= 25 ? 'korai'
            : (pct2.percentile >= 75 ? 'kesoi' : 'atlagos');
          clsBasis = 'MSFsc ' + mctq.msfScText + ' · ' + pct2.percentile +
            '. percentilis a korosztályodban';
        } else {
          cls = mctq.msfSc < 3 ? 'korai' : (mctq.msfSc > 5.5 ? 'kesoi' : 'atlagos');
          clsBasis = 'MSFsc ' + mctq.msfScText;
        }
      } else {
        cls = rmeq.broad === 'kozepes' ? 'atlagos' : rmeq.broad;
        clsBasis = 'csak kérdőív (rMEQ ' + rmeq.score + '/25) — az alvásidőid ' +
          'megadásával pontosabb lenne';
      }
      rows.push({ lbl: 'Kronotípus-besorolás (' + clsBasis + ')',
        txt: CD.classes[cls] });

      // preferencia vs. tényleges alvás
      if (rmeq.complete && mctq) {
        var rCls = rmeq.broad === 'kozepes' ? 'atlagos' : rmeq.broad;
        var CLS_HU = { korai: 'korai', atlagos: 'köztes', kesoi: 'késői' };
        rows.push({
          lbl: 'Preferencia és valóság',
          txt: rCls === cls ? CD.consistent
            : CD.inconsistent.replace('%A%', rmeq.category.toLowerCase())
              .replace('%B%', CLS_HU[cls] + ' tényleges alvásritmus')
        });
      }

      if (mctq) {
        var band = mctq.sjl >= 2 ? 'severe' : (mctq.sjl >= 1 ? 'moderate' : 'ok');
        rows.push({ lbl: 'Szociális jetlag: ' +
          mctq.sjl.toFixed(1).replace('.', ',') + ' óra', txt: CD.sjl[band] });
        if (mctq.sleepDebt > 0.5) {
          rows.push({ lbl: 'Alvásadósság',
            txt: CD.debt.replace('%H%', mctq.sleepDebt.toFixed(1).replace('.', ',')) });
        }
      }

      // születési évszak vs. mérés — a profil adataiból
      if (state.profile && state.profile.input) {
        var bm = state.profile.input.month;
        var seas = (bm >= 3 && bm <= 5) ? 'tavasz' : (bm >= 6 && bm <= 8) ? 'nyár'
          : (bm >= 9 && bm <= 11) ? 'ősz' : 'tél';
        var dir = (seas === 'tavasz' || seas === 'nyár') ? 'későbbi' : 'korábbi';
        var verdict = cls === 'atlagos' ? CD.season.neutral
          : ((cls === 'kesoi' && dir === 'későbbi') ||
             (cls === 'korai' && dir === 'korábbi'))
            ? CD.season.match : CD.season.mismatch;
        rows.push({
          lbl: 'Születési évszak és a mérés',
          txt: CD.season.intro.replace('%S%', seas).replace('%D%', dir) + ' ' + verdict
        });
      }

      // a kitűzött cél realitása
      var goalSel2 = box.querySelector('input[name="chronoGoal"]:checked');
      var goal = goalSel2 ? goalSel2.value : 'stabilize';
      var hardGoal = (goal === 'earlier' && cls === 'kesoi') ||
        (goal === 'later' && cls === 'korai');
      rows.push({
        lbl: 'A célod realitása',
        txt: (hardGoal ? CD.goal.hard : CD.goal.fits)
          .replace('%G%', CD.goal.names[goal] || goal)
      });

      html += '<h3 class="sec-h3">' + esc(CD.heading) + '</h3><div class="sec-items">' +
        rows.map(function (r) {
          return '<div class="row"><div class="lbl">' + esc(r.lbl) + '</div>' +
            '<div class="txt">' + esc(r.txt) + '</div></div>';
        }).join('') + '</div>' +
        '<details class="general"><summary>Hogyan olvasd a kiértékelést</summary>' +
        '<p class="gen-line">' + esc(CD.howToRead) + '</p></details>';
    }

    res.innerHTML = html;
    res.classList.add('show');
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function renderTransits(list) {
    if (!list || !list.length) return '';
    var html = '<div class="tr-line">';
    var lastYear = null;
    list.forEach(function (e) {
      if (e.year !== lastYear) {
        lastYear = e.year;
        html += '<div class="tr-year">' + e.year + '</div>';
      }
      html += '<div class="tr-event' + (e.major ? ' major' : '') + '">' +
        '<div class="tr-head"><span class="tr-sym">' + esc(e.sym) + '</span>' +
        '<strong>' + esc(e.title) + '</strong>' +
        (e.badge ? ' <span class="badge">' + esc(e.badge) + '</span>' : '') +
        '</div>' +
        '<div class="tr-dates">' + esc(e.dates) + '</div>' +
        '<div class="tr-txt">' + esc(e.text) + '</div></div>';
    });
    return html + '</div>';
  }

  function renderSynastry(sy) {
    var html = '<h3 class="sec-h3">Összhang-mutatók</h3>' +
      '<div class="syn-overall"><div class="syn-num">' + sy.overall + '%</div>' +
      '<div class="syn-band">' + esc(sy.overallText) + '</div></div>' +
      '<div class="syn-bars">' + sy.cats.map(function (c) {
        return '<div class="syn-row">' +
          '<div class="syn-name">' + esc(c.name) + '</div>' +
          '<div class="syn-track"><div class="syn-fill' + (c.empty ? ' empty' : '') +
          '" style="width:' + c.percent + '%"></div></div>' +
          '<div class="syn-val">' + (c.empty ? '–' : c.percent + '%') + '</div>' +
          '<div class="syn-txt">' + esc(c.text) +
          (c.empty ? ' (Ehhez a területhez most nincs számottevő fényszög köztetek.)' : '') +
          '</div></div>';
      }).join('') + '</div>';

    if (sy.aspects.length) {
      html += '<h3 class="sec-h3">A legfontosabb kapcsolódások</h3><div class="asp-list">' +
        sy.aspects.map(function (a) {
          return '<div class="asp-row"><span class="asp syn-' + a.cls +
            (a.exact ? ' exact' : '') + '" title="' + esc(a.aspName) + '">' +
            esc(a.label) + '<span class="orb">' + esc(a.orb) + '</span></span>' +
            '<span class="asp-txt">' + esc(a.text) + '</span></div>';
        }).join('') + '</div>';
    }

    if (sy.overlays.length) {
      html += '<h3 class="sec-h3">Bolygók a másik házaiban</h3><div class="sec-items">' +
        sy.overlays.map(function (o) {
          return '<div class="row"><div class="lbl">' + esc(o.label) + '</div>' +
            '<div class="txt">' + esc(o.text) + '</div></div>';
        }).join('') + '</div>';
    }
    return html;
  }

  function renderSection(s) {
    var html = '<section class="card" data-cat="' + esc(s.category) + '">' +
      '<h2><span class="icon">' + s.icon + '</span>' + esc(s.title) + '</h2>';

    if (s.items.length) {
      html += '<div class="sec-items">' + s.items.map(function (it) {
        return '<div class="row"><div class="lbl">' + esc(it.label) + '</div>' +
          (it.value ? '<div class="val">' + esc(it.value) + '</div>' : '') +
          (it.text ? '<div class="txt">' + esc(it.text) + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }

    html += renderTable(s.table);

    if (s.aspects && s.aspects.length) {
      html += '<h3 style="font-size:.9rem;text-transform:uppercase;letter-spacing:.05em;' +
        'color:var(--muted);margin:18px 0 0">Fényszögek</h3><div class="aspects">' +
        s.aspects.map(function (a) {
          return '<span class="asp' + (a.exact ? ' exact' : '') + '" title="' + esc(a.name) + '">' +
            esc(a.text) + '<span class="orb">' + esc(a.orb) + '</span></span>';
        }).join('') + '</div>';
    }

    if (s.summaryGrid) {
      html += '<h3 class="sec-h3">A többi rendszer egy pillantásra</h3>' +
        '<div class="sum-grid">' + s.summaryGrid.map(function (o) {
          return '<div class="sum-cell"><div class="lbl">' + esc(o.k) + '</div>' +
            '<div class="val">' + esc(o.v) + '</div></div>';
        }).join('') + '</div>';
    }
    if (s.transits) html += renderTransits(s.transits);
    if (s.synastry) html += renderSynastry(s.synastry);
    if (s.houseDetails) html += renderHouseDetails(s.houseDetails);
    if (s.planetDetails) html += renderPlanetDetails(s.planetDetails);
    if (s.baziBalance) html += renderBaziBalance(s.baziBalance);
    if (s.dashaTable) html += renderDashaTable(s.dashaTable);
    if (s.luckPillars) html += renderDashaTable(s.luckPillars,
      'A tízéves szerencseoszlopaid', '');
    if (s.matrix) html += renderPsychomatrix(s);
    if (s.matrixDM) html += renderDestinyMatrix(s);
    if (s.hvd) html += renderHvd(s);
    if (s.biorhythm) {
      html += renderBiorhythm(s.biorhythm, s.series);
    }
    if (s.chronoTool) html += renderChronoTool(s);

    var notes = (s.notes || []).filter(Boolean);
    if (notes.length) {
      html += '<div class="notes">' + notes.map(function (n) {
        return '<p>' + esc(n) + '</p>';
      }).join('') + '</div>';
    }
    return html + '</section>';
  }

  function renderProfile(p) {
    state.profile = p;
    renderHero(p);
    $('sections').innerHTML = p.sections.map(renderSection).join('');
    $('disclaimerText').textContent =
      'Ez a profil többféle kulturális és ezoterikus hagyomány számításait fűzi össze. ' +
      'Az asztrológiai, numerológiai és jóslási rendszerek nem tudományosan igazolt ' +
      'módszerek — kulturális örökségként és önismereti tükörként érdemes rájuk tekinteni. ' +
      'Egyedül a kronobiológiai szakasz épül lektorált tudományos irodalomra, a bioritmus-modul ' +
      'pedig kifejezetten cáfolt elméletet mutat be, történeti érdekességként. ' +
      'Egészségügyi, pénzügyi vagy jogi döntést soha ne alapozz rá.';

    $('result').hidden = false;
    $('btnSave').hidden = false;
    $('btnPrint').hidden = false;
    applyFilter(state.filter);
    bindChronoTool();
    $('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------------- a kronobiológiai eszköz eseménykezelése ---------------- */

  function bindChronoTool() {
    var box = $('chronoTool');
    if (!box) return;
    var btn = $('chronoRun');
    if (btn) btn.addEventListener('click', runChronoTool);
    box.addEventListener('change', function (e) {
      if (e.target.name === 'chronoGoal' &&
          $('chronoResult').classList.contains('show')) {
        runChronoTool();
      }
    });
  }

  /* ---------------- nyomtatás: minden lenyíló nyitva ---------------- */

  function openDetailsForPrint() {
    [].forEach.call(document.querySelectorAll('#result details:not([open])'), function (d) {
      d.setAttribute('data-print-opened', '1');
      d.open = true;
    });
  }

  function restoreDetailsAfterPrint() {
    [].forEach.call(document.querySelectorAll('details[data-print-opened]'), function (d) {
      d.open = false;
      d.removeAttribute('data-print-opened');
    });
  }

  /* ---------------- szűrés ---------------- */

  function applyFilter(cat) {
    state.filter = cat;
    [].forEach.call(document.querySelectorAll('#sections .card'), function (c) {
      c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
    });
    [].forEach.call(document.querySelectorAll('#filters button'), function (b) {
      b.classList.toggle('active', b.dataset.cat === cat);
    });
  }

  /* ---------------- mentés ---------------- */

  var STORE = 'horoszkop.profilok';

  function loadSaved() {
    try { return JSON.parse(localStorage.getItem(STORE) || '[]'); } catch (e) { return []; }
  }

  function renderSaved() {
    var list = loadSaved();
    $('savedList').innerHTML = list.length
      ? '<small style="width:100%">Mentett profilok:</small>' + list.map(function (s, i) {
        return '<button type="button" class="ghost" data-load="' + i + '">' +
          esc(s.name || 'névtelen') + ' · ' + esc(s.year + '.' + s.month + '.' + s.day) +
          '</button>';
      }).join('') + '<button type="button" class="ghost" data-clear="1">Mentések törlése</button>'
      : '';
  }

  function saveCurrent() {
    if (!state.profile) return;
    var i = state.profile.input;
    var list = loadSaved();
    var rec = {
      name: i.name, gender: i.gender, year: i.year, month: i.month, day: i.day,
      hour: i.hour, minute: i.minute, hasTime: i.hasTime,
      place: i.place.name, houseSystem: i.houseSystem, special: i.special
    };
    var dup = list.findIndex(function (x) {
      return x.name === rec.name && x.year === rec.year && x.month === rec.month && x.day === rec.day;
    });
    if (dup >= 0) list[dup] = rec; else list.push(rec);
    try {
      localStorage.setItem(STORE, JSON.stringify(list.slice(-12)));
      renderSaved();
    } catch (e) { alert('A böngésző nem engedélyezte a mentést.'); }
  }

  function loadRecord(r) {
    $('fName').value = r.name || '';
    $('fGender').value = r.gender || '';
    $('fDate').value = r.year + '-' + String(r.month).padStart(2, '0') + '-' +
      String(r.day).padStart(2, '0');
    $('fTime').value = String(r.hour).padStart(2, '0') + ':' + String(r.minute).padStart(2, '0');
    $('fNoTime').checked = !r.hasTime;
    var p = HDATA.geo.find(r.place);
    if (p) setPlace(p);
    $('fHouse').value = r.houseSystem || 'placidus';
    [].forEach.call(document.querySelectorAll('#specialBox input'), function (c) {
      c.checked = (r.special || []).indexOf(c.value) >= 0;
    });
    run();
  }

  /* ---------------- futtatás ---------------- */

  function run() {
    var input = readForm();
    if (!input) return;
    try {
      var p = HCORE.buildProfile(input);
      renderProfile(p);
    } catch (e) {
      console.error(e);
      alert('Hiba a számítás közben: ' + e.message);
    }
  }

  /* ---------------- indítás ---------------- */

  /* ---------------- ⚡ ---------------- */

  function initEgg() {
    console.log('%c⚡ Mágiaügyi Minisztérium által jóváhagyva. ' +
      'Muglik csak felelősséggel használják!',
      'color:#d8b95e;font-size:13px;font-family:serif');
    var logo = document.getElementById('logoMark');
    if (!logo) return;
    var n = 0, t = null;
    logo.addEventListener('click', function () {
      clearTimeout(t);
      t = setTimeout(function () { n = 0; }, 2500);
      if (++n < 7) return;
      n = 0;
      var old = document.querySelector('.egg-toast');
      if (old) old.remove();
      var d = document.createElement('div');
      d.className = 'egg-toast';
      d.innerHTML = '⚡ <em>Mágiaügyi Minisztérium által jóváhagyva.</em><br>' +
        'Muglik csak felelősséggel használják!';
      document.body.appendChild(d);
      setTimeout(function () { d.classList.add('show'); }, 20);
      setTimeout(function () {
        d.classList.remove('show');
        setTimeout(function () { d.remove(); }, 400);
      }, 6000);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initPlace();
    initPartnerPlace();
    initSpecial();
    renderSaved();
    initEgg();

    var pNoTime = $('pNoTime');
    if (pNoTime) pNoTime.addEventListener('change', function () {
      $('pTime').disabled = this.checked;
    });

    $('birthForm').addEventListener('submit', function (e) { e.preventDefault(); run(); });

    $('fNoTime').addEventListener('change', function () {
      $('fTime').disabled = this.checked;
    });

    $('btnToday').addEventListener('click', function () {
      var n = new Date();
      $('fDate').value = n.toISOString().slice(0, 10);
      $('fTime').value = String(n.getHours()).padStart(2, '0') + ':' +
        String(n.getMinutes()).padStart(2, '0');
      $('fNoTime').checked = false; $('fTime').disabled = false;
      run();
    });

    $('btnSave').addEventListener('click', saveCurrent);
    // az asztali (Electron) változatban közvetlen PDF-mentés, nyomtatási
    // párbeszéd nélkül; böngészőben marad a nyomtatás (ott azon át megy a PDF)
    if (window.electronPDF && window.electronPDF.save) {
      $('btnPrint').textContent = 'Mentés PDF-ként';
      $('btnPrint').addEventListener('click', function () { window.electronPDF.save(); });
    } else {
      $('btnPrint').addEventListener('click', function () { window.print(); });
    }

    // nyomtatáskor (gomb és Ctrl+P is) minden lenyíló rész nyitva kerüljön papírra
    window.addEventListener('beforeprint', openDetailsForPrint);
    window.addEventListener('afterprint', restoreDetailsAfterPrint);

    $('filters').addEventListener('click', function (e) {
      if (e.target.dataset.cat) applyFilter(e.target.dataset.cat);
    });

    $('savedList').addEventListener('click', function (e) {
      if (e.target.dataset.load != null) loadRecord(loadSaved()[+e.target.dataset.load]);
      if (e.target.dataset.clear) { localStorage.removeItem(STORE); renderSaved(); }
    });
  });

})();
