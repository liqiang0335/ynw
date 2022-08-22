import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
const margins = {
  bottom: "marginTop",
  top: "marginBottom",
};
/**
 * ----------------------------------------
 * 图例
 * ----------------------------------------
 */
export default function Figure({ children, placement = "bottom" }) {
  return (
    <div
      style={{
        textAlign: "center",
        [margins[placement]]: "10px",
        fontSize: "13px",
      }}
    >
      {placement == "bottom" ? (
        <CaretUpOutlined style={{ fontSize: "14px" }} />
      ) : (
        <CaretDownOutlined style={{ fontSize: "14px" }} />
      )}

      <span style={{ marginLeft: "5px" }}>{children}</span>
    </div>
  );
}
