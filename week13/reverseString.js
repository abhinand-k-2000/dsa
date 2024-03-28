function reverse(str) {
  return !str ? "" : str.slice(-1) + reverse(str.slice(0, -1));
}

function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
// console.log(reverseArray([1,2,3]))

function sumOfArray(arr){
    if(arr.length === 0) return 0;

    return arr[0] + sumOfArray(arr.slice(1))
}
let arr = [1,2,3,4,5]

console.log(sumOfArray(arr))


// console.log(arr.slice(1))