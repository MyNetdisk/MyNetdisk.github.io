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
    "revision": "596bec5c8425ebe3df396fff52993265"
  },
  {
    "url": "about.html",
    "revision": "8c283073af8e53638ce610b0b0b8a40b"
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
    "url": "assets/js/3.5140ab44.js",
    "revision": "921efd03c9c36856c9bfde0aecd6742e"
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
    "url": "assets/js/app.f4b8aa90.js",
    "revision": "8208ff483ea8a8e2f4885beef275279c"
  },
  {
    "url": "img/index.html",
    "revision": "3b5e47d2925b919e1818c1939b7d9b32"
  },
  {
    "url": "index.html",
    "revision": "974691b2767c250667a99938ac4e7740"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "22efedd18a86dce7e6fcd4f511885e4e"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "3e0a71c7a601bbe79ae004df760bf1f7"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "4fb145e88c49d10d1edc0327700558cf"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "37540f43ce5e83b8b9dc0dc34f734300"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "318f3b78ab0067c7457a3e1fbe215714"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "d3e7b27ec8e1d7446e45fe0e7e0d2bf9"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "07fbaeeab5836c8af04ed3b278423df7"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "e847b4e5850274e778f95826f22559e2"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "a2d23d75bf1ca611b1d8c6e9ff111173"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "1dc2f2383a9623b9bba9ab0d684e804a"
  },
  {
    "url": "posts/index.html",
    "revision": "18c636a30d31748f4c82436a4d3d52b2"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "a694a6182b04bd6c4342046e9cf8724d"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "f9daef456fc42462cc2cc9a75321b620"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "10dec589d6e0504e805f53dd02c252cc"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "50af01399d06d5e8f8dab8ad019ff0e9"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "846412dc1251e2efde59c01fc63c6018"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "687e0c2056c542c0adbf922e2171f883"
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
