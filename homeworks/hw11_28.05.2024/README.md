# JSON Parser Implementation

## Table of Contents

- [Overview](#overview)
- [Classes and Relationships](#classes-and-relationships)
- [JsonLib](#jsonlib)
- [Usage Example](#usage-example)
- [File Structure](#file-structure)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)

## Overview

This documentation provides a detailed look at the `JsonLib` class, its methods, and how it implements a simplified
version of the `JSON.parse` function using regular expressions. The project focuses on parsing JSON strings and
converting them into JavaScript objects, handling various JSON elements like objects, arrays, strings, numbers,
booleans, and null values.

## Classes and Relationships

This section details the classes, their methods, and how they relate to one another. The primary class in this project
is `JsonLib`, which contains the `myJSONParse` function for JSON parsing.

## JsonLib (located in `JsonLib.js`)

A class containing a static method for parsing JSON strings into JavaScript objects.

### Methods:

- `myJSONParse(jsonString)`: Parses a JSON formatted string into a JavaScript object.
    - *O(n)*, where n is the length of the JSON string

### Helper Methods:

- `parseValue()`: Parses a JSON value.

- `parseObject()`: Parses a JSON object.

- `parseArray()`: Parses a JSON array.

- `parseString()`: Parses a JSON string.

- `parseBoolean()`: Parses a JSON boolean.

- `parseNull()`: Parses a JSON null.

- `parseNumber()`: Parses a JSON number.

- `skipWhitespace()`: Skips whitespace characters in the input string.

## Usage Example

```javascript
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
```

### File Structure

- `JsonLib.js` - Contains `JsonLib` class with the `myJSONParse` function.
- `app.js` - Main application script that demonstrates the usage of `JsonLib`

### Directory Structure

```project-root
│   app.js
│   JsonLib


```

### Getting Started

This section provides a quick guide on how to set up and start using the project.

#### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. This project uses ES6 features and depends on
Node.js for its environment. Visit Node.js official website to download and install it if you haven't already.

#### Installation

Clone the repository:

```
git clone https://github.com/krepi/node-course/tree/main/homeworks/hw11_28.05.2024
cd hw11_28.05.2024
```

#### Running the application:

To start the application, run:

```
node app.js
```

### Note

All methods are documented using JSDoc comments to explain their functionality, parameters, and return values.
The notation O(1), O(n), etc., denotes the time complexity of each method, providing insights into their performance
characteristics.