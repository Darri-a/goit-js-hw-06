let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decrement.addEventListener("click", () => {
  counterValue = counterValue - 1;
  document.getElementById("value").innerHTML = counterValue;
  console.log(counterValue);
});

increment.addEventListener("click", () => {
  counterValue = counterValue + 1;
  document.getElementById("value").innerHTML = counterValue;
  console.log(counterValue);
});
