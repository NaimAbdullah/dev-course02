
// var zooAnimals = ["Rhino", "Zebra", "Giraffe", "Owl"];
// console.log(zooAnimals[2]);
// zooAnimals.forEach(animal => console.log(animal));


// var fruits =["Banana", "Strawberry", "Blueberry"];
// var favFruit = prompt("whats your favorite fruits?");
// fruits.push(favFruit);
// console.log(fruits);

/*
var gandalf = {
    "real name": "Gandalf",
    "age (est)": 11000,
    "race": "Maia"
};

// console.log(gandalf.race);
// console.log(gandalf["race"]);

gandalf.race = "New Race";
gandalf.newProp = "New Prop";
delete gandalf.race;
delete gandalf["real name"];

console.log(gandalf);
*/

var movieCharacters = ["Batman", "Joker"];
movieCharacters.push("Gandalf");
console.log(movieCharacters);

var user = {
    "name": "John",
    "lastName": "Doe",
};

user.name = "Chris";
delete user.lastName;
user.interests = ["reading", "singing"];

console.log(user.interests);

function product(a, b, c, d){
    console.log(a * b * c * d);
}

product(1, 2, 3, 4);

function names(fName, mName, lName){
    // return alert("Hello " + fName + " " + mName + " " + lName);
    // return alert(`Hello ${fName} ${mName} ${lName}`);
}

names("Naim", "R", "Abdullah");

var globalVar = "global";

function outerFunc() {
    var outerVar = "outer";
    console.log(globalVar);
    console.log(outerVar);
    function innerFunction() {
        var innerVar = "inner";
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
}

// console.log(outerVar);
outerFunc();

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}

console.log(percentageOfWorld1(1441) + "%");
