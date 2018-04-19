"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setter = exports.logger = undefined;

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _set = require("lodash/set");

var _set2 = _interopRequireDefault(_set);

var _isFunction = require("lodash/isFunction");

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var logger = (exports.logger = function logger(store) {
  if (process.env.NODE_ENV === "production") return;
  store.subscribe(function(mutation, state) {
    var type = mutation.type,
      payload = mutation.payload;

    if (type !== "setState") {
      return console.log("@" + type + " ---->", payload);
    }
    var reducer = payload.reducer,
      name = payload.name,
      path = payload.path;

    if (!name) name = "----";
    if (reducer === "") reducer = "null character";
    if (/^data:/.test(reducer)) reducer = "base64...";
    console.log(name + "@set ---->", path, "---->", reducer);
  });
});

var setter = (exports.setter = function setter(state, _ref) {
  var path = _ref.path,
    reducer = _ref.reducer;

  var old = (0, _get2.default)(state, path);
  if (old === undefined) {
    if (process.env.NODE_ENV !== "production") {
      console.log(
        "****** The Path << " + path + " >> Not Found And Create New Property"
      );
    }
  }
  var target = (0, _isFunction2.default)(reducer) ? reducer(old) : reducer;
  (0, _set2.default)(state, path, target);
});
