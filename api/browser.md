# browser

> 浏览器相关都在这里

## onPress

> 键盘事件处理

```js
import onPress from "ynw/browser/onPress";
onPress({
  isDev: true, //仅在开发环境使用
  KeyA: () => console.log("you press A"),
  Num2: () => console.log("you press 2")
});
```
