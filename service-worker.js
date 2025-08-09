
const CACHE_NAME='snake-boss-v6-0';
const ASSETS=['./','./index.html','./mobile.html','./manifest.json','./service-worker.js','./icon-192.png','./icon-512.png','./snake_boss_logo.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{const ks=await caches.keys();await Promise.all(ks.map(k=>k===CACHE_NAME?null:caches.delete(k)));await self.clients.claim();})());});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin!==location.origin)return;
  e.respondWith((async()=>{const c=await caches.open(CACHE_NAME);const m=await c.match(e.request);
    const f=fetch(e.request).then(r=>{if(r&&r.status===200&&e.request.method==='GET')c.put(e.request,r.clone());return r;}).catch(()=>m);
    return m||f;})());});
