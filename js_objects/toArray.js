//Exercise: Object to array
const toArray = (obj) => {
    const newArray = [];

    for (let key in obj) {
        newArray.push([key, obj[key]]);
    }
    return newArray;
}
const newObj = {
    a: 1,
    b: 2,
    c: [6, 7],
    d: 4,
    e: 5
};

console.log(toArray(newObj));
