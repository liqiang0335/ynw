/**
 * 路径均为相对根目录
 */
module.exports = {
  extra: {
    alias: {},
    devServer: {}
  },
  keys: {
    index: {
      entry: "./example/index",
      publicPath: "/dist/"
    }
  }
};
