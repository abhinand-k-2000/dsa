const array = [4, 2, 7, 1, 9, 5];
const targetElement = 7;

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}



const result = linearSearch(array, targetElement);
console.log(result);  
