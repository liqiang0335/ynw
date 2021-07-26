# composeRight

> 串联函数

```js
import composeRight from "ynw/pattern/composeRight";
```

## Source

```js
const composeRight = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );

export default composeRight;
```
