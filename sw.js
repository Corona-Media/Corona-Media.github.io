const cacheName = 'covid-kids-cache-v1';
const resourcesToPrecache = [
    '/',
    '/assets/articles/activities-list.html',
    '/assets/articles/book-list.html',
    '/assets/articles/discover-camp.html',
    '/assets/articles/kids-corona-experience.html',
    '/assets/articles/movie-list.html',
    '/assets/articles/online-course.html',
    '/assets/articles/planning-summer.html',
    '/assets/articles/playdates-safe.html',
    'https://api.covid19api.com/world/total',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    '/index.html',
    '/videos.html',
    '/feedback.html',
    '/credits.html',
    '/artwork.html',
    '/articles.html',
    '/404.html',
    '/assets/artwork/0/0.jpg',
    '/assets/artwork/0/1.jpg',
    '/assets/artwork/0/2.jpg',
    '/assets/artwork/0/3.jpg',
    '/assets/artwork/0/4.jpg',
    '/assets/artwork/0/5.jpg',
    '/assets/images/book-list.jpg',
    '/assets/images/camera.jpg',
    '/assets/images/corona.png',
    '/assets/images/course-site.png',
    '/assets/images/dc.jpeg',
    '/assets/images/puzzle.jpg',
    '/assets/images/summer-plan.png',
    '/assets/images/playdate.jpeg',
    '/assets/js/main.js',
    '/assets/js/articles.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/bootstrap.min.js.map',
    '/assets/js/jquery.min.js',
    '/assets/includes/head.js',
    '/assets/includes/static-article.head.js',
    '/assets/includes/header.js',
    '/assets/fonts/BebasNeue-Bold.ttf',
    '/assets/css/styles.css'
];

self.addEventListener('install', event => {
    console.log('Service Worker Install Event');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(resourcesToPrecache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
        .then(cachedResponce => {
            return cachedResponce || fetch(event.request);
        })
    );
});