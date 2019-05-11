const compose = require("./compose");
const composeRight = require("./composeRight");

const applyMiddleware = (api, middlewares, dir = "right") => {
  const chain = middlewares.map(item => item(api));
  const fn = dir == "right" ? composeRight : compose;
  return fn(...chain);
};

module.exports = applyMiddleware;
