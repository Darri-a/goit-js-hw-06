const input = document.getElementById("name-input");

input.addEventListener("change", () => {
  let value = input.value;
  if (value === "") {
    value = "Anonymous";
  }
  document.getElementById("name-output").innerHTML = value;
});
