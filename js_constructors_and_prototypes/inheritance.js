function Dog(name){
    this.name = name
}

Dog.prototype.bark = function (){
    console.log(`${this.name}: woof!`)
}

const rufus = new Dog('rufus')
const winston = new Dog('winston')

//Brand new constructor that will inherit from the Dog constructor
//It will have its own unique properties and abilities
function DoggoFighter(name,specialAbility){
    this.name = name;
    this.specialAbility = specialAbility;
}

DoggoFighter.prototype.useSpecial = function () {
    console.log(`${this.name} uses the special ability: ${this.specialAbility}`)
}

const doge = new DoggoFighter('doge', 'ninja attack')
doge.useSpecial() //works

//------------How do we inherit with prototypes?----------->

//We want to do something like this:
// DoggoFighter.prototype.__proto__ = Dog.prototype

//instead, to inherit from other constructors, we do this:

Object.setPrototypeOf(DoggoFighter.prototype., Dog.prototype)  
//what you want to set, what you want to set it to
//child first, parent second
doge.bark()

// doge.__proto__ is still === DoggoFighter.prototype
// but doge.__proto__.__proto__ is now Dog.prototype



