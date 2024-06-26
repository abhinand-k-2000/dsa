class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  print() {
    if(this.isEmpty()) {
        console.log("List is empty")
    } else {
        let curr = this.head;
        let listValues = '';
        while(curr) {
            listValues +=  `${curr.value} `
            // listValues +=   curr.value + ' '
            console.log(curr.value)
            curr = curr.next
        }
        console.log(listValues)
    }
  }

}

const list = new LinkedList();
list.prepend(50)
list.prepend(22)
list.prepend(10)
console.log("is list empty ? ", list.isEmpty());
console.log("list size: ", list.getSize());
 list.print()

