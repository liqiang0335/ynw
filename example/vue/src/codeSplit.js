//3秒后导入组件
setTimeout(f => {
  require.ensure(
    [],
    require => {
      require("./comp/chunk-a");
    },
    "lib"
  );
}, 3000);

//3秒后导入组件
setTimeout(f => {
  require.ensure(
    [],
    require => {
      require("./comp/chunk-b");
    },
    "lib"
  );
}, 3000);
