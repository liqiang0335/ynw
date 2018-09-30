const fs = require("fs");

module.exports = context => files => {
  const { projectPath, hot, fileName, buildTime, env } = context;
  if (hot) return files;

  const file = `${projectPath}/dist/${fileName}.bundle.js`;
  const content = fs.readFileSync(file, "utf-8");
  const extra = [];
  extra.push(`window.WEBPACK_BUILD_TIME = "${buildTime}";`);
  extra.push(`window.WEBPACK_ENV = "${env}";`);
  const target = extra.join("") + content;
  fs.writeFileSync(file, target);
};
