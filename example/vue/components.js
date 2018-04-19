// 动态导入组件
import Vue from "vue";
const comps = require.context("./comp", true, /\.vue$/);
comps.keys().forEach(url => {
  const config = comps(url);
  const matchName = url.match(/([a-zA-Z]+)\.vue$/);
  const name = matchName[1].replace(/^([a-zA-Z])/, match =>
    match.toUpperCase()
  );
  Vue.component(`yn${name}`, config.default || config);
});
