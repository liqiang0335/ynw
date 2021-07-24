import React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
export const Braft = BraftEditor;
/**
 * ----------------------------------------
 * BraftEditor
 * @param {EditorState} value
 * @param {Function} onChange
 *
 * !! Usage
 * 导入: import BraftEditor, { Braft } from "@comps/BraftEditor";
 * 表单: <FormItem name="content"><BraftEditor /></FormItem>
 * 编辑时 String => EditorState 转换: editData.content = Braft.createEditorState(editData.content);
 * 提交时 EditorState => String 转换: params.content = params.content.toHTML();
 * ----------------------------------------
 */
export default function BraftEditor({ style, ...props }) {
  return (
    <div style={{ border: "1px solid #cac9c9", ...style }}>
      <BraftEditor
        controls={controls}
        placeholder="在这里输入内容"
        contentStyle={{ height: "100%" }}
        {...props}
      />
    </div>
  );
}

const controls = [
  "undo",
  "redo",
  "font-size",
  "line-height",
  "text-color",
  "bold",
  "italic",
  "underline",
  "remove-styles",
  "text-align",
  "headings",
  "list-ul",
  "list-ol",
  "media",
];
