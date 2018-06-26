import { Message } from "element-ui";

export default {
  install(Vue, option) {
    Vue.prototype.$error = message => Message({ type: "error", message });
    Vue.prototype.$success = message => Message({ type: "success", message });
    Vue.prototype.$warning = message => Message({ type: "warning", message });

    Vue.mixin({
      methods: {
        $setState(key, value) {
          this.$store.commit("setState", { key, value });
        }
      }
    });
  }
};
