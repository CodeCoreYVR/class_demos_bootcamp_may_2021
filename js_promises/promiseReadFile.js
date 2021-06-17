const fs = require('fs');

//should return a promisified version of fs.readFile
// fs.readFile args:
//1. Path
//2. Options Object
//3. callback

function pReadFile(path, option) {
    return new Promise((res, rej) =>{
        fs.readFile(path, option, (err,data) => {
            if (err){
                rej(err);
            }
            res(data)
        })
    })
}

pReadFile('./files/page_1.md', 'utf8')
.then((data) => {
    console.log(data)
    return pReadFile('./files/page_2.md', 'utf8')
})
.then((data) => {
    console.log(data)
    return pReadFile('./files/page_3.md', 'utf8')
})
.then((data) => {
    console.log(data)
    return 'Hello World'
})
.then((data) => {
    console.log(data)
})
.catch((err) => { //we only need 1 .catch for any errors along the promise chain
    console.log(err)
})


