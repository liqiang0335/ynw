import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import createEventHub from "ynw/pattern/createEventHub";
import { Spin } from "antd";

export const mask = createEventHub();

const initState = {
  visible: false,
  message: "",
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 全局蒙版
 * @param {Number} [zIndex = 10000] 层级高度
 * @description
 * import { mask } from "@comps/GlobalMask";
 * mask.emit('show','正在上传')
 * mask.emit('hide')
 * ----------------------------------------
 */
export default function GlobalMask({ zIndex = 10000 }) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    mask.on("show", message => {
      dispatch({ visible: true, message: message || "" });
    });
    mask.on("hide", () => {
      setTimeout(() => {
        dispatch({ visible: false });
      }, 300);
    });
  }, []);

  return state.visible ? (
    <SBox style={{ zIndex }}>
      <Spin />
      <SMsg>{state.message}</SMsg>
    </SBox>
  ) : null;
}

const SBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SMsg = styled.div`
  color: #525f88;
  margin-top: 5px;
  letter-spacing: 1px;
`;
