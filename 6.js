function sentencesManipulation(sentence) {
    let hasil = [];
    let arrayBaru = sentence.split(' ');
    // console.log(arrayBaru)
    for (let baru of arrayBaru) {
        //    console.log(baru)

        if (baru[0].toLowerCase() == "a" ||
            baru[0].toLowerCase() == "i" ||
            baru[0].toLowerCase() == "u" ||
            baru[0].toLowerCase() == "e" ||
            baru[0].toLowerCase() == "o") {
            hasil.push(baru);

        } else {
            let a = baru.slice(0, 1)
            let b = baru.slice(1)

            hasil.push(b.concat(a, "nyo"));
        }

    }
    console.log(hasil.join(' '));

}

sentencesManipulation("ibu pergi ke pasar bersama aku");

// output
// ibu ergipnyo eknyo asarpnyo ersambnyo aku



// }
// for (let anakBaru of arrayBaru) {
//     console.log(arrayBaru)
// }
//ibu
//ergipnyo (else)
//eknyo (else)
//asarpnyo (else)
//ersamabnyo (else)
//aku

//jidiin array dulu
/*
 flet array baru = sentence.split(' ')
*/



    // for (let i = 0; i < arrayBaru; i++ ){
    // if (arrayBaru[i][0] == "a" || arrayBaru[0] == "i" || arrayBaru[0] == "u" || arrayBaru[0] == "e" || arrayBaru[0] == "o"){
    //     // console.log(arrayBaru[i]);
    // } 
//     else {  
//       let a = arrayBaru.slice(0, 1)
//       let b = arrayBaru.slice(1)

//         console.log(b.concat(a, "nyo"))
//   }
