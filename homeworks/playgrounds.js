
function observeObject(obj, callback) {
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