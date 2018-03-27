/**
 * 依次执行队列中的同步或异步函数
 *
 */
const chainAsync = fns => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};

module.extends = chainAsync;

/* 

chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
  }
]);

*/
