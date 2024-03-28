
class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let node = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char]
        }
        node.isEnd = true
    }

    search(word){
        let node = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.isEnd;
    }

    startsWith(word){
        let node = this.root;
        for(let i = 0; i < word.length; i++){
            let char = word[i];
            if(!node.children[char]){
                return false;
            }
            node = node.children[char]
        }
        return true
    }
}

const trie = new Trie()
trie.insert("abhinand")
console.log(trie)
console.log(trie.startsWith("abhr"))
