let colors = ["red","green","grey","yellow"];

let b = document.getElementById("btn")

let c = document.getElementById("bc")

b.addEventListener("click", myColor);

function myColor () {
    let n = Math.floor(Math.random()*4)+1
    c.style.background = colors [n];
}


let d = document.getElementById("ntb")
d.addEventListener("click", yourColor);

function yourColor() {
    colors.push(prompt("Enter BG Color:"));
    c.style.background = colors [colors.length-1];
}




