console.log(
  "%c ynw/vue/vuexHelper 不再推荐使用,请使用ynw的相应模板",
  "color:red;font-weight:bold;"
);
import get from "lodash/get";
import set from "lodash/set";
import isFunction from "lodash/isFunction";
window.__logger__ = true;

export const logger = function(store) {
  if (process.env.NODE_ENV !== "production" && window.__logger__) {
    store.subscribe((mutation, state) => {
      const { type, payload } = mutation;
      if (type !== "setState") {
        return console.log(
          `%c @${type} ---->`,
          "font-weight:bold;color:green;",
          payload
        );
      }
      var { value, name, key } = payload;
      if (!name) name = "----";
      if (value === "") value = "null character";
      if (/^data:/.test(value)) value = "base64...";
      console.log(
        `%c ${name}@set ----> ${key} ---->`,
        "font-weight:bold;color:green;",
        value
      );
    });
  }
};

export const setter = function(state, { key, value }) {
  const old = get(state, key);
  if (old === undefined) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        `%c The key << ${key} >> Not Found And Create New Property`,
        "font-weight:bold;background:green;color:white;"
      );
    }
  }
  const target = isFunction(value) ? value(old) : value;
  set(state, key, target);
};
