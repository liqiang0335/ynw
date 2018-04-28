/**
 * 根据函数返回的布尔值对数组进行分组
 */
export const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
    [],
    []
  ]);
