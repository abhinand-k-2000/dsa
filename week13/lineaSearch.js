
const arr = [1,2,3,4,5,6];
const target = 4;


function linearSearch(arr, target) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}


console.log(linearSearch(arr, 10))

// Big-O = O(n)
