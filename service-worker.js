/* MedicaAI 1.4 — armazenamento apenas dos arquivos públicos da aplicação.
   Nenhum dado clínico ou resposta da nuvem é interceptado ou cacheado aqui. */
const SHELL_CACHE = 'medicaai-shell-v1.5';
const APP_FILES = ['./','./index.html','./manifest.webmanifest',
  './assets/icon-192.png','./assets/icon-512.png',
  './assets/icon-maskable-192.png','./assets/icon-maskable-512.png',
  './assets/icon-180.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL_CACHE)
    .then(cache => cache.addAll(APP_FILES))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('medicaai-shell-') && key !== SHELL_CACHE)
        .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  const path = new URL(request.url).pathname;
  if (!path.startsWith(new URL('./', self.registration.scope).pathname)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(SHELL_CACHE).then(c => c.put('./index.html', copy)));
      }
      return response;
    }).catch(async () => (await caches.match('./index.html')) || Response.error()));
    return;
  }
  if (/\.(?:png|ico|webmanifest|svg)$/.test(path)) {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(SHELL_CACHE).then(c => c.put(request, copy)));
      }
      return response;
    })));
  }
});
