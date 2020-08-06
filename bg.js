const body = document.querySelector("body");

const IMGAGE_NUMBER = 7;

function backgroundImage(imageNumber) {
    const image = new Image();

    image.src = `images/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genNumber() {
    const number = Math.floor(Math.random() * IMGAGE_NUMBER);
    return number;
}

function init() {
    const randomNumber = genNumber();
    backgroundImage(randomNumber);
}
init();