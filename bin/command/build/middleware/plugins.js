const load = require("./load");
const webpack = load("webpack");
const OptimizeCssAssetsPlugin = load("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = load("vue-loader/lib/plugin");
const MiniCssExtractPlugin = load("mini-css-extract-plugin");

const SplitPlugin = new webpack.optimize.SplitChunksPlugin({
  chunks: "all",
  minSize: 30000,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  name: "libs",
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

const cssMin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: load("cssnano"),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

const cssExtract = new MiniCssExtractPlugin({
  filename: "style.bundle.css",
  chunkFilename: "style.libs.css"
});

module.exports = context => option => {
  const { extractCSS, splitModules, hot } = context;
  option.plugins.push(new VueLoaderPlugin());
  if (!hot) {
    extractCSS && option.plugins.push(cssMin);
    extractCSS && option.plugins.push(cssExtract);
    splitModules && option.plugins.push(SplitPlugin);
  }
  return option;
};
