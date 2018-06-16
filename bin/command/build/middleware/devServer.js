const path = require("path");
const load = require("./load");
const webpack = load("webpack");
const fs = require("fs");

module.exports = context => option => {
  const {
    hot,
    port,
    fileName,
    absolutePath,
    projectPath,
    devServer,
    fns
  } = context;
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

  //add mock.api
  const mockFile = path.join(projectPath, "mock.js");
  if (fs.existsSync(mockFile)) {
    const routers = require(mockFile);
    option.devServer.before = routers;
  }

  option.plugins.push(new webpack.HotModuleReplacementPlugin());
  option.plugins.push(new webpack.NamedModulesPlugin());
  return option;
};
