const cacheName = "v1";

const cacheAssets = [
  "index.html",
  "about.html",
  "/css/style.css",
  "/js/main.js"
];

// Call Install Event
self.addEventListener("install", evt => {
  console.log("Service Worker: Installed");

  evt.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", evt => {
  console.log("Service Worker: Activated");
});
