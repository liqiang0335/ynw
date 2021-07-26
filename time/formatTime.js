import dayjs from "dayjs";

/**
 * 时间转换
 * @param {String} value
 */
export default function formatTime(value) {
  return dayjs(new Date(value)).format("YYYY-MM-DD HH:mm:ss");
}

export function formatDay(value) {
  return dayjs(new Date(value)).format("YYYY-MM-DD");
}

/**
 * ----------------------------------------
 * 星期几
 * ----------------------------------------
 */
const Days = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "日",
};
export function getDayText(time = new Date()) {
  const value = dayjs(time).day();
  return "星期" + Days[value];
}
