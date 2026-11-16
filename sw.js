/* RAYOFIT service worker · red primero para los archivos de la app */
const VERSION = '1.3.0';
const CACHE = 'rayofit-' + VERSION;
const IMGS = ["ej-abductor.webp", "ej-aperturas-inclinado.webp", "ej-aperturas-manc.webp", "ej-arm-curl.webp", "ej-arm-extension.webp", "ej-bulgara.webp", "ej-chest-press.webp", "ej-cruce-poleas.webp", "ej-crunch-polea.webp", "ej-curl-barra.webp", "ej-curl-barra-z.webp", "ej-curl-concentrado.webp", "ej-curl-femoral-sentado.webp", "ej-curl-femoral-tumbado.webp", "ej-curl-inclinado.webp", "ej-curl-manc.webp", "ej-curl-martillo.webp", "ej-curl-polea.webp", "ej-curl-predicador.webp", "ej-dominadas.webp", "ej-dominadas-asistidas.webp", "ej-elev-frontales.webp", "ej-elev-laterales-manc.webp", "ej-elev-laterales-polea.webp", "ej-elev-piernas.webp", "ej-encogimientos.webp", "ej-ext-cuadriceps.webp", "ej-ext-triceps-barra.webp", "ej-ext-triceps-cabeza.webp", "ej-ext-triceps-cuerda.webp", "ej-fondos.webp", "ej-fondos-maquina.webp", "ej-gemelos-pie.webp", "ej-gemelos-prensa.webp", "ej-gemelos-sentado.webp", "ej-glute-machine.webp", "ej-hack-squat.webp", "ej-hip-thrust.webp", "ej-jalon-neutro.webp", "ej-jalon-pecho.webp", "ej-pajaro-manc.webp", "ej-patada-polea.webp", "ej-patada-triceps.webp", "ej-pectoral.webp", "ej-posterior-polea.webp", "ej-prensa.webp", "ej-press-arnold.webp", "ej-press-banca.webp", "ej-press-banca-manc.webp", "ej-press-banca-smith.webp", "ej-press-cerrado.webp", "ej-press-declinado.webp", "ej-press-frances.webp", "ej-press-hombro-manc.webp", "ej-press-hombro-smith.webp", "ej-press-inclinado-barra.webp", "ej-press-inclinado-manc.webp", "ej-press-inclinado-maq.webp", "ej-press-militar.webp", "ej-puente-gluteo.webp", "ej-pulldown.webp", "ej-pullover-polea.webp", "ej-rear-delt.webp", "ej-remo-barra.webp", "ej-remo-manc.webp", "ej-remo-polea.webp", "ej-remo-sentado.webp", "ej-remo-t.webp", "ej-rueda-abdominal.webp", "ej-sentadilla.webp", "ej-sentadilla-goblet.webp", "ej-sentadilla-smith.webp", "ej-shoulder-press.webp", "ej-total-abdominal.webp", "ej-zancadas.webp"];
const CORE = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'unbounded.woff2', 'manrope.woff2', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'].concat(IMGS);

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(CORE.map((u) => c.add(new Request(u, { cache: 'reload' })).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('rayofit-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // Apps Script y demás: directo a la red
  e.respondWith(
    fetch(req, { cache: 'no-cache' }).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(stripQuery(req), copy)); }
      return res;
    }).catch(() => caches.match(stripQuery(req)).then((r) => r || caches.match('index.html')))
  );
});

function stripQuery(req) { const u = new URL(req.url); u.search = ''; return new Request(u.toString()); }
