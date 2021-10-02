import React, { useState } from "react";
import UUIDBrowser from "ynw/browser/UUIDBrowser";
/**
 * -------------------------------------
 * 选择文件
 * @param {Function} onChange
 * @param {String} [accept] 格式过滤
 * @param {Function} [as='readAsArrayBuffer'] reader的读取方法
 * -------------------------------------
 */
export default function ChooseFileOrigin({ onChange, accept = "*" }) {
  const [id] = useState(UUIDBrowser());
  const onInputChange = e => {
    const { target } = e.nativeEvent;
    const file = target.files[0];
    if (onChange) {
      onChange(file);
    }
  };
  return (
    <label htmlFor={id}>
      <input id={id} type="file" onChange={onInputChange} accept={accept} />
    </label>
  );
}
