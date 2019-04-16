workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.registerRoute(
  new RegExp(/^https:\/\/cfp.devoxx.fr\//),
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp(/(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|gif|png)/),
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push';
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
