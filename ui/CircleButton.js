import React from "react";
import styled from "styled-components";
/**
 * ----------------------------------------
 * 圆形按钮
 * ----------------------------------------
 */
export default function CircleButton({ color = "red", children, onClick }) {
  return (
    <SItem color={color} onClick={onClick}>
      {children}
    </SItem>
  );
}

const SItem = styled.div`
  background: ${props => props.color};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  color: white;
  letter-spacing: 1px;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  margin: 0 10px 10px 0;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.6;
    transition: opacity 0.3s;
  }
`;
