
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    isEmpty(){
        return !this.size
    }

    enqueue(data){
        const newNode = new Node(data);

        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this
    }

    dequeue(){
        if(this.isEmpty()) return null;

        const itemToBeRemoved = this.first;

        if(this.first === this.last){
            this.last = null
        } else {
            this.first = this.first.next;
            this.size--;
            return itemToBeRemoved.value;
        }
    }

    peek(){
        return this.first.value
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return;
        }
        let current = this.first;
        for(let i = 0; i < this.size; i++){
            console.log(`node ${i} => ${current.value}`);
            current = current.next;
        }
    }
    
    
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log("Enqueue: ",queue.enqueue(40))

console.log("Dequeued: ", queue.dequeue())
console.log("Dequeued: ", queue.dequeue())
console.log("Peek: ", queue.peek())
queue.display()