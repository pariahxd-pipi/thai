self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("travel-app").then(cache => {
      return cache.addAll([
        "/",
        "/index.html"
      ]);
    })
  );
});
