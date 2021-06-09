
//class is created with special keyword 'class'
class Dog{
    //special method 'constructor' for classes
    //this is what is fired off when we create a new instance of Dog
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    bark(){
        console.log(`${this.name}: woof!`)
    }

}

const lucky = new Dog('lucky', 2)
console.log(lucky)

lucky.bark()

class DoggoFighter extends Dog { //extends enables the inheritance of the parent class constructor, in this case Dog
    constructor(name,age, specialAbility){
        super(name, age)
        // this.name = name;
        // this.age = age;
        this.specialAbility = specialAbility;
    }

    useSpecial(){
        console.log(`${this.name} uses the special ability: ${this.specialAbility}`)
    }
        
}

const rufus = new DoggoFighter('rufus', 25, 'hide mode')
rufus.useSpecial()
rufus.bark()





