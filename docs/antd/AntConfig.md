# AntConfig

> antd 配置

```js
import AntConfig from "ynw/antd/AntConfig";
```

## Source

```js
import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

export default function AntConfig({ children }) {
  return (
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
      {children}
    </ConfigProvider>
  );
}
```
