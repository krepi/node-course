const {Queue, PriorityQueue} = require('./Queue');

/**
 * Class representing a graph.
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    /**
     * Add a vertex to the graph.
     * @param {string} vertex - The vertex to be added.
     */
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    /**
     * Add an edge between two vertices with a given weight.
     * @param {string} vertex1 - The first vertex.
     * @param {string} vertex2 - The second vertex.
     * @param {number} weight - The weight of the edge.
     */
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }

    /**
     * Perform a depth-first search (DFS) starting from a given vertex.
     * @param {string} start - The starting vertex.
     * @return {Array} - The vertices visited in DFS order.
     */
    DFS(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    return dfs(neighbor.node);
                }
            });
        })(start);

        return result;
    }

    /**
     * Perform a breadth-first search (BFS) starting from a given vertex.
     * @param {string} start - The starting vertex.
     * @return {Array} - The vertices visited in BFS order.
     */
    BFS(start) {
        const queue = new Queue();
        const result = [];
        const visited = {};
        visited[start] = true;
        queue.enqueue(start);

        while (!queue.isEmpty()) {
            let vertex = queue.dequeue();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor.node]) {
                    visited[neighbor.node] = true;
                    queue.enqueue(neighbor.node);
                }
            });
        }

        return result;
    }

    /**
     * Find the shortest path between two vertices using Dijkstra's algorithm.
     * @param {string} start - The starting vertex.
     * @param {string} finish - The ending vertex.
     * @return {Object} - An object containing the distance and the path.
     */
    dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (!nodes.isEmpty()) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) {
                this.adjacencyList[smallest].forEach(neighbor => {
                    let candidate = distances[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;
                    if (candidate < distances[nextNeighbor]) {
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                });
            }
        }

        return {distance: distances[finish], path: path.concat(smallest).reverse()};
    }
}

module.exports = Graph;
