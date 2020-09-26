/*
pertama looping sesuai param
buat ketentuan
console index data
 */
// function indexPrime(pram1){
// let hasil = []
// let tes = true;
// let total = ''
// for(let i = 2; i < 10; i++) {
    
// }

// // }


function indexPrime(prims1) {
   let hasil = [];
   let jumlah = 1000000;
   for(let i = 2; i <= jumlah; i++){
        if (i >= 2) {
            prime = true;
            // console.log(i);
        for (let j = 2; j < i; j++){
                if ( i % j == 0){
                prime = false;
                }
            }
            if ( prime == true ){
                // console.log(i);
                hasil.push(i)
        
          }  
        }
   }
   return hasil[prims1-1];
}

console.log(indexPrime(4))
console.log(indexPrime(500)) 
console.log(indexPrime(37786))

// ini hard code