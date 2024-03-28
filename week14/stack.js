class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty, cannot perform pop");
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size(){
    return this.stack.length;
  }
  
  peek(){
    if(this.isEmpty()){
        console.log("Stack is empty, cannot perform peek")
    }
    return this.stack[this.size() - 1]
  }

  print(){
    if(this.isEmpty()){
        console.log("Satck is empty, nothing to print");
    }
    // for(let i = 0; i < this.size(); i++){
    //     console.log(this.stack[i])
    // }
    console.log(this.stack.join('\n'))
  }

}


const stack = new Stack()
stack.push(10)
stack.push(50)
stack.push(99)
// console.log("IsEmpty: ", stack.isEmpty())
// console.log("Size: ", stack.size())
console.log(stack.pop())

// console.log(stack.peek())
stack.print()
