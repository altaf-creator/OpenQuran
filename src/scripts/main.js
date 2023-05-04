const assets = [
    "../../",
    "../../index.html",
    "../src/index.html",
    "../src/sura.html",
    "../src/attribution.html",
    "../src/styles/style.css",
    "../src/styles/css/fontawesome.css",
    "../src/styles/css/brands.css",
    "../src/styles/css/solid.css",
    "../src/styles/webfonts/fa-brands-400.ttf",
    "../src/styles/webfonts/fa-brands-400.woff2",
    "../src/styles/webfonts/fa-solid-900.ttf",
    "../src/styles/webfonts/fa-solid-900.woff2",
    "../src/styles/css/solid.css",
    "../src/data/en.sahih.xml",
    "../src/data/id.indonesian.xml",
    "../src/data/quran-data.xml",
    "../src/data/quran-uthmani.xml",
    "../src/scripts/main.js",
    "../src/scripts/quran.js",
    "../src/scripts/sura-list.js",
];

function urlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();

    if (http.status != 200)
        console.log(url)

    return http.status != 404;
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {

        for (var i = 0; i < assets.length; i++) {
            urlExists(assets[i]);
        }

        navigator.serviceWorker
            .register("scripts/service-worker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}