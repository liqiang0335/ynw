//3秒后导入组件
setTimeout(f => {
  require.ensure(
    ["./test"],
    require => {
      require("./test");
    },
    "abcd"
  );
}, 3000);
