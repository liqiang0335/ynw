import React from "react";
import { Popover } from "antd";
import { Button } from "antd";
/**
 * ----------------------------------------
 * 展示长文章
 * @param {String} content - 内容
 * ----------------------------------------
 */
export default function PopArticle({ content, plain, ...props }) {
  if (!content) {
    return null;
  }
  const isLarge = content.length > 10;
  const title = isLarge
    ? content.replace(/<.+?>/g, "").substring(0, 10) + ".."
    : content;

  const Content = () => {
    return (
      <div style={{ width: "300px", height: "150px", overflow: "auto" }}>
        {plain ? (
          <span dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <span>{content}</span>
        )}
      </div>
    );
  };

  return (
    <Popover trigger="hover" title="内容详情" content={Content} {...props}>
      <Button type="link" style={{ maxWidth: "170px" }}>
        {title}
      </Button>
    </Popover>
  );
}
