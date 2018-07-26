> 30 Seconds of Code

# Array

## applyMiddleware

```js
// applyMiddleware (api, middlewares, dir = "right")
// 中间件
import applyMiddleware from "ynw/function/applyMiddleware";

const api = "api";

//middlewares
const m1 = api => argv => {
  console.log(api + "-" + argv + "-1");
  return argv;
};

const m2 = api => argv => {
  console.log(api + "-" + argv + "-2");
  return argv;
};

const m3 = api => argv => {
  console.log(api + "-" + argv + "-3");
  return argv;
};

const fn = applyMiddleware(api, [m1, m2, m3]);
fn("Hello");
```

## nextChain

```js
// 将一下个函数放入上一个函数参数中, 通过 next 参数控制函数的执行
import nextChain from "ynw/function/nextChain";

const aa = next => {
  console.log("aa");
  next();
};

const bb = next => {
  console.log("bb");
  next();
};

const cc = next => {
  console.log("cc");
  next();
};

chain([aa, bb, cc]);
/**
 * aa
 * bb
 * cc
 */
```

## promiseChain

```js
// 将函数组成 Promise 链调用, 通过 Promise 控制函数的执行
import promiseChain from "ynw/function/promiseChain";

const sum = promiseChain(
  x => x + 1,
  x => setTimeout(x => Promise.resolve(x + 2), 1000)
  x => x + 3,
  async x => (await x) + 4
);

(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```

## debounce

```js
// 节流阀带回调
import debounce from "ynw/function/debounce";

btn.onclick = debounce(1000)(
  //执行函数
  function() {
    setTimeout(() => console.log("ok"), 1000);
  },
  //回调
  () => alert("您操作的太频繁!")
);
```

## once

```js
//仅执行一次
import once from "ynw/function/once";

btn.onclick = once(function() {
  alert("OK");
});
```

## sleep

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log("I woke up after 1 second.");
}
```

## throttle

```js
// 散列 250 毫秒
// ...
// .   .   .
window.addEventListener(
  "resize",
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
);
```

## times

```js
//执行 N 次函数
var output = "";
times(5, i => (output += i));
console.log(output); // 01234
```
