/**
 * A library for JSON parsing.
 */
class JsonLib {
    /**
     * Parses a JSON formatted string into a JavaScript object.
     * @param {string} jsonString - The JSON formatted string to parse.
     * @returns {Object} - The parsed JavaScript object.
     * @throws {SyntaxError} - If the input string is not valid JSON.
     */
    static myJSONParse(jsonString) {
        let index = 0;
        const jsonStringTrimmed = jsonString.trim();

        /**
         * Parses a JSON value.
         * @returns {*} - The parsed value.
         */
        function parseValue() {
            skipWhitespace();
            if (jsonStringTrimmed[index] === '{') {
                return parseObject();
            } else if (jsonStringTrimmed[index] === '[') {
                return parseArray();
            } else if (jsonStringTrimmed[index] === '"') {
                return parseString();
            } else if (jsonStringTrimmed[index] === 't' || jsonStringTrimmed[index] === 'f') {
                return parseBoolean();
            } else if (jsonStringTrimmed[index] === 'n') {
                return parseNull();
            } else {
                return parseNumber();
            }
        }

        /**
         * Parses a JSON object.
         * @returns {Object} - The parsed object.
         * @throws {SyntaxError} - If the object is not properly formatted.
         */
        function parseObject() {
            const result = {};
            index++; // Skip '{'
            skipWhitespace();
            if (jsonStringTrimmed[index] === '}') {
                index++; // Skip '}'
                return result;
            }
            while (index < jsonStringTrimmed.length) {
                const key = parseString();
                skipWhitespace();
                if (jsonStringTrimmed[index] !== ':') {
                    throw new SyntaxError('Expected colon after key in object');
                }
                index++; // Skip ':'
                const value = parseValue();
                result[key] = value;
                skipWhitespace();
                if (jsonStringTrimmed[index] === '}') {
                    index++; // Skip '}'
                    break;
                }
                if (jsonStringTrimmed[index] !== ',') {
                    throw new SyntaxError('Expected comma after pair in object');
                }
                index++; // Skip ','
                skipWhitespace();
            }
            return result;
        }

        /**
         * Parses a JSON array.
         * @returns {Array} - The parsed array.
         * @throws {SyntaxError} - If the array is not properly formatted.
         */
        function parseArray() {
            const result = [];
            index++; // Skip '['
            skipWhitespace();
            if (jsonStringTrimmed[index] === ']') {
                index++; // Skip ']'
                return result;
            }
            while (index < jsonStringTrimmed.length) {
                const value = parseValue();
                result.push(value);
                skipWhitespace();
                if (jsonStringTrimmed[index] === ']') {
                    index++; // Skip ']'
                    break;
                }
                if (jsonStringTrimmed[index] !== ',') {
                    throw new SyntaxError('Expected comma after element in array');
                }
                index++; // Skip ','
                skipWhitespace();
            }
            return result;
        }

        /**
         * Parses a JSON string.
         * @returns {string} - The parsed string.
         * @throws {SyntaxError} - If the string is not properly formatted.
         */
        function parseString() {
            let result = '';
            index++; // Skip '"'
            while (index < jsonStringTrimmed.length) {
                if (jsonStringTrimmed[index] === '"') {
                    index++; // Skip '"'
                    return result;
                }
                result += jsonStringTrimmed[index++];
            }
            throw new SyntaxError('Unterminated string');
        }

        /**
         * Parses a JSON boolean.
         * @returns {boolean} - The parsed boolean.
         * @throws {SyntaxError} - If the boolean is not properly formatted.
         */
        function parseBoolean() {
            if (jsonStringTrimmed.startsWith('true', index)) {
                index += 4; // Skip 'true'
                return true;
            } else if (jsonStringTrimmed.startsWith('false', index)) {
                index += 5; // Skip 'false'
                return false;
            }
            throw new SyntaxError('Unexpected token');
        }

        /**
         * Parses a JSON null.
         * @returns {null} - The parsed null.
         * @throws {SyntaxError} - If the null is not properly formatted.
         */
        function parseNull() {
            if (jsonStringTrimmed.startsWith('null', index)) {
                index += 4; // Skip 'null'
                return null;
            }
            throw new SyntaxError('Unexpected token');
        }

        /**
         * Parses a JSON number.
         * @returns {number} - The parsed number.
         * @throws {SyntaxError} - If the number is not properly formatted.
         */
        function parseNumber() {
            const numberPattern = /-?\d+(\.\d+)?([eE][+-]?\d+)?/y;
            numberPattern.lastIndex = index;
            const match = numberPattern.exec(jsonStringTrimmed);
            if (match) {
                index += match[0].length;
                return parseFloat(match[0]);
            }
            throw new SyntaxError('Unexpected token');
        }

        /**
         * Skips whitespace characters in the input string.
         */
        function skipWhitespace() {
            const whitespacePattern = /\s*/y;
            whitespacePattern.lastIndex = index;
            const match = whitespacePattern.exec(jsonStringTrimmed);
            if (match) {
                index += match[0].length;
            }
        }

        return parseValue();
    }
}

module.exports = JsonLib;
