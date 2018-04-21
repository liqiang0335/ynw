// 动态导入组件
import Vue from "vue";
const context = require.context("./comp", false, /\.vue$/);
context.keys().forEach(url => {
  const config = context(url);
  const name = url.match(/([a-zA-Z]+)\.vue$/)[1].toUpperCase();
  Vue.component(`yn${name}`, config.default);
});
