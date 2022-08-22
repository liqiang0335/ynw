import React from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export default function SuccessStatus({ value, okText = "成功", failText = "失败" }) {
  if (value) {
    return (
      <span style={{ color: "#07c420" }}>
        <CheckCircleFilled /> {okText}
      </span>
    );
  }
  return (
    <span style={{ color: "#ff0000" }}>
      <CloseCircleFilled /> {failText}
    </span>
  );
}
