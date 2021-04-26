/**
 * ----------------------------------------
 * 数组转换成ById的形式
 * @param {Array} datas
 * @param {String} [key]
 * ----------------------------------------
 */
export default function byId(datas, key = "value") {
  return datas.reduce((p, c) => {
    const k = c[key] || c.id;
    p[k] = c;
    return p;
  }, {});
}
