// Problem: Find the number of connected components in an undirected graph
const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1],
    4: [5],
    5: [4]
};

function dfs(node, graph, visited) {
    visited.add(node); 
    for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            dfs(neighbor, graph, visited); 
        }
    }
}
function countConnectedComponents(graph) {
    const visited = new Set(); 
    let count = 0; 
    for (const node in graph) {
        if (!visited.has(parseInt(node))) {
            dfs(parseInt(node), graph, visited);    
            count++; 
        }
    }
    return count;
}

// Example usage:
const connectedComponents = countConnectedComponents(graph);
console.log('Number of connected components:', connectedComponents);
