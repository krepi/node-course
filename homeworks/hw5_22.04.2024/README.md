# Custom Array Methods Library

## Overview

This library is designed to demonstrate key programming principles and practices. It offers a set of classes that showcase different programming paradigms:

- **Advanced Array Filtering**: Function to filter an array of objects based on a specific property and return only unique objects.
- **Array Chunking**: The chunkArray function  divide the array into smaller arrays, each containing elements of the specified chunk size.
- **Array Shuffling**: Function customShuffle that takes an array as an argument and returns a new array with its elements randomly shuffled.
- **Array Intersection and Union**: Functions that take two arrays as a arguments and return common or  unique elements from both arrays without any duplicates.
- **Array Performance Analysis**: The measureArrayPerformance function  execute the provided function with the given array as input and measure the execution time.

## Installation

To use this library in your projects, download or clone the repository and include the files in your project directory.

```bash
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw5_22.04.2024
```

## Usage

### CommonJS Modules

You can import the required classes from the library like so:

```javascript
const ArrayLibrary = require("./ArrayLibrary.js");
```

### ES6 Modules

For those using ES6 modules, import the classes using the following syntax:

```javascript
import ArrayLibrary from './ArrayLibrary.js';
```

### Example Code

Here is an example of how to use the `customShuffle` and `measureArrayPerformance` methods to shuffle randomly (using Fisher-Yates algorythm) array and measure time of it:

```javascript
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  try {
     const shuffledNumbers = ArrayLibrary.customShuffle(numbers);
     console.log("Shuffled array:", shuffledNumbers);
  } catch (error) {
    console.error(error);
  }
   try {
    const timeShuffle = ArrayLibrary.measureArrayPerformance(
    ArrayLibrary.customShuffle,
    [numbers]
  );
   console.log("time Shuffle =", timeShuffle);
  } catch (error) {
    console.error(error);
  }
```

## Documentation

Each method in the classes is documented with JSDoc comments directly in the source code, providing a quick reference directly in your IDE or when browsing the code.

## Contributing

Contributions to the library are welcome! Please ensure to follow the existing code style and include tests for new features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.