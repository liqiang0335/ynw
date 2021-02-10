/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";

export default function Download({ src }) {
  if (!src) return <div>---</div>;
  return (
    <a
      href={src}
      download={src}
      style={{
        color: "blue",
        cursor: "pointer",
        "&:hover": { color: "red" },
      }}
    >
      <DownloadOutlined style={{ fontSize: "16px" }} /> 文件下载
    </a>
  );
}
