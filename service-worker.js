const CACHE_NAME = 'foodinesia-pwa-v1.02';
const urlsToCache = [
  // == asset online
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&family=Poppins:wght@300;400;600;800&display=swap',
  // == asset offline
  '/',
  'favicon.ico',
  // html
  'index.html',
  'blog.html',
  'eksplorasi.html',
  'tentang.html',
  'details/detail-blog.html',
  'details/detail-eksplorasi.html',
  // js
  'service-worker.js',
  'js/blog.js',
  'js/data-blog.js',
  'js/data-makanan.js',
  'js/detail-blog.js',
  'js/detail-eksplorasi.js',
  'js/eksplorasi.js',
  'js/script.js',
  // css
  'css/blog.css',
  'css/common.css',
  'css/detail-blog.css',
  'css/detail-eksplorasi.css',
  'css/eksplorasi.css',
  'css/main.css',
  'css/style.css',
  // gambar
  'images/foods/bakwan-brokoli-jagung.jpeg',
  'images/foods/bola-bola-roti-ayam.jpeg',
  'images/foods/daging-sapi-lada-hitam.jpeg',
  'images/foods/ikan-bakar.jpeg',
  'images/foods/jasuke.jpeg',
  'images/foods/jus-apel.jpeg',
  'images/foods/jus-strawberry.jpeg',
  'images/foods/kentang-panggang.jpeg',
  'images/foods/omelet.jpeg',
  'images/foods/roti-gandum.jpeg',
  'images/blog/daging.jpeg',
  'images/blog/gandum.jpeg',
  'images/blog/jagung.jpeg',
  'images/blog/kentang.jpeg',
  'images/blog/telur.jpeg',
  'images/illustration/detail-eks-ilus.png',
  'images/illustration/Allura - Freelancing.png',
  'images/illustration/img-blog.png',
  'images/illustration/img-eksplorasi.png',
  'images/illustration/img-home.png',
  'images/illustration/img-komunitas.png',
  'images/illustration/img-tentang.png',
  'images/hero.jpeg',
  'images/home-hero.jpeg',
  'images/logo.png',
  // icon pwa
  'images/icon/icon_144x144.png',
  'images/icon/icon_168x168.png',
  'images/icon/icon_192x192.png',
  'images/icon/icon_48x48.png',
  'images/icon/icon_72x72.png',
  'images/icon/icon_96x96.png',
  // manifest
  'manifest.json'
];

self.addEventListener('install', event => event.waitUntil(
  caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
));

self.addEventListener('activate', event => event.waitUntil(
  caches.keys().then(cacheNames => Promise.all(cacheNames.map(cacheName => {
    if (cacheName != CACHE_NAME) {
      console.log(`ServiceWorker: cache ${cacheName} telah dihapus`);
      return caches.delete(cacheName);
    }
  })))
))

self.addEventListener('fetch', event => event.respondWith(
  caches.match(event.request, { cacheName: CACHE_NAME }).then(response => {
    if (response) {
      console.log(`ServiceWorker: menggunakan aset dari cache: ${response.url}`);
      return response;
    } else {
      console.log(`ServiceWorker: memuat aset dari server: ${event.request.url}`);
      return fetch(event.request);
    }
  })
))