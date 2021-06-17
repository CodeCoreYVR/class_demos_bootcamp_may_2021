function wait(n, val) { //time n to wait, and val to resolve
    return new Promise((res, rej) => {
        if(val === 'monkeys') {
            rej('no monkeys')
        }
        setTimeout(() => {
            res(val);   
        }, n)
    })
}

module.exports = wait;
