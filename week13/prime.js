
function isPrime(num) {

    if( num < 2) {
        return "Not Prime"
    }
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i == 0) {
            return "Not Prime"
        }
    }
    return "Prime"
}


console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(6))
console.log(isPrime(5))

// Big-O = O(sqrt(n))