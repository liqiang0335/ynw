import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

export default function AntConfig({ children }) {
  return (
    <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
      {children}
    </ConfigProvider>
  );
}
