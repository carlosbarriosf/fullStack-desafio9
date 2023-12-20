//Ejercicio 1), 2) y 3)

//Descomentar la siguiente linea para verificar la funcionalidad del punto 1)
// document.addEventListener("DOMContentLoaded", handlePrompt);

const  characters = ["Mario", "Luigi", "Bowser", "Peach", "Yoshi", "Toad", "Toadette", "Daisy"]

function handlePrompt() {
    const character = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
    const span = document.getElementsByTagName("span");
    switch (character) {
        case "Mario":
            span[0].innerText = "Mario";
            break;
        case "Luigi":
            span[0].innerText = "Luigi";
            break;
        case "Bowser":
            span[0].innerText = "Bowser Morton Koopa";
            break;
        case "Peach":
            span[0].innerText = "Princesa Peach Toadstool";
            break;
        case "Yoshi":
            span[0].innerText = "T. Yoshisaur Munchakoopas";
            break;
        case "Toad":
            span[0].innerText = "Toad";
            break;
        case "Toadette":
            span[0].innerText = "Toadette";
            break;
        case "Daisy":
            span[0].innerText = "Princesa Daisy";
            break;
        
    
        default:
            span[0].innerText = "(desconocido)";
            break;
    }
    if(characters.indexOf(character) !== -1) {
        let characterId = character.toLowerCase();
        const characterElement = document.getElementById(characterId);
        characterElement.title = "Presentado";
        console.log(`Respuesta del usuario: ${character}`);
    }
}

//Ejercicio 6)

const button = document.getElementById("presentar");

//Descomentar el siguiente bloque de codigo para verificar la funcionalidad
//del ejercicio 6)

// button.addEventListener("click", function(){
//     if(button.classList.contains("noPresentado")) {
//         button.classList.add("d-none");
//     }
//     handlePrompt();
// })

// Bonus 1
let presentedCharacters = [];
const boxes = document.getElementById("cajas").children;

button.addEventListener("click", function() {
    let count = 0;
    handlePrompt();
    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].title === "Presentado") {
            count++;
            if (boxes[i] !== presentedCharacters[0]) {
                presentedCharacters.push(boxes[i]);
            }
        }
    }
    if (count > 1) {
        presentedCharacters[0].removeAttribute("title");
        presentedCharacters.shift();
    }
})


//Bonus 2

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function(){
        if (!boxes[i].hasAttribute("title")) {
            for (let j = 0; j < boxes.length; j++) {
                if(boxes[j].hasAttribute("title")) {
                    boxes[j].removeAttribute("title");
                }
            }
            boxes[i].setAttribute("title", "Presentado");
            presentedCharacters.shift();
            presentedCharacters.push(boxes[i]);
        } else {
            boxes[i].removeAttribute("title");
            presentedCharacters.shift();
        }
    })
}