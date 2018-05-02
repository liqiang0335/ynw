/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunk." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./example/index.js","modules"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ynw = __webpack_require__(/*! ../ynw */ \"./ynw.js\");\nconsole.log(ynw);\n\n//# sourceURL=webpack:///./example/index.js?");

/***/ }),

/***/ "./src sync recursive \\.js$":
/*!************************!*\
  !*** ./src sync \.js$ ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./adapter/promisify.js\": \"./src/adapter/promisify.js\",\n\t\"./array/bifurcateBy.js\": \"./src/array/bifurcateBy.js\",\n\t\"./array/chunk.js\": \"./src/array/chunk.js\",\n\t\"./array/countBy.js\": \"./src/array/countBy.js\",\n\t\"./array/deepFlatten.js\": \"./src/array/deepFlatten.js\",\n\t\"./array/differece.js\": \"./src/array/differece.js\",\n\t\"./array/differenceBy.js\": \"./src/array/differenceBy.js\",\n\t\"./array/union.js\": \"./src/array/union.js\",\n\t\"./array/unionBy.js\": \"./src/array/unionBy.js\",\n\t\"./browser/createEventHub.js\": \"./src/browser/createEventHub.js\",\n\t\"./browser/elementIsVisible.js\": \"./src/browser/elementIsVisible.js\",\n\t\"./browser/getScrollPotition.js\": \"./src/browser/getScrollPotition.js\",\n\t\"./browser/runInRaf.js\": \"./src/browser/runInRaf.js\",\n\t\"./browser/runInWorker.js\": \"./src/browser/runInWorker.js\",\n\t\"./browser/scrollToTop.js\": \"./src/browser/scrollToTop.js\",\n\t\"./browser/uuid.js\": \"./src/browser/uuid.js\",\n\t\"./function/attemp.js\": \"./src/function/attemp.js\",\n\t\"./function/chainAsync.js\": \"./src/function/chainAsync.js\",\n\t\"./function/compose.js\": \"./src/function/compose.js\",\n\t\"./function/composeRight.js\": \"./src/function/composeRight.js\",\n\t\"./function/debounce.js\": \"./src/function/debounce.js\",\n\t\"./function/koa-compose.js\": \"./src/function/koa-compose.js\",\n\t\"./function/pipeAsync.js\": \"./src/function/pipeAsync.js\",\n\t\"./lib/axios.js\": \"./src/lib/axios.js\",\n\t\"./lib/vuex.js\": \"./src/lib/vuex.js\",\n\t\"./util/idCard.js\": \"./src/util/idCard.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive \\\\.js$\";\n\n//# sourceURL=webpack:///./src_sync_\\.js$?");

/***/ }),

/***/ "./src/adapter/promisify.js":
/*!**********************************!*\
  !*** ./src/adapter/promisify.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.promisify = undefined;\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n *\r\n */\nvar promisify = exports.promisify = function promisify(func) {\n  return function () {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return new _promise2.default(function (resolve, reject) {\n      return func.apply(undefined, args.concat([function (err, result) {\n        return err ? reject(err) : resolve(result);\n      }]));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/adapter/promisify.js?");

/***/ }),

/***/ "./src/array/bifurcateBy.js":
/*!**********************************!*\
  !*** ./src/array/bifurcateBy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n * 根据函数返回的布尔值对数组进行分组\r\n */\nvar bifurcateBy = exports.bifurcateBy = function bifurcateBy(arr, fn) {\n  return arr.reduce(function (acc, val, i) {\n    return acc[fn(val, i) ? 0 : 1].push(val), acc;\n  }, [[], []]);\n};\n\n//# sourceURL=webpack:///./src/array/bifurcateBy.js?");

/***/ }),

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.chunk = undefined;\n\nvar _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar chunk = exports.chunk = function chunk(arr, size) {\n  return (0, _from2.default)({ length: Math.ceil(arr.length / size) }, function (v, i) {\n    return arr.slice(i * size, i * size + size);\n  });\n};\n\n//# sourceURL=webpack:///./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/countBy.js":
/*!******************************!*\
  !*** ./src/array/countBy.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar countBy = function countBy(arr, fn) {\n  return arr.map(fn).reduce(function (acc, val, i) {\n    acc[val] = (acc[val] || 0) + 1;\n    return acc;\n  }, {});\n};\n\nmodule.exports = countBy;\n\n//# sourceURL=webpack:///./src/array/countBy.js?");

/***/ }),

