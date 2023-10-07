// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

function color(evn){
  span.textContent = body.style.backgroundColor = button.style.backgroundColor = getRandomHexColor();

  button.style.border = "solid";

}

button.addEventListener('click', color)