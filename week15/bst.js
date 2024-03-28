class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (value === root.value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right)
    }
  }

  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right)
    }
  }

  postOrder(root){
    if(root){
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value)
    }
  }

  //Breadth first search
  levelOrder(){
    const queue = [];
    queue.push(this.root);
    while(queue.length){
      let current = queue.shift();
      console.log(current.value);
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
  }

  findMin(root){
    if(!root.left){
      return root.value
    } else{
      return this.findMin(root.left)
    }
  }

  findMax(root){
    if(!root.right){
      return root.value
    } else {
      return this.findMax(root.right)
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value){
    if(root === null){
      return root
    }
    if(value < root.value){
      root.left = this.deleteNode(root.left, value);
    } else if(value > root.value){
      root.right = this.deleteNode(root.right, value)
    } else {
      if(!root.left && !root.right){
        return null;
      } 
      if(!root.left){
        return root.right
      } else if(!root.right){
        return root.left
      }
      root.value = this.findMin(root.right);
      root.right = this.deleteNode(root.right, root.value)
    }
    return root;
  }
}










const bst = new BinarySeachTree();
bst.insert(7);
bst.insert(10);
bst.insert(3);
bst.insert(5);
bst.insert(15);
bst.levelOrder()
// console.log("is tree empty? ", bst.isEmpty());
// bst.delete(10)
// bst.postOrder(bst.root)
// // console.log("Search: ", bst.search(bst.root, 20));
// // console.log("Search: ", bst.search(bst.root, 30));
// // console.log("Search: ", bst.search(bst.root, 330));
// console.log("Least value in the tree: ", bst.findMin(bst.root))
// console.log("Largest value in the tree: ", bst.findMax(bst.root))

