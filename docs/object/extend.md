# extend

> 复制有效的属性(非 undefined)

```js
import extend from "ynw/object/extend";
extend(source, target);
```

```js
/**
 * ----------------------------------------
 * 语法
 * @param {Object} source
 * @param {Object} target
 * @return {Object}
 * ----------------------------------------
 */
const extend = function (source, target) {
  if (!target) {
    return source;
  }
  for (var key in source) {
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }
  return source;
};
export default extend;
```
