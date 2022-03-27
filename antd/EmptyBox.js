import React from "react";
import { Empty } from "antd";
/**
 * ----------------------------------------
 * 暂无数据状态
 * @description 如果是数组且数组的值小于1，显示暂无数据
 * @param {*} data
 * @param {Number} [padding=10]
 * ----------------------------------------
 */
export default function EmptyBox({ data, children, padding = 10 }) {
  if (Array.isArray(data) && data.length < 1) {
    return (
      <div style={{ background: "white", padding: `${padding}px` }}>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </div>
    );
  }
  return children;
}
