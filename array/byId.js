/**
 * ----------------------------------------
 * 数组转换成ById的形式
 * @param {Array} datas
 * @param {String} [key]
 * ----------------------------------------
 */
export default function byId(datas, key = "id") {
  return datas.reduce((p, c) => {
    const k = c[key] || c._id;
    p[k] = c;
    return p;
  }, {});
}
