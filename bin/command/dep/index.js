/**
 * add dependencies to package.json
 */

const fs = require("fs");
const path = require("path");
const load = require("../build/middleware/load");

module.exports = context => {
  const cwd = process.cwd();
  const { fns } = context;
  const package = path.join(cwd, "package.json");
  const config = require(package);
  const source = require("./depandence");
  config.dependencies = fns.merge(config.dependencies, source.dependencies);
  config.devDependencies = fns.merge(
    config.devDependencies,
    source.devDependencies
  );
  const data = JSON.stringify(config);
  fs.writeFile(package, data, "utf-8", err => {
    if (err) {
      console.log(`>> write dep err: ${err}`);
      return;
    }
    console.log(`>> add dependencies done`);
  });
};
