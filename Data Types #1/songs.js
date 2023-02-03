/*var shouldBeTrue = true;
var shouldbeNull = null;

if (shouldbeNull === true) {
    console.log("This var is true");
} else {
    console.log("This var is false");
}*/

//objects
/*var myPlayList = {
    firstName: "Chris",
    lastName: "Rock",
    title: "Doodle",
    dateOfBirth: "12/30/2021"
};

console.log(myPlayList.lastName);*/

/*var donut = {
    type: "strawberry",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayHi: function() {
        console.log("Hi");
    }
}

donut.sayHi();*/

/*var donut = {
    type: "strawberry",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayType: function() {
        console.log("Type: " + this.type);
    },
    showSweetness: function() {
        console.log("The sweetness level is " + this.sweetness + "/10"); 
    }
}

donut.showSweetness();*/

//let's use deconstruction method of OOP
/*function Donut(type, glazed, sweetness, hasChocolate, sayType, showSweetness) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function() {
        console.log("The type is " + this.sayType);
    };
    this.showSweetness = function(){
        console.log("Its sweetness level is rated " + this.showSweetness + "/10");
    };
}

var coco = new Donut("coconut", false, 8, true);
console.log(coco);*/

//Arrays
/*var arr = ["doodle", 1, 2, 3, true, false, "kaimenyi"];
console.log(arr);

var aru = ["doodle", 1, 2, 3, true, false, "kaimenyi"];
aru.pop();
console.log(aru);

var ari = ["doodle", 1, 2, 3, true, false, "kaimenyi"];
var lastName = ari.pop();
console.log(lastName);*/

/*var ara = ["doodle", 1, 2, 3, true, false, "kaimenyi"];
ara.push("kinsley", 4, 5, "Graig");
console.log(ara);

var aru = ["doodle", 1, 2, 3, true, false, "kaimenyi"];
aru.push(["kins", 6, 7, "Gr"]);
console.log(aru[7][0]);*/ //accessing kins on array 7

//sorting the arrays in alphabetical order
/*var order = ["b", "c", "f", "m", "p", "z", "a", "e", "x", "o", "q", "y"];
var sortedArray = order.sort();
sortedArray.reverse();
console.log(sortedArray);*/

//concating arrays together
/*var concattedArray = ara.concat(aru);
//lets start slicing the array
var slicedArray = concattedArray.slice(10)//so we have started slicing from index 10
console.log(slicedArray);*/