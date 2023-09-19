/**
 *  捕获全局未处理的promise异常
 */
window.onunhandledrejection = function (event) {
  event.preventDefault();
  let reason = event.reason;
  console.warn("未捕获异常:", reason && (reason.stack || reason));
};
