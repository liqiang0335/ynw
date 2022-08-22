import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
import { compact } from "lodash-es";
const { RangePicker } = DatePicker;
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
      ranges={{
        今天: [moment(), moment()],
        "3天": [moment().subtract(3, "day"), moment()],
        "7天": [moment().subtract(7, "day"), moment()],
        "1个月": [moment().subtract(30, "day"), moment()],
        "3个月": [moment().subtract(3, "month"), moment()],
        "6个月": [moment().subtract(6, "month"), moment()],
        "1年": [moment().subtract(1, "year"), moment()],
      }}
      {...rest}
    />
  );
}
