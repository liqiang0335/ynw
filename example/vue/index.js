import Vue from "vue";
import plugins from "./plugin";
import "./components";

Vue.use(plugins);

new Vue({
  el: "#app"
});
