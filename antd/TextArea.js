import React from "react";
import { Input } from "antd";

export default function TextArea(props) {
  return (
    <Input.TextArea
      autoSize={{ minRows: 4, maxRows: 7 }}
      maxLength={100}
      showCount={true}
      {...props}
    />
  );
}
