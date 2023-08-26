const categoriesItem = document.querySelectorAll(".item");

categoriesItem.forEach((element) => {
  const categoryTitle = element.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);
});
