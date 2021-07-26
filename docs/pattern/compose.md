# compose

> 串联函数

```js
import compose from "ynw/pattern/compose";
```

## Source

```js
const compose = (...fns) =>
  fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

export default compose;
```
