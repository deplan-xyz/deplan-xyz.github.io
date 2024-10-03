'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e0797edd0a1974d9299f5a0c97f431de",
"version.json": "daa8ac60ccebc7a3a2f1e90da264cfad",
"favicon.ico": "b27eefcd075eec95c681058b18067381",
"index.html": "c1a53c1b779f4ffb35374f01448181b1",
"/": "c1a53c1b779f4ffb35374f01448181b1",
"CNAME": "f2cfc80e3033724acd3764383bd0d789",
"main.dart.js": "964531225f0486454cbb7a58a6ddf56c",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-512.png": "ab411a8d14234f10b7d937461b4b3962",
"icons/Icon-512.png": "ab411a8d14234f10b7d937461b4b3962",
"manifest.json": "d9156b816ebdc817068dd2e4de18b1df",
".git/ORIG_HEAD": "19beb92370857930679b0e0fd0136254",
".git/config": "bdd4df00db471750ff881a65fb467582",
".git/objects/93/558a57f43b1bf59e1021b7b923a53ba98a91a4": "03543cd8c9c7997cb174451f5196ac06",
".git/objects/05/73f5cb2c4886582eda8e3f1f264cc6136712bd": "be24ccb4db9dad43bb4bc085434f0848",
".git/objects/9c/76b02ce6eaecdbb7388f528828cd2ed34127de": "79941485a38e59ecb095385accd6d89f",
".git/objects/d9/f9c9a20911e24075647ab876c1d20b7d46e0d4": "1093c0e4fbe27615555320a48c861e9d",
".git/objects/d9/61a7778d691ed526b1b8de1fb7be12f33933e5": "17408bdf319834a5c91c96b1510b03d7",
".git/objects/be/8deb8de3a028b11f983cbed461ab9f44c0e09d": "82f0de524e5f9e386a3e8cf9f8896c4c",
".git/objects/df/589920f8f13aac636681d04ae95446b4d6cbc0": "68f53df94e7b06b4985c760b4bdf8004",
".git/objects/d6/b19ad4fc1817f5d0b0114ee46584e558a5deed": "8492c618aa6d6fa911c5ed5abeb1a369",
".git/objects/d8/66cafc53c540ac64b3e17cf91007ed1e68fba9": "58ad82810110f0cd1c510e074963dbfa",
".git/objects/ab/215babe7316941d094f4b7f77550571b88c769": "522160dd799740a729262540809a2c66",
".git/objects/eb/8543661c0400ef2ee82c81fd4e8307e13e5978": "a94cbbcbadfd10ebd87ad3b69f402b50",
".git/objects/ee/8258a9f1ea38cf3728b5d84685cc93c1348d3a": "ea431926750ed4bff8a4c5c353632e73",
".git/objects/f5/a43274c1cbd40bd49b7f17110be511ce8d6363": "9853be6ca13550d3eca115ccfd0d8426",
".git/objects/cf/4c8891eae6d84203ed152ad21efbd35abcd012": "a7ad196afa36a4ea0d69c8dfffbe86b3",
".git/objects/ca/e12042abc69a3bb355e0f275198978dbce8cc4": "5a91a1505b01c76a8cbc49148f08f7b1",
".git/objects/fb/7fcc6598dedc7c441417979d2983820aeb68fb": "ff16259790e2ee14cb19f432e4ce34b8",
".git/objects/pack/pack-582fab6abc18e7d86508fe231d344087c77c1492.idx": "a5b8450d11f321f0dc983e340a79582c",
".git/objects/pack/pack-582fab6abc18e7d86508fe231d344087c77c1492.pack": "a4d20fceda85843e44f4547147605516",
".git/objects/7e/1af7abcaac080c5f38c49c01f543420c0798b0": "9ef24a934d89ba5e4bd888e8aafd37f8",
".git/objects/07/88bd73b70fa5571fa38cac82f18c07a7ad9fda": "fe6de38e984d52b7b5591a34d289d7b3",
".git/objects/38/53da502758793925c540e5797b6f403c253ec7": "e9bd4d180f829137ddd85b09c7553aa7",
".git/objects/5c/e422269d65b7baecbd361c5e41f772d1dfef89": "a08ab241f2f315ce173942fbbfc34261",
".git/objects/31/8b585845677e32b37ed532b28cd701ffe617ac": "6e10f1502a00a1a9d49735e2fef3e673",
".git/objects/31/b5525612917cb92cf23349751aec9024aa71e6": "832a0b97de604886b4d863a7107ad3b1",
".git/objects/62/3fdd791cc41b8a8422ef0c3fdde240453d708f": "5fdf12d9ad7a2922133f73129dc245bb",
".git/objects/98/02aa99e6b84225b53f7c47608ee665e8acbe27": "3d4dcecc411fd8c27bef1bd0b0192b88",
".git/objects/3f/3045f08641278583c2d916a64d70e3fc02dce5": "e25f8e6e12214853a4baf0491a089c05",
".git/objects/6c/b2a877fa7b03c4864d9f0f39885cbba9fb2616": "956583e938679e62cb17805efafcb005",
".git/objects/63/34f249e1de8ccd929b76ef6d309be3413f3f79": "b9f2e16a6c1f66f0e93dc53e51f289fb",
".git/objects/cd/1962a04f86451b22856367797f10f23d8f24ea": "f3b29e5faaeed936d07f8b18c2683946",
".git/objects/f7/6db53917f9f13d18a0ecf0fe8ef20d3074d794": "c703dfeb93a8825880756ab964dc9260",
".git/objects/fa/5d2f5b863c823a89d95476a30b79fa30797277": "d31f15a306112d0288c7e835cf3432c8",
".git/objects/f1/81b64993d9cabb57456a960ed77984e8c8cb11": "a65dd3964b74dc1172b1342e132ed7a1",
".git/objects/84/ed110b8ea709abcc494ebeb407407bc1859810": "c0c45688dc3c171a971d90693c57adf2",
".git/objects/4a/b665db1b8e0cbba669e7e2af6fe9e4a51196ec": "9eff3d64732df903f948822aef4de1d0",
".git/objects/4f/0c7b30ec2a3114d2c99a4c4f799f3d38863b7d": "1aed17d9f6e56263c5ad504d34a42505",
".git/objects/8d/66f30f4df1b697c8593d794a1eeb2cc1efd37f": "55d97ca9ea3f3a32afb8f8857e65f1f2",
".git/objects/8c/fb239e87cebae29564cc8fbc2863fc5e6ad59e": "68b9f1e5512dc4ec57452e10d61c5030",
".git/objects/1d/07ba6f139fc5871afc9fd1fee994769b3485ab": "5c775949c2a33a2150af0e4f6c6e1a52",
".git/objects/1c/40f5fea0195869c2da209673a7104deae6c2d4": "7113270d1e2a9538701e97cc557d66cd",
".git/objects/49/c2e4b3b576f1b19dfab2d055ae84296dc6c90e": "3a2462555af6fc2f5365429a8ead1ce2",
".git/objects/8b/bff59c37b06df7990f098753728c88c799b8db": "7ec40ea7a6af5afa077d9901b78289c6",
".git/objects/14/97c2b3979f06ee132e8846a1749aef39354877": "e4cf51247c2a36f956e20577a1a17db1",
".git/objects/8e/a272870cae54e58364cfda1a6f1063da0f9b01": "1c5e23a9c0a35c9c4f6cbc0929390089",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7e2550339ef8efa946ff269472b8663",
".git/logs/refs/heads/main": "b7e2550339ef8efa946ff269472b8663",
".git/logs/refs/remotes/origin/HEAD": "9e0174fbba66b37af171ae2210d28343",
".git/logs/refs/remotes/origin/main": "2e5a9d1ea97aa4a57473997f13b0f4f9",
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
".git/refs/heads/main": "322105d587020b0947ed3e6bc615f21c",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "322105d587020b0947ed3e6bc615f21c",
".git/index": "93bfa170f79c133a6a9ec2d1ec2e18d0",
".git/packed-refs": "ac5131b57e44d8c657b2081874b1dc1f",
".git/COMMIT_EDITMSG": "cd8a69800c51f112d759cb75c5b38568",
".git/FETCH_HEAD": "8ed847c173d92963e33b2301795edcb0",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "4ab4207a8ed1fe4dbf34695f6cb0d557",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "68550326710a5146b20c6eaf99228b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4af8b89eb53b4ee78c55c8695d544e1d",
"assets/fonts/MaterialIcons-Regular.otf": "5b10f5c7e067df30da9d39265fe2b13a",
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
