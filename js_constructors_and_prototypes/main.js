//Objects review:

const guest1 = {
    name: 'Steph',
    email: 'steph@example.com',
    visitTime: '9:10am',
    phone: '778-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime}`)
    }
}

const guest2 = {
    name: 'Tom',
    email: 'tom@example.com',
    visitTime: '12:10am',
    phone: '555-555-5555',
    printGuest: function(){
        console.log(`${this.name} visited us at ${this.visitTime}`)
    }
}

//One way of copying an object:
const guest3 = Object.assign({},guest1)
// console.log(guest3)

guest3.name = 'Sally'

// console.log(guest3)

//---------Creating a Constructor------------------->

//Constructors are functions that are used to create objects
//Convention is to capitalize constructor names
//the argumanets constructor fantion take are the properties the constructor will have

// function Guest(name, email, visitTime, phone){
//     this.name = name;
//     this.email = email;
//     this.visitTime = visitTime;
//     this.phone = phone;
//     this.printGuest = function(){
//         console.log(`${this.name} visited us at ${this.visitTime}`) 
//     }
// }

//We can call this function as many times as we like,
//depending on how many guests we need

//To create an istance of a new object with the constructor, we use the 'new' keyword
const g1 = new Guest('Sam', 'sam@gmail.com', '11am', '555-222-1111')//new instance of Guest constructor
// console.log(g1)

const g2 = new Guest('Kitty', 'kitty@gmail.com', '8am', '555-222-2222')//new instance of Guest constructor
// console.log(g2)

//Method to check if something is an instance of something
// console.log(guest2 instanceof Guest) //false
// console.log(g2 instanceof Guest) //true

//The constructor function is still a function, just with the 'this' keyword
//console.log(Guest('Sam', 'sam@gmail.com','11am','555-555-5555'))
//it will return undefined because it currently has no return statement
//but we should not fire off the constructor this way, because 'this' will refer to the global object

//-------------Add a return keyword to constructor function

function Guest(name, email, visitTime, phone){
    this.name = name;
    this.email = email;
    this.visitTime = visitTime;
    this.phone = phone;
    this.printGuest = function(){
        console.log(`${this.name} visited us at ${this.visitTime}`) 
    }
    return "Don't fire off this constructor function as a regular function"
}

