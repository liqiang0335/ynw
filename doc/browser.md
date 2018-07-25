# browser

> 浏览器相关放在这里

## onPress

```js
/** 键盘事件处理
 * 
- 辅助功能键为 Ctrl + Alt
- 字母：KeyA, KeyB, KeyC...
- 数字：Num1, Num2, Num3...
*/
import onPress from "ynw/browser/onPress";
onPress({
  isDev: true, //仅在开发环境使用
  KeyA: () => console.log("you press A"), // Ctrl + Alt + A 触发
  Num2: () => console.log("you press 2") // Ctrl + Alt + 2 触发
});
```

## ScrollPosition

```js
/** 
 * 
- 使用 new 实例化
- getScrollTop(): 滚上去的距离
- isToBottom(): 是否到达底部
*/
import ScrollPosition from "ynw/browser/scrollPosition";
import debounce from "lodash/debounce";
const scrollPosition = new ScrollPosition();

window.on(
  "scroll",
  debounce(function() {
    if (scrollPosition.isToBottom()) {
      console.log("已经滚动到底部，加载更多");
    }
  }, 500)
);
```

## runInRaf

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

## scrollToTop

> 滚动到页面的顶部

## uuid

```js
// 生成随机唯一的标识符
import uuid from "ynw/browser/uuid";
uuid(); // '7982fcfe-5721-4632-bede-6000885be57d'
```

## url

```js
import { getURLParams, URLJoin } from "ynw/browser/url";

// 从 URL 中获取查询字符
getURLParams("http://www.example.com?a=1&b=2");
// {a:1, b:2}

// 拼接成 URL
URLJoin("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo");
// 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```
