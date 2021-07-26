```js
import dayjs from "dayjs";
const today = dayjs(new Date());

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
const DAY_CHINA = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "日",
};
export function getDayText() {
  return "星期" + DAY_CHINA[today.day()];
}
```
