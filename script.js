document.getElementsByClassName("checkbox");
let boxen = "checkbox";

document.querySelectorAll(".textfield");
let textfält = ".textfield";

const inputfältFärg = document.firstElementChild("#form");
console.log("inputfärgFält");

document.getElementById("#button");
let knapp = "#button";

/* document.querySelector("#ruta");
let ruta = "#ruta"; */

const ruta = document.getElementById("ruta");
ruta.style.background = "green";


function inputEffect() {
    /* Här ska vi skriva vår kod */
/* document.textfield.addEventListener('keypress', (e) => console.log(e)); */
}

document.getElementsByClassName("textfield").firstElementChild.addEventListener("keypress", inputEffect);
console.log("");


/* input */

/* 
1. för varje tecken i "Färg" skrivs en console log ut i inspektorfönstret.
2. detta gäller även för "Innehåll" men då skrivs även hela inputen ut till "ruta"
3. om en färg skrivs in i "färg" OCH "stil på box" klickas i, byter "ruta" färg till den färgen som skrivits i.  */