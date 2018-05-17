/**
 * package
 */
const fs = require("fs");
const path = require("path");
const load = require("./middleware/load");
const webpack = load("webpack");
const colors = load("colors");
const WebpackDevServer = load("webpack-dev-server");

const execMiddleware = require("./output");
const optionMiddleware = require("./middleware");
const applyMiddleware = (api, middlewares) => {
  const compose = (...fn) => fn.reduce((a, b) => (...args) => b(a(...args)));
  const chain = middlewares.map(item => item(api));
  return compose(...chain);
};

/**
 * enable log
 */
const showLogs = ctx => logs => {
  if (!ctx.debug) return;
  if (!Array.isArray(logs)) {
    logs = [logs];
  }
  logs.forEach(item => {
    console.log("================[===]=================>");
    console.log(`${JSON.stringify(item)}`.yellow);
    console.log("================[===]=================>");
  });
};

module.exports = context => {
  if (!context.env) {
    console.log(`>> The "env" param is required`.red);
    return;
  }
  context.logs = showLogs(context);
  main(context);
};

const parseInput = context => {
  const { cwd, build, env } = context;
  const config = require(path.join(cwd, "ynw.config.js"));
  const values = config["keys"][build];
  const { entry, publicPath, envPublicPath } = values;

  const hot = context.env === "hot" ? true : false;
  const isDev = env !== "pro" ? true : false;
  const mode = isDev ? "development" : "production";
  const fileName = path.basename(entry);
  const absolutePath = path.join(cwd, entry);
  const projectPath = path.dirname(absolutePath);
  const projectName = path.basename(projectPath);
  const port = 9999;
  const extra = config.extra;

  return {
    ...context,
    hot,
    isDev,
    mode,
    fileName,
    absolutePath,
    projectName,
    projectPath,
    port,
    extra
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
      chunkFilename: `${ctx.fileName}.libs.js`
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
  const base = createOption(ctx);
  const option = applyMiddleware(ctx, optionMiddleware)(base);
  const launch = exec(applyMiddleware(ctx, execMiddleware));
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
