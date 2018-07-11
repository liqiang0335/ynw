const path = require("path");
const load = require("../build/middleware/load");

const getDir = name => path.join(__dirname, name);

const folders = {
  common: getDir("common"),
  vue: getDir("vue"),
  react: getDir("react")
};

const write = async ({ fns, cwd }, { filePath, fileName }) => {
  const target = path.join(cwd, fileName);
  if (await fns.exists(target)) {
    console.log(`>> [ ${fileName} ] exists`);
    return;
  }
  const content = await fns.readFile(filePath, "utf-8");
  await fns.writeFile(target, content, "utf-8");
  console.log(`>> write [ ${fileName} ] done`);
};

const extraHandler = async context => {
  const { fns } = context;
  const folder = getDir("extra");
  const files = await fns.readdir(folder, "utf-8");
  files.forEach(fileName => {
    const command = fileName.replace(/\.[a-z]+$/, "");
    if (context[command]) {
      const filePath = path.join(folder, fileName);
      write(context, { filePath, fileName });
    }
  });
};

const commandHandler = context => {
  const { fns, init } = context;
  if (!folders[init]) {
    return;
  }
  createAllFiles(folders.common);
  createAllFiles(folders[init]);

  async function createAllFiles(folder) {
    const files = await fns.readdir(folder, "utf-8");
    files.forEach(fileName => {
      const filePath = path.join(folder, fileName);
      write(context, { filePath, fileName });
    });
  }
};

module.exports = async context => {
  const { fns, init } = context;
  if (!init) {
    return;
  }
  const pipes = [extraHandler, commandHandler];
  pipes.forEach(fn => fn(context));
};
