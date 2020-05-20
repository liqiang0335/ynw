import React, { useState } from "react";
import { Tree } from "antd";
/**
 * 树组件（单选）
 * @param {Function} onCheck - {key, node}
 */
export default function TreeRadio({ onCheck, ...rest }) {
  const [keys, setkeys] = useState([]);

  const _onCheck = (checkedKeys, e) => {
    if (checkedKeys.checked.length === 0) {
      setkeys([]);
      onCheck({ keys: [], node: {} });
      return;
    }
    const last = checkedKeys.checked.pop();
    setkeys([last]);
    onCheck({ keys: [last], node: e.node });
  };

  return (
    <Tree
      style={{ width: "100%" }}
      checkedKeys={keys}
      checkable
      checkStrictly
      defaultExpandAll={true}
      onCheck={_onCheck}
      {...rest}
    />
  );
}
