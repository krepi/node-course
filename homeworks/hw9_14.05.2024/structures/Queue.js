const SinglyLinkedList = require('./SinglyLinkedList');

/**
 * Class representing a queue data structure.
 */
class Queue {
    constructor() {
        this.data = new SinglyLinkedList();
    }

    /**
     * Add an element to the end of the queue.
     * @param {*} val - The value to be added.
     * @return {Queue} - The queue instance.
     */
    enqueue(val) {
        this.data.push(val);
        return this;
    }

    /**
     * Remove and return the element from the front of the queue.
     * @return {undefined|*} - The removed element or undefined if the queue is empty.
     */
    dequeue() {
        const node = this.data.shift();
        return node ? node.val : undefined;
    }

    /**
     * Get the element at the front of the queue without removing it.
     * @return {undefined|*} - The element at the front of the queue or undefined if the queue is empty.
     */
    peek() {
        return this.data.head ? this.data.head.val : undefined;
    }

    /**
     * Check if the queue is empty.
     * @return {boolean} - True if the queue is empty, false otherwise.
     */
    isEmpty() {
        return this.data.length === 0;
    }
}

/**
 * Class representing a priority queue data structure.
 */
class PriorityQueue {
    constructor() {
        this.priorityQueues = {};
        this.priorities = [];
    }

    /**
     * Add an element to the priority queue with a given priority.
     * @param {*} val - The value to be added.
     * @param {number} priority - The priority of the value.
     */
    enqueue(val, priority) {
        if (!this.priorityQueues[priority]) {
            this.priorityQueues[priority] = new Queue();
            this.priorities.push(priority);
            this.priorities.sort((a, b) => a - b);
        }
        this.priorityQueues[priority].enqueue(val);
    }

    /**
     * Remove and return the highest priority element from the queue.
     * @return {undefined|Object} - An object containing the value and its priority, or undefined if the queue is empty.
     */
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const highestPriority = this.priorities[0];
        const value = this.priorityQueues[highestPriority].dequeue();
        if (this.priorityQueues[highestPriority].isEmpty()) {
            delete this.priorityQueues[highestPriority];
            this.priorities.shift();
        }
        return {val: value, priority: highestPriority};
    }

    /**
     * Check if the priority queue is empty.
     * @return {boolean} - True if the priority queue is empty, false otherwise.
     */
    isEmpty() {
        return this.priorities.length === 0;
    }
}

module.exports = {Queue, PriorityQueue};
