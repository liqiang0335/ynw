import React, { useEffect, useReducer } from "react";
import { Radio, DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;
import PropTypes from "prop-types";
TabRangePicker.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

const f = "YYYY-MM-DD";
const today = moment(new Date()).format(f);
const thisWeekStart = moment()
  .startOf("week")
  .format(f);
const lastWeekStart = moment()
  .subtract("1", "week")
  .startOf("week")
  .format(f);
const lastWeekEnd = moment()
  .subtract("1", "week")
  .endOf("week")
  .format(f);
const thisMonthStart = moment()
  .startOf("month")
  .format(f);
const lastMonthStart = moment()
  .subtract(1, "month")
  .startOf("month")
  .format(f);
const lastMonthEnd = moment()
  .subtract(1, "month")
  .endOf("month")
  .format(f);
const thisYearStart = moment()
  .startOf("year")
  .format(f);

const initState = {
  dates: [], // [moment, moment]
  datesStr: [], // [string, string]
};
const reducer = (state, action) => {
  return { ...state, ...action };
};

/**
 * ----------------------------------------
 * 选择时间范围:包含自定义范围
 * @param {Array} value - [startDate:String, endDate:String]
 * @param {Function} onChange(value)
 * ----------------------------------------
 */
export default function TabRangePicker({ value, onChange }) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (!value[0]) {
      return dispatch({ dates: [], datesStr: [] });
    }
    const dates = value.map(it => moment(it));
    dispatch({ dates, datesStr: value });
  }, [value]);

  const _onChange = (_, datesStr) => {
    dispatch({ datesStr });
    onChange(datesStr);
  };

  const onRadioChange = e => {
    const datesStr = e.target.value.split(":");
    dispatch({ datesStr });
    onChange(datesStr);
  };

  return (
    <div>
      <Radio.Group
        defaultValue="a"
        buttonStyle="solid"
        style={{ marginRight: "10px" }}
        value={state.datesStr.join(":")}
        onChange={onRadioChange}
      >
        <Radio.Button value={`${thisWeekStart}:${today}`}>本周</Radio.Button>
        <Radio.Button value={`${lastWeekStart}:${lastWeekEnd}`}>
          上周
        </Radio.Button>
        <Radio.Button value={`${thisMonthStart}:${today}`}>本月</Radio.Button>
        <Radio.Button value={`${lastMonthStart}:${lastMonthEnd}`}>
          上月
        </Radio.Button>
        <Radio.Button value={`${thisYearStart}:${today}`}>本年</Radio.Button>
      </Radio.Group>
      <RangePicker value={state.dates} onChange={_onChange} />
    </div>
  );
}
