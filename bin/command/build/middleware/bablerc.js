const path = require("path");
const fs = require("fs");

const detectReact = context => {
  const { absolutePath, cwd } = context;
  const filePath = absolutePath + ".js";
  const entry = fs.readFileSync(filePath, "utf-8");
  const isReact = !!entry.match(/import.+from\s+"react"/);
  const babel = path.join(cwd, ".babelrc");
  const bcContent = fs.readFileSync(babel, "utf-8");
  const valid = !!bcContent.match(/react/);
  if (isReact) {
    if (valid) return;
  }
};

module.exports = context => option => {
  const { browsers, cwd } = context;
  const has = Array.isArray(browsers) && browsers.length > 0;
  const value = has ? JSON.stringify(browsers) : `["ie >= 9"]`;
  const file = path.join(cwd, ".babelrc");
  const doc = fs.readFileSync(file, "utf-8");
  const content = doc.replace(/"browsers.+?\]/, `"browsers": ${value}`);
  fs.writeFileSync(file, content, "utf-8");
  return option;
};
