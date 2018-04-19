// 动态导入组件
import Vue from "vue";
const context = require.context("./comp", true, /\.vue$/);
context.keys().forEach(url => {
  const config = context(url);
  const matchName = url.match(/([a-zA-Z]+)\.vue$/);
  const name = matchName[1].replace(/^([a-zA-Z])/, match =>
    match.toUpperCase()
  );
  Vue.component(`yn${name}`, config.default);
});
