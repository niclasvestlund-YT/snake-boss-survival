const CACHE_VERSION = 'sb-v6-7';
const ASSETS = [
  '/', '/index.html', '/mobile.html',
  '/manifest.json', '/snake_boss_logo.png', '/icon-192.png', '/icon-512.png',
  '/soundtrack.mp3'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE_VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_VERSION).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  const req = e.request;
  e.respondWith(
    caches.match(req).then(cached => cached ||
      fetch(req).then(res=>{
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c=>c.put(req, copy));
        return res;
      }).catch(()=>caches.match('/mobile.html')))
  );
});
