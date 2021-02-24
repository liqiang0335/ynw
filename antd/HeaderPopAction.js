import React from "react";
import styles from "./HeaderPopAction.scss";
import { Popover } from "antd";
/**
 * -------------------------------------
 *
 * -------------------------------------
 */
export default function HeaderPopAction({ Content, text, children, style }) {
  return (
    <Popover trigger="click" content={Content}>
      <div className={styles.wrap} style={style}>
        <div className={styles.holder}>{children}</div>
        <span className={styles.text}>{text}</span>
      </div>
    </Popover>
  );
}
