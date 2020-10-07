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
    "revision": "756e0c5322c2d765ff3de3ecccd45998"
  },
  {
    "url": "about.html",
    "revision": "5614f3081524b4fc1d16d605fe2e4603"
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
    "url": "assets/js/12.0b349b2d.js",
    "revision": "e62ea144d68071f924566807d9af28e3"
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
    "url": "assets/js/20.ebc56603.js",
    "revision": "a2ec5eaece3fbb20ded1f8a754297692"
  },
  {
    "url": "assets/js/21.0578cc2e.js",
    "revision": "95780251f1a53f820adf9fb3137a654b"
  },
  {
    "url": "assets/js/22.4b8f38db.js",
    "revision": "51db9c2ae9a378794a7bef4fd247c28b"
  },
  {
    "url": "assets/js/23.55e09fe3.js",
    "revision": "70cff849ee6502c5feacb992cf40dfd3"
  },
  {
    "url": "assets/js/24.1086910d.js",
    "revision": "e11a7b189c88805fa0bddeb8e1de0229"
  },
  {
    "url": "assets/js/25.7dee6fef.js",
    "revision": "f3f9474bd13eb6bdd5feaf0a41efac56"
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
    "url": "assets/js/7.c3e5fe5d.js",
    "revision": "0a29547268217b8fe57354343e035b94"
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
    "url": "assets/js/app.3a7b2732.js",
    "revision": "927abca8e9ffbb4316ac002847500d95"
  },
  {
    "url": "img/index.html",
    "revision": "8f6232569923459f390e5a4aa131b665"
  },
  {
    "url": "index.html",
    "revision": "c06f1009027a3252d46405da65d5690f"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "29d513df1c6cbee2cb1757bb42ad455e"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "cb19a3f81800c8e35bf43ba559824bbc"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "2a44bc6f1d539cf0640adf83a8b0d5a6"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "d970ed74049623409a36b4657a5372d1"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "59e3f1f05afc052a9c10d989c920cac8"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "909c40f1409d65482bacf8cf5869437f"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "d8451f3ebab26445045ebb2aa38aa6d8"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "6326531ec4462d7af63eef19d9e24a70"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "a63bf09098970d2269700ec4e9399291"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "0a28bc7791eff54b3f68b48772857c58"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "51c6d8b43f580b5127bb45906380ae29"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "41222a7e3e8342e5f238c350085ae679"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "8640544a3dd7532a764b0ed931351dc7"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "b39d931674857565ac757733280e3485"
  },
  {
    "url": "posts/index.html",
    "revision": "b75246b9fa984f418f60b073bad8bb74"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "a371f12101864a6511967bcf4532a252"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "3d76d8060ca617cd1aedfcd13818c112"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "4aadd44bbcb8646bbbd0628f9f41f17c"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "44c83bbf4306d478748f4bca419bf2b4"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "cd3b2e6437e4fa45d6eb5f838771e3ce"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "2a0b5f2e6be857a09026bd6b9c05871c"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "99151e380e95ee19c3d1a127f5bba32c"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "38fca340598bda6383edecd7cee0641d"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "1f711b17d9fabcb625e4db774c67bbda"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "6c75432513f7f9fc87d9d0ef779a3b50"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "7adc4c1c95bd1bf44249ac4f0c31b3dc"
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
