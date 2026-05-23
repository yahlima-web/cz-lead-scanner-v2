const CACHE = 'cz-leads-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.anthropic.com') ||
      e.request.url.includes('fonts.googleapis.com') ||
      e.request.url.includes('cdnjs.cloudflare.com') ||
      e.request.url.includes('netlify/functions')) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
