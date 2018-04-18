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
const compose = (...fn) => fn.reduce((a, b) => (...args) => a(b(...args)));
const { exec, getParam } = require("./fn");
const entryConfig = require("./entry");
const optionMiddleware = require("./middleware/option");
const execMiddleware = require("./middleware/exec");

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
const createOption = function(context, middlewares) {
  const getDir = url => path.join(__dirname, "../", url);
  const { value, env, valueIsObj } = context;

  const relativePath = valueIsObj ? value.entry : value;
  const fileName = relativePath.match(/[^\/]+$/);
  const absolutePath = getDir(relativePath);

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
      extensions: [".js", ".vue"],
      alias: { vue$: "vue/dist/vue.esm" }
    }
  };

  return compose(middlewares)(option);
};

/* MAIN */

(function() {
  const package = {
    development() {
      webpack(option).watch(
        {
          aggregateTimeout: 300,
          poll: 1000
        },
        exec(compose(execMiddleware))
      );
    },
    production() {
      webpack(option).run(exec(callback));
    }
  };

  //打包
  package[env]();
})();
