const SinglyLinkedList = require('./SinglyLinkedList');

class CustomHashTable {
    constructor(size = 3) {
        this.size = size;
        this.buckets = Array.from({length: size}, () => new SinglyLinkedList());
        this.itemCount = 0; // To keep track of the number of items
    }

    /**
     * Converts the key to a string representation based on its type.
     * @param {string|object|number|function} key - The key to be converted.
     * @returns {string} The string representation of the key.
     */
    _keyToString(key) {
        if (typeof key === 'string') {
            return key;
        } else if (typeof key === 'object' && key !== null) {
            return JSON.stringify(key);
        } else if (typeof key === 'number') {
            return key.toString();
        } else if (typeof key === 'function') {
            return key.toString();
        } else {
            throw new Error('Unsupported key type');
        }
    }

    /**
     * Custom hash function used within the class.
     * @param {string|object|number|function} key - The key to be hashed.
     * @returns {number} The index in the hash table.
     */
    hash(key) {
        return this._hash(this._keyToString(key)) % this.size;
    }

    /**
     * Helper hash function that processes string keys.
     * This function generates a hash code by iterating through each character of the key,
     * converting it to a numeric value, and combining these values using a prime multiplier.
     *
     * @param {string} key - The string key to be hashed.
     * @returns {number} The hash code of the key.
     */
    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value);
        }
        return total;
    }

    /**
     * Resizes the hash table to the new size and rehashes all elements.
     * @param {number} newSize - The new size of the hash table.
     */
    _resize(newSize) {
        const oldBuckets = this.buckets;
        this.size = newSize;
        this.buckets = Array.from({length: newSize}, () => new SinglyLinkedList());
        this.itemCount = 0;

        for (let bucket of oldBuckets) {
            let current = bucket.head;
            while (current) {
                this.insert(current.val.key, current.val.value);
                current = current.next;
            }
        }
    }

    /**
     * Checks the load factor and resizes the table if necessary.
     */
    _checkLoadFactor() {
        const loadFactor = this.itemCount / this.size;
        if (loadFactor > 0.7) {
            this._resize(this.size * 2);
        }
    }

    /**
     * Inserts a key-value pair into the hash table.
     * @param {string|object|number|function} key - The key.
     * @param {*} value - The value.
     */
    insert(key, value) {
        this._checkLoadFactor();
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const node = bucket.listValuesToArray().find(item => item.key === key);
        if (node) {
            node.value = value;
        } else {
            bucket.push({key, value});
            this.itemCount++;
        }
    }

    /**
     * Retrieves a value by its key from the hash table.
     * @param {string|object|number|function} key - The key.
     * @returns {*} The value associated with the key, or undefined if not found.
     */
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const node = bucket.listValuesToArray().find(item => item.key === key);
        return node ? node.value : undefined;
    }

    /**
     * Deletes a key-value pair from the hash table.
     * @param {string|object|number|function} key - The key to be deleted.
     * @returns {boolean} True if the key was deleted, false if not found.
     */
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const nodeIndex = bucket.listValuesToArray().findIndex(item => item.key === key);
        if (nodeIndex !== -1) {
            bucket.remove(nodeIndex);
            this.itemCount--;
            return true;
        }
        return false;
    }

    /**
     * Returns an array of all key-value pairs in the hash table.
     * @returns {Array} An array of [key, value] pairs.
     */
    entries() {
        const allEntries = [];
        for (let bucket of this.buckets) {
            let current = bucket.head;
            while (current) {
                allEntries.push([current.val.key, current.val.value]);
                current = current.next;
            }
        }
        return allEntries;
    }
}

module.exports = CustomHashTable;
