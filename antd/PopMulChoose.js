import React, { useState, useEffect } from "react";
import { Popover, Button, message } from "antd";
import { CloseCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import styled from "styled-components";
/**
 * ----------------------------------------
 * 弹窗多选列表
 * @param {Array<{_id,name}>} datas
 * @param {Array} value
 * @param {Function} onChange
 * @param {Boolean} [uniq = false] - 是否唯一
 * ----------------------------------------
 */
export default function RolesChoose({
  datas = [],
  value = [],
  onChange,
  uniq = false,
}) {
  const [byId, setById] = useState({});

  useEffect(() => {
    setById(
      datas.reduce((p, c) => {
        p[c._id] = c;
        return p;
      }, {})
    );
  }, [datas]);

  const onClickAdd = id => {
    if (uniq && value.includes(id)) {
      return message.info("已存在");
    }
    onChange([...value, id]);
  };

  const onClickRemove = removeId => {
    onChange(value.filter(id => id !== removeId));
  };

  const Content = () => {
    return (
      <SBox>
        {datas.map(item => (
          <SItem key={item._id} onClick={() => onClickAdd(item._id)}>
            <PlusCircleOutlined /> <span>{item.name}</span>
          </SItem>
        ))}
      </SBox>
    );
  };

  return (
    <div>
      <Popover content={Content} trigger="click">
        <Button type="link" icon={<EditOutlined />}>
          请选择
        </Button>
      </Popover>
      <SRoles>
        {(value || []).map((id, i) => (
          <SRoleItem key={id + i} onClick={() => onClickRemove(id)}>
            <SIndex>{i + 1}.</SIndex> {byId[id]?.name}
            <span style={{ flex: 1 }} />
            <CloseCircleOutlined />
          </SRoleItem>
        ))}
      </SRoles>
    </div>
  );
}

const SBox = styled.div`
  width: 300px;
  height: 150px;
  overflow: auto;
`;

const SItem = styled.div`
  padding: 6px;
  cursor: pointer;
  &:active {
    color: red;
  }
`;

const SRoles = styled.div`
  background-color: rgb(245, 245, 245);
`;

const SRoleItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(240, 240, 240);
  user-select: none;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const SIndex = styled.div`
  font-size: 15px;
  margin-right: 7px;
`;
