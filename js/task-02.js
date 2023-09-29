const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const makeup = ingredients.map( ingredient => {
  const elementLi = document.createElement('li');
  elementLi.textContent = ingredient
  elementLi.classList.add("item");

  return elementLi;
} ) 
list.append(...makeup);