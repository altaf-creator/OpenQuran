var zoomLevel = 1;

function zoomIn() {
    if (zoomLevel < 2) {
        zoomLevel += .1;
    }
}

function zoomOut() {
    if (zoomLevel > 0.6 ) {
        zoomLevel -= .1;
    }
}

function updateZoom() {
    const elements = document.getElementsByTagName("li");
    const zoomText = document.getElementById("zoomText");
    const zoomTextAlt = document.getElementById("zoomTextAlt");
    const suraOl = document.getElementById("sura-ol");

    zoomText.innerHTML = Math.round((100 * zoomLevel)).toString() + "%";
    zoomTextAlt.innerHTML = Math.round((100 * zoomLevel)).toString() + "%";
    suraOl.style.fontSize = (1 * zoomLevel).toString() + "em";
    suraOl.style.paddingLeft = (40 * zoomLevel * 1.25).toString() + "px"; 

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = (28 * zoomLevel).toString() + "px"; 
        elements[i].style.lineHeight = ((28 * zoomLevel) + (44 * zoomLevel * 0.7)).toString() + "px"; 
    }
}