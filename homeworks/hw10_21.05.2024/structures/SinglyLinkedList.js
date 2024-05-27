/**
 * Class representing a node in a singly linked list.
 */
class Node {
    /**
     * Create a node.
     * @param {*} val - The value of the node.
     */
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Class representing a singly linked list.
 */
class SinglyLinkedList {
    /**
     * Create a singly linked list.
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Add an item at the end of the list (new tail).
     * @param {*} val - The value to be added.
     * @return {SinglyLinkedList} The updated list.
     */
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    /**
     * Remove and return the last item from the list (tail) and set a new tail.
     * @return {Node|undefined} The removed node or undefined if the list is empty.
     */
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        newTail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /**
     * Remove and return the first item from the list (current head) and set a new head.
     * @return {Node|undefined} The removed node or undefined if the list is empty.
     */
    shift() {
        if (!this.head) return undefined;

        let removedNode = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode;
    }

    /**
     * Add a new node to the beginning of the list (set new head).
     * @param {*} val - The value to be added.
     * @return {SinglyLinkedList} The updated list.
     */
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * Retrieve a node by its index in the list.
     * @param {number} index - The index of the node to retrieve.
     * @return {Node|null} The node if found, or null if the index is out of range.
     */
    get(index) {
        if (!this.head || index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /**
     * Set the value of a node at a specific index.
     * @param {number} index - The index of the node to set.
     * @param {*} value - The new value for the node.
     * @return {boolean} True if the value was set, false if the index is out of range.
     */
    set(index, value) {
        let nodeToSet = this.get(index);
        if (nodeToSet) {
            nodeToSet.val = value;
            return true;
        }
        return false;
    }

    /**
     * Insert a new node with a given value at a specific index.
     * @param {number} index - The index at which to insert the new node.
     * @param {*} value - The value of the new node.
     * @return {boolean} True if the node was inserted, false if the index is out of range.
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        if (prevNode) {
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    /**
     * Remove a node at a specific index.
     * @param {number} index - The index of the node to remove.
     * @return {Node|undefined} The removed node, or undefined if the index is out of range.
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    /**
     * Reverse the list in place.
     * @return {SinglyLinkedList} The reversed list.
     */
    reverse() {
        let current = this.head;
        let prev = null;
        this.tail = current;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }

    /**
     * Convert the list values to an array.
     * @return {Array} An array of the list values.
     */
    listValuesToArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }

    /**
     * Detect if the linked list has a cycle using Floyd's Cycle Detection Algorithm.
     * @return {boolean} True if the linked list has a cycle, false otherwise.
     */
    hasCycle() {
        if (!this.head || !this.head.next) return false;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) return true;
        }

        return false;
    }
}

module.exports = SinglyLinkedList;
