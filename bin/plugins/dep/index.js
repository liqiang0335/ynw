/**
 * 添加依赖到 package.json
 */

const fs = require("fs");
const path = require("path");

module.exports = context => {
  const { paths, commands, fns } = context;
  if (!commands.dep) {
    return;
  }
  const config = require(paths.package);
  const source = require("./depandence");
  fns.merge(config.dependencies, source.dependencies);
  fns.merge(config.devDependencies, source.devDependencies);
  const data = JSON.stringify(config);
  fs.writeFile(paths.package, data, "utf-8", err => console.log(err));
};
