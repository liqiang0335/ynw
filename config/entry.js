/* 
  注意**相对根目录的路径
   node config/webpack key=test
*/
module.exports = {
  m: {
    entry: "./public/contract/index",
    html: "./WEB-INF/jsp/index/index.jsp"
  },
  yn: {
    entry: "./public/yueniu/index",
    public: {
      env: "/kdht/public/yueniu/",
      pro: "/public/yueniu/"
    }
  }
};
