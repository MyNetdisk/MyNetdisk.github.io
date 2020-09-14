/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aeb99dbf7c959660994b619de2010690"
  },
  {
    "url": "about.html",
    "revision": "66476820af3c12c3792d3c9e544a3db1"
  },
  {
    "url": "assets/css/0.styles.3d93b943.css",
    "revision": "b5a55d3172a6dfe3a444063056a9e7f7"
  },
  {
    "url": "assets/icon/icon-128x128.png",
    "revision": "ba8adf3512b4745c910f0d2428f18ff8"
  },
  {
    "url": "assets/icon/icon-144x144.png",
    "revision": "caf3fa68eb7536fcf76c4ae2186da40e"
  },
  {
    "url": "assets/icon/icon-152x152.png",
    "revision": "60e4982a750b5eb464c15fef4abcc655"
  },
  {
    "url": "assets/icon/icon-192x192.png",
    "revision": "523c0fb8f57f93b468e0ed78ecdf86e8"
  },
  {
    "url": "assets/icon/icon-384x384.png",
    "revision": "c38228266f233432c21c871626ffaacd"
  },
  {
    "url": "assets/icon/icon-512x512.png",
    "revision": "7f78124d42ce759625665a6b36ecba5b"
  },
  {
    "url": "assets/icon/icon-72x72.png",
    "revision": "0f3cc531ed40a48f2dfaac0c236c173d"
  },
  {
    "url": "assets/icon/icon-96x96.png",
    "revision": "220c53a703dfabc0bdbfa56063264a00"
  },
  {
    "url": "assets/img/032001.05095371.jpg",
    "revision": "05095371dc3092e6d01b4d6802232d73"
  },
  {
    "url": "assets/img/032002.f7d5ebb3.jpg",
    "revision": "f7d5ebb3ec9867dd32966e5515e1471e"
  },
  {
    "url": "assets/img/032003.0febda33.jpg",
    "revision": "0febda332d3a0d29b27c93c75889ef74"
  },
  {
    "url": "assets/img/avatar.jpg",
    "revision": "1579d00d30e364c5a2a408702f299f4e"
  },
  {
    "url": "assets/img/bg-info.jpg",
    "revision": "fb201a6b6606d14113cecc040a3146f9"
  },
  {
    "url": "assets/img/bg-wall.jpg",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/js/1.b65db00c.js",
    "revision": "1b795ffe97841cfe6696b7f33a3242b2"
  },
  {
    "url": "assets/js/10.593115d7.js",
    "revision": "452205eb734012b7c1181d1a67b19d9d"
  },
  {
    "url": "assets/js/11.83e6eec9.js",
    "revision": "ad08f5f1cacd24aa4c7ff809fa2cf433"
  },
  {
    "url": "assets/js/12.755c0213.js",
    "revision": "f56873f03e778a9ec007edd720bdc6dd"
  },
  {
    "url": "assets/js/13.0cbb0a15.js",
    "revision": "928e8d2cdb574e3b5c8aab767890df18"
  },
  {
    "url": "assets/js/14.6be89c71.js",
    "revision": "e1ab782071c5746d8a8826c6dbdca8f6"
  },
  {
    "url": "assets/js/15.f1ee09e0.js",
    "revision": "466e76bcc0ce1e7a006dbfd9a02347cf"
  },
  {
    "url": "assets/js/16.feb7b90d.js",
    "revision": "916450d63d3b927ea0a9baa7119225eb"
  },
  {
    "url": "assets/js/17.5f1bdcaf.js",
    "revision": "c0c03d629e5e2bbd0c9d59e7267ea54d"
  },
  {
    "url": "assets/js/18.120f46cb.js",
    "revision": "1a40ee53a9162614611d9c4239b12d21"
  },
  {
    "url": "assets/js/19.4ee5a6b7.js",
    "revision": "b74465eba1632d6ea5aaab50fae50da9"
  },
  {
    "url": "assets/js/20.18971075.js",
    "revision": "fa46fefa2a3036c215569dd24c7b4cc5"
  },
  {
    "url": "assets/js/21.1ed0e69c.js",
    "revision": "98c38e2166ce469b48e77a30861c0fb8"
  },
  {
    "url": "assets/js/22.484c54f8.js",
    "revision": "f7cc02213305ecae5fa779674561e095"
  },
  {
    "url": "assets/js/23.80ff2165.js",
    "revision": "1114c2282b87f8f767e69149fb86356f"
  },
  {
    "url": "assets/js/3.b7421c4c.js",
    "revision": "9984a49a99737ee713c1e3a66c112947"
  },
  {
    "url": "assets/js/4.88199111.js",
    "revision": "59be660d5aae5a818f16481f182472f7"
  },
  {
    "url": "assets/js/5.baa1e4d5.js",
    "revision": "2ea8aea9093eaf33b82d6e6890b8b8c5"
  },
  {
    "url": "assets/js/6.7940adfe.js",
    "revision": "2456b7632db956214bf8c3dcae754dee"
  },
  {
    "url": "assets/js/7.7b557fad.js",
    "revision": "12e8dc38a68493f81ec243c4ec120c2d"
  },
  {
    "url": "assets/js/8.e51b4bac.js",
    "revision": "a282721f264d6efa17af32a1bcf58c4b"
  },
  {
    "url": "assets/js/9.d6371053.js",
    "revision": "5a4653a5111eac3f50d99651311a446a"
  },
  {
    "url": "assets/js/app.1b09176f.js",
    "revision": "212cdcc42696255edf6be9af9d253ffd"
  },
  {
    "url": "img/index.html",
    "revision": "f22445440bdbd38c7a57c4f3fe268acd"
  },
  {
    "url": "index.html",
    "revision": "458e2d51265a3f74551e0b95d5ce844e"
  },
  {
    "url": "posts/2020/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "46b0c4819744308c2b79b5bd8abbd85f"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "14e9c7b7c123a8d0e5b029d54b7e8314"
  },
  {
    "url": "posts/2020/08/22/_22.html",
    "revision": "30ed52bfd2600084f20b592e943896fc"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "a31577a9438c6bc6716a40d753adc502"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "8c2d4f83f9919edce0e5758f10cc1635"
  },
  {
    "url": "posts/categories/article.html",
    "revision": "c48d920de9359eae38861f54f098a327"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "e8195ed94a41f9edebe8c06f9dc5a020"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "34ced1b85f4ee364b758b4be15fd9b61"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "ec47d1b6c1dad410452a51311d126209"
  },
  {
    "url": "posts/index.html",
    "revision": "d11b13e20a5f7a015b754176448a8b78"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "923c97e1c3f7885bebdcb1ebdb193140"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "e31c7672b3ccf8c3d2d45ec5d7d309d9"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "1aa7dcb25745da590aed696685bf821c"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "afe189fd5d0391b05ec8e0619ba146a0"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "a42d804f7c90f7b816101bda2b746f92"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "b7276bb21e9cb646c2cc5ed2cf07d71d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
