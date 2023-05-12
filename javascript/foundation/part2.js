/* ----- This ----- */

const person = {
    fName: 'John',
    printPersonName: function(){
        console.log(this.fName);
    },
}

function printName() {
    console.log(this); // Window global object
    console.log(this.fName); // Undefined
    console.log(person.fName); // John
}
printName();
person.printPersonName(); // John

/* ---- CALL ---- */

const honda = {
    brand: 'honda'
}

const audi = {
    brand: 'audi'
}

function getBrand(prefix){
    console.log(prefix + this.brand);
}

// getBrand("honda")
getBrand.call(honda);
getBrand.call(honda, "it is a ");

getBrand.call(audi, "it is a ");

/* ---- APPLY ---- */
// Only accepts array as an argument
getBrand.apply(honda, ["It's a "]);
getBrand.apply(audi, ["It's a "]);


