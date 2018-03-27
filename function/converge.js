const converge = (converger, fns) => (...args) =>
  converger(...fns.map(fn => fn.apply(null, args)));

module.exports = converge;

/* 

const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4


*/
