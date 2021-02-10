import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const FORMAT = "YYYY-MM-DD";
/**
 * 日期选择器
 * @param {String} value
 * @param {String} onChange(day:String)
 */
export default function DatePickerBox({ value, onChange, ...rest }) {
  function _onChange(value, dateString) {
    onChange(dateString);
  }
  return (
    <DatePicker
      value={value ? moment(value) : ""}
      onChange={_onChange}
      format={FORMAT}
      {...rest}
    />
  );
}
