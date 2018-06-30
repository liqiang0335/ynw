const path = require("path");
const fs = require("fs");

module.exports = context => option => {
  const { browsers } = context;
  const has = Array.isArray(browsers) && browsers.length > 0;
  const value = has ? JSON.stringify(browsers) : `["ie >= 9"]`;
  const cwd = process.cwd();
  const file = path.join(cwd, ".babelrc");
  const doc = fs.readFileSync(file, "utf-8");
  const content = doc.replace(/"browsers.+?\]/, `"browsers": ${value}`);
  fs.writeFileSync(file, content, "utf-8");
  return option;
};
