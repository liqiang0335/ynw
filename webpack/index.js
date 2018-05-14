const fs = require("fs");
const path = require("path");
const cwd = process.cwd();
const webpack = require("webpack");
const colors = require("colors");
const WebpackDevServer = require("webpack-dev-server");
const getPath = url => path.resolve(cwd, url);
const fns = require("../fns");
const configPath = getPath("ynw.config");

const config = require(configPath);
const optionMiddleware = require("./middleware/option");
const execMiddleware = require("./middleware/output");
const applyMiddleware = (api, middlewares) => {
  const compose = (...fn) => fn.reduce((a, b) => (...args) => b(a(...args)));
  const chain = middlewares.map(item => item(api));
  return compose(...chain);
};

/**
 * 环境参数
 */
const getContext = () => {
  const argv = fns.getParams(process.argv);

  const params = fns.merge(
    {
      htmlName: "index.html", //启动文件
      public: "/dist/", //发布目录
      key: "index",
      env: "development"
    },
    argv
  );
  const values = config.keys[params.key];
  if (!values) {
    throw new Error("KEY Not Found");
  }

  params.absolutePath = getPath(values.entry);
  params.projectPath = path.dirname(params.absolutePath);
  params.projectName = path.basename(params.projectPath);
  params.fileName = values.entry.match(/[^\/]+$/)[0];

  if (params.hot) {
    params.hot = 9999; //固定端口号
  }

  return { values, params, config };
};

/**
 * 配置文件结构
 */
const createOption = function({ values, params }) {
  const { projectPath, absolutePath, public, env, fileName } = params;
  const option = {
    mode: env,
    entry: {
      [fileName]: absolutePath
    },
    output: {
      path: projectPath + public,
      filename: "[name].bundle.js",
      chunkFilename: "chunk.[name].js"
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm"
      }
    },
    module: {},
    plugins: []
  };
  return option;
};

/**
 * Webpack 打包回调
 * @param {Function} callback
 */
const exec = callback => (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    callback(false);
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
  console.log(
    stats.toString({
      chunks: false,
      colors: true
    })
  );
  callback(true);
};

/* 运行 */

(function main() {
  const context = getContext();
  const base = createOption(context);
  const option = applyMiddleware(context, optionMiddleware)(base);
  const launch = exec(applyMiddleware(context, execMiddleware));
  const compiler = webpack(option);

  console.log("================[option]=================");
  console.log(`${JSON.stringify(option)}`.yellow);
  console.log("==============[context]===================");
  console.log(`${JSON.stringify(context)}`.green);
  console.log("==========================================");

  const { params, values } = context;
  const { hot, env } = params;
  const watchOps = { aggregateTimeout: 300, poll: 1000 };

  const package = {
    production: f => compiler.run(launch),
    development: f => {
      if (hot) {
        WebpackDevServer.addDevServerEntrypoints(option, option.devServer);
        new WebpackDevServer(compiler, option.devServer).listen(
          hot,
          "localhost",
          f => console.log(`listening on port ${hot}`.green)
        );
        return;
      }
      compiler.watch(watchOps, launch);
    }
  };
  package[env]();
})();
