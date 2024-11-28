/* Hämtar HTML-element och deklarerar variabler */
const checkBox = document.body.children[1].children[8];
const inputField = document.getElementsByClassName("textfield")
const button = document.getElementById("button");
const output = document.querySelector("#ruta");


/* Kontrollerar att det fungerar i konsollen */
console.log(checkBox, button, output, inputField);

/* Skapar en funktion för callback */
function waitingForKeypress(callback) {
    console.log("Vi väntar på att någonting skrivs"); 
    callback();
}

function handleKeypress(e) {
    console.log("Någon klickade! Parameter: ", e);
}

/* HÄR SKA VI SKAPA EN FUNKTION DÄR
   EVENTLYSSNARE SKA TRIGGAS. funktionsdeklaration */



/* function testFunktion(keypress, handleKeypress) {
    handleKeypress();
} */

/* console.log(inputField[0]); */



/* Detta skriver ut i diven, men på fel sätt
/* function inputToOutput() {
output.innerHTML = document.body.children[1].children[5].value;
}

document.body.children[1].children[5].addEventListener('keyup', inputToOutput); */




/* document.getElementsByClassName(".textfield").firstElementChild.addEventListener("keypress", inputEffect);
console.log(""); */


/* input */

/* 
1. för varje tecken i "Färg" skrivs en console log ut i inspektorfönstret.
2. detta gäller även för "Innehåll" men då skrivs även hela inputen ut till "ruta"
3. om en färg skrivs in i "färg" OCH "stil på box" klickas i, byter "ruta" färg till den färgen som skrivits i.  */