/**
 * 添加服务器选项
 */
const webpack = require("webpack");
const path = require("path");

module.exports = ({ params, values, config }) => option => {
  const { key, hot, fileName } = params;
  if (!hot) return option;

  option.entry = {
    [fileName]: [
      `webpack-dev-server/client?http://localhost:${hot}/`,
      "webpack/hot/dev-server",
      params.absolutePath
    ]
  };

  option.devServer = Object.assign(
    {
      hot: true,
      inline: true,
      contentBase: params.projectPath,
      publicPath: params.public,
      open: true
    },
    config.devServer
  );
  option.plugins.push(new webpack.HotModuleReplacementPlugin());
  option.plugins.push(new webpack.NamedModulesPlugin());
  return option;
};
