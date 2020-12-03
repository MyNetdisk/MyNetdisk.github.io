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
    "revision": "802df721da73331a10ca5ddda66dc31b"
  },
  {
    "url": "about.html",
    "revision": "027190c29ce65340e82853d9efd62e74"
  },
  {
    "url": "assets/css/0.styles.0b8a852a.css",
    "revision": "21fc2107206d7e2fca95d1cd937acebf"
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
    "url": "assets/img/20200922.4dcd6a0b.png",
    "revision": "4dcd6a0bc1090c8c095a78f034112a4a"
  },
  {
    "url": "assets/img/20201007.7e4e5511.jpg",
    "revision": "7e4e55114fddd2d210fca6f83f58b187"
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
    "url": "assets/js/1.55e5a1ea.js",
    "revision": "43ebcea303208a75a3816e3141130f4e"
  },
  {
    "url": "assets/js/10.be30e948.js",
    "revision": "b19e4bab9e1d567909a4cfa54d86c339"
  },
  {
    "url": "assets/js/11.39a0d431.js",
    "revision": "5b762028985626ffe87e0c39a75371e3"
  },
  {
    "url": "assets/js/12.4bd30d15.js",
    "revision": "00804f5080476b8e83bc4e151e443aef"
  },
  {
    "url": "assets/js/13.3007ff62.js",
    "revision": "8f0eebe50519d4a4439c6b9f22f91942"
  },
  {
    "url": "assets/js/14.ed6cc4cb.js",
    "revision": "b30e5c26402e468ac83f3faec6e810b1"
  },
  {
    "url": "assets/js/15.dc7a6097.js",
    "revision": "e031f1fa2c2d7729a91cf030c1db3b38"
  },
  {
    "url": "assets/js/16.12159d9e.js",
    "revision": "a0450b91ecd43e8a47b8aab94c85ff11"
  },
  {
    "url": "assets/js/17.c145f098.js",
    "revision": "0dcccd50cb68a90ea5f9fa6c7abba555"
  },
  {
    "url": "assets/js/18.12125b3e.js",
    "revision": "1a369dea5cffaff1fb1a64bb46e544b0"
  },
  {
    "url": "assets/js/19.4ab88ac4.js",
    "revision": "84db686bbd06d9be199b29c9d2ae5089"
  },
  {
    "url": "assets/js/20.d08e2bbf.js",
    "revision": "c2c12dfeb31369c62c1b33e195c1e1e8"
  },
  {
    "url": "assets/js/21.9d4c1a1b.js",
    "revision": "2f1b520eedeebdbfe44ec5e4749f362c"
  },
  {
    "url": "assets/js/22.f2b6b8e1.js",
    "revision": "42eb48d8d052a3031ac546cc513fe7ff"
  },
  {
    "url": "assets/js/23.4c81fd05.js",
    "revision": "2400231baae3fa48ac929f69b4471334"
  },
  {
    "url": "assets/js/24.5ded70f0.js",
    "revision": "555c341138d9d5269337370e4120ec38"
  },
  {
    "url": "assets/js/25.6c966013.js",
    "revision": "194432679c1149f2e6c9c5d0c3204db6"
  },
  {
    "url": "assets/js/26.71b700bf.js",
    "revision": "bd34f58242efc3c9b19aad91f92d4fce"
  },
  {
    "url": "assets/js/27.4d8b1c7d.js",
    "revision": "cecf9d36e4ef38b55638dea759ac292d"
  },
  {
    "url": "assets/js/28.db2be599.js",
    "revision": "5762dfb80aeec1a3e1095f048fc5785a"
  },
  {
    "url": "assets/js/3.c56e99ad.js",
    "revision": "b5648404069a327875227284a20528a3"
  },
  {
    "url": "assets/js/4.d4e401d1.js",
    "revision": "f390107be1a8c3a87c01d98f7a9c02d7"
  },
  {
    "url": "assets/js/5.69ca97f5.js",
    "revision": "c8d8efa0c341378310bfad276fc08843"
  },
  {
    "url": "assets/js/6.e4052b36.js",
    "revision": "e648c9f092dfae1ba91d3dceffacab1b"
  },
  {
    "url": "assets/js/7.b8fb47c7.js",
    "revision": "3b8aeeaefbc5d04afc9cb93fe3c9d2f0"
  },
  {
    "url": "assets/js/8.d223b92c.js",
    "revision": "02f88d7da9bb88f3367c6081a578c4d3"
  },
  {
    "url": "assets/js/9.5e122a73.js",
    "revision": "1cac3da1094142a47efa541a69ebd85b"
  },
  {
    "url": "assets/js/app.312c136c.js",
    "revision": "3dde4034518b9c2e51667ebb307359c9"
  },
  {
    "url": "img/index.html",
    "revision": "daad49e895547153216faa5f8cf24149"
  },
  {
    "url": "index.html",
    "revision": "c7ee8e8480f4ed5017c3076c75fd5f05"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "349b2321f483e8a7e10612424744d6e5"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "45c8e4c9d294597b17a5193e64b788a4"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "3ed43afceacb88384e3c563caf86f9f3"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "473538e022d01986908cd90cca22e3f6"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "d9157c06f178e7f57f21b25acf3c39a3"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "830a347c429ff5b24637dd282fb096cc"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "71e2e861946244ff43fded7102fcce51"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "0e7362897b265afad22aff5a515298f8"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "298d6dd17f717624e35f24f69dfd39a9"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "e972ed3cc3f4d75c2aa5c2972b27a42d"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "688f49675f08ac04ff16044a22c19aaa"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "02b8f79a309e9fc648fa54daca501388"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "aa23c371cec0304bafcfea3f4c2e2f43"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "33b33a2ce1b4b74aae92849298fea504"
  },
  {
    "url": "posts/index.html",
    "revision": "ff63459b10a939c635119362a0a369f3"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "4b9a4f5397caaec7af3ea6744bf3518b"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "cd2b8b7cb8ff9bb4f83690f833d0e4ab"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "c1baa81c7dfa4298f92c720607f7fa53"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "21834b8042a9e4954c51971cfaabc618"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "04970a2e72755ab61895ad21923f87fe"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "9cf1967cef2b589ea9955157ef26b2f8"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "ca7dd310e80cae3d783de33e9f376a62"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "f428fd63399678c5b3c17d7b17883b5b"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "4cb4df762b05ecf6c7403e4de998dc60"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "4ea5922b7cecf886cfd97246d03adcfb"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "32a04eacdfd0db4fa8feaf19b07e1d61"
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
