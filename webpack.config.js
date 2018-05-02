const path = require("path");
const webpack = require("webpack");
const node_modules = path.join(__dirname, "./node_modules");
const root = path.join(__dirname);

module.exports = {
  mode: "production",
  entry: "./ynw",
  output: {
    path: root,
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [node_modules]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
