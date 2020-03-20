import dayjs from "dayjs";
export const TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";

/**
 * 时间转换
 * @param {String} value
 */
export default function timeFormat(value) {
  return dayjs(new Date(value)).format(TIME_FORMAT);
}
