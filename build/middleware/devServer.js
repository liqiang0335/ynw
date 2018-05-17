const webpack = require("webpack");
const path = require("path");

module.exports = context => option => {
  const { hot, port, fileName, absolutePath, projectPath, extra } = context;
  if (!hot) return option;

  option.entry = {
    [fileName]: [
      `webpack-dev-server/client?http://localhost:${port}/`,
      "webpack/hot/dev-server",
      absolutePath
    ]
  };

  option.devServer = Object.assign(
    {
      hot: true,
      inline: true,
      contentBase: projectPath,
      publicPath: "/dist/",
      open: true
    },
    extra.devServer
  );
  option.plugins.push(new webpack.HotModuleReplacementPlugin());
  option.plugins.push(new webpack.NamedModulesPlugin());
  return option;
};
