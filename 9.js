// function spiral(param1) {
//     let result = [];
//     let hitung = 0;
//     for (let i = 0; i < param1; i++){
//         result[i] = [];
//         for (let j = 0; j < param1; j++) {
//             result[i][j] = hitung;
//             hitung++;
//         }
//     }
//     console.log(result);
// }
// spiral(5)
//     let startColumn = 0;    //horizontal
//     let startRow = 0;       //vertikal

//     for (startColumn; startColumn < param1; startColumn++) {       //atas
//         console.log(result[startRow][startColumn]);
//     }
//     startColumn--;
//     startRow++;


//     for (startRow; startRow < param1; startRow++) {             //kanan
//         console.log(result[startRow][startColumn]);
//     }
//     startRow--;
//     startColumn--;
//     for (startColumn; startColumn >= S0; startColumn--) {         //bawah
//         console.log(result[startRow][startColumn]);
//     }
// }
// spiral(5);

// function spiral (param1) {
//     let result = [];
//     let count = 0;

//     for (let i = 0; i < param1; i++) {
//       result.push([]);
//     }

//     let startCol = 0;
//     let endCol = param1 - 1;
//     let startRow = 0;
//     let endRow = param1 - 1;

//     while (startCol <= endCol && startRow <= endRow) {
//       // baris atas
//         for (let i = startCol; i <= endCol; i++) {
//             result[startRow][i] = count;
//             count++;
//         }

//         startRow++;   // kolom kanan

//         for (let i = startRow; i <= endRow; i++) {
//             result[i][endCol] = count;
//             count++;
//         }

//         endCol--;     // baris bawah

//         for (let i = endCol; i >= startCol; i--) {
//             result[endRow][i] = count;
//             count++;
//         }

//         endRow--;   

//         for (let i = endRow; i >= startRow; i--) {
//             result[i][startCol] = count;
//             count++;
//         }

//         startCol++;
//     }

//     return result;
// }

// console.log(spiral(5));
// console.log(spiral(6));
// console.log(spiral(7));

/*
buat param1 * param1
hasil = array kosong diisi didalamnya array lagi
i<param1

*/

// let array = [[1,2,3],[4,5,6]];
// let hasil = []
// for (let anakArray of array) {
//     hasil.push(...anakArray);

// }
// console.log(hasil)

// c9.js

function spiral(param1) {

  let result = [];
  let hitung = 0;

  for (let i = 0; i < param1; i++) {
    result[i] = [];
    for (let j = 0; j < param1; j++) {
      result[i][j] = hitung;
    //   console.log(hitung);
      hitung++;
    }
 
  }
//   console.log(result);
  let n = result.length;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1
  let newArray = [];

  while (startRow <= endRow && startColumn <= endColumn) {

    for (let i = startColumn; i <= endColumn; i++) {   //atas horizontal
      newArray.push(result[startColumn][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {        //kanan vertikal
      newArray.push(result[i][endColumn]);
    }
    endColumn--;


    for (let i = endColumn; i >= startColumn; i--) {
      newArray.push(result[endRow][i]);
    }
    endRow--;


    for (let i = endRow; i >= startRow; i--) {
      newArray.push(result[i][startColumn]);
    }
    startColumn++;

  }

  console.log(newArray);
}
spiral(5);
// spiral(6);
// spiral(7);

    // Top row read.
    // Right column read
// Bottom row read
  // Reading bottom row, from bottom right to bottom left
  // Reading left column, from bottom left to top left
  // left column now read.
    // While loop will now spiral in the matrix.