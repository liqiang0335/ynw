import React, { useRef, useEffect, useReducer } from "react";
import styled from "styled-components";
import "./TextScroll.css";

const initState = {
  contentWidth: 0,
  left: 0,
};
const reducer = (state, action) => {
  return { ...state, ...action };
};
/**
 * ----------------------------------------
 * 跑马灯:文本
 * @param {String} children - 内容
 * @param {Number} [duration=20] - 速度
 * ----------------------------------------
 */
function TextScroll({ children, duration = 20 }) {
  const [state, dispatch] = useReducer(reducer, initState);
  let ref = useRef(null);

  useEffect(() => {
    const { offsetWidth, parentElement } = ref.current;
    dispatch({
      contentWidth: offsetWidth,
      left: parentElement.offsetWidth,
    });
  }, []);

  const { contentWidth, left } = state;
  const animationName = `marquee_${contentWidth}`;

  const Text = styled.div`
    position: relative;
    left: ${left}px;
    white-space: nowrap;
    animation: ${animationName} ${duration}s linear infinite both;
    animation-play-state: running;
    animation-fill-mode: forwards;
    @keyframes ${animationName} {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-${contentWidth + left}px);
      }
    }
  `;

  return (
    <div className="yy_marquee_box">
      <Text ref={ref}>{children}</Text>
    </div>
  );
}

export default React.memo(TextScroll);
