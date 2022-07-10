const categoriesRef = document.querySelector('#categories');
console.log('Number of categories:', categoriesRef.children.length);
const itemRef = document.querySelectorAll('.item');


//Пример 1

const listChildren = itemRef.forEach((element) => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});






//Пример 2

// const listChildren = [...categoriesRef.children];
// listChildren.forEach(elem => {
//     console.dir(elem.children[0].textContent);
//     console.dir(elem.children[1].children.length);
//   });







// const firstEl =
//     console.log('Category:', titleRef[0].textContent);
//     console.log('Elements:', elemenstRef[0].children.length);

// const secondEl = 
// console.log('Category:', titleRef[1].textContent);
//     console.log('Elements:', elemenstRef[1].children.length);


// const lastEl = 
//     console.log('Category:', titleRef[2].textContent);
//     console.log('Elements:', elemenstRef[2].children.length);