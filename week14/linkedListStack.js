
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        const node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp
        }
        this.size++;
        return this
    }

    display(){
        if(!this.first){
            console.log("Stack is empty");
            return;
        }
        let current = this.first;
        for(let i = 0; i < this.size; i++){
            console.log("=> ", current.value);
            current = current.next;
        }
    }

    pop(){
        if(!this.first){
            return null;
        }
        let temp = this.first
        if(this.first === this.last ){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--;
        return temp.value
        

    }
    peek(){
        if(!this.first) return null;
        return this.first.value
    
    
      }

}



const stack = new Stack();
stack.push(10).push(20).push(30).push(40);
stack.pop()
stack.pop()
stack.display();
console.log(stack.peek())
