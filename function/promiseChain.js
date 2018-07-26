/**
 * 将函数组成 Promise链调用
 */
const promiseChain = (...fns) => arg =>
  fns.reduce((p, next) => p.then(next), Promise.resolve(arg));

module.exports = promiseChain;
