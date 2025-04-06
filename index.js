let homeZahlEl = document.getElementById("score-home");
let guestZahlEl = document.getElementById("score-guest");
let homeZahl = 0;
let guestZahl = 0;

window.addOne = function () {
    homeZahl += 1;
    homeZahlEl.innerText = homeZahl;
};

window.addTwo = function () {
    homeZahl += 2;
    homeZahlEl.innerText = homeZahl;
};

window.addThree = function () {
    homeZahl += 3;
    homeZahlEl.innerText = homeZahl;
};

window.minOne = function () {
    guestZahl += 1;
    guestZahlEl.innerText = guestZahl;
};

window.minTwo = function () {
    guestZahl += 2;
    guestZahlEl.innerText = guestZahl;
};

window.minThree = function () {
    guestZahl += 3;
    guestZahlEl.innerText = guestZahl;
};

window.restartOn = function () {
    homeZahl = 0;
    guestZahl = 0;
    homeZahlEl.innerText = homeZahl;
    guestZahlEl.innerText = guestZahl;
};