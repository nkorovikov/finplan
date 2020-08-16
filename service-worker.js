importScripts("/finplan/precache-manifest.a05bee3ebc6ffe212df9b2b6135190ac.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})
