//Problem: Find the maximum element in an array

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        const maxValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return maxValue;
    }
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    heapifyDown(index) {
        let currentIndex = index;
        while (currentIndex < this.heap.length / 2) {
            let largerChildIndex = this.getLeftChildIndex(currentIndex);
            if (this.getRightChildIndex(currentIndex) < this.heap.length && this.heap[this.getRightChildIndex(currentIndex)] > this.heap[largerChildIndex]) {
                largerChildIndex = this.getRightChildIndex(currentIndex);
            }
            if (this.heap[currentIndex] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, largerChildIndex);
            }
            currentIndex = largerChildIndex;
        }
    }  
}

function findMaxUsingHeap(arr) {
    const maxHeap = new MaxHeap();
    // Insert all elements of the array into the max heap
    arr.forEach(element => {
        maxHeap.insert(element);
    });
    // Extract the maximum element from the max heap
    return maxHeap.extractMax();
}

// Example usage:
const array = [3, 7, 2, 9, 5];
console.log("Maximum element using heap:", findMaxUsingHeap(array));
