const ObjectsLib = require("./hw4_18.04.2024/ObjectsLib.js");

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  grades: {
    math: 4,
    eng: 3,
  },
  date: new Date(),
  funk() {
    return "ala";
  },

  updateInfo(newInfo) {
    Object.keys(newInfo).forEach((key) => {
      if (this.hasOwnProperty(key) && Object.getOwnPropertyDescriptor(this, key).writable) {
        this[key] = newInfo[key]
      } else {
         console.log(`Cannot update read-only property: ${key}`);
        //  throw new Error(`Cannot update read-only property: ${key}`);
      }
    });
  },
};


// const newPerson = clone(person);
// const newPerson = ObjectsLib.deepCloneObject(person);
// console.log(newPerson);
// console.log(person.date);

// function logChanges(prop, action) {
//   console.log(`Property "${prop}" was ${action}ted`);
// }
// const obj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "john.doe@example.com",
// };
// const observedObj = ObjectsLib.observeObject(obj, logChanges);

// observedObj.firstName;
// observedObj.age = 35;
// };
Object.defineProperty(person, "firstName", { writable: false });
Object.defineProperty(person, "lastName", { writable: false });
Object.defineProperty(person, "age", { writable: false });
Object.defineProperty(person, "email", { writable: false });

Object.defineProperty(person, "address", {
  value: {},
  enumerable: false,
  configurable: false,
});

const person2 = {
    firstName: "Jane",
    lastname: "Der",
    age: 32,
    email: "john.doe@example.com",
    address: { city: "New York", country: "USA" }
};
console.log(person)
person.updateInfo(person2);

console.log(person.address)
