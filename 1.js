function sum() {    
    let totalSum = 0;
    // console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];    } //totalsum = totalsum + arguments[i]
    console.log(totalSum);
}

sum(1,2,7);
// sum(1,4);
// sum(11);
// sum(10,3,6,7,9);

/*
.length dinamis
parameter dinamis pake loop
buat wadah
beda data beda




/*
output
10
5
11
35
*/

// function sum() {    
//     let totalSum = 0;
    
//     for (let i = 0; i < arguments.length; i++) {
//         totalSum += arguments[i];    }
//     return totalSum;
// }
// console.log(sum(1,2,4,9,6));
// sum(1,2,7);
// sum(1,4);

