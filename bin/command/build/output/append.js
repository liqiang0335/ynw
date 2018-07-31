const fs = require("fs");

module.exports = context => files => {
  const { projectPath, hot, fileName, buildTime, env } = context;
  if (hot) return files;
  const file = `${projectPath}/dist/${fileName}.bundle.js`;
  const content = fs.readFileSync(file, "utf-8");
  const a = `window.WEBPACK_BUILD_TIME = "${buildTime}";`;
  const target = content + a;
  fs.writeFileSync(file, target);
};
