function allOccurencesOf(char, arr) {
    let countArr = [];
    
    for (let i=0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j].toLowerCase() === char.toLowerCase()) {
                count++;
            }
        }
        countArr.push(count)
    }
    return countArr;
}

console.log(allOccurencesOf('l', ['hello', 'world']))



