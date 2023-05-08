// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const currentInput = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

currentInput.addEventListener("input", inputFunction);
function inputFunction(event) {
  outputText.style.fontSize = event.currentTarget.value + "px";
}
console.log(outputText);
