import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
const FORMAT = "YYYY-MM-DD";
/**
 * 日期选择器
 * @param {String} value
 * @param {String} onChange(day:String)
 */
export default function DatePickerBox({ value, onChange, ...rest }) {
  function _onChange(_, dateString) {
    onChange(dateString);
  }
  return <DatePicker value={value ? dayjs(value) : ""} onChange={_onChange} format={FORMAT} {...rest} />;
}
