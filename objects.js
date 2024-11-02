let person = {
    name: "Mayank",
    age: 21,
    country: "India"
};

console.log(person.name);      // Mayank
console.log(person.age);       // 21
console.log(person['country']);      // India
//we can access functions using dot and square brackets
//We can also dynamically add, modify and delete the properties in the objects.
let person1 = {
    name: "Mayank",
    age: 21,
    country: "India"
};

// Adding a property
person1.isSleeping = false;

// Modifying a property
person1.age = 22;

// Deleting a property
delete person1.country;

console.log(person1);

// Output : { name: 'Mayank', age: 22, isSleeping: false }

//Objects can also contain functions as properties. These functions are often referred to as methods.

let person2 = {
    name: "Mayank",
    age: 21,
    country: "India",
    message: function () {
        console.log("Hello, my name is " + this.name);
    }
};

person2.message();

// Output: Hello, my name is John