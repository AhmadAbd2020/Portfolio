'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e07928882a12cf2a9e6f527f9814f711",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "0851213554a5ebbb779ee09ba36cbdfc",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "498d52ee6087d5fd3665e299869e60d4",
"assets/NOTICES": "c2d43e32437337f7034c9b579a1ef777",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5b42f0d5a85562959bec061e590347ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9b9ea1157423050d4ee6a5d04bebb3e2",
"assets/fonts/MaterialIcons-Regular.otf": "a35b3d0b26285e91bf21c33cd1f023f4",
"assets/assets/images/telegram.png": "124b23065d10977c111b9159f00b34a8",
"assets/assets/images/wallet_deals.png": "f93ae8e708ab0ab3f57bfa30a3128684",
"assets/assets/images/git.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/images/docker.png": "722cafb6c71b44bba6292a603b2e198c",
"assets/assets/images/school.png": "e8011c4a9a4dccee7d370ea6fe1b000e",
"assets/assets/images/kenz.png": "dab2b1f960e128ea36243530b802f36d",
"assets/assets/images/python.png": "e04382338533c6bb0dcfc7a48bf86502",
"assets/assets/images/inventory.png": "711a5d6c1edab02d69f4ec6a2287d6cf",
"assets/assets/images/instagram.png": "b3c9ce60dd1d75ed3f597202c82c05e7",
"assets/assets/images/flutter.png": "abe34b0551ded954f6759cada7807e3e",
"assets/assets/images/register.png": "d5a09b0bc9ba4552a53a1bba9fa9f4fa",
"assets/assets/images/android_icon.png": "038ea15b40a395099451862327ebcfc1",
"assets/assets/images/github.png": "7aed3646cbea181a3da85620809e992c",
"assets/assets/images/desktop_icon.png": "e0e90a080a776fd1da23f5a249b5ce3c",
"assets/assets/images/firebase.png": "f55c43f8d008bd7b02d3ed67ea3c16a4",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/web_icon.png": "8867144689b70d099377ee3c4ab1baa0",
"assets/assets/images/javascript.png": "ab8e2beca091db2345ff66a5cc432985",
"assets/assets/images/supervisor.png": "bc4b5b4d38cd00e16521fea4e34b4275",
"assets/assets/images/vscode.png": "25ca6f3660a2199bf556e24dcd84f973",
"assets/assets/images/android_studio.png": "ecda989b971ff7f2c7c7e9c6809ea9a3",
"assets/assets/images/css3.png": "b1bd0673d70ccee89e1457bd71554759",
"assets/assets/images/hugo.png": "6c341d7823570ab705c940f1dea993ef",
"assets/assets/images/ucan.png": "bc1d616e810b0c24b29d018becce2609",
"assets/assets/images/linkedin.png": "f0d82f9c7f1cae38da5bd69fdc3d59cc",
"assets/assets/images/postman.png": "d453fa7081f34e979b44e2603c2a1845",
"assets/assets/images/macbook.png": "db08d1a1683c5a9872ab5357d3f83cff",
"assets/assets/images/api.png": "891399f67692d884806eddb47a68f5b5",
"assets/assets/images/ios_icon.png": "4b8039e8a442657c7b9b379322eb2793",
"assets/assets/images/whatsapp.png": "43176f6929dfdf264ea8367fa949a2a0",
"assets/assets/images/facebook.png": "1ac7a57761a0d13353e437a715885b79",
"assets/assets/images/dart.png": "1a089616e2be1ac7c5188c00225772c8",
"assets/assets/images/donations.png": "fd519031bb7c4672f91989d67f994cf1",
"assets/assets/images/html5.png": "9d5b22bfe74ac513d5cd33563908ae71",
"assets/assets/images/brand.png": "a6fc0bb5fb8f7c50d06b283332eaa57c",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
