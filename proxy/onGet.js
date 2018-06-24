const onGet = (obj, callback) => {
  return new Proxy(obj, {
    get(target, key, value) {
      const next = () => Reflect.get(target, key, value);
      callback(next);
    }
  });
};

module.exports = onGet;
