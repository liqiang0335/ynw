/**
 * 比较版本号
 * @param {String} newVal - 格式: 1.0.1
 * @param {String} oldVal
 *
 * @return {Boolean}
 */
export default function isNewVersion(newVal, oldVal) {
  const reg = /\d{1,3}\.\d{1,3}\.\d{1,3}/;
  if (!(reg.test(newVal) && reg.test(oldVal))) {
    throw new Error("版本号格式不对");
  }

  const n = newVal.split(".").map(it => +it);
  const o = oldVal.split(".").map(it => +it);

  if (n[0] > o[0]) return true;
  if (n[0] < o[0]) return false;
  if (n[1] > o[1]) return true;
  if (n[1] < o[1]) return false;
  if (n[2] > o[2]) return true;
  if (n[2] < o[2]) return false;

  return false;
}
