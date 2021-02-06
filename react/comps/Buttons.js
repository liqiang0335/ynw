import React from "react";
import { Button as AntButton } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  CaretLeftOutlined,
  CloseOutlined,
  SearchOutlined,
  RedoOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useDebounceFn } from "ahooks";

const debounceOption = {
  wait: 1000,
  leading: true,
  trailing: false,
};

export function DebounceBtn({ onClick, ...props }) {
  const { run } = useDebounceFn(() => onClick(), debounceOption);
  return <Base type="primary" {...props} onClick={run} />;
}

function Base({ color, ...rest }) {
  const style = { margin: "0 5px" };
  if (color) {
    style.background = color;
    style.borderColor = color;
    style.color = "white";
  }
  return <AntButton style={style} {...rest} />;
}

export function Button(props) {
  return <Base type="primary" {...props} />;
}

export function AddButton(props) {
  return (
    <Base {...props} type="primary" icon={<PlusOutlined />}>
      添加
    </Base>
  );
}

export function EditButton(props) {
  return (
    <Base color="#11c962" icon={<EditOutlined />} {...props}>
      修改
    </Base>
  );
}

export function DeleteButton(props) {
  return (
    <Base color="#ff4500" icon={<CloseOutlined />} {...props}>
      删除
    </Base>
  );
}

export function SubmitButton(props) {
  return (
    <Base type="primary" icon={<SaveOutlined />} {...props}>
      提交
    </Base>
  );
}

export function CancelButton(props) {
  return (
    <Base color="#a2a2a2" icon={<CloseOutlined />} {...props}>
      取消
    </Base>
  );
}

export function BackButton(props) {
  return (
    <Base color="#a2a2a2" icon={<CaretLeftOutlined />} {...props}>
      返回
    </Base>
  );
}

export function ButtonGroup({ onClickAdd, onClickEdit, onClickDelete }) {
  return (
    <>
      <Button onClick={onClickAdd}>添加</Button>
      <Button color="#11c962" onClick={onClickEdit}>
        修改
      </Button>
      <Button color="#ff4500" onClick={onClickDelete}>
        删除
      </Button>
    </>
  );
}

export function AddCircle(props) {
  return (
    <Base shape="circle" type="primary" icon={<PlusOutlined />} {...props} />
  );
}
export function EditCircle(props) {
  return (
    <Base shape="circle" color="#11c962" icon={<EditOutlined />} {...props} />
  );
}
export function DeleteCircle(props) {
  return (
    <Base shape="circle" color="#ff4500" icon={<CloseOutlined />} {...props} />
  );
}

export function SearchButton(props) {
  return (
    <Base type="primary" icon={<SearchOutlined />} {...props}>
      搜索
    </Base>
  );
}

export function ResetButton(props) {
  return (
    <Base icon={<RedoOutlined />} color="gray" {...props}>
      重置
    </Base>
  );
}
