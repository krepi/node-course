const PromisesLibrary = require('./PromisesLibrary.js')


const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'),);
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 200, 'bar'),);
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 50, 4),);
const promises = [
    promise2, //foo
    promise3, // bar
    Promise.resolve(1),
    Promise.reject("bad mama"),
    Promise.resolve(2),
    Promise.resolve(3),
    promise4 // 4

];

const promisesRes = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];


function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

const promisedFunction = PromisesLibrary.promisify(callbackStyleFunction);

// Outputs

// Task 1: Implement promiseAll Function
PromisesLibrary.promiseAll(promises)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });
PromisesLibrary.promiseAll(promisesRes)
    .then(results => {
        console.log("All promises resolved:", results); // Expected: [1, 2, 3]
    })
    .catch(error => {
        console.error("At least one promise rejected:", error);
    });

// Task 2: Implement promiseAllSettled Function
PromisesLibrary.myAllSettledElegant(promises)
    .then(results => {
        console.log("All promises resolved: my settled Elegant", results); // Expected: [1, 2, 3]
    })
PromisesLibrary.myAllSettledFaster(promises)
    .then(results => {
        console.log("All promises resolved: my settled Fast", results); // Expected: [1, 2, 3]
    })

// Task 3: Implement Chaining of Promises as a Separate Function
PromisesLibrary.chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });

//Task 4: Implement promisifyFunction
promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });