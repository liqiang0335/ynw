import React from "react";
import { Button } from "antd";
/**
 * ----------------------------------------
 * 文件上传按钮
 * @param {Function} onChange - onChange(file:Base64)
 * ----------------------------------------
 */
export default function InputFileBtn({ onChange }) {
  const _onChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      onChange(this.result);
    };
  };

  return (
    <label>
      <input
        type="file"
        style={{ opacity: 0, width: "1px" }}
        onChange={_onChange}
      />
      <span style={{ cursor: "pointer", color: "#1944bb" }}>上传</span>
    </label>
  );
}
