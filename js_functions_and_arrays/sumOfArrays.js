//arr represents the argument passed to the function as an array

function sum(arr){
    let total=0;
    for(let value of arr){
        if (typeof value === 'number'){
            total += value // total = total + value
        }
    }
    return total;
}

// console.log(sum([1,2,3,4,5]))

console.log(sum([1,1,1,1,'a','b',1,1]))

