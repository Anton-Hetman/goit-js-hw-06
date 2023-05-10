const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const oneIng = document.querySelector("#ingredients");
const mapIng = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList = "item";
  return liEl;
});

oneIng.append(...mapIng);
console.log(oneIng);
