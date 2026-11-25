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

let benefitslist = document.querySelector('.benefitslist');
if (benefitslist) {
    let newListItem = document.createElement('li');
    newListItem.textContent = "Helps improve blood circulation (New list item)";
    let lastItem = benefitslist.lastElementChild;
    benefitslist.insertBefore(newListItem, lastItem);
    benefitslist.removeChild(benefitslist.lastElementChild);
}

//named function
//const hamburger = document.querySelector('#hamburger'); 
//hamburger.addEventListener('click', shownav);

//function shownav() {
    //document.querySelector('.navlist').classList.toggle('shownav');
//}

const hamburger = document.querySelector('#hamburger');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        document.querySelector('.navlist').classList.toggle('shownav');
    });
}

let myForm = document.querySelector('form');
let myName = document.querySelector('#name');
let myEmail = document.querySelector('#email');
let myMessage = document.querySelector('#message');
let confirmMessage = document.querySelector('.confirmMessage');

if (myForm) {
    myForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        confirmMessage.textContent = `Hi ${myName.value}, your message has been recieved, we will contact you at ${myEmail.value}`;
    });
}

const schedule = document.querySelector('#schedule');

const localJsonFile = "data.JSON";

if (schedule) {
    fetch(localJsonFile)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Could not load ${localJsonFile}: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData =>{
        schedule.innerHTML = "";
        for (const item of responseData){
            const scheduleArticle = document.createElement('article');
            const imageElement = document.createElement('img');
            imageElement.src = item.imageURL;
            imageElement.alt = item.alt;
            scheduleArticle.appendChild(imageElement);
            scheduleArticle.insertAdjacentHTML(
                'beforeend',
                `<h3>${item.style}</h3>
                <p>Time: ${item.time}</p>
                <p>Focus: ${item.focus}</p>
                <p>Benefits: ${item.benefits}</p>
                <p>Level: ${item.level}</p>`
            );
            schedule.appendChild(scheduleArticle);
        }
    })
    .catch(error => {
        console.error("Error loading the schedule:", error);
    });
}
