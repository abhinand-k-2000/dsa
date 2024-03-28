function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

// Big-O = O(logn)

console.log(recursiveBinarySearch([10, 29, 39, 49, 80], 49));
console.log(recursiveBinarySearch([10, 29, 39, 49, 80], 10));
console.log(recursiveBinarySearch([10, 29, 39, 49, 80], 80));
console.log(recursiveBinarySearch([10, 29, 39, 49, 80], 81));
