# Programming Concepts Library

## Overview

This library is designed to demonstrate key programming principles and practices. It offers a set of classes that showcase different programming paradigms:

- **Immutability and Pure Functions**: Functions that do not alter the original data but create new instances instead.
- **Function Composition and Point-Free Style**: Building complex functions by combining simpler ones, focusing on the flow of data.
- **Closures and Higher-Order Functions**: Functions that create, manipulate, or return other functions, utilizing closures for state retention.
- **Recursion and Tail Call Optimization**: Recursive functions that call themselves, optimized to handle large inputs efficiently.
- **Lazy Evaluation and Generators**: Delaying computation until necessary, suitable for handling large or potentially infinite data sets.

## Installation

To use this library in your projects, download or clone the repository and include the files in your project directory.

\```bash
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw3_11.04.2024
\```

## Usage

### CommonJS Modules

You can import the required classes from the library like so:

\```javascript
const { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } = require("./library.js");
\```

### ES6 Modules

For those using ES6 modules, import the classes using the following syntax:

\```javascript
import { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } from './library.js';
\```

### Example Code

Here is an example of how to use the `PureFunctions` class to apply discounts and calculate total price:

\```javascript
const products = [{ price: 100 }, { price: 200 }];
const discountedProducts = PureFunctions.calculateDiscountedPrice(products, 10);
console.log(discountedProducts); // [{ price: 90 }, { price: 180 }]

const totalPrice = PureFunctions.calculateTotalPrice(discountedProducts);
console.log('Total Price:', totalPrice); // Total Price: 270
\```

## Documentation

Each method in the classes is documented with JSDoc comments directly in the source code, providing a quick reference directly in your IDE or when browsing the code.

## Contributing

Contributions to the library are welcome! Please ensure to follow the existing code style and include tests for new features.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
