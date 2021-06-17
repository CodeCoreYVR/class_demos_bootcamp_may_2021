function delay(ms, val){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, ms)
    })
}


delay(5000, 'blue').then(val => {
    console.log(val)
    return delay(5000, 'red')
}).then(val => {
    console.log(val)
    return delay(3000, 'purple')
}).then(val => {
    console.log(val)
    return delay(2000, 'green')
}).then(val => {
    console.log(val)
}).catch(err => {
    console.log(`Error ${err}`)
})

