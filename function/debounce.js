const debounce = time => {
  let flag = 0;
  return (fn, callback) => {
    return function(...args) {
      const click = Date.now();
      if (click - flag < time) {
        if (typeof callback == "function") {
          callback.call(this);
        }
        flag = click;
        return;
      }
      fn.apply(this, args);
      flag = Date.now();
    };
  };
};

export default debounce;
