var CACHE_NAME = 'v1.0.1';

var urlsToCache = [
    '/',
    '/static/js/2.99f8c0b9.chunk.js',
    '/static/js/main.7a132345.chunk.js',
    '/static/css/main.17e60291.chunk.css',
    '/static/js/runtime-main.1f1f19a3.js',
    '/emfull192.png',
    '/emfull512.png'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});  