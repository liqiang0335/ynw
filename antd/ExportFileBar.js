import React from "react";
import { IconWrod, IconPdf } from "./IconFiles/IconFiles";

export default function ExportFileBar({ onClickWord, onClickPdf }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ color: "gray", marginRight: "10px", marginLeft: "10px" }}>
        导出文件
      </span>
      {onClickWord && <IconWrod onClick={onClickWord} />}
      <div style={{ margin: "0 5px" }}></div>
      {onClickPdf && <IconPdf onClick={onClickPdf} />}
    </div>
  );
}
