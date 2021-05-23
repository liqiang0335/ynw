import React from "react";
import { Popover, Button } from "antd";
import Download from "ynw/antd/Download";
import { FilePptOutlined } from "@ant-design/icons";
/**
 * ----------------------------------------
 * 显示多个文件下载
 * @param {Array} - files - 文件路径列表
 * @param {Boolean} - [showCount] - 是否显示数量
 * ----------------------------------------
 */
export default function ShowMulFile({ files, showCount = false }) {
  const values = files || [];
  const len = values.length;

  if (len < 1) return "--";

  const Content = () => {
    return (
      <div>
        {values.map(path => (
          <div key={path}>
            <Download src={path}>{path.replace(/^.+\//g, "")}</Download>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Popover title="文件下载" content={Content} trigger="click">
      <Button type="link">
        <FilePptOutlined style={{ fontSize: "16px" }} />
        {showCount ? (
          <span style={{ marginLeft: "5px" }}>{values.length}</span>
        ) : (
          ""
        )}
      </Button>
    </Popover>
  );
}
