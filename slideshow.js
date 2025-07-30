
const images = [
    "images/fratelli1.jpg",
    "images/fratelli2.jpg",
    "images/fratelli3.jpg",
    "images/fratelli4.jpg",
    "images/fratelli5.jpg",
    "images/fratelli6.jpg",
    "images/fratelli7.jpg",
    "images/fratelli8.jpg",
    "images/fratelli9.jpg",
    "images/fratelli10.jpg"
]; // sem dej názvy nebo cesty k obrázkům
let index = 0;

setInterval(() => {
index = (index + 1) % images.length; // přejde zpět na začátek po posledním
document.getElementById("slideshow").src = images[index];
}, 2000); // každou sekundu
// něco cokoli
