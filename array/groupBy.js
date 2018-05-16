/**
 * 分组
 */
const groupBy = (arr, fn) =>
  arr.map(fn).reduce((acc, cur, i) => {
    acc[cur] = (acc[cur] || []).concat(arr[i]);
    return acc;
  }, {});

module.exports = groupBy;
