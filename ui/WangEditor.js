import React, { useEffect, useReducer } from "react";
import { createEditor, createToolbar } from "@wangeditor/editor";
import { message } from "antd";
import UUIDBrowser from "ynw/browser/UUIDBrowser";
import reducer from "ynw/script/reducer";
import { useDebounceFn } from "ahooks";
import createEventHub from "ynw/pattern/createEventHub";

import "@wangeditor/editor/dist/css/style.css";
import "./WangEditor.css";

let editor = null;
export const hub = createEventHub();
export const Event = { Content: "Content" };

/**
 * ----------------------------------------
 * 文本编辑器 [ynw]
 * @param {Function} onChange(html)
 * @param {String} [imageServe=null] - 上传图片的接口(参数名称:file)
 * @param {String} [videoServe=null] - 上传视频的接口(参数名称:file)
 * @param {Number} [height=400] - 编辑器高度
 * @param {Number} [imageLimit=5] - 上传图片大小限制(MB)
 * @param {Number} [videoLimit=30] - 上传视频大小限制(MB)
 * @param {Object} [headers] - 请求头
 * @returns ReactElement
 *
 *  @example 使用
 *  <WangEditor
 *    onChange={html => console.log(html)}
 *    headers={{ token: window.token }}
 *    imageServe="/api/manage/com/editor/image"
 *    videoServe="/api/manage/com/editor/video"
 * />
 *
 * @example 设置内容
 * hub.emit("Content", "<strong>123</strong>");
 *
 * @description
 * 1. 上传图片和视频的接口, 请参考: https://www.wangeditor.com/v5/menu-config.html#%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87
 */
export default function WangEditor(props) {
  const { height = 400, onChange, headers = {}, imageServe, videoServe, imageLimit = 5, videoLimit = 30 } = props;
  const [state, dispatch] = useReducer(reducer, {
    editorId: "editor-" + UUIDBrowser(),
    toolId: "toolbar-" + UUIDBrowser(),
  });

  const { run } = useDebounceFn((html) => onChange(html), { wait: 1000 });

  useEffect(() => {
    // 这里的 HTML 内容必须是 wangEditor 生成的HTML格式，不可以自己随意写
    hub.on(Event.Content, (html) => {
      if (editor) {
        editor.setHtml(html);
      }
    });

    return () => {
      hub.clear();
    };
  }, []);

  useEffect(() => {
    const _headers = { token: window.token, ...headers };
    const editorConfig = {
      placeholder: "在这里请输入内容，截图可以直接粘贴 ...",
      onChange: (editor) => {
        const html = editor.getHtml();
        run(html);
      },
      MENU_CONF: {
        uploadImage: {
          headers: _headers,
          fieldName: "file",
          maxNumberOfFiles: 1,
          server: imageServe,
          base64LimitSize: 5 * 1024,
          maxFileSize: imageLimit * 1024 * 1024,
          onError(file, err, res) {
            message.error(`图片大小超出限制: ` + imageLimit + `MB`);
          },
        },
        uploadVideo: {
          headers: _headers,
          fieldName: "file",
          maxNumberOfFiles: 1,
          server: videoServe,
          maxFileSize: videoLimit * 1024 * 1024,
          onError(file, err, res) {
            message.error(`视频大小超出限制:` + videoLimit + `MB`);
          },
        },
        fontSize: {
          fontSizeList: ["14px", "16px", "18px", "24px", "40px"],
        },
      },
    };

    editor = createEditor({
      selector: "#" + state.editorId,
      config: editorConfig,
      mode: "simple",
      content: [{ type: "paragraph", children: [{ text: "", fontFamily: "黑体", fontSize: "16px" }] }],
    });

    createToolbar({
      editor,
      selector: "#" + state.toolId,
      config: {
        excludeKeys: ["todo", "fullScreen", "codeBlock"],
      },
    });
  }, []);

  return (
    <div className="border border-solid border-gray-200 bg-gray-300">
      <div id={state.toolId}></div>
      <div id={state.editorId} className="overflow-auto" style={{ height: height + "px" }}></div>
    </div>
  );
}
