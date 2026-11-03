var myVariable = "Welcome to CMP-4011 Web-Based Programming";
console.log(myVariable);
var myVariable = "Welcome to CMP-4011 Web-Based Programming Module";
console.log(myVariable);

let letVariable = "This is a let variable";
console.log(letVariable);
letVariable = "This is an updated let variable value";
console.log(letVariable);

const constantVariable = "This is a constant variable";
console.log(constantVariable);

for (i=0; i<5; i++) {
    console.log(myVariable);
}

let myDate = new Date();
let todaysDate = myDate.toDateString();

try {
    document.querySelector('.mypara').innerHTML = 'Today is ' + todaysDate;
} catch (error) {
    console.log('Error occurred while updating the paragraph:', error); 
}

//let newPara = document.createElement('p');
//newPara.textContent = "Hello, This is a new paragraph";
//let mySection = document.querySelector('section');
//mySection.parentNode.insertBefore(newPara, mySection);

let newListItem = document.createElement('li');
newListItem.textContent = "Helps improve blood circulation (New list item)";
let benefitslist = document.querySelector('.benefitslist');
let lastItem = benefitslist.lastElementChild;
benefitslist.insertBefore(newListItem, lastItem);

benefitslist = document.querySelector('.benefitslist');
let lastitem = benefitslist.lastElementChild;
benefitslist.removeChild(benefitslist.lastElementChild);

//named function
//const hamburger = document.querySelector('#hamburger'); 
//hamburger.addEventListener('click', shownav);

//function shownav() {
    //document.querySelector('.navlist').classList.toggle('shownav');
//}

const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    document.querySelector('.navlist').classList.toggle('shownav');
});

let myForm = document.querySelector('form');
let myName = document.querySelector('#name');
let myEmail = document.querySelector('#email');
let myMessage = document.querySelector('#message');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    confirmMessage.textContent='Hi ${myName.value}, your message has been recieved, we will contact you at ${myEmail.value}';
});

const schedule = document.querySelector('#schedule');

const localJsonFile = "data.JSON";

document.addEventListener('DOMContentLoaded', () => {
    fetch(localJsonFile)
    .then(response => response.json())
    .then(responseData =>{
        schedule.innerHTML = ""
        responseData.forEach(yogaClass => {
            const card = document.createElement("div");
            card.classList.add("class-card");

            card.innerHTML = `
                <img src="${yogaClass.imageURL}" alt="${yogaClass.alt}">
                <h3>${yogaClass.style}</h3>
                <p><strong>Time:</strong> ${yogaClass.time}</p>
                <p><strong>Focus:</strong> ${yogaClass.focus}</p>
                <p><strong>Benefits:</strong> ${yogaClass.benefits}</p>
                <p><strong>Level:</strong> ${yogaClass.level}</p>
            `;

            schedule.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading the schedule:", error);
    });
});
