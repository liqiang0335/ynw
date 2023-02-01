import React from "react";
import dayjs from "dayjs";
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
      value={compact(value).map(v => dayjs(v))}
      onChange={_onChange}
      ranges={{
        今天: [dayjs(), dayjs()],
        "3天": [dayjs().subtract(3, "day"), dayjs()],
        "7天": [dayjs().subtract(7, "day"), dayjs()],
        "1个月": [dayjs().subtract(30, "day"), dayjs()],
        "3个月": [dayjs().subtract(3, "month"), dayjs()],
        "6个月": [dayjs().subtract(6, "month"), dayjs()],
        "1年": [dayjs().subtract(1, "year"), dayjs()],
      }}
      {...rest}
    />
  );
}
