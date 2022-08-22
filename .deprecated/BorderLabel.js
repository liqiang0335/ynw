import React from "react";
import styled from "styled-components";

const Item = ({ label, children = "--" }) => {
  return (
    <SBox>
      <SBorder></SBorder>
      <span style={{ color: "#414141" }}>{label}：</span>
      <span style={{ color: "#123e91" }}>{children}</span>
    </SBox>
  );
};

export default Item;

const SBox = styled.div`
  margin-right: 20px;
  margin-bottom: 10px;
  padding-left: 10px;
  border-left: 2px solid $color;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const SBorder = styled.div`
  width: 3px;
  height: 15px;
  background: blue;
  margin-right: 5px;
  position: relative;
  top: 1px;
`;
