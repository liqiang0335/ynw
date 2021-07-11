import React from "react";

export default function LabelLine({ label, children, height = 40 }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: height + "px",
      }}
    >
      <div style={{ flexShrink: 0 }}>{label}：</div>
      <div style={{ flexGrow: 1 }}>{children}</div>
    </div>
  );
}
