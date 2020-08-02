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
    "revision": "9a45241751f3757430f9c23bc1e3cc37"
  },
  {
    "url": "about.html",
    "revision": "b30784ccd6e4987db597854c0d4bf095"
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
    "url": "assets/js/1.5b5e7565.js",
    "revision": "d5bbd60079b16096bcf60a36d71bd894"
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
    "url": "assets/js/17.63e6490f.js",
    "revision": "1238adcfe4aff32dce3266f81d8c6875"
  },
  {
    "url": "assets/js/18.3cdf9829.js",
    "revision": "3ad86b59a65be497d8d09a8d8f183580"
  },
  {
    "url": "assets/js/19.2340226b.js",
    "revision": "7242f27fb741e749fc9504dbea841de6"
  },
  {
    "url": "assets/js/20.d0f30101.js",
    "revision": "0514d6e2802ba1e5d2dc371ba2e3fa80"
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
    "url": "assets/js/6.0eebbfc4.js",
    "revision": "917ac30d9bf815cd7742c4a591a8e4c2"
  },
  {
    "url": "assets/js/7.44e4ca91.js",
    "revision": "c591644f9e44067b7b9c3785d272eea4"
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
    "url": "assets/js/app.1b8e63f7.js",
    "revision": "c724fed4cfda8a7e80f7c164d7ad7978"
  },
  {
    "url": "img/index.html",
    "revision": "7f296379b3632f5ee5c618e8b13b911f"
  },
  {
    "url": "index.html",
    "revision": "f2ee82ba187691664dc6eee7df1df5ba"
  },
  {
    "url": "posts/2020/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "5148227636db436863d6ab5393c8d8d2"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "38b7e77a41ad58ffeb39a1b07322f37c"
  },
  {
    "url": "posts/categories/article.html",
    "revision": "1774e82c9bfc0b9495bfdcd3df82dc2a"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "6ec0a5627e79e8c6324516e2a6eb8044"
  },
  {
    "url": "posts/categories/转载.html",
    "revision": "3ed9b3cfd7ff1860efc07a61bbc614a0"
  },
  {
    "url": "posts/index.html",
    "revision": "424fd26b89486b2a3631813b8f15e058"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "ee7e936e5ca2d9eb2c92447b047a1815"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "c832cd73fa37c7717f95453b2b0fd65e"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "5fc1bffc1aae5ac58e657c0f15f72797"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "97069d7b2b797d67b4ec0e04bc00baef"
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
