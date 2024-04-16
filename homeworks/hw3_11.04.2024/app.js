// import { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } from './FunctionsLib.js';
const { PureFunctions, FunctionComposition, ClosuresHigherOrder, RecursionOptimization, LazyEvaluation } = require('./FunctionsLib.js');

// Using PureFunctions
const products = [{name: "butter", price: 100 }, {name:"bread", price: 200 }];
const discountedProducts = PureFunctions.calculateDiscountedPrice(products, 10);
console.log('Discounted Products:', discountedProducts);

const totalPrice = PureFunctions.calculateTotalPrice(products);
console.log('Total Price:', totalPrice);

// Using FunctionComposition
const person = { firstName: 'Przemyslaw', lastName: 'Doe' };
console.log('Full Name:', FunctionComposition.getFullName(person));

const text = "Fun Node in Fun backend  fun";
console.log('Unique Words:', FunctionComposition.filterUniqueWords(text));

// Using ClosuresHigherOrder
const counter = ClosuresHigherOrder.createCounter();
console.log('Counter:', counter(), counter());

// Using RecursionOptimization
console.log('Factorial:', RecursionOptimization.calculateFactorial(5));
console.log('Power:', RecursionOptimization.power(2, 3));

// Using LazyEvaluation
const lazyMapped = LazyEvaluation.lazyMap([1, 2, 3], x => x * x);
console.log('Lazy Map:', 
lazyMapped.next(), 
lazyMapped.next(), 
lazyMapped.next(), 
lazyMapped.next());
