
function bubbleSort(arr){

    let swapped;
    do{
         swapped = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)
}


const arr = [-6, 2, 0, 5, -2, 6]
bubbleSort(arr);
console.log(arr)