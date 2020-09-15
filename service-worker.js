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
    "revision": "7f7cc6a3d6f827a664696a279b8597eb"
  },
  {
    "url": "about.html",
    "revision": "cbf7821348071761a76da4ae613225b4"
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
    "url": "assets/js/17.62570270.js",
    "revision": "148b337b44bd3c9130999c9292d7ee59"
  },
  {
    "url": "assets/js/18.c3b82722.js",
    "revision": "12bfc9ee4059ff62b7cffa9affd31967"
  },
  {
    "url": "assets/js/19.6014ef46.js",
    "revision": "e5e4817d5179b780f26cf63741e5058f"
  },
  {
    "url": "assets/js/20.affcccda.js",
    "revision": "42ff1f63dabb10bce7f2c609398ef75a"
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
    "url": "assets/js/6.07ace00c.js",
    "revision": "c69e2d32be34645d39268746cdfdc4b1"
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
    "url": "assets/js/app.88f29f17.js",
    "revision": "732c643f42f64135af4668b90577a9d6"
  },
  {
    "url": "img/index.html",
    "revision": "a7cb1da1a03080fd30759284bcbf9a63"
  },
  {
    "url": "index.html",
    "revision": "7e16550c44f92dff9c692b3330b55372"
  },
  {
    "url": "posts/2020/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "bfec869d1bbc2036aa96a54f3b1f163e"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "b2e303bc1f3f1ce4c66bac7a66fc6263"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "f870a33e815f9d9951dae3cae895a8bb"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "5a65c8ca8d96f697bad60d0d4bcef378"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "20a8553020a76345c684e9ccf97fafab"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "b4f00f5966215b28080c36b5bf2b236a"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "4401ea00fc30255c5eb9b3c9b6dc2467"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "5931b9ecfbe22e10d6a926c70c2ac8d7"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "e21992cfd1d3089070e5392411d65ef2"
  },
  {
    "url": "posts/index.html",
    "revision": "cb72acedc2dec593ebe7f2deadf8d845"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "3889bc0b7ed347d5b5709684c5dfd890"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "1d79007593bb78516349f93dfea664f4"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "3cdc114e4446818d0b0a691857a9e675"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "5acfcd13098fc50cd78511142833003f"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "b6bb2afc520cd985717070a1229a7022"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "7e1793ee49b00cde2fe0163c60d0fcb6"
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
