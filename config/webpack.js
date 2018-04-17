/**
 * @param key
 * @param env
 *
 * 开发环境打包
 * node public/config/webpack key=test
 *
 * 生产环境打包
 * node config/webpack key=test env=production
 *
 */
///////////////////////////////

const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const colors = require("colors");
const _ = require("lodash");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { exec, getParam, writeTimestamp, colorLog } = require("./fn");
const entryConfig = require("./entry");

const getDir = url => path.join(__dirname, "../", url);
const env = getParam("env") || "development";

const entryKey = getParam("key");
if (!(entryKey && entryConfig[entryKey])) {
  console.log(`key匹配错误`);
}

//取值
const entryValue = entryConfig[entryKey];
const isPlain = _.isObject(entryValue);
const relativePath = isPlain ? entryValue.entry : entryValue;
const fileName = relativePath.match(/[^\/]+$/);
const absolutePath = getDir(relativePath);

// 配置选项
const option = {
  mode: env,
  entry: {
    [fileName]: absolutePath
  },
  output: {
    path: path.dirname(absolutePath),
    filename: "[name].bundle.js",
    publicPath: "/kdht/public/yueniu/"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm",
      "@module": path.join(__dirname, "../module"),
      "@common": path.join(__dirname, "../public/common"),
      "@yueniu": path.join(__dirname, "../public/yueniu")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "uglify-template-string-loader"],
        exclude: [getDir("node_modules")]
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
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "assets/[name].[hash:7].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: []
};

/* MAIN */

(function() {
  const log = colorLog(0);
  const callback = function() {
    if (isPlain && entryValue.html) {
      writeTimestamp(getDir(entryValue.html));
    }
    log(env);
  };

  const package = {
    development() {
      webpack(option).watch(
        {
          aggregateTimeout: 300,
          poll: 1000
        },
        exec(callback)
      );
    },
    production() {
      webpack(option).run(exec(callback));
    }
  };

  //打包
  package[env]();
})();
