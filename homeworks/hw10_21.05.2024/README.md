# Project Documentation

## Table of Contents

- [Overview](#overview)
- [Classes and Relationships](#classes-and-relationships)
    - [SinglyLinkedList](#singlylinkedlist-located-in-structuressinglylinkedlistjs)
    - [Node](#node-used-within-singlylinkedlist)
    - [CustomHashTable](#customhashtable-located-in-structurescustomhashtablejs)
- [Usage Example](#usage-example)
- [File Structure](#file-structure)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)

## Overview

This documentation provides a detailed look at the `CustomHashTable` class, its methods, and how it interacts with
the `SinglyLinkedList` class. This project models a hash table with a custom hash function, collision handling using
linked lists, and dynamic resizing to maintain an efficient load factor.
The `SinglyLinkedList` class located in the structures folder can be imported from a previous project if you already
have
it implemented. For convenience, the file is also included in this repository.

#### Why Prime Numbers?

Prime numbers are used in the hash table for the size of the table and in the `_hash` function to reduce the likelihood
of collisions and ensure a more uniform distribution of hash values. Here’s why:

- **Table Size**: Using a prime number for the table size helps in evenly distributing keys across the buckets. It
  minimizes the risk of keys clustering into certain buckets, which can happen if the table size shares a common factor
  with the hash values.
- **Prime Multiplier**: The `_hash` function uses a prime number (`31` in this case) to combine character values. Primes
  help to produce a good distribution of hash codes by reducing patterns that can lead to collisions.

## Classes and Relationships

This section details the classes, their methods, and how they relate to one another. This project
uses `SinglyLinkedList` to handle collisions in the hash table.

### CustomHashTable (located in `structures/CustomHashTable.js`)

A class representing a hash table with a custom hash function. This class uses `SinglyLinkedList` to handle collisions.

#### Methods:

- `_keyToString(key)`: Converts the key to a string representation based on its type.
    - **O(1)**
- `hash(key)`: Computes the hash code for the given key and returns the index in the hash table.
    - **O(1)**
- `_hash(key)`: Helper hash function that processes string keys.
    - **O(n)**, where n is the length of the string (up to 100 characters)
- `_resize(newSize)`: Resizes the hash table to the new size and rehashes all elements.
    - **O(n)**, where n is the number of elements in the table
- `_checkLoadFactor()`: Checks the load factor and resizes the table if necessary.
    - **O(1)**
- `insert(key, value)`: Inserts a key-value pair into the hash table.
    - **O(1)** on average, **O(n)** in the worst case
- `get(key)`: Retrieves a value by its key from the hash table.
    - **O(1)** on average, **O(n)** in the worst case
- `delete(key)`: Deletes a key-value pair from the hash table.
    - **O(1)** on average, **O(n)** in the worst case
- `entries()`: Returns an array of all key-value pairs in the hash table.
    - **O(n)**

### SinglyLinkedList (located in `structures/SinglyLinkedList.js`)

A class representing a singly linked list. This class is used in the implementation of the `CustomHashTable` class for
handling collisions.

#### Methods:

- `push(val)`: Adds an item to the end of the list. **O(1)**
- `pop()`: Removes and returns the last item from the list. **O(n)**
- `shift()`: Removes and returns the first item from the list. **O(1)**
- `unshift(val)`: Adds an item to the beginning of the list. **O(1)**
- `get(index)`: Retrieves a node by its index. **O(n)**
- `set(index, value)`: Sets the value of a node at a specific index. **O(n)**
- `insert(index, value)`: Inserts a node at a specific index. **O(n)**
- `remove(index)`: Removes a node at a specific index. **O(n)**
- `reverse()`: Reverses the list. **O(n)**
- `listValuesToArray()`: Converts the list values to an array. **O(n)**
- `hasCycle()`: Detects if the linked list has a cycle using Floyd's Cycle Detection Algorithm. **O(n)**

### Node (used within SinglyLinkedList)

A class representing a node in a singly linked list.

#### Constructor:

- Accepts a value and initializes `next` for linked list nodes. **O(1)**

## Usage Example

```javascript

const CustomHashTable = require('./structures/CustomHashTable');

/**
 * Demonstrates the usage of CustomHashTable and SinglyLinkedList classes.
 */
function demonstrateHashTable() {
    const hashTable = new CustomHashTable();
    hashTable.insert('name', 'Alice');
    hashTable.insert('age', 30);
    hashTable.insert('city', 'Wonderland');

    console.log(hashTable.get('name')); // Output: Alice
    console.log(hashTable.get('age')); // Output: 30
    console.log(hashTable.get('city')); // Output: Wonderland

    hashTable.delete('age');
    console.log(hashTable.get('age')); // Output: undefined

    const entries = hashTable.entries();
    for (const [key, value] of entries) {
        console.log(key, value);
    }
}

demonstrateHashTable();
```

### File Structure

- `/structures`
    - `SinglyLinkedList.js` - Contains `SinglyLinkedList` and `Node`.
    - `CustomHashTable.js` - Contains `CustomHashTable`.
- `app.js` - Main application script that demonstrates the usage of the above structures.

### Directory Structure

```project-root
│   app.js
│
└───structures
│   SinglyLinkedList.js
│   CustomHashTable.js

```

### Getting Started

This section provides a quick guide on how to set up and start using the project.

#### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. This project uses ES6 features and depends on
Node.js for its environment. Visit Node.js official website to download and install it if you haven't already.

#### Installation

Clone the repository:

```
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw10_21.05.2024
cd hw10_21.05.2024
```

#### Running the application:

To start the application, run:

```
node app.js
```

### Note

All methods are documented using JSDoc comments to explain their functionality, parameters, and return values.
The notation O(1), O(n), etc., denotes the time complexity of each method, providing insights into their performance
characteristics.