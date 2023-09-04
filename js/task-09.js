function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeButton = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

changeButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});

// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль
// при клике на button.change - color и
// выводит значение цвета в span.color.

// Для генерации случайного цвета используй
// функцию getRandomHexColor.
