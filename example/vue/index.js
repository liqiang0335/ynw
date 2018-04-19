import Vue from "vue";
import plugin from "./plugin"; //插件
import "./dynamic"; //动态导入
import "./codeSplit"; //按需导入

Vue.use(plugin);

new Vue({
  el: "#app"
});
