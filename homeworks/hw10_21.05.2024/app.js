const CustomHashTable = require('./structures/CustomHashTable');

/**
 * Demonstrates the usage of CustomHashTable and SinglyLinkedList classes.
 */
function demonstrateHashTable() {
    const hashTable = new CustomHashTable();
    hashTable.insert('name', 'Przemek');
    hashTable.insert('age', 44);
    hashTable.insert('city', 'Olsztyn');

    console.log(hashTable.get('name')); // Output: Przemek
    console.log(hashTable.get('age')); // Output: 44
    console.log(hashTable.get('city')); // Output: Olsztyn

    hashTable.delete('age');
    console.log(hashTable.get('age')); // Output: undefined

    const entries = hashTable.entries();
    for (const [key, value] of entries) {
        console.log(key, value);
    }
}

demonstrateHashTable();
