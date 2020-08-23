importScripts("/finplan/precache-manifest.1af1ac48eb9e09834838fc436c749dd1.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})
