const fs = require("fs");

module.exports = context => files => {
  const { projectPath, hot, fileName, buildTime, usePWA, env } = context;
  if (hot) return files;

  const file = `${projectPath}/dist/${fileName}.bundle.js`;
  const content = fs.readFileSync(file, "utf-8");
  const pwa = usePWA || "";
  const extra = [];
  extra.push(`window.WEBPACK_BUILD_TIME = "${buildTime}";`);
  extra.push(`window.WEBPACK_PWA = "${pwa}";`);
  extra.push(`window.WEBPACK_ENV = "${env}";`);
  const target = content + extra.join("");
  fs.writeFileSync(file, target);
};
