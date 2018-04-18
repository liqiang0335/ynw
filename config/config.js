/* 
  注意**相对根目录的路径
   node config/webpack key=test
*/
module.exports = {
  publicPath: "",
  envPublicPath: "",
  //相对于根目录
  alias: {
    "@m": "public/base/module",
    "@c": "public/pages/common",
    "@center": "public/pages/center"
  },
  entry: {
    register: "public/manage/login/register",
    login: "public/manage/login/login",
    number: "public/pages/seriesNumber/index",
    moment: {
      entry: "public/pages/moment/index",
      html: "public/pages/moment/index.html"
    },
    invite: {
      entry: "./public/pages/invite/index",
      html: "./WEB-INF/jsp/web/inviteToJoinGroup.jsp"
    },
    index: "./public/pages/center/index"
  }
};
