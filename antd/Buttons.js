import React from "react";
import { Button } from "antd";

/**
 * @param {Function} onClickNew
 * @param {Function} onClickEdit
 * @param {Function} onClickDelete
 */
export function ButtonGroup({ onClickNew, onClickEdit, onClickDelete }) {
  return (
    <div>
      <Button
        type="primary"
        style={{ marginRight: "10px" }}
        onClick={onClickNew}
      >
        新增
      </Button>
      <Button
        type="primary"
        style={{
          background: "#00c100",
          borderColor: "#00c100",
          marginRight: "10px"
        }}
        onClick={onClickEdit}
      >
        编辑
      </Button>
      <Button
        onClick={onClickDelete}
        type="danger"
        style={{
          marginRight: "10px"
        }}
      >
        删除
      </Button>
    </div>
  );
}
