const lengthItem = document.querySelector("#categories");
console.log(`Number of categories: ${lengthItem.children.length}`);
const items = document.querySelectorAll(".item");
items.forEach.call(items, (element) => {
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title} / Elements: ${itemsLength}`);
});
