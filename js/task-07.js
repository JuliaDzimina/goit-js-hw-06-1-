// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputSlider = document.getElementById('font-size-control')
const spanText = document.getElementById('text');

function fontSizeControl(evt){
    spanText.style.fontSize = `${evt.currentTarget.value}px`;
}

inputSlider.addEventListener('input', fontSizeControl);

