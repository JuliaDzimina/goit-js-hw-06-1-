const list = document.getElementById('categories');
const lengthList = list.children.length;
console.dir(`Number of categories: ${lengthList}`);

const items = document.querySelectorAll(".item");

const result = items.forEach((element) => {
   
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Elements: ${element.lastElementChild.children.length}`);  
    
});