/**
 * Add config file
 * ..................
 * ynw.config.js
 * postcss.config.js
 * babelrc
 * ..................
 */
const path = require("path");
const load = require("../build/middleware/load");
const folder = "./source";

const write = async ({ fns, cwd }, name) => {
  const source = path.join(__dirname, folder, name);
  const target = path.join(cwd, name);
  if (await fns.exists(target)) {
    console.log(`>> ${name} exists`);
    return;
  }
  const content = await fns.readFile(source, "utf-8");
  await fns.writeFile(target, content, "utf-8");
  console.log(`>> write ${name} done`);
};

module.exports = async context => {
  const { fns } = context;
  const dir = path.join(__dirname, folder);
  const files = await fns.readdir(dir, "utf-8");
  files.forEach(file => write(context, file));
};
