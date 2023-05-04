function urlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 200)
        console.log(`${http.status} ${url} `)
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