/**
 * 动态导入组件
 */
import Vue from "vue";
const context = require.context("./comp", false, /\.vue$/);
context.keys().forEach(path => {
  const config = context(path);
  const option = config.default; //配置选项
  const name = path.match(/([a-zA-Z]+)\.vue$/)[1];
  Vue.component(`yn-${name}`, option);
});
