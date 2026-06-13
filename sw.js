var CACHE = 'medhistory-v1';
var URLS = [
  'index.html',
  'manifest.json',
  'icon-192.svg',
  'icon-512.svg',
  'css/style.css',
  'js/app.js',
  'js/data/questions.js',
  'js/specialties/surgery.js',
  'js/specialties/medicine.js',
  'js/specialties/paediatric.js',
  'js/specialties/gynaeobs.js',
  'js/specialties/ortho.js',
  'js/specialties/ent.js',
  'js/specialties/ophthalmology.js',
  'js/specialties/psych.js',
  'js/specialties/derm.js',
  'med-history.html'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(URLS);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request);
    })
  );
});
