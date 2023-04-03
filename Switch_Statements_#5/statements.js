//PRACTICE SECTION!!!

//switch statements basic structure
/**
 * switch(expression) {
 * case value1:
    * statement to be executed
    * match value1
    * break;
case value2:
    statement to be executed
    match value2
    break;
case value3:
    ...
    break;
default:
    break;
 * }
 */

const myFruit = "pine apple";
if(myFruit === "apple"){
    console.log("sweet! I love apples");
}else if(myFruit === "orange"){
    console.log("I love oranges");
}else{
    console.log("Am not in the mood for that fruit");
}

//let's simplify the above if-else statement to be a switch statement
const theFruit = "apple";
switch(theFruit) {
    case "apple":
        console.log("sweet");
        break;
    case "orange":
        console.log("nice");
        break;
    case "banana":
        console.log("used to this fruit");
        break;
    default:
        console.log("I can't get an alternative fruit that I would have loved");
        break;
}

//now let's adjust the swicth statement so that it can be a function
function fruitlogger(tunda){
   switch(tunda) {
    case "apple":
        console.log("sweet");
        break;
    case "orange":
        console.log("nice");
        break;
    case "banana":
        console.log("used to eating this fruit");
        break;
    default:
        console.log("I can't get an alternative fruit that I would have loved");
        break;
} 
}
fruitlogger("banana");

//we cna also adjust our swith statement so that we can have a bunch of cases using one statement
function carsAvailable(cars){
    switch(cars) {
    case "mercedes":
    case "bmw":
    case "volkswagen":
        console.log("I love german machines");
        break;
    case "range rover":
    case "dicovery":
    case "land rover":
        console.log("european machines are wonderful");
        break;
    case "toyota":
    case "isuzu":
        console.log("Japanese machines are affordable too");
        break;
    default:
        console.log("I don't think that I would prefer any other car");
        break;
    }
}
carsAvailable("bmw");
carsAvailable("dicovery");
carsAvailable("toyota");
carsAvailable("unkownn vehicle");