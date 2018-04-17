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
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { exec, getParam, writeTimestamp, colorLog } = require("./fn");
const entryConfig = require("./entry");

/**
 * 环境参数
 */
const getContext = f => {
  const key = getParam("key");
  if (!(key && entryConfig[key])) {
    console.log(`key匹配错误`);
  }
  const env = getParam("env") || "development";
  const value = entryConfig[key];
  const valueIsObj = typeof value !== "string"; //参数是对象格式

  return {
    env,
    value,
    valueIsObj
  };
};

/**
 * 配置选项
 */
const createOption = function(context) {
  const getDir = url => path.join(__dirname, "../", url);
  const { value, env, valueIsObj } = context;

  const relativePath = valueIsObj ? value.entry : value;
  const fileName = relativePath.match(/[^\/]+$/);
  const absolutePath = getDir(relativePath);

  const base = {
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
        vue$: "vue/dist/vue.esm"
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
        },
        {
          test: /\.scss/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  };

  return;
};

const log = colorLog(0);
const printTimestamp = f => {
  if (valueIsObj && entryValue.html) {
    writeTimestamp(getDir(entryValue.html));
  }
  log(env);
};

/* MAIN */

(function() {
  const callback = function() {
    printTimestamp();
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
