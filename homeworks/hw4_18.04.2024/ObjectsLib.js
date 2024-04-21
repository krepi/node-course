class ObjectsLib {
  //Task 2:  Object Property Enumeration and Deletion
  static getTotalPrice(obj) {
    return (
      Object.getOwnPropertyDescriptor(obj, "price").value *
      Object.getOwnPropertyDescriptor(obj, "quantity").value
    );
  }

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
  static createImmutableObject(obj) {
    const immutableObj = {};

    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        immutableObj[key] = this.createImmutableObject(obj[key]);
      } else {
        Object.defineProperty(immutableObj, key, {
          value: obj[key],
          writable: false,
          enumerable: true,
          configurable: false,
        });
      }
    }

    return immutableObj;
  }
  //   Task 5: Object Observation
  static observeObject(obj, callback) {
    return new Proxy(obj, {
      get(target, prop, receiver) {
        callback(prop, "get");
        return Reflect.get(target, prop, receiver);
      },
      set(target, prop, value, receiver) {
        callback(prop, "set");
        return Reflect.set(target, prop, value, receiver);
      },
    });
  }
  //   Task 6: Object Deep Cloning
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

  static validateObject(obj, schema) {
    for (let key in schema) {
      if (!obj.hasOwnProperty(key)) {
        return false;
      }

      if (typeof obj[key] !== schema[key]) {
        return false;
      }
    }
    return true;
  }
}
module.exports = ObjectsLib;
