function product(n,len) {
    let sum = n;
    for (let i = 1; i < len; i++) {
        sum = sum * n
    }
    return sum;
}


function recurPower(n, len) {
    if(len < 1) return 1;
    // return n * recurPower(n,len-1)
    return  recurPower(n,len-1) * n 
}

// console.log(product(4,3))
console.log(recurPower(4,3))