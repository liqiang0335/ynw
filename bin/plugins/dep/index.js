/**
 * add dependencies to package.json
 */

const fs = require("fs");
const path = require("path");
const colors = require("colors");

module.exports = context => {
  const { paths, fns } = context;
  const config = require(paths.package);
  const source = require("./depandence");
  config.dependencies = fns.merge(config.dependencies, source.dependencies);
  config.devDependencies = fns.merge(
    config.devDependencies,
    source.devDependencies
  );
  const data = JSON.stringify(config);
  fs.writeFile(paths.package, data, "utf-8", err => {
    if (err) {
      console.log(`${err}`.red);
      return;
    }
    console.log(`>>> add dependencies done`.green);
  });
};
