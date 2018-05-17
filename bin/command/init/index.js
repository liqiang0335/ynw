/**
 * Add config file
 * ..................
 * ynw.config.js
 * postcss.config.js
 * babelrc
 * ..................
 */
const path = require("path");
const colors = require("colors");
const folder = "./source";

const write = async ({ fns, cwd }, name) => {
  const source = path.join(__dirname, folder, name);
  const target = path.join(cwd, name);
  if (await fns.exists(target)) {
    console.log(`>> ${name} exists`.yellow);
    return;
  }
  const content = await fns.readFile(source, "utf-8");
  await fns.writeFile(target, content, "utf-8");
  console.log(`>> write ${name} done`.green);
};

module.exports = async context => {
  const { fns } = context;
  const dir = path.join(__dirname, folder);
  const files = await fns.readdir(dir, "utf-8");
  files.forEach(file => write(context, file));
};