/***/ "./src/array/deepFlatten.js":
/*!**********************************!*\
  !*** ./src/array/deepFlatten.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js\");\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n * 递归(展开数组)\r\n */\nvar deepFlatten = function deepFlatten(arr) {\n  var _ref;\n\n  return (_ref = []).concat.apply(_ref, (0, _toConsumableArray3.default)(arr.map(function (v) {\n    return Array.isArray(v) ? deepFlatten(v) : v;\n  })));\n};\n\n//# sourceURL=webpack:///./src/array/deepFlatten.js?");

/***/ }),

/***/ "./src/array/differece.js":
/*!********************************!*\
  !*** ./src/array/differece.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n * 非两个数组的交集\r\n */\nvar difference = function difference(a, b) {\n  var s = new _set2.default(b);\n  return a.filter(function (x) {\n    return !s.has(x);\n  });\n};\n\nmodule.exports = difference;\n\n//# sourceURL=webpack:///./src/array/differece.js?");

/***/ }),

/***/ "./src/array/differenceBy.js":
/*!***********************************!*\
  !*** ./src/array/differenceBy.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar differenceBy = function differenceBy(a, b, fn) {\n  var s = new _set2.default(b.map(function (v) {\n    return fn(v);\n  }));\n  return a.filter(function (x) {\n    return !s.has(fn(x));\n  });\n};\n\nmodule.exports = differenceBy;\n\n//# sourceURL=webpack:///./src/array/differenceBy.js?");

/***/ }),

/***/ "./src/array/union.js":
/*!****************************!*\
  !*** ./src/array/union.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js\");\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nvar _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar union = function union(a, b) {\n  return (0, _from2.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b))));\n};\nmodule.exports = union;\n\n//# sourceURL=webpack:///./src/array/union.js?");

/***/ }),

/***/ "./src/array/unionBy.js":
/*!******************************!*\
  !*** ./src/array/unionBy.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js\");\n\nvar _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);\n\nvar _from = __webpack_require__(/*! babel-runtime/core-js/array/from */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/array/from.js\");\n\nvar _from2 = _interopRequireDefault(_from);\n\nvar _set = __webpack_require__(/*! babel-runtime/core-js/set */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar unionBy = function unionBy(a, b, fn) {\n  var s = new _set2.default(a.map(function (v) {\n    return fn(v);\n  }));\n  return (0, _from2.default)(new _set2.default([].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b.filter(function (x) {\n    return !s.has(fn(x));\n  })))));\n};\n\nmodule.exports = unionBy;\n\n//# sourceURL=webpack:///./src/array/unionBy.js?");

/***/ }),

/***/ "./src/browser/createEventHub.js":
/*!***************************************!*\
  !*** ./src/browser/createEventHub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/create.js\");\n\nvar _create2 = _interopRequireDefault(_create);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n * 订阅/发布系统\r\n */\nvar createEventHub = function createEventHub() {\n  return {\n    hub: (0, _create2.default)(null),\n    emit: function emit(event, data) {\n      (this.hub[event] || []).forEach(function (handler) {\n        return handler(data);\n      });\n    },\n    on: function on(event, handler) {\n      if (!this.hub[event]) this.hub[event] = [];\n      this.hub[event].push(handler);\n    },\n    off: function off(event, handler) {\n      var i = (this.hub[event] || []).findIndex(function (h) {\n        return h === handler;\n      });\n      if (i > -1) this.hub[event].splice(i, 1);\n    }\n  };\n};\n\nmodule.exports = createEventHub;\n\n//# sourceURL=webpack:///./src/browser/createEventHub.js?");

/***/ }),

