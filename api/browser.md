# browser

> 浏览器相关都在这里

## onPress

> 键盘事件处理

- 辅助功能键为 Ctrl + Alt
- 字母：KeyA, KeyB, KeyC...
- 数字：Num1, Num2, Num3...

```js
import onPress from "ynw/browser/onPress";
onPress({
  isDev: true, //仅在开发环境使用
  KeyA: () => console.log("you press A"), // Ctrl + Alt + A 触发
  Num2: () => console.log("you press 2") // Ctrl + Alt + 2 触发
});
```

## ScrollPosition

> 计算滚动条

- 使用 new 实例化
- getScrollTop 滚上去的距离
- isToBottom: 是否到达底部

```js
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

## scrollToTop

> 滚动到页面的顶部

## uuid

> 生成唯一的标识符

## getScrollPosition

> 获取滚动条滚动位置
