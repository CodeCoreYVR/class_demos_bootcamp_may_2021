// 'use strict'
//not getting into this in Bootcamp, but basically restricts code from mutating global objects and other security things
//with regards to 'this' it basically protects you from accidentally changing the global object with 
//changing the 'this' value it refers to

// console.log(this) //standing alone will refer to global object or undefined if in strict mode 

//using 'this' in a function
function printThis(){
    console.log(this) //will refer to global object, or undefined in strict mode
}

//in a method
const obj = {
    printThis: function(){
        console.log(this) //will refer to the object this methid is in, the owner of the method
    }
}

obj.printThis()

function can(fn) {
    fn();
}

console.log('logging can...')
can(obj.printThis)

//--------------------bind------------------->

const bindedPrintThis = obj.printThis.bind(obj)

console.log('logging bindedPrintThis.....')
can(bindedPrintThis)

