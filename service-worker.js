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
    "revision": "15b6a5dc08d9b5b8aa45284974ba7150"
  },
  {
    "url": "about.html",
    "revision": "43adab92d5b06b9bcb541716505f364f"
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
    "url": "assets/js/10.d3ceb756.js",
    "revision": "871b73a0e6074f65976a42f3c6031100"
  },
  {
    "url": "assets/js/11.085687ab.js",
    "revision": "478b529090dc1a351233c526692c170f"
  },
  {
    "url": "assets/js/12.7fe5a653.js",
    "revision": "147ec0939cb89aab52051640bd2db791"
  },
  {
    "url": "assets/js/13.d3cdf9f7.js",
    "revision": "851f6e2194350909057a1235c53b218f"
  },
  {
    "url": "assets/js/14.00f1ac3e.js",
    "revision": "7746972862ff8636828c742bc9418851"
  },
  {
    "url": "assets/js/15.4f46c5a4.js",
    "revision": "0ca015374949b0c28bf3f7c989e114a4"
  },
  {
    "url": "assets/js/16.37b44ea9.js",
    "revision": "3bc93d5353651baf7d8c900abb2d7d66"
  },
  {
    "url": "assets/js/17.723e7db1.js",
    "revision": "f72e002d29e647a402441f895ea0ea88"
  },
  {
    "url": "assets/js/18.ba97ce39.js",
    "revision": "4db2ad4eebd5e9cbfb88b550da01a96d"
  },
  {
    "url": "assets/js/19.801d62df.js",
    "revision": "60eecd8901f9fb880b7b7d94860ebd21"
  },
  {
    "url": "assets/js/20.1bf8382d.js",
    "revision": "4cf6fca54ae4c355e64536c1ec46aae9"
  },
  {
    "url": "assets/js/21.1ab7d339.js",
    "revision": "1ed4c1887659719ce910450c2d947c55"
  },
  {
    "url": "assets/js/22.7033a9a4.js",
    "revision": "9ed761406b7db64616903f20bbf8683f"
  },
  {
    "url": "assets/js/23.4ca8bd3f.js",
    "revision": "91c01b38f32792ce96549ac4c0594e4f"
  },
  {
    "url": "assets/js/24.ad1f0446.js",
    "revision": "cff7700d4f8421ccb582f0b899dc8fc2"
  },
  {
    "url": "assets/js/25.7bdf877e.js",
    "revision": "4a07e9a33512a8cf01706d310fe1f762"
  },
  {
    "url": "assets/js/26.7c0fbdc4.js",
    "revision": "d7e55944909145533c78744b2cbe76ec"
  },
  {
    "url": "assets/js/27.58609bf2.js",
    "revision": "4d2bee739a080a4ee33fe8ccd4f97af3"
  },
  {
    "url": "assets/js/3.bb853a34.js",
    "revision": "fd5e5e69de7118d29613e617fb79d2b5"
  },
  {
    "url": "assets/js/4.dc86465e.js",
    "revision": "ddff902d4b1ccb7e59797de2a03c5edb"
  },
  {
    "url": "assets/js/5.3888770d.js",
    "revision": "9680489910ab014ba9fd7ff69a417099"
  },
  {
    "url": "assets/js/6.aee6310b.js",
    "revision": "48e39534b981fab9a982791f8ffb53e3"
  },
  {
    "url": "assets/js/7.7e4cd116.js",
    "revision": "8beb52ce55b3b86f2ecedfb5aceee139"
  },
  {
    "url": "assets/js/8.ece81168.js",
    "revision": "3c88155e0aea2af2b02a20b063cb4d38"
  },
  {
    "url": "assets/js/9.31d57c86.js",
    "revision": "8693e048eca2995ed1775cd8ffc3bb05"
  },
  {
    "url": "assets/js/app.f150aa2b.js",
    "revision": "2f16c1858402632bee5d84da8633366f"
  },
  {
    "url": "img/index.html",
    "revision": "0d8b3b93f485c61a69d906213562b0e7"
  },
  {
    "url": "index.html",
    "revision": "396b242c92a639942acbf9f5b2f08181"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "7706148454aca4be7d057d41fabbdfd4"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "2e829f15207d23a8c9443311db63e90a"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "cad488063881ffcac85aa4f80544b4a4"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "376a9d17ce00ee66d02014e921cf1249"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "0cd46d4548016d24fd5d74cb45701059"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "42c3a68f09ca3ae814d8c3658e309123"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "7d5be908d59ed9cb1fd0a33f1848ec7d"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "a7795505685de38db390784dd6c85149"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "aa09c87ba82789dd2ad4ce6022b59d91"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "56194226bc03df20abeb073000915675"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "1ef2aeec9715334ce7148137e5b31d59"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "ebc48d74e2c66040635cc2292c0278a2"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "63ec57ad438bb454779e21b510bac10c"
  },
  {
    "url": "posts/index.html",
    "revision": "d5badf7e30613315c5648fd6366fc48f"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "82fb4cd8251c7e5ff41131497c99003c"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "bb9e4e5bbf127f277b50d8e45e4bf890"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "3f2a70f1e3aff98bd7c59e644bda22ad"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "805bc9a8ad5428a13dfa7a5f5bd10958"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "45a05c4caae908b524a1cf878f0083e8"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "df994039a6af27039165b5b6024c089b"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "86e53c8a28efd3971add9ef12665bf2b"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "e37e4026a3769aef6e7727c3d848c17d"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "d7cfc6438d30e99ea880c9f5f049940b"
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
