import React from "react";
import { Select } from "antd";
const { Option } = Select;
/**
 * 通用的下拉选择
 * @param {Array} data - {value, name}
 * @param {Function} onChange(value) -  选中回调
 * @param {Function} onSelect(itemData) - 选中回调
 */
export default function SelectCommon({
  data,
  onChange,
  onSelect,
  getName,
  ...rest
}) {
  const _onChange = value => {
    onChange(value);
    if (onSelect) {
      onSelect(data.find(item => item.value === value));
    }
  };

  const _getName = item => {
    if (getName) {
      return getName(item);
    } else {
      return item.name;
    }
  };

  return (
    <Select placeholder="请选择" onChange={_onChange} {...rest}>
      {data.map(item => (
        <Option key={item.value} value={item.value}>
          {_getName(item)}
        </Option>
      ))}
    </Select>
  );
}
