import React from "react";
/**
 * ----------------------------------------
 * IFShow - React Component
 *  - 用于控制显示隐藏
 * ----------------------------------------
 */
export default function IFShow({ value, children }) {
  const style = { display: value ? "block" : "none" };
  return <div style={style}>{children}</div>;
}
