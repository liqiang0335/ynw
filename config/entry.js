/* 
  注意**相对根目录的路径
   node config/webpack key=test
*/
module.exports = {
  start: {
    entry: "./public/contract/index",
    html: "./WEB-INF/jsp/index/index.jsp",
    publicPath: "",
    envPublicPath: ""
  }
};
