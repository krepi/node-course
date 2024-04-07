// import { DataTransformLibrary } from "./lib.js";
const DataTransformLibrary = require("./lib.js");

console.log(DataTransformLibrary.convertToNumber("1234"));
console.log(DataTransformLibrary.stringifyValue({ name: "jan", age: 33 }));
console.log(DataTransformLibrary.stringifyValue(123));
try {
  console.log(DataTransformLibrary.convertToNumber(false));
} catch (error) {
  console.log(error);
}
try {
  console.log(DataTransformLibrary.coerceToType({}, "boolean"));
} catch (error) {
  console.log(error);
}
