module.exports.install = function(Vue) {
  Vue.mixin({
    data() {
      return {
        msg: "Hello"
      };
    },
    methods: {
      setState(path, reducer) {
        this.$store.commit({
          type: "setState",
          path,
          reducer
        });
      }
    }
  });
};
