import React from "react";
import TextScroll from "@comps/TextScroll";
import IF from "ynw/react/IF";
/**
 * ----------------------------------------
 * 跑马灯
 * @param {String} bg - 背景色
 * @param {String} content - 文字内容
 * ----------------------------------------
 */
export default function NoticeBar({ bg = "#b2dcfe", content }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "5px",
        background: bg,
        overflow: "hidden",
        borderRadius: "2px",
        width: "100%",
        height: "30px",
      }}
    >
      <IF value={content}>
        <TextScroll>{content}</TextScroll>
      </IF>
    </div>
  );
}
