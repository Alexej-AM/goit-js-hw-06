const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const newElement = ingredients.map((element) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');

  return itemEl;

  
});
console.log(newElement);



const addListIngrediest = ingredientsEl.append(...newElement);




// const PotatoesEl = document.createElement('li');
// PotatoesEl.textContent = ingredients[0];
// PotatoesEl.classList.add('item');
// // console.log(PotatoesEl);

// const MushroomsEl = document.createElement('li');
// MushroomsEl.textContent = ingredients[1];
// MushroomsEl.classList.add('item');
// // console.log(MushroomsEl);

// const GarlicEl = document.createElement('li');
// GarlicEl.textContent = ingredients[2];
// GarlicEl.classList.add('item');
// // console.log(GarlicEl);

// const TomatosEl = document.createElement('li');
// TomatosEl.textContent = ingredients[3];
// TomatosEl.classList.add('item');
// // console.log(TomatosEl);

// const HerbsEl = document.createElement('li');
// HerbsEl.textContent = ingredients[4];
// HerbsEl.classList.add('item');
// // console.log(HerbsEl);

// const CondimentsEl = document.createElement('li');
// CondimentsEl.textContent = ingredients[5];
// CondimentsEl.classList.add('item');
// // console.log(CondimentsEl);