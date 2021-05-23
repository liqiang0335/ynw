import React from "react";
import { Popover, Button } from "antd";
import Download from "ynw/antd/Download";
/**
 * ----------------------------------------
 * 显示多个文件下载
 * ----------------------------------------
 */
export default function ShowMulFile({ files }) {
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
      <Button type="link">{values.length}</Button>
    </Popover>
  );
}
