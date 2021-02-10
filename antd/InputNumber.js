import React from "react";
import { InputNumber } from "antd";
/**
 * ----------------------------------------
 * 数字
 * @param {String} suffix - 后缀
 * ----------------------------------------
 */
export default function InputNumberBox({ suffix = "", ...rest }) {
  const options = {};
  if (suffix) {
    options.formatter = v => `${v}${suffix}`;
    options.parser = v => v.replace(suffix, "");
  }
  return <InputNumber min={0} {...options} {...rest} />;
}
