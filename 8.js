
// console.log(pola("42#3 * 188 = 80#204"));
// // console.log(pola("42#3 * 188 = 80#204"));
// // console.log(pola("8#61 * 895 = 78410#5"));

/*
output :
[8, 9]
[7, 9]
*/

function pola(str) {

    let hasil = [];

    let hasilSplit = str.split('=');
    // console.log(hasilSplit)
    let hasil3 = hasilSplit[1].trim();
    // console.log(hasil3);
    let hasilSplit1 = hasilSplit[0].split('*');
    let hasil1 = hasilSplit1[0].trim();
    // console.log(hasil1);
    let hasil2 = hasilSplit1[1].trim();

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (hasil1.replace('#', i) * hasil2 == hasil3.replace('#', j)) {
                hasil.push(i, j);
                // console.log(i, j)
            }
        }
    }

    return hasil;
}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));

/*
output :
[8, 9]
[7, 9]
*/