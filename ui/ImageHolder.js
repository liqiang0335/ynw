import React from "react";
import { PictureOutlined } from "@ant-design/icons";
import previewImage from "../script/previewImage";
/**
 * ----------------------------------------
 * 图片占位符
 * 点击全屏显示图片
 * @param {String} src - 图片地址
 * ----------------------------------------
 */
export default function ImageHolder({ src }) {
  if (!src) return null;
  return (
    <PictureOutlined
      onClick={() => previewImage(src)}
      style={{
        marginLeft: "6px",
        color: "#08a1e8",
        cursor: "pointer",
        fontSize: "17px",
        position: "relative",
        top: "2px",
      }}
    />
  );
}
