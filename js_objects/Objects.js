//JS: Objects
//Creating an Object

//An object is defined with braces

//Must contain key-value pairs.
//"age" is a key. Key are always string.
// 10 is a value paired to the "age" key
//values can be any type (primitive data types, arrays, functions, object)
const dog = {
    age: 10,
    firstName: "Benji",
    lastName: "BurlyBottom",
    bark: bark,
    toys: [ 
        "Amazon delivery box",
        "Pork Leg Bone",
        "Rubber Bunny",
        "Pink Torn Teddy Bear"
    ]
};

function bark() {
    return "Bork bork!!"
}

//To read values associated to a key in an object use the dot operator
console.log(dog.age); //10

//The dot operator is shortcut for using [] brackets to refer to a key
console.log(dog["age"]);//10

console.log(dog.bark());

//To create new key-value pairs or change the alue of an existing key-value pair:
dog.lastName = "Permberton";
dog["eyeColor"] = "Green"

//Keys when used with the dot operator cannot have special characters (e.g. spaces, commas,dashes, etc)
//dog.fur-color="brown"; //Illegal key name with .
dog["fur-color"] = "Brown" //OK to do with square brackets

//console.log(dog);

//Object utility functions

Object.keys(dog);  //Get all keys from object as an array
Object.values(dog); //get all values from an object as an array

//To merge objects together, use Object.assign().
//In other words, this will combine the key-value 
//pairs of all objects passed to Object.assign() into a single object
const a ={
    a: 1,
    b: 2,
    c: 3
};
const b = {
    z: 20,
    x: 30,
    y: 40
};

Object.assign(a,b); //merges a and b into one object

// This will mutate the first object passed meaning that
// all key-values will be added to object.
a; // { a: 1, b: 2, c: 3, z: 20, x: 30, y: 40 }

// To create new object with the key-value pairs of all
// passed in objects without mutating any of them, use
// an empty object as the first argument.
Object.assign({}, a, b, {
    j: 10,
    k: 20,
    l: 30
});

//When mergin objects same named keys will be overwritten
//where the conflicting key of the last objects being merged will have priority
const target = {
    a: 1,
    b: 2
};

const source = {
    b: 4,
    c: 5
}

const returnedTarget = Object.assign(target, source);

console.log(returnedTarget);

const specialCar = {
    "full name": "Lisa Tak",
    brand: "Tesla",
    makeYear: 2020,
    model: "malibu"
}

//See below on reading values of keys passed via expressions
console.log(specialCar["full" + " name"]); //lisa Tak
const c = "make";
const d = "Year";
console.log(specialCar[`${c}${d}`]); //2020'

// Use the for..in loop which will iterate over the keys
// of the object. Using the key, we can access its
// paired value with the [] notation.
console.log("Iterating over an object");
for (let key in dog) {
    console.log("key:", key, "value:", dog[key]);
}
