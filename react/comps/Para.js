import React from "react";
import styled from "styled-components";
/**
 * ----------------------------------------
 * 一个段落
 * @param {String} label
 * @param {Any} children
 * ----------------------------------------
 */
export default function Para({ label, children }) {
  return (
    <div>
      <span style={{ color: "#2d39aa" }}>{label}：</span>
      <SValue>{children}</SValue>
    </div>
  );
}

const SValue = styled.span`
  &:empty::before {
    content: "--";
  }
`;
