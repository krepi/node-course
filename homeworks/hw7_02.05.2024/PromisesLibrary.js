/**
 * @fileoverview PromisesLibrary - a library offering advanced promises modifying functions.
 *
 * This library provides a set of functions for manipulating promises , including:
 * - function which accepts array of promises and returns array of solved values or error if any of promises has been rejected
 * - function which accepts array of promises and returns array of solved values and reject error
 * -  function for chaining promise functions
 * - function to create promise function from callback function
 * - end much more...
 *
 * @example
 * // Usage with CommonJS modules
 * const PromisesLibrary  = require("./PromisesLibrary");
 *
 * // Usage with ES6 modules
 * import PromisesLibrary  from "./PromisesLibrary.js";
 *
 * // Example usage
 * const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
 *
 * PromisesLibrary.chainPromises(functionsArray)
 *     .then(result => {
 *         console.log("Chained promise result:", result);
 *         // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
 *     })
 *     .catch(error => {
 *         console.error("Chained promise error:", error);
 *     });
 *
 * @see For more information and additional examples, refer to the README.md file.
 */

class PromiseLibrary {
    /**
     * The function accepts an array of promises and return a single promise
     * that resolves to an array of resolved values or rejects with the
     * reason of the first rejected promise
     * @param {Array} array array of promises
     * @return {Array} array of resolved values or reject
     * */
    static promiseAll = (array) => {
        return new Promise((resolve, reject) => {
            let results = [];
            for (let i = 0; i < array.length; i++) {
                array[i]
                    .then(result => {
                        results.push(result);
                        if (results.length === array.length) {
                            resolve(results);
                        }
                    }).catch(error => reject(error))

            }
        })
    }
    /**
     * The function accepts an array of promises and returns a promise that resolves
     * to an array of objects representing the settlement of each promise. It elegantly
     * handles the settlement of each promise, providing clear distinction between
     * fulfilled and rejected promises. However, its performance may be affected by
     * the use of Promise.prototype.finally() which introduces additional overhead.
     * @param {Array} array array of promises
     * @return {Promise} a promise resolving to an array of settlement objects
     */
    static myAllSettledElegant = (array) => {
        return new Promise((resolve, reject) => {
            let completed = 0;
            let results = [];
            for (let i = 0; i < array.length; i++) {
                array[i]
                    .then(result => {
                        results[i] = ({status: "fulfilled", value: result});
                        completed++;
                    })
                    .catch(error => {
                        results[i] = ({status: "rejected", reason: error});
                        completed++;
                    })
                    .finally(() => {
                        if (results.length === completed) resolve(results)
                    })


            }
        })
    }

    /**
     * The function accepts an array of promises and returns a promise that resolves
     * to an array of objects representing the settlement of each promise. It efficiently
     * handles the settlement of promises and resolves the resulting promise as soon
     * as all promises are settled. However, it may be perceived as less organized
     * compared to the elegant approach, as it directly checks for completion without
     * distinguishing between fulfilled and rejected promises.
     * @param {Array} array array of promises
     * @return {Promise} a promise resolving to an array of settlement objects
     */
    static myAllSettledFaster = (array) => {
        return new Promise((resolve, reject) => {
            let completed = 0;
            let results = [];
            for (let i = 0; i < array.length; i++) {
                array[i]
                    .then(result => {
                        results[i] = ({status: "fulfilled", value: result});
                        completed++;
                        if (results.length === completed) {
                            resolve(results);
                        }
                    }, error => {
                        results[i] = ({status: "rejected", reason: error});
                        completed++;
                        if (results.length === completed) {
                            resolve(results);
                        }
                    });
            }
        })
    }


    /**
     * The function accepts an array of functions that return promises and executes them sequentially.
     * @param {Array} array array of functions returning promises
     * @return {Promise} a promise resolving to the value of the last resolved promise or rejecting with the reason of the first rejected promise
     */
    static chainPromises(array) {
        return new Promise((resolve, reject) => {
            let result = Promise.resolve();
            array.forEach(func => {
                result = result.then(func);
            });
            result.then(resolve).catch(reject);
        });
    }

    /**
     * The function converts a callback-style function into a function that returns a promise.
     * @param {Function} callbackStyleFunction callback-style function
     * @return {Function} a function that returns a promise
     */

    static promisify(callbackStyleFunction) {
        return function (...args) {
            return new Promise((resolve, reject) => {
                callbackStyleFunction(...args, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
        };
    }

}

module.exports = PromiseLibrary;