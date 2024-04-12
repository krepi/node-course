/**
 * @fileoverview FunctionsLib - a library offering advanced data transformation functions.
 *
 * This library provides a set of functions for data type transformations, including:
 * - Converting values between different types (e.g., to string, number, boolean, array)
 * - Adding values of various types
 * - Inverting boolean values
 *
 * @example
 * // Usage with CommonJS modules
 * const FunctionsLib = require("./DFunctionsLib.js");
 *
 * // Usage with ES6 modules
 * import FunctionsLib from "./FunctionsLib.js";
 *
 * // Example usage
 * try {
 *   const result = DataTransformLibrary.addValues(5, 10);
 *   console.log(result); // 15
 * } catch (error) {
 *   console.error(error);
 * }
 *
 * @see For more information and additional examples, refer to the README.md file.
 */

class FunctionsLib {
  
  
    static calculatedDiscountedPrice(products, discount) {
    return products.map((product) => ({
      ...product,
      price: product.price * (1 - discount / 100),
    }));
  }
}
