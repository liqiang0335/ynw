const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    main: "./entry"
  },
  output: {
    path: "./",
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
        exclude: "/node_modules/"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: []
};
