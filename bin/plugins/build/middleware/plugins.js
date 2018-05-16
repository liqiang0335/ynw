const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Splite
 */
const SplitPlugin = new webpack.optimize.SplitChunksPlugin({
  chunks: "all",
  minSize: 30000,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  name: "modules",
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
 * 压缩 CSS
 */

const cssMin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: require("cssnano"),
  cssProcessorOptions: { discardComments: { removeAll: true } },
  canPrint: true
});

/**
 * 提取 CSS
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
