```js
import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
/**
 * 操作确认
 * @returns {Promise}
 */
export default function confirmer(content, title = "操作确认") {
  return new Promise((resolve, reject) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined style={{ color: "red" }} />,
      title: title,
      content: content,
      async onOk() {
        resolve();
      },
      onCancel() {
        reject();
      },
    });
  });
}
```