/***/ "./src/browser/elementIsVisible.js":
/*!*****************************************!*\
  !*** ./src/browser/elementIsVisible.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 是否在 viewport 可见\r\n */\n\nvar elementIsVisible = function elementIsVisible(el) {\n    var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n    var _el$getBoundingClient = el.getBoundingClientRect(),\n        top = _el$getBoundingClient.top,\n        left = _el$getBoundingClient.left,\n        bottom = _el$getBoundingClient.bottom,\n        right = _el$getBoundingClient.right;\n\n    var _window = window,\n        innerHeight = _window.innerHeight,\n        innerWidth = _window.innerWidth;\n\n    return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\n};\n\nmodule.exports = elementIsVisible;\n\n//# sourceURL=webpack:///./src/browser/elementIsVisible.js?");

/***/ }),

/***/ "./src/browser/getScrollPotition.js":
/*!******************************************!*\
  !*** ./src/browser/getScrollPotition.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 获取滚动位置\r\n */\n\nvar getScrollPosition = function getScrollPosition() {\n  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;\n  return {\n    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n  };\n};\n\nmodule.exports = getScrollPosition;\n\n//# sourceURL=webpack:///./src/browser/getScrollPotition.js?");

/***/ }),

/***/ "./src/browser/runInRaf.js":
/*!*********************************!*\
  !*** ./src/browser/runInRaf.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n *\r\n */\n\nvar runInRaf = function runInRaf(callback) {\n  var autoStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  var running = true;\n  var raf = void 0;\n\n  var stop = function stop(f) {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n  var start = function start(f) {\n    running = true;\n    run();\n  };\n\n  var run = function run(f) {\n    raf = requestAnimationFrame(function (f) {\n      callback();\n      if (running) run();\n    });\n  };\n\n  if (autoStart) start();\n  return { start: start, stop: stop };\n};\n\nmodule.exports = runInRaf;\n\n//# sourceURL=webpack:///./src/browser/runInRaf.js?");

/***/ }),

/***/ "./src/browser/runInWorker.js":
/*!************************************!*\
  !*** ./src/browser/runInWorker.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n *在 Worker 中执行函数\r\n */\nvar runInWorker = function runInWorker(fn) {\n  var worker = new Worker(URL.createObjectURL(new Blob([\"postMessage((\" + fn + \")());\"]), {\n    type: \"application/javascript; charset=utf-8\"\n  }));\n  return new _promise2.default(function (res, rej) {\n    worker.onmessage = function (_ref) {\n      var data = _ref.data;\n\n      res(data), worker.terminate();\n    };\n    worker.onerror = function (err) {\n      rej(err), worker.terminate();\n    };\n  });\n};\n\nmodule.exports = runInWorker;\n\n//# sourceURL=webpack:///./src/browser/runInWorker.js?");

/***/ }),

/***/ "./src/browser/scrollToTop.js":
/*!************************************!*\
  !*** ./src/browser/scrollToTop.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 滚动到页面的顶部\r\n */\n\nvar scrollToTop = function scrollToTop() {\n  var c = document.documentElement.scrollTop || document.body.scrollTop;\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};\n\nmodule.exports = scrollToTop;\n\n//# sourceURL=webpack:///./src/browser/scrollToTop.js?");

/***/ }),

/***/ "./src/browser/uuid.js":
/*!*****************************!*\
  !*** ./src/browser/uuid.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar UUIDGeneratorBrowser = function UUIDGeneratorBrowser() {\n  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {\n    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);\n  });\n};\n\nmodule.exports = UUIDGeneratorBrowser;\n\n//# sourceURL=webpack:///./src/browser/uuid.js?");

/***/ }),

/***/ "./src/function/attemp.js":
/*!********************************!*\
  !*** ./src/function/attemp.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 尝试执行函数\r\n * 要么返回结果, 要么Error对象, 不会中断执行\r\n */\n\nvar attemp = function attemp(fn) {\n  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  try {\n    return fn.apply(undefined, args);\n  } catch (e) {\n    return e instanceof Error ? e : new Error(e);\n  }\n};\n\nmodule.exports = attemp;\n\n//# sourceURL=webpack:///./src/function/attemp.js?");

/***/ }),

/***/ "./src/function/chainAsync.js":
/*!************************************!*\
  !*** ./src/function/chainAsync.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n/**\r\n * 依次执行队列中的同步或异步函数\r\n */\n\nvar chainAsync = function chainAsync(fns) {\n  var cur = 0;\n  var next = function next() {\n    return fns[cur++](next);\n  };\n  next();\n};\n\nmodule.extends = chainAsync;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/_webpack@4.6.0@webpack/buildin/module.js */ \"./node_modules/_webpack@4.6.0@webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/function/chainAsync.js?");

