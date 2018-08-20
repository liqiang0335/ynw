# lib

## createSocket

> 创建 Socket 连接 , 断线自动重连

- 安装依赖 npm i --save reconnecting-websocket

```js
import createSocket from "ynw/lib/createSocket";

createSocket({
  host: path, //域名
  key: "0_0_0_0", //key
  onmessage: pushData => {
    //处理推送的数据...
  }
});
```

## createEventHub

> 订阅/发布

```js
import createEventHub from "ynw/lib/createEventHub";

const handler = data => console.log(data);
const hub = createEventHub();
let increment = 0;

// 订阅通知
hub.on("message", handler);
hub.on("message", () => console.log("Message event fired"));
hub.on("increment", () => increment++);

// 广播
hub.emit("message", "hello world");
hub.emit("increment");

// 取消订阅
hub.off("message", handler);
```
