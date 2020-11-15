importScripts("/finplan/precache-manifest.f2db35ba15bb1835511be5536647e3ea.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})
