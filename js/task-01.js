

const categoriesRef = document.querySelector('#categories');
console.log('Number of categories:', categoriesRef.children.length);

const itemRef = document.querySelectorAll('.item');





const qqq = itemRef.forEach((element) => {
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});










// const firstEl =
//     console.log('Category:', titleRef[0].textContent);
//     console.log('Elements:', elemenstRef[0].children.length);

// const secondEl = 
// console.log('Category:', titleRef[1].textContent);
//     console.log('Elements:', elemenstRef[1].children.length);


// const lastEl = 
//     console.log('Category:', titleRef[2].textContent);
//     console.log('Elements:', elemenstRef[2].children.length);