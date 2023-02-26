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

/*Re-practicing
function sayHi(){
    console.log("Hello there");
}
sayHi();

const myName = "Kinsley Kaimenyi";
function yourName(){
    console.log("What is your name? " + myName);
}
yourName();

function user(arg){
    console.log("This is user " + arg);
}
user("Kinsley");

function userDetails(firstName, lastName, age){
    console.log("I am " + firstName + " " + lastName + " of " + age + " years old." );
}
userDetails("Kinsley", "Kaimenyi", 21);

function numberDoubler(num){
    console.log(num * 2);
}
numberDoubler(10);

function addInt(num1, num2){
    console.log(num1 + num2);
}
addInt(23, 23);

function numberMultiplier(num){
    return num * 3;
}
console.log(numberMultiplier(50));

const doubleNumerSeven = theFigure(7);
const doubleNumberEight = theFigure(8);

function theFigure(num){
    const multipliedResult = num * 2;
    return multipliedResult;
}
function addFigures(num1, num2){
    const addedFigures = num1 + num2;
    return addedFigures;
}
console.log(addFigures(doubleNumberEight, doubleNumerSeven));

const firstName = theName("Kinsley");
const lastName = theName("Kaimenyi");

function theName(name){
    console.log("My name is " + name);
}
theName("Gitonga");

let myNumber = 200;
function adding(num){
    return num + 100;
}
console.log(adding(myNumber));

//lets square and multiply
function squareAndMultiply(num1, num2){
    function square(x){
        return x * x;
    }
    return square(num1) * square(num2);
}
console.log(squareAndMultiply(5, 5));

function nameFormatter(firstName, lastName, age){
    function formatted(arg1, arg2){
        return arg1 + " " + arg2;
    }
    const formattedNames = formatted(firstName, lastName)
    return formattedNames;
}
console.log(nameFormatter("Kinsley ", "Kaimenyi"));

// I only took the fruits that I was interested in, that is fruit 1 - 4
function formatFruits(fruit1, fruit2, fruit3, fruit4){
    function availableFruits(f1, f2, f3){
        return f1 + " " + f2 + " " + f3 ;
    }
    const fruitsBuy = availableFruits(fruit1, fruit2, fruit3);
    return fruitsBuy;
}
console.log(formatFruits("mango ", "orange ", "apple "));

function listedCars(car1, car2){
    function carsAvailable(arg1, arg2){
        return arg1 + " " + arg2;
    }
    const letMeBuy = carsAvailable(car1, car2);
    return letMeBuy;
}
console.log(listedCars("Bugatti ", "RangeRover"));

const favoriteCountries = [
    {name: "Kenya", city: "Nairobi"},
    {name: "SouthAfrica", city: "Capetown"},
    {name: "Germany", city: "Berlin"},
    {name: "France", city: "Paris"},
    {name: "Egypt", city: "Cairo"},
    {name: "Ugande", city: "Kampala"}
]
const listOfCountries = favoriteCountries.map(function(countries){
    return countries;
});
console.log(listOfCountries);

const johnWickSequel = [
    {name:"John Wick 1"},
    {name:"John Wick 2"},
    {name:"John Wick 3"},
    {name:"John Wick 4 - To be released soon btw"}
]
const listOutTheJohnWickSequel = johnWickSequel.map(function(listy){
    return listy.name;
})
console.log(listOutTheJohnWickSequel);

//filter numbers from an array
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const filteredNumber = myArray.filter(function(num){
    return num === 5;
});
console.log(filteredNumber);
//checkout even numbers in an array
const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const listOfEvenNumbers = evenNumbers.filter(function(num){
    return num % 2 === 0;
});
console.log(listOfEvenNumbers);

const oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const odd = oddNumbers.filter(function(arg){
    return arg % 2 === 1;
});
console.log(odd);
//double all numbers in an array
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const resultNumbers = integers.map(function(arg){
    return arg * 2;
});
console.log(resultNumbers);
//set default values in an array
function vary(x = 5, y = 5){
    return x * y;
}
console.log(vary());
*/


//NOW LET'S GET TO THE FUN PART, CHECK THE README.md FILE TO DO THE ASSIGNMENT
/**Project Man Mortality Checker */
function name(arg){
    if(typeof arg === "string" || typeof arg === "number"){
        return true;
    }

    const menMortal = ["adam", "abraham", "isaac", "jacob", 1234];
    if(menMortal.icludes(arg)){
        return true;
    } else{
        return false;
    }
}
console.log(name("Kinsley"));