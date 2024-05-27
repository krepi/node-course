const CustomHashTable = require('./HashTable');

const hashTable = new CustomHashTable();
hashTable.insert('name', 'Alice');
hashTable.insert('age', 30);
hashTable.insert('city', 'Wonderland');

console.log(hashTable.get('name')); // Output: Alice
console.log(hashTable.get('age')); // Output: 30
console.log(hashTable.get('city')); // Output: Wonderland

hashTable.delete('age');
console.log(hashTable.get('age')); // Output: undefined