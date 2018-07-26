# Type

## isValidJSON

```js
import { isValidJSON } from "ynw/type";

// 是否为有效的JSON格式
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

## isEmpty

```js
import { isEmpty } from "ynw/type";

isEmpty(new Map()); // true
isEmpty(new Set()); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(""); // true

// 因为使用的是 ===null , Object.keys(), .length 来检测
// 所以下面的类型也被认为是空值
isEmpty(123); // true
isEmpty(true); // true
```
