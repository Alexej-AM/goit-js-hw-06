const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);


inputEl.addEventListener('input', onChangeName);

function onChangeName() { 

    outputEl.textContent = inputEl.value;

     if (inputEl.value === "") { 
        outputEl.textContent = "Anonymous";
    }
};
