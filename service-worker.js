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
    "revision": "5d82172ee00f99bb01a0b2163d9cd32c"
  },
  {
    "url": "about.html",
    "revision": "bda0dabad05710a74c488c36a31aaf55"
  },
  {
    "url": "assets/css/0.styles.93a4d75c.css",
    "revision": "f3e6821f36a02db28ac6171732042009"
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
    "url": "assets/js/1.31f56298.js",
    "revision": "ac5f357743cbb8a99a3b50e436274723"
  },
  {
    "url": "assets/js/10.681034e4.js",
    "revision": "b23dd1172c2b69088d1272d7c21de867"
  },
  {
    "url": "assets/js/11.492980f8.js",
    "revision": "8fd96c666fa8fa6cf24d37c85d5d9d07"
  },
  {
    "url": "assets/js/12.d971c445.js",
    "revision": "1394f57ecdd9d4b4531d1a7a732c8340"
  },
  {
    "url": "assets/js/13.225ba54b.js",
    "revision": "f8394648d4fdbf4ef81eb2b0310e5d12"
  },
  {
    "url": "assets/js/14.088ab0ca.js",
    "revision": "75a5d7e2aa635610d7bd81f8ad20c147"
  },
  {
    "url": "assets/js/15.6294c01e.js",
    "revision": "7c10b8afc7ae3e7eab45d037ccb5ff9f"
  },
  {
    "url": "assets/js/16.238d1bac.js",
    "revision": "c32bcae1b32be691a435419090d47a0f"
  },
  {
    "url": "assets/js/17.fc22a4eb.js",
    "revision": "ae16e51685b1fd43a9438b448776955b"
  },
  {
    "url": "assets/js/18.11f020f8.js",
    "revision": "5e356d81b425b7ffcee6192b337b5d62"
  },
  {
    "url": "assets/js/19.7f49887c.js",
    "revision": "d055ac6b59b0ca0245195762a4eb1b5e"
  },
  {
    "url": "assets/js/20.b488be8f.js",
    "revision": "7b63e108835481ade27f664a2a8d2f66"
  },
  {
    "url": "assets/js/21.0184b03e.js",
    "revision": "f2aadbaf09c88f4ae1e304146ef310c4"
  },
  {
    "url": "assets/js/22.4b8f38db.js",
    "revision": "51db9c2ae9a378794a7bef4fd247c28b"
  },
  {
    "url": "assets/js/23.e8696b47.js",
    "revision": "b4be3d431a87b20d1e900a9f8590f463"
  },
  {
    "url": "assets/js/24.1086910d.js",
    "revision": "e11a7b189c88805fa0bddeb8e1de0229"
  },
  {
    "url": "assets/js/25.e9c8ced0.js",
    "revision": "cab7b7de38f85f1a6b4f61940e1c2e15"
  },
  {
    "url": "assets/js/26.9700fe91.js",
    "revision": "57d1507995d4237c3cc791116cbf741e"
  },
  {
    "url": "assets/js/27.eb7f1aba.js",
    "revision": "3ade2fa12529f728a04f8bd36f2fe6d0"
  },
  {
    "url": "assets/js/28.3a1731fa.js",
    "revision": "cb019e54ebd3072be6fbe2f7ec9634fa"
  },
  {
    "url": "assets/js/3.e4576da4.js",
    "revision": "9e744def445c3f32d67a1f63817c3116"
  },
  {
    "url": "assets/js/4.2954f0d4.js",
    "revision": "d33377faa1bbdabbe882da8f11adb43c"
  },
  {
    "url": "assets/js/5.761c7a02.js",
    "revision": "37a27a7c763f30c9b517eabd06d4223e"
  },
  {
    "url": "assets/js/6.35ac2fd5.js",
    "revision": "ec9bf7f5f2124aa253acf853deacb679"
  },
  {
    "url": "assets/js/7.72112b3a.js",
    "revision": "6e031fe6c03d3fb423d8ebec8ee78da8"
  },
  {
    "url": "assets/js/8.3af512ff.js",
    "revision": "f4b80fb1ae61fd0a66a66e92ae16fbc6"
  },
  {
    "url": "assets/js/9.fab2a9eb.js",
    "revision": "2e41328ffe4745cfb3098cff8b50ac68"
  },
  {
    "url": "assets/js/app.ed80f704.js",
    "revision": "7a81feb502e3881617d892c7e40a7a85"
  },
  {
    "url": "img/index.html",
    "revision": "554db418b83125eba1ab4e8648ec9049"
  },
  {
    "url": "index.html",
    "revision": "63349f52fd74ee09a9948806a499bed9"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "785fb7547d2c6b9fa0e2abec487dbf37"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "124bc2b970f76b3f059edec62e82a28f"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "75df7c7bfdd2eacd54165e420fb30f8e"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "37146bfdb395f461c90494801962a32e"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "8b55242239fa55a13b55570168985f58"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "17cafa125b19906638fd1f61a58547b4"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "c7a05b52e8036ae8755e2cb967fd1e9a"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "066aa3e23f2239ad8c686c5563287152"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "bdb374514ae36010be50fa6e7f3dd6da"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "bc6860d6b2805f58f9754b464597a743"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "da3fed9c17bce843d0688619cffd27cc"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "2ef8413bc0cad222662bf2b6e95fb692"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "dbdc02f8a765c09dfc93095dcf37e87a"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "90e87f645ff49d5f3cad56cfaa7b5260"
  },
  {
    "url": "posts/index.html",
    "revision": "8985cd3794dc90276d005491261a5e69"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "136be5d0d103bdf22d3a4d8081058b46"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "c7ed5f551bc846834e068d9934ee22f2"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "4d20a69d4875435489a8114e579fe21c"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "290ed8ab51674cf7092a0a8893af8872"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "bc40e17040bec2d115be3240599bb397"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "c280932a5509636618225f8de8ae6965"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "978682a1571d971cb3d89aadc9dd99a6"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "c755343b718e9b45b51f71f0e4dbfd3e"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "f136ab95230ea5f3cd2f6f5f01fc8f76"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "ac99f006e71ca1f326cd87f98e1f46b4"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "973f7ae56bbe3c3c36a4481c54202d60"
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
