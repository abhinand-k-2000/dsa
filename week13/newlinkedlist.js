class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }


  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getSize() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.getSize()) {
      console.log("invalid index");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeEnd() {
    if(!this.head) return;

    let current = this.head;
    while(current.next.next) {
        current = current.next;
    }

    current.next = null;
  }

  removeAt(index){
    if(index < 0 || index > this.getSize()) {
        console.log("Invalid index");
        return;
    }

    if(index === 0) {
        this.head = this.head.next
        return;
    }

    let current = this.head;
    for(let i = 0; i < index - 1; i++){
        current = current.next;
    }

    current.next = current.next.next
  }
  removeValue(value){
    if(!this.head){
      return
    }else if(this.head.data === value){
      this.head = this.head.next;
    }else{
      let previous = this.head;
      while(previous.next && previous.next.data!=value){
        previous = previous.next
      }
      if(previous.next){

        previous.next = previous.next.next
      }
    }
  }

  removeAValue(data) {
    if(!this.head) return;
    else if(this.head.data === data){
      this.head = this.head.next;
    }else {
      let prev = this.head;
      console.log("prev node: ", prev)
      while(prev.next && prev.next.data != data){
        prev = prev.next;
      }
      if(prev.next){
        prev.next = prev.next.next
      }
    }
  }

  search(value) {
    if(!this.head) return -1

    let curr = this.head;
    let i = 0;
    while(curr){
      if(curr.data === value){
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while(curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next
    }
    this.head = prev
  }


  sum(){

    if(!this.head) return

    let current = this.head;
    let sum = 0;
    while(current){
      sum += current.data;
      current = current.next;
    }

    return sum;
  }


  findMiddle(){

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while(fast && fast.next){
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }

    return prev.next.data
  }

}

const list = new LinkedList();

list.addFirst(10);
list.addFirst(20);
list.addLast(100);
list.addLast(200);
list.addFirst(0);
// list.removeValue(200)
// list.removeAValue(200)
list.print();
console.log("Middle: ", list.findMiddle()
)
console.log("Sum: ", list.sum()) 

// list.log()
console.log("Size: ", list.getSize());





