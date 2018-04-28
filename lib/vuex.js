import get from "lodash/get";
import set from "lodash/set";
import isFunction from "lodash/isFunction";

export const logger = function(store) {
  if (process.env.NODE_ENV !== "production") {
    store.subscribe((mutation, state) => {
      const { type, payload } = mutation;
      if (type !== "setState") {
        return console.log(
          `%c @${type} ---->`,
          "font-weight:bold;color:green;",
          payload
        );
      }
      var { reducer, name, path } = payload;
      if (!name) name = "----";
      if (reducer === "") reducer = "null character";
      if (/^data:/.test(reducer)) reducer = "base64...";
      console.log(
        `%c ${name}@set ----> ${path} ---->`,
        "font-weight:bold;color:green;",
        reducer
      );
    });
  }
};

export const setter = function(state, { path, reducer }) {
  const old = get(state, path);
  if (old === undefined) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `%c The Path << ${path} >> Not Found And Create New Property`,
        "font-weight:bold;font-size:16px;background:green;color:white;"
      );
    }
  }
  const target = isFunction(reducer) ? reducer(old) : reducer;
  set(state, path, target);
};
