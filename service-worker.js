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
    "revision": "36f19792c8680598feda93a7c9f99b2f"
  },
  {
    "url": "about.html",
    "revision": "6ec67b396d5b7e3acac27ec1cd3a3f3a"
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
    "url": "assets/img/031702.856c4173.png",
    "revision": "856c417316733108964fdf89bb046abe"
  },
  {
    "url": "assets/img/031703.0f8a4fe6.png",
    "revision": "0f8a4fe6246e2c4afb4580e14fdf9ef0"
  },
  {
    "url": "assets/img/031704.451ea035.png",
    "revision": "451ea0358fa159397889fb8881ef2baa"
  },
  {
    "url": "assets/img/031705.1536b07d.png",
    "revision": "1536b07d7343df4e2bdd16541da85cc9"
  },
  {
    "url": "assets/img/031706.0dbf9e11.png",
    "revision": "0dbf9e11e031253023e8c2a622a388f2"
  },
  {
    "url": "assets/img/031707.ef3b1f0c.png",
    "revision": "ef3b1f0cee48d8b3ec60fda2d87aeba0"
  },
  {
    "url": "assets/img/031708.dee6f08f.png",
    "revision": "dee6f08f5819015e71b02850c926d4d0"
  },
  {
    "url": "assets/img/031709.c2ce7d3e.png",
    "revision": "c2ce7d3ebcb26290cd1bb3976fe4e7fa"
  },
  {
    "url": "assets/img/031710.ebf20444.png",
    "revision": "ebf204443eb399df8a15b8b29b51397d"
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
    "url": "assets/js/10.33a8e6b6.js",
    "revision": "c3c1a1d99ca54d5486fbe32e3c7defda"
  },
  {
    "url": "assets/js/11.2af880f7.js",
    "revision": "8dbf7d60b9e3b72d742b32a167d213f5"
  },
  {
    "url": "assets/js/12.b3f063d8.js",
    "revision": "364201e5bb0941a27a66d79b9198b595"
  },
  {
    "url": "assets/js/13.70fb1cec.js",
    "revision": "9ba3d3445131c14a49c3b0732a0be704"
  },
  {
    "url": "assets/js/14.0828408f.js",
    "revision": "b6bb05353f2d106d4436f74106133c26"
  },
  {
    "url": "assets/js/15.3a9d9bd8.js",
    "revision": "487b9b4926509059ed76accaaebedf58"
  },
  {
    "url": "assets/js/16.86691942.js",
    "revision": "26001dfea4c514bc3b44aefc09ffcaad"
  },
  {
    "url": "assets/js/17.5e0aff93.js",
    "revision": "d49224d29e8a4e532a048a883c37fc96"
  },
  {
    "url": "assets/js/18.503ec9d7.js",
    "revision": "c24c2b8435b8d96048b8d5b295198241"
  },
  {
    "url": "assets/js/19.c98e357b.js",
    "revision": "75b2d30d09bd472242564f0f6a855ba1"
  },
  {
    "url": "assets/js/20.4d0eacb7.js",
    "revision": "18cee0651ef3971029c594dac126267f"
  },
  {
    "url": "assets/js/21.9ee983e1.js",
    "revision": "ae78a1f7900dfe9105bdce433427221b"
  },
  {
    "url": "assets/js/22.0c7abc99.js",
    "revision": "d1507d8adb08e67cbab451b20688a419"
  },
  {
    "url": "assets/js/23.10540d63.js",
    "revision": "77f2780d792fbc977a923a7e419f837e"
  },
  {
    "url": "assets/js/24.e61cd8e7.js",
    "revision": "dd763eafd92f0c4bb95d2818ab3f3472"
  },
  {
    "url": "assets/js/3.4c4b6ac3.js",
    "revision": "da62a0c7f837edcbd1a8c4be8e07ce55"
  },
  {
    "url": "assets/js/4.8cc6f84c.js",
    "revision": "1ef2dddc9574382fd49384deee7993d7"
  },
  {
    "url": "assets/js/5.7b0c6728.js",
    "revision": "2693c9020d1c05af2deea5c0bc6f3e64"
  },
  {
    "url": "assets/js/6.b86703b1.js",
    "revision": "194fbd2afd3c3d02311239b8117af123"
  },
  {
    "url": "assets/js/7.79315cf7.js",
    "revision": "b9a7866c630d3003ad9666b59c79cb6e"
  },
  {
    "url": "assets/js/8.ecafb99e.js",
    "revision": "85f384e450686a4953fc4d685c581391"
  },
  {
    "url": "assets/js/9.ac16e865.js",
    "revision": "22739e0b9ab2bd8e2d9bb1df10882a2a"
  },
  {
    "url": "assets/js/app.36a15e00.js",
    "revision": "cf9b1399a9edff2a450df140aff88c87"
  },
  {
    "url": "img/index.html",
    "revision": "7121cc589989407914a66672080d8b09"
  },
  {
    "url": "index.html",
    "revision": "adaaf3d1e834d88eb7069ff060f7a37d"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "8ed6e9597f0487c72634438cb2898c29"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "fa13bb1b3d5e933334d877afc67e1989"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "8b7762b37a95d9f56477018836dbdc7a"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "6893aa2e7cb63e117b49b1cacc199c4d"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "e492b4f05f79662c03cfcdc6127919a2"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "f3dcbf20ee64436186ec9dac708d73ca"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "8c491b94d39f5cc94c0be6af61cc1832"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "8d62c746e5471f1ad0cc67f4e3c52c47"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "2887ea37aef032cc1b6257c2464cd185"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "0464a2dc631efd45cc6ceddc44e2b009"
  },
  {
    "url": "posts/index.html",
    "revision": "d0f833c60acb2fc79094e5bece1ee4ac"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "537fd24887e7034509d4b1b6bf65e184"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "7ca8a547cd9d1745791a6d508aca4fc8"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "aeb13a398a7f946db06f0e0955e4e1f3"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "34e02ee22561033280c66f5f99984231"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "f73777178a61fb3fe1d59064e671396f"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "8804d46b6f8f8d74e57d0c3849174220"
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
