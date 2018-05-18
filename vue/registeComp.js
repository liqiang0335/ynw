/**
 * 注册组件
 */
module.exports = (url, callback) => {
  const hash = {};
  const context = require.context(url, true, /\.vue$/);
  context.keys().forEach(path => {
    const option = context(path).default;
    const name = path.match(/([\w\-]+)\.vue$/)[1];
    if (hash[name]) {
      throw new Error(`${name} duplicate...`);
    }
    if (typeof callback == "function") {
      callback({ name, option });
    }
    hash[name] = 1;
  });
};
