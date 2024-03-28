
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const rightArr = arr.slice(middle);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    const sortedArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log("Sorted Array: ", mergeSort([20, -2, 6, 8, 4]))

let arrayToSort = [64, 25, 12, 22, 11];
let sortedArray = mergeSort(arrayToSort);

console.log("Sorted array:", sortedArray);