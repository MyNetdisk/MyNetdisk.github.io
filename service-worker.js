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
    "revision": "4096dafd185a84d8fdec4ee42aa133ab"
  },
  {
    "url": "about.html",
    "revision": "b614fa1bd9c9ca30be45747237959eeb"
  },
  {
    "url": "assets/css/0.styles.1fcd39cd.css",
    "revision": "b4469bb481beca8ad110af91a9b75c81"
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
    "url": "assets/js/app.75429181.js",
    "revision": "4678b3159424d3cfb873be51cd7d7440"
  },
  {
    "url": "img/index.html",
    "revision": "2e1305a96a54b754720f8bae3ff2e33b"
  },
  {
    "url": "index.html",
    "revision": "296c9a6d32e199105cd89264973518e0"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "6cc708e15fa9e186e84c04abcfe373b3"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "66ad2667b3e2fec7b006d8f68825efe0"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "0ae057a66f4812d17f76a9ca0f90a57c"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "399b3384cf9e79c288ceaaec94b1183d"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "037e1643f5f0230758f33a41cad7d721"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "58e7d135fda17d3c8c18d233b8b931ba"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "0c812b8c1350b729880ad3065d095161"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "aff61ae589f23beeebb56cf2354d392f"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "b7ec461fe8855effceb8eb0751f3fceb"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "0740d8266911b27837b00d7e4e979e49"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "612e9846d4f28beb9119431032d25e0c"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "db8959295b20d67763da8f1f3c2ff9ba"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "0c38086169d0ff0c7bb2858dab80f423"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "fb8ff6df6a5a6966e89aac4120af0dfa"
  },
  {
    "url": "posts/index.html",
    "revision": "be14281c4523d1addb3e705d02148df7"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "ef2e95dbb9366a2915132e684b3aceac"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "da5e61a24a3f14dd188a63237c510ee2"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "18890d2feda89da94604048cca8b7ae1"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "9e9ce5f6e7a5eb8e0d2d81e98e9fcd4d"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "d5483f50716ea7322e37ed425f3a4cbd"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "67b51a2ebf0255cf29055fdd1ee09a37"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "64b138a4b0539fa14b4abc6dc9fa30b7"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "6470ec4b482bb1051ac75bd8970bcf42"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "95e70231e621a25d4152736f393e14e5"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "5a9763a7f0f2edbff3aa4a5e602f5b48"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "4accb2e2e36633b85fc733a4ac825cdf"
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
