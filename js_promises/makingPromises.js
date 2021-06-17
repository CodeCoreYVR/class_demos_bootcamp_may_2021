// const waitOneSecond = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('waited one second')
//         // resolve('hello world');
//         reject('goodbye world')
//     }, 2000)
// })

// //.then is fired off if the promise is succesful with resolve

// waitOneSecond.then((value) => {
//     console.log('good value')
//     console.log(value)
// })
// // .catch is triggered if promise rejects
// .catch((value) => {
//     console.log('failed')
//     console.log(value)
// })

// console.log('a')
// console.log('b')

//Normally you would not just create an instance of a Promise, you would rather
//create a function that returns an instance of a Promise
//So that way we can reuse the promise
//So, we are going to wrap above into a function, and make it a little more dynamic:

function wait(n) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(n);
            rej();
        }, n)
    })
}

console.time('t');

wait(3000)
.then(()=> {
    console.log('waited 3 seconds')
    console.timeLog('t'); //this logs out how much time we really waited
}).catch(()=>{
    console.log('failed')
})

wait(2000)
.then(()=> {
    console.log('waited 2 seconds')
    console.timeLog('t');
}).catch(()=>{
    console.log('failed')
})

