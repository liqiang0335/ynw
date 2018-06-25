const set = (obj, callback) => {
  return new Proxy(obj, {
    set(target, key, value) {
      const next = () => Reflect.set(target, key, value);
      callback(next);
    }
  });
};

const get = (obj, callback) => {
  return new Proxy(obj, {
    get(target, key, value) {
      const next = () => Reflect.get(target, key, value);
      callback(next);
    }
  });
};

const apply = (fn, callback) => {
  return new Proxy(fn, {
    apply(...argv) {
      const next = () => Reflect.apply(...argv);
      callback(next);
    }
  });
};

module.exports = {
  set,
  get,
  apply
};
