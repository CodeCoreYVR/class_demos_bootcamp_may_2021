function Counter(count, step=1){ //sets a default value if step not passed as argument
    this.count = count || 0; //set a default value of 0 if count not passed as argument
    this.step = step;
}

Counter.prototype.inc = function(){
    this.count += this.step
    return this;
}

Counter.prototype.dec = function(){
    this.count -= this.step
    return this;
}

Counter.prototype.now = function(){
    return this.count;
}

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

c3.inc().inc().inc().inc().inc().inc().inc().now()
console.log(c3)



