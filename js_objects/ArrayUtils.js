    //How to use Methods

    //Exercise: ArrayUtils

    const ArrayUtils = {
        //A **method** is a property of an object whole value is a function
        //Think of it as a function that is owned by an object
        last: function last(arr) {
            return arr[arr.length - 1]
        },

        //you can also create a method by assigning an existing function to a key
        first: first,

        //The following is written using shorthand syntax. This only works when you define a function as a method.
        take(arr, n) {
            return arr.slice(0,n);
        },

        // The code above is syntax sugar for the code below.
        // The behave in **exactly** the same way.
        // take: function take(arr, n) {
        //  return arr.slice(0, n);
        // }

        // Exercise: To Object
        toObject(arr) {
        const newObj = {};

        for (let pair of arr) {
            // console.log(pair);
            newObj[pair[0]] = pair[1];
        }

        return newObj;
    }
    };
    
    function first(arr) {
        return arr[0];
    }

    //Example usage:

    console.log("Using ArrayUtils");
    console.log(ArrayUtils.last([100, 200, 300, 400]));
    console.log(ArrayUtils.first([100, 200, 300, 400]));
    console.log(ArrayUtils.take([100, 200, 300, 400], 3));

    const pairs = [
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4]
    ];
    console.log(ArrayUtils.toObject(pairs));
