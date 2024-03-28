class MinHeap{
    constructor(){
        this.heap = [];
    }

    getLeftChildIndex(parentIndex){
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex){
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex - 1) / 2)
    }
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0; 
    }
    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let currentIndex = this.heap.length - 1;
        while(this.hasParent(currentIndex) && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    removeMin(){
        if(this.heap.length === 0) return null;
        const minValue = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return minValue

    }
    heapifyDown(){
        let currentIndex = 0
        while(this.getLeftChildIndex(currentIndex) < this.heap.length){
            let smallerChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.getRightChildIndex(currentIndex) < this.heap.length && this.heap[this.getRightChildIndex(currentIndex)] < this.heap[smallerChildIndex]){
                smallerChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.heap[currentIndex] < this.heap[smallerChildIndex]){
                break;
            } else {
                this.swap(currentIndex, smallerChildIndex);
            }
            currentIndex = smallerChildIndex
        }
    }
    // buildHeap(array){
    //     this.heap = array;
    //     for(let i = this.getParentIndex(array.length - 1); i >= 0; i--){
    //         this.heapifyDown(i)
    //     }
    // }

    
    
}

// const heap = new MinHeap();
// heap.insert(20)
// heap.insert(10)
// heap.insert(40)
// heap.insert(30)
// heap.insert(22)
// console.log(heap)
// console.log(heap.removeMin());
// console.log(heap.removeMin());
// console.log(heap)

let minHeap = new MinHeap();
let array = [3, 8, 2, 10, 4, 7, 5];
minHeap.buildHeap(array);
// console.log(array)
console.log(minHeap)
