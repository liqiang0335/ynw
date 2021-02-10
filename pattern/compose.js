/**
 * 函数拼接
 */
const compose = (...fns) => fns.reduce((a, b) => (...args) => a(b(...args)));

export default compose;
