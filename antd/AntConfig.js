import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

export default function AntConfig({ children, ...props }) {
  return (
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false} componentSize="middle" {...props}>
      {children}
    </ConfigProvider>
  );
}
