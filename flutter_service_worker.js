'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8771a3a4204ad2f31dbf231d778a423e",
"version.json": "f87b1caf2ec931233716c4fc140720be",
"favicon.ico": "b27eefcd075eec95c681058b18067381",
"index.html": "c113f0aa685dd995c07197fe32382c77",
"/": "c113f0aa685dd995c07197fe32382c77",
"main.dart.js": "e1dee3f92563275a0048a548b4e04271",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c5942834cf87a8b226dd58667cbf508f",
".git/config": "c3ab594e7981ff38501fb9ee93c7dbb9",
".git/objects/ad/7f1387c92d01e70d3137be42430d9fef0566c9": "9fda82d54f81dd4a53ba002549a2a93f",
".git/objects/b3/f54b0091cafead49d944fe3bef2b8d19c96e27": "1c83301c85703485d9152ff1f8910074",
".git/objects/bd/d0fcd0852f8031edafe283b91113fea34f5daa": "d6a8ba69a3305a8adccebbfb85a9d9ef",
".git/objects/fc/48057d00533551ea2dade6c9732299cadf63ac": "e7aa75a7ff906a2e1107466f5fd08976",
".git/objects/pack/pack-a95bcf11a00cac9d65ab21e8985caa7d773d0842.pack": "065cb526f2deb9902d907fa941d37f0c",
".git/objects/pack/pack-a95bcf11a00cac9d65ab21e8985caa7d773d0842.idx": "9e3184afb3185be7bd28cea9efb60ed5",
".git/objects/75/8d419ce075c4061726c816f3c0660172ade1d2": "ded420054ee006f8d2149d754f779bf9",
".git/objects/9a/3dda72601eccbdab22ab5d08ecabef2035fb49": "b2200df43874308da45b3b6f9ff98ca5",
".git/objects/09/e384c7be982194c42fecb8639c81c1ae69790f": "d3cd714d85c6ad1b0549964465cb6ba7",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/6d/d1178b3db2cdf2d0dfdedcf60df99306e54567": "d0234083db492ece544202723a6e60db",
".git/objects/99/14cdd9aa746ae484d56cb5663da03b3fe796a7": "12c7f4edda4029f4584b5abc5214f365",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/c3/10bdf8d2a67f10b63b63f08f72e00c15231cf6": "f669d4a8c50da979ce4ed48a9b0b5761",
".git/objects/8e/fbdaf59271ccada04b63c86de77b7c8f410b61": "bd8de3772f2b91876530118c0488a0a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a4354468d6f78d10cc74a7db634afb99",
".git/logs/refs/heads/main": "a4354468d6f78d10cc74a7db634afb99",
".git/logs/refs/remotes/origin/HEAD": "ac86e82c1c620a504840a7a1546e15ee",
".git/logs/refs/remotes/origin/main": "0c26de491e177c054e6b288f77562561",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2f1167ad7785c852569283fcdf1408ef",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2f1167ad7785c852569283fcdf1408ef",
".git/index": "fc1717549d188cbb98e410a080b8f8cf",
".git/packed-refs": "a4329782becbae3a7258f16ec1b94bb0",
".git/COMMIT_EDITMSG": "3512d630d8f210567be2138b9a39bd93",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "682830aab9d079b294021e1809dac92f",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "68550326710a5146b20c6eaf99228b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4af8b89eb53b4ee78c55c8695d544e1d",
"assets/fonts/MaterialIcons-Regular.otf": "c69a9c93eb8af89fdbeae554c9f14625",
"assets/assets/images/subsription-logo.png": "2abedfd99d67fba65c0808028955423f",
"assets/assets/images/DePlan_Logo%2520Black.png": "f8079280e2dd92e54b695f9251b4931a",
"assets/assets/images/DePlan_Logo%2520Blue.png": "851a6a60af4629ca7d8e2ffc21e33196",
"assets/assets/icons/calendar-icon.png": "29cc97b7a6593ad3e83f7cb233f83b18",
"assets/assets/icons/gear_icon.png": "211777f0a1f710804d125e003a6ecb6c",
"assets/assets/fonts/Gilroy-Medium.ttf": "ef9daf9c32f47a3468f30f861e92b9c4",
"assets/assets/fonts/SF-Pro-Display-Light.otf": "d2e8530d7b0f9ca7c5298263bd1a184a",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "f4245a5167ad609c4ba2d0850d553bd2",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "94348d7ee70c258261a757b66596c4f9",
"assets/assets/fonts/SF-Pro-Display-Medium.otf": "84d3637759a89aa1b59df2a828544511",
"assets/assets/fonts/Gilroy-Regular.ttf": "af5b8da12b32c5e74532c6446eb356b4",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "2723a0240d8e4fd81b39668e0e33640a",
"assets/assets/fonts/Gilroy-Light.ttf": "1111f8b003573d984ba8a7179862fb32",
"assets/assets/fonts/Gilroy-Bold.ttf": "10b9cd1ddd69d318220fdfeca35a23b3",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
