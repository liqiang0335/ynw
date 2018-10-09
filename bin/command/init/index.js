const path = require("path");
const load = require("../build/middleware/load");

const overrides = new Set([".babelrc", ".eslintrc.js"]);

const write = async ({ fns, cwd }, { filePath, fileName }) => {
  const target = path.join(cwd, fileName);
  if (!overrides.has(fileName) && (await fns.exists(target))) {
    console.log(`>> [ ${fileName} ] exists`);
    return;
  }
  const content = await fns.readFile(filePath, "utf-8");
  await fns.writeFile(target, content, "utf-8");
  console.log(`>> write [ ${fileName} ] done`);
};

module.exports = async context => {
  const { fns, init } = context;
  if (!init) {
    return;
  }
  const source = path.join(__dirname, "./source");
  const files = await fns.readdir(source, "utf-8");
  files.forEach(fileName => {
    const filePath = path.join(source, fileName);
    write(context, { filePath, fileName });
  });
};
