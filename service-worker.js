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
    "revision": "7cee2e371fb40bf8d47413f067bf46c2"
  },
  {
    "url": "about.html",
    "revision": "4e453182378c77d58bb7bcc1761e2916"
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
    "url": "assets/js/24.26d36582.js",
    "revision": "4f699c86342a0cb0206367f9baae4bdb"
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
    "url": "assets/js/app.3deb49b5.js",
    "revision": "03f81c08122af29af4d37fceb726445b"
  },
  {
    "url": "img/index.html",
    "revision": "40a6ac6ca491559c5b802da33ac25b5d"
  },
  {
    "url": "index.html",
    "revision": "c3fa5567b1636cdc7419fe0b9447b6e6"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "3e6db3806fc3d5467bdf697b33763ef8"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "bdf9c0aa1860b6ddabd7e9a4dd6479a3"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "a50f140174dbe1d099fa878c2ae9ddae"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "117a307fe400a98fca02b688d360c464"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "c3a4287e6c67d3ea2af2494b7afad846"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "271d8a314b1f2486e81210052258b74c"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "318710e82cc9c7e2f020ba6ade3b36f3"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "800948b50ec1572318d713ac23db0e7c"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "5586476c5c32a5819823c22480a47e67"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "75cd5684f22e50abebef4c3525e9c7f8"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "3af84bcd8cc5b45f1832845052900e29"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "9167a475dec84bf9793a223d47519849"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "23cb0e3de9ce5954da4eb37e6e1d374e"
  },
  {
    "url": "posts/index.html",
    "revision": "598fba5ff29c2d8ec70022258a54a363"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "1f40bfc1d1f89ff1a8bda312f68b35ff"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "85575e65e39a7c39d7418fb83254d63e"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "4072e97d011bcdb8387d66df7132dd69"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "8e0bf26fdcd6b24c1887aa5416ca6901"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "1f48d29ff85bfa79bb20e36e1d7aa736"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "b93a0e80eeee2452ea3482aff8c7abdf"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "be212ceef0487b9613c87212bd70c690"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "bd4a5a699567e56aa2f4bd3dbd02c42b"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "644934bff5c2c39987212bbb81066be3"
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
