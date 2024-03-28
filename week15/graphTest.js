class Graph{
    constructor(){
        this.vertices = {}
    }

    addVertex(vertex){
        this.vertices[vertex] = []
    }

    insert(vertex, edge, isBidirectional){
        if(!this.vertices[vertex]){
            this.addVertex(vertex)
        }
        if(!this.vertices[edge]){
            this.addVertex(edge)
        }
        this.vertices[vertex].push(edge)
        if(isBidirectional){
            this.vertices[edge].push(vertex)
        }
    }

    printGraph(){
        for(let vertex in this.vertices){
            console.log(`${vertex} -> ${this.vertices[vertex]}`)
        }
    }
}