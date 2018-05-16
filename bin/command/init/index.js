/**
 * Add config file
 * ..................
 * ynw.config.js
 * postcss.config.js
 * babelrc
 * ..................
 */
///////////////////////////////////////////////////////////////
const files = [".babelrc", "postcss.config.js", "ynw.config.js"];
///////////////////////////////////////////////////////////////
const fs = require("fs");
const path = require("path");
const colors = require("colors");
const write = async ({ fns, cwd }, name) => {
  const source = path.join(__dirname, "./source", name);
  const target = path.join(cwd, name);
  if (await fns.exists(target)) {
    console.log(`>> ${name} exists`.yellow);
    return;
  }
  const content = await fns.readFile(source, "utf-8");
  await fns.writeFile(target, content, "utf-8");
  console.log(`>> write ${name} done`.green);
};

module.exports = context => {
  files.forEach(file => write(context, file));
};
