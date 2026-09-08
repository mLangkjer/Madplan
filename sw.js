self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('madplan-store').then((cache) => cache.addAll([
      './madplan.html',
      './manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});