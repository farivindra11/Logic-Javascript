function sum() {    
    let totalSum = 0;
    // console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];    } //totalsum = totalsum + arguments[i]
    console.log(totalSum);
}

sum(1,2,7);

