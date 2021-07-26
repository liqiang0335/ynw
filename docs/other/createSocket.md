# reconnecting-websocket

> 自动断线重新连接的 Socket

```js
/**
 * ----------------------------------------
 * 语法
 * @param {String} key - 连接的key
 * @param {String} host - 地址
 * @param {Function} onmessage - 消息回调
 * @return {}
 * ----------------------------------------
 */
import createSocket from "ynw/other/createSocket";
```

## Source

```js
const ReconnectingWebSocket = require("reconnecting-websocket");

const createSocket = function ({ key, host, onmessage }) {
  try {
    const path = host.replace("http:", "");
    const webSocketPath = "ws:" + path + "websocket";
    let webSocket = new ReconnectingWebSocket(webSocketPath);
    webSocket.debug = true;
    webSocket.timeoutInterval = 5400;
    window.onbeforeunload = function () {
      webSocket.close();
    };
    webSocket.onopen = function () {
      webSocket.send(key);
    };
    webSocket.onmessage = event => {
      const push = JSON.parse(event.data);
      if (process.env.NODE_ENV !== "production") {
        console.log("push >>", push);
      }
      onmessage(push);
    };
  } catch (e) {
    console.log("Your Browser Not Support WebSocket");
  }
};

export default createSocket;
```
