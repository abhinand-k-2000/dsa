// Problem: Find the kth largest element in an array using a min-heap

class MinHeap {
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
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return minValue;
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
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);
            if (this.getRightChildIndex(currentIndex) < this.heap.length && this.heap[this.getRightChildIndex(currentIndex)] < this.heap[smallerChildIndex]) {
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }
            if (this.heap[currentIndex] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(currentIndex, smallerChildIndex);
            }
            currentIndex = smallerChildIndex;
        }
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.heap.length > k) {
            minHeap.extractMin();
        }
    }
    return minHeap.heap[0];
}
// Example usage:
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(`The ${k}th largest element in the array is:`, findKthLargest(nums, k));
