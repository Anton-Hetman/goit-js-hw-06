const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ingredientsList = document.querySelector(".gallery");

const image = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery_list"><img class="gallery_img" src="${url}" alt="${alt}"></li>`
  )
  .join("");

ingredientsList.insertAdjacentHTML("beforeend", image);
ingredientsList.style.display = "flex";
ingredientsList.style.flexWrap = "wrap";
ingredientsList.style.listStyle = "none";
ingredientsList.style.gap = "40px";
