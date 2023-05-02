console.log("The Fortune Teller");

var children = 5;
var partner = "Ali";
var area = "Chicago";
var job = "QA";

console.log("You will be a " + job + " in " + area + ", and married to " + partner + " with " + children + " kids.");


console.log("");
console.log("The Age Calculator");

var birthYear = 1999;
var futureYear = 2056;
var calculatedAge = futureYear - birthYear;

console.log("I will be either " + (--calculatedAge) + " or " + (++calculatedAge) + " in " + futureYear);


console.log("");
console.log("The lifetime Supply Calculator");

var currentAge = 23;
var maxAge = 80;
var daily = 5;
var total = (maxAge - currentAge) * daily;

console.log("You will need " + total + " of that item to last you until the ripe old age of " + maxAge);


console.log("");
console.log("The Geometrizer");

var radius = 10;
var circumference = (2 * 3.14159) * radius;
var area = 3.14159 * (radius * radius);

console.log("The circumference is " + circumference);
console.log("The area is " + area);


console.log("");
console.log("The Temperature Converter");

var celsius = 16;
var fahrenheit = 60.8;
console.log(celsius + "°C is " + ((1.8 * celsius) + 32) + "°F")
console.log(fahrenheit + "°F is " + ((fahrenheit - 32) / 1.8) + "°C")