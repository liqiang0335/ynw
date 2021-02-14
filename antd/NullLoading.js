import React, { useState, useEffect } from "react";
import loading2 from "../assets/images/loading2.gif";
import { Empty } from "antd";

/**
 * ----------------------------------------
 * 显示正在加载
 * @param {null} data - 如果data是null，则显示正在加载，否则显示children
 * @param {Boolean} empty - 如果
 * ----------------------------------------
 */
export default function NullLoading({ data, children, empty }) {
  const [v, set] = useState(data);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        set(data);
      }, 200);
    }
  }, [data]);

  if (v !== null) {
    if (empty && Array.isArray(v) && v.length === 0) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
    }
    return children;
  }

  return (
    <div
      style={{
        height: "150px",
        width: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loading2} width="16" />
    </div>
  );
}
