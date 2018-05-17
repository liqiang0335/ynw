const path = require("path");
const absolutePath = alias => {
  const cwd = process.cwd();
  const target = {};
  for (var key in alias) {
    target[key] = path.join(cwd, alias[key]);
  }
  return target;
};

module.exports = context => option => {
  const folderAlias = { "@": context.projectPath };
  Object.assign(
    option.resolve.alias,
    absolutePath(context.extra.alias),
    folderAlias
  );
  return option;
};
