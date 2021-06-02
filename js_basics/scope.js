let a = 'apples';

{
    console.log(a);
    let b = 'bananas';
    console.log(b)
}

{
    console.log(a) // this was in the global scope of the script, so can be accessed in this block too
    console.log(b) //this cannot be accessed because it was declared in a different block of code
}

