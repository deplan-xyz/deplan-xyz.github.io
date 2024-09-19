'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a6cc3d37b37cfd9e7655ee444c80fd6f",
"version.json": "f87b1caf2ec931233716c4fc140720be",
"favicon.ico": "b27eefcd075eec95c681058b18067381",
"index.html": "c113f0aa685dd995c07197fe32382c77",
"/": "c113f0aa685dd995c07197fe32382c77",
"CNAME": "f2cfc80e3033724acd3764383bd0d789",
"main.dart.js": "03a68352f98f48b842675449954e0147",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c5942834cf87a8b226dd58667cbf508f",
".git/ORIG_HEAD": "47ae22d6a0190f854bba6d8fd7ba8613",
".git/config": "c3ab594e7981ff38501fb9ee93c7dbb9",
".git/objects/0d/7d0981c69cf82d4f9ea42490a851f4f1047f4a": "96588c3f332e83db4053a6cb41bfc611",
".git/objects/6a/d23af2f90f76bdb57056d0ad3f31d3a9d045fe": "329a53faf16086c24fcea1e47fc0325e",
".git/objects/3c/affbca13ba03c5c965c55e05e869ac519e4e67": "3001ca5c948c40f94b688f2f2369a60a",
".git/objects/58/4bc05d62a9c547c3ba8fb2e4978b83e7bef31e": "9a7f57c705174f3af94797da80126013",
".git/objects/5f/c1bccf7b6afbd948a169626d10e9ed1b7c3b55": "ae5484a9693aa4523d14f073e7bd6eec",
".git/objects/b2/6f897937f9e13ca5d346461ba1e62c19c8da9d": "5937b40e701f009e3b93a8bc47e9c847",
".git/objects/ad/7f1387c92d01e70d3137be42430d9fef0566c9": "9fda82d54f81dd4a53ba002549a2a93f",
".git/objects/b3/f54b0091cafead49d944fe3bef2b8d19c96e27": "1c83301c85703485d9152ff1f8910074",
".git/objects/bd/ac01c9f92af41caa7fc728a1384b92fc5f85de": "d90bddccc8dfe99dbacbd14284fc842a",
".git/objects/bd/d0fcd0852f8031edafe283b91113fea34f5daa": "d6a8ba69a3305a8adccebbfb85a9d9ef",
".git/objects/f3/4a6ae5ee660dcf0890707c321977b1f3c83d7f": "9204b7f88ecb648bae7b0ec8c6fabe6a",
".git/objects/c9/b2464982696770338df7cd90f7eb477c8bfab8": "412e59825cb37755650ddcd85359f6e5",
".git/objects/fc/48057d00533551ea2dade6c9732299cadf63ac": "e7aa75a7ff906a2e1107466f5fd08976",
".git/objects/c1/b684ce3854e78e06cbac1a0eecba991216a1a6": "2780c7e18e8c21a2cb8df8ded84b7c57",
".git/objects/pack/pack-a95bcf11a00cac9d65ab21e8985caa7d773d0842.pack": "065cb526f2deb9902d907fa941d37f0c",
".git/objects/pack/pack-a95bcf11a00cac9d65ab21e8985caa7d773d0842.idx": "9e3184afb3185be7bd28cea9efb60ed5",
".git/objects/42/a90cea5defd9d187c6168049960a68e5f6c778": "50fb7884fcadc7db1028f68d85a14597",
".git/objects/89/c19da8d308d4ea705b5a88248b19c32c3ca20c": "7f2b51edcc5addfb6de9d171bad08f3b",
".git/objects/87/f95a70897435cb3023a728bdef9ad3b08908f3": "4f9704149d665b4c7a8b0d71d24ee417",
".git/objects/21/42445894ebbc5a9cf25537e0155400be09eecb": "9abbcb3854d29e989c4412460911c521",
".git/objects/75/8d419ce075c4061726c816f3c0660172ade1d2": "ded420054ee006f8d2149d754f779bf9",
".git/objects/81/8700bbd2f90cc03fd5fb18bf503c89fcdbe24a": "1c879d8e300986b5fb894ee8c6131544",
".git/objects/9a/3dda72601eccbdab22ab5d08ecabef2035fb49": "b2200df43874308da45b3b6f9ff98ca5",
".git/objects/09/e384c7be982194c42fecb8639c81c1ae69790f": "d3cd714d85c6ad1b0549964465cb6ba7",
".git/objects/91/7fccb6f0756ae79cdd5dee64cde8cd738947d8": "c5f0ec89881616d8c14569695837242d",
".git/objects/91/c69fc38c568f19d08e846ef96d9bfe6fd54239": "936f0c5cea240b4c87bdcd1cf32828e6",
".git/objects/62/4ae57b0d8f2877ad391b4be891b629380fed4f": "e8c89b137d0b927d62da54def7618f64",
".git/objects/3a/4564eb54fae95af5a5bf2f4a35a80466d00171": "3ba26953889b7d333890e0228007b370",
".git/objects/54/666da48b795856e91acfa70827f37fad9556f9": "8d3d09cb3a106ec52c3b2fb266490b06",
".git/objects/6d/2d790f2f5ba1979a0b360bf848c7d37c562b06": "77842d9b7fd14d2bb5c77609061a8204",
".git/objects/6d/d1178b3db2cdf2d0dfdedcf60df99306e54567": "d0234083db492ece544202723a6e60db",
".git/objects/99/14cdd9aa746ae484d56cb5663da03b3fe796a7": "12c7f4edda4029f4584b5abc5214f365",
".git/objects/0a/51904e39a3d4647f8ab9237bb415870e3d6f97": "5878518b0b9a00cca31066220bd61502",
".git/objects/90/aeccbe6be6a9a347f6eb70e0ed4a087edde060": "ac70ef630f81d6a5a7c3df27f668b8f6",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/b6/d3bb22165bd8a5af11cd7cab8243dfcba57eb1": "f35b9232619c022751fe745576ca1c1d",
".git/objects/b6/5743d498aa6589a55adc66a58403bfae5472ca": "5146c30c9c9c82165eaf8487ea045b09",
".git/objects/de/699007b4ab1cb8541e9d6fad5d0916c1ae3cdc": "12ff5cc7764915ca8db158dbb5b264f0",
".git/objects/a6/7c7e5f4d051a5cf790c217929821507c7d82fb": "88a52157f74a8f5fc6d3b71274ac84f4",
".git/objects/a1/4eb901e0ca2d57c15c416a4f849098e6e6f54e": "bd240c6103adf26d535417a71b7f1dfb",
".git/objects/c3/10bdf8d2a67f10b63b63f08f72e00c15231cf6": "f669d4a8c50da979ce4ed48a9b0b5761",
".git/objects/fa/03d35dfdc14196412c3c5b2a369b8e38983e1a": "3f86eb6671a4606b7bc9aa8a52b81a60",
".git/objects/1c/d38581b47a33a18cda5835c7b37671e8274fec": "3afb88e443e7ce46c388e11086dfe579",
".git/objects/49/1c384c3295c14a73db199b51e1281b5dd634ec": "8be80d318c865f9f60b7b7664e2945f1",
".git/objects/13/0b66e3694859a494c5d5a50040e728c9f4b2fc": "c76e99243e47a5b38e6839332f93c2ff",
".git/objects/8e/566ccf1a3a43362b6783024afa7679f31f382d": "737904ead3abd7b4403430b6590fc771",
".git/objects/8e/fbdaf59271ccada04b63c86de77b7c8f410b61": "bd8de3772f2b91876530118c0488a0a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90b758d95e32d2f1201c71d6898a1227",
".git/logs/refs/heads/main": "90b758d95e32d2f1201c71d6898a1227",
".git/logs/refs/remotes/origin/HEAD": "ac86e82c1c620a504840a7a1546e15ee",
".git/logs/refs/remotes/origin/main": "59c95fe513095c55c46bddcb05231de8",
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
".git/refs/heads/main": "c9c49e164ac796ce7c4d732bf40002da",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c9c49e164ac796ce7c4d732bf40002da",
".git/index": "2912a0697b45c2627863a4545fc7d067",
".git/packed-refs": "a4329782becbae3a7258f16ec1b94bb0",
".git/COMMIT_EDITMSG": "1f40fa0c327265834dc7b61fbccb8f43",
".git/FETCH_HEAD": "e62d8e2fce9b7769059602d143c34594",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "682830aab9d079b294021e1809dac92f",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "68550326710a5146b20c6eaf99228b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4af8b89eb53b4ee78c55c8695d544e1d",
"assets/fonts/MaterialIcons-Regular.otf": "4fc68e949fead596d4cb70ff680cb711",
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
