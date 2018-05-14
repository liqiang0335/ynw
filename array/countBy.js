const countBy = (arr, fn) =>
  arr.map(fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

module.exports = countBy;
