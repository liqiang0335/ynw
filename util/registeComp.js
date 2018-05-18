/**
 * 注册组件
 */
module.exports = (Vue, url) => {
  const hash = {};
  const context = require.context(url, true, /\.vue$/);
  context.keys().forEach(path => {
    const option = context(path).default;
    const name = path.match(/([\w\-]+)\.vue$/)[1];
    if (hash[name]) {
      throw new Error(`${name} duplicate...`);
    }
    Vue.component(`yn-${name}`, option);
    hash[name] = 1;
  });
};
