/* RAYOFIT · app.js — PWA local-first con copia en Google Sheet */
(function () {
  'use strict';

  var VERSION = '1.5.0';
  var DEFAULTS = {"ejercicios": [["press-banca", "Press banca con barra", "pecho", "Peso libre", 2.5, "", 0, 20, "Banca"], ["press-inclinado-manc", "Press inclinado con mancuernas", "pecho", "Mancuernas", 2, "mancuerna", 0, 0, "Inclinado manc."], ["press-inclinado-barra", "Press inclinado con barra", "pecho", "Peso libre", 2.5, "", 0, 20, "Inclinado barra"], ["chest-press", "Chest Press", "pecho", "Technogym", 5, "", 0, 0, "Chest press"], ["pectoral", "Pectoral (aperturas)", "pecho", "Technogym", 5, "", 1, 0, "Aperturas"], ["cruce-poleas", "Cruce de poleas", "pecho", "Polea", 2.5, "", 1, 0, "Cruce poleas"], ["press-banca-smith", "Press banca en multipower", "pecho", "Multipower", 2.5, "", 0, 0, "Banca smith"], ["fondos", "Fondos en paralelas", "pecho", "Peso corporal", 2.5, "corporal", 0, 0, "Fondos"], ["shoulder-press", "Shoulder Press", "hombro", "Technogym", 5, "", 0, 0, "Press hombro"], ["press-militar", "Press militar con barra", "hombro", "Peso libre", 2.5, "", 0, 20, "Militar"], ["press-hombro-manc", "Press de hombro con mancuernas", "hombro", "Mancuernas", 2, "mancuerna", 0, 0, "Hombro manc."], ["elev-laterales-polea", "Elevaciones laterales en polea", "hombro", "Polea", 2.5, "", 1, 0, "Laterales polea"], ["elev-laterales-manc", "Elevaciones laterales con mancuernas", "hombro", "Mancuernas", 1, "mancuerna", 1, 0, "Laterales manc."], ["elev-frontales", "Elevaciones frontales", "hombro", "Mancuernas", 1, "mancuerna", 1, 0, "Frontales"], ["rear-delt", "Rear Delt (contractor inverso)", "posterior", "Technogym", 5, "", 1, 0, "Rear delt"], ["face-pull", "Face pull", "posterior", "Polea", 2.5, "", 1, 0, "Face pull"], ["pajaro-manc", "Pájaro con mancuernas", "posterior", "Mancuernas", 1, "mancuerna", 1, 0, "Pájaro"], ["posterior-polea", "Cruce inverso en polea", "posterior", "Polea", 2.5, "", 1, 0, "Cruce inverso"], ["ext-triceps-cuerda", "Extensión de tríceps con cuerda", "triceps", "Polea", 2.5, "", 1, 0, "Tríceps cuerda"], ["ext-triceps-cabeza", "Extensión de tríceps sobre la cabeza", "triceps", "Polea", 2.5, "", 1, 0, "Tríceps cabeza"], ["arm-extension", "Arm Extension", "triceps", "Technogym", 5, "", 1, 0, "Arm extension"], ["press-frances", "Press francés con barra Z", "triceps", "Peso libre", 2.5, "", 0, 10, "Press francés"], ["patada-triceps", "Patada de tríceps", "triceps", "Mancuernas", 1, "lado", 1, 0, "Patada tríceps"], ["jalon-pecho", "Jalón al pecho (Lat Machine)", "espalda", "Technogym", 5, "", 0, 0, "Jalón"], ["remo-sentado", "Remo sentado (Low Row)", "espalda", "Technogym", 5, "", 0, 0, "Remo sentado"], ["remo-manc", "Remo con mancuerna a una mano", "espalda", "Mancuernas", 2, "lado", 0, 0, "Remo manc."], ["pulldown", "Pulldown", "espalda", "Technogym", 5, "", 0, 0, "Pulldown"], ["upper-back", "Upper Back", "espalda", "Technogym", 5, "", 0, 0, "Upper back"], ["dominadas", "Dominadas", "espalda", "Peso corporal", 2.5, "corporal", 0, 0, "Dominadas"], ["remo-barra", "Remo con barra", "espalda", "Peso libre", 2.5, "", 0, 20, "Remo barra"], ["remo-t", "Remo en T", "espalda", "Peso libre", 2.5, "", 0, 0, "Remo T"], ["pullover-polea", "Pullover en polea", "espalda", "Polea", 2.5, "", 1, 0, "Pullover"], ["curl-barra-z", "Curl con barra Z", "biceps", "Peso libre", 2.5, "", 1, 10, "Curl Z"], ["curl-martillo", "Curl martillo", "biceps", "Mancuernas", 2, "mancuerna", 1, 0, "Martillo"], ["arm-curl", "Arm Curl", "biceps", "Technogym", 5, "", 1, 0, "Arm curl"], ["curl-inclinado", "Curl inclinado con mancuernas", "biceps", "Mancuernas", 2, "mancuerna", 1, 0, "Curl inclinado"], ["curl-polea", "Curl en polea", "biceps", "Polea", 2.5, "", 1, 0, "Curl polea"], ["curl-predicador", "Curl predicador", "biceps", "Peso libre", 2.5, "", 1, 0, "Predicador"], ["sentadilla", "Sentadilla con barra", "cuadriceps", "Peso libre", 2.5, "", 0, 20, "Sentadilla"], ["prensa", "Prensa (Leg Press)", "cuadriceps", "Technogym", 10, "", 0, 0, "Prensa"], ["ext-cuadriceps", "Extensión de cuádriceps", "cuadriceps", "Technogym", 5, "", 1, 0, "Ext. cuádriceps"], ["hack-squat", "Hack squat", "cuadriceps", "Máquina", 5, "", 0, 0, "Hack"], ["sentadilla-smith", "Sentadilla en multipower", "cuadriceps", "Multipower", 2.5, "", 0, 0, "Sent. smith"], ["bulgara", "Sentadilla búlgara", "cuadriceps", "Mancuernas", 2, "mancuerna", 0, 0, "Búlgara"], ["zancadas", "Zancadas", "cuadriceps", "Mancuernas", 2, "mancuerna", 0, 0, "Zancadas"], ["curl-femoral-sentado", "Curl femoral sentado", "femoral", "Technogym", 5, "", 1, 0, "Femoral sentado"], ["curl-femoral-tumbado", "Curl femoral tumbado", "femoral", "Technogym", 5, "", 1, 0, "Femoral tumbado"], ["curl-nordico", "Curl nórdico", "femoral", "Peso corporal", 2.5, "corporal", 0, 0, "Nórdico"], ["hip-thrust", "Hip thrust", "gluteo", "Peso libre", 5, "", 0, 20, "Hip thrust"], ["glute-machine", "Glute", "gluteo", "Technogym", 5, "", 1, 0, "Glute"], ["abductor", "Abductor", "gluteo", "Technogym", 5, "", 1, 0, "Abductor"], ["patada-polea", "Patada de glúteo en polea", "gluteo", "Polea", 2.5, "", 1, 0, "Patada glúteo"], ["gemelos-prensa", "Gemelos en prensa", "gemelos", "Technogym", 10, "", 1, 0, "Gemelos prensa"], ["gemelos-pie", "Gemelos de pie", "gemelos", "Máquina", 5, "", 1, 0, "Gemelos de pie"], ["gemelos-sentado", "Gemelos sentado", "gemelos", "Máquina", 5, "", 1, 0, "Gemelos sentado"], ["total-abdominal", "Total Abdominal", "core", "Technogym", 5, "", 1, 0, "Abdominal"], ["crunch-polea", "Crunch en polea", "core", "Polea", 2.5, "", 1, 0, "Crunch polea"], ["elev-piernas", "Elevación de piernas colgado", "core", "Peso corporal", 2.5, "corporal", 1, 0, "Elev. piernas"], ["press-banca-manc", "Press banca con mancuernas", "pecho", "Mancuernas", 2, "mancuerna", 0, 0, "Banca manc."], ["press-declinado", "Press declinado con barra", "pecho", "Peso libre", 2.5, "", 0, 20, "Declinado"], ["aperturas-manc", "Aperturas con mancuernas", "pecho", "Mancuernas", 1, "mancuerna", 1, 0, "Aperturas manc."], ["aperturas-inclinado", "Aperturas inclinadas con mancuernas", "pecho", "Mancuernas", 1, "mancuerna", 1, 0, "Aperturas incl."], ["press-inclinado-maq", "Press inclinado en máquina", "pecho", "Máquina", 5, "", 0, 0, "Inclinado máq."], ["press-hombro-smith", "Press de hombro en multipower", "hombro", "Multipower", 2.5, "", 0, 0, "Hombro smith"], ["press-arnold", "Press Arnold", "hombro", "Mancuernas", 2, "mancuerna", 0, 0, "Arnold"], ["jalon-neutro", "Jalón agarre neutro (triángulo)", "espalda", "Polea", 5, "", 0, 0, "Jalón neutro"], ["remo-polea", "Remo en polea baja", "espalda", "Polea", 5, "", 0, 0, "Remo polea"], ["remo-pecho-apoyado", "Remo con pecho apoyado", "espalda", "Máquina", 5, "", 0, 0, "Remo apoyado"], ["dominadas-asistidas", "Dominadas asistidas en máquina", "espalda", "Máquina", 5, "corporal", 0, 0, "Dominadas asist."], ["encogimientos", "Encogimientos con mancuernas", "espalda", "Mancuernas", 2, "mancuerna", 1, 0, "Encogimientos"], ["curl-barra", "Curl con barra recta", "biceps", "Peso libre", 2.5, "", 1, 20, "Curl barra"], ["curl-manc", "Curl alterno con mancuernas", "biceps", "Mancuernas", 1, "mancuerna", 1, 0, "Curl manc."], ["curl-concentrado", "Curl concentrado", "biceps", "Mancuernas", 1, "mancuerna", 1, 0, "Concentrado"], ["ext-triceps-barra", "Extensión de tríceps con barra en polea", "triceps", "Polea", 2.5, "", 1, 0, "Tríceps barra"], ["press-cerrado", "Press banca agarre cerrado", "triceps", "Peso libre", 2.5, "", 0, 20, "Press cerrado"], ["fondos-maquina", "Fondos en máquina", "triceps", "Máquina", 5, "", 0, 0, "Fondos máq."], ["sentadilla-goblet", "Sentadilla goblet", "cuadriceps", "Mancuernas", 2, "", 0, 0, "Goblet"], ["puente-gluteo", "Puente de glúteo con barra", "gluteo", "Peso libre", 5, "", 0, 20, "Puente glúteo"], ["rueda-abdominal", "Rueda abdominal", "core", "Peso corporal", 2.5, "corporal", 1, 0, "Rueda"]], "rutina": [["push", 1, "press-banca", 4, 6, 8, "2", 150], ["push", 2, "press-inclinado-manc", 3, 8, 10, "1–2", 120], ["push", 3, "shoulder-press", 3, 8, 10, "1–2", 120], ["push", 4, "elev-laterales-polea", 3, 12, 15, "1", 75], ["push", 5, "ext-triceps-cuerda", 3, 10, 12, "1", 75], ["push", 6, "ext-triceps-cabeza", 3, 10, 12, "1", 75], ["pull", 1, "jalon-pecho", 4, 8, 10, "2", 120], ["pull", 2, "remo-sentado", 3, 8, 10, "1–2", 120], ["pull", 3, "rear-delt", 3, 12, 15, "1", 75], ["pull", 4, "face-pull", 3, 12, 15, "1", 75], ["pull", 5, "curl-barra-z", 3, 8, 10, "1", 90], ["pull", 6, "curl-martillo", 3, 10, 12, "1", 75], ["leg", 1, "sentadilla", 4, 6, 8, "2", 180], ["leg", 2, "prensa", 3, 10, 12, "1–2", 120], ["leg", 3, "curl-femoral-sentado", 3, 10, 12, "1", 90], ["leg", 4, "hip-thrust", 3, 8, 10, "1–2", 120], ["leg", 5, "ext-cuadriceps", 3, 12, 15, "1", 75], ["leg", 6, "gemelos-prensa", 3, 12, 15, "1", 60]], "imagenes": ["abductor", "aperturas-inclinado", "aperturas-manc", "arm-curl", "arm-extension", "bulgara", "chest-press", "cruce-poleas", "crunch-polea", "curl-barra", "curl-barra-z", "curl-concentrado", "curl-femoral-sentado", "curl-femoral-tumbado", "curl-inclinado", "curl-manc", "curl-martillo", "curl-polea", "curl-predicador", "dominadas", "dominadas-asistidas", "elev-frontales", "elev-laterales-manc", "elev-laterales-polea", "elev-piernas", "encogimientos", "ext-cuadriceps", "ext-triceps-barra", "ext-triceps-cabeza", "ext-triceps-cuerda", "fondos", "fondos-maquina", "gemelos-pie", "gemelos-prensa", "gemelos-sentado", "glute-machine", "hack-squat", "hip-thrust", "jalon-neutro", "jalon-pecho", "pajaro-manc", "patada-polea", "patada-triceps", "pectoral", "posterior-polea", "prensa", "press-arnold", "press-banca", "press-banca-manc", "press-banca-smith", "press-cerrado", "press-declinado", "press-frances", "press-hombro-manc", "press-hombro-smith", "press-inclinado-barra", "press-inclinado-manc", "press-inclinado-maq", "press-militar", "puente-gluteo", "pulldown", "pullover-polea", "rear-delt", "remo-barra", "remo-manc", "remo-polea", "remo-sentado", "remo-t", "rueda-abdominal", "sentadilla", "sentadilla-goblet", "sentadilla-smith", "shoulder-press", "total-abdominal", "zancadas"]};

  /* ───────────────────────── utilidades ───────────────────────── */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n, d) {
    n = +n || 0; d = d || 0;
    var s = n.toFixed(d).split('.');
    var g = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return s[1] ? g + ',' + s[1] : g;
  }
  function kg(n) { n = Math.round((+n || 0) * 100) / 100; var s = String(n).split('.'); var g = s[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'); return s[1] ? g + ',' + s[1] : g; }
  function num(v) { if (typeof v === 'number') return v; var n = parseFloat(String(v || '').replace(',', '.')); return isNaN(n) ? 0 : n; }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(t) { var d = new Date(t); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function parseDay(k) { var p = String(k).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function monday(t) { var x = new Date(t); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
  function mmss(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ':' + pad2(s); }
  function clock(ms) { var s = Math.floor(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60); return (h ? h + ':' + pad2(m) : pad2(m)) + ':' + pad2(s % 60); }
  var DOW = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
  var DOWL = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var MESL = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  function shortDate(t) { var d = new Date(t); return DOW[d.getDay()] + ' ' + d.getDate() + ' ' + MES[d.getMonth()]; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function e1rm(w, r) { w = +w; r = +r; if (!w || !r || r > 12) return 0; return r === 1 ? w : w * (1 + r / 30); }
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var TYPES = ['push', 'pull', 'leg'];
  var TYPE = {
    push: { n: 'PUSH', c: '#FF6B2C', soft: 'rgba(255,107,44,.16)', d: 'Pecho · Hombro · Tríceps' },
    pull: { n: 'PULL', c: '#5AB0FF', soft: 'rgba(90,176,255,.16)', d: 'Espalda · Hombro posterior · Bíceps' },
    leg: { n: 'LEG', c: '#F472B6', soft: 'rgba(244,114,182,.18)', d: 'Cuádriceps · Femoral · Glúteo' }
  };
  var GROUPS = { pecho: 'Pecho', espalda: 'Espalda', hombro: 'Hombro', posterior: 'Hombro posterior', biceps: 'Bíceps', triceps: 'Tríceps', cuadriceps: 'Cuádriceps', femoral: 'Femoral', gluteo: 'Glúteo', gemelos: 'Gemelos', core: 'Core' };
  var CARDIO = {
    cinta: { n: 'Cinta', dist: 'Distancia (km)', dStep: 0.1, lvl: 'Inclinación (%)', icon: 'run' },
    bici: { n: 'Bici', dist: 'Distancia (km)', dStep: 0.2, lvl: 'Nivel', icon: 'bike' },
    eliptica: { n: 'Elíptica', dist: 'Distancia (km)', dStep: 0.1, lvl: 'Nivel', icon: 'inf' },
    remo: { n: 'Remo', dist: 'Distancia (m)', dStep: 100, lvl: 'Resistencia', icon: 'waves' }
  };

  /* ───────────────────────── iconos (Lucide, ISC) ───────────────────────── */
  var IC = {
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    cal: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    left: '<path d="m15 18-6-6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>',
    upc: '<path d="m18 15-6-6-6 6"/>', downc: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    hist: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    act: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    run: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"/><path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"/><path d="M16 17h4"/><path d="M4 13h4"/>',
    bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
    inf: '<path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    cloudoff: '<path d="m2 2 20 20"/><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"/><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    calc: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
    swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  };
  function ic(n, s, st) { return '<svg class="i" viewBox="0 0 24 24" width="' + (s || 20) + '" height="' + (s || 20) + '" aria-hidden="true"' + (st ? ' style="' + st + '"' : '') + '>' + IC[n] + '</svg>'; }

  /* ───────────────────────── almacenamiento ───────────────────────── */
  var TABLES = { ex: 'Ejercicios', rut: 'Rutina', ses: 'Sesiones', set: 'Series', body: 'Cuerpo' };
  var COLL = { Ejercicios: 'ex', Rutina: 'rut', Sesiones: 'ses', Series: 'set', Cuerpo: 'body' };
  var S = { mode: 'demo', ex: {}, rut: {}, ses: {}, set: {}, body: {}, outbox: {}, active: null };
  var CFG = { url: '', token: '', goal: 3, lastSync: 0, lastPull: 0, sound: true, musMin: 10, musMax: 20, cardioGoal: 60, deloadUntil: 0, wsSeen: {}, resets: {}, dropNext: {} };
  var dirty = true, IDX = null;

  function ls(k, v) {
    try {
      if (v === undefined) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, JSON.stringify(v));
    } catch (e) { if (v !== undefined) toast('No se pudo guardar en el móvil: ' + e.name); }
    return null;
  }
  function key(k) { return (S.mode === 'demo' ? 'rfd:' : 'rf:') + k; }
  function save(c) { ls(key(c), S[c]); if (c !== 'outbox' && c !== 'active') dirty = true; }
  function saveCfg() { ls('rf:cfg', CFG); }
  function loadAll() {
    S.mode = ls('rf:mode') || 'demo';
    var c = ls('rf:cfg'); if (c) for (var k in c) CFG[k] = c[k];
    ['ex', 'rut', 'ses', 'set', 'body', 'outbox'].forEach(function (k) { S[k] = ls(key(k)) || {}; });
    S.active = ls(key('active'));
    seedDefaults();
    if (S.mode === 'demo' && !Object.keys(S.ses).length && !ls('rfd:generated')) { genDemo(); ls('rfd:generated', 1); }
    dirty = true;
  }
  function seedDefaults() {
    if (!Object.keys(S.ex).length) {
      DEFAULTS.ejercicios.forEach(function (e) { S.ex[e[0]] = { id: e[0], nombre: e[1], grupo: e[2], equipo: e[3], incremento: e[4], nota: '', propio: 0, actualizado: 1, borrado: 0, modo: e[5], aislamiento: e[6], barra: e[7], alias: e[8] }; });
      save('ex');
    } else {
      // 1.0 → 1.1: completar modo / aislamiento / barra sin marcar como cambio
      var ch = false;
      DEFAULTS.ejercicios.forEach(function (e) { if (!S.ex[e[0]]) { S.ex[e[0]] = { id: e[0], nombre: e[1], grupo: e[2], equipo: e[3], incremento: e[4], nota: '', propio: 0, actualizado: 1, borrado: 0, modo: e[5], aislamiento: e[6], barra: e[7], alias: e[8] }; ch = true; } });
      DEFAULTS.ejercicios.forEach(function (e) { var x = S.ex[e[0]]; if (x && x.modo === undefined) { x.modo = e[5]; x.aislamiento = e[6]; x.barra = e[7]; ch = true; } if (x && (x.alias === undefined || x.alias === '') && !x.propio) { x.alias = e[8]; ch = true; } });
      if (ch) save('ex');
    }
    if (!Object.keys(S.rut).length) {
      DEFAULTS.rutina.forEach(function (r) { var id = 'r-' + r[0] + '-' + r[1]; S.rut[id] = { id: id, dia: r[0], orden: r[1], ejercicio_id: r[2], series: r[3], reps_min: r[4], reps_max: r[5], rir: r[6], descanso_s: r[7], actualizado: 1, borrado: 0 }; });
      save('rut');
    }
  }
  function put(c, row, quiet) {
    row.actualizado = Date.now();
    if (row.borrado === undefined) row.borrado = 0;
    S[c][row.id] = row; save(c);
    if (S.mode === 'real') { S.outbox[TABLES[c] + ':' + row.id] = row; save('outbox'); if (!quiet) scheduleSync(); }
  }
  function del(c, id) { var r = S[c][id]; if (!r) return; r.borrado = 1; put(c, r); }
  function alive(o) { return Object.keys(o).map(function (k) { return o[k]; }).filter(function (r) { return r && !+r.borrado; }); }
  function setActive(a) { S.active = a; ls(key('active'), a); }

  /* ───────────────────────── índices y consultas ───────────────────────── */
  function idx() {
    if (!dirty && IDX) return IDX;
    var ses = alive(S.ses).sort(function (a, b) { return a.inicio - b.inicio; });
    var sesById = {}; ses.forEach(function (s) { sesById[s.id] = s; });
    var byEx = {}, bySes = {};
    BW = bodyRows().filter(function (b) { return +b.peso; }).map(function (b) { return [parseDay(b.fecha).getTime(), +b.peso]; });
    alive(S.set).forEach(function (st) {
      var s = sesById[st.sesion_id]; if (!s) return;
      (bySes[s.id] = bySes[s.id] || []).push(st);
      if (+st.calentamiento) return;
      var e = byEx[st.ejercicio_id] = byEx[st.ejercicio_id] || {};
      (e[s.id] = e[s.id] || []).push(st);
    });
    var hist = {};
    Object.keys(byEx).forEach(function (exId) {
      var iso = isIso(exId);
      hist[exId] = Object.keys(byEx[exId]).map(function (sid) {
        var sets = byEx[exId][sid].sort(function (a, b) { return a.serie - b.serie; }), t = sesById[sid].inicio;
        var top = 0, best = 0, bsc = 0, bestSet = null, vol = 0;
        sets.forEach(function (x) {
          top = Math.max(top, +x.peso);
          var L = loadOf(exId, +x.peso, t), sc = scoreL(L, +x.reps), e = iso ? 0 : e1rm(L, x.reps);
          if (sc > bsc) { bsc = sc; bestSet = x; } if (e > best) best = e;
          vol += (x.carga !== undefined && x.carga !== '' ? +x.carga : cargaOf(exId, +x.peso, t)) * x.reps;
        });
        return { sid: sid, t: t, sets: sets, top: top, e1: best, sc: bsc, bestSet: bestSet, vol: vol, dl: +sesById[sid].descarga === 1 };
      }).sort(function (a, b) { return a.t - b.t; });
    });
    Object.keys(bySes).forEach(function (k) { bySes[k].sort(function (a, b) { return (a.orden - b.orden) || (a.serie - b.serie); }); });
    IDX = { ses: ses, sesById: sesById, hist: hist, bySes: bySes };
    dirty = false;
    return IDX;
  }
  function ex(id) { return S.ex[id] || { id: id, nombre: '(ejercicio borrado)', grupo: 'core', equipo: '', incremento: 2.5, nota: '' }; }
  var BW = [];
  function isIso(id) { return +ex(id).aislamiento === 1; }
  function modoOf(id) { return ex(id).modo || ''; }
  function unitOf(id) { var m = modoOf(id); return m === 'mancuerna' ? 'kg por mancuerna' : m === 'lado' ? 'kg por lado' : m === 'corporal' ? 'kg de lastre' : 'kg'; }
  function bwAt(t) { var v = 0; for (var i = 0; i < BW.length; i++) { if (BW[i][0] <= t + 864e5) v = BW[i][1]; } if (!v && BW.length) v = BW[BW.length - 1][1]; return v || 75; }
  function loadOf(id, w, t) { return modoOf(id) === 'corporal' ? Math.max(0, bwAt(t || Date.now()) + (+w || 0)) : (+w || 0); }
  function cargaOf(id, w, t) { var m = modoOf(id); return loadOf(id, w, t) * (m === 'mancuerna' || m === 'lado' ? 2 : 1); }
  function scoreL(L, r) { r = +r; if (!L || !r) return 0; return r === 1 ? L : L * (1 + r / 30); }
  function wFmt(id, w) { return modoOf(id) === 'corporal' ? (w > 0 ? '+' + kg(w) : w < 0 ? '−' + kg(-w) : '0') : kg(w); }
  function roundStep(v, st) { st = +st || 2.5; return Math.round(v / st) * st; }
  function deloadOn() { return CFG.deloadUntil && Date.now() < CFG.deloadUntil; }
  function exName(id) { return ex(id).nombre; }
  function shortName(n) { return n.replace(/\s*\(.*\)/, ''); }
  function aliasOf(id) { var e = ex(id); return (e.alias && String(e.alias).trim()) || shortName(e.nombre); }
  function routine(day) { return alive(S.rut).filter(function (r) { return r.dia === day; }).sort(function (a, b) { return a.orden - b.orden; }); }
  function lastSession() { var s = idx().ses; return s[s.length - 1] || null; }
  function nextType() { var l = lastSession(); if (!l) return 'push'; var i = TYPES.indexOf(l.tipo); return TYPES[(i + 1) % 3]; }
  function bestOf(exId, beforeT) {
    var h = idx().hist[exId] || [], b = { e1: 0, w: -1e9, sc: 0, set: null, n: 0 };
    h.forEach(function (x) { if (beforeT && x.t >= beforeT) return; b.n++; if (x.sc > b.sc) { b.sc = x.sc; b.set = x.bestSet; } b.e1 = Math.max(b.e1, x.e1); b.w = Math.max(b.w, x.top); });
    if (!b.n) b.w = 0;
    return b;
  }
  function stall(exId) {
    var rt = (CFG.resets || {})[exId] || 0;
    var h = (idx().hist[exId] || []).filter(function (x) { return !x.dl && x.t >= rt; });
    if (h.length < 4) return 0;
    var best = 0, last = -1;
    h.forEach(function (x, i) { if (x.sc > best + 0.05) { best = x.sc; last = i; } });
    var n = h.length - 1 - last;
    return n >= 3 ? n : 0;
  }
  function newRange(r) { var a = +r.reps_min || +r.rmin, b = +r.reps_max || +r.rmax; return b <= 10 ? [a + 2, b + 2] : [Math.max(5, a - 4), Math.max(6, b - 4)]; }
  function suggestion(r) {
    if (deloadOn()) return 0;
    var h = (idx().hist[r.ejercicio_id] || []).filter(function (x) { return !x.dl; });
    if (h.length < 2) return 0;
    var a = h[h.length - 1], b = h[h.length - 2];
    function full(x) { return x.sets.length >= r.series && x.sets.every(function (s) { return +s.reps >= r.reps_max && +s.peso === x.top; }); }
    if (full(a) && full(b) && a.top === b.top && a.top > 0) return a.top + (+ex(r.ejercicio_id).incremento || 2.5);
    return 0;
  }
  function lastText(exId) {
    var h = idx().hist[exId]; if (!h || !h.length) return '';
    var l = h[h.length - 1], same = l.sets.every(function (s) { return +s.peso === +l.sets[0].peso; });
    if (same) return kg(l.sets[0].peso) + ' kg × ' + l.sets.map(function (s) { return s.reps; }).join(', ');
    return l.sets.map(function (s) { return kg(s.peso) + '×' + s.reps; }).join(' · ');
  }
  function weekCounts() {
    var m = {}; idx().ses.forEach(function (s) { var k = dayKey(monday(s.inicio)); m[k] = (m[k] || 0) + 1; }); return m;
  }
  function streak() {
    var m = weekCounts(), g = CFG.goal, w = monday(Date.now()), n = 0;
    if ((m[dayKey(w)] || 0) >= g) n++;
    w.setDate(w.getDate() - 7);
    while ((m[dayKey(w)] || 0) >= g) { n++; w.setDate(w.getDate() - 7); }
    return n;
  }
  function bestStreak() {
    var m = weekCounts(), ks = Object.keys(m).sort(); if (!ks.length) return 0;
    var w = parseDay(ks[0]), end = monday(Date.now()), best = 0, cur = 0;
    while (w <= end) { if ((m[dayKey(w)] || 0) >= CFG.goal) { cur++; best = Math.max(best, cur); } else cur = 0; w.setDate(w.getDate() + 7); }
    return best;
  }
  function muscleSets(from, to) {
    var out = {}; Object.keys(GROUPS).forEach(function (g) { out[g] = 0; });
    var I = idx();
    I.ses.forEach(function (s) { if (s.inicio < from || s.inicio >= to) return; (I.bySes[s.id] || []).forEach(function (st) { if (+st.calentamiento) return; var g = ex(st.ejercicio_id).grupo; if (out[g] !== undefined) out[g]++; }); });
    return out;
  }
  function bodyRows() { return alive(S.body).sort(function (a, b) { return a.fecha < b.fecha ? -1 : 1; }); }
  function cardioWeek(w0) { var a = w0.getTime(), b = a + 7 * 864e5, m = 0; idx().ses.forEach(function (s) { if (s.inicio >= a && s.inicio < b) m += +s.cardio_min || 0; }); return m; }
  function volWeek(w0) { var a = w0.getTime(), b = a + 7 * 864e5, v = 0, n = 0; idx().ses.forEach(function (s) { if (s.inicio >= a && s.inicio < b) { v += +s.volumen_kg || 0; n++; } }); return { v: v, n: n }; }

  /* ───────────────────────── sincronización con la Sheet ───────────────────────── */
  var syncing = false, syncTimer = null, syncFails = 0;
  function configured() { return S.mode === 'real' && CFG.url && CFG.token; }
  function pending() { return Object.keys(S.outbox).length; }
  function scheduleSync(ms) { clearTimeout(syncTimer); syncTimer = setTimeout(function () { syncNow().catch(function () {}); }, ms == null ? 1500 : ms); }
  function api(action, body) {
    var url = CFG.url.trim();
    if (body) return fetch(url, { method: 'POST', body: JSON.stringify(Object.assign({ token: CFG.token.trim(), action: action }, body)), redirect: 'follow' }).then(readJson);
    return fetch(url + (url.indexOf('?') >= 0 ? '&' : '?') + 'action=' + action + '&token=' + encodeURIComponent(CFG.token.trim()) + '&_=' + Date.now(), { redirect: 'follow' }).then(readJson);
  }
  function readJson(r) {
    return r.text().then(function (t) {
      var j; try { j = JSON.parse(t); } catch (e) { throw new Error(t.indexOf('<') >= 0 ? 'La URL no devuelve datos. ¿Está publicada como aplicación web con acceso "Cualquier usuario"?' : 'Respuesta no válida'); }
      if (!j.ok) throw new Error(j.error || 'Error en la Sheet');
      return j;
    });
  }
  function syncNow() {
    if (!configured() || syncing || !pending()) return Promise.resolve(false);
    if (!navigator.onLine) return Promise.resolve(false);
    syncing = true; updateSyncPill();
    var keys = Object.keys(S.outbox).slice(0, 400), data = {}, sent = {};
    keys.forEach(function (k) { var t = k.split(':')[0], row = S.outbox[k]; (data[t] = data[t] || []).push(row); sent[k] = row.actualizado; });
    return api('push', { data: data }).then(function () {
      keys.forEach(function (k) { if (S.outbox[k] && S.outbox[k].actualizado === sent[k]) delete S.outbox[k]; });
      save('outbox'); CFG.lastSync = Date.now(); saveCfg(); syncFails = 0; syncing = false; updateSyncPill();
      if (pending()) scheduleSync(300);
      return true;
    }).catch(function (e) {
      syncing = false; syncFails++; updateSyncPill();
      scheduleSync(Math.min(30000, 3000 * Math.pow(2, syncFails - 1)));
      throw e;
    });
  }
  function pull(replace) {
    return api('pull').then(function (j) {
      var changed = 0;
      Object.keys(j.data || {}).forEach(function (t) {
        var c = COLL[t]; if (!c) return;
        if (replace) S[c] = {};
        (j.data[t] || []).forEach(function (row) {
          if (!row.id) return;
          ['actualizado', 'borrado', 'inicio', 'fin', 'peso', 'reps', 'serie', 'orden', 'e1rm', 'record', 'series', 'reps_min', 'reps_max', 'descanso_s', 'incremento', 'propio', 'duracion_min', 'volumen_kg', 'records', 'cardio_min', 'cardio_dist', 'cardio_nivel', 'cintura', 'carga', 'calentamiento', 'aislamiento', 'barra', 'descarga'].forEach(function (f) { if (row[f] !== undefined && row[f] !== '') row[f] = num(row[f]); });
          var loc = S[c][row.id], ob = S.outbox[t + ':' + row.id];
          if (ob) return;
          if (!loc || +row.actualizado > +loc.actualizado) { S[c][row.id] = row; changed++; }
        });
        save(c);
      });
      seedDefaults();
      CFG.lastPull = Date.now(); saveCfg(); dirty = true;
      return changed;
    });
  }
  function updateSyncPill() { var p = $('#syncpill'); if (p) p.outerHTML = syncPill(); }
  function syncPill() {
    if (S.mode !== 'real') return '<span id="syncpill"></span>';
    var n = pending();
    if (!CFG.url) return '<a id="syncpill" href="#/ajustes" class="pill" style="color:var(--gold)">' + ic('cloudoff', 13) + 'Sin conectar</a>';
    if (!n) return '<span id="syncpill"></span>';
    return '<a id="syncpill" href="#/ajustes" class="pill">' + ic(navigator.onLine ? 'refresh' : 'cloudoff', 13) + n + ' por subir</a>';
  }

  /* ───────────────────────── infraestructura de UI ───────────────────────── */
  var view, route = { r: 'hoy', p: [] }, UI = { prog: 'ex', metric: 'cintura', fMetric: 'e1', fRange: 'all', fSel: -1, calMonth: null, calSel: null, rutDay: 'push', tool: 'warm', wEq: 'bar', wW: 60, rmW: 60, rmR: 8, musWeek: 0, libGroup: 'pecho', libQ: '', today: null };
  function parseRoute() { var h = location.hash.replace(/^#\/?/, '') || 'hoy'; var p = h.split('/').map(decodeURIComponent); return { r: p[0], p: p.slice(1) }; }
  function go(h) { if (location.hash === h) render(); else location.hash = h; }
  function render(opts) {
    opts = opts || {};
    route = parseRoute();
    var fn = V[route.r] || V.hoy;
    var still = !!opts.still, top = still ? view.scrollTop : 0;
    var doit = function () {
      document.documentElement.classList.toggle('still', still);
      view.className = 'view' + (TABS[route.r] ? '' : ' noTab');
      view.innerHTML = fn.apply(null, route.p);
      view.scrollTop = top;
      tabbar(); restUI();
      if (!still) countUps();
      if (V[route.r + '_after']) V[route.r + '_after']();
    };
    if (!still && !opts.noVT && document.startViewTransition && !reduceMotion && !UI.vt) {
      try {
        var vt = document.startViewTransition(doit); UI.vt = vt;
        var done = function () { if (UI.vt === vt) UI.vt = null; };
        ['ready', 'finished', 'updateCallbackDone'].forEach(function (k) { if (vt[k] && vt[k].then) vt[k].then(k === 'finished' ? done : null, function () { done(); }); });
      } catch (e) { UI.vt = null; doit(); }
    } else doit();
  }
  function rerender() { render({ still: true }); }
  var TABS = { hoy: 1, progreso: 1, datos: 1, historial: 1, utiles: 1 };
  function tabbar() {
    var tb = $('#tabbar'); if (!tb) return;
    var restOut = S.active && S.active.restEnd && route.r !== 'entreno' && route.r !== 'final';
    tb.classList.toggle('hide', !TABS[route.r] && !restOut);
    $$('#tabbar a[data-r]').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-r') === route.r); });
    var f = $('#fab'); f.classList.toggle('live', !!S.active); f.setAttribute('aria-label', S.active ? 'Continuar entreno' : 'Empezar entreno');
  }
  function countUps() {
    $$('[data-cu]', view).forEach(function (el) {
      var to = +el.getAttribute('data-cu'), d = +(el.getAttribute('data-d') || 0), t0 = performance.now();
      if (reduceMotion || !to) { el.textContent = fmt(to, d); return; }
      el.textContent = fmt(0, d);
      (function step(t) { var k = Math.min(1, (t - t0 - 120) / 1100); if (k < 0) k = 0; el.textContent = fmt(to * (1 - Math.pow(1 - k, 3)), d); if (k < 1) requestAnimationFrame(step); })(t0);
    });
  }
  var toastT;
  function toast(msg, undo) {
    var t = $('#toast'); if (!t) return;
    t.innerHTML = '<span>' + esc(msg) + '</span>' + (undo ? '<button id="toastUndo">Deshacer</button>' : '');
    t.classList.toggle('act', !!undo); t.classList.add('show');
    if (undo) $('#toastUndo').onclick = function () { clearTimeout(toastT); t.classList.remove('show'); undo(); };
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove('show'); }, undo ? 5000 : 2600);
  }
  var sheetOpen = null;
  function sheet(html, mount) {
    closeSheet();
    var bg = document.createElement('div'); bg.className = 'sheet-bg';
    var sh = document.createElement('div'); sh.className = 'sheet'; sh.setAttribute('role', 'dialog');
    sh.innerHTML = '<div class="grab"></div>' + html;
    bg.addEventListener('click', closeSheet);
    document.body.appendChild(bg); document.body.appendChild(sh);
    sheetOpen = { bg: bg, sh: sh };
    if (mount) mount(sh);
    return sh;
  }
  function closeSheet() { if (!sheetOpen) return; sheetOpen.bg.remove(); sheetOpen.sh.remove(); sheetOpen = null; }
  function confirmSheet(title, text, okTxt, onOk, danger) {
    sheet('<h3 class="u h2">' + esc(title) + '</h3><p class="mut small" style="margin:0;line-height:1.5">' + esc(text) + '</p><button class="btn ' + (danger ? 'danger' : '') + '" data-a="cfOk">' + esc(okTxt) + '</button><button class="btn ghost" data-a="closeSheet">Cancelar</button>');
    A.cfOk = function () { closeSheet(); onOk(); };
  }
  function numberSheet(title, value, onOk, opts) {
    opts = opts || {};
    sheet('<h3 class="u h2">' + esc(title) + '</h3><input class="inp u" id="numIn" inputmode="decimal" style="height:72px;font-size:34px;text-align:center" value="' + esc(String(value).replace('.', ',')) + '"><button class="btn" data-a="numOk">Guardar</button>', function (sh) { var i = $('#numIn', sh); setTimeout(function () { i.focus(); i.select(); }, 60); i.addEventListener('keydown', function (e) { if (e.key === 'Enter') A.numOk(); }); });
    A.numOk = function () { var v = num($('#numIn').value); if (opts.min != null && v < opts.min) v = opts.min; closeSheet(); onOk(v); };
  }

  /* ───────────────────────── audio, wake lock ───────────────────────── */
  var AC = null, wake = null;
  function unlockAudio() {
    try {
      if (!AC) { AC = new (window.AudioContext || window.webkitAudioContext)(); if (navigator.audioSession) try { navigator.audioSession.type = 'transient'; } catch (e) {} }
      if (AC.state === 'suspended') AC.resume();
      var o = AC.createOscillator(), g = AC.createGain(); g.gain.value = 0.0001; o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime + 0.02);
    } catch (e) {}
  }
  function beep() {
    if (!AC || !CFG.sound) return;
    try {
      if (AC.state === 'suspended') AC.resume();
      [0, 0.28, 0.56].forEach(function (t, i) {
        var o = AC.createOscillator(), g = AC.createGain(), at = AC.currentTime + t;
        o.type = 'sine'; o.frequency.value = i === 2 ? 1320 : 880;
        g.gain.setValueAtTime(0.0001, at); g.gain.exponentialRampToValueAtTime(0.5, at + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, at + 0.22);
        o.connect(g); g.connect(AC.destination); o.start(at); o.stop(at + 0.25);
      });
    } catch (e) {}
  }
  function wakeOn() { if (!('wakeLock' in navigator) || wake || document.visibilityState !== 'visible') return; navigator.wakeLock.request('screen').then(function (w) { wake = w; w.addEventListener('release', function () { wake = null; }); }).catch(function () {}); }
  function wakeOff() { if (wake) { wake.release().catch(function () {}); wake = null; } }

  /* ───────────────────────── gráficas ───────────────────────── */
  function spark(vals, w, h, color, cls) {
    if (vals.length < 2) return '<svg width="' + w + '" height="' + h + '" aria-hidden="true"></svg>';
    var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals);
    var pts = vals.map(function (v, i) { return (3 + i * ((w - 6) / (vals.length - 1))).toFixed(1) + ',' + (3 + (1 - (v - mn) / ((mx - mn) || 1)) * (h - 6)).toFixed(1); }).join(' ');
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true" preserveAspectRatio="none" style="' + (cls || '') + '"><polyline class="draw" pathLength="1" points="' + pts + '" fill="none" stroke="' + color + '" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function chart(vals, o) {
    o = o || {}; var W = o.w || 326, H = o.h || 150, top = 16, bot = H - 22, n = vals.length;
    if (!n) return '<div class="mut small" style="height:' + H + 'px;display:flex;align-items:center;justify-content:center">Sin datos todavía</div>';
    var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals), padv = Math.max(1, (mx - mn) * 0.15); mn -= padv; mx += padv;
    var P = vals.map(function (v, i) { return [n === 1 ? W / 2 : 10 + i * ((W - 20) / (n - 1)), top + (1 - (v - mn) / (mx - mn)) * (bot - top)]; });
    var pts = P.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    var area = 'M' + P.map(function (p) { return p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(' L') + ' L' + P[n - 1][0].toFixed(1) + ' ' + bot + ' L' + P[0][0].toFixed(1) + ' ' + bot + ' Z';
    var c = o.color || '#FF6B2C', sel = o.sel == null ? n - 1 : o.sel;
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '" role="img" aria-label="' + esc(o.aria || 'Gráfica') + '">';
    [top, (top + bot) / 2, bot].forEach(function (y) { s += '<line x1="0" x2="' + W + '" y1="' + y + '" y2="' + y + '" stroke="rgba(255,255,255,.06)"/>'; });
    if (o.yfmt) { s += '<text x="' + W + '" y="' + (top - 4) + '" fill="#A1A1AA" font-size="10" font-weight="700" text-anchor="end">' + o.yfmt(mx) + '</text><text x="' + W + '" y="' + (bot - 4) + '" fill="#A1A1AA" font-size="10" font-weight="700" text-anchor="end">' + o.yfmt(mn) + '</text>'; }
    s += '<path class="area" d="' + area + '" fill="' + (o.fill || 'rgba(255,107,44,.09)') + '"/>';
    if (n > 1) s += '<polyline class="draw" pathLength="1" points="' + pts + '" fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    if (o.dots) { s += '<line x1="' + P[sel][0].toFixed(1) + '" x2="' + P[sel][0].toFixed(1) + '" y1="' + top + '" y2="' + bot + '" stroke="rgba(255,255,255,.18)" stroke-dasharray="3 4"/>'; P.forEach(function (p, i) { s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + (i === sel ? 7 : 3.5) + '" fill="' + (i === sel ? c : '#52525B') + '" stroke="#141417" stroke-width="2.5"/>'; }); }
    else s += '<circle cx="' + P[n - 1][0].toFixed(1) + '" cy="' + P[n - 1][1].toFixed(1) + '" r="5.5" fill="' + c + '" stroke="#141417" stroke-width="3"/>';
    if (o.x0) s += '<text x="0" y="' + (H - 4) + '" fill="#A1A1AA" font-size="11" font-weight="700">' + esc(o.x0) + '</text><text x="' + W + '" y="' + (H - 4) + '" fill="#A1A1AA" font-size="11" font-weight="700" text-anchor="end">' + esc(o.x1) + '</text>';
    s += '</svg>';
    if (o.dots) { s += '<div style="display:flex;margin-top:-' + H + 'px;height:' + (H - 20) + 'px;position:relative">'; P.forEach(function (p, i) { s += '<button style="flex:1" data-a="' + o.dots + '" data-i="' + i + '" aria-label="Punto ' + (i + 1) + '"></button>'; }); s += '</div><div style="height:20px"></div>'; }
    return s;
  }
  function figure(f, back, w) {
    w = w || 130;
    var n = f.base || '#232327', s = '<svg viewBox="0 0 120 240" width="' + w + '" height="' + (w * 2) + '" role="img" aria-label="' + (back ? 'Vista posterior' : 'Vista frontal') + '"><circle cx="60" cy="20" r="13" fill="' + n + '"/><rect x="54" y="32" width="12" height="10" rx="4" fill="' + n + '"/>';
    if (!back) {
      s += '<ellipse cx="34" cy="52" rx="11" ry="10" fill="' + f.hombro + '"/><ellipse cx="86" cy="52" rx="11" ry="10" fill="' + f.hombro + '"/>' +
        '<ellipse cx="49" cy="62" rx="13" ry="11" fill="' + f.pecho + '"/><ellipse cx="71" cy="62" rx="13" ry="11" fill="' + f.pecho + '"/>' +
        '<ellipse cx="26" cy="85" rx="7.5" ry="15" fill="' + f.biceps + '"/><ellipse cx="94" cy="85" rx="7.5" ry="15" fill="' + f.biceps + '"/>' +
        '<ellipse cx="21" cy="118" rx="6" ry="15" fill="' + n + '"/><ellipse cx="99" cy="118" rx="6" ry="15" fill="' + n + '"/>' +
        '<rect x="48" y="76" width="24" height="42" rx="9" fill="' + f.core + '"/><path d="M44 120 h32 l-4 14 h-24z" fill="' + n + '"/>' +
        '<ellipse cx="49" cy="158" rx="11" ry="28" fill="' + f.cuadriceps + '"/><ellipse cx="71" cy="158" rx="11" ry="28" fill="' + f.cuadriceps + '"/>' +
        '<ellipse cx="49" cy="210" rx="7" ry="18" fill="' + f.gemelos + '"/><ellipse cx="71" cy="210" rx="7" ry="18" fill="' + f.gemelos + '"/>';
    } else {
      s += '<ellipse cx="34" cy="52" rx="11" ry="10" fill="' + f.posterior + '"/><ellipse cx="86" cy="52" rx="11" ry="10" fill="' + f.posterior + '"/>' +
        '<ellipse cx="60" cy="54" rx="17" ry="10" fill="' + f.espalda + '"/><ellipse cx="47" cy="82" rx="11" ry="19" fill="' + f.espalda + '"/><ellipse cx="73" cy="82" rx="11" ry="19" fill="' + f.espalda + '"/>' +
        '<ellipse cx="26" cy="85" rx="7.5" ry="15" fill="' + f.triceps + '"/><ellipse cx="94" cy="85" rx="7.5" ry="15" fill="' + f.triceps + '"/>' +
        '<ellipse cx="21" cy="118" rx="6" ry="15" fill="' + n + '"/><ellipse cx="99" cy="118" rx="6" ry="15" fill="' + n + '"/>' +
        '<rect x="52" y="100" width="16" height="16" rx="6" fill="' + n + '"/>' +
        '<ellipse cx="50" cy="130" rx="12" ry="11" fill="' + f.gluteo + '"/><ellipse cx="70" cy="130" rx="12" ry="11" fill="' + f.gluteo + '"/>' +
        '<ellipse cx="49" cy="166" rx="10" ry="22" fill="' + f.femoral + '"/><ellipse cx="71" cy="166" rx="10" ry="22" fill="' + f.femoral + '"/>' +
        '<ellipse cx="49" cy="211" rx="8" ry="17" fill="' + f.gemelos + '"/><ellipse cx="71" cy="211" rx="8" ry="17" fill="' + f.gemelos + '"/>';
    }
    return s + '</svg>';
  }
  /* ilustraciones de ejercicios (Everkinetic, CC BY-SA 4.0) y músculos trabajados */
  var IMGDIR = '', IMG = {}; (DEFAULTS.imagenes || []).forEach(function (k) { IMG[k] = 1; });
  var SEC = { pecho: ['triceps', 'hombro'], hombro: ['triceps'], posterior: ['espalda'], triceps: [], espalda: ['biceps', 'posterior'], biceps: [], cuadriceps: ['gluteo'], femoral: ['gluteo'], gluteo: ['femoral', 'cuadriceps'], gemelos: [], core: [] };
  var BACKG = { espalda: 1, posterior: 1, triceps: 1, femoral: 1, gluteo: 1 };
  function hasImg(id) { return !!IMG[id]; }
  function imgTag(id) { return '<img src="' + IMGDIR + 'ej-' + id + '.webp" alt="Ilustración de ' + esc(exName(id)) + '" loading="lazy" decoding="async">'; }
  function musFills(id) { var g = ex(id).grupo, f = { base: '#2A2A30' }; Object.keys(GROUPS).forEach(function (k) { f[k] = '#2A2A30'; }); (SEC[g] || []).forEach(function (k) { f[k] = 'rgba(255,107,44,.42)'; }); f[g] = '#FF6B2C'; return f; }
  function miniFig(id, w) { var g = ex(id).grupo; return figure(musFills(id), !!BACKG[g], w); }
  function thumb(id, w, h) { return '<span class="thumb" style="width:' + w + 'px;height:' + h + 'px">' + (hasImg(id) ? imgTag(id) : miniFig(id, Math.round(h / 2.1))) + '</span>'; }
  function musLegend(id) { var g = ex(id).grupo, sec = SEC[g] || []; return '<span class="small" style="line-height:1.4"><b style="color:var(--acc)">' + GROUPS[g] + '</b>' + (sec.length ? '<br><span class="mut">' + sec.map(function (k) { return GROUPS[k]; }).join(', ') + '</span>' : '') + '</span>'; }
  function exHero(id, h, act) {
    h = h || 150;
    return '<' + (act ? 'button data-a="exInfo" data-id="' + esc(id) + '"' : 'div') + ' class="exhero" style="height:' + h + 'px"><span class="exhero-img">' + (hasImg(id) ? imgTag(id) : '<span class="small mut" style="padding:10px;text-align:center">Sin ilustración para este ejercicio</span>') + '</span><span class="exhero-mus">' + miniFig(id, Math.round((h - 34) / 2)) + musLegend(id) + '</span></' + (act ? 'button' : 'div') + '>';
  }
  function exInfoAct(d) {
    var id = d.id, e = ex(id), H = idx().hist[id] || [];
    sheet('<h3 class="u h2">' + esc(e.nombre) + '</h3><p class="small mut" style="margin:0">' + GROUPS[e.grupo] + ' · ' + esc(e.equipo || '') + (modoOf(id) ? ' · ' + unitOf(id) : '') + '</p>' + exHero(id, 200) + (e.nota ? '<div class="note edit">' + ic('pencil', 16) + esc(e.nota) + '</div>' : '') + (H.length ? '<p class="small mut" style="margin:0">' + H.length + ' sesiones registradas · mejor serie ' + (bestOf(id).set ? wFmt(id, bestOf(id).set.peso) + ' × ' + bestOf(id).set.reps : '—') + '</p>' : '') + '<a class="btn dark" href="#/ficha/' + esc(id) + '" data-a="closeSheet">Ver ficha completa</a>' + (hasImg(id) ? '<p class="small mut" style="margin:0;text-align:center;font-size:11px">Ilustración: Everkinetic · CC BY-SA 4.0</p>' : ''));
  };
  function heat(n) { return n <= 0 ? '#232327' : 'rgba(255,107,44,' + (0.2 + 0.8 * Math.min(1, n / 12)).toFixed(3) + ')'; }

  /* ───────────────────────── sesión activa ───────────────────────── */
  function startSession(type) {
    var dl = deloadOn();
    var items = routine(type).map(function (r) { return buildItem(r.ejercicio_id, r, dl); });
    var a = { id: uid(), tipo: type, inicio: Date.now(), cur: 0, items: items, restEnd: 0, restTotal: 0, restDone: false, after: null, dl: dl ? 1 : 0, nota: '', cardio: { tipo: 'cinta', min: 20, dist: 0, nivel: 0, on: true } };
    var lc = lastCardio(); if (lc) { a.cardio.tipo = lc.cardio_tipo; a.cardio.min = +lc.cardio_min || 20; a.cardio.dist = +lc.cardio_dist || 0; a.cardio.nivel = +lc.cardio_nivel || 0; }
    setActive(a);
    UI.today = null;
  }
  function buildItem(exId, r, dl) {
    r = r || { ejercicio_id: exId, series: 3, reps_min: 8, reps_max: 12, rir: '1', descanso_s: 90 };
    var e = ex(exId), inc = +e.incremento || 2.5;
    var it = { exId: exId, rid: r.id || '', series: +r.series, rmin: +r.reps_min, rmax: +r.reps_max, rir: r.rir, rest: +r.descanso_s, sug: 0, ss: r.superserie || '', sets: [] };
    if (dl) it.series = Math.max(1, it.series - 1);
    var h = (idx().hist[exId] || []).filter(function (x) { return !x.dl; }), last = h[h.length - 1];
    it.sug = dl ? 0 : suggestion(Object.assign({}, r, { ejercicio_id: exId }));
    for (var i = 0; i < it.series; i++) {
      var w = 0, rep = it.rmin;
      if (it.sug) { w = it.sug; rep = it.rmin; }
      else if (last) { var ls_ = last.sets[i] || last.sets[last.sets.length - 1]; w = +ls_.peso; rep = +ls_.reps; }
      if (dl && w) w = modoOf(exId) === 'corporal' ? w : roundStep(w * 0.9, inc);
      if (!dl && w && CFG.dropNext && CFG.dropNext[exId]) { w = modoOf(exId) === 'corporal' ? w - inc : roundStep(w * 0.9, inc); it.reset = 1; }
      it.sets.push({ w: w, r: rep, done: false, pr: 0 });
    }
    if (it.reset && CFG.dropNext && CFG.dropNext[exId]) { delete CFG.dropNext[exId]; CFG.resets[exId] = Date.now(); saveCfg(); it.sug = 0; }
    return it;
  }
  function lastCardio() { var s = idx().ses.slice().reverse(); for (var i = 0; i < s.length; i++) if (s[i].cardio_tipo) return s[i]; return null; }
  function curSetIdx(it) { for (var i = 0; i < it.sets.length; i++) if (!it.sets[i].done) return i; return -1; }
  function workPending(it) { return it.sets.filter(function (s) { return !s.done && !s.wu; }).length; }
  function activeStats() {
    var a = S.active, vol = 0, done = 0, total = 0;
    a.items.forEach(function (it) { it.sets.forEach(function (s) { if (s.wu) return; total++; if (s.done) { done++; vol += cargaOf(it.exId, s.w, a.inicio) * s.r; } }); });
    return { vol: vol, done: done, total: total };
  }
  function sessionBest(a, exId, uptoItem, uptoSet) {
    var b = { e1: 0, w: -1e9, sc: 0 }, iso = isIso(exId);
    a.items.forEach(function (it, ii) { if (it.exId !== exId) return; it.sets.forEach(function (s, si) { if (!s.done || s.wu) return; if (ii === uptoItem && si === uptoSet) return; var L = loadOf(exId, s.w); b.sc = Math.max(b.sc, scoreL(L, s.r)); if (!iso) b.e1 = Math.max(b.e1, e1rm(L, s.r)); b.w = Math.max(b.w, s.w); }); });
    return b;
  }
  function checkPR(a, it, ci, s) {
    var hb = bestOf(it.exId); if (!hb.n) return null;
    var sb = sessionBest(a, it.exId, a.cur, ci), iso = isIso(it.exId);
    var pSc = Math.max(hb.sc, sb.sc), pW = Math.max(hb.w, sb.w), pE1 = Math.max(hb.e1, sb.e1);
    var L = loadOf(it.exId, s.w), sc = scoreL(L, s.r), e1 = iso ? 0 : e1rm(L, s.r), unit = modoOf(it.exId) === 'corporal' ? ' kg de lastre' : ' kg';
    if (s.r > 0 && s.w > pW + 1e-9) return { lvl: 1, e1: e1, w: s.w, r: s.r, diff: '+' + kg(s.w - pW) + unit, what: 'más peso que nunca' };
    if (!iso && pE1 > 0 && e1 > pE1 * 1.01) return { lvl: 1, e1: e1, w: s.w, r: s.r, diff: '+' + kg(Math.round((e1 - pE1) * 10) / 10) + ' kg', what: 'sobre tu mejor 1RM' };
    if (sc > pSc + 0.05) return { lvl: 2, e1: e1, w: s.w, r: s.r };
    return null;
  }
  function partnerIdx(a, i) { var it = a.items[i]; if (!it || !it.ss) return -1; for (var j = 0; j < a.items.length; j++) if (j !== i && a.items[j].ss === it.ss) return j; return -1; }
  function nextPendingIdx(a, from) { var n = a.items.length; for (var k = 1; k <= n; k++) { var j = (from + k) % n; if (curSetIdx(a.items[j]) >= 0) return j; } return -1; }
  function afterRest() {
    var a = S.active; if (!a) return;
    var cur = a.items[a.cur], moved = false;
    if (a.after != null && a.items[a.after] && curSetIdx(a.items[a.after]) >= 0) { a.cur = a.after; moved = true; }
    else if (cur && curSetIdx(cur) < 0) { var j = nextPendingIdx(a, a.cur); if (j >= 0 && j !== a.cur) { a.cur = j; moved = true; } }
    a.after = null; setActive(a);
    if (moved && route.r === 'entreno') { render({ noVT: true }); toast('Ahora: ' + aliasOf(a.items[a.cur].exId)); }
  }
  function finishSession(withCardio) {
    var a = S.active; if (!a) return null;
    var now = Date.now(), vol = 0, nsets = 0, prs = 0, sid = a.id, day = dayKey(a.inicio);
    a.items.forEach(function (it, ii) {
      var n = 0, iso = isIso(it.exId);
      it.sets.forEach(function (s) {
        if (!s.done) return; n++;
        var c = cargaOf(it.exId, s.w, a.inicio), L = loadOf(it.exId, s.w, a.inicio);
        if (!s.wu) { nsets++; vol += c * s.r; if (s.pr === 1) prs++; }
        put('set', { id: sid + '-' + ii + '-' + n, sesion_id: sid, ejercicio_id: it.exId, ejercicio: exName(it.exId), orden: ii + 1, serie: n, peso: s.w, reps: s.r, e1rm: s.wu || iso ? 0 : Math.round(e1rm(L, s.r) * 10) / 10, record: s.wu ? 0 : (s.pr || 0), fecha: day, carga: Math.round(c * 100) / 100, calentamiento: s.wu ? 1 : 0 }, true);
      });
    });
    var c = a.cardio, d = new Date(a.inicio);
    put('ses', { id: sid, tipo: a.tipo, fecha: day + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()), inicio: a.inicio, fin: now, duracion_min: Math.round((now - a.inicio) / 60000), volumen_kg: Math.round(vol), series: nsets, records: prs, cardio_tipo: withCardio ? c.tipo : '', cardio_min: withCardio ? c.min : 0, cardio_dist: withCardio ? c.dist : 0, cardio_nivel: withCardio ? c.nivel : 0, nota: (a.nota || '').trim(), descarga: a.dl ? 1 : 0 });
    setActive(null); wakeOff(); hideRest();
    return sid;
  }
  function recomputeSession(sid) {
    var s = S.ses[sid]; if (!s) return;
    var sets = alive(S.set).filter(function (x) { return x.sesion_id === sid && !+x.calentamiento; });
    s.volumen_kg = Math.round(sets.reduce(function (a, x) { return a + (x.carga !== undefined && x.carga !== '' ? +x.carga : +x.peso) * x.reps; }, 0));
    s.series = sets.length; s.records = sets.filter(function (x) { return +x.record === 1; }).length;
    put('ses', s);
  }

  function showUndo(msg, fn) { toast(msg, fn); }

  /* ───────────────────────── descanso y récord ───────────────────────── */
  function startRest(sec) {
    var a = S.active; if (!a) return;
    a.restEnd = Date.now() + sec * 1000; a.restTotal = sec; a.restDone = false; a.restMin = false; setActive(a);
    showRest(); tick();
  }
  function showRest() {
    var a = S.active; if (!a || !a.restEnd) return;
    var o = $('#rest');
    if (route.r !== 'entreno' || a.restMin) { if (o) o.remove(); restUI(); return; }
    if (!o) {
      o = document.createElement('div'); o.id = 'rest'; o.className = 'overlay'; o.setAttribute('role', 'dialog'); o.setAttribute('aria-label', 'Descanso');
      o.innerHTML = '<button class="iconbtn" data-a="restMin" aria-label="Minimizar descanso" style="position:absolute;top:calc(var(--sat) + 14px);left:16px">' + ic('downc', 22) + '</button><div id="restDone" class="pop row" style="gap:8px;padding:8px 14px;border-radius:999px;background:var(--accSoft);border:1px solid var(--accLine);color:var(--acc);font-weight:800;font-size:14px"></div><span class="label" id="restLbl">Descanso</span><div class="ringwrap"><svg viewBox="0 0 260 260" width="260" height="260" aria-hidden="true"><circle cx="130" cy="130" r="116" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="14"/><circle id="restRing" class="ring" cx="130" cy="130" r="116" fill="none" stroke="#FF6B2C" stroke-width="14" stroke-linecap="round" pathLength="1" transform="rotate(-90 130 130)"/></svg><div class="in"><span class="u" id="restTxt" role="timer" style="font-size:68px;font-weight:700;letter-spacing:-.03em;line-height:1">0:00</span><span class="small mut" id="restTot"></span></div></div><div class="col" style="align-items:center;gap:6px"><p id="restNext" style="margin:0;font-size:15px;font-weight:600;color:#D4D4D8;text-align:center"></p><p id="restPl" style="margin:0;font-size:14px;font-weight:700;color:var(--accTx);text-align:center"></p></div><div style="display:flex;gap:10px;width:100%;max-width:420px"><button class="btn dark" style="flex:1" data-a="restAdd" data-s="-15">−15 s</button><button class="btn dark" style="flex:1" data-a="restAdd" data-s="30">+30 s</button><button class="btn light" style="flex:1.3" data-a="restSkip">Saltar</button></div>';
      document.body.appendChild(o);
    }
    $('#restNext').textContent = nextHint();
    var pl = $('#restPl'); if (pl) pl.innerHTML = nextPlates();
    var rd = $('#restDone'), jd = UI.justDone, it0 = jd && a.items[jd.item], s0 = it0 && it0.sets[jd.set];
    if (rd) { if (s0 && s0.done) { rd.innerHTML = ic('check', 16, 'stroke-width:3') + esc(aliasOf(it0.exId)) + ' · ' + wFmt(it0.exId, s0.w) + ' × ' + s0.r; rd.style.display = ''; } else rd.style.display = 'none'; }
  }
  function nextPlates() {
    var a = S.active; if (!a) return '';
    var tg = a.after != null ? a.after : a.cur, it = a.items[tg], ci = it ? curSetIdx(it) : -1;
    if (it && ci < 0 && tg === a.cur) { var nj = nextPendingIdx(a, a.cur); if (nj >= 0) { it = a.items[nj]; ci = curSetIdx(it); } }
    if (!it || ci < 0) return '';
    var bar = +ex(it.exId).barra; if (!bar) return '';
    return platesRow(it.sets[ci].w, bar);
  }
  function ringHTML(sz) {
    var c = sz / 2, r = c - 5;
    return '<span class="rt" aria-hidden="true"><svg viewBox="0 0 ' + sz + ' ' + sz + '" width="' + sz + '" height="' + sz + '"><circle cx="' + c + '" cy="' + c + '" r="' + r + '" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="4"/><circle class="rtr" cx="' + c + '" cy="' + c + '" r="' + r + '" fill="none" stroke="#FF6B2C" stroke-width="4" stroke-linecap="round" pathLength="1" stroke-dasharray="1" transform="rotate(-90 ' + c + ' ' + c + ')"/></svg><b class="u rtt">0:00</b></span>';
  }
  // el temporizador del descanso cuando no se ve la pantalla de descanso: botón central (pestañas) o dock (Entreno)
  function restUI() {
    var a = S.active, on = !!(a && a.restEnd), rem = on ? a.restEnd - Date.now() : 0;
    var frac = on ? Math.min(1, Math.max(0, rem / (a.restTotal * 1000))) : 0, txt = mmss(Math.max(0, rem) / 1000), fin = on && rem <= 0;
    var lbl = fin ? 'Descanso terminado. Volver al entreno' : 'Descanso: quedan ' + txt + '. Volver al descanso';
    tabbar();
    var set = function (el, show, fallbackLbl) {
      if (!el) return;
      el.classList.toggle('rest', show);
      if (!show) { el.classList.remove('beat'); if (fallbackLbl) el.setAttribute('aria-label', fallbackLbl); return; }
      var r = $('.rtr', el), t = $('.rtt', el);
      if (r) r.style.strokeDashoffset = (1 - frac).toFixed(4);
      if (t && t.textContent !== txt) t.textContent = txt;
      if (el.getAttribute('aria-label') !== lbl) el.setAttribute('aria-label', lbl);
      if (fin && !el.classList.contains('beat')) el.classList.add('beat');
      if (!fin) el.classList.remove('beat');
    };
    var f = $('#fab');
    if (f && !$('.rt', f)) f.insertAdjacentHTML('beforeend', ringHTML(60));
    set(f, on && route.r !== 'entreno', S.active ? 'Continuar entreno' : 'Empezar entreno');
    var dp = $('#dockPrev');
    if (dp) {
      var dOn = on && route.r === 'entreno' && !!a.restMin;
      set(dp, dOn, 'Ejercicio anterior');
      dp.setAttribute('data-a', dOn ? 'restMax' : 'exPrev');
      if (dOn) dp.disabled = false; else dp.disabled = dp.hasAttribute('data-dis');
    }
  }
  function hideRest() { var o = $('#rest'); if (o) o.remove(); restUI(); }
  function nextHint() {
    var a = S.active; if (!a) return '';
    var tg = a.after != null ? a.after : a.cur, it = a.items[tg], ci = it ? curSetIdx(it) : -1;
    if (it && ci < 0 && tg === a.cur) { var nj = nextPendingIdx(a, a.cur); if (nj >= 0) { tg = nj; it = a.items[nj]; ci = curSetIdx(it); } }
    if (it && ci >= 0) return 'Siguiente: ' + (tg !== a.cur ? aliasOf(it.exId) + ' · ' : '') + (it.sets[ci].wu ? 'calentamiento' : 'serie ' + it.sets.slice(0, ci + 1).filter(function (x) { return !x.wu; }).length) + ' · ' + wFmt(it.exId, it.sets[ci].w) + ' kg × ' + it.sets[ci].r;
    for (var j = a.cur + 1; j < a.items.length; j++) if (curSetIdx(a.items[j]) >= 0) return 'Siguiente: ' + exName(a.items[j].exId);
    return 'Pesas terminadas. Toca cardio.';
  }
  function tick() {
    var a = S.active;
    var clk = $('#clk'); if (clk && a) clk.textContent = clock(Date.now() - a.inicio);
    if (!a || !a.restEnd) return;
    var rem = a.restEnd - Date.now();
    restUI();
    if (route.r === 'entreno' && !a.restMin && !$('#rest')) showRest();
    if (route.r !== 'entreno' || a.restMin) hideRestOverlayOnly();
    var t = $('#restTxt'), r = $('#restRing'), tot = $('#restTot');
    if (t) t.textContent = mmss(Math.max(0, rem) / 1000);
    if (tot) tot.textContent = 'de ' + mmss(a.restTotal);
    if (r) r.style.strokeDashoffset = Math.min(1, Math.max(0, 1 - rem / (a.restTotal * 1000))).toFixed(4);
    if (rem <= 0 && !a.restDone) {
      a.restDone = true; setActive(a);
      if (document.visibilityState === 'visible') beep();
      var o = $('#rest'), l = $('#restLbl');
      if (l) { l.textContent = '¡A por la siguiente!'; l.style.color = '#FF6B2C'; }
      if (o) o.classList.add('flash');
      setTimeout(function () { var b = S.active; if (b && b.restDone && b.restEnd) { b.restEnd = 0; setActive(b); hideRest(); afterRest(); } }, 2600);
    }
  }
  function hideRestOverlayOnly() { var o = $('#rest'); if (o) o.remove(); }
  function showPR(pr) {
    var o = $('#pr'); if (o) o.remove();
    o = document.createElement('button'); o.id = 'pr'; o.className = 'prb'; o.setAttribute('role', 'status');
    o.setAttribute('aria-label', 'Nuevo récord: ' + pr.name + ', ' + kg(pr.w) + ' kilos por ' + pr.r + '. ' + pr.diff + ' ' + pr.what + '. Toca para cerrar');
    o.innerHTML = '<span class="prico">' + ic('trophy', 24) + '</span><span class="col" style="gap:1px;flex:1;min-width:0;text-align:left"><span class="label" style="color:var(--gold);font-size:11px">Nuevo récord · ' + esc(aliasOf(pr.id)) + '</span><b class="u" style="font-size:19px;font-weight:700;white-space:nowrap">' + kg(pr.w) + ' kg × ' + pr.r + '</b><span class="small" style="color:#FFE7A8">' + esc(pr.diff + ' ' + pr.what) + '</span></span><i class="prbar"></i>';
    document.body.appendChild(o);
    var close = function () { if (!o.isConnected || o.classList.contains('out')) return; o.classList.add('out'); setTimeout(function () { o.remove(); }, reduceMotion ? 0 : 200); };
    o.addEventListener('click', close);
    setTimeout(close, 2500 + (reduceMotion ? 0 : 450));
  }
  // la celebración grande, al terminar la sesión
  function celebrate(sid) {
    var prs = alive(S.set).filter(function (x) { return x.sesion_id === sid && +x.record === 1 && !+x.calentamiento; });
    if (!prs.length) return;
    var best = {}; prs.forEach(function (p) { var b = best[p.ejercicio_id]; if (!b || +p.e1rm > +b.e1rm || +p.peso > +b.peso) best[p.ejercicio_id] = p; });
    var list = Object.keys(best).map(function (k) { return best[k]; });
    var o = document.createElement('div'); o.className = 'overlay'; o.id = 'cel'; o.style.background = 'rgba(11,11,13,.94)'; o.style.overflow = 'hidden';
    var cols = ['#FF6B2C', '#FFB088', '#F4F4F5', '#FFD166', '#5AB0FF', '#FF8A57'], conf = '';
    if (!reduceMotion) for (var i = 0; i < 64; i++) conf += '<span class="conf" style="left:' + (Math.random() * 100).toFixed(1) + '%;width:' + (6 + Math.random() * 6).toFixed(0) + 'px;height:' + (10 + Math.random() * 10).toFixed(0) + 'px;background:' + cols[i % 6] + ';animation-duration:' + (2.2 + Math.random() * 1.8).toFixed(2) + 's;animation-delay:' + (Math.random() * 0.7).toFixed(2) + 's"></span>';
    o.innerHTML = conf + '<div class="pop" style="width:112px;height:112px;border-radius:36px;background:var(--gold);color:var(--bg);display:flex;align-items:center;justify-content:center;animation:pop .55s cubic-bezier(.2,.9,.3,1.2) both">' + ic('trophy', 56, 'stroke-width:1.8') + '</div>' +
      '<span class="label up" style="color:var(--gold);letter-spacing:.18em;animation-delay:.15s">' + (prs.length === 1 ? 'Récord de hoy' : prs.length + ' récords hoy') + '</span>' +
      '<div class="col up" style="gap:8px;width:100%;max-width:420px;animation-delay:.25s">' + list.slice(0, 4).map(function (p) { return '<div class="card row" style="padding:12px 16px;justify-content:space-between"><b style="font-size:15px;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(aliasOf(p.ejercicio_id)) + '</b><span class="u" style="font-size:17px;font-weight:700;white-space:nowrap">' + wFmt(p.ejercicio_id, +p.peso) + ' kg × ' + p.reps + '</span></div>'; }).join('') + (list.length > 4 ? '<span class="small mut" style="text-align:center">y ' + (list.length - 4) + ' más en el resumen</span>' : '') + '</div>' +
      '<button class="btn up" id="celOk" style="max-width:420px;animation-delay:.4s">Ver resumen</button>';
    document.body.appendChild(o);
    $('#celOk').addEventListener('click', function () { o.remove(); });
  }

  /* ───────────────────────── acciones ───────────────────────── */
  var A = {
    closeSheet: closeSheet,
    nav: function (d) { go(d.h); },
    pickToday: function (d) { UI.today = d.t; rerender(); },
    start: function () {
      unlockAudio();
      if (!S.active) startSession(UI.today || nextType());
      go('#/entreno');
    },
    fab: function () {
      if (S.active && S.active.restEnd) return A.restMax();
      if (S.active) return go('#/entreno');
      if (route.r !== 'hoy') return go('#/hoy');
      view.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var b = $('button[data-a=start]'); if (b) { b.classList.remove('nudge'); void b.offsetWidth; b.classList.add('nudge'); }
    },
    exPick: function (d) { var a = S.active; UI.showDone = false; a.cur = +d.i; setActive(a); render({ noVT: true }); },
    exPrev: function () { var a = S.active; if (a.cur > 0) { a.cur--; setActive(a); render({ noVT: true }); } },
    exNext: function () { var a = S.active; if (a.cur < a.items.length - 1) { a.cur++; setActive(a); render({ noVT: true }); } },
    w: function (d) { editCur('w', +d.v); }, r: function (d) { editCur('r', +d.v); },
    wType: function () {
      var a = S.active, it = a.items[a.cur], ci = curSetIdx(it); if (ci < 0) return;
      numberSheet(cap(unitOf(it.exId)) + (modoOf(it.exId) === 'corporal' ? ' (negativo si es asistida)' : ''), it.sets[ci].w, function (v) { if (it.sets[ci].wu) it.sets[ci].w = v; else for (var j = ci; j < it.sets.length; j++) if (!it.sets[j].done && !it.sets[j].wu) it.sets[j].w = v; setActive(a); rerender(); }, modoOf(it.exId) === 'corporal' ? {} : { min: 0 });
    },
    rType: function () {
      var a = S.active, it = a.items[a.cur], ci = curSetIdx(it); if (ci < 0) return;
      numberSheet('Repeticiones', it.sets[ci].r, function (v) { it.sets[ci].r = Math.round(v); setActive(a); rerender(); }, { min: 0 });
    },
    done: function () {
      unlockAudio(); wakeOn();
      var a = S.active, it = a.items[a.cur], ci = curSetIdx(it); if (ci < 0) return;
      var snap = JSON.stringify(a), s = it.sets[ci]; s.done = true; s.t = Date.now();
      var pr = s.wu ? null : checkPR(a, it, ci, s);
      if (pr) { s.pr = pr.lvl; pr.name = exName(it.exId); pr.id = it.exId; pr.unit = unitOf(it.exId); }
      // ¿a dónde va después? superseries: A1 → A2 sin descanso; A2 → descanso y vuelta a A1
      var rest = s.wu ? 60 : it.rest, jump = null, p = s.wu ? -1 : partnerIdx(a, a.cur);
      if (p >= 0 && workPending(a.items[p]) > 0) {
        if (a.cur < p) { jump = p; rest = 0; }
        else { a.after = p; rest = Math.max(it.rest, a.items[p].rest); }
      } else a.after = null;
      if (jump != null) a.cur = jump;
      var doneItem = jump != null ? a.items.indexOf(it) : a.cur;
      UI.justDone = { item: doneItem, set: ci, t: Date.now() };
      setActive(a); rerender();
      var wn = it.sets.slice(0, ci + 1).filter(function (x) { return !x.wu; }).length;
      var msg = (s.wu ? 'Calentamiento hecho' : 'Serie ' + wn + ' hecha') + (pr && pr.lvl === 2 ? ' · mejor marca' : '') + (jump != null ? ' · ahora ' + aliasOf(a.items[jump].exId) : '');
      showUndo(msg, function () { var b = JSON.parse(snap); b.restEnd = 0; b.restDone = false; b.restMin = false; setActive(b); hideRest(); var o = $('#pr'); if (o) o.remove(); UI.justDone = null; render({ noVT: true }); });
      var stillDone = function () { var b = S.active; return b && b.items[doneItem] && b.items[doneItem].sets[ci] && b.items[doneItem].sets[ci].done; };
      // el descanso arranca siempre; un récord sale encima sin pararlo
      setTimeout(function () {
        if (!stillDone()) return;
        if (rest > 0) startRest(rest);
        if (pr && pr.lvl === 1) showPR(pr);
      }, 450);
    },
    warmup: function () {
      var a = S.active, it = a.items[a.cur], e = ex(it.exId), bar = +e.barra || 20;
      closeSheet();
      if (it.sets.some(function (x) { return x.done || x.wu; })) return;
      var w = (it.sets.filter(function (x) { return !x.wu; })[0] || { w: 0 }).w, list = warmupPlan(w, bar);
      if (!list.length) return toast('Con ' + kg(w) + ' kg basta con la barra sola');
      it.sets = list.map(function (x) { return { w: x.w, r: x.r, done: false, pr: 0, wu: true }; }).concat(it.sets); setActive(a); rerender();
      toast(list.length + ' series de calentamiento añadidas');
    },
    stallDrop: function () {
      var a = S.active, it = a.items[a.cur], inc = +ex(it.exId).incremento || 2.5;
      it.sets.forEach(function (x) { if (!x.done && !x.wu) x.w = modoOf(it.exId) === 'corporal' ? x.w - inc : roundStep(x.w * 0.9, inc); });
      CFG.resets[it.exId] = Date.now(); saveCfg(); it.reset = 1; setActive(a); closeSheet(); rerender(); toast('Bajado un 10 %. A reconstruir.');
    },
    stallRange: function () {
      var a = S.active, it = a.items[a.cur], nr = newRange(it);
      it.rmin = nr[0]; it.rmax = nr[1];
      it.sets.forEach(function (x) { if (!x.done && !x.wu) x.r = nr[0]; });
      var r = S.rut[it.rid]; if (r) { r.reps_min = nr[0]; r.reps_max = nr[1]; put('rut', r); }
      CFG.resets[it.exId] = Date.now(); saveCfg(); it.reset = 1; setActive(a); closeSheet(); rerender(); toast('Nuevo rango: ' + nr[0] + '–' + nr[1] + ' reps');
    },
    lastHist: function () {
      var a = S.active, id = a.items[a.cur].exId, h = (idx().hist[id] || []).slice(-3).reverse();
      sheet('<h3 class="u h2">' + esc(aliasOf(id)) + '</h3><p class="small mut" style="margin:0">Últimas ' + h.length + ' sesiones</p>' + (h.length ? h.map(function (x) { var se = idx().sesById[x.sid]; return '<div class="card col" style="gap:6px;padding:14px"><div class="row" style="justify-content:space-between"><b>' + cap(shortDate(x.t)) + (x.dl ? ' · descarga' : '') + '</b><span class="small mut">' + (x.e1 ? '1RM ' + fmt(x.e1, 1).replace(',0', '') + ' kg' : '') + '</span></div><div class="row" style="gap:6px;flex-wrap:wrap">' + x.sets.map(function (st) { return '<span class="pill" style="color:var(--tx);font-size:13px;padding:6px 10px">' + wFmt(id, st.peso) + ' × ' + st.reps + '</span>'; }).join('') + '</div>' + (se && se.nota ? '<span class="small mut">“' + esc(se.nota) + '”</span>' : '') + '</div>'; }).join('') : '<p class="mut">Sin historial todavía.</p>') + '<button class="btn dark" data-a="closeSheet">Cerrar</button>');
    },
    reorder: function () { closeSheet(); reorderSheet(); },
    setEdit: function (d) {
      var a = S.active, it = a.items[a.cur], s = it.sets[+d.i];
      sheet('<h3 class="u h2">Serie ' + (+d.i + 1) + '</h3><div class="grid2"><div class="field"><label for="eW">Peso (kg)</label><input class="inp u" id="eW" inputmode="decimal" value="' + kg(s.w) + '"></div><div class="field"><label for="eR">Reps</label><input class="inp u" id="eR" inputmode="numeric" value="' + s.r + '"></div></div><button class="btn" data-a="setSave" data-i="' + d.i + '">Guardar</button><button class="btn dark" data-a="setUndo" data-i="' + d.i + '">Desmarcar serie</button>');
    },
    setSave: function (d) { var a = S.active, s = a.items[a.cur].sets[+d.i]; s.w = num($('#eW').value); s.r = Math.round(num($('#eR').value)); s.pr = 0; closeSheet(); setActive(a); rerender(); },
    setUndo: function (d) { var a = S.active, s = a.items[a.cur].sets[+d.i]; s.done = false; s.pr = 0; closeSheet(); setActive(a); rerender(); },
    addSet: function () { var a = S.active, it = a.items[a.cur], l = it.sets.filter(function (x) { return !x.wu; }).pop() || { w: 0, r: it.rmin }; it.sets.push({ w: l.w, r: l.r, done: false, pr: 0 }); setActive(a); rerender(); },
    remSet: function () { var a = S.active, it = a.items[a.cur]; for (var i = it.sets.length - 1; i >= 0; i--) if (!it.sets[i].done) { it.sets.splice(i, 1); break; } setActive(a); rerender(); },
    note: function (d) {
      var e = ex(d.id);
      sheet('<h3 class="u h2">Nota de la máquina</h3><p class="small mut" style="margin:0">' + esc(e.nombre) + '</p><textarea class="inp" id="noteIn" rows="3" placeholder="Ej.: asiento 4, respaldo 2">' + esc(e.nota || '') + '</textarea><button class="btn" data-a="noteSave" data-id="' + esc(d.id) + '">Guardar nota</button>', function (sh) { setTimeout(function () { $('#noteIn', sh).focus(); }, 60); });
    },
    noteSave: function (d) { var e = S.ex[d.id]; if (e) { e.nota = $('#noteIn').value.trim(); put('ex', e); } closeSheet(); rerender(); },
    exMenu: function () {
      sheet('<h3 class="u h2">Opciones</h3><button class="lrow" data-a="reorder">' + ic('list') + '<span style="flex:1;font-weight:800">Reordenar ejercicios</span></button><button class="lrow" data-a="libOpen" data-mode="swap">' + ic('swap') + '<span style="flex:1;font-weight:800">Cambiar por otro ejercicio hoy</span></button><button class="lrow" data-a="libOpen" data-mode="add">' + ic('plus') + '<span style="flex:1;font-weight:800">Añadir ejercicio a la sesión</span></button><button class="lrow" data-a="exRemove">' + ic('trash') + '<span style="flex:1;font-weight:800">Quitar de la sesión de hoy</span></button><button class="lrow" data-a="discard" style="color:#FF8A8D">' + ic('x') + '<span style="flex:1;font-weight:800">Descartar entreno</span></button>');
    },
    exRemove: function () { var a = S.active; closeSheet(); if (a.items.length <= 1) return toast('Debe quedar al menos un ejercicio'); var snap = JSON.stringify(a), nm = exName(a.items[a.cur].exId); a.items.splice(a.cur, 1); a.cur = Math.min(a.cur, a.items.length - 1); setActive(a); render({ noVT: true }); showUndo(shortName(nm) + ' quitado', function () { setActive(JSON.parse(snap)); render({ noVT: true }); }); },
    discard: function () { closeSheet(); confirmSheet('¿Descartar entreno?', 'Se borrará la sesión en curso y no se guardará nada.', 'Descartar', function () { setActive(null); hideRest(); wakeOff(); go('#/hoy'); }, true); },
    libOpen: function (d) { closeSheet(); libSheet(d.mode, d.day); },
    restAdd: function (d) { var a = S.active; if (!a) return; var add = +d.s * 1000; a.restEnd = Math.max(Date.now(), a.restEnd + add); if (add > 0) { a.restTotal = Math.max(a.restTotal, Math.ceil((a.restEnd - Date.now()) / 1000)); a.restDone = false; var o = $('#rest'); if (o) o.classList.remove('flash'); var l = $('#restLbl'); if (l) { l.textContent = 'Descanso'; l.style.color = ''; } } setActive(a); tick(); },
    restMin: function () { var a = S.active; if (!a) return; a.restMin = true; setActive(a); hideRestOverlayOnly(); tick(); },
    restMax: function () { var a = S.active; if (!a) return; if (!a.restEnd) return go('#/entreno'); a.restMin = false; setActive(a); if (route.r !== 'entreno') go('#/entreno'); else { showRest(); tick(); } },
    restSkip: function () { var a = S.active; if (!a) return; a.restEnd = 0; setActive(a); hideRest(); afterRest(); },
    cType: function (d) { var a = S.active; a.cardio.tipo = d.t; var lc = lastOfCardio(d.t); a.cardio.dist = lc ? +lc.cardio_dist : 0; a.cardio.nivel = lc ? +lc.cardio_nivel : 0; setActive(a); rerender(); },
    cMin: function (d) { var a = S.active; a.cardio.min = Math.max(0, a.cardio.min + +d.v); setActive(a); rerender(); },
    cDist: function (d) { var a = S.active, st = CARDIO[a.cardio.tipo].dStep; a.cardio.dist = Math.max(0, Math.round((a.cardio.dist + +d.v * st) * 10) / 10); setActive(a); rerender(); },
    cLvl: function (d) { var a = S.active; a.cardio.nivel = Math.max(0, a.cardio.nivel + +d.v); setActive(a); rerender(); },
    cDistType: function () { var a = S.active; numberSheet(CARDIO[a.cardio.tipo].dist, a.cardio.dist, function (v) { a.cardio.dist = v; setActive(a); rerender(); }); },
    finish: function (d) {
      var a = S.active; if (!a) return;
      var st = activeStats(), n = $('#sNota'); if (n) { a.nota = n.value; setActive(a); }
      var doFinish = function () { var sid = finishSession(d.c === '1'); go('#/resumen/' + sid); setTimeout(function () { celebrate(sid); }, 380); };
      if (!st.done) return confirmSheet('No hay series marcadas', 'Si terminas ahora la sesión se guarda vacía. ¿Seguro?', 'Guardar igualmente', doFinish);
      if (st.total - st.done > 0) return confirmSheet('Te quedan ' + (st.total - st.done) + ' series sin marcar', 'Se guardará solo lo que has hecho (' + st.done + ' series).', 'Terminar igualmente', doFinish);
      doFinish();
    },
    /* progreso */
    prog: function (d) { UI.prog = d.t; go('#/progreso/' + d.t); },
    metric: function (d) { UI.metric = d.t; rerender(); },
    bodyAdd: function () {
      var b = bodyRows(), l = b[b.length - 1] || {};
      sheet('<h3 class="u h2">Medidas de hoy</h3><div class="grid2"><div class="field"><label for="bW">Peso (kg)</label><input class="inp u" id="bW" inputmode="decimal" value="' + (l.peso ? kg(l.peso) : '') + '"></div><div class="field"><label for="bC">Cintura (cm)</label><input class="inp u" id="bC" inputmode="decimal" value="' + (l.cintura ? kg(l.cintura) : '') + '"></div></div><div class="field"><label for="bD">Fecha</label><input class="inp" type="date" id="bD" value="' + dayKey(Date.now()) + '"></div><p class="small mut" style="margin:0">Mídete siempre igual: en ayunas y la cintura a la altura del ombligo.</p><button class="btn" data-a="bodySave">Guardar</button>');
    },
    bodySave: function () {
      var w = num($('#bW').value), c = num($('#bC').value), dte = $('#bD').value || dayKey(Date.now());
      if (!w && !c) return toast('Pon al menos un valor');
      var ex_ = bodyRows().filter(function (b) { return b.fecha === dte; })[0];
      put('body', { id: ex_ ? ex_.id : uid(), fecha: dte, peso: w || (ex_ ? ex_.peso : ''), cintura: c || (ex_ ? ex_.cintura : '') });
      closeSheet(); toast('Medidas guardadas'); rerender();
    },
    bodyDel: function (d) { del('body', d.id); rerender(); showUndo('Medida borrada', function () { S.body[d.id].borrado = 0; put('body', S.body[d.id]); rerender(); }); },
    musWeek: function (d) { UI.musWeek = Math.min(0, UI.musWeek + +d.v); rerender(); },
    fMetric: function (d) { UI.fMetric = d.t; rerender(); },
    fRange: function (d) { UI.fRange = d.t; UI.fSel = -1; rerender(); },
    fDot: function (d) { UI.fSel = +d.i; rerender(); },
    incEdit: function (d) { var e = S.ex[d.id]; numberSheet('Salto de peso (kg)', e.incremento, function (v) { if (v > 0) { e.incremento = v; put('ex', e); rerender(); } }); },
    noteBlur: function () {},
    /* historial */
    calMove: function (d) { var m = UI.calMonth; m.setMonth(m.getMonth() + +d.v); UI.calSel = null; rerender(); },
    calPick: function (d) { UI.calSel = d.k; rerender(); },
    sesDel: function (d) { confirmSheet('¿Borrar sesión?', 'Se borra la sesión y todas sus series, también en la Sheet.', 'Borrar sesión', function () { var I = idx(), ids = (I.bySes[d.id] || []).map(function (s) { return s.id; }); ids.forEach(function (id) { del('set', id); }); del('ses', d.id); if (route.r === 'resumen') go('#/datos/historial'); else rerender(); showUndo('Sesión borrada', function () { ids.forEach(function (id) { S.set[id].borrado = 0; put('set', S.set[id], true); }); S.ses[d.id].borrado = 0; put('ses', S.ses[d.id]); render({ noVT: true }); }); }, true); },
    /* útiles */
    tool: function (d) { UI.tool = d.t; render({ noVT: true }); },
    wEq: function (d) { UI.wEq = d.t; rerender(); },
    wW: function (d) { UI.wW = Math.max(0, UI.wW + +d.v); rerender(); },
    wWType: function () { numberSheet('Peso de trabajo (kg)', UI.wW, function (v) { UI.wW = v; rerender(); }); },
    rmW: function (d) { UI.rmW = Math.max(0, UI.rmW + +d.v); rerender(); },
    rmR: function (d) { UI.rmR = Math.min(20, Math.max(1, UI.rmR + +d.v)); rerender(); },
    rmWType: function () { numberSheet('Peso (kg)', UI.rmW, function (v) { UI.rmW = v; rerender(); }); },
    /* rutina */
    rutDay: function (d) { UI.rutDay = d.t; render({ noVT: true }); },
    rutEdit: function (d) { rutSheet(d.id); },
    rutDel: function (d) { var r = S.rut[d.id]; del('rut', d.id); rerender(); showUndo(aliasOf(r.ejercicio_id) + ' quitado', function () { r.borrado = 0; put('rut', r); rerender(); }); },
    rutStep: function (d) { var r = S.rut[d.id]; var f = d.f, v = +d.v; r[f] = Math.max(f === 'descanso_s' ? 15 : 1, (+r[f] || 0) + v); if (f === 'reps_min' && r.reps_min > r.reps_max) r.reps_max = r.reps_min; if (f === 'reps_max' && r.reps_max < r.reps_min) r.reps_min = r.reps_max; put('rut', r); rutSheet(d.id); rerender(); },
    rutRir: function (d) { var r = S.rut[d.id]; r.rir = d.v; put('rut', r); rutSheet(d.id); },
    rutMove: function (d) {
      var r = S.rut[d.id], list = routine(r.dia), i = list.indexOf(r), j = i + +d.v; if (j < 0 || j >= list.length) return;
      list.splice(i, 1); list.splice(j, 0, r); list.forEach(function (x, k) { if (x.orden !== k + 1) { x.orden = k + 1; put('rut', x, true); } }); scheduleSync();
      rutSheet(d.id); rerender();
    },
    rutReset: function () { confirmSheet('¿Restablecer rutina?', 'Vuelve a la rutina PPL por defecto. Tu historial no se toca.', 'Restablecer', function () { alive(S.rut).forEach(function (r) { del('rut', r.id); }); DEFAULTS.rutina.forEach(function (r) { var id = 'r-' + r[0] + '-' + r[1]; put('rut', { id: id, dia: r[0], orden: r[1], ejercicio_id: r[2], series: r[3], reps_min: r[4], reps_max: r[5], rir: r[6], descanso_s: r[7], borrado: 0 }, true); }); scheduleSync(); rerender(); }, true); },
    libGroup: function (d) { UI.libGroup = d.g; libRefresh(); },
    libPick: function (d) { libPicked(d.id); },
    exNew: function (d) { exSheet(null, d.mode); },
    exSave: function (d) {
      var n = $('#xN').value.trim(); if (!n) return toast('Ponle nombre');
      var e = d.id ? S.ex[d.id] : { id: 'x-' + uid(), propio: 1, nota: '' };
      e.nombre = n; e.alias = $('#xAl').value.trim(); e.grupo = $('#xG').value; e.equipo = $('#xE').value.trim(); e.incremento = num($('#xI').value) || 2.5; e.modo = $('#xM').value; e.barra = num($('#xB').value); e.aislamiento = $('#xA').checked ? 1 : 0;
      put('ex', e); closeSheet(); toast('Ejercicio guardado');
      if (d.mode && d.mode !== 'lib') libPicked(e.id); else rerender();
    },
    /* ajustes */
    cfgSave: function () {
      var url = $('#cUrl').value.trim(), tok = $('#cTok').value.trim();
      if (!/^https:\/\/script\.google(usercontent)?\.com\//.test(url) && !(location.hostname === 'localhost' && /^http:\/\/localhost/.test(url))) return toast('La URL debe ser la de la aplicación web de Apps Script');
      if (!tok) return toast('Falta el token');
      CFG.url = url; CFG.token = tok; saveCfg();
      var btn = $('#cfgBtn'); if (btn) { btn.disabled = true; btn.textContent = 'Probando conexión…'; }
      api('ping').then(function (j) {
        var wasDemo = S.mode === 'demo';
        if (wasDemo) { ls('rf:mode', 'real'); loadAll(); }
        toast('Conectado a ' + (j.nombre || 'la Sheet'));
        return pull(false).then(function (n) {
          // subir lo local que la Sheet aún no tiene
          ['ses', 'set', 'body', 'ex', 'rut'].forEach(function (c) { alive(S[c]).forEach(function (r) { if (+r.actualizado > 1 && !S.outbox[TABLES[c] + ':' + r.id]) { S.outbox[TABLES[c] + ':' + r.id] = r; } }); });
          save('outbox'); scheduleSync(200);
          render();
        });
      }).catch(function (e) { toast(e.message || 'No se pudo conectar'); if (btn) { btn.disabled = false; btn.textContent = 'Guardar y conectar'; } });
    },
    syncNow: function () {
      if (!configured()) return toast('Conecta primero tu Sheet');
      toast('Sincronizando…');
      syncNow().then(function () { return pull(false); }).then(function () { toast('Todo al día'); render({ still: true }); }).catch(function (e) { toast(e.message || 'Sin conexión. Se reintentará solo.'); rerender(); });
    },
    restore: function () { confirmSheet('¿Restaurar desde la Sheet?', 'Se reemplazan los datos del móvil por los de la Sheet. Lo que esté pendiente de subir se perderá.', 'Restaurar', function () { S.outbox = {}; save('outbox'); pull(true).then(function () { toast('Datos restaurados'); render(); }).catch(function (e) { toast(e.message); }); }, true); },
    goal: function (d) { CFG.goal = Math.min(7, Math.max(1, CFG.goal + +d.v)); saveCfg(); rerender(); },
    sound: function () { CFG.sound = !CFG.sound; saveCfg(); if (CFG.sound) { unlockAudio(); beep(); } rerender(); },
    toDemo: function () { confirmSheet('¿Ver la demo?', 'Cambia a datos de ejemplo. Tus datos reales no se tocan y vuelves con «Usar mis datos».', 'Ver demo', function () { ls('rf:mode', 'demo'); loadAll(); go('#/hoy'); }); },
    toReal: function () { ls('rf:mode', 'real'); loadAll(); toast('Usando tus datos'); go('#/hoy'); syncBoot(); },
    demoReset: function () { ['ex', 'rut', 'ses', 'set', 'body', 'outbox', 'active', 'generated'].forEach(function (k) { ls('rfd:' + k, null); }); loadAll(); toast('Demo regenerada'); go('#/hoy'); },
    exportJson: function () {
      var data = { app: 'RAYOFIT', version: VERSION, fecha: new Date().toISOString(), ex: S.ex, rut: S.rut, ses: S.ses, set: S.set, body: S.body };
      var blob = new Blob([JSON.stringify(data)], { type: 'application/json' }), a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'rayofit-copia-' + dayKey(Date.now()) + '.json'; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    },
    importJson: function () { var i = $('#impFile'); if (i) i.click(); },
    wipe: function () { confirmSheet('¿Borrar datos del móvil?', 'Borra todo lo guardado en este iPhone (modo actual). La Sheet no se toca: puedes restaurar después.', 'Borrar', function () { ['ex', 'rut', 'ses', 'set', 'body', 'outbox', 'active'].forEach(function (k) { ls(key(k), null); }); loadAll(); toast('Datos locales borrados'); go('#/hoy'); }, true); },
    story: function (d) { go('#/historias/' + d.m); }
  };
  function editCur(f, v) {
    var a = S.active, it = a.items[a.cur], ci = curSetIdx(it); if (ci < 0) return;
    if (f === 'w') { var corp = modoOf(it.exId) === 'corporal', nv = Math.round((it.sets[ci].w + v) * 100) / 100; if (!corp) nv = Math.max(0, nv); if (it.sets[ci].wu) it.sets[ci].w = nv; else for (var j = ci; j < it.sets.length; j++) if (!it.sets[j].done && !it.sets[j].wu) it.sets[j].w = nv; }
    else it.sets[ci].r = Math.max(0, it.sets[ci].r + v);
    setActive(a); rerender();
  }
  function lastOfCardio(t) { var s = idx().ses.slice().reverse(); for (var i = 0; i < s.length; i++) if (s[i].cardio_tipo === t) return s[i]; return null; }

  /* ───────────────────────── biblioteca (sheet) ───────────────────────── */
  var libCtx = null;
  function libSheet(mode, day) {
    libCtx = { mode: mode, day: day }; UI.libQ = '';
    if (S.active && (mode === 'swap')) UI.libGroup = ex(S.active.items[S.active.cur].exId).grupo;
    sheet('<div class="row" style="justify-content:space-between"><h3 class="u h2">' + (mode === 'swap' ? 'Cambiar por…' : 'Biblioteca') + '</h3><button class="iconbtn" data-a="closeSheet" aria-label="Cerrar">' + ic('x') + '</button></div>' +
      '<label class="inp row" style="gap:10px">' + ic('search', 18, 'color:var(--mut)') + '<input id="libQ" type="search" placeholder="Buscar ejercicio o máquina" aria-label="Buscar" style="flex:1;border:0;background:transparent;outline:none;font-weight:600"></label>' +
      '<div class="hscroll" id="libG"></div><div id="libL" style="min-height:300px"></div><button class="btn dark" data-a="exNew" data-mode="' + mode + '">' + ic('plus') + 'Crear ejercicio propio</button>', function (sh) {
      $('#libQ', sh).addEventListener('input', function (e) { UI.libQ = e.target.value; libRefresh(); });
    });
    libRefresh();
  }
  function libRefresh() {
    var g = $('#libG'), l = $('#libL'); if (!g || !l) return;
    g.innerHTML = Object.keys(GROUPS).map(function (k) { return '<button class="chip' + (UI.libGroup === k && !UI.libQ ? ' on' : '') + '" style="height:38px;border-radius:999px" data-a="libGroup" data-g="' + k + '">' + GROUPS[k] + '</button>'; }).join('');
    var q = UI.libQ.trim().toLowerCase();
    var list = alive(S.ex).filter(function (e) { return q ? (e.nombre + ' ' + e.equipo + ' ' + GROUPS[e.grupo]).toLowerCase().indexOf(q) >= 0 : e.grupo === UI.libGroup; }).sort(function (a, b) { return a.nombre.localeCompare(b.nombre, 'es'); });
    l.innerHTML = list.length ? list.map(function (e) {
      var h = idx().hist[e.id];
      return '<button class="lrow" style="padding:10px 2px" data-a="libPick" data-id="' + esc(e.id) + '">' + thumb(e.id, 56, 42) + '<span style="flex:1;display:flex;flex-direction:column;gap:2px;min-width:0"><span style="font-size:15px;font-weight:800">' + esc(e.nombre) + '</span><span class="small mut">' + GROUPS[e.grupo] + ' · ' + esc(e.equipo || '—') + (h ? ' · ' + h.length + ' sesiones' : '') + '</span></span><span class="ico" style="width:36px;height:36px;background:var(--accSoft);color:var(--acc)">' + ic(libCtx && libCtx.mode === 'lib' ? 'right' : 'plus', 18) + '</span></button>';
    }).join('') : '<p class="mut small" style="text-align:center;padding:24px 0">Nada con ese nombre. Créalo abajo.</p>';
  }
  function libPicked(id) {
    var m = libCtx ? libCtx.mode : 'lib';
    if (m === 'lib') { closeSheet(); go('#/ficha/' + id); return; }
    if (m === 'swap' || m === 'add') {
      var a = S.active, cur = a.items[a.cur];
      var it = buildItem(id, { ejercicio_id: id, series: cur.series, reps_min: cur.rmin, reps_max: cur.rmax, rir: cur.rir, descanso_s: cur.rest });
      if (m === 'swap') { it.ss = cur.ss; it.rid = ''; if (cur.sets.some(function (s) { return s.done && !s.wu; })) { cur.ss = ''; a.items.splice(a.cur + 1, 0, it); a.cur++; } else a.items[a.cur] = it; }
      else { a.items.splice(a.cur + 1, 0, it); a.cur++; }
      setActive(a); closeSheet(); render({ noVT: true }); return;
    }
    if (m === 'rut') {
      var day = libCtx.day, list = routine(day);
      put('rut', { id: 'r-' + uid(), dia: day, orden: list.length + 1, ejercicio_id: id, series: 3, reps_min: 8, reps_max: 12, rir: '1', descanso_s: 90 });
      closeSheet(); toast(aliasOf(id) + ' añadido a ' + TYPE[day].n); rerender();
    }
  }
  function exSheet(id, mode) {
    var e = id ? S.ex[id] : { nombre: UI.libQ || '', grupo: UI.libGroup, equipo: '', incremento: 2.5 };
    closeSheet();
    sheet('<h3 class="u h2">' + (id ? 'Editar ejercicio' : 'Nuevo ejercicio') + '</h3><div class="field"><label for="xN">Nombre</label><input class="inp" id="xN" value="' + esc(e.nombre) + '" placeholder="Ej.: Press inclinado en máquina"></div><div class="field"><label for="xAl">Nombre corto (para pestañas y listas)</label><input class="inp" id="xAl" maxlength="18" value="' + esc(e.alias || '') + '" placeholder="Ej.: Inclinado máq."></div><div class="grid2"><div class="field"><label for="xG">Grupo</label><select class="inp" id="xG">' + Object.keys(GROUPS).map(function (k) { return '<option value="' + k + '"' + (k === e.grupo ? ' selected' : '') + '>' + GROUPS[k] + '</option>'; }).join('') + '</select></div><div class="field"><label for="xI">Salto (kg)</label><input class="inp" id="xI" inputmode="decimal" value="' + kg(e.incremento) + '"></div></div><div class="field"><label for="xE">Máquina o equipo</label><input class="inp" id="xE" value="' + esc(e.equipo || '') + '" placeholder="Technogym, polea, mancuernas…"></div><div class="grid2"><div class="field"><label for="xM">El peso es…</label><select class="inp" id="xM">' + [['', 'Total'], ['mancuerna', 'Por mancuerna'], ['lado', 'Por lado'], ['corporal', 'Lastre (peso corporal)']].map(function (o) { return '<option value="' + o[0] + '"' + ((e.modo || '') === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div><div class="field"><label for="xB">Barra (kg, 0 = no)</label><input class="inp" id="xB" inputmode="decimal" value="' + kg(+e.barra || 0) + '"></div></div><label class="row" style="gap:10px;font-weight:700;padding:4px 0"><input type="checkbox" id="xA" style="width:22px;height:22px;accent-color:#FF6B2C"' + (+e.aislamiento ? ' checked' : '') + '>Ejercicio de aislamiento (sin 1RM estimado)</label><button class="btn" data-a="exSave" data-id="' + esc(id || '') + '" data-mode="' + (mode || 'lib') + '">Guardar</button>');
  }
  function rutSheet(id) {
    var r = S.rut[id], e = ex(r.ejercicio_id);
    var st = function (label, f, v, unit, stepv) { return '<div class="row" style="justify-content:space-between;padding:8px 0"><span style="font-weight:700">' + label + '</span><div class="stepper"><button data-a="rutStep" data-id="' + id + '" data-f="' + f + '" data-v="-' + stepv + '" aria-label="Menos">−</button><b>' + v + unit + '</b><button data-a="rutStep" data-id="' + id + '" data-f="' + f + '" data-v="' + stepv + '" aria-label="Más">+</button></div></div>'; };
    var html = '<h3 class="u h2">' + esc(e.nombre) + '</h3><p class="small mut" style="margin:0">' + GROUPS[e.grupo] + ' · ' + esc(e.equipo || '') + ' · saltos de ' + kg(e.incremento) + ' kg</p>' +
      st('Series', 'series', r.series, '', 1) + st('Reps mínimas', 'reps_min', r.reps_min, '', 1) + st('Reps máximas', 'reps_max', r.reps_max, '', 1) + st('Descanso', 'descanso_s', mmss(r.descanso_s), '', 15) +
      '<div class="row" style="justify-content:space-between;padding:8px 0"><span style="font-weight:700">RIR</span><div class="mini-seg">' + ['0', '1', '1–2', '2', '3'].map(function (v) { return '<button class="' + (String(r.rir).replace('-', '–') === v ? 'on' : '') + '" data-a="rutRir" data-id="' + id + '" data-v="' + v + '">' + v + '</button>'; }).join('') + '</div></div>' +
      '<div class="grid2"><button class="btn dark" data-a="rutMove" data-id="' + id + '" data-v="-1">' + ic('upc') + 'Subir</button><button class="btn dark" data-a="rutMove" data-id="' + id + '" data-v="1">' + ic('downc') + 'Bajar</button></div>' +
      (function () { var list = routine(r.dia), i = list.indexOf(r), nx = list[i + 1], pr = r.superserie ? list.filter(function (x) { return x !== r && x.superserie === r.superserie; })[0] : null; return r.superserie ? '<button class="btn dark" data-a="rutSS" data-id="' + id + '" data-v="off">' + ic('x', 18) + 'Quitar superserie con ' + esc(aliasOf(pr ? pr.ejercicio_id : '')) + '</button>' : (nx && !nx.superserie ? '<button class="btn dark" data-a="rutSS" data-id="' + id + '" data-v="on">' + ic('swap', 18) + 'Superserie con ' + esc(aliasOf(nx.ejercicio_id)) + '</button>' : ''); })() +
      '<div class="grid2"><button class="btn dark" data-a="exEdit" data-id="' + esc(e.id) + '">Editar ejercicio</button><a class="btn dark" href="#/ficha/' + esc(e.id) + '" data-a="closeSheet">Ver ficha</a></div>' +
      '<button class="btn danger" data-a="rutDelSheet" data-id="' + id + '">' + ic('trash') + 'Quitar de la rutina</button><button class="btn" data-a="closeSheet">Listo</button>';
    if (sheetOpen) { sheetOpen.sh.innerHTML = '<div class="grab"></div>' + html; } else sheet(html);
  }
  A.rutDelSheet = function (d) { closeSheet(); A.rutDel(d); };
  A.exInfo = exInfoAct;
  A.rutSS = function (d) {
    var r = S.rut[d.id], list = routine(r.dia);
    if (d.v === 'off') { var k = r.superserie; list.forEach(function (x) { if (x.superserie === k) { x.superserie = ''; put('rut', x, true); } }); scheduleSync(); }
    else {
      var nx = list[list.indexOf(r) + 1]; if (!nx) return;
      var used = {}; list.forEach(function (x) { if (x.superserie) used[x.superserie] = 1; });
      var L = 'ABCDEFGH'.split('').filter(function (c) { return !used[c]; })[0] || 'Z';
      r.superserie = L; nx.superserie = L; put('rut', r, true); put('rut', nx); toast('Superserie ' + L + ': el descanso empieza tras el segundo ejercicio');
    }
    rutSheet(d.id); rerender();
  };
  A.exEdit = function (d) { exSheet(d.id, 'lib'); };
  A.deload = function (d) {
    if (d.v === 'on') { var e = monday(Date.now()); e.setDate(e.getDate() + 7); CFG.deloadUntil = e.getTime(); toast('Semana de descarga hasta el domingo'); }
    else { CFG.deloadUntil = 0; toast('Descarga desactivada'); }
    saveCfg(); closeSheet(); rerender();
  };
  A.wsSeen = function (d) { CFG.wsSeen[d.k] = 1; saveCfg(); rerender(); };
  A.cfgStep = function (d) { var f = d.f, v = +d.v, lim = { musMin: [1, 30], musMax: [4, 40], cardioGoal: [0, 600] }[f]; CFG[f] = Math.min(lim[1], Math.max(lim[0], (+CFG[f] || 0) + v)); if (CFG.musMin > CFG.musMax) CFG.musMax = CFG.musMin; saveCfg(); rerender(); };
  /* editar sesiones pasadas */
  A.pSet = function (d) {
    var st = S.set[d.id]; if (!st) return;
    sheet('<h3 class="u h2">' + esc(aliasOf(st.ejercicio_id)) + ' · serie ' + st.serie + '</h3><p class="small mut" style="margin:0">' + unitOf(st.ejercicio_id) + (+st.calentamiento ? ' · calentamiento' : '') + '</p><div class="grid2"><div class="field"><label for="pW">Peso</label><input class="inp u" id="pW" inputmode="decimal" value="' + kg(st.peso) + '"></div><div class="field"><label for="pR">Reps</label><input class="inp u" id="pR" inputmode="numeric" value="' + st.reps + '"></div></div><button class="btn" data-a="pSetSave" data-id="' + esc(st.id) + '">Guardar</button><button class="btn danger" data-a="pSetDel" data-id="' + esc(st.id) + '">' + ic('trash') + 'Borrar serie</button>');
  };
  A.pSetSave = function (d) {
    var st = S.set[d.id], ses = S.ses[st.sesion_id], t = ses ? ses.inicio : Date.now();
    st.peso = num($('#pW').value); st.reps = Math.round(num($('#pR').value));
    st.carga = Math.round(cargaOf(st.ejercicio_id, st.peso, t) * 100) / 100;
    st.e1rm = +st.calentamiento || isIso(st.ejercicio_id) ? 0 : Math.round(e1rm(loadOf(st.ejercicio_id, st.peso, t), st.reps) * 10) / 10;
    put('set', st, true); recomputeSession(st.sesion_id); closeSheet(); toast('Serie corregida'); rerender();
  };
  A.pSetDel = function (d) { var st = S.set[d.id]; del('set', d.id); recomputeSession(st.sesion_id); closeSheet(); rerender(); showUndo('Serie borrada', function () { st.borrado = 0; put('set', st, true); recomputeSession(st.sesion_id); rerender(); }); };
  A.pNote = function (d) {
    var s = S.ses[d.id];
    sheet('<h3 class="u h2">Nota de la sesión</h3><textarea class="inp" id="pN" rows="3" placeholder="Dormí 5 h, rodilla rara…">' + esc(s.nota || '') + '</textarea><button class="btn" data-a="pNoteSave" data-id="' + esc(s.id) + '">Guardar</button>', function (sh) { setTimeout(function () { $('#pN', sh).focus(); }, 60); });
  };
  A.pNoteSave = function (d) { var s = S.ses[d.id]; s.nota = $('#pN').value.trim(); put('ses', s); closeSheet(); rerender(); };
  A.pCardio = function (d) {
    var s = S.ses[d.id];
    sheet('<h3 class="u h2">Cardio</h3><div class="field"><label for="pCt">Máquina</label><select class="inp" id="pCt"><option value="">Sin cardio</option>' + Object.keys(CARDIO).map(function (k) { return '<option value="' + k + '"' + (s.cardio_tipo === k ? ' selected' : '') + '>' + CARDIO[k].n + '</option>'; }).join('') + '</select></div><div class="grid3"><div class="field"><label for="pCm">Min</label><input class="inp" id="pCm" inputmode="numeric" value="' + (+s.cardio_min || '') + '"></div><div class="field"><label for="pCd">Distancia</label><input class="inp" id="pCd" inputmode="decimal" value="' + (+s.cardio_dist ? kg(s.cardio_dist) : '') + '"></div><div class="field"><label for="pCn">Nivel</label><input class="inp" id="pCn" inputmode="numeric" value="' + (+s.cardio_nivel || '') + '"></div></div><button class="btn" data-a="pCardioSave" data-id="' + esc(s.id) + '">Guardar</button>');
  };
  A.pCardioSave = function (d) { var s = S.ses[d.id]; s.cardio_tipo = $('#pCt').value; s.cardio_min = num($('#pCm').value); s.cardio_dist = num($('#pCd').value); s.cardio_nivel = num($('#pCn').value); put('ses', s); closeSheet(); rerender(); };

  /* reordenar ejercicios de la sesión (arrastrar) */
  function reorderSheet() {
    var a = S.active; if (!a) return;
    var H = 62;
    var html = '<div class="row" style="justify-content:space-between"><h3 class="u h2">Reordenar</h3><button class="btn" style="width:auto;height:44px;padding:0 18px;font-size:15px" data-a="closeSheet">Listo</button></div><p class="small mut" style="margin:0">Arrastra desde ⠿. Los hechos se quedan donde están si no los mueves.</p><div id="ro" style="position:relative;height:' + (a.items.length * H) + 'px">' +
      a.items.map(function (it, i) { var dn = curSetIdx(it) < 0; return '<div class="ro-row row" data-i="' + i + '" style="position:absolute;left:0;right:0;top:' + (i * H) + 'px;height:' + (H - 8) + 'px;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid var(--line);padding:0 6px 0 12px;transition:top .2s var(--ease);touch-action:none"><span class="num' + (i === a.cur ? ' on' : '') + '">' + (i + 1) + '</span><span style="flex:1;font-weight:800;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:' + (dn ? 'var(--mut)' : 'var(--tx)') + '">' + esc(aliasOf(it.exId)) + (it.ss ? ' <span class="pill" style="padding:2px 6px">SS ' + esc(it.ss) + '</span>' : '') + '</span><span class="ro-h" aria-label="Arrastrar" style="width:48px;height:48px;display:flex;align-items:center;justify-content:center;color:var(--mut);cursor:grab;font-size:22px">⠿</span></div>'; }).join('') + '</div>';
    var sh = sheet(html);
    var box = $('#ro', sh), drag = null;
    box.addEventListener('pointerdown', function (e) {
      var h = e.target.closest('.ro-h'); if (!h) return;
      var row = h.closest('.ro-row'); drag = { row: row, from: +row.dataset.i, y0: e.clientY, to: +row.dataset.i };
      row.style.transition = 'none'; row.style.zIndex = 5; row.style.background = '#26262B'; row.setPointerCapture && row.setPointerCapture(e.pointerId); e.preventDefault();
    });
    box.addEventListener('pointermove', function (e) {
      if (!drag) return; var dy = e.clientY - drag.y0, n = a.items.length;
      drag.row.style.top = (drag.from * H + dy) + 'px';
      var to = Math.max(0, Math.min(n - 1, Math.round((drag.from * H + dy) / H))); drag.to = to;
      $$('.ro-row', box).forEach(function (r) { var i = +r.dataset.i; if (r === drag.row) return; var pos = i; if (drag.from < to && i > drag.from && i <= to) pos = i - 1; if (drag.from > to && i < drag.from && i >= to) pos = i + 1; r.style.top = (pos * H) + 'px'; });
    });
    var end = function () {
      if (!drag) return; var f = drag.from, t = drag.to; drag = null;
      if (f !== t) { var curItem = a.items[a.cur], m = a.items.splice(f, 1)[0]; a.items.splice(t, 0, m); a.cur = a.items.indexOf(curItem); if (a.after != null) a.after = null; setActive(a); }
      reorderSheet(); render({ noVT: true });
    };
    box.addEventListener('pointerup', end); box.addEventListener('pointercancel', end);
  }

  /* ───────────────────────── vistas ───────────────────────── */
  var V = {};
  function header(title, back, right) {
    return '<div class="topbar">' + (back ? '<a class="iconbtn press" href="' + back + '" aria-label="Volver">' + ic('left', 22) + '</a>' : '') + (title ? '<h1 class="u h1" style="flex:1' + (back ? ';font-size:22px' : '') + '">' + title + '</h1>' : '<span style="flex:1"></span>') + (right || '') + '</div>';
  }
  function demoBanner() { return S.mode === 'demo' ? '<a class="banner up" href="#/ajustes">' + ic('target', 18) + '<span style="flex:1">Modo demo con datos de ejemplo. Toca para conectar tu Sheet.</span>' + ic('right', 16) + '</a>' : ''; }

  /* HOY */
  V.hoy = function () {
    var I = idx(), now = new Date(), a = S.active, type = UI.today || nextType(), T = TYPE[type];
    var wc = weekCounts(), thisW = wc[dayKey(monday(now))] || 0, stk = streak(), g = CFG.goal;
    var h = '<header class="up" style="display:flex;justify-content:space-between;align-items:flex-end;padding:0 4px 4px"><div class="col"><span class="label">' + DOWL[now.getDay()] + ' ' + now.getDate() + ' ' + MES[now.getMonth()] + '</span><h1 class="u h1">RAYOFIT</h1></div><div class="row" style="gap:6px">' + syncPill() + '<span class="pill" style="height:34px;padding:0 12px;font-size:13px;color:var(--tx);background:var(--card);border:1px solid var(--line)">' + ic('zap', 15, 'color:var(--acc)') + stk + ' sem.</span></div></header>' + demoBanner();
    if (a) {
      var st = activeStats(), AT = TYPE[a.tipo];
      h += '<section class="hero up" style="animation-delay:.05s"><div class="glow"></div><span class="label" style="color:var(--acc)">Entreno en curso</span><h2 class="u" style="margin:0;font-size:48px;font-weight:800;line-height:.95;color:' + AT.c + '">' + AT.n + '</h2><div class="grid3"><div class="stat"><b>' + Math.round((Date.now() - a.inicio) / 60000) + '′</b><span>en marcha</span></div><div class="stat"><b>' + st.done + '/' + st.total + '</b><span>series</span></div><div class="stat"><b>' + fmt(st.vol / 1000, 1) + 't</b><span>movidas</span></div></div><a class="btn cta" href="#/entreno">' + ic('zap', 20) + 'Continuar entreno</a></section>';
    } else {
      var rut = routine(type), sets = rut.reduce(function (s, r) { return s + +r.series; }, 0), mins = Math.round(rut.reduce(function (s, r) { return s + r.series * (+r.descanso_s + 45); }, 0) / 60), ls_ = lastSession();
      h += '<section class="hero up" style="animation-delay:.05s;border-color:' + T.c + '55"><div class="glow" style="background:radial-gradient(circle,' + T.c + '4d,transparent 70%)"></div>' +
        '<div class="row" style="justify-content:space-between;position:relative"><span class="label" style="color:' + T.c + '">' + (UI.today ? 'Elegido para hoy' : 'Toca hoy') + '</span><div class="row" style="gap:6px">' + TYPES.map(function (t) { return '<button class="pill' + (t === type ? ' on' : '') + '" style="height:32px;' + (t === type ? 'background:' + TYPE[t].c : '') + '" data-a="pickToday" data-t="' + t + '">' + TYPE[t].n + '</button>'; }).join('') + '</div></div>' +
        '<div class="col" style="position:relative;gap:6px"><h2 class="u" style="margin:0;font-size:52px;line-height:.95;font-weight:800;letter-spacing:-.02em">' + T.n + '</h2><p class="mut" style="margin:0;font-size:15px;font-weight:600">' + T.d + (ls_ ? ' · después de ' + TYPE[ls_.tipo].n.toLowerCase().replace(/^./, function (c) { return c.toUpperCase(); }) + ' (' + shortDate(ls_.inicio) + ')' : '') + '</p></div>' +
        '<div class="grid3" style="position:relative"><div class="stat"><b>' + rut.length + '</b><span>ejercicios</span></div><div class="stat"><b>' + sets + '</b><span>series</span></div><div class="stat"><b>~' + mins + '′</b><span>+ cardio</span></div></div>' +
        '<ul style="list-style:none;margin:0;padding:0;position:relative">' + rut.slice(0, 4).map(function (r) {
          var sg = suggestion(r), lt = lastText(r.ejercicio_id);
          return '<li class="li"><span class="row" style="gap:10px;min-width:0">' + thumb(r.ejercicio_id, 40, 30) + '<span style="font-size:14px;font-weight:700;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + esc(aliasOf(r.ejercicio_id)) + '</span></span><span class="row" style="gap:8px;flex-shrink:0"><span class="small mut">' + (lt ? esc(lt.split(' × ')[0]) : 'nuevo') + '</span>' + (sg ? '<span class="pill on" style="padding:3px 7px">' + ic('up', 12, 'stroke-width:3') + kg(sg) + '</span>' : '') + '</span></li>';
        }).join('') + (rut.length > 4 ? '<li class="li small mut">+ ' + (rut.length - 4) + ' ejercicios más · cardio al final</li>' : '') + '</ul>' +
        (deloadOn() ? '<div class="note" style="position:relative;background:rgba(90,176,255,.1);border-color:rgba(90,176,255,.35);color:#BFDFFF">' + ic('target', 18, 'color:var(--pull)') + '<span><b style="color:var(--tx)">Semana de descarga.</b> Pesos al 90 % y una serie menos hasta el domingo. Se quita en Mi rutina.</span></div>' : '') +
        (rut.length ? '<button class="btn cta" data-a="start" style="position:relative">' + ic('zap', 20) + (deloadOn() ? 'Empezar descarga' : 'Empezar entreno') + '</button>' : '<a class="btn" href="#/rutina">Añade ejercicios a ' + T.n + '</a>') +
        '</section>';
    }
    // tarjetas de aviso (si hay varias, en carrusel)
    var av = [];
    var m0 = monday(now), lw = new Date(m0); lw.setDate(lw.getDate() - 7);
    var lwk = dayKey(lw), lv = volWeek(lw), pw = new Date(lw); pw.setDate(pw.getDate() - 7);
    if ((now.getDay() === 1 || now.getDay() === 2) && !CFG.wsSeen[lwk] && lv.n) {
      var pv = volWeek(pw), dv = pv.v ? (lv.v - pv.v) / pv.v * 100 : null, mus = muscleSets(lw.getTime(), m0.getTime()), shortM = Object.keys(mus).filter(function (k) { return mus[k] > 0 && mus[k] < CFG.musMin; }), cw = cardioWeek(lw);
      av.push('<section class="card up col" style="animation-delay:.08s;gap:12px;border-color:rgba(255,255,255,.12)"><div class="row" style="justify-content:space-between"><span class="label">Tu semana pasada</span><button class="pill" style="height:32px;padding:0 12px" data-a="wsSeen" data-k="' + lwk + '">Visto</button></div>' +
        '<div class="grid3"><div class="stat"><b>' + lv.n + '/' + CFG.goal + '</b><span>sesiones</span></div><div class="stat"><b>' + fmt(lv.v / 1000, 1) + 't</b><span>' + (dv == null ? 'volumen' : (dv >= 0 ? '+' : '−') + fmt(Math.abs(dv)) + ' % vol.') + '</span></div><div class="stat"><b>' + cw + '′</b><span>cardio / ' + CFG.cardioGoal + '</span></div></div>' +
        (shortM.length ? '<span class="small mut" style="line-height:1.45">Por debajo de ' + CFG.musMin + ' series: ' + shortM.map(function (k) { return GROUPS[k]; }).join(', ') + '.</span>' : '') + '</section>');
    }
    var hasBody = bodyRows().some(function (b) { return parseDay(b.fecha) >= m0; });
    if (!hasBody && bodyRows().length) av.push('<button class="card up row press" style="animation-delay:.1s;text-align:left;border-color:rgba(255,107,44,.3)" data-a="bodyAdd"><span class="ico" style="background:var(--accSoft);color:var(--acc)">' + ic('target') + '</span><span class="col" style="flex:1;gap:2px"><b>Toca medirse esta semana</b><span class="small mut">Peso y cintura. En ayunas, siempre igual.</span></span>' + ic('plus', 20, 'color:var(--acc)') + '</button>');
    var stalled = []; alive(S.rut).forEach(function (r) { if (stalled.indexOf(r.ejercicio_id) < 0 && stall(r.ejercicio_id)) stalled.push(r.ejercicio_id); });
    if (stalled.length >= 3 && !deloadOn()) av.push('<section class="card up col" style="animation-delay:.12s;gap:10px;background:rgba(255,209,102,.07);border-color:rgba(255,209,102,.3)"><span class="row" style="gap:10px">' + ic('target', 20, 'color:var(--gold)') + '<b style="color:var(--gold)">' + stalled.length + ' ejercicios estancados</b></span><span class="small" style="line-height:1.45;color:#FFE7A8">' + stalled.slice(0, 4).map(function (x) { return esc(aliasOf(x)); }).join(', ') + (stalled.length > 4 ? '…' : '') + '. Cuando se atascan varios a la vez suele ser fatiga acumulada: una semana de descarga lo resetea.</span><button class="btn dark" style="height:48px;font-size:15px" data-a="deload" data-v="on">Activar semana de descarga</button></section>');
    if (av.length === 1) h += av[0];
    else if (av.length > 1) h += '<div class="col up" style="gap:8px;animation-delay:.08s"><div class="row" style="justify-content:space-between;padding:0 4px"><span class="label">' + av.length + ' avisos</span><span class="small mut" style="font-weight:700">desliza →</span></div><div class="hscroll snap" style="gap:10px;align-items:stretch">' + av.map(function (x) { return x.replace(/class="card up /, 'class="card ').replace(/animation-delay:[^;"]*;?/, ''); }).join('') + '</div></div>';
    // semana
    var bars = [], w = monday(now); w.setDate(w.getDate() - 7 * 9);
    for (var i = 0; i < 10; i++) { var c = wc[dayKey(w)] || 0; bars.push('<div class="grow" style="width:14px;height:' + (c ? 8 + Math.min(c, 5) * 5 : 4) + 'px;border-radius:4px;background:' + (c >= g ? 'var(--acc)' : c ? 'rgba(255,107,44,.35)' : 'rgba(255,255,255,.12)') + ';animation-delay:' + (0.3 + i * 0.05).toFixed(2) + 's"></div>'); w.setDate(w.getDate() + 7); }
    var pct = Math.min(1, thisW / g);
    h += '<section class="card up" style="animation-delay:.12s;border-radius:24px;display:flex;gap:16px;align-items:center"><div style="position:relative;width:84px;height:84px;flex-shrink:0"><svg viewBox="0 0 84 84" width="84" height="84" role="img" aria-label="' + thisW + ' de ' + g + ' sesiones esta semana"><circle cx="42" cy="42" r="34" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="9"/><circle cx="42" cy="42" r="34" fill="none" stroke="#FF6B2C" stroke-width="9" stroke-linecap="round" pathLength="1" stroke-dasharray="1" style="stroke-dashoffset:' + (1 - pct).toFixed(3) + ';animation:draw 1.2s var(--ease) .3s both;' + (pct ? '' : 'opacity:0') + '" transform="rotate(-90 42 42)"/></svg><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><span class="u" style="font-size:22px;font-weight:700">' + thisW + '/' + g + '</span></div></div>' +
      '<div class="col" style="flex:1;min-width:0;gap:8px"><b style="font-size:15px">' + (thisW >= g ? 'Semana cumplida' : thisW ? 'Te ' + (g - thisW === 1 ? 'falta 1 sesión' : 'faltan ' + (g - thisW) + ' sesiones') : 'Semana nueva') + '</b><span class="small mut" style="line-height:1.4">' + (stk ? 'Llevas <b style="color:var(--tx)"><span data-cu="' + stk + '">' + stk + '</span> ' + (stk === 1 ? 'semana' : 'semanas') + '</b> seguidas cumpliendo ' + g + ' sesiones.' : 'Cumple ' + g + ' sesiones para empezar la racha.') + '</span><div class="row" style="gap:5px;align-items:flex-end;height:30px">' + bars.join('') + '</div>' + (CFG.cardioGoal ? (function () { var cm = cardioWeek(monday(now)), pc = Math.min(1, cm / CFG.cardioGoal); return '<a href="#/progreso/cardio" class="row" style="gap:8px;color:var(--mut);font-size:12px;font-weight:700">' + ic('act', 14, 'color:var(--acc)') + '<span style="flex:1;height:6px;border-radius:3px;background:rgba(255,255,255,.08);overflow:hidden"><span class="bar" style="display:block;height:6px;width:' + (pc * 100).toFixed(0) + '%;background:var(--acc);animation-delay:.5s"></span></span>' + cm + '/' + CFG.cardioGoal + ' min</a>'; })() : '') + '</div></section>';
    // cuerpo
    var b = bodyRows();
    if (b.length) {
      var lw = b.filter(function (x) { return +x.peso; }), lc = b.filter(function (x) { return +x.cintura; });
      var bc = function (arr, f, label, unit, color, delay) {
        if (!arr.length) return '<button class="card up" style="animation-delay:' + delay + 's;text-align:left" data-a="bodyAdd"><span class="small mut">' + label + '</span><b style="display:block;margin-top:6px">Registrar</b></button>';
        var last = arr[arr.length - 1], ref = arr.filter(function (x) { return parseDay(x.fecha) <= new Date(Date.now() - 27 * 864e5); }).pop() || arr[0], dlt = +last[f] - +ref[f];
        return '<a class="card up press" href="#/progreso/cuerpo" data-a="metricLink" data-t="' + f + '" style="animation-delay:' + delay + 's;color:var(--tx);display:flex;flex-direction:column;gap:4px;padding:14px"><span class="small mut" style="font-weight:700">' + label + '</span><span><span class="u" style="font-size:22px;font-weight:700" data-cu="' + last[f] + '" data-d="1">' + fmt(last[f], 1) + '</span><span class="small mut"> ' + unit + '</span></span><span class="small" style="font-weight:700;color:' + (dlt <= 0 ? color : 'var(--mut)') + '">' + (dlt > 0 ? '+' : dlt < 0 ? '−' : '±') + kg(Math.abs(Math.round(dlt * 10) / 10)) + ' ' + unit + ' · 4 sem.</span>' + spark(arr.slice(-8).map(function (x) { return +x[f]; }), 140, 36, color, 'width:100%') + '</a>';
      };
      h += '<div class="grid2" style="gap:12px">' + bc(lw, 'peso', 'Peso corporal', 'kg', '#D4D4D8', '.18') + bc(lc, 'cintura', 'Cintura', 'cm', '#FF8A57', '.22') + '</div>';
    } else h += '<button class="card up row" style="animation-delay:.18s;text-align:left" data-a="bodyAdd"><span class="ico" style="background:var(--accSoft);color:var(--acc)">' + ic('plus') + '</span><span class="col"><b>Registra peso y cintura</b><span class="small mut">Para la recomposición, la cintura manda.</span></span></button>';
    var ls2 = lastSession();
    if (ls2) {
      var LT = TYPE[ls2.tipo];
      h += '<a class="card up row press" href="#/resumen/' + ls2.id + '" style="animation-delay:.28s;color:var(--tx)"><span class="ico u" style="width:46px;height:46px;border-radius:14px;background:' + LT.soft + ';color:' + LT.c + ';font-size:12px;font-weight:700">' + LT.n + '</span><span class="col" style="flex:1;min-width:0"><b style="font-size:14px">Última sesión · ' + shortDate(ls2.inicio) + '</b><span class="small mut">' + ls2.duracion_min + ' min · ' + fmt(ls2.volumen_kg) + ' kg' + (+ls2.records ? ' · ' + ls2.records + ' récord' + (ls2.records > 1 ? 's' : '') : '') + '</span></span>' + ic('right', 18, 'color:var(--mut)') + '</a>';
    }
    return h;
  };
  A.metricLink = function (d) { UI.metric = d.t; go('#/progreso/cuerpo'); };

  /* ENTRENO */
  V.entreno = function () {
    var a = S.active;
    if (!a) { setTimeout(function () { go('#/hoy'); }, 0); return ''; }
    var it = a.items[a.cur], e = ex(it.exId), ci = curSetIdx(it), st = activeStats(), T = TYPE[a.tipo], unit = unitOf(it.exId), corp = modoOf(it.exId) === 'corporal';
    var p = partnerIdx(a, a.cur), jd = UI.justDone && UI.justDone.item === a.cur && Date.now() - UI.justDone.t < 1500 ? UI.justDone.set : -1;
    var h = '<div class="sticky"><div class="topbar"><a class="iconbtn press" href="#/hoy" aria-label="Volver a Hoy">' + ic('left', 22) + '</a><div class="col" style="align-items:center;gap:2px"><span class="u" style="font-size:15px;font-weight:700;letter-spacing:.04em">' + T.n + ' <span style="color:' + T.c + '">·</span> <span id="clk">' + clock(Date.now() - a.inicio) + '</span></span><span class="small mut" style="font-weight:700">' + fmt(st.vol) + ' kg · <span class="cnt' + (jd >= 0 || (UI.justDone && Date.now() - UI.justDone.t < 900) ? ' pop1' : '') + '">' + st.done + '</span>/' + st.total + ' series' + (a.dl ? ' · descarga' : '') + '</span></div><a class="iconbtn press" style="width:auto;padding:0 14px;font-size:14px;font-weight:800" href="#/final">Terminar</a></div></div>';
    h += '<div class="hscroll" id="exchips">' + a.items.map(function (x, i) {
      var dn = curSetIdx(x) < 0;
      return '<button class="chip press' + (i === a.cur ? ' on' : '') + (dn && i !== a.cur ? ' done' : '') + '" data-a="exPick" data-i="' + i + '" aria-label="Ir a ' + esc(exName(x.exId)) + '">' + (dn ? ic('check', 15, 'stroke-width:3;color:var(--acc)') : '') + (x.ss ? '<span style="font-size:10px;font-weight:800;color:' + (i === a.cur ? '#0F766E' : 'var(--ss)') + '">' + esc(x.ss) + '</span>' : '') + (i + 1) + ' · ' + esc(aliasOf(x.exId)) + '</button>';
    }).join('') + '<button class="chip press" data-a="reorder" aria-label="Reordenar ejercicios">' + ic('list', 16) + '</button></div>';
    var lt = lastText(it.exId), stl = it.reset ? 0 : stall(it.exId), inc = +e.incremento || 2.5;
    var canWU = +e.barra > 0 && !it.sets.some(function (x) { return x.done || x.wu; });
    // cabecera compacta + fila de chips con la información secundaria
    h += '<section class="col up" style="gap:8px"><div class="row" style="justify-content:space-between;gap:10px"><button data-a="exInfo" data-id="' + esc(it.exId) + '" aria-label="Ver ilustración" style="flex-shrink:0">' + thumb(it.exId, 60, 46) + '</button>' + '<div class="col" style="gap:3px;min-width:0;flex:1"><span class="label" style="color:' + T.c + '">' + (a.cur + 1) + ' de ' + a.items.length + ' · ' + GROUPS[e.grupo] + '</span><h1 class="u" style="margin:0;font-size:21px;font-weight:700;line-height:1.15">' + esc(e.nombre) + '</h1><span class="small mut">' + esc(e.equipo || '') + ' · ' + it.series + ' × ' + it.rmin + '–' + it.rmax + ' · RIR ' + esc(it.rir) + '</span></div><button class="iconbtn" style="width:44px;height:44px" data-a="exMenu" aria-label="Opciones del ejercicio">' + ic('more') + '</button></div>';
    var chips = [];
    chips.push('<button class="ichip" data-a="lastHist">' + ic('hist', 15) + (lt ? esc(lt) : 'Primera vez') + '</button>');
    if (it.sug) chips.push('<button class="ichip acc" data-a="infoSug">' + ic('up', 15, 'stroke-width:2.6') + 'Sube a ' + wFmt(it.exId, it.sug) + ' kg</button>');
    if (p >= 0) chips.push('<button class="ichip ss" data-a="infoSS">' + ic('swap', 15) + 'Superserie ' + esc(it.ss) + ' · ' + esc(aliasOf(a.items[p].exId)) + '</button>');
    if (stl && ci >= 0 && !a.dl) chips.push('<button class="ichip warn" data-a="infoStall">' + ic('target', 15) + 'Estancado ' + stl + ' ses.</button>');
    if (canWU) chips.push('<button class="ichip" data-a="infoWU">' + ic('flame', 15, 'color:var(--acc)') + 'Calentar</button>');
    chips.push('<button class="ichip' + (e.nota ? '' : ' dim') + '" data-a="note" data-id="' + esc(it.exId) + '">' + ic('pencil', 15) + (e.nota ? esc(e.nota) : 'Nota') + '</button>');
    h += '<div class="hscroll" style="gap:6px">' + chips.join('') + '</div></section>';
    h += '<section class="col" style="gap:8px">';
    var nwork = 0, totalWork = it.sets.filter(function (x) { return !x.wu; }).length, wuTot = it.sets.filter(function (x) { return x.wu; }).length, wuN = 0;
    // la tarjeta de la serie actual va primero; las hechas y pendientes, debajo
    var rows = [], card = '';
    it.sets.forEach(function (s, i) {
      var lbl = s.wu ? 'C' : (++nwork); if (s.wu) wuN++;
      if (s.done) rows.push('<button class="setrow' + (i === jd ? ' jd' : '') + '" data-a="setEdit" data-i="' + i + '"' + (s.wu ? ' style="opacity:.7"' : '') + '><span class="num' + (s.wu ? '' : ' on') + '">' + lbl + '</span><span class="u wv" style="font-size:16px;font-weight:600;flex:1">' + wFmt(it.exId, s.w) + ' <span style="font-family:Manrope;font-size:13px;color:var(--mut)">kg</span> × ' + s.r + '</span>' + (s.pr === 1 ? '<span class="badge">RÉCORD</span>' : s.pr === 2 ? '<span class="badge" style="background:rgba(255,209,102,.18);color:var(--gold)">MEJOR MARCA</span>' : '') + (s.wu ? '<span class="small mut">calentamiento</span>' : '') + '<svg class="i ck" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style="color:' + (s.wu ? 'var(--mut)' : 'var(--acc)') + ';stroke-width:3"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></button>');
      else if (i === ci) {
        var pl = +e.barra > 0 ? platesRow(s.w, +e.barra) : '';
        card = '<div class="setcard"' + (s.wu ? ' style="border-color:rgba(255,255,255,.22);box-shadow:none"' : '') + '><div class="row" style="justify-content:space-between"><span class="label"' + (s.wu ? ' style="color:var(--tx)"' : '') + '>' + (s.wu ? 'Calentamiento ' + wuN + ' de ' + wuTot : 'Serie ' + lbl + ' de ' + totalWork) + '</span><span class="small mut" style="font-weight:700">' + (s.wu ? 'Descanso 1:00' : p >= 0 && a.cur < p ? 'Sin descanso · superserie' : 'Descanso ' + mmss(p >= 0 ? Math.max(it.rest, a.items[p].rest) : it.rest)) + '</span></div>' +
          '<div class="row" style="justify-content:space-between"><button class="step press" data-a="w" data-v="-' + inc + '" aria-label="Restar ' + kg(inc) + ' kg">−' + kg(inc) + '</button><button class="val" data-a="wType" aria-label="Escribir peso"><b>' + wFmt(it.exId, s.w) + '</b><span>' + unit + '</span></button><button class="step press" data-a="w" data-v="' + inc + '" aria-label="Sumar ' + kg(inc) + ' kg">+' + kg(inc) + '</button></div>' +
          (pl ? '<div class="plrow">' + pl + '</div>' : '') +
          (corp ? '<div class="small mut" style="text-align:center;margin-top:-6px;font-weight:700">Carga total ' + kg(loadOf(it.exId, s.w)) + ' kg (tu peso ' + kg(bwAt(Date.now())) + ' kg ' + (s.w >= 0 ? '+' : '−') + ' ' + kg(Math.abs(s.w)) + ')</div>' : '') +
          '<div class="row" style="justify-content:space-between"><button class="step press" style="font-size:22px" data-a="r" data-v="-1" aria-label="Una rep menos">−</button><button class="val" data-a="rType" aria-label="Escribir repeticiones"><b>' + s.r + '</b><span>reps</span></button><button class="step press" style="font-size:22px" data-a="r" data-v="1" aria-label="Una rep más">+</button></div>' +
          '<button class="done-btn press" data-a="done"' + (s.wu ? ' style="background:var(--tx);animation:none"' : '') + '>' + ic('check', 26, 'stroke-width:3') + (s.wu ? 'Calentamiento hecho' : 'Serie hecha') + '</button></div>';
        rows.push('__CARD__');
      }
      else rows.push('<div class="setrow pending"' + (s.wu ? ' style="opacity:.7"' : '') + '><span class="num">' + lbl + '</span><span class="u" style="font-size:15px;font-weight:600">' + wFmt(it.exId, s.w) + ' <span style="font-family:Manrope;font-size:13px">kg</span> × ' + s.r + '</span>' + (s.wu ? '<span class="small mut" style="margin-left:auto">calentamiento</span>' : '') + '</div>');
    });
    if (card) {
      // tarjeta arriba; series hechas en una línea compacta encima si hay muchas
      var doneRows = rows.slice(0, rows.indexOf('__CARD__')), after = rows.slice(rows.indexOf('__CARD__') + 1);
      if (doneRows.length > 2) { var hidden = doneRows.length - 1; h += '<button class="setrow" data-a="toggleDone" style="height:40px;justify-content:center;color:var(--mut);font-size:13px;font-weight:700">' + (UI.showDone ? 'Ocultar' : 'Ver') + ' ' + hidden + ' series hechas ' + ic(UI.showDone ? 'upc' : 'downc', 16) + '</button>'; if (UI.showDone) h += doneRows.slice(0, -1).join(''); h += doneRows[doneRows.length - 1]; }
      else h += doneRows.join('');
      h += card + after.join('');
    } else h += rows.join('');
    if (ci < 0) { var ev = 0; it.sets.forEach(function (s) { if (!s.wu) ev += cargaOf(it.exId, s.w, a.inicio) * s.r; }); h += '<div class="pop card row" style="background:var(--accSoft);border-color:var(--accLine)"><span class="ico" style="width:46px;height:46px;border-radius:16px;background:var(--acc);color:var(--bg)">' + ic('check', 24, 'stroke-width:3') + '</span><span class="col"><b style="font-size:16px">Ejercicio completado</b><span class="small mut">' + fmt(ev) + ' kg en este ejercicio</span></span></div>'; }
    h += '<div class="grid2"><button class="btn dark" style="height:48px;font-size:14px" data-a="addSet">' + ic('plus', 18) + 'Añadir serie</button><button class="btn dark" style="height:48px;font-size:14px" data-a="remSet"' + (it.sets.some(function (s) { return !s.done; }) ? '' : ' disabled') + '>' + ic('minus', 18) + 'Quitar serie</button></div></section>';
    var isLast = a.cur === a.items.length - 1, nxt = nextPendingIdx(a, a.cur);
    h += '<div class="dock"><button id="dockPrev" class="iconbtn glass press dockrt" style="width:60px;height:60px;border-radius:20px" data-a="exPrev" aria-label="Ejercicio anterior"' + (a.cur ? '' : ' disabled data-dis') + '>' + ic('left', 22) + ringHTML(60) + '</button>' +
      (isLast || nxt < 0 ? '<a class="btn" style="flex:1;height:60px;border-radius:20px" href="#/final">' + ic('act', 20) + 'Pasar al cardio</a>' :
        '<button class="glass press" style="flex:1;height:60px;border-radius:20px;display:flex;align-items:center;justify-content:space-between;padding:0 18px" data-a="exNext"><span class="col" style="align-items:flex-start;gap:0"><span class="label" style="font-size:11px">Siguiente</span><span style="font-size:15px;font-weight:800;text-align:left;max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(aliasOf(a.items[a.cur + 1].exId)) + '</span></span>' + ic('right', 22) + '</button>') + '</div>';
    return h;
  };
  A.toggleDone = function () { UI.showDone = !UI.showDone; rerender(); };
  A.infoSug = function () {
    var a = S.active, it = a.items[a.cur];
    sheet('<h3 class="u h2">Toca subir</h3><p style="margin:0;font-size:15px;line-height:1.5;color:#D4D4D8">Las dos últimas sesiones hiciste <b style="color:var(--tx)">' + it.rmax + ' reps en todas las series</b>, el tope de tu rango. Por eso hoy la app ya te ha puesto <b style="color:var(--acc)">' + wFmt(it.exId, it.sug) + ' kg</b>, y las reps empiezan en ' + it.rmin + '.</p><p class="small mut" style="margin:0;line-height:1.5">Ve sumando reps sesión a sesión hasta volver a llegar a ' + it.rmax + ' en todas. Entonces volverá a proponerte subir.</p><button class="btn" data-a="closeSheet">Entendido</button>');
  };
  A.infoSS = function () {
    var a = S.active, p = partnerIdx(a, a.cur), first = Math.min(a.cur, p), second = Math.max(a.cur, p);
    sheet('<h3 class="u h2">Superserie ' + esc(a.items[a.cur].ss) + '</h3><div class="col" style="gap:10px"><div class="row"><span class="num on">1</span><b>' + esc(aliasOf(a.items[first].exId)) + '</b></div><div class="small mut" style="padding-left:40px">sin descanso</div><div class="row"><span class="num on">2</span><b>' + esc(aliasOf(a.items[second].exId)) + '</b></div><div class="small mut" style="padding-left:40px">descanso y vuelta al 1</div></div><p class="small mut" style="margin:0;line-height:1.5">La app salta sola de uno a otro. Se configura en Mi rutina, tocando el ejercicio.</p><button class="btn" data-a="closeSheet">Entendido</button>');
  };
  A.infoStall = function () {
    var a = S.active, it = a.items[a.cur], nr = newRange(it), w0 = (it.sets.filter(function (x) { return !x.done && !x.wu; })[0] || { w: 0 }).w, inc = +ex(it.exId).incremento || 2.5;
    sheet('<h3 class="u h2">Estancado</h3><p style="margin:0;font-size:15px;line-height:1.5;color:#D4D4D8"><b style="color:var(--gold)">' + stall(it.exId) + ' sesiones</b> sin superar tu mejor marca en ' + esc(aliasOf(it.exId)) + '. Dos formas de desatascarlo:</p><button class="btn dark" style="height:auto;padding:14px;flex-direction:column;align-items:flex-start;gap:2px;text-align:left" data-a="stallDrop"><b style="font-size:15px">Bajar un 10 % hoy</b><span class="small mut">' + wFmt(it.exId, w0) + ' → ' + wFmt(it.exId, modoOf(it.exId) === 'corporal' ? w0 - inc : roundStep(w0 * 0.9, inc)) + ' kg y vuelves a subir con margen</span></button><button class="btn dark" style="height:auto;padding:14px;flex-direction:column;align-items:flex-start;gap:2px;text-align:left" data-a="stallRange"><b style="font-size:15px">Cambiar a ' + nr[0] + '–' + nr[1] + ' reps</b><span class="small mut">Otro estímulo; se guarda en tu rutina</span></button><button class="btn ghost" data-a="closeSheet">Ahora no</button>');
  };
  A.infoWU = function () {
    var a = S.active, it = a.items[a.cur], e = ex(it.exId), bar = +e.barra || 20, w = (it.sets.filter(function (x) { return !x.wu; })[0] || { w: 0 }).w, list = warmupPlan(w, bar);
    sheet('<h3 class="u h2">Calentamiento</h3><p style="margin:0;font-size:15px;line-height:1.5;color:#D4D4D8">Antes de tus series de <b style="color:var(--tx)">' + kg(w) + ' kg</b> haces unas series ligeras y cortas que van subiendo. Preparan articulaciones y técnica sin cansarte.</p>' + (list.length ? '<div class="col" style="gap:6px">' + list.map(function (x, i) { return '<div class="row" style="padding:10px 12px;border-radius:14px;background:rgba(255,255,255,.04)"><span class="num">C</span><span class="u" style="flex:1;font-size:16px;font-weight:600">' + kg(x.w) + ' kg × ' + x.r + '</span><span class="small mut" style="font-weight:700">' + (x.w <= bar ? 'solo barra' : platesTxt(x.w, bar).replace(' por lado', '/lado')) + '</span></div>'; }).join('') + '</div><p class="small mut" style="margin:0">1 min de descanso entre ellas. No cuentan para volumen ni récords.</p><button class="btn" data-a="warmup">' + ic('flame', 18) + 'Añadir ' + list.length + ' series de calentamiento</button>' : '<p class="mut">Con ' + kg(w) + ' kg no hace falta calentar con discos: haz 1 o 2 series con la barra sola.</p>') + '<button class="btn ghost" data-a="closeSheet">Ahora no</button>');
  };
  function warmupPlan(w, bar) { var add = [], seen = {}; [[0, 10], [0.5, 6], [0.7, 4], [0.85, 2]].forEach(function (p) { var v = p[0] ? Math.max(bar, roundStep(w * p[0], 2.5)) : bar; if (v < w && !seen[v]) { seen[v] = 1; add.push({ w: v, r: p[1] }); } }); return add; }
  V.entreno_after = function () { if (S.active) { wakeOn(); if (S.active.restEnd) showRest(); var c = $('#exchips .on'); if (c) c.scrollIntoView({ inline: 'center', block: 'nearest' }); keepDoneVisible(); } };
  // «Serie hecha» siempre por encima del dock: si una serie hecha la empuja, la vista sube lo justo
  function keepDoneVisible() {
    var d = $('.done-btn', view), k = $('.dock', view); if (!d || !k) return;
    var over = d.getBoundingClientRect().bottom - (k.getBoundingClientRect().top - 10);
    if (over > 0) view.scrollBy({ top: Math.ceil(over), behavior: reduceMotion || UI.vt ? 'auto' : 'smooth' });
  }

  /* FINAL: cardio */
  V.final = function () {
    var a = S.active;
    if (!a) { setTimeout(function () { go('#/hoy'); }, 0); return ''; }
    if (a.restEnd) { a.restEnd = 0; setActive(a); setTimeout(hideRest, 0); }
    var c = a.cardio, C = CARDIO[c.tipo] || CARDIO.cinta, st = activeStats(), lc = lastOfCardio(c.tipo);
    var h = header('', '#/entreno', '<span class="small mut" style="font-weight:700">' + st.done + ' series · ' + clock(Date.now() - a.inicio) + '</span>');
    h += '<div class="col up" style="gap:6px"><span class="label" style="color:var(--acc)">Último paso</span><h1 class="u" style="margin:0;font-size:34px;font-weight:800">Cardio</h1><p class="mut" style="margin:0;font-size:15px;font-weight:600">¿Qué máquina toca hoy?</p></div>';
    h += '<div class="grid2 up" style="animation-delay:.05s">' + Object.keys(CARDIO).map(function (k) { var on = c.tipo === k; return '<button class="press" data-a="cType" data-t="' + k + '" aria-pressed="' + on + '" style="height:92px;border-radius:20px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;padding:14px;background:' + (on ? 'var(--acc)' : 'var(--card)') + ';color:' + (on ? 'var(--bg)' : 'var(--tx)') + ';border:1px solid ' + (on ? 'var(--acc)' : 'var(--line)') + '">' + ic(CARDIO[k].icon, 24) + '<span style="font-size:16px;font-weight:800">' + CARDIO[k].n + '</span></button>'; }).join('') + '</div>';
    var row = function (label, val, act, dn, upv, typeAct) { return '<div class="row" style="justify-content:space-between;padding:12px 0"><span style="font-size:15px;font-weight:700">' + label + '</span><div class="stepper"><button data-a="' + act + '" data-v="' + dn + '" aria-label="Menos">' + (act === 'cMin' ? '−5' : '−') + '</button><b ' + (typeAct ? 'data-a="' + typeAct + '" role="button"' : '') + '>' + val + '</b><button data-a="' + act + '" data-v="' + upv + '" aria-label="Más">' + (act === 'cMin' ? '+5' : '+') + '</button></div></div>'; };
    h += '<div class="card tight up" style="animation-delay:.1s">' + row('Minutos', c.min, 'cMin', -5, 5) + '<div class="sep"></div>' + row(C.dist, c.tipo === 'remo' ? fmt(c.dist) : kg(c.dist), 'cDist', -1, 1, 'cDistType') + '<div class="sep"></div>' + row(C.lvl, c.nivel, 'cLvl', -1, 1) + '</div>';
    if (lc) h += '<p class="small mut" style="margin:-4px 4px 0">La última vez en ' + C.n.toLowerCase() + ': ' + lc.cardio_min + ' min' + (+lc.cardio_dist ? ' · ' + (lc.cardio_tipo === 'remo' ? fmt(lc.cardio_dist) + ' m' : kg(lc.cardio_dist) + ' km') : '') + (+lc.cardio_nivel ? ' · ' + C.lvl.toLowerCase().replace(' (%)', '') + ' ' + lc.cardio_nivel : '') + '</p>';
    h += '<div class="field up" style="animation-delay:.15s"><label for="sNota">¿Cómo te has encontrado? (opcional)</label><textarea class="inp" id="sNota" rows="2" placeholder="Dormí 5 h, rodilla rara, mucha energía…">' + esc(a.nota || '') + '</textarea></div>';
    h += '<div style="flex:1;min-height:20px"></div><button class="btn cta" data-a="finish" data-c="1">Terminar sesión</button><button class="btn ghost" data-a="finish" data-c="0">Hoy sin cardio</button>';
    return h;
  };

  V.final_after = function () { var n = $('#sNota'); if (n) n.addEventListener('input', function () { var a = S.active; if (a) { a.nota = n.value; setActive(a); } }); };

  /* RESUMEN */
  V.resumen = function (sid) {
    var I = idx(), s = I.sesById[sid];
    if (!s) return header('Resumen', '#/hoy') + '<p class="mut">Sesión no encontrada.</p>';
    var T = TYPE[s.tipo] || TYPE.push, allSets = I.bySes[sid] || [], sets = allSets.filter(function (x) { return !+x.calentamiento; }), prs = sets.filter(function (x) { return +x.record === 1; }), minor = sets.filter(function (x) { return +x.record === 2; }).length;
    var prev = I.ses.filter(function (x) { return x.tipo === s.tipo && x.inicio < s.inicio; }).pop();
    var diff = prev && prev.volumen_kg ? (s.volumen_kg - prev.volumen_kg) / prev.volumen_kg * 100 : null;
    var groups = {}; sets.forEach(function (x) { var g = ex(x.ejercicio_id).grupo; groups[g] = (groups[g] || 0) + 1; });
    var wc = weekCounts()[dayKey(monday(s.inicio))] || 0;
    var fresh = Date.now() - s.fin < 10 * 60000;
    var h = fresh ? '' : header('', '#/datos/historial');
    h += '<div class="col" style="align-items:center;gap:12px;text-align:center;padding:' + (fresh ? '20px' : '0') + ' 0 6px"><div class="pop ico" style="width:84px;height:84px;border-radius:28px;background:' + T.c + ';color:var(--bg);box-shadow:0 14px 40px ' + T.c + '73">' + ic(fresh ? 'zap' : 'check', 42, 'stroke-width:2.2') + '</div><h1 class="u up" style="margin:0;font-size:28px;font-weight:800;animation-delay:.1s">' + (fresh ? 'Sesión completada' : T.n) + '</h1><span class="small mut up" style="font-weight:700;animation-delay:.16s">' + T.n + ' · ' + DOWL[new Date(s.inicio).getDay()] + ' ' + new Date(s.inicio).getDate() + ' ' + MES[new Date(s.inicio).getMonth()] + ' · semana ' + wc + '/' + CFG.goal + '</span></div>';
    h += '<div class="grid2">' + [[s.duracion_min, 'minutos', 0], [s.volumen_kg, 'kg de volumen', 0], [s.series, 'series', 0], [s.records, 'récords', 0]].map(function (x, i) { return '<div class="card up" style="animation-delay:' + (0.2 + i * 0.05) + 's;padding:14px' + (i === 3 && +x[0] ? ';background:var(--accSoft);border-color:var(--accLine)' : '') + '"><div class="u" style="font-size:26px;font-weight:700' + (i === 3 && +x[0] ? ';color:var(--acc)' : '') + '" data-cu="' + x[0] + '">' + fmt(x[0]) + '</div><div class="small mut" style="font-weight:700">' + x[1] + '</div></div>'; }).join('') + '</div>';
    if (prs.length || minor) h += '<div class="card up col" style="animation-delay:.42s;gap:12px"><span class="label">Récords</span>' + prs.map(function (p) { return '<div class="row"><span class="ico" style="width:36px;height:36px;border-radius:12px;background:var(--gold);color:var(--bg)">' + ic('trophy', 18) + '</span><span class="col" style="flex:1"><b style="font-size:15px">' + esc(aliasOf(p.ejercicio_id)) + ' · ' + wFmt(p.ejercicio_id, p.peso) + ' kg × ' + p.reps + '</b><span class="small mut">' + (+p.e1rm ? '1RM est. ' + kg(p.e1rm) + ' kg' : 'Mejor serie') + '</span></span></div>'; }).join('') + (minor ? '<span class="small mut">+ ' + minor + (minor === 1 ? ' mejor marca' : ' mejores marcas') + ' (más reps con el mismo peso)</span>' : '') + '</div>';
    h += '<div class="card up col" style="animation-delay:.5s;gap:12px">' + (diff != null ? '<div class="row" style="justify-content:space-between"><span class="label">Vs. ' + T.n + ' anterior</span><span class="u" style="font-size:16px;font-weight:700;color:' + (diff >= 0 ? 'var(--acc)' : 'var(--mut)') + '">' + (diff >= 0 ? '+' : '−') + fmt(Math.abs(diff), 1) + ' %</span></div><div class="col" style="gap:8px">' + [['Esta', s.volumen_kg, T.c], [shortDate(prev.inicio), prev.volumen_kg, '#52525B']].map(function (r) { var mx = Math.max(s.volumen_kg, prev.volumen_kg) || 1; return '<div class="row" style="gap:10px"><span class="small mut" style="width:62px;font-weight:700">' + r[0] + '</span><div style="flex:1;height:12px;border-radius:6px;background:rgba(255,255,255,.05)"><div class="bar" style="width:' + (r[1] / mx * 100).toFixed(1) + '%;height:12px;border-radius:6px;background:' + r[2] + ';animation-delay:.6s"></div></div></div>'; }).join('') + '</div>' : '<span class="label">Músculos trabajados</span>') +
      '<div class="row" style="gap:8px;flex-wrap:wrap">' + Object.keys(groups).map(function (g) { return '<span class="pill" style="font-size:13px;color:var(--tx);padding:6px 10px">' + GROUPS[g] + ' ' + groups[g] + '</span>'; }).join('') + '</div></div>';
    var groupsArr = Object.values(allSets.reduce(function (m, x) { (m[x.orden] = m[x.orden] || []).push(x); return m; }, {}));
    h += '<div class="card tight up" style="animation-delay:.56s"><div class="label" style="padding:12px 0 4px">Series · toca para corregir</div>' + groupsArr.map(function (g) { var id = g[0].ejercicio_id; return '<div class="col" style="gap:6px;padding:10px 0;border-top:1px solid var(--line)"><span class="row" style="gap:10px">' + thumb(id, 48, 36) + '<b style="font-size:14px">' + esc(aliasOf(id)) + (modoOf(id) ? ' <span class="small mut" style="font-weight:600">' + unitOf(id) + '</span>' : '') + '</b></span><div class="row" style="gap:6px;flex-wrap:wrap">' + g.map(function (x) { return '<button class="pill press" data-a="pSet" data-id="' + esc(x.id) + '" style="height:34px;padding:0 10px;font-size:13px;color:' + (+x.calentamiento ? 'var(--mut)' : 'var(--tx)') + ';' + (+x.record === 1 ? 'background:rgba(255,209,102,.18);color:var(--gold)' : '') + '">' + (+x.calentamiento ? 'C ' : '') + wFmt(id, x.peso) + ' × ' + x.reps + '</button>'; }).join('') + '</div></div>'; }).join('') + '</div>';
    h += '<button class="card up row press" style="animation-delay:.6s;text-align:left" data-a="pCardio" data-id="' + s.id + '">' + ic('act', 20, 'color:var(--acc)') + '<span class="col" style="flex:1;gap:0"><b style="font-size:14px">' + (s.cardio_tipo ? (CARDIO[s.cardio_tipo] || { n: s.cardio_tipo }).n : 'Sin cardio') + '</b><span class="small mut">' + (s.cardio_tipo ? s.cardio_min + ' min' + (+s.cardio_dist ? ' · ' + (s.cardio_tipo === 'remo' ? fmt(s.cardio_dist) + ' m' : kg(s.cardio_dist) + ' km') : '') + (+s.cardio_nivel ? ' · nivel ' + s.cardio_nivel : '') : 'Toca para añadirlo') + '</span></span>' + ic('pencil', 16, 'color:var(--mut)') + '</button>';
    h += '<button class="card up row press" style="animation-delay:.64s;text-align:left" data-a="pNote" data-id="' + s.id + '">' + ic('pencil', 18, 'color:var(--mut)') + '<span style="flex:1;font-size:14px;font-weight:600;line-height:1.4;color:' + (s.nota ? 'var(--tx)' : 'var(--mut)') + '">' + (s.nota ? '“' + esc(s.nota) + '”' : 'Añadir nota de la sesión') + '</span></button>';
    if (fresh) h += '<a class="btn up" href="#/hoy" style="animation-delay:.62s">Listo</a>';
    else h += '<button class="btn danger" data-a="sesDel" data-id="' + s.id + '">' + ic('trash') + 'Borrar sesión</button>';
    return h;
  };

  /* PROGRESO */
  V.progreso = function (tab) {
    tab = tab || UI.prog; UI.prog = tab;
    var h = '<h1 class="u h1 up" style="margin:0 4px">Progreso</h1>';
    var sm = storyMonth();
    if (sm) h += '<button class="up press" data-a="story" data-m="' + sm.key + '" style="animation-delay:.05s;position:relative;overflow:hidden;border-radius:22px;background:var(--acc);color:var(--bg);padding:16px;display:flex;align-items:center;gap:14px;text-align:left"><div aria-hidden="true" style="position:absolute;right:-24px;top:-30px;width:120px;height:120px;border-radius:50%;border:18px solid rgba(11,11,13,.12)"></div><span class="ico" style="width:46px;height:58px;border-radius:12px;background:var(--bg);color:var(--acc)">' + ic('zap', 22) + '</span><span class="col" style="gap:2px;position:relative"><span class="label" style="color:var(--bg)">Resumen del mes</span><span class="u" style="font-size:17px;font-weight:700">Tu ' + MESL[sm.m] + ' en historias</span><span class="small" style="font-weight:700;opacity:.8">' + fmt(sm.kg) + ' kg · ' + sm.ses + ' sesiones</span></span></button>';
    h += '<div class="seg up" role="tablist" style="grid-template-columns:repeat(4,minmax(0,1fr));animation-delay:.1s">' + [['ex', 'Ejercicios'], ['cuerpo', 'Cuerpo'], ['musculos', 'Músculos'], ['cardio', 'Cardio']].map(function (t) { return '<button role="tab" aria-selected="' + (tab === t[0]) + '" class="press' + (tab === t[0] ? ' on' : '') + '" data-a="prog" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (tab === 'cuerpo') h += progCuerpo(); else if (tab === 'musculos') h += progMusculos(); else if (tab === 'cardio') h += progCardio(); else h += progEjercicios();
    return h;
  };
  function dayOfEx(exId) { var r = alive(S.rut).filter(function (x) { return x.ejercicio_id === exId; })[0]; return r ? TYPE[r.dia].c : '#71717A'; }
  function progEjercicios() {
    var H = idx().hist, ids = Object.keys(H).sort(function (a, b) { return H[b][H[b].length - 1].t - H[a][H[a].length - 1].t; });
    if (!ids.length) return '<div class="card col up" style="gap:8px;align-items:flex-start"><b>Aún no hay entrenos</b><span class="small mut">Cuando termines tu primera sesión verás aquí la evolución de cada ejercicio.</span><a class="btn" href="#/hoy" style="margin-top:6px">Ir a Hoy</a></div>';
    var cut = Date.now() - 56 * 864e5;
    return '<span class="small mut" style="padding:0 4px">Básicos: 1RM estimado · aislamiento: mejor peso · cambio en 8 semanas</span>' + ids.map(function (id, i) {
      var h = H[id], b = bestOf(id), old = h.filter(function (x) { return x.t <= cut; }), ref = old.length ? old[old.length - 1] : h[0], iso = isIso(id), st = stall(id);
      var recent = h.slice(-3), curSc = Math.max.apply(null, recent.map(function (x) { return x.sc; })), pct = ref.sc ? (curSc - ref.sc) / ref.sc * 100 : 0;
      var big = iso ? wFmt(id, Math.max.apply(null, recent.map(function (x) { return x.top; }))) : fmt(Math.max.apply(null, recent.map(function (x) { return x.e1 || 0; })));
      var col = dayOfEx(id);
      return '<a class="card up press row exrow" href="#/ficha/' + esc(id) + '" style="animation-delay:' + Math.min(0.4, 0.03 * i).toFixed(2) + 's;padding:12px 14px;color:var(--tx);border-radius:18px"><span style="border-left:3px solid ' + col + ';border-radius:12px;display:flex">' + thumb(id, 52, 40) + '</span><span class="col" style="flex:1;min-width:0;gap:2px"><b style="font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(aliasOf(id)) + '</b><span class="small mut exsub">' + (st ? '<span style="color:var(--gold);font-weight:800">Estancado</span> · ' : 'Mejor: ') + (b.set ? wFmt(id, b.set.peso) + ' × ' + b.set.reps : kg(b.w) + ' kg') + '</span></span>' + spark(h.slice(-10).map(function (x) { return x.sc || x.top; }), 70, 30, col) + '<span class="col" style="width:62px;align-items:flex-end;gap:0"><span class="u" style="font-size:15px;font-weight:700">' + big + '</span><span class="small" style="font-weight:800;color:' + (pct > 0.5 ? 'var(--acc2)' : 'var(--mut)') + '">' + (h.length > 1 ? (pct >= 0 ? '+' : '−') + fmt(Math.abs(pct)) + ' %' : 'nuevo') + '</span></span></a>';
    }).join('');
  }
  function progCuerpo() {
    var b = bodyRows(), f = UI.metric, arr = b.filter(function (x) { return +x[f]; }), isW = f === 'cintura';
    var h = '<div class="card up col" style="gap:12px"><div class="mini-seg" style="align-self:flex-start"><button class="' + (isW ? 'on' : '') + '" data-a="metric" data-t="cintura">Cintura</button><button class="' + (!isW ? 'on' : '') + '" data-a="metric" data-t="peso">Peso</button></div>';
    if (arr.length) {
      var last = arr[arr.length - 1], first = arr.filter(function (x) { return parseDay(x.fecha) >= new Date(Date.now() - 84 * 864e5); })[0] || arr[0], dl = +last[f] - +first[f];
      var col = isW ? '#FF6B2C' : '#D4D4D8', sl = arr.slice(-16);
      h += '<div class="row" style="align-items:baseline;gap:10px"><span class="u" style="font-size:40px;font-weight:700;letter-spacing:-.02em" data-cu="' + last[f] + '" data-d="1">' + fmt(last[f], 1) + '</span><span class="mut" style="font-weight:700">' + (isW ? 'cm' : 'kg') + '</span><span style="margin-left:auto;font-size:14px;font-weight:800;color:' + (dl <= 0 ? 'var(--acc2)' : 'var(--mut)') + '">' + (dl > 0 ? '+' : dl < 0 ? '−' : '±') + kg(Math.abs(Math.round(dl * 10) / 10)) + (isW ? ' cm' : ' kg') + '</span></div>' +
        chart(sl.map(function (x) { return +x[f]; }), { color: col, fill: isW ? 'rgba(255,107,44,.10)' : 'rgba(212,212,216,.08)', x0: shortDate(parseDay(sl[0].fecha)).slice(4), x1: shortDate(parseDay(sl[sl.length - 1].fecha)).slice(4), aria: (isW ? 'Cintura' : 'Peso') + ' en el tiempo' }) + '</div>';
      var bw = b.filter(function (x) { return +x.peso; }), bcin = b.filter(function (x) { return +x.cintura; });
      if (bw.length > 1 && bcin.length > 1) {
        var since = new Date(Date.now() - 84 * 864e5), w0 = bw.filter(function (x) { return parseDay(x.fecha) >= since; })[0] || bw[0], c0 = bcin.filter(function (x) { return parseDay(x.fecha) >= since; })[0] || bcin[0];
        var dw = +bw[bw.length - 1].peso - +w0.peso, dc = +bcin[bcin.length - 1].cintura - +c0.cintura;
        var wk = Math.max(1, Math.round((Date.now() - parseDay(c0.fecha)) / (7 * 864e5)));
        var txt = wk + ' semanas: <b style="color:var(--tx)">cintura ' + (dc <= 0 ? '−' : '+') + kg(Math.abs(Math.round(dc * 10) / 10)) + ' cm</b> y peso ' + (dw <= 0 ? '−' : '+') + kg(Math.abs(Math.round(dw * 10) / 10)) + ' kg. ';
        txt += dc < 0 ? (dw > -0.5 * Math.abs(dc) ? 'Pierdes cintura casi sin perder peso: buena señal de recomposición.' : 'Bajas cintura y peso; vigila que la fuerza no caiga.') : 'La cintura no baja todavía. Revisa la dieta antes que el entreno.';
        h += '<div class="card up" style="animation-delay:.08s;background:var(--accSoft);border-color:rgba(255,107,44,.25);font-size:14px;line-height:1.5;font-weight:600;color:var(--accTx)">' + txt + '</div>';
      }
    } else h += '<p class="mut small" style="margin:0">Todavía no hay medidas de ' + (isW ? 'cintura' : 'peso') + '.</p></div>';
    h += '<button class="btn light up" style="animation-delay:.14s" data-a="bodyAdd">' + ic('plus', 20, 'stroke-width:2.6') + 'Registrar medida</button>';
    var rows = b.slice().reverse().slice(0, 30);
    if (rows.length) h += '<div class="col up" style="gap:8px;animation-delay:.2s">' + rows.map(function (x) { return swipeRow('<div class="row" style="justify-content:space-between;padding:12px 16px;font-size:14px;font-weight:600"><span class="mut">' + shortDate(parseDay(x.fecha)) + '</span><span>' + (+x.peso ? '<b>' + kg(x.peso) + '</b> kg' : '') + (+x.peso && +x.cintura ? ' · ' : '') + (+x.cintura ? '<b>' + kg(x.cintura) + '</b> cm' : '') + '</span></div>', 'bodyDel', x.id); }).join('') + '<p class="small mut" style="text-align:center;margin:4px 0 0">Desliza a la izquierda para borrar</p></div>';
    return h;
  }
  function progMusculos() {
    var w = monday(Date.now()); w.setDate(w.getDate() + 7 * UI.musWeek);
    var end = new Date(w); end.setDate(end.getDate() + 7);
    var m = muscleSets(w.getTime(), end.getTime()), total = 0, fills = {};
    Object.keys(m).forEach(function (k) { total += m[k]; fills[k] = heat(m[k]); });
    var lbl = UI.musWeek === 0 ? 'Esta semana' : UI.musWeek === -1 ? 'Semana pasada' : w.getDate() + ' ' + MES[w.getMonth()] + ' – ' + (end.getDate() - 1 || new Date(end - 864e5).getDate()) + ' ' + MES[new Date(end - 864e5).getMonth()];
    var h = '<div class="card up col" style="gap:10px"><div class="row" style="justify-content:space-between"><button class="iconbtn" style="width:40px;height:40px" data-a="musWeek" data-v="-1" aria-label="Semana anterior">' + ic('left') + '</button><span class="col" style="align-items:center;gap:0"><b>' + lbl + '</b><span class="small mut">' + total + ' series</span></span><button class="iconbtn" style="width:40px;height:40px" data-a="musWeek" data-v="1" aria-label="Semana siguiente"' + (UI.musWeek ? '' : ' disabled') + '>' + ic('right') + '</button></div>' +
      '<div class="row" style="justify-content:space-around">' + figure(fills, false) + figure(fills, true) + '</div><div class="row" style="justify-content:center;gap:8px" aria-hidden="true"><span class="small mut">0</span>' + [0, 3, 7, 12].map(function (n) { return '<span style="width:18px;height:10px;border-radius:3px;background:' + heat(n) + '"></span>'; }).join('') + '<span class="small mut">12+ series</span></div></div>';
    var order = Object.keys(GROUPS).sort(function (a, b) { return m[b] - m[a]; });
    var mn = CFG.musMin, mx = CFG.musMax, sc = Math.max(mx + 4, 24), lowT = order.filter(function (k) { return m[k] > 0 && m[k] < mn; }), hiT = order.filter(function (k) { return m[k] > mx; });
    h += '<div class="card tight up" style="animation-delay:.08s"><div class="row small mut" style="justify-content:space-between;padding:12px 0 2px;font-weight:700"><span>Series por grupo</span><span>objetivo ' + mn + '–' + mx + '</span></div>' + order.map(function (k, i) { var v = m[k], c = v === 0 ? 'rgba(255,255,255,.1)' : v < mn ? 'var(--gold)' : v > mx ? 'var(--red)' : 'var(--acc)'; return '<div class="row" style="gap:10px;padding:9px 0"><span style="width:118px;font-size:14px;font-weight:700">' + GROUPS[k] + '</span><div style="flex:1;height:12px;border-radius:6px;background:rgba(255,255,255,.05);position:relative"><div style="position:absolute;top:-3px;bottom:-3px;left:' + (mn / sc * 100).toFixed(1) + '%;width:' + ((mx - mn) / sc * 100).toFixed(1) + '%;border-radius:4px;background:rgba(255,107,44,.1);border-left:1px dashed rgba(255,107,44,.5);border-right:1px dashed rgba(255,107,44,.5)"></div><div class="bar" style="position:relative;width:' + Math.max(2, Math.min(100, v / sc * 100)).toFixed(0) + '%;height:12px;border-radius:6px;background:' + c + ';animation-delay:' + (i * 0.04).toFixed(2) + 's"></div></div><span class="u" style="width:26px;text-align:right;font-size:14px;font-weight:700;color:' + (v >= mn && v <= mx ? 'var(--tx)' : 'var(--mut)') + '">' + v + '</span></div>'; }).join('') +
      (total ? '<p class="small mut" style="margin:6px 0 10px;line-height:1.45">' + (lowT.length ? '<b style="color:var(--gold)">Cortos:</b> ' + lowT.map(function (k) { return GROUPS[k]; }).join(', ') + '. ' : '') + (hiT.length ? '<b style="color:#FF8A8D">De más:</b> ' + hiT.map(function (k) { return GROUPS[k]; }).join(', ') + '. ' : '') + (!lowT.length && !hiT.length ? 'Todos los grupos que entrenas están dentro del objetivo.' : 'El objetivo se cambia en Ajustes.') + '</p>' : '<p class="small mut" style="margin:6px 0 10px">Sin series esta semana.</p>') + '</div>';
    return h;
  }

  function progCardio() {
    var g = CFG.cardioGoal, w = monday(Date.now()); w.setDate(w.getDate() - 7 * 11);
    var weeks = []; for (var i = 0; i < 12; i++) { weeks.push(cardioWeek(new Date(w))); w.setDate(w.getDate() + 7); }
    var cur = weeks[11], mx = Math.max.apply(null, weeks.concat([g, 1])), ok = weeks.slice(0, 11).filter(function (v) { return g && v >= g; }).length;
    var ses = idx().ses.filter(function (s) { return s.cardio_tipo && +s.cardio_min; }).reverse();
    var from = Date.now() - 28 * 864e5, by = {}; ses.forEach(function (s) { if (s.inicio >= from) by[s.cardio_tipo] = (by[s.cardio_tipo] || 0) + +s.cardio_min; });
    var tot = Object.keys(by).reduce(function (a, k) { return a + by[k]; }, 0) || 1;
    var h = '<div class="card up col" style="gap:12px"><div class="row" style="justify-content:space-between;align-items:baseline"><span class="label">Esta semana</span><span class="small mut" style="font-weight:700">objetivo ' + g + ' min</span></div><div class="row" style="align-items:baseline;gap:8px"><span class="u" style="font-size:40px;font-weight:700" data-cu="' + cur + '">' + cur + '</span><span class="mut" style="font-weight:700">min</span><span style="margin-left:auto;font-size:14px;font-weight:800;color:' + (cur >= g ? 'var(--acc)' : 'var(--mut)') + '">' + (cur >= g ? 'Cumplido' : 'Faltan ' + (g - cur) + ' min') + '</span></div>' +
      '<div style="position:relative;height:150px;display:flex;align-items:flex-end;gap:5px;padding-top:10px">' + (g ? '<div style="position:absolute;left:0;right:0;bottom:' + (g / mx * 140).toFixed(0) + 'px;border-top:1px dashed rgba(255,107,44,.6)"></div>' : '') + weeks.map(function (v, i) { return '<div class="grow" style="flex:1;height:' + Math.max(3, v / mx * 140).toFixed(0) + 'px;border-radius:6px;background:' + (g && v >= g ? 'var(--acc)' : v ? 'rgba(255,107,44,.35)' : 'rgba(255,255,255,.08)') + ';animation-delay:' + (0.2 + i * 0.04).toFixed(2) + 's" title="' + v + ' min"></div>'; }).join('') + '</div><div class="row small mut" style="justify-content:space-between;font-weight:700"><span>hace 11 sem.</span><span>' + ok + ' de 11 semanas cumplidas</span><span>esta</span></div></div>';
    if (ses.length) {
      h += '<div class="card up col" style="animation-delay:.08s;gap:10px"><span class="label">Últimas 4 semanas</span>' + Object.keys(by).sort(function (a, b) { return by[b] - by[a]; }).map(function (k) { return '<div class="row" style="gap:10px"><span class="row" style="width:96px;gap:6px;font-weight:700;font-size:14px">' + ic(CARDIO[k] ? CARDIO[k].icon : 'act', 16, 'color:var(--acc)') + (CARDIO[k] || { n: k }).n + '</span><div style="flex:1;height:10px;border-radius:5px;background:rgba(255,255,255,.05)"><div class="bar" style="width:' + (by[k] / tot * 100).toFixed(0) + '%;height:10px;border-radius:5px;background:var(--acc)"></div></div><span class="small" style="width:56px;text-align:right;font-weight:700">' + by[k] + ' min</span></div>'; }).join('') + '</div>';
      h += '<div class="card tight up" style="animation-delay:.14s">' + ses.slice(0, 8).map(function (s) { var C = CARDIO[s.cardio_tipo] || { n: s.cardio_tipo }; return '<a class="li" href="#/resumen/' + s.id + '" style="color:var(--tx)"><span class="col" style="gap:2px"><b style="font-size:14px">' + C.n + '</b><span class="small mut">' + cap(shortDate(s.inicio)) + '</span></span><span class="small" style="font-weight:700;text-align:right">' + s.cardio_min + ' min' + (+s.cardio_dist ? ' · ' + (s.cardio_tipo === 'remo' ? fmt(s.cardio_dist) + ' m' : kg(s.cardio_dist) + ' km') : '') + (+s.cardio_nivel ? '<br><span class="mut">nivel ' + s.cardio_nivel + '</span>' : '') + '</span></a>'; }).join('') + '</div>';
    } else h += '<div class="card small mut" style="text-align:center">Todavía no hay cardio registrado.</div>';
    return h + '<p class="small mut" style="text-align:center;margin:0">El objetivo semanal se cambia en Ajustes.</p>';
  }

  /* FICHA */
  V.ficha = function (id) {
    var e = ex(id), H = idx().hist[id] || [], b = bestOf(id), col = dayOfEx(id) === '#71717A' ? '#FF6B2C' : dayOfEx(id), iso = isIso(id);
    var rr = alive(S.rut).filter(function (x) { return x.ejercicio_id === id; })[0];
    var h = header('', 'javascript:history.back()', '<span class="pill" style="background:' + col + '22;color:' + col + '">' + (rr ? TYPE[rr.dia].n + ' · ' : '') + GROUPS[e.grupo].toUpperCase() + '</span><button class="iconbtn" data-a="exEdit" data-id="' + esc(id) + '" aria-label="Editar ejercicio">' + ic('pencil', 18) + '</button>');
    h += '<div class="up" style="animation-delay:.02s">' + exHero(id, 170) + '</div>';
    h += '<div class="col up" style="gap:6px"><h1 class="u h2" style="font-size:26px">' + esc(e.nombre) + '</h1><span class="small mut" style="font-size:14px">' + esc(e.equipo || '') + (rr ? ' · ' + rr.series + ' × ' + rr.reps_min + '–' + rr.reps_max + ' · RIR ' + esc(rr.rir) : '') + (modoOf(id) ? ' · ' + unitOf(id) : '') + ' · <button data-a="incEdit" data-id="' + esc(id) + '" style="color:var(--acc);font-weight:700">saltos de ' + kg(e.incremento) + ' kg</button></span></div>';
    if (!H.length) return h + '<div class="card col" style="gap:6px"><b>Sin registros todavía</b><span class="small mut">Cuando lo hagas en un entreno verás aquí tu evolución.</span></div>' + noteCard(e);
    var first = H[0], maxTop = Math.max.apply(null, H.map(function (x) { return x.top; })), bestDate = b.set ? shortDate(idx().sesById[b.set.sesion_id].inicio) : '';
    h += '<div class="grid2 up" style="animation-delay:.05s"><div class="card col" style="padding:14px;gap:4px"><span class="label">Mejor serie</span><span class="u" style="font-size:24px;font-weight:700">' + (b.set ? wFmt(id, b.set.peso) + ' × ' + b.set.reps : '—') + '</span><span class="small mut">' + bestDate + '</span></div>' +
      (iso ? '<div class="card col" style="padding:14px;gap:4px;background:var(--accSoft);border-color:var(--accLine)"><span class="label" style="color:var(--accTx)">Peso máximo</span><span class="u" style="font-size:24px;font-weight:700;color:var(--acc)">' + wFmt(id, maxTop) + ' kg</span><span class="small" style="color:var(--accTx);font-weight:700">' + (maxTop > first.top ? '+' + kg(maxTop - first.top) + ' kg desde ' + MES[new Date(first.t).getMonth()] : 'desde ' + shortDate(first.t)) + '</span></div>'
        : '<div class="card col" style="padding:14px;gap:4px;background:var(--accSoft);border-color:var(--accLine)"><span class="label" style="color:var(--accTx)">1RM estimado</span><span class="u" style="font-size:24px;font-weight:700;color:var(--acc)">' + (b.e1 ? fmt(b.e1, 1).replace(',0', '') + ' kg' : '—') + '</span><span class="small" style="color:var(--accTx);font-weight:700">' + (first.e1 && b.e1 > first.e1 ? '+' + kg(Math.round((b.e1 - first.e1) * 10) / 10) + ' kg desde ' + MES[new Date(first.t).getMonth()] : 'desde ' + shortDate(first.t)) + '</span></div>') + '</div>';
    var met = UI.fMetric; if (iso && met === 'e1') met = 'w'; if (!iso && met === 'vol') met = 'e1';
    var data = UI.fRange === 'all' ? H : H.filter(function (x) { return x.t >= Date.now() - 91 * 864e5; }); if (!data.length) data = H.slice(-1);
    var vals = data.map(function (x) { return met === 'e1' ? (x.e1 || x.top) : met === 'vol' ? x.vol : x.top; });
    var sel = UI.fSel < 0 || UI.fSel >= data.length ? data.length - 1 : UI.fSel, ds = data[sel], bs = ds.bestSet || ds.sets[0];
    var mOpts = iso ? [['w', 'Peso'], ['vol', 'Volumen']] : [['e1', '1RM est.'], ['w', 'Peso']];
    var big = met === 'e1' ? fmt(ds.e1 || ds.top, 1).replace(',0', '') + ' kg' : met === 'vol' ? fmt(ds.vol) + ' kg' : wFmt(id, ds.top) + ' kg × ' + bs.reps;
    var sub = shortDate(ds.t) + ' · ' + (met === 'w' ? ds.sets.length + ' series' : wFmt(id, bs.peso) + ' kg × ' + bs.reps) + (ds.dl ? ' · descarga' : '');
    h += '<div class="card up col" style="animation-delay:.1s;gap:10px;padding:14px"><div class="row" style="justify-content:space-between;gap:8px"><div class="mini-seg">' + mOpts.map(function (o) { return '<button class="' + (met === o[0] ? 'on' : '') + '" data-a="fMetric" data-t="' + o[0] + '">' + o[1] + '</button>'; }).join('') + '</div><div class="mini-seg"><button class="' + (UI.fRange === '3m' ? 'on' : '') + '" data-a="fRange" data-t="3m">3 meses</button><button class="' + (UI.fRange === 'all' ? 'on' : '') + '" data-a="fRange" data-t="all">Todo</button></div></div>' +
      '<div class="col" style="height:40px;justify-content:center;gap:0"><span class="u" style="font-size:20px;font-weight:700">' + big + '</span><span class="small mut" style="font-weight:700">' + sub + '</span></div>' +
      chart(vals, { dots: 'fDot', sel: sel, color: col, fill: col + '17', x0: shortDate(data[0].t).slice(4), x1: shortDate(data[data.length - 1].t).slice(4), yfmt: function (v) { return fmt(Math.round(v)) + ' kg'; }, h: 160, aria: 'Evolución de ' + e.nombre }) + '</div>';
    var stl = stall(id);
    if (stl) {
      var nr = rr ? newRange(rr) : null;
      h += '<div class="card up col" style="animation-delay:.13s;gap:10px;background:rgba(255,209,102,.07);border-color:rgba(255,209,102,.3)"><span class="row" style="gap:10px">' + ic('target', 20, 'color:var(--gold)') + '<b style="color:var(--gold)">Estancado: ' + stl + ' sesiones sin mejorar</b></span><span class="small" style="line-height:1.45;color:#FFE7A8">Dos salidas: empezar la próxima sesión un 10 % más bajo y reconstruir, o cambiar el rango de repeticiones para darle un estímulo distinto.</span><div class="grid2"><button class="btn dark" style="height:46px;font-size:13px" data-a="fDrop" data-id="' + esc(id) + '">' + (CFG.dropNext && CFG.dropNext[id] ? 'Bajará un 10 % ✓' : 'Bajar 10 % la próxima') + '</button>' + (nr ? '<button class="btn dark" style="height:46px;font-size:13px" data-a="fRangeSet" data-id="' + esc(rr.id) + '">Rango ' + nr[0] + '–' + nr[1] + '</button>' : '') + '</div></div>';
    } else if (rr) {
      var sg = suggestion(rr), last = H[H.length - 1];
      h += '<div class="card up row" style="animation-delay:.15s;align-items:flex-start;background:var(--accSoft);border-color:rgba(255,107,44,.25)">' + ic('target', 20, 'color:var(--acc);margin-top:1px') + '<span style="font-size:14px;line-height:1.5;font-weight:600;color:var(--accTx)">' + (sg ? '<b style="color:var(--tx)">Próximo entreno: ' + wFmt(id, sg) + ' kg.</b> Ya hiciste ' + rr.reps_max + ' reps en todas las series dos veces seguidas.' : 'Próximo objetivo: <b style="color:var(--tx)">' + wFmt(id, last.top) + ' kg × ' + rr.reps_max + ' en las ' + rr.series + ' series</b>. Cuando lo hagas dos sesiones seguidas, te propondré ' + wFmt(id, last.top + +e.incremento) + ' kg.') + '</span></div>';
    }
    h += '<div class="card tight up" style="animation-delay:.2s"><div class="label" style="padding:10px 0 4px">Últimas sesiones</div>' + H.slice(-8).reverse().map(function (x, i) { var same = x.sets.every(function (s) { return +s.peso === x.top; }); return '<a class="li" href="#/resumen/' + x.sid + '" style="color:var(--tx)"><span class="col" style="gap:2px"><b style="font-size:14px">' + cap(shortDate(x.t)) + (x.dl ? ' <span class="pill" style="padding:2px 6px">descarga</span>' : '') + '</b><span class="small mut">' + (same ? wFmt(id, x.top) + ' × ' + x.sets.map(function (s) { return s.reps; }).join(', ') : x.sets.map(function (s) { return wFmt(id, s.peso) + '×' + s.reps; }).join(' · ')) + ' kg</span></span><span class="u" style="font-size:14px;font-weight:700;color:' + (i === 0 ? col : 'var(--tx)') + '">' + (iso ? fmt(x.vol) + ' kg' : x.e1 ? fmt(x.e1, 1).replace(',0', '') + ' kg' : '') + '</span></a>'; }).join('') + '</div>';
    return h + noteCard(e) + (hasImg(id) ? '<p class="small mut" style="margin:0;text-align:center;font-size:11px">Ilustración: Everkinetic · CC BY-SA 4.0</p>' : '');
  };
  A.fDrop = function (d) { CFG.dropNext = CFG.dropNext || {}; CFG.dropNext[d.id] = 1; saveCfg(); toast('La próxima sesión empezará un 10 % más bajo'); rerender(); };
  A.fRangeSet = function (d) { var r = S.rut[d.id], nr = newRange(r); r.reps_min = nr[0]; r.reps_max = nr[1]; put('rut', r); CFG.resets[r.ejercicio_id] = Date.now(); saveCfg(); toast('Nuevo rango: ' + nr[0] + '–' + nr[1] + ' reps'); rerender(); };
  function noteCard(e) { return '<button class="card up col" style="animation-delay:.25s;gap:8px;text-align:left" data-a="note" data-id="' + esc(e.id) + '"><span class="label row" style="gap:6px">' + ic('pencil', 14) + 'Nota de la máquina</span><span style="font-size:15px;font-weight:600;line-height:1.4;color:' + (e.nota ? 'var(--tx)' : 'var(--mut)') + '">' + (e.nota ? esc(e.nota) : 'Toca para añadir (asiento, agarre, posición…)') + '</span></button>'; }

  /* HISTORIAS */
  function monthStats(y, m) {
    var I = idx(), from = new Date(y, m, 1).getTime(), to = new Date(y, m + 1, 1).getTime();
    var ses = I.ses.filter(function (s) { return s.inicio >= from && s.inicio < to; });
    var prevFrom = new Date(y, m - 1, 1).getTime(), prevKg = I.ses.filter(function (s) { return s.inicio >= prevFrom && s.inicio < from; }).reduce(function (a, s) { return a + +s.volumen_kg; }, 0);
    var o = { y: y, m: m, key: y + '-' + pad2(m + 1), ses: ses.length, min: 0, kg: 0, prs: [], days: {}, prevKg: prevKg, weeks: [] };
    ses.forEach(function (s) { o.min += +s.duracion_min + (+s.cardio_min ? 0 : 0); o.kg += +s.volumen_kg; o.days[new Date(s.inicio).getDate()] = s.tipo; (I.bySes[s.id] || []).forEach(function (x) { if (+x.record === 1) o.prs.push(x); }); });
    var best = null;
    Object.keys(I.hist).forEach(function (id) {
      var h = I.hist[id], inM = h.filter(function (x) { return x.t >= from && x.t < to; }); if (!inM.length) return;
      var before = h.filter(function (x) { return x.t < from; }), ref = before.length ? before.reduce(function (a, x) { return x.top > a.top ? x : a; }) : inM[0];
      var top = inM.reduce(function (a, x) { return x.top > a.top ? x : a; });
      var d = top.top - ref.top; if (d > 0 && (!best || d > best.d)) best = { id: id, d: d, from: ref.top, to: top.top, reps: (top.bestSet || top.sets[0]).reps, series: h.filter(function (x) { return x.t < to; }).slice(-6).map(function (x) { return x.top; }) };
    });
    o.best = best;
    var wc = weekCounts(), w = monday(from); if (w.getTime() < from) w.setDate(w.getDate() + 7);
    while (w.getTime() < to && w.getTime() <= Date.now()) { o.weeks.push(wc[dayKey(w)] || 0); w.setDate(w.getDate() + 7); }
    var wk = [0, 0, 0, 0, 0]; ses.forEach(function (s) { var i = Math.min(4, Math.floor((new Date(s.inicio).getDate() - 1) / 7)); wk[i] += +s.volumen_kg; }); o.wkVol = wk.filter(function (v, i) { return i < 4 || v; });
    return o;
  }
  function storyMonth() {
    var n = new Date(), cur = monthStats(n.getFullYear(), n.getMonth()), prev = monthStats(n.getFullYear(), n.getMonth() - 1 < 0 ? 11 : n.getMonth() - 1);
    if (n.getMonth() === 0) prev = monthStats(n.getFullYear() - 1, 11);
    if (prev.ses && (n.getDate() <= 10 || cur.ses < 4)) return prev;
    return cur.ses ? cur : (prev.ses ? prev : null);
  }
  var story = null;
  V.historias = function (k) {
    var p = String(k || '').split('-'), st = monthStats(+p[0], +p[1] - 1);
    story = { st: st, i: 0, t0: Date.now(), dur: 5200 };
    return '<div id="storyHost"></div>';
  };
  V.historias_after = function () { storyRender(); clearInterval(story.iv); story.iv = setInterval(storyTick, 60); };
  function storySlides(st) {
    var mn = MESL[st.m], g = CFG.goal, okW = st.weeks.filter(function (c) { return c >= g; }).length, mxW = Math.max.apply(null, st.wkVol.concat([1]));
    var top = st.prs.slice().sort(function (a, b) { return b.e1rm - a.e1rm; }), seen = {}, uniq = top.filter(function (x) { if (seen[x.ejercicio_id]) return false; seen[x.ejercicio_id] = 1; return true; });
    var vsPrev = st.prevKg ? (st.kg - st.prevKg) / st.prevKg * 100 : null;
    var cal = '', first = (new Date(st.y, st.m, 1).getDay() + 6) % 7, nd = new Date(st.y, st.m + 1, 0).getDate();
    for (var i = 0; i < first; i++) cal += '<div></div>';
    for (var d = 1; d <= nd; d++) cal += '<div style="aspect-ratio:1;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;background:' + (st.days[d] ? '#0B0B0D' : 'rgba(11,11,13,.12)') + ';color:' + (st.days[d] ? TYPE[st.days[d]].c : 'rgba(11,11,13,.55)') + '">' + d + '</div>';
    var line = '';
    if (st.best && st.best.series.length > 1) { var s = st.best.series, mn2 = Math.min.apply(null, s), mx2 = Math.max.apply(null, s); line = '<svg viewBox="0 0 330 170" width="100%" height="170" aria-hidden="true"><polyline class="draw" pathLength="1" points="' + s.map(function (v, i) { return (10 + i * 310 / (s.length - 1)).toFixed(1) + ',' + (150 - (v - mn2) / ((mx2 - mn2) || 1) * 120).toFixed(1); }).join(' ') + '" fill="none" stroke="#A78BFA" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>'; }
    return [
      { bg: '#FF6B2C', fg: '#0B0B0D', html: '<svg viewBox="0 0 200 200" width="420" height="420" aria-hidden="true" style="position:absolute;right:-170px;top:90px;opacity:.14;animation:spin 18s linear infinite"><circle cx="100" cy="100" r="90" fill="none" stroke="#0B0B0D" stroke-width="22" stroke-dasharray="30 18"/></svg><div class="col" style="gap:10px;position:relative"><span class="label up" style="color:inherit;letter-spacing:.2em">RAYOFIT · Resumen</span><h1 class="u zoom" style="margin:0;font-size:' + Math.min(64, Math.floor(330 / (mn.length * 0.9))) + 'px;line-height:.92;font-weight:900;letter-spacing:-.03em;animation-delay:.1s">' + mn.toUpperCase() + '</h1><span class="up" style="font-size:20px;font-weight:700;animation-delay:.25s">Así fue tu mes</span></div><div class="col up" style="gap:12px;animation-delay:.4s;position:relative"><div class="row" style="align-items:baseline;gap:10px"><span class="u" style="font-size:54px;font-weight:800" data-cu="' + st.ses + '">' + st.ses + '</span><span style="font-size:18px;font-weight:700">sesiones</span></div><div class="row" style="align-items:baseline;gap:10px"><span class="u" style="font-size:54px;font-weight:800" data-cu="' + Math.round(st.min / 60) + '">' + Math.round(st.min / 60) + '</span><span style="font-size:18px;font-weight:700">horas de pesas</span></div></div>' },
      { bg: '#0B0B0D', fg: '#F4F4F5', html: '<div class="col" style="gap:8px"><span class="up mut" style="font-size:18px;font-weight:700">Has movido</span><span class="u up" style="font-size:' + (st.kg >= 1e6 ? 46 : 58) + 'px;font-weight:800;letter-spacing:-.03em;color:var(--acc);line-height:1;animation-delay:.08s" data-cu="' + Math.round(st.kg) + '">' + fmt(st.kg) + '</span><span class="u up" style="font-size:22px;font-weight:700;animation-delay:.12s">kilos</span><p class="up" style="margin:12px 0 0;font-size:18px;font-weight:600;line-height:1.45;color:#D4D4D8;animation-delay:.3s">Lo que pesan <b style="color:var(--tx)">' + fmt(Math.max(1, Math.round(st.kg / 6000))) + ' elefantes africanos</b>.' + (vsPrev != null ? ' Un ' + fmt(Math.abs(vsPrev)) + ' % ' + (vsPrev >= 0 ? 'más' : 'menos') + ' que en ' + MESL[(st.m + 11) % 12] + '.' : '') + '</p></div><div class="col" style="gap:10px"><div class="row" style="align-items:flex-end;gap:14px;height:200px">' + st.wkVol.map(function (v, i) { return '<div class="col" style="flex:1;align-items:center;gap:8px;height:100%;justify-content:flex-end"><span class="u" style="font-size:13px;font-weight:700">' + Math.round(v / 1000) + 'k</span><div class="grow" style="width:100%;height:' + Math.max(2, v / mxW * 100).toFixed(0) + '%;border-radius:14px;background:' + (v === mxW ? 'var(--acc)' : 'rgba(255,107,44,.35)') + ';animation-delay:' + (0.25 + i * 0.1) + 's"></div></div>'; }).join('') + '</div><div class="row" style="gap:14px">' + st.wkVol.map(function (v, i) { return '<span class="small mut" style="flex:1;text-align:center;font-weight:700">Sem ' + (i + 1) + '</span>'; }).join('') + '</div></div>' },
      { bg: '#141417', fg: '#F4F4F5', html: '<div class="col" style="gap:26px"><div class="row" style="gap:18px"><div class="zoom ico" style="width:96px;height:96px;border-radius:30px;background:var(--gold);color:var(--bg)">' + ic('trophy', 50, 'stroke-width:1.8') + '</div><div class="col up" style="animation-delay:.1s;gap:0"><span class="u" style="font-size:72px;font-weight:800;line-height:1" data-cu="' + st.prs.length + '">' + st.prs.length + '</span><span style="font-size:18px;font-weight:700">' + (st.prs.length === 1 ? 'récord nuevo' : 'récords nuevos') + '</span></div></div><div class="col" style="gap:10px">' + (uniq.length ? uniq.slice(0, 3).map(function (x, i) { return '<div class="up row" style="animation-delay:' + (0.25 + i * 0.08) + 's;justify-content:space-between;padding:16px 18px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.07)"><span class="col" style="gap:2px"><b style="font-size:16px">' + esc(aliasOf(x.ejercicio_id)) + '</b><span class="small mut">' + shortDate(parseDay(x.fecha)) + '</span></span><span class="u" style="font-size:17px;font-weight:700;color:var(--acc)">' + kg(x.peso) + ' × ' + x.reps + '</span></div>'; }).join('') + (uniq.length > 3 ? '<div class="up small mut" style="animation-delay:.5s;padding:0 4px">+ ' + (uniq.length - 3) + ' ejercicios más con récord</div>' : '') : '<p class="mut" style="font-size:16px;line-height:1.5">Este mes no hubo récords. Toca apretar en ' + MESL[(st.m + 1) % 12] + '.</p>') + '</div></div>' },
      { bg: '#0B0B0D', fg: '#F4F4F5', html: st.best ? '<div class="col" style="gap:10px"><span class="up mut" style="font-size:18px;font-weight:700">El que más ha subido</span><h2 class="u up" style="margin:0;font-size:' + (aliasOf(st.best.id).length > 14 ? 30 : 42) + 'px;font-weight:800;line-height:1.05;animation-delay:.08s">' + esc(aliasOf(st.best.id)) + '</h2><span class="u zoom" style="font-size:88px;font-weight:900;color:#A78BFA;letter-spacing:-.04em;line-height:1;animation-delay:.25s">+' + kg(st.best.d) + '</span><span class="up" style="font-size:18px;font-weight:700;animation-delay:.35s">kg · de ' + kg(st.best.from) + ' a ' + kg(st.best.to) + ' kg × ' + st.best.reps + '</span></div>' + line : '<div class="col" style="gap:10px"><span class="mut" style="font-size:18px;font-weight:700">El que más ha subido</span><p style="font-size:22px;font-weight:700;line-height:1.4">Este mes has consolidado pesos. La subida llega.</p></div>' },
      { bg: '#FF6B2C', fg: '#0B0B0D', html: '<div class="col" style="gap:6px"><span class="label up" style="color:inherit;letter-spacing:.2em">Constancia</span><span class="u zoom" style="font-size:96px;font-weight:900;line-height:1;letter-spacing:-.04em;animation-delay:.1s">' + okW + '/' + st.weeks.length + '</span><span class="up" style="font-size:20px;font-weight:700;animation-delay:.2s">semanas cumplidas.' + (streak() > 1 ? ' Llevas ' + streak() + ' seguidas.' : '') + '</span></div><div class="up" style="display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px;animation-delay:.3s">' + cal + '</div><button class="btn" style="background:#0B0B0D;color:#F4F4F5;position:relative;z-index:6" data-a="shareStory">' + ic('share', 20) + 'Compartir</button>' }
    ];
  }
  function storyRender() {
    var host = $('#storyHost'); if (!host || !story) return;
    var sl = storySlides(story.st), s = sl[story.i];
    var dark = s.fg === '#0B0B0D';
    host.innerHTML = '<div class="story" style="background:' + s.bg + ';color:' + s.fg + '"><div class="bars">' + sl.map(function (_, i) { return '<div style="background:' + (dark ? 'rgba(11,11,13,.2)' : 'rgba(255,255,255,.18)') + '"><i id="sb' + i + '" style="background:' + (dark ? '#0B0B0D' : '#F4F4F5') + ';width:' + (i < story.i ? 100 : 0) + '%"></i></div>'; }).join('') + '</div>' +
      '<div class="row" style="position:absolute;left:12px;right:12px;top:calc(var(--sat) + 26px);justify-content:space-between;z-index:6"><span class="row" style="gap:8px;font-size:14px;font-weight:800"><span class="ico" style="width:28px;height:28px;border-radius:9px;background:#0B0B0D;color:var(--acc);border:1px solid rgba(255,255,255,.15)">' + ic('zap', 15) + '</span>RAYOFIT</span><a href="#/progreso" aria-label="Cerrar historias" class="ico" style="width:44px;height:44px;color:inherit">' + ic('x', 24) + '</a></div>' +
      '<div class="slide">' + s.html + '</div><div class="tap"><button style="width:35%" data-a="storyGo" data-v="-1" aria-label="Anterior"></button><button style="flex:1" data-a="storyGo" data-v="1" aria-label="Siguiente"></button></div></div>';
    countUps();
  }
  function storyTick() {
    if (!story || route.r !== 'historias') { if (story) clearInterval(story.iv); return; }
    var p = Math.min(1, (Date.now() - story.t0) / story.dur), b = $('#sb' + story.i); if (b) b.style.width = (p * 100).toFixed(1) + '%';
    if (p >= 1 && story.i < 4) { story.i++; story.t0 = Date.now(); storyRender(); }
  }
  A.storyGo = function (d) { if (!story) return; var n = story.i + +d.v; if (n > 4) { go('#/progreso'); return; } story.i = Math.max(0, n); story.t0 = Date.now(); storyRender(); };
  A.shareStory = function () {
    var st = story.st, txt = 'Mi ' + MESL[st.m] + ' en RAYOFIT: ' + st.ses + ' sesiones, ' + fmt(st.kg) + ' kg movidos y ' + st.prs.length + ' récords.';
    if (navigator.share) navigator.share({ text: txt }).catch(function () {}); else { try { navigator.clipboard.writeText(txt); toast('Copiado'); } catch (e) {} }
  };

  /* HISTORIAL */
  V.historial = function () {
    var I = idx(), now = new Date(), wc = weekCounts(), g = CFG.goal, stk = streak(), bst = bestStreak();
    if (!UI.calMonth) UI.calMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    var cm = UI.calMonth, y = cm.getFullYear(), m = cm.getMonth();
    var h = '<h1 class="u h1 up" style="margin:0 4px">Historial</h1>';
    var cols = '', w = monday(now); w.setDate(w.getDate() - 7 * 11);
    for (var i = 0; i < 12; i++) { var c = wc[dayKey(w)] || 0, dots = ''; for (var j = g; j >= 1; j--) dots += '<div class="grow" style="height:' + Math.max(6, Math.floor(36 / g)) + 'px;border-radius:4px;background:' + (c >= j ? (c >= g ? 'var(--acc)' : 'rgba(255,107,44,.4)') : 'rgba(255,255,255,' + (i === 11 ? '.04' : '.07') + ')') + ';animation-delay:' + (0.2 + i * 0.04).toFixed(2) + 's"></div>'; cols += '<div class="col" style="gap:3px;justify-content:flex-end;height:' + (g * Math.max(6, Math.floor(36 / g)) + (g - 1) * 3) + 'px" title="' + c + ' sesiones">' + dots + '</div>'; w.setDate(w.getDate() + 7); }
    h += '<section class="card up col" style="animation-delay:.05s;border-radius:24px;padding:18px;gap:14px"><div class="row" style="justify-content:space-between;align-items:flex-start"><div class="col" style="gap:2px"><span class="label">Constancia</span><span><span class="u" style="font-size:40px;font-weight:700;color:var(--acc)" data-cu="' + stk + '">' + stk + '</span><span style="font-size:16px;font-weight:700"> semanas seguidas</span></span><span class="small mut">Objetivo: ' + g + ' sesiones por semana · récord ' + bst + '</span></div><span class="ico" style="width:46px;height:46px;border-radius:15px;background:var(--accSoft);color:var(--acc)">' + ic('flame', 24) + '</span></div><div style="display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:5px;align-items:end">' + cols + '</div><div class="row small mut" style="justify-content:space-between;font-weight:700"><span>hace 11 sem.</span><span>esta semana</span></div></section>';
    var byDay = {}; I.ses.forEach(function (s) { (byDay[dayKey(s.inicio)] = byDay[dayKey(s.inicio)] || []).push(s); });
    var first = (new Date(y, m, 1).getDay() + 6) % 7, nd = new Date(y, m + 1, 0).getDate(), today = dayKey(now), cal = '';
    for (i = 0; i < first; i++) cal += '<span></span>';
    for (var d = 1; d <= nd; d++) {
      var k = y + '-' + pad2(m + 1) + '-' + pad2(d), ss = byDay[k], t = ss ? TYPE[ss[ss.length - 1].tipo] : null, fut = k > today;
      cal += '<button class="d press' + (UI.calSel === k ? ' sel' : '') + (k === today && !ss ? ' today' : '') + (fut ? ' fut' : '') + '" data-a="calPick" data-k="' + k + '"' + (fut ? ' disabled' : '') + ' aria-label="' + d + ' de ' + MESL[m] + (t ? ', ' + t.n : '') + '" style="' + (t ? 'background:' + t.c + ';color:var(--bg)' : '') + '">' + d + (t ? '<small>' + cap(t.n.toLowerCase()) + '</small>' : '') + '</button>';
    }
    h += '<section class="card up col" style="animation-delay:.1s;border-radius:24px;gap:12px"><div class="row" style="justify-content:space-between"><button class="iconbtn" style="width:40px;height:40px" data-a="calMove" data-v="-1" aria-label="Mes anterior">' + ic('left') + '</button><span class="u" style="font-size:17px;font-weight:700">' + cap(MESL[m]) + ' ' + y + '</span><button class="iconbtn" style="width:40px;height:40px" data-a="calMove" data-v="1" aria-label="Mes siguiente"' + (y === now.getFullYear() && m === now.getMonth() ? ' disabled' : '') + '>' + ic('right') + '</button></div><div class="row small" style="gap:12px;font-weight:800;justify-content:center"><span style="color:var(--push)">● Push</span><span style="color:var(--pull)">● Pull</span><span style="color:var(--leg)">● Leg</span></div><div class="cal small mut" style="text-align:center;font-weight:800"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span></div><div class="cal">' + cal + '</div></section>';
    var list;
    if (UI.calSel) list = byDay[UI.calSel] || [];
    else list = I.ses.filter(function (s) { var dd = new Date(s.inicio); return dd.getFullYear() === y && dd.getMonth() === m; }).reverse();
    h += '<div class="col up" style="gap:8px;animation-delay:.15s"><span class="label" style="padding:0 4px">' + (UI.calSel ? cap(DOWL[parseDay(UI.calSel).getDay()]) + ' ' + parseDay(UI.calSel).getDate() + ' ' + MES[m] : 'Sesiones de ' + MESL[m]) + '</span>' +
      (list.length ? list.map(function (s) { var T = TYPE[s.tipo]; return swipeRow('<a class="row" href="#/resumen/' + s.id + '" style="padding:12px 14px;color:var(--tx)"><span class="ico u" style="width:44px;height:44px;border-radius:14px;background:' + T.soft + ';color:' + T.c + ';font-size:11px;font-weight:700">' + T.n + '</span><span class="col" style="flex:1;min-width:0;gap:2px"><b style="font-size:15px">' + cap(shortDate(s.inicio)) + '</b><span class="small mut">' + s.duracion_min + ' min · ' + fmt(s.volumen_kg) + ' kg · ' + s.series + ' series' + (+s.records ? ' · ' + s.records + ' récord' + (s.records > 1 ? 's' : '') : '') + (+s.descarga ? ' · descarga' : '') + '</span>' + (s.nota ? '<span class="small" style="color:#D4D4D8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">“' + esc(s.nota) + '”</span>' : '') + '</span>' + ic('right', 18, 'color:var(--mut)') + '</a>', 'sesDel', s.id); }).join('') + '<p class="small mut" style="text-align:center;margin:4px 0 0">Desliza a la izquierda para borrar</p>' : '<div class="card small mut" style="text-align:center">' + (UI.calSel === today ? 'Hoy toca ' + TYPE[nextType()].n + '. Aún no has entrenado.' : UI.calSel ? 'Día de descanso.' : 'Sin sesiones este mes.') + '</div>') + '</div>';
    return h;
  };
  function swipeRow(inner, act, id) { return '<div class="swipe"><button class="del" data-a="' + act + '" data-id="' + esc(id) + '" aria-label="Borrar">' + ic('trash', 20) + 'Borrar</button><div class="sb">' + inner + '</div></div>'; }

  /* DATOS */
  function periodo(per) {
    var now = new Date(), to = Date.now() + 1, from;
    if (per === 'sem') from = monday(now).getTime();
    else if (per === 'mes') from = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    else if (per === 'ano') from = new Date(now.getFullYear(), 0, 1).getTime();
    else { var f = idx().ses[0]; from = f ? monday(f.inicio).getTime() : monday(now).getTime(); }
    return { from: from, to: to, pfrom: per === 'todo' ? null : from - (to - from), pto: from };
  }
  function statsRange(from, to) {
    var I = idx(), ses = I.ses.filter(function (s) { return s.inicio >= from && s.inicio < to; });
    var o = { n: ses.length, min: 0, vol: 0, series: 0, reps: 0, prs: 0, mm: 0, wu: 0, notes: 0, type: { push: [0, 0], pull: [0, 0], leg: [0, 0] }, ex: {}, cmin: 0, ckm: 0, cm: 0, cn: 0, cby: {}, dow: [0, 0, 0, 0, 0, 0, 0], hours: [], longest: null, heaviest: null, ses: ses };
    ses.forEach(function (s) {
      o.min += +s.duracion_min || 0; o.vol += +s.volumen_kg || 0; o.series += +s.series || 0;
      if (o.type[s.tipo]) { o.type[s.tipo][0]++; o.type[s.tipo][1] += +s.volumen_kg || 0; }
      if (s.nota) o.notes++;
      var d = new Date(s.inicio); o.dow[(d.getDay() + 6) % 7]++; o.hours.push(d.getHours() + d.getMinutes() / 60);
      if (!o.longest || +s.duracion_min > +o.longest.duracion_min) o.longest = s;
      if (!o.heaviest || +s.volumen_kg > +o.heaviest.volumen_kg) o.heaviest = s;
      if (s.cardio_tipo && +s.cardio_min) { o.cn++; o.cmin += +s.cardio_min; o.cby[s.cardio_tipo] = (o.cby[s.cardio_tipo] || 0) + +s.cardio_min; if (s.cardio_tipo === 'remo') o.cm += +s.cardio_dist || 0; else o.ckm += +s.cardio_dist || 0; }
      (I.bySes[s.id] || []).forEach(function (x) {
        if (+x.calentamiento) { o.wu++; return; }
        o.reps += +x.reps || 0; if (+x.record === 1) o.prs++; if (+x.record === 2) o.mm++;
        var e = o.ex[x.ejercicio_id] = o.ex[x.ejercicio_id] || { vol: 0, sets: 0, ses: {} };
        e.vol += (x.carga !== undefined && x.carga !== '' ? +x.carga : +x.peso) * x.reps; e.sets++; e.ses[x.sesion_id] = 1;
      });
    });
    return o;
  }
  function delta(a, b) { if (b == null || !b) return ''; var d = (a - b) / b * 100; if (Math.abs(d) < 0.5) return '<span class="small mut" style="font-weight:700">= anterior</span>'; return '<span class="small" style="font-weight:800;color:' + (d > 0 ? 'var(--acc2)' : 'var(--mut)') + '">' + (d > 0 ? '▲ ' : '▼ ') + fmt(Math.abs(d)) + ' %</span>'; }
  V.datos = function (seg) {
    seg = seg || UI.dSeg || 'resumen'; UI.dSeg = seg;
    var h = '<h1 class="u h1 up" style="margin:0 4px">Datos</h1><div class="seg up" role="tablist" style="grid-template-columns:repeat(3,minmax(0,1fr));animation-delay:.05s">' + [['resumen', 'Resumen'], ['historial', 'Historial'], ['records', 'Récords']].map(function (t) { return '<button role="tab" aria-selected="' + (seg === t[0]) + '" class="press' + (seg === t[0] ? ' on' : '') + '" data-a="dSeg" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (seg === 'historial') return h + V.historial().replace(/^<h1[^>]*>Historial<\/h1>/, '');
    if (seg === 'records') return h + datosRecords();
    return h + datosResumen();
  };
  A.dSeg = function (d) { UI.dSeg = d.t; go('#/datos/' + d.t); };
  A.dPer = function (d) { UI.dPer = d.t; render({ noVT: true }); };
  function datosResumen() {
    var per = UI.dPer || 'mes', R = periodo(per), o = statsRange(R.from, R.to), pv = R.pfrom != null ? statsRange(R.pfrom, R.pto) : null;
    var plabel = { sem: 'Esta semana', mes: cap(MESL[new Date().getMonth()]), ano: 'Este año', todo: 'Desde el principio' }[per];
    var h = '<div class="mini-seg up" style="align-self:stretch;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));animation-delay:.08s">' + [['sem', 'Semana'], ['mes', 'Mes'], ['ano', 'Año'], ['todo', 'Todo']].map(function (t) { return '<button class="' + (per === t[0] ? 'on' : '') + '" data-a="dPer" data-t="' + t[0] + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (!o.n) return h + '<div class="card col up" style="gap:6px;align-items:flex-start"><b>Sin entrenos en este periodo</b><span class="small mut">Prueba con «Todo» o termina tu primera sesión.</span></div>';
    var reps = o.reps, kpi = [[o.n, 'sesiones', pv && pv.n, 0], [o.min / 60, 'horas de pesas', pv && pv.min / 60, 1], [o.vol / 1000, 'toneladas', pv && pv.vol / 1000, 1], [o.series, 'series', pv && pv.series, 0], [reps, 'repeticiones', pv && pv.reps, 0], [o.prs, 'récords', pv && pv.prs, 0]];
    h += '<div class="col up" style="gap:4px;animation-delay:.1s"><span class="label" style="padding:0 4px">' + plabel + (pv ? ' · vs. periodo anterior' : '') + '</span></div><div class="grid2">' + kpi.map(function (k, i) { return '<div class="card up col" style="animation-delay:' + (0.12 + i * 0.03).toFixed(2) + 's;padding:14px;gap:2px' + (i === 5 && k[0] ? ';background:var(--accSoft);border-color:var(--accLine)' : '') + '"><span class="u" style="font-size:26px;font-weight:700' + (i === 5 && k[0] ? ';color:var(--acc)' : '') + '" data-cu="' + k[0] + '" data-d="' + k[3] + '">' + fmt(k[0], k[3]) + '</span><span class="small mut" style="font-weight:700">' + k[1] + '</span>' + (pv ? delta(k[0], k[2]) : '') + '</div>'; }).join('') + '</div>';
    // constancia
    var wc = weekCounts(), w = monday(R.from), weeks = 0, ok = 0; while (w.getTime() < R.to) { weeks++; if ((wc[dayKey(w)] || 0) >= CFG.goal) ok++; w.setDate(w.getDate() + 7); }
    h += '<div class="card up col" style="gap:12px;animation-delay:.2s"><span class="label">Constancia</span><div class="grid3"><div class="stat"><b>' + ok + '/' + weeks + '</b><span>semanas cumplidas</span></div><div class="stat"><b>' + fmt(o.n / Math.max(1, weeks), 1) + '</b><span>sesiones / semana</span></div><div class="stat"><b>' + streak() + '</b><span>racha (récord ' + bestStreak() + ')</span></div></div>' +
      '<div class="grid3"><div class="stat"><b>' + Math.round(o.min / o.n) + '′</b><span>duración media</span></div><div class="stat"><b>' + fmt(o.vol / o.n / 1000, 1) + 't</b><span>volumen / sesión</span></div><div class="stat"><b>' + Math.round(o.series / o.n) + '</b><span>series / sesión</span></div></div></div>';
    // volumen por semana (o por día si es la semana)
    var bars = [];
    if (per === 'sem') { var d0 = monday(Date.now()); for (var i = 0; i < 7; i++) { var a0 = d0.getTime() + i * 864e5, v = 0; o.ses.forEach(function (s) { if (s.inicio >= a0 && s.inicio < a0 + 864e5) v += +s.volumen_kg; }); bars.push([['L', 'M', 'X', 'J', 'V', 'S', 'D'][i], v]); } }
    else { var w2 = monday(R.from), lim = new Date(monday(Date.now())); var all = []; while (w2 <= lim) { var vv = volWeek(new Date(w2)).v; all.push([w2.getDate() + '/' + (w2.getMonth() + 1), vv]); w2.setDate(w2.getDate() + 7); } bars = all.slice(-16); }
    var mx = Math.max.apply(null, bars.map(function (b) { return b[1]; }).concat([1]));
    h += '<div class="card up col" style="gap:10px;animation-delay:.24s"><div class="row" style="justify-content:space-between"><span class="label">Volumen por ' + (per === 'sem' ? 'día' : 'semana') + '</span><span class="small mut" style="font-weight:700">máx. ' + fmt(mx / 1000, 1) + 't</span></div><div class="row" style="align-items:flex-end;gap:4px;height:130px">' + bars.map(function (b, i) { return '<div class="col" style="flex:1;align-items:center;gap:4px;height:100%;justify-content:flex-end"><div class="grow" style="width:100%;height:' + Math.max(2, b[1] / mx * 110).toFixed(0) + 'px;border-radius:6px;background:' + (b[1] === mx ? 'var(--acc)' : b[1] ? 'rgba(255,107,44,.4)' : 'rgba(255,255,255,.08)') + ';animation-delay:' + (0.25 + i * 0.03).toFixed(2) + 's"></div><span style="font-size:9px;font-weight:700;color:var(--mut)">' + b[0] + '</span></div>'; }).join('') + '</div></div>';
    // reparto push / pull / leg
    var tv = o.type.push[1] + o.type.pull[1] + o.type.leg[1] || 1;
    h += '<div class="card up col" style="gap:10px;animation-delay:.28s"><span class="label">Reparto</span><div class="row" style="height:14px;border-radius:7px;overflow:hidden;gap:2px">' + TYPES.map(function (t) { return '<div class="bar" style="height:14px;width:' + (o.type[t][1] / tv * 100).toFixed(1) + '%;background:' + TYPE[t].c + '"></div>'; }).join('') + '</div><div class="grid3">' + TYPES.map(function (t) { return '<div class="col" style="gap:0"><b style="color:' + TYPE[t].c + '">' + TYPE[t].n + '</b><span class="small mut">' + o.type[t][0] + ' ses. · ' + fmt(o.type[t][1] / 1000, 1) + 't</span></div>'; }).join('') + '</div></div>';
    // músculos
    // ejercicios
    var exs = Object.keys(o.ex).sort(function (a, b) { return o.ex[b].vol - o.ex[a].vol; }), emx = exs.length ? o.ex[exs[0]].vol : 1;
    var freq = Object.keys(o.ex).sort(function (a, b) { return Object.keys(o.ex[b].ses).length - Object.keys(o.ex[a].ses).length; })[0];
    if (exs.length) h += '<div class="card up col" style="gap:8px;animation-delay:.36s"><span class="label">Ejercicios con más volumen</span>' + exs.slice(0, 6).map(function (id) { return '<a class="row" href="#/ficha/' + esc(id) + '" style="gap:10px;color:var(--tx)"><span style="width:118px;font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(aliasOf(id)) + '</span><div style="flex:1;height:10px;border-radius:5px;background:rgba(255,255,255,.05)"><div class="bar" style="width:' + (o.ex[id].vol / emx * 100).toFixed(0) + '%;height:10px;border-radius:5px;background:' + dayOfEx(id) + '"></div></div><span class="small" style="width:56px;text-align:right;font-weight:700">' + fmt(o.ex[id].vol / 1000, 1) + 't</span></a>'; }).join('') + '<span class="small mut">' + exs.length + ' ejercicios distintos · el más repetido: <b style="color:var(--tx)">' + esc(aliasOf(freq)) + '</b> (' + Object.keys(o.ex[freq].ses).length + ' sesiones)</span></div>';
    // mayores subidas
    var ups = [];
    Object.keys(idx().hist).forEach(function (id) { var hh = idx().hist[id].filter(function (x) { return x.t >= R.from && x.t < R.to && !x.dl; }); if (hh.length < 2) return; var f = hh[0].sc, b = Math.max.apply(null, hh.map(function (x) { return x.sc; })); if (f && b > f) ups.push([id, (b - f) / f * 100, hh[0], hh.filter(function (x) { return x.sc === b; })[0]]); });
    ups.sort(function (a, b) { return b[1] - a[1]; });
    if (ups.length) h += '<div class="card up col" style="gap:10px;animation-delay:.4s"><span class="label">Lo que más ha subido</span>' + ups.slice(0, 5).map(function (u, i) { var bs0 = u[2].bestSet, bs1 = u[3].bestSet; return '<a class="row" href="#/ficha/' + esc(u[0]) + '" style="gap:10px;color:var(--tx)"><span class="num' + (i === 0 ? ' on' : '') + '">' + (i + 1) + '</span><span class="col" style="flex:1;gap:0;min-width:0"><b style="font-size:14px">' + esc(aliasOf(u[0])) + '</b><span class="small mut">' + wFmt(u[0], bs0.peso) + '×' + bs0.reps + ' → ' + wFmt(u[0], bs1.peso) + '×' + bs1.reps + '</span></span><span class="u" style="font-size:15px;font-weight:700;color:var(--acc2)">+' + fmt(u[1]) + ' %</span></a>'; }).join('') + '</div>';
    // cardio
    h += '<div class="card up col" style="gap:10px;animation-delay:.44s"><span class="label">Cardio</span><div class="grid3"><div class="stat"><b>' + o.cmin + '′</b><span>minutos</span></div><div class="stat"><b>' + fmt(o.ckm, 1) + '</b><span>km' + (o.cm ? ' + ' + fmt(o.cm / 1000, 1) + ' km remo' : '') + '</span></div><div class="stat"><b>' + o.cn + '</b><span>sesiones</span></div></div>' + (o.cn ? '<div class="row small mut" style="gap:12px;flex-wrap:wrap;font-weight:700">' + Object.keys(o.cby).map(function (k) { return '<span>' + (CARDIO[k] || { n: k }).n + ' ' + o.cby[k] + '′</span>'; }).join('') + '</div>' : '') + '</div>';
    // cuerpo
    var bd = bodyRows().filter(function (b) { var t = parseDay(b.fecha).getTime(); return t >= R.from - 864e5 && t < R.to; });
    var bw = bd.filter(function (b) { return +b.peso; }), bc = bd.filter(function (b) { return +b.cintura; });
    if (bw.length || bc.length) h += '<div class="card up col" style="gap:10px;animation-delay:.48s"><span class="label">Cuerpo</span><div class="grid2">' + [[bw, 'peso', 'Peso', 'kg'], [bc, 'cintura', 'Cintura', 'cm']].map(function (q) { var arr = q[0]; if (!arr.length) return '<div class="stat"><b>—</b><span>' + q[2] + '</span></div>'; var d = +arr[arr.length - 1][q[1]] - +arr[0][q[1]]; return '<div class="stat"><b>' + fmt(arr[arr.length - 1][q[1]], 1) + ' ' + q[3] + '</b><span>' + q[2] + ' · ' + (d > 0 ? '+' : d < 0 ? '−' : '±') + kg(Math.abs(Math.round(d * 10) / 10)) + ' en el periodo</span></div>'; }).join('') + '</div></div>';
    // curiosidades
    var fav = o.dow.indexOf(Math.max.apply(null, o.dow)), hr = o.hours.reduce(function (a, b) { return a + b; }, 0) / o.hours.length;
    var cur = [['Día favorito', cap(DOWL[(fav + 1) % 7]) + ' (' + o.dow[fav] + ')'], ['Hora media de inicio', Math.floor(hr) + ':' + pad2(Math.round((hr % 1) * 60))], ['Sesión más larga', o.longest.duracion_min + ' min · ' + shortDate(o.longest.inicio)], ['Sesión con más volumen', fmt(o.heaviest.volumen_kg) + ' kg · ' + shortDate(o.heaviest.inicio)], ['Mejores marcas (más reps)', o.mm], ['Series de calentamiento', o.wu], ['Sesiones con nota', o.notes], ['Kilos por repetición', fmt(o.vol / Math.max(1, reps), 1) + ' kg']];
    h += '<div class="card tight up" style="animation-delay:.52s"><div class="label" style="padding:12px 0 4px">Más datos</div>' + cur.map(function (c) { return '<div class="li"><span class="small mut" style="font-weight:700;font-size:14px">' + c[0] + '</span><b style="font-size:14px;text-align:right">' + c[1] + '</b></div>'; }).join('') + '</div>';
    return h;
  }
  function datosRecords() {
    var I = idx(), H = I.hist, ids = Object.keys(H);
    if (!ids.length) return '<div class="card small mut" style="text-align:center">Aún no hay récords. Llegarán con los entrenos.</div>';
    var recent = []; I.ses.slice().reverse().forEach(function (s) { (I.bySes[s.id] || []).forEach(function (x) { if (+x.record === 1) recent.push(x); }); });
    var h = '';
    if (recent.length) h += '<div class="card up col" style="gap:10px;animation-delay:.08s"><div class="row" style="justify-content:space-between"><span class="label">Últimos récords</span><span class="small mut" style="font-weight:700">' + recent.length + ' en total</span></div>' + recent.slice(0, 8).map(function (x) { return '<a class="row" href="#/ficha/' + esc(x.ejercicio_id) + '" style="gap:10px;color:var(--tx)"><span class="ico" style="width:34px;height:34px;border-radius:11px;background:var(--gold);color:var(--bg)">' + ic('trophy', 16) + '</span><span class="col" style="flex:1;gap:0"><b style="font-size:14px">' + esc(aliasOf(x.ejercicio_id)) + '</b><span class="small mut">' + shortDate(I.sesById[x.sesion_id].inicio) + '</span></span><span class="u" style="font-size:15px;font-weight:700;color:var(--acc)">' + wFmt(x.ejercicio_id, x.peso) + ' × ' + x.reps + '</span></a>'; }).join('') + '</div>';
    Object.keys(GROUPS).forEach(function (g) {
      var list = ids.filter(function (id) { return ex(id).grupo === g; }); if (!list.length) return;
      h += '<div class="card tight up" style="animation-delay:.12s"><div class="label" style="padding:12px 0 4px">' + GROUPS[g] + '</div>' + list.map(function (id) { var b = bestOf(id), mxw = Math.max.apply(null, H[id].map(function (x) { return x.top; })), bs = b.set; return '<a class="li" href="#/ficha/' + esc(id) + '" style="color:var(--tx)"><span class="row" style="gap:10px;min-width:0">' + thumb(id, 44, 34) + '<span class="col" style="gap:2px;min-width:0"><b style="font-size:14px">' + esc(aliasOf(id)) + '</b><span class="small mut">' + (bs ? 'Mejor serie ' + wFmt(id, bs.peso) + ' × ' + bs.reps + ' · ' + shortDate(I.sesById[bs.sesion_id].inicio) : '') + '</span></span></span><span class="col" style="align-items:flex-end;gap:0;flex-shrink:0"><span class="u" style="font-size:15px;font-weight:700">' + (isIso(id) || !b.e1 ? wFmt(id, mxw) + ' kg' : fmt(b.e1, 1).replace(',0', '') + ' kg') + '</span><span class="small mut">' + (isIso(id) || !b.e1 ? 'peso máx.' : '1RM est.') + '</span></span></a>'; }).join('') + '</div>';
    });
    return h;
  }

  /* ÚTILES */
  V.utiles = function () {
    if (UI.tool !== 'rm' && UI.tool !== 'discos') UI.tool = 'rm';
    var h = '<h1 class="u h1 up" style="margin:0 4px">Herramientas</h1><div class="seg up" role="tablist" style="grid-template-columns:repeat(2,minmax(0,1fr))"><button role="tab" aria-selected="' + (UI.tool === 'rm') + '" class="' + (UI.tool === 'rm' ? 'on' : '') + '" data-a="tool" data-t="rm">1RM</button><button role="tab" aria-selected="' + (UI.tool === 'discos') + '" class="' + (UI.tool === 'discos' ? 'on' : '') + '" data-a="tool" data-t="discos">Discos</button></div>';
    if (UI.tool === 'discos') {
      var bar = UI.dBar || 20, w = Math.max(bar, UI.wW), pl = plates(w, bar);
      h += '<section class="card up col" style="border-radius:24px;gap:14px"><div class="row" style="justify-content:space-between"><span class="small mut" style="font-size:14px;font-weight:700">Peso total</span><div class="mini-seg">' + [[20, 'Barra 20'], [15, '15'], [10, 'Z 10']].map(function (b) { return '<button class="' + (bar === b[0] ? 'on' : '') + '" data-a="dBar" data-v="' + b[0] + '">' + b[1] + '</button>'; }).join('') + '</div></div>' +
        '<div class="row" style="justify-content:space-between"><button class="step press" data-a="wW" data-v="-2.5" aria-label="Restar 2,5 kg">−2,5</button><button class="val" data-a="wWType" aria-label="Escribir peso"><b>' + kg(w) + '</b><span>kg</span></button><button class="step press" data-a="wW" data-v="2.5" aria-label="Sumar 2,5 kg">+2,5</button></div>' +
        barbellSVG(pl) + '<div class="col" style="gap:6px;align-items:center"><span class="u" style="font-size:17px;font-weight:700">' + (pl.length ? pl.map(kg).join(' + ') : 'Barra sola') + '</span><span class="small mut" style="font-weight:700">' + (pl.length ? 'en cada lado · ' + kg(bar) + ' kg de barra' : kg(bar) + ' kg') + '</span></div>' +
        '<div class="row" style="gap:8px;flex-wrap:wrap;justify-content:center">' + [25, 20, 15, 10, 5, 2.5, 1.25].map(function (p) { return '<span class="row small" style="gap:5px;font-weight:700;color:var(--mut)"><span style="width:10px;height:10px;border-radius:3px;background:' + PLATE[p][0] + '"></span>' + kg(p) + '</span>'; }).join('') + '</div></section>';
    } else {
      var rm = e1rm(UI.rmW, Math.min(12, UI.rmR)) || UI.rmW * (1 + UI.rmR / 30);
      h += '<section class="card up col" style="border-radius:24px;gap:12px"><p class="small mut" style="margin:0;line-height:1.5">Pon el peso y las repeticiones de una serie hecha casi al fallo y te dice cuánto levantarías a una sola repetición, y con qué peso trabajar para cada número de reps.</p><div class="grid2"><div class="col" style="border-radius:16px;background:rgba(255,255,255,.04);padding:10px;align-items:center;gap:6px"><span class="small mut" style="font-weight:700">Peso (kg)</span><button class="u" style="font-size:28px;font-weight:700" data-a="rmWType">' + kg(UI.rmW) + '</button><div class="row" style="gap:6px"><button class="iconbtn" style="width:48px" data-a="rmW" data-v="-2.5" aria-label="Menos peso">' + ic('minus') + '</button><button class="iconbtn" style="width:48px" data-a="rmW" data-v="2.5" aria-label="Más peso">' + ic('plus') + '</button></div></div><div class="col" style="border-radius:16px;background:rgba(255,255,255,.04);padding:10px;align-items:center;gap:6px"><span class="small mut" style="font-weight:700">Repeticiones</span><span class="u" style="font-size:28px;font-weight:700">' + UI.rmR + '</span><div class="row" style="gap:6px"><button class="iconbtn" style="width:48px" data-a="rmR" data-v="-1" aria-label="Menos reps">' + ic('minus') + '</button><button class="iconbtn" style="width:48px" data-a="rmR" data-v="1" aria-label="Más reps">' + ic('plus') + '</button></div></div></div>' +
        '<div class="row" style="justify-content:space-between;border-radius:18px;background:var(--accSoft);border:1px solid var(--accLine);padding:14px"><span style="font-size:14px;font-weight:700;color:var(--accTx)">1RM estimado</span><span class="u" style="font-size:30px;font-weight:700;color:var(--acc)">' + fmt(rm, 1).replace(',0', '') + ' kg</span></div>' + (UI.rmR > 12 ? '<p class="small" style="margin:0;color:var(--gold);font-weight:700">Por encima de 12 reps la estimación se dispara. La app no la usa para récords.</p>' : '') +
        '<span class="small mut" style="font-weight:700">% del 1RM · reps aproximadas</span><div class="grid2" style="gap:6px">' + [[100, 1], [95, 2], [90, 4], [85, 6], [80, 8], [75, 10], [70, 12], [65, 15]].map(function (p) { return '<div class="row" style="justify-content:space-between;padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.04);font-size:14px;font-weight:700"><span class="mut" style="white-space:nowrap">' + p[0] + ' % · ' + p[1] + '</span><span style="white-space:nowrap">' + kg(Math.round(rm * p[0] / 100 / 2.5) * 2.5) + ' kg</span></div>'; }).join('') + '</div></section>';
    }
    var nEx = alive(S.rut).length;
    h += '<section class="card tight up" style="animation-delay:.08s;padding:4px 6px;border-radius:24px"><a class="lrow press" href="#/rutina"><span class="ico" style="background:var(--accSoft);color:var(--acc)">' + ic('list') + '</span><span class="col" style="flex:1;gap:0"><b style="font-size:15px">Mi rutina PPL</b><span class="small mut">Push · Pull · Leg — ' + nEx + ' ejercicios</span></span>' + ic('right', 20, 'color:var(--mut)') + '</a>' +
      '<button class="lrow press" data-a="libOpen" data-mode="lib"><span class="ico" style="background:rgba(90,176,255,.14);color:var(--pull)">' + ic('book') + '</span><span class="col" style="flex:1;gap:0"><b style="font-size:15px">Biblioteca de ejercicios</b><span class="small mut">' + alive(S.ex).length + ' ejercicios por grupo muscular</span></span>' + ic('right', 20, 'color:var(--mut)') + '</button>' +
      '<a class="lrow press" href="#/ajustes"><span class="ico" style="background:rgba(255,255,255,.06);color:#D4D4D8">' + ic(S.mode === 'real' && CFG.url ? 'cloud' : 'cloudoff') + '</span><span class="col" style="flex:1;gap:0"><b style="font-size:15px">Ajustes y Google Sheet</b><span class="small mut">' + (S.mode === 'demo' ? 'Modo demo' : CFG.url ? (pending() ? pending() + ' cambios por subir' : 'Sincronizado' + (CFG.lastSync ? ' · ' + ago(CFG.lastSync) : '')) : 'Sin conectar') + '</span></span>' + (S.mode === 'demo' ? '<span class="pill" style="background:rgba(255,209,102,.16);color:var(--gold)">DEMO</span>' : ic('right', 20, 'color:var(--mut)')) + '</a></section>';
    return h;
  };
  var PLATE = { 25: ['#E5484D', 16, 118], 20: ['#3B82F6', 14, 118], 15: ['#FACC15', 13, 104], 10: ['#22C55E', 11, 88], 5: ['#F4F4F5', 9, 66], 2.5: ['#B4B4BC', 7, 50], 1.25: ['#8E8E98', 6, 42] };
  // un lado de la barra a escala (unos 120×28), para la tarjeta de serie y el descanso
  var MINI = { 25: [9, 28], 20: [8, 28], 15: [7, 24], 10: [6, 20], 5: [5, 15], 2.5: [4.5, 12], 1.25: [4, 10] };
  function miniBar(pl) {
    var h = 28, cy = 14, pw = pl.reduce(function (a, p) { return a + MINI[p][0] + 1; }, 0), w = Math.min(120, Math.round(40 + pw)), x = 30;
    var s = '<svg viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" height="' + h + '" aria-hidden="true" style="flex-shrink:0"><rect x="0" y="' + (cy - 2) + '" width="24" height="4" rx="2" fill="#71717A"/><rect x="29" y="' + (cy - 4) + '" width="' + (w - 29) + '" height="8" rx="2.5" fill="#A1A1AA"/><rect x="23" y="' + (cy - 8) + '" width="6" height="16" rx="2" fill="#D4D4D8"/>';
    pl.forEach(function (p) { var m = MINI[p]; s += '<rect x="' + x + '" y="' + (cy - m[1] / 2) + '" width="' + m[0] + '" height="' + m[1] + '" rx="2" fill="' + PLATE[p][0] + '" stroke="#0B0B0D" stroke-width=".8"/>'; x += m[0] + 1; });
    return s + '</svg>';
  }
  function platesRow(w, bar) {
    if (w <= bar) return '<span>' + platesTxt(w, bar) + '</span>';
    return miniBar(plates(w, bar)) + '<span>' + platesTxt(w, bar) + '</span>';
  }
  function barbellSVG(pl) {
    var W = 354, H = 150, cy = 75, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" height="' + H + '" role="img" aria-label="Barra con ' + pl.length + ' discos por lado">';
    s += '<rect x="0" y="' + (cy - 3) + '" width="' + W + '" height="6" rx="3" fill="#71717A"/>';
    s += '<rect x="122" y="' + (cy - 4) + '" width="110" height="8" rx="2" fill="#52525B"/>';
    [[8, 112], [242, 346]].forEach(function (r) { s += '<rect x="' + r[0] + '" y="' + (cy - 6) + '" width="' + (r[1] - r[0]) + '" height="12" rx="3" fill="#A1A1AA"/>'; });
    s += '<rect x="112" y="' + (cy - 13) + '" width="10" height="26" rx="3" fill="#D4D4D8"/><rect x="232" y="' + (cy - 13) + '" width="10" height="26" rx="3" fill="#D4D4D8"/>';
    var xr = 243, xl = 111;
    pl.forEach(function (p, i) { var P = PLATE[p], wd = P[1], ht = P[2], d = (0.15 + i * 0.06).toFixed(2); s += '<rect class="pl" style="animation-delay:' + d + 's" x="' + xr + '" y="' + (cy - ht / 2) + '" width="' + wd + '" height="' + ht + '" rx="3" fill="' + P[0] + '"/><rect class="pl" style="animation-delay:' + d + 's" x="' + (xl - wd) + '" y="' + (cy - ht / 2) + '" width="' + wd + '" height="' + ht + '" rx="3" fill="' + P[0] + '"/>'; xr += wd + 1; xl -= wd + 1; });
    return s + '</svg>';
  }
  A.dBar = function (d) { UI.dBar = +d.v; rerender(); };
  function plates(total, bar) { var side = (total - (bar || 20)) / 2, out = []; [25, 20, 15, 10, 5, 2.5, 1.25].forEach(function (p) { while (side >= p - 0.001) { out.push(p); side -= p; } }); return out; }
  function platesTxt(w, bar) { if (w <= bar) return 'Solo la barra (' + kg(bar) + ' kg)'; var p = plates(w, bar), rest = Math.round(((w - bar) / 2 - p.reduce(function (a, b) { return a + b; }, 0)) * 100) / 100; return p.map(kg).join(' + ') + ' por lado' + (rest > 0 ? ' (+' + kg(rest) + ')' : ''); }
  function ago(t) { var s = (Date.now() - t) / 1000; if (s < 60) return 'ahora'; if (s < 3600) return 'hace ' + Math.round(s / 60) + ' min'; if (s < 86400) return 'hace ' + Math.round(s / 3600) + ' h'; return shortDate(t); }

  /* RUTINA */
  V.rutina = function (day) {
    if (day && TYPE[day]) UI.rutDay = day;
    var d = UI.rutDay, list = routine(d);
    var h = header('Mi rutina PPL', '#/utiles') + '<p class="small mut up" style="margin:-4px 4px 0;line-height:1.45;font-size:14px">Ciclo Push → Pull → Leg. El entreno de hoy es el siguiente al último que hiciste; si vas un 4.º día, repites el siguiente.</p>';
    h += '<div class="grid3 up" role="tablist" style="animation-delay:.05s">' + TYPES.map(function (t) { var on = t === d, l = routine(t), s = l.reduce(function (a, r) { return a + +r.series; }, 0); return '<button role="tab" aria-selected="' + on + '" class="press" data-a="rutDay" data-t="' + t + '" style="height:64px;border-radius:18px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:0 14px;gap:2px;background:' + (on ? TYPE[t].c : 'var(--card)') + ';color:' + (on ? 'var(--bg)' : 'var(--tx)') + ';border:1px solid ' + (on ? TYPE[t].c : 'var(--line)') + '"><span class="u" style="font-size:15px;font-weight:700">' + TYPE[t].n + '</span><span style="font-size:12px;font-weight:700;opacity:.8">' + s + ' series</span></button>'; }).join('') + '</div>';
    var EQ = function (e) { return /technogym/i.test(e) ? ['#5AB0FF', 'rgba(90,176,255,.12)'] : /polea/i.test(e) ? ['#D4D4D8', 'rgba(255,255,255,.07)'] : ['#FF8A57', 'rgba(255,107,44,.12)']; };
    h += '<div class="col" style="gap:8px">' + list.map(function (r, i) {
      var e = ex(r.ejercicio_id), c = EQ(e.equipo || '');
      return '<div class="up" style="animation-delay:' + (0.03 * i).toFixed(2) + 's">' + swipeRow('<button class="row" data-a="rutEdit" data-id="' + r.id + '" style="width:100%;text-align:left;padding:10px 12px 10px 10px;gap:10px">' + thumb(r.ejercicio_id, 52, 44) + '<span class="col" style="flex:1;min-width:0;gap:5px"><b style="font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + esc(e.nombre) + '</b><span class="row" style="gap:5px;flex-wrap:wrap"><span class="pill" style="color:var(--tx);font-size:12px">' + r.series + ' × ' + r.reps_min + '–' + r.reps_max + '</span><span class="pill" style="font-size:12px">RIR ' + esc(r.rir) + '</span><span class="pill" style="font-size:12px">' + mmss(r.descanso_s) + '</span><span class="pill" style="font-size:12px">±' + kg(e.incremento) + ' kg</span>' + (r.superserie ? '<span class="pill" style="font-size:12px;background:rgba(45,212,191,.14);color:var(--ss)">Superserie ' + esc(r.superserie) + '</span>' : '') + '</span></span><span class="pill" style="font-size:10px;color:' + c[0] + ';background:' + c[1] + '">' + esc((e.equipo || '').toUpperCase()) + '</span></button>', 'rutDel', r.id) + '</div>';
    }).join('') + '</div>' + (list.length ? '<p class="small mut" style="text-align:center;margin:0">Toca para editar series, reps, descanso u orden · desliza para quitar</p>' : '<div class="card small mut" style="text-align:center">Sin ejercicios en ' + TYPE[d].n + '.</div>');
    h += '<section class="card tight up" style="animation-delay:.12s"><div class="row" style="justify-content:space-between;padding:12px 0"><span class="col" style="gap:0"><b>Semana de descarga</b><span class="small mut">' + (deloadOn() ? 'Activa hasta el domingo' : '90 % del peso y una serie menos') + '</span></span><button class="pill' + (deloadOn() ? ' on' : '') + '" style="height:36px;padding:0 14px;font-size:13px" data-a="deload" data-v="' + (deloadOn() ? 'off' : 'on') + '">' + (deloadOn() ? 'Activa' : 'Activar') + '</button></div></section>';
    h += '<button class="btn" data-a="libOpen" data-mode="rut" data-day="' + d + '">' + ic('plus', 22, 'stroke-width:2.6') + 'Añadir ejercicio a ' + TYPE[d].n + '</button><button class="btn ghost" data-a="rutReset">Restablecer rutina por defecto</button>';
    return h;
  };

  /* AJUSTES */
  V.ajustes = function () {
    var real = S.mode === 'real';
    var h = header('Ajustes', '#/utiles');
    h += '<section class="card up col" style="gap:12px"><span class="label">Google Sheet</span>' +
      (real && CFG.url ? '<div class="row" style="gap:10px"><span class="ico" style="background:rgba(163,227,181,.12);color:#A3E3B5">' + ic('cloud') + '</span><span class="col" style="flex:1;gap:0"><b>Conectada</b><span class="small mut">' + (pending() ? pending() + ' cambios por subir' + (navigator.onLine ? '' : ' (sin conexión)') : 'Todo subido') + (CFG.lastSync ? ' · última subida ' + ago(CFG.lastSync) : '') + '</span></span></div>' : '<p class="small mut" style="margin:0;line-height:1.5">Pega la URL de la aplicación web de Apps Script y el token que te dio <b>setup()</b>. Los datos se guardan en el iPhone al instante y se copian a la Sheet cuando hay conexión.</p>') +
      '<div class="field"><label for="cUrl">URL de la aplicación web</label><input class="inp" id="cUrl" type="url" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="https://script.google.com/macros/s/…/exec" value="' + esc(CFG.url) + '"></div>' +
      '<div class="field"><label for="cTok">Token</label><input class="inp" id="cTok" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="rf_…" value="' + esc(CFG.token) + '"></div>' +
      '<button class="btn" id="cfgBtn" data-a="cfgSave">' + (real && CFG.url ? 'Guardar y probar' : 'Guardar y conectar') + '</button>' +
      (real && CFG.url ? '<div class="grid2"><button class="btn dark" style="height:50px;font-size:15px" data-a="syncNow">' + ic('refresh', 18) + 'Sincronizar</button><button class="btn dark" style="height:50px;font-size:15px" data-a="restore">' + ic('download', 18) + 'Restaurar</button></div>' : '') + '</section>';
    h += '<section class="card tight up" style="animation-delay:.05s"><div class="row" style="justify-content:space-between;padding:12px 0"><span class="col" style="gap:0"><b>Objetivo semanal</b><span class="small mut">Sesiones para dar la semana por cumplida</span></span><div class="stepper"><button data-a="goal" data-v="-1" aria-label="Menos">−</button><b>' + CFG.goal + '</b><button data-a="goal" data-v="1" aria-label="Más">+</button></div></div><div class="sep"></div><div class="row" style="justify-content:space-between;padding:12px 0"><span class="col" style="gap:0"><b>Pitido al acabar el descanso</b><span class="small mut">Con el iPhone en silencio puede no sonar</span></span><button class="pill' + (CFG.sound ? ' on' : '') + '" style="height:36px;padding:0 14px;font-size:13px" data-a="sound">' + (CFG.sound ? 'Activado' : 'Apagado') + '</button></div></section>';
    var stp = function (f, label, sub, step) { return '<div class="row" style="justify-content:space-between;padding:12px 0"><span class="col" style="gap:0"><b>' + label + '</b><span class="small mut">' + sub + '</span></span><div class="stepper"><button data-a="cfgStep" data-f="' + f + '" data-v="-' + step + '" aria-label="Menos">−</button><b>' + CFG[f] + '</b><button data-a="cfgStep" data-f="' + f + '" data-v="' + step + '" aria-label="Más">+</button></div></div>'; };
    h += '<section class="card tight up" style="animation-delay:.07s">' + stp('musMin', 'Series mínimas', 'Por grupo y semana', 1) + '<div class="sep"></div>' + stp('musMax', 'Series máximas', 'Por encima, sale en rojo', 1) + '<div class="sep"></div>' + stp('cardioGoal', 'Cardio semanal', 'Minutos por semana', 10) + '</section>';
    h += '<section class="card tight up" style="animation-delay:.1s;padding:4px 6px"><button class="lrow press" data-a="exportJson">' + ic('download') + '<span class="col" style="flex:1;gap:0"><b>Exportar copia (JSON)</b><span class="small mut">Archivo con todos tus datos</span></span></button><button class="lrow press" data-a="importJson">' + ic('upload') + '<span class="col" style="flex:1;gap:0"><b>Importar copia</b><span class="small mut">Fusiona un JSON exportado antes</span></span></button><input type="file" id="impFile" accept="application/json,.json" hidden>' +
      (real ? '<button class="lrow press" data-a="toDemo">' + ic('target') + '<span class="col" style="flex:1;gap:0"><b>Ver la demo</b><span class="small mut">Datos de ejemplo, sin tocar los tuyos</span></span></button>' : '<button class="lrow press" data-a="toReal">' + ic('zap') + '<span class="col" style="flex:1;gap:0"><b>Usar mis datos</b><span class="small mut">Salir de la demo y empezar de verdad</span></span></button><button class="lrow press" data-a="demoReset">' + ic('refresh') + '<span class="col" style="flex:1;gap:0"><b>Regenerar demo</b><span class="small mut">Vuelve a crear los datos de ejemplo</span></span></button>') + '</section>';
    h += '<button class="btn danger up" style="animation-delay:.15s" data-a="wipe">' + ic('trash') + 'Borrar datos de este iPhone</button><p class="small mut" style="text-align:center;margin:0;font-size:11px">Ilustraciones de ejercicios: Everkinetic (Greg Priday), licencia CC BY-SA 4.0, adaptadas a fondo oscuro.</p><p class="small mut" style="text-align:center;margin:0">RAYOFIT ' + VERSION + ' · ' + (real ? 'tus datos' : 'modo demo') + ' · ' + alive(S.ses).length + ' sesiones guardadas</p>';
    return h;
  };
  V.ajustes_after = function () {
    var f = $('#impFile'); if (!f) return;
    f.addEventListener('change', function () {
      var file = f.files[0]; if (!file) return;
      file.text().then(function (t) {
        var d = JSON.parse(t); if (d.app !== 'RAYOFIT') throw new Error('No es una copia de RAYOFIT');
        var n = 0; ['ex', 'rut', 'ses', 'set', 'body'].forEach(function (c) { Object.keys(d[c] || {}).forEach(function (id) { var r = d[c][id], l = S[c][id]; if (!l || +r.actualizado > +l.actualizado) { S[c][id] = r; n++; if (S.mode === 'real') S.outbox[TABLES[c] + ':' + id] = r; } }); save(c); });
        save('outbox'); scheduleSync(); toast(n + ' registros importados'); render();
      }).catch(function (e) { toast(e.message || 'Archivo no válido'); });
    });
  };

  /* ───────────────────────── datos de ejemplo ───────────────────────── */
  function genDemo() {
    var start = { 'press-banca': 62.5, 'press-inclinado-manc': 20, 'shoulder-press': 35, 'elev-laterales-polea': 5, 'ext-triceps-cuerda': 22.5, 'ext-triceps-cabeza': 17.5, 'jalon-pecho': 55, 'remo-sentado': 50, 'rear-delt': 30, 'face-pull': 15, 'curl-barra-z': 25, 'curl-martillo': 12, 'sentadilla': 70, 'prensa': 120, 'curl-femoral-sentado': 35, 'hip-thrust': 70, 'ext-cuadriceps': 40, 'gemelos-prensa': 90 };
    var notes = { 'press-banca': 'Banco plano · barra en el 3.er agujero', 'shoulder-press': 'Asiento 4 · agarre neutro', 'jalon-pecho': 'Rodillo en 3', 'remo-sentado': 'Pecho en 2', 'prensa': 'Respaldo 5 · pies a la anchura de hombros', 'curl-femoral-sentado': 'Respaldo 3 · rodillo 2', 'rear-delt': 'Asiento 5' };
    Object.keys(notes).forEach(function (k) { if (S.ex[k]) S.ex[k].nota = notes[k]; }); save('ex');
    var rnd = (function (s) { return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; })(20261116);
    var st = {}; Object.keys(start).forEach(function (k) { st[k] = { w: start[k], lvl: 0, hits: 0, best: 0 }; });
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var day = new Date(monday(today)); day.setDate(day.getDate() - 7 * 12);
    var plan = [];
    while (day < today) {
      var wd = (day.getDay() + 6) % 7;
      var go_ = wd === 0 || wd === 2 || wd === 4 || (wd === 5 && rnd() < 0.3);
      if (wd === 2 && rnd() < 0.08) go_ = false;
      if (go_) plan.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    while (plan.length % 3 !== 0) plan.shift();
    var cardios = ['cinta', 'bici', 'eliptica', 'remo'];
    plan.forEach(function (d, si) {
      var type = TYPES[si % 3], sid = 'demo' + si, t0 = new Date(d); t0.setHours(18, 25 + Math.floor(rnd() * 20), 0, 0);
      var vol = 0, n = 0, prs = 0, k = 0;
      routine(type).forEach(function (r, ii) {
        var s = st[r.ejercicio_id]; if (!s) return; if (!s.lvl) s.lvl = r.reps_min + 1;
        var reps = [], all = true;
        for (var i = 0; i < r.series; i++) { var rep = Math.max(r.reps_min - 1, Math.min(r.reps_max, Math.round(s.lvl - i * 0.45 + (rnd() - 0.5) * 0.6))); reps.push(rep); if (rep < r.reps_max) all = false; }
        reps.forEach(function (rep, i) {
          var iso = isIso(r.ejercicio_id), e = iso ? 0 : e1rm(s.w, rep), scv = scoreL(s.w, rep), big = s.maxW > 0 && s.w > s.maxW, sm = !big && s.best > 0 && scv > s.best + 0.05, lv = big ? 1 : sm ? 2 : 0; if (lv === 1) prs++; s.best = Math.max(s.best, scv); s.maxW = Math.max(s.maxW || 0, s.w);
          var cg = cargaOf(r.ejercicio_id, s.w, t0.getTime());
          S.set[sid + '-' + ii + '-' + (i + 1)] = { id: sid + '-' + ii + '-' + (i + 1), sesion_id: sid, ejercicio_id: r.ejercicio_id, ejercicio: exName(r.ejercicio_id), orden: ii + 1, serie: i + 1, peso: s.w, reps: rep, e1rm: Math.round(e * 10) / 10, record: lv, fecha: dayKey(t0), actualizado: 1, borrado: 0, carga: cg, calentamiento: 0 };
          vol += cg * rep; n++; k++;
        });
        if (all) s.hits++; else s.hits = 0;
        if (s.hits >= 2) { s.w += +ex(r.ejercicio_id).incremento; s.lvl = r.reps_min + 0.6; s.hits = 0; } else s.lvl += 0.45 + rnd() * 0.35;
      });
      var dur = 52 + Math.floor(rnd() * 16), ct = cardios[Math.floor(rnd() * 4)];
      S.ses[sid] = { id: sid, tipo: type, fecha: dayKey(t0) + ' ' + pad2(t0.getHours()) + ':' + pad2(t0.getMinutes()), inicio: t0.getTime(), fin: t0.getTime() + dur * 60000, duracion_min: dur, volumen_kg: Math.round(vol), series: n, records: prs, cardio_tipo: ct, cardio_min: [15, 20, 20, 25][Math.floor(rnd() * 4)], cardio_dist: ct === 'remo' ? 3000 + Math.round(rnd() * 8) * 100 : ct === 'eliptica' ? 0 : Math.round((2.3 + rnd() * (ct === 'bici' ? 6 : 0.6)) * 10) / 10, cardio_nivel: ct === 'cinta' ? 4 + Math.floor(rnd() * 4) : 6 + Math.floor(rnd() * 6), actualizado: 1, borrado: 0, nota: si % 7 === 3 ? ['Dormí 5 h, poca energía', 'Gimnasio lleno, cambié el orden', 'Muy buenas sensaciones'][si % 3] : '', descarga: 0 };
    });
    var bd = new Date(monday(today)); bd.setDate(bd.getDate() - 7 * 12);
    for (var i = 0; i <= 12; i++) { var p = i / 12; S.body['b' + i] = { id: 'b' + i, fecha: dayKey(bd), peso: Math.round((80.6 - 2.1 * p + (rnd() - 0.5) * 0.5) * 10) / 10, cintura: Math.round((87.4 - 3.4 * p + (rnd() - 0.5) * 0.4) * 10) / 10, actualizado: 1, borrado: 0 }; bd.setDate(bd.getDate() + 7); }
    save('ses'); save('set'); save('body'); dirty = true;
  }

  /* ───────────────────────── gestos: deslizar para borrar ───────────────────────── */
  var sw = null;
  function swipeInit() {
    document.addEventListener('pointerdown', function (e) {
      var sb = e.target.closest('.swipe .sb'); $$('.swipe .sb.open').forEach(function (o) { if (o !== sb) { o.classList.remove('open'); o.style.transform = ''; } });
      if (!sb) return; sw = { el: sb, x0: e.clientX, y0: e.clientY, base: sb.classList.contains('open') ? -88 : 0, dx: 0, lock: null };
    }, { passive: true });
    document.addEventListener('pointermove', function (e) {
      if (!sw) return; var dx = e.clientX - sw.x0, dy = e.clientY - sw.y0;
      if (sw.lock === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) sw.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (sw.lock !== 'x') return;
      sw.dx = dx; sw.el.classList.add('drag'); sw.el.style.transform = 'translateX(' + Math.max(-130, Math.min(0, sw.base + dx)) + 'px)';
    }, { passive: true });
    var end = function () {
      if (!sw) return; var el = sw.el; el.classList.remove('drag');
      if (sw.lock === 'x') { var x = sw.base + sw.dx, open = x < -44; el.classList.toggle('open', open); el.style.transform = open ? 'translateX(-88px)' : ''; el.dataset.justSwiped = '1'; setTimeout(function () { delete el.dataset.justSwiped; }, 50); }
      sw = null;
    };
    document.addEventListener('pointerup', end); document.addEventListener('pointercancel', end);
  }

  /* ───────────────────────── arranque ───────────────────────── */
  var HAPT = { done: 1, w: 1, r: 1 };
  function haptic() { try { var h = document.getElementById('hap'); if (h) h.parentElement.click(); } catch (e) {} }
  function onClick(e) {
    var sb = e.target.closest('.swipe .sb'); if (sb && (sb.dataset.justSwiped || sb.classList.contains('open'))) { e.preventDefault(); e.stopPropagation(); if (sb.classList.contains('open') && !sb.dataset.justSwiped) { sb.classList.remove('open'); sb.style.transform = ''; } return; }
    var el = e.target.closest('[data-a]'); if (!el || el.disabled) return;
    var fn = A[el.getAttribute('data-a')]; if (!fn) return;
    if (el.tagName === 'A' && el.getAttribute('data-a') === 'closeSheet') { closeSheet(); return; }
    e.preventDefault(); if (HAPT[el.getAttribute('data-a')]) haptic(); fn(el.dataset, el, e);
  }
  function syncBoot() { if (!configured()) return; scheduleSync(800); pull(false).then(function (n) { if (n && !S.active && route.r !== 'entreno') render({ still: true }); }).catch(function () {}); }
  function boot() {
    view = $('#view');
    if (!$('#hap')) document.body.insertAdjacentHTML('beforeend', '<label class="hap" aria-hidden="true"><input type="checkbox" switch id="hap" tabindex="-1"></label>');
    loadAll();
    document.addEventListener('click', onClick);
    swipeInit();
    window.addEventListener('hashchange', function () { closeSheet(); render(); });
    window.addEventListener('online', function () { scheduleSync(300); updateSyncPill(); });
    window.addEventListener('offline', updateSyncPill);
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible') { if (S.active && route.r === 'entreno') wakeOn(); tick(); scheduleSync(500); if (navigator.serviceWorker && navigator.serviceWorker.getRegistration) navigator.serviceWorker.getRegistration().then(function (r) { if (r) r.update(); }); }
      else wakeOff();
    });
    setInterval(tick, 250);
    var r = parseRoute().r;
    if (S.active) { if (r !== 'entreno' && r !== 'final') history.replaceState(null, '', '#/entreno'); }
    else if (!location.hash || r === 'entreno' || r === 'final') history.replaceState(null, '', '#/hoy');
    render({ noVT: true });
    syncBoot();
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
      var reloading = false;
      var hadCtrl = !!navigator.serviceWorker.controller;
      navigator.serviceWorker.addEventListener('controllerchange', function () { if (!hadCtrl) { hadCtrl = true; return; } if (reloading) return; reloading = true; location.reload(); });
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(function (reg) { reg.update(); }).catch(function () {});
    }
  }
  window.RF = { S: S, CFG: CFG, idx: idx, render: render, version: VERSION };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
