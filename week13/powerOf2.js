// function isPowerOf2(num) {
//   if (num < 1) {
//     return false;
//   }

//   while (num > 1) {
//     if (num % 2 !== 0) {
//       return false;
//     }
//     num /= 2;
//   }
//   return true;
// }

// console.log(isPowerOf2(1));
// console.log(isPowerOf2(43));
// console.log(isPowerOf2(32));

// Big-O = O(log n) => input is reduced to half

function isPowerOf2Bitwise (num) {
    if(num < 1 ){
        return false;
    }

    return (num & (num -1 )) === 0
}


console.log(isPowerOf2Bitwise(1));
console.log(isPowerOf2Bitwise(43));
console.log(isPowerOf2Bitwise(32));

// Big-O = O(1)