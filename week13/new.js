class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode
    }
    
    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNode
    }

    removemidddle(){
        if(!this.head) return;

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next  = slow.next
    }

    print(){
        if(!this.head){
            return
        }

        let curr = this.head;
        while(curr){
            console.log(curr.value)
        }
    }
}

const list = new LinkedList()
list.addFirst(10)
list.addFirst(30)
list.addFirst(20)
console.log(list)