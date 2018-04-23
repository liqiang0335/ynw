/**
 *从左到右依次执行函数(同步或异步)
 *
 */
const pipeAsyncFunctions = (...fns) => arg =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
