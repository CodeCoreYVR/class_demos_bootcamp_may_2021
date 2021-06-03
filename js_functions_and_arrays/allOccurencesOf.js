function occurencesOf(char, str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (char === str[i]){
            count += 1
        }
    }
    return count
}

console.log(occurencesOf("l", "hello world"))

console.log(occurencesOf(" ", "bob likes tea"))

