
console.log("----------------------------");
console.log("The Recipe Card");
console.log("----------------------------");

const favRecipe = {
    "title" : "Mole",
    "serving" : 2,
    "ingredients": ["Cinnamon", "Cumin", "Cocoa"]
}

console.log("- " + favRecipe.title);
console.log((`- Serves: ${favRecipe.serving}`));
console.log("- Ingredients:");
favRecipe.ingredients.forEach(ingredient => console.log("- " + ingredient));

console.log("----------------------------");
console.log("The Reading List");
console.log("----------------------------");

const books = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true},
    {title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false},
    {title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: true},
    {title: "1984", author: "George Orwell", alreadyRead: false}
];

for (let book of books) {
    console.log(`${book.title} by ${book.author}`);
    
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}.`);
    }
}

console.log("----------------------------");
console.log("Your top choices");
console.log("----------------------------");

const topChoices = ["Blue", "Red", "Green"];

topChoices.forEach((choice, index) => {
    console.log(`My #${index + 1} choice is ${choice}.`);
});

console.log("----------------------------");
console.log("What number's bigger?");
console.log("----------------------------");

function greaterNum (num1, num2) {
    let biggerNum;
    if (num1 > num2) {
        biggerNum = num1;
    } else {
        biggerNum = num2;
    }
    
    console.log(`The greater number of ${num1} and ${num2} is ${biggerNum}`);
}

greaterNum(14, 10)
greaterNum(1, 49)

console.log("----------------------------");
console.log("The World Translator");
console.log("----------------------------");

function helloWorld (lang) {

    if (lang == 'es'){
        return 'Hola, Mundo'
    }
    else if (lang == 'de'){
        return 'Hallo Welt'
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('es'))
console.log(helloWorld('de'))
console.log(helloWorld('en'))

console.log("----------------------------");
console.log("The Grade Assigner");
console.log("----------------------------");

function assignGrade (grade){
  if (grade >= 90){
      return 'A'
    } else if (grade >=80) {
        return 'B'
    } else if (grade >=70) {
        return 'C'
    } else if (grade >=60) {
        return 'D'
    } else if (grade < 60) {
        return 'F'
    }
}

console.log(assignGrade(90))
console.log(assignGrade(82))
console.log(assignGrade(74))
console.log(assignGrade(60))
console.log(assignGrade(51))

console.log("----------------------------");
console.log("The Pluralizer");
console.log("----------------------------");

function pluralize (noun, num) {
    if (num > 1){
        return  `${num} ${noun + 's'}`
    } else {
        return num + " " + noun
    }
}

console.log(pluralize('cat', 5))
console.log(pluralize('dog', 5))
console.log(pluralize('cat', 1))
console.log(pluralize('dog', 1))

console.log("----------------------------");
console.log("The Fortune Teller");
console.log("----------------------------");

function tellFortune(child, partner, location, job){
  return  `You will be a ${job} in ${location}, and married to ${partner} with ${child} kids.`
}

console.log(tellFortune(2, 'Naim', 'Chicago','QA'));
console.log(tellFortune(4, 'Ahmad', 'California','Developer'));
console.log(tellFortune(3, 'Rami', 'Illinois','Tester'));

console.log("----------------------------");
console.log("The Puppy Age Calculator");
console.log("----------------------------");

function calculateDogAge(puppyAge){
  return `Your doggie is ${puppyAge*7} years old in dog years! Which is ${puppyAge} in human years!`
}

console.log(calculateDogAge(12));
console.log(calculateDogAge(4));
console.log(calculateDogAge(2));

console.log("----------------------------");
console.log("The Lifetime Supply Calculator");
console.log("----------------------------");

function calculateSupply(age, amountPerDay){
  const maxAge = 100;
  return `You will need ${(maxAge-age)*365*amountPerDay} to last you until the ripe age of ${maxAge}`
}

console.log(calculateSupply(99, 100));
console.log(calculateSupply(20, 20));
console.log(calculateSupply(50, 80));

console.log("----------------------------");
console.log("The Geometrizer");
console.log("----------------------------");

function calcCircumfrence(radius){
  pi = Math.PI;
  var circumference = 2*pi*radius;
  return `The circumgerence is ${circumference}`
}

function calcArea(radius){
  var areaOfCircle = pi * radius * radius;
  return `The area is ${areaOfCircle}`
}

console.log(calcCircumfrence(4));
console.log(calcArea(4));

console.log("----------------------------");
console.log("The Temperature Converter");
console.log("----------------------------");

function celsiusToFahrenheit(celsTemp){
  var calcFahrenheit = celsTemp * 9 / 5 + 32;
  return `${celsTemp}C is ${calcFahrenheit}F`
}

function fahrenheitToCelsius(fehrTemp){
  var calcCel = (5/9) * (fehrTemp - 32);
  return `${fehrTemp}F is ${calcCel}C`
}

console.log(celsiusToFahrenheit(55));
console.log(fahrenheitToCelsius(100));