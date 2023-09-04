const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const allowedLength = validationInput.getAttribute("data-length");
  const realLength = validationInput.value.length;
  if (realLength == allowedLength) {
    validationInput.className = "valid";
  } else {
    validationInput.className = "invalid";
  }
});
