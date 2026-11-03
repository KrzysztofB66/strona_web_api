
let id;

document.getElementById("start").addEventListener("click", () => {

    id = navigator.geolocation.watchPosition((pozycja) => {

        let szerokosc = pozycja.coords.latitude;
        let dlugosc = pozycja.coords.longitude;

        document.getElementById("szerokosc").textContent =
            "Szerokość: " + szerokosc;

        document.getElementById("dlugosc").textContent =
            "Długość: " + dlugosc;

    });

});

document.getElementById("stop").addEventListener("click", () => {
    navigator.geolocation.clearWatch(id);
});
