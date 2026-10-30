document.getElementById("zapisz").addEventListener("click", () => {
    fetch("web.txt")
        .then(response => response.text())
        .then(data => {
            localStorage.setItem("wiadomosc", data);
        });
});