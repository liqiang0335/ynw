const webpack = require("webpack");

const plugin = new webpack.optimize.SplitChunksPlugin({
  chunks: "all",
  minSize: 30000,
  minChunks: 1,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  name: true,
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

module.exports = context => option => {
  option.plugins.push(plugin);
  return option;
};
