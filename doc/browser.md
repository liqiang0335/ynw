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

## elementIsVisible

```js
// 元素是否完全出现在Viewport中
import onPress from "ynw/browser/elementIsVisible";

elementIsVisible(el); // false
```

## element

```js
// 元素基本操作
import { hasClass, removeClass, toggleClass } from "ynw/browser/element";

hasClass(el, "active"); //true
removeClass(el, "active"); //true
toggleClass(el, "active"); //true
```

## ScrollPosition

```js
// 使用 new 实例化
// getScrollTop(): 滚上去的距离
// isToBottom(): 是否到达底部

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

## runInwork

```js
//在work中执行函数
import runInwork from "ynw/browser/runInwork";

const longRunningFunction = () => {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 700; j++) {
      for (let k = 0; k < 300; k++) {
        result = result + i + j + k;
      }
    }
  }
  return result;
};

//注意
//将函数转移到不同的环境执行, 不支持闭包(不能使用外部的变量和函数)
//也就是说函数必须是无依赖的
runInwork(longRunningFunction).then(console.log); // 209685000000
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
getURLParams("http://www.example.com?a=1&b=2"); //{a:1, b:2}

// 拼接成 URL
URLJoin("http://www.google.com", "a", "/b/cd", "?foo=123", "?bar=foo"); //'http://www.google.com/a/b/cd?foo=123&bar=foo'
```

## http

```js
// XMLHttpRequest发送请求
import { httpGet, httpPost } from "ynw/browser/http";

// httpGet(url, callback, err = console.err)
httpGet("https://example.com/list", data => {
  console.log(data);
});

// httpPost(url, data, callback, err = console.err)
const data = JSON.stringify({ id: 100 });
httpPost("https://example.com/add", data, back => {
  console.log(back);
});
```

## isBottom

```js
//滚动条是否到达底部
isBottom(); //true
```

## event

```js
import { on, off, triggerEvent } from "ynw/browser/event";

//使用 on 绑定事件
const fn = () => console.log("!");
on(document.body, "click", fn);
on(document.body, "click", fn, { target: "p" }); // 事件委托
on(document.body, "click", fn, { options: true }); //绑定在捕获阶段.

//使用 off 解除绑定
off(document.body, "click", fn);
```

triggerEvent

```js
// triggerEvent
triggerEvent(document.getElementById("myId"), "click");
triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
```

## imageResize

> 使用 Canvas 缩放图片

```js
import imageResize from "ynw/browser/imageResize";
const newSrc = imageResize(src, 600);
```
