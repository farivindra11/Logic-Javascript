

function deretKaskus(n) {
    let tes = [];

    for (let i = 3; i <= 3 *n; i +=3){
        if (i % 5 == 0 && i % 6 == 0){
          tes.push("KASKUS");
          }else if (i % 5 == 0){
          tes.push("KAS");
            }else if (i % 6 == 0){
          tes.push("KUS")
            }else {
          tes.push(i)
    }  
  }
   return tes
}
  
console.log(deretKaskus(10));

// di proses dari atas

// prototipe custom string
// String.prototype.mengulang = function (n){ 
    // nilai masuk
    // this
//     var temp = "";
// }



// function deretKaskus(n) {

//     tes =[];
//     for (let i = 0; i < tes.length; i++) {
//         tes[i] *= 3;
        
    
//     let result;
//     if (n % 5 === 0) {
//         result = "KAS";
//     }else if (n % 6 === 0){
//         result = "KUS";
//     }else if (n % 5 === 0 && n % 6 === 0){
//         result = "KASKUS";
//     }
// }
//     return result;
    
// }
// console.log(deretKaskus(10));

/*
output berupa array
[3, "kus", 9, "kus", "kas", "kus", 21, "kus", 27, "kaskus"]
*/


// var numbers = [1, 2, 3, 4, 5];
// var length = numbers.length;
// for (var i = 0; i < length; i++) {
//   numbers[i] *= 2;
// }
// console.log(numbers);


// function deretKaskus(n) {
//     tes = []
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//     }
// }