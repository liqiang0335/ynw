/**
 * Add config file
 * postcss.config.js
 * ynw.config.js
 * .babelrc
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const write = async name => {
  const file = path.resolve(__dirname, name);
  if (await exists(file)) {
  }
};

module.exports = context => {
  const { paths, commands } = context;
  write("babelrc");
  write("postcss");
  write("ynw");
};
