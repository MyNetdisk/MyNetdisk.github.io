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
    "revision": "06a20659212d27b287b8507f466a09f6"
  },
  {
    "url": "about.html",
    "revision": "07702e44feb50195339769a390e3bff7"
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
    "url": "assets/js/24.7d1c51ea.js",
    "revision": "485e170c93b63418d55341ba431e4eef"
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
    "url": "assets/js/app.8eb2a976.js",
    "revision": "9aa19b2e805a5cccf2c1cef032a7db48"
  },
  {
    "url": "img/index.html",
    "revision": "b7f61eccb34c106b9de6e331f79a4034"
  },
  {
    "url": "index.html",
    "revision": "bf53b800548ca5af3805a747674b1928"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "8efe847fde9d4affee03a31fe4b8767d"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "604b97c2daba4148a5c51d63e3141b64"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "bcc760be1640a719b9b18f0b6b9beda5"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "2e5c26ccba065f63f22b92c37b385673"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "ced639e057db845d1c40954da669cfea"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "3e92a84df410da5f0caf6228efe84115"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "a5fd8fc1e974661ee02dc54473714d02"
  },
  {
    "url": "posts/2020/09/22/the-girl-folded-by-hot-style.html",
    "revision": "bb413b5fa7113be8f16cace0439844f1"
  },
  {
    "url": "posts/2020/09/23/docker-mysql-volume-permission-deny.html",
    "revision": "2fdf67ece4b12d050fbe9dec2e469e56"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "734a2d5cdbbd42d91792941f2886c516"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "48257dbd0e46fea37f7be6e9bcffb792"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "f85e3c6d9f337e76dfc647b1ab3d8e1b"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "b581e61597bb722320d8e7391d917789"
  },
  {
    "url": "posts/index.html",
    "revision": "b4836ce7c477567702b9213dcd7a67b2"
  },
  {
    "url": "posts/tags/chicken soup.html",
    "revision": "f71f34319e354fe1208bcb0f85f7e564"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "7111195dc589e0585afbbd06827ad1c3"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "e81833bb38fc220062416763f70966c3"
  },
  {
    "url": "posts/tags/docker.html",
    "revision": "06ea3b53f14cd991d61e82cb4b63d65d"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "c635550c7436755d25d195a7e33f87d7"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "471d4bf724d7818300e2869656a9b981"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "201a9c1e2f58d483bd1f63fb374b0da9"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "7272544c3af5268041708382d6885e71"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "1fcd001f7a75b45d36de98af0baa18d4"
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
