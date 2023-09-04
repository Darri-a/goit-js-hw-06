const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");
const ingredientItems = [];

ingredients.forEach((element) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.className = "item";
  ingredientItem.textContent = element;
  ingredientItems.push(ingredientItem);
});

ingredientsList.append(...ingredientItems);
