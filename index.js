let homeZahlEl = document.getElementById("score-home");
let guestZahlEl = document.getElementById("score-guest");
homeZahl = 0;
guestZahl = 0;


function addOne() {
    homeZahl += 1; 
    homeZahlEl.innerText = homeZahl;
    console.log(homeZahl);
}

function addTwo() {
    homeZahl += 2; 
    homeZahlEl.innerText = homeZahl;
    console.log(homeZahl);
}

function addThree() {
    homeZahl += 3; 
    homeZahlEl.innerText = homeZahl;
    console.log(homeZahl);
}

function minOne() {
    guestZahl += 1; 
    guestZahlEl.innerText = guestZahl;
    console.log(guestZahl);
}

function minTwo() {
    guestZahl += 2; 
    guestZahlEl.innerText = guestZahl;
    console.log(guestZahl);
}

function minThree() {
    guestZahl += 3; 
    guestZahlEl.innerText = guestZahl;
    console.log(guestZahl);
}

function restartOn() {
    guestZahl = 0;
    homeZahl = 0;
    guestZahlEl.innerText = guestZahl;
    homeZahlEl.innerText = homeZahl;


}