
const CACHE_NAME = 'snake-boss-v5.1b';
const ASSETS = [
  './',
  './index.html',
  './mobile.html',
  './manifest.json',
  './service-worker.js',
  './icon-192.png',
  './icon-512.png',
  './soundtrack.mp3'
];
self.addEventListener('install', (e) => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); });
self.addEventListener('activate', (e) => { e.waitUntil((async () => { const keys = await caches.keys(); await Promise.all(keys.map(k => k === CACHE_NAME ? null : caches.delete(k))); await self.clients.claim(); })()); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(e.request);
    const fetchPromise = fetch(e.request).then(res => { if (res && res.status === 200 && e.request.method === 'GET') { cache.put(e.request, res.clone()); } return res; }).catch(() => cached);
    return cached || fetchPromise;
  })());
});
