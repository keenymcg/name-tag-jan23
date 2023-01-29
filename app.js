/* eslint-disable no-console */
// grab DOM elements

// set event listeners
console.log('Selam näw, agärewa');
console.log(42 + 42);

const dogName = 'Sheila';
console.log(`My dog\'s name is ${dogName}. ${dogName} is 3 years old. ${dogName} is s\'cute`);

function tellMeImDumb(name) {
    console.log(`ur dum, ${name}`);
}

tellMeImDumb('Keenan');


const updateBtn = document.getElementById('update');

updateBtn.addEventListener('click', () => {
    console.log('i am clicking on the button');

    const nameInput = document.getElementById('input');

    const nameElement = document.getElementById('nameElement');
    
    nameElement.textContent = nameInput.value;
});
