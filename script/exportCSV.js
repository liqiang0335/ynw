import { saveAs } from "file-saver";
import { message } from "antd";
/**
 * ----------------------------------------
 * 导出CSV文件:修复中文乱码
 * @param {String} name
 * @param {String} content
 * ----------------------------------------
 */
export default function exportCSV(name, content) {
  const blob = new Blob(["\ufeff" + content], { type: "text/csv,charset=UTF-8" });
  saveAs(blob, name);
  message.success("导出成功");
}
