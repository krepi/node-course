# Project Documentation

## Table of Contents

- [Overview](#overview)
- [Classes and Relationships](#classes-and-relationships)
    - [SinglyLinkedList](#singlylinkedlist-located-in-structuressinglylinkedlistjs)
    - [Node](#node-used-within-singlylinkedlist-and-binarysearchtree)
    - [Stack](#stack-located-in-structuresstackjs)
    - [MinMaxStack](#minmaxstack-located-in-structuresstackjs)
    - [Queue](#queue-located-in-structuresqueuejs)
    - [PriorityQueue](#priorityqueue-located-in-structuresqueuejs)
    - [BinarySearchTree](#binarysearchtree-located-in-structuresbinarysearchtreejs)
    - [Graph](#graph-located-in-structuresgraphjs)
- [Usage Example](#usage-example)
- [File Structure](#file-structure)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)

## Overview

This documentation provides a detailed look at the classes within the project, their methods, and how they interact.
This project models several data structures including linked lists, stacks, queues, binary search trees, and graphs, and
organizes these functionalities within a structured folder layout.

## Classes and Relationships

This section details the classes, their methods, and how they relate to one another. This project uses various data
structures to demonstrate different algorithms and their applications.

### SinglyLinkedList (located in `structures/SinglyLinkedList.js`)

A class representing a singly linked list. This class is used in the implementation of the `Stack` and `Queue` classes.

#### Methods:

- `push(val)`: Adds an item to the end of the list.
- `pop()`: Removes and returns the last item from the list.
- `shift()`: Removes and returns the first item from the list.
- `unshift(val)`: Adds an item to the beginning of the list.
- `get(index)`: Retrieves a node by its index.
- `set(index, value)`: Sets the value of a node at a specific index.
- `insert(index, value)`: Inserts a node at a specific index.
- `remove(index)`: Removes a node at a specific index.
- `reverse()`: Reverses the list.
- `listValuesToArray()`: Converts the list values to an array.
- `hasCycle()`: Detects if the linked list has a cycle.

### Node (used within SinglyLinkedList and BinarySearchTree)

A class representing a node in a data structure.

#### Constructor:

- Accepts value and initializes left and right for tree nodes or next for linked list nodes.

### Stack (located in `structures/Stack.js`)

A class representing a stack data structure. This class uses `SinglyLinkedList` to manage its elements.

#### Methods:

- `push(val)`: Pushes a value onto the stack.
- `pop()`: Pops a value off the stack.
- `peek()`: Peeks at the top value of the stack.
- `isEmpty()`: Checks if the stack is empty.

### MinMaxStack (located in `structures/Stack.js`)

A class representing a stack with additional tracking for minimum and maximum values. This class uses `Stack` to manage
its elements.

#### Methods:

- `push(val)`: Pushes a value onto the stack and updates min/max stacks.
- `pop()`: Pops a value off the stack and updates min/max stacks.
- `peek()`: Peeks at the top value of the stack.
- `getMin()`: Gets the minimum value in the stack.
- `getMax()`: Gets the maximum value in the stack.
- `isEmpty()`: Checks if the stack is empty.

### Queue (located in `structures/Queue.js`)

A class representing a queue data structure. This class uses `SinglyLinkedList` to manage its elements.

#### Methods:

- `enqueue(val)`: Adds an element to the end of the queue.
- `dequeue()`: Removes and returns the element from the front of the queue.
- `peek()`: Gets the element at the front of the queue without removing it.
- `isEmpty()`: Checks if the queue is empty.

### PriorityQueue (located in `structures/Queue.js`)

A class representing a priority queue data structure.

#### Methods:

- `enqueue(val, priority)`: Adds an element with a given priority.
- `dequeue()`: Removes and returns the highest priority element.
- `isEmpty()`: Checks if the priority queue is empty.

### BinarySearchTree (located in `structures/BinarySearchTree.js`)

A class representing a binary search tree. This class uses `Queue` for breadth-first search (BFS) operations.

#### Methods:

- `insertIterative(value)`: Inserts a value into the tree iteratively.
- `insert(value)`: Inserts a value into the tree recursively.
- `isBST(node, min, max)`: Checks if the tree is a valid binary search tree.
- `findIterative(value)`: Finds a value iteratively.
- `find(value)`: Finds a value recursively.
- `BFS()`: Performs a breadth-first search using a `Queue`.
- `DFSPreOrder()`: Performs a depth-first search in pre-order.
- `DFSInOrder()`: Performs a depth-first search in in-order.
- `DFSPostOrder()`: Performs a depth-first search in post-order.

### Graph (located in `structures/Graph.js`)

A class representing a graph. This class uses `Queue` for breadth-first search (BFS) operations and `PriorityQueue` for
Dijkstra's algorithm.

#### Methods:

- `addVertex(vertex)`: Adds a vertex to the graph.
- `addEdge(vertex1, vertex2, weight)`: Adds an edge between two vertices with a given weight.
- `DFS(start)`: Performs a depth-first search starting from a given vertex.
- `BFS(start)`: Performs a breadth-first search starting from a given vertex using a `Queue`.
- `dijkstra(start, finish)`: Finds the shortest path between two vertices using Dijkstra's algorithm and
  a `PriorityQueue`.

## Usage Example

```javascript
const SinglyLinkedList = require('./structures/SinglyLinkedList');
const {Stack, MinMaxStack} = require('./structures/Stack');
const {Queue} = require('./structures/Queue');
const BinarySearchTree = require('./structures/BinarySearchTree');
const Graph = require('./structures/Graph');


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
```

### File Structure

- `/structures`
    - `SinglyLinkedList.js` - Contains `SinglyLinkedList` and `Node`.
    - `Stack.js` - Contains `Stack` and `MinMaxStack`.
    - `Queue.js` - Contains `Queue` and `PriorityQueue`.
    - `BinarySearchTree.js` - Contains `BinarySearchTree`.
    - `Graph.js` - Contains `Graph`.
- `app.js` - Main application script that demonstrates the usage of the above structures.

### Directory Structure

```project-root
│   app.js
│
└───structures
│   SinglyLinkedList.js
│   Stack.js
│   Queue.js
│   BinarySearchTree.js
│   Graph.js
```

### Getting Started

This section provides a quick guide on how to set up and start using the project.

#### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. This project uses ES6 features and depends on
Node.js for its environment. Visit Node.js official website to download and install it if you haven't already.

#### Installation

Clone the repository:

```
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw9_14.05.2024
```

#### Running the application:

To start the application, run:

```
node app.js
```