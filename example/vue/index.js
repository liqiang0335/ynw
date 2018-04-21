import Vue from "vue";
import plugin from "./src/plugin"; //插件
import "./src/dynamic"; //动态导入
import "./src/codeSplit"; //按需导入

Vue.use(plugin);

new Vue({
  el: "#app"
});
