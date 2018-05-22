const path = require("path");
const load = require("./load");
const webpack = load("webpack");

module.exports = context => option => {
  const { hot, port, fileName, absolutePath, projectPath, devServer } = context;
  if (!context.hot) return option;

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
    devServer
  );
  option.plugins.push(new webpack.HotModuleReplacementPlugin());
  option.plugins.push(new webpack.NamedModulesPlugin());
  return option;
};
