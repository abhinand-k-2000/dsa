
function factorial (num) {

  let result = 1;
  for(let i = 2; i <= num; i++) {
    result *= i
  }

  return result 
}

function recFact (num ) {
  if(num < 2) return 1

  return recFact(num-1) * num
}

// console.log(factorial(0))
// console.log(recFact(1))
console.log(recFact(4))

// Big-O = O(n) linear time complexity