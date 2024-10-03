'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1284f9bca1996c91ec8a068c06c2f7d8",
"version.json": "daa8ac60ccebc7a3a2f1e90da264cfad",
"favicon.ico": "b27eefcd075eec95c681058b18067381",
"index.html": "c1a53c1b779f4ffb35374f01448181b1",
"/": "c1a53c1b779f4ffb35374f01448181b1",
"CNAME": "f2cfc80e3033724acd3764383bd0d789",
"main.dart.js": "acf4828b0fa28ddf9eb28c3b9d344172",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-512.png": "ab411a8d14234f10b7d937461b4b3962",
"icons/Icon-512.png": "ab411a8d14234f10b7d937461b4b3962",
"manifest.json": "d9156b816ebdc817068dd2e4de18b1df",
".git/ORIG_HEAD": "f2ca8f173b14361aaeaf4e060bcbb31f",
".git/config": "1ace94d21021efb8e47ffbd77733f84b",
".git/objects/3e/f70bbd97ed0e3b7eb1c5d21cc48f5866d6d6e5": "c19ebabda92133b8b5856c6493f68b16",
".git/objects/9b/a021119c15f2ca3327988c67f3fb938fa145ac": "3a85e23185d530d8b2f46eeabd4af200",
".git/objects/32/43fdcf4b537084d43aaac15e0b7ba3eea8dca0": "67120b6d0d6ca75dd32df8b67eb0e2c0",
".git/objects/35/59501444c5e337c287c8f3a30efa79cbd8502e": "a036dbf225f4a7e00ed5e46c25abe0d3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9c/6736e770f62d6759fc28c7718f6aa43b6ae79e": "c39bd4880c15b237c603235c20838888",
".git/objects/d0/af12eb0b97058a424cdd8c378422994bf113a6": "bac1655d612288eb0b417c0c08f8fae5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/c0/1989042aa55870dd954b253d9d7db34695c4de": "9b6106946d9c8c4c93ddc3590eee724b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/c5217f0140fd5a3b8a3c65443c0a2b7dfa590c": "e452d07954396b0e18b39bef96100daf",
".git/objects/c1/2242584aefe3a1235e18aac6833c0bb9c6b8d7": "b6c0a9bb7d22af6880130b5c7791a023",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-47164232184857c594edea8604a39432279468d7.pack": "0fb1a007f371ce1fe030a08197377d48",
".git/objects/pack/pack-47164232184857c594edea8604a39432279468d7.idx": "7ec06c7aa7e65151e0abf6cda3df30ac",
".git/objects/87/81ee06c018f162fd224a1973327ddf5602d76d": "8660d8080fbba19d38f2d76e6ccf5b73",
".git/objects/88/e1530224e0e62179b1b9de5b31c1e35705028e": "5aa4d95122f4f55e7838433bd3f1a6ee",
".git/objects/6b/e58afec6a46e042b663567dd0525f33e21aa0d": "198538ff11e0e5f7b4bcfa01e0a6552b",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/37/0c2743989d949cf0fa08d4a29887b90bbf9ebe": "974921273fb17b898ff842054ae89e08",
".git/objects/97/60c4463efd764407967d2c8fbe72975956bb8b": "232b90370dc3269b1a4d811b26148622",
".git/objects/dc/7a51909dff2ece0d79c0d940150c4884def84e": "a203705588999f7d77cd79dbe957feb9",
".git/objects/b0/c1c902f695715e48c04be1249bcb037088fbad": "9506f046dfea7636d25aeb552e7cf7d3",
".git/objects/b9/735c1499ca82cb5f0ab4adca7ffbd86976913d": "e3c73554310ebf3675c1b15668aeac1b",
".git/objects/e6/9ae4b8d2a580d73149e1d70aa578c1503d9345": "5089244b17e5d8431dd49bdf7ffec7da",
".git/objects/ff/529e0621cd24409f556bda1a36813f3bd870b1": "552af6b58482a8aaa351495a0b1a9927",
".git/objects/ff/b7d3fd29006ed58d677d57a25feb29c5e48222": "174db783b20febd275dfa52c8f12dd5e",
".git/objects/c5/35b9c54ed4012d15e7cc8beb86b1e3754e7138": "f63f5683c3f27a04e626f64ead6d9d99",
".git/objects/f6/1675f49d3eec4114dd1700d9821a9410d9d57b": "59838ad4cd6a3a2d330970aa40f41368",
".git/objects/cb/2892db685ccb7e336edd37fa05b5b633e3dfc7": "37b75f681fad05f61e9aed25d21ba3e5",
".git/objects/46/464df0af9fec5199df98acd64641c37696199d": "d4afada76b057f3bef9ff573aa63f83d",
".git/objects/1b/2feb80017769d20051e63c1a12e045f6aa3f10": "69a332e2c07e1e2d375a12a06926d2b3",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/15/714736fe3988c01a6dea7c84ef2d9c4f5f3dfe": "c9ab26747b76b61b2ef06006eb11f17f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/c2a9a23f6a05da663772e16448c84dbded9c63": "4ece1fc5a6ba7e85cae15c21af9d15ce",
".git/objects/7a/6adbbee6bd469186c429f71b3545e1bf7fbeee": "b6f1e4e72c77fdb390fbc3eaea2ba553",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a6a03f57a9d9726f2fcd270ab3116a27",
".git/logs/refs/heads/main": "85a18088aee1b7bd7745d11ec6af7f89",
".git/logs/refs/remotes/origin/main": "29583cf2e36d464d1daf2a40b8d4b160",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "3b995d39ea6eef26faee011505ea9179",
".git/refs/remotes/origin/main": "3b995d39ea6eef26faee011505ea9179",
".git/index": "781f88fed6ec2c5430abcd5cdeaf54a6",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "a476fbb49cc504baeddca02748b72f2b",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "1a3eedb5bfd9243738f1bcad65b4c366",
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
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
