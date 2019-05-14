/**
 * 依次执行队列中的同步或异步函数
 */
const nextChain = (...args) => fns => {
  let cur = 0;
  const lastIndex = fns.length - 1;
  const next = () => {
    const _next = cur == lastIndex ? f => f : next;
    fns[cur++].apply(null, [...args, _next]);
  };
  next();
};

module.exports = nextChain;
