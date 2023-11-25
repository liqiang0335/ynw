import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * 延迟渲染组件: 用于解决createPortal依赖的元素, 在组件渲染时不存在的问题
 * @param {ReactNode} children - 子节点
 * @param {string} selector - CSS选择器: "#id", ".class"
 * @param {number} [delay] - 延迟时间, 单位ms
 */
export default function DelayCreatePortal({ children, selector, delay = 10 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);
  }, []);

  if (show) {
    return createPortal(children, document.querySelector(selector));
  }

  return null;
}
