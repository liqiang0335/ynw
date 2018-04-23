> 30 Seconds of Code

# Adapter

### pipeAsyncFunctions

```js
const pipeAsyncFunctions = (...fns) => arg =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));

const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

# Array

### bifurcateBy

> 根据函数返回的布尔值对函数进行分组

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    []
  ]);
bifurcateBy(["beep", "boop", "foo", "bar"], x => x[0] === "b");
// [ ['beep', 'boop', 'bar'], ['foo'] ]
```

### chunk

```js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```
