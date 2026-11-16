/* RAYOFIT service worker · red primero para los archivos de la app */
const VERSION = '1.0.0';
const CACHE = 'rayofit-' + VERSION;
const CORE = ['./', 'index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'fonts/unbounded.woff2', 'fonts/manrope.woff2', 'img/icon-192.png', 'img/icon-512.png', 'img/apple-touch-icon.png'];

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
