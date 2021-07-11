import React from "react";
import { PictureOutlined } from "@ant-design/icons";
import getSrcPrefix from "@script/getSrcPrefix";
import showImage from "@script/showImage";
/**
 * ----------------------------------------
 * 图片占位符
 * 点击全屏显示图片
 * @param {String} src - 图片地址
 * ----------------------------------------
 */
export default function ImageHolder({ src }) {
  if (!src) return null;
  const path = getSrcPrefix(src);
  return (
    <PictureOutlined
      onClick={() => showImage(path)}
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
