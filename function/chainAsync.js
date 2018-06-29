/**
 * 依次执行队列中的同步或异步函数
 */
const chainAsync = fns => {
  let cur = 0;
  const next = () => fns[cur++](next);
  next();
};

module.exports = chainAsync;
