const wait = require('./wait');

// const red = wait(1000, 'red');

// red.then((val) => console.log(val)); //normally a promise can only resolve or reject once

//We can use Promise.resolve to revisit that resolve again
//Also, for nested promises, you can call a specific resolve
//Useful for rereading a resolved promise
// Promise.resolve(red)
// .then((val) => console.log(val))

//Parallel vs Sequence

//Running promises in parallel
// console.time('timerA')
// const red = wait(5000, 'red')
// const blue = wait(1000, 'blue')
// const green = wait(1000, 'green')

// red.then((val) => {
//     console.log(val)
//     console.timeLog('timerA')
// })

// blue.then((val) => {
//     console.log(val)
//     console.timeLog('timerA')
// })

// green.then((val) => {
//     console.log(val)
//     console.timeLog('timerA')
// })

//Promise.all
//allows you to run an array of promises inparallel
//it returns a promise that resolves to an array of resolved values
// if any of the promises within the array of promises rejects the the entire thing will reject

console.time('timerB')

Promise.all([ //promise.all will wait until every promise in array is done
    wait(1000, 'purple'),
    wait(1000, 'monkeys'),
    wait(1000, 'orange') 
]).then((val) => {
    console.log(val); //val will be an array of all the resolved values
    console.timeEnd('timerB')
}).catch((err) => { //if you don;t have a catch if an error happened, it will close your app and take you out
    console.log(err);
})

// sequence: promise is invoked only after the previous one is finished
// console.time('timerC')
// wait(1000, 'dog')
// .then(val => {
//     console.log(val);
//     console.timeLog('timerC')
//     return wait(1000, 'cat')
// })
// .then(val => {
//     console.log(val);
//     console.timeLog('timerC')
//     return wait(1000, 'bird')
// })
// .then(val => {
//     console.log(val);
//     console.timeLog('timerC')
// })

//Promise.race
Promise.race([
    wait(5000, 'Seabiscuit'),
    wait(2000, 'Secretariat'),
    wait(3000, 'Kelso')
])
.then(val => {
    console.log(val)
})
.catch((err) => {
    console.log(err)
})

