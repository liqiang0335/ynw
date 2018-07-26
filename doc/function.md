> 30 Seconds of Code

# Array

## pipeAsync

> 依次调用数组中的(同步或异步)函数

```js
const sum = pipeAsync(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

## debounce

> 节流阀带回调

```js
import debounce from "ynw/function/debounce";
import { Message } from "element-ui";

const callback = () => Message({ type: "error", message: "操作频繁" });
const exec = function() {
  setTimeout(() => console.log("ok"), 1000);
};
document.querySelector(".btn").onclick = debounce(1000)(exec, callback);
```
