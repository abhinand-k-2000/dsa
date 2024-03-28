
class Queue{
    constructor(){
        this.item = [];
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length === 0
    }

    getSize(){
        return this.item.length;
    }

    print(){
        console.log(this.item.toString())
    }

    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null;
    }


}



const newQueue = new Queue()
console.log(newQueue.isEmpty())
newQueue.enqueue(10)
newQueue.enqueue(30)
newQueue.enqueue(20)
console.log(newQueue.isEmpty())
newQueue.print()
console.log(newQueue.getSize())
// console.log(newQueue.print());