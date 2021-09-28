// selects h1 and calls it myHeading, then changes text context to "Hello world!"

// to set variable:
// let myVariable;

// to give a variable a value:
// myVariable = 'Bob';

// can do both at the same time:
// let myVariable = 'Bob';

// to retrieve variable:
// myVariable;

// you can change value of variable later in code

// special data types:
// array: myVariable=[1,2,3]
// to access array: myVariable[0] or myVariable[1], etc
// object: anything. everything in JS is an object and can be stored in a variable.

// if...else statement:
// if() {();} else {();}

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/
// select html element, setting its onclick handler property equal to anonymous function, 
// which contains code we want the click event to run

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/prog-img.png') {
        myImage.setAttribute('src','images/programmer.jpg');
    } else {
        myImage.setAttribute('src','images/prog-img.png');
    }
}
// myImage is choosing the img in HTML file
// on click, if mySrc is OG img, change to new image. If new image, change to OG image.

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {       // if myName has no value
        setUserName();   // run setUserName() again from the start
    } else {             // if myName does have a value
    localStorage.setItem('name', myName); // local storage is an API
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) { // does name data exist?
    setUserName();                  // if not, run setUserName to create it
} else {
    let storedName = localStorage.getItem('name'); // otherwise, retrieve stored name
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}