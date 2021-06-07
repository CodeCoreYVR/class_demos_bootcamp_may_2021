// Exercise: Character Counts

function charCounts(str) {
    const counts = {};

    for (let char of str.toLowerCase()) {
        if (counts[char]) {
            counts[char] += 1;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

const myStr = "What is this?";

console.log(charCounts(myStr));



// Solution: using only for loop
/*const phrase = process.argv[2];
let chars = phrase.split('');
console.log(chars);
const counterObject = {};

for (let i = 0; i < chars.length; i++) {
    let character = chars[i].toLowerCase();
    counterObject.hasOwnProperty(character) ?
        counterObject[character] = counterObject[character] + 1 :
        counterObject[character] = 1;
}

console.log(counterObject);*/

// Solution: using function
const characterCounts = (phrase) => {
    let chars = phrase.split('');
    const counterObject = {};

    for (let i = 0; i < chars.length; i++) {
        let character = chars[i].toLowerCase();
        counterObject.hasOwnProperty(character) ?
            counterObject[character] = counterObject[character] + 1 :
            counterObject[character] = 1;
    }

    return counterObject;
};

console.log(characterCounts("An archer"));
