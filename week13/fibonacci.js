
function fibonacci (num) {

    let result = [0, 1]

    for(let i = 2; i <= num; i++) { 
        result[i] = result[i - 1] + result[i - 2]
        
    }
    return result[num]
       
}


console.log(fibonacci(6))


//Big-O = O(n) => linear time complexity