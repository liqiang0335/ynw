> 30 Seconds of Code

# Array

### pipeAsync

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

### bifurcateBy

> 根据函数返回的布尔值对函数进行分组

```js
bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b");
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

### chunk

> 将数组进行分组

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

### countBy

> 统计

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
```

### deepFlatten

> 递归展开数组

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

### difference

> 两个数组中的非交叉元素

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```

# Browser

### runInRaf

> 每帧执行回调函数

```js
//启动一个帧回调函数
const recorder = runInRaf(f => {
  console.log("Animation frame fired");
});
recorder.stop(); //停止
recorder.start(); //启动

//手动启动
const recorder2 = runInRaf(cb, false);
```

### scrollToTop

> 滚动到页面的顶部

### uuid

> 生成唯一的标识符

### getScrollPosition

> 获取滚动条滚动位置

### debounce

> 节流阀带回调

```js
import debounce from "ynw/function/debounce";
import { Message } from "element-ui";

const callback = () => Message({ type: "error", message: "操作频繁" });
const exec = function() {
  setTimeout(() => console.log("ok"), 1000);
};
debounce(1000)(exec, callback);
```
