/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";

export default function Download({ src, children = "文件下载" }) {
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
      <DownloadOutlined style={{ fontSize: "16px" }} /> {children}
    </a>
  );
}
