/**
 * Add config file
 * ..................
 * ynw.config.js
 * postcss.config.js
 * babelrc
 * ..................
 */

const fs = require("fs");
const path = require("path");
const util = require("util");
const exists = util.promisify(fs.exists);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const colors = require("colors");

const write = async name => {
  const source = path.join(__dirname, "./source", name);
  const target = path.join(process.cwd(), name);
  if (await exists(target)) {
    console.log(`>> ${name} exists`.yellow);
    return;
  }
  const content = await readFile(source, "utf-8");
  await writeFile(target, content, "utf-8");
  console.log(`>> write ${name} done`.green);
};

module.exports = context => {
  write(".babelrc");
  write("postcss.config.js");
  write("ynw.config.js");
};
