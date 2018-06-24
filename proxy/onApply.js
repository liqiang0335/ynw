const onApply = (fn, callback) => {
  return new Proxy(fn, {
    apply(...argv) {
      const next = () => Reflect.apply(...argv);
      callback(next);
    }
  });
};

module.exports = onApply;
