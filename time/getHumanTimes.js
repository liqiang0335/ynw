import dayjs from "dayjs";
import formatDuration from "ynw/time/formatDuration";
/**
 * ----------------------------------------
 * 计算剩余天数
 * @param {Number}  expireTimestamp - 过期时间戳
 * @description
 * expireHuman('1650556799000') => 剩余5天
 * ----------------------------------------
 */
export function expireHuman(expireTimestamp) {
  const off = expireTimestamp - Date.now();
  const isOut = off < 0;
  const title = isOut ? "过期" : "剩余";
  const count = formatDuration(off).day;
  const desc = `${title}${count}天`;
  const dayStr = dayjs(expireTimestamp).format("YYYY-MM-DD");

  return {
    count,
    title,
    desc,
    isOut,
    dayStr,
  };
}
