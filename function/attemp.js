/**
 * 尝试执行函数
 * 要么返回结果, 要么Error对象, 不会中断执行
 */
const attemp = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

module.exports = attemp;
