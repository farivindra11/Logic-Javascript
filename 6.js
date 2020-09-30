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


