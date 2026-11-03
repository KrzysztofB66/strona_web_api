window.addEventListener("devicemotion", (event) => {

    document.getElementById("x").textContent =
        "X: " + event.acceleration.x;

    document.getElementById("y").textContent =
        "Y: " + event.acceleration.y;

    document.getElementById("z").textContent =
        "Z: " + event.acceleration.z;

});