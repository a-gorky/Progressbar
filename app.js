'use strict'

let stackArray = [];


const btnAdd = document.querySelector('.add-btn');
const stackWpr = document.querySelector('.stack-wrapper');


btnAdd.addEventListener('click',() => {

    const nameTech = document.querySelector('.name-technology').value;
    const description = document.querySelector('.description').value;

    const newTechnology = {
        title: nameTech,
        text: description
    };

    stackArray.push(newTechnology);
    displayMessages();

})


function displayMessages () {

    let displaymessage = '';

    stackArray.map(item => {
        displaymessage += `
        <li class="technology">${item.title}</li>
        `;
    });

    stackWpr.innerHTML = displaymessage;
}