import Vue from "vue";
import plugins from "./plugin";
import "./comps";

Vue.use(plugins);

new Vue({
  el: "#app",
  data() {
    return {};
  }
});
