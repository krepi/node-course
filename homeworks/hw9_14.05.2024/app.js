const SinglyLinkedList = require('./structures/SinglyLinkedList');
const {Stack, MinMaxStack} = require('./structures/Stack');
const {Queue} = require('./structures/Queue');
const BinarySearchTree = require('./structures/BinarySearchTree');
const Graph = require('./structures/Graph');

// Singly Linked List demonstration
const sll = new SinglyLinkedList();
sll.push(10);
sll.push(20);
sll.push(30);
console.log("Singly Linked List:", sll.listValuesToArray());

// Stack demonstration
const stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
console.log("Stack (Top -> Bottom):", stack.data.listValuesToArray());
console.log("Popped from Stack:", stack.pop().val);
console.log("Stack after pop (Top -> Bottom):", stack.data.listValuesToArray());

// Min/Max Stack demonstration
const minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(3);
minMaxStack.push(7);
minMaxStack.push(1);
console.log("MinMax Stack (Top -> Bottom):", minMaxStack.stack.data.listValuesToArray());
console.log("Current Min:", minMaxStack.getMin());
console.log("Current Max:", minMaxStack.getMax());
console.log("Popped from MinMax Stack:", minMaxStack.pop().val);
console.log("MinMax Stack after pop (Top -> Bottom):", minMaxStack.stack.data.listValuesToArray());
console.log("Current Min:", minMaxStack.getMin());
console.log("Current Max:", minMaxStack.getMax());

// Queue demonstration
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue (Front -> Back):", queue.data.listValuesToArray());
console.log("Dequeued from Queue:", queue.dequeue());
console.log("Queue after dequeue (Front -> Back):", queue.data.listValuesToArray());

// Binary Search Tree demonstration
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log("BST BFS:", bst.BFS());
console.log("BST DFS Pre-Order:", bst.DFSPreOrder());
console.log("BST DFS In-Order:", bst.DFSInOrder());
console.log("BST DFS Post-Order:", bst.DFSPostOrder());

// Check if Binary Tree is a valid BST
console.log("Is valid BST:", bst.isBST());

// Graph demonstration
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log("Graph DFS starting from A:", graph.DFS("A"));
console.log("Graph BFS starting from A:", graph.BFS("A"));

// Dijkstra's Algorithm demonstration
const shortestPath = graph.dijkstra("A", "E");
console.log("Shortest path from A to E:", shortestPath.path);
console.log("Distance from A to E:", shortestPath.distance);

// Linked List Cycle Detection demonstration
const sllWithCycle = new SinglyLinkedList();
sllWithCycle.push(1);
sllWithCycle.push(2);
sllWithCycle.push(3);
sllWithCycle.push(4);
sllWithCycle.head.next.next.next.next = sllWithCycle.head.next; // Create a cycle
console.log("Linked List has cycle:", sllWithCycle.hasCycle());
