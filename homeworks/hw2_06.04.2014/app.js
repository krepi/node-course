// import { DataTransformLibrary } from "./DataTransformLibrary.js";
const DataTransformLibrary = require("./DataTransformLibrary.js");

try {
  console.log(DataTransformLibrary.stringifyValue([2, 3, 4]));
  console.log(
    DataTransformLibrary.stringifyValue({ numb1: 2, numb2: 3, numb3: 4 })
  );
  console.log(DataTransformLibrary.stringifyValue(123));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(DataTransformLibrary.convertToNumber([2, 3]));
  console.log(DataTransformLibrary.convertToNumber(false));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(DataTransformLibrary.coerceToType({}, "boolean"));
} catch (error) {
  console.log(error.message);
}
try {
  console.log(
    DataTransformLibrary.addValues(
      { key1: 22, key2: 33 },
      { key3: 22, key4: 22 }
    )
  );
  console.log(DataTransformLibrary.addValues("333", "4444"));
} catch (error) {
  console.log(error.message);
}
