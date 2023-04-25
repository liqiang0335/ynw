import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import http from "@script/http";
import { CloseOutlined } from "@ant-design/icons";
import IF from "ynw/react/IF";

const defaultApiUrl = { items: "/com/auto/complete/items", remove: "/com/auto/complete/delete" };
const { Option } = AutoComplete;
/**
 * ----------------------------------------
 * [ynw]自动完成: 根据给定的类型提示
 * @param {String} type - 类型
 * @param {Boolean} [del=true] - 是否显示删除
 * @param {Boolean} [apiUrl] - 接口地址:列表和删除的接口
 * ----------------------------------------
 */
export default function AutoCompleteBox({ type, del = true, apiUrl = defaultApiUrl, ...rest }) {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    const params = { type };
    http.get(apiUrl.items, { params }).then((res) => {
      setdatas(res);
    });
  }, []);

  const remove = (e, name) => {
    e.stopPropagation();
    const params = { type, name };
    http.post(apiUrl.remove, params);
    setdatas((datas) => datas.filter((it) => it.name !== name));
  };

  return (
    <AutoComplete
      placeholder="选择或输入"
      filterOption={(inputValue, option) => {
        return option.value.indexOf(inputValue) != -1;
      }}
      {...rest}
    >
      {datas.map((item) => (
        <Option key={item.name} value={item.name}>
          <div className="flex items-center">
            <span className="flex-1">{item.name}</span>
            <IF value={del}>
              <CloseOutlined style={{ size: "12px", color: "gray" }} onClick={(e) => remove(e, item.name)} />
            </IF>
          </div>
        </Option>
      ))}
    </AutoComplete>
  );
}
