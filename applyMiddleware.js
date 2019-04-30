import compose from "./compose";
import composeRight from "./composeRight";

const applyMiddleware = (api, middlewares, dir = "right") => {
  const chain = middlewares.map(item => item(api));
  const fn = dir == "right" ? composeRight : compose;
  return fn(...chain);
};

export default applyMiddleware;
