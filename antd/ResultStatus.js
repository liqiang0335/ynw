import React from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export default function SendStatus({ value }) {
  if (value) {
    return (
      <span style={{ color: "#07c420" }}>
        <CheckCircleFilled /> 成功
      </span>
    );
  }
  return (
    <span style={{ color: "#ff0000" }}>
      <CloseCircleFilled /> 失败
    </span>
  );
}
