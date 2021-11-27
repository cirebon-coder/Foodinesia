// const CACHE_NAME = 'foodinesia-pwa-v2.49';
// const urlsToCache = [
//   'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&family=Poppins:wght@300;400;600;800&display=swap',
//   '/',
//   'favicon.ico',
//   'index.html',
//   'fakesuccess.html',
//   'blog.html',
//   'eksplorasi.html',
//   'tentang.html',
//   'details/detail-blog.html',
//   'details/detail-eksplorasi.html',
//   'service-worker.js',
//   'js/blog.js',
//   'js/data-blog.js',
//   'js/data-eksplorasi.js',
//   'js/detail-blog.js',
//   'js/detail-eksplorasi.js',
//   'js/eksplorasi.js',
//   'js/script.js',
//   'js/sw-register.js',
//   'css/blog.css',
//   'css/common.css',
//   'css/detail-blog.css',
//   'css/detail-eksplorasi.css',
//   'css/eksplorasi.css',
//   'css/main.css',
//   'css/style.css',
//   'css/fakestyle.css',
//   'css/tentang.css',
//   'images/foods/bakwan-brokoli-jagung.jpeg',
//   'images/foods/ikan-bakar.jpeg',
//   'images/foods/bola-bola-roti-ayam.jpeg',
//   'images/foods/daging-sapi-lada-hitam.jpeg',
//   'images/foods/jasuke.jpeg',
//   'images/foods/jus-apel.jpeg',
//   'images/foods/jus-anggur.jpeg',
//   'images/foods/jus-alpukat.jpeg',
//   'images/foods/jus-strawberry.jpeg',
//   'images/foods/kentang-panggang.jpeg',
//   'images/foods/omelet.jpeg',
//   'images/foods/roti-gandum.jpeg',
//   'images/blog/daging.jpeg',
//   'images/blog/gandum.jpeg',
//   'images/blog/utama.jpeg',
//   'images/blog/jagung.jpeg',
//   'images/blog/kentang.jpeg',
//   'images/blog/telur.jpeg',
//   'images/blog/susu.jpeg',
//   'images/illustration/detail-eks-ilus.png',
//   'images/illustration/img-blog.png',
//   'images/illustration/img-eksplorasi.png',
//   'images/illustration/success.png',
//   'images/illustration/img-home.png',
//   'images/illustration/img-komunitas.png',
//   'images/illustration/img-tentang.png',
//   'images/hero.jpeg',
//   'images/home-hero.jpg',
//   'images/logo.png',
//   'images/default.jpeg',
//   'images/icon/icon_48x48.png',
//   'images/icon/icon_72x72.png',
//   'images/icon/icon_96x96.png',
//   'images/icon/icon_144x144.png',
//   'images/icon/icon_168x168.png',
//   'images/icon/icon_192x192.png',
//   'images/icon/icon_512x512.png',
//   'manifest.json'
// ];


// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys()
//       .then(cacheNames => {
//         return Promise.all(
//           cacheNames.map(cacheName => {
//             if (cacheName != CACHE_NAME) {
//               console.log("ServiceWorker: cache " + cacheName + " telah dihapus");
//               return caches.delete(cacheName);
//             }
//           })
//         );
//       })
//   );
// })

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request, { cacheName: CACHE_NAME })
//       .then(response => {
//         if (response) {
//           console.log("ServiceWorker: Menggunakan aset dari cache: ", response.url);
//           return response;
//         }
//         console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
//         return fetch(event.request);
//       })
//   );
// });
