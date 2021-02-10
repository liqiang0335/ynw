/**
 * ----------------------------------------
 * 数组转换成ById形式
 * @param {Array} arr
 * @param {String} [key = 'id']
 * ----------------------------------------
 */
export default function arrayById(arr, key = "id") {
  return arr.reduce((p, c) => {
    p[c[key]] = c;
    return p;
  }, {});
}
