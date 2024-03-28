// Problem: Find the shortest path between two nodes in an undirected graph using Breadth-First Search (BFS)
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

function shortestPath(graph, start, end) {
  const queue = [[start]]; 
  const visited = new Set([start]); 

  while (queue.length > 0) {
    const path = queue.shift(); 
    const node = path[path.length - 1]; 
    if (node === end) {
      return path; 
    }

    // Explore neighbors of the current node
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); 
        const newPath = [...path, neighbor]; 
        queue.push(newPath); 
      }
    }
  }

  return null;
}

// Example usage:
const startNode = "A";
const endNode = "F";
const path = shortestPath(graph, startNode, endNode);
console.log("Shortest path from", startNode, "to", endNode, ":", path);
