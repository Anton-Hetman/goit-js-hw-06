const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", inputFunction);
const currentLength = Number(textInput.dataset.length);
function inputFunction(event) {
  const inputElemLength = event.currentTarget.value.trim().length;
  if (inputElemLength === 0) {
    textInput.classList.remove("valid");
    textInput.classList.remove("invalid");
  } else if (inputElemLength === currentLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
console.log(textInput);
