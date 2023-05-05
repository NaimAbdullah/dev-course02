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