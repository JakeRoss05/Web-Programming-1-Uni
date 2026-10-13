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

document.querySelector('.mypara').innerHTML = 'Today is ' + todaysDate;

let newPara = document.createElement('p');
newPara.textContent = "Hello, This is a new paragraph";
let mySection = document.querySelector('section');
mySection.parentNode.insertBefore(newPara, mySection);

let newListItem = document.createElement('li');
newListItem.textContent = "Helps improve blood circulation (New list item)";
let benefitslist = document.querySelector('.benefitslist');
let lastItem = benefitslist.lastElementChild;
benefitslist.insertBefore(newListItem, lastItem);

benefitslist = document.querySelector('.benefitslist');
let lastitem = benefitslist.lastElementChild;
benefitslist.removeChild(benefitslist.lastElementChild);


