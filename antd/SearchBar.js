import React from "react";
import { SearchButton, ResetButton } from "@comps/Buttons";
import styles from "./SearchBar.scss";
import { message } from "antd";
let loading = false;
/**
 * ----------------------------------------
 * 搜索栏
 * @param {Function} onRest - 充值按钮
 * @param {Function} onSearch - 搜索按钮
 * ----------------------------------------
 */
export default function SearchBar({ children, onReset, onSearch, right = null }) {
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
        {onReset && <ResetButton onClick={onReset} style={{ marginLeft: "5px" }} />}
        <SearchButton onClick={_search} style={{ marginLeft: "5px" }} />
      </div>
      <div style={{ flex: 1 }}></div>
      {right}
    </div>
  );
}
