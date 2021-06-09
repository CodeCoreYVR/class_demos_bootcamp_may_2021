//Build a constructor that creates objects like:

//{
//     count: 0, //number
//     step: 1, //number
//     inc: method that increases count by step,
//     dec: method that decreases count by step
// }

function Counter(count, step=1){ //sets a default value if step not passed as argument
    this.count = count || 0; //set a default value of 0 if count not passed as argument
    this.step = step;

    this.inc = function(){
        this.count += this.step
        return this;
    }

    this.dec = function(){
        this.count -= this.step
        return this;
    }

    this.now = function(){
        return this.count
    }
}

const c1 = new Counter(); //this will jiust start with the default values
const c2 = new Counter(10, 5); //this will start with a count of 10, and will either inc or dec by step 5

c1.inc()
// console.log(c1)

c2.inc()
// console.log(c2)

c1.inc()
c1.inc()
c1.inc()
c1.inc()
c1.inc()
// console.log(c1)

c2.inc().inc().inc().inc() //this will get undefined
//if we want chained behaviour, we have to make sure that
//the methids what we're calling are returning 'this'
//because 'this' represents the object that owns the method

//now after adding 'return this':
console.log(c2.now())

//-------------But wait------------------------------>
const c3 = new Counter();
const c4 = new Counter();
const c5 = new Counter();
const c6 = new Counter();
const c7 = new Counter();
console.log(c3)
console.log(c4)
console.log(c5)
console.log(c6)
console.log(c7)



