import { read, utils } from "xlsx/xlsx.mjs";
/**
 * ----------------------------------------
 * 读取XLSX文件
 * ----------------------------------------
 */
export default function readXLSX(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = e => {
      const data = e.target.result;
      const workbook = read(data, { type: "array" });
      const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = utils.sheet_to_json(first_worksheet);
      resolve(json);
    };
  });
}
