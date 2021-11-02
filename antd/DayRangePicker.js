import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import { compact } from "lodash";
/**
 * ----------------------------------------
 * 日期区间选择
 * @param {Array} value - [String]
 * @param {Function} onChange(dates) - dates: [String]
 * ----------------------------------------
 */
export default function RangePickerWrap({ value, onChange, ...rest }) {
  const _onChange = (_, dateString) => {
    onChange(dateString);
  };
  return (
    <RangePicker
      value={compact(value).map(v => moment(v))}
      onChange={_onChange}
      {...rest}
    />
  );
}
