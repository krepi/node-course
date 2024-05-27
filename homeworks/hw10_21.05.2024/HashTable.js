const SinglyLinkedList = require('../hw9_14.05.2024/structures/SinglyLinkedList');

class CustomHashTable {
    constructor(size = 50) {
        this.size = size;
        this.buckets = Array.from({length: size}, () => new SinglyLinkedList());
    }

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

    hash(key) {
        return this._hash(this._keyToString(key)) % this.size;
    }

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

    insert(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const node = bucket.listValuesToArray().find(item => item.key === key);
        if (node) {
            node.value = value;
        } else {
            bucket.push({key, value});
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const node = bucket.listValuesToArray().find(item => item.key === key);
        return node ? node.value : undefined;
    }

    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        const nodeIndex = bucket.listValuesToArray().findIndex(item => item.key === key);
        if (nodeIndex !== -1) {
            bucket.remove(nodeIndex);
            return true;
        }
        return false;
    }
}

module.exports = CustomHashTable;


