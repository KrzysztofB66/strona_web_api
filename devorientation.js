window.addEventListener("deviceorientation", (event) => {

    document.getElementById("alpha").textContent =
        "Alpha: " + event.alpha;

    document.getElementById("beta").textContent =
        "Beta: " + event.beta;

    document.getElementById("gamma").textContent =
        "Gamma: " + event.gamma;

});