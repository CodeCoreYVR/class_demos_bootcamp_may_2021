function wordCounts(sentence) {

    const counts = {};

    for (let word of sentence.split(" ")) {
        if(counts[word]) {
            // When using brackets to create a key-value pair,
            // you are allowed to use an expression inside of
            // the brackets. The value that is returned from
            // the expression will be used as a key.

            // In our case, the expression is the variable
            // `word` which evaluates to the current word in
            // the iteration.
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }
    return counts;
}

const str = "this is this and that is that";
console.log(wordCounts(str));

//Altenate way of doing the above using arrow notation

/*function wordCount(string) {
    const strings = string.split(" "); //getting an array of all the words
    const wordMap = {}; //intializing an empty object

    strings.forEach((string) => {
        if (wordMap[string]) { //look for this key in our wordMap object
            //if that word is not undefined (meaning its at least 1) then increment
            wordMap[string] += 1;
        } else {
            //if that word is undefined then give it the value of 1
            wordMap[string] = 1;
        }
    })
    return wordMap;
}
console.log(wordCount("this is this and that is that")); */

// Solution: using for loop
/*const sentence = process.argv[2];
let words = sentence.split(' ');
const counterObject = {};

for (let i = 0; i < words.length; i++) {
    counterObject.hasOwnProperty(words[i]) ?
        counterObject[words[i]] = counterObject[words[i]] + 1 :
        counterObject[words[i]] = 1;
}

console.log(counterObject);*/




