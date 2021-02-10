import React, { useState, useEffect } from "react";
import loading2 from "../../assets/loading2.gif";

/**
 * ----------------------------------------
 * 显示正在加载
 * @param {null} data - 如果data是null，则显示正在加载，否则显示children
 * ----------------------------------------
 */
export default function NullLoading({ data, children }) {
  const [v, set] = useState(data);

  useEffect(() => {
    if (data && !v) {
      setTimeout(() => {
        set(true);
      }, 200);
    }
  }, [data]);

  if (v && data) {
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
