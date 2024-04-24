const ArrayLibrary = require("./ArrayLibrary.js");

//Datas

const objectsArray = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Anna" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Bob" },
  { id: 5, name: "Charlie" },
];
const a = { name: 1 };
const b = a;
const arr1 = [1, 2, 3];
const arr2 = [{ name: 1 }, { name: 2 }, { name: 2 }, b, a, 3, 2];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Task:1
const uniqueByName = ArrayLibrary.customFilterUnique(
  objectsArray,
  (obj) => obj.name
);

//Task: 2
const chunkies = ArrayLibrary.chunkArray(objectsArray, 3);

// Task: 3

const shuffledNumbers = ArrayLibrary.customShuffle(numbers);

//Task: 4
const union = ArrayLibrary.getArrayUnion(arr1, arr2);
const intersection = ArrayLibrary.getArrayIntersection(arr1, arr2);

//Task: 5
const timeCustomFilter = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.customFilterUnique,
  [objectsArray, (obj) => obj.name]
);

const timeChunkie = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.chunkArray,
  [objectsArray, 2]
);
const timeUnion = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.getArrayUnion,
  [arr1, arr2]
);

const timeShuffle = ArrayLibrary.measureArrayPerformance(
  ArrayLibrary.customShuffle,
  [numbers]
);

console.log("Custom filtred ", uniqueByName);
console.log("Union ", union);
console.log("intersction ", intersection);
console.log("Chunkies ", chunkies);
console.log("Original array:", numbers);
console.log("Shuffled array:", shuffledNumbers);

console.log("time Filter =", timeCustomFilter);
console.log("time Chunkie =", timeChunkie);
console.log("time Union =", timeUnion);
console.log("time Shuffle =", timeShuffle);
