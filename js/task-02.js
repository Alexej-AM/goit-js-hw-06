const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const PotatoesEl = document.createElement('li');
PotatoesEl.textContent = ingredients[0];
PotatoesEl.classList.add('item');
// console.log(PotatoesEl);

const MushroomsEl = document.createElement('li');
MushroomsEl.textContent = ingredients[1];
MushroomsEl.classList.add('item');
// console.log(MushroomsEl);

const GarlicEl = document.createElement('li');
GarlicEl.textContent = ingredients[2];
GarlicEl.classList.add('item');
// console.log(GarlicEl);

const TomatosEl = document.createElement('li');
TomatosEl.textContent = ingredients[3];
TomatosEl.classList.add('item');
// console.log(TomatosEl);

const HerbsEl = document.createElement('li');
HerbsEl.textContent = ingredients[4];
HerbsEl.classList.add('item');
// console.log(HerbsEl);

const CondimentsEl = document.createElement('li');
CondimentsEl.textContent = ingredients[5];
CondimentsEl.classList.add('item');
// console.log(CondimentsEl);


const ingredientsEl = document.querySelector('#ingredients');

const addListIngrediest = ingredientsEl.append(PotatoesEl, MushroomsEl, GarlicEl, TomatosEl, HerbsEl, CondimentsEl);
console.log(addListIngrediest);

