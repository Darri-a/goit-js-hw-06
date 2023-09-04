// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя
//  свойство font - size.В результате при
//  перетаскивании ползунка будет меняться размер текста.

const fontSizeInput = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeInput.addEventListener("input", () => {
  const fontSize = fontSizeInput.value;
  text.style.fontSize = `${fontSize}px`;
});
