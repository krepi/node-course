const {Queue} = require('./Queue');

/**
 * Class representing a node in a binary search tree.
 */
class Node {
    /**
     * Create a node.
     * @param {*} value - The value of the node.
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Class representing a binary search tree.
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Insert a value into the binary search tree iteratively.
     * @param {*} value - The value to be inserted.
     * @return {boolean} - True if the value was inserted, false if it already exists.
     */
    insertIterative(value) {
        if (!this.root) {
            this.root = new Node(value);
            return true;
        }
        let current = this.root;

        while (true) {
            if (value === current.value) {
                return false;
            }
            if (value > current.value) {
                if (!current.right) {
                    current.right = new Node(value);
                    return true;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    current.left = new Node(value);
                    return true;
                } else {
                    current = current.left;
                }
            }
        }
    }

    /**
     * Insert a value into the binary search tree recursively.
     * @param {*} value - The value to be inserted.
     * @return {boolean} - True if the value was inserted, false if it already exists.
     */
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return true;
        }
        return this._insert(this.root, value);
    }

    /**
     * Helper method to insert a value recursively.
     * @param {Node} node - The current node.
     * @param {*} value - The value to be inserted.
     * @return {boolean} - True if the value was inserted, false if it already exists.
     * @private
     */
    _insert(node, value) {
        if (value === node.value) {
            return false;
        }
        if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return true;
            } else {
                return this._insert(node.right, value);
            }
        } else {
            if (!node.left) {
                node.left = new Node(value);
                return true;
            } else {
                return this._insert(node.left, value);
            }
        }
    }

    /**
     * Checks if a binary tree is a valid binary search tree (BST).
     * @param {Node} node - The root node of the binary tree.
     * @param {number} [min=null] - The minimum value that the current node can have.
     * @param {number} [max=null] - The maximum value that the current node can have.
     * @return {boolean} - True if the binary tree is a valid BST, false otherwise.
     */
    isBST(node = this.root, min = null, max = null) {
        if (node === null) return true;
        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }

    /**
     * Find a value in the binary search tree iteratively.
     * @param {*} value - The value to find.
     * @return {boolean} - True if the value is found, false otherwise.
     */
    findIterative(value) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /**
     * Find a value in the binary search tree recursively.
     * @param {*} value - The value to find.
     * @return {boolean|*} - The found node or false if the value is not found.
     */
    find(value) {
        if (!this.root) {
            return false;
        }
        return this._find(this.root, value);
    }

    /**
     * Helper method to find a value recursively.
     * @param {Node} node - The current node.
     * @param {*} value - The value to find.
     * @return {boolean|*} - The found node or false if the value is not found.
     * @private
     */
    _find(node, value) {
        if (value === node.value) {
            return true;
        }
        if (value > node.value) {
            if (!node.right) {
                return false;
            } else {
                return this._find(node.right, value);
            }
        } else {
            if (!node.left) {
                return false;
            } else {
                return this._find(node.left, value);
            }
        }
    }

    /**
     * Perform a breadth-first search (BFS) on the tree.
     * @return {Array} - The values in the tree in BFS order.
     */
    BFS() {
        const queue = new Queue();
        const data = [];
        let node = this.root;
        if (!node) return data;

        queue.enqueue(node);

        while (!queue.isEmpty()) {
            node = queue.dequeue();
            data.push(node.value);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }

        return data;
    }

    /**
     * Perform a recursive breadth-first search (BFS) on the tree.
     * @return {Array} - The values in the tree in BFS order.
     */
    recBFS() {
        const queue = new Queue();
        const data = [];
        let node = this.root;
        if (!node) return data;
        queue.enqueue(node);
        return this._BFS(queue, data);
    }

    /**
     * Helper method to perform recursive BFS.
     * @param {Queue} queue - The queue used in BFS.
     * @param {Array} data - The array to store the BFS order.
     * @return {Array} - The values in the tree in BFS order.
     * @private
     */
    _BFS(queue, data) {
        if (queue.isEmpty()) return data;

        const node = queue.dequeue();
        data.push(node.value);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);

        return this._BFS(queue, data);
    }

    /**
     * Perform a depth-first search (DFS) in pre-order on the tree.
     * @return {Array} - The values in the tree in pre-order.
     */
    DFSPreOrder() {
        const data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }

    /**
     * Perform a depth-first search (DFS) in post-order on the tree.
     * @return {Array} - The values in the tree in post-order.
     */
    DFSPostOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);
        return data;
    }

    /**
     * Perform a depth-first search (DFS) in in-order on the tree.
     * @return {Array} - The values in the tree in in-order.
     */
    DFSInOrder() {
        const data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
}

module.exports = BinarySearchTree;
