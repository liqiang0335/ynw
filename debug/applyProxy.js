/**
 * 控制台打印出函数调用
 */
const applyProxy = (fn, thisArg) => {
  const ctx = thisArg || null;
  const env = process.env.NODE_ENV;
  if (env === "production") {
    return fn;
  }
  return new Proxy(fn, {
    apply(target, name, value) {
      console.log(
        `>> call %c ${target.name}`,
        "color:#e41b7c;font-weight:bold;"
      );
      target.apply(ctx, value);
    }
  });
};

module.exports = applyProxy;
