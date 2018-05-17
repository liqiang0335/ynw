const load = require("./load");
const webpack = load("webpack");
const OptimizeCssAssetsPlugin = load("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = load("vue-loader/lib/plugin");
const MiniCssExtractPlugin = load("mini-css-extract-plugin");

/**
 * Splite
 */
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

/**
 * CSS Mini
 */

const cssMin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: load("cssnano"),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

/**
 * CSS Extract
 */

const cssExtract = new MiniCssExtractPlugin({
  filename: "style.bundle.css",
  chunkFilename: "style.libs.css"
});

module.exports = context => option => {
  option.plugins.push(SplitPlugin);
  option.plugins.push(new VueLoaderPlugin());
  if (!context.isDev) {
    option.plugins.push(cssMin);
    option.plugins.push(cssExtract);
  }
  return option;
};
