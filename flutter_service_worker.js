'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e123ecd0656888e5f96609a63304402a",
".git/config": "5bacb98286906867e18e9f2fede70ced",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1aa8b1b4faef12bc9024e085393fa9f2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "61f12a2d98d794ec4ef54ebd17e3f7dc",
".git/logs/refs/heads/master": "61f12a2d98d794ec4ef54ebd17e3f7dc",
".git/logs/refs/remotes/origin/master": "ca0cbb53f946c6f606688b4a80d3cbab",
".git/objects/00/1ebe7e6351750e418dbc197de3eb455d63ae56": "af9b6ee80832f93b74c2ff4c2ea0948f",
".git/objects/03/1b11c92d70c18031d836d03351c3830393da90": "de754d750bbeb2074f6f67f596e6742b",
".git/objects/04/7fc146055c1579cae5bce5fb8c6acffba399a8": "6299bf0790627ef2f8bb106f305d3ee5",
".git/objects/04/9587b6c0ae90c1533fe90c5ced0e3d4c08bb74": "b11ab00c1dad3ffd080d5441ddb72abe",
".git/objects/07/d277563f6649256e1abb54ded5b1581005cb76": "e37a9ad69718a94b43d83d74d078de80",
".git/objects/08/f1b904f3955296bd96b77f94997290816ece04": "abd7513efb93fc521be4d20dc23f5266",
".git/objects/09/ba43b14b05acd3d4b5f40b2be1b7ed05d22590": "0fa0ea7a7d2846866470b0b23cc684d8",
".git/objects/0c/87ec1c26014e81f0fc27c7e208e5fe6d4e7a71": "3a34a546c33635ffab77132ecc190e47",
".git/objects/0c/93b7e680cbe40208f224ce5537da94d7cd9e16": "d700db7d4d7bf46b8e02b25a75368c80",
".git/objects/0d/59a0b6e81affe88ac48ded31f3809c639b302d": "6592cee0f3ceffb84319736e35db5595",
".git/objects/0d/c50d3e0d9cc001a2c3ef00967c35c132b90bfa": "38fac71b45607f80761567a02c4baf4a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/cfa1f765bf11688ae9001b657a559c3271586d": "58a82801ee5fd720a2236ea2aa81a2f6",
".git/objects/15/7bd31b1be729b75064083cca08aac2d50f9464": "78666cc13e3a3a74a7b95358b9bda003",
".git/objects/15/feef573a7d1b4c1b3a2fe88d02fc00b90992e1": "1088ce5dacdc200823d1eb04af7a7adf",
".git/objects/16/34ed7c78ce7da574d88a9315c505044f28844c": "a4c586f4a3f9cb3c2c1df9b058f59f8f",
".git/objects/17/2a7349b91ef082cfa0fb10e2acfcada039e4da": "2f37be02bc801669db47831b29cb7f8b",
".git/objects/19/d77cca2cb3365cde634910975b2c83825121b4": "b6842f0c9041bf24b418ca57a2fe347c",
".git/objects/19/e36dccd19ea8747cc1c65f29e6aacb9de23263": "b1dd78244390e0be74b680d2e8249b8d",
".git/objects/1a/9bc93d18820713865a2e0f2647750b21eb0ce4": "ff143af4d56c0b49ba7ba41b8b11b9a3",
".git/objects/1a/e5eb2066f70b8b813f3d0ce9da4befa41ced2e": "b420f42b757b1ecf1512f05c16ef2049",
".git/objects/1d/6a844a85519f4b736e0131fe9a64737349102a": "88f04600a3afaad9fd40216c3dda0971",
".git/objects/1f/c993bb56031b8c1b9f9afda405cd30f80e0ef9": "77ca7acf7f5a98b0ea459d0afba5c6a3",
".git/objects/27/f294983ff7cd9bce2270f7dd63fd17a30579a2": "dc5598a85bc1f210b622f3946e1eb342",
".git/objects/29/374122b884658ae5d75df3a98a13885915c1cf": "be1070a05a5a67b668a02701701fe00f",
".git/objects/2b/be8fd8b62893a2762fc56d91f63836694df815": "821b10ec529f1512fc22f8f6e0f41106",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/70321074ce81994f5d67a44b9de5407b1c54f9": "2aab41a6040c2389d912fef2a48c6775",
".git/objects/2e/dbdbe144f32a8e70a0edb9c008c49f02a42c7d": "11010be38e1b8b7f7265fd7561bc1b2c",
".git/objects/2f/40aed7e4251f8b57d4f4b0dad482ee64032aac": "100ed49ef74f65ab6cf0ea2af7f02c11",
".git/objects/32/afb098e7b7dff66b2a55f1ed36e2848ccec211": "fa8d476fa514f8284c75549ebf215a0f",
".git/objects/33/170490e7c7e352ad3c1728d8f8a601e6da39ca": "5d84de85d44b87123ceaf2ae984428fb",
".git/objects/33/96b753d810051a0b1ab0bac94d75e16c13ced9": "8b3ad44ee7f7499fb64f7f4d8946d86d",
".git/objects/37/45d70a1b3d98dec68e120816cc068e9a923237": "b95a660dd5278e10bf4c2f860885fda0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/42f12bd7d5556749be5b12a6c7992c1a0f32b1": "ba95d535af2284dc641baad1b7f28b6f",
".git/objects/39/324469fbbbdbc34270f3499d5fb4419d253b21": "f3ec057d5801742cb57ca09f06d8923e",
".git/objects/3a/ff081b4aed5601ae75a2500cd530833e3b79d5": "5a10d8a4eca10cfc1c3d6c9eb8c6ee70",
".git/objects/3b/e131cb9fff82ed8d876488147894683e9f2ed5": "b87fdcca08fdab6c723cb2023bd30162",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/40/4c09d1bf6614bcb2828146fa6ae9ddcbe66bf3": "11eb4d087ef60b1edfd962367852ffce",
".git/objects/40/9f4c96f4d32fa8c540b6d1f69960570b3b7312": "d364a83bfe14ba199a3fe41f3d97cd51",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/9c46b6054fe207e2111170c66dd9ce154fb931": "062ae4f37f14393e717757e114c40e75",
".git/objects/43/64510eaba5e45d23b4ddfedbad517c401f87f4": "f033d42edd7595007495ec938e429aee",
".git/objects/49/7275b182429bacb89e8b69e5b7fa665d437466": "0da413ab5fc8989b3a1dac714780f481",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/39d05d7641a6c1f2c7831a14c7a35b70c8e475": "6ca3d2aa7e4decaec43bf0bf1f400218",
".git/objects/4e/b338d14e7f7daa429a39251e2a5cd26ada5b80": "f2fc323297afff4c923b671f19d8cd18",
".git/objects/52/0ca68694edf8fa64a8abc9dea49deb92ffb200": "88757e5ac22635ff4cd62bdc7934371d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/0067a1dea4abdbfeb88e4385cb1614337c7c2d": "cccb88750d2d889e7a84cc22444e3ab6",
".git/objects/5d/6b2869733b8080e7b53c56b58a6ae2457741f1": "9db1eb0580e003546c5be0dd7335269c",
".git/objects/60/13101e80eb589c7fcb28a1f287a53484a51bfb": "187093459d72556fd010137e093b857f",
".git/objects/60/5b85d2e50c84e4c8ca0277e7b676791780f755": "e7da785eced6a564843ba1442ce01657",
".git/objects/63/6c46ec210af63116220fa29a87471aea70e82f": "bcb160fefb5a2231cc810105e636914f",
".git/objects/64/4055aff51a9aa7161807fb1c0fd5aefc485f79": "bb18de45b99b5f3d0db6a9d76e3f5740",
".git/objects/67/458bf4826b68a21c98fa37620879c73b5a2057": "110ee1c5106f0c0ae60c4a8f60ea6cce",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/bcafa125cc956ccea994a5c9dad66bae38a36c": "f1c93dbcbb90b6c01920013be2f2a792",
".git/objects/6e/abc4acbfbea1c1f3c25b5c2d21502fe436ddf1": "cb904226d6b9369c6fe2f750290ebae4",
".git/objects/6f/806474948b2cfc5f8fb3fcea4b49e67c49031a": "3d82e1d66b29d009b566d59acbb63c52",
".git/objects/71/f740b9dfb0f59484b137220876a47c1d1e1713": "3dd1dc9b46510b0f27d61b0229e13730",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/13e3d4a08d7583a1b5846b8ac1168ea15c0321": "ef6b337cec0e0cb3cefbbc87249aa9cf",
".git/objects/74/eb16dfac70ff19086503321a61d065883bb636": "13121f81d9d02cad0e1efa343da80ab4",
".git/objects/77/9713eb4da6db17a3e6f82cc4403e7d7dd81043": "041f384cba3ae0490ad2a1b1b0a0a71a",
".git/objects/77/a6dc728bcb6b1b12bf2b1a89ff36595393b1ab": "d709f66a6ffa5ac58522dedf44c8904a",
".git/objects/78/865499062bb1f374f3a3a4bbfd86c26d1802f6": "3dde61327f065aeec7e1341b9b7a3969",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0e234767796b0241f0f9e4124b5a1520045b68": "9f4ebef02fa386f1264ba35ed7f6e880",
".git/objects/7b/317f0bea229796f0c94c0b0d559a28a373209a": "67fcb2ce6deca06b722e18a52922ad3b",
".git/objects/7e/f5eaa9a6899963261302dc1cd4f52bbe302dc0": "4335c3c088dba871ed9d5219aa4eb75f",
".git/objects/80/056aaf766f637c9d658fff5eb5d9bef87b5fbc": "fd16cb371c42c35daa7a49b9c7dfce8b",
".git/objects/80/8f306f359ae4be74d16fb4f273e47dcb258ea6": "ae6ce6c9bb74ce3a092520c92a31055b",
".git/objects/81/f979d09d2a0c03a760797f74fc9a8b605d4422": "e8135091686d972dabfe86e995dea69a",
".git/objects/84/16fe739c7307f1ff286705f0d25520fd5a2064": "e7b851b5dbb6ace75bd1788a070be81a",
".git/objects/85/16ce8817ed476301eb0c0aad4ef33deb14331a": "45bbd29d265d94f9ce8928909568b53a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/56714cf9ab1ba7d545b3c1d9d0d83f7e5d28a3": "c3d5a5e7b94d62d98897e37efbd6a08d",
".git/objects/8b/6640f362c8e1944d94df5f5ba7e23483ed8148": "ffe43bbc089e92a7d4d4db1b097f3806",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/fbb927cd23366ed51c96abae39b7f330a9be05": "bf50d4a135d545f98d11c45795f9016e",
".git/objects/8e/e7f1cedf2ea4a40f64123913b6075d6bfdff70": "171e9f93ff028bd77abae4d4a0c7cfb8",
".git/objects/92/0abc5ac22375c38c069f22d1f7cb0afeb94b17": "bc433e7b39a8f815d5e2282ae3fcea23",
".git/objects/98/084746e40e85e16d2c88450456434beba44fb4": "6ef8bd3e89b889a3a2d4e52ab9500b61",
".git/objects/98/37e69f4afb92e68a46a8d4066f3177297457cb": "be03eb88e7eafdfeef8f9dbcf9fa4ac8",
".git/objects/98/b833e5a6a10f9379d398c9df5cca8a87d59f54": "ce306278c7ac5b588028487725fe85c9",
".git/objects/99/9353d7e79b1c6a922c62ca9aec7fe0f4415b96": "3bb1d8e7c1e9f5a453900c839c66d18c",
".git/objects/9d/5cb6a7f4ddd578755d861375ff1a868e8db2d7": "c13c59703a5db80ac68135b6eace1405",
".git/objects/9e/1b16d8798b908552959d874cbc40e9ba3b34b7": "06fbca24e93f72e35b8919232c9cd864",
".git/objects/9e/e256a2d54f18db16633bcf631e76eec8af460d": "f02ff0029a65769971bfc78a7996ea7c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/13d4e5ef0c40624cee5a1270757bad4ce529c7": "4199eb712fe05c82b28dea504c091fd6",
".git/objects/a3/7586553132748e9f9eec88ac9720cc17154dbc": "72259729805c68b3d81cad1b082274c5",
".git/objects/a5/147d790c6845b6073fd4dcdbf48bb82e8efaad": "d9142c5394ea4856561322bfae10c2b9",
".git/objects/a6/010824605a141cce239b969763fd03c6bf8e10": "d86013628b565392707beb3d903ae8b2",
".git/objects/a7/cd4a6520a3a7b1abfe4008f07d21f9316e2253": "579e502a81bd6834c7f40fbb31ea7be5",
".git/objects/a8/6c9f6c6d080dadb1cd1f17fdb905edb464e250": "67068c4f8ebd51e480059219ed646ce3",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/24826f2192c90ed96641fca13c93061edee071": "c282c01b780ba54455e630206ac24472",
".git/objects/ac/b34612f9574077b5707210759263f6d586fc1f": "935c63b7586458b26395b51ad0b14d6f",
".git/objects/ac/d7cdd74d541c7b865b0889f1e3bad1f5e929bd": "e0c8a6b65ca76972d8de47743e0ae453",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b2/44379b8aa95f965398ffd04aa7d34af9f2ef03": "4f0d881146be34bc95ecc75e989e5083",
".git/objects/b2/9545187b5efa47395c1ff1d0cbae482fa40789": "923920c2ca8456c7d1b03b35a9246d72",
".git/objects/b2/9af9372ede3958324264a74232f8e5929c774a": "5086b8b295ebae779374245048c20b61",
".git/objects/b3/9cfa0aca3cf7e9f346e32351bd1ce2bf7a25db": "9ac3ab6d62452e070f004c7669bd296c",
".git/objects/b4/c231bb51602749e8c65110ec87ecfce4dac33f": "56870dd1c394d61e087a44d838a40caf",
".git/objects/b6/9fbce4d366e7e9e097c358d24fd3aad64bfacd": "9d75913bfe59921f1f86b7dac73330c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b70e5f010cb3712f31125be6e6e47274122b75": "5eea2a8c43ae89447e49807698ea0115",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/63578a6543b0546f581d0af5b0b4c90617c28f": "685dc0958516ff678e4fc815b2d3b099",
".git/objects/bd/a7bb5c3d2f3b2fdd630bba2bff780a3f100654": "1da32010a47284491e8564072de8dfb9",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c0/87f05872b0461a22af33d959f1a69099333776": "4009b018daabc2ffa585f30e011e1c40",
".git/objects/c3/fa0dbee828f6f05524ee183fde66af8706f912": "ab856f6d2e1990e94d765d446e62503d",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/c9/4d7df0de6cdcb225060af2916ab2033381d2da": "bf680a5b63daf700688647f9091415db",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/d0/6002a23f47ebdae400110ad91d942f24830394": "c863ac2dcc2d48b07ded12bf485bb9ae",
".git/objects/d0/b89febad1dcf97502d310edc86e1c1dd99050f": "98cf18c5664ae9cad6478747b30b214e",
".git/objects/d2/168ebd3330c66b8aaa030ff15c58e107f53f97": "2a034636115b9f325d30507ca39d111f",
".git/objects/d3/cc50ac55224afa6b34e61b1418324c94982f47": "d7e7e403ec065c1ef8db314719849361",
".git/objects/d6/6f6632fbfb1d27f58ec27a9588c353637f76bf": "74a81ad96165a6affcedce3dd9ff9e65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/41924e0eaca50414bc51c5fd7df1c9fc0104db": "232dfacab5efed709cc3cdfcbee80196",
".git/objects/db/c05129bb77c58f290a9c0d75969b622215ebb4": "4109a560a1eb2a24414049a9f9a81d7c",
".git/objects/dd/8bbccad106c60c005ceb86532d26b013522609": "2edc4159beb94c716ce671d103ef94ea",
".git/objects/e0/0e1399b9940c039f54a825cfc09fd980a7dafe": "b3e78977453e358a94c065a9e344715c",
".git/objects/e3/e91b665f1553f12186bf315fd4d0bb888bb61b": "727789c7cadc9d6675a13b1b9cac5f56",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/622ab74603ae0ec89c8108f406b95cd28dfb8f": "fbdb9fbe9704a6dc327474b951bf9442",
".git/objects/eb/570c47c9abab7f9c4b17206282aa4969a10571": "850a81d0b688c3f9619b73b7060be14d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/dc718938f264f3fcbb1ba30b8b948613f32db0": "387bb6c3a87d8f7590f93994757325d4",
".git/objects/ee/8c06c21dcbef64b86da832de802c55315b274f": "88ab327af975f7d4c39b59a0a4545061",
".git/objects/f1/01018aad3be694f98e3fb4bbbd9262a9c07c7d": "5ec696077f1e45776aa4f33cb8eb9ecf",
".git/objects/f1/75777a74b292f82081b3f248f40a108021ff15": "890a0452e582daefc316a8ed32dca066",
".git/objects/f2/44116c1a83bb4ffc9d23fa165aa93a2ecd6e0d": "0f677f2f1ef581a5fc7e2a66c74f5622",
".git/objects/f2/68a0c7446d27918374893630c34ddc185e2d47": "e232ff7785d43a21fb2cbdd98a0851d0",
".git/objects/f3/97ae16f0ce392f04b75dd578a487668bafec57": "ab45deaf3a268f338d2579e0400e9748",
".git/objects/f5/76c79e73dcae404f435101d0995989a28a698d": "57c16f60b4c570c2f6c83a251fe78b97",
".git/objects/f5/c12d90573349fa768e03d2e73b7bb31fe72e9c": "e3b470b5bb25ce3a29848f044966a980",
".git/refs/heads/master": "c10370ca265658a4b8b672725bd62095",
".git/refs/remotes/origin/master": "c10370ca265658a4b8b672725bd62095",
"assets/AssetManifest.json": "8d3316751fe84b5adfedacdc466c0fd3",
"assets/assets/fonts/chirp-bold-web.woff": "ab5400e49c1938e799be6914a267bb01",
"assets/assets/fonts/chirp-heavy-web.woff": "c959119bb03f42ec28a429ccc6f80024",
"assets/assets/fonts/chirp-medium-web.woff": "9b05cdf346fb7ad475fb8027c9589fff",
"assets/assets/fonts/chirp-regular-web.woff": "270268b0b6693f430a3969993cc74d27",
"assets/assets/fonts/FiraSans-Medium.ttf": "f97963c595e8acb87013c1d4e1c3c9f9",
"assets/assets/fonts/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/assets/fonts/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/assets/fonts/FS%2520Me-Heavy.otf": "d025c03a858558e5c7b1600af8270bad",
"assets/assets/fonts/FS%2520Me-Regular.otf": "6f75a57c4c17156aa5e799dd53e02f98",
"assets/assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/assets/fonts/Gilroy-Light.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/images/default_profile.png": "e48b3695b681a4edf1a744e370bbf541",
"assets/assets/images/logo-text.png": "e69de68bb03175ac86f564b2b1087844",
"assets/assets/images/logo.png": "75fd4a5503dc19d7c1d256405b0651c9",
"assets/assets/images/logo_no_text.png": "86c9e4ffa8fdf512d2ad4b51e32b8b0e",
"assets/assets/images/microsoft_icon.png": "3d6a2ad56bc3403c5cfcc3efe09b741b",
"assets/FontManifest.json": "466c9dde4db890c44f3a27fbb1816170",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bfd437f928affe0aa22ad49c01599f48",
"assets/packages/boxicons/fonts/Boxicons.ttf": "21ebaf53aec4237d25aef98ab44f40d2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2db2f39b6024dadb19128b9062d56fdd",
"/": "2db2f39b6024dadb19128b9062d56fdd",
"main.dart.js": "45396d303e141d1c1ee129f1cd39955c",
"manifest.json": "0030ff64be1c3181710c3014b11018a8",
"version.json": "2b521e10dfa0f067561de489a19d6620"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
