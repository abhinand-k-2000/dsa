
function powerOfx(x,n){

    if(n === 0) return 1;

    return x * powerOfx(x,n-1)

}


console.log(powerOfx(2,3))
console.log(powerOfx(4,4))


