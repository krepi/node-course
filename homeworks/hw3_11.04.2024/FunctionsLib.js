/**
 * @fileoverview Programming Concepts Library - a comprehensive library showcasing different programming paradigms.
 *
 * This library is designed to demonstrate key programming principles and practices, such as:
 * - Immutability and Pure Functions: Create new data instances rather than altering the original data.
 * - Function Composition and Point-Free Style: Build complex functions by combining simpler functions, focusing on data flow rather than data manipulation.
 * - Closures and Higher-Order Functions: Use functions that manipulate, create, or return other functions, enhancing functionality through closures.
 * - Recursion and Tail Call Optimization: Implement functions that call themselves for data processing, optimized to handle large inputs without consuming call stack.
 * - Lazy Evaluation and Generators: Delay computation until necessary and efficiently handle potentially infinite data sets.
 *
 * @example
 * // Usage with CommonJS modules
 * const { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } = require("./library.js");
 *
 * // Usage with ES6 modules
 * import { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } from './library.js';
 *
 * // Example usage
 * try {
 *   const products = [{ price: 100 }, { price: 200 }];
 *   const discountedProducts = PureFunctions.calculateDiscountedPrice(products, 10);
 *   console.log(discountedProducts); // [{ price: 90 }, { price: 180 }]
 *
 *   const fullName = FunctionComposition.getFullName({ firstName: "Jane", lastName: "Doe" });
 *   console.log(fullName); // "Jane Doe"
 * } catch ( error) {
 *   console.error(error);
 * }
 *
 * @see For detailed documentation on each function and more examples, refer to the README.md file.
 */


// Task 1: Immutability and Pure Functions
class PureFunctions {
    /**
     * Calculate discounted prices for each product.
     * @param {Array<{price: number}>} products - Array of products with price property.
     * @param {number} discount - The discount percentage to apply.
     * @returns {Array<{price: number}>} New array with discounted prices.
     */
    static calculateDiscountedPrice(products, discount) {
        return products.map(product => ({
            ...product,
            price: product.price * (1 - discount / 100)
        }));
    }

    /**
     * Calculate the total price of all products.
     * @param {Array<{price: number}>} products - Array of products with price property.
     * @returns {number} Total price of the products.
     */
    static calculateTotalPrice(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }
}

// Task 2: Function Composition and Point-Free Style
class FunctionComposition {
    /**
     * Get full name of a person.
     * @param {{firstName: string, lastName: string}} person - Object with firstName and lastName properties.
     * @returns {string} Full name in the format "FirstName LastName".
     */
    static getFullName(person) {
        return `${person.firstName} ${person.lastName}`;
    }

    /**
     * Filter unique words from a text and sort them alphabetically.
     * @param {string} text - The input text.
     * @returns {string[]} Array of unique, sorted words.
     */
    static filterUniqueWords(text) {
        return [...new Set(text.match(/\w+/g))].sort();
    }

    /**
     * Calculate the average grade from an array of students.
     * @param {Array<{grades: number}>} students - Array of students.
     * @returns {number} Average grade of all students.
     */
    static getAverageGrade(students) {
        const total = students.reduce((sum, student) => sum + student.grades, 0);
        return total / students.length;
    }
}

// Task 3: Closures and Higher-Order Functions
class ClosuresHigherOrder {
    /**
     * Creates a counter function that increments each call.
     * @returns {function(): number} A counter function.
     */
    static createCounter() {
        let count = 0;
        return () => ++count;
    }

    /**
     * Create a function that repeats another function a specified number of times.
     * @param {Function} func - The function to repeat.
     * @param {number} num - The number of times to repeat the function.
     * @returns {Function} A new function that when called, will execute the original function the specified number of times.
     */
    static repeatFunction(func, num) {
        return function() {
            if (num >= 0) {
                for (let i = 0; i < num; i++) {
                    func();
                }
            } else {
                while(true) {
                    func();
                }
            }
        };
    }
}

// Task 4: Recursion and Tail Call Optimization
class RecursionOptimization {
    /**
     * Calculates the factorial of a number using tail recursion.
     * @param {number} n - The number to find the factorial of.
     * @param {number} accumulator - The accumulator to hold the factorial result.
     * @returns {number} Factorial of the number.
     */
    static calculateFactorial(n, accumulator = 1) {
        if (n <= 1) return accumulator;
        return this.calculateFactorial(n - 1, n * accumulator);
    }

    /**
     * Calculates the power of a base raised to an exponent recursively.
     * @param {number} base - The base number.
     * @param {number} exponent - The exponent.
     * @returns {number} Result of raising the base to the exponent.
     */
    static power(base, exponent) {
        if (exponent === 0) return 1;
        return base * this.power(base, exponent - 1);
    }
}

// Task 5: Lazy Evaluation and Generators
class LazyEvaluation {
    /**
     * Create a lazy evaluator for mapping over an array.
     * @param {Array} array - The array to map over.
     * @param {Function} func - The mapping function to apply to each element.
     * @returns {Object} An iterator-like object that lazily applies the mapping function.
     */
    static lazyMap(array, func) {
        let index = 0;
        return {
            next: function() {
                if (index < array.length) {
                    return { value: func(array[index++]), done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }

    /**
     * Generates Fibonacci numbers using a lazy evaluation approach.
     * @returns {Object} An iterator-like object that generates Fibonacci numbers.
     */
    static fibonacciGenerator() {
        let [a, b] = [0, 1];
        return {
            next: function() {
                let current = a;
                [a, b] = [b, a + b];
                return { value: current, done: false };
            }
        };
    }
}
//CommonJS
module.exports = { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation };
//ES6
// export { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation };
