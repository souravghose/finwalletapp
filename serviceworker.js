const flybankingApp = "flybankingapp v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/splide.min.css",
  "/js/app.js",
  "/js/splide.min.js",
  "/assets/avatar/avatar1.jpg",
  "/assets/avatar/avatar2.jpg",
  "/assets/avatar/avatar3.jpg",
  "/assets/logo/amazon.png",
  "/assets/logo/appleLogo.png",

  
];

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//     caches.open(flybankingApp).then(cache => {
//       cache.addAll(assets)
//     })
//   )
// })

// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })

