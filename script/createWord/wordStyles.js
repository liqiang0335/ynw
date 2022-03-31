import { Paragraph, TextRun, AlignmentType } from "docx";

/**
 * ----------------------------------------
 * 字符样式
 * @param {String} text - 内容
 * @param {String} color - 颜色
 * ----------------------------------------
 */
export const Character = (text, color) => {
  const p = { text: String(text) };
  if (color) p.color = color;
  return new TextRun(p);
};

/**
 * ----------------------------------------
 * 创建段落样式函数
 * https://docx.js.org/#/usage/styling-with-xml
 * ----------------------------------------
 */

const getChildren = params => {
  if (typeof params !== "object") {
    return [new TextRun(String(params))];
  }
  return [].concat(params);
};

/**
 * ----------------------------------------
 * 插入图片
 * @param {String} base64
 * @returns {Number} width - 宽度
 * @returns {Number} height - 高度
 * ----------------------------------------
 */
export function ImagePara(base64, width, height) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new ImageRun({
        data: base64,
        transformation: {
          width: width,
          height: height,
        },
      }),
    ],
  });
}

/**
 * ----------------------------------------
 * 正文
 * ----------------------------------------
 */
export function N(params) {
  return new Paragraph({ children: getChildren(params) });
}

/**
 * ----------------------------------------
 * 正文居中对齐
 * ----------------------------------------
 */
export function NC(params) {
  return new Paragraph({
    children: getChildren(params),
    alignment: AlignmentType.CENTER,
  });
}

/**
 * ----------------------------------------
 * 正文右对齐
 * ----------------------------------------
 */
export function NR(params) {
  return new Paragraph({
    children: getChildren(params),
    alignment: AlignmentType.RIGHT,
  });
}

/**
 * ----------------------------------------
 * 正文左对齐
 * ----------------------------------------
 */
export function NL(params) {
  return new Paragraph({
    children: getChildren(params),
    alignment: AlignmentType.LEFT,
  });
}

/**
 * ----------------------------------------
 * 自定义样式：标题1
 * ----------------------------------------
 */
export function T1(params) {
  return new Paragraph({ children: getChildren(params), style: "T1" });
}
export function T2(params) {
  return new Paragraph({ children: getChildren(params), style: "T2" });
}
export function T3(params) {
  return new Paragraph({ children: getChildren(params), style: "T3" });
}
export function T4(params) {
  return new Paragraph({ children: getChildren(params), style: "T4" });
}
export function T5(params) {
  return new Paragraph({ children: getChildren(params), style: "T5" });
}
export function T6(params) {
  return new Paragraph({ children: getChildren(params), style: "T6" });
}

export function tableHead(params) {
  return new Paragraph({ children: getChildren(params), style: "tableHead" });
}

export function tableBody(params) {
  return new Paragraph({ children: getChildren(params), style: "tableBody" });
}
