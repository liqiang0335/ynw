/**
 * ----------------------------------------
 * 遍历Source对象,从target中复制有效值
 * (即不复制值为 undefined, null,'' 的属性)
 * @param {Object} source
 * @param {Object} target
 * @reutrn {Object} source
 * ----------------------------------------
 */
const copyValue = function (source, target) {
  if (!target) {
    return source;
  }
  for (var key in source) {
    if (![undefined, null, ""].includes(target[key])) {
      source[key] = target[key];
    }
  }
  return source;
};

export default copyValue;
