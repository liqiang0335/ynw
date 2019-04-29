const composeLeft = (...fn) => {
  return fn.reduce((a, b) => (...args) => a(b(...args)));
};

const composeRight = (...fn) => {
  return fn.reduce((a, b) => (...args) => b(a(...args)));
};

const applyMiddleware = (api, middlewares, dir = "right") => {
  const chain = middlewares.map(item => item(api));
  const fn = dir == "right" ? composeRight : composeLeft;
  return fn(...chain);
};

export default applyMiddleware;
