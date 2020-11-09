importScripts("/finplan/precache-manifest.4543c30ed74f3b8e0d54a90a2892ba9d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})
