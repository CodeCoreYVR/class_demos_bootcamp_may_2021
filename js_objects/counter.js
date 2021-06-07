//how to use Keyword "THIS"

//"this" is used inside of methods to get the object that owns the method

//Demo: Counter
//Excercise: Configurable step, chainable counter
const counter = {
    count: 0,
    step: 1,
    setStep(step) {
        this.step = step;
        return this;
    },
    inc() {
        this.count += this.step;
        // to make methods chainable, return 'this'. 'This' is the object itself meaning 
        // that if it is returned from a method, we'll be able to follow the method call
        // with another call or use a property
        return this;
    },
    dec() {
        this.count -= this.step;
        return this;
    },
    set(count) {
        this.count = count;
        return this;
    },
    now() {
        return this.count;
    }
}
console.log("Counter: ");
counter.setStep(5);
counter.inc();
counter.inc();
counter.inc();
console.log(counter.now());
counter.setStep(1);
counter.dec();
console.log(counter.now());

/*Simple counter object without setStep(n); above example is including the configurable steps exercise as well
const counter = {
  currentCount: 0,
  set: function(n) {
    this.currentCount = n;
  },
  inc: function() {
    this.currentCount++;
  },
  dec: function() {
    this.currentCount--;
  },
  now: function() {
    console.log(this.currentCount);
  }
}
counter.now(); // prints 0;
counter.inc(); // increases the currentCount property by 1;
counter.now(); // prints 1;
counter.dec(); // decreases the currentCount property by 1;
counter.now(); // prints 0;
counter.set(5000); // sets the currentCount property to 5000;
counter.now(); // prints 5000;*/

