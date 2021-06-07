// What this keyword actually means?
// A real life scenario, imagine you are in a car and you say this car is fast,
// we don’t say the car is fast or car is fast, we might say oh God this is so fast.
// In javascript when you are inside a function, an object or a class this refers to them

// This inside Global scope (window)


// Some examples:

this.foo = 'bar'; // foo property will be added to global object (window) and that's because we are inside the global scope
console.log(this.foo); // that also gives us bar because we are inside global scope

// another example
this.person = {
  name: 'Roman',
  age: 27,
  occupation: 'Engineer',
  // use the below function after explaining this in object
  // print() { console.log(`${this.name} is ${this.age} years old`)}
}

console.log(this.person /* or we can use window.person because we are in global scope */);


// This inside an Object
// examples

const person = {
  name: 'Helin',
  age: 22,
  print() { console.log(`${this.name} is ${this.age} years old`)}
}

// This inside a function
// Example
// suppose we have property name and age directly on global object
this.name = 'Aryan'; // window.name = 'Aryan';
this.age = 33; // window.age = 33;
const printMe = function() { console.log(`${this.name} is ${this.age} years old`)}

// Q/ Can we use printMe(); ?
// A/ Yes we can but, it's not a good practise, we should access global scope inside the function. if we use 'use strict' this will throw an error since this won't refer to gloabl scope anymore

// Q/ Can we use this.printMe() ?
// No We can't becaue we didn't use this (global scope) to create it

// Q/ So, what is the solution?
// using 'call'
// we can use  printMe.call(ourObject); and that way it will refer to the object that we specify examples or we can bind it printMe.bind(ourObject)()

/*const myObject = {
  name: 'Lavan',
  age: 29
}

const printMe= function() { console.log(`${this.name} is ${this.age} years old`)}

// this with a constructor. Don't worry about this just yet...we will use this in another lecture series
Object.prototype.printMe = function() { console.log(`${this.name} is ${this.age} years old`) };
// this with classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printMe() { console.log(`${this.name} is ${this.age} years old`) }
}

const person1 = new Person('Lavin', 15);
person1.printMe(); // we will get the same result */