/***/ }),

/***/ "./src/function/compose.js":
/*!*********************************!*\
  !*** ./src/function/compose.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * 函数拼接\r\n */\n\nvar compose = function compose() {\n  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return fns.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(undefined, arguments));\n    };\n  });\n};\n\n//# sourceURL=webpack:///./src/function/compose.js?");

/***/ }),

/***/ "./src/function/composeRight.js":
/*!**************************************!*\
  !*** ./src/function/composeRight.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar composeRight = function composeRight() {\n  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return fns.reduce(function (f, g) {\n    return function () {\n      return g(f.apply(undefined, arguments));\n    };\n  });\n};\n\nmodule.exports = composeRight;\n\n//# sourceURL=webpack:///./src/function/composeRight.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar debounce = function debounce(time) {\n  var flag = 0;\n  return function (fn, callback) {\n    return function () {\n      var click = Date.now();\n      if (click - flag < time) {\n        if (typeof callback == \"function\") {\n          callback();\n        }\n        flag = click;\n        return;\n      }\n\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      fn.apply(this, args);\n      flag = Date.now();\n    };\n  };\n};\n\nmodule.exports = debounce;\n\n//# sourceURL=webpack:///./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/koa-compose.js":
/*!*************************************!*\
  !*** ./src/function/koa-compose.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * Expose compositor.\r\n */\n\nvar _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js\");\n\nvar _getIterator3 = _interopRequireDefault(_getIterator2);\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nmodule.exports = compose;\n\n/**\r\n * Compose `middleware` returning\r\n * a fully valid middleware comprised\r\n * of all those which are passed.\r\n *\r\n * @param {Array} middleware\r\n * @return {Function}\r\n * @api public\r\n */\n\nfunction compose(middleware) {\n  if (!Array.isArray(middleware)) throw new TypeError(\"Middleware stack must be an array!\");\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = (0, _getIterator3.default)(middleware), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var fn = _step.value;\n\n      if (typeof fn !== \"function\") throw new TypeError(\"Middleware must be composed of functions!\");\n    }\n\n    /**\r\n     * @param {Object} context\r\n     * @return {Promise}\r\n     * @api public\r\n     */\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return function (context, next) {\n    // last called middleware #\n    var index = -1;\n    return dispatch(0);\n    function dispatch(i) {\n      if (i <= index) return _promise2.default.reject(new Error(\"next() called multiple times\"));\n      index = i;\n      var fn = middleware[i];\n      if (i === middleware.length) fn = next;\n      if (!fn) return _promise2.default.resolve();\n      try {\n        return _promise2.default.resolve(\n        //同步函数也返回promise\n        fn(context, function next() {\n          return dispatch(i + 1);\n        }));\n      } catch (err) {\n        return _promise2.default.reject(err);\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/function/koa-compose.js?");

/***/ }),

/***/ "./src/function/pipeAsync.js":
/*!***********************************!*\
  !*** ./src/function/pipeAsync.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/promise.js\");\n\nvar _promise2 = _interopRequireDefault(_promise);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\n/**\r\n *从左到右依次执行函数(同步或异步)\r\n *\r\n */\nvar pipeAsync = function pipeAsync() {\n  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (arg) {\n    return fns.reduce(function (p, f) {\n      return p.then(f);\n    }, _promise2.default.resolve(arg));\n  };\n};\n\nmodule.exports = pipeAsync;\n\n//# sourceURL=webpack:///./src/function/pipeAsync.js?");

/***/ }),

