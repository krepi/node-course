const BinarySearchTree = require("./structures/BinarySearchTree.js");
const {Stack, MinMaxStack} = require("./structures/Stack.js")

const bst = new BinarySearchTree();
console.log(bst.insert(10)); // true
console.log(bst.insert(5));  // true
console.log(bst.insert(15)); // true
console.log(bst.insert(2));  // true
console.log(bst.insert(7));  // true
console.log(bst.insert(12)); // true
console.log(bst.insert(20)); // true
console.log(bst.insert(10)); // false - duplicate ignored
console.log(bst.find(7));  // true
console.log(bst.find(3));  // false
console.log(bst.find(10)); // true
console.log(bst.find(25)); // false
console.log("BST: ", JSON.stringify(bst.root, null, 2));
// console.log(bst.BFS())
console.log("bfs ", bst.recBFS())
console.log("dfs pre  ", bst.DFSPreOrder())
console.log("dfs post  ", bst.DFSPostOrder())