'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ab5d9f0f092e6e343630044993b8fa38",
"version.json": "f87b1caf2ec931233716c4fc140720be",
"index.html": "8e8b0b0cfe82a7c71e02b2d08c9313ca",
"/": "8e8b0b0cfe82a7c71e02b2d08c9313ca",
"main.dart.js": "166bd1d3a67528c4cb3d08b0770dea71",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e880027d493a5fd80ac4c39ce13abe0",
".git/ORIG_HEAD": "f0bbd70b94406c345cad2ee8ad9dcbdb",
".git/config": "c3ab594e7981ff38501fb9ee93c7dbb9",
".git/objects/95/266f72509712e889ad776f315b2c516a698e79": "e8a7be0cb7c7f055caeb66974354fbdd",
".git/objects/95/5be774c33e2d5958de7d993fafd685e6ad31b9": "2e3d621c31669fa980bd4d8314c9fbb4",
".git/objects/0c/f3d52622ba95163459f21ebfdc0b0d91396514": "13477e2ca54acf6f0ca0917284367593",
".git/objects/66/8ba74de34c031af572102883c0ddd830d5b929": "aa504ef692c6ba98d67e044cabee1d6d",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/88902f73d973ca4bb994984ca1645a7abeae83": "3178edf78df64e9902d7e7e87fad15ed",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/09047c81cfeee380be16f369ad4df87e76c58a": "f14ee565b7f740468ee78c158c85e399",
".git/objects/58/6e79a40a2a5de35dbae1887c981cb99696ae45": "8389b0a14280a77d64b344af2e7420fc",
".git/objects/60/6904760821afd7665479096e65414535b7c1a5": "98e6a361e1fcd8be11b362ed561ccb75",
".git/objects/9d/d4aa3790914eb88e68a643f851df86e8537d32": "c39dbdc21391bed2ee938f0cdfe90361",
".git/objects/9c/f55b7e34cf9e5652ce62187140c9f9d0b3f592": "ca9cd912656a508d8e7e2366c8b897d4",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/ba9497846a886b8d67e2e84021e1353909a6ef": "020e71a85861c943ec158860ef47deac",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/c27cd03145502d9df88071e6a03359330eca50": "16bb123f14bdfa40994c38c549898c39",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/2587e9ca20308804d3de3fb6db03fffb338f4b": "721742f87c52f03540c3216138196e00",
".git/objects/e2/314444431859f5e2d0c9fbd60479de6b8a3fa2": "736bfe320c54e7746cdd0b63bf528b17",
".git/objects/f3/d3f9f37f0ec97cba665940428c6bcefe188d48": "e8c5aa8fb0fbdf3e1c9a695960d5d311",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/ebeb55f68ef3ba693ff2d3b2f1fb4e57e76298": "b8d559d57c2f6da5a846a259334fc5f6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0adb12df12101c6635deba22534b9d3bd96150": "7ab9452c1eb445e87455f735e095a012",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/4e/5aafbd70239e4cd9bce2f14d5c8c14954964ec": "c4e0194de6f983bb2150271ce9b93bec",
".git/objects/18/38118f8d7217cbb6deb2aab53da65f5d3e6945": "1de23a41935a1cd492e4ae458b2efc0c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/40d3c4daa78ee0ae1ebe98c12f05c8dd1d669a": "4bed38f4300972810435976c843887ff",
".git/objects/16/a3c8483cac00fa024aecf42ff819916af8454a": "a669410a2fdab3631059fc28c78252e7",
".git/objects/42/ef1f1f3f175c7e5db5b73455f400c6fdc78cfc": "c3cfb3467709974fedcb1417cf86658b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/28/fa5a4bb946386d665ce21a881f4813cdd32475": "bd712cefb13f07a5b96fd9620750b529",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/0158f1c3e81fdd00ae628c5f57307d9d1af765": "35976ea79f876d7b7064baca48eb3e93",
".git/objects/81/117111859b3f5483dd730aaff5a93889befc9f": "e33847e8ae2810fd5fd69e5221ff768a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/94d050d500df30d1f1426a1100fa9892d32fa6": "3b8a3082c75ae6edd5a937970aeb14e5",
".git/objects/9f/8fb1a477fea976368b7b62f97ab2bc9be3b817": "e7044f3fd4396fb76ed0cae744780f5b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/001ccf942cfedd2718f2e44bad460c1539cb36": "b4490aa37e5a8feb31bc9f249e3a0ec0",
".git/objects/6e/05925ea339df5c84115c40bf7b5a9615a174d6": "33c8444a6b60dd3724889d744a033a5e",
".git/objects/5c/99977be4783751cb7e2a84bdc4857af1014319": "56b2d9a1dc514ae17433318ecb4058a7",
".git/objects/09/b93b1b44d07867aec66eb90e79dc06b4d59d5b": "d89e8ce34fc01ff853c4f70e7b83d189",
".git/objects/5d/87105f0ef56541ca339e4ad7ecb89ee23ac21e": "f64c81a753b416ea8ae064a346d6ab50",
".git/objects/3a/e3a5e61cc2d1c613f481182ddc6288dc2daeb5": "bb85a7280bd57bb2de539a869bd9e3f8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/1b59b104d2e274246b52c1fca0f99bc8c544cf": "5146ee01af6beed651ad1d0e760c6ebe",
".git/objects/06/5e2d63f7e1692f096b8b6e086d4e85341ce1c5": "7f85d337f96555609c57074df9e2bb3d",
".git/objects/97/961b7cc6df94db6645d1a78ca38a1afbf65423": "ca72e97bdb039198bcf959d271450d09",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/e465ee6a46ada61ecbe51e65f989c192c4bd0c": "35e4691906e9914715eba7917d1e21ef",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/aa/553487418424066bb09b9aaa49ffc2a56da551": "4db22c2c35a67d79c6e6319f4c355854",
".git/objects/aa/f9bae22d48884d7d6500d2ab91eb234a02046f": "93ad4143a621120015d163a383df221d",
".git/objects/af/6944f1407cbf6dd903fc4df981d7a6717e13bb": "984935b17e2686fb13abce8fcb4bdaea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/f22971aae10dca04632e3e0c0e13fdf65cfb0b": "86be577ed3d4fb59e0feeefaf2c6a2c3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/3439b1f299de457b1cbf3d726b2039f304c23f": "8f6ef0fa45250efd776a64240492b72f",
".git/objects/c3/081b0c18502d38bc5e78b1b09636da6456d947": "dbf22a2682cc26b581079c1194e551a2",
".git/objects/c3/d512e0c1b29667135fc70b35cd892335021937": "9f818c6cad0f5eb0e3e93744fa572c2c",
".git/objects/c4/fbe16c3d62d2e171a9ae50dd98c20b763d6d75": "d308ac4e2054263e33cb6f204942b043",
".git/objects/c4/be847cc7b1c0bb1822d1a85579a9c00f112772": "2340d7d6c87e50af27be0446fbaba80f",
".git/objects/ea/6f8183a10fae1e899ad961ff9991559c437095": "9cd2071d92b7b72f488740bf771f7491",
".git/objects/fa/c351ffe9cd40575f92373a01f2d31ffb9a1267": "34670fa59a88846092bbaef9b6312cc7",
".git/objects/c5/b87b48a4aee3d89b18058f3cb68d7d712d0ea6": "d43a44700ad9ebadc756de28c354f3ad",
".git/objects/c2/1bc274312b93086b8fc357c8a7b94dc5357c30": "f087999edfbad7c431ba915fc31a5d79",
".git/objects/e9/5ef2c2a1a2f0073005d3504bb60dbd30bb5ce7": "35d64528f468f005298bffb3e5e34e01",
".git/objects/f8/5744ba07f6513d42bf190295e8ec9599a27555": "f66ad2bbb2202e109d28c4aa551e51c2",
".git/objects/83/8ff793e62a7000d1e3fc5adb7f2ce4272c728e": "6a37125bf3cc62506b1ef59a6e84087a",
".git/objects/77/391fc043e3547bedace64717bdfb47d4a64eaf": "5b8906d1a6673c7bc91e1fac82207021",
".git/objects/70/423658e318fb3818f393a8685eda493898023c": "74cd82349380d663700e4d099b9964d7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/72a6d92bc0d796a798fd56114cda796b866b51": "7da570e679703b861edcde7426ee4aa8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/c6384f86a43288d35083c10642d1b4c06c509d": "764e2bb5bd79896c9d247707eb6ad325",
".git/objects/71/27a5c033b91c8c5a3fa7a93635a1d4586d183c": "a843e5f9abb6c3e1b0489d98bc8ed09a",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/14/9c23d66ea0ed13df0cbbf2f5b62d320c55f222": "4195b650da48627098c21b51147a4709",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e8e7abf51c97ac4f98a4dd44fb84451",
".git/logs/refs/heads/main": "8e0689f032450d22e41e01e312946e23",
".git/logs/refs/remotes/origin/main": "9ae7f6b58f06d23ed3daf5a744619f78",
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
".git/refs/heads/main": "cc09f3f07bf724f2567883156710269f",
".git/refs/remotes/origin/main": "cc09f3f07bf724f2567883156710269f",
".git/index": "7121f326fc67b6e661c704534d1963f1",
".git/COMMIT_EDITMSG": "72f16a8484084ff67b0087a17639eae2",
".git/FETCH_HEAD": "109edd79031b3df65ae352e7661cebb3",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "4a55a1de66448d22d830ece7e7c711ce",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "68550326710a5146b20c6eaf99228b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4af8b89eb53b4ee78c55c8695d544e1d",
"assets/fonts/MaterialIcons-Regular.otf": "5716ea465c8abd2693b8d5f16b3179f1",
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
