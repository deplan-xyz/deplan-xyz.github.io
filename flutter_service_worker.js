'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a949a9bd526326c53267ce34827e7f96",
"version.json": "daa8ac60ccebc7a3a2f1e90da264cfad",
"favicon.ico": "b27eefcd075eec95c681058b18067381",
"index.html": "c1a53c1b779f4ffb35374f01448181b1",
"/": "c1a53c1b779f4ffb35374f01448181b1",
"CNAME": "f2cfc80e3033724acd3764383bd0d789",
"main.dart.js": "82bb2ee68b27c652e73497e08d3c7d41",
"404.html": "f4e3edb53349945387e617abbd0fd231",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/Icon-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-192.png": "716b74ed450809bf50a83fe3af9b79c6",
"icons/Icon-maskable-512.png": "ab411a8d14234f10b7d937461b4b3962",
"icons/Icon-512.png": "ab411a8d14234f10b7d937461b4b3962",
"manifest.json": "d9156b816ebdc817068dd2e4de18b1df",
".git/ORIG_HEAD": "ff82c4e65ac95c1e10ec36f7ea1ffc3f",
".git/config": "1ace94d21021efb8e47ffbd77733f84b",
".git/objects/59/d24431dd2be3af444aaff8c1c81f0e6498988f": "cc978e165bcaec8c4168b9e94074f328",
".git/objects/59/ee7d07ac96e79568a79a950cb4b37518b9bdd7": "f52e18ad652ee248879599af24d27fce",
".git/objects/92/561deab0414e7df248c829bf6ef5c1a31ee470": "9bf92b72ebb119eaff886f722bb0f98d",
".git/objects/0c/3078008434533b0aecbb8c3cd6e73983a2e825": "83e876887c91c3f2ac9d0d6f1eee7e89",
".git/objects/66/23f93f5fc09c57bf7f5d7ccc8746e07e27416c": "e48dff5dcb3106fbd44bc1cb2149a84c",
".git/objects/3e/f70bbd97ed0e3b7eb1c5d21cc48f5866d6d6e5": "c19ebabda92133b8b5856c6493f68b16",
".git/objects/3e/bfdd5d711eeb6a10143a3c3149b43403fb4ad5": "29505c6c9a3d14337f671059d2b05dc1",
".git/objects/9b/a021119c15f2ca3327988c67f3fb938fa145ac": "3a85e23185d530d8b2f46eeabd4af200",
".git/objects/6a/b748b76f89c9e5dc704fe87e9bfdbcb2763f7a": "05543f60773b3d44b7aa59e67e6b23dc",
".git/objects/6a/5bba3ef98d448fc4f78eadc870421ed0124eed": "f2c832c5916b903bce39b2091f82f379",
".git/objects/32/43fdcf4b537084d43aaac15e0b7ba3eea8dca0": "67120b6d0d6ca75dd32df8b67eb0e2c0",
".git/objects/35/59501444c5e337c287c8f3a30efa79cbd8502e": "a036dbf225f4a7e00ed5e46c25abe0d3",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/0b/e37b3c14b07f28bb2a233138db7cd04f560d7e": "35aa572d0c5178f6ee6b21c19c7e21c1",
".git/objects/93/558a57f43b1bf59e1021b7b923a53ba98a91a4": "03543cd8c9c7997cb174451f5196ac06",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/457a21d439ad12edd9bd7b58c68226722baf0d": "7d6ab8df692dd2f3d3a573c31aaf9a2f",
".git/objects/5f/9e0a0dcb0a4d77ab55e8d7bbd57dade4352f09": "2a0ef5a6faf44c7205c7c565bd95908c",
".git/objects/05/73f5cb2c4886582eda8e3f1f264cc6136712bd": "be24ccb4db9dad43bb4bc085434f0848",
".git/objects/9c/76b02ce6eaecdbb7388f528828cd2ed34127de": "79941485a38e59ecb095385accd6d89f",
".git/objects/9c/6736e770f62d6759fc28c7718f6aa43b6ae79e": "c39bd4880c15b237c603235c20838888",
".git/objects/d9/f9c9a20911e24075647ab876c1d20b7d46e0d4": "1093c0e4fbe27615555320a48c861e9d",
".git/objects/d9/61a7778d691ed526b1b8de1fb7be12f33933e5": "17408bdf319834a5c91c96b1510b03d7",
".git/objects/ac/49de246009e03fc2de03d79cefb48eaeaa786e": "02e78c5409b4144d7fe010c5840fd848",
".git/objects/d0/b842ef070ca5cea8b3e3262e74aab138880c8f": "08b540439b8ec0c935838906464058bd",
".git/objects/d0/af12eb0b97058a424cdd8c378422994bf113a6": "bac1655d612288eb0b417c0c08f8fae5",
".git/objects/be/8deb8de3a028b11f983cbed461ab9f44c0e09d": "82f0de524e5f9e386a3e8cf9f8896c4c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/589920f8f13aac636681d04ae95446b4d6cbc0": "68f53df94e7b06b4985c760b4bdf8004",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/f2f9b698e6c39623cfd6a5ffe667ab9fcb7304": "c9fbd5b332e8ff7a2e9dd36840b9ba33",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/b19ad4fc1817f5d0b0114ee46584e558a5deed": "8492c618aa6d6fa911c5ed5abeb1a369",
".git/objects/d8/66cafc53c540ac64b3e17cf91007ed1e68fba9": "58ad82810110f0cd1c510e074963dbfa",
".git/objects/ab/215babe7316941d094f4b7f77550571b88c769": "522160dd799740a729262540809a2c66",
".git/objects/f4/7937d73ccec42045074decc62e346d9287b72b": "5692f3c912ac78557a22cf5b284f3df6",
".git/objects/f4/eb02885576636cedf1325cf126abdccbeea550": "aa49a0369845e9d492327b61d7031ad7",
".git/objects/eb/8543661c0400ef2ee82c81fd4e8307e13e5978": "a94cbbcbadfd10ebd87ad3b69f402b50",
".git/objects/c7/dca0a77d47a6d0353b8621e7df7875503d7daa": "03245fba85ff654ac48c1c7397917c6c",
".git/objects/c0/1989042aa55870dd954b253d9d7db34695c4de": "9b6106946d9c8c4c93ddc3590eee724b",
".git/objects/c0/600383be520aaa5a70e3a14fc5d9772ac6a4ce": "8ac948de46e827fb28e1c415267224ef",
".git/objects/ee/8258a9f1ea38cf3728b5d84685cc93c1348d3a": "ea431926750ed4bff8a4c5c353632e73",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/43058f0f80dc95432982e7abee7e7961a3e962": "86c5b6c0b6db16d3bc756e21708f581b",
".git/objects/fc/a8962852cb98fdceb90876c1dd55429504a71b": "870e685565621541b4381be817e0f29b",
".git/objects/fd/c5217f0140fd5a3b8a3c65443c0a2b7dfa590c": "e452d07954396b0e18b39bef96100daf",
".git/objects/f5/a43274c1cbd40bd49b7f17110be511ce8d6363": "9853be6ca13550d3eca115ccfd0d8426",
".git/objects/cf/4c8891eae6d84203ed152ad21efbd35abcd012": "a7ad196afa36a4ea0d69c8dfffbe86b3",
".git/objects/ca/e12042abc69a3bb355e0f275198978dbce8cc4": "5a91a1505b01c76a8cbc49148f08f7b1",
".git/objects/e4/b75f939d00d84177789f0f876f4c01fac882b8": "777e9b1e16c27a5e2595fa388bc421c3",
".git/objects/fe/904e51fe2a704461200ad193232e94d5349c2d": "81284bb267bb285429e516a2240c5e77",
".git/objects/fb/7fcc6598dedc7c441417979d2983820aeb68fb": "ff16259790e2ee14cb19f432e4ce34b8",
".git/objects/c1/2242584aefe3a1235e18aac6833c0bb9c6b8d7": "b6c0a9bb7d22af6880130b5c7791a023",
".git/objects/c6/201a7535f380a09090a31b1b1ffd6928da1f17": "a15f6586639689fc05fe3856048c401a",
".git/objects/ec/fb4df0af595aa0848a7b120f188ea958bfa2be": "01378653162ce9ed1539a742a5a91555",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-47164232184857c594edea8604a39432279468d7.pack": "0fb1a007f371ce1fe030a08197377d48",
".git/objects/pack/pack-47164232184857c594edea8604a39432279468d7.idx": "7ec06c7aa7e65151e0abf6cda3df30ac",
".git/objects/42/4941ee792abfafade0400c5d827e43b1a57f91": "ec424dce53fb060b187a6bcf6f24566d",
".git/objects/89/9bcbf8773775b9dca8d56ff06fff2e91277154": "c4311de20e3d4675e2b626dedc13634e",
".git/objects/1f/ea29dffab76c6a9e18f65273e749758e2e0ba3": "50aaea0206f4a2848cc559458e26460a",
".git/objects/1f/6a7d665fcbc46e6395dcfcb9a6f0463b30a993": "eedd5660f3e10474cc5381b6ad1bef46",
".git/objects/73/bb641cfbfcaf24776e190c36bde529dc89b819": "d7dbed19758fa52e680bcb5f06a1d783",
".git/objects/87/81ee06c018f162fd224a1973327ddf5602d76d": "8660d8080fbba19d38f2d76e6ccf5b73",
".git/objects/74/0cc74bbce924a488113620d5d70fbfcf3f277d": "abdede54a097c9912634841fbe05ad23",
".git/objects/7e/1af7abcaac080c5f38c49c01f543420c0798b0": "9ef24a934d89ba5e4bd888e8aafd37f8",
".git/objects/7e/cd3d7e7f0117fd4c1a7dc5dccf7ce0184c2c35": "a1a9592784d28a5b2aa7785690d8174c",
".git/objects/10/f21aebc60a92a7b6ae9bdd91c65ee1d3ea06d7": "3e60e13ee69f37e47ec01094ef4d0b16",
".git/objects/4c/4d925fd21d51e27ddfda2bb07d6e118b86953a": "08407759541bba6dd71b11ff49818f33",
".git/objects/4d/931637edf096c595bd663549cf24496dff7882": "f1650cc9a6fddc653e55fcadb43336e5",
".git/objects/72/075036550e8eb9ac3e102b22c4c802d7d59f5b": "b1e52fc23f3a99e95f3925015572f209",
".git/objects/2f/3d9d3e66dfe717b7b2f08a178821d844860834": "8c88ce481ec8cb0f715a9cc1adf88309",
".git/objects/88/8954f282892c2d5f1271864d23c0e02afc3b2f": "9a9035aa9ea53036541a8b54e5e640c9",
".git/objects/88/e1530224e0e62179b1b9de5b31c1e35705028e": "5aa4d95122f4f55e7838433bd3f1a6ee",
".git/objects/6b/e58afec6a46e042b663567dd0525f33e21aa0d": "198538ff11e0e5f7b4bcfa01e0a6552b",
".git/objects/07/88bd73b70fa5571fa38cac82f18c07a7ad9fda": "fe6de38e984d52b7b5591a34d289d7b3",
".git/objects/38/35cbb5feb095f577e6732066004e68c60ea3c7": "07c7d5417e1b2a91e4fce1dcdcad9a44",
".git/objects/38/53da502758793925c540e5797b6f403c253ec7": "e9bd4d180f829137ddd85b09c7553aa7",
".git/objects/9a/b174a1993883058c08ccca28230a5750874cf8": "5fda8077c2ef7e019958fb028ab18e21",
".git/objects/5c/e422269d65b7baecbd361c5e41f772d1dfef89": "a08ab241f2f315ce173942fbbfc34261",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/31/8b585845677e32b37ed532b28cd701ffe617ac": "6e10f1502a00a1a9d49735e2fef3e673",
".git/objects/31/b5525612917cb92cf23349751aec9024aa71e6": "832a0b97de604886b4d863a7107ad3b1",
".git/objects/62/3fdd791cc41b8a8422ef0c3fdde240453d708f": "5fdf12d9ad7a2922133f73129dc245bb",
".git/objects/96/84207654c929c814892f84d0e85fd7e40296b3": "e3fc795ae5cfa0cd9d8514b85f5604db",
".git/objects/98/02aa99e6b84225b53f7c47608ee665e8acbe27": "3d4dcecc411fd8c27bef1bd0b0192b88",
".git/objects/3f/3045f08641278583c2d916a64d70e3fc02dce5": "e25f8e6e12214853a4baf0491a089c05",
".git/objects/30/b3fb4900a776eab0cf93b58d64c00e19caeff2": "72706f05b6cf512b28f22b7209d850a3",
".git/objects/37/0c2743989d949cf0fa08d4a29887b90bbf9ebe": "974921273fb17b898ff842054ae89e08",
".git/objects/37/3ea92eb52d93187e8fcc89e4c45851cbab8240": "f87ab1408eb2a539c1ec2a64e4331458",
".git/objects/6d/c5cfcd94b7bf0ce6f3120748acca5462a4462f": "ad2a3713d4cf947b9a7b966664341dbd",
".git/objects/6c/b2a877fa7b03c4864d9f0f39885cbba9fb2616": "956583e938679e62cb17805efafcb005",
".git/objects/99/72a73b1c2c9e115d961f00985ba8cfe335ee79": "12a0cd91d309c40d89665011fe035f4f",
".git/objects/55/775c8c81985d5a8425c190a9dafcd0468f2a20": "ca2aeec0b51acc0fc7bc7424254d1211",
".git/objects/97/60c4463efd764407967d2c8fbe72975956bb8b": "232b90370dc3269b1a4d811b26148622",
".git/objects/63/34d06d7d3341956812f8721a1eda9bb47f1a84": "4e77088892168dcd298f6d6112bcb621",
".git/objects/63/34f249e1de8ccd929b76ef6d309be3413f3f79": "b9f2e16a6c1f66f0e93dc53e51f289fb",
".git/objects/0a/e63348d12c0650014c8e3aa98b030fd77559db": "1b0410f285b6692c136c4069a1cb6c3f",
".git/objects/ba/632343aa8120366ce088cc2c282462bfe671ea": "f5bbb2cb687b6d90ee96bd3fb983be6b",
".git/objects/a7/d330a54e2fdeef920e110faca720f808bf1f68": "2ac7a15ae72e4cb7a56a4c1319d3e461",
".git/objects/dc/1aacfe6e530575fd1082961193d066cd04978a": "0d15dbcc19e357edd93a0126a976b44c",
".git/objects/dc/7a51909dff2ece0d79c0d940150c4884def84e": "a203705588999f7d77cd79dbe957feb9",
".git/objects/dc/ee597aa89367517f943371ea2eb9011b2bd5fb": "73f805eb07a989507a9386fd06cf3e1f",
".git/objects/a9/54257c347db8ddff50c19ce438b6776de42e8e": "f2dd7c83506eb0dd0ba20f8e0dadc241",
".git/objects/d2/d2f07d72119ed097fb4c22276e87b20d9d4a3a": "2dafe4e6c61b3bb73c602d272c9f3cc7",
".git/objects/af/8c25305994b4aa13c7f8501d4abd5feeb97ba1": "a8680740d5c7e3d7396dfc2fb2608013",
".git/objects/de/4ef0ce64422a0f25f017538add3f9645265ef8": "de6781ecbe6b5580451778e5db7e8e06",
".git/objects/b0/c1c902f695715e48c04be1249bcb037088fbad": "9506f046dfea7636d25aeb552e7cf7d3",
".git/objects/b9/735c1499ca82cb5f0ab4adca7ffbd86976913d": "e3c73554310ebf3675c1b15668aeac1b",
".git/objects/cd/1962a04f86451b22856367797f10f23d8f24ea": "f3b29e5faaeed936d07f8b18c2683946",
".git/objects/e6/115cb97285973976b4468ce3ca84dab18d4519": "152fc644d5d333108c93d7fc9aa9d559",
".git/objects/e6/9ae4b8d2a580d73149e1d70aa578c1503d9345": "5089244b17e5d8431dd49bdf7ffec7da",
".git/objects/f7/962c34385d0ab85ef2dbf578bb45123753c342": "e5ef6ac4e00374c8b45bc981718a7cf5",
".git/objects/f7/6db53917f9f13d18a0ecf0fe8ef20d3074d794": "c703dfeb93a8825880756ab964dc9260",
".git/objects/fa/5d2f5b863c823a89d95476a30b79fa30797277": "d31f15a306112d0288c7e835cf3432c8",
".git/objects/ff/529e0621cd24409f556bda1a36813f3bd870b1": "552af6b58482a8aaa351495a0b1a9927",
".git/objects/ff/b7d3fd29006ed58d677d57a25feb29c5e48222": "174db783b20febd275dfa52c8f12dd5e",
".git/objects/c5/35b9c54ed4012d15e7cc8beb86b1e3754e7138": "f63f5683c3f27a04e626f64ead6d9d99",
".git/objects/c2/01958a46632a1ecc5630b3d66492b5ddb73787": "94e5dcd97ea699db696716ababc1f0e8",
".git/objects/f6/1675f49d3eec4114dd1700d9821a9410d9d57b": "59838ad4cd6a3a2d330970aa40f41368",
".git/objects/e9/c58cea95a6ee7fbd0e1aa276a56ec3507f419c": "c50df4950c33d7204d7d64ff23395b91",
".git/objects/f1/81b64993d9cabb57456a960ed77984e8c8cb11": "a65dd3964b74dc1172b1342e132ed7a1",
".git/objects/cb/2892db685ccb7e336edd37fa05b5b633e3dfc7": "37b75f681fad05f61e9aed25d21ba3e5",
".git/objects/f8/88aaa4a3cb6c5d9a0037eed981e6b4f7f22bf2": "543d244f889b2da9544ca3a0dfcbbe70",
".git/objects/46/464df0af9fec5199df98acd64641c37696199d": "d4afada76b057f3bef9ff573aa63f83d",
".git/objects/1b/2feb80017769d20051e63c1a12e045f6aa3f10": "69a332e2c07e1e2d375a12a06926d2b3",
".git/objects/77/25bbaba06f21c23aa31c35f77f7c50e55e90c7": "c2d2ee0900c35a2dca1a933aa177b027",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/84/ed110b8ea709abcc494ebeb407407bc1859810": "c0c45688dc3c171a971d90693c57adf2",
".git/objects/4a/b665db1b8e0cbba669e7e2af6fe9e4a51196ec": "9eff3d64732df903f948822aef4de1d0",
".git/objects/4a/342245bdabaefab423dbfe60d87a8672054c2d": "1657b60d1dfcefb735e71470752618f3",
".git/objects/4f/0c7b30ec2a3114d2c99a4c4f799f3d38863b7d": "1aed17d9f6e56263c5ad504d34a42505",
".git/objects/8d/66f30f4df1b697c8593d794a1eeb2cc1efd37f": "55d97ca9ea3f3a32afb8f8857e65f1f2",
".git/objects/15/714736fe3988c01a6dea7c84ef2d9c4f5f3dfe": "c9ab26747b76b61b2ef06006eb11f17f",
".git/objects/15/b0dc19492b6eaa508a47c56d5466b162bd9860": "ee637728328dcd2126972eddecaa6a3d",
".git/objects/8c/fb239e87cebae29564cc8fbc2863fc5e6ad59e": "68b9f1e5512dc4ec57452e10d61c5030",
".git/objects/1d/07ba6f139fc5871afc9fd1fee994769b3485ab": "5c775949c2a33a2150af0e4f6c6e1a52",
".git/objects/1d/ec67906ebe830c9a365d01dc42ff9fc7a357f9": "2c28280e628fb28279fe896bb1eb15a6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/1c/1c6566515f2b0a377407b011dca9a12e8a7467": "77b39ea7d2e7536ac37dba15eb5f417e",
".git/objects/1c/40f5fea0195869c2da209673a7104deae6c2d4": "7113270d1e2a9538701e97cc557d66cd",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/ad98127edd71dc8adda80e83eecace6102ec58": "7bc6acd6d3e61900727d8a6de4b971f8",
".git/objects/49/c2e4b3b576f1b19dfab2d055ae84296dc6c90e": "3a2462555af6fc2f5365429a8ead1ce2",
".git/objects/40/dc8c7faa0a724968cd197cfc6a89ab1080ba70": "da2bc988a2c0be09843bb8c40027b473",
".git/objects/2b/dcfe0b8d85debee9a92ff4f2c452247b568299": "3c12fffbd1f5256882ed059631dafb55",
".git/objects/2b/c2a9a23f6a05da663772e16448c84dbded9c63": "4ece1fc5a6ba7e85cae15c21af9d15ce",
".git/objects/8b/bff59c37b06df7990f098753728c88c799b8db": "7ec40ea7a6af5afa077d9901b78289c6",
".git/objects/7f/1d467c88385695d977310660345732b2caa0b0": "47771fabe97a6d41f7737c13c5ccca40",
".git/objects/7a/6adbbee6bd469186c429f71b3545e1bf7fbeee": "b6f1e4e72c77fdb390fbc3eaea2ba553",
".git/objects/14/97c2b3979f06ee132e8846a1749aef39354877": "e4cf51247c2a36f956e20577a1a17db1",
".git/objects/14/e75a1f0b49b36cd7587c64e05f3c226c03bc4f": "dc7d575503d093f48777450a0d4c92d1",
".git/objects/8e/a272870cae54e58364cfda1a6f1063da0f9b01": "1c5e23a9c0a35c9c4f6cbc0929390089",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "33b859566f72737decc474a3339c2841",
".git/logs/refs/heads/main": "61106db02318de31d57906760e06d788",
".git/logs/refs/remotes/origin/main": "773f34b48f63a66787c297658baf0e3c",
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
".git/refs/heads/main": "5a2ce6c2c0708865274fb57fbc910716",
".git/refs/remotes/origin/main": "5a2ce6c2c0708865274fb57fbc910716",
".git/index": "2255810c2554de7dbce856e5757c7c56",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "5ab6fb8bc4e43974c6e06df8c90d3848",
".git/FETCH_HEAD": "61e0c3ac705eb906d14cb766025deb5c",
"assets/AssetManifest.json": "89369b759e22db4a8d1993873db85c33",
"assets/NOTICES": "a5e31ae7d645c9b70bd5a25e74cb2cfd",
"assets/FontManifest.json": "d7689140d776afd9d94e9b9f2027da60",
"assets/AssetManifest.bin.json": "68550326710a5146b20c6eaf99228b1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4af8b89eb53b4ee78c55c8695d544e1d",
"assets/fonts/MaterialIcons-Regular.otf": "5b10f5c7e067df30da9d39265fe2b13a",
"assets/assets/images/subsription-logo.png": "107bc7e49fbc91ddddcdced5af5d3dd2",
"assets/assets/images/DePlan_Logo%2520Black.png": "f4aa2e41f651ea064f62b71b1c73aa6a",
"assets/assets/images/DePlan_Logo%2520Blue.png": "3627350b061bd2af7d3a9b9522066d3e",
"assets/assets/icons/calendar-icon.png": "da25822c6bfb84c60b9f2c1c37e9ce12",
"assets/assets/icons/gear_icon.png": "e8360f7a59212caf316a9b519d42e655",
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
