import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

/**
 * ----------------------------------------
 * 页码
 * @param {Number} current
 * @param {Number} total
 * @param {Number} pageSize
 * @param {Function} createLink(page) - 创建链接
 * ----------------------------------------
 */
export default function Pagination({ current, total, pageSize = 10, createLink }) {
  const length = Math.ceil(total / pageSize);
  const values = Array.from({ length });
  const isFirst = current == 1;
  const isLast = current == length;

  return (
    <div className="flex space-x-2 text-center w-ful justify-center my-5 items-center cursor-pointer select-none">
      <a
        className="bg-slate-400 p-1"
        style={{ opacity: isFirst ? "0.2" : 1, pointerEvents: isFirst ? "none" : "all" }}
        href={createLink(Number(current) - 1)}
      >
        <LeftOutlined style={{ color: "white" }} />
      </a>
      {values.map((_, i) => (
        <a
          key={i}
          href={createLink(i + 1)}
          className={`pagination-item text-sm border bg-slate-400 w-5 h-5 rounded-sm text-white cursor-pointer ${
            current == i + 1 ? "active" : ""
          }`}
        >
          {i + 1}
        </a>
      ))}
      <a
        className="bg-slate-400 p-1"
        style={{ opacity: isLast ? "0.2" : 1, pointerEvents: isLast ? "none" : "all" }}
        href={createLink(Number(current) + 1)}
      >
        <RightOutlined style={{ color: "white" }} />
      </a>
    </div>
  );
}
