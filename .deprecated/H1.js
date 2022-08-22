import React from "react";
import styles from "./H1.scss";
/**
 * ----------------------------------------
 * 标题：左侧带有边框
 * @param {Number} [top=0] - 上边距
 * @returns {Object} [style]
 * ----------------------------------------
 */
export default function Title({ children, style, top = 0 }) {
  const _style = Object.assign({ marginTop: `${top}px` }, style);
  return (
    <div className={styles.title} style={_style}>
      <i className={styles.icon}></i> {children}
    </div>
  );
}
