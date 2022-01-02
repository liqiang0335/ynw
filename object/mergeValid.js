/**
 * ----------------------------------------
 * 合并有效的属性
 * @param {Object} source
 * @param {Object} target
 * @return {Object} source
 * ----------------------------------------
 */
const mergeValid = (source, target) => {
  for (let key in target) {
    const value = target[key];
    if (!["", undefined, null].includes(value)) {
      source[key] = value;
    }
  }
  return source;
};

export default mergeValid;
