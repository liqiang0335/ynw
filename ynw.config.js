////////////////////////////////////
/**
 * 配置文件
 */
const config = {
  webpack: {
    alias: {},
    devServer: {}
  },
  ynw: {
    index: {
      entry: "./example/index",
      publicPath: "/dist/"
    }
  }
};
////////////////////////////////////
////////////////////////////////////
const build = require("./webpack");
build(config);
