//PRACTICE SECTION. NB:ASSIGNMENT DOWN BELOW
//variables
var myObject = {
    firstName: "Kinsley",
    lastName: "Kaimenyi"
};

myAge = 20;

console.log(myObject.lastName);
console.log(myObject.firstName);
console.log(typeof myObject);

function whatsYourName() {
    console.log("Hello, my name is " + myObject.firstName + " " + myObject.lastName)
}
whatsYourName();

function age(){
    console.log("I am " + myAge + " years old")
}
age();

var count = 1;
function increase() {
    count += 1 //increase by 1
    console.log(count)
}
increase();

//lets and constants
function sayHi() {
    var shouldSayHi = true;
    if(shouldSayHi === true) {
        var myName = "Kinsley"
        console.log("Hi " + myName);
    }
}
sayHi();

function myName(){
    var yourName = true;
    if(yourName === true){
        let theName = "Kaimenyi";
        console.log(theName);
    }
}
myName();

const myArray =[1, 2, 3, 4];
myArray.push(5)
console.log(myArray);

const anotherObject = {
    name: "Luka"
}
anotherObject.name = "Sabat";
console.log(anotherObject.name);

//The ASSIGNMENT PROJECT SECTION
//variables are function scoped.
//Let is block based
//variables cannot be redeclared
//let can also be re-assigned
//const are block based
//const cannot be re-assigned
//const cannot be redeclared

var a;//declaration
a = 10; //initialization

let a;//declaration
a = 7;