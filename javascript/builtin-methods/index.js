console.log("--- NUmbers Methods ---");

// toString
var num = 10;
console.log(num.toString());
console.log(typeof num.toString());

// toFixed
var num2 = 10.102;
console.log(num2.toFixed());
console.log(num2.toFixed(2));
console.log(num2.toFixed(3));
console.log(typeof num2.toFixed());

const isNumber = "fafe";
if(isNaN(isNumber)) {
    console.log("Yes it is not a number");
}

// String Methods

const sent = "Hello World!";
console.log(sent.length);

const sent1 = "This phone is an old phone"
console.log(sent1.indexOf('phone'));
console.log(sent1.indexOf('i'));
console.log(sent1.lastIndexOf('phone'));

// replace
console.log(sent1.replace("phone", 'iphone'));
console.log(sent1.replaceAll("phone", 'iphone'));

// concat
console.log(sent.concat(" ", sent1));
console.log(sent + " " + sent1);
console.log(`${sent} ${sent1}`);

console.log(sent1.charAt(8));

const sent2 = 'hello hey';
const sent3 = 'hello | hey | $ yes';
console.log(sent2.split());
console.log(sent2.split(""));
console.log(sent2.split(" "));
console.log(sent3.split("|"));
console.log(sent3.split("$"));

// slice
console.log(sent2.slice()); // hello hey
console.log(sent2.slice(2)); // llo hey
console.log(sent2.slice(5, 0)); // hello

// substring
console.log(sent2.substring(5, 0)); // hello

// Array Methods
const fruits = ['Apple', 'Banana', 'Kiwi', 'Strawberry', 'Orange'];

console.log(typeof fruits);
console.log(Array.isArray(fruits)); //true

// length and toString
console.log(fruits.length);
console.log(fruits.toString());

// join
console.log(fruits.join());
console.log(fruits.join("-"));
console.log(fruits.join("%"));
console.log(fruits.join("$"));
console.log(fruits.join(" "));
console.log(typeof fruits.join(" "));

console.log("hello world".split(" ").join("-"));

console.log(fruits.pop());
console.log(fruits);
fruits.push("Orange");
console.log(fruits);

