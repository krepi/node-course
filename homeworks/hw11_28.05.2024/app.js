const JsonLib = require('./JsonLib');

/**
 * Demonstrates the functionality of the JSON parser.
 */
function demonstrateJsonParser() {
    const jsonString = '{"name": "John", "age": 30, "city": "New York", "isStudent": false, "address": {"street": "5th Avenue", "number": 100}, "courses": ["Math", "Science"]}';
    try {
        const jsonObject = JsonLib.myJSONParse(jsonString);
        console.log(jsonObject);

        // Output individual properties to demonstrate correct parsing
        console.log(jsonObject.name);       // "John"
        console.log(jsonObject.age);        // 30
        console.log(jsonObject.city);       // "New York"
        console.log(jsonObject.isStudent);  // false
        console.log(jsonObject.address);    // { street: '5th Avenue', number: 100 }
        console.log(jsonObject.courses);    // ["Math", "Science"]
    } catch (error) {
        console.error('Error parsing JSON:', error.message);
    }
}

// Run the demonstration
demonstrateJsonParser();
