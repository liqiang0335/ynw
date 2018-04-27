/* 
  注意**相对根目录的路径
   node config/webpack key=test
*/
module.exports = {
  alias: {},
  keys: {
    index: {
      entry: "example/index",
      publicPath: "/dist/"
    }
  }
};
