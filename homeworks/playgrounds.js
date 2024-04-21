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
  array: [1, 2, 3],

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

// function validateObject(obj, schema) {
//     for (let key in schema) {
//       if (!obj.hasOwnProperty(key)) {
//         return false;
//       }

//       if (typeof obj[key] !== schema[key]) {
//         return false;
//       }
//     }
//     return true;
//   }
  function validateObject(obj, schema) {
    for (const key in schema) {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (typeof schema[key] === 'object') {
        if (typeof obj[key] !== 'object' || !validateObject(obj[key], schema[key])) {
          return false;
        }
      } else if (typeof obj[key] !== schema[key]) {
        return false;
      }
    }
    return true;
  }
// function validateObject(obj, schema) {
//     const errors = [];
  
//     for (const key in schema) {
//       if (!obj.hasOwnProperty(key)) {
//         errors.push(`Missing property: ${key}`);
//         continue;
//       }
  
//       if (typeof schema[key] === 'object') {
//         if (typeof obj[key] !== 'object' || !validateObject(obj[key], schema[key])) {
//           errors.push(`Invalid value for property ${key}: ${obj[key]}`);
//         }
//       } else if (typeof obj[key] !== schema[key]) {
//         errors.push(`Invalid type for property ${key}: ${typeof obj[key]}, expected ${schema[key]}`);
//       }
//     }
  
//     if (errors.length > 0) {
//       console.log("Validation errors:");
//       errors.forEach(error => console.log(error));
//       return false;
//     }
  
//     return true;
//   }
console.log(validateObject(person, schema));
//     function createImmutableObject(obj) {
//       if (typeof obj !== "object" || obj === null) {
//         return obj;
//       }

//       const clone = Array.isArray(obj) ? [] : {};
// //iteruje po kluczach obiektu
//       for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//           const value = obj[key];
//           clone[key] =
//             typeof value === "object" && value !== null
//               ? this.createImmutableObject(value)
//               : value;

//           Object.defineProperty(clone, key, {
//             value: clone[key],
//             writable: false,
//             enumerable: true,
//             configurable: false
//           });
//         }
//       }

//       return clone;
//   };
//   function createImmutableObject2(obj) {
//    //sprawdzam czy to obiekt (tablica tez bedzie obiektem)
//     if (typeof obj !== "object" || obj === null) {
//       return obj;
//     }
// // Object.keys(obj) - daje tablice kluczy obiektu dlatego moge uzyc reduce
//     return Object.keys(obj).reduce((clone, key) => {
//       const value = obj[key];
//       clone[key] =
//         typeof value === "object" && value !== null
//           ? this.createImmutableObject(value)
//           : value;

//       Object.defineProperty(clone, key, {
//         value: clone[key],
//         writable: false,
//         enumerable: true,
//         configurable: false
//       });

//       return clone;
//     }, Array.isArray(obj) ? [] : {});
// }
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
// Object.defineProperty(person, "firstName", { writable: false });
// Object.defineProperty(person, "lastName", { writable: false });
// Object.defineProperty(person, "age", { writable: false });
// Object.defineProperty(person, "email", { writable: false });

// Object.defineProperty(person, "address", {
//   value: {},
//   enumerable: false,
//   configurable: false,
// });

// const person2 = {
//     firstName: "Jane",
//     lastname: "Der",
//     age: 32,
//     email: "john.doe@example.com",
//     address: { city: "New York", country: "USA" }
// };
// console.log(person)
// person.updateInfo(person2);

// console.log(person.address)
