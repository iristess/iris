const CACHE_NAME = 'neuro-quiz-v46-distinct-question-card';
const APP_SHELL = [
  './',
  './index.html',
  './questions-new.js?v=question-quality-v44',
  './questions-en.js?v=question-quality-v44',
  './questions-advanced.js?v=question-quality-v44',
  './questions-clinical.js?v=question-quality-v44',
  './questions-quality.js?v=question-quality-v44',
  './manifest.json',
  './icons/icon.svg',
  './brain-region-images/amygdala.webp',
  './brain-region-images/arcuate-fasciculus.webp',
  './brain-region-images/calcarine-sulcus.webp',
  './brain-region-images/central-sulcus.webp',
  './brain-region-images/cingulum.webp',
  './brain-region-images/corpus-callosum.webp',
  './brain-region-images/fornix.webp',
  './brain-region-images/hippocampus.webp',
  './brain-region-images/hypothalamus.webp',
  './brain-region-images/lgn.webp',
  './brain-region-images/limbic-system.webp',
  './brain-region-images/longitudinal-fissure.webp',
  './brain-region-images/mammillary-bodies.webp',
  './brain-region-images/mgn.webp',
  './brain-region-images/midbrain.webp',
  './brain-region-images/pag.webp',
  './brain-region-images/precentral-gyrus.webp',
  './brain-region-images/reticular-nucleus.webp',
  './brain-region-images/slf.webp',
  './brain-region-images/sylvian-fissure.webp',
  './brain-region-images/thalamus.webp',
  './brain-region-images/uncinate-fasciculus.webp',
  './brain-region-images/vpl.webp',
  './brain-region-images/vpm.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        APP_SHELL.map(url => fetch(url)
          .then(response => {
            if (response.ok) return cache.put(url, response);
            return undefined;
          })
          .catch(() => undefined))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
