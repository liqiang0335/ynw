import React, { useEffect, useState, useRef } from "react";
/**
 * ----------------------------------------
 * 滚动表格容器
 * 等自身有了宽度以后, 再渲染子组件
 * ----------------------------------------
 */
export default function ScrolledTableBox({ children }) {
  const [width, setWidth] = useState("100%");
  const ref = useRef(null);

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setWidth(rect.width + "px");
  }, []);

  const Content = () => {
    if (width === "100%") return null;
    return children;
  };

  return (
    <div ref={ref} style={{ width: width, minHeight: "10px", flex: 1 }}>
      <Content />
    </div>
  );
}
