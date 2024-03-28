
let str = "Abhinand"


function reverse(str){

    return !str ? "" : str.slice(-1) + reverse(str.slice(0, -1))
}
console.log(reverse(str))

