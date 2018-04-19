import Vue from "vue";
import plugin from "./plugin";
import "./components";

Vue.use(plugin);

new Vue({
  el: "#app"
});
