const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const colors = require("colors");
const WebpackDevServer = require("webpack-dev-server");

const execMiddleware = require("./output");
const optionMiddleware = require("./middleware");
const applyMiddleware = (api, middlewares) => {
  const compose = (...fn) => fn.reduce((a, b) => (...args) => b(a(...args)));
  const chain = middlewares.map(item => item(api));
  return compose(...chain);
};

module.exports = context => {
  if (!context.env) {
    console.log(`>> The "env" param is required`.red);
    return;
  }
  main(context);
};

const parseInput = context => {
  const config = require(path.join(cwd, "ynw.config.js"));
  const values = config.ynw[key];
  const { entry, publicPath, envPublicPath } = values;

  const hot = context.env === "hot" ? true : false;
  const isDev = env !== "pro" ? true : false;
  const mode = isDev ? "development" : "production";
  const fileName = path.basename(entry);
  const absolutePath = path.join(cwd, entry);
  const projectPath = path.dirname(absolutePath);
  const projectName = path.basename(projectPath);
  const port = 9999;
  const alias = config.alias;

  const ctx = {
    ...context,
    hot,
    isDev,
    mode,
    fileName,
    absolutePath,
    projectName,
    projectPath,
    port,
    alias
  };
};

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

const createOption = ctx => {
  return {
    mode: ctx.mode,
    entry: { [ctx.fileName]: ctx.absolutePath },
    output: {
      path: ctx.projectPath + "/dist/",
      filename: "[name].bundle.js",
      chunkFilename: "chunk.[name].js"
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: { vue$: "vue/dist/vue.esm" }
    },
    module: {},
    plugins: []
  };
};

const main = context => {
  const ctx = parseInput(context);
  console.log("================[ctx]=================");
  console.log(`${JSON.stringify(ctx)}`.yellow);

  return;

  const baseOps = createOption(ctx);
  const option = applyMiddleware(ctx, optionMiddleware)(baseOps);
  const launch = exec(applyMiddleware(context, execMiddleware));

  const watchOps = { aggregateTimeout: 300, poll: 1000 };
  const compiler = webpack(option);

  const package = {
    production: f => compiler.run(launch),
    development: f => {
      if (ctx.hot) {
        WebpackDevServer.addDevServerEntrypoints(option, option.devServer);
        new WebpackDevServer(compiler, option.devServer).listen(
          ctx.port,
          "localhost",
          f => console.log(`listening on port ${ctx.port}`.green)
        );
        return;
      }
      compiler.watch(watchOps, launch);
    }
  };
  package[ctx.mode]();
};
