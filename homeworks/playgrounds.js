const ArrayLibrary = require("./hw5_22.04.2024/ArrayLibrary.js");

function customFilterUnique(array, callback, unique = new Map()) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Rekurencyjne wywołanie z tą samą mapą
      customFilterUnique(item, callback, unique);
    } else if (typeof item === "object" && item !== null) {
      Object.keys(item).forEach((value) => {
        customFilterUnique([value], callback, unique);
      });
    } else {
      const key = callback(item);
      if (!unique.has(key)) {
        unique.set(key, item);
      }
    }
  });

  // W pierwszym wywołaniu zwracamy wyniki jako tablicę
  return Array.from(unique.values());
}
// Przykład użycia
const objectsArray = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Charlie" },
];

const uniqueByName = customFilterUnique(objectsArray, (obj) => obj.name);
// console.log(uniqueByName);
// const uniqueByNameRec = ArrayLibrary.customFilterUnique(objectsArray, obj => obj.name);
// console.log(uniqueByNameRec);

const a = { name: 1 };
const b = a;
const arr1 = [1, 2, 3];
const arr2 = [{ name: 1 }, { name: 2 }, { name: 2 }, b, a, 3, 2];

const union = ArrayLibrary.getArrayUnion(arr1, arr2);
const intersection = ArrayLibrary.getArrayIntersection(arr1,arr2);
const chunkies = ArrayLibrary.chunkArray(objectsArray, 3);
console.log("Union", union);
console.log("intersction", intersection);
console.log("Chunkies", chunkies);

const timeChunkie = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.chunkArray,
  [objectsArray, 2]
);
const timeUnion = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.getArrayUnion,
  [arr1, arr2]
);

console.log("time =", timeChunkie);
console.log("time Union = ", timeUnion);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let shuffledNumbers = ArrayLibrary.customShuffle(numbers);

console.log("Original array:", numbers);
console.log("Shuffled array:", shuffledNumbers);
// const product = {
//   name: "Laptop",
//   price: 1000,
//   quantity: 5,
// };

// console.log(ObjectsLib.getTotalPrice(product));

// function observeObject(obj, callback) {
//   return new Proxy(obj, {
//     get(target, prop, receiver) {
//       callback(prop, "get");
//       return Reflect.get(target, prop, receiver);
//     },
//     set(target, prop, value, receiver) {
//       callback(prop, "set");
//       return Reflect.set(target, prop, value, receiver);
//     },
//   });
// }

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [2, 3, [4, 5]],
// ];
// function recSumArrayElemnts(array) {
//   if (!Array.isArray(array)) {
//     return array;
//   }
//   return array.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       return acc + recSumArrayElemnts(item);
//     } else {
//       return acc + item;
//     }
//   }, 0);
// }

// function recCopyAndDoubleArray(array) {
//   if (!Array.isArray(array)) {
//     return array;
//   }

//   return array.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       acc.push(recCopyAndDoubleArray(item));
//     } else {
//       acc.push(item * 2);
//     }
//     return acc;
//   }, []);
// }

// function recForEach(array) {
//   if (!Array.isArray(array)) {
//     return array;
//   }
//   let clone = [];
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       clone.push(recForEach(item));
//     } else {
//       clone.push(item * 3);
//     }
//   });
//   return clone;
// }

// const ar = [3, 1, 2, 10, 1];
// const sumAr = (ar) => {
//   const arr = [];
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     if (i === 0) {
//       sum = ar[i];
//       arr.push(sum);
//     } else {
//       sum += ar[i];
//       arr.push(sum);
//     }
//   }
//   return arr;
// };

// console.log(array);
// // console.log(recSumArrayElemnts(array));
// console.log(recCopyAndDoubleArray(array));
// console.log(recForEach(array));
// console.log(sumAr(ar));

// const nums = [22, 7, 2, 8];
// const target = 9;
// const twoSum = function (nums, target) {
//   const comp = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (comp.hasOwnProperty(nums[i])) {
//       return [comp[nums[i]], i];
//     }
//     comp[target - nums[i]] = i;
//   }
// };
// console.log(twoSum(nums, target));

// const arrayY = [
//   "name",
//   function hello() {
//     console.log("hello");
//   },
// ];

// const [name, hello] = arrayY;

// hello();
// console.log(["hllo"] + 1);
