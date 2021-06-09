//-------------------Constructor with prototype---------------->

function Dog(name){
    this.name = name;
}

Dog.prototype.bark = function (){
    console.log(`${this.name}: woof!`)
}

const rufus = new Dog('rufus')
const winston = new Dog('winston')

Dog.prototype.fetch = function (){
    console.log(`${this.name} is fetching.....`)
}

//With JS you can overrite the prototype method for specific instances
//But if instance does not have the method, it will search for it in the prototype chain
winston.bark = function (){
    console.log(`${this.name}: bork!`)
}

winston.bark()


