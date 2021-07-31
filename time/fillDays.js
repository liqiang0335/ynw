import dayjs from "dayjs";
/**
 * ----------------------------------------
 * 在区间内填充日期
 * @param {Number} count - 数量
 * @param {String/Date} [end] - 截止日期, 默认今天
 * @param {Number} [format] - 日期格式
 * ----------------------------------------
 */
export default function fillDays({
  count,
  end = new Date(),
  format = "YYYY.MM.DD",
}) {
  const res = [];
  const _end = dayjs(end);
  const len = Array.from({ length: count }, (_, i) => i);
  for (let index of len) {
    const before = _end.subtract(index, "day").format(format);
    res.push(before);
  }
  return res.reverse();
}
