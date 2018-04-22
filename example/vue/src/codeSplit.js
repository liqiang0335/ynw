import Vue from "vue";

/**
 * 代码分隔
 */
Vue.component("async-comp-b", resolve => {
  setTimeout(() => {
    import(/* webpackChunkName:"footer" */ "./comp/b").then(comp => {
      resolve(comp.default);
    });
  }, 1000);
});

Vue.component("async-comp-a", resolve => {
  setTimeout(() => {
    import(/* webpackChunkName:"footer" */ "./comp/a").then(comp => {
      resolve(comp.default);
    });
  }, 1000);
});
