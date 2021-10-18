import React from "react";
import styled from "styled-components";
/**
 * ----------------------------------------
 * 带图标, 摘要/统计项等综合描述使用
 * @param  {String} label - 标签
 * @param  {Any} value - 数字
 * @param  {Slot} children - 图标位置内容
 * @param  {Boolean} [rounded=true] - 是否显示圆角
 * @param  {String} [color] - 图标背景颜色
 * ----------------------------------------
 */
export default function SumCard({
  label,
  value,
  children,
  rounded = true,
  color = "#118adb",
  style,
}) {
  const boxStyle = { borderColor: color, borderRadius: "4px", ...style };
  if (rounded) {
    boxStyle.borderRadius = "46px";
  }

  return (
    <SBox style={boxStyle}>
      <SIcon
        style={{
          background: color,
          borderRadius: rounded ? "50%" : "2px",
        }}
      >
        {children}
      </SIcon>
      <STitle>{label}</STitle>
      <div style={{ flex: 1 }}></div>
      <SValue>{value}</SValue>
    </SBox>
  );
}

const SBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid;
  padding: 10px;
  background: white;
`;

const SIcon = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const STitle = styled.div`
  color: gray;
  letter-spacing: 1px;
  font-size: 14px;
  margin-right: 5px;
`;

const SValue = styled.div`
  font-size: 30px;
`;
