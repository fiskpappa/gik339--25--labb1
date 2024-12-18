/* Deklarerar variabler och tilldelar dessa HTML-element som hämtas på olika sätt*/
const checkBox = document.querySelector(".checkbox");
const inputField = document.querySelectorAll(".textfield");
const button = document.getElementById("button");
const output = document.getElementById("output");

/* Kontrollerar att vi har hämtat rätt objekt till våra variabler */
console.log(checkBox, button, output, inputField);

/* For-loop som ser till att vi får en utskrift i konsollen när man skriver/ trycker på
 på en tangent i något av de båda textfälten */
inputField.forEach((field) => {
    field.addEventListener("keyup", handleKeypress);
});

/* Skapar en funktion som hanterar vad som händer vid en keypress, och att den
skriver ut det som skrivs i innehållsfältet till outputfältet */
function handleKeypress(e) {
    console.log("Tangent har tryckts på!", e);
    const name = e.target.name;
    const value = e.target.value;
    console.log("Inputfält som skrevs i är: " + name);
    if (name == "content") {
        output.innerHTML = "<p>" + value + "</p>";
    }
}

/* Här skapar vi en anonym funktion som ändrar bakgrundsfärgen på vår div */
checkBox.addEventListener("change", function(e) {
    const colorValue = e.target.form.elements["color"].value;
    output.style.backgroundColor = colorValue;
    console.log("Färg har ändrats till: " + colorValue);
});

/* Här skapar vi  en anonym funktion som raderar div-elementet helt ur
vår HTML-kod */
button.addEventListener("click", function(e) {
    e.preventDefault();
    output.remove();
    console.log("div-element har raderats");
});