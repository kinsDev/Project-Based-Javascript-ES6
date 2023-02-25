/**
 * a function is a javascript procedure 
 * - a set of statements that performs a task or calculates a value
 */
//practicing INTRO to Javascript functions
function sayHi(){
    console.log("Hello Kinsley");
}
sayHi();

const theWord = "Smash";
function sayTheWord(){
    console.log("The word is " + theWord);
}
sayTheWord();

function doodle(userName){
    console.log("The argument practice " + userName);
}
doodle("of passing in a parameter");

function myName(firstName, lastName){
    console.log("My name is " + firstName + " " + lastName)
}
myName("Kinsley", "Kaimenyi"); 

function details(name, age){
    console.log("Hi " + " " + name + " " + "you are " + " " + age);
}
const billy = "billy";
const dooly = "dooly";
const poodle = "poodle";

details(billy, 20);
details(dooly, 19);
details(poodle, 34);

function numberDoubler(num){
    console.log(num * 2);
}
numberDoubler(50);

//if we use return we have to console.log instead of just calling the function
function numberTripler(num){
    return num * 3;
}
console.log(numberTripler(50));

//let's try this
const numTwoDoubled = numberDoubled(2);
const numeFiveDoubled = numberDoubled(5);
function numberDoubled(num) {
    const doubledValue = num * 2;
    return doubledValue;
}
function numberAdder(num1, num2){
    return num1 + num2;
}
console.log(numberAdder(numTwoDoubled, numeFiveDoubled));

//let us do another calculation
const doubleNumThree = theNumber(3);
const doubleNumFive = theNumber(5);
function theNumber(num){
    const theResult = num * 2;
    return theResult;
}
function addTheResult(numa, numb){
    return numa + numb;
}
console.log(addTheResult(doubleNumThree, doubleNumFive));

//something pretty cool
/*const squaredNumber = function(num){
    const answer = num * num
    return answer;
}
const numberAdder = function(numc, numd){
    const addition = numc + numd
    return addition;
}
console.log(addition(answer(4), 10));*/

let myNumber = 100;
function adding(num) {
    return num + 40;
}
console.log(adding(myNumber));


//practicing Javascript Nested Functions
//functions can be nested inside other functions
function squareAndMultiply(num1, num2){
    function squarer(x){
        return x*x;
    }

    return squarer(num1) * squarer(num2);
}
console.log(squareAndMultiply(2, 4));


function nameFormatter(firstName, lastName, age){
    function formattedNames(arg1, arg2){
        return arg1 + " " + arg2;
    }
    const namesFormatted = formattedNames(firstName, lastName);
    return namesFormatted;
}
console.log(nameFormatter("Kinsley, Kaimenyi"));

//fruits that I love
function fruits(fruit1, fruit2, fruit3, fruit4){
    function listedFruits(f1, f2, f3, f4){
        return f1 + " " + f2 + " " + f3 + " " + f4;
    }
    const listOfFruits = listedFruits(fruit1, fruit2, fruit3, fruit4);
    return listOfFruits;
}
console.log(fruits("mango ", "orange ", "apple ", "pears "));

//I want to buy these cars in future
function carsWanted(name, year){
    function listedCars(arg1, arg2){
        return arg1 + " " + arg2;
    }
    const theCars = listedCars(name, year);
    return theCars;
}
console.log(carsWanted("Mercedes " + 2023));

//Practicing Advanced Functions
//recalling function expressions
let thyName = function() {
    console.log("Kinsley");
}
thyName();

var doosh = () => {
    console.log("Hi am using a simpler and easier method");
}
doosh();

var nummies = (num1, num2) => {
    return num1 * num2;
}
console.log(nummies(2, 5));

var digits = (dig1, dig2) => {
    console.log(dig1 * dig2);
}
digits(4, 5);

const users = [
    {name: "Kinsley", age: 22},
    {name: "Kaimenyi", age: 35},
    {name: "dooly", age: 47}
];
const userNameList = users.map(function(user) {
    return user.name;
});
console.log(userNameList);

const picky = [
    {vehicle: "Mercedes", year: "2023"},
    {vehicle: "BMW", year: "2022"},
    {vehicle: "Audi", year: "2021"}
];
const dealers = picky.map(function(typeOfVehicles){
    return typeOfVehicles;
});
console.log(dealers);

const listy = [
    {vehicle: "Mercedes", year: "2023"},
    {vehicle: "BMW", year: "2022"},
    {vehicle: "Audi", year: "2021"}
];
const mapUserNames = (myArr) => {
    const userNameList = myArr.map((user) => {
        return user.vehicle;
    });
    return userNameList;
}
console.log(mapUserNames(listy));


//advanced format
const multiplier = (x, y) => {return x * y};
console.log(multiplier(2, 3));

//or
const multiplication = (x, y) => x * y;
console.log(multiplication(5, 2));

const squarer = (num) => num * num;
console.log(squarer(100));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(function(num){
    return num === 5;
});
console.log(filteredNumbers); 

//let's map over even numbers
const figures = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumbers = figures.map(function(digits){
    return digits % 2 === 0;
});
console.log(evenNumbers);

//let's filter out so that we can have even numbers in our filter
const figure = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const evenNumber = figure.filter(function(digits){
    return digits % 2 !== 0;
});
//continuation to double all numbers in the array
const doubledNumbers = (digits) => {
    const numberContainer = [];
    digits.forEach((n) => {
        const doubled = n * 2;
        numberContainer.push(doubled);
    });
    return numberContainer;
}
console.log(doubledNumbers(figure));

//setting default values in ES6
function numberMultiplier(x=5, y=6){//default values are set on x=5, etc...
    return x * y;
}
console.log(numberMultiplier());//notice that we didn't pass in values on our console.log but it took default values from our function

//Object oriented way using constraints
function Dog(year, breed){
    this.age = year;
    this.type = breed;
}
const skittles = new Dog(5, "German Shepherd");
console.log(skittles);

//NOW LET'S GET TO THE FUN PART, CHECK THE README.md FILE TO DO THE ASSIGNMENT