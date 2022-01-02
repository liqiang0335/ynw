/**
 * ----------------------------------------
 * 从另一个对象中复制已有的属性, 没有的不复制
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
    if (target[key] !== undefined) {
      source[key] = target[key];
    }
  }

  return source;
};

export default copyValue;
