
class Node{
    constructor(value){
        this.value = value  
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    // insertion usign while loop

    insertWhile(value){
        const newNode = new Node(value)
        let currentNode = this.root;
        if(currentNode === null){
            this.root = newNode;
            return;
        }
        while(true){
            if(newNode.value < currentNode.value){
                if(currentNode.left === null){
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left
                }
            } else {
                if(currentNode.right === null){
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(root, value){
        if(!root) return false;
        if(value === root.value) return true;
        if(value < root.value){
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    searchWhile(value){
        let currentNode = this.root;
        while(currentNode !== null){
            if(value < currentNode.value){
                currentNode = currentNode.left
            } else if(value > currentNode.value){
                currentNode = currentNode.right
            } else {
                return true;
            }
        }
        return false
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

     // ========================Find the closest element of a value  

    findClosest(target){
        let currentNode = this.root;
        let closestVal = currentNode.value;
        while(currentNode !== null){
            if(Math.abs(target - closestVal) > Math.abs(target - currentNode.value)){
                closestVal = currentNode.value;
            }
            if(target < currentNode.value){
                currentNode = currentNode.left
            } else if(target > currentNode.value){
                currentNode = currentNode.right
            } else {
                break;
            }
        }
        return closestVal
    }
// To find the Smallest element in a binary seach tree
    findMin(){
        let currentNode = this.root;
        while(true){
            if(!currentNode.left){
                return currentNode.value
            }
            currentNode = currentNode.left;
        }
    }
// To find the Largest element in a binary search tree
    findMax(){
        let currentNode = this.root;
        while(true){
            if(!currentNode.right){
                return currentNode.value;
            }
            currentNode = currentNode.right
        }
    }
}

const bst = new BST();
bst.insertWhile(8)
bst.insertWhile(35)
bst.insertWhile(1)
bst.insertWhile(3)
bst.insertWhile(14)
bst.insertWhile(7)
// console.log("Present: ", bst.searchWhile(5))
bst.preOrder(bst.root)
console.log("Smallest elemetn : ", bst.findMin())
console.log("Largest elemetn : ", bst.findMax())
console.log(`Closest element of 10: ${bst.findClosest(10)}`)
// console.log(bst)

