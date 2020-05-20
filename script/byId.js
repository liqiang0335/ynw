/**
 * 数组转换成ById形式
 */
export default function arrayById(arr, key) {
  return arr.reduce((p, c) => {
    const value = c.key || c[key];
    if (value) {
      p[value] = c;
    }
    return p;
  }, {});
}
