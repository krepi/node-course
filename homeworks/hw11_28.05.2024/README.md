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
    - *O(n)*

- `parseObject()`: Parses a JSON object.
    - *O(n)*
    - **Explanation**:
        - **Regular Expression**: This method uses a regular expression to identify and extract object properties and
          values.
          ```javascript
          const objectPattern = /\{(?:\s*(["'])(.*?)\1\s*:\s*(.*?)\s*,)*\s*(["'])(.*?)\4\s*:\s*(.*?)\s*\}/;
          ```
            - **`\{`**: Matches the opening curly brace `{`.
            - **`(?:\s*(["'])(.*?)\1\s*:\s*(.*?)\s*,)*`**: Non-capturing group that matches key-value pairs separated by
              commas.
                - **`\s*`**: Matches any whitespace characters.
                - **`(["'])`**: Matches and captures either a single or double quote (for string keys).
                - **`(.*?)`**: Matches and captures the key (non-greedy).
                - **`\1`**: Matches the same quote character used at the start of the key (ensuring matching quotes).
                - **`\s*:\s*`**: Matches the colon `:` separating keys and values, with optional whitespace.
                - **`(.*?)`**: Matches and captures the value (non-greedy).
                - **`\s*,`**: Matches the comma separating key-value pairs.
            - **`\s*(["'])(.*?)\4\s*:\s*(.*?)\s*\}`**: Matches the last key-value pair in the object, without a trailing
              comma.
                - **`\s*`**: Matches any whitespace characters.
                - **`(["'])`**: Matches and captures either a single or double quote (for string keys).
                - **`(.*?)`**: Matches and captures the key (non-greedy).
                - **`\4`**: Matches the same quote character used at the start of the key (ensuring matching quotes).
                - **`\s*:\s*`**: Matches the colon `:` separating keys and values, with optional whitespace.
                - **`(.*?)`**: Matches and captures the value (non-greedy).
                - **`\s*\}`**: Matches the closing curly brace `}`, with optional whitespace.

- `parseArray()`: Parses a JSON array.
    - *O(n)*
    - **Explanation**:
        - **Regular Expression**: This method uses a regular expression to identify and extract array elements.
          ```javascript
          const arrayPattern = /\[(\s*(.*?)\s*,)*\s*(.*?)\s*\]/;
          ```
            - **`\[`**: Matches the opening square bracket `[`.
            - **`(\s*(.*?)\s*,)*`**: Matches array elements separated by commas.
                - **`\s*`**: Matches any whitespace characters.
                - **`(.*?)`**: Matches and captures an array element (non-greedy).
                - **`\s*,`**: Matches the comma separating array elements.
            - **`\s*(.*?)\s*\]`**: Matches the last element in the array, without a trailing comma.
                - **`\s*`**: Matches any whitespace characters.
                - **`(.*?)`**: Matches and captures the last array element (non-greedy).
                - **`\s*\]`**: Matches the closing square bracket `]`, with optional whitespace.

- `parseString()`: Parses a JSON string.
    - *O(n)*
    - **Explanation**:
        - **Regular Expression**: This method uses a regular expression to identify and extract string values.
          ```javascript
          const stringPattern = /"(\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4}|[^"\\])*"/;
          ```
            - **`"`**: Matches the opening double quote `"` of the string.
            - **`(\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4}|[^"\\])*`**: Matches the contents of the string.
                - **`\\["\\\/bfnrt]`**: Matches escape sequences for characters
                  like `\"`, `\\`, `\/`, `\b`, `\f`, `\n`, `\r`, and `\t`.
                - **`\\u[0-9a-fA-F]{4}`**: Matches Unicode escape sequences (e.g., `\u1234`).
                - **`[^"\\]`**: Matches any character except a double quote or backslash.
            - **`*`**: Matches zero or more of the preceding group (the contents of the string).
            - **`"`**: Matches the closing double quote `"` of the string.

- `parseBoolean()`: Parses a JSON boolean.
    - *O(1)*
    - **Explanation**:
        - This method does not use a regular expression. Instead, it directly checks for the values `true` and `false`.
          ```javascript
          if (jsonStringTrimmed.startsWith('true', index)) {
              index += 4; // Move index past 'true'
              return true;
          } else if (jsonStringTrimmed.startsWith('false', index)) {
              index += 5; // Move index past 'false'
              return false;
          } else {
              throw new Error('Invalid boolean value');
          }
          ```

- `parseNull()`: Parses a JSON null.
    - *O(1)*
    - **Explanation**:
        - This method does not use a regular expression. Instead, it directly checks for the value `null`.
          ```javascript
          if (jsonStringTrimmed.startsWith('null', index)) {
              index += 4; // Move index past 'null'
              return null;
          } else {
              throw new Error('Invalid null value');
          }
          ```

- `parseNumber()`: Parses a JSON number.
    - *O(n)*
    - **Explanation**:
        - **Regular Expression**: The method uses the following regular expression to match numbers:
          ```javascript
          const numberPattern = /-?\d+(\.\d+)?([eE][+-]?\d+)?/y;
          ```
            - **`-?`**: Matches an optional negative sign.
            - **`\d+`**: Matches one or more digits (the integer part).
            - **`(\.\d+)?`**: Matches an optional decimal point followed by one or more digits (the fractional part).
            - **`([eE][+-]?\d+)?`**: Matches an optional exponent part, which consists of an 'e' or 'E', an optional
              sign ('+' or '-'), and one or more digits.
            - **Flags**:
                - **`y`** (sticky flag): Ensures that the match starts exactly at the position specified by
                  the `lastIndex` property of the regular expression object.

        - **Setting the `lastIndex`**:
          ```javascript
          numberPattern.lastIndex = index;
          ```
            - **`lastIndex`**: Specifies the position in the string where the next match attempt should start.

        - **Executing the Match**:
          ```javascript
          const match = numberPattern.exec(jsonStringTrimmed);
          ```
            - **`exec` Method**: Tests for a match in a string. It returns an array of matched results or `null` if no
              match is found. The array includes the matched text and any captured groups.

            - **Example**:
              ```javascript
              const jsonStringTrimmed = " 123.45e-6 ";
              let index = 1;  // Ignore the initial space
              const numberPattern = /-?\d+(\.\d+)?([eE][+-]?\d+)?/y;
              numberPattern.lastIndex = index;
              const match = numberPattern.exec(jsonStringTrimmed);
              ```
                - **Result**: If successful, `match` will be an array containing:
                    - `match[0]`: "123.45e-6" (the entire matched number)
                - If no match is found, `match` will be `null`.

- `skipWhitespace()`: Skips whitespace characters in the input string.
    - *O(1)*

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