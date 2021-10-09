import React, { useState, useEffect } from "react";
import UUIDBrowser from "ynw/browser/UUIDBrowser";
/**
 * -------------------------------------
 * 选择文件
 * @param {Function} onChange
 * @param {String} [accept] 格式过滤
 * @param {File} [file] 如果file是null,则重置选择的文件
 * @param {Function} [as='readAsArrayBuffer'] reader的读取方法
 * -------------------------------------
 */
export default function ChooseFile({ onChange, accept = "*", file }) {
  const [id] = useState(UUIDBrowser());
  const onInputChange = e => {
    const { target } = e.nativeEvent;
    const file = target.files[0];
    if (onChange) {
      onChange(file);
    }
  };

  useEffect(() => {
    if (!file) {
      document.getElementById(id).value = "";
    }
  }, [file]);

  return (
    <label htmlFor={id}>
      <input id={id} type="file" onChange={onInputChange} accept={accept} />
    </label>
  );
}
