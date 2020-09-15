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
    "revision": "a1ae24799d38cd7768b5c9658bf5471f"
  },
  {
    "url": "about.html",
    "revision": "6061cb34399f79726509cb1dfb05207e"
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
    "url": "assets/js/18.6cc0107b.js",
    "revision": "7f8c6c2341f74ca0c17a00ddd2a3464f"
  },
  {
    "url": "assets/js/19.4d31b642.js",
    "revision": "02c6a42fdc0ef8458600a53a0b4be6fe"
  },
  {
    "url": "assets/js/20.97918ecf.js",
    "revision": "4e46f89bf0345f02d6f9f45a82eccfcc"
  },
  {
    "url": "assets/js/21.8bf5a73b.js",
    "revision": "acb18e493de1ba93d646b6201c4473fc"
  },
  {
    "url": "assets/js/22.8cf49d97.js",
    "revision": "45813320fb9150b4ac4dc84bc5dc3611"
  },
  {
    "url": "assets/js/23.62661312.js",
    "revision": "ee81c9bd5f6ae450a446fd418892968f"
  },
  {
    "url": "assets/js/24.e4f59d96.js",
    "revision": "c1e2ce347498f136204ce41f8d93d0a8"
  },
  {
    "url": "assets/js/25.f4e23272.js",
    "revision": "16e4e079eb245ae8568ab14ca7793c1a"
  },
  {
    "url": "assets/js/3.f483d621.js",
    "revision": "a68c300e7077f90adc3ebd7e42d212a4"
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
    "url": "assets/js/7.d14b9871.js",
    "revision": "f760bb431bb91311b6c2cf550040d56c"
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
    "url": "assets/js/app.44c752cf.js",
    "revision": "0a8138c69ef863fb7c54b03d426d6a6f"
  },
  {
    "url": "img/index.html",
    "revision": "d0be3f795847fb8f03887603e1eca986"
  },
  {
    "url": "index.html",
    "revision": "3216103033e5c461a6c01e1e1f40fa5d"
  },
  {
    "url": "posts/2001/03/20/selfstudy-programming-vs-attend-training.html",
    "revision": "24ff89e64bbe268446c5bad799543f7c"
  },
  {
    "url": "posts/2020/03/17/the-github-action-implementation-is-automatically-released-to-the-cloud-server.html",
    "revision": "31ce22783460cdd9a36c09c4aeeb8260"
  },
  {
    "url": "posts/2020/04/05/china-s-real-estate-trend.html",
    "revision": "093fabd5a1a2033022553a81d8b19192"
  },
  {
    "url": "posts/2020/06/22/deploy-blog-using-github-action.html",
    "revision": "88b812ebc94d25b8ae0315e434d1812b"
  },
  {
    "url": "posts/2020/08/22/diary-one.html",
    "revision": "09b58c772814661af6b59806a43315cc"
  },
  {
    "url": "posts/2020/09/02/a-shortcut-to-successful-public-speaking.html",
    "revision": "ed1ede90726c2ed8a80e1823d2988f2a"
  },
  {
    "url": "posts/2020/09/14/critical-dialogue.html",
    "revision": "3343d205afc069469f518e838f4259c3"
  },
  {
    "url": "posts/categories/diary.html",
    "revision": "6a0cfcb6225de771a4e3056d6ddfba0f"
  },
  {
    "url": "posts/categories/essay.html",
    "revision": "0b03c183617c64da181fad4eb67f8f45"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "4a2a0e5adef5da8d9916f36a3e272103"
  },
  {
    "url": "posts/categories/reprinted articles.html",
    "revision": "1eccba32853fa95ed11c80ef16af8ab0"
  },
  {
    "url": "posts/index.html",
    "revision": "560e5826c44fdd851b759f8467e111f0"
  },
  {
    "url": "posts/tags/CI.html",
    "revision": "ca4035abccf71d339f2eea47e0cec725"
  },
  {
    "url": "posts/tags/diary.html",
    "revision": "2d340cc469db846ec38e25c5765a990e"
  },
  {
    "url": "posts/tags/Github.html",
    "revision": "b3c36ab6eb64013f02782eccc4c5fd12"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "5e7d7a83b1d8404e6a609bd02dcd06e0"
  },
  {
    "url": "posts/tags/investment.html",
    "revision": "a0a4159a750c4bffbd16bb744452444f"
  },
  {
    "url": "posts/tags/programming.html",
    "revision": "9be3fef4cea91c56de7900f5d53b77cf"
  },
  {
    "url": "posts/tags/reading.html",
    "revision": "f1b147c5a6c12abdb44aeea55c907e77"
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
