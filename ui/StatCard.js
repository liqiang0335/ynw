import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
/**
 * ----------------------------------------
 * 统计信息
 * @param {String} label - 标题
 * @param {Number} value - 数值
 * @param {String} [color] - 颜色
 * @param {String} [path] - 跳转
 * ----------------------------------------
 */
export default function Stat({ label, value, color, path }) {
  const history = useHistory();
  const onClick = () => {
    if (path) {
      history.push(path);
    }
  };

  const style = {};
  if (color) {
    style.backgroundColor = color;
    style.color = "white";
  }
  if (path) {
    style.cursor = "pointer";
  }

  return (
    <SBox
      onClick={onClick}
      style={{ backgroundColor: style.backgroundColor, cursor: style.cursor }}
    >
      <Slabel style={{ color: style.color }}>{label}</Slabel>
      <Svalue style={{ color: style.color }}>{value}</Svalue>
    </SBox>
  );
}

const SBox = styled.div`
  border-radius: 4px;
  background: white;
  width: 130px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: center;
  position: relative;
  box-shadow: 4px 4px 20px rgba (0, 0, 0, 0.075);
`;
const Slabel = styled.div`
  color: gray;
  width: 100%;
  position: absolute;
  top: 15px;
  letter-spacing: 1px;
`;

const Svalue = styled.div`
  font-size: 38px;
  width: 100%;
  position: absolute;
  top: 34px;
  font-family: "SF Pro Display";
  font-weight: 400;
`;
