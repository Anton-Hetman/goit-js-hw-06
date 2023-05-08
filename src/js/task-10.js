function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createEl = document.querySelector("button[data-create]");
const destroyEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createEl.addEventListener("click", createBoxes);
destroyEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  const box = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = 30 + i * 10 + "px";
    div.style.height = 30 + i * 10 + "px";
    div.style.backgroundColor = getRandomHexColor();
    box.push(div);
  }

  boxesEl.append(...box);
  console.log("createBoxes");
}

function destroyBoxes(amount) {
  boxesEl.innerHTML = "";
  inputEl.value = "";
  console.log("destroyBoxes");
}
