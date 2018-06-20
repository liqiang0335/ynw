/**
 * 路径均为相对根目录
 * `ynw --version` : 产看版本号
 * `ynw --init` : 添加配置文件
 * `ynw build=app env=dev` : 开发环境构建
 * `ynw build=app env=hot` : 开发环境构建 + 热替换
 * `ynw build=app env=pro` : 生产环境构建
 */
module.exports = {
  extra: {
    browsersDefault: ["ie >= 9"],
    devServer: {},
    alias: {
      /* 自动指定了 "@" 作为 entry 文件夹的别名 */
    }
  },
  keys: {
    app: {
      entry: "./app/index", //入口(不写后缀名)
      extractCSS: false, //提取CSS到单独文件(生产环境)
      splitModules: false, //分离第三方模块到单独文件(生产环境)
      browsers: [] //设置打包目标的版本
    }
  }
};
