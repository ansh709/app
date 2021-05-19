var staticNewsApp = "extra-earn-money-site-v1";

var assets = [
   "/",
   "/index.html",
   "/style.css",
   "/js/app.js",
   "/js/header.js",
   "/js/nav.js",
   "/js/slider.js",
    "images/slide01.jpg",
   "/images/userDefaulticon.png"
];

self.addEventListener("install", installEvent  => {
	installEvent.waitUntil(
	   caches.open(staticNewsApp).then(cache => {
		   cache.addAll(assets);
	   })
	);
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});