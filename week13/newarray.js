let arr = [6,5,5,3,6,9,7,8,0]
let element1 = 8, element2 = 8;

function search(arr, element1, element2){

    let element1Found = false;
    let element2Found = false;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element1){
            element1Found = true;
        }
        if(arr[i] === element2){
            element2Found = true;
        }

        if(element1Found && element2Found){
            return true;
        }
    }
    return false;
}


// function search(arr, target){

//     let count1 = 0, count2 = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === target[0]){
//             count1++
//         }
//         if(arr[i] === target[1]){
//             count2++
//         }
//     }

//     if(count1 >=1 && count2 >= 1){
//         return true;
//     }else{
//         return false;
//     }
// }

console.log(search(arr, element1, element2))