module.exports.install = function(Vue) {
  //注入组件
  Vue.mixin({
    data() {
      return {
        $msg: "Hello"
      };
    },
    methods: {
      $setState(path, reducer) {
        this.$store.commit({
          type: "setState",
          path,
          reducer
        });
      }
    }
  });
};
