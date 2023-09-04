const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsList = "";

// for (let i = 0; i < ingredients.length; i++) {
//   const ingredientItem = document.createElement("li");
//   ingredientItem.className = "item";
//   ingredientItem.textContent = ingredients[i];
//   ingredientsList += ingredientItem.outerHTML;
// }

for (let i = 0; i < ingredients.length; i++) {
  ingredientsList += `<li class="item">${ingredients[i]}</li>`;
}

document.getElementById("ingredients").innerHTML = ingredientsList;
