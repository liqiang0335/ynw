const path = require("path");
const fs = require("fs");

module.exports = context => option => {
  const { browsers, browsersDefault } = context;
  const defaultValue = browsersDefault
    ? JSON.stringify(browsersDefault)
    : `["> 2%", "ie >= 9"]`;
  const has = Array.isArray(browsers) && browsers.length > 0;
  const value = has ? JSON.stringify(browsers) : defaultValue;
  const cwd = process.cwd();
  const file = path.join(cwd, ".babelrc");
  const doc = fs.readFileSync(file, "utf-8");
  const content = doc.replace(/"browsers.+?\]/, `"browsers": ${value}`);
  fs.writeFileSync(file, content, "utf-8");
  return option;
};
