import dayjs from "dayjs";
const today = dayjs(new Date());
const DayChina = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "日",
};

export function getDayText() {
  return "星期" + DayChina[today.day()];
}
