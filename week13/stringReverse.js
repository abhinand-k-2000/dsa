

let str = "abhi";

function reverseString(str) {
    if(str === ""){
        return ""
    }
console.log(str[str.length-1] +'-'+ (str.slice(0,str.length - 1)))
    return str[str.length-1] + reverseString(str.slice(0,str.length - 1))
}


console.log(reverseString(str))


let string = "something";

console.log(string)
console.log(sliced)