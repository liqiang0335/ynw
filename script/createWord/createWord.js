const FileSaver = require("file-saver");
import wordXML from "./wordXML";
import { Document, Packer } from "docx";
/**
 * ------------------------ ----------------
 * 导出WORD文档
 * 参考: https://docx.js.org/#/?id=welcome
 * @param {String} title
 * @param {Array} children - 返回内容数组
 * ----------------------------------------
 */
export default async function createWord({ title, children }) {
  const doc = new Document({
    title: title,
    externalStyles: wordXML,
    sections: [{ properties: {}, children }],
  });
  const blob = await Packer.toBlob(doc);
  FileSaver.saveAs(blob, `${title}.docx`);
  return Promise.resolve();
}
