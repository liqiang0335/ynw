import format from "date-fns/format";
import addMilliseconds from "date-fns/add_milliseconds";

/**
 * 剩余或过期时间
 * @param {Date, Number} target - 日期或时间戳
 * @return { year, month, date, hour, minute, second, out }
 */
export default function overTime(target) {
  const baseTime = format(new Date(0), `YYYY/MM/DD 00:00:00`);
  const milliCount = new Date(target).getTime() - Date.now();

  const added = addMilliseconds(baseTime, Math.abs(milliCount));
  const year = +format(added, "YYYY") - 1970;
  const month = +format(added, "MM") - 1;
  const date = +format(added, "DD") - 1;
  const hour = +format(added, "HH");
  const minute = +format(added, "mm");
  const second = +format(added, "ss");

  const out = milliCount < 0;
  return { year, month, date, hour, minute, second, out };
}
