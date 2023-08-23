let h_1 = document.querySelector("h1");
h_1.style.display = "flex";
h_1.style.justifyContent = "center";

let boudica = document.querySelector("#boudica");
boudica.style.width = "700px";
boudica.style.height = "500px";
boudica.style.borderRadius = "40px";
boudica.style.marginLeft = "25%";

const paragraph = document.querySelector('p');
paragraph.textContent = "This is an image of Queen Boudica. She defended her people against a Roman invasion. Utlimately she lost, but she gave the bastards a run for their money."
let originalParagraph = paragraph.textContent;
paragraph.style.margin = "auto";
paragraph.style.textAlign = "center";


let button = document.createElement("button");
button.style.backgroundColor = "grey";
button.style.color = "black";
button.textContent = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", function(e) {
    paragraph.textContent = "THIS IS A DIFFERENT PIECE OF TEXT. NOTHING TO DO WITH BOUDICA.";

    setTimeout(function() {
        resetParagraph();
    }, 3000);
});


let inputText = document.getElementById("text-input");
document.body.appendChild(inputText);

inputText.addEventListener("input", function(e) {
    paragraph.textContent = inputText.value;
    setTimeout(function() {
        resetParagraph();
    }, 3000);
});

function resetParagraph() {
    paragraph.textContent = originalParagraph;
}
