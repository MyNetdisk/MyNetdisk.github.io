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
    "revision": "86dbe77257a055532d5bdecdcf0c8f6f"
  },
  {
    "url": "about.html",
    "revision": "2754c06ba73201560690d065db35c728"
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
    "url": "assets/js/21.0184b03e.js",
    "revision": "f2aadbaf09c88f4ae1e304146ef310c4"
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
    "url": "assets/js/app.7de6f723.js",
    "revision": "20cf3025c8622e528db5bd65e692a0f2"
  },
  {
    "url": "img/index.html",
    "revision": "6707a288d723a30bce7994f4017ab2b2"
  },
  {
    "url": "index.html",
    "revision": "461945eb0f11191d51cd586033f11392"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "e6c81d739dfa03cd9ad72dcfe691f0c1"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "31dcd387f56946ced37090e360e51c60"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "517889d685fb6cd8ff02dad9bd894fb2"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "0a26da15bb6640c0f62e09ad9c78f934"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "2cfa6c921852fe4c9385a5609cd5b336"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "512db39296f078688652223dc7c3c384"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "0af045608d33c153cc6a3be528449454"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "46ea8fbb68135acdd3b35c16fac109ea"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "ff51740d9064ca08b2bbb0077abc0a3b"
  },
  {
    "url": "posts/2020/10/07/talk-like-ted-2.html",
    "revision": "ef381ee90de19c5f8f4bfa5ab77cf8fc"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "ef2365791c3a612bcb2ac4d34f2944d0"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "7031f428ca989da6cedb2439f9164883"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "45e4e0210d21a9c16ad2f52ccee93ffa"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "bf05a53860d217c11d99e85886c035ec"
  },
  {
    "url": "posts/index.html",
    "revision": "bdc73fc6d350343f4b29ec2cea051bb3"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "9b30405bc20cbe82534f22401ec32745"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "322a6bb9724dd9b6565de33679e868dc"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "77fde33e47d14678d4ea3a0e13006c80"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "fb589c79ca754481e37cb3b7928002c3"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "69d1ef57957381c5d892beb24ab8a3ba"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "591d33f3edd8f9ae91d6ac77d3fed5f7"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "13975c98cfa9f980d5bab893ff8380bd"
  },
  {
    "url": "posts/tags/lecture.html",
    "revision": "420d82f32eea9b474c474f70b842c74a"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "7401d16aa03adbd773e30cb28cb424bf"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "45caff7d51dd2671ba7cca6e821d05c6"
  },
  {
    "url": "posts/tags/TED.html",
    "revision": "b7e6b0eb3f058e8ecec896714bc4b69e"
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
