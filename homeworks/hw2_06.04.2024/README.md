
# DataTransformLibrary

DataTransformLibrary is a JavaScript library offering advanced data transformation functions. It enables conversion between different types of data, adding values of various types, inverting boolean values, and much more.

## Features

- Converting values to their string representation
- Converting values to numbers
- Converting values to boolean values
- Adding values of different types
- Converting values to arrays
- Inverting boolean values

## Installation

You can add DataTransformLibrary to your project by cloning the repository:

```
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw2_06.04.2024
```

## Usage

### CommonJS

```javascript
const DataTransformLibrary = require('./path/to/DataTransformLibrary.js');

const stringified = DataTransformLibrary.stringifyValue({ key: 'value' });
console.log(stringified); // '{"key":"value"}'
```

### ES6 Modules

```javascript
import DataTransformLibrary from './path/to/DataTransformLibrary.js';

const number = DataTransformLibrary.convertToNumber("123.45");
console.log(number); // 123.45
```

### Examples

**Converting to string:**

```javascript
console.log(DataTransformLibrary.stringifyValue([1, 2, 3])); // "[1,2,3]"
```

**Adding values:**

```javascript
console.log(DataTransformLibrary.addValues(5, 10)); // 15
console.log(DataTransformLibrary.addValues('Hello, ', 'world!')); // "Hello, world!"
```

**Converting to boolean:**

```javascript
console.log(DataTransformLibrary.convertToBoolean("false")); // false
```

**Converting to array:**

```javascript
console.log(DataTransformLibrary.coerceToType("123", "array")); // ["123"]
```

## License

DataTransformLibrary is made available under the MIT License. See the LICENSE file in the repository for full terms.

## Contribution

We encourage you to report bugs, suggest new features, and create pull requests. All contributions are welcome.
