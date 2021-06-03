function allOccurencesOf(char, arr){
    let countArr = [];
    for(let val of arr){
        let count=0;
        for(let i=0; i<val.length; i++){
           if(val[i] === char) {
               count++
           }
        }
        countArr.push(count);
    }
    return countArr;
}

// console.log(allOccurencesOf('l', ['hello', 'world']))
console.log(allOccurencesOf('o', ['bob', 'likes', 'tea']))

