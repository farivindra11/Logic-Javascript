function romawi(n){
 
    let desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];                              
    let konversi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];            
  
    let hasil = ""; 
  
    for(let i = 0; i < desimal.length; i++){
      while (desimal[i] <= n) {  
        hasil += konversi[i];
        n -= desimal[i];
      }
    }
    return hasil;
  }
  
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));

  

// M=1000
// D=500
// C=100
// L=50
// X=10
// V=5
// I=1



// function romawi(n) {

//     var desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//     var romawi[12] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//     let result = "";


// }

/*
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(4));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
*/

// var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
//                     ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
//                     ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

// function convert(num) {
//   var numeral = "";
//   var digits = num.toString().split('').reverse();
//   for (var i=0; i < digits.length; i++){
//     numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
//   }
//   return numeral;  
// }
// console.log(convert(166));

// M=1000
// D=500
// C=100
// L=50
// X=10
// V=5
// I=1