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

// function factorial(num) {

//     for(let i = 0; ){


//     // if(num < 0) {
//     //     return -1;
//     // }
//     // else if (num == 0) {
//     //     return 1;
//     // }
//     // else {
//     //     return (num * factorial(num - 1));
//     // }
//     }

// }
// console.log(factorial(43)); //4x3=12 =>1x2=3

// function persistence(num) {
//     // console.log(typeof num);
//   numString = num.toString();
//   let sum = 1;

//   if(numString.length == 1){
//   //  console.log(numString); 
//     return numString;
//   }  else {



//     for (let i = 0; i < numString.length; i++) {
//       // while (numString[i] > num)

//       sum = sum * numString[i];
// // jika hasil lebih dari 1 maka ulangi jika sudah baru else


//     }
//     // console.log(sum);

//     let hasil = Number(sum)
//    return persistence (hasil)
//   }

//     // console.log(typeof hasil);
//     // console.log(sum);



//   };
//   console.log(persistence(999));


//   public class GFG 
//   { 
//       static int NumberofTimes(String str) 
//       { 
//           // Here the count variable store 
//           // how many times we do sum of 
//           // digits and temporary_sum 
//           // always store the temporary sum 
//           // we get at each iteration . 
//           int temporary_sum = 0, count = 0; 

//           // In this loop we always compute 
//           // the sum of digits in temporary_ 
//           // sum variable and convert it 
//           // into string str till its length 
//           // become 1 and increase the count 
//           // in each iteration. 
//           while (str.length() > 1) 
//           { 
//               temporary_sum = 0; 

//               // computing sum of its digits 
//               for (int i = 0; i < str.length(); i++) 
//                   temporary_sum += ( str.charAt(i) - '0' ) ; 

//               // converting temporary_sum into string 
//               // str again . 
//               str = temporary_sum + "" ; 

//               // increase the count 
//               count++; 
//           } 

//           return count; 
//       } 

//       // Driver program to test above functions 
//       public static void main(String[] args)  
//       { 
//            String s = "991"; 
//            System.out.println(NumberofTimes(s));  
//       } 

//   } 
//   /* This code is contributed by Mr. Somesh Awasthi */