import React from "react";
import styled from "styled-components";
import { InfoCircleFilled } from "@ant-design/icons";
const ColorTable = {
  red: {
    text: "#a50e0e",
    bg: "rgba(250, 219, 216, 0.4)",
  },
  yellow: {
    text: "#b05a00",
    bg: "rgba(250, 239, 204, 0.4)",
  },
  blue: {
    text: "#174ea6",
    bg: "rgba(207, 223, 250, 0.4)",
  },
};
/**
 * ----------------------------------------
 * 小提示
 * @param {String} type - blue/red/yellow
 * @param {Object} [style] - 容器样式
 * ----------------------------------------
 */
export default function ColorTip({ children, type = "blue", style }) {
  const config = ColorTable[type];

  return (
    <SBox bg={config.bg} style={style}>
      <SIcon>
        <InfoCircleFilled style={{ fontSize: "16px", color: config.text }} />
      </SIcon>
      <div style={{ color: config.text }}>{children}</div>
    </SBox>
  );
}

const SBox = styled.div`
  background-color: ${props => props.bg};
  padding: 10px;
  padding-left: 35px;
  position: relative;
  border-radius: 4px;
  margin: 10px auto;
`;

const SIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
`;
