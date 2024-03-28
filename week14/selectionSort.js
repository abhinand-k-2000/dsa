
function selectionSort(arr) {
    let n = arr.length;
    
    for(let i = 0; i < n; i++){

        let minIndex = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

return arr;
}


console.log(selectionSort([20, -2, 6, 8, 4]))

let arrayToSort = [64, 25, 12, 22, 11];
let sortedArray = selectionSort(arrayToSort);

console.log("Sorted array:", sortedArray);