/***/ "./src/lib/axios.js":
/*!**************************!*\
  !*** ./src/lib/axios.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ \"./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/assign.js\");\n\nvar _assign2 = _interopRequireDefault(_assign);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar Qs = __webpack_require__(/*! querystring */ \"./node_modules/_querystring-es3@0.2.1@querystring-es3/index.js\");\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n\nvar request = function request(ops) {\n  var option = (0, _assign2.default)({\n    timeout: 30000,\n    withCredentials: true, //是否发送coocie\n    headers: {\n      \"Content-Type\": \"application/x-www-form-urlencoded; charset=UTF-8\"\n    },\n    transformRequest: function transformRequest(params) {\n      return Qs.stringify(params);\n    }\n  }, ops);\n  return axios.create(option);\n};\n\n/**\r\n * 错误处理\r\n */\nvar attach = function attach(promise) {\n  return promise.catch(function (err) {\n    if (err.code === \"ECONNABORTED\") {\n      console.log(\"超时\");\n      return { data: { status: \"timeout\" } };\n    }\n    var response = err.response;\n\n    if (response) {\n      console.log(\"服务器错误\", response.status);\n      return { data: { status: \"error\", data: response.status } };\n    }\n  });\n};\n\nmodule.exports = { attach: attach, request: request };\n\n//# sourceURL=webpack:///./src/lib/axios.js?");

/***/ }),

/***/ "./src/lib/vuex.js":
/*!*************************!*\
  !*** ./src/lib/vuex.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setter = exports.logger = undefined;\n\nvar _get = __webpack_require__(/*! lodash/get */ \"./node_modules/_lodash@4.17.10@lodash/get.js\");\n\nvar _get2 = _interopRequireDefault(_get);\n\nvar _set = __webpack_require__(/*! lodash/set */ \"./node_modules/_lodash@4.17.10@lodash/set.js\");\n\nvar _set2 = _interopRequireDefault(_set);\n\nvar _isFunction = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/_lodash@4.17.10@lodash/isFunction.js\");\n\nvar _isFunction2 = _interopRequireDefault(_isFunction);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nvar logger = exports.logger = function logger(store) {\n  if (true) {\n    store.subscribe(function (mutation, state) {\n      var type = mutation.type,\n          payload = mutation.payload;\n\n      if (type !== \"setState\") {\n        return console.log(\"%c @\" + type + \" ---->\", \"font-weight:bold;color:green;\", payload);\n      }\n      var reducer = payload.reducer,\n          name = payload.name,\n          path = payload.path;\n\n      if (!name) name = \"----\";\n      if (reducer === \"\") reducer = \"null character\";\n      if (/^data:/.test(reducer)) reducer = \"base64...\";\n      console.log(\"%c \" + name + \"@set ----> \" + path + \" ---->\", \"font-weight:bold;color:green;\", reducer);\n    });\n  }\n};\n\nvar setter = exports.setter = function setter(state, _ref) {\n  var path = _ref.path,\n      reducer = _ref.reducer;\n\n  var old = (0, _get2.default)(state, path);\n  if (old === undefined) {\n    if (true) {\n      console.log(\"%c The Path << \" + path + \" >> Not Found And Create New Property\", \"font-weight:bold;font-size:16px;background:green;color:white;\");\n    }\n  }\n  var target = (0, _isFunction2.default)(reducer) ? reducer(old) : reducer;\n  (0, _set2.default)(state, path, target);\n};\n\n//# sourceURL=webpack:///./src/lib/vuex.js?");

/***/ }),

