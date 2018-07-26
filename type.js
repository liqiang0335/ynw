/**
 * 是否为有效的JSON格式
 */
const isValidJSON = obj => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * 集合是否为空
 * 空对象, 空数组, 空字符串
 */
const isEmpty = val => val == null || !(Object.keys(val) || val).length;

module.exports = {
  isValidJSON,
  isEmpty
};
