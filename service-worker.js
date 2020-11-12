importScripts("/finplan/precache-manifest.919f188e6a24786d57ffbe5bafc63fca.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})
