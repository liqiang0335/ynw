# lib

## createSocket

> 创建 Socket 连接 , 断线自动重连

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
