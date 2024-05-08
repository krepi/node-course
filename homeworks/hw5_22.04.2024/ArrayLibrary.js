/**
 * @fileoverview ArrayLibrary - a library offering advanced arrays modifying functions.
 *
 * This library provides a set of functions for manipulating objects , including:
 * - Filter unique elements of arrays based on callback's logic
 * - Divide the given array into smaller arrays of specified size
 * - Shuffle array elements. As a shuffler was used  Fisher-Yates algorythm
 * - Return array containing common elements of two given arrays
 * - Measure performance of given methods
 * - end much more..
 *
 * @example
 * // Usage with CommonJS modules
 * const ArraysLibrary  = require("./ArraysLibrary.js");
 *
 * // Usage with ES6 modules
 * import ArraysLibrary  from "./ArraysLibrary.js";
 *
 * // Example usage
 * const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * try {
 *    const shuffledNumbers = ArrayLibrary.customShuffle(numbers);
 *    console.log("Shuffled array:", shuffledNumbers);
 * } catch (error) {
 *   console.error(error);
 * }
 *  try {
 *   const timeShuffle = ArrayLibrary.measureArrayPerformance(
 *   ArrayLibrary.customShuffle,
 *   [numbers]
 * );
 *  console.log("time Shuffle =", timeShuffle);
 * } catch (error) {
 *   console.error(error);
 * }
 *
 *
 * @see For more information and additional examples, refer to the README.md file.
 */

class ArrayLibrary {
    // Task 1: Advanced Array Filtering
    /**
     * Filter unique elements of arrays based on callback's logic
     * @param {Array} array array to be filtered
     * @param {Function}  callback callback function to determine uniqueness.
     * @returns {Array} array with unique elements based on the callback's function
     */
    static customFilterUnique(array, callback) {
        const uniqueResults = new Map();
        for (const item of array) {
            const key = callback(item);
            if (!uniqueResults.has(key)) {
                uniqueResults.set(key, item);
            }
        }
        return Array.from(uniqueResults.values());
    }

    // Task 2: Array Chunking
    /**
     * Divide the given array into smaller arrays of specified size
     * @param {Array} array array given to separate
     * @param {number} chunk lenght of separated part, must be a positive number and less than or equal to the array length.
     * @returns {Array} array of arrays with separated parts
     */
    static chunkArray(array, chunk) {
        if (chunk > array.length || chunk <= 0) {
            throw new Error("Chunk size must be a positive number and less than or equal to the array length.");
        }
        let chunks = [];
        for (let i = 0; i < array.length; i += chunk) {
            chunks.push(array.slice(i, i + chunk));
        }

        return chunks;
    }

    //Task 3: Array Shuffling
    /**
     * Shuffle array elements. As a shuffler was used  Fisher-Yates algorythm
     * @param {Array} array array given to shuffle
     * @returns {Array} shuffled array
     */
    static customShuffle(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }

    //Task 4: Array Intersection and Union
    /**
     * Return array containing common elements of two given arrays
     * @param {Array} arrayOne array to find intersection
     * @param {Array} arrayTwo array to find intersection
     * @returns {Array} array of common elements
     */
    static getArrayIntersection(arrayOne, arrayTwo) {
        const set = new Set(arrayTwo);
        return arrayOne.filter((x) => set.has(x));
    }

    /**
     * Return array containing elements without duplicates from two given arrays
     * @param {Array} arrayOne array to union
     * @param {Array} arrayTwo array to union
     * @returns {Array} array contains elements after union
     */
    static getArrayUnion(arrayOne, arrayTwo) {
        const set = new Set([...arrayOne, ...arrayTwo]);
        return Array.from(set);
    }

    //Task 5: Array Performance Analysis
    /**
     *  Measure performance of given methods
     * @param {Array} args array of arguments measured method
     * @param {Function} fn method to measure
     * @returns {String} information of time elapsed
     */
    static measureArrayPerformance(fn, args) {
        let t1 = performance.now();
        fn(...args);
        let t2 = performance.now();
        return `Time elapsed: ${(t2 - t1) / 1000}`;
    }
}

module.exports = ArrayLibrary;
