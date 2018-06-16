/**
 * 路径均为相对根目录
 * 仅在生产环境支持提取样式和分离第三方模块
 * `ynw --version` 版本号
 * `ynw --init` : 添加配置文件
 * `ynw --dep`: 追加 NPM 依赖
 * `ynw build=test env=dev` : 开发环境构建
 * `ynw build=test env=hot` : 开发环境构建 + 热替换
 * `ynw build=test env=pro` : 生产环境构建
 */
module.exports = {
  extra: {
    browsersDefault: ["ie >= 9"], //设置默认打包的版本
    alias: {}, //全局的别名(自动指定"@"为入口文件夹的别名)
    devServer: {} //webpack服务器选项
  },
  keys: {
    test: {
      entry: "test/demo", //入口(不写后缀名)
      publicPath: "", //生产环境的 publicPath选项
      envPublicPath: "", //开发环境的 publicPath选项
      extractCSS: false, //提取CSS到单独文件(生产环境)
      splitModules: false, //分离第三方模块到单独文件(生产环境)
      browsers: [] //设置打包目标的版本
    }
  }
};
