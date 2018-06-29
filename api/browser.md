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