/***/ "./src/util/idCard.js":
/*!****************************!*\
  !*** ./src/util/idCard.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (code) {\n  code = String(code);\n\n  var vcity = {\n    11: \"北京\",\n    12: \"天津\",\n    13: \"河北\",\n    14: \"山西\",\n    15: \"内蒙古\",\n    21: \"辽宁\",\n    22: \"吉林\",\n    23: \"黑龙江\",\n    31: \"上海\",\n    32: \"江苏\",\n    33: \"浙江\",\n    34: \"安徽\",\n    35: \"福建\",\n    36: \"江西\",\n    37: \"山东\",\n    41: \"河南\",\n    42: \"湖北\",\n    43: \"湖南\",\n    44: \"广东\",\n    45: \"广西\",\n    46: \"海南\",\n    50: \"重庆\",\n    51: \"四川\",\n    52: \"贵州\",\n    53: \"云南\",\n    54: \"西藏\",\n    61: \"陕西\",\n    62: \"甘肃\",\n    63: \"青海\",\n    64: \"宁夏\",\n    65: \"新疆\",\n    71: \"台湾\",\n    81: \"香港\",\n    82: \"澳门\",\n    91: \"国外\"\n  };\n\n  var checkcode = function checkcode(code) {\n    //是否为空\n    if (!code || !iscodeNo(code) || !checkProvince(code) || !checkBirthday(code) || !checkParity(code)) {\n      return false;\n    }\n    return true;\n  };\n\n  //检查号码是否符合规范，包括长度，类型\n  var iscodeNo = function iscodeNo(code) {\n    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X\n    var reg = /(^\\d{15}$)|(^\\d{17}(\\d|[xX])$)/;\n    if (reg.test(code) === false) {\n      return false;\n    }\n    return true;\n  };\n\n  //取身份证前两位,校验省份\n  var checkProvince = function checkProvince(code) {\n    var province = code.substr(0, 2);\n    if (vcity[province] == undefined) {\n      return false;\n    }\n    return true;\n  };\n\n  //检查生日是否正确\n  var checkBirthday = function checkBirthday(code) {\n    var len = code.length;\n    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字\n    if (len == \"15\") {\n      var re_fifteen = /^(\\d{6})(\\d{2})(\\d{2})(\\d{2})(\\d{3})$/;\n      var arr_data = code.match(re_fifteen);\n      var year = arr_data[2];\n      var month = arr_data[3];\n      var day = arr_data[4];\n      var birthday = new Date(\"19\" + year + \"/\" + month + \"/\" + day);\n      return verifyBirthday(\"19\" + year, month, day, birthday);\n    }\n    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X\n    if (len == \"18\") {\n      var re_eighteen = /^(\\d{6})(\\d{4})(\\d{2})(\\d{2})(\\d{3})([0-9]|X)$/;\n      var arr_data = code.match(re_eighteen);\n      var year = arr_data[2];\n      var month = arr_data[3];\n      var day = arr_data[4];\n      var birthday = new Date(year + \"/\" + month + \"/\" + day);\n      return verifyBirthday(year, month, day, birthday);\n    }\n    return false;\n  };\n\n  //校验日期\n  var verifyBirthday = function verifyBirthday(year, month, day, birthday) {\n    var now = new Date();\n    var now_year = now.getFullYear();\n    //年月日是否合理\n    if (birthday.getFullYear() == year && birthday.getMonth() + 1 == month && birthday.getDate() == day) {\n      //判断年份的范围（3岁到100岁之间)\n      var time = now_year - year;\n      if (time >= 3 && time <= 100) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n  };\n\n  //校验位的检测\n  var checkParity = function checkParity(code) {\n    //15位转18位\n    code = changeFivteenToEighteen(code);\n    var len = code.length;\n    if (len == \"18\") {\n      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);\n      var arrCh = new Array(\"1\", \"0\", \"X\", \"9\", \"8\", \"7\", \"6\", \"5\", \"4\", \"3\", \"2\");\n      var codeTemp = 0,\n          i,\n          valnum;\n      for (i = 0; i < 17; i++) {\n        codeTemp += code.substr(i, 1) * arrInt[i];\n      }\n      valnum = arrCh[codeTemp % 11];\n      if (valnum == code.substr(17, 1)) {\n        return true;\n      }\n      return false;\n    }\n    return false;\n  };\n\n  //15位转18位身份证号\n  var changeFivteenToEighteen = function changeFivteenToEighteen(code) {\n    if (code.length == \"15\") {\n      var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);\n      var arrCh = new Array(\"1\", \"0\", \"X\", \"9\", \"8\", \"7\", \"6\", \"5\", \"4\", \"3\", \"2\");\n      var codeTemp = 0,\n          i;\n      code = code.substr(0, 6) + \"19\" + code.substr(6, code.length - 6);\n      for (i = 0; i < 17; i++) {\n        codeTemp += code.substr(i, 1) * arrInt[i];\n      }\n      code += arrCh[codeTemp % 11];\n      return code;\n    }\n    return code;\n  };\n\n  return checkcode(code);\n};\n\n//# sourceURL=webpack:///./src/util/idCard.js?");

/***/ }),

/***/ "./ynw.js":
/*!****************!*\
  !*** ./ynw.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar context = __webpack_require__(\"./src sync recursive \\\\.js$\");\n\n//# sourceURL=webpack:///./ynw.js?");

/***/ })

/******/ });