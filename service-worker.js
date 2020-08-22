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
    "revision": "fb85af927aa5b20bcde58d6a084fec85"
  },
  {
    "url": "about.html",
    "revision": "58a88f9bea1387a595773a012db686b7"
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
    "url": "assets/js/1.13a85b5f.js",
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
    "url": "assets/js/18.75da4ee4.js",
    "revision": "0b7e0b8c64216f82566c407eb42e5652"
  },
  {
    "url": "assets/js/19.767ed63d.js",
    "revision": "4e9cfdb892f18d8ed3e47c25e205a888"
  },
  {
    "url": "assets/js/20.9253591f.js",
    "revision": "ee2715d9cf60680ac35a92c2f380959f"
  },
  {
    "url": "assets/js/21.7e817f59.js",
    "revision": "cf9ed19887d60e55bfba4beb50fe3c4d"
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
    "url": "assets/js/6.da025f46.js",
    "revision": "5b37450267a6832a1198c65a75f57586"
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
    "url": "assets/js/app.613317c2.js",
    "revision": "f92755d99ed5d8f6b189b62ef99ee6c9"
  },
  {
    "url": "img/index.html",
    "revision": "da1aa588b655cdceafc5ac3d70d6d07c"
  },
  {
    "url": "index.html",
    "revision": "8341a7162ab5a2912b9b6e58f0df129a"
  },
  {
    "url": "posts/2020/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "dda5f09a4ac498ccc69939b1cb66dad7"
  },
  {
    "url": "posts/2020/06/22/_22.html",
    "revision": "b606883989521f2a3771034b6d378256"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "ab12781e4f17377addeac973d4cee498"
  },
  {
    "url": "posts/categories/article.html",
    "revision": "6ea0cd478fa5b82cc605a312096f028e"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "6b334cd82c2a10bbd74f3897fe3546f2"
  },
  {
    "url": "posts/categories/转载.html",
    "revision": "38c201cc38e6cc09a4bea25fab65097f"
  },
  {
    "url": "posts/index.html",
    "revision": "5d002d04cbeb8297cacdc04f635fbe95"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "930efd54f02c6e87413a7ebfe849bc7e"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "5aabac01d9c76bd2bc94924f4f35bf45"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "a8cfd9cf605d9f187ea39b4ae8a0e69e"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "15fa6a1cbfa56666c4708237df7ab5ba"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "252451cb97e8b518de7e796b6dcca0dd"
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
