const countValue = document.querySelector("#value");
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  countValue.textContent = counterValue;
});
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  countValue.textContent = counterValue;
});
