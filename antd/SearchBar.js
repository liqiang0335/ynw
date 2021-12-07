import React from "react";
import { DebounceBtn, ResetButton } from "ynw/antd/Buttons";
import styles from "./SearchBar.scss";
import { message } from "antd";
let loading = false;
/**
 * ----------------------------------------
 * 搜索栏
 * @param {Function} onRest - 重置按钮
 * @param {Function} onSearch - 搜索按钮
 * ----------------------------------------
 */
export default function SearchBar({ children, onReset, onSearch }) {
  const _search = () => {
    if (loading) return;
    message.info("正在查询..", 1);
    loading = true;
    setTimeout(() => (loading = false), 1500);
    onSearch();
  };
  return (
    <div className={styles.container}>
      <div className={styles.forms}>{children}</div>
      <div className={styles.btns}>
        {onReset && <ResetButton onClick={onReset} />}
        <DebounceBtn onClick={_search} style={{ marginLeft: "5px" }}>
          查询
        </DebounceBtn>
      </div>
    </div>
  );
}
