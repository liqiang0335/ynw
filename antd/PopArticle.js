import React from "react";
import { Popover } from "antd";
import { Button } from "antd";
/**
 * ----------------------------------------
 * 弹窗展示长文章详细内容
 * 大于trunc(默认10)个字的时候
 * @param {String} content - 内容
 * @param {String} [trunc = 10] - 截取
 * @param {Boolean} [plain = false] - 显示富文本
 * ----------------------------------------
 */
export default function PopArticle({
  content,
  plain = false,
  trunc = 10,
  ...props
}) {
  if (!content) {
    return null;
  }
  const isLarge = content.length > trunc;
  const title = isLarge
    ? content.replace(/<.+?>/g, "").substring(0, trunc) + ".."
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
