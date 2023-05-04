const staticQuran = "quran-all";
const assets = [
    "/index.html",
    "/src/index.html",
    "/src/sura.html",
    "/src/attribution.html",
    "/src/styles/style.css",
    "/src/styles/css/fontawesome.css",
    "/src/styles/css/brands.css",
    "/src/styles/css/solid.css",
    "/src/styles/webfonts/fa-brands-400.ttf",
    "/src/styles/webfonts/fa-brands-400.woff2",
    "/src/styles/webfonts/fa-solid-900.ttf",
    "/src/styles/webfonts/fa-solid-900.woff2",
    "/src/styles/css/solid.css",
    "/src/data/en.sahih.xml",
    "/src/data/id.indonesian.xml",
    "/src/data/quran-data.xml",
    "/src/data/quran-uthmani.xml",
    "/src/scripts/main.js",
    "/src/scripts/quran.js",
    "/src/scripts/sura-list.js",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticQuran).then(cache => {
            cache.addAll(assets)
            console.log(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})