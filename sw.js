const CACHE_NAME = 're-v19-assets-only';
const ASSETS_TO_CACHE = ['/icon-192.png', '/icon-512.png', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(c => c.addAll(ASSETS_TO_CACHE)).then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k!== CACHE_NAME).map(k => caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // 1. Jamais cacher le HTML et l'API
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.search.includes('signalements') || url.hostname.includes('onrender.com')) {
    return; // réseau uniquement
  }

  // 2. Cacher seulement icônes, manifest, etc.
  if (ASSETS_TO_CACHE.some(a => url.pathname.includes(a))) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(r => {
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, r.clone()));
        return r;
      }))
    );
  }
});
