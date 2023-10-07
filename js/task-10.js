// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input');
const boxes = document.getElementById('boxes');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');

let widthHeight = 30;


function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${widthHeight}px`;
    div.style.height = `${widthHeight}px`;
  widthHeight += 10;
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div);
}
};



function destroyBoxes() {
  inputNumber.innerHTML = '';
}


btnCreate.addEventListener('click', () => {
  const amount = Number(input.value);
  createBoxes(amount);
});
btnDestroy.addEventListener('click', destroyBoxes)