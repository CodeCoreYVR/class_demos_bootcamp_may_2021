//To get everything from process.arv
console.log(process.argv);

//To get specific arguments after "node" and "scriptWithArgs.js"
const firstArg = process.argv[2]
const secondArg = process.argv[3]

console.log("First choice:", firstArg)
console.log(`Second choice: ${secondArg}`)




