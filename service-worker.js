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
    "revision": "0325be8457a993c968992863682b45ab"
  },
  {
    "url": "about.html",
    "revision": "48b29b6c3451e00565a7b63580293add"
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
    "url": "assets/js/17.e528860b.js",
    "revision": "c21f1086c64db139d3a3cf15df1c34e4"
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
    "url": "assets/js/app.2999f251.js",
    "revision": "b30eb23d2e927f980cc80b4e9854025f"
  },
  {
    "url": "img/index.html",
    "revision": "aab7a66a31c5438a2401756f2c3862f8"
  },
  {
    "url": "index.html",
    "revision": "f2db743fff5c9a261a2afb36ccc88f7c"
  },
  {
    "url": "posts/2020/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "a642579232e92308522049c2499e72b0"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "4ebed0c1ca7b97d237921baf3e5eb9d8"
  },
  {
    "url": "posts/categories/article.html",
    "revision": "d9f065df25d3f2c65a8e2ae3b879d512"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "ced9e3a26f082303fa717c2e196effc9"
  },
  {
    "url": "posts/categories/转载.html",
    "revision": "1292929b5c3dabbbe8e03ad6f1c93f91"
  },
  {
    "url": "posts/index.html",
    "revision": "a045cff87d822eef65889890aa8549e5"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "538cb45392ca2405349e9a497cd8004a"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "255647bd2a69eebab44268eb95c1006c"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "b0ba748e04630f610ad71995ec50794f"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "ac7cac1511c706743a3c829d3e121281"
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
