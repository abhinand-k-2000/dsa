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

    heapifyDown(index) {
        let currentIndex = index;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(currentIndex);
            const rightChildIndex = this.getRightChildIndex(currentIndex);
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rightChildIndex;
            }
            if (this.heap[currentIndex] >= this.heap[largerChildIndex]) {
                break;
            }
            this.swap(currentIndex, largerChildIndex);
            currentIndex = largerChildIndex;
        }
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
}

function heapSort(arr) {
    const maxHeap = new MaxHeap();
    
    // Build max heap
    for (let i = 0; i < arr.length; i++) {
        maxHeap.insert(arr[i]);
    }

    // Extract maximum elements and place them at the end of the array
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = maxHeap.extractMax();
    }

    return arr;
}

// Example usage:
const array = [3, 7, 2, 9, 5];
console.log("Sorted array using heap sort:", heapSort(array));
