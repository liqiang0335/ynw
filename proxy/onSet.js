const onSet = (obj, callback) => {
  return new Proxy(obj, {
    set(target, key, value) {
      const next = () => Reflect.set(target, key, value);
      callback(next);
    }
  });
};

module.exports = onSet;
