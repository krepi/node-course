const ObjectsLib = require("./ObjectsLib.js");
// Task 1: Object Property Manipulation
/**
 * @typedef {Object} Person
 * @property {string} firstName - The first name of the person.
 * @property {string} lastName - The last name of the person.
 * @property {number} age - The age of the person.
 * @property {string} email - The email address of the person.
 * @property {Object} grades - The grades of the person.
 * @property {number} grades.math - The math grade of the person.
 * @property {number} grades.eng - The English grade of the person.
 * @property {Array<number>} array - An array property.
 * @property {Function} updateInfo - A function to update person information.
 */

/**
 * Task 1: Object Property Manipulation
 * @type {Person}
 */
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  grades: {
    math: 4,
    eng: 3,
  },
  array: [1, 2, 3],
  /**
   * Updates the person information with the provided newInfo object.
   *
   * @param {Object} newInfo - The object containing new information to update.
   */
  updateInfo(newInfo) {
    Object.keys(newInfo).forEach((key) => {
      if (
        this.hasOwnProperty(key) &&
        Object.getOwnPropertyDescriptor(this, key).writable
      ) {
        this[key] = newInfo[key];
      } else {
        console.log(`Cannot update read-only property: ${key}`);
        //  throw new Error(`Cannot update read-only property: ${key}`);
      }
    });
  },
};
Object.defineProperty(person, "firstName", { writable: false });
Object.defineProperty(person, "lastName", { writable: false });
Object.defineProperty(person, "age", { writable: false });
Object.defineProperty(person, "email", { writable: false });

Object.defineProperty(person, "address", {
  value: {},
  enumerable: false,
  configurable: false,
});
//Task 1 logs :
console.log("\nTask 1: Object Property Manipulation\n");
console.log("Before update: ", person);
person.updateInfo({
  firstName: "Jane",
  age: 32,
  address: { city: "New York", country: "USA" },
  grades: { math: 2, eng: 2 },
});
console.log("After Update :", person);

// Task 2: Object Property Enumeration and Deletion

const product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

Object.defineProperty(product, "price", { enumerable: false, writable: false });
Object.defineProperty(product, "quantity", {
  enumerable: false,
  writable: false,
});

//Task 2 logs
console.log("\nTask 2: Object Property Enumeration and Deletion\n");
console.log("Total price :", ObjectsLib.getTotalPrice(product));
ObjectsLib.deleteNonConfigurable(product, "price");
console.log("product after : ", product.price);

// Task 3: Object Property Getters and Setters
const bankAccount = {
  _balance: 1000,
  get balance() {
    return this._balance;
  },

  set balance(amount) {
    this._balance = amount;
    this.formattedBalance = `$${amount}`;
  },
  get formattedBalance() {
    return `$${this._balance}`;
  },
  /**
   * Transfers an amount from sender to receiver.
   *
   * @param {Object} sender - The sender account.
   * @param {Object} receiver - The receiver account.
   * @param {number} amount - The amount to transfer.
   */
  transfer(sender, receiver, amount) {
    sender.balance -= amount;
    receiver.balance += amount;
  },
};

Object.defineProperty(bankAccount, "formattedBalance", { enumerable: false });

// Task 3 logs
console.log("\nTask 3: Object Property Getters and Setters\n");
const account1 = Object.create(bankAccount);
const account2 = Object.create(bankAccount);
account1.transfer(account1, account2, 300);

console.log("After transfer (sender): ", account1.balance);
console.log("After transfer (sender):", account1.formattedBalance);
console.log("After transfer (receiver):", account2.balance);
console.log("After transfer (receiver):", account2.formattedBalance);

//Task 4: Advanced Property Descriptors
console.log("\nTask 4: Advanced Property Descriptors\n");
const immutablePerson = ObjectsLib.createImmutableObject(person);
console.log("Immutable: ", immutablePerson);
immutablePerson.updateInfo({
  firstName: "Jane",
  age: 32,
  address: { city: "New York", country: "USA" },
  grades: { math: 5, eng: 5 },
});
immutablePerson.grades.math = 3;
immutablePerson.array[0] = 7;
immutablePerson.array[1] = 7;
console.log("\nImmutable after update: ", immutablePerson);

//Task 5: Object Observation
console.log("\nTask 5: Object Observation\n");
const observedPerson = ObjectsLib.observeObject(person, (prop, action) => {
  console.log(`Property "${prop}" was ${action} on the object `);
});
console.log(observedPerson.firstName);
observedPerson.age = 35;

//   Task 6: Object Deep Cloning
console.log("\nTask 6: Object Deep Cloning\n");
const deepClone = ObjectsLib.deepCloneObject(person);
console.log("cloned ", deepClone);

// Task 7: Object Property Validation
console.log("\nTask 7: Object Property Validation\n");
const schema = {
  firstName: "string",
  lastName: "string",
  age: "number",
  email: "string",
  grades: {
    math: "number",
    eng: "number",
  },
  array: "object",
  updateInfo: "function",
};

const isValid = ObjectsLib.validateObject(person, schema);
console.log(`The object is valid ? = ${isValid}`);
