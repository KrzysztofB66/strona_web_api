let sprawdzOrientacje = () => {

    if (window.matchMedia("(orientation: portrait)").matches) {
        document.getElementById("orientacja").textContent =
            "Orientacja: Vertical (pionowa)";
    } else {
        document.getElementById("orientacja").textContent =
            "Orientacja: Horizontal (pozioma)";
    }

};

sprawdzOrientacje();

window.addEventListener("resize", () => {
    sprawdzOrientacje();
});