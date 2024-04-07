/**
 * Library offering advanced data transformation functions.
 */
const DataTransformLibrary = {
  /**
   * Adds two values, returning the result of the operation. Argument types can vary.
   * @param {*} a The first value to add.
   * @param {*} b The second value to add.
   * @returns {*} The result of adding the two values.
   * @throws {Error} If adding the values is not possible.
   */
  addValues(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    } else if (Array.isArray(a) && Array.isArray(b)) {
      return a.concat(b);
    } else {
      throw new Error("Cannot add values of the provided types.");
    }
  },

  /**
   * Converts any value to its string representation.
   * @param {*} value The value to convert.
   * @returns {string} The string representation of the value.
   */
  stringifyValue(value) {
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    } else {
      return String(value);
    }
  },

  /**
   * Inverts a boolean value.
   * @param {boolean} value The value to invert.
   * @returns {boolean} The inverted boolean value.
   * @throws {Error} If the provided value is not of type boolean.
   */
  invertBoolean(value) {
    if (typeof value === "boolean") {
      return !value;
    } else {
      throw new Error("The provided value is not of type boolean.");
    }
  },

  /**
   * Converts any value to a number.
   * If the value is a string, it attempts to parse it as a floating point number.
   * For other types, it uses the Number() function for conversion.
   * @param {*} value The value to convert.
   * @returns {number} The value converted to a number.
   * @throws {Error} If conversion to a number is not possible.
   */
  convertToNumber(value) {
    let result;
    if (typeof value === "string") {
      result = parseFloat(value);
    } else {
      result = Number(value);
    }
    if (isNaN(result)) {
      throw new Error("Conversion to a number is not possible.");
    }
    return result;
  },

  /**
   * Attempts to convert the type of the value to a specified type.
   * @param {*} value The value to convert.
   * @param {string} type The target type of the value ('string', 'number', 'boolean').
   * @returns {*} The value converted to the target type.
   * @throws {Error} If conversion to the specified type is not possible.
   */
  coerceToType(value, type) {
    switch (type) {
      case "string":
        return String(value);
      case "number":
        // const parsed = Number(value);
        const parsed = this.convertToNumber(value);
        // if (isNaN(parsed)) {
        //   throw new Error("Cannot convert the value to type number.");
        // }
        return parsed;
      case "boolean":
        return Boolean(value);
      default:
        throw new Error("Unknown or unsupported target type.");
    }
  },
};

// Export for CommonJS:
module.exports = DataTransformLibrary;

// Export for ES6 Modules:
// export default DataTransformLibrary;

// Usage for ES6 Modules:
// import DataTransformLibrary from "./DataTransformLibrary.js";
