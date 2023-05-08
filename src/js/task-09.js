const changeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnChangeColor.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  changeColor.textContent = randomColor;
});
