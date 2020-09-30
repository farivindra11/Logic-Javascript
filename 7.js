function weirdMultiply(sentence) {
  let numString = sentence.toString();
  let sum = 1;

  if (numString.length == 1) {
    return numString;
  } else {

    for (let i = 0; i < numString.length; i++) {
      sum *= numString[i];
    }

    let hasil = Number(sum);

    return weirdMultiply(hasil);
  }
}
console.log(weirdMultiply(39));
// console.log(weirdMultiply(999));
// console.log(weirdMultiply(3));

/*
output :
 =>>   3 * 9 = 27 -> 2 * 7 = 14 ->1 * 4 = 4
 =>>   9 * 9 * 9 = 729 -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
 =>>   3
*/

