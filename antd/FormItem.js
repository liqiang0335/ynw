import React from "react";
import { Row, Col } from "antd";

export default function FormItem({ label, children, alignItems = "center" }) {
  return (
    <Row
      style={{ display: "flex", alignItems, marginBottom: "10px" }}
      gutter={10}
    >
      <Col span={6} style={{ textAlign: "right" }}>
        {label}：
      </Col>
      <Col span={16}>{children}</Col>
    </Row>
  );
}
