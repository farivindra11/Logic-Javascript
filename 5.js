function stringManipulation(word) {

  // let tampung = word.charAt(0);

  if (word[0] == "a" ||
      word[0] == "i" ||
      word[0] == "u" ||
      word[0] == "e" ||
      word[0] == "o") {
    console.log(word);
  } else {
   
    let a = word.substr(0, 1)
    console.log(a);
    let b = word.substr(1)
    console.log(b);
    console.log(b.concat(a, "nyo"))
    // console.log(`${b}${a}nyo`);
  }
}

stringManipulation("iangsa");
stringManipulation("bebek mandi");


// output
// "ayam"
// "ebekbnyo"

// // 
// apabila diawali huruf vokal fungsi langsung mengembalikan kata tersebut
//if not huruf tersebut pindah di akhir kata dan tambah nyo
// pakai concat
/*
function manipulasi(word){

let vokal = ["a", "i", "u", "e", "o"];
for(){

}
if( = vokal ){
 return true
}
}
*/


// let a = "hello world"
// let b = "woy"
// console.log(a.concat(' ', b)) menggabungkan
// let str = "hello";

// console.log(str.charAt(0)); index posisi

//    let baru = ""  
//     console.log(word.substr(0, 1))
//     console.log(word.substr(1))
// return baru