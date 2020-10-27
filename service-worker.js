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
    "revision": "ecad3be574ce26f490d6ead0b46928af"
  },
  {
    "url": "about.html",
    "revision": "38929c9a3c88e2c3ba27771d7db48bbc"
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
    "url": "assets/js/app.f5e22423.js",
    "revision": "374113010b1177e56babef5956c52118"
  },
  {
    "url": "img/index.html",
    "revision": "7f5274ef596caddd5eb64026def3a72e"
  },
  {
    "url": "index.html",
    "revision": "c62f8b759a70b905edf762856dbcabb8"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "b1ea29fcad2b662bdd3a7d1fbac16ebb"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "078ec9d3fc9e5588b61df6d0647906f7"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "8e5c4907d634d5157050fd76d28ea417"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "7314ec0cfb7d0304b4767d25a4d734d1"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "5225509b7a64bcdd0fe54e38a5d48c06"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "04f32f8c276085e7e2ab36d94254b4af"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "ba4a7f9aaf67a5e6e23fb7eff74867eb"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "1884a58d055f5b2640b31c3cf935d051"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "b5d95bfdd95686b54ae28651c84f4fd4"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "35c21b7fd0ec863b0e2db7a77120b415"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "a11936ba81e45e8352e2580dfc308772"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "031139415d8a0469630154d234dac4b9"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "e6df39c94245a29c9c381628c887e77b"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "b64e12205ad9ebebca1372fa764cad47"
  },
  {
    "url": "posts/index.html",
    "revision": "d5cf8c1ce9b64ab83cabb3b35c950fa5"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "5a4193f770d92e1b6806b0c9bc0dca79"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "d23f4a41185f888607cb06fd448060df"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "6cc6f639eaed713cb86dde573dbe9f59"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "8886c7095c68a72fcb38e4bcefe751e5"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "35d5a58bb84a669d0bf987f5d4d05de0"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "3065eeaf2b3abd847fe651b82c5f5e14"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "1672666133923f5b558399409afa7e65"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "d68019203ee769e8c93261d901b8d872"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "46659be16abe0931d404cc65d2b68848"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "d7987ccbc21d261bf3f1ef6a66ef4441"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "8cc5f2777c630084167b695a47e87195"
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
