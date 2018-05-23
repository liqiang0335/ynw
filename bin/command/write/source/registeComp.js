//注册VUE组件
(function() {
  const compFolder = "./comp";
  const getFolderName = path => {
    const match = path.match(/\w+?(?=\/)/g);
    if (!match) return "";
    return match.map(item => item.replace(/\//g, "")).join("-") + "-";
  };
  const context = require.context(compFolder, true, /\.vue$/);
  context.keys().forEach(path => {
    const name = path.match(/([\w\-]+)\.vue$/)[1];
    const folder = getFolderName(path);
    const option = context(path).default;
    Vue.component(`yn-${folder}${name}`, option);
  });
})();
