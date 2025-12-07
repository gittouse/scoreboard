// let home = 0
// let guest = 0
// document.getElementById("home").textContent = home
// document.getElementById("gue").textContent = guest

// function add1() {
//     let add = (home + 1)
//     home.textContent = add
//     console.log(add)
// }

let home = 0
let guest = 0

// Store references to the DOM elements
const homeEl = document.getElementById("home")
const guestEl = document.getElementById("gue")
const resetEl = document.getElementById("reset")

// Initialize the scoreboard
homeEl.textContent = home
guestEl.textContent = guest
resetEl.textContent = reset

function addHome1() {
    if (home += 1) // increase the score
        homeEl.textContent = home // update the DOM
        console.log(home)
}

function addHome2() {
    home += 2 // increase the score
    homeEl.textContent = home // update the DOM
    console.log(home)
}

function addHome3() {
    home += 3 // increase the score
    homeEl.textContent = home // update the DOM
    console.log(home)
}

function addGue1() {
    if (guest += 1) // increase the score
        guestEl.textContent = guest // update the DOM
        console.log(guest)
}

function addGue2() {
    guest += 2 // increase the score
    guestEl.textContent = guest // update the DOM
    console.log(guest)
}

function addGue3() {
    guest += 3 // increase the score
    guestEl.textContent = guest // update the DOM
    console.log(guest)
}

function reset() {
    guest = 0
    home = 0
    guestEl.textContent = guest
    homeEl.textContent = home
    console.log(guest, home)
}