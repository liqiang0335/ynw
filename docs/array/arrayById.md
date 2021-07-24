# arrayById

> 数组转换成 ById 形式

```js
import arrayById from "ynw/array/arrayById";
```

```js
/**
 * ----------------------------------------
 * @param {Array} arr
 * @param {String} [key = 'id']
 * ----------------------------------------
 */
export default function arrayById(arr, key = "id") {
  return arr.reduce((p, c) => {
    p[c[key]] = c;
    return p;
  }, {});
}
```
