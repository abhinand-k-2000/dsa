
function quickSort(arr) {

    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length - 1; i++){

        if(arr[i] > pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}

console.log("SORTED ARRAY: ",quickSort( [20, -2, 6, 8, 4]))

let arrayToSort = [64, 25, 12, 22, 11];
let sortedArray = quickSort(arrayToSort);

console.log("Sorted array:", sortedArray);