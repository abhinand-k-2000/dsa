

class Stack{
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0;
    }
    push(value){
        this.item.push(value)
    }

    pop(){
        if(this.isEmpty()) return null;
        this.item.shift();
    }
}

class Queue{
    constructor(){
        this.item = []
    }

    enqueue(value){
        this.item.push(value)
    }

    isEmpty(){
        return this.item.length === 0;
    }
    dequeue(){
        if(this.isEmpty()) return null;

        this.item.shift()
    }

    peek(){
        if(this.isEmpty()) return null;

        return this.item[0]
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return
        }

        console.log(this.item.toString())
    }
    
}

const queue = new  Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.display()
