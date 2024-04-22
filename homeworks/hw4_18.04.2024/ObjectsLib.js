/**
 * @fileoverview ObjectsLib - a library offering advanced object modifying functions.
 *
 * This library provides a set of functions for manipulating objects , including:
 * - creating immutable objects
 * - deleting objects properties
 * - observing objects by proxy
 * - makeing deep copy of objects
 * - end much more..
 *
 * @example
 * // Usage with CommonJS modules
 * const ObjectsLib  = require("./ObjectsLib.js");
 *
 * // Usage with ES6 modules
 * import ObjectsLib  from "./ObjectsLib.js";
 *
 * // Example usage
 * try {
 *   const immutablePerson = ObjectsLib.createImmutableObject(person);;
 *   console.log(immutablePerson));
 * } catch (error) {
 *   console.error(error);
 * }
 *
 * @see For more information and additional examples, refer to the README.md file.
 */

class ObjectsLib {
  //Task 2:  Object Property Enumeration and Deletion
  /**
   *
   * @param {*} obj Object with field price and quantity
   * @returns {number} Results of the calculation
   */

  static getTotalPrice(obj) {
    if(obj.hasOwnProperty("price") && obj.hasOwnProperty("quantity"))
    return (
      Object.getOwnPropertyDescriptor(obj, "price").value *
      Object.getOwnPropertyDescriptor(obj, "quantity").value
    );
  }
  /**
   * Deletes the specified property from the object if it is configurable.
   *
   * @param {Object} obj The object from which to delete the property.
   * @param {string} prop The name of the property to delete.
   * @throws {Error} If the property is non-configurable.
   */
  static deleteNonConfigurable(obj, prop) {
    if (Object.getOwnPropertyDescriptor(obj, prop)) {
      if (Object.getOwnPropertyDescriptor(obj, prop).configurable === true) {
        delete obj[prop];
      } else {
        throw new Error(`Cannot delete non-configurable property: ${prop}`);
      }
    } else {
      console.log(`There is no property named ${prop} at this object`);
    }
  }

  //   Task 4: Advanced Property Descriptors

  /**
   * Creates an immutable copy of the provided object.
   *
   * @param {Object} obj The object to make immutable.
   * @returns {Object} An immutable copy of the original object.
   */
  static createImmutableObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    return Object.keys(obj).reduce(
      (clone, key) => {
        const value = obj[key];
        clone[key] =
          typeof value === "object" && value !== null
            ? this.createImmutableObject(value)
            : value;

        Object.defineProperty(clone, key, {
          value: clone[key],
          writable: false,
          enumerable: true,
          configurable: false,
        });

        return clone;
      },
      Array.isArray(obj) ? [] : {}
    );
  }

  //   Task 5: Object Observation
  /**
   * Observes the provided object and invokes a callback whenever a property is accessed or modified.
   *
   * @param {Object} obj The object to observe.
   * @param {Function} callback The callback function to invoke on property access or modification.
   * @returns {Object} A proxy object for the original object with observation capabilities.
   */
  static observeObject(obj, callback) {
    return new Proxy(obj, {
      get(target, prop) {
        callback(prop, "get");
        return target[prop];
      },
      set(target, prop, value) {
        callback(prop, "set");
        let descriptor = Object.getOwnPropertyDescriptor(target, prop);
        if (!descriptor || descriptor.writable) {
          target[prop] = value;
          return true;
        } else {
          console.log("Property is not writable");
          return false;
        }
      },
    });
  }
  //   Task 6: Object Deep Cloning
  /**
   * Creates a deep clone of the provided object.
   *
   * @param {Object} obj The object to clone.
   * @param {Map} [cloned=new Map()] A map to keep track of cloned objects and avoid circular references.
   * @returns {Object} A deep clone of the original object.
   */
  static deepCloneObject(obj, cloned = new Map()) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }
    if (cloned.has(obj)) {
      return cloned.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {};

    cloned.set(obj, clone);

    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = this.deepCloneObject(obj[key], cloned);
      return acc;
    }, clone);
  }
  //   Task 7: Object Property Validation

  /**
   * Validates an object against a schema.
   *
   * @param {Object} obj The object to validate.
   * @param {Object} schema The schema object to validate against.
   * @returns {boolean} true if the object is valid according to the schema, otherwise false.
   */
  static validateObject(obj, schema) {
    for (const key in schema) {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (typeof schema[key] === "object") {
        if (
          typeof obj[key] !== "object" ||
          !this.validateObject(obj[key], schema[key])
        ) {
          return false;
        }
      } else if (typeof obj[key] !== schema[key]) {
        return false;
      }
    }
    return true;
  }
}
module.exports = ObjectsLib;
