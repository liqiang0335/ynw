const load = require("./load");
const webpack = load("webpack");
const OptimizeCssAssetsPlugin = load("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = load("vue-loader/lib/plugin");
const MiniCssExtractPlugin = load("mini-css-extract-plugin");

const SplitPlugin = context => {
  const { fileName } = context;
  return new webpack.optimize.SplitChunksPlugin({
    chunks: "all",
    minSize: 30000, //形成一个新代码块最小的体积
    minChunks: 1, //最小应该被引用的次数
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: "~",
    name: `libs`,
    cacheGroups: {
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      },
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      }
    }
  });
};

const cssMin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: load("cssnano"),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

module.exports = context => option => {
  const { extractCSS, splitModules, fileName } = context;
  option.plugins.push(new VueLoaderPlugin());

  if (extractCSS) {
    option.plugins.push(cssMin);
    option.plugins.push(
      new MiniCssExtractPlugin({
        filename: `${fileName}.bundle.css`,
        chunkFilename: `${fileName}.[id].css`
      })
    );
  }

  if (splitModules) {
    option.plugins.push(SplitPlugin(context));
  }
  return option;
};
