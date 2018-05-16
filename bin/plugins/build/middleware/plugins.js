const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = context => option => {
  if (!context.isDev) {
    option.plugins.push(
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      })
    );
  }
  return option;
};
