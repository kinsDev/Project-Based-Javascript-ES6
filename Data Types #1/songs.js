//PRACTISING VARIABLES AND DATA TYPES
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



//PROJECT QUESTION FOR JS VARIABLES AND DATA TYPES
/**
 * What's your favorite song?
 * Think of all the attributes that you could use to describe that song. That is: all of it's details or "meta-data". These are attributes like "Artist", "Year Released", "Genre", "Duration", etc. Think of as many different characteristics as you can.
 * In your text editor, create an empty file and name it song.js
 * Now, within that file, list all of the attributes of the song, one after another, by creating variables for each attribute, and giving each variable a value
 * Give each variable its own line. Then, after you have listed the variables, console.log them.
 */



//NOW LET'S START DOING THE PROJECT

var favoriteSongName = "still the one";
var singer = "sauti sol";
var details  = {
    duration: "3:00" + " minutes",
    album: "loved her",
    genre: "bongo",
    playlist: "amazing"
};

var spotifyPlays = "100,000";
var applePlays = "96, 500";

//song features
var songFeatures = [
    {
        yearReleased: 2018,
        producers: "mseto",
        recorded: 2017
    },
    {
        recordLabels: "mseto East Africa",
        sales: 10000000,
        tours: 12,
        trendingNo: "Numnber 1 In Kenya for a week after release"
    },
];

var versions = [
    {
        language: "Swahili",
        title: "Still loved",
    },
    {
        language: "Chinese Mandarin",
        title: "Try everything",
    },
    {
        language: "Hindi",
        title: "I will not Give up",
    },
    {
        language: "Korean",
        title: "Do your best",
    },
    {
        language: "Ukrainian",
        title: "I won't give up",
    },
];

///links to access the songs
var links = {
    spotify:"https://spotify.com",
    youtube: "https://youtube.com",
    applemusic: "https://apple.com"
};

var type = {
    songType: "love song",
    vibe: "high vibe",
    wRizz: "can be used"
}

function Stats(songRating, songRythm, songWorth, songPopularity) {
    this.songRating = songRating,
    this.songRythm = songRythm,
    this.songWorth = songWorth,
    this.songPopularity  = songPopularity
}
var theSong = new Stats("9 " + "8.8 " + "9 " + "10 " + "/10");

console.log("Name of my favorite song is " + favoriteSongName);
console.log("The singer is " + singer);
console.log("Here are a few details of the song listed below " + details);
console.log("Total plays on spotify are " + spotifyPlays);
console.log("The total plays of the song on apple music are " + applePlays);
console.log("Here are some song features that you may be interested in " + songFeatures[0]);
console.log("More features that you may not need " + songFeatures[1]);
console.log("The song is available in " + versions);
console.log("This is actually the class that my favorite song falls in " + type);
console.log("Click on the links provided below to access the song. Enjoooooooooy! " + links);
console.log(theSong);